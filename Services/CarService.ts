import { Car } from "../Model/Car.js"
import { CarRepo } from "../Repositories/CarRepo.js"

export class CarService {
    #carRepo : CarRepo
    constructor() {
        this.#carRepo = new CarRepo();
    }
    createCar(car : Car) : Car | null {
        return this.#carRepo.create(car);
    }
    updateCar(car : Car) : Car {
        return this.#carRepo.update(car);
    }
    deleteCar(car : Car) : void {
        this.#carRepo.delete(car);
    }
    getCar(car : Car) : Car | null {
        return this.#carRepo.findById(car.id?? -1);
    }
    getAllCars() {
        return this.#carRepo.findAll();
    }
    getCarById(id : Number) : Car | null {
        return this.#carRepo.findById(id);
    }
    getAllCarsByUserId(user_id : Number) : Array<Car> {
        return this.#carRepo.findAllByUserId(user_id);
    }
};