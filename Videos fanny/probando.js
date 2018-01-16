function iniciar(){
  video = document.getElementById("video");
  reproducir = document.getElementById("play");
  
  barra = document.getElementById("barra");
  barra.largoBarra = 275;
  
  barraProgreso = document.getElementById("barraProgreso");
    
  reproducir.addEventListener("click", playOPausa, false);
  barra.addEventListener("click", clickEnBarra, false);
}

function playOPausa(){
  if (!video.paused && !video.ended){
	video.pause();
    reproducir.innerHTML = "<strong>Play</strong>";
    window.clearInterval(actualizarBarra);
  }else{
    video.play();
    reproducir.innerHTML = "<strong>| |</strong>";
    actualizarBarra=window.setInterval(actualizar, 500);
  }
}

function actualizar(){
  if (!video.ended){
    var largo = parseInt(video.currentTime * barra.largoBarra / video.duration);
    barraProgreso.style.width = largo + "px";
  }else{
    barraProgreso.style.width = "0px";
    reproducir.innerHTML = "Play";
    window.clearInterval(actualizarBarra);
  }
}

function clickEnBarra(evento){
  if(!video.paused && !video.ended){
    var ratonX = evento.pageX - barra.offsetLeft;
    video.currentTime = ratonX * video.duration / barra.largoBarra;
    barraProgreso.style.width = ratonX + "px";
  }
}

window.addEventListener("load", iniciar, false);
