led.plotBrightness(2, 2, 127)
let A = [0, 0]
let B = [0, 4]
let C = [4, 2]
led.plot(A[0], A[1])
led.plot(B[0], B[1])
led.plot(C[0], C[1])
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    basic.clearScreen()
    led.plotBrightness(2, 2, 127)
    if (B == [0, 0]) {
        B = [4, 0]
    } else if (B == [4, 0]) {
        B = [4, 4]
    } else if (B == [4, 4]) {
        B = [0, 4]
    } else if (B == [0, 4]) {
        B = [2, 4]
    }
    
    led.plot(B[0], B[1])
    if (A == [0, 0]) {
        A = [4, 0]
    } else if (A == [4, 0]) {
        A = [4, 4]
    } else if (A == [4, 4]) {
        A = [0, 4]
    } else if (A == [0, 4]) {
        A = [2, 4]
    }
    
    led.plot(A[0], A[1])
    if (C == [4, 2]) {
        C = [2, 4]
    } else if (C == [2, 4]) {
        C = [0, 2]
    } else if (C == [0, 2]) {
        C = [2, 0]
    } else if (C == [2, 0]) {
        C = [4, 2]
    }
    
    led.plot(C[0], C[1])
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    led.unplot(A[0], A[1])
    led.unplot(B[0], B[1])
    led.unplot(C[0], C[1])
    B = A
    led.plot(A[0], A[1])
    led.plot(B[0], B[0])
    led.plot(C[0], C[1])
})
