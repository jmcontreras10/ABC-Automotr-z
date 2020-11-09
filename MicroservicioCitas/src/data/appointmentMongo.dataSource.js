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
                e.vehicleId,
                new Date(e.date)
            )
        );
        return apps;
    },
    async addNewAppointment(appointment){
        //  POST Cita
        const collection = mongo.getDb().collection('appointments');
        const result = await collection.insert({
            id: appointment.id,
            clientId: appointment.clientId,
            scheduleId: appointment.schedule.id,
            vehicleId: appointment.id,
            date: appointment.date.toString(),
            isFree: false
        });
        return result;
    },
    cancelAppointmentById(id){
        //  DELETE Cita
        const collection = mongo.getDb().collection('appointments');
        const result = await collection.remove({
            id: id
        });
        return result;
    }
}