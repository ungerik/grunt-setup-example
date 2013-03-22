###
// load: src/nxr/scene/Transformation.coffee
###

class nxr.scene.YRotation extends nxr.scene.Transformation

	constructor: (@angle) ->

	acceptVisitor: (visitor) ->
		visitor.visitYRotation? @
		super visitor
		return

	getMatrix4x4: ->
		#todo setup matrix
		return @matrix			