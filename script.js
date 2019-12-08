var specialArr = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', , '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var numericArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var userPassword = [];

function genPassword() {
    do {
        var passLength = parseInt(prompt('Choose a password length between 8 and 128 characters.'));
    } while (isNaN(passLength) || passLength > 128 || passLength < 8);

    do {
        var charType = prompt('Choose a character type: Special, Numeric, Lowercase, or Uppercase');
        charTypeName = charType.toLowerCase();
    } while (charTypeName !== 'special' && charTypeName !== 'numeric' && charTypeName !== 'lowercase' && charTypeName !== 'uppercase');

    if (charTypeName === 'special') {
        for (var i = 0; i < passLength; i++) {
            var randomChar = Math.floor(Math.random() * specialArr.length);
            userPassword.push(specialArr[randomChar]);
            console.log(userPassword);
        }
    } else if (charTypeName === 'numeric') {
        for (var i = 0; i < passLength; i++) {
            var randomChar = Math.floor(Math.random() * numericArr.length);
            userPassword.push(numericArr[randomChar]);
            console.log(userPassword);
        }
    } else if (charTypeName === 'lowercase') {
        for (var i = 0; i < passLength; i++) {
            var randomChar = Math.floor(Math.random() * lowerArr.length);
            userPassword.push(lowerArr[randomChar]);
            console.log(userPassword);
        }
    } else {
        for (var i = 0; i < passLength; i++) {
            var randomChar = Math.floor(Math.random() * upperArr.length);
            userPassword.push(upperArr[randomChar]);
            console.log(userPassword);
        }
    }
}