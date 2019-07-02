const redis = require("redis");

client = redis.createClient();

client.on("connect", function () {
    console.log('connected...');
});

client.on("error", function (err) {
    console.log(`redis error: ${err}`)
});

const quit = () => {
    client.quit();
};

const set = (key, value) => {
    
    if (!client) return false;

    return new Promise((resolve, reject) => {
        const data = client.setex(key, 300, JSON.stringify(value), (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });   
};

const get = key => {

    if (!client) return false;
    return new Promise((resolve, reject) => {
        const data = client.get(key, (err, value) => {
            
            if (err) {
                reject(err);
            } else {
                resolve(value);
            }
        });
    });
};

module.exports = { set, get , quit};