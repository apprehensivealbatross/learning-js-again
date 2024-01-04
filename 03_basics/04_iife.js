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

/*
Preventing Global Scope Pollution:
    In JavaScript, variables declared within a function are scoped to that function, meaning they aren't accessible from outside. IIFEs create a private scope, ensuring that variables and functions defined within them don't pollute the global namespace. This helps avoid naming conflicts and keeps code more organized.
     */