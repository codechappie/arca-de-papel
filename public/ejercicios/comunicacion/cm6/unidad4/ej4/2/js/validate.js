//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../2/index.html", // Siguiente ejercicio
  procesar:"result_tipo_1_1_14()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Completa</span> el crucigrama con los determinantes numerales e indefinidos que correspondan en cada caso.</h5></center>",
} //6-2-11
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA



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

var r = 0;
var la = 0;
var la2 = 0;
var le = 0;
var lo = 0;
var lo2 = 0;

var ul = document.querySelector('.contenedor-silabas');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}

$(".pieza").draggable({
    start: function() {
        element = $(this).attr("id");
    }
});

// la
$("#la").droppable({

    drop: function(event, ui) {
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "laa" || element == "laa2") {
            la++
            console.log(element);
        }
        ui.draggable.draggable("disable", 1);
    }
});

// la2
$("#la2").droppable({

    drop: function(event, ui) {
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "laa" || element == "laa2") {
            la2++
            console.log(la2);
        }
        ui.draggable.draggable("disable", 1);
    }
});

// le
$("#le").droppable({

    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "lee") {
            le++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// lo
$("#lo").droppable({

    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");
        if (element == "loo" || element == "loo2") {
            lo++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// lo2
$("#lo2").droppable({

    drop: function(event, ui) {
        $(this).css("background-color", "transparent");
        $("#" + element + " h4").css("background-color", "transparent");

        if (element == "loo" || element == "loo2") {
            lo2++
        }
        ui.draggable.draggable("disable", 1);
    }
});

// Formulario - Registrados
$('#validar').on('click', function(e) {
    e.preventDefault();
    //alert('hola');
    function result_tipo_1_1_14() {
        if (la == 1 && la2 == 1 && le == 1 && lo == 1 && lo2 == 1) {
            localStorage.setItem("Nota2-1-9", "2");
            alert('Bien!');
        } else {
            alert('Mal!');
            localStorage.setItem("Nota2-1-9", "0");
        }

    }
    result_tipo_1_1_14();
});