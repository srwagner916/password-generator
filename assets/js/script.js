// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
var passwordArr = [];
var mustInclude = [];
var pass = [];

var generatePassword = function(){
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
  var includeLowercase = prompt("Would you like to include lowercase characters? Enter 'yes' or 'no'.");
  if (includeLowercase === "yes" || includeLowercase === "YES") {
    passwordArr = passwordArr.concat(lowercase);
    mustInclude.push(randomGrab(lowercase));
  }
  else if (includeLowercase === "no" || includeLowercase === "NO") {
    passwordArr = passwordArr;
  }
  else {
    alert("Please enter a valid answer.");
    generatePassword();
  } 
  
  var includeUppercase = prompt("Would you like to include uppercase characters? Enter 'yes' or 'no'.");
  if (includeUppercase === "yes" || includeUppercase === "YES") {
    passwordArr = passwordArr.concat(uppercase);
    mustInclude.push(randomGrab(uppercase));
    console.log(mustInclude);
  }
  else if (includeUppercase === "no" || includeUppercase === "NO") {
    passwordArr = passwordArr;
  }
  else {
    alert("Please enter a valid answer.");
    generatePassword();
  }
  
  var includeNumbers = prompt("Would you like to include numbers? Enter 'yes' or 'no'.");
  if (includeNumbers === "yes" || includeNumbers === "YES") {
    passwordArr = passwordArr.concat(numbers);
    mustInclude.push(randomGrab(numbers));
  }
  else if (includeNumbers === "no" || includeNumbers === "NO") {
    passwordArr = passwordArr;
  }
  else {
    alert("Please enter a valid answer.");
    generatePassword();
  }

  var includeSymbols = prompt("Would you like to include special characters? Enter 'yes' or 'no'.");
  if (includeSymbols === "yes" || includeSymbols === "YES") {
    passwordArr = passwordArr.concat(symbols);
    mustInclude.push(randomGrab(symbols));
    console.log(mustInclude);
  }
  else if (includeSymbols === "no" || includeSymbols === "NO") {
    passwordArr = passwordArr;
  }
  else {
    alert("Please enter a valid answer.");
    generatePassword();
  }
  if (includeLowercase === "no" || includeLowercase === "NO"
     && includeUppercase === "no" || includeUppercase === "NO"
     && includeNumbers === "no" || includeNumbers === "NO"
     && includeSymbols === "no" || includeSymbols === "NO") {
       alert("You have to include at least one type of character");
       generatePassword();
     } 
  for (var i=0; i < length; i++) {
    var passCharacters = randomGrab(passwordArr);
    pass = pass.concat(passCharacters);
    console.log(pass);
  }
  for (var i=0; i < mustInclude.length; i++) {
    pass[i] = mustInclude[i];
    console.log(mustInclude);
    console.log(pass);
  }
  return pass.join("");
};


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