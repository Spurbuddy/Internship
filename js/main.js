/* Open when someone clicks on the span element */
function showCompanies() {

  document.getElementById("companies").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeCompanies() {
	console.log(1)
	document.getElementById("companies").setAttribute('class','invisible')
  document.getElementById("companies").style.width = "0%";
  document.getElementById("companies").removeAttribute('class')
  document.getElementById("companies").setAttribute('class','c_overlay')
}