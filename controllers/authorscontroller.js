const express = require('express')

const user = require('../models/authorschema')


const createauthor = async(req,res)=>{                              //post request
    
   
    const inputData = req.body;

    if(!inputData.email && !inputData.mobile_number){
        return res.send('Provide data to create your account');
    } 

    else{

        try{

        const existingUserEmail = await user.findOne({ 'email': inputData.email});                //function to find duplicate entries

        const existingUserMob = await user.findOne({'mobile_number':inputData.mobile_number})

        if (existingUserEmail || existingUserMob) {
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
const readauthor = async (req,res) =>{
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
const updateauthor = async (req,res)=>{
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
const deleteauthor = async(req,res) =>{
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


module.exports= {createauthor,readauthor,updateauthor,deleteauthor}