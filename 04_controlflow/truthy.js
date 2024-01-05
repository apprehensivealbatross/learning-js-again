const userEmail = []

// if(userEmail) {
//     console.log("Got user email");
// } else {
// console.log("Dont have user email");
// }

// falsy
// false, 0, -0, BigInt 0n, null, "", undefined, NaN

// truthy 
//  true, "0", 'false', " ", [], {}, function(){}, 

// if(userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }


//  Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// va11 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// ternary operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 100") : console.log("more than 100")