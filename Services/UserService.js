import { UserRepo } from "../Repositories/UserRepo.js";
export class UserService {
    #userRepo;
    constructor() {
        this.#userRepo = new UserRepo();
    }
    createUser(user) {
        if (this.isEmailAvailable(user.email ?? ""))
            return this.#userRepo.create(user);
        return null;
    }
    updateUser(user) {
        return this.#userRepo.update(user);
    }
    deleteUser(user) {
        this.#userRepo.delete(user);
    }
    getUser(user) {
        return this.#userRepo.findById(user.id ?? -1);
    }
    getUserById(id) {
        return this.#userRepo.findById(id);
    }
    getAllClients() {
        return this.#userRepo.findAllByType("client");
    }
    getAllCompanies() {
        return this.#userRepo.findAllByType("company");
    }
    isEmailAvailable(email) {
        return this.#userRepo.findByEmail(email) == null;
    }
    loginUser(user) {
        return this.#userRepo.findByEmailAndPassword(user.email ?? "", user.password ?? "");
    }
}
;
