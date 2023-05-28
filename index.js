//TODO: shift creation

    //date field
        //button for today?

    //time in field
    //time out field
        //option drop downs?

    //location field

    //assign-employee drop down (field for prototypes sake)

//TODO: employee creation
    // field for first name, last name
    // role/job title


//TODO: shift submission button
    //takes information and creates a shift

//TODO: shift preservation after submission
    //database probably, or local storage.

//employee assignment dropdown must come from persisted data somewhere.
//location assignment must come from persisted data somewhere.


var dateInput = document.getElementById("date"); //date form
var startInput = document.getElementById("start"); //start time form
var endInput = document.getElementById("end"); //end time form
var locationInput = document.getElementById("location"); //location form
var employeeInput = document.getElementById("employee"); // employee assignment form

var forms = [dateInput, startInput, endInput, locationInput, employeeInput]; //i feel like a genius

var createShiftButton = document.getElementById("create"); //create shift button

var shiftContainer = document.getElementById("shifts"); //holds all created shifts

var shift = { //redundant?
    date: dateInput.value,
    start: startInput.value,
    end: endInput.value,
    location: locationInput.value,
    employee: employeeInput.value
};

function createShift() { //create shift function
        //console.log(dateInput.value, startInput.value, endInput.value, locationInput.value, employeeInput.value); //getting all information from inputs correctly.

    for (let i=0; i < forms.length; i++) { //collects data from forms, displays them, and adds them to the appropriate div
        let userInput = document.createElement("h1");
        userInput.innerHTML = forms[i].value;
        shiftContainer.appendChild(userInput);
    };

    for (let i=0; i < forms.length; i++) { // clears input forms
        forms[i].value = "";
    };

};

createShiftButton.addEventListener("click", createShift);





