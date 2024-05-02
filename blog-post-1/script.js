eaudio = new Audio("/00010101.flac")
eaudio.loop=true;
eaudio.play()
let urls = ["javascript:alert(\"TWO\")","javascript:alert(\"BLOG POST\")"]
window.onmousedown = function (){
    eaudio.play()
}
window.touchstart = function (){
    eaudio.play()
}

function thing(t){
  window.location.replace(urls[t.getAttribute('seed')])
}