var UI = UI || {}

UI.VinePopup	= function(vineId){
	console.assert(typeof(vineId) === 'string')

	var domElement	= document.createElement('iframe')
	domElement.src	= "https://vine.co/v/"+vineId+"/embed/simple?audio=1"
	domElement.width= "360"
	domElement.height="360"
	domElement.frameborder="0"
	domElement.allowfullscreen=true



	this.domElement	= domElement

        domElement.style.position = 'absolute'
        domElement.style.top = '0px'
        domElement.style.right = '0px'
        // domElement.style.width = '40%'
}
