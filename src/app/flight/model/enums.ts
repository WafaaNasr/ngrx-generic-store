export enum ActionType {
    AddOrUpdate,
    Delete
}

export enum ArrivalDepartureType {
    Actual,
    Estimated,
    Enroute
}

export enum MessageType {
    flightplan,
    departure,
    arrival,
    position,
    ground_position,
    vehicle_position,
    onblock,
    offblock,
    cancellation
}

export enum FlightStatus {
    Normal = '1',
    Warning = '2',
    Danger = '3',
    Completed = '4'
}
export enum DisplayStatus {
    Expand = '1',
    Collapse = "2",
    Close = "3",
    Show = "4"
}