const {MongoClient}=require('mongodb');

const Db_Url='mongodb://localhost:27017';


MongoClient.connect(Db_Url,(err,client)=>{
    if(err)
    throw err;

    const db=client.db('mydb');
    const products=db.collection('edevices');
    
    
    products.updateOne(
        {
            vendor:'nokia'
        },
        {
            $set:{vendor:'apple'}
        }
    ).then((err,result)=>{
        if(err)
        throw err

        console.log(result)
        client.close();
    }).catch((err)=>{
        console.log(err);
    })

})

