dataExercise = {
    next: "../2/index.html",
    procesar: "result_tipo_2_4_5()",
    titulo: "<center><h5><span>Selecciona</span> las figuras geométricas que tienen 3 vértices.</h5></center>",
}

document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);




var r = 0;
var ul = document.querySelector('#listA');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}

$('.a').click(function () {
    $(this).css({
        "border": "3px solid",
        "border-color": "#37D3F7",
        "background": "#B6ECFF"
    });
    var element = $(this).attr("alt");
    var select = $(this).attr("value");
    if (select != "seleccionado") {

        if (element == "n") {
            r++;
            $(this).attr("value", "seleccionado");
        } else {
            r--;
            $(this).attr("value", "seleccionado");
        }
        console.log(r);
    }
})


function result_tipo_2_4_5() {

    if (r == 3) {
        correcto();
    } else {
        incorrecto();
    }

}