import Client from "./client.entity";
import Schedule from "./schedule.entity";

export default class Subscription {
    constructor(id, schedule, client) {
        this.id = id;
        this.schedule = schedule;
        this.client = client;
    }
}