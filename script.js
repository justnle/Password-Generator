var specialArr = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', , '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var numericArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var userPassword = [];
var passLength = 0;

function genPassword() {
    do {
        passLength = parseInt(prompt('Choose a password length between 8 and 128 characters.'));
    } while (isNaN(passLength) || passLength > 128 || passLength < 8);

    do {
        var charType = prompt('Choose a character type: Special, Numeric, Lowercase, or Uppercase');
        var charTypeName = charType.toLowerCase();
    } while (charTypeName !== 'special' && charTypeName !== 'numeric' && charTypeName !== 'lowercase' && charTypeName !== 'uppercase');

    if (charTypeName === 'special') {
        var whichArr = specialArr;
        getArr(whichArr);
    } else if (charTypeName === 'numeric') {
        var whichArr = numericArr;
        getArr(numericArr);
    } else if (charTypeName === 'lowercase') {
        var whichArr = lowerArr;
        getArr(lowerArr);
    } else {
        var whichArr = upperArr;
        getArr(upperArr);
    }

    return userPassword;
}

function getArr(whichArr) {
    for (var i = 0; i < passLength; i++) {
        var randomChar = Math.floor(Math.random() * whichArr.length);
        userPassword.push(whichArr[randomChar]);
    }
}

console.log(userPassword);