# Password Generator
This is a password generator web page that is primarily built using JavaScript. In Week 3 and 4 of the UW Coding Boot Camp, we focused on JavaScript and Web APIs, learning how to create JavaScript functions and integrate it into our page through the DOM. The page is minimally styled using the Bootstrap framework that was introduced to the students in Week 2.

# Usage
The page displays a text area to the user with two buttons below, one to 'Generate Password' and one to 'Copy to Clipboard.' By pressing 'Generate Password,' the user is prompted with five messages/questions:

1) A password length between 8 and 128 characters
2) If the user wants to include special characters in their password: **!"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~**
3) If the user wants to include numerical characters in their password: **0123456789**
4) If the user wants to include lowercase characters in their password: **abcdefghijklmnopqrstuvwxyz**
5) If the user wants to include uppercase characters in their password: **ABCDEFGHIJKLMNOPQRSTUVWXYZ**

Once all the prompts are cycled through, a password is generated for the user according to the criteria selected. The user may choose to copy this password to the clipboard by clicking the 'Copy to Clipboard' button, which also displays an alert to the user with their generated password.

# References
[https://javascript.info/task/shuffle](https://javascript.info/task/shuffle) - for the code used to shuffle an array.
[https://getbootstrap.com/](https://getbootstrap.com/) - for Bootstrap.