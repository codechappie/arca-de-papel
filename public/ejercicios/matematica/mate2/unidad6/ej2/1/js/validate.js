let array = ['1','2','3','5','7','9','12','4','15','18'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();

dataExercise = {
    next: "../../../index.html",
    procesar: "result_tipo_2_5_2()",
    titulo: "<center><h5><span>Completa</span> la familia de operaciones.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);




function result_tipo_2_5_2() {
    r = 0;
    seleccion_lista();

    if (r == 12) {
        correcto();

    } else {
        incorrecto();

    }
}