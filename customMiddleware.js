const fs = require('fs');

module.exports = function customMiddleware(req, res, next) {
  // Destructuring
  const {
    method, body, params, query,
  } = req;

  const date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

  const data = {
    method, body, params, query, date,
  };

  const jsondata = JSON.stringify(data);
  console.log(jsondata);
  next();

  // write file
  fs.writeFile(`data/data${Date.now()}.json`, jsondata, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('successfully');
    }
  });
};
