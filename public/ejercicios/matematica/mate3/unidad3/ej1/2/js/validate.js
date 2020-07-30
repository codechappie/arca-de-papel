
dataExercise = {
    next: "../3/index.html",
    procesar: "result_tipo_3_2_2()",
    titulo: "<center><h5><span>Observa</span> los cubos multibase y <span>forma</span> el número.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);



/**
 * TODO: Random
 */
var cols = document.querySelectorAll('#sortable');
[].forEach.call(cols, (e) => {
    for (var i = e.children.length; i >= 0; i--) {
        e.appendChild(e.children[Math.random() * i | 0]);
    }
});
/**
 * TODO: Orden
 */
$(function () {
    $("#sortable").sortable({
        revert: "invalid",
    });
    $("#draggable").draggable({
        connectToSortable: "#sortable",
        helper: "clone",
        revert: "invalid",
    });
    // $("ul, li").disableSelection();
});
function sortItems() {
    var items = $('#sortable .grid-item').get(); items.sort(function (a, b) { return parseInt(a.id) > parseInt(b.id); });
    
};

function result_tipo_3_2_2() {
    var min = $('#Minutos').text();
    var seg = $('#Segundos').text();
    var milseg = $('#Centesimas').text();
    var tiempo = min + ":" + seg + ":" + milseg;

    // Sortable
    var items = $('#sortable .grid-item').map(function() {
        return $.trim($(this).attr('id'));
    }).get();
    var itsort = $('#sortable .grid-item').map(function() {
        return $.trim($(this).attr('id'));
    }).get();
    itsort.sort();
    var itemD = JSON.stringify(items);
    var itemO = JSON.stringify(itsort);
    // Sortable
    
    if (itemD == itemO) {
        correcto()
    } else {
        incorrecto();
    }
}