var THREEx = THREEx || {}

// shim
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL = window.URL || window.webkitURL;

/**
 * Grab camera
 */
THREEx.VideoGrabbing2 = function(){

        // create video element
        var videoElement        = document.createElement('video')
        videoElement.setAttribute('autoplay', true)
        document.body.appendChild(videoElement)

	// window.videoElement = video
	videoElement.style.zIndex = -1;
        videoElement.style.position = 'absolute'

	videoElement.style.top = '0px'
	videoElement.style.left = '0px'
	videoElement.style.width = '100%'
	videoElement.style.height = '100%'

        /**
         * Resize video element.
         * - Made complex to handle the aspect change
         * - it is frequently when the mobile is changing orientation
         * - after a search on the internet, it seems hard/impossible to prevent browser from changing orientation
         */
        function onResize(){
                // is the size of the video available ?
                if( videoElement.videoHeight === 0 )   return

                var videoAspect = videoElement.videoWidth / videoElement.videoHeight
                var windowAspect = window.innerWidth / window.innerHeight

                // var video = document.querySelector('video')
//                 if( videoAspect < windowAspect ){
//                         videoElement.style.left        = '0%'
//                         videoElement.style.width       = window.innerWidth + 'px'
//                         videoElement.style.marginLeft  = '0px'
//
//                         videoElement.style.top         = '50%'
//                         videoElement.style.height      =  (window.innerWidth/videoAspect) + 'px'
//                         videoElement.style.marginTop   = -(window.innerWidth/videoAspect) /2 + 'px'
// console.log('videoAspect <<<<< windowAspect')
//                 }else{
//                         videoElement.style.top         = '0%'
//                         videoElement.style.height      = window.innerHeight+'px'
//                         videoElement.style.marginTop   =  '0px'
//
//                         videoElement.style.left        = '50%'
//                         videoElement.style.width       =  (window.innerHeight*videoAspect) + 'px'
//                         videoElement.style.marginLeft  = -(window.innerHeight*videoAspect)/2 + 'px'
// console.log('videoAspect >>>> windowAspect')
//                 }
        }

        window.addEventListener('resize', function(event){
                onResize()
        })

        // just to be sure - resize on mobile is funky to say the least
        setInterval(function(){
                onResize()
        }, 500)

        // get the media sources
        MediaStreamTrack.getSources(function(sourceInfos) {
                // define getUserMedia() constraints
                var constraints = {
                        video: true,
                        audio: false,
                }
                // to mirror the video element when it isnt 'environment'
                // videoElement.style.transform   = 'scaleX(-1)'

                // it it finds the videoSource 'environment', modify constraints.video
                for (var i = 0; i != sourceInfos.length; ++i) {
                        var sourceInfo = sourceInfos[i];
                        if(sourceInfo.kind == "video" && sourceInfo.facing == "environment") {
                                constraints.video = {
                                        optional: [{sourceId: sourceInfo.id}]
                                }
                                // not to mirror the video element when it is 'environment'
                                // videoElement.style.transform   = ''
                        }
                }

                // try to get user media
                navigator.getUserMedia( constraints, function(stream){
                        videoElement.src = URL.createObjectURL(stream);
                }, function(error) {
                        console.error("Cant getUserMedia()! due to ", error);
                });
        });

	this.domElement = videoElement
}
