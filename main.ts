radio.setGroup(301)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("前にすすむ")
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("後ろにすすむ")
    } else {
        radio.sendString("とまる")
    }
})
basic.forever(function () {
    if (input.rotation(Rotation.Roll) >= 20) {
        radio.sendString("右かいてん")
    } else if (input.rotation(Rotation.Roll) <= -20) {
        radio.sendString("左かいてん")
    } else {
        radio.sendString("かいてんおわり")
    }
})
