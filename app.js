const fetch = require('cross-fetch');
 
(async () => {
  console.time('db');
  try {
    for (let index = 0; index < 8000; index++) {
        const url = `http://localhost:3000/api/v1/shortnames/${index}`;
        const res = await fetch(url);
        
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
    }
  } catch (err) {
    console.error(err);
  }
  console.timeEnd('db');
})();