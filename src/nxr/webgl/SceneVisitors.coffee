###
// load: src/nxr/webgl/namespace.coffee
// load: src/nxr/scene/Visitors.coffee
###

class nxr.webgl.SceneVisitors extends nxr.scene.Visitors

	constructor: (@gl) ->
		@setupVisitors = [new nxr.webgl.LoadIntoVideoMemoryVisitor gl]
		@preRenderVisitors = []
		@renderVisitors = [new nxr.webgl.RenderSceneVisitor gl]
		@postRenderVisitors = []
		@teardownVisitors = [new nxr.webgl.DeleteFromVideoMemoryVisitor gl]
