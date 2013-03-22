###
// load: temp/nxr/scene/Node.js
###

class nxr.scene.BoundingSphere extends nxr.scene.Node

	constructor: (@center, @radius, children) ->
		super children

	acceptVisitor: (visitor) ->
		visitor.visitBoundingSphere? @
		return