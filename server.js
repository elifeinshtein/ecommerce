require ('dotenv').config()
const express = require('express');
const jwt = require('jsonwebtoken');
module.exports = {
  prodAndCart : require('./controller/prodAndCartDB.js'),
  purchases : require('./controller/purchasesDB.js'),
  users : require('./controller/usersDB.js')
}
const app = express();
const PORT =3000;


app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});

