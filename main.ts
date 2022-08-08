input.onButtonPressed(Button.A, function () {
    if (selecionar == 0) {
        número_1 += 1
        basic.showNumber(número_1)
    }
    if (selecionar == 1) {
        número_2 += 1
        basic.showNumber(número_2)
    }
})
input.onButtonPressed(Button.AB, function () {
    operadores += 1
    if (operadores == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
    } else {
        if (operadores == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(200)
            basic.clearScreen()
        } else {
            if (operadores == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(100)
                basic.clearScreen()
            } else {
                if (operadores == 4) {
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . # . .
                        `)
                    basic.pause(200)
                    basic.clearScreen()
                } else {
                    operadores = 1
                    basic.showLeds(`
                        . . # . .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . # . .
                        `)
                    basic.pause(200)
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    selecionar += 1
    if (selecionar == 2) {
        if (operadores == 1) {
            basic.showNumber(número_1 + número_2)
        } else {
            if (operadores == 2) {
                basic.showNumber(número_1 - número_2)
            } else {
                if (operadores == 3) {
                    basic.showNumber(número_1 * número_2)
                } else {
                    basic.showNumber(número_1 / número_2)
                }
            }
        }
    }
})
let selecionar = 0
let número_2 = 0
let número_1 = 0
let operadores = 0
operadores = 0
número_1 = 0
número_2 = 0
selecionar = 0
