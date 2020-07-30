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


let unidad3 = ["Ejericio 1",
    "Ejericio 2",
    " Ejericio 3","Ejericio 4", "Ejericio 5","Ejericio 6","Ejericio 7","Ejericio 8", "Ejericio 9","Ejericio 10"];
let unidad4 = ["Ejericio 1",
"Ejericio 2",
" Ejericio 3","Ejericio 4", "Ejericio 5","Ejericio 6","Ejericio 7","Ejericio 8", "Ejericio 9","Ejericio 10"];
let unidad5 = ["Ejericio 1",
"Ejericio 2",
" Ejericio 3","Ejericio 4", "Ejericio 5","Ejericio 6","Ejericio 7","Ejericio 8", "Ejericio 9","Ejericio 10"];
let unidad6 = ["Ejericio 1",
"Ejericio 2",
" Ejericio 3","Ejericio 4", "Ejericio 5","Ejericio 6","Ejericio 7","Ejericio 8", "Ejericio 9","Ejericio 10"];


let html3 = '';
let html4 = '';
let html5 = '';
let html6 = '';

for (let i = 0; i < unidad3.length; i++) {
    html3 += `<a href="./unidad3/ej${i+1}/1">
                <h3>${unidad3[i]}</h3>
                <span class="btn-circle"><i class="fa fa-chevron-right"></i></span>
            </a>`;
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

$(".unidad3").html(html3);
$(".unidad4").html(html4);
$(".unidad5").html(html5);
$(".unidad6").html(html6);