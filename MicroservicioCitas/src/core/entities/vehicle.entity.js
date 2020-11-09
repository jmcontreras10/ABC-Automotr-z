module.exports = class Vehicle {
    constructor(id, clientId, brand, lastRevisionDate){
        this.id = id;
        this.clientId = clientId;
        this.brand = brand;
        this.lastRevisionDate = lastRevisionDate;
    }
}