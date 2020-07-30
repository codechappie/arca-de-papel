//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_5_3()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Completa</span> el crucigrama con los nombres de las imágenes</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA






//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
var array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
for (let abc = 0; abc < array.length; abc++) {
  const element = array[abc];
  // console.log(element);
  $('.abecedario').append("<div class='letras'><span  id='" +element + "'>" +element  + "</span></div>");
}

// New on() style:
// $('.letras').on('click', 'span', function(event) {
//     event.preventDefault();
//     letras = null; // texto  de la clase .palabra
//     letras = $(this).text();
//     // Estilos a span
//     $('.letras span').css({ "transform": "scale(1)", "border": "2px solid #37D3F7", "box-shadow": "none", "background": "transparent" });
//     $(this).css({ "border": "solid #37D3F7", "box-shadow": "0 0 4px #00000057", "background": "#B6ECFF" });
//     // validando click de la clase palabra
//     $('.palabra').one('click', function(event) {
//         event.preventDefault();
//         $(this).css({ "border": "solid #37D3F7", "background": "#B6ECFF" });
//         $(this).text(letras);
//     });
// });
var r = 0;
var letra = "";
$('.letras span').click(function() {
    letra = $(this).text();
    // Estilos a span
    $('.letras span').css({ "transform": "scale(1)", "border": "2px solid #37D3F7", "box-shadow": "none", "background": "transparent" });
    $(this).css({ "border": "solid #37D3F7", "box-shadow": "0 0 4px #00000057", "background": "#B6ECFF" });
    // console.log(letra);
});
$('.palabra').click(function() {
    $(this).css({ "border": "solid #37D3F7", "background": "#B6ECFF" });
    if ($(this).attr("alt") == letra) {
        if ($(this).text() == "") {
            r++;
        } else {
            if ($(this).text() != $(this).attr("alt")) {
                r = r + 2;
            }
        }
    } else {
        if ($(this).text() == "") {
            r--;
        } else {
            if ($(this).text() == $(this).attr("alt")) {
                r = r - 2;
            }
        }
    }
    $(this).text(letra);
    // console.log(letra);
    console.log(r);
});
function result_tipo_1_5_3() {
    
    
    
    

    if (r == 27) {
         
        correcto();
    } else {
        incorrecto();
         
    }
}
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
