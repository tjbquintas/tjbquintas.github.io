import { Park } from "../Model/Park.js";
export class ParkRepo {
    #parkdb;
    constructor() {
        this.#parkdb = [];
        var db = localStorage.getItem("parks");
        if (db != null) {
            this.#parseDB(db);
        }
        else {
            localStorage.setItem("parks", "[]");
        }
    }
    #parseDB(db) {
        var jsondb = JSON.parse(db);
        this.#parkdb = [];
        for (var line of jsondb) {
            this.#parkdb.push(new Park(line.id, line.name, line.image, line.address, line.spots, line.user_id));
        }
    }
    #savels() {
        localStorage.setItem("parks", JSON.stringify(this.#parkdb));
    }
    create(park) {
        park.id = this.#parkdb.length;
        this.#parkdb.push(park);
        this.#savels();
        return park;
    }
    update(park) {
        var p = this.findById(park.id ?? -1);
        if (p == null)
            return this.create(park);
        else {
            p.name = park.name;
            p.spots = park.spots;
            p.address = park.address;
            p.user_id = park.user_id;
        }
        this.#savels();
        return p;
    }
    delete(park) {
        this.#parkdb = this.#parkdb.filter(p => p.id !== park.id);
    }
    findById(id) {
        for (var park of this.#parkdb) {
            if (park.id === id)
                return park;
        }
        return null;
    }
    findAll() {
        return this.#parkdb;
    }
    findByName(name) {
        for (var park of this.#parkdb) {
            if (park.name === name)
                return park;
        }
        return null;
    }
    findAllByUserId(user_id) {
        return this.#parkdb.filter(park => park.user_id === user_id);
    }
}
