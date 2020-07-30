//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_4_1_7()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Observa</span> el número arriba de los recuadros y <span>selecciona</span> el número de figuras que se indica.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA






//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 

var r = 0;


$('.seleccion').click(function() {
    $(this).css({
        border: '2px solid',
        'border-color': '#37D3F7',
        background: '#B6ECFF',
        'box-shadow': 'grey 2px 3px 8px 0px',
    });
    $(this).attr("alt", "n");
});

function validarx() {
    $('.contenedor-ejercicios').each(function() {

        var num = $(this).attr('alt');
        var x = 0;


        $(this).children('.seleccion').each(function() {
            if ($(this).attr("alt") == "n") {
                x++;
            }
        });

        if (x == num) {
            r++;
        }
    });
}


function result_tipo_4_1_7() {
  var min = $('#Minutos').text();
  var seg = $('#Segundos').text();
  var milseg = $('#Centesimas').text();
  var tiempo = min + ":" + seg + ":" + milseg;
  validarx();
  if (r == 3) {
        
      correcto();
  } else {
      incorrecto();
       
  }

}



//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
