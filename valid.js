

function clearErrors() {

    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}


function seterror(id, error) {
    //sets error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}


function validateForm() {
    var returnval = true;
    clearErrors();
    var name = document.forms['myform']["fname"].value;
    if (name.length < 5) {
        seterror("name", "The length of name is too short");
        returnval = false;

    }

    if (name.length == 0) {
        seterror("name", "Enter your name");
        returnval = false;
    }
    var email = document.forms['myform']["femail"].value;
    if (email.length < 9 || email.length > 30) {
        seterror("email", "Please ensure you enter a valid email");
        returnval = false;
    }
    var phone = document.forms['myform']["fphone"].value;
    if (phone.length != 11) {
        seterror("phone", "You must enter valid phone number");
        returnval = false;
    }
    var pass = document.forms['myform']["fpass"].value;
    if (pass.length < 6) {

        seterror("pass", "Password must be atleast 6 charecters");
        returnval = false;
    }
    var cpass = document.forms['myform']["fcpass"].value;
    if (cpass != pass) {

        seterror("cpass", "Confirm password must match password");
        returnval = false;


        return returnval;
    }
};


// const submitButton = document.getElementById('submitButton');

// form.addEventListener('submit', function(event) {

//     const isValid = validateForm(); // Assume validateForm() returns true if validation passes
//     if (isValid) {
//         // Change the button color or apply styles if validation is true
//         submitButton.style.backgroundColor = 'green';
//         submitButton.style.color = 'blue';
//         // Or you can add a CSS class to the button for more complex styles
//         // submitButton.classList.add('valid');

//         // Continue with form submission
//     } else {
//         // If validation fails, prevent form submission
//         event.preventDefault();
//         // Optionally, you can reset the button styles if needed
//         submitButton.style.backgroundColor = '';
//         submitButton.style.color = '';
//         // Or remove the CSS class added previously
//         // submitButton.classList.remove('valid');
//     }
// });
