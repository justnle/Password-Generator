// removed ' ' from specialArr..
var specialArr = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var numericArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var selectedArr = [];
var userPasswordArr = [];
var passLength = 0;
var userPassword = '';

function genPassword() {
    passwordReset();

    passLength = prompt('Choose a password length between 8 and 128 characters.');

    if (parseInt(passLength) < 8 || parseInt(passLength) > 128) {
        alert('Invalid length. Please choose a length between 8 and 128 characters.');
    } else if (passLength === null) {
        alert('A password will not be generated.');
    } else {
        selectedCharacters();
        console.log(userPassword);
    }

    document.getElementById('password-form').textContent = userPassword;
}

function selectedCharacters() {
    var specialYes = confirm('Click OK to include special characters in your password.');
    if (specialYes === true) {
        selectedArr.push(specialArr);
    }
    var numericYes = confirm('Click OK to include numerical characters in your password.');
    if (numericYes === true) {
        selectedArr.push(numericArr);
    }
    var lowerYes = confirm('Click OK to include lowercase characters in your password.');
    if (lowerYes === true) {
        selectedArr.push(lowerArr);
    }
    var upperYes = confirm('Click OK to include uppercase characters in your password.');
    if (upperYes === true) {
        selectedArr.push(upperArr);
    }

    if (upperYes === false && lowerYes === false && numericYes === false && specialYes === false) {
        alert('You must select at least one character type.');
    }

    var merged = [].concat.apply([], selectedArr);

    getArr(merged);

    console.log(userPassword);
}

function passwordReset() {
    userPasswordArr.length = 0;
}

function getArr(mergedArr) {
    for (var i = 0; i < passLength; i++) {
        var randomChar = Math.floor(Math.random() * mergedArr.length);
        userPasswordArr.push(mergedArr[randomChar]);
        userPassword = userPasswordArr.join('');
    }
}

function copyPassword() {
    var emptyEl = document.getElementById('password-form').innerHTML;
    if (emptyEl === '') {
        alert('You have not yet generated a password.');
    } else {
        document.getElementById('password-form').select();
        document.execCommand('copy');
        alert('Your password: ' + userPassword + ' has been copied to the clipboard.');
    }
}