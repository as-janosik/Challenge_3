// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var isNumbers = prompt("Do you want to use numbers? (Y/N)");
  var isLetters = prompt("Do you want to use letters? (Y/N)");
  var isSpecial = prompt("Do you want to use special characters( !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~)? (Y/N)");
  var numChar = prompt("How many characters do you want? (whole number)")
  Is
  
}
