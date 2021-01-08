// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
  password = ""
  for (var i = 1; i < 2;) {
  var pwLength = parseInt(prompt('How many chars? (please input a number between 8 and 128)'));
  if (pwLength < 8) {
    alert('Password must be at least 8 chars');
  }
  else if (pwLength > 128) {
    alert('Password must be less than 128 chars');
   }
   else { i++
   }
  }
  console.log('Password length:');
  console.log(pwLength);
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

  var pwCharSet = "";
  var lowerSet = "abcdefghijklmnopqrstuvwxyz"
  var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberSet = "0123456789"
  var specSet = "!#$%&*+,-./:;<=>?@^_~"
  var criteriaSet = 0

  if (pwlowercase === true) {
    pwCharSet += lowerSet;
    console.log(pwCharSet);
    password += lowerSet.charAt(Math.random() * lowerSet.length);
    console.log(password);
    criteriaSet + 1;
  }
  if (pwuppercase === true) {
    pwCharSet += upperSet;
    console.log(pwCharSet);
    password += upperSet.charAt(Math.random() * upperSet.length);
    console.log(password);
    criteriaSet + 1;
  }
  if (pwnumbers === true) {
    pwCharSet += numberSet;
    console.log(pwCharSet);
    password += numberSet.charAt(Math.random() * numberSet.length);
    console.log(password);
    criteriaSet + 1;
  }
  if (pwspecialchars === true) {
    pwCharSet += specSet;
    console.log(pwCharSet);
    password += specSet.charAt(Math.random() * specSet.length);
    console.log(password);
    criteriaSet + 1;
  }
  
  for (var i = criteriaSet, n = pwCharSet.length; i < pwLength; ++i) {
    password += pwCharSet.charAt(Math.random() * n);
}
  console.log(password);
      


  return password;
  
}




// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);