let array = ['2','4','6','8','10','12'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();

dataExercise = {
    next: "../2/index.html",
    procesar: "result_tipo_2_5_3()",
    titulo: "<center><h5><span>Observa</span> atentamente la siguiente imagen y luego <span>responde</span>.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);



r = 0;
arrastre();

function result_tipo_2_5_3() {
    r = 0;
    seleccion_lista();

    if (r == 4) {
        correcto();
    } else {
        incorrecto();
    }

}