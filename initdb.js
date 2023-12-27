import { User } from "./Model/User.js"
import { UserService } from "./Services/UserService.js"
import { Park } from "./Model/Park.js"
import { ParkService } from "./Services/ParkService.js"
import { Spot } from "./Model/Spot.js"

const userService = new UserService();
const parkService = new ParkService();

var plaza = new User();
plaza.name = "Plaza Parques"
plaza.address = "Lisboa"
plaza.email = "parques@plaza.pt"
plaza.password = "12345"
plaza.type = "company"

const Plaza = userService.createUser(plaza) ?? userService.loginUser(plaza);

var glici = new Park();
glici.name = "Glicínias Plaza";
glici.address = "Aveiro, Aveiro";
glici.user_id = Plaza.id;
glici.image = "glici.jpg";
glici.spots = {
    "-1": [
        [
            {id: -1, state: Spot.EMPTY, res_id: -1}, 
            {id: 1, state: Spot.FREE, res_id: -1},
            {id: 2, state: Spot.FREE, res_id: -1},
            {id: 3, state: Spot.FREE, res_id: -1},
            {id: 4, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
        ],
        [
            {id: 5, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 6, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: 7, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 8, state: Spot.FREE, res_id: -1},
            {id: 9, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 10, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: 11, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 12, state: Spot.FREE, res_id: -1},
            {id: 13, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 14, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: 15, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 16, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: -1, state: Spot.EMPTY, res_id: -1}, 
            {id: 17, state: Spot.FREE, res_id: -1},
            {id: 18, state: Spot.FREE, res_id: -1},
            {id: 19, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
        ]
    ],
    "2": [
        [
            {id: -1, state: Spot.EMPTY, res_id: -1}, 
            {id: 1, state: Spot.FREE, res_id: -1},
            {id: 2, state: Spot.FREE, res_id: -1},
            {id: 3, state: Spot.FREE, res_id: -1},
            {id: 4, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
        ],
        [
            {id: 5, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 6, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: 7, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 8, state: Spot.FREE, res_id: -1},
            {id: 9, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 10, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: 11, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 12, state: Spot.FREE, res_id: -1},
            {id: 13, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 14, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: 15, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 16, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: -1, state: Spot.EMPTY, res_id: -1}, 
            {id: 17, state: Spot.FREE, res_id: -1},
            {id: 18, state: Spot.FREE, res_id: -1},
            {id: 19, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
        ]
    ],
    "2A": [
        [
            {id: -1, state: Spot.EMPTY, res_id: -1}, 
            {id: 1, state: Spot.FREE, res_id: -1},
            {id: 2, state: Spot.FREE, res_id: -1},
            {id: 3, state: Spot.FREE, res_id: -1},
            {id: 4, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
        ],
        [
            {id: 5, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 6, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: 7, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 8, state: Spot.FREE, res_id: -1},
            {id: 9, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 10, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: 11, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 12, state: Spot.FREE, res_id: -1},
            {id: 13, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 14, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: 15, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 16, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: -1, state: Spot.EMPTY, res_id: -1}, 
            {id: 17, state: Spot.FREE, res_id: -1},
            {id: 18, state: Spot.FREE, res_id: -1},
            {id: 19, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
        ]
    ],
    "3": [
        [
            {id: -1, state: Spot.EMPTY, res_id: -1}, 
            {id: 1, state: Spot.FREE, res_id: -1},
            {id: 2, state: Spot.FREE, res_id: -1},
            {id: 3, state: Spot.FREE, res_id: -1},
            {id: 4, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
        ],
        [
            {id: 5, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 6, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: 7, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 8, state: Spot.FREE, res_id: -1},
            {id: 9, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 10, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: 11, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 12, state: Spot.FREE, res_id: -1},
            {id: 13, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 14, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: 15, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 16, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: -1, state: Spot.EMPTY, res_id: -1}, 
            {id: 17, state: Spot.FREE, res_id: -1},
            {id: 18, state: Spot.FREE, res_id: -1},
            {id: 19, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
        ]
    ],
    "3A": [
        [
            {id: -1, state: Spot.EMPTY, res_id: -1}, 
            {id: 1, state: Spot.FREE, res_id: -1},
            {id: 2, state: Spot.FREE, res_id: -1},
            {id: 3, state: Spot.FREE, res_id: -1},
            {id: 4, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
        ],
        [
            {id: 5, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 6, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: 7, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 8, state: Spot.FREE, res_id: -1},
            {id: 9, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 10, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: 11, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 12, state: Spot.FREE, res_id: -1},
            {id: 13, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 14, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: 15, state: Spot.FREE, res_id: -1}, 
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: 16, state: Spot.FREE, res_id: -1},
        ],
        [
            {id: -1, state: Spot.EMPTY, res_id: -1}, 
            {id: 17, state: Spot.FREE, res_id: -1},
            {id: 18, state: Spot.FREE, res_id: -1},
            {id: 19, state: Spot.FREE, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
            {id: -1, state: Spot.EMPTY, res_id: -1},
        ]
    ],
};

const Glicinias = parkService.getParkByName(glici.name) ?? parkService.createPark(glici);