class nxr.scene.Node

	noChildren: []

	constructor: (children) ->
		@children = children or @noChildren

	acceptVisitor: (visitor) ->
		child.acceptVisitor visitor for child in @children
		return
