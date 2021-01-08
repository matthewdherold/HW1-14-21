// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
  for (var i = 1; i < 2;) {
  var pwlength = parseInt(prompt('How many chars? (please input a number between 8 and 128)'));
  if (pwlength < 8) {
    alert('Password must be at least 8 chars');
  }
  else if (pwlength > 128) {
    alert('Password must be less than 128 chars');
   }
   else { i++
   }
  }
  var pwlowercase = confirm('Use lowercase letters?');
  var pwuppercase = confirm('Use uppercase letters?');
  var pwnumbers = confirm('Use numbers?');
  var pwspecialchars = confirm('Use special characters?');
  console.log(pwlength);
  console.log(pwlowercase);
  console.log(pwuppercase);
  console.log(pwnumbers);
  console.log(pwspecialchars);
}




// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
