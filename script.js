// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var specials = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"

function generatePassword(){
  event.preventDefault();
  let passwstring = "";
  let longitud = 0;
  while (longitud<8 || longitud > 128){
  longitud=prompt("define the length of your password, from 8 to 128");
  if (longitud==null){break;}
  }
  let minusculas = confirm("Do you want lowercase in your password?")
  if (minusculas==true){
    passwstring=passwstring.concat(lowercase)
  }
  let mayusculas = confirm("Do you want uppercase in your password?")
  if (mayusculas==true){
    passwstring=passwstring.concat(uppercase)
  }
  let numeros = confirm("Do you want numbers in your password?")
  if (numeros==true){
    passwstring=passwstring.concat(number)
  }
  let caracteres = confirm("Do you want special characters in your password?")
  if (caracteres==true){
    passwstring=passwstring.concat(specials)
  }
  if (minusculas==true ||mayusculas
    ==true ||numeros==true ||caracteres==true){
      alert("Your selection: " + "\n" + "Lowercase: " + minusculas+ "\n"+ "Uppercase: " + mayusculas+ "\n"+ "Numbers: " + numeros+ "\n"+ "Special Characters: " + caracteres+ "\n"+ "Password Length: " +longitud)
     var passw = "";
      for (let i = 0; i < longitud; i++){
        let x=Math.floor(Math.random() * (passwstring.length));
        passw = passw.concat(passwstring[x])
        console.log(i);
        console.log(x);
        console.log(passwstring[x]);
      }
      return passw;
    } else {
      alert("You need to select at least one of the options, start again")
    }
    
}//)