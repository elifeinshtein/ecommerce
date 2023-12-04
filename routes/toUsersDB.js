//get all users
app.get("/users" , async(req ,res)=>{
    try{
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
    
    }catch(err){
        console.error(err.message);
        }
        });
        
    
    
    //get 1 user
    app.get("/users/:userID" ,async(req ,res)=>{
        const {userID} = req.params;
        try
        {
        const users = await pool.query("SELECT * FROM users WHERE userID = $1" ,[userID]);
        res.json (users.rows[0]);
        }
        catch(err){
            console.error(err.message);
            }
            });
            
    
    //create a user
    
    app.post("/users" , async(req ,res)=>{
    try{
    const {userID} =req.body;
    const newUser = await pool.query("INSERT INTO users(userID) VALUES ($1) RETURNING *" , [userID]);
    res.json(newUser.rows[0]);
    
    }catch(err){
        console.error(err.message);
        }
        });
        
    
    //update a user
    app.put ("/users/:userID" ,async(req ,res)=>{
        try
        {
        const{userID} = req.params;
        const {email} = req.body;
        const updatePurchase = await pool.query ("UPDATE purchases SET orderDate = $1 WHERE orderID = $2" ,[orderDate , orderID]
        );
        res.json ("purchase was successfully updated");
        }
        catch(err){
            console.error(err.message);
            }
            });
            
    //delete a user
    
    app.delete("/users/:userID" ,async(req ,res)=>{
        try
        {
        const{userID} = req.params;
        const deletePurchase = await pool.query("DELETE FROM purchases WHERE orderID = $1" ,[userID]);
        res.json ("purchase was succesfuly deleted");
        }
        catch(err){
            console.error(err.message);
            }
            });
            
    
    