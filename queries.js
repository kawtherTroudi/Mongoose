// Create Many Records with model.create()

let personModel = require('./schema/person')
const URI = `mongodb+srv://Phae:Password1@hera.9wgzq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const mongoose = require('mongoose')
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })


let arrayOfPeople = [{ name: 'Rym', age: 27, favoriteFoods: ["Sushi", "Fried rice", "chocolate"], _id:123456 }, { name: "Meriam", age: 48, favoriteFoods: ["Fish", "BBQ", "ice cream"] }, { name: "Imen", age: 26, favoriteFoods: ["Cheese cake", "Meat"] }]

const newPeople = personModel.create(arrayOfPeople)

    .then(function (docs) {
        console.log(docs);

    })
    .catch(err => {
        console.error(err)
    });

// Use model.find() to Search Your Database

const newPeople = personModel.find({name : 'Rym'})

    .then(function (docs) {
        console.log(docs);

    })
    .catch(err => {
        console.error(err)
    });

// Use model.findOne() to Return a Single Matching Document from Your Database

const newPeople = personModel.findOne({favoriteFoods : "chocolate"})

    .then(function (docs) {
        console.log(docs);

    })
    .catch(err => {
        console.error(err)
    });

// Use model.findById() to Search Your Database By _id

const newPeople = personModel.findById(123456)

    .then(function (docs) {
        console.log(docs);

    })
    .catch(err => {
        console.error(err)
    });

// Perform Classic Updates by Running Find, Edit, then Save

personModel.findById(123456)

.then(function (docs) {
   docs.favoriteFoods.push("Hamburger")
   docs.save()
   console.log(docs)
})
.catch(err => {
   console.error(err)
});

// Perform New Updates on a Document Using model.findOneAndUpdate()

personModel.findOneAndUpdate({name: 'Rym'},{age: 20},{new: true,runValidators: true})

.then(doc => {
  console.log(doc)
})
.catch(err => {
  console.error(err)
})

// Delete One Document Using model.findByIdAndRemove

personModel.findByIdAndRemove({_id: 123456})

.then(doc => {
  console.log(doc)
})
.catch(err => {
  console.error(err)
})

// MongoDB and Mongoose - Delete Many Documents with model.remove()

personModel.remove({ name: 'Rym'})

.then(doc => {
  console.log(doc)
})
.catch(err => {
  console.error(err)
})

// Chain Search Query Helpers to Narrow Search Results