let Btn = document.getElementById('btn');
let URLinput = document.getElementById('URL-input');
let select = document.querySelector('.opt');
let serverURL = 'http://localhost:4000';

Btn.addEventListener('click', () => {
	if (!URLinput.value) { alert('Put the link before to download!'); } 
	else {
		if (select.value == 'mp3') { redirectMp3(URLinput.value); } 
		else if (select.value == 'mp4') { redirectMp4(URLinput.value); }
	}
});

function redirectMp3(query) { window.location.href = `${serverURL}/downloadmp3?url=${query}`; }
function redirectMp4(query) { window.location.href = `${serverURL}/downloadmp4?url=${query}`; }