require('./lib/PLYLoader.js');

if (typeof AFRAME === 'undefined') {
	throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Point Cloud component for A-Frame.
 */
AFRAME.registerComponent('pointcloud', {
	schema: {
		src: {
			type: 'asset'
		},
		texture: {
			type: 'asset'
		},
		size: {
			type: 'number',
			default: 1
		},
		opacity: {
			type: 'number',
			default: 1
		},
		depthWrite: {
			type: 'boolean',
			default: true
		},
	},

	multiple: false,

	init: function () {

		if (!this.data.src) {
			console.warn("HOW I'M SUPOSSED TO LOAD A POINT CLOUD WITHOUT [%s] `src` DEFINED", this.name);
			return;
		}

		const loader = new THREE.PLYLoader();
		
		const _this = this;
		loader.load(this.data.src, function (geometry) {

			var material;
			if (_this.data.texture) {
				const sprite = new THREE.TextureLoader().load( _this.data.texture );
				material = new THREE.PointsMaterial({
					size: _this.data.size,
					vertexColors: THREE.VertexColors,
					map: sprite,
					transparent: true,
					opacity: _this.data.opacity,
					depthWrite: _this.data.depthWrite,
				});
			} else {
				material = new THREE.PointsMaterial({
					size: _this.data.size,
					vertexColors: THREE.VertexColors,
					transparent: true,
					opacity: _this.data.opacity,
				});
			}
			_this.pointcloud = new THREE.Points(geometry, material);
			_this.el.setObject3D('pointcloud', _this.pointcloud);
		});
	},

	remove: function () {},

});

AFRAME.registerPrimitive('a-pointcloud', {
  defaultComponents: {
    pointcloud: {}
  },
  mappings: {
	src: 'pointcloud.src',
	texture: 'pointcloud.texture',
    size: 'pointcloud.size',
	opacity: 'pointcloud.opacity',
	depthWrite: 'pointcloud.depthWrite'
  }
});