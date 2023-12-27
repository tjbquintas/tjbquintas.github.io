export class Park {
    id;
    name;
    address;
    spots;
    user_id;
    constructor(id, name, address, spots, user_id) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.spots = spots;
        this.user_id = user_id;
    }
    #capacityOf(func) {
        var capacity = 0;
        for (var floor in this.spots) {
            for (var line of this.spots[Number(floor)]) {
                for (var col of line) {
                    if (func(col.state))
                        capacity++;
                }
            }
        }
        return capacity;
    }
    totalCapacity() {
        return this.#capacityOf((state) => state != -1);
    }
    freeParkingSpots() {
        return this.#capacityOf((state) => state == 0);
    }
    occupiedParkingSpots() {
        return this.#capacityOf((state) => state > 0);
    }
}
