var THREEx = THREEx || {}

/**
 * Grab camera
 */
THREEx.ImageGrabbing = function(){

	var domElement	= document.createElement('img')
	// TODO make this url tunable
	domElement.src	= 'images/IMG_20150606_200552-small.jpg'

	// TODO move that outside of this class
        document.body.appendChild(domElement)

	domElement.style.zIndex = -1;
        domElement.style.position = 'absolute'

	domElement.style.top = '50%'
	domElement.style.left = '50%'
	domElement.style.marginRight = '50%'
	// domElement.style.marginBottom = '50%'
	domElement.style.transform = 'translate(-50%, -50%)'

	this.domElement = domElement
}
