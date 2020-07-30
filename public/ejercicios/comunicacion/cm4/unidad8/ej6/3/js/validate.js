//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../4/index.html", // Siguiente ejercicio
  procesar:"result_tipo_4_7_16()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Lee</span> cada enunciado y <span>enuméralos</span> del 1 al 3 según el orden en el que sucedieron en la lectura.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA



var r = 0;

var clases = ".contenedor-ejercicios";
listar_random(clases);
function result_tipo_4_7_16() {
    
    
    
    

    r = 0;
    seleccion_lista();
    console.log(r);
    if (r == 3) {
        
        
        correcto();
    } else {
        incorrecto();
        
        
    }

}