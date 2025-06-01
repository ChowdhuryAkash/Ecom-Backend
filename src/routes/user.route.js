const express=require('express');
const router=express.Router();




router.post('/signup', (req, res)=>{
    res.send("Sign up route")
})

router.post('/login', (req, res)=>{
    res.send('Login route');
})


module.exports=router;