const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
const carShop=[
    {id:'C001', 'brand': 'Toyota','model': 'Camry', 'price': '1,450,000'},
    {id:'C002', 'brand': 'Toyota','model': 'Vios', 'price': '650,000'},
    {id:'C003', 'brand': 'Honda','model': 'CR-V', 'price': '1,500,000'},
    {id:'C004', 'brand': 'Honda','model': 'Civic', 'price': '850,000'},
];

//api, routing
app.get('/api/getcar',(req,res)=>{
    res.send(carShop);
});

app.get('/api/querycar',(req,res)=>{
    const myQueryString = req.query;
    if(Object.keys(myQueryString).length!= 0){
        console.log(myQueryString.id);
        const carId = carShop.find(element => element.id == parseInt(myQueryString.id));
        if(carId){
            res.send(carId);
        }else{
            res.status(404).send('ไม่พบรหัสรถคันนี้');
        }
    } else{
        res.status(404).send('ไม่พบหน้า API ที่เรียก');
    }
});
app.post('/api/addcar',(req,res)=>{
    const carId = req.body.id;
    const carBrand = req.body.brand;
    const carModel = req.body.model;
    const carPrice = req.body.price;

    const newCar = {
        id: carId,
        'brand': carBrand,
        'model': carModel,
        'price': carPrice,

    };
    carShop.push(newCar);
    res.send(carShop);
});

app.post('/api/addcars',(req,res)=>{
    const stuArr = req.body;
    stuArr.forEach(element =>{
        const carId = element.id;
        const carBrand = element.brand;
        const carModel = element.model;
        const carPrice = element.price;

        const newCar = {
            id: stuId,
            'brand': carBrand,
            'model': carModel,
            'price': carPrice,     
    };
    carShop.push(newCar);
    });
    res.send(carShop);
});

app.put('/api/editcar/:id',(req,res)=>{
    const carId = carShop.find(element => element.id === parseInt(req.body.id));
    if(sutId){
        carId.brand = req.body.brand;
        carId.model = req.body.model;
        carId.price = req.body.price;
    }else{
        res.status(404).send('ไม่พบรหัสรถคันนี้');
    }
    res.send(carShop);
});

app.delete('/api/deletecar/:id',(req,res)=>{
    const carId = carShop.find(element => element.id === parseInt(req.params.id));
    if(carId){
        const index =carShop.indexOf(carId);
        carShop.splice(index,1);
    }else{
        res.status(404).send('ไม่พบรหัสรถคันนี้');
    }
    res.send(carShop);
});

app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
});

app.get('/api/getcarid/:id',(req,res)=>{
    const carId = carShop.find(element => element.id === parseInt(req.params.id));
    console.log(req.params.id);
    if(carId){
        res.send(carId);
    }else{
        res.status(404).send('ไม่พบรหัสรถคันนี้');
    }
});