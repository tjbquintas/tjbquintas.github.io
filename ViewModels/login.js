import { User } from "../Model/User.js";
import { UserService } from "../Services/UserService.js";

$().ready(function () {
    const userService = new UserService();
    $("form").submit(function () {
        var user = new User();
        user.email = $("input[type='email']").val();
        user.password = $("input[type='password']").val();
        var loggedUser = userService.loginUser(user);
        if (loggedUser != null) {
            sessionStorage.setItem("logged", loggedUser);
            location.href = '/index.html'
        }
    })
})