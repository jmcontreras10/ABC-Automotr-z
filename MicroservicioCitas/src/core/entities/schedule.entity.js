const Mechanic = require("./mechanic.entity");
const ServiceCenter = require("./serviceCenter.entity");

module.exports = class Schedule {
    constructor(id, mechanic, serviceCenter, kindService, startingDate, endingDate, isFree) {
        this.id = id;
        this.mechanic = mechanic;
        this.serviceCenter = serviceCenter;
        this.kindService = kindService;
        this.startingDate = startingDate;
        this.endingDate = endingDate;
        this.isFree = isFree;
    }
}