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

const posts = 
[
{
  username :"eli" , 
  title :"post1"

},
{
  username :"amnon", 
  title :"post2"

},

]

app.get('/posts',authenticateToken, (req ,res)=>{
  res.json(posts.filter(post =>post.username ===req.user.name))
})


function authenticateToken(req,res,next)
{
  const authHeader = req.headers['authorization']
  const token =authHeader&& authHeader.split(' ')[1]
  if (token== null) return res.sendStatus(401)

  jwt.verify(token , process.env.ACCESS_TOKEN_SECRET,(err ,user)=>{
    if(err) return res.sendStatus(403)
    req.user =next()
  })
}