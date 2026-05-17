let pass1El = document.getElementById("pass1-el")
let pass2El = document.getElementById("pass2-el")
let generateButton = document.getElementById("generateButton")
let specialCharacters = true
let numbers = true

function getCharacters() {
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
    checkSpecial()
    checkNumbers()
    if (specialCharacters === true && numbers === false) {
        characters.splice(52, 10)
        let randomCharacter = Math.floor(Math.random() * characters.length)
        return characters[randomCharacter]
    } 
    if (specialCharacters === false && numbers === true) {
        characters.splice(62, 31)
        let randomCharacter = Math.floor(Math.random() * characters.length)
        return characters[randomCharacter]
    }
    if (specialCharacters === false && numbers == false) {
        characters.splice(52, 41)
        let randomCharacter = Math.floor(Math.random() * characters.length)
        return characters[randomCharacter]
    }
    if (specialCharacters === true && numbers === true) {
        let randomCharacter = Math.floor(Math.random() * characters.length)
        return characters[randomCharacter]
    }
}

function checkSpecial() {
    let specialCharEl = document.querySelector('input[name="special-char"]:checked')
    if (specialCharEl.value === "yes") {
        return specialCharacters = true
    } 
    if (specialCharEl.value === "no") {
        return specialCharacters = false
    }
}

function checkNumbers() {
    let numbersCharEl = document.querySelector('input[name="numbers"]:checked')
    if (numbersCharEl.value === "yes") {
        return numbers = true
    } 
    if (numbersCharEl.value === "no") {
        return numbers = false
    }
}

generateButton.addEventListener("click", function getPasswords() {
    let passLengthEl = document.getElementById("password-length").value
    pass1El.textContent = ""
    pass2El.textContent = ""
    if (passLengthEl > 9 && passLengthEl < 16) {
        for (i = 0; i < passLengthEl; i++) {
        pass1El.textContent += getCharacters()
        pass2El.textContent += getCharacters()
        } 
    } else {
        pass1El.textContent = "Error: password length must be value from 10 - 15"
    }
})