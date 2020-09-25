const { Router } = require('express');
const express = require('express');
const router = express.Router();

const restaurants =require('../data');

router.get('/',(req,res)=>{
    res.json(restaurants);
});

router.get('/:id',(req,res)=>{
    const restaurantsId = restaurants.find(element => element.id === parseInt(req.params.id));
    if (restaurantsId){
        res.json(restaurantsId);
    }else{
        res.send('WRONG ID');
    }
});

router.post('/',(req,res)=>{
    let currentRestaurantId =restaurants.slice(-1)[0].id;
    console.log(currentRestaurantId);
    currentRestaurantId +=1 ;
    const newRestaurant = {
        id: currentRestaurantId,
        ...req.body
    };
    restaurants.push(newRestaurant);
    res.json(newRestaurant);
});

router.put('/:id',(req,res)=>{
    const restaurantsId = req.params.id;
    const restaurantsIndex = restaurants.findIndex(element => element.id === parseInt(restaurantsId));
    if (restaurantsIndex >= 0){
    const updateRestaurant = {
        id:restaurantsId,
        ...req.body
    };
    restaurants[restaurantsIndex] = updateRestaurant;
    res.json(updateRestaurant);
    }else{
        res.status(404).send('WRONG ID CANNOT PUT THE DATA');
    } 
});

router.delete('/:id',(req,res)=>{
    const restaurantsId = req.params.id;
    const restaurantsIndex =restaurants.findIndex(element => element.id === parseInt(restaurantsId));
    if (restaurantsIndex >= 0){
        restaurants.splice(restaurantsIndex,1);
        res.json(restaurants);
    }else{
        res.status(404).send('WRONG ID CANNOT DELETE THE DATA');
    }
});

module.exports = router;