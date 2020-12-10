var payload = "okToLoad";
window.parent.postMessage(payload, '*');
window.addEventListener("message", (event) => {
    if (event.data==payload){
        var expectedHostDomain = ".ssat.org";
        if(event.origin.substring(event.origin.length - expectedHostDomain.length)!==expectedHostDomain){ 
            document.getElementsByTagName('body')[0].innerHTML = "Access Denied"; 
            window.location.replace("http://admission.org/academy/no-access");
        }
    }
    }, false);