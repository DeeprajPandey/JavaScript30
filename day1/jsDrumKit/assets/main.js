function playSound(e) {
	//const audio = document.querySelector('audio[data-key=65]') //single quotes would make data-key a variable that lives within the function
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"`)
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

	if(!audio)
		return

	audio.currentTime = 0
	audio.play()
	key.classList.add('playing')
}

function removeTransition(e) {
	if (e.propertyName !== 'transform')
		return //return if it's not a transform
	this.classList.remove('playing')
}

const keys = Array.from(document.querySelectorAll('.key'))         
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)