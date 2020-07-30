$('select').formSelect();

dataExercise = {
    next: "../2/index.html",
    procesar: "result_tipo_2_4_2()",
    titulo: "<center><h5><span>Resuelve</span> las siguientes operaciones combinadas y <span>completa</span> los recuadros.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);



// Validar
function result_tipo_2_4_2() {
    r = 0;
    seleccion_lista();

    if (r == 5) {
        correcto();
    } else {
        incorrecto();
    }
}