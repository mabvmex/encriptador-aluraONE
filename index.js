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

            // ALTERNATIVA: if (letra === "a"  || letra === "á" )
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
        document.querySelector("#copiar").style.display = "none";
        textoEntrada.focus();
        return;
    } else {
        document.querySelector("#no-message-img-cluster").style.display =
            "none";
        document.querySelector("#copiar").style.display = "block";

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

// FUNCIÓN REEMPLAZAR VOCALES CON ACENTO
// ========================

function convertirVocales() {
    let typing = document.querySelector("#texto-entrada");
    let conversion = typing.value;

    conversion = conversion.replace(/[áÁ]/g, "a");
    conversion = conversion.replace(/[éÉ]/g, "e");
    conversion = conversion.replace(/[íÍ]/g, "i");
    conversion = conversion.replace(/[óÓ]/g, "o");
    conversion = conversion.replace(/[úÚ]/g, "u");
    conversion = conversion.replace(/[úÚ]/g, "u");
    conversion = conversion.replace(/[^\w\s]/gi, "");

    typing.value = conversion;
}

/* FUNCIÓN  DATE PARA EL FOOTER */
// ==============================
const presentYear = new Date().getFullYear();
document.querySelector("#year").textContent = presentYear;
