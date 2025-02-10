const express = require('express')
const port = 6578
const app = express()

app.get('/',(req,res)=>{
    res.status(200).send('hello world')
})

app.listen(port,()=>{
    console.log(`server is connected. http://localhost:${port}`)
})

app.post('/',(req,res)=>{
    const {Username , Email , password , Date_of_birth} = req.body
    if(!Username)
        return res.status(400).send('Username cannot be empty.')
    if(!Email)
        return res.status(404).send('Email cannot be empty')
    if(password.length<8 || password.length>16)
        return res.status(407).send('password should be greater than 8 or less than or equal to 16')
})