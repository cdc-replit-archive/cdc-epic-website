eaudio = new Audio("/00010101.flac")
eaudio.loop=true;
eaudio.play()
window.onmousedown = function (){
    eaudio.play()
}window.touchstart = function (){
    eaudio.play()
}