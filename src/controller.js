const db = require('./database');
const cache = require('./cache');

const getData = async shortname => {

    try {
     
        const dataFromCache = await cache.get(shortname);
    
        if (dataFromCache) {
            console.log('data from cache...');
            return {
                status: 200,
                message: JSON.parse(dataFromCache)
            };
        } else {
            const record = await db.find({ 'shortname': shortname });

            if (record) {
                await cache.set(shortname, record);
                console.log('data from db...');
                return {
                    status: 200,
                    message: record
                };
            } else {
                console.log('data not found...');
                return {
                    status: 404,
                    message: 'Not found'
                };
            }
            
        }
    
    } catch (error) {
        console.log('Error: ', error);
        return {
            status: 500,
            message: 'Error processing request'
        };
    }
};

module.exports = { getData };