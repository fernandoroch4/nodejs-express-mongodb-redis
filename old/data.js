const cache = require('./cache');
const MongoClient = require('mongodb').MongoClient;

const getUnit = async shortname => {

    const id = `shortname${shortname}`;

    const dataFromCache = await cache.get(id);

    if (dataFromCache) {
        return {
            status: 200,
            data: JSON.parse(dataFromCache)
        };
    } else {
        const mongoClient = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });
        const client = await mongoClient.connect();
        const db = await client.db('sala_modelo');
        const collection = await db.collection('salas');
        const record = await collection.findOne({ 'shortname': id });
        if (record) {
            await cache.set(id, record);
            return {
                status: 200,
                data: record
            };
        } else {
            return {
                status: 404,
                data: 'Not found'
            };
        }
    }
};

module.exports = { getUnit };