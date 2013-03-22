###
// load: temp/nxr/scene/namespace.js
###

class nxr.scene.Instance

	constructor: (@modelId) ->

	acceptVisitor: (visitor) ->
		visitor.visitInstance? @
		return

