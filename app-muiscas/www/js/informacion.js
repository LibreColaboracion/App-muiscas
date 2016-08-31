 
var inicioX;
var finX;
function nuevo(id){
    function start(evento){
        inicioX = evento.touches[0].pageX;
    }
    function final(evento){
        finX = evento.changedTouches[0].pageX;
    }
    var divt2 = document.getElementById(id);
    divt2.addEventListener('touchstart',start,false);
    divt2.addEventListener('touchend',final,false);
}
function cambio(){
    console.log('inicio del toque ' +inicioX +' final del toque '+ finX);
    if(inicioX + 80 < finX){
        console.log('***De izquierda a derecha***');
        this.style.margin = '0 0 0 0%';
    }
    if(inicioX  > finX + 80){
        console.log('***De derecha a izquierda***');
        this.style.margin = '0 0 0 -100%';
    }
}
window.addEventListener('load', function(){nuevo('touchbilingue');
  document.getElementById('touchbilingue').addEventListener('touchend',cambio,false);
  nuevo('touchfotos');
  document.getElementById('touchfotos').addEventListener('touchend',cambio,false);
  nuevo('touchfotos2');
  document.getElementById('touchfotos2').addEventListener('touchend',cambio,false);
}, false);