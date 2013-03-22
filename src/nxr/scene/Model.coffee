###
// load: src/nxr/scene/Node.coffee
###

class nxr.scene.Model extends nxr.scene.Node

	constructor: (@id, children) ->
		super children

	acceptVisitor: (visitor) ->
		visitor.visitModel? @
		return

