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
}
