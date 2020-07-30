//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../", // Siguiente ejercicio
  procesar:"result_tipo_1_7_14()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Busca</span> en la sopa de letras las siguientes palabras.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA



var words = ['bruno', 'brisa', 'broma', 'brujo', 'palabra'];
    var gamePuzzle = wordfindgame.create(words, '#juego');

    function result_tipo_1_7_14() {

        var divs = $(".found").toArray().length;
        console.log(divs);
        if (divs >= 22) {
            correcto();
        } else {
            incorrecto();
        }

    }