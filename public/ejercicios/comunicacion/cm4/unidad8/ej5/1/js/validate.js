//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../2/index.html", // Siguiente ejercicio
  procesar:"result_tipo_4_7_12()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Lee</span> las siguientes oraciones y <span>arrastra</span> el tipo de coma que se utilizó en cada oración.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA



var r = 0;
var clases = ".contenedor-respuesta, .contenedor-silabas";
listar_random(clases);
arrastre();
function result_tipo_4_7_12() {
    
    
    
    

    if (r == 3) {
        
        
        correcto();
    } else {
        incorrecto();
        
        
    }

}