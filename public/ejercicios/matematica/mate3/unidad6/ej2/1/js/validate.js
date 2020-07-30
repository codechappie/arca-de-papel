let array = ['1←','1→','1↑','1↓','2←','2→','2↑','2↓','3←','3→','3↑','3↓','4←','4→','4↑','4↓','5←','5→','5↑','5↓','6←','6→','6↑','6↓'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();

dataExercise = {
    next: "../../../index.html",
    procesar: "result_tipo_3_5_2()",
    titulo: "<center><h5><span>Indica</span> el  camino que empleó el perro para encontrar su alimento.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);


/* *TODO: random */
var cols = document.querySelectorAll('.grid-body');
[].forEach.call(cols, (e) => {
    for (var i = e.children.length; i >= 0; i--) {
        e.appendChild(e.children[Math.random() * i | 0]);
    }
});
/* *TODO: function */
var r = 0;
$(".slc").change(function() {
    slcalt = $(this).attr("alt");
    slcval = $(this).val();
    // console.log(slcalt);
    // console.log(slcval);
    if (slcalt == slcval) {
        r++;
        console.log(r);
    }
});


function result_tipo_3_5_2() {

    if (r == 11) {
        correcto();
    } else {
        incorrecto();
    }

}