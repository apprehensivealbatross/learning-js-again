const myObject = {
    js : 'Javascript',
    cpp : 'C++',
    go : 'Golang',
    rs : 'Rust'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js","java", "go"]
for (const key in programming) {
    // console.log(programming[key])
}

const myMap = new Map();
myMap.set('IN', "India")
myMap.set('USA', "United States of America")
myMap.set('FR', "France")

for (const key in myMap) {
//    console.log(key)
}

for (const [key,value] of myMap.entries()) {
console.log(`${key} is for ${value}`)
}

