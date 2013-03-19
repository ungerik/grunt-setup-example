/*
Namespace nxr
*/

"use strict";
var nxr;

nxr = {};

/*
Namespace nxr.scene
*/
nxr.scene = {};

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

  Node.prototype.addChild = function(child) {
    if (this.children.length === 0) {
      this.children = [child];
    } else {
      this.children.push(child);
    }
  };

  Node.prototype.removeChild = function(index) {
    var a, b;

    index = indexOrChild;
    a = this.children.slice(0, +index + 1 || 9e9);
    b = this.children.slice(index);
    this.children = a.concat(b);
  };

  return Node;

})();

nxr.scene.BuildWithPrimitivesVisitor = (function() {
  function BuildWithPrimitivesVisitor() {}

  BuildWithPrimitivesVisitor.prototype.visitSphere = function(sphere) {
    return buildSphere(sphere);
  };

  return BuildWithPrimitivesVisitor;

})();

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

nxr.scene.QuaternionRotation = (function(_super) {
  __extends(QuaternionRotation, _super);

  function QuaternionRotation(quaternion) {
    this.quaternion = quaternion;
  }

  QuaternionRotation.prototype.acceptVisitor = function(visitor) {
    if (typeof visitor.visitQuaternionRotation === "function") {
      visitor.visitQuaternionRotation(this);
    }
    QuaternionRotation.__super__.acceptVisitor.call(this, visitor);
  };

  QuaternionRotation.prototype.getMatrix4x4 = function() {
    return this.matrix;
  };

  return QuaternionRotation;

})(nxr.scene.Transformation);

var buildSphere,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

buildSphere = function(sphere) {
  return sphere.children.length = 0;
};

nxr.scene.Sphere = (function(_super) {
  __extends(Sphere, _super);

  function Sphere(position, radius) {
    this.position = position;
    this.radius = radius != null ? radius : 1;
  }

  return Sphere;

})(nxr.scene.Node);

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

  MatrixTransformation.prototype.getMatrix4x4 = function() {
    return this.matrix;
  };

  return MatrixTransformation;

})(nxr.scene.Transformation);

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

  XRotation.prototype.getMatrix4x4 = function() {
    return this.matrix;
  };

  return XRotation;

})(nxr.scene.Transformation);

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

  YRotation.prototype.getMatrix4x4 = function() {
    return this.matrix;
  };

  return YRotation;

})(nxr.scene.Transformation);

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

  ZRotation.prototype.getMatrix4x4 = function() {
    return this.matrix;
  };

  return ZRotation;

})(nxr.scene.Transformation);

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
