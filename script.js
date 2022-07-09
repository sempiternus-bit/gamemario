const mario = document.querySelector('.mario')
const tubo = document.querySelector('.tubo')
const nuvem = document.querySelector('.nuvem')

const jump = () => {

	mario.classList.add('jump')

	setTimeout(() => {

		mario.classList.remove('jump')		

	}, 500)

}

const loop = setInterval(() => {

	const tubopos = tubo.offsetLeft
	let nuvempos = nuvem.offsetLeft
	const mariopos = +window.getComputedStyle(mario).bottom.replace('px', '')

	if(tubopos <= 56 && tubopos > 0 && mariopos < 80){

		tubo.style.animation = 'none'
		tubo.style.left = `${tubopos}px`

		mario.style.animation = 'none'
		mario.style.bottom = `${mariopos}px`

		nuvem.style.left = `${nuvempos}px`

		mario.src = 'gameover.png'
		mario.style.width = '6%'

		clearInterval(loop)

	}

}, 10)


document.addEventListener('keydown', jump)
document.addEventListener('touchstart', jump)
