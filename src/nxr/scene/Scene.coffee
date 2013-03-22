###
// load: temp/nxr/scene/Node.js
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
