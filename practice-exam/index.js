// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
var greeting = function(greeting, location, time){
    // use back ticks to concatenate values
    console.log(`${greeting} ${location} ${time}`)
};



// 2.
var contestants = function(arr){
    // use for each to loop through array 
    arr.forEach((dogs) => {

    })
    // return dogs length to get number
    return dogs.length;
};



// 3.
var filterSpecies = dogs.filter((dog) => {
    // return only the species that are deeply equal to dog
    return dog.species === 'dog'
});


// 4. 
var dogContestants = [... filterSpecies];



// 5. 
var dogsWithClasses = dogContestants.map(dog => {
    // create an object using object.assign
    let obj = Object.assign({}, dog)
    // determine what color the class should be based on the weight
    if (dog.weight >= 21) {
        obj.class = "green";
    } else if (dog.weight >= 11 && dog.weight <= 20) {
        obj.class = "yellow";
    } else if (dog.weight >= 0 && dog.weight <= 10){
        obj.class = "red";
    }
    return obj;
});
    


// 6.
var firstInClass = function(arr, outp={}){
    // base
    if (arr.length === 0){
        return outp;
    }
    // recursive
    // use for in loop to iterate through the properties of the objects inside the array
    for (let key in arr[0]){
        // update the output object by assigning the first object to each property 
            outp[key] = arr[0]
        }
    return firstInClass(arr.slice(1), outp)
    };



// 7.
var votes = dogs.reduce(function(acc, curr){
    // return acc and curr added together
    return acc + curr.votes;
}, 0);