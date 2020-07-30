let array = ['2','4','5','8','10','12','16'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();


dataExercise = {
    next: "../5/index.html",
    procesar: "result_tipo_2_3_4()",
    titulo: "<center><h5> <span>Escribe</span> las siguientes sumas en forma de multiplicación.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);





listar_random(".aleatorio");

        


function result_tipo_2_3_4() {
    r = 0;
    seleccion_lista();
    
    if (r == 6) {
        correcto();

    } else {
        incorrecto();

    }
}