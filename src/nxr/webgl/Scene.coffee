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