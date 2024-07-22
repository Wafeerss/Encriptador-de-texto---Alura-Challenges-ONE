let parrafo_usuario =document.querySelector("#textoUsuario");
let parrafo_encriptado =document.querySelector("#parrafo_encriptado");


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
};


function copiarTexto() {

  var copyText = document.getElementById("parrafo_encriptado");
  copyText.select();
  copyText.setSelectionRange(0, 99999); 

  navigator.clipboard.writeText(copyText.value);
  
};



$(document).ready(function(){
    $( "#textoUsuario" ).on( "change", function() {
        if ($("#textoUsuario").val()==""){
            if ($(window).width() >1240) {
                $(".respuesta_imagen_alerta").css('display', 'flex');
            };
            /*$(".respuesta_imagen_alerta").css('display', 'flex');*/
            $(".respuesta_alerta").css('display', 'flex');
            $(".respuesta_encriptado").hide();
        } else {
            $("#encriptado").click(function(){
                if ($("#textoUsuario").val()!="") {
                    $(".respuesta_imagen_alerta").hide();
                    $(".respuesta_alerta").hide();
                    $(".respuesta_encriptado").css('display', 'flex');
                    parrafo_encriptado.innerHTML = encriptador(parrafo_usuario.value,"encriptar")
                }
            });
            $("#desencriptado").click(function(){
                if ($("#textoUsuario").val()!="") {
                    $(".respuesta_imagen_alerta").hide();
                    $(".respuesta_alerta").hide();
                    $(".respuesta_encriptado").css('display', 'flex');
                    parrafo_encriptado.innerHTML = encriptador(parrafo_usuario.value,"desencriptar")
                }
            });  
        }
    });
});




