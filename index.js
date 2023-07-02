let textoEntrada = document.querySelector("#texto-entrada");
let textoSalida = document.querySelector("#cuadro-respuesta");

/* FUNCIÓN PARA CIFRAR EL TEXTO */
// ===============================
function cifrarTexto() {
    let palabraCifrada = "";
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

        let tipoAlerta = ".alerta-cifrado";
        document.querySelector(tipoAlerta).style.display = "flex";
        clasesAnimacionAlerta(tipoAlerta);
    });

    textoSalida.value = palabraCifrada;
    if (palabraCifrada.length === 0) {
        return limpiezaInputCasoUno();
    } else {
        return limpiezaInputCasoDos();
    }
}

/* FUNCIÓN PARA MOSTRAR TEXTO DESCIFRADO */
// ========================================
function mostrarTextoDescifrado() {
    let cifrado = textoEntrada.value;
    let palabraDescifrada = "";
    let vocalCifrada = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u",
    };

    palabraDescifrada = cifrado.replace(
        /ai|enter|imes|ober|ufat/gi,
        (vocal) => {
            let tipoAlerta = ".alerta-descifrado";
            document.querySelector(tipoAlerta).style.display = "flex";
            clasesAnimacionAlerta(tipoAlerta);
            return vocalCifrada[vocal];
        }
    );

    textoSalida.value = palabraDescifrada;
    if (palabraDescifrada.length === 0) {
        return limpiezaInputCasoUno();
    } else {
        return limpiezaInputCasoDos();
    }
}

/* FUNCIÓN PARA COPIAR TEXTO */
// ============================
function copiarResultado() {
    let textoCopiado = document.querySelector("#cuadro-respuesta");
    let alerta = (document.querySelector(".alerta-copiado").style.display =
        "flex");

    textoCopiado.focus();
    textoCopiado.setSelectionRange(0, -1);
    let texto = textoCopiado.value;
    // - document.execCommand("copy"); es sustituido por Clipboard API
    navigator.clipboard
        .writeText(texto, alerta)
        .then(() => {
            texto;
            alerta;
        })
        .catch((err) => {
            console.log("Algo salió mal al copiar: " + err);
        });
    // texto.setSelectionRange(0, -1);
    textoEntrada.focus();

    let tipoAlerta = ".alerta-copiado";
    clasesAnimacionAlerta(tipoAlerta);
}

/* FUNCIÓN REEMPLAZAR VOCALES CON ACENTO */
// ========================================
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

/* FUNCIONES DE OCULTAR/MOSTRAR EN INPUTS PRINCIAPLES */
// =====================================================
function limpiezaInputCasoUno() {
    document.querySelector("#no-message-img-cluster").style.display = "block";
    document.querySelector("#copiar").style.display = "none";
    textoEntrada.value = "";
    textoEntrada.focus();
}

function limpiezaInputCasoDos() {
    document.querySelector("#no-message-img-cluster").style.display = "none";
    document.querySelector("#copiar").style.display = "flex";
    textoEntrada.value = "";
    textoEntrada.focus();
}

/*  FUNCIÓN PARA ANIMAR ALERTA DE NOTIFICACIÓN */
// ==============================================
function clasesAnimacionAlerta(tipoAlerta) {
    const desapareceAlerta = setTimeout(limpiarAlerta, 1500);
    function limpiarAlerta() {
        document
            .querySelector(tipoAlerta)
            .classList.add("animate__bounceOutRight");
    }
    document
        .querySelector(tipoAlerta)
        .classList.remove("animate__bounceOutRight");
}

/* FUNCIÓN DATE PARA EL FOOTER */
// ==============================
const presentYear = new Date().getFullYear();
document.querySelector("#year").textContent = presentYear;

// function ejecutarEnter() {
//     if (textoSalida.value !== 0) {
//         mostrarTextoDescifrado();
//     } else {
//         mostrar();
//     }
// }
