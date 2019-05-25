const {MongoClient}=require('mongodb');
const express=require('express');
const router=express.Router();

const Db_Url='mongodb://<username>:<password>@ds113849.mlab.com:13849/mydb';

router.post('/',(req,res)=>{
    
MongoClient.connect(Db_Url,async (err,client)=>{
    if(err)
    throw err;

    const db=client.db('db');
    const info=db.collection('info');
    info.find({
        name:req.body.name
    }).toArray().then((result)=>{
        res.send(result);
    })
        


    })
})
module.exports=router;