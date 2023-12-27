import { Spot } from "../Model/Spot.js";
import { ReservationRepo } from "../Repositories/ReservationRepo.js";
import { CarService } from "./CarService.js";
import { ParkService } from "./ParkService.js";
export class ReservationService {
    #carService;
    #parkService;
    #reservationRepo;
    constructor() {
        this.#carService = new CarService();
        this.#parkService = new ParkService();
        this.#reservationRepo = new ReservationRepo();
    }
    createReservation(reservation) {
        if (this.isReservationPossible(reservation)) {
            var park = this.#parkService.getParkById(reservation.park_id ?? -1);
            if (park == null)
                return null;
            var car = this.#carService.getCarById(reservation.car_id ?? -1);
            if (car == null)
                return null;
            var res = this.#reservationRepo.create(reservation);
            park.changeSpot(res.floor ?? "", res.spot ?? -1, res.state ?? Spot.EMPTY, res.id ?? -1);
            this.#parkService.updatePark(park);
            car.has_reserv = true;
            this.#carService.updateCar(car);
            return res;
        }
        return null;
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
    isReservationPossible(reservation) {
        var car = this.#carService.getCarById(reservation.car_id ?? -1);
        if (car == null || car.has_reserv)
            return false;
        var park = this.#parkService.getParkById(reservation.park_id ?? -1);
        if (park == null)
            return false;
        return park.isSpotFree(reservation.floor ?? "", reservation.spot ?? -1);
    }
    cancelReservation(reservation) {
        var park = this.#parkService.getParkById(reservation.park_id ?? -1);
        if (park == null)
            return null;
        var car = this.#carService.getCarById(reservation.car_id ?? -1);
        if (car == null || !car.has_reserv)
            return null;
        reservation.state = Spot.EXPIRED;
        var res = this.#reservationRepo.update(reservation);
        park.changeSpot(res.floor ?? "", res.spot ?? -1, Spot.FREE, res.id ?? -1);
        this.#parkService.updatePark(park);
        car.has_reserv = false;
        this.#carService.updateCar(car);
        return res;
    }
}
;
