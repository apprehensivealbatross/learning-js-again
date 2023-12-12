let a = 300
if(true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER:", a);
} 

// console.log(a);
// console.log(b);

function one() {
    const userName = 'vishal'

    function two() {
        const website = 'youtube'
        console.log(userName);
    }
    // console.log(website);

    two()
}
// one()

if(true) {
    const username = 'vishal'
    if(username === 'vishal') {
        const website = ' youtube'
        // console.log(username + website);
    }
    // console.log(website); // website is not defined
}

// console.log(username); // username is not defined

//++++++++++++++interesting++++++++++++++++++//

// console.log(addOne(5))
function addOne(num) {
    return num + 1

}
// console.log(addTwo(5))  //cannot access addTwo() before initialization 
const addTwo = function(num) {
    return num + 2
}
