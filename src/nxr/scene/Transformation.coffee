class nxr.scene.MatrixTransformation extends nxr.scene.Transformation

	constructor: (@matrix) ->

	acceptVisitor: (visitor) ->
		visitor.visitMatrixTransformation?(@)
		super visitor
		return

	getMatrix4x4: ->
		return @matrix