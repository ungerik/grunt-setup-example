###
// load: temp/nxr/scene/Node.js
###

class nxr.scene.BoundingBox extends nxr.scene.Node

	constructor: (@min, @max, children) ->
		super children

	acceptVisitor: (visitor) ->
		visitor.visitBoundingBox? @
		return