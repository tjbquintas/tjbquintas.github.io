import { Reservation } from "../Model/Reservation.js";
export class ReservationRepo {
    #reservationdb;
    constructor() {
        this.#reservationdb = [];
        var db = localStorage.getItem("reservations");
        if (db != null) {
            this.#parseDB(db);
        }
        else {
            localStorage.setItem("reservations", "[]");
        }
    }
    #parseDB(db) {
        var jsondb = JSON.parse(db);
        this.#reservationdb = [];
        for (var line of jsondb) {
            this.#reservationdb.push(new Reservation(line.id, line.car_id, line.park_id, line.spot, line.floor, line.state));
        }
    }
    #savels() {
        localStorage.setItem("reservations", JSON.stringify(this.#reservationdb));
    }
    create(reservation) {
        reservation.id = this.#reservationdb.length;
        this.#reservationdb.push(reservation);
        this.#savels();
        return reservation;
    }
    update(reservation) {
        var p = this.findById(reservation.id ?? -1);
        if (p == null)
            return this.create(reservation);
        else {
            p.car_id = reservation.car_id;
            p.park_id = reservation.park_id;
            p.spot = reservation.spot;
            p.floor = reservation.floor;
            p.state = reservation.state;
        }
        this.#savels();
        return p;
    }
    delete(reservation) {
        this.#reservationdb = this.#reservationdb.filter(p => p.id !== reservation.id);
    }
    findById(id) {
        for (var reservation of this.#reservationdb) {
            if (reservation.id === id)
                return reservation;
        }
        return null;
    }
    findAll() {
        return this.#reservationdb;
    }
    findAllByCarId(car_id) {
        return this.#reservationdb.filter(reservation => reservation.car_id === car_id);
    }
    findAllByParkId(park_id) {
        return this.#reservationdb.filter(reservation => reservation.park_id === park_id);
    }
}
