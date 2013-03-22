"use strict";
var nxr;

nxr = {};

/*
// load: temp/nxr/namespace.js
*/
nxr.scene = {};

/*
// load: temp/nxr/namespace.js
*/
nxr.webgl = {};

/*
// load: temp/nxr/scene/namespace.js
*/
nxr.scene.Transformation = (function() {
  function Transformation(matrix) {
    this.matrix = matrix;
  }

  Transformation.prototype.acceptVisitor = function(visitor) {
    if (typeof visitor.visitTransformation === "function") {
      visitor.visitTransformation(this);
    }
  };

  Transformation.prototype.getMatrix4x4 = function() {
    return this.matrix;
  };

  return Transformation;

})();

/*
// load: temp/nxr/scene/namespace.js
*/
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

    a = this.children.slice(0, +index + 1 || 9e9);
    b = this.children.slice(index);
    this.children = a.concat(b);
  };

  return Node;

})();

/*
// load: temp/nxr/webgl/namespace.js
*/

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

nxr.webgl.SceneVisitor = (function(_super) {
  __extends(SceneVisitor, _super);

  function SceneVisitor(gl) {
    this.gl = gl;
    this.setupVisitors = [new nxr.webgl.LoadIntoVideoMemoryVisitor(gl)];
    this.preRenderVisitors = [];
    this.renderVisitors = [new nxr.webgl.RenderSceneVisitor(gl)];
    this.postRenderVisitors = [];
    this.teardownVisitors = [new nxr.webgl.DeleteFromVideoMemoryVisitor(gl)];
  }

  return SceneVisitor;

})(nxr.scene.Visitor);

/*
// load: temp/nxr/webgl/namespace.js
*/

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

nxr.webgl.Scene = (function(_super) {
  __extends(Scene, _super);

  function Scene(canvas) {
    var e, message;

    try {
      this.gl = canvas.getContext("webgl");
    } catch (_error) {
      e = _error;
      message = "Error creating WebGL context: " + e.toString;
      alert(message);
      throw new Error(message);
    }
    if (this.gl == null) {
      throw new Error("Can't get WebGL context");
    }
    Scene.__super__.constructor.call(this, new nxr.webgl.SceneVisitors(this.gl));
  }

  return Scene;

})(nxr.scene.Scene);

/*
// load: temp/nxr/webgl/namespace.js
*/
nxr.webgl.RenderSceneVisitor = (function() {
  function RenderSceneVisitor(gl) {
    this.gl = gl;
  }

  return RenderSceneVisitor;

})();

/*
// load: temp/nxr/webgl/namespace.js
*/
nxr.webgl.LoadIntoVideoMemoryVisitor = (function() {
  function LoadIntoVideoMemoryVisitor(gl) {
    this.gl = gl;
  }

  return LoadIntoVideoMemoryVisitor;

})();

/*
// load: temp/nxr/webgl/namespace.js
*/
nxr.webgl.DeleteFromVideoMemoryVisitor = (function() {
  function DeleteFromVideoMemoryVisitor(gl) {
    this.gl = gl;
  }

  DeleteFromVideoMemoryVisitor.prototype.isInitializingVisitor = function() {
    return false;
  };

  DeleteFromVideoMemoryVisitor.prototype.isDeinitializingVisitor = function() {
    return true;
  };

  DeleteFromVideoMemoryVisitor.prototype.visitVertices = function(vertices) {};

  DeleteFromVideoMemoryVisitor.prototype.visitIndices = function(indices) {};

  DeleteFromVideoMemoryVisitor.prototype.visitTexture = function(texture) {};

  DeleteFromVideoMemoryVisitor.prototype.visitPixelShader = function(pixelShader) {};

  DeleteFromVideoMemoryVisitor.prototype.visitVertexShader = function(vertexShader) {};

  DeleteFromVideoMemoryVisitor.prototype.visitShaderEffect = function(shaderEffect) {};

  DeleteFromVideoMemoryVisitor.prototype.visitSkyBox = function(skyBox) {};

  DeleteFromVideoMemoryVisitor.prototype.visitLodTerrain = function(lodTerrain) {};

  DeleteFromVideoMemoryVisitor.prototype.visitFont = function(font) {};

  DeleteFromVideoMemoryVisitor.prototype.visitText = function(text) {};

  return DeleteFromVideoMemoryVisitor;

})();

/*
// load: temp/nxr/scene/Transformation.js
*/

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
// load: temp/nxr/scene/Transformation.js
*/

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

/*
// load: temp/nxr/scene/Transformation.js
*/

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

/*
// load: temp/nxr/scene/namespace.js
*/

var concatVisitors;

concatVisitors = function(a, b) {
  var result;

  result = new nxr.scene.Visitors;
  result.setupVisitors = a.setupVisitors.concat(b.setupVisitors);
  result.preRenderVisitors = a.preRenderVisitors.concat(b.preRenderVisitors);
  result.renderVisitors = a.renderVisitors.concat(b.renderVisitors);
  result.postRenderVisitors = a.postRenderVisitors.concat(b.postRenderVisitors);
  result.teardownVisitors = a.teardownVisitors.concat(b.teardownVisitors);
  return result;
};

nxr.scene.Visitors = (function() {
  function Visitors() {
    this.setupVisitors = [];
    this.preRenderVisitors = [];
    this.renderVisitors = [];
    this.postRenderVisitors = [];
    this.teardownVisitors = [];
  }

  Visitors.prototype.setup = function(scene) {
    var visitor, _i, _len, _ref;

    _ref = this.setupVisitors;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      visitor = _ref[_i];
      visitor.visit(scene);
    }
  };

  Visitors.prototype.preRender = function(scene) {
    var visitor, _i, _len, _ref;

    _ref = this.preRenderVisitors;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      visitor = _ref[_i];
      visitor.visit(scene);
    }
  };

  Visitors.prototype.render = function(scene) {
    var visitor, _i, _len, _ref;

    _ref = this.renderVisitors;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      visitor = _ref[_i];
      visitor.visit(scene);
    }
  };

  Visitors.prototype.postRender = function(scene) {
    var visitor, _i, _len, _ref;

    _ref = this.postRenderVisitors;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      visitor = _ref[_i];
      visitor.visit(scene);
    }
  };

  Visitors.prototype.teardown = function(scene) {
    var visitor, _i, _len, _ref;

    _ref = this.teardownVisitors;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      visitor = _ref[_i];
      visitor.visit(scene);
    }
  };

  return Visitors;

})();

/*
// load: temp/nxr/scene/Node.js
*/

var buildSphere,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

buildSphere = function(sphere) {
  sphere.children.length = 0;
  return null;
};

nxr.scene.Sphere = (function(_super) {
  __extends(Sphere, _super);

  function Sphere(position, radius) {
    this.position = position;
    this.radius = radius != null ? radius : 1;
  }

  Sphere.prototype.acceptVisitor = function(visitor) {
    if (visitor.visitSphere != null) {
      visitor.visitSphere(this);
    } else {
      Sphere.__super__.acceptVisitor.call(this, visitor);
    }
  };

  return Sphere;

})(nxr.scene.Node);

/*
// load: temp/nxr/scene/Node.js
*/

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

nxr.scene.Scene = (function(_super) {
  __extends(Scene, _super);

  function Scene(visitors) {
    this.visitors = visitors;
    Scene.__super__.constructor.call(this, null);
  }

  Scene.prototype.setup = function() {
    return this.visitors.setup(this);
  };

  Scene.prototype.render = function() {
    this.visitors.preRender(this);
    this.visitors.render(this);
    return this.visitors.postRender(this);
  };

  Scene.prototype.teardown = function() {
    return this.visitors.teardown(this);
  };

  return Scene;

})(nxr.scene.Node);

/*
// load: temp/nxr/scene/Transformation.js
*/

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

/*
// load: temp/nxr/scene/Node.js
*/

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

nxr.scene.Model = (function(_super) {
  __extends(Model, _super);

  function Model(id, children) {
    this.id = id;
    Model.__super__.constructor.call(this, children);
  }

  Model.prototype.acceptVisitor = function(visitor) {
    if (typeof visitor.visitModel === "function") {
      visitor.visitModel(this);
    }
  };

  return Model;

})(nxr.scene.Node);

/*
// load: temp/nxr/scene/namespace.js
*/
nxr.scene.Instance = (function() {
  function Instance(modelId) {
    this.modelId = modelId;
  }

  Instance.prototype.acceptVisitor = function(visitor) {
    if (typeof visitor.visitInstance === "function") {
      visitor.visitInstance(this);
    }
  };

  return Instance;

})();

/*
// load: temp/nxr/scene/namespace.js
*/
nxr.scene.BuildWithPrimitivesVisitor = (function() {
  function BuildWithPrimitivesVisitor() {}

  BuildWithPrimitivesVisitor.prototype.visitSphere = function(sphere) {
    return buildSphere(sphere);
  };

  return BuildWithPrimitivesVisitor;

})();

/*
// load: temp/nxr/scene/Node.js
*/

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

nxr.scene.BoundingBox = (function(_super) {
  __extends(BoundingBox, _super);

  function BoundingBox(min, max, children) {
    this.min = min;
    this.max = max;
    BoundingBox.__super__.constructor.call(this, children);
  }

  BoundingBox.prototype.acceptVisitor = function(visitor) {
    if (typeof visitor.visitBoundingBox === "function") {
      visitor.visitBoundingBox(this);
    }
  };

  return BoundingBox;

})(nxr.scene.Node);

/*
// load: temp/nxr/scene/Node.js
*/

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

nxr.scene.BoundingSphere = (function(_super) {
  __extends(BoundingSphere, _super);

  function BoundingSphere(center, radius, children) {
    this.center = center;
    this.radius = radius;
    BoundingSphere.__super__.constructor.call(this, children);
  }

  BoundingSphere.prototype.acceptVisitor = function(visitor) {
    if (typeof visitor.visitBoundingSphere === "function") {
      visitor.visitBoundingSphere(this);
    }
  };

  return BoundingSphere;

})(nxr.scene.Node);
