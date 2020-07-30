let array = ['<','>','='];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.seleccion').html(options);


$('select').formSelect();

dataExercise = {
    next: "../2/index.html",
    procesar: "result_tipo_3_4_10()",
    titulo: "<center><h5><span>Observa</span> atentamente los gráficos y luego <span>compara</span> las fracciones usando los signos <span> ></span>, <span><</span> o <span>=</span>. </h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);



function result_tipo_3_4_10() {
    r=0;
    seleccion_lista();
    if (r == 2) {
        correcto();
    } else {
        incorrecto();
    }

}