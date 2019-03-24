var placar = 0;
var contador = 0;

function addBola(){

    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    var p1 = Math.floor(Math.random() * 800) + 250;
    var p2 = Math.floor(Math.random() * 400) + 80;
    var p3 = Math.floor(Math.random() * 800);
    var p4 = Math.floor(Math.random() * 500);

    var bg = Math.floor(Math.random() * 0xFFFFFF);
    bg = "#" + ("000000" + bg.toString(16)).substr(-6);

    bola.setAttribute("style", "left: " + p1 + "px; top: " + p2 + "px;background-color: " + bg + ";right: " + p3 + "px; bottom: " + p4);
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);

    document.getElementById("contador").innerHTML++;
    contador++;
    
    if(contador > 25){

        alert("Você perdeu, tente novamente.");
        contador = 0;
        window.location.href = window.location.href;
    }

}

function estourar(bola){

    document.body.removeChild(bola);
    document.getElementById("placar").innerHTML++;
    document.getElementById("contador").innerHTML--;
    document.getElementById("play");
    audio.play();
    placar++;
    contador--;

    if( placar >= 11 && placar <= 20){

        setInterval(addBola, 1750);

    } if (placar >= 21 && placar <= 30){
        
        setInterval(addBola, 1500);

    } if (placar > 30){

        alert("Parabéns, você venceu!!!");
        window.location.href = window.location.href;

    }
}

function iniciar(){

    setInterval(addBola, 2000);
    
}

function encerrar(){
    
    window.location.href = window.location.href;
}
