// singleton
// Object.create // constructor

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Vishal",
    "Full Name" : "Vishal Shinde",
    [mySym]: "myKey1",
    age : 18,
    location : "Mumbai",
    email : "vishal@gmail.com",
    isLoggedIn : true,
    lastLoggedInDays : ['Monday', 'Sunday']
}

// console.log(JsUser.email); 
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"])
// console.log(JsUser[mySym]);


JsUser.email = "vishal@chatjippty.com"
Object.freeze(JsUser)
JsUser.email = 'vishal@microsoft.com'
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS user`)
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`)
    }

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
