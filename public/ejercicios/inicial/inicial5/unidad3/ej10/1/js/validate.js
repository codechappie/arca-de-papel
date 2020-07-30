//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_5_0_10()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Completa</span> el crucivocales <span>colocando</span> las vocales que faltan.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA






//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 

var lista = '.grid-lsta';
listar_random(lista);
    var r = 0;
    var color;
    var letra;
    var comparacion;
    $('.colores').click(function(e) {
        e.preventDefault();
        color = $(this).attr('value');
        letra = $(this).attr('alt');
        $('.colores').css({
            transform: 'scale(1)',
            border: 'none',
            'box-shadow': 'none',
        });
        $(this).css({
            transform: 'scale(1.1)',
            border: 'solid rgb(254, 206, 87)',
            'box-shadow': '0 0 1px #00000057',
        });

    });
    $('.lista').click(function(e) {
        e.preventDefault();
        $(this).css({
            'background-color': color,
            'font-size':'30px',
            'text-align':'center',
            'color':'#fff'
        });
        $(this).html(letra);
        comparacion = $(this).attr('alt');
        if (letra == comparacion) {
            r++;
        }
    });

    function result_tipo_5_0_10() {
      var min = $('#Minutos').text();
      var seg = $('#Segundos').text();
      var milseg = $('#Centesimas').text();
      var tiempo = min + ":" + seg + ":" + milseg;
  
      if (r == 11) {
           
          correcto();
          console.log(r);
      } else {
          incorrecto();
           
      }
  
  }

//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
