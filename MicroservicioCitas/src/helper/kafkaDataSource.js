const { Kafka } = require('kafkajs');
let kafka;


const config = {
    clientId: 'citas',
    kafka_topic: 'citas',
    brokers: ['129.146.181.6:9092'],
    connectionTimeout: 3000,
    authenticationTimeout: 1000,
    reauthenticationThreshold: 10000,
};

const kafkaConn = {
    connect: async () => {
        // 1.Instantiating kafka
        kafka = new Kafka(config);
        // 2.Creating Kafka Producer
        const producer = kafka.producer();
        await producer.connect()
    },
    send: (msg) => {
        const message = {
            message: msg
        }
        await producer.send({
            topic: 'citas',
            messages:
                [{ value: JSON.stringify(message)}],
        })
    }
}

module.exports = kafkaConn;