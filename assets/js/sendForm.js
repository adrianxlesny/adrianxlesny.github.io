emailjs.init({publicKey: "CyY1PObkDkudcmPwe"});

const form = document.getElementById('contact-form');
const status = document.getElementById('status');
const button = form.querySelector('input[type="submit"]');

window.onload = function() {
	form.addEventListener('submit', function(event) {
		event.preventDefault();
		button.disabled = true;
		status.classList.remove('hide', 'success', 'error');
		status.innerText = "Odosielam...";

		emailjs.sendForm('service_gmail', 'template_portfolio', this).then(() => {
			showStatus("Správa bola odoslaná ✅", "success");
			form.reset();
		}, (error) => {
			showStatus("Chyba pri odosielaní ❌", "error");
			console.log('Failed...', error);
		});
	});
}

function showStatus(message, type) {
	status.className = `status ${type}`;
	status.innerText = message;

	setTimeout(() => {
		status.classList.add('hide');
		button.disabled = false;
		
		setTimeout(() => {
			status.innerText = "";
		}, 1000);
	}, 3000);
}