export class Car {
    id;
    plate;
    brand;
    year;
    user_id;
    has_reserv;
    constructor(id, plate, brand, year, user_id, has_reserv) {
        this.id = id;
        this.plate = plate;
        this.brand = brand;
        this.year = year;
        this.user_id = user_id;
        this.has_reserv = has_reserv;
    }
}
