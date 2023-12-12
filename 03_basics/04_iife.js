// Immediately Invoked Function Expression

(function chai() { 
    // named IIFE
    console.log(`DB connected`);
})();

( () => {
    console.log(`db connected 2`);
})();

((name) => {
    console.log(`Database was connected by ${name}`);
})('vishal')