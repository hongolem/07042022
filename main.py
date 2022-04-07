led.plot_brightness(2, 2, 127)
A = [0, 0]
B = [0, 4]
C = [4, 2]

led.plot(A[0], A[1])
led.plot(B[0], B[1])
led.plot(C[0], C[1])

def on_button_pressed_a():
    global A, B, C
    basic.clear_screen()
    led.plot_brightness(2, 2, 127)
    if B == [0, 0]:
        B = [4, 0]
    elif B == [4, 0]:
        B = [4, 4]
    elif B == [4, 4]:
        B = [0, 4]
    elif B == [0, 4]:
        B = [2, 4]
    led.plot(B[0], B[1])
    if A == [0, 0]:
        A = [4, 0]
    elif A == [4, 0]:
        A = [4, 4]
    elif A == [4, 4]:
        A = [0, 4]
    elif A == [0, 4]:
        A = [2, 4]
    led.plot(A[0], A[1])
    if C == [4, 2]:
        C = [2, 4]
    elif C == [2, 4]:
        C = [0, 2]
    elif C == [0, 2]:
        C = [2, 0]
    elif C == [2, 0]:
        C = [4, 2]
    led.plot(C[0], C[1])
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global A, B, C
    led.unplot(A[0], A[1])
    led.unplot(B[0], B[1])
    led.unplot(C[0], C[1])
    B = A

    led.plot(A[0], A[1])
    led.plot(B[0], B[0])
    led.plot(C[0], C[1])
input.on_button_pressed(Button.B, on_button_pressed_b)