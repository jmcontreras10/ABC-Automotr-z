const appointmentInteractor = require('../core/interactors/appointment.interactor');

const appointmentsController = {
  getAppointmentsController: async (req, res) => {
    const { query } = res;
    let id, clientId, startingDate, vehicleId;
    if (query) {
      id, clientId, startingDate, vehicleId = query.id, query.clientId, query.startingDate, query.vehicleId;
    }
    let params = {
      id: id,
      clientId: clientId,
      startingDate: startingDate,
      vehicleId: vehicleId
    }
    for (let propName in params) {
      if (params[propName] === null || params[propName] === undefined) {
        delete params[propName];
      }
    }
    const appointments = await appointmentInteractor.getAppointments(params);
    res.status(200).json(appointments);
  },
  postAppointmentsController: async (req, res) => {
    const { body } = res;
    if (!body) {
      res.status(400).json({ 'Error Message': 'No appointment info introduced' })
    } else {
      const result = await appointmentInteractor.newAppointment(body);
      res.status(200).json(result);
    }
  },
  deleteAppointmentsController: async (req, res) => {
    const { query } = res;
    if (query) {
      const result = await appointmentInteractor.deleteAppointment(query.id);
      res.status(200).json(result);
    } else {
      res.status(400).json({ 'Error Message': 'No appointment id introduced' })
    }
  }
}

module.exports = appointmentsController;