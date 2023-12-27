import { CarRepo } from "../Repositories/CarRepo.js";
export class CarService {
    #carRepo;
    constructor() {
        this.#carRepo = new CarRepo();
    }
    createCar(car) {
        if (this.isLicensePlateAvailable(car.plate ?? ""))
            return this.#carRepo.create(car);
        return null;
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
    getCarByLicensePlate(plate) {
        return this.#carRepo.findByLicensePlate(plate);
    }
    getAllCarsByUserId(user_id) {
        return this.#carRepo.findAllByUserId(user_id);
    }
    isLicensePlateAvailable(plate) {
        return plate != "" && this.#carRepo.findByLicensePlate(plate) == null;
    }
}
;
