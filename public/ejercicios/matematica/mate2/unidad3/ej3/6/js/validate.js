// $escritura = array('quinientos sesenta y dos','Seiscientos diecinueve','Setecientos veintiocho','cuatrocientos ochenta y tres','Novecientos sesenta y uno'); 
// $suma = array('600 + 10 + 9','900 + 20 + 8','700 + 20 + 8','400 + 20 + 8','900 + 50 + 1','700 + 90 + 8','900 + 60 + 1','');
// $numeros = array('961','572','364','728','619','');
let array = ['quinientos sesenta y dos','Seiscientos diecinueve','Setecientos veintiocho','cuatrocientos ochenta y tres','Novecientos sesenta y uno'];
let array2 = ['600 + 10 + 9','900 + 20 + 8','700 + 20 + 8','400 + 20 + 8','900 + 50 + 1','700 + 90 + 8','900 + 60 + 1',''];
let array3 = ['961','572','364','728','619',''];

let options = '<option value="" disabled selected></option>';
let options2 = '<option value="" disabled selected></option>';
let options3 = '<option value="" disabled selected></option>';



for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}

for (let i = 0; i < array2.length; i++) {
    options2 += `<option value="${array2[i]}">${array2[i]}</option>`
}

for (let i = 0; i < array3.length; i++) {
    options3 += `<option value="${array3[i]}">${array3[i]}</option>`
}


$('.escritura').html(options);
$('.suma').html(options2);
$('.numeros').html(options3);


$('select').formSelect();




//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
    next: "../7/index.html", // Siguiente ejercicio
    procesar: "result_tipo_2_2_8()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
    // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
    titulo: "<center><h5><span>Observa</span> el ejemplo y <span>completa</span> el cuadro.</h5></center>",
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


function result_tipo_2_2_8() {

    if (r == 9) {
        correcto();
    } else {
        incorrecto();
    }

}
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
