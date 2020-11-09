const  express = require('express');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');

//  Helpers
const mongo = require('./helper/mongo.singleton')
//  Controllers
const appointmentsController =require('./controllers/appointment.controller');


dotEnv.config();
const PORT = 8080;

const app = express();
app.use(bodyParser.json());

//  GET Method of Appointments
app.post('/appointments', appointmentsController.getAppointmentsController);

mongo.connect();
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});