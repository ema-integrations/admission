// Add the current selector to the on-demand menu item if in these directories

$(document).ready(function() {
    if (window.location.href.indexOf("process") > -1) {
		setTimeout(function(){
			let myFirstLink = document.getElementById('nav-process');
            myFirstLink.className += (" nav-current");
		  }, 100);
	} 
    if (window.location.href.indexOf("advice") > -1) {
		setTimeout(function(){
			let mySecondLink = document.getElementById('nav-advice');
			mySecondLink.className += (" nav-current");
		  }, 100);
	} 	
    if (window.location.href.indexOf("admissionchat") > -1) {
		setTimeout(function(){
			let mySecondLink = document.getElementById('nav-advice');
			mySecondLink.className += (" nav-current");
		  }, 100);
	} 	
    if (window.location.href.indexOf("tips") > -1) {
		setTimeout(function(){
			let mySecondLink = document.getElementById('nav-advice');
			mySecondLink.className += (" nav-current");
		  }, 100);
	} 	
	if (window.location.href.indexOf("events") > -1) {
		setTimeout(function(){
			let myThirdLink = document.getElementById('nav-events');
            myThirdLink.className += (" w--current");
		  }, 100);
    }
    if (window.location.href.indexOf("services") > -1) {
		setTimeout(function(){
			let myFourthLink = document.getElementById('nav-services');
			myFourthLink.className += (" nav-current");
		  }, 100);
    }
    if (window.location.href.indexOf("help") > -1) {
		setTimeout(function(){
			let myFifthLink = document.getElementById('nav-help');
            myFifthLink.className += (" w--current");
		  }, 100);
    }
    if (window.location.href.indexOf("hc") > -1) {
		setTimeout(function(){
			let myFifthLink = document.getElementById('nav-help');
            myFifthLink.className += (" w--current");
		  }, 100);
    }

    else {
		// nothing to do here, intentionally left blank
	}
  });

  