let accItem = document.getElementsByClassName('accordion-item');
let accBtn  = document.getElementsByClassName('unit');

for (i = 0; i < accBtn.length; i++){
    accBtn[i].addEventListener('click', toggleItem, false)
}

function toggleItem() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordion-item close';
    }
    if(itemClass == 'accordion-item close'){
        this.parentNode.className = 'accordion-item open'
    }
}


let unidad3 = ["Los antónimos ",
"La descripción de personas",
"El género y número del sustantivo"];
let unidad4 = ["Lectura",
"La familia de palabras",
"El mapa semántico"];
let unidad5 = ["La declamación",
"La concordancia sustantivo y adjetivo",
"Redacción: La estructura de un poema"];
let unidad6 = ["El tema del texto",
"Los conectores de secuencia y adición",
"La exposición: Los animales"];
let unidad7 = ["La serie de palabras",
"El verbo"];
let unidad8 = ["Las ideas principales",
"El verbo en presente, pasado y futuro",
"El uso de la ge, gi y je, ji",
"Las analogías"];
let unidad9 = ["El sujeto y el predicado ",
"Los signos de interrogación y exclamación",
"Realizamos un texto instructivo"];
let unidad10 = ["Las ideas principales"];

let html3 = '';
let html4 = '';
let html5 = '';
let html6 = '';
let html7 = '';
let html8 = '';
let html9 = '';
let html10 = '';

for (let i = 0; i < unidad3.length; i++) {
    html3 += `<a href="./unidad3/ej${i+1}/1">
                <h3>${unidad3[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad4.length; i++) {
    html4 += `<a href="./unidad4/ej${i+1}/1">
                <h3>${unidad4[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad5.length; i++) {
    html5 += `<a href="./unidad5/ej${i+1}/1">
                <h3>${unidad5[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad6.length; i++) {
    html6 += `<a href="./unidad6/ej${i+1}/1">
                <h3>${unidad6[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad7.length; i++) {
    html7 += `<a href="./unidad7/ej${i+1}/1">
                <h3>${unidad7[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad8.length; i++) {
    html8 += `<a href="./unidad8/ej${i+1}/1">
                <h3>${unidad8[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad9.length; i++) {
    html9 += `<a href="./unidad9/ej${i+1}/1">
                <h3>${unidad9[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad10.length; i++) {
    html10 += `<a href="./unidad10/ej${i+1}/1">
                <h3>${unidad10[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}

$(".unidad3").html(html3);
$(".unidad4").html(html4);
$(".unidad5").html(html5);
$(".unidad6").html(html6);
$(".unidad7").html(html7);
$(".unidad8").html(html8);
$(".unidad9").html(html9);
$(".unidad10").html(html10);