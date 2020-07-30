let array = [];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();

dataExercise = {
    next: "../../../index.html",
    procesar: "result_tipo_2_4_4()",
    titulo: "<center><h5><span>Selecciona</span> el camino de 200 puntos para que el ratón llegué rapidamente al queso.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);

r= 0;
    seleccion_click();
function result_tipo_2_4_4() {
    
    if (r == 1) {
        correcto();
    } else {
        incorrecto();
    }

}
