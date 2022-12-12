// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

function questions() {
  var isValid = false;
  do{
    var length = prompt("Choose password length that is between 8 and 128 characters");
    var askNumbers = confirm("Do you want the password to include numbers?");
    var askUpperCase = confirm("Do you want the password to include uppercase letters?")
    var askLowerCase = confirm("Do you want the password to include lowercase numbers?")
    var askSpecial = confirm("Do you want the password to include special characters?")
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
}
  if (passwordOptions.askUowerCase){
    for (var i of upperCase)
    possibleCombo.push(i);
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
