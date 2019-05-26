const express=require('express');

const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const PORT=process.env.PORT||4578
const Db_Url='mongodb://rishabh:sharma78@moridemo.herokuapp.com:'+PORT+'/mydb';

app.use('/put',require('./write'))
app.use('/get',require('./read'))
app.get('/',(req,res)=>{
    res.send("welcome");

})

app.listen(PORT,()=>{
    console.log("server started");
})

module.exports=Db_Url;
