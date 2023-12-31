import { ParkRepo } from "../Repositories/ParkRepo.js";
export class ParkService {
    #parkRepo;
    constructor() {
        this.#parkRepo = new ParkRepo();
    }
    createPark(park) {
        return this.#parkRepo.create(park);
    }
    updatePark(park) {
        return this.#parkRepo.update(park);
    }
    deletePark(park) {
        this.#parkRepo.delete(park);
    }
    getPark(park) {
        return this.#parkRepo.findById(park.id ?? -1);
    }
    getAllParks() {
        return this.#parkRepo.findAll();
    }
    getParkById(id) {
        return this.#parkRepo.findById(id);
    }
    getParkByName(name) {
        return this.#parkRepo.findByName(name);
    }
    getAllParksByUserId(user_id) {
        return this.#parkRepo.findAllByUserId(user_id);
    }
}
;
