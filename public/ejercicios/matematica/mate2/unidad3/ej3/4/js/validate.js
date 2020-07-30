let array = ['7C + 0D + 8U','9C + 4D + 6U','9C + 5D + 6U','6C + 4D + 5U','7C + 0D + 4U','6C + 4D + 6U'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();

//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
    next: "../5/index.html", // Siguiente ejercicio
    procesar: "result_tipo_2_2_6()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
    // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
    titulo: "<center><h5><span>Escribe</span> la descomposición de  los siguientes números en centenas, decenas y unidades.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA



//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
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


function result_tipo_2_2_6() {
    var min = $('#Minutos').text();
    var seg = $('#Segundos').text();
    var milseg = $('#Centesimas').text();
    var tiempo = min + ":" + seg + ":" + milseg;

    if (r == 3) {
        correcto();
    } else {
        incorrecto();
    }

}
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
