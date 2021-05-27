radio.onReceivedNumber(function (receivedNumber) {
    if (personaje == receivedNumber) {
        basic.showIcon(IconNames.Skull)
        music.playMelody("B B G G E E C C ", 120)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(personaje)
    if (personaje < 4) {
        basic.showString("LOBO")
    } else {
        basic.showString("GENTE")
    }
})
input.onButtonPressed(Button.A, function () {
    if (personaje < 4) {
        contador += -1
        if (contador < 4) {
            contador = 3
        }
        basic.showNumber(contador)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (personaje < 4) {
        radio.sendNumber(contador)
        for (let index = 0; index < 120; index++) {
            basic.pause(1000)
        }
        basic.showIcon(IconNames.Yes)
    }
})
input.onButtonPressed(Button.B, function () {
    if (personaje < 4) {
        contador += 1
        if (contador > 20) {
            contador = 20
        }
        basic.showNumber(contador)
    }
})
let personaje = 0
let contador = 0
radio.setGroup(1)
contador = 3
personaje = randint(1, 20)
basic.showNumber(personaje)
if (personaje < 4) {
    basic.showString("LOBO")
} else {
    basic.showString("GENTE")
}
