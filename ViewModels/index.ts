import { User } from "../Model/User.js";
import { UserService } from "../Services/UserService.js";

$().ready(function () {
    const userService = new UserService();
    var loggedUserId = Number(sessionStorage.getItem("logged") ?? -1);
    var loggedUser = userService.getUserById(loggedUserId);
    if (loggedUser == null) {
        location.href = "/login.html";
    } else {
        $("#user").text(loggedUser.name ?? "");
    }
})