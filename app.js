let parrafo =document.querySelector("#textoUsuario")

function encriptador (texto,accion) {  
    if (accion == "encriptar") {
        texto = texto.split("")
        for (let i = 0 ; i < texto.length; i++){
            if (texto[i] == "a") {
               texto[i] = "ai"
            } else if (texto[i] == "e") {
                texto[i] = "enter"
            } else if (texto[i] == "i") {
                texto[i] = "imes"
            } else if (texto[i] == "o") {
                texto[i] = "ober"
            } else if (texto[i] == "u"){
                texto[i] = "ufat"
            } 
        }
        texto = texto.join("")
    } else if (accion == "desencriptar") {
        texto = texto.replaceAll("ai","a")
        texto = texto.replaceAll("enter","e")
        texto = texto.replaceAll("imes","i")
        texto = texto.replaceAll("ober","o")
        texto = texto.replaceAll("ufat","u")
    }
    return texto
}

function botonEncriptar () {
    parrafoUsuario = parrafo.value
    parrafo.innerHTML = encriptador(parrafoUsuario,"encriptar")
}

function botonDesencriptar () {
    parrafoUsuario = parrafo.value
    parrafo.innerHTML = encriptador(parrafoUsuario,"desencriptar")
}

