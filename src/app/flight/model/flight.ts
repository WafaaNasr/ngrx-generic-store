import { FlightStatus, MessageType, ActionType } from "./enums";


export class Flight {
    id: string;
    action: ActionType;
    type: MessageType;
    fdt: number;
    alt?: number;
    orig: string;
    hexid: boolean;
    aircrafttype: string;
    flightNumber: string;
    status: FlightStatus;
    tail: string;
    dep: string;
    dest: string;
    completed: boolean;
    title: string;
    ctot: string;
    std: string
}
