const Appointment = require('../core/entities/appointment.entity');

const mongo =  require('../helper/mongo.singleton');

module.exports = appointmentMongo = {
    async getApointmentsByParams(params){
        const collection = mongo.getDb().collection('appointments');
        const appointmentsG = await collection.find(params).toArray();
        const apps = appointmentsG.map(e =>
            new Appointment(
                e.id,
                e.clientId,
                e.scheduleId,
                e.vehicle,
                e.date
            )
        );
        return apps;
    },
    addNewAppointment(appointment){
        throw new Error('Method not implemented.');
    },
    cancelAppointmentById(id){
        throw new Error('Method not implemented.');
    }
}