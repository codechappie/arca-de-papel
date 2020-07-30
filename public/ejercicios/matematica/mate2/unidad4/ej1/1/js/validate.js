let array = ['2','3','4','5','6','7','8','9','10','11','12'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();


dataExercise = {
    next: "../2/index.html",
    procesar: "result_tipo_2_3_1()",
    titulo: "<center><h5>¿<span>Cuantos</span> elementos hay?<span>completa</span> los cuadros.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);



listar_random(".aleatorio");

function result_tipo_2_3_1() {
    r = 0;
    seleccion_lista();

    if (r == 9) {
        correcto();
    } 
    else {
        incorrecto();
    }
}

