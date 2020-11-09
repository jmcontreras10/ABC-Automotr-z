const Schedule = require('../entities/schedule.entity');
const Client = require('../entities/client.entity');
const Vehicle = require('../entities/vehicle.entity');
const scheduleMongo = require('../../data/scheduleMongo.dataSource');
const CRM = require('../../data/CRM.dataSource')
const appointmentMongo = require('../../data/appointmentMongo.dataSource');
const kafka = require('../../helper/kafkaDataSource');

const appointmentInteractor = {
    getAppointments: async (params) => {
        //  Get simple Appointment Data
        const appointments = await appointmentMongo.getApointmentsByParams(params);
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
    },
    newAppointment: async (appointment) => {
        //  Watch if the schedule exists and is free
        const sch = await scheduleMongo.getScheduleById(appointment.scheduleId);
        if (shc) {
            if (shc.isFree) {
                //  Add new appointment to database
                const result = await appointmentMongo.addNewAppointment(appointment);
                //  Send to kafka
                kafka.send('There was created a new appointment with the id '+ result.toString());
                //  Complete the info
                return result;
            }
            return { 'error': 'The schedule is not free' }
        }
        return { 'error': 'The schedule dont exists' }
    },
    deleteAppointment: async (id) => {
        //  Verify if the appointment exists
        const appointment = await appointmentMongo.getApointmentsByParams({ id: id });
        if (appointment) {
            //  remove new appointment to database
            const result = await appointmentMongo.cancelAppointmentById(appointment);
            //  Send to kafka
            kafka.send('There was cancelled the appointment with the id '+ result.toString());
        } else {
            return { 'error': 'Theres not appointment' }
        }
        //  Complete the info
        return result;
    }
}

module.exports = appointmentInteractor;