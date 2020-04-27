// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase   = "abcdefghijklmnopqrstuvwxyz";
var numbers     = "0123456789";
var symbols     = "!@#$%^&*(){}[]=<>/,.";

function generatePassword() {
    var allowed = '';
  if (document.details.uppercase.checked) {
    allowed += uppercase;
  }
  if (document.details.lowercase.checked) {
    allowed += lowercase;
  }
  if (document.details.numbers.checked) {
    allowed += numbers;
  }
  if (document.details.symbols.checked) {
    allowed += symbols;
  }
  var password = "";
  var password = generatePassword();
  var length   = parseInt(document.details.length.value);
  for(var i = 8; i< 128; i++) {
    var random = Math.floor(Math.random() * 128);
    password += allowed[random];
  }
  return password;

}



// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
function writePassword() {
  document.getElementById("password").innerHTML = writePassword();
}
