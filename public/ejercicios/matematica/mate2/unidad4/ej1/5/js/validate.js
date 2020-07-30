let array = ['8','4','10','6','2','1'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();


dataExercise = {
    next: "../../../index.html",
    procesar: "result_tipo_2_3_5()",
    titulo: "<center><h5> <span>Observa</span> los dibujos y<span>completa</span> el cuadro.</h5></center>.",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);




function result_tipo_2_3_5() {
    r = 0;
    seleccion_lista();

    if (r == 10) {
        correcto();

    } else {
        incorrecto();

    }
}

