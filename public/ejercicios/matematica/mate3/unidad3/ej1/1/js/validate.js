let array = [];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();

dataExercise = {
    next: "../2/index.html",
    procesar: "result_tipo_3_2_1()",
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

function result_tipo_3_2_1() {

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
    console.log(itemD)
    console.log(itemO)
    // Sortable
    
    if (itemD == itemO) {
        correcto()
    } else {
        incorrecto();
    }
}