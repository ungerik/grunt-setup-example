###
// load: temp/nxr/scene/Node.js
###

class nxr.scene.Model extends nxr.scene.Node

	constructor: (@id, children) ->
		super children

	acceptVisitor: (visitor) ->
		visitor.visitModel? @
		return

