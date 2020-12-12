const  express = require('express');
const bodyParser = require('body-parser');

//  Helpers
const mongo = require('./helper/mongo.singleton')
//  Kafka
const kafka = require('./helper/kafkaDataSource')

//  Controllers
const appointmentsController =require('./controllers/appointment.controller');

const PORT = 3000;

const app = express();
app.use(bodyParser.json());

//  GET Method of Appointments
app.get('/appointments', appointmentsController.getAppointmentsController);
//  POST Method of appointments
app.get('/appointments', appointmentsController.pos);

mongo.connect();
kafka.connect();
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});