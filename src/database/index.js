const MongoClient = require('mongodb').MongoClient;

const mongoClient = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
            if (err) reject(err);
            else resolve(client);
        });
    });
};

const insert = async (data) => {
    const client = await mongoClient();
    return new Promise((resolve, reject) => {
        const db = client.db('sala_modelo');
        const collection = db.collection('sala');
        collection.insertOne(data, (err) => {

            if (err) {
                client.close();
                reject(err);
            } else {
                client.close();
                resolve(true);
            }
        });
    });
};

const find = async (data) => {
    const client = await mongoClient();
    return new Promise((resolve, reject) => {
        const db = client.db('sala_modelo');
        const collection = db.collection('sala');
        collection.findOne((data), (err, record) => {
            
            if (err) {
                client.close();
                reject(err);
            } else {
                client.close();
                resolve(record);
            }
        });
    });
};

module.exports = { insert, find };