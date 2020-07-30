let array = ['4','8','12','16','18','20','24','30'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();


dataExercise = {
    next: "../../../index.html",
    procesar: "result_tipo_2_3_10()",
    titulo: "<center><h5><span>Halla</span> el valor de (A + B) - C.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);






function result_tipo_2_3_10() {
    r = 0;
    seleccion_lista();

    if (r == 3) {
        correcto();
    } else {
        incorrecto();

    }

}
