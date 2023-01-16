// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var length;
var lowerCase;
var upperCase;
var numeric;
var special;
var password = [];
var characterSelected;

// Function to prompt user for password options
function getPasswordOptions() {
  function long() {length = parseInt(
    prompt("Please enter the number of characters you would like your password to contain. This must be a number between 10 and 64 inclusive")
    );
    return;
  }

  long();

  while (Number.isNaN(length) === true || length < 10 || length > 64) {
    if (Number.isNaN(length) === true) {
      alert("That's not a number.");
      long();
      } else {
          alert("That character length is out of bounds. Please select a number between 10 and 64 inclusive.");
          long();
        }
  }

  function characters() {
    lowerCase = confirm("Do you wish your password to contain lower case letters?");
    upperCase = confirm("Do you wish your password to contain upper case letters?");
    numeric = confirm("Do you wish your password to contain numeric symbols (numbers)?");
    special = confirm("Do you wish your password to contain special characters?");
    return;
  }

  characters();

  while (lowerCase === false && upperCase === false && numeric === false && special === false) {
    alert("You must select at least one character type!"); 
    characters();
  }
}

// Function for getting a random element from an array
function getRandom() {
  function passwordWriter() {
    password.push(characterSelected); r = 10;
    return;
  }

  while (password.length < length) {
    r = Math.floor(Math.random() *4);
    if (lowerCase === true && r === 0) {s = Math.floor(Math.random() * lowerCasedCharacters.length); characterSelected = lowerCasedCharacters[s]; passwordWriter();}
    else if (upperCase === true && r === 1) {t = Math.floor(Math.random() * upperCasedCharacters.length); characterSelected = upperCasedCharacters[t]; passwordWriter();}
    else if (numeric === true && r === 2) {u = Math.floor(Math.random() * numericCharacters.length); characterSelected = numericCharacters[u]; passwordWriter();}
    else if (special === true && r === 3) {v = Math.floor(Math.random() * specialCharacters.length); characterSelected = specialCharacters[v]; passwordWriter();}
  }
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  getRandom()
  alert("Please find your new password in the textbox. To generate another password please refresh the page and click the Generate Password button again.")
  return password.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);