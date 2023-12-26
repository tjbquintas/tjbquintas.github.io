export class User {
    id: Number | undefined;
    email: string | undefined;
    password: string | undefined;
    name: string | undefined;
    address: string | undefined;
    type: string | undefined;
    constructor(id? : Number, email? : string, password? : string, name? : string, address? : string, type? : string) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.address = address;
        this.type = type;
    }
};