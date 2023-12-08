// declaring objects using constructor(singletone)
// const tinderUser = new Object()

const tinderUser = {} // non-singleton object
tinderUser.id = '123abc'
tinderUser.name = 'Sammu bhai'
tinderUser.isLoggedIn = false

const regularUser = {
    email: 'some@gmail.com',
    fullName: {
        userNFullName: {
            firstName: 'vishal',
            lastName:'shinde'
        }
    }
}

// console.log(regularUser.fullName.userNFullName.firstName) // optional chaining, question marks after an attribute
// console.log(tinderUser);

const obj1 = {1: 'a', 2: 'b' }
const obj2 = {3: 'a', 4: 'b'}

// const obj3 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1,...obj2}
// console.log(obj3);

// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com",
//     },
//     {
      
//     },
// ]
// users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// ++++++//
// object Destructuring
 const course = {
    courseName : "JS in Hindi",
    price : '999',
    courseInstructor: 'hitesh'
 }
//  course.courseInstructor 

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// {
//    'name': 'hitesh',
//     'courseName': 'js in hindi',
//     'price': 'free'
// }

[
    {},
    {}
]
