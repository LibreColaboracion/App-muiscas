//  Esta función es para escuchar su audio
function audio(audio){
        var au = document.getElementById(audio);
        au.play();
}

//tenemos la funcion de audio repetidda
function efectos(id,clase){
        var a = document.getElementById(id);
        a.className = (clase);
}
function escuchar(id){
        var a = document.getElementById(id);
        a.play();
    }
 contador=0;
    function tiempo(){
        var c = setInterval(arcoiris,1000);
    }
    function arcoiris(){
        contador++;
        var texto = document.getElementById("lebique1");
            switch(contador){
                    case 1:
                        texto.style.color="#ff5722";
                    break;
                    case 2:
                        texto.style.color="#ff9100";
                    break;
                    case 3:
                        texto.style.color="#ffea00";
                    break;
                    case 4:
                        texto.style.color="#76ff03";
                    break;
                    case 5:
                        texto.style.color="#4fc3f7";
                    break;
                    case 6:
                        texto.style.color="#7e57c2";
                    break;
                    case 7:
                        texto.style.color="#ec407a";
                        contador=0;
                    break;
                } 
         }
function rana(id,clase1,clase2,clase3,clase4,clase5){
     var a = document.getElementById(id);
    contador++
    switch(contador){
        case 1:
                a.className = (clase1);
        break;
        case 2:
                a.className = (clase2);
        break;
        case 3:
                a.className = (clase3);
        break;
        case 4:
                a.className = (clase4);
        break;
        case 5:
                a.className = (clase5);
                contador=0;
        break;
    }
}
