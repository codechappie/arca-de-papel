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

let unidad1 = ["Lectura: La verdadera autoridad de un rey",
"La comunicación",
"La sílaba tónica",
"El cuento",
"El propósito de un cuento",
"La prosa y el verso"];
let unidad2 = ["Lectura: El gigante egoísta",
"El mapa semántico",
"El debate",
"Las palabras graves",
"Las palabras esdrújulas"];
let unidad3 = ["Lectura: El ganso de oro",
"El diptongo y el hiato",
"Los refranes"];
let unidad4 = ["Los adjetivos",
"Los determinantes"];
let unidad5 = ["Lectura: Reseña de Ollantay",
"Una infografía",
"Los signos de interrogación y de exclamación"];
let unidad6 = ["Los puntos: tipos",
"La tradición"];
let unidad7 = ["La mesa redonda",
"La forma simple y compuesta del verbo",
"La coma enumerativa y la explicativa",
"El caligrama",
"Las décimas"];
let unidad8 = ["El cuadro de doble entrada"];
let unidad9 = ["El diagrama de árbol",
"El teatro"];


let html1 = '';
let html2 = '';
let html3 = '';
let html4 = '';
let html5 = '';
let html6 = '';
let html7 = '';
let html8 = '';
let html9 = '';

for (let i = 0; i < unidad1.length; i++) {
    html1 += `<a href="./unidad1/ej${i+1}/1">
                <h3>${unidad1[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
for (let i = 0; i < unidad2.length; i++) {
    html2 += `<a href="./unidad2/ej${i+1}/1">
                <h3>${unidad2[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
}
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

$(".unidad1").html(html1);
$(".unidad2").html(html2);
$(".unidad3").html(html3);
$(".unidad4").html(html4);
$(".unidad5").html(html5);
$(".unidad6").html(html6);
$(".unidad7").html(html7);
$(".unidad8").html(html8);
$(".unidad9").html(html9);