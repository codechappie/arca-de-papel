let array = ['8 000','3 000','1 000','5 000','7 000','6 000','400','900','100','200','600','300','800','80','20','30','40','60','50','10','2','1','5','8','4'];
let options = '<option value="" disabled selected></option>';


for (let i = 0; i < array.length; i++) {
    options += `<option value="${array[i]}">${array[i]}</option>`
}


$('.slc').html(options);


$('select').formSelect();

dataExercise = {
    next: "../3/index.html",
    procesar: "result_tipo_3_2_7()",
    titulo: "<center><h5><span>Observa</span> los números en el tablero posicional. Luego, <span>selecciona</span> su notación desarrollada.</h5></center>",
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


function result_tipo_3_2_7() {

    if (r == 16) {
        correcto();
    } else {
        incorrecto();
    }

}