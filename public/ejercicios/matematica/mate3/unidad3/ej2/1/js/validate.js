$('select').formSelect();

dataExercise = {
    next: "../2/index.html",
    procesar: "result_tipo_3_2_6()",
    titulo: "<center><h5><span>Observa</span> los números en el tablero posicional. Luego, <span>selecciona</span> su descomposición.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);

var cols = document.querySelectorAll('.grid-container');
// console.log(cols);
[].forEach.call(cols, (e)=>{
    for (var i = e.children.length; i >= 0; i--) {
        e.appendChild(e.children[Math.random() * i | 0]);
    }
});
// Select
var r = 0;
$(".slc").change(function() {
    slcalt = $(this).attr("alt");
    slcval = $(this).val();
    // console.log(slcalt);
    // console.log(slcval);
    if (slcalt == slcval) {
        r++;
        // console.log(r);
    }
});


function result_tipo_3_2_6() {

    if (r == 15) {
        correcto();
    } else {
        incorrecto();
    }

}