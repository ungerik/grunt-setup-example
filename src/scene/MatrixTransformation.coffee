class nxr.scene.MatrixTransformation extends nxr.scene.Node

	constructor: (@matrix) ->

	acceptVisitor: (visitor) ->
		visitor.visitMatrixTransformation?(@)
		super visitor
		return