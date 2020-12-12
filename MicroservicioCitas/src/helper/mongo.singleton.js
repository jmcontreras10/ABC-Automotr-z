const MongoClient = require('mongodb');
const url = 'mongodb://129.146.109.197:27017';
let client;
let db;

const mongo = {
    connect: () => {
        MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
            if (err) throw err;
            else {
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