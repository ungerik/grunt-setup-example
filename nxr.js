(function() {
  var nxr;

  nxr = nxr || {};

  nxr.visitors = nxr.visitors || {};

  nxr.visitors.DeleteResourcesFromVideoMemory = (function() {
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

}).call(this);

(function() {


}).call(this);

(function() {


}).call(this);
