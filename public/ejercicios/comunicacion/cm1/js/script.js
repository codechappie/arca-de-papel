let accItem = document.getElementsByClassName('accordion-item');
let accBtn = document.getElementsByClassName('unit');

for (i = 0; i < accBtn.length; i++) {
    accBtn[i].addEventListener('click', toggleItem, false)
}

function toggleItem() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordion-item close';
    }
    if (itemClass == 'accordion-item close') {
        this.parentNode.className = 'accordion-item open'
    }
}

let unidad1 = ["Las vocales",
    "La canción"]
let unidad2 = ["Las rimas",
    "La letra P",
    "La letra M",
    "La letra L",
    "El sustantivo común y propio"]
let unidad3 = ["La letra T",
    "La letra D",
    "La letra N"];
let unidad4 = ["La poesía",
    "La letra F",
    "La letra B"];
let unidad5 = ["La letra G",
    "El número del sustantivo: singular y plural",
    "El uso de la ca, co, cu, que, qui"];
let unidad6 = ["La descripción de un animal",
    "El ratón Pérez ",
    "La letra H"];
let unidad7 = ["Comprensión lectora",
    "El uso de la za, ce, ci, zo y zu y el plural Z - ces"];
let unidad8 = ["Comprensión lectora: Amigas del huerto",
    "El cuento",
    "Las palabras con Pr",
    "Las palabras con Br",
    "El verbo ",
    "El cuento"];
let unidad9 = ["Las palabras con Bl",
    "Las palabras con Pl",
    "Las palabras con Gr y Gl",
    "Las palabras con Cl",
    "Las palabras con Cr",
    "La oración: sujeto y predicado",
    "Los sinónimos y antónimos"]
let unidad10 = ["La Navidad de Isidro",
    "Las palabras con Tr y Tl",
    "Las palabras con Fr y Fl",
    "Las palabras con Dr",
    "El uso de los signos de interrogación y exclamación"]


let html1 = '', html2 = '', html3 = '', html4 = '', html5 = '', html6 = '',
    html7 = '', html8 = '', html9 = '', html10 = '';


for (let i = 0; i < unidad1.length; i++) {
    html1 += `<a href="./unidad1/ej${i + 1}/1">
                <h3>${unidad1[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad2.length; i++) {
    html2 += `<a href="./unidad2/ej${i + 1}/1">
                <h3>${unidad2[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad3.length; i++) {
    html3 += `<a href="./unidad3/ej${i + 1}/1">
                <h3>${unidad3[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad4.length; i++) {
    html4 += `<a href="./unidad4/ej${i + 1}/1">
                <h3>${unidad4[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad5.length; i++) {
    html5 += `<a href="./unidad5/ej${i + 1}/1">
                <h3>${unidad5[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad6.length; i++) {
    html6 += `<a href="./unidad6/ej${i + 1}/1">
                <h3>${unidad6[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad7.length; i++) {
    html7 += `<a href="./unidad7/ej${i + 1}/1">
                <h3>${unidad7[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad8.length; i++) {
    html8 += `<a href="./unidad8/ej${i + 1}/1">
                <h3>${unidad8[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad9.length; i++) {
    html9 += `<a href="./unidad9/ej${i + 1}/1">
                <h3>${unidad9[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad10.length; i++) {
    html10 += `<a href="./unidad10/ej${i + 1}/1">
                            <h3>${unidad10[i]}</h3>
                            <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
                        </a>`;

}
$(".unidad1").html(html1);
$(".unidad2").html(html2);
$(".unidad3").html(html3);
$(".unidad4").html(html4);
$(".unidad5").html(html5);
$(".unidad6").html(html6);
$(".unidad7").html(html7);
$(".unidad8").html(html8);
$(".unidad9").html(html9);
$(".unidad10").html(html10);