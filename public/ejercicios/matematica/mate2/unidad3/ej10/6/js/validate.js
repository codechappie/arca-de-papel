let array = ['20','25','30','35','40','45','50','60','70','80','90','100'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();


//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
    next: "../7/index.html", // Siguiente ejercicio
    procesar: "result_tipo_2_2_34()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
    // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
    titulo: "<center><h5>La gráfica muestra la cantidad de personas que asistieron a una reunión familiar.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA


listar_random(".aleatorio");


function result_tipo_2_2_34() {
    r = 0;
    seleccion_lista();

    if (r == 6) {
        correcto();
    } else {
        incorrecto();
    }

}

