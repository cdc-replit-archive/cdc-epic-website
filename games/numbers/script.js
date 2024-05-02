document.getElementById("main").hidden = true;
function waitForElement(querySelector, timeout) {
  return new Promise((resolve, reject) => {
    var timer = false;
    if (document.querySelectorAll(querySelector).length) return resolve();
    const observer = new MutationObserver(() => {
      if (document.querySelectorAll(querySelector).length) {
        observer.disconnect();
        if (timer !== false) clearTimeout(timer);
        return resolve();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    if (timeout) timer = setTimeout(() => {
      observer.disconnect();
      reject();
    }, timeout);
  });
}

waitForElement("#preload", 3000).then(function() {
  document.getElementById("preload").hidden = true;
  document.getElementById("main").hidden = false;
}).catch(() => {
  window.location.reload()
});
eaudio = document.getElementById("ost")
eaudio.loop = true
eaudio.play()
let timeout = null;
block = false
hint = ""
let targetnum = "----"
function prepare() {
  targetnum = (Math.floor(Math.random() * 10)).toString() + (Math.floor(Math.random() * 10)).toString() + (Math.floor(Math.random() * 10)).toString() + (Math.floor(Math.random() * 10)).toString()
  header2 = document.getElementById("hint")
  hint = "";
  revealed = 0
  difficulty = ""
  displays = document.getElementById("displays")
  for (child of displays.children) {
    child.setAttribute("num", 0)
  }
  for (i of targetnum) {
    r = Math.round(Math.random())
    console.log(r)
    if (r == 0) {
      hint = hint + i
      revealed += 1;
    }
    else {
      hint = hint + "_"
    }
  }
  if (revealed == 0) {
    difficulty = "Extremely Hard"
  }
  if (revealed == 4) {
    difficulty = "Extremely Easy"
  }
  if (revealed == 3) {
    difficulty = "Easy"
  }
  if (revealed == 2) {
    difficulty = "Mediocre"
  }
  if (revealed == 1) {
    difficulty = "Hard"
  }
  header2.innerText = "Hint: " + hint + " Difficuty: " + difficulty;
}
prepare()
window.onmousedown = function() {
  if (!block) {
    eaudio.play()
  }
}
window.touchstart = function() {
  if (!block) {
    eaudio.play()
  }
}
function up(e) {
  if (block) {
    return
  }
  upid = parseInt(e.getAttribute("uid"))
  display = document.getElementById(`disp${upid}`)
  dnum = parseInt(display.getAttribute("num"))
  if (dnum + 1 <= 9) {
    display.setAttribute("num", dnum + 1)
  }
  else {
    display.setAttribute("num", 0)
  }
}

function down(e) {
  if (block) {
    return
  }
  upid = parseInt(e.getAttribute("did"))
  display = document.getElementById(`disp${upid}`)
  dnum = parseInt(display.getAttribute("num"))
  if (dnum - 1 >= 0) {
    display.setAttribute("num", dnum - 1)
  }
  else {
    display.setAttribute("num", 9)
  }
}

function update_displays() {
  //console.log(targetnum)
  if (block == true) {
    return
  }
  number = ""
  displays = document.getElementById("displays")
  for (child of displays.children) {
    num = child.getAttribute("num")
    number = number + num
    if (num != "0") {
      child.src = `./assets/n_${num}.png`
    }
    else {
      child.src = `./assets/num_${num}.png`
    }
  }
  if (number == targetnum) {
    block = true
    eaudio.pause()
    console.log(document.getElementById("tada").play())
    for (b of document.body.querySelectorAll("button")) {
      b.disabled = true;
    }
    setTimeout(win, 1200)
  }
  timeout = setTimeout(update_displays, 1)
}
function win() {
  clearTimeout(timeout)
  div = document.getElementById("main")
  div.innerHTML = "<div class=\"c\"><center><h1>Win</h1><h2>" + targetnum + "</h2><a href=\"/games\">Home</a></center></div>"
  wintrack = document.getElementById("win_a")
  wintrack.play()
  wintrack.loop = true;
}
update_displays();