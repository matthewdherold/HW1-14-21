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
  console.log('Password length:');
  console.log(pwlength);
  var pwlowercase = confirm('Use lowercase letters?');
  console.log('Lowercase?:');
  console.log(pwlowercase);
  var pwuppercase = confirm('Use uppercase letters?');
  console.log('Uppercase?:');
  console.log(pwuppercase);
  var pwnumbers = confirm('Use numbers?');
  console.log('Numbers?:');
  console.log(pwnumbers);
  var pwspecialchars = confirm('Use special characters?');
  console.log('Special characters?:');
  console.log(pwspecialchars);
  
}




// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
