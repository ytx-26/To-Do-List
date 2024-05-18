//Button 
const Button = document.getElementById('Button');


//Where the user input is going to appear
const inputContainer = document.getElementById('Input'); 


//Function 
function additionToPrintBox(){
    let hostContainer = document.createElement('div');
    hostContainer.classList.add('Host-Container');
    inputContainer.appendChild(hostContainer);

    const userInput = document.getElementById('Input-Box').value;
    let paragraphTag = document.createElement('li');
    paragraphTag.textContent = userInput;
    paragraphTag.classList.add('User-Text');
    
    //Adding text to the box
    hostContainer.appendChild(paragraphTag);

    //Creating a delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList = 'Delete-Button';
    hostContainer.append(deleteButton);
    deleteButton.addEventListener('click', function(){
        inputContainer.removeChild(hostContainer);
    });
}


// Getting user input after they click on the button
Button.addEventListener('click', additionToPrintBox);



