//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_5_1_8()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Coloca</span> 2 mochilas encima y 1 debajo de la camioneta.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA






//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
var r = 0;
var r2 = 0;
var element;
var elementid;
var element2;
$('.pieza').draggable({
    revert: 'invalid',
    start: function() {
        element = $(this).attr('alt');
        elementid = $(this);
    }
});
$(".contenedor").droppable({
    drop: function (event, ui) {
        element2 = $(this).attr("alt");

        elementid.css({ "background": "transparent", "border-color": "transparent" });
        if (element == element2) {
            r++;
            // console.log(r);
        }
        ui.draggable.draggable('disable', 1);
    },
});
$(".cont2").droppable({
    drop: function (event, ui) {
        element2 = $(this).attr("alt");
        elementid.css({ "background": "transparent", "border-color": "transparent" });
        if (element == element2) {
            r2++;
            // console.log(r);
        }
        ui.draggable.draggable('disable', 1);
    },
});


function result_tipo_5_1_8() {
  var min = $('#Minutos').text();
  var seg = $('#Segundos').text();
  var milseg = $('#Centesimas').text();
  var tiempo = min + ":" + seg + ":" + milseg;

  if (r == 2 && r2 == 1) {
      console.log(r, r2)
       
      correcto();
  } else {
      console.log(r, r2)
      incorrecto();
       
  }

}

//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
