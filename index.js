const express = require("express");
module.exports = {
  prodAndCart : require('./prodAndCartDB.js'),
  purchases : require('./purchasesDB.js'),
  users : require('./usersDB.js')
}
const app = express();
const PORT =3000;


app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});

const bcrypt = require('bcryptjs');
 
const password = 'pass123';
const hashedPassword;
 
// Encryption of the string password
bcrypt.genSalt(10, function (err, Salt) {
 
    // The bcrypt is used for encrypting password.
    bcrypt.hash(password, Salt, function (err, hash) {
 
        if (err) {
            return console.log('Cannot encrypt');
        }
 
        hashedPassword = hash;
        console.log(hash);
 
        bcrypt.compare(password, hashedPassword,
            async function (err, isMatch) {
 
                // Comparing the original password to
                // encrypted password
                if (isMatch) {
                    console.log('Encrypted password is: ', password);
                    console.log('Decrypted password is: ', hashedPassword);
                }
 
                if (!isMatch) {
 
                    // If password doesn't match the following
                    // message will be sent
                    console.log(hashedPassword + ' is not encryption of '
                        + password);
                }
            })
    })
})