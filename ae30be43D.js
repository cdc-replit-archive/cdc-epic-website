if (localStorage.getItem(btoa("noa")) == btoa("true")){
  empty_page()
  window.location.replace("/404.html")
}
function empty_page(){
  document.body.style = ""
  document.body.innerHTML = ""
}