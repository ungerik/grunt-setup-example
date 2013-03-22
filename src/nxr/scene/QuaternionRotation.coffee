###
// load: temp/nxr/scene/Transformation.js
###

class nxr.scene.QuaternionRotation extends nxr.scene.Transformation

	constructor: (@quaternion) ->

	acceptVisitor: (visitor) ->
		visitor.visitQuaternionRotation? @
		super visitor
		return

	getMatrix4x4: ->
		#todo setup matrix
		return @matrix			