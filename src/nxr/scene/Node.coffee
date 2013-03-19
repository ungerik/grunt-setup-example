class nxr.scene.Node

	noChildren: []

	constructor: (children) ->
		@children = children or @noChildren

	acceptVisitor: (visitor) ->
		child.acceptVisitor visitor for child in @children
		return

	addChild: (child) ->
		if @children.length == 0
			@children = [child] # don't want to change @noChildren
		else
			@children.push child
		return

	removeChild: (index) ->
		index = indexOrChild
		a = @children[..index]
		b = @children[index..]
		@children = a.concat b
		return