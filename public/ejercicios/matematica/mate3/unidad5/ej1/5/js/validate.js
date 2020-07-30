let array = ['Dos cuartos','Cuatro quintos','Un tercio','Dos novenos','Cinco séptimos','Seis octavos','Un cuarto','Tres décimos'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();

dataExercise = {
    next: "../6/index.html",
    procesar: "result_tipo_3_4_5()",
    titulo: "<center><h5><span>Selecciona</span> cómo se leen las siguientes fracciones:</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);

var r = 0;
$(".slc").change(function() {
    slcalt = $(this).attr("alt");
    slcval = $(this).val();
    console.log(slcalt);
    console.log(slcval);
    if (slcalt == slcval) {
        r++;
        console.log(r);
    }
});


function result_tipo_3_4_5() {

    if (r == 8) {
        correcto();
    } else {
        incorrecto();
    }

}