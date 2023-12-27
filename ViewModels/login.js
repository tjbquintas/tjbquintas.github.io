import { User } from "../Model/User.js";
import { UserService } from "../Services/UserService.js";
$().ready(function () {
    sessionStorage.removeItem("logged");
    const userService = new UserService();
    $("button").on("click", function () {
        var user = new User();
        user.email = String($("input[type='email']").val());
        user.password = String($("input[type='password']").val());
        var loggedUser = userService.loginUser(user);
        if (loggedUser != null) {
            sessionStorage.setItem("logged", String(loggedUser.id));
            location.href = '/index.html';
        }
        else {
            location.href = '/login.html?error';
        }
    });
});
