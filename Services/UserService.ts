import { User } from "../Model/User.js"
import { UserRepo } from "../Repositories/UserRepo.js"

export class UserService {
    #userRepo : UserRepo
    constructor() {
        this.#userRepo = new UserRepo();
    }
    createUser(user : User) : User | null {
        if (this.isEmailAvailable(user.email?? "")) return this.#userRepo.create(user);
        return null;
    }
    updateUser(user : User) : User {
        return this.#userRepo.update(user);
    }
    deleteUser(user : User) : void {
        this.#userRepo.delete(user);
    }
    getUser(user : User) : User | null {
        return this.#userRepo.findById(user.id?? -1);
    }
    getUserById(id : number) : User | null {
        return this.#userRepo.findById(id);
    }
    getAllClients() : Array<User> {
        return this.#userRepo.findAllByType("client");
    }
    getAllCompanies() : Array<User> {
        return this.#userRepo.findAllByType("company");
    }
    isEmailAvailable(email : string) : boolean {
        return this.#userRepo.findByEmail(email) == null;
    }
    loginUser(user : User) : User | null {
        return this.#userRepo.findByEmailAndPassword(user.email?? "", user.password?? "");
    }
};