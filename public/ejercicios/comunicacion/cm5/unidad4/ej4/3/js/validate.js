//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../../../index.html", // Siguiente ejercicio
  procesar:"result_tipo_5_3_12()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Lee</span> el siguiente texto y <span>selecciona</span> los determinantes indefinidos.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA

var clases = ".opciones";
listar_random(clases);
var r = 0;
seleccion_click();


function result_tipo_5_3_12() {
    
    
    
    

    if (r == 5) {
         
         
        correcto();
    } else {
        incorrecto();
         
         
    }

}