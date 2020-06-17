// For the automatic text in the Header 
/** code by webdevtrick ( https://webdevtrick.com ) **/
var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];
  
	if (this.isDeleting) {
	  this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	  this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
  
	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
	var that = this;
	var delta = 300 - Math.random() * 100;
  
	if (this.isDeleting) { delta /= 2; }
  
	if (!this.isDeleting && this.txt === fullTxt) {
	  delta = this.period;
	  this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	  this.isDeleting = false;
	  this.loopNum++;
	  delta = 500;
	}
  
	setTimeout(function() {
	  that.tick();
	}, delta);
  };
  
  window.onload = function() {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i=0; i<elements.length; i++) {
	  var toRotate = elements[i].getAttribute('data-rotate');
	  var period = elements[i].getAttribute('data-period');
	  if (toRotate) {
		new TxtRotate(elements[i], JSON.parse(toRotate), period);
	  }
	}
  }

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