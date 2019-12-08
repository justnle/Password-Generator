do {
    var passLength = parseInt(prompt('Choose a password length between 8 and 128 characters.'));
} while (isNaN(passLength) || passLength > 128 || passLength < 8);

console.log(passLength);

do {
    var charType = prompt('Choose a character type: Special, Numeric, Lowercase, or Uppercase');
    var charTypeName = charType.toLowerCase();
} while (charTypeName !== 'special' && charTypeName !== 'numeric' && charTypeName !== 'lowercase' && charTypeName !== 'uppercase');

// if (charTypeName === 'special') {
//     alert('special characters');
// } else if (charTypeName === 'numeric') {
//     alert('numeric');
// } else if (charTypeName === 'lowercase') {
//     alert('lowercase');
// } else (charTypeName === 'uppercase') {
//     alert('uppercase');
// }

var specialArr = [' ', '!', '"', '#', '$', '%', '&', '\'', ' (',  ')',  '*',  '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', , '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var numericArr = [0,1,2,3,4,5,6,7,8,9];
var lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var userPassword = [];

for (var i = 0; i < passLength; i++) {
    var randomChar = Math.floor(Math.random() * lowerArr.length);
    userPassword.push(lowerArr[randomChar]);
    console.log(userPassword);
}