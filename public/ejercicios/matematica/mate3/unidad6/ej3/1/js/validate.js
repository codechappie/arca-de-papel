let array = ['23','18','10','2','4','5','3','7','6','9'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.seleccion').html(options);


$('select').formSelect();

dataExercise = {
    next: "../2/index.html",
    procesar: "result_tipo_3_5_3()",
    titulo: "<center><h5><span>Observa</span> el gráfico, <span>completa</span> el cuadro y <span>responde</span>.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);



function result_tipo_3_5_3() {
    r = 0
    seleccion_lista();
    if (r == 8) {
        correcto();
    } else {
        incorrecto();
    }

}