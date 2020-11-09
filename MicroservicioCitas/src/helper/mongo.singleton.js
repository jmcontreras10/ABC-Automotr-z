const MongoClient = require('mongodb');
const url = 'mongodb://129.146.109.197:8081';
let client;
let db;

const mongo = {
    connect: () => {
        console.log(url)
        MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
            if (err) throw err;
            else {
                console.log('Connected to DB');
                console.log(client);
                db = client.db('citas');
            }
        });

    },
    getDb: () => {
        return db;
    },
    closeDb: async () => {
        await client.close();
    }
}

module.exports = mongo;