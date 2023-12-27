export class Car {
    id : number | undefined;
    plate : string | undefined;
    brand : string | undefined;
    year : number | undefined;
    user_id : number | undefined;
    constructor(id? : number, plate? : string, brand? : string, year? : number, user_id? : number) {
        this.id = id;
        this.plate = plate;
        this.brand = brand;
        this.year = year;
        this.user_id = user_id;
    }
}