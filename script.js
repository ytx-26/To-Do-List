//Button 
const Button = document.getElementById('Button');


//Where the user input is going to appear
const input = document.getElementById('Input'); 


//Function 
function additionToPrintBox(){
    const userInput = document.getElementById('Input-Box').value;
    let paragraphTag = document.createElement('h2');
    paragraphTag.textContent = userInput;
    paragraphTag.appendChild(input);
    paragraphTag.classList.add('User-Text');

}


// Getting user input after they click on the button
Button.addEventListener('click', additionToPrintBox);



