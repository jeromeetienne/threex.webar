var THREEx = THREEx || {}

// shim
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL = window.URL || window.webkitURL;

/**
 * Grab camera
 */
THREEx.VideoGrabbing = function(){
	//////////////////////////////////////////////////////////////////////////////////
	//		Comments
	//////////////////////////////////////////////////////////////////////////////////

	var domElement = document.createElement('video')
	document.body.appendChild(domElement)
	domElement.style.position = 'absolute'
	domElement.style.top = '0px'
	domElement.style.left = '0px'
	domElement.style.width = '100%'
	domElement.style.height = '100%'
	domElement.style.zIndex = -1;

	var constraints = {video:true}
	navigator.getUserMedia(constraints, function (stream){
		domElement.src = URL.createObjectURL(stream);
		domElement.play();
	}, function(error){
		console.log("An error occured! ");
		console.dir(error)
	});


	this.domElement = domElement
}
