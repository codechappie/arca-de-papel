let numbers = ['556 + 436','396 + 206','436 + 556','206 + 396','435 + 556','556 + 466'];
let result = ['602','962','992','206','682','862'];

  
let optionsN = '<option value="" disabled selected></option>';
let optionsR = '<option value="" disabled selected></option>';

for (let i = 0; i < numbers.length; i++) {
    optionsN += `<option value="${numbers[i]}">${numbers[i]}</option>`
}
for (let i = 0; i < result.length; i++) {
    optionsR += `<option value="${result[i]}">${result[i]}</option>`
}


$('.numbers').html(optionsN);
$('.result').html(optionsR);


$('select').formSelect();//<----Esto siempre va

//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
    next: "../../../index.html", // Siguiente ejercicio
    procesar: "result_tipo_2_2_21()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
    // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
    titulo: "<center><h5><span>Realiza</span> las adiciones y <span>compara</span> los resultados.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA



//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 


function result_tipo_2_2_21() {
    
    r = 0;
    seleccion_lista();
    if (r == 8) {
        correcto();
        console.log(r)
    } else {
        incorrecto();
        console.log(r)
    }
}
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
