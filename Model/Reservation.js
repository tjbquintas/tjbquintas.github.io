export class Reservation {
    id;
    car_id;
    park_id;
    spot;
    floor;
    state;
    constructor(id, car_id, park_id, spot, floor, state) {
        this.id = id;
        this.car_id = car_id;
        this.park_id = park_id;
        this.spot = spot;
        this.floor = floor;
        this.state = state;
    }
}
