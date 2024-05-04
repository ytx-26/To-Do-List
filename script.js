//Input Box
const userInput = document.getElementById('Input-Box');


//Button 
const Button = document.getElementById('Button');


//Where the user input is going to appear
const input = document.getElementById('Input'); 


//Function 
function additionToPrintBox(){
    const userInput = document.getElementById('Input-Box').value;
    let newDiv = document.createElement('h2');
    newDiv.textContent = 
    newDiv.appendChild(input);
    newDiv.classList.add('User-Text');

}


// Getting user input after they click on the button
Button.addEventListener('click', additionToPrintBox);



