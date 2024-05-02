let beep = new Audio("/beep.wav")
let sw = new Audio("/switch.wav")
let aud = new Audio("/glitch2.wav")
let noise = new Audio("/white_noise.wav")
noise.loop = true
beep.loop = true
beep.play()
bg = 1
effects_enabled = 1
dialogue = -1
let flag = 0
texts = ["404 Not Found", "...", "You're the smart one huh?", "Then we're gonna play a game", "I love torturing visitors!", "...", "Shall I spare you?", "Let's see........"]

function switch_bg() {
    if (effects_enabled != 1) {
        return
    }
    rand = Math.random()
    console.log(rand)
    if (rand > 0.5 && rand < 0.7) {
        document.querySelector("div").innerText = "> "
    }
    if (bg == 1) {
        document.body.style = "background-color:black;color:green;font-size:33px"
        bg = 0
        console.log("1")
        setTimeout(switch_bg, 500)
        return
    }
    if (bg == 0) {
        document.body.style = "background-color:white;color:black;font-size:33px"
        bg = 1
        console.log("0")
        setTimeout(switch_bg, 500)
        return
    }
}

function main_loop() {
    if (effects_enabled == 1) {
        console.log("Update.")
        document.querySelector("div").innerText = document.querySelector("div").innerText + "?"
    } else {
        console.log(Math.round(45 + Math.random() * 5))
        document.body.style = "background-color:black;"
        document.querySelector("div").style = "background-color:black;color:green;" + "font-size:" + Math.round(45 + (5 * Math.round(Math.random())) + Math.random() * 5) + ';'
    }
    setTimeout(main_loop, 15)
}
switch_bg()
main_loop()

function dial_advance() {
    spared = Math.random();
    if (dialogue != texts.length - 1) {
        sw.play()
        dialogue += 1
        document.querySelector("div").innerHTML = "<p>" + texts[dialogue] + "</p>"
        console.log("switched.")
        setTimeout(dial_advance, 2000)
    } else {
        if (spared > 0.2) {
            document.querySelector("div").innerText = "010010000100010101001100010100000010000001001101010001010010000001001001001000000100001101000001010011100101010000100000010101000100000101001011010001010010000001010100010010000100100101010011001000000100000101001110010110010100110101001111010100100100010100100000010010000100010101001100010100000010000001001101010001010010000001001001001000000100001101000001010011100101010000100000010101000100000101001011010001010010000001010100010010000100100101010011001000000100000101001110010110010100110101001111010100100100010100100000010010000100010101001100010100000010000001001101010001010010000001001001001000000100001101000001010011100101010000100000010101000100000101001011010001010010000001010100010010000100100101010011001000000100000101001110010110010100110101001111010100100100010100100000010010000100010101001100010100000010000001001101010001010010000001001001001000000100001101000001010011100101010000100000010101000100000101001011010001010010000001010100010010000100100101010011001000000100000101001110010110010100110101001111010100100100010100100000010010000100010101001100010100000010000001001101010001010010000001001001001000000100001101000001010011100101010000100000010101000100000101001011010001010010000001010100010010000100100101010011001000000100000101001110010110010100110101001111010100100100010100100000010010000100010101001100010100000010000001001101010001010010000001001001001000000100001101000001010011100101010000100000010101000100000101001011010001010010000001010100010010000100100101010011001000000100000101001110010110010100110101001111010100100100010100100000"
            sw.pause()
            noise.pause()
            aud.play()
            localStorage.setItem(btoa("no_switch"), btoa('true'))
            window.location.replace("/")
        }
        else
        {alert("011110010110111101110101001000000111011101101001011011000110110000100000011011100110010101110110011001010111001000100000011001110110111100100000011000100110000101100011011010110010000001101001011011100010000001101000011001010111001001100101")
            localStorage.setItem(btoa("noa"), btoa("true"))
            window.location.replace("/404.html")
    }
}
}

window.onmousedown = function() {
    if (effects_enabled == 1) {
        effects_enabled = 0;
        noise.play();
        dial_advance();
        beep.pause();;
        aud.loop = true;
    }
}
window.touchstart = function() {
    if (effects_enabled == 1) {
        effects_enabled = 0;
        noise.play();
        dial_advance();
        beep.pause();;
        aud.loop = true;
    }
}