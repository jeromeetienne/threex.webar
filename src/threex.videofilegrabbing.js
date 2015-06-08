var THREEx = THREEx || {}

/**
 * Grab camera
 */
THREEx.VideoFileGrabbing = function(){

	var domElement	= document.createElement('video')
	domElement.setAttribute('autoplay', true)
	domElement.setAttribute('loop', true)

	domElement.src = 'videos/markerVideo.mp4'

	domElement.style.zIndex = -1;
        domElement.style.position = 'absolute'

	domElement.style.top = '50%'
	domElement.style.left = '50%'
	domElement.style.marginRight = '50%'
	// domElement.style.marginBottom = '50%'
	domElement.style.transform = 'translate(-50%, -50%)'

	this.domElement = domElement
}
