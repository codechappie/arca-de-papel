dataExercise = {
    next: "../5/index.html",
    procesar: "result_tipo_3_5_6()",
    titulo: "<center><h5><span>Observa</span> el pictograma que representa los kilogramos de frutas coonsumidas a la hora del almuerzo en los comedores de los distintos colegios. Luego <span>selecciona</span> la respuesta.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);


var cols = '.grid-container';
listar_random(cols);
var r = 0;
seleccion_click();

function result_tipo_3_5_6() {

    if (r == 1) {
        correcto();
    } else {
        incorrecto();
    }

}