//add and remove row in the inputing grades page//
function addRows() {
    let table = document.getElementById('emptbl');
    let rowCount = table.rows.length;
    let cellCount = table.rows[0].cells.length;
    let row = table.insertRow(rowCount);
    for (let i = 0; i <= cellCount; i++) {
        let cell = 'cell' + i;
        cell = row.insertCell(i);
        cell.innerHTML = document.getElementById('col' + i).innerHTML;
    }
}

function deleteRows() {
    let table = document.getElementById('emptbl');
    let rowCount = table.rows.length;
    if (rowCount > '3') {
        let row = table.deleteRow(rowCount - 1);
        rowCount--;
    } else {
        alert('There should be at least 2 row');
    }
}

////////////////////////////////////////////////////////

//password requirments////////////////

let myInput = document.getElementById("signuppassword");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
    // Validate lowercase letters
    let lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    let upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    let numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}
//password requirments////////////////
