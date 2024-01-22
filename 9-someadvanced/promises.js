//  Q and Bluebird were popular promise libraries. 
const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, Cryptopgraphy, network calls
    setTimeout(() => {
        console.log('Async task khatam');
        resolve();
    },1000)
})

promiseOne.then(() => {
    console.log('Promise consumed');
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Async task 2`);
        resolve()
},1000)
})
.then(() => {
    console.log('Promise 2 consumed');
})

const PromiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Async task 3`);
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})
PromiseThree.then((user) => {
    console.log(user);
})


const promiseFour = new Promise((resolve, reject) => {
    setInterval(function(){
        let error = false
        if(!error) {
            resolve({username: "hitest", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(err){
    console.log(err);
}).finally(() => {
    console.log(`the promise is either resolved or rejected`);
})

const promiseFive = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username: "JavaScript", password:  "1234"})
        } else {
            reject(`ERROR: JS went wrong`)
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try { 
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data =  await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);        
//     }
// }
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
   return response.json() 
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
console.log(error)
})