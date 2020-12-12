const Appointment = require('../core/entities/appointment.entity');
const Schedule = require('../core/entities/schedule.entity');

const mongo = require('../helper/mongo.singleton');

module.exports = scheduleMongo = {
    async getScheduleById(id){
        const collection = mongo.getDb().collection('schedules');
        const schedulesG = await collection.find({id: id}).toArray();
        const apps = schedulesG.map(e =>
            new Schedule(
                e.id,
                e.mechacnicId,
                e.serviceCenterId,
                e.kindService,
                new Date(e.startingDate),
                new Date(e.endingDate),
                e.isFree
            )
        );
        return apps;
    }
}