dataExercise = {
    next: "../4/index.html",
    procesar: "result_tipo_2_3_3()",
    titulo: "<center><h5><span>Completa</span> la tabla del 2.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);


listar_random(".aleatorio");
r = 0;
arrastre();

function result_tipo_2_3_3() {
    if (r == 13) {
        
        correcto();

    } else {
        
        incorrecto();

    }
}


