###
// load: temp/nxr/scene/Transformation.js
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