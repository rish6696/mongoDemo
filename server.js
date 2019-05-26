const express=require('express');

const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const PORT=process.env.PORT||4578
const Db_Url='mongodb://heroku_ns1g333f:qbk7pS2WJaij8W8@ds261616.mlab.com:61616/heroku_ns1g333f';

app.use('/put',require('./write'))
app.use('/get',require('./read'))
app.get('/',(req,res)=>{
    console.log(Db_Url);
    res.send("welcome");

})

app.listen(PORT,()=>{
    console.log("server started");
})

module.exports=Db_Url;
