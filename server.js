const express = require('express')
// import express from 'express'
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
// const url = 'mongodb+srv://anshpopli29:mongodb12341234@cluster29.mkweaxn.mongodb.net/Backend?retryWrites=true&w=majority&appName=Cluster29';
app.use(express.json());
// const userMode1 = require('./models/userSchema')
// const dBConnect = require('./middlewares/dB')

// mongoose.connect(url,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then((data)=>{
//     console.log('Db connected',data);

// }).catch((err)=>{
//     console.log('err');
// })
// userMode1();
// dBConnect;
// const userController=require('./controllers/userController')
// app.get('/',(req,res) =>{
//     res.send("hello world")
// })

// app.get('/home',(req,res)=>{
//     res.send("hello jiiiiii hor kidda");
// })
// app.post('/register',userController.register);                       //using post request from another file
// app.post('/login',userController.login);


//CRUD operation

//READ Operation

// app.get('/getData',userController.getUser);

//Update Operation
// app.post('/updateUser/:_id',userController.updateUser);

//Delete Operation
// app.post('/deleteUser/:_id',userController.deleteUser);








// task

const books = require('./models/bookschema');
const authors = require('./models/authorschema');
const publications = require('./models/publicationschema');
const library = require('./middlewares/libDB');
const bookscontroller=require('./controllers/bookscontroller');
const authorscontroller=require('./controllers/authorscontroller');
const publicationscontroller=require('./controllers/publicationscontroller');
books();
publications();
authors();
library;
app.post('/createbook',bookscontroller.createbook);
app.post('/createauthor',authorscontroller.createauthor);
app.post('/createpublication',publicationscontroller.createpublication);

app.get('/readbook',bookscontroller.readbook);
app.get('/readauthor',authorscontroller.readauthor);
app.get('/readpublication',publicationscontroller.readpublication);

app.post('/updatebook',bookscontroller.updatebook);
app.post('/updateauthor',authorscontroller.updateauthor);
app.post('/updatepublication',publicationscontroller.updatepublication);

app.post('/deletebook',bookscontroller.deletebook);
app.post('/deleteauthor',authorscontroller.deleteauthor);
app.post('/deletepublication',publicationscontroller.deletepublication);


app.listen(3000,()=>{
    console.log("server started on 3000");
})