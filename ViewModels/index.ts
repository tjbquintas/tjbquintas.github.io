import { User } from "../Model/User.js";
import { UserService } from "../Services/UserService.js";
import { CarService } from "../Services/CarService.js";
import { Car } from "../Model/Car.js";
import { ParkService } from "../Services/ParkService.js";
import { Park } from "../Model/Park.js";
import { ReservationService } from "../Services/ReservationService.js";
import { Reservation } from "../Model/Reservation.js";
import { Spot } from "../Model/Spot.js";

$().ready(function () {
    const userService = new UserService();
    const carService = new CarService();
    const parkService = new ParkService();
    const reservationService = new ReservationService();
    var loggedUserId = Number(sessionStorage.getItem("logged") ?? -1);
    var loggedUser = userService.getUserById(loggedUserId);
    if (loggedUser == null) {
        location.href = "/login.html";
    } else {
        $("#user").text(loggedUser.name ?? "");
        if (loggedUser.type == "company") {
            $("[data-for='company']").prop("hidden", false);
            const my_parks_list = $("#my_parks_list");
            const all_my_parks : Park[] = parkService.getAllParksByUserId(loggedUser.id ?? -1);
            for (const p of all_my_parks) {
                var a = document.createElement("a");
                a.href = `/park_management.html?id=${p.id}`;
                a.classList.add("list-group-item", "list-group-item-active");
                a.innerHTML = `${p.name}, ${p.address}`;
                my_parks_list.prepend(a);
            }
        }

        const all_parks : Park[] = parkService.getAllParks(); 
        const parks_list = $("#parks_list");
        for (const park of all_parks) {
            var div1 = document.createElement("div");
            div1.classList.add("row", "mt-3");
            var park_card = document.createElement("div");
            park_card.classList.add("col-11", "card", "park");
            park_card.setAttribute("name", String(park.id ?? -1));
            $(park_card).on("click", function() {
                location.href = "/park.html?id=" + $(this).attr("name");
            })
            var fav_btn = document.createElement("button");
            fav_btn.classList.add("btn", "fav-icon")
            fav_btn.innerHTML = `<i class="far fa-heart"></i>`;
            var img = document.createElement("img");
            img.src = `Resources/Images/${park.image}`;
            var div2 = document.createElement("div");
            div2.classList.add("row", "p-3");
            div2.innerHTML = `<div class="col-auto">
                                <h2>${park.name}</h2>
                                <h4>${park.address}</h4>
                            </div>
                            <div class="col text-end">
                                <p class="mt-3">Vacancy<br>${park.freeParkingSpots()}/${park.totalCapacity()}</p>
                            </div>`;
            park_card.appendChild(fav_btn);
            park_card.appendChild(img);
            park_card.appendChild(div2);
            div1.appendChild(park_card);
            parks_list.append(div1);
        }

        const my_cars : Car[] = carService.getAllCarsByUserId(loggedUser.id ?? -1);
        const cars_list = $("#cars_list")
        const reservs_list = $("#reservs_list");
        for (const car of my_cars) {
            var a = document.createElement("a");
            a.href = "#";
            a.classList.add("list-group-item");
            a.innerHTML = `${car.brand} ${car.year}, ${car.plate}`;
            cars_list.prepend(a);
            if (car.has_reserv) {
                var res : Reservation[] = reservationService.getAllReservationsByCarId(car.id ?? -1);
                var res1 = res.filter(r => r.state == Spot.BOOKED)[0];
                var p = parkService.getParkById(res1.park_id ?? -1);
                if (p == null) continue;
                reservs_list.append(`<a href="#" class="list-group-item" name="${res1.id}">
                <div class="d-flex w-100 justify-content-between">
                  <div>
                    <h5 class="mb-1">${p.name}</h5>
                    <p class="mb-1">Floor ${res1.floor}, Spot ${res1.spot}</p>
                  </div>
                  <small>1h</small>
                </div>
                <small>${car.brand} ${car.year}, ${car.plate}</small>
                <button class="btn btn-link cancel-res">Cancel</button>
              </a>`)
            }
        }
        $(".cancel-res").on("click", function() {
            var line = $(this).parentsUntil(reservs_list);
            var id = Number(line.attr("name"));
            var r = reservationService.getReservationById(id);
            if (r == null) return false;
            reservationService.cancelReservation(r);
            location.href = "/index.html";
        })
    }
})