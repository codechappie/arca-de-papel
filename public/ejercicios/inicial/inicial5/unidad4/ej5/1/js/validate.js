//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_5_1_5()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Observa</span> y <span>pinta</span> los círculos indicando para donde mira el perrito.</h5></center>",
} //5-0-1
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA




var lista = '.grid-lsta';
listar_random(lista);
    var r = 0;
    var color;
    var letra;
    var comparacion;
    $('.colores').click(function(e) {
        e.preventDefault();
        color = $(this).attr('value');
        letra = $(this).attr('letra');
        $('.colores').css({
            transform: 'scale(1)',
            border: '1px solid #333',
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
            'background-color': '#'+color+'',
            'background-repeat': 'no-repeat',
            'background-position': 'bottom',
            'background-size': 'cover',
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

    function result_tipo_5_1_5() {
        var min = $('#Minutos').text();
        var seg = $('#Segundos').text();
        var milseg = $('#Centesimas').text();
        var tiempo = min + ":" + seg + ":" + milseg;
    
        if (r == 6) {
           
            
            correcto();
        } else {
            
            incorrecto();
             
        }
    
    }


//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
