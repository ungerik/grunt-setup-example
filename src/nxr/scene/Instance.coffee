###
// load: src/nxr/scene/namespace.coffee
###

class nxr.scene.Instance

	constructor: (@modelId) ->

	acceptVisitor: (visitor) ->
		visitor.visitInstance? @
		return

