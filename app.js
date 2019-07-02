const fetch = require('cross-fetch');

const quantity = process.argv[2] || 1;
 
(async () => {
  console.time('timetoresponse');
  try {
    for (let index = 0; index < quantity; index++) {
        const url = `http://localhost:3000/api/v1/units/${index}`;
        const res = await fetch(url);
        
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
    }
  } catch (err) {
    console.error(err);
  }
  console.timeEnd('timetoresponse');
})();