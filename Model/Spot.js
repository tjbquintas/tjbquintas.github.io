export var Spot;
(function (Spot) {
    Spot[Spot["EMPTY"] = -1] = "EMPTY";
    Spot[Spot["FREE"] = 0] = "FREE";
    Spot[Spot["BOOKED"] = 1] = "BOOKED";
    Spot[Spot["OCCUPIED"] = 2] = "OCCUPIED";
    Spot[Spot["LOW_FEE"] = 3] = "LOW_FEE";
    Spot[Spot["HEAVY_FEE"] = 4] = "HEAVY_FEE";
})(Spot || (Spot = {}));
