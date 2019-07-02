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
    const db = client.db('api');
    const collection = db.collection('logs');
    collection.insertOne(data, (err) => {
        if (err) {
            console.error('Logger error: ', err);
        }
        client.close();
    });
};

/**
 * Save all API request and response
 * @param {*} request 
 * @param {*} response 
 */
const save = async (req, res) => {
    const record = await prepareRecord(req, res);
    insert(record);
};

const prepareRecord = (req, res) => {
    const timecreated = Math.floor(new Date() / 1000);
    const method = req.method || '';
    const requestUrl = req.originalUrl || '';
    const params = JSON.stringify(req.params) || '';
    const body = JSON.stringify(req.body) || '';
    const response = JSON.stringify(res) || '';

    return {
        timecreated,
        method,
        requestUrl,
        params,
        body,
        response
    };
}

module.exports = { save };