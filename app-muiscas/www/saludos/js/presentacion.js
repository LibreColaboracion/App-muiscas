//  Esta función es para escuchar su audio
function digito(audio){
    var au = document.getElementById(audio);
    au.play();
}
// Aparecer burbuja
function presentacion(id){
    var aparecer = document.getElementById(id);
    aparecer.style.display="flex";
}
// Variables que guarda el nombre y el lugar de vivienda del usuario
var contar=0;
var negativa =0;
var val2="d";
// ejercicios en el transcurso
function presenejer(event){
    var enter = event.keyCode;
    var siguiente = document.getElementById("p6");
    var input1 = document.getElementById("sub");
    var val1 = document.getElementById('getexto').value.toLowerCase().split(' ');
    var val2=val1.join(' ');
    var primera =document.getElementById("primerarespuesta");
    var respuesta1 = val1[0];
    var respuesta2 = val1[(val1.length)-1]
    console.log(val1, respuesta1, respuesta2);

    if(enter == 13 | enter == undefined){
        if( "zehyca" == respuesta1 & "gue" === respuesta2){
            primera.innerHTML +='<div class="contizquierda"><img class="caras" src="imagenes/chathombre.svg"><div class="burbuja izquierda"><div class="contexto"><p class="texto">'+val2+'</p><p class="texto">Buena respuesta<p></div></div>';
            siguiente.style.display="flex";
            input1.style.display ="none";

        }else{
            negativa++;
            switch(negativa){
                case 1:
                    primera.innerHTML +='<div class="contizquierda"><img class="caras" src="imagenes/chathombre.svg"><div class="burbuja izquierda"><div class="contexto"><p class="texto">Tu respuesta esta mal</p></div></div>';
                    break;
                case 2:
                    primera.innerHTML +='<div class="contizquierda"><img class="caras" src="imagenes/chathombre.svg"><div class="burbuja izquierda"><div class="contexto"><p class="texto">Tu respuesta esta mal</p></div></div>';
                    break;
                case 3:
                    input1.style.display ="none";
                    primera.innerHTML +='<div class="contizquierda"><img class="caras" src="imagenes/chathombre.svg"><div class="burbuja izquierda"><div class="contexto"><p class="texto">vulve a estudiar</p></div></div>';
                    break;
            }
        }
    }
}
function cha(event){
    var enter = event.keyCode;
    var siguiente = document.getElementById("p12");
    var input2 = document.getElementById("subin");
    var valor1 = document.getElementById('getcha').value.toLowerCase().split(' ');
    var valor2=valor1.join(' ');
    var segunda =document.getElementById("segundarespuesta");
    var respu1 = valor1[0];
    var respu2 = valor1[(valor1.length)-1]
        console.log(valor1, respu1, respu2);

        if(enter == 13 | enter == undefined){
            if( "cha" == respu1 & "gue" === respu2){
                segunda.innerHTML +='<div class="contizquierda"><img class="caras" src="imagenes/chathombre.svg"><div class="burbuja izquierda"><div class="contexto"><p class="texto">'+valor2+'</p><p class="texto">Buena respuesta<p></div></div>';
                siguiente.style.display="flex";
                input2.style.display ="none";

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
                        input.style.display ="none";
                        cuerpo.innerHTML +='<div class="contizquierda"><img class="caras" src="imagenes/chathombre.svg"><div class="burbuja izquierda"><div class="contexto"><p class="texto">vulve a estudiar</p></div></div>';
                        break;
                }
            }
        }
}
function palabraclave(va){
    for(j=0;j<=(va.length)-1;j++){
        var r = va[j];
        if("nga" == r){
            return(j);
        }

    }
}
function nga(event){
    var enter = event.keyCode;
    var siguient = document.getElementById("p16");
    var input3 = document.getElementById("subinga");
    var valo1 = document.getElementById('getnga').value.toLowerCase().split(' ');
    var numero = palabraclave(valo1);
    var valo2=valo1.join(' ');
    var tercera =document.getElementById("tercerarespuesta");
    var respues1 = valo1[0];
    var respues2 = valo1[numero -1];
    var respues3 = valo1[numero];
    var respues4 = valo1[numero + 1];
    var respues5 = valo1[(valo1.length)-1]

                    console.log(valo1, respues1, respues2, respues3, respues4, respues5);

            if(enter == 13 | enter == undefined){

                if( "zehyca" == respues1 & "gue" == respues2 & "nga" == respues3 & "cha" == respues4 & "gue" == respues5){
                    siguient.style.display="flex"
                    tercera.innerHTML +='<div class="contizquierda"><img class="caras" src="imagenes/chathombre.svg"><div class="burbuja izquierda"><div class="contexto"><p class="texto">'+valo2+'</p><p class="texto">Buena respuesta<p></div></div>';
                    tercera.style.display="flex";
                    input3.style.display ="none";

                }else{
                    negativa++;
                    switch(negativa){
                        case 1:
                            tercera.innerHTML +='<div class="contizquierda"><img class="caras" src="imagenes/chathombre.svg"><div class="burbuja izquierda"><div class="contexto"><p class="texto">Tu respuesta esta mal</p></div></div>';
                            break;
                        case 2:
                            tercera.innerHTML +='<div class="contizquierda"><img class="caras" src="imagenes/chathombre.svg"><div class="burbuja izquierda"><div class="contexto"><p class="texto">Tu respuesta esta mal</p></div></div>';
                            break;
                        case 3:
                            input.style.display ="none";
                            tercera.innerHTML +='<div class="contizquierda"><img class="caras" src="imagenes/chathombre.svg"><div class="burbuja izquierda"><div class="contexto"><p class="texto">vulve a estudiar</p></div></div>';
                            break;
                    }
                }
            }
}
