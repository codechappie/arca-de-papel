//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
  next: "../4/index.html", // Siguiente ejercicio
  procesar:"result_tipo_5_2_7()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
  // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
  titulo:"<center><h5><span>Suma</span> la cantidad que se indica para completar la secuencia.</h5></center>",
} 
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA




ramdom_select();

function result_tipo_5_2_7() {
    r=0;
    seleccion_lista();
    if (r == 6) {
        
        correcto();
    } else {
        incorrecto();
         
    }

}


//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
