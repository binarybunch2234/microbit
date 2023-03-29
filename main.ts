basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 725) {
        basic.showNumber(5)
    } else if (pins.analogReadPin(AnalogPin.P0) <= 725) {
        basic.showNumber(0)
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 725) {
        basic.showNumber(5)
    } else if (pins.analogReadPin(AnalogPin.P1) <= 725) {
        basic.showNumber(1)
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 725) {
        basic.showNumber(5)
    } else if (pins.analogReadPin(AnalogPin.P2) <= 725) {
        basic.showNumber(2)
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P3) < 725) {
        basic.showNumber(5)
    } else if (pins.analogReadPin(AnalogPin.P3) <= 725) {
        basic.showNumber(3)
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P4) < 725) {
        basic.showNumber(5)
    } else if (pins.analogReadPin(AnalogPin.P4) <= 725) {
        basic.showNumber(4)
    }
})
