import { UserService } from "../Services/UserService.js";
import { ParkService } from "../Services/ParkService.js";
import { CarService } from "../Services/CarService.js";
import { Spot, SpotRecord } from "../Model/Spot.js";
import { Reservation } from "../Model/Reservation.js";
import { ReservationService } from "../Services/ReservationService.js";
import { Car } from "../Model/Car.js";

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
                    var exclass = col.state == Spot.EMPTY ?
                     "empty" : col.state == Spot.FREE ? 
                     "m-free" : col.state == Spot.BOOKED ?
                     "m-reserv" : col.state == Spot.OCCUPIED ?
                     "m-occ" : col.state == Spot.LOW_FEE ?
                     "m-lowfee" : col.state == Spot.HEAVY_FEE ?
                     "m-highfee" : "m-maintenance";
                    spot.classList.add(exclass);
                    if (col.state != Spot.EMPTY) {
                        var html : string = `<p class="text-start">${SpotRecord[col.state]}<br>
                        Floor ${floor}, Spot ${col.id}</p>`;
                        spot.innerHTML = String(col.id);
                        var res : Reservation | null = reservationService.getReservationById(col.res_id);
                        if (res != null) {
                            var car : Car | null = carService.getCarById(res.car_id ?? -1);
                            if (car != null) {
                                var user = userService.getUserById(car.user_id ?? -1);
                                if (user != null) {
                                    html = `<p class="text-start">${SpotRecord[res.state ?? -2]}<br>
                                                Floor ${res.floor}, Spot ${res.spot}<br>
                                                ${user.name}<br>
                                                ${car.brand} ${car.year}, ${car.plate}</p>`;
                                }
                            }
                        }
                        spot.setAttribute("data-bs-toggle", "tooltip");
                        spot.setAttribute("data-bs-html", "true");
                        spot.setAttribute("data-bs-title", html);
                    }
                    parking_lot.appendChild(spot);
                }
            }
            park_tab.appendChild(parking_lot);
            $(".tab-content").append(park_tab);
            first = false;
        }
    }
    (<any>$("[data-bs-toggle='tooltip']")).tooltip();
})