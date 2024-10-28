enum RadioMessage {
    message1 = 49434,
    Audio = 27511
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        . # # # .
        `)
    record.startRecording(record.BlockingState.Blocking)
    if (input.logoIsPressed()) {
        record.playAudio(record.BlockingState.Blocking)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString(timeanddate.time(timeanddate.TimeFormat.HMMAMPM))
    basic.showString(timeanddate.date(timeanddate.DateFormat.MD))
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . # #
        . . . . #
        `)
    record.startRecording(record.BlockingState.Blocking)
    if (input.logoIsPressed()) {
        radio.sendMessage(RadioMessage.Audio)
    }
})
radio.onReceivedMessage(RadioMessage.Audio, function () {
    record.playAudio(record.BlockingState.Blocking)
})
timeanddate.setTime(8, 1, 0, timeanddate.MornNight.AM)
timeanddate.setDate(10, 28, 2024)
