import { Car } from "../Model/Car.js";
import { UserService } from "../Services/UserService.js";
import { CarService } from "../Services/CarService.js";

$().ready(function () {
    const userService = new UserService();
    const carService = new CarService();
    var loggedUserId = Number(sessionStorage.getItem("logged") ?? -1);
    var loggedUser = userService.getUserById(loggedUserId);
    if (loggedUser == null) {
        location.href = "/login.html";
    } else {
        $("#user").text(loggedUser.name ?? "");
        $("#add_car").on("click", function() {
            var car = new Car();
            car.brand = String($("input#brandInput").val());
            car.plate = String($("input#plateInput").val());
            car.year = Number($("input#yearInput").val());
            car.user_id = loggedUser?.id;
            if (carService.isLicensePlateAvailable(car.plate)) {
                carService.createCar(car);
            } else {
                var oldcar = carService.getCarByLicensePlate(car.plate)
                carService.updateCar(oldcar?? car);
            }
            location.href = "/index.html";
        })
    }
})