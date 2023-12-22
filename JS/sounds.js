export default function Sound(){

    const bgAudio = new Audio
    ("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")
    const buttonPressAudio = new Audio
    ("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchTimer = new Audio
    ("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    
    bgAudio.loop = true

    function presButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchTimer.play()
    }

    return {
        presButton,
        timeEnd,
        bgAudio
    }

}