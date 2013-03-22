###
// load: src/nxr/scene/Transformation.coffee
###

class nxr.scene.XRotation extends nxr.scene.Transformation

	constructor: (@angle) ->

	acceptVisitor: (visitor) ->
		visitor.visitXRotation? @
		super visitor
		return

	getMatrix4x4: ->
		#todo setup matrix
		return @matrix	