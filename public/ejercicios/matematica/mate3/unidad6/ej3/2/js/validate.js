dataExercise = {
    next: "../3/index.html",
    procesar: "result_tipo_3_5_4()",
    titulo: "<center><h5><span>Observa</span> el pictograma anterior y <span>responde</span>. </h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);


var cols = '.grid-container';
listar_random(cols);
var r = 0;
seleccion_click();
function result_tipo_3_5_4() {

    if (r == 1) {
        correcto();
    } else {
        incorrecto();
    }

}
