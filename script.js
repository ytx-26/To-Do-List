//Button 
const Button = document.getElementById('Button');


//Where the user input is going to appear
const inputContainer = document.getElementById('Input'); 


//Function 
function additionToPrintBox(){
    const userInput = document.getElementById('Input-Box').value;
    let paragraphTag = document.createElement('li');
    paragraphTag.textContent = userInput;
    paragraphTag.classList.add('User-Text');
    
    inputContainer.appendChild(paragraphTag);

}


// Getting user input after they click on the button
Button.addEventListener('click', additionToPrintBox);



