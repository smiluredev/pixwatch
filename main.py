def on_button_pressed_a():
    basic.show_leds("""
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        . # # # .
        """)
    record.start_recording(record.BlockingState.BLOCKING)
    if input.logo_is_pressed():
        record.play_audio(record.BlockingState.BLOCKING)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    media.start_media_service()
    media.send_code(media.keys(media._MediaKey.NEXT))
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_string(timeanddate.time(timeanddate.TimeFormat.HMMAMPM))