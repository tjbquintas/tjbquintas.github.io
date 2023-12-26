import { Park } from "../Model/Park.js";
export class ParkRepo {
    #parkdb : Array<Park>;
    constructor() {
        this.#parkdb = []
        var db = localStorage.getItem("parks");
        if (db != null) {
            this.#parseDB(db);
        } else {
            localStorage.setItem("parks", "[]");
        }
    }
    #parseDB(db : string) {
        var jsondb = JSON.parse(db);
        this.#parkdb = []
        for (var line of jsondb) {
            this.#parkdb.push(new Park(line.id, line.name, line.address, line.spots, line.user_id))
        }
    }
    #savels() {
        localStorage.setItem("parks", JSON.stringify(this.#parkdb));
    }
    create(park : Park) : Park {
        park.id = this.#parkdb.length;
        this.#parkdb.push(park);
        this.#savels();
        return park;
    }
    update(park : Park) : Park {
        var p = this.findById(park.id?? -1);
        if (p == null) return this.create(park);
        else {
            p.name = park.name;
            p.spots = park.spots;
            p.address = park.address;
            p.user_id = park.user_id;
        }
        this.#savels();
        return p;
    }
    delete(park : Park) : void {
        this.#parkdb = this.#parkdb.filter(p => p.id !== park.id);
    }
    findById(id : Number) : Park | null {
        for (var park of this.#parkdb) {
            if (park.id === id) return park;
        }
        return null;
    }
    findByName(name : string) : Park | null {
        for (var park of this.#parkdb) {
            if (park.name === name) return park;
        }
        return null;
    }
    findAllByUserId(user_id : Number) : Array<Park> {
        return this.#parkdb.filter(park => park.user_id === user_id);
    }
}