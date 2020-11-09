const Client = require('../core/entities/client.entity');
const Vehicle = require('../core/entities/client.entity');

module.exports = CRM = {
    async getClientById(id) {
        const response = await fetch('https://c7im7i6hsp6slqthkex6nf4bhe.apigateway.us-phoenix-1.oci.customer-oci.com/crm/clients/?id='+id);
        const data = await JSON.parse(response);
        return new Client(
            data.id,
            data.name,
            data.email
        );
    },
    async getVehicleById(id) {
        const response = await fetch('https://c7im7i6hsp6slqthkex6nf4bhe.apigateway.us-phoenix-1.oci.customer-oci.com/crm/vehicles/?id='+id);
        const data = await JSON.parse(response);
        return new Vehicle(
            data.id,
            data.idCliente,
            data.brand,
            data.lastDate
        );
    },
}