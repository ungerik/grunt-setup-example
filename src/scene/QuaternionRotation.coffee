class nxr.scene.QuaternionRotation extends nxr.scene.Node

	constructor: (@quaternion) ->

	acceptVisitor: (visitor) ->
		visitor.visitQuaternionRotation?(@)
		super visitor
		return