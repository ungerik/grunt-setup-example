class nxr.scene.ZRotation extends nxr.scene.Node

	constructor: (@angle) ->

	acceptVisitor: (visitor) ->
		visitor.visitZRotation?(@)
		super visitor
		return