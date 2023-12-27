import { UserService } from "../Services/UserService.js";
$().ready(function () {
    const userService = new UserService();
    var loggedUserId = Number(sessionStorage.getItem("logged") ?? -1);
    var loggedUser = userService.getUserById(loggedUserId);
    if (loggedUser == null) {
        location.href = "/login.html";
    }
    else {
        $("#user").text(loggedUser.name ?? "");
    }
    $(".park").on("click", function () {
        location.href = "/park.html?id=" + $(this).attr("name");
    });
});
