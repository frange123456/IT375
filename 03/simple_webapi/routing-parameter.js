const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

// IT student
const itStudent = [
    {id:61, name: 'Pra'},
    {id:62, name: 'Vit'}
];

//CE sutdent
const ceStudent = [
    {id:71, name: 'Penny'},
    {id:72, name: 'Gviny'}
];

// major
const allMajors = {
    'it': itStudent,
    'ce': ceStudent
}

// route
app.get('/api/:major',(req,res,next)=>{
    const major = req.params.major.toLowerCase();
    if (major == 'it'){
        const jsonString = JSON.stringify(itStudent);
        req.myobj = jsonString;
        next();
    } else if(major == 'ce'){
        const jsonString = JSON.stringify(ceStudent);
        req.myobj = jsonString;
        next();
    }else{
        res.send('Major not found!!!');
    }
},(req,res)=>{
    req.myobj += 'End of Data';
    res.send(req.myobj);

});

app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
});