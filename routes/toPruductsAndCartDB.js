//get all products
app.get("/prod" , async(req ,res)=>{
try{
const allProd = await pool.query("SELECT * FROM prod");
res.json(allProd.rows);

}catch(err){
console.error(err.message);
}
});


//get 1 product
app.get("/prod/:makat" ,async(req ,res)=>{
    const {makat} = req.params;
    try
    {
    const prod = await pool.query("SELECT * FROM prod WHERE makat = $1", [makat]);
    res.json (prod.rows[0]);
    }
    catch(err){
        console.error(err.message);
        }
        });
        
        

//create a product

app.post("/prod" , async(req ,res)=>{
try{
const {makat} =req.body;
const newProd = await pool.query("INSERT INTO prod(makat) VALUES ($1) RETURNING *" , [makat]);
res.json(newProd.rows[0]);

}catch(err){
    console.error(err.message);
    }
    });
    
    


//update a product
app.put ("/prod/:makat" ,async(req ,res)=>{
    try
    {
    const{makat} = req.params;
    const {description} = req.body;
    const updateProd = await pool.query ("UPDATE prod SET description = $1 WHERE makat = $2" ,[description , makat]
    );
    res.json ("product was updated");
    }
    catch(err){
        console.error(err.message);
        }
        });
        
//delete a product

app.delete("/prod/:makat" ,async(req ,res)=>{
    try
    {
    const{makat} = req.params;
    const deleteProd = await pool.query("DELETE FROM prod WHERE makat = $1" ,[makat]);
    res.json ("product was succesfuly deleted");
    }
    catch(err){
        console.error(err.message);
        }
        });
        


    