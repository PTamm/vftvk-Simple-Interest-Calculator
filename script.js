/*
    A function that computes the interest a user will earn based on a principal value, interest rate, and timespan.
*/
function compute()
{
    // get the values from the inputs
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // calculate the interest
    var interest = principal * years * rate/100;

    // convert the year input to an actual year
    var year = new Date().getFullYear()+parseInt(years);

    // display the final output
    document.getElementById("result").innerHTML = "If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+"\<br\>in the year "+year+"\<br\>"
}

/*
    A function that dynamically updates the rate as the user moves the slider.
*/
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+'%';
}

/*
    A function to validate the input for the principal field.
*/
function validatePrincipal(){
    var principal = document.getElementById("principal").value;
    if (principal <= 0){
        document.getElementById("error").innerText = "Please enter a positive number";
        return 0;
    } else {
        document.getElementById("error").innerText = "";
        return 1;
    }
}