let array = ['3000','2425','1508','5051','1516','2442','2058','3326','1516','1089','1089','9118'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();

dataExercise = {
    next: "../../../index.html",
    procesar: "result_tipo_3_2_5()",
    titulo: "<center><h5><span>Observa</span> los cubos multibase y <span>selecciona</span> el número correspondiente.</h5></center>",
}
document.getElementById("ftitle").innerHTML = dataExercise.titulo;
document.getElementById("boton1").setAttribute("onclick", dataExercise.procesar);
document.getElementById("nextExercise").setAttribute("href", dataExercise.next);


    // Random
    var cols = document.querySelectorAll('.grid-container');
    // console.log(cols);
    [].forEach.call(cols, (e) => {
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
            console.log(r);
        }
    });
function result_tipo_3_2_5() {

    if (r == 2) {
        correcto();
    } else {
        incorrecto();
    }

}