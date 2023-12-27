export class Park {
    id : number | undefined;
    name : string | undefined;
    address : string | undefined;
    spots : Record<number, Record<string, number>[][]> | undefined;
    user_id : number | undefined;
    constructor(id? : number, name? : string, address? : string, spots? : Record<number, Record<string, number>[][]>, user_id? : number) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.spots = spots;
        this.user_id = user_id;
    }
    #capacityOf(func : (Function : number) => boolean) : number {
        var capacity = 0;
        for (var floor in this.spots) {
            for (var line of this.spots[Number(floor)]) {
                for (var col of line) {
                    if (func(col.state)) capacity++;
                }
            }
        }
        return capacity;
    }
    totalCapacity() : number {
        return this.#capacityOf((state : number) : boolean => state != -1);
    }
    freeParkingSpots() {
        return this.#capacityOf((state : number) : boolean => state == 0);
    }
    occupiedParkingSpots() {
        return this.#capacityOf((state : number) : boolean => state > 0);
    }
}