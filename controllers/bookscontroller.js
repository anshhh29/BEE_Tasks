const express = require('express')

const user = require('../models/bookschema')


const createbook = async(req,res)=>{                              //post request
    
   
    const inputData = req.body;

    if(!inputData.subject || !inputData.serial_number){
        return res.send('Provide data to create your account');
    } 

    else{

        try{

        const existingUsersubject = await user.findOne({ 'subject': inputData.subject});                //function to find duplicate entries

        const existingUserMob = await user.findOne({'serial_number':inputData.serial_number})

        if (existingUsersubject || existingUserMob) {
        return res.status(409).json({                        //to send message of duplicate response on postman
            'message': "User already exists"
            });
        }

        const data = await user.create(inputData);
        console.log(data);
        res.json({
            status:200,
            message:'Register successful',
            data: data
        })
    
    }catch(err){
        console.log(err);
        res.send(err);
    }
 }
}

//READ Operation
const readbook = async (req,res) =>{
    try{
        const getUser = await user.find();
        console.log(getUser);
        res.json({
            'status':200,
            'message':"User List",
            data :getUser
        })
    }catch(err){
        console.log(err);
        res.send(err);
    }
}

//Update operation
const updatebook = async (req,res)=>{
    try{
        const id = req.params._id;
        const updateData = req.body;
        if(!id || !inputData){
            res.send('Provide specific field to get update');
        }
        else{
            const updateUser = await user.findByIdAndUpdate(id,updateData,);
            console.log(updateUser);
        }
    }catch(err){
        console.log(err);
        res.send(err);
    }
}

//Delete Operation
const deletebook = async(req,res) =>{
    try{
    const deleteUser = req.params._id;
if(!id)
  res.send("provide specific field to delete");
else{
  const deleteData = await user.findByIdAndDelete(id);
  console.log(deleteData);
  res.send(deleteData);
}
}catch(err){
    console.log(err);
    res.send(err);
}
}


module.exports= {createbook,readbook,updatebook,deletebook}