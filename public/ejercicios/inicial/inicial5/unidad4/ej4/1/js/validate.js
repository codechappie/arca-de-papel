//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_5_1_4()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Crea</span> una secuencia. <span>Recuerda</span> que es por tamaño.</h5></center>",
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
    var tamano;
    var letra;
    var comparacion;
    $('.colores').click(function(e) {
        e.preventDefault();
        tamano = $(this).attr('value');
        scale= $(this).attr('tamano');
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
            'background-image': 'url(../../../../exercises/inicial/5-1-4/img/'+2+'.png)',
            transform: 'scale(1.'+scale+')',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'cover',
            'font-size':'30px',
            'text-align':'center',
            'color':'#fff'
        });
        comparacion = $(this).attr('alt');
        if (letra == comparacion) {
            r++;
        }
    });



//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
function result_tipo_5_1_4() {
  var min = $('#Minutos').text();
  var seg = $('#Segundos').text();
  var milseg = $('#Centesimas').text();
  var tiempo = min + ":" + seg + ":" + milseg;

  if (r == 4) {
      
      correcto();
  } else {
      incorrecto();
       
  }

}