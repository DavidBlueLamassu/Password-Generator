// Below are four character arrays each of which includes characters of a particular type stored as strings. 
// Characters of each type may be included or rejected by the user to form his or her password. These character types include lists of
// special characters, numeric characters, lower-case characters and upper-case characters. In the comments below they will be 
// referred to collectively as 'the character arrays'.

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

//Variable to hold the user's desired password length
var length;

//Boolean variable to indicate whether the user wishes his or her password to contain lower-case characters
var lowerCase;

//Boolean variable to indicate whether the user wishes his or her password to contain upper-case characters
var upperCase;

//Boolean variable to indicate whether the user wishes his or her password to contain numeric characters
var numeric;

//Boolean variable to indicate whether the user wishes his or her password to contain special characters
var special;

//An empty array to be built up using the push() method, once characters are randomly selected from the character arrays to form 
//a password
var password = [];

//Variable to store the value of randomly selected characters which will be added to the password array using the push() method
var characterSelected;

//The first of five variables to store a random value in the while loop which will build the password array; this variable stores 
//a value between 0 and 3. Each number corresponds to one of the four character arrays from which characters will be selected to build
//a random password. In order for a character to be selected from one of these arrays the while loop requires both that the user
//chose to include the relevant character type (boolean value === true) and that the number corresponding to that character type 
//matches the random value of 'r'. This ensures that not only the character selected from one of the character arrays is chosen 
//randomly (see random variables below) but also that the arrays are selected randomly during each iteration of the while loop. 
//This allows a more random selection process and thereby enhances password security. (Further details of this process are 
//described in the comments for the relevant 'while' loop below.)
var r;

//Four random variables to hold a value within the numerical range determined by the length of each of the four character arrays. 
//Once generated, these values are used to select a string from one of the relevant arrays, which is then stored in the 
//'characterSelected' variable and added to the 'password' array using the push() method.

//Stores a random value corresponding to the 'lowerCasedCharacters' array.
var s;
//Stores a random value corresponding to the 'upperCasedCharacters' array.
var t;
//Stores a random value corresponding to the 'numericCharacters' array.
var u;
//Stores a random value corresponding to the 'specialCharacters' array.
var v;

// Function to prompt user for password options
function getPasswordOptions() {
  
  //Function prompting the user to determine the desired password length, which must be between 10 and 64 characters inclusive. The 
  //parseInt () method is used to convert the value obtained through the prompt from a string to a number.
  function long() {length = parseInt(
    prompt("Please enter the number of characters you would like your password to contain. This must be a number between 10 and 64 inclusive.")
    );
    return;
  }

  //The character length function is invoked.
  long();

  //This 'while' loop guarantees that the user provides correct information to the character length prompt. Firstly, user input must 
  //be a number, secondly it must be a number greater than 10, and thirdly a number less than 65. The loop will continue to prompt
  //the user for correct input until all three of these conditions are met. (Use of the Number.isNaN() method is 
  //derived from the examples on 'W3 Schools': 'JavaScript Number isNaN()' W3 Schools, last viewed 16 January 2023: 
  //https://www.w3schools.com/JSREF/jsref_isnan_number.asp)
  while (Number.isNaN(length) === true || length < 10 || length > 64) {
    if (Number.isNaN(length) === true) {
      alert("That's not a number.");
      long();
      } else {
          alert("That character length is out of bounds. Please select a whole number between 10 and 64 inclusive.");
          long();
        }
  }

  //This function requires the user to confirm whether he or she wishes the password to contain characters from each of the 
  //four relevant types and records his or her answers as booleans corresponding to each of these character classes. (Use of 
  //the 'confirm' popup in this function derives from examples on 'W3 Schools': 'JavaScript Popup Boxes' W3 Schools, last viewed 
  //16 January 2023: https://www.w3schools.com/js/js_popup.asp; see also the 'Try it Yourself>>' link for the 
  //'windows.confirm() method'.)
  function characters() {
    lowerCase = confirm("Do you wish your password to contain lower case letters?");
    upperCase = confirm("Do you wish your password to contain upper case letters?");
    numeric = confirm("Do you wish your password to contain numeric symbols (numbers)?");
    special = confirm("Do you wish your password to contain special characters?");
    return;
  }

  //The character type function is invoked.
  characters();

  //A while loop to guarantee that the user selects at least one character type. This loop will run until at least one character
  //type has been chosen.
  while (lowerCase === false && upperCase === false && numeric === false && special === false) {
    alert("You must select at least one character type!"); 
    characters();
  }
}

// Function for getting a random element from an array
function getRandom() {
  
  //A function to build up the 'password' array once a character has been selected using the relevant 'while' loop below. After the
  //push() method has been invoked the value of the random variable 'r' is made equal to 10. This is done to prevent the 'while' loop
  //continuing to build up a password solely from the first character type the conditional statements allow it to run. 
  //None of the conditional statements will run when r = 10; accordingly, the while loop must run again assigning a new value for 
  //'r' between 0 and 3. This will allow all four character types to be selected during multiple iterations of the loop.
  function passwordWriter() {
    password.push(characterSelected); r = 10;
    return;
  }

  //A 'while' loop to generate a password from user specifications. The 'while' loop will run until the length of the password array is 
  //equal to the 'length' variable (which holds the value for the number of characters the user chose for the password).
  //Given that the 'password' array is empty when the 'while' loop first runs its initial length is 0. 
  while (password.length < length) {
    
    //The value of 'r' is set to a random number between 0 and 3. In order for any of the conditional statements to run 'r' must 
    //be set to the correct value and the user must have chosen the relevant character type to be included in the password (boolean 
    //value === true). If both values are met the conditional statement will run, selecting a random character from one of the four
    //corresponding character arrays. The passwordWriter() function will then be invoked adding a character to the 'password' array 
    //and setting the value of 'r' to 10. This change in value will prevent the conditional statement from continuing 
    //to run and require another iteration of the loop to assign a new random value to 'r' within the valid range of the 
    //conditional statements. At most, one character may be added to the 'password' array per iteration. This ensures not only 
    //that characters are selected randomly from each character array but also that the arrays themselves are randomly selected.  
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

  //Alerts the user that the page must be refreshed in order to generate a new password. 
  alert("Please find your new password in the textbox. To generate another password please refresh the page and click the Generate Password button again.")
  
  //Displays the password as a continuous value without commas. (This use of the join() method to remove commas when displaying 
  //the 'password' array was derived from the reply of James Allardice to a query on 'Stack Overflow': Basim Sherif, 'Removing 
  //commas from javascript array', Stack Overflow (3 September 2018), last viewed 16 January 2023:
  //https://stackoverflow.com/questions/12835621/removing-commas-from-javascript-array)
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