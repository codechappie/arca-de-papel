let array = ['16','18','24','28','32','48','60','64'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();


dataExercise = {
    next: "../5/index.html",
    procesar: "result_tipo_2_3_9()",
    titulo: "<center><h5><span>Halla</span> el valor de D, A y P.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);






function result_tipo_2_3_9() {
    r = 0;
    seleccion_lista();

    if (r == 3) {
        correcto();
    } else {
        incorrecto();
    }

}