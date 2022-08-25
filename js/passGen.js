function passWordGeneration() {

    let length = document.getElementById("rangeLength").value;


    const lettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const symbolsArr = ['!', '@', '#', '$', '%', '*'];
    const numbersArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let randomString;
    let actuallPassword = [];

    for (let i = 0; i < length; i++) {
        let upperOrLower = Math.floor(Math.random() * 2);
        let letterSymbolNumber = Math.floor(Math.random() * 3);
        // letter
        if (letterSymbolNumber == 0) {
            let randomLetter = lettersArr[Math.floor(Math.random() * 26)];
            //upperCase
            if (upperOrLower == 1) {
                randomString = randomLetter.toUpperCase();
                //lowerCase
            }else{
                randomString = randomLetter;
            }
            // number
        } else if (letterSymbolNumber === 1) {
            randomString = numbersArr[Math.floor(Math.random() * 7)];
            // symbol
        } else if (letterSymbolNumber === 2) {
            randomString = symbolsArr[Math.floor(Math.random() * 11)];
        }
        actuallPassword[i] = randomString;
    }
    actuallPassword = actuallPassword.join('');
    document.getElementById("passwordGenText").value = actuallPassword;
}


function sliderVal(){
    document.getElementById("sliderVal").value = document.getElementById("rangeLength").value;
}

function checkingPassword() {
   let actualPassword = document.getElementById("passForCheck").value;
   let splittedPassword = actualPassword.split("");



   for(let x = 0; x < splittedPassword.length; x++){
       //nefunkcni kontroluje vzdy jen na konci
       if(splittedPassword[x] !== ',' ){//|| splittedPassword[x] !== '!' || splittedPassword[x] !== '@' || splittedPassword[x] !== '#' || splittedPassword[x] !== '$' || splittedPassword[x] !== '%' || splittedPassword[x] !== '&'|| splittedPassword[x] !== '*'){
           document.getElementById("passwordSpecialChar").innerHTML = "Password doesnt have any special characters!";
       }else document.getElementById("passwordSpecialChar").innerHTML = "";
       //nefunkcni kontroluje vzdy jen na konci
       if(splittedPassword[x] !== splittedPassword[x].toUpperCase()){
            document.getElementById("passwordUpperCase").innerHTML = "Password doesnt have any upper case characters!";
       }else document.getElementById("passwordUpperCase").innerHTML = "";


   }

   const commonPasswords = ["123456" , "password" , "12345678" , "qwerty" , "123456789" , "12345" , "1234" , "111111" , "1234567" , "dragon" , "123123" , "baseball" , "abc123" , "football" , "monkey" , "letmein" , "696969" , "shadow" , "master" , "666666" , "qwertyuiop" , "123321" , "mustang" , "1234567890" , "michael" , "654321" , "pussy" , "superman" , "1qaz2wsx" , "7777777" , "fuckyou" , "121212" , "000000" , "qazwsx" , "123qwe" , "killer" , "trustno1" , "jordan" , "jennifer" , "zxcvbnm" , "asdfgh" , "hunter" , "buster" , "soccer" , "harley" , "batman" , "andrew" , "tigger" , "sunshine" , "iloveyou" , "fuckme" , "2000" , "charlie" , "robert" , "thomas" , "hockey" , "ranger" , "daniel" , "starwars" , "klaster" , "112233" , "george" , "asshole" , "computer" , "michelle" , "jessica" , "pepper" , "1111" , "zxcvbn" , "555555" , "11111111" , "131313" , "freedom" , "777777" , "pass" , "fuck" , "maggie" , "159753" , "aaaaaa" , "ginger" , "princess" , "joshua" , "cheese" , "amanda" , "summer" , "love" , "ashley" , "6969" , "nicole" , "chelsea" , "biteme" , "matthew" , "access" , "yankees" , "987654321" , "dallas" , "austin" , "thunder" , "taylor" , "matrix"];
   let commonPassCheck = commonPasswords.includes(actualPassword);

    if(commonPassCheck){
        document.getElementById("passwordCommon").innerHTML = "This password is in weak passwords database!";
    }else document.getElementById("passwordCommon").innerHTML = "";

if(actualPassword.length < 6 && actualPassword.length > 0){
    document.getElementById("passwordLength").innerHTML = "This password is too short";
    }else document.getElementById("passwordLength").innerHTML = "";

}

function copyToClipBoard() {
    let passToCopy = document.getElementById("passwordGenText");
    passToCopy.select();
    passToCopy.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passToCopy.value);
}