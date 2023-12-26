"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    id;
    email;
    password;
    name;
    address;
    type;
    constructor(id, email, password, name, address, type) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.address = address;
        this.type = type;
    }
}
exports.User = User;
;
