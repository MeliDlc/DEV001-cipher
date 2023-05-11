
window.onload = function() {

    // Botón para la función de cifrar.
    const btnC = document.getElementById("btnC"); // Llama al botón del HTML.
    btnC.addEventListener("click", () => {
      // Al botón se le adicióna el click y lo que sucede cuando éste evento sucede.
      let text = document.getElementById("sourceText").value; // Se guarda el valor de "source-text" en la variable "text".
      let shifts = document.getElementById("shiftNumber").value; // Se guarda el valor de "shiftNumber" en la variable "shifts".
      window.cipher.encode(text, shifts); // Se mandan los valores obtenidos a la función encode.
      document.getElementById("finalTxt").innerHTML = window.cipher.encode(
        text,
        shifts
      ); 
    });
  
    //Botón para la función descifrar.
    const btnT = document.getElementById("btnT"); // Llama al botón del HTML.
    btnT.addEventListener("click", () => {
      // Al botón se le adicióna el click y lo que sucede cuando éste evento sucede.
      let text = document.getElementById("sourceText").value; // Se guarda el valor de "source-text" en la variable "text".
      let shifts = document.getElementById("shiftNumber").value; // Se guara el valor de "shiftNumber" en la variable "shifts".
      window.cipher.decode(text, shifts); // Se mandan los valores obtenidos a la función encode.
      document.getElementById("finalTxt").innerHTML = window.cipher.decode(
        text,
        shifts
      ); // Llama el resultado de la función para ponerlo en el sector correspondiente del HTML.
    });
  };
