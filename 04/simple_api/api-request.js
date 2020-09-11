const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
const itStudents=[
    {id:21, 'frame': 'พัชรพล','lname': 'นวลจันทร์', 'tel': '0812345678'},
    {id:33, 'frame': 'แทนรัก','lname': 'มังคุดละ', 'tel': '0612345678'},
    {id:42, 'frame': 'ชาลิสา','lname': 'เทพกลอง', 'tel': '0912345678'},
    {id:45, 'frame': 'เสกฐนันท์','lname': 'อรรถสิน', 'tel': '0812855678'},
    {id:47, 'frame': 'วิรัลยุทา','lname': 'ถมรุ่ง', 'tel': '09111245678'},
];

//api, routing
app.get('/api/getstudent',(req,res)=>{
    res.send(itStudents);
});

app.get('/api/querystu',(req,res)=>{
    const myQueryString = req.query;
    if(Object.keys(myQueryString).length!= 0){
        console.log(myQueryString.id);
        const stuId = itStudents.find(element => element.id == parseInt(myQueryString.id));
        if(stuId){
            res.send(stuId);
        }else{
            res.status(404).send('ไม่พบรหัสนักศึกษานี้');
        }
    } else{
        res.status(404).send('ไม่พบหน้า API ที่เรียก');
    }
});
app.post('/api/addstu',(req,res)=>{
    const stuId = req.body.id;
    const stuFname = req.body.fname;
    const stuLname = req.body.lname;
    const stuTel = req.body.tel;

    const newStudent = {
        id: stuId,
        'fname': stuFname,
        'lname': stuLname,
        'tel': stuTel,

    };
    itStudents.push(newStudent);
    res.send(itStudents);
});

app.post('/api/addstudents',(req,res)=>{
    const stuArr = req.body;
    stuArr.forEach(element =>{
        const stuId = element.id;
        const stuFname = element.fname;
        const stuLname = element.lname;
        const stuTel = element.tel;

        const newStudent = {
            id: stuId,
            'fname': stuFname,
            'lname': stuLname,
            'tel': stuTel,     
    };
    itStudents.push(newStudent);
    });
    res.send(itStudents);
});

app.put('/api/editstu/:id',(req,res)=>{
    const sutId = itStudents.find(element => element.id === parseInt(req.body.id));
    if(sutId){
        sutId.frame = req.body.fname;
        sutId.lname = req.body.lname;
        sutId.tel = req.body.tel;
    }else{
        res.status(404).send('ไม่พบรหัสนักศึกษานี้');
    }
    res.send(itStudents);
});

app.delete('/api/deletestu/:id',(req,res)=>{
    const stuId = itStudents.find(element => element.id === parseInt(req.params.id));
    if(stuId){
        const index =itStudents.indexOf(stuId);
        itStudents.splice(index,1);
    }else{
        res.status(404).send('ไม่พบรหัสนักศึกษานี้');
    }
    res.send(itStudents);
});

app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
});

app.get('/api/getstuid/:id',(req,res)=>{
    const stuId = itStudents.find(element => element.id === parseInt(req.params.id));
    console.log(req.params.id);
    if(stuId){
        res.send(stuId);
    }else{
        res.status(404).send('ไม่พบรหัสนักศึกษานี้');
    }
});