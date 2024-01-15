const form = document.querySelector('form')
// this usecase will give you empty
form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e.target)
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const bmi = (weight / ((height * height)/10000)).toFixed(2)
    // if(height === '' || height < 0 || isNaN(height)) {
    //     results.innerHTML = `please Give a valid height ${height}`
    // } 
    // if(weight === '' || weight < 0 || isNaN(weight)) {
    //     results.innerHTML = `Please Give a valid weight ${weight}`
    // } else  if(bmi < 18.5) {
    //     results.innerHTML = `<span> You are underweight with an BMI Index of ${bmi}</span>`;
    //     // const bmi = (weight / ((height * height)/10000)).toFixed(2)
    //     // results.innerHTML = `<span>${bmi}</span>`;
    
    //     // results.innerHTML = `<span> You are underweight</span>`;
    // } else if(bmi >= 18.5 && bmi < 25) {
    //     results.innerHTML = `<span> You are normal with BMI Index of ${bmi}</span>`;
    // } else if(bmi >= 25) {
    //     results.innerHTML = `<span> You are overweight with BMI Index of ${bmi}</span>`;
    // }

    switch(true) {
        case height === '' || height < 0 || isNaN(height): 
          results.innerHTML = `please Give a valid height ${height}`;
          break;
      
        case weight === '' || weight < 0 || isNaN(weight):
          results.innerHTML = `Please Give a valid weight ${weight}`;
          break;
      
        case bmi < 18.5:
          results.innerHTML = `<span> You are underweight with an BMI Index of ${bmi}</span>`;
          break;
      
        case bmi >= 18.5 && bmi < 25:
          results.innerHTML = `<span> You are normal with BMI Index of ${bmi}</span>`;
          break;
      
        case bmi >= 25:
          results.innerHTML = `<span> You are overweight with BMI Index of ${bmi}</span>`;
          break;
      }
      


})
