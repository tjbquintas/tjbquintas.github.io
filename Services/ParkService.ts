import { Park } from "../Model/Park.js"
import { ParkRepo } from "../Repositories/ParkRepo.js"

export class ParkService {
    #parkRepo : ParkRepo
    constructor() {
        this.#parkRepo = new ParkRepo();
    }
    createPark(park : Park) : Park | null {
        return this.#parkRepo.create(park);
    }
    updatePark(park : Park) : Park {
        return this.#parkRepo.update(park);
    }
    deletePark(park : Park) : void {
        this.#parkRepo.delete(park);
    }
    getPark(park : Park) : Park | null {
        return this.#parkRepo.findById(park.id?? -1);
    }
    getAllParks() {
        return this.#parkRepo.findAll();
    }
    getParkById(id : number) : Park | null {
        return this.#parkRepo.findById(id);
    }
    getParkByName(name : string) : Park | null {
        return this.#parkRepo.findByName(name);
    }
    getAllParksByUserId(user_id : number) : Array<Park> {
        return this.#parkRepo.findAllByUserId(user_id);
    }
};