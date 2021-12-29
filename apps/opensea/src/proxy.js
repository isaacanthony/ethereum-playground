const app = require('express')();
const axios = require('axios');
const cors = require('cors');

app.get('/', cors(), (req, res) => {
  axios.get(req.query.url).then((response) => {
    res.send(response.data);
  });
});

app.listen(8000);
