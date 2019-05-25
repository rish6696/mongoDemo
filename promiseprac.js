const m=-10;

function returnpromise()
{
    return new Promise((resolve,reject)=>{
        if(m<0)
        {
            return reject(new Error('negative number'));
        }
        setTimeout(()=>{
            console.log('hello');
            resolve(m);
        },3000)
    })
}

returnpromise().then((m)=>{
    console.log(m);

}).catch(()=>{
    console.log("there is an error");
})

