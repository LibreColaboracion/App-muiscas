//  Menu con cambio de color
function menu(color){
    var a = document.getElementById("menu");
    a.style.background = color;
    a.className = ("");
}
function menuc(){
    var a = document.getElementById("menu");
    a.className = ("invisible");
}
// Para la presentación
var contador=0;
    function tiempo(){
    var c = setInterval(inicio,2000);
    }
    function inicio(){
        contador++;
        var texto = document.getElementById("mover");
        var desa = document.getElementById("principal");
            switch(contador){
                    case 1:
                        texto.style.margin="0 0 0 -100%";
                    break;
                    case 2:
                        texto.style.margin=" 0  0 0 -200%";
                    break;
                    case 3:
                        texto.style.margin="0 0 0 -300%";
                    break;
                    case 4:
                        desa.style.opacity="0.1";
                    break;
                    case 5:
                        desa.style.display="none";
                        c = 0;
                    break;
                } 
         }