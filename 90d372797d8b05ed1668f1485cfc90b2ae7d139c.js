if (localStorage.getItem(btoa("noa")) == btoa("true")){
  empty_page()
  window.location.replace("/cdc-epic-website/404.html")
}
function empty_page(){
  document.body.style = ""
  document.body.innerHTML = ""
}
