/* FUNCIÓN  DATE PARA EL FOOTER */
// ==============================
const presentYear = new Date().getFullYear();
document.querySelector("#year").textContent = presentYear;

/* FUNCIÓN PARA MOSTRAR TEXTO */
// ==============================
function mostrar() {
    let textoEntrada = document.querySelector("#texto-entrada");
    let textoSalida = document.querySelector("#cuadro-respuesta");

    /* FUNCIÓN PARA CIFRAR EL TEXTO */
// =============================
    let palabraCifrada = "";
    function cifrado() {
        Array.from(textoEntrada.value).forEach((letra) => {
            let letraCifrada = "";

            if (letra === "a") {
                letraCifrada = "ai";
            } else if (letra === "e") {
                letraCifrada = "enter";
            } else if (letra === "i") {
                letraCifrada = "imes";
            } else if (letra === "o") {
                letraCifrada = "ober";
            } else if (letra === "u") {
                letraCifrada = "ufat";
            } else {
                letraCifrada = letra;
            }

            palabraCifrada += letraCifrada;
        });
    }

    cifrado();

    textoSalida.value = palabraCifrada;

    if (palabraCifrada.length === 0) {
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
// ==============================
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

/* FUNCIÓN DE CIFRADO */
// ==============================

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
