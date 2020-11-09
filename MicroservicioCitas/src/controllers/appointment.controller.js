const appointmentInteractor = require ('../core/interactors/appointment.interactor');

const appointmentsController = {
  getAppointmentsController : async (req, res) => {
    const { query } = res;
    const { id, clientId, startingDate, vehicleId } = query;
    let params = {
      id: id,
      clientId: clientId,
      startingDate: startingDate,
      vehicleId: vehicleId
    }
    console.log(query);
    for (let propName in params) { 
      if (params[propName] === null || params[propName] === undefined) {
        delete params[propName];
      }else{

      }
    }
    console.log(query);
    const appointments = await appointmentInteractor.getAppointments(params);
    res.status(200).json(appointments);
  }
}

module.exports = appointmentsController;