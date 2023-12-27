import { CarRepo } from "../Repositories/CarRepo.js";
export class CarService {
    #carRepo;
    constructor() {
        this.#carRepo = new CarRepo();
    }
    createCar(car) {
        return this.#carRepo.create(car);
    }
    updateCar(car) {
        return this.#carRepo.update(car);
    }
    deleteCar(car) {
        this.#carRepo.delete(car);
    }
    getCar(car) {
        return this.#carRepo.findById(car.id ?? -1);
    }
    getAllCars() {
        return this.#carRepo.findAll();
    }
    getCarById(id) {
        return this.#carRepo.findById(id);
    }
    getAllCarsByUserId(user_id) {
        return this.#carRepo.findAllByUserId(user_id);
    }
}
;
