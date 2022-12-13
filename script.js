// Assignment Code
var generateBtn = document.querySelector("#generate");

const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

function questions() {
  var isValid = false;
  do{
    const length = prompt("Choose password length that is between 8 and 128 characters");
    const askNumbers = confirm("Do you want the password to include numbers?");
    const askUpperCase = confirm("Do you want the password to include uppercase letters?")
    const askLowerCase = confirm("Do you want the password to include lowercase numbers?")
    const askSpecial = confirm("Do you want the password to include special characters?")
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askUpperCase: askUpperCase,
      askLowerCase: askLowerCase,
      askSpecial: askSpecial  
    }
    if((length < 8)||(length > 128))
    alert("Chhoose a number between 8 and 128");
    else if((!askNumbers)&&(!askUowerCase)&&(!askLowerCase)&&(!askSpecial))
    alert("You Must choose at least one type for your password.")
    else
    isValid = true;

  }while(!isValid)
  return responses;
  }

function generatePassword(){
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = "";

  if (passwordOptions.askNumbers){
    for (var i of numbers)
    possibleCombo.push(i);
  }

  if (passwordOptions.askUpperCase){
    for (var i of upperCase)
    possibleCombo.push(i);
  }

  if (passwordOptions.askLowerCase){
    for (var i of lowerCase)
    possibleCombo.push(i);
  }

  if (passwordOptions.askSpecial){
    for (var i of special)
    possibleCombo.push(i);
  }

  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }
 
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
