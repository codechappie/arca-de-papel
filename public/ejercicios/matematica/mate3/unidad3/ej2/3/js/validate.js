$('select').formSelect();

dataExercise = {
    next: "../../../index.html",
    procesar: "result_tipo_3_2_8()",
    titulo: "<center><h5><span>Observa</span> los precios de los televisores. Luego, <span>selecciona</span> el que tiene un costo de 3 724 soles.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);



var cols = document.querySelectorAll('.grid-container');
[].forEach.call(cols, (e)=>{
    for (var i = e.children.length; i >= 0; i--) {
        e.appendChild(e.children[Math.random() * i | 0]);
    }
});
/**
 * TODO: Seleccion
 */
var r = 0;
$('.grid-item').click(function() {
    $(this).css({
        "border": "2px solid",
        "border-color": "#37D3F7",
        "background": "#B6ECFF",
        "box-shadow": "grey 2px 3px 8px 0px"
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
function result_tipo_3_2_8() {

    if (r == 1) {
        correcto();
    } else {
        incorrecto();
    }

}
