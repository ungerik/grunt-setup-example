class nxr.scene.YRotation extends nxr.scene.Node

	constructor: (@angle) ->

	acceptVisitor: (visitor) ->
		visitor.visitYRotation?(@)
		super visitor
		return