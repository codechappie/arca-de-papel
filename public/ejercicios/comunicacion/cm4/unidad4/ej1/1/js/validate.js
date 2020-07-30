//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../2/index.html", // Siguiente ejercicio
  procesar:"result_tipo_4_3_1()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:" <center><h5><span>Encuentra</span>, en la sopa de letras, los siguientes adjetivos.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA


var words = ['bonito', 'amarillo', 'alto', 'redondo', 'viejo','maravilloso','veloz','rojo','caliente','corto'];
    var gamePuzzle = wordfindgame.create(words, '#juego');

    function result_tipo_4_3_1() {
        
        
        
        

        var divs = $(".found").toArray().length;


        console.log(divs);
        if (divs >= 53) {
            
            
            correcto();
        } else {
            incorrecto();
            
            
        }

    }



//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 








//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
