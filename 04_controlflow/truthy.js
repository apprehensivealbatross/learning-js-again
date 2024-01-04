const userEmail = []

if(userEmail) {
    console.log("Got user email");
} else {
console.log("Dont have user email");
}

// falsy
// false, 0, -0, BigInt 0n, null, "", undefined, NaN

// truthy 
//  true, "0", 'false', " ", [], {}, function(){}, 

if(userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}