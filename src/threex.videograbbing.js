var THREEx = THREEx || {}

/**
 * Grab camera
 */
THREEx.VideoGrabbing = function(){

	var domElement	= document.createElement('video')
	domElement.setAttribute('autoplay', true)
	domElement.setAttribute('loop', true)
	domElement.setAttribute('muted', true)
	this.domElement = domElement

	domElement.src = 'videos/markerVideo.mp4'

	domElement.style.zIndex = -1;
        domElement.style.position = 'absolute'

	domElement.style.top = '50%'
	domElement.style.left = '50%'
	domElement.style.marginRight = '50%'
	domElement.style.transform = 'translate(-50%, -50%)'

	// domElement.style.top = '0px'
	// domElement.style.left = '0px'
	// domElement.style.width = '100%'
	// domElement.style.height = '100%'
}
