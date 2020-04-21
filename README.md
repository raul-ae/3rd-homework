# 3rd_homework
Generate Passwords

For this homework I used the funtion originally provided in the script.js file.
<!-- generate password -->
The generate password function defines firstable the variables that contain each set of characters:

specials = " !#$%&'()*+,-./:;<=>?@[']^_`{|}~"

lowercase = "abcdefghijklmnopqrstuvwxyz"

uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

number = "0123456789"

then a prompt ask for the password lenght and 4 confirms ask if the passwrod should include lowercase, uppercase, numbers or Special characters.

While the user is confirming his selections, a new string i bein generated, cancatenating form current characters variables (this new string contains only characters that users has confirmed in the confirms)

<!-- calculating the password -->

Once selection is completed from the user has selected his options an alert shows him wether he selected a valid combinaton or he should start again.
If a valid option was selected:
a for is intialized with number of cycles equal to password length.
In each cycle a random number from 0 to the length of the temporary array is generated, that number will be used to pick the character in that index, and will be concatenated to the password solution.
after finishin the FOR we have a randomly generated password with users selections.

<!-- printing the solution in the card -->
using the writepassword function the new passwor is writen where the #password id is located in the HTML.

User can create as many password he needs, just repeating the process.