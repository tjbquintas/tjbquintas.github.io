import { Car } from "../Model/Car.js"
import { CarRepo } from "../Repositories/CarRepo.js"

export class CarService {
    #carRepo : CarRepo
    constructor() {
        this.#carRepo = new CarRepo();
    }
    createCar(car : Car) : Car | null {
        if (this.isLicensePlateAvailable(car.plate ?? "")) return this.#carRepo.create(car);
        return null;
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
    getCarById(id : number) : Car | null {
        return this.#carRepo.findById(id);
    }
    getCarByLicensePlate(plate : string) : Car | null {
        return this.#carRepo.findByLicensePlate(plate);
    }
    getAllCarsByUserId(user_id : number) : Array<Car> {
        return this.#carRepo.findAllByUserId(user_id);
    }
    isLicensePlateAvailable(plate : string) : boolean {
        return plate != "" && this.#carRepo.findByLicensePlate(plate) == null;
    }
};