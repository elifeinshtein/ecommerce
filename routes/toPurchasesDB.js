//get all purchases
app.get("/purchases" , async(req ,res)=>{
    try{
    const allPurchases = await pool.query("SELECT * FROM purchases");
    res.json(allPurchases.rows);
    
    }catch(err){
        console.error(err.message);
        }
        });
        
    
    
    //get 1 purchase
    app.get("/purchases/:orderID" ,async(req ,res)=>{
        const {orderID} = req.params;
        try
        {
        const purchases = await pool.query("SELECT * FROM purchases WHERE orderID = $1" , [orderID]);
        res.json (purchases.rows[0]);
        }
        catch(err){
            console.error(err.message);
            }
            });
            
    
    //create a purchase
    
    app.post("/purchases" , async(req ,res)=>{
    try{
    const {orderID} =req.body;
    const newOrder = await pool.query("INSERT INTO purchases(orderID) VALUES ($1) RETURNING *" , [orderID]);
    res.json(newOrder.rows[0]);
    
    }catch(err){
        console.error(err.message);
        }
        });
        
    
    
    //update a purchase
    app.put ("/purchases/:orderID" ,async(req ,res)=>{
        try
        {
        const{orderID} = req.params;
        const {orderDate} = req.body;
        const updatePurchase = await pool.query ("UPDATE purchases SET orderDate = $1 WHERE orderID = $2" ,[orderDate , orderID]
        );
        res.json ("purchase was successfully updated");
        }
        catch(err){
            console.error(err.message);
            }
            });
            
    //delete a purchase
    
    app.delete("/purchases/:orderID" ,async(req ,res)=>{
        try
        {
        const{orderID} = req.params;
        const deletePurchase = await pool.query("DELETE FROM purchases WHERE orderID = $1" ,[orderID]);
        res.json ("purchase was succesfuly deleted");
        }
        catch(err){
            console.error(err.message);
            }
            });
            
    
    
     