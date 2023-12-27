export class User {
    id: number | undefined;
    email: string | undefined;
    password: string | undefined;
    name: string | undefined;
    address: string | undefined;
    type: string | undefined;
    constructor(id? : number, email? : string, password? : string, name? : string, address? : string, type? : string) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.address = address;
        this.type = type;
    }
};