###
// load: temp/nxr/scene/namespace.js
###

class nxr.scene.Transformation
	constructor: (@matrix) ->

	acceptVisitor: (visitor) ->
		visitor.visitTransformation? @
		return

	getMatrix4x4: ->
		return @matrix