//  Esta función es para mostrar la escritura y escuchar su audio
function digito(nombre,audio){
    var numero = document.getElementById("h1js");
    var au = document.getElementById(audio);
        numero.innerHTML=nombre;
//         numero.className=clase;
        au.play();
}
// Esta función es para mostrar los ejercicios aleatoriamente 
    var antes = null;
    var contar= 0;
    var ejercicios = ["e1","e2","e3","e4","e5","e6","e7","e8","e9","e10","e11","e12","e13","e14","e15","e16","e17","e18","e19","e20","e21","e22","e23","e24","e25","e26","e27","e28","e29","e30"];

    function comenzar(){
    var numero = Math.round(Math.random()*((ejercicios.length)-1));
    var id = ejercicios[numero];
    var visible = document.getElementById(id);
    var inicio = document.getElementById("inicio")
        
        inicio.className="caja invisible";
        visible.className="caja";
        console.log(numero,id,contar)
        
}
function azar(){
    var numero = Math.round(Math.random()*((ejercicios.length)-1));
    var id = ejercicios[numero];
    var invisible = document.getElementById(antes);
    var visible = document.getElementById(id);
    var fin = document.getElementById("fin");
    
        insertar.innerHTML=contar;
        console.log(id, numero,diferente,((ejercicios.length)-1));
        
        if (contar <= 3){
            for (var i = 0; i <= 2; i++) {
                switch(i){
                    case 1:
                        invisible.className="caja invisible";
                    break;
                    case 2:
                        visible.className="caja";
                        antes = id;
                    break;
                }
            }
        }else{
            invisible.className="caja invisible";
            fin.className="caja";
        }
}
// function para los diferentes ejercicios
function escrito(id,respuesta,event) {
    var enter = event.keyCode;
    var valor = document.getElementById(id).value;
    
    console.log(valor, enter)
    
    if(enter == 13 | enter == undefined){
        console.log("oui")
	if(valor == respuesta){
            console.log("Bravo");
        }else{
            contar++;
            console.log("Mal");
        };
    }
}

