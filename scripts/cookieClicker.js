/*const darkColor = getComputedStyle(document.body).getPropertyValue('--bg-color-dark');
const lightColor = getComputedStyle(document.body).getPropertyValue('--bg-color-light');
const lightningMilliseconds = 300;
const lightningAudio = document.getElementById("thunder");

const background = document.getElementById("html");*/
const cookieButton = document.getElementById("cookieButton");

cookieButton.addEventListener("click", cookieEffect);

/**
 * Toggles cookie rain background
 */
function cookieEffect() 
{
	document.querySelector('#html').classList.toggle('cookieMode');
}

/**
 * Effect for testing purposes.
 * Causes the background to flash white and play a thunder audio effect.
 */
/*function lightningEffect()
{
	lightningAudio.play();
	background.style.backgroundColor = lightColor;
	setTimeout(function() {
		background.style.backgroundColor = darkColor;
	}, lightningMilliseconds);
}*/
	