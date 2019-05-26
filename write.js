const {MongoClient}=require('mongodb');
const express=require('express');
const router=express.Router();

const dburl='mongodb://heroku_63l1c2xk:p394l07c106kvc70hbbditc3lm@ds261616.mlab.com:61616/heroku_63l1c2xk'
router.post('/',(req,res)=>{

    console.log(dburl);
    MongoClient.connect(dburl,async (err,client)=>{
        if(err)
        throw err;
    
        const db=client.db('heroku_63l1c2xk');
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
