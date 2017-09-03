export class RealEstate {
    code: string;
    title: string;
    description: string;
    lastChange: Date;
    location: string;
    settlemenet: string;
    surface: number;
    numberOfRooms: number;
    numberOfBedrooms: number;
    floor: number;
    interior: string;
    numberOfBathrooms: number;
    terrace: string;
    airCondition: boolean;
    ownHeating: boolean;
    internet: boolean;
    cableTV: boolean;
    elevator: boolean;
    newBuilding: boolean;
    parking: boolean;
    price: number;
    deposit: number;
    comission: number

    constructor() {
        this.code = null;
        this.title = null;
        this.description = '';
        this.lastChange = null;
        this.settlemenet = '';
        this.location = '';
        this.surface = 0;
        this.numberOfRooms = 0;
        this.numberOfBedrooms = 0;
        this.floor = 0;
        this.interior = '';
        this.numberOfBathrooms = 0;
        this.terrace = '';
        this.airCondition = false;
        this.ownHeating = false;
        this.internet = false;
        this.cableTV = false;
        this.elevator = false;
        this.newBuilding = false;
        this.parking = false;
        this.price = 0;
        this.deposit = 0;
        this.comission = 0
    }

}
