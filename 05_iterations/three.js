// for of
// for (const iterator of object) {
    
// }

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,4,4,5]
for (const value of arr) {
    // console.log(value)
}

const greetings = 'Hello World'
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// Maps
const myMap = new Map();
myMap.set('IN', "India")
myMap.set('USA', "United States of America")
myMap.set('FR', "France")

// console.log(myMap)

for (const [key, value] of myMap) {
    console.log(key, ':-', value)
}

const myObject = { // objects are iterable using for-in loop
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key)
// }

