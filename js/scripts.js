const form = document.querySelector('form')
const inputs = document.querySelectorAll('.input')

const patterns = {
	notEmpty: /.+/,
	phone: /^\d{7,15}$/,
	email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
}

form.addEventListener('submit', validateForm)
form.addEventListener('focusin', removeColor)

function validateForm(e) {
	let isNotValid = false
	
	for (i = 0; i < inputs.length; i++) {
		let input = e.target[i]
		let value = input.value.trim()
		let pattern = patterns[input.dataset.validation]
		if (!pattern.test(value)) {
			input.value = input.value.trim()
			isNotValid = true
			input.classList.add('err')
		}
	}

	if (isNotValid) e.preventDefault()
}

function removeColor(e) {
	for (i = 0; i < inputs.length; i++) {
		if (e.target.classList.contains('err')) e.target.classList.remove('err')
	}
}