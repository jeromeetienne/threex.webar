var THREEx = THREEx || {}

/**
 * Grab camera
 */
THREEx.VideoGrabbing = function(){

	var domElement	= document.createElement('video')
	domElement.setAttribute('autoplay', true)
	domElement.setAttribute('loop', true)
	this.domElement = domElement

	domElement.src = 'videos/markerVideo.mp4'

	domElement.style.zIndex = -1;
        domElement.style.position = 'absolute'

	// domElement.style.top = '50%'
	// domElement.style.left = '50%'
	// domElement.style.marginRight = '50%'
	// domElement.style.transform = 'translate(-50%, -50%)'

	domElement.style.top = '0px'
	domElement.style.left = '0px'
	domElement.style.width = '100%'
	domElement.style.height = '100%'

}


/**
 * Grab camera
 */
THREEx.VideoGrabbing = function(){

	var domElement	= document.createElement('video')
	domElement.setAttribute('autoplay', true)
	domElement.setAttribute('loop', true)
	this.domElement = domElement

	domElement.src = 'videos/markerVideo.mp4'

	domElement.style.zIndex = -1;
        domElement.style.position = 'absolute'

	domElement.style.top = '0px'
	domElement.style.left = '0px'
	// domElement.style.width = '100%'
	// domElement.style.height = '100%'
        /**
         * Resize video element.
         * - Made complex to handle the aspect change
         * - it is frequently when the mobile is changing orientation
         * - after a search on the internet, it seems hard/impossible to prevent browser from changing orientation
         */
        function onResize(){
                // is the size of the video available ?
                if( domElement.videoHeight === 0 )   return

                var videoAspect = domElement.videoWidth / domElement.videoHeight
                var windowAspect = window.innerWidth / window.innerHeight
// console.log('resize', videoAspect)
                var video = document.querySelector('video')
                if( videoAspect < windowAspect ){
                        domElement.style.left        = '0%'
                        domElement.style.width       = window.innerWidth + 'px'
                        domElement.style.marginLeft  = '0px'

                        domElement.style.top         = '50%'
                        domElement.style.height      =  (window.innerWidth/videoAspect) + 'px'
                        domElement.style.marginTop   = -(window.innerWidth/videoAspect) /2 + 'px'
// console.log('videoAspect <<<<< windowAspect')
                }else{
                        domElement.style.top         = '0%'
                        domElement.style.height      = window.innerHeight+'px'
                        domElement.style.marginTop   =  '0px'

                        domElement.style.left        = '50%'
                        domElement.style.width       =  (window.innerHeight*videoAspect) + 'px'
                        domElement.style.marginLeft  = -(window.innerHeight*videoAspect)/2 + 'px'
// console.log('videoAspect >>>> windowAspect')
                }
        }

        window.addEventListener('resize', function(event){
                onResize()
        })

        // just to be sure - resize on mobile is funky to say the least
        setInterval(function(){
                onResize()
        }, 500)

}
