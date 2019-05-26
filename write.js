const {MongoClient}=require('mongodb');
const express=require('express');
const router=express.Router();

const dburl=require('./server');
router.post('/',(req,res)=>{

    console.log(dburl);
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
