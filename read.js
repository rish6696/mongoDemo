const {MongoClient}=require('mongodb');
const express=require('express');
const router=express.Router();

const Db_Url='mongodb://heroku_63l1c2xk:p394l07c106kvc70hbbditc3lm@ds261616.mlab.com:61616/heroku_63l1c2xk';

router.post('/',(req,res)=>{
    console.log(Db_Url);
    
MongoClient.connect(Db_Url,async (err,client)=>{
    if(err)
    throw err;

    const db=client.db('heroku_63l1c2xk');
    const info=db.collection('info');
    info.find({
        name:req.body.name
    }).toArray().then((result)=>{
        res.send(result);
    })
        


    })
})
module.exports=router;