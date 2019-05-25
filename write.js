const {MongoClient}=require('mongodb');
const express=require('express');
const router=express.Router();

const dburl="mongodb://<username>:<password>@ds113849.mlab.com:13849/mydb";
router.post('/',(req,res)=>{

    MongoClient.connect(dburl,async (err,client)=>{
        if(err)
        throw err;
    
        const db=client.db('mydb');
        const info=db.collection('info');
        info.insertOne({
            name:req.body.name,
            phone:req.body.phone
        }).then(()=>{
            res.send("item inserted");
        })
    
    })

})


module.exports=router;
