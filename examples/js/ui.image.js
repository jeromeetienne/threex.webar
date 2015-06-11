var UI = UI || {}

UI.ImagePopup	= function(url){

	url	= url	|| 'images/awesome.png'

	var domElement	= document.createElement('img')
	domElement.src	= url

	this.domElement	= domElement

        domElement.style.position = 'absolute'
        domElement.style.top = '0px'
        domElement.style.right = '0px'
        domElement.style.width = '20%'
}
