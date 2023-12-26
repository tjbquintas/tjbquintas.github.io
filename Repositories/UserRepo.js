"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepo = void 0;
const User_js_1 = require("../Model/User.js");
class UserRepo {
    #userdb;
    constructor() {
        this.#userdb = [];
        var db = localStorage.getItem("users");
        if (db != null) {
            this.#parseDB(db);
        }
        else {
            localStorage.setItem("users", "[]");
        }
    }
    #parseDB(db) {
        var jsondb = JSON.parse(db);
        this.#userdb = [];
        for (var line of jsondb) {
            this.#userdb.push(new User_js_1.User(line.id, line.email, line.password, line.name, line.address, line.type));
        }
    }
    #savels() {
        localStorage.setItem("users", JSON.stringify(this.#userdb));
    }
    create(user) {
        user.id = this.#userdb.length;
        this.#userdb.push(user);
        this.#savels();
        return user;
    }
    update(user) {
        var u = this.findById(user.id ?? -1);
        if (u == null)
            return this.create(user);
        else {
            u.name = user.name;
            u.password = user.password;
            u.address = user.address;
            u.email = user.email;
            u.type = user.type;
        }
        this.#savels();
        return u;
    }
    delete(user) {
        this.#userdb = this.#userdb.filter(u => u.id !== user.id);
    }
    findById(id) {
        for (var user of this.#userdb) {
            if (user.id === id)
                return user;
        }
        return null;
    }
    findByEmailAndPassword(email, password) {
        var u = this.#userdb.filter(user => user.email === email && user.password === password);
        if (u.length === 0)
            return null;
        return u[0];
    }
    findAllByType(type) {
        return this.#userdb.filter(user => user.type === type);
    }
    findByEmail(email) {
        var u = this.#userdb.filter(user => user.email === email);
        if (u.length === 0)
            return null;
        return u[0];
    }
}
exports.UserRepo = UserRepo;
