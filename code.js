function changeColorMode() {
    const body = document.body;
    const darkModeButton = document.getElementById("modo");
    body.classList.toggle("dark");
    darkModeButton.classList.toggle("hide");
}

document.getElementById("encriptar").addEventListener("click", function(){
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");

    let textoEncriptado = input.toLowerCase().
    replace(/e/g, "enter").
    replace(/o/g, "ober").
    replace(/i/g, "imes").
    replace(/a/g, "ai").
    replace(/u/g, "ufat");

    output.value=textoEncriptado;

});

document.getElementById("desencriptar").addEventListener("click",function(){
    let input = document.getElementById("output").value;
    let output =document.getElementById("input");

    let textoDesencriptado = input.
    replace(/enter/g, "e").
    replace(/ober/g, "o").
    replace(/imes/g, "i").
    replace(/ai/g, "a").
    replace(/ufat/g, "u");

    output.value = textoDesencriptado;
});

document.getElementById("limpiar").addEventListener("click", function(){
    document.getElementById("input").value= "";
    document.getElementById("output").value="";

})

document.getElementById("intercambiar").addEventListener("click", function(){
    let input = document.getElementById("input").value;
    let output = document.getElementById("output").value;

    document.getElementById("input").value = output;
    document.getElementById("output").value = input;

});

document.getElementById("copiar").addEventListener("click", function() {
    var output = document.getElementById("output");
    output.select();
    document.execCommand("copy");
  });
