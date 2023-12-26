export class Park {
    id : Number | undefined;
    name : string | undefined;
    address : string | undefined;
    spots : Array<Number> | undefined;
    user_id : Number | undefined;
    constructor(id? : Number, name? : string, address? : string, spots? : Array<Number>, user_id? : Number) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.spots = spots;
        this.user_id = user_id;
    }
}