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
