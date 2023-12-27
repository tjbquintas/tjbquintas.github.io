import { Spot } from "./Spot.js";
export class Park {
    id;
    name;
    image;
    address;
    spots;
    user_id;
    constructor(id, name, image, address, spots, user_id) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.address = address;
        this.spots = spots;
        this.user_id = user_id;
    }
    #capacityOf(func) {
        var capacity = 0;
        for (var floor in this.spots) {
            for (var line of this.spots[floor]) {
                for (var col of line) {
                    if (func(col.state))
                        capacity++;
                }
            }
        }
        return capacity;
    }
    totalCapacity() {
        return this.#capacityOf((state) => state != Spot.EMPTY);
    }
    freeParkingSpots() {
        return this.#capacityOf((state) => state == 0);
    }
    occupiedParkingSpots() {
        return this.#capacityOf((state) => state > 0);
    }
    getSizes() {
        var s = {};
        for (var floor in this.spots) {
            s[floor] = [this.spots[floor].length, this.spots[floor][0].length];
        }
        return s;
    }
    changeSpot(floor, id, state, res_id) {
        if (this.spots == undefined || Object.keys(this.spots).includes(floor))
            return;
        for (var row of this.spots[floor]) {
            for (var col of row) {
                if (col.id == id) {
                    col.state = state;
                    col.res_id = res_id;
                }
            }
        }
    }
    isSpotFree(floor, id) {
        if (this.spots == undefined || Object.keys(this.spots).includes(floor))
            return false;
        for (var row of this.spots[floor]) {
            for (var col of row) {
                if (col.id == id) {
                    return col.state == Spot.FREE;
                }
            }
        }
        return false;
    }
}
