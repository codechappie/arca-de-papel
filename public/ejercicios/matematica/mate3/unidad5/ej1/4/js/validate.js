let array = [];
let options = '<option value="" disabled selected></option>';


for (let i = 1; i < 11; i++) {
    options += `<option value="${i}">${i}</option>`
}


$('.seleccion').html(options);


$('select').formSelect();

dataExercise = {
    next: "../5/index.html",
    procesar: "result_tipo_3_4_4()",
    titulo: "<center><h5><span>Escribe</span> la fracción que corresponda a cada gráfico.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);



function result_tipo_3_4_4() {
    r = 0;
    seleccion_lista();
    if (r == 6) {
        correcto();
    } else {
        incorrecto();
    }
}