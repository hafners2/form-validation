var firstName = $("#first-name");
var lastName = $("#last-name");
var email = $("#email");
var emailAddress = email[0].value;
var button = $("#button");

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

function processForm(e) {
    if (firstName[0].value === "") {
        firstName.addClass("error");
    } else if(firstName[0].value != "" && firstName[0].value.length <= 1) {
        firstName.val("").attr("placeholder", "please enter more than one character").addClass("error");
    } else {
        firstName.removeClass("error");
    }

    if (lastName[0].value === "") {
        lastName.addClass("error");
    } else if(lastName[0].value != "" && lastName[0].value.length <= 1) {
        lastName.val("").attr("placeholder", "please enter more than one character").addClass("error");
    } else {
        lastName.removeClass("error");
    }

    if (email[0].value === "") {
        email.addClass("error");
        email.val("").attr("placeholder", "enter email address").addClass("error");
    } else if (!validateEmail(emailAddress)) {
        email.val("").attr("placeholder", "valid email address needed").addClass("error");
    } else {
        email.removeClass("error");
    }
    e.preventDefault();
}

button.on("click", processForm)

