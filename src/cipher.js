window.cipher = {

  encode: (offset, string) => {

    let endText = "";
    for(let i = 0; i < string.length; i++) {  
         
      let asciiIndex = string.charCodeAt(i);   

      if (asciiIndex >=65 && asciiIndex <=90) {  
        let cipheredTextMay = ((((asciiIndex-65) + parseInt(offset))%26)+65);
        // console.log(cipheredTextMay);
          endText += String.fromCharCode(cipheredTextMay);
      }

      else if (asciiIndex >=97 && asciiIndex <=122) {
        let cipheredTextMin = ((((asciiIndex-97) + parseInt(offset))%26)+97);
          endText += String.fromCharCode(cipheredTextMin);
      }

      else if (asciiIndex === 32){
          endText += String.fromCharCode(32);
      }

      else if (asciiIndex >=33 && asciiIndex <=64) {
        let cipheredTextSim = ((((asciiIndex-33) + parseInt(offset))%15)+33);
          endText += String.fromCharCode(cipheredTextSim);
      }
    }  
      return endText; 
  }

,

  decode: (offset, string2) => {

    let endText2 = "";
    for(let i = 0; i < string2.length; i++) {  
         
 let asciiIndex = string2.charCodeAt(i); 
    
      if (asciiIndex >=65 && asciiIndex <=90) {  
        let decipheredTextMay = ((((asciiIndex - 90) - parseInt(offset))%26)+90);
          endText2 += String.fromCharCode(decipheredTextMay);
      }

      else if (asciiIndex >=97 && asciiIndex <=122) {
        let decipheredTextMin = ((((asciiIndex - 122) - parseInt(offset))%26)+122);
          endText2 += String.fromCharCode(decipheredTextMin);
      }

      else if (asciiIndex === 32){
          endText2 += String.fromCharCode(32);
      }

      else if (asciiIndex >=33 && asciiIndex <=64) {
        let cipheredTextSim = ((((asciiIndex-64) - parseInt(offset))%15)+64);
          endText2 += String.fromCharCode(cipheredTextSim);
      }
    }   
    return endText2;
 }
}
































  

// const ccipher = () => {
//   // NO FUNCIONÓ ESTO: let textToAscii = textAreaCipher.value
// // console.log(textToAscii) textToAscii dara el valor del texto de "textCipher"
//   for(let i=0; i<textAreaCipher.value.length; i++) {   //acá inicia el Loop, CUALQUIER LETRA DE textAreaCipher INICIA CON ÍNDICE 0
//          let asciiIndex = textAreaCipher.value.charCodeAt(i); // conversion a ascii, no funcionaba, para que funcionara se puso textAreaCipher.value
//       //    console.log(asciiIndex) Prueba para ver si salen los códigos ASCII
//          //En caso de Mayuscula:
//          if (asciiIndex >=65 && asciiIndex <=90) {  //Este "If" delimita el loop
//            endText += ((((asciiIndex-65)+magicNumber.value)%26)+65);
//            let nuevavariable = String.fromCharCode.endText
//            //guardarlo en endtext
//          } 
//          //En caso de Minuscula:
//          else if (asciiIndex >=97 && asciiIndex <=122) {
//           endText += ((((asciiIndex-65)+magicNumber.value)%26)+65);
//          }
//          //En caso del "Espacio"
//          else if (asciiIndex === 32){
//           endText += 32;
//          }
        // falta convertir cifrar FORMULA
      //       endText += String.fromCharCode(asciiIndex)
  // return endText;
// }