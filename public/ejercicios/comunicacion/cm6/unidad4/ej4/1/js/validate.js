//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../3/index.html", // Siguiente ejercicio
  procesar:"result_tipo_6_3_16()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Ubica</span> las siguientes palabras en la columna correspondiente según su clasificación.</h5></center>",
} //6-2-11
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA

var r = 0;
arrastre();
listar_random(".alea");
function result_tipo_6_3_16() {
    
    
    
    

    if (r == 10) {
        console.log(r)
        
        
        correcto();
    } else {
        incorrecto();
        console.log(r)
        
        
    }

}