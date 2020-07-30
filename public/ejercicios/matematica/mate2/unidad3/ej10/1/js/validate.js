let text = ['El avión', 'El auto', '19 niños'];
let numbers = ['7','4','2','5', '1'];

let optionsE = '<option value="" disabled selected></option>';
let optionsN = '<option value="" disabled selected></option>';


for (let i = 0; i < text.length; i++) {
    optionsE += `<option value="${text[i]}">${text[i]}</option>`
}
for (let i = 0; i < numbers.length; i++) {
    optionsN += `<option value="${numbers[i]}">${numbers[i]}</option>`
}


$('.escritura').html(optionsE);
$('.numeros').html(optionsN);


$('select').formSelect();

//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
    next: "../2/index.html", // Siguiente ejercicio
    procesar: "result_tipo_2_2_29()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
    // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
    titulo: "<center><h5><span>Observa</span> el siguiente diagrama y <span>escribe</span> cúantos niños viajan en cada medio de transportedurante las vacaciones.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA




// Select
var r = 0;
$(".slc").change(function() {
    slcalt = $(this).attr("alt");
    slcval = $(this).val();
    if(slcval == 'El avión'){
        slcval = 'avion';
    } else if(slcval == 'El auto'){
        slcval = 'auto';
    } else if( slcval == '19 niños'){
        slcval = '19';
    }
    console.log(slcalt);
    console.log(slcval);
    if (slcalt == slcval) {
        r++;
        console.log(r);
    }
});

function result_tipo_2_2_29() {

    if (r == 8) {
        correcto();
    } else {
        incorrecto();
    }

}