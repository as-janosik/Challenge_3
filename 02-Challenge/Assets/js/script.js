// Assignment Code
var generateBtn = document.querySelector("#generate");
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var concatArr = [];
var passwordGenerated = "";
var numOfChar = 0;

console.log(specialChar[1]);
console.log(specialChar[23]);


// Write password to the #password input
function writePassword() {

  //clear array
  concatArr = [];
  //clear password
  passwordGenerated = "";

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //console.log(password);//trying to see what should be printed out for new password. 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  //Asking if they want to use numbers
  var isNumbers = prompt("Do you want to use numbers? (Y/N)");
  console.log(isNumbers);

  if (isNumbers.toUpperCase() === "Y") {

    concatArr = concatArr.concat(nums);
    alert("Numbers have been added");

  } else if (isNumbers.toUpperCase() === "N") {
    //leave blank, do nothing
  } else {
    alert("Please choose Y or N. \n STARTING OVER!");
    generatePassword();
  }

  //Asking if they want to use Lower case letters
  var isLetters = prompt("Do you want to use lowercase letters? (Y/N)");

  if (isLetters.toUpperCase() === "Y") {

    concatArr = concatArr.concat(lowerCase);
    alert("Lowercase letters have been added");

  } else if (isLetters.toUpperCase() === "N") {
    //leave blank, do nothing
  } else {
    alert("Please choose Y or N. \n STARTING OVER!");
    generatePassword();
  }

  //Asking if they want to use Upper case letters
  var isUpper = prompt("Do you want to use uppercase letters? (Y/N)")

  if (isUpper.toUpperCase() === "Y") {

    concatArr = concatArr.concat(upperCase);
    alert("Uppercase letters have been added");

  } else if (isUpper.toUpperCase() === "N") {
    //leave blank, do nothing
  } else {
    alert("Please choose Y or N. \n STARTING OVER!");
    generatePassword();
  }

  //Asking if they want to use special characters
  var isSpecial = prompt("Do you want to use special characters( !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~) ? (Y/N)");

  if (isSpecial.toUpperCase() === "Y") {

    concatArr = concatArr.concat(specialChar);
    alert("Special characters have been added");

  } else if (isSpecial.toUpperCase() === "N") {
    //leave blank, do nothing
  } else {
    alert("Please choose Y or N. \n STARTING OVER!");
    generatePassword();
  }

  //Verify they select a number between 8 and 128 for how long password should be, loop until meets params
  do {
    numOfChar = prompt("How many characters do you want? (Select number between 8 and 128)");
  } while (numOfChar < 8 || numOfChar > 128)

  //Check that array has at least one character option.  Loop based on number characters through array while choosing random char.  
  console.dir(concatArr.length);
  if (concatArr.length === 0) {
    alert("You need to choose at least one type of character.  \n Will now start over...");
    generatePassword();
  }
  else {
    for (var i = 0; i < numOfChar; i++) {

      //var index = Math.floor(Math.random() * options.length);
      var index = Math.floor(Math.random() * concatArr.length);

      passwordGenerated += concatArr[index];

    }
  }


  return passwordGenerated;

}
