###
// load: src/nxr/scene/Node.coffee
###

class nxr.scene.BoundingBox extends nxr.scene.Node

	constructor: (@min, @max, children) ->
		super children

	acceptVisitor: (visitor) ->
		visitor.visitBoundingBox? @
		return