let array = [];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < 100; i++) {
    options += `<option value="${i}">${i}</option>`
}


$('.seleccion').html(options);


$('select').formSelect();

dataExercise = {
    next: "../2/index.html",
    procesar: "result_tipo_3_3_2()",
    titulo: "<center><h5><span>Observa</span> atentamente el gráfico de barras y luego <span>completa</span> la tabla de frecuencia. </h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);



function result_tipo_3_3_2() {
    r = 0
    seleccion_lista();
    if (r == 15) {
        correcto();
    } else {
        incorrecto();
    }

}