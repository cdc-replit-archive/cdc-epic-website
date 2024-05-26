eaudio = new Audio("./00010101.flac")
eaudio.loop=true
if (localStorage.getItem("temp_trans_m") != null){
  localStorage.removeItem("temp_trans_m");
}
secretbutton = document.getElementById("???")
if (Math.random()>0.01){
  secretbutton.remove()
}
let pages = ["/games","/control.html","/database/cdcdb"]
if ( localStorage.getItem(btoa("no_switch")) != btoa("true")){
  document.body.innerHTML = "To begin please interact with the page."
}
if ( localStorage.getItem(btoa("no_switch")) == btoa("true")){
eaudio.play()
}
window.onmousedown = function (){
  if ( localStorage.getItem(btoa("no_switch")) != btoa("true")){
    document.body.innerHTML = "Wonderful."
  audio = new Audio("glitch.wav");
  audio.play()
  setTimeout(e,2100)
  }
  else{
    eaudio.play()
  }
}
window.touchstart = function (){
  if ( localStorage.getItem(btoa("no_switch")) != btoa("true")){
    document.body.innerHTML = "Wonderful."
  audio = new Audio("glitch.wav");
  audio.play()
  setTimeout(e,2100)
  }
  else{
    eaudio.play()
  }
}
function e(){
  window.location.replace("blog-post-20210911")
}
function open_page(b){
  if (parseInt(b.getAttribute("pageid"))==5){
    localStorage.setItem("temp_trans_m","1")
  }
  if (parseInt(b.getAttribute("pageid"))<4){
  window.location.replace(`./blog-post-${b.getAttribute("pageid")}`)
  }
  else{
    console.log(parseInt(b.getAttribute("pageid")))
    window.location.replace(pages[parseInt(b.getAttribute("pageid"))-4])
  }
}
