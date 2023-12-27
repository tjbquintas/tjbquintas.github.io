export var Spot;
(function (Spot) {
    Spot[Spot["EMPTY"] = -2] = "EMPTY";
    Spot[Spot["EXPIRED"] = -1] = "EXPIRED";
    Spot[Spot["FREE"] = 0] = "FREE";
    Spot[Spot["BOOKED"] = 1] = "BOOKED";
    Spot[Spot["OCCUPIED"] = 2] = "OCCUPIED";
    Spot[Spot["LOW_FEE"] = 3] = "LOW_FEE";
    Spot[Spot["HEAVY_FEE"] = 4] = "HEAVY_FEE";
})(Spot || (Spot = {}));
