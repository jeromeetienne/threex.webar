var THREEx = THREEx || {}

// shim
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL = window.URL || window.webkitURL;

/**
 * Grab camera
 */
THREEx.WebcamGrabbing2 = function(){

	//////////////////////////////////////////////////////////////////////////////////
	//		Comments
	//////////////////////////////////////////////////////////////////////////////////
        // create video element
        var domElement        = document.createElement('video')
        domElement.setAttribute('autoplay', true)

	// window.domElement = video
	domElement.style.zIndex = -1;
        domElement.style.position = 'absolute'

	domElement.style.top = '0px'
	domElement.style.left = '0px'
	domElement.style.width = '100%'
	domElement.style.height = '100%'

        // try to get user media
        navigator.getUserMedia({
                video: true,
                audio: false,
        }, function(stream){
                domElement.src = URL.createObjectURL(stream);
        }, function(error) {
                console.error("Cant getUserMedia()! due to ", error);
        });
	this.domElement = domElement
}
