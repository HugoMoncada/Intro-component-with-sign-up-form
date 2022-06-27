const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const validRegex = /\S+@\S+\.\S+/;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    resetInputsErrors();

    for(input of inputs){
        validateInput(input);
    }

});


function validateInput(input){
    
    if(input.name === "email"){
        let mailMessage = document.getElementById(`message-${input.name}`);
        if(input.value.trim() === ""){
            document.getElementById(`error-${input.name}`).style.display = "block";
            mailMessage.style.display ="block";
            mailMessage.innerHTML ="Email cannot be empty";
            input.classList.add("invalid-input");
        }    
        else if(!validRegex.test(input.value.trim())){
            document.getElementById(`error-${input.name}`).style.display = "block";
            mailMessage.style.display ="block";
            mailMessage.innerHTML = "Looks like this is not an email";
            input.classList.add("invalid-input");
        }
    }

    if(input.value.trim() === ""){
        document.getElementById(`error-${input.name}`).style.display = "block";
        document.getElementById(`error-${input.name}`).style.border = "none";
        document.getElementById(`message-${input.name}`).style.display = "block";
        input.classList.add("invalid-input");
    }
}

function resetInputsErrors(){

    let messages = document.querySelectorAll(".message");
    let errorIcons = document.querySelectorAll(".error-icon");
    let inputs = document.querySelectorAll("input");

    for( message of messages){
        console.log();
        message.style.display = "none";
    }

    for(error of errorIcons){
        error.style.display = "none";
    }

    for(input of inputs){
        input.classList.remove("invalid-input");
        error.style.border = "1px solid var(--Grayish-Blue)";
    }
    
}