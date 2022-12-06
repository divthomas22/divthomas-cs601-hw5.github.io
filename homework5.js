function validate(){
    var valfirst = firstName();
    var vallast = lastName();
    var valfac = facilitator();
    var valfood = formFood(); // make sure at least one option is selected
    var valyear = formYear(); // make sure at least one option is selected

    // check if all validations passed
    if (valfirst && vallast && valfac && valyear && valfood){
        alert("All validations passed.");
        return true;
    } else {
        alert("Validations failure. Form not submitted."); // even if just one failed
    }
    return false; //stops the form submission
}

function firstName(){
    var firstName = document.getElementById("firstName").value;
    if (firstName.length < 2){
        alert("Sorry, minimum character length required for first name is 2.");
    }
    var regEx = /^[a-zA-Z]+$/;
    if (!firstName.match(regEx)){
        alert("Sorry, only alpha characters are allowed in first name.");
    } else {
        return true;
    }

    return false;
}

function lastName(){
    var lastName = document.getElementById("lastName").value;
    if (lastName.length < 2){
        alert("Sorry, minimum character length required for last name is 2.");
    }
    var regEx = /^[a-zA-Z]+$/;
    if (!lastName.match(regEx)){
        alert("Sorry, only alpha characters are allowed in last name.");
    } else {
        return true;
    }

    return false;
}

function facilitator(){
    var facilitator = document.getElementById("facilitator").value;
    facArray = ["JEN", "BEHDAD", "CHRIS", "CHRISTIAN", "JOSH"];
    for (var i = 0; i < facArray.length; i++) {
        if (facArray.includes(facilitator.toUpperCase())){
            return true;
        }
    }
    alert("Invalid facilitator.")
    return false;
}

function formYear(){
    var years = document.getElementsByName("semester");
    for (var i = 0; i < years.length; i++){
        if (years[i].checked){
            return true;
        }
    }
    alert("Please select an estimated graduation year.");
    return false;
}

function formFood(){
    var foods = document.getElementsByName("foodType");
    for (var i = 0; i < foods.length; i++){
        if (foods[i].checked){
            return true;
        }
    }
    alert("Please select at least one food preference.");
    return false;
}