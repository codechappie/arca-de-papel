let array = ['1','2','3','4','5','6','7','8','10','12','13','14','15'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();

dataExercise = {
    next: "../../../index.html",
    procesar: "result_tipo_2_5_4()",
    titulo: "<center><h5><span>Observa</span> y <span>completa</span> siguiendo el ejemplo.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);




function result_tipo_2_5_4() {
    r = 0;
    seleccion_lista();
    if (r == 3) {
        correcto();
    } else {
        incorrecto();
    }
}