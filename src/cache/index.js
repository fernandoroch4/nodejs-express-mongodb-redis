const redis = require('redis');

const client = () => {
    return new Promise((resolve, reject) => {
        const redisClient = redis.createClient();
        
        redisClient.on('connect', () => {
            resolve(redisClient);
        });

        redisClient.on('error', (err) => {
            reject(err);
        });
    });    
};

const set = async (key, value) => {
    const redisClient = await client();
    return new Promise((resolve, reject) => {
        redisClient.setex(key, 3600, JSON.stringify(value), (err) => {

            if (err) {
                redisClient.quit();
                reject(err);
            } else {
                redisClient.quit();
                resolve(true);
            }
        });
    });
};

const get = async key => {
    const redisClient = await client();
    return new Promise((resolve, reject) => {
        redisClient.get(key, (err, record) => {

            if (err) {
                redisClient.quit();
                reject(err);
            } else {
                redisClient.quit();
                resolve(record);
            }
        });
    });
};

module.exports = {
    set,
    get
}