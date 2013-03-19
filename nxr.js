/*
Namespace nxr
*/

var nxr;

nxr = {};

/*
Namespace nxr.scene
*/
nxr.scene = {};

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

nxr.scene.MatrixTransformation = (function(_super) {
  __extends(MatrixTransformation, _super);

  function MatrixTransformation(matrix) {
    this.matrix = matrix;
  }

  MatrixTransformation.prototype.acceptVisitor = function(visitor) {
    if (typeof visitor.visitMatrixTransformation === "function") {
      visitor.visitMatrixTransformation(this);
    }
    MatrixTransformation.__super__.acceptVisitor.call(this, visitor);
  };

  return MatrixTransformation;

})(nxr.scene.Node);

nxr.scene.Node = (function() {
  Node.prototype.noChildren = [];

  function Node(children) {
    this.children = children || this.noChildren;
  }

  Node.prototype.acceptVisitor = function(visitor) {
    var child, _i, _len, _ref;

    _ref = this.children;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      child.acceptVisitor(visitor);
    }
  };

  return Node;

})();



var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

nxr.scene.XRotation = (function(_super) {
  __extends(XRotation, _super);

  function XRotation(angle) {
    this.angle = angle;
  }

  XRotation.prototype.acceptVisitor = function(visitor) {
    if (typeof visitor.visitXRotation === "function") {
      visitor.visitXRotation(this);
    }
    XRotation.__super__.acceptVisitor.call(this, visitor);
  };

  return XRotation;

})(nxr.scene.Node);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

nxr.scene.YRotation = (function(_super) {
  __extends(YRotation, _super);

  function YRotation(angle) {
    this.angle = angle;
  }

  YRotation.prototype.acceptVisitor = function(visitor) {
    if (typeof visitor.visitYRotation === "function") {
      visitor.visitYRotation(this);
    }
    YRotation.__super__.acceptVisitor.call(this, visitor);
  };

  return YRotation;

})(nxr.scene.Node);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

nxr.scene.ZRotation = (function(_super) {
  __extends(ZRotation, _super);

  function ZRotation(angle) {
    this.angle = angle;
  }

  ZRotation.prototype.acceptVisitor = function(visitor) {
    if (typeof visitor.visitZRotation === "function") {
      visitor.visitZRotation(this);
    }
    ZRotation.__super__.acceptVisitor.call(this, visitor);
  };

  return ZRotation;

})(nxr.scene.Node);

/*
Namespace nxr.scene.webgl
*/
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

/*
Namespace nxr.scene.graph
*/
nxr.scene.graph = {};

nxr.scene.graph.setupScene = function(scene) {};

nxr.scene.graph.preRender = function(scene) {};

nxr.scene.graph.render = function(scene) {};

nxr.scene.graph.postRender = function(scene) {};

nxr.scene.graph.teardownScene = function(scene) {};
