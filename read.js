const {MongoClient}=require('mongodb');
const express=require('express');
const router=express.Router();

Db_Url=require('./server');

router.post('/',(req,res)=>{
    console.log(Db_Url);
    
MongoClient.connect(Db_Url,async (err,client)=>{
    if(err)
    throw err;

    const db=client.db('heroku_ns1g333f');
    const info=db.collection('info');
    info.find({
        name:req.body.name
    }).toArray().then((result)=>{
        res.send(result);
    })
        


    })
})
module.exports=router;