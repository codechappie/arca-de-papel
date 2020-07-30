let array = ['2','3','4','5','6','7','8','9','10','11','12'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();


dataExercise = {
    next: "../2/index.html",
    procesar: "result_tipo_2_3_6()",
    titulo: "<center><h5><span>Observa</span>, <span>suma</span> y <span>completa</span>.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);







function result_tipo_2_3_6() {
    r=0;
    seleccion_lista();

    if (r == 3) {
        correcto();

    } else {
        incorrecto();

    }
}