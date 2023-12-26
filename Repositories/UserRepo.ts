import "/Model/User"

class UserRepo {
    #userdb : Array<User>;
    constructor() {
        var db = localStorage.getItem("users");
        if (db != null) {
            this.#parseDB(db);
        } else {
            localStorage.setItem("users", "[]");
            this.#userdb = []
        }
    }
    #parseDB(db : string) {
        var jsondb = JSON.parse(db);
        this.#userdb = []
        for (var line of jsondb) {
            this.#userdb.push(new User(line.id, line.email, line.password, line.name, line.address, line.type))
        }
    }
    #savels() {
        localStorage.setItem("users", JSON.stringify(this.#userdb));
    }
    create(user : User) : User {
        user.id = this.#userdb.length;
        this.#userdb.push(user);
        this.#savels();
        return user;
    }
    update(user : User) : User {
        var u = this.findById(user.id);
        if (u == null) return this.create(user);
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
    delete(user : User) : void {
        this.#userdb = this.#userdb.filter(u => u.id !== user.id);
    }
    findById(id: Number) : User | null {
        for (var user of this.#userdb) {
            if (user.id === id) return user;
        }
        return null;
    }
    findByEmailAndPassword(email : string, password : string) : User | null {
        var u = this.#userdb.filter(user => user.email === email && user.password === password);
        if (u.length === 0) return null;
        return u[0];
    }
    findAllByType(type : string) : Array<User> {
        return this.#userdb.filter(user => user.type === type);
    }
}