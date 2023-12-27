import { Car } from "../Model/Car.js";
export class CarRepo {
    #cardb : Array<Car>;
    constructor() {
        this.#cardb = []
        var db = localStorage.getItem("cars");
        if (db != null) {
            this.#parseDB(db);
        } else {
            localStorage.setItem("cars", "[]");
        }
    }
    #parseDB(db : string) {
        var jsondb = JSON.parse(db);
        this.#cardb = []
        for (var line of jsondb) {
            this.#cardb.push(new Car(line.id, line.plate, line.brand, line.year, line.user_id, line.has_reserv))
        }
    }
    #savels() {
        localStorage.setItem("cars", JSON.stringify(this.#cardb));
    }
    create(car : Car) : Car {
        car.id = this.#cardb.length;
        this.#cardb.push(car);
        this.#savels();
        return car;
    }
    update(car : Car) : Car {
        var p = this.findById(car.id?? -1);
        if (p == null) return this.create(car);
        else {
            p.brand = car.brand;
            p.year = car.year;
            p.plate = car.plate;
            p.user_id = car.user_id;
            p.has_reserv = car.has_reserv
        }
        this.#savels();
        return p;
    }
    delete(car : Car) : void {
        this.#cardb = this.#cardb.filter(p => p.id !== car.id);
    }
    findById(id : number) : Car | null {
        for (var car of this.#cardb) {
            if (car.id === id) return car;
        }
        return null;
    }
    findByLicensePlate(plate : string) : Car | null {
        for (var car of this.#cardb) {
            if (car.plate === plate) return car;
        }
        return null;
    }
    findAll() : Array<Car> {
        return this.#cardb;
    }
    findAllByUserId(user_id : number) : Array<Car> {
        return this.#cardb.filter(car => car.user_id === user_id);
    }
}