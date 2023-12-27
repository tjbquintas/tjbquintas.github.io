import { Spot } from "./Spot";

export class Reservation {
    id : number | undefined;
    car_id : number | undefined;
    park_id : number | undefined;
    spot : number | undefined;
    floor : string | undefined;
    state : Spot | undefined;
    constructor(id? : number, car_id? : number, park_id? : number, spot? : number, floor? : string, state? : Spot) {
        this.id = id;
        this.car_id = car_id;
        this.park_id = park_id;
        this.spot = spot;
        this.floor = floor;
        this.state = state;
    } 
}