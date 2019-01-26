(() => { 

let badgeButton = document.querySelector("button");
function logBadge() {
	console.log(this.previousElementSibling.id);
}
badgeButton.addEventListener("click", logBadge);

let badgeButton = document.querySelector("button");
function logBadge() {
	console.log(this.previousElementSibling.id);
}
badgeButton.addEventListener("click", logBadge);


})();