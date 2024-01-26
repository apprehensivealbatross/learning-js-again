const user = {
    username: "Hitesh",
    loginCunt: 9,
    signIn: true,

    getUserDetails: function() {
        console.log(`got user details from DB with ${this.username}`);
        console.log(this)
    }
}
// console.log(user.username);
// console.log(this)

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function() {
        console.log(`Welcome ${this.username}`)
}

this.hello = function() {
    console.log(`hello test`)
}
    // return this  // implicitly happens no need to write again. 
}

const userOne = new User("hvishal", 12, true)
const userTwo = new User("victor", 45, "assas")
console.log(userTwo.greeting());
console.log(userOne);
console.log(userOne.constructor)
console.log(userOne instanceof User);
console.log(userTwo instanceof User);


// instance of


