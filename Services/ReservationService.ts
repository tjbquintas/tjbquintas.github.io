import { Reservation } from "../Model/Reservation.js"
import { ReservationRepo } from "../Repositories/ReservationRepo.js"

export class ReservationService {
    #reservationRepo : ReservationRepo
    constructor() {
        this.#reservationRepo = new ReservationRepo();
    }
    createReservation(reservation : Reservation) : Reservation | null {
        return this.#reservationRepo.create(reservation);
    }
    updateReservation(reservation : Reservation) : Reservation {
        return this.#reservationRepo.update(reservation);
    }
    deleteReservation(reservation : Reservation) : void {
        this.#reservationRepo.delete(reservation);
    }
    getReservation(reservation : Reservation) : Reservation | null {
        return this.#reservationRepo.findById(reservation.id?? -1);
    }
    getAllReservations() {
        return this.#reservationRepo.findAll();
    }
    getReservationById(id : Number) : Reservation | null {
        return this.#reservationRepo.findById(id);
    }
    getAllReservationsByCarId(car_id : Number) : Array<Reservation> {
        return this.#reservationRepo.findAllByCarId(car_id);
    }
    getAllReservationsByParkId(park_id : Number) : Array<Reservation> {
        return this.#reservationRepo.findAllByParkId(park_id);
    }
};