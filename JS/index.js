//EcmaScript - 2015 ES6 Modules
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import { 
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    buttonStop,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"

const sound = Sound()

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

//Event-Driven
//programação imperativa
//callback

buttonPlay.addEventListener('click', () => {
    controls.Play()
    
    timer.countDown()
    sound.presButton()
});

buttonPause.addEventListener('click', () => {
    controls.Pause()
    timer.hold()
    sound.presButton()
});

buttonStop.addEventListener('click', () => {
    controls.reset()
    timer.reset()
    sound.presButton()
});

buttonSoundOn.addEventListener('click', () => {
    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide');
    sound.bgAudio.pause()
});

buttonSoundOff.addEventListener('click', () => {
    buttonSoundOn.classList.remove('hide');
    buttonSoundOff.classList.add('hide');
    sound.bgAudio.play()
});

buttonSet.addEventListener('click', () => {
    let newMinutes = controls.getMinutes()

    
    if (!newMinutes) {
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
});