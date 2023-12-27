import { ReservationRepo } from "../Repositories/ReservationRepo.js";
export class ReservationService {
    #reservationRepo;
    constructor() {
        this.#reservationRepo = new ReservationRepo();
    }
    createReservation(reservation) {
        return this.#reservationRepo.create(reservation);
    }
    updateReservation(reservation) {
        return this.#reservationRepo.update(reservation);
    }
    deleteReservation(reservation) {
        this.#reservationRepo.delete(reservation);
    }
    getReservation(reservation) {
        return this.#reservationRepo.findById(reservation.id ?? -1);
    }
    getAllReservations() {
        return this.#reservationRepo.findAll();
    }
    getReservationById(id) {
        return this.#reservationRepo.findById(id);
    }
    getAllReservationsByCarId(car_id) {
        return this.#reservationRepo.findAllByCarId(car_id);
    }
    getAllReservationsByParkId(park_id) {
        return this.#reservationRepo.findAllByParkId(park_id);
    }
}
;
