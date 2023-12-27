import { UserService } from "../Services/UserService.js";
import { ParkService } from "../Services/ParkService.js";
import { CarService } from "../Services/CarService.js";
import { Spot } from "../Model/Spot.js";
import { Reservation } from "../Model/Reservation.js";
import { ReservationService } from "../Services/ReservationService.js";
import { Car } from "../Model/Car.js";

var selected_spot : Record<string, string> = {};
$().ready(function () {
    const userService = new UserService();
    const parkService = new ParkService();
    const carService = new CarService();
    const reservationService = new ReservationService();
    var loggedUserId = Number(sessionStorage.getItem("logged") ?? -1);
    var loggedUser = userService.getUserById(loggedUserId);
    if (loggedUser == null) {
        location.href = "/login.html";
    } else {
        $("#user").text(loggedUser.name ?? "");
        const my_cars : Car[] = carService.getAllCarsByUserId(loggedUser.id ?? -1);
        const car_list = $(".car-list")
        if (my_cars.length != 0) {
            var f = true;
            for (const car of my_cars) {
                if (car.has_reserv) continue;
                car_list.append(`<div class="form-check">
                                    <input class="form-check-input" type="radio" name="car" id="radio${car.plate}" value="${car.id}" ${f ? "checked":""}>
                                    <label class="form-check-label" for="radio${car.plate}">
                                    ${car.brand} ${car.year}, ${car.plate}
                                    </label>
                                </div>`);
                f = false;
            }
        } else {
            $("#booking").prop("disabled", true);
            $("#booking").hide();
            car_list.html("To make a reservation, please add a Car to your account.")
        }
    }

    const url = new URL(location.href);
    const params = url.searchParams;
    const park_id = Number(params.get("id"));
    const park = parkService.getParkById(park_id);
    if (park == null) {
        location.href = "/index.html";
    } else {
        $(".park-2").html(`<div class="row">
                                <div class="col-3 overflow-hidden d-flex justify-content-center">
                                    <img src="Resources/Images/${park.image}" />
                                </div>
                                <div class="col-auto ms-1 p-2">
                                    <h2>${park.name}</h2>
                                    <h4>${park.address}</h4>
                                </div>
                                <div class="col text-end p-2">
                                    <p class="mt-3">Vacancy<br>${park.freeParkingSpots()}/${park.totalCapacity()}</p>
                                </div>
                            </div>`)

        var matrix : Record<string, Record<string, number>[][]> = park.spots ?? {};
        var sizes = park.getSizes();
        var first = true;

        for (var floor in matrix) {
            $("ul.nav-tabs").append(`<li class="nav-item">
            <a class="nav-link${first ? " active" : ""}" href="#park${floor}" data-bs-toggle="tab">${floor}</a>
        </li>`);
            var [rows, cols] = sizes[floor];
            var park_tab = document.createElement("div");
            park_tab.id = `park${floor}`;
            park_tab.classList.add("tab-pane", "fade");
            first && park_tab.classList.add("active", "show");
            var parking_lot = document.createElement("div");
            parking_lot.classList.add("justify-content-center", "parking-lot");
            parking_lot.style.setProperty("--park-rows", String(rows));
            parking_lot.style.setProperty("--park-cols", String(cols));
            for (var row of matrix[floor]) {
                for (var col of row) {
                    var spot = document.createElement("div");
                    spot.classList.add("spot");
                    var exclass = col.state == Spot.EMPTY ? "empty" : col.state == Spot.FREE ? "free" : "taken";
                    spot.classList.add(exclass);
                    spot.innerHTML = String(col.id != -1 ? col.id : "");
                    spot.dataset.floor = floor;
                    spot.dataset.spot = String(col.id);
                    parking_lot.appendChild(spot);
                }
            }
            park_tab.appendChild(parking_lot);
            $(".tab-content").append(park_tab);
            first = false;
        }
        $(".spot.free").on("click", function() {
            if ($(this).hasClass("selected")) {
                $(this).removeClass("selected");
                $(".reservation").html("No parking spot selected");
                $(".confirm").html("No parking spot selected...")
                $("#booking").prop("disabled", true);
                selected_spot = {};
            } else {
                $(".spot").removeClass("selected");
                $(this).addClass("selected");
                var floor = $(this).data("floor");
                var id = $(this).data("spot")
                $(".reservation").html(`Floor ${floor}, Spot ${id}`);
                $(".confirm").html(`Do you confirm this reservation?<br>Floor: ${floor}<br>Spot: ${id}`);
                $("#booking").prop("disabled", false);
                selected_spot = {
                    id: id,
                    floor: floor
                };
            }
        })
        $("#booking").on("click", function() {
            var res = new Reservation();
            res.car_id = Number($('input[name="car"]:checked').val());
            res.floor = selected_spot.floor;
            res.spot = Number(selected_spot.id);
            res.park_id = park.id;
            res.state = Spot.BOOKED;
            var createdRes = reservationService.createReservation(res);
            if (createdRes ==  null) {
                location.href = location.href+"&error";
            } else {
                location.href = "/index.html";
            }
        })
    }
})