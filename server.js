const express=require('express');

const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const PORT=process.env.PORT||4578


app.use('/put',require('./write'))
app.use('/get',require('./read'))
app.get('/',(req,res)=>{
    console.log(Db_Url);
    res.send("welcome");

})

app.listen(PORT,()=>{
    console.log("server started");
})


