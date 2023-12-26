class User {
    id: Number;
    email: string;
    password: string;
    name: string;
    address: string;
    type: string;
    constructor(id : Number, email : string, password : string, name : string, address : string, type : string) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.address = address;
        this.type = type;
    }
};

export default User;