export var Spot;
(function (Spot) {
    Spot[Spot["EMPTY"] = -2] = "EMPTY";
    Spot[Spot["EXPIRED"] = -1] = "EXPIRED";
    Spot[Spot["FREE"] = 0] = "FREE";
    Spot[Spot["BOOKED"] = 1] = "BOOKED";
    Spot[Spot["OCCUPIED"] = 2] = "OCCUPIED";
    Spot[Spot["LOW_FEE"] = 3] = "LOW_FEE";
    Spot[Spot["HEAVY_FEE"] = 4] = "HEAVY_FEE";
    Spot[Spot["MAINTENANCE"] = 5] = "MAINTENANCE";
})(Spot || (Spot = {}));
export const SpotRecord = {
    [Spot.EMPTY]: "EMPTY",
    [Spot.EXPIRED]: "EXPIRED",
    [Spot.FREE]: "FREE",
    [Spot.BOOKED]: "BOOKED",
    [Spot.OCCUPIED]: "OCCUPIED",
    [Spot.LOW_FEE]: "LOW FEE",
    [Spot.HEAVY_FEE]: "HEAVY FEE",
    [Spot.MAINTENANCE]: "MAINTENANCE"
};
