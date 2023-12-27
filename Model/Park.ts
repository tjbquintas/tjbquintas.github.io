import { Spot } from "./Spot.js";

export class Park {
    id : number | undefined;
    name : string | undefined;
    image : string | undefined;
    address : string | undefined;
    spots : Record<string, Record<string, number>[][]> | undefined;
    user_id : number | undefined;
    constructor(id? : number, name? : string, image? : string, address? : string, spots? : Record<string, Record<string, number>[][]>, user_id? : number) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.address = address;
        this.spots = spots;
        this.user_id = user_id;
    }
    #capacityOf(func : (Function : number) => boolean) : number {
        var capacity = 0;
        for (var floor in this.spots) {
            for (var line of this.spots[floor]) {
                for (var col of line) {
                    if (func(col.state)) capacity++;
                }
            }
        }
        return capacity;
    }
    totalCapacity() : number {
        return this.#capacityOf((state : number) : boolean => state != Spot.EMPTY);
    }
    freeParkingSpots() {
        return this.#capacityOf((state : number) : boolean => state == 0);
    }
    occupiedParkingSpots() {
        return this.#capacityOf((state : number) : boolean => state > 0);
    }
    getSizes() : Record<string, [number,number]> {
        var s : Record<string, [number,number]> = {};
        for (var floor in this.spots) {
            s[floor] = [this.spots[floor].length, this.spots[floor][0].length]
        }
        return s;
    }
    changeSpot(floor : string, id : number, state : Spot, res_id : number) : void {
        if (this.spots == undefined || Object.keys(this.spots).includes(floor)) return;
        for (var row of this.spots[floor]) {
            for (var col of row) {
                if (col.id == id) {
                    col.state = state;
                    col.res_id = res_id;
                }
            }
        }
    }
    isSpotFree(floor : string, id : number) : boolean {
        if (this.spots == undefined || Object.keys(this.spots).includes(floor)) return false;
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