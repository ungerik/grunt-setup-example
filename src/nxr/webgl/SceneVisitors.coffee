###
// load: temp/nxr/webgl/namespace.js, temp/nxr/scene/Visitor.js
###
# // load: temp/nxr/scene/Visitor.js

class nxr.webgl.SceneVisitor extends nxr.scene.Visitor

	constructor: (@gl) ->
		@setupVisitors = [new nxr.webgl.LoadIntoVideoMemoryVisitor gl]
		@preRenderVisitors = []
		@renderVisitors = [new nxr.webgl.RenderSceneVisitor gl]
		@postRenderVisitors = []
		@teardownVisitors = [new nxr.webgl.DeleteFromVideoMemoryVisitor gl]
