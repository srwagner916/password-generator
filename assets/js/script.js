// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
// array to hold the pool of characters to use
var passwordArr = [];
// array to hold one of each type of character chosen
var mustInclude = [];
// array to hold the characters of the generated password
var pass = [];

// Function to generate a password
var generatePassword = function(){
  //ask how many characters the password should be
  var length = prompt("How many characters would you like? Please enter a number between 8 and 128");
  if(length >= 8 && length <= 128) {
  }
  else if (!length) {
    return;
  }
  else {
    alert("Please enter a valid answer.");
    generatePassword();
  }
  // ask whether to include lowercase characters
  var includeLowercase = prompt("Would you like to include lowercase characters? Enter 'yes' or 'no'.");
  // if yes, add lower case letters to the pool of characters to use
  if (includeLowercase === "yes" || includeLowercase === "YES") {
    passwordArr = passwordArr.concat(lowercase);
    mustInclude.push(randomGrab(lowercase));
  }
  // if no, don't add lowercase letters to the pool of characters to use
  else if (includeLowercase === "no" || includeLowercase === "NO") {
    passwordArr = passwordArr;
  }
  else {
    alert("Please enter a valid answer.");
    generatePassword();
  } 
  // ask whether to include uppercase characters
  var includeUppercase = prompt("Would you like to include uppercase characters? Enter 'yes' or 'no'.");
  // if yes, add uppercase letters to the pool of characters to use
  if (includeUppercase === "yes" || includeUppercase === "YES") {
    passwordArr = passwordArr.concat(uppercase);
    mustInclude.push(randomGrab(uppercase));
  }
  // if no, don't add uppercase letters to the pool of characters to use
  else if (includeUppercase === "no" || includeUppercase === "NO") {
    passwordArr = passwordArr;
  }
  else {
    alert("Please enter a valid answer.");
    generatePassword();
  }
  // ask whether to include numbers
  var includeNumbers = prompt("Would you like to include numbers? Enter 'yes' or 'no'.");
  // if yes, add numbers to the pool of characters to use 
  if (includeNumbers === "yes" || includeNumbers === "YES") {
    passwordArr = passwordArr.concat(numbers);
    mustInclude.push(randomGrab(numbers));
  }
  // if no, don't add numbers to the pool of characters to use
  else if (includeNumbers === "no" || includeNumbers === "NO") {
    passwordArr = passwordArr;
  }
  else {
    alert("Please enter a valid answer.");
    generatePassword();
  }
  // ask whether to include special characters
  var includeSymbols = prompt("Would you like to include special characters? Enter 'yes' or 'no'.");
  // if yes, add special characters to the pool of characters to use
  if (includeSymbols === "yes" || includeSymbols === "YES") {
    passwordArr = passwordArr.concat(symbols);
    mustInclude.push(randomGrab(symbols));
  }
  // if no, don't add special characters to the pool of characters to use
  else if (includeSymbols === "no" || includeSymbols === "NO") {
    passwordArr = passwordArr;
  }
  else {
    alert("Please enter a valid answer.");
    generatePassword();
  }
  // verify that at least one type of character has been chosen
  if (includeLowercase === "no" || includeLowercase === "NO"
     && includeUppercase === "no" || includeUppercase === "NO"
     && includeNumbers === "no" || includeNumbers === "NO"
     && includeSymbols === "no" || includeSymbols === "NO") {
       alert("You have to include at least one type of character");
       generatePassword();
     } 
  // grab random characters from pool of possible characters and add them to generated password
  for (var i=0; i < length; i++) {
    var passCharacters = randomGrab(passwordArr);
    pass = pass.concat(passCharacters);
  }
  // replace characters in generated password with one of each type of character chosen
  for (var i=0; i < mustInclude.length; i++) {
    pass[i] = mustInclude[i];
  }
  // change the array of the generated password into a string
  return pass.join("");
};

// Function to grab a random value out of an array
var randomGrab = function(arr) {
  var index = Math.floor(Math.random()* arr.length);
  var element = arr[index];
  return element;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);