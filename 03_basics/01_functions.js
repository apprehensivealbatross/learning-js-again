function addTwoNumbers(a,b) {
    console.log(a + b);

}
function addTwoNumbers1(a,b) { // parameters
    return a + b;
    // console.log("Vishal"); // after return no statements will be executed.
}
// console.log(addTwoNumbers1(8,3)) // arguments

function loginUserMsg(userName = "Sam") {
// if (userName == undefined) {
    if (!userName) { 
    console.log("Please enter a username");
    return
}
    return `${userName} just logged in!`
}

// console.log(loginUserMsg("Vishal"))
// console.log(loginUserMsg()) // undefined


// Rest parameters/operators (...args)
function calculateCarPrice(...num1) {
    return num1
}

// console.log(calculateCarPrice(200,344,2343,565656,12));

const user = {
    userName : "vishal",
    prices: 199
}
function handleObject(anyObj) {
        console.log(`UserName is ${anyObj.userName} and price is ${anyObj.price}`);
}
// handleObject(user)
// handleObject({
//     userName: 'Sammy',
//     price: 799
// })

const myNewArr = [200,400,600]

function returnSecondVal(getArray) {
    return getArray[2]
}
// console.log(returnSecondVal(myNewArr));
console.log(returnSecondVal([200,400,500,300,1120]));




