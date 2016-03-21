//  Esta funcion muestra el saludo su explicacion
function hola(saludo, explicacion,audio, zoom1, zoom2, zoom3, zoom4){
    var titulo = document.getElementById("e1");
    var parrafo = document.getElementById("e2");
    var mediodia = document.getElementById("mediodia");
    var atardecer = document.getElementById("atardecer");
    var amanecer = document.getElementById("amanecer");
    var medianoche = document.getElementById("medianoche");
    var a1 = document.getElementById(zoom1);
    var clase1 = "zoom"+" "+zoom1;
    var a2 = document.getElementById(zoom2);
    var clase2 = "zoom"+" "+zoom2;
    var a3 = document.getElementById(zoom3);
    var clase3 = "zoom"+" "+zoom3;
    var a4 = document.getElementById(zoom4);
    var clase4 = "zoom"+" "+zoom4;
    var au = document.getElementById(audio);
    
    au.play();
    parrafo.innerHTML=explicacion;
    titulo.innerHTML=saludo;
    
        for (var i = 0; i <= 2; i++){
            switch(i){
                case 1:
                    mediodia.className ="tamano mediodia";
                    atardecer.className ="tamano atardecer";
                    amanecer.className ="tamano amanecer";
                    medianoche.className ="tamano medianoche";
                    break;
                case 2:
                    a1.className=clase1;
                    a2.className=clase2;
                    a3.className=clase3;
                    a4.className=clase4;
                break;
            }
        } 
}
