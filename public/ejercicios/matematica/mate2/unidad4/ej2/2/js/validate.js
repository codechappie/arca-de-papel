let array = ['3','6','2','12','4','15','18'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();


dataExercise = {
    next: "../3/index.html",
    procesar: "result_tipo_2_3_7()",
    titulo: "<center><h5><span>Completa</span> la operación que representa cada imagen.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);



function result_tipo_2_3_7() {
    r = 0;
    seleccion_lista();
    
    if (r == 9) {
        correcto();

    } else {
        incorrecto();

    }
}