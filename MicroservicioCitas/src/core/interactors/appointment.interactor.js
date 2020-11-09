const Schedule = require('../entities/schedule.entity');
const Client = require('../entities/client.entity');
const Vehicle  = require('../entities/vehicle.entity');
const scheduleMongo  = require('../../data/scheduleMongo.dataSource');
const CRM = require('../../data/CRM.dataSource')
const appointmentMongo  = require('../../data/appointmentMongo.dataSource');

const appointmentInteractor = {
    getAppointments: async (params) => {
        //  Get simple Appointment Data
        const appointments = await appointmentMongo.getApointmentsByParams(params);

        console.log(appointments);
        //  Complete the info
        await appointments.forEach(async app => {
            schId = app.schedule;
            clientId = app.client
            vehId = app.vehicle;
            app.schedule = await scheduleMongo.getScheduleById(schId);
            app.client = await CRM.getClientById(clientId);
            app.vehicle = await CRM.getVehicleById(vehId);
        });
        return appointments;
    }
}

module.exports = appointmentInteractor;