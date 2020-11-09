const Client = require('../core/entities/client.entity');
const Vehicle = require('../core/entities/client.entity');

module.exports = CRM = {
    async getClientById(id) {
        const response = await fetch('');
        const data = await response.json();
        return data;
    },
    async getVehicleById(id) {
        const response = await fetch('');
        const data = await response.json();
        return data;
    },
}