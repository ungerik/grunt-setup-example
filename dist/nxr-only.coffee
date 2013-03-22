"use strict"

nxr = {}

###
// load: src/nxr/namespace.coffee
###

nxr.scene = {}
###
// load: src/nxr/scene/namespace.coffee
###

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
		a = @children[..index]
		b = @children[index..]
		@children = a.concat b
		return
###
// load: src/nxr/namespace.coffee
###

nxr.webgl = {}

###
// load: src/nxr/scene/namespace.coffee
###

nxr.scene.concatVisitors = (a, b) ->
	result = new nxr.scene.Visitors
	result.setupVisitors = a.setupVisitors.concat b.setupVisitors 
	result.preRenderVisitors = a.preRenderVisitors.concat b.preRenderVisitors 
	result.renderVisitors = a.renderVisitors.concat b.renderVisitors 
	result.postRenderVisitors = a.postRenderVisitors.concat b.postRenderVisitors 
	result.teardownVisitors = a.teardownVisitors.concat b.teardownVisitors
	return result


class nxr.scene.Visitors

	constructor: ->
		@setupVisitors = []
		@preRenderVisitors = []
		@renderVisitors = []
		@postRenderVisitors = []
		@teardownVisitors = []

	setup: (scene) ->
		visitor.visit scene for visitor in @setupVisitors
		return

	preRender: (scene) ->
		visitor.visit scene for visitor in @preRenderVisitors
		return

	render: (scene) ->
		visitor.visit scene for visitor in @renderVisitors
		return

	postRender: (scene) ->
		visitor.visit scene for visitor in @postRenderVisitors
		return

	teardown: (scene) ->
		visitor.visit scene for visitor in @teardownVisitors
		return

###
// load: src/nxr/scene/Node.coffee
###

class nxr.scene.Scene extends nxr.scene.Node

		constructor: (@visitors) ->
			super null

		setup: ->
			@visitors.setup @

		render: ->
			@visitors.preRender @
			@visitors.render @
			@visitors.postRender @

		teardown: ->
			@visitors.teardown @

###
// load: src/nxr/scene/namespace.coffee
###

class nxr.scene.Transformation
	constructor: (@matrix) ->

	acceptVisitor: (visitor) ->
		visitor.visitTransformation? @
		return

	getMatrix4x4: ->
		return @matrix
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

###
// load: src/nxr/webgl/namespace.coffee
// load: src/nxr/scene/Scene.coffee
###

class nxr.webgl.Scene extends nxr.scene.Scene

		constructor: (canvas) ->
			try
				@gl = canvas.getContext("webgl")
			catch e
				message = "Error creating WebGL context: " + e.toString
				alert message
				throw new Error message

			if not @gl?
				throw new Error "Can't get WebGL context"
			
			super new nxr.webgl.SceneVisitors @gl
###
// load: src/nxr/webgl/namespace.coffee
###

class nxr.webgl.RenderSceneVisitor

	constructor: (@gl) ->
###
// load: src/nxr/webgl/namespace.coffee
###

class nxr.webgl.LoadIntoVideoMemoryVisitor

		constructor: (@gl) ->


###
// load: src/nxr/webgl/namespace.coffee
###

class nxr.webgl.DeleteFromVideoMemoryVisitor

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

###
// load: src/nxr/scene/namespace.coffee
###

nxr.scene.graph = {}
###
// load: src/nxr/scene/Transformation.coffee
###

class nxr.scene.ZRotation extends nxr.scene.Transformation

	constructor: (@angle) ->

	acceptVisitor: (visitor) ->
		visitor.visitZRotation? @
		super visitor
		return

	getMatrix4x4: ->
		#todo setup matrix
		return @matrix			
###
// load: src/nxr/scene/Transformation.coffee
###

class nxr.scene.YRotation extends nxr.scene.Transformation

	constructor: (@angle) ->

	acceptVisitor: (visitor) ->
		visitor.visitYRotation? @
		super visitor
		return

	getMatrix4x4: ->
		#todo setup matrix
		return @matrix			
###
// load: src/nxr/scene/Transformation.coffee
###

class nxr.scene.XRotation extends nxr.scene.Transformation

	constructor: (@angle) ->

	acceptVisitor: (visitor) ->
		visitor.visitXRotation? @
		super visitor
		return

	getMatrix4x4: ->
		#todo setup matrix
		return @matrix	
###
// load: src/nxr/scene/Node.coffee
###

nxr.scene.buildSphere = (sphere) ->
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

###
// load: src/nxr/scene/Transformation.coffee
###

class nxr.scene.QuaternionRotation extends nxr.scene.Transformation

	constructor: (@quaternion) ->

	acceptVisitor: (visitor) ->
		visitor.visitQuaternionRotation? @
		super visitor
		return

	getMatrix4x4: ->
		#todo setup matrix
		return @matrix			
###
// load: src/nxr/scene/Node.coffee
###

class nxr.scene.Model extends nxr.scene.Node

	constructor: (@id, children) ->
		super children

	acceptVisitor: (visitor) ->
		visitor.visitModel? @
		return


###
// load: src/nxr/scene/namespace.coffee
###

class nxr.scene.Instance

	constructor: (@modelId) ->

	acceptVisitor: (visitor) ->
		visitor.visitInstance? @
		return


###
// load: src/nxr/scene/namespace.coffee
###

class nxr.scene.BuildWithPrimitivesVisitor

	visitSphere: (sphere) ->
		nxr.scene.buildSphere sphere
###
// load: src/nxr/scene/Node.coffee
###

class nxr.scene.BoundingBox extends nxr.scene.Node

	constructor: (@min, @max, children) ->
		super children

	acceptVisitor: (visitor) ->
		visitor.visitBoundingBox? @
		return
###
// load: src/nxr/scene/Node.coffee
###

class nxr.scene.BoundingSphere extends nxr.scene.Node

	constructor: (@center, @radius, children) ->
		super children

	acceptVisitor: (visitor) ->
		visitor.visitBoundingSphere? @
		return