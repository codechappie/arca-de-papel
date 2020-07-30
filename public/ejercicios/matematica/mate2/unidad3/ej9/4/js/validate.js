
$('select').formSelect();



listar_random(".aleatorio");

//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
    next: "../5/index.html", // Siguiente ejercicio
    procesar: "result_tipo_2_2_27()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
    // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
    titulo: "<center><h5> <span>Cuenta</span> los lados y vértices de cada figura, luego <span>completa</span>.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA



//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 


function result_tipo_2_2_27() {

    r = 0;
    seleccion_lista();


    if (r == 2) {
        correcto();
    } else {
        incorrecto();
    }

}
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
