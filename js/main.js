/* Open when someone clicks on the span element */
function openNav(arg) {
  document.getElementById("company").style.width = "100%";
  fillCompanies(arg);
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("company").style.width = "0%";
}

function fillCompanies(arg){

	const title = document.querySelector('#company_name'); //Title of company placeholder
	const description = document.querySelector('#company_description'); //Title of company description
	const link = document.querySelector('#company_link'); //company link

	if(arg == 1){
		title.innerHTML = " STERMR"
		description.innerHTML = "Gradient Hunt is a free and open platform for color inspiration with thousands of trendy hand-made color gradients"
		link.setAttribute('href','www.facebook.com');
	}
	else if(arg == 2){
		title.innerHTML = " HUSLR"
		description.innerHTML = "Gradient Hunt is a free and open platform for color inspiration with thousands of trendy hand-made color gradients"
		link.setAttribute('href','www.facebook.com');
	}
	else if(arg == 3){
		title.innerHTML = " EATREE"
		description.innerHTML = "Gradient Hunt is a free and open platform for color inspiration with thousands of trendy hand-made color gradients"
		link.setAttribute('href','www.facebook.com');
	}
	else if(arg == 4){
		title.innerHTML = " JET"
		description.innerHTML = "Gradient Hunt is a free and open platform for color inspiration with thousands of trendy hand-made color gradients"
		link.setAttribute('href','www.facebook.com');
	}
	else if(arg == 2){
		title.innerHTML = " UPKIT"
		description.innerHTML = "Gradient Hunt is a free and open platform for color inspiration with thousands of trendy hand-made color gradients"
		link.setAttribute('href','www.facebook.com');
	}
	else if(arg == 2){
		title.innerHTML = " VARSE"
		description.innerHTML = "Gradient Hunt is a free and open platform for color inspiration with thousands of trendy hand-made color gradients"
		link.setAttribute('href','www.facebook.com');
	}
}