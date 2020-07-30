let array = ['3','5','2','20','325','300','534', '4','30','500','400','60','6','466'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();//<----Esto siempre va

//INICIO PLANTILLA - PLANTILLA - PLANTILLA
dataExercise = {
    next: "../2/index.html", // Siguiente ejercicio
    procesar: "result_tipo_2_2_3()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
    // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
    titulo: "<center><h5><span>Observa</span> los cuadros y luego <span>completa</span>.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA



//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
// Select
var r = 0;
$(".slc").change(function() {
    slcalt = $(this).attr("alt");
    slcval = $(this).val();
    console.log(slcalt);
    console.log(slcval);
    if (slcalt == slcval) {
        r++;
    }
});


// Validar
function result_tipo_2_2_3() {
    if (r == 21) {
        correcto();
    } else {
        incorrecto();
    }

}


var cols = document.querySelectorAll('.aleatorio');

[].forEach.call(cols, (e)=>{

    for (var i = e.children.length; i >= 0; i--) {
        e.appendChild(e.children[Math.random() * i | 0]);
    }

});

//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js
//COPIAR DEL EJERCICIO del index.html o DEL ARCHIVO validate.js 
