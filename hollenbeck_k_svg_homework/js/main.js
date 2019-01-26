(() => { 

let theJeans = document.querySelector("#jeans");
function logThisJeans() {
	console.log(this.id);
}
theJeans.addEventListener("click", jeans);	

})();