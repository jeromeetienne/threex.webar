var THREEx      = THREEx        || {}

//////////////////////////////////////////////////////////////////////////////////
//              Constructor                                                     //
//////////////////////////////////////////////////////////////////////////////////

/**
 * create a plane on which we map 2d text
 */
THREEx.BadgeSprite        = function(options){

        options		= options	|| {}

        // Create the object
        var material = new THREE.SpriteMaterial({
                transparent: false
        });
        THREE.Sprite.call( this, material )
        this.scale.set(2,1,1)

        // create the dynamicTexture
        var dynamicTexture      = new THREEx.DynamicTexture(512,256)

        

        this.dynamicTexture     = dynamicTexture;
        // - TODO take it from the default paramters of the functions
        //   - no need to duplicate here
        var url = location.protocol + '//' + location.host + '/'
        this.parameters = {
                firstName       : options.firstName !== undefined ? options.firstName	: 'John',
                lastName        : options.lastName !== undefined ? options.lastName	: 'Doe',
                role            : options.role !== undefined ? options.role		: 'Visitor',
                avatar	        : options.avatar !== undefined ? options.avatar		: "/examples/tmp/avatars/avatar.jpg",
        }

        // set the texture material
        material.map    = this.dynamicTexture.texture;

        this.update();
}

THREEx.BadgeSprite.prototype = Object.create( THREE.Sprite.prototype );

THREEx.BadgeSprite.prototype.update = function(options){
        var dynamicTexture              = this.dynamicTexture;
        var parameters                  = options || this.parameters;

        var context                     = dynamicTexture.context;

        // @TODO remove the dynamicTexture and put every thing here
        // update the text
        dynamicTexture.clear()

        // actually draw the text
        dynamicTexture.drawBadge(parameters)
}
