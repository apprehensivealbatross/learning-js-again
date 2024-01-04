// No this keyword in arrow function
// this - current context ko refer karna
const user = {
    userName: 'vishal',
    price: 499,
    welcomeMessage: function() {
        console.log(`${this.userName}, Welcome to website`); // to refer to the current context, using this keyword
        console.log(this);
    } 
}
// user.welcomeMessage()

// user.userName = 'hitesh'
// user.welcomeMessage()
// console.log(this); // in browser, the global object is a window object, but in node runtime, it's an empty object {}

// function chai() {
//     let username = 'viha'
//     console.log(this.username) // undefined
//     console.log(this)
// }

// const chai = function() {
    // let username = 'viha'
    //     console.log(this.username) // undefined
    
    // }
    const chai = () => {
        let username = 'viha'
        // console.log(this.username) // undefined
        console.log(this) // {}
    }
    chai()
    
    const addTwo = (num1,num2) => {
        return num1 + num2
    }
// if curly braces, then return keyword if only parenthesis, dont write return keyword
    const addTwo1 = (num1,num2) => num1 + num2 // implicit return
    const addTwo2 = (num1,num2) => (num1 + num2)

    const addTwo3 = (num1,num2) => ({username: 'hitesh'})

    // console.log(addTwo3(1,2));
// https://www.section.io/engineering-education/how-to-use-javascript-arrow-functions-and-this-keyword/