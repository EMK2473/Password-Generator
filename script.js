let lowercase = "abcdefghijklmnopqrstuvwxyz"; 
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
let numbers = "0123456789"; 
let special = "!@#$%^&*"; 

function generate_password() {
  let quantity = document.querySelector("#quantity").value;
  let special_source = document.querySelector("#special").checked;
  let lowercase_source = document.querySelector("#lower_case").checked;
  let uppercase_source = document.querySelector("#upper_case").checked;
  let numbers_source = document.querySelector("#numbers").checked;
  let password = "";
  let type = [lowercase, uppercase, numbers, special];
  if (!special_source) {
    type.splice(3, 1);
  }
  if (!numbers_source) {
    type.splice(2, 1);
  }
  if (!uppercase_source) {
    type.splice(1, 1);
  }
  if (!lowercase_source) {
    type.splice(0, 1);
  }
  if (
    !special_source &&
    !numbers_source &&
    !uppercase_source &&
    !lowercase_source
  ) {
    alert("Must select AT LEAST one character type");
  }
  if (quantity < 8 || quantity > 128) {
    alert("Quantity MUST BE between 8-128");
    return;
  }
  for (let i = 1; i <= quantity; i++) {
    
    let type_selection = Math.floor(Math.random() * type.length); 
    let character_selection = Math.floor(
      Math.random() * type[type_selection].length
    ); 
    password = password + type[type_selection][character_selection]; 
  }
  document.querySelector("#textarea").value = password; 
}
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generate_password);
