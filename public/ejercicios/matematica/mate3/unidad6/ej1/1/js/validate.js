let array = [];
let options = '<option value="" disabled selected></option>';


for (let i = 1; i < 51; i++) {
    options += `<option value="${i}">${i}</option>`
}


$('.slc').html(options);


$('select').formSelect();

dataExercise = {
    next: "../../../index.html",
    procesar: "result_tipo_3_5_1()",
    titulo: "<center><h5><span>Selecciona</span> el par ordenado en el que se ubican los siguientes objetos:</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);


/* *TODO: random */
var $class='.grid-box';
listar_random($class);
/* *TODO: function */
var r = 0;
$(".slc").change(function() {
    slcalt = $(this).attr("alt");
    slcval = $(this).val();
    if (slcalt == slcval) {
        r++;
        console.log(r);
    }
});

function result_tipo_3_5_1() {

    if (r == 6) {
        correcto();
    } else {
        incorrecto();
    }

}