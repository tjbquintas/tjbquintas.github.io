import { User } from "../Model/User.js";
import { UserService } from "../Services/UserService.js";

$().ready(function () {
    const userService = new UserService();
    $("button").on("click", function () {
        var user = new User();
        user.name = String($("input[name='name']").val());
        user.address = String($("input[name='address']").val());
        user.email = String($("input[name='email']").val());
        user.password = String($("input[name='password']").val());
        user.type = String($("input[name='type']:checked").val());
        var loggedUser = userService.createUser(user);
        if (loggedUser == null) location.href = '/register.html?error'
        else {
            sessionStorage.setItem("logged", String(loggedUser.id));
        location.href = '/index.html'
        }
    })
})