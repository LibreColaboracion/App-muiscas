//  Esta función es para mostrar la escritura y escuchar su audio
function digito(nombre,audio){
    var numero1 = document.getElementById("h1js");
    var au = document.getElementById(audio);
        numero1.innerHTML=nombre;
        au.play();
}
// Aqui estan las variables globales donde tambien se alojan los ejercicios y sus respuestas
var contar= 0;
var hechos=[];
var numero= 0 ;
var negativa = 0;
var ejercicios = [
'<img class="imagenp" src="../img/1.png">',
'<img class="imagenp" src="../img/2.png">',
'<img class="imagenp" src="../img/3.png">',
'<img class="imagenp" src="../img/4.png">',
'<img class="imagenp" src="../img/5.png">',
'<img class="imagenp" src="../img/6.png">',
'<img class="imagenp" src="../img/7.png">',
'<img class="imagenp" src="../img/8.png">',
'<img class="imagenp" src="../img/9.png">',
'<img class="imagenp" src="../img/10.png">',
'<img class="imagenp" src="../img/11.png">',
'<img class="imagenp" src="../img/12.png">',
'<img class="imagenp" src="../img/13.png">',
'<img class="imagenp" src="../img/14.png">',
'<img class="imagenp" src="../img/15.png">',
'<img class="imagenp" src="../img/16.png">',
'<img class="imagenp" src="../img/17.png">',
'<img class="imagenp" src="../img/18.png">',
'<img class="imagenp" src="../img/19.png">',
'<img class="imagenp" src="../img/20.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista1&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista2&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista3&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista4&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista5&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista6&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista7&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista8&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista9&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista10&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista11&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista12&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista13&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista14&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista15&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista16&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista17&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista18&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista19&apos;).play()" src="../../img/caracola.png">',
'<img class="imagenp" onclick="getElementById(&apos;pista20&apos;).play()" src="../../img/caracola.png">'
];
var respuestas = ['ata','boza','mica','muyhyca','hyzca','taa','cuhupqua','suhuza','aca','ubchihica','quihicha ata','quihicha boza','quihicha mica','quihicha muyhyca','quihicha hyzca','quihicha taa','quihicha cuhupqua','quihicha suhuza','quihicha aca','gueta','ata','boza','mica','muyhyca','hyzca','taa','cuhupqua','suhuza','aca','ubchihica','quihicha ata','quihicha boza','quihicha mica','quihicha muyhyca','quihicha hyzca','quihicha taa','quihicha cuhupqua','quihicha suhuza','quihicha aca','gueta'];
// Esta funcion comienza el ejercicio
function comenzar(id,preg){
        numero = Math.round(Math.random()*preg.length);
    var input = document.getElementById("sub");
    var cuerpo = document.getElementById("e1");
    var borrar = document.getElementById(id);
    borrar.style.display = "none";
    input.style.display ="flex";
    cuerpo.innerHTML ='<div class="relativo"><div class="centrado"><h1>'+preg[numero]+'</h1></div></div>';
    console.log('numero '+numero,'preg[numero] '+preg[numero],ejercicios.length,respuestas.length)
}
// Esta función es para mostrar los ejercicios aleatoriamente
function quiz(pregun,respu,event) {
    var enter = event.keyCode;
    var input1 = document.getElementById("sub");
    var puntaje = document.getElementById("puntaje");
    var val = document.getElementById('getexto').value;
    var cuerpo=document.getElementById("e1");
    var valor = val.toLowerCase();
    var respuesta = respu[numero];
    if(enter == 13 | enter == undefined){
        console.log("oui",respuesta);
        console.log(respuesta,pregun[numero] );
        if(valor == respuesta){
            contar++;
            puntaje.innerHTML= contar;
            numero = Math.round(Math.random()*pregun.length);
            console.log(numero,respuesta,pregun.length);
            cuerpo.innerHTML ='<div class="relativo"><div class="centrado"><h1>'+pregun[numero]+'</h1></div></div>';

        }else{
            negativa++;
            switch(negativa){
                case 1:
                    cuerpo.innerHTML +='<div class="relativo"><div class="centrado"><h1>esta mal</h1></div></div>';
                    break;
                case 2:
                    cuerpo.innerHTML +='<div class="relativo"><div class="centrado"><h1>esta mal</h1></div></div>';
                    break;
                case 3:
                    input1.style.display ="none";
                    cuerpo.innerHTML +='<div class="relativo"><div class="centrado"><h1>Vuelve a estudiar</h1></div></div>';
                    break;
            }
        }
    }
}
