(function(){"use strict";var shim={};"undefined"==typeof exports?"function"==typeof define&&"object"==typeof define.amd&&define.amd?(shim.exports={},define(function(){return shim.exports})):shim.exports=window:shim.exports=exports,function(exports){var vec2={};if(!GLMAT_EPSILON)var GLMAT_EPSILON=1e-6;vec2.create=function(){return new Float32Array(2)},vec2.clone=function(a){var out=new Float32Array(2);return out[0]=a[0],out[1]=a[1],out},vec2.fromValues=function(x,y){var out=new Float32Array(2);return out[0]=x,out[1]=y,out},vec2.copy=function(out,a){return out[0]=a[0],out[1]=a[1],out},vec2.set=function(out,x,y){return out[0]=x,out[1]=y,out},vec2.add=function(out,a,b){return out[0]=a[0]+b[0],out[1]=a[1]+b[1],out},vec2.sub=vec2.subtract=function(out,a,b){return out[0]=a[0]-b[0],out[1]=a[1]-b[1],out},vec2.mul=vec2.multiply=function(out,a,b){return out[0]=a[0]*b[0],out[1]=a[1]*b[1],out},vec2.div=vec2.divide=function(out,a,b){return out[0]=a[0]/b[0],out[1]=a[1]/b[1],out},vec2.min=function(out,a,b){return out[0]=Math.min(a[0],b[0]),out[1]=Math.min(a[1],b[1]),out},vec2.max=function(out,a,b){return out[0]=Math.max(a[0],b[0]),out[1]=Math.max(a[1],b[1]),out},vec2.scale=function(out,a,b){return out[0]=a[0]*b,out[1]=a[1]*b,out},vec2.dist=vec2.distance=function(a,b){var x=b[0]-a[0],y=b[1]-a[1];return Math.sqrt(x*x+y*y)},vec2.sqrDist=vec2.squaredDistance=function(a,b){var x=b[0]-a[0],y=b[1]-a[1];return x*x+y*y},vec2.len=vec2.length=function(a){var x=a[0],y=a[1];return Math.sqrt(x*x+y*y)},vec2.sqrLen=vec2.squaredLength=function(a){var x=a[0],y=a[1];return x*x+y*y},vec2.negate=function(out,a){return out[0]=-a[0],out[1]=-a[1],out},vec2.normalize=function(out,a){var x=a[0],y=a[1],len=x*x+y*y;return len>0&&(len=1/Math.sqrt(len),out[0]=a[0]*len,out[1]=a[1]*len),out},vec2.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]},vec2.cross=function(out,a,b){var z=a[0]*b[1]-a[1]*b[0];return out[0]=out[1]=0,out[2]=z,out},vec2.lerp=function(out,a,b,t){var ax=a[0],ay=a[1];return out[0]=ax+t*(b[0]-ax),out[1]=ay+t*(b[1]-ay),out},vec2.transformMat2=function(out,a,m){var x=a[0],y=a[1];return out[0]=x*m[0]+y*m[1],out[1]=x*m[2]+y*m[3],out},vec2.forEach=function(){var vec=new Float32Array(2);return function(a,stride,offset,count,fn,arg){var i,l;for(stride||(stride=2),offset||(offset=0),l=count?Math.min(count*stride+offset,a.length):a.length,i=offset;l>i;i+=stride)vec[0]=a[i],vec[1]=a[i+1],fn(vec,vec,arg),a[i]=vec[0],a[i+1]=vec[1];return a}}(),vec2.str=function(a){return"vec2("+a[0]+", "+a[1]+")"},exports!==void 0&&(exports.vec2=vec2);var vec3={};if(!GLMAT_EPSILON)var GLMAT_EPSILON=1e-6;vec3.create=function(){return new Float32Array(3)},vec3.clone=function(a){var out=new Float32Array(3);return out[0]=a[0],out[1]=a[1],out[2]=a[2],out},vec3.fromValues=function(x,y,z){var out=new Float32Array(3);return out[0]=x,out[1]=y,out[2]=z,out},vec3.copy=function(out,a){return out[0]=a[0],out[1]=a[1],out[2]=a[2],out},vec3.set=function(out,x,y,z){return out[0]=x,out[1]=y,out[2]=z,out},vec3.add=function(out,a,b){return out[0]=a[0]+b[0],out[1]=a[1]+b[1],out[2]=a[2]+b[2],out},vec3.sub=vec3.subtract=function(out,a,b){return out[0]=a[0]-b[0],out[1]=a[1]-b[1],out[2]=a[2]-b[2],out},vec3.mul=vec3.multiply=function(out,a,b){return out[0]=a[0]*b[0],out[1]=a[1]*b[1],out[2]=a[2]*b[2],out},vec3.div=vec3.divide=function(out,a,b){return out[0]=a[0]/b[0],out[1]=a[1]/b[1],out[2]=a[2]/b[2],out},vec3.min=function(out,a,b){return out[0]=Math.min(a[0],b[0]),out[1]=Math.min(a[1],b[1]),out[2]=Math.min(a[2],b[2]),out},vec3.max=function(out,a,b){return out[0]=Math.max(a[0],b[0]),out[1]=Math.max(a[1],b[1]),out[2]=Math.max(a[2],b[2]),out},vec3.scale=function(out,a,b){return out[0]=a[0]*b,out[1]=a[1]*b,out[2]=a[2]*b,out},vec3.dist=vec3.distance=function(a,b){var x=b[0]-a[0],y=b[1]-a[1],z=b[2]-a[2];return Math.sqrt(x*x+y*y+z*z)},vec3.sqrDist=vec3.squaredDistance=function(a,b){var x=b[0]-a[0],y=b[1]-a[1],z=b[2]-a[2];return x*x+y*y+z*z},vec3.len=vec3.length=function(a){var x=a[0],y=a[1],z=a[2];return Math.sqrt(x*x+y*y+z*z)},vec3.sqrLen=vec3.squaredLength=function(a){var x=a[0],y=a[1],z=a[2];return x*x+y*y+z*z},vec3.negate=function(out,a){return out[0]=-a[0],out[1]=-a[1],out[2]=-a[2],out},vec3.normalize=function(out,a){var x=a[0],y=a[1],z=a[2],len=x*x+y*y+z*z;return len>0&&(len=1/Math.sqrt(len),out[0]=a[0]*len,out[1]=a[1]*len,out[2]=a[2]*len),out},vec3.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]},vec3.cross=function(out,a,b){var ax=a[0],ay=a[1],az=a[2],bx=b[0],by=b[1],bz=b[2];return out[0]=ay*bz-az*by,out[1]=az*bx-ax*bz,out[2]=ax*by-ay*bx,out},vec3.lerp=function(out,a,b,t){var ax=a[0],ay=a[1],az=a[2];return out[0]=ax+t*(b[0]-ax),out[1]=ay+t*(b[1]-ay),out[2]=az+t*(b[2]-az),out},vec3.transformMat4=function(out,a,m){var x=a[0],y=a[1],z=a[2];return out[0]=m[0]*x+m[4]*y+m[8]*z+m[12],out[1]=m[1]*x+m[5]*y+m[9]*z+m[13],out[2]=m[2]*x+m[6]*y+m[10]*z+m[14],out},vec3.transformQuat=function(out,a,q){var x=a[0],y=a[1],z=a[2],qx=q[0],qy=q[1],qz=q[2],qw=q[3],ix=qw*x+qy*z-qz*y,iy=qw*y+qz*x-qx*z,iz=qw*z+qx*y-qy*x,iw=-qx*x-qy*y-qz*z;return out[0]=ix*qw+iw*-qx+iy*-qz-iz*-qy,out[1]=iy*qw+iw*-qy+iz*-qx-ix*-qz,out[2]=iz*qw+iw*-qz+ix*-qy-iy*-qx,out},vec3.forEach=function(){var vec=new Float32Array(3);return function(a,stride,offset,count,fn,arg){var i,l;for(stride||(stride=3),offset||(offset=0),l=count?Math.min(count*stride+offset,a.length):a.length,i=offset;l>i;i+=stride)vec[0]=a[i],vec[1]=a[i+1],vec[2]=a[i+2],fn(vec,vec,arg),a[i]=vec[0],a[i+1]=vec[1],a[i+2]=vec[2];return a}}(),vec3.str=function(a){return"vec3("+a[0]+", "+a[1]+", "+a[2]+")"},exports!==void 0&&(exports.vec3=vec3);var vec4={};if(!GLMAT_EPSILON)var GLMAT_EPSILON=1e-6;vec4.create=function(){return new Float32Array(4)},vec4.clone=function(a){var out=new Float32Array(4);return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out},vec4.fromValues=function(x,y,z,w){var out=new Float32Array(4);return out[0]=x,out[1]=y,out[2]=z,out[3]=w,out},vec4.copy=function(out,a){return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out},vec4.set=function(out,x,y,z,w){return out[0]=x,out[1]=y,out[2]=z,out[3]=w,out},vec4.add=function(out,a,b){return out[0]=a[0]+b[0],out[1]=a[1]+b[1],out[2]=a[2]+b[2],out[3]=a[3]+b[3],out},vec4.sub=vec4.subtract=function(out,a,b){return out[0]=a[0]-b[0],out[1]=a[1]-b[1],out[2]=a[2]-b[2],out[3]=a[3]-b[3],out},vec4.mul=vec4.multiply=function(out,a,b){return out[0]=a[0]*b[0],out[1]=a[1]*b[1],out[2]=a[2]*b[2],out[3]=a[3]*b[3],out},vec4.div=vec4.divide=function(out,a,b){return out[0]=a[0]/b[0],out[1]=a[1]/b[1],out[2]=a[2]/b[2],out[3]=a[3]/b[3],out},vec4.min=function(out,a,b){return out[0]=Math.min(a[0],b[0]),out[1]=Math.min(a[1],b[1]),out[2]=Math.min(a[2],b[2]),out[3]=Math.min(a[3],b[3]),out},vec4.max=function(out,a,b){return out[0]=Math.max(a[0],b[0]),out[1]=Math.max(a[1],b[1]),out[2]=Math.max(a[2],b[2]),out[3]=Math.max(a[3],b[3]),out},vec4.scale=function(out,a,b){return out[0]=a[0]*b,out[1]=a[1]*b,out[2]=a[2]*b,out[3]=a[3]*b,out},vec4.dist=vec4.distance=function(a,b){var x=b[0]-a[0],y=b[1]-a[1],z=b[2]-a[2],w=b[3]-a[3];return Math.sqrt(x*x+y*y+z*z+w*w)},vec4.sqrDist=vec4.squaredDistance=function(a,b){var x=b[0]-a[0],y=b[1]-a[1],z=b[2]-a[2],w=b[3]-a[3];return x*x+y*y+z*z+w*w},vec4.len=vec4.length=function(a){var x=a[0],y=a[1],z=a[2],w=a[3];return Math.sqrt(x*x+y*y+z*z+w*w)},vec4.sqrLen=vec4.squaredLength=function(a){var x=a[0],y=a[1],z=a[2],w=a[3];return x*x+y*y+z*z+w*w},vec4.negate=function(out,a){return out[0]=-a[0],out[1]=-a[1],out[2]=-a[2],out[3]=-a[3],out},vec4.normalize=function(out,a){var x=a[0],y=a[1],z=a[2],w=a[3],len=x*x+y*y+z*z+w*w;return len>0&&(len=1/Math.sqrt(len),out[0]=a[0]*len,out[1]=a[1]*len,out[2]=a[2]*len,out[3]=a[3]*len),out},vec4.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]},vec4.lerp=function(out,a,b,t){var ax=a[0],ay=a[1],az=a[2],aw=a[3];return out[0]=ax+t*(b[0]-ax),out[1]=ay+t*(b[1]-ay),out[2]=az+t*(b[2]-az),out[3]=aw+t*(b[3]-aw),out},vec4.transformMat4=function(out,a,m){var x=a[0],y=a[1],z=a[2],w=a[3];return out[0]=m[0]*x+m[4]*y+m[8]*z+m[12]*w,out[1]=m[1]*x+m[5]*y+m[9]*z+m[13]*w,out[2]=m[2]*x+m[6]*y+m[10]*z+m[14]*w,out[3]=m[3]*x+m[7]*y+m[11]*z+m[15]*w,out},vec4.transformQuat=function(out,a,q){var x=a[0],y=a[1],z=a[2],qx=q[0],qy=q[1],qz=q[2],qw=q[3],ix=qw*x+qy*z-qz*y,iy=qw*y+qz*x-qx*z,iz=qw*z+qx*y-qy*x,iw=-qx*x-qy*y-qz*z;return out[0]=ix*qw+iw*-qx+iy*-qz-iz*-qy,out[1]=iy*qw+iw*-qy+iz*-qx-ix*-qz,out[2]=iz*qw+iw*-qz+ix*-qy-iy*-qx,out},vec4.forEach=function(){var vec=new Float32Array(4);return function(a,stride,offset,count,fn,arg){var i,l;for(stride||(stride=4),offset||(offset=0),l=count?Math.min(count*stride+offset,a.length):a.length,i=offset;l>i;i+=stride)vec[0]=a[i],vec[1]=a[i+1],vec[2]=a[i+2],vec[3]=a[i+3],fn(vec,vec,arg),a[i]=vec[0],a[i+1]=vec[1],a[i+2]=vec[2],a[i+3]=vec[3];return a}}(),vec4.str=function(a){return"vec4("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"},exports!==void 0&&(exports.vec4=vec4);var mat2={},mat2Identity=new Float32Array([1,0,0,1]);if(!GLMAT_EPSILON)var GLMAT_EPSILON=1e-6;mat2.create=function(){return new Float32Array(mat2Identity)},mat2.clone=function(a){var out=new Float32Array(4);return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out},mat2.copy=function(out,a){return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out},mat2.identity=function(out){return out[0]=1,out[1]=0,out[2]=0,out[3]=1,out},mat2.transpose=function(out,a){if(out===a){var a1=a[1];out[1]=a[2],out[2]=a1}else out[0]=a[0],out[1]=a[2],out[2]=a[1],out[3]=a[3];return out},mat2.invert=function(out,a){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],det=a0*a3-a2*a1;return det?(det=1/det,out[0]=a3*det,out[1]=-a1*det,out[2]=-a2*det,out[3]=a0*det,out):null},mat2.adjoint=function(out,a){var a0=a[0];return out[0]=a[3],out[1]=-a[1],out[2]=-a[2],out[3]=a0,out},mat2.determinant=function(a){return a[0]*a[3]-a[2]*a[1]},mat2.mul=mat2.multiply=function(out,a,b){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],b0=b[0],b1=b[1],b2=b[2],b3=b[3];return out[0]=a0*b0+a1*b2,out[1]=a0*b1+a1*b3,out[2]=a2*b0+a3*b2,out[3]=a2*b1+a3*b3,out},mat2.rotate=function(out,a,rad){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],s=Math.sin(rad),c=Math.cos(rad);return out[0]=a0*c+a1*s,out[1]=a0*-s+a1*c,out[2]=a2*c+a3*s,out[3]=a2*-s+a3*c,out},mat2.scale=function(out,a,v){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],v0=v[0],v1=v[1];return out[0]=a0*v0,out[1]=a1*v1,out[2]=a2*v0,out[3]=a3*v1,out},mat2.str=function(a){return"mat2("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"},exports!==void 0&&(exports.mat2=mat2);var mat3={},mat3Identity=new Float32Array([1,0,0,0,1,0,0,0,1]);if(!GLMAT_EPSILON)var GLMAT_EPSILON=1e-6;mat3.create=function(){return new Float32Array(mat3Identity)},mat3.clone=function(a){var out=new Float32Array(9);return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out[4]=a[4],out[5]=a[5],out[6]=a[6],out[7]=a[7],out[8]=a[8],out},mat3.copy=function(out,a){return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out[4]=a[4],out[5]=a[5],out[6]=a[6],out[7]=a[7],out[8]=a[8],out},mat3.identity=function(out){return out[0]=1,out[1]=0,out[2]=0,out[3]=0,out[4]=1,out[5]=0,out[6]=0,out[7]=0,out[8]=1,out},mat3.transpose=function(out,a){if(out===a){var a01=a[1],a02=a[2],a12=a[5];out[1]=a[3],out[2]=a[6],out[3]=a01,out[5]=a[7],out[6]=a02,out[7]=a12}else out[0]=a[0],out[1]=a[3],out[2]=a[6],out[3]=a[1],out[4]=a[4],out[5]=a[7],out[6]=a[2],out[7]=a[5],out[8]=a[8];return out},mat3.invert=function(out,a){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],b01=a22*a11-a12*a21,b11=-a22*a10+a12*a20,b21=a21*a10-a11*a20,det=a00*b01+a01*b11+a02*b21;return det?(det=1/det,out[0]=b01*det,out[1]=(-a22*a01+a02*a21)*det,out[2]=(a12*a01-a02*a11)*det,out[3]=b11*det,out[4]=(a22*a00-a02*a20)*det,out[5]=(-a12*a00+a02*a10)*det,out[6]=b21*det,out[7]=(-a21*a00+a01*a20)*det,out[8]=(a11*a00-a01*a10)*det,out):null},mat3.adjoint=function(out,a){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8];return out[0]=a11*a22-a12*a21,out[1]=a02*a21-a01*a22,out[2]=a01*a12-a02*a11,out[3]=a12*a20-a10*a22,out[4]=a00*a22-a02*a20,out[5]=a02*a10-a00*a12,out[6]=a10*a21-a11*a20,out[7]=a01*a20-a00*a21,out[8]=a00*a11-a01*a10,out},mat3.determinant=function(a){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8];return a00*(a22*a11-a12*a21)+a01*(-a22*a10+a12*a20)+a02*(a21*a10-a11*a20)},mat3.mul=mat3.multiply=function(out,a,b){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],b00=b[0],b01=b[1],b02=b[2],b10=b[3],b11=b[4],b12=b[5],b20=b[6],b21=b[7],b22=b[8];return out[0]=b00*a00+b01*a10+b02*a20,out[1]=b00*a01+b01*a11+b02*a21,out[2]=b00*a02+b01*a12+b02*a22,out[3]=b10*a00+b11*a10+b12*a20,out[4]=b10*a01+b11*a11+b12*a21,out[5]=b10*a02+b11*a12+b12*a22,out[6]=b20*a00+b21*a10+b22*a20,out[7]=b20*a01+b21*a11+b22*a21,out[8]=b20*a02+b21*a12+b22*a22,out},mat3.str=function(a){return"mat3("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+")"},exports!==void 0&&(exports.mat3=mat3);var mat4={},mat4Identity=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);if(!GLMAT_EPSILON)var GLMAT_EPSILON=1e-6;mat4.create=function(){return new Float32Array(mat4Identity)},mat4.clone=function(a){var out=new Float32Array(16);return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out[4]=a[4],out[5]=a[5],out[6]=a[6],out[7]=a[7],out[8]=a[8],out[9]=a[9],out[10]=a[10],out[11]=a[11],out[12]=a[12],out[13]=a[13],out[14]=a[14],out[15]=a[15],out},mat4.copy=function(out,a){return out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out[4]=a[4],out[5]=a[5],out[6]=a[6],out[7]=a[7],out[8]=a[8],out[9]=a[9],out[10]=a[10],out[11]=a[11],out[12]=a[12],out[13]=a[13],out[14]=a[14],out[15]=a[15],out},mat4.identity=function(out){return out[0]=1,out[1]=0,out[2]=0,out[3]=0,out[4]=0,out[5]=1,out[6]=0,out[7]=0,out[8]=0,out[9]=0,out[10]=1,out[11]=0,out[12]=0,out[13]=0,out[14]=0,out[15]=1,out},mat4.transpose=function(out,a){if(out===a){var a01=a[1],a02=a[2],a03=a[3],a12=a[6],a13=a[7],a23=a[11];out[1]=a[4],out[2]=a[8],out[3]=a[12],out[4]=a01,out[6]=a[9],out[7]=a[13],out[8]=a02,out[9]=a12,out[11]=a[14],out[12]=a03,out[13]=a13,out[14]=a23}else out[0]=a[0],out[1]=a[4],out[2]=a[8],out[3]=a[12],out[4]=a[1],out[5]=a[5],out[6]=a[9],out[7]=a[13],out[8]=a[2],out[9]=a[6],out[10]=a[10],out[11]=a[14],out[12]=a[3],out[13]=a[7],out[14]=a[11],out[15]=a[15];return out},mat4.invert=function(out,a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15],b00=a00*a11-a01*a10,b01=a00*a12-a02*a10,b02=a00*a13-a03*a10,b03=a01*a12-a02*a11,b04=a01*a13-a03*a11,b05=a02*a13-a03*a12,b06=a20*a31-a21*a30,b07=a20*a32-a22*a30,b08=a20*a33-a23*a30,b09=a21*a32-a22*a31,b10=a21*a33-a23*a31,b11=a22*a33-a23*a32,det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;return det?(det=1/det,out[0]=(a11*b11-a12*b10+a13*b09)*det,out[1]=(a02*b10-a01*b11-a03*b09)*det,out[2]=(a31*b05-a32*b04+a33*b03)*det,out[3]=(a22*b04-a21*b05-a23*b03)*det,out[4]=(a12*b08-a10*b11-a13*b07)*det,out[5]=(a00*b11-a02*b08+a03*b07)*det,out[6]=(a32*b02-a30*b05-a33*b01)*det,out[7]=(a20*b05-a22*b02+a23*b01)*det,out[8]=(a10*b10-a11*b08+a13*b06)*det,out[9]=(a01*b08-a00*b10-a03*b06)*det,out[10]=(a30*b04-a31*b02+a33*b00)*det,out[11]=(a21*b02-a20*b04-a23*b00)*det,out[12]=(a11*b07-a10*b09-a12*b06)*det,out[13]=(a00*b09-a01*b07+a02*b06)*det,out[14]=(a31*b01-a30*b03-a32*b00)*det,out[15]=(a20*b03-a21*b01+a22*b00)*det,out):null},mat4.adjoint=function(out,a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15];return out[0]=a11*(a22*a33-a23*a32)-a21*(a12*a33-a13*a32)+a31*(a12*a23-a13*a22),out[1]=-(a01*(a22*a33-a23*a32)-a21*(a02*a33-a03*a32)+a31*(a02*a23-a03*a22)),out[2]=a01*(a12*a33-a13*a32)-a11*(a02*a33-a03*a32)+a31*(a02*a13-a03*a12),out[3]=-(a01*(a12*a23-a13*a22)-a11*(a02*a23-a03*a22)+a21*(a02*a13-a03*a12)),out[4]=-(a10*(a22*a33-a23*a32)-a20*(a12*a33-a13*a32)+a30*(a12*a23-a13*a22)),out[5]=a00*(a22*a33-a23*a32)-a20*(a02*a33-a03*a32)+a30*(a02*a23-a03*a22),out[6]=-(a00*(a12*a33-a13*a32)-a10*(a02*a33-a03*a32)+a30*(a02*a13-a03*a12)),out[7]=a00*(a12*a23-a13*a22)-a10*(a02*a23-a03*a22)+a20*(a02*a13-a03*a12),out[8]=a10*(a21*a33-a23*a31)-a20*(a11*a33-a13*a31)+a30*(a11*a23-a13*a21),out[9]=-(a00*(a21*a33-a23*a31)-a20*(a01*a33-a03*a31)+a30*(a01*a23-a03*a21)),out[10]=a00*(a11*a33-a13*a31)-a10*(a01*a33-a03*a31)+a30*(a01*a13-a03*a11),out[11]=-(a00*(a11*a23-a13*a21)-a10*(a01*a23-a03*a21)+a20*(a01*a13-a03*a11)),out[12]=-(a10*(a21*a32-a22*a31)-a20*(a11*a32-a12*a31)+a30*(a11*a22-a12*a21)),out[13]=a00*(a21*a32-a22*a31)-a20*(a01*a32-a02*a31)+a30*(a01*a22-a02*a21),out[14]=-(a00*(a11*a32-a12*a31)-a10*(a01*a32-a02*a31)+a30*(a01*a12-a02*a11)),out[15]=a00*(a11*a22-a12*a21)-a10*(a01*a22-a02*a21)+a20*(a01*a12-a02*a11),out},mat4.determinant=function(a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15],b00=a00*a11-a01*a10,b01=a00*a12-a02*a10,b02=a00*a13-a03*a10,b03=a01*a12-a02*a11,b04=a01*a13-a03*a11,b05=a02*a13-a03*a12,b06=a20*a31-a21*a30,b07=a20*a32-a22*a30,b08=a20*a33-a23*a30,b09=a21*a32-a22*a31,b10=a21*a33-a23*a31,b11=a22*a33-a23*a32;return b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06},mat4.mul=mat4.multiply=function(out,a,b){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15],b0=b[0],b1=b[1],b2=b[2],b3=b[3];return out[0]=b0*a00+b1*a10+b2*a20+b3*a30,out[1]=b0*a01+b1*a11+b2*a21+b3*a31,out[2]=b0*a02+b1*a12+b2*a22+b3*a32,out[3]=b0*a03+b1*a13+b2*a23+b3*a33,b0=b[4],b1=b[5],b2=b[6],b3=b[7],out[4]=b0*a00+b1*a10+b2*a20+b3*a30,out[5]=b0*a01+b1*a11+b2*a21+b3*a31,out[6]=b0*a02+b1*a12+b2*a22+b3*a32,out[7]=b0*a03+b1*a13+b2*a23+b3*a33,b0=b[8],b1=b[9],b2=b[10],b3=b[11],out[8]=b0*a00+b1*a10+b2*a20+b3*a30,out[9]=b0*a01+b1*a11+b2*a21+b3*a31,out[10]=b0*a02+b1*a12+b2*a22+b3*a32,out[11]=b0*a03+b1*a13+b2*a23+b3*a33,b0=b[12],b1=b[13],b2=b[14],b3=b[15],out[12]=b0*a00+b1*a10+b2*a20+b3*a30,out[13]=b0*a01+b1*a11+b2*a21+b3*a31,out[14]=b0*a02+b1*a12+b2*a22+b3*a32,out[15]=b0*a03+b1*a13+b2*a23+b3*a33,out},mat4.translate=function(out,a,v){var a00,a01,a02,a03,a10,a11,a12,a13,a20,a21,a22,a23,x=v[0],y=v[1],z=v[2];return a===out?(out[12]=a[0]*x+a[4]*y+a[8]*z+a[12],out[13]=a[1]*x+a[5]*y+a[9]*z+a[13],out[14]=a[2]*x+a[6]*y+a[10]*z+a[14],out[15]=a[3]*x+a[7]*y+a[11]*z+a[15]):(a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],out[0]=a00,out[1]=a01,out[2]=a02,out[3]=a03,out[4]=a10,out[5]=a11,out[6]=a12,out[7]=a13,out[8]=a20,out[9]=a21,out[10]=a22,out[11]=a23,out[12]=a00*x+a10*y+a20*z+a[12],out[13]=a01*x+a11*y+a21*z+a[13],out[14]=a02*x+a12*y+a22*z+a[14],out[15]=a03*x+a13*y+a23*z+a[15]),out},mat4.scale=function(out,a,v){var x=v[0],y=v[1],z=v[2];return out[0]=a[0]*x,out[1]=a[1]*x,out[2]=a[2]*x,out[3]=a[3]*x,out[4]=a[4]*y,out[5]=a[5]*y,out[6]=a[6]*y,out[7]=a[7]*y,out[8]=a[8]*z,out[9]=a[9]*z,out[10]=a[10]*z,out[11]=a[11]*z,out[12]=a[12],out[13]=a[13],out[14]=a[14],out[15]=a[15],out},mat4.rotate=function(out,a,rad,axis){var s,c,t,a00,a01,a02,a03,a10,a11,a12,a13,a20,a21,a22,a23,b00,b01,b02,b10,b11,b12,b20,b21,b22,x=axis[0],y=axis[1],z=axis[2],len=Math.sqrt(x*x+y*y+z*z);return GLMAT_EPSILON>Math.abs(len)?null:(len=1/len,x*=len,y*=len,z*=len,s=Math.sin(rad),c=Math.cos(rad),t=1-c,a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],b00=x*x*t+c,b01=y*x*t+z*s,b02=z*x*t-y*s,b10=x*y*t-z*s,b11=y*y*t+c,b12=z*y*t+x*s,b20=x*z*t+y*s,b21=y*z*t-x*s,b22=z*z*t+c,out[0]=a00*b00+a10*b01+a20*b02,out[1]=a01*b00+a11*b01+a21*b02,out[2]=a02*b00+a12*b01+a22*b02,out[3]=a03*b00+a13*b01+a23*b02,out[4]=a00*b10+a10*b11+a20*b12,out[5]=a01*b10+a11*b11+a21*b12,out[6]=a02*b10+a12*b11+a22*b12,out[7]=a03*b10+a13*b11+a23*b12,out[8]=a00*b20+a10*b21+a20*b22,out[9]=a01*b20+a11*b21+a21*b22,out[10]=a02*b20+a12*b21+a22*b22,out[11]=a03*b20+a13*b21+a23*b22,a!==out&&(out[12]=a[12],out[13]=a[13],out[14]=a[14],out[15]=a[15]),out)},mat4.rotateX=function(out,a,rad){var s=Math.sin(rad),c=Math.cos(rad),a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11];return a!==out&&(out[0]=a[0],out[1]=a[1],out[2]=a[2],out[3]=a[3],out[12]=a[12],out[13]=a[13],out[14]=a[14],out[15]=a[15]),out[4]=a10*c+a20*s,out[5]=a11*c+a21*s,out[6]=a12*c+a22*s,out[7]=a13*c+a23*s,out[8]=a20*c-a10*s,out[9]=a21*c-a11*s,out[10]=a22*c-a12*s,out[11]=a23*c-a13*s,out},mat4.rotateY=function(out,a,rad){var s=Math.sin(rad),c=Math.cos(rad),a00=a[0],a01=a[1],a02=a[2],a03=a[3],a20=a[8],a21=a[9],a22=a[10],a23=a[11];return a!==out&&(out[4]=a[4],out[5]=a[5],out[6]=a[6],out[7]=a[7],out[12]=a[12],out[13]=a[13],out[14]=a[14],out[15]=a[15]),out[0]=a00*c-a20*s,out[1]=a01*c-a21*s,out[2]=a02*c-a22*s,out[3]=a03*c-a23*s,out[8]=a00*s+a20*c,out[9]=a01*s+a21*c,out[10]=a02*s+a22*c,out[11]=a03*s+a23*c,out},mat4.rotateZ=function(out,a,rad){var s=Math.sin(rad),c=Math.cos(rad),a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7];return a!==out&&(out[8]=a[8],out[9]=a[9],out[10]=a[10],out[11]=a[11],out[12]=a[12],out[13]=a[13],out[14]=a[14],out[15]=a[15]),out[0]=a00*c+a10*s,out[1]=a01*c+a11*s,out[2]=a02*c+a12*s,out[3]=a03*c+a13*s,out[4]=a10*c-a00*s,out[5]=a11*c-a01*s,out[6]=a12*c-a02*s,out[7]=a13*c-a03*s,out},mat4.fromRotationTranslation=function(out,q,v){var x=q[0],y=q[1],z=q[2],w=q[3],x2=x+x,y2=y+y,z2=z+z,xx=x*x2,xy=x*y2,xz=x*z2,yy=y*y2,yz=y*z2,zz=z*z2,wx=w*x2,wy=w*y2,wz=w*z2;return out[0]=1-(yy+zz),out[1]=xy+wz,out[2]=xz-wy,out[3]=0,out[4]=xy-wz,out[5]=1-(xx+zz),out[6]=yz+wx,out[7]=0,out[8]=xz+wy,out[9]=yz-wx,out[10]=1-(xx+yy),out[11]=0,out[12]=v[0],out[13]=v[1],out[14]=v[2],out[15]=1,out},mat4.frustum=function(out,left,right,bottom,top,near,far){var rl=1/(right-left),tb=1/(top-bottom),nf=1/(near-far);return out[0]=2*near*rl,out[1]=0,out[2]=0,out[3]=0,out[4]=0,out[5]=2*near*tb,out[6]=0,out[7]=0,out[8]=(right+left)*rl,out[9]=(top+bottom)*tb,out[10]=(far+near)*nf,out[11]=-1,out[12]=0,out[13]=0,out[14]=2*far*near*nf,out[15]=0,out},mat4.perspective=function(out,fovy,aspect,near,far){var f=1/Math.tan(fovy/2),nf=1/(near-far);return out[0]=f/aspect,out[1]=0,out[2]=0,out[3]=0,out[4]=0,out[5]=f,out[6]=0,out[7]=0,out[8]=0,out[9]=0,out[10]=(far+near)*nf,out[11]=-1,out[12]=0,out[13]=0,out[14]=2*far*near*nf,out[15]=0,out},mat4.ortho=function(out,left,right,bottom,top,near,far){var lr=1/(left-right),bt=1/(bottom-top),nf=1/(near-far);return out[0]=-2*lr,out[1]=0,out[2]=0,out[3]=0,out[4]=0,out[5]=-2*bt,out[6]=0,out[7]=0,out[8]=0,out[9]=0,out[10]=2*nf,out[11]=0,out[12]=(left+right)*lr,out[13]=(top+bottom)*bt,out[14]=(far+near)*nf,out[15]=1,out},mat4.lookAt=function(out,eye,center,up){var x0,x1,x2,y0,y1,y2,z0,z1,z2,len,eyex=eye[0],eyey=eye[1],eyez=eye[2],upx=up[0],upy=up[1],upz=up[2],centerx=center[0],centery=center[1],centerz=center[2];return GLMAT_EPSILON>Math.abs(eyex-centerx)&&GLMAT_EPSILON>Math.abs(eyey-centery)&&GLMAT_EPSILON>Math.abs(eyez-centerz)?mat4.identity(out):(z0=eyex-centerx,z1=eyey-centery,z2=eyez-centerz,len=1/Math.sqrt(z0*z0+z1*z1+z2*z2),z0*=len,z1*=len,z2*=len,x0=upy*z2-upz*z1,x1=upz*z0-upx*z2,x2=upx*z1-upy*z0,len=Math.sqrt(x0*x0+x1*x1+x2*x2),len?(len=1/len,x0*=len,x1*=len,x2*=len):(x0=0,x1=0,x2=0),y0=z1*x2-z2*x1,y1=z2*x0-z0*x2,y2=z0*x1-z1*x0,len=Math.sqrt(y0*y0+y1*y1+y2*y2),len?(len=1/len,y0*=len,y1*=len,y2*=len):(y0=0,y1=0,y2=0),out[0]=x0,out[1]=y0,out[2]=z0,out[3]=0,out[4]=x1,out[5]=y1,out[6]=z1,out[7]=0,out[8]=x2,out[9]=y2,out[10]=z2,out[11]=0,out[12]=-(x0*eyex+x1*eyey+x2*eyez),out[13]=-(y0*eyex+y1*eyey+y2*eyez),out[14]=-(z0*eyex+z1*eyey+z2*eyez),out[15]=1,out)},mat4.str=function(a){return"mat4("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+")"},exports!==void 0&&(exports.mat4=mat4);var quat={},quatIdentity=new Float32Array([0,0,0,1]);if(!GLMAT_EPSILON)var GLMAT_EPSILON=1e-6;quat.create=function(){return new Float32Array(quatIdentity)},quat.clone=vec4.clone,quat.fromValues=vec4.fromValues,quat.copy=vec4.copy,quat.set=vec4.set,quat.identity=function(out){return out[0]=0,out[1]=0,out[2]=0,out[3]=1,out},quat.setAxisAngle=function(out,axis,rad){rad=.5*rad;var s=Math.sin(rad);return out[0]=s*axis[0],out[1]=s*axis[1],out[2]=s*axis[2],out[3]=Math.cos(rad),out},quat.add=vec4.add,quat.mul=quat.multiply=function(out,a,b){var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=b[0],by=b[1],bz=b[2],bw=b[3];return out[0]=ax*bw+aw*bx+ay*bz-az*by,out[1]=ay*bw+aw*by+az*bx-ax*bz,out[2]=az*bw+aw*bz+ax*by-ay*bx,out[3]=aw*bw-ax*bx-ay*by-az*bz,out},quat.scale=vec4.scale,quat.rotateX=function(out,a,rad){rad*=.5;var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=Math.sin(rad),bw=Math.cos(rad);return out[0]=ax*bw+aw*bx,out[1]=ay*bw+az*bx,out[2]=az*bw-ay*bx,out[3]=aw*bw-ax*bx,out},quat.rotateY=function(out,a,rad){rad*=.5;var ax=a[0],ay=a[1],az=a[2],aw=a[3],by=Math.sin(rad),bw=Math.cos(rad);return out[0]=ax*bw-az*by,out[1]=ay*bw+aw*by,out[2]=az*bw+ax*by,out[3]=aw*bw-ay*by,out},quat.rotateZ=function(out,a,rad){rad*=.5;var ax=a[0],ay=a[1],az=a[2],aw=a[3],bz=Math.sin(rad),bw=Math.cos(rad);return out[0]=ax*bw+ay*bz,out[1]=ay*bw-ax*bz,out[2]=az*bw+aw*bz,out[3]=aw*bw-az*bz,out},quat.calculateW=function(out,a){var x=a[0],y=a[1],z=a[2];return out[0]=x,out[1]=y,out[2]=z,out[3]=-Math.sqrt(Math.abs(1-x*x-y*y-z*z)),out},quat.dot=vec4.dot,quat.lerp=vec4.lerp,quat.slerp=function(out,a,b,t){var halfTheta,sinHalfTheta,ratioA,ratioB,ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=b[0],by=b[1],bz=b[2],bw=a[3],cosHalfTheta=ax*bx+ay*by+az*bz+aw*bw;return Math.abs(cosHalfTheta)>=1?(out!==a&&(out[0]=ax,out[1]=ay,out[2]=az,out[3]=aw),out):(halfTheta=Math.acos(cosHalfTheta),sinHalfTheta=Math.sqrt(1-cosHalfTheta*cosHalfTheta),.001>Math.abs(sinHalfTheta)?(out[0]=.5*ax+.5*bx,out[1]=.5*ay+.5*by,out[2]=.5*az+.5*bz,out[3]=.5*aw+.5*bw,out):(ratioA=Math.sin((1-t)*halfTheta)/sinHalfTheta,ratioB=Math.sin(t*halfTheta)/sinHalfTheta,out[0]=ax*ratioA+bx*ratioB,out[1]=ay*ratioA+by*ratioB,out[2]=az*ratioA+bz*ratioB,out[3]=aw*ratioA+bw*ratioB,out))},quat.invert=function(out,a){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],dot=a0*a0+a1*a1+a2*a2+a3*a3,invDot=dot?1/dot:0;return out[0]=-a0*invDot,out[1]=-a1*invDot,out[2]=-a2*invDot,out[3]=a3*invDot,out},quat.conjugate=function(out,a){return out[0]=-a[0],out[1]=-a[1],out[2]=-a[2],out[3]=a[3],out},quat.len=quat.length=vec4.length,quat.sqrLen=quat.squaredLength=vec4.squaredLength,quat.normalize=vec4.normalize,quat.str=function(a){return"quat("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"},exports!==void 0&&(exports.quat=quat)}(shim.exports)})(),function(exports){"use strict";var nxr,__hasProp={}.hasOwnProperty,__extends=function(child,parent){function ctor(){this.constructor=child}for(var key in parent)__hasProp.call(parent,key)&&(child[key]=parent[key]);return ctor.prototype=parent.prototype,child.prototype=new ctor,child.__super__=parent.prototype,child};nxr={},nxr.scene={},nxr.scene.Node=function(){function Node(children){this.children=children||this.noChildren}return Node.prototype.noChildren=[],Node.prototype.acceptVisitor=function(visitor){var child,_i,_len,_ref;for(_ref=this.children,_i=0,_len=_ref.length;_len>_i;_i++)child=_ref[_i],child.acceptVisitor(visitor)},Node.prototype.addChild=function(child){0===this.children.length?this.children=[child]:this.children.push(child)},Node.prototype.removeChild=function(index){var a,b;a=this.children.slice(0,+index+1||9e9),b=this.children.slice(index),this.children=a.concat(b)},Node}(),nxr.webgl={},nxr.scene.concatVisitors=function(a,b){var result;return result=new nxr.scene.Visitors,result.setupVisitors=a.setupVisitors.concat(b.setupVisitors),result.preRenderVisitors=a.preRenderVisitors.concat(b.preRenderVisitors),result.renderVisitors=a.renderVisitors.concat(b.renderVisitors),result.postRenderVisitors=a.postRenderVisitors.concat(b.postRenderVisitors),result.teardownVisitors=a.teardownVisitors.concat(b.teardownVisitors),result},nxr.scene.Visitors=function(){function Visitors(){this.setupVisitors=[],this.preRenderVisitors=[],this.renderVisitors=[],this.postRenderVisitors=[],this.teardownVisitors=[]}return Visitors.prototype.setup=function(scene){var visitor,_i,_len,_ref;for(_ref=this.setupVisitors,_i=0,_len=_ref.length;_len>_i;_i++)visitor=_ref[_i],visitor.visit(scene)},Visitors.prototype.preRender=function(scene){var visitor,_i,_len,_ref;for(_ref=this.preRenderVisitors,_i=0,_len=_ref.length;_len>_i;_i++)visitor=_ref[_i],visitor.visit(scene)},Visitors.prototype.render=function(scene){var visitor,_i,_len,_ref;for(_ref=this.renderVisitors,_i=0,_len=_ref.length;_len>_i;_i++)visitor=_ref[_i],visitor.visit(scene)},Visitors.prototype.postRender=function(scene){var visitor,_i,_len,_ref;for(_ref=this.postRenderVisitors,_i=0,_len=_ref.length;_len>_i;_i++)visitor=_ref[_i],visitor.visit(scene)},Visitors.prototype.teardown=function(scene){var visitor,_i,_len,_ref;for(_ref=this.teardownVisitors,_i=0,_len=_ref.length;_len>_i;_i++)visitor=_ref[_i],visitor.visit(scene)},Visitors}(),nxr.scene.Scene=function(_super){function Scene(visitors){this.visitors=visitors,Scene.__super__.constructor.call(this,null)}return __extends(Scene,_super),Scene.prototype.setup=function(){return this.visitors.setup(this)},Scene.prototype.render=function(){return this.visitors.preRender(this),this.visitors.render(this),this.visitors.postRender(this)},Scene.prototype.teardown=function(){return this.visitors.teardown(this)},Scene}(nxr.scene.Node),nxr.scene.Transformation=function(){function Transformation(matrix){this.matrix=matrix}return Transformation.prototype.acceptVisitor=function(visitor){"function"==typeof visitor.visitTransformation&&visitor.visitTransformation(this)},Transformation.prototype.getMatrix4x4=function(){return this.matrix},Transformation}(),nxr.webgl.SceneVisitors=function(_super){function SceneVisitors(gl){this.gl=gl,this.setupVisitors=[new nxr.webgl.LoadIntoVideoMemoryVisitor(gl)],this.preRenderVisitors=[],this.renderVisitors=[new nxr.webgl.RenderSceneVisitor(gl)],this.postRenderVisitors=[],this.teardownVisitors=[new nxr.webgl.DeleteFromVideoMemoryVisitor(gl)]}return __extends(SceneVisitors,_super),SceneVisitors}(nxr.scene.Visitors),nxr.webgl.Scene=function(_super){function Scene(canvas){var e,message;try{this.gl=canvas.getContext("webgl")}catch(_error){throw e=_error,message="Error creating WebGL context: "+e.toString,alert(message),Error(message)}if(null==this.gl)throw Error("Can't get WebGL context");Scene.__super__.constructor.call(this,new nxr.webgl.SceneVisitors(this.gl))}return __extends(Scene,_super),Scene}(nxr.scene.Scene),nxr.webgl.RenderSceneVisitor=function(){function RenderSceneVisitor(gl){this.gl=gl}return RenderSceneVisitor}(),nxr.webgl.LoadIntoVideoMemoryVisitor=function(){function LoadIntoVideoMemoryVisitor(gl){this.gl=gl}return LoadIntoVideoMemoryVisitor}(),nxr.webgl.DeleteFromVideoMemoryVisitor=function(){function DeleteFromVideoMemoryVisitor(gl){this.gl=gl}return DeleteFromVideoMemoryVisitor.prototype.isInitializingVisitor=function(){return!1},DeleteFromVideoMemoryVisitor.prototype.isDeinitializingVisitor=function(){return!0},DeleteFromVideoMemoryVisitor.prototype.visitVertices=function(){},DeleteFromVideoMemoryVisitor.prototype.visitIndices=function(){},DeleteFromVideoMemoryVisitor.prototype.visitTexture=function(){},DeleteFromVideoMemoryVisitor.prototype.visitPixelShader=function(){},DeleteFromVideoMemoryVisitor.prototype.visitVertexShader=function(){},DeleteFromVideoMemoryVisitor.prototype.visitShaderEffect=function(){},DeleteFromVideoMemoryVisitor.prototype.visitSkyBox=function(){},DeleteFromVideoMemoryVisitor.prototype.visitLodTerrain=function(){},DeleteFromVideoMemoryVisitor.prototype.visitFont=function(){},DeleteFromVideoMemoryVisitor.prototype.visitText=function(){},DeleteFromVideoMemoryVisitor}(),nxr.scene.graph={},nxr.scene.ZRotation=function(_super){function ZRotation(angle){this.angle=angle}return __extends(ZRotation,_super),ZRotation.prototype.acceptVisitor=function(visitor){"function"==typeof visitor.visitZRotation&&visitor.visitZRotation(this),ZRotation.__super__.acceptVisitor.call(this,visitor)
},ZRotation.prototype.getMatrix4x4=function(){return this.matrix},ZRotation}(nxr.scene.Transformation),nxr.scene.YRotation=function(_super){function YRotation(angle){this.angle=angle}return __extends(YRotation,_super),YRotation.prototype.acceptVisitor=function(visitor){"function"==typeof visitor.visitYRotation&&visitor.visitYRotation(this),YRotation.__super__.acceptVisitor.call(this,visitor)},YRotation.prototype.getMatrix4x4=function(){return this.matrix},YRotation}(nxr.scene.Transformation),nxr.scene.XRotation=function(_super){function XRotation(angle){this.angle=angle}return __extends(XRotation,_super),XRotation.prototype.acceptVisitor=function(visitor){"function"==typeof visitor.visitXRotation&&visitor.visitXRotation(this),XRotation.__super__.acceptVisitor.call(this,visitor)},XRotation.prototype.getMatrix4x4=function(){return this.matrix},XRotation}(nxr.scene.Transformation),nxr.scene.buildSphere=function(sphere){return sphere.children.length=0,null},nxr.scene.Sphere=function(_super){function Sphere(position,radius){this.position=position,this.radius=null!=radius?radius:1}return __extends(Sphere,_super),Sphere.prototype.acceptVisitor=function(visitor){null!=visitor.visitSphere?visitor.visitSphere(this):Sphere.__super__.acceptVisitor.call(this,visitor)},Sphere}(nxr.scene.Node),nxr.scene.QuaternionRotation=function(_super){function QuaternionRotation(quaternion){this.quaternion=quaternion}return __extends(QuaternionRotation,_super),QuaternionRotation.prototype.acceptVisitor=function(visitor){"function"==typeof visitor.visitQuaternionRotation&&visitor.visitQuaternionRotation(this),QuaternionRotation.__super__.acceptVisitor.call(this,visitor)},QuaternionRotation.prototype.getMatrix4x4=function(){return this.matrix},QuaternionRotation}(nxr.scene.Transformation),nxr.scene.Model=function(_super){function Model(id,children){this.id=id,Model.__super__.constructor.call(this,children)}return __extends(Model,_super),Model.prototype.acceptVisitor=function(visitor){"function"==typeof visitor.visitModel&&visitor.visitModel(this)},Model}(nxr.scene.Node),nxr.scene.Instance=function(){function Instance(modelId){this.modelId=modelId}return Instance.prototype.acceptVisitor=function(visitor){"function"==typeof visitor.visitInstance&&visitor.visitInstance(this)},Instance}(),nxr.scene.BuildWithPrimitivesVisitor=function(){function BuildWithPrimitivesVisitor(){}return BuildWithPrimitivesVisitor.prototype.visitSphere=function(sphere){return nxr.scene.buildSphere(sphere)},BuildWithPrimitivesVisitor}(),nxr.scene.BoundingBox=function(_super){function BoundingBox(min,max,children){this.min=min,this.max=max,BoundingBox.__super__.constructor.call(this,children)}return __extends(BoundingBox,_super),BoundingBox.prototype.acceptVisitor=function(visitor){"function"==typeof visitor.visitBoundingBox&&visitor.visitBoundingBox(this)},BoundingBox}(nxr.scene.Node),nxr.scene.BoundingSphere=function(_super){function BoundingSphere(center,radius,children){this.center=center,this.radius=radius,BoundingSphere.__super__.constructor.call(this,children)}return __extends(BoundingSphere,_super),BoundingSphere.prototype.acceptVisitor=function(visitor){"function"==typeof visitor.visitBoundingSphere&&visitor.visitBoundingSphere(this)},BoundingSphere}(nxr.scene.Node),exports.nxr=nxr}(window);
//@ sourceMappingURL=dist/nxr-full.map