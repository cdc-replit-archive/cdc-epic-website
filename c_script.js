eaudio = new Audio("./00010101.flac")
eaudio.loop=true
eaudio.play()
if (localStorage.getItem("temp_trans_m") != null){
  document.getElementById("return").innerText = "Back"
  //localStorage.removeItem("temp_trans_m");
}
window.onmousedown = function (){
    eaudio.play()
}
window.touchstart = function (){
    eaudio.play()
}
function open_page(b){
  window.location.replace(`/`)
}