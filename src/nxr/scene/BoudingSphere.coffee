###
// load: src/nxr/scene/Node.coffee
###

class nxr.scene.BoundingSphere extends nxr.scene.Node

	constructor: (@center, @radius, children) ->
		super children

	acceptVisitor: (visitor) ->
		visitor.visitBoundingSphere? @
		return