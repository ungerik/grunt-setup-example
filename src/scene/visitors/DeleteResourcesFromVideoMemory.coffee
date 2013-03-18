
nxr = nxr or {}
nxr.visitors = nxr.visitors or {}

class nxr.visitors.DeleteResourcesFromVideoMemory

	constructor: (@gl) ->

	isInitializingVisitor: ->
		return false

	isDeinitializingVisitor: ->
		return true

	visitVertices: (vertices) ->

	visitIndices: (indices) ->

	visitTexture: (texture) ->

	visitPixelShader: (pixelShader) ->

	visitVertexShader: (vertexShader) ->

	visitShaderEffect: (shaderEffect) ->

	visitSkyBox: (skyBox) ->

	visitLodTerrain: (lodTerrain) ->

	visitFont: (font) ->

	visitText: (text) ->
