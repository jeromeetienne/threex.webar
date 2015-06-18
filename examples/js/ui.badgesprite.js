var UI      = UI        || {}

//////////////////////////////////////////////////////////////////////////////////
//              Constructor                                                     //
//////////////////////////////////////////////////////////////////////////////////

/**
 * create a plane on which we map 2d text
 */
UI.BadgeSprite        = function(){

        var width = 512
        var height = 256

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


        // Create the object
        var material = new THREE.SpriteMaterial({
                map     : texture
        });
        THREE.Sprite.call( this, material )

        this.scale.set(2,1,1)


        this.draw(this.parameters);
}

UI.BadgeSprite.prototype = Object.create( THREE.Sprite.prototype );

UI.BadgeSprite.prototype.draw = function(options){
	options		= options	|| {};
	var params = {
		firstName       : options.firstName !== undefined ? options.firstName	: 'John',
		lastName        : options.lastName !== undefined ? options.lastName	: 'Doe',
		role            : options.role !== undefined ? options.role		: 'Visitor',
		avatar	        : options.avatar !== undefined ? options.avatar		: '/examples/tmp/avatars/avatar.jpg',
	}


	this.context.clearRect(0,0,this.canvas.width, this.canvas.height)


	var context	= this.context;
	var canvas	= this.canvas;

	context.save()

        // TODO what this stuff is doing
	context.fillStyle = '#fff';
	context.strokeStyle = '#1054B5';
	var cornerRadius = 20;
	context.lineJoin = 'round';
	context.lineWidth = cornerRadius;
	context.strokeRect(0+(cornerRadius/2), 0+(cornerRadius/2), canvas.width-cornerRadius, canvas.height-cornerRadius);
	context.fillRect(0+(cornerRadius/2), 0+(cornerRadius/2), canvas.width-cornerRadius, canvas.height-cornerRadius);

	// Draw avatar
	var avatarObject = new Image();
	avatarObject.width = 200;
	avatarObject.height = 200;
	avatarObject.style.width = '200px';
	avatarObject.style.height = '200px';
	avatarObject.onload = function() {
		context.drawImage(avatarObject, 10, 10, 200, 200);
	};
	avatarObject.src = params.avatar;
	avatarObject.crossOrigin = 'Anonymous';


	// draw outlining
	context.rect(10,10,200,200);
	context.lineWidth = 20;
	context.strokeStyle = '#1054B5';
	context.stroke();

	// Draw icon
	var iconObject = new Image();
	iconObject.width = 50;
	iconObject.height = 50;
	iconObject.style.width = 50+'px';
	iconObject.style.height = 50+'px';
	iconObject.onload = function() {
		context.drawImage(iconObject, 220, 170, 50, 50);
	};
	if(params.role === 'developer'){
		iconObject.src = '/examples/tmp/icons/developer.png';
	}else if(params.role === 'designer'){
		iconObject.src = '/examples/tmp/icons/designer.png';
	}else if(params.role === 'industry'){
		iconObject.src = '/examples/tmp/icons/industry.png';
	}else{
		iconObject.src = '/examples/tmp/icons/other.png';
	}
	iconObject.crossOrigin = 'Anonymous';



	// Write First Name
	writeText(params.firstName,250,50,35,'normal');
	// write Last Name
	writeText(params.lastName,250,110,45,'bold');
	// write role
	writeText(params.role,270,215,50,'normal');

	context.restore()

	// make the texture as .needsUpdate
	this.texture.needsUpdate	= true;

        return

	function writeText(text, posX, posY,size,weight){
		context.font = weight+' '+size+'px Arial';

		context.fillStyle	= '#000';
		context.fillText(text, posX+3, posY+3);

		context.fillStyle	= '#1054B5';
		context.fillText(text, posX, posY);
	}
}
