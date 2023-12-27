import { UserService } from "../Services/UserService.js";
import { ParkService } from "../Services/ParkService.js";

$().ready(function () {
    const userService = new UserService();
    const parkService = new ParkService();
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
    var park = parkService.getParkById(park_id);
    var matrix = park?.spots;

    const pl = $(".parking-lot");
    for (var _ = 0; _ < 500; ++_) {
        var div = document.createElement("div");
        var r = Math.floor(Math.random() * 3);
        div.classList.add("spot")
        var exclass = r == 0 ? "empty" : r == 1 ? "taken" : "free"
        var cont = r == 0 ? "" : _;
        div.classList.add(exclass)
        div.innerHTML = String(cont);
        pl.append(div);
    }
})