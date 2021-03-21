// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
var passwordArr = [];

var generatePassword = function(){
  var length = prompt("How many characters would you like? Please enter a number between 8 and 128");
  if(length >= 8 && length <= 128) {
    console.log(length);
  }
  else {
    alert("Please enter a valid answer.");
    generatePassword();
  }
  var includeLowercase = prompt("Would you like to include lowercase characters? Enter 'yes' or 'no'.");
  if (includeLowercase === "yes" || includeLowercase === "YES");
    var passCharacters = passwordArr.concat(lowercase);
    console.log(passCharacters);
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Create functions for generating length and characters
// 
// 
// 

// var generateLength = function() {
//   var length = prompt("How many characters would you like? Please enter a number between 8 and 128");
//   if(length >= 8 && length <= 128) {
//     return parseInt(length);  
//   }
//   else {
//     alert("Please enter a valid answer.");
//     generateLength();
//   }
// };

// var generateLowerCase = function() {
//   var lowerCase = "abcdefghijklmnopqrstuvwxyz";
//   var includeLowerCase = prompt("Would you like to include lower case characters? Please enter 'yes' or 'no'.");
//   if (includeLowerCase === "yes" || includeLowerCase === "YES") {
//     console.log(lowerCase(Math.floor(Math.random()* lowerCase.length)))
//     return lowerCase(Math.floor(Math.random()* lowerCase.length));
    
//   }
//   else {
//     alert("Please enter a valid response.");
//     generateLowerCase();
//   }
// };

// var generateUpperCase = function() {
//   var includeUpperCase = prompt("Would you like to include upper case characters? Please enter 'yes' or 'no'.");
//   if (includeUpperCase === "yes" || includeUpperCase === "YES") {
//     return includeUpperCase;
//   }
//   else {
//     alert("Please enter a valid response");
//     generateUpperCase();
//   }
// };

// var generateSpecialCharacter = function() {
//   var includeSpecialCharacter = prompt("Would you like to include special characters? Please enter 'yes' or 'no'.");
//   if (includeSpecialCharacter === "yes" || includeSpecialCharacter === "YES") {
//     return includeSpecialCharacter;
//   }
//   else {
//     alert("Please enter a valid response");
//     generateSpecialCharacter();
//   }
// };

