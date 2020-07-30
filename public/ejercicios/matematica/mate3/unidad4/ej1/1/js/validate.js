let array = ['<','>','='];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.seleccion').html(options);


$('select').formSelect();

dataExercise = {
    next: "../../../index.html",
    procesar: "result_tipo_3_3_1()",
    titulo: "<center><h5><span>Compara</span> las cantidades utilizando los símbolos.<span> <, > o =</span></h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);



var cols = '.grid-container';
listar_random(cols);
function result_tipo_3_3_1() {
    r=0;
    seleccion_lista();
    if (r == 8) {
        correcto();
    } else {
        incorrecto();
    }

}