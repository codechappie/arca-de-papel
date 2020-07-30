//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../3/index.html", // Siguiente ejercicio
  procesar:"result_tipo_5_5_20()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5>Respecto al poema de la página 100 del Libro de texto, <span>selecciona</span> la respuesta correcta.¿Cómo está compuesto el poema?</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA

var r = 0;
seleccion_click();

listar_random(".ale")
function result_tipo_5_5_20() {
    
    
    
    

    if (r == 1) {
        
        
        correcto();
    } else {
        incorrecto();
        
        
    }

}