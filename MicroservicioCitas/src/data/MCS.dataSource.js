const Mechanic = require('../core/entities/mechanic.entity');
const  ServiceCenter = require('../core/entities/serviceCenter.entity');

module.exports = CRM = {
    async getClientById(id) {
        const response = await fetch('https://c7im7i6hsp6slqthkex6nf4bhe.apigateway.us-phoenix-1.oci.customer-oci.com/providers/mechanics/?id='+id);
        const data = await JSON.parse(response);
        return new Mechanic(
            data.id,
            data.name,
            data.associatedsc
        );
    },
    async getVehicleById(id) {
        const response = await fetch('https://c7im7i6hsp6slqthkex6nf4bhe.apigateway.us-phoenix-1.oci.customer-oci.com/providers/service-centers/?id='+id);
        const data = await JSON.parse(response);
        return new ServiceCenter(
            data.id,
            data.name,
            data.address
        );
    },
}