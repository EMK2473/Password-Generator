let lowercase = "abcdefghijklmnopqrstuvwxyz"; // 26 index string
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 26 index string
let numbers = "0123456789"; // 10 index string
let special = "!@#$%^&*"; // 8 index string
//                 0         1         2        3
// const type = [lowercase, uppercase, numbers, special];
function generate_password() 
{
  let quantity = document.querySelector("#quantity").value;
  let special_source = document.querySelector("#special").checked;
  let lowercase_source = document.querySelector("#lower_case").checked;
  let uppercase_source = document.querySelector("#upper_case").checked;
  let numbers_source = document.querySelector("#numbers").checked;
  let password = "";
  let type = [lowercase, uppercase, numbers, special];
  if (!special_source){
    type.splice(3,1)
 }
 if (!numbers_source){
   type.splice(2,1)
 }
 if (!uppercase_source){
   type.splice(1,1)
 }
 if (!lowercase_source){
   type.splice(0,1)
 }
  for (let i = 1; i <= quantity; i++) { // loop to create password
    console.log(type)
    let type_selection = Math.floor(Math.random() * type.length); // gives me a random number between 0-4 (the length of "type")
    let character_selection = Math.floor(Math.random() * type[type_selection].length); //gives me a random index in the string
    password = password + type[type_selection][character_selection]; //generating the whole password
  }
  console.log(password)//checks if the password is working as intended
  //now that i have the password solved, this finds the text area, and gives the "value" which is the text box content
   document.querySelector("#textarea").value = password //finding text area's "value (or) content" then giving it the value of password
}
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generate_password);


// document.getElementById()
//document.querySelector('textarea') = function seems like the right thing, but where?**




// Add event listener to generate button
// generateBtn.addEventListener("click", generate_password);

// int index=Math.floor
// for (let i = 1; i )
// lowercase
// Math.floor(Math.random() * 10)

// Assignment Code

// var generateBtn = document.querySelector("#generate");
// console.log(generateBtn)

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword("");
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// writePassword()
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // ACII table conversions
// // arrays
// lower_case
// // hex value 61-7a
// // 97-122 decimal value
// upper_case
// // decimal value
// // 65-90
// numbers
// //decimal value
// // 0-9
// special
// // ! @ # $ % ^ & ( )

// // var password_potential = {
// //     number: number,
// //     alphabetLOW: alphabetLOW,
// //     alphabetCAP: alphabetCAP
// //     specialCHAR: specialCHAR
// // } ;

// // var pword-loop = '';
// // for (var i  in pword-potential)
