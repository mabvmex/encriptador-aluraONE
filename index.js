/*  DATE FOR FOOTER */

const presentYear = new Date().getFullYear();
document.querySelector("#year").textContent = presentYear;

/* FUNCIÓN PARA MOSTRAR TEXTO */

function funcionMostrar() {
    let textoEntrada = document.querySelector("#texto-entrada");
    let textoSalida = document.querySelector("#cuadro-respuesta");

    textoSalida.value = textoEntrada.value;

    if (textoEntrada.value.length === 0) {
        document.querySelector("#no-message-img-cluster").style.display =
            "block";
        return;
    } else {
        document.querySelector("#no-message-img-cluster").style.display =
            "none";
        textoEntrada.value = "";
    }
}
/* 
function convertirVocales() {
    var input = document.getElementById("input1");
    var valor = input.value;

    valor = valor.replace(/[áÁ]/g, "a");
    valor = valor.replace(/[éÉ]/g, "e");
    valor = valor.replace(/[íÍ]/g, "i");
    valor = valor.replace(/[óÓ]/g, "o");
    valor = valor.replace(/[úÚ]/g, "u");

    input.value = valor;
} */

/* 
UTILS:
========
- document.getElementById("year").textContent = presentYear;
- document.getElementById("encriptar").style.display = "none";
*/
