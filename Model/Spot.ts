export enum Spot {
    EMPTY = -2,
    EXPIRED,
    FREE,
    BOOKED,
    OCCUPIED,
    LOW_FEE,
    HEAVY_FEE,
    MAINTENANCE
}

export const SpotRecord : Record<number, string> = {
    [Spot.EMPTY]: "EMPTY",
    [Spot.EXPIRED]: "EXPIRED",
    [Spot.FREE]: "FREE",
    [Spot.BOOKED]: "BOOKED",
    [Spot.OCCUPIED]: "OCCUPIED",
    [Spot.LOW_FEE]: "LOW FEE",
    [Spot.HEAVY_FEE]: "HEAVY FEE",
    [Spot.MAINTENANCE]: "MAINTENANCE"
}