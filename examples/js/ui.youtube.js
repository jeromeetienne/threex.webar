var UI = UI || {}

UI.YoutubePopup	= function(youtubeId){

	youtubeId	= youtubeId	|| 'BmqmgsAYJiI'

	var domElement	= document.createElement('iframe')
	domElement.src	= "https://www.youtube.com/embed/"+youtubeId
	domElement.width= "560"
	domElement.height="315"
	domElement.frameborder="0"
	domElement.allowfullscreen=true



	this.domElement	= domElement

        domElement.style.position = 'absolute'
        domElement.style.top = '0px'
        domElement.style.right = '0px'
        domElement.style.width = '40%'
}
