// generate a random color on each click of the button
// and display the color in the div with id="color"
// use the rgb(r,g,b) format for the color

const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]; 
    }
    return color;
}

console.log(randomColor());
let intervalId;
const startChangeColor = () => {
if(!intervalId){ // if intervalId is null, then start the interval 
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = randomColor(); 
    }, 1000);    
}
}

const stopChangeColor = () => {
    clearInterval(intervalId); 
    intervalId = null; // better to set it to null to avoid memory leaks, clean code 
}
document.querySelector("#start").addEventListener("click", startChangeColor);

document.querySelector("#stop").addEventListener("click", stopChangeColor); 