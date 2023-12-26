"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _UserRepo_instances, _UserRepo_userdb, _UserRepo_parseDB, _UserRepo_savels;
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../Model/User");
var UserRepo = /** @class */ (function () {
    function UserRepo() {
        _UserRepo_instances.add(this);
        _UserRepo_userdb.set(this, void 0);
        var db = localStorage.getItem("users");
        if (db != null) {
            __classPrivateFieldGet(this, _UserRepo_instances, "m", _UserRepo_parseDB).call(this, db);
        }
        else {
            localStorage.setItem("users", "[]");
            __classPrivateFieldSet(this, _UserRepo_userdb, [], "f");
        }
    }
    UserRepo.prototype.create = function (user) {
        user.id = __classPrivateFieldGet(this, _UserRepo_userdb, "f").length;
        __classPrivateFieldGet(this, _UserRepo_userdb, "f").push(user);
        __classPrivateFieldGet(this, _UserRepo_instances, "m", _UserRepo_savels).call(this);
        return user;
    };
    UserRepo.prototype.update = function (user) {
        var u = this.findById(user.id);
        if (u == null)
            return this.create(user);
        else {
            u.name = user.name;
            u.password = user.password;
            u.address = user.address;
            u.email = user.email;
            u.type = user.type;
        }
        __classPrivateFieldGet(this, _UserRepo_instances, "m", _UserRepo_savels).call(this);
        return u;
    };
    UserRepo.prototype.delete = function (user) {
        __classPrivateFieldSet(this, _UserRepo_userdb, __classPrivateFieldGet(this, _UserRepo_userdb, "f").filter(function (u) { return u.id !== user.id; }), "f");
    };
    UserRepo.prototype.findById = function (id) {
        for (var _i = 0, _a = __classPrivateFieldGet(this, _UserRepo_userdb, "f"); _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.id === id)
                return user;
        }
        return null;
    };
    UserRepo.prototype.findByEmailAndPassword = function (email, password) {
        var u = __classPrivateFieldGet(this, _UserRepo_userdb, "f").filter(function (user) { return user.email === email && user.password === password; });
        if (u.length === 0)
            return null;
        return u[0];
    };
    UserRepo.prototype.findAllByType = function (type) {
        return __classPrivateFieldGet(this, _UserRepo_userdb, "f").filter(function (user) { return user.type === type; });
    };
    return UserRepo;
}());
_UserRepo_userdb = new WeakMap(), _UserRepo_instances = new WeakSet(), _UserRepo_parseDB = function _UserRepo_parseDB(db) {
    var jsondb = JSON.parse(db);
    __classPrivateFieldSet(this, _UserRepo_userdb, [], "f");
    for (var _i = 0, jsondb_1 = jsondb; _i < jsondb_1.length; _i++) {
        var line = jsondb_1[_i];
        __classPrivateFieldGet(this, _UserRepo_userdb, "f").push(new User_1.default(line.id, line.email, line.password, line.name, line.address, line.type));
    }
}, _UserRepo_savels = function _UserRepo_savels() {
    localStorage.setItem("users", JSON.stringify(__classPrivateFieldGet(this, _UserRepo_userdb, "f")));
};
