//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../2/index.html", // Siguiente ejercicio
  procesar:"result_tipo_6_3_3()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Cuenta</span> las sílabas métricas del siguiente poema y <span>selecciona</span> si se trata de arte mayor o arte menor.</h5></center>",
} //6-2-1
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA




var r = 0;

var clases = ".contenedor-check";
listar_random(clases);

seleccion_click();


function result_tipo_6_3_3() {
    
    
    
    

    if (r == 8) {
        console.log(r)
        
        
        correcto();
    } else {
        console.log(r)
        incorrecto();
        
        
    }

}