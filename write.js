const {MongoClient}=require('mongodb');
const express=require('express');
const router=express.Router();

const dburl='mongodb://heroku_ns1g333f:qbk7pS2WJaij8W8@ds261616.mlab.com:61616/heroku_ns1g333f'
router.post('/',(req,res)=>{

    console.log(dburl);
    MongoClient.connect(dburl,async (err,client)=>{
        if(err)
        throw err;
    
        const db=client.db('heroku_ns1g333f');
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
