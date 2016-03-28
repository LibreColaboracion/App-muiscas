//  Esta función es para escuchar su audio
function digito(audio){
        var au = document.getElementById(audio);
        au.play();
}
//  Cambio de pantalla
function cambiarpantalla(uno,clase1,dos,clase2){
    var p1 = document.getElementById(uno);
    var desaparecer = clase1 +" "+"arriba";
    p1.className= desaparecer;
    var p2 = document.getElementById(dos);
    var aparecer = clase2;
    p2.className= aparecer;
}
// este es el orden de las preguntas
var  preguntas1 = ['Choá','Moaz _______ umzone.','ehe.<br>_______ fernando gue.','zehica Diana _______','zehica Pedro gue nga  _____ Bosa gue','____ cha Bosa gue.','Ipqua ______','Juan gue _____ . Ichuta','Ipqua zeguaque ______','______ ahyca','Carlos gue _______. Zepaba','____ ichosqua','Miis _______'];
// estas son las respuestas
var respuestas1 = ['chogue','choá','zehica','gue','cha','nga','ahyca','ahyca','nziga','ipqua','ahyca','mis','ichosqua'];

var preguntas2 =[
    '<img class="tamano" src="../imagenes/mediodia.gif"> <b class="noseve">------</b> _ _ _ _ _ _ <b class="noseve">------</b> _ _ _',
    '<img class="tamano" src="../imagenes/medianoche.gif"> <b class="noseve">------</b> _ _ _ _ _ _ <b class="noseve">------</b> _ _',
    '<img class="tamano" src="../imagenes/amanecer.gif">_ _ _ _ _ _<b class="noseve">----</b> _ _ _<b class="noseve">----</b>_ _ _ _',
    '<img class="tamano" src="../imagenes/atardecer.gif">_ _ _ _ _ _<b class="noseve">----</b> _ _ _<b class="noseve">----</b>_ _ _ _',
    '<img class="tamano" src="../imagenes/joven.svg"> <b class="noseve">------</b> _ _ _ _ _',
    '<img class="tamano" src="../imagenes/persona.svg"><b class="noseve">----</b> _ _ _ _ _',
    '<img class="tamano" src="../imagenes/personas.svg"><b class="noseve">----</b> _ _ _ _ _ _ _ _ _',
    'Muy Bien!! Ya conoces algunos saludos, ahora escribe el saludo o la respuesta que haga falta:<br><br>____ --> Chogue',
    '___<b class="noseve">--</b>____<b class="noseve">--</b>_______ --> Sua choc aguene',
    'Za choc aguenua --> __<b class="noseve">--</b>____<b class="noseve">--</b>_______'
    ];
    var respuestas2 =['chogue sua','chogue za','chogue sua mena','chogue sua meca','guaza','chibu','chibusgua','choá','sua choc aguenua','za choc aguene'];

var negativa = 0; /*Lleva la cantidad de errores*/
var numpregunta=0; /*Lleva el avance en las preguntas*/
var contar=0; /*Lleva el conteo para saber cuando finalizar*/

// Cominza el ejercicio
function comenzar(id,preg){
    var input = document.getElementById("sub");
    var cuerpo = document.getElementById("secundario");
    var borrar = document.getElementById(id);
    borrar.style.display = "none";
    input.style.display ="flex";
    cuerpo.innerHTML +='<div class="contizquierda"><img class="caras" src="imagenes/chathombre.svg"><div class="burbuja izquierda"><div class="contexto"><p class="texto">'+preg[numpregunta]+'</p></div></div>';
}

// Para el ejercicio del dialogo
function dialogo(pregun,respu,event) {
    var enter = event.keyCode;
    var input1 = document.getElementById("sub");
    var val = document.getElementById('getexto').value;
    var aparecer = document.getElementById("tot");
    var cuerpo=document.getElementById("secundario");
    var valor = val.toLowerCase();
    var respuesta = respu[numpregunta];
    if(enter == 13 | enter == undefined){
        console.log("oui",respuesta)
	if(valor == respuesta){
        contar++;
        if(contar <= (pregun.length -1)){
            cuerpo.innerHTML +='<div class="contderecha"><div class="burbuja derecha"><div class="contexto"><p class="texto">'+respuesta+'</p></div></div><img class="caras" src="imagenes/chatmujer.svg"></div>';
            numpregunta++;
            cuerpo.innerHTML +='<div class="contizquierda"><img class="caras" src="imagenes/chathombre.svg"><div class="burbuja izquierda"><div class="contexto"><p class="texto">'+pregun[numpregunta]+'</p></div></div>';
            console.log(respuesta);
        }
        if(contar == pregun.length){
            aparecer.style.display="inherit";
            input1.style.display ="none";
        }
        }else{
            negativa++;
            switch(negativa){
                case 1:
                    cuerpo.innerHTML +='<div class="contizquierda"><img class="caras" src="imagenes/chathombre.svg"><div class="burbuja izquierda"><div class="contexto"><p class="texto">Tu respuesta esta mal</p></div></div>';
                    break;
                case 2:
                    cuerpo.innerHTML +='<div class="contizquierda"><img class="caras" src="imagenes/chathombre.svg"><div class="burbuja izquierda"><div class="contexto"><p class="texto">Tu respuesta esta mal</p></div></div>';
                    break;
                case 3:
                    input1.style.display ="none";
                    cuerpo.innerHTML +='<div class="contizquierda"><img class="caras" src="imagenes/chathombre.svg"><div class="burbuja izquierda"><div class="contexto"><p class="texto">vulve a estudiar</p></div></div>';
                    break;
            }
        }
    }
}
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
