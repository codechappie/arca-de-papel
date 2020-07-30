dataExercise = {
    next: "../4/index.html",
    procesar: "result_tipo_2_3_8()",
    titulo: "<center><h5><span>Completa</span> la tabla del 3.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);


r = 0;
arrastre();

function result_tipo_2_3_8() {
    var min = $('#Minutos').text();
    var seg = $('#Segundos').text();
    var milseg = $('#Centesimas').text();
    var tiempo = min + ":" + seg + ":" + milseg;

    if (r == 13) {
        
        localStorage.setItem("Nota2-4-9", "2");
        localStorage.setItem("Time2-4-9", tiempo);
        correcto();

    } else {
        
        incorrecto();
        localStorage.setItem("Nota2-4-9", "0");
        localStorage.setItem("Time2-4-9", tiempo);

    }
}