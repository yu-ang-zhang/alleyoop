document.addEventListener("readystatechange", function(event) {
	if(event.target.readyState == "interactive") {


		document.querySelector("body").classList.add("js");

		document.querySelector("#podcast .player-controls a:first-child").addEventListener("click", function(event) {
			this.parentElement.classList.toggle("playing");
			document.querySelector("#podcast audio").play();
			event.preventDefault();
		});

		document.querySelector("#podcast .player-controls a:last-child").addEventListener("click", function(event) {
			this.parentElement.classList.toggle("playing");
			document.querySelector("#podcast audio").pause();
			event.preventDefault();
		});

		AOS.init();
	}
});