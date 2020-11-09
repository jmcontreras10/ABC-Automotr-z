const Client = require("./client.entity");
const Schedule = require("./schedule.entity");
const Vehicle = require("./vehicle.entity");

module.exports = class Appointment {
    constructor(id, client, schedule, vehicle, date) {
        this.id = id;
        this.client = client;
        this.schedule = schedule;
        this.vehicle = vehicle;
        this.date = date;
    }
}