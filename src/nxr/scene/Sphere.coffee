buildSphere = (sphere) ->
	sphere.children.length = 0
	#todo

class nxr.scene.Sphere extends nxr.scene.Node

	constructor: (@position, @radius = 1)	->