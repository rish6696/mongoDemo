const express=require('express');

const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/put',require('./write'))
app.use('/get',require('./read'))

app.listen(7745,()=>{
    console.log("server started");
})
