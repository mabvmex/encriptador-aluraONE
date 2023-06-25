/*  DATE FOR FOOTER */

const presentYear = new Date().getFullYear();
document.querySelector("#year").textContent = presentYear;

/* FUNCIÓN PARA MOSTRAR TEXTO */

function mostrar() {
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
        textoEntrada.focus();
    }
}

/* FUNCIÓN PARA COPIAR TEXTO */

function copiarResultado() {
    let textoCopiado = document.querySelector("#cuadro-respuesta");

    textoCopiado.focus();
    textoCopiado.setSelectionRange(0, -1);
    let texto = textoCopiado.value;

    // - document.execCommand("copy"); es sustituido por Clipboard API
    navigator.clipboard
        .writeText(texto)
        .then(() => {
            texto;
        })
        .catch((err) => {
            console.log("Algo salió mal al copiar: " + err);
        });
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
