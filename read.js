const {MongoClient}=require('mongodb');
const express=require('express');
const router=express.Router();

const Db_Url='mongodb://heroku_ns1g333f:qbk7pS2WJaij8W8@ds261616.mlab.com:61616/heroku_ns1g333f';

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