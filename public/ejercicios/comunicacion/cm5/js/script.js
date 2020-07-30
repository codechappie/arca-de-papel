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


let unidad3 = ["El folleto",
"La descripción de un lugar de excursión del Perú",
"El adjetivo calificativo y sus grados"];
let unidad4 = ["La entrevista",
"El cuadro resumen",
"La mesa redonda"]; 
let unidad5 = ["La infografía",
"La exposición",
"Los pronombres personales, enclíticos y relativos"];
let unidad6 = ["El poema",
"El esquema de llaves",
"La declamación"];
let unidad7 = [
"El texto expositivo",
"El informe oral",
"La preposición: clases",
"La «v», «b» y «y» en los verbos"
];
let html3 = '';
let html4 = '';
let html5 = '';
let html6 = '';
let html7 = '';

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
    html6 += `<a href="./unidad7/ej${i+1}/1">
                <h3>${unidad7[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}

$(".unidad3").html(html3);
$(".unidad4").html(html4);
$(".unidad5").html(html5);
$(".unidad6").html(html6);
$(".unidad7").html(html7);