(() => { 

let badgeButtons = document.querySelectorAll("button");

function logBadge() {
	console.log(this.previousElementSibling.id);
	this.previousElementSibling.classList.add("selected");
	// Add toggle class to the svg to make it look like it's been selected
}

badgeButtons.forEach(button => button.addEventListener("click", logBadge));



})();