var THREEx	= THREEx	|| {}

//////////////////////////////////////////////////////////////////////////////////
//		Constructor							//
//////////////////////////////////////////////////////////////////////////////////

/**
 * create a dynamic texture with a underlying canvas
 *
 * @param {Number} width  width of the canvas
 * @param {Number} height height of the canvas
 */
THREEx.DynamicTexture	= function(width, height){
	var canvas	= document.createElement( 'canvas' )
	canvas.width	= width
	canvas.height	= height
	this.canvas	= canvas

	//Store width and height
	this.textureWidth = width;
	this.textureHeight = height;


	var context	= canvas.getContext( '2d' )
	this.context	= context

	var texture	= new THREE.Texture(canvas)
	this.texture	= texture
}

//////////////////////////////////////////////////////////////////////////////////
//		methods								//
//////////////////////////////////////////////////////////////////////////////////

/**
 * clear the canvas
 *
 * @param  {String*} fillStyle 		the fillStyle to clear with, if not provided, fallback on .clearRect
 * @return {THREEx.DynamicTexture}      the object itself, for chained texture
 */
THREEx.DynamicTexture.prototype.clear = function(fillStyle){
	// depends on fillStyle
	if( fillStyle !== undefined ){
		this.context.fillStyle	= fillStyle
		this.context.fillRect(0,0,this.canvas.width, this.canvas.height)
	}else{
		this.context.clearRect(0,0,this.canvas.width, this.canvas.height)
	}
	// make the texture as .needsUpdate
	this.texture.needsUpdate	= true;
	// for chained API
	return this;
}
/**
 * draw badge
 */
THREEx.DynamicTexture.prototype.drawBadge = function(options){
	var context	= this.context;
	var canvas	= this.canvas;
	options		= options	|| {};
	var params = {
		firstName       : options.firstName !== undefined ? options.firstName	: 'John',
		lastName        : options.lastName !== undefined ? options.lastName	: 'Doe',
		role            : options.role !== undefined ? options.role		: 'Visitor',
		avatar	        : options.avatar !== undefined ? options.avatar		: '/examples/tmp/avatars/avatar.jpg',
	}

	// Reset canvas size to prevent text deformation on the geometry size changes
	canvas.width 	= this.textureWidth;
	canvas.height 	= this.textureHeight;

	context.save()

	// context.fillRect(0, 0, canvas.width, canvas.height );
	context.fillStyle	= '#fff';
	context.strokeStyle = '#1054B5';
	var cornerRadius = 20;
	context.lineJoin = 'round';
	context.lineWidth = cornerRadius;
	context.strokeRect(0+(cornerRadius/2), 0+(cornerRadius/2), canvas.width-cornerRadius, canvas.height-cornerRadius);
	context.fillRect(0+(cornerRadius/2), 0+(cornerRadius/2), canvas.width-cornerRadius, canvas.height-cornerRadius);


	// Draw avatar
	var imageObj = new Image();
	imageObj.width = 200;
	imageObj.height = 200;
	imageObj.style.width = 200+'px';
	imageObj.style.height = 200+'px';


	imageObj.onload = function() {
		context.drawImage(imageObj, 10, 10, 200, 200);
	};
	imageObj.src = params.avatar;
	imageObj.crossOrigin = 'Anonymous';


	// Draw icon
	var iconObj = new Image();
	iconObj.width = 50;
	iconObj.height = 50;
	iconObj.style.width = 50+'px';
	iconObj.style.height = 50+'px';


	iconObj.onload = function() {
		context.drawImage(iconObj, 220, 170, 50, 50);
	};
	if(params.role === 'developer'){
		iconObj.src = '/examples/tmp/icons/developer.png';
	}else if(params.role === 'designer'){
		iconObj.src = '/examples/tmp/icons/designer.png';
	}else if(params.role === 'industry'){
		iconObj.src = '/examples/tmp/icons/industry.png';
	}else{
		iconObj.src = '/examples/tmp/icons/other.png';
	}

	iconObj.crossOrigin = 'Anonymous';




	// draw outlining
	context.rect(10,10,200,200);
	context.lineWidth = 20;
	context.strokeStyle = '#1054B5';
	context.stroke();

	// Write First Name
	writeText(params.firstName,250,50,35,'normal');
	// write Last Name
	writeText(params.lastName,250,110,45,'bold');
	// write role
	writeText(params.role,270,215,50,'normal');


	function writeText(text, posX, posY,size,weight){
		context.font = weight+' '+size+'px Arial';

		context.fillStyle	= '#000';
		context.fillText(text, posX+3, posY+3);

		context.fillStyle	= '#1054B5';
		context.fillText(text, posX, posY);
	}

	return this;
}
