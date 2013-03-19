class nxr.scene.XRotation extends nxr.scene.Node

	constructor: (@angle) ->

	acceptVisitor: (visitor) ->
		visitor.visitXRotation?(@)
		super visitor
		return