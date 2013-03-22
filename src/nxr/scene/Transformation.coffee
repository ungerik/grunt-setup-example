###
// load: src/nxr/scene/namespace.coffee
###

class nxr.scene.Transformation
	constructor: (@matrix) ->

	acceptVisitor: (visitor) ->
		visitor.visitTransformation? @
		return

	getMatrix4x4: ->
		return @matrix