const mongoose=require('mongoose')
const username = 'anshpopli29'
const password = 'mongodb12341234'
const url=`mongodb+srv://${username}:${password}@cluster29.mkweaxn.mongodb.net/Backend?retryWrites=true&w=majority&appName=Cluster29`
const library=async ()=>{
    await mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('Db connected');
    
    }).catch((err)=>{
        console.log('err');
    })
    
}
module.exports=library();



