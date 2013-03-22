###
// load: src/nxr/scene/Transformation.coffee
###

class nxr.scene.ZRotation extends nxr.scene.Transformation

	constructor: (@angle) ->

	acceptVisitor: (visitor) ->
		visitor.visitZRotation? @
		super visitor
		return

	getMatrix4x4: ->
		#todo setup matrix
		return @matrix			