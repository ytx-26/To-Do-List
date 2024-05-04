//Input Box
const userInput = document.getElementById('Input-Box');
const userInputValue = userInput.value;


//Button 
const Button = document.getElementById('Button');


//Where the user input is going to appear
const input = document.getElementById('Input'); 


//Function 
function additionToPrintBox(){
    let newDiv = document.createElement('h2');
    newDiv.append(input);
    newDiv.classList.add('User-Text');

}


// Getting user input after they click on the button
Button.addEventListener('click', additionToPrintBox);



