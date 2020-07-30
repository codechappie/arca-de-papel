let array = ['90','azul','rojo','50','verde'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.numeros').html(options);


$('select').formSelect();



dataExercise = {
    next: "../6/index.html", // Siguiente ejercicio
    procesar: "result_tipo_2_2_33()", //tal cual esta en la funcion result_tipo_x_x_x() de la parte inferior del archivo index o el archivo validate
    // El titulo tal cual esta en la carpetade paginacion  ejemplo Comunicacion/1/0/1/pagination.php
    titulo: "<center><h5>Se preguntó a los niños de primaria  por su color favorito.<span>Observa</span> en el gráfico sus respuestas y <span>completa</span>.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);
// FIN PLANTILLA - PLANTILLA - PLANTILLA

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


function result_tipo_2_2_33() {

    if (r == 6) {
        console.log(r);
        correcto();

    } else {
        incorrecto();

    }
}

var cols = document.querySelectorAll('.aleatorio');

[].forEach.call(cols, (e) => {

    for (var i = e.children.length; i >= 0; i--) {
        e.appendChild(e.children[Math.random() * i | 0]);
    }

});