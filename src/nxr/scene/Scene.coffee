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
