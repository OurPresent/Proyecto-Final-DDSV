function Reproducir(){
    var audio = document.getElementById("mi-audio");
    audio.onplay();
}

function Pausar(){
    var audio = document.getElementById("mi-audio");
    audio.onpause();
}

function CrearAudioDinamicamente(){
    var audio = document.createElement("audio");
    audio.src = "audiotest2.mp3";
    audio.addEventListener('ended', function (){
        setTimeout(function() { audio.play(); }, 500)
    }, false);

    audio.play();
}

function VerOtrasPropiedades(){
    var audio = document.getElementById('mi-audio');

    var tiempo = audio.currentTime;
    var duracion = audio.duration;
    
}