//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../9/index.html", // Siguiente ejercicio
  procesar:"result_tipo_4_8_20()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Selecciona</span> ¿Qué imagen representa al mayordomo?</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA



var r = 0;

var clases = ".contenedor-check";
listar_random(clases);

seleccion_click();


function result_tipo_4_8_20() {
    
    
    
    

    if (r == 1) {
        
        
        correcto();
    } else {
        incorrecto();
        
        
    }

}