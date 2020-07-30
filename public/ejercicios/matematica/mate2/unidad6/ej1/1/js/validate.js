let array = ['1','3','6','2','12','4','15','18'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();

dataExercise = {
    next: "../../../index.html",
    procesar: "result_tipo_2_5_1()",
    titulo: "<center><h5> <span>Completa</span> seleccionando el dividendo, el divisor y el cociente.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);



r = 0;
arrastre();

listar_random(".aleatorio");


function result_tipo_2_5_1() {
    r = 0;
    seleccion_lista();

    if (r == 6) {
        correcto();

    } else {
        incorrecto();
    }
}