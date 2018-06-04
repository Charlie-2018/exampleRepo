var mypass = ""


// function should take in a password string and return whether or not it contains special characters
function check_for_specialChars(password) {
	// define a list of special characters
	var specialChars = ["!", "@", "#", "$", "&"]

	// turn the password argument into an array
	var letters = password.split("")

	// check each item in the letter array for special characters
	for(var index = 0; index < letters.length; index++) {
		// determine if the letter matches any item in specialChars array
		if(specialChars.includes(letters[index])){
			console.log("currently looping over: " + letters[index])
			return true
		}
	}

	return false
}

mypass = mypass+"@#"

// validPass will be set to true if the paramater contains a special character,
// false, if the paramater does not contain a special character
var validPass = check_for_specialChars("password#!")

console.log(validPass);
