//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
mongoose.connect(mongoDB, {userNewUrlParser: true, useUnifiedTopology: true});

// Get the default connection
var db = mongoose.connection; 

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Require Mongoose
var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});

// Compile the model from schema
var Somemodel = mongoose.model('SomeModel', SomeModelSchema);

// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name: 'awesome '});

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
    if (err) return handleError(err);
    // saved!
});

SomeModel.create({ name: 'also_awesome'}, function (err, awesome_instance) {
    if (err) return handleError(err);
    // saved!
});

// Access model field values using dot notation
console.log(awesome_instance.name); // should log 'also_awesome'

// Change record by modifying the fields, then calling save(). 
awesome_instance.name="New cool name";
awesome_instance.save(function (err) {
    if (err) return handleError(err); //saved!
});

var Athlete = mongoose.model('Athlete', yourSchema);

// find all athletes who play tennis, selecting the name and age fields. 
Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
    if (err) return handleError(err);
    // athletes contains the list of athlets that match the criteria. 
});

// find all athletes that play tennis
var query = Athlete.find({ 'sport': 'Tennis '});

// selecting the 'name' and 'age fields
query.select('name age');

// limit our results to 5 items
query.limit(5);

// sort by age
query.sort({ age: -1 });

// execute the query at a later time
query.exec(function (err, athletes) {
    if (err) return handleError(err);
    // athletes contains an ordered list of 5 athletes who play Tennis.
})

const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Successful Connection!');
    })
    .catch(err => {
        console.error('Unable to connect', err);
    });

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

// force: true will drop the table if it already exists. 
User.sync({force: true}).then(() => {
    //Table created
    return User.create({
        firstName: 'John',
        lastName: 'Hancock'
    });
});

// Querying records
User.findAll().then(users => {
    console.log(users)
})

// Application wide models
const sequelize = new Sequelize('connectionUri', {
    define: {
        timestamps: false // true by default
    }
});

const User = sequelize.define('user', {});
const Post = sequelize.define('post', {}, {
    timestamps: true // timesstamps will now be true. 
})

User.findOne().then(user => {
    console.log(user.get('firstName'));
});

user = await User.findOne()

console.log(user.get('firstName'));

