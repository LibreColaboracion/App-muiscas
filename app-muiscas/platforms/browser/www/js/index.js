//  Cambio de pantalla
function cambiarpantalla(uno,clase1,dos,clase2){
    var p1 = document.getElementById(uno);
    var desaparecer = clase1 +" "+"arriba";
        p1.className= desaparecer;
    var p2 = document.getElementById(dos);
    var aparecer = clase2;
        p2.className= aparecer;
}
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
