

let offset = document.getElementById("offsetNumber"); 

let string = document.getElementById("textCipher");
let buttonCipher = document.getElementById("buttonCipher");

let string2 = document.getElementById("textDecipher");
let buttonDecipher = document.getElementById("buttonDecipher");


buttonCipher.addEventListener("click", encode => {  
    let  actionButtonCipher = window.cipher.encode(offset.value, string.value);
    document.getElementById("textDecipher").innerHTML = actionButtonCipher
    }
    
);

buttonDecipher.addEventListener("click", decode => {    
    let  actionButtonDecipher = window.cipher.decode(offset.value, string2.value);
    document.getElementById("textCipher").innerHTML = actionButtonDecipher
    }
);