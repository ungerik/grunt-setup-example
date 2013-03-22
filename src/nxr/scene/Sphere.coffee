###
// load: temp/nxr/scene/Node.js
###

buildSphere = (sphere) ->
	sphere.children.length = 0
	#todo
	return null

class nxr.scene.Sphere extends nxr.scene.Node

	constructor: (@position, @radius = 1) ->

	acceptVisitor: (visitor) ->
		if visitor.visitSphere?
			visitor.visitSphere @
		else
			super visitor
		return
