const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]
const mha_heroes = ["deku", "shoto", "bakugo"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const allNewHeroes =[...marvel_heroes, ...dc_heroes, ...mha_heroes] // better way to join multiple arrays, remember kaach ka glass dropping on the floor and glasses
// spread operator 
// console.log(allNewHeroes);

const anotherArray = [ 1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);

// console.log(Array.isArray("Vishal"))
// console.log(Array.from("Vishal"))
// console.log(Array.from({name: "vishal"})); // interesting case, givess an empty object, need to specify whether to create array from keys or value.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3));