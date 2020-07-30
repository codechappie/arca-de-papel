dataExercise = {
    next: "../../../index.html",
    procesar: "result_tipo_3_4_13()",
    titulo: "<center><h5><span>Selecciona</span> la fracción mayor.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);



var cols = '.grid-container';
listar_random(cols);
var r = 0;
seleccion_click();
function result_tipo_3_4_13() {

    if (r == 1) {
        correcto();
    } else {
        incorrecto();
    }

}