const mongoose = require('mongoose');

// To connect to mongo db server using mongoose

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test')

const carSchema = mongoose.Schema({
    brand:String,
    model:String,
    year:Number,
    avail:Boolean
});
const Car = mongoose.model('Car', carSchema); 

//posting data to database

// const addCar = new Car({
//     brand: 'Lambo',
//     model: 'Urus',
//     year: 2019,
//     avail: true
// })

// addCar.save((err,doc)=>{ 
//     if(err) return console.log(err);
//     console.log(doc)
// })

//How to get data
//  Car.findOne({_id:"60e4a09711b3532e20abe498"},(err,doc)=>{
//      if(err) return console.log(err);
//      console.log(doc)
//  })

// How to delete data
// Car.findOneAndRemove({brand:"Lambo"},(err,doc)=>{
//         if(err) return console.log(err);
//         console.log(doc)
//     })

// Car.remove({brand:"Lambo"},(err,doc)=>{
//     if(err) return console.log(err);
//     console.log(doc)
// })

// How to Update
Car.update({},(err,doc)=>{
    if(err) return console.log(err);
    console.log(doc)
})
 