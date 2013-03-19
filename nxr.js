var nxr;

nxr = {};

nxr.scene = {};

nxr.scene.webgl = {};

nxr.scene.webgl.DeleteResourcesFromVideoMemory = (function() {
  function DeleteResourcesFromVideoMemory(gl) {
    this.gl = gl;
  }

  DeleteResourcesFromVideoMemory.prototype.isInitializingVisitor = function() {
    return false;
  };

  DeleteResourcesFromVideoMemory.prototype.isDeinitializingVisitor = function() {
    return true;
  };

  DeleteResourcesFromVideoMemory.prototype.visitVertices = function(vertices) {};

  DeleteResourcesFromVideoMemory.prototype.visitIndices = function(indices) {};

  DeleteResourcesFromVideoMemory.prototype.visitTexture = function(texture) {};

  DeleteResourcesFromVideoMemory.prototype.visitPixelShader = function(pixelShader) {};

  DeleteResourcesFromVideoMemory.prototype.visitVertexShader = function(vertexShader) {};

  DeleteResourcesFromVideoMemory.prototype.visitShaderEffect = function(shaderEffect) {};

  DeleteResourcesFromVideoMemory.prototype.visitSkyBox = function(skyBox) {};

  DeleteResourcesFromVideoMemory.prototype.visitLodTerrain = function(lodTerrain) {};

  DeleteResourcesFromVideoMemory.prototype.visitFont = function(font) {};

  DeleteResourcesFromVideoMemory.prototype.visitText = function(text) {};

  return DeleteResourcesFromVideoMemory;

})();





nxr.scene.webgl.setupScene = function(scene) {};

nxr.scene.webgl.preRender = function(scene) {};

nxr.scene.webgl.render = function(scene) {};

nxr.scene.webgl.postRender = function(scene) {};

nxr.scene.webgl.teardownScene = function(scene) {};

nxr.scene.graph = {};

nxr.scene.graph.setupScene = function(scene) {};

nxr.scene.graph.preRender = function(scene) {};

nxr.scene.graph.render = function(scene) {};

nxr.scene.graph.postRender = function(scene) {};

nxr.scene.graph.teardownScene = function(scene) {};
