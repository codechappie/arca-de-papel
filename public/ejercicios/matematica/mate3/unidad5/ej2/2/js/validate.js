
dataExercise = {
    next: "../../../index.html",
    procesar: "result_tipo_3_4_9()",
    titulo: "<center><h5><span>Observa</span> los gráficos y luego <span>selecciona</span> la afirmación que sea verdadera.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);


var cols = '.grid-container';
listar_random(cols);
var r = 0;
seleccion_click();
function result_tipo_3_4_9() {
    if (r == 1) {
        correcto();
    } else {
        incorrecto();
    }

}