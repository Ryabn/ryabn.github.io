(this["webpackJsonpryqndev.github.io"]=this["webpackJsonpryqndev.github.io"]||[]).push([[0],{140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(26),s=n.n(r),o=(n(43),n(5)),c=n(27),l=n.n(c),u=(n(50),function(e){var t=e.cur,n=e.set;return a.a.createElement("label",{className:"t-w"},a.a.createElement(l.a,{checked:t,icons:!1,onChange:n.bind(null,!t)}))}),m=(n(51),n(52),n(28)),d=n.n(m),g=n(29),v=n.n(g),f=n(30),h=n.n(f),p=n(31),x=n.n(p),y=[{img:h.a,type:"github",link:"https://github.com/ryqndev"},{img:v.a,type:"twitter",link:"https://twitter.com/ryqndev"},{img:d.a,type:"gmail",link:"mailto:rqyang@uci.edu"},{img:x.a,type:"instagram",link:"https://instagram.com/lotsofsbux"}],w=function(e){return a.a.createElement("a",{className:"icon",style:{backgroundImage:"url('".concat(e.data.img,"')")},"aria-label":e.data.type,href:e.data.link,target:"_blank",rel:"noopener noreferrer"})},b=function(){return y.map((function(e){return a.a.createElement(w,{key:e.type,data:e})}))},S=function(){return a.a.createElement("aside",{className:"s-w"},a.a.createElement("div",{className:"s-c"},a.a.createElement("div",{className:"s-line top"}),a.a.createElement("div",{className:"social"},a.a.createElement(b,null)),a.a.createElement("div",{className:"s-line bottom"})))},E=(n(53),n(54),function(e){var t=e.scroll;return Object(i.useEffect)((function(){document.documentElement.style.setProperty("--scroll-small",t/300),document.documentElement.style.setProperty("--scroll-big",t/-20+"deg")}),[t]),a.a.createElement("header",{className:"h-w"},a.a.createElement("div",{className:"special-square"},a.a.createElement("div",{className:"special-square-inner"},a.a.createElement("div",{className:"h-name front"},"RYAN YANG"))),a.a.createElement("div",{className:"h-name behind"},"RYAN YANG"),a.a.createElement("div",{className:"icon-scroll"},a.a.createElement("div",{className:"mouse"},a.a.createElement("div",{className:"wheel"})),a.a.createElement("div",{className:"icon-arrows"},a.a.createElement("span",null))))}),P=(n(55),n(56),function(e){e.id;var t=e.name,n=e.type,i=e.year,r=e.image;return a.a.createElement("figure",{className:"p-w"},a.a.createElement("div",{className:"p-img-w"},a.a.createElement("div",{className:"item"},a.a.createElement("img",{className:"img",src:r,alt:t+" banner"}),a.a.createElement("img",{className:"img-large",src:r,alt:t+" banner"}))),a.a.createElement("span",null,n," \u29bf ",i),a.a.createElement("h3",null,t),a.a.createElement("p",null," click image to view "))}),I=n(37),k=n(32),z=n(33),C=n.n(z),j=n(7),F=n(34),O=n(1),N=n(147),A=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object(j.a)(this,e),this.container=t,this.itemsWrapper=n,this.initialised=!1,this.camera=null,this.scene=null,this.renderer=null,this.raycaster=new O.g,i.scrollContainer=i.scrollContainer||null,i.duration=i.duration||1,i.timing=i.timing||{},i.timing.type=i.timing.type||"sameEnd",i.timing.props=i.timing.props||{},i.transformation=i.transformation||{},i.transformation.type=i.transformation.type||"none",i.transformation.props=i.transformation.props||{},i.activation=i.activation||{},i.activation.type=i.activation.type||"corners",i.activation.props=i.activation.props||{topLeft:!0},i.seed=i.seed||0,i.randomizeSeed=i.randomizeSeed||null,i.easings=i.easings||{},i.easings.toFullscreen=i.easings.toFullscreen||N.a.easeNone,"string"==typeof i.easings.toFullscreen&&(i.easings.toFullscreen=T(i.easings.toFullscreen)),i.easings.toGrid=i.easings.toGrid||N.a.easeNone,"string"==typeof i.easings.toGrid&&(i.easings.toGrid=T(i.easings.toGrid)),i.debug=i.debug||{},i.debug.activation=i.debug.activation||!1,this.uniforms={uImage:new O.k(null),uImageRes:new O.k(new O.l(1,1)),uImageLarge:new O.k(null),uImageLargeRes:new O.k(new O.l(1,1)),uProgress:new O.k(0),uMeshScale:new O.k(new O.l(1,1)),uPlaneCenter:new O.k(new O.l(0,0)),uViewSize:new O.k(new O.l(1,1)),uScaleToViewSize:new O.k(new O.l(1,1)),uClosestCorner:new O.k(0),uMouse:new O.k(new O.l(0,0)),uSeed:new O.k(0),uDebugActivation:new O.k(!1)},this.options=null,this.setOptions(i,!0),this.textures=[],this.currentImageIndex=-1,this.isFullscreen=!1,this.isAnimating=!1,this.onResize=this.onResize.bind(this),this.reset=this.reset.bind(this)}return Object(F.a)(e,[{key:"setOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=this.options;if(t)return n=e,this.options=n,void(this.initialised&&this.reset());n.scrollContainer=e.scrollContainer||null,n.duration=e.duration||1,n.timing=Object.assign({},e.timing),e.timing?(n.timing.type=e.timing.type||"sameEnd",n.timing.props=Object.assign({},e.timing.props)):(n.timing.type="sameEnd",n.timing.props={}),n.transformation=Object.assign({},e.transformation),e.transformation?(n.transformation.type=e.transformation.type||"none",n.transformation.props=Object.assign({},e.transformation.props)):(n.transformation.type="none",n.transformation.props={}),n.activation=Object.assign({},e.activation),e.activation?(n.activation.type=e.activation.type||"corners",n.activation.props=Object.assign({},e.activation.props),"corners"===n.activation.type&&0===Object.keys(n.activation.props).length&&(n.activation.props.topLeft=!0)):(n.activation.type="corners",n.activation.props={topLeft:!0}),n.seed=e.seed||0,n.randomizeSeed=e.randomizeSeed||null,n.easings={},e.easings?(n.easings.toFullscreen=e.easings.toFullscreen||N.a.easeNone,"string"==typeof e.easings.toFullscreen&&(n.easings.toFullscreen=T(e.easings.toFullscreen)),n.easings.toGrid=e.easings.toGrid||N.a.easeNone,"string"==typeof e.easings.toGrid&&(n.easings.toGrid=T(e.easings.toGrid))):(n.easings.toFullscreen=N.a.easeNone,n.easings.toGrid=N.a.easeNone),n.debug={},e.debug?n.debug.activation=e.debug.activation||!1:n.debug.activation=!1,this.uniforms.uSeed.value=n.seed,this.uniforms.uDebugActivation.value=n.debug.activation,this.options=n,this.initialised&&this.reset()}},{key:"createTextures",value:function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n],a=new O.j(i.large.image);a.generateMipmaps=!1,a.wrapS=a.wrapT=O.a,a.minFilter=O.c,a.needsUpdate=!0;var r=new O.j(i.small.image);r.generateMipmaps=!1,r.wrapS=r.wrapT=O.a,r.minFilter=O.c,r.needsUpdate=!0;var s={large:{element:i.large.element,texture:a},small:{element:i.small.element,texture:r}};t.push(s)}this.textures=t,this.setCurrentTextures()}},{key:"setCurrentTextures",value:function(){if(-1!==this.currentImageIndex){var e=this.textures[this.currentImageIndex];e&&(this.uniforms.uImage.value=e.small.texture,this.uniforms.uImageRes.value.x=e.small.texture.image.naturalWidth,this.uniforms.uImageRes.value.y=e.small.texture.image.naturalHeight,this.uniforms.uImageLarge.value=e.large.texture,this.uniforms.uImageLargeRes.value.x=e.large.texture.image.naturalWidth,this.uniforms.uImageLargeRes.value.y=e.large.texture.image.naturalHeight,this.isAnimating||this.render())}}},{key:"init",value:function(){var e=this;this.renderer=new O.m({alpha:!0,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.prepend(this.renderer.domElement),this.scene=new O.h,this.camera=new O.e(45,window.innerWidth/window.innerHeight,.1,1e4),this.camera.position.z=50,this.camera.lookAt=this.scene.position;var t=this.getViewSize();this.uniforms.uViewSize.value=new O.l(t.width,t.height);var n=new O.f(1,1,128,128),i=this.getShaders(),a=new O.i({uniforms:this.uniforms,vertexShader:i.vertex,fragmentShader:i.fragment,side:O.b});this.mesh=new O.d(n,a),this.scene.add(this.mesh),window.addEventListener("resize",this.onResize),this.options.scrollContainer&&this.options.scrollContainer.addEventListener("scroll",(function(t){e.recalculateUniforms(t),e.render()}));for(var r=0;r<this.itemsWrapper.children.length;r++){this.itemsWrapper.children[r].children[0].addEventListener("mousedown",this.createOnMouseDown(r))}this.initialised=!0}},{key:"reset",value:function(){var e=this.getShaders();this.mesh.material.vertexShader=e.vertex,this.mesh.material.fragmentShader=e.fragment,this.mesh.material.needsUpdate=!0,this.render()}},{key:"getShaders",value:function(){var e={transform:this.options.transformation,activation:this.options.activation,timing:this.options.timing},t=this.options.transformation,n="";U(t.type)?n=t.type(e):null!=t.type&&(n=G[t.type](t.props,e));var i=this.options.activation,a="";U(i.type)?a=i.type(e):null!=i.type&&(a=M[i.type](i.props,e));var r=this.options.timing,s="";U(s.type)?s=r.type():null!=r.type&&(s=R[r.type](r.props,e));var o=this.createVertexShader({activation:a,transformation:n,timing:s});return{fragment:this.createFragmentShader(),vertex:o}}},{key:"createOnMouseDown",value:function(e){var t=this;return function(n){t.currentImageIndex=e,"itemUnique"===t.options.randomizeSeed&&(t.uniforms.uSeed.value=1e3*e),t.options.onItemClick&&t.options.onItemClick(e),t.recalculateUniforms(n),t.setCurrentTextures(),t.toFullscreen()}}},{key:"toGrid",value:function(){var e=this;this.isFullscreen&&!this.isAnimating&&(this.isAnimating=!0,this.options.onToGridStart&&this.options.onToGridStart({index:this.currentImageIndex}),"InOutUnique"!==this.options.randomizeSeed&&"tweenUnique"!==this.options.randomizeSeed||(this.uniforms.uSeed.value=Math.floor(1e4*Math.random())),this.tween=N.b.to(this.uniforms.uProgress,this.options.duration,{value:0,ease:this.options.easings.toGrid,onUpdate:function(){e.options.onProgressTween&&e.options.onProgressTween(e.uniforms.uProgress.value),e.render()},onComplete:function(){e.isAnimating=!1,e.isFullscreen=!1,e.tween=null,e.itemsWrapper.style.zIndex=400,e.container.style.zIndex=-2,e.render(),e.options.onToGridFinish&&e.options.onToGridFinish({index:-1,lastIndex:e.currentImageIndex})}}))}},{key:"calculateMouse",value:function(e){var t=this.itemsWrapper.children[this.currentImageIndex].children[0].getBoundingClientRect(),n={x:(e.clientX-t.left)/t.width,y:1-(e.clientY-t.top)/t.height};this.uniforms.uMouse.value=new O.l(n.x,n.y)}},{key:"recalculateUniforms",value:function(e){if(-1!==this.currentImageIndex){var t=this.itemsWrapper.children[this.currentImageIndex].children[0].getBoundingClientRect(),n={x:(e.clientX-t.left)/t.width,y:1-(e.clientY-t.top)/t.height},i=2*(t.left>window.innerWidth-(t.left+t.width))+(t.top>window.innerHeight-(t.top+t.height));this.uniforms.uClosestCorner.value=i,this.uniforms.uMouse.value=new O.l(n.x,n.y);var a=this.getViewSize(),r=t.width*a.width/window.innerWidth,s=t.height*a.height/window.innerHeight,o=t.left*a.width/window.innerWidth-a.width/2,c=t.top*a.height/window.innerHeight-a.height/2,l=this.mesh;l.scale.x=r,l.scale.y=s;var u=o+r/2,m=-c-s/2;l.position.x=u,l.position.y=m,this.uniforms.uPlaneCenter.value.x=u/r,this.uniforms.uPlaneCenter.value.y=m/s,this.uniforms.uMeshScale.value.x=r,this.uniforms.uMeshScale.value.y=s,this.uniforms.uScaleToViewSize.value.x=a.width/r-1,this.uniforms.uScaleToViewSize.value.y=a.height/s-1}}},{key:"forceInitializePlane",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.currentImageIndex=e,this.recalculateUniforms({clientX:window.innerWidth/2,clientY:window.innerHeight}),this.setCurrentTextures()}},{key:"toFullscreen",value:function(){var e=this;this.isFullscreen||this.isAnimating||(this.isAnimating=!0,this.itemsWrapper.style.zIndex=400,this.container.style.zIndex=400,this.options.onToFullscreenStart&&this.options.onToFullscreenStart({index:this.currentImageIndex}),this.tween=N.b.to(this.uniforms.uProgress,this.options.duration,{value:1,ease:this.options.easings.toFullscreen,onUpdate:function(){e.options.onProgressTween&&e.options.onProgressTween(e.uniforms.uProgress.value),e.render()},onComplete:function(){e.isAnimating=!1,e.isFullscreen=!0,e.tween=null,e.options.onToFullscreenFinish&&e.options.onToFullscreenFinish({index:e.currentImageIndex})}}))}},{key:"getViewSize",value:function(){var e=this.camera.fov*Math.PI/180,t=Math.abs(this.camera.position.z*Math.tan(e/2)*2);return{width:t*this.camera.aspect,height:t}}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"onResize",value:function(e){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.currentImageIndex>-1&&(this.recalculateUniforms(e),this.render())}},{key:"createVertexShader",value:function(e){var t=e.activation,n=e.transformation,i=e.timing;return"\n      ".concat(L,"\n      ").concat(q,"\n      ").concat(t,"\n  float linearStep(float edge0, float edge1, float val) {\n      float x = clamp( (val  - edge0) / (edge1 - edge0),0.,1.);\n          return x;\n  }\n  mat2 rotate2d(float _angle){\n      return mat2(cos(_angle),-sin(_angle),\n                  sin(_angle),cos(_angle));\n  }\n      void main(){\n        vec3 pos = position.xyz;\n        vec2 newUV = uv;\n        float activation = getActivation(uv);\n        float vertexProgress = uProgress;\n        ").concat(i,"\n          vec3 transformedPos = pos;\n          vec2 transformedUV = uv;\n          ").concat(n,"\n          pos = transformedPos;\n          newUV = transformedUV;\n          scale = vec2(\n            1. + uScaleToViewSize * vertexProgress\n          );\n          pos.xy *= scale;\n          pos.y += -uPlaneCenter.y * vertexProgress;\n          pos.x += -uPlaneCenter.x * vertexProgress;\n          pos.z += vertexProgress;\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n          vProgress = vertexProgress;\n          vActivation = activation;\n        vUv = newUV;\n      }\n  ")}},{key:"createFragmentShader",value:function(){return"\n      uniform float uProgress;\n      uniform sampler2D uImage;\n      uniform vec2 uImageRes;\n      uniform sampler2D uImageLarge;\n      uniform vec2 uImageLargeRes;\n      uniform vec2 uMeshScale;\n      uniform bool uDebugActivation;\n      varying vec2 vUv;\n      varying float vProgress;\n      varying vec2 scale;\n      varying float vActivation;\n      vec2 preserveAspectRatioSlice(vec2 uv, vec2 planeSize, vec2 imageSize ){\n          vec2 ratio = vec2(\n              min((planeSize.x / planeSize.y) / (imageSize.x / imageSize.y), 1.0),\n              min((planeSize.y / planeSize.x) / (imageSize.y / imageSize.x), 1.0)\n          );\n          vec2 sliceUvs = vec2(\n              uv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n              uv.y * ratio.y + (1.0 - ratio.y) * 0.5\n          );\n          return sliceUvs;\n      }\n      void main(){\n          vec2 uv = vUv;\n          vec2 scaledPlane = uMeshScale * scale;\n          vec2 smallImageUV = preserveAspectRatioSlice(uv, scaledPlane, uImageRes);\n          vec3 color = texture2D(uImage,smallImageUV).xyz;\n          if(vProgress > 0.){\n            vec2 largeImageUV = preserveAspectRatioSlice(uv, scaledPlane, uImageLargeRes);\n            color = mix(color,texture2D(uImageLarge,largeImageUV).xyz, vProgress );\n          }\n          if(uDebugActivation){\n            color = vec3(vActivation);\n          }\n          gl_FragColor = vec4(color,1.);\n      }\n  "}}]),e}();function T(e){var t=e.indexOf("."),n=e.substring(0,t),i=e.substring(t+1),a=window.com.greensock.easing[n];if(!a)return N.a.easeNone;var r=a[i];return r||a.easeIn}function U(e){return e&&"[object Function]"==={}.toString.call(e)}var R={sameEnd:function(e){var t=V(e.latestStart||.5),n="vertexProgress = smoothstep(startAt,1.,uProgress)";return e.reverse&&(n="vertexProgress = smoothstep(0., 1.- startAt, uProgress)"),"\n        float startAt = activation * ".concat(t,";\n        ").concat(n,";\n      ")},sections:function(e){var t=V(e.sections||1);return" \n          // Vertex end by parts\n          float activationPart = 1./".concat(t,";\n          float activationPartDuration = 1./(").concat(t,"+1.);\n  \n          float progressStart = (activation / activationPart) * activationPartDuration;\n          float progressEnd = min(progressStart + activationPartDuration,1.);\n          vertexProgress = linearStep(progressStart,progressEnd,uProgress);\n        ")}},M={closestCorner:function(){return"\n        float getActivation(vec2 uv){\n  \n          float y = mod(uClosestCorner,2.) *2. -1.;\n          float x = (floor(uClosestCorner /2.)*2.-1.)*-1.;\n  \n          float xAct = abs(min(0.,x)) + uv.x * x;\n          float yAct = abs(min(0.,y)) + uv.y * y;\n  \n          return (xAct+yAct)/2.;\n        }\n      "}};function V(e){var t=e.toString();return-1===t.indexOf(".")&&(t+="."),t}var W,G={simplex:function(e){var t=V(e.amplitudeX||.2),n=V(e.amplitudeY||.2),i=V(e.frequencyX||.3),a=V(e.frequencyY||.3),r=V(e.progressLimit||.5);return"\n        float simplexProgress = min(clamp((vertexProgress) / ".concat(r,",0.,1.),clamp((1.-vertexProgress) / (1.-").concat(r,"),0.,1.));\n        simplexProgress = smoothstep(0.,1.,simplexProgress);\n        float noiseX = snoise(vec2(transformedPos.x +uSeed, transformedPos.y + uSeed + simplexProgress * 1.) * ").concat(i," ) ;\n        float noiseY = snoise(vec2(transformedPos.y +uSeed, transformedPos.x + uSeed + simplexProgress * 1.) * ").concat(a,") ;\n        transformedPos.x += ").concat(t," * noiseX * simplexProgress;\n        transformedPos.y += ").concat(n," * noiseY * simplexProgress;\n    ")}},L="\n      uniform float uProgress;\n      uniform vec2 uScaleToViewSize;\n      uniform vec2 uPlaneCenter;\n      uniform vec2 uMeshScale;\n      uniform vec2 uMouse;\n      uniform vec2 uViewSize;\n  \n      uniform float uClosestCorner;\n  \n      // Option Uniforms\n      uniform float uSeed;\n      varying vec2 vUv;\n      varying vec2 scale; \n      varying float vProgress;\n      varying float vActivation;\n  \n  ",q="\n  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }\n  \n  float snoise(vec2 v){\n    const vec4 C = vec4(0.211324865405187, 0.366025403784439,\n             -0.577350269189626, 0.024390243902439);\n    vec2 i  = floor(v + dot(v, C.yy) );\n    vec2 x0 = v -   i + dot(i, C.xx);\n    vec2 i1;\n    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n    vec4 x12 = x0.xyxy + C.xxzz;\n    x12.xy -= i1;\n    i = mod(i, 289.0);\n    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),\n      dot(x12.zw,x12.zw)), 0.0);\n    m = m*m ;\n    m = m*m ;\n    vec3 x = 2.0 * fract(p * C.www) - 1.0;\n    vec3 h = abs(x) - 0.5;\n    vec3 ox = floor(x + 0.5);\n    vec3 a0 = x - ox;\n    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n    vec3 g;\n    g.x  = a0.x  * x0.x  + h.x  * x0.y;\n    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n    return 130.0 * dot(m, g);\n  }\n  ",D=A;var Y={load:function(e,t){var n=function(e,t){var n=Object(I.a)(document.body.querySelectorAll("img:not(.img-large)")),i=document.getElementById("ps-c");return(W=new D(i,document.getElementById("ps-project"),{scrollContainer:window,onToFullscreenFinish:function(e){e.index},onToGridStart:function(e){var n=e.index;t(n)},onProgressChange:function(e){var t=e.index,i=e.progress>0?0:1;n[t].style.opacity=i},onToFullscreenStart:function(t){var i=t.index;e(i),n[i].style.opacity=0},onToGridFinish:function(e){var t=e.lastIndex;n[t].style.opacity=1},duration:.75,timing:{type:"sameEnd"},activation:{type:"closestCorner",props:{onMouse:!0}},transformation:{type:"simplex",props:{seed:"8000",frequency:.1,amplitude:1}}})).init(),W.forceInitializePlane(0),W}(e,t);C()(document.querySelectorAll("img"),(function(e){for(var t=[],i=0,a={};i<e.elements.length;i++){var r={element:e.elements[i],image:e.images[i].isLoaded?e.images[i].img:null};i%2===0?a={small:r}:t.push(Object(k.a)({},a,{large:r}))}n.createTextures(t)}))},toggle:function(){W.isAnimating||(W.isFullscreen&&W.toGrid(),W.isFullscreen||W.toFullscreen())}},H=(n(58),n(10)),_=n.n(H),B=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){fetch("https://raw.githubusercontent.com/ryqndev/boba-watch/master/README.md").then((function(e){return e.text()})).then((function(e){r(e)}))}),[]),a.a.createElement("div",null,a.a.createElement(_.a,{source:n,className:"bwatch-w"}))},X=(n(140),function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){fetch("https://raw.githubusercontent.com/ryqndev/Intro-To-Web-Dev/master/readme.md").then((function(e){return e.text()})).then((function(e){r(e)}))}),[]),a.a.createElement("div",null,a.a.createElement(_.a,{source:n,className:"learn-ryqn-dev-w"}))}),J=n(35),$=n.n(J),K=n(36),Q=n.n(K),Z=[{id:"boba-watch",name:"Boba Watch",type:"Progressive Web App",year:2018,image:$.a,content:a.a.createElement(B,null)},{id:"intro-to-web-dev",name:"Intro to Web Dev",type:"Coding Tutorials",year:2019,image:Q.a,content:a.a.createElement(X,null)}],ee=(Z.length,n(141),function(){var e=Object(i.useRef)(null),t=function(t){e.current.scrollTo({top:0}),l(t)},n=function(t){e.current.scrollTo({top:0,behavior:"smooth"}),e.current.children[0].style.top=0},r=Object(i.useState)(0),s=Object(o.a)(r,2),c=s[0],l=s[1];Object(i.useEffect)((function(){Y.load(t,n)}),[]),Object(i.useEffect)((function(){var t=e.current;return t.addEventListener("wheel",u),function(){t.removeEventListener("wheel",u)}}),[e]);var u=function(){e.current.children[0].style.top=.8*e.current.scrollTop+"px"};return a.a.createElement("section",null,a.a.createElement("div",{id:"ps-c",onClick:Y.toggle,ref:e},a.a.createElement("article",{id:"ps-p-description"},Z[c].content)),a.a.createElement("div",{className:"ps-w"},a.a.createElement("div",{className:"ps-h"},a.a.createElement("h2",null,"Projects")),a.a.createElement("div",{id:"ps-project"},Z.map((function(e){return a.a.createElement(P,Object.assign({expand:!1,key:e.id},e))})))))}),te=(n(142),n(143),function(){return a.a.createElement("footer",{className:"f-w"},a.a.createElement("div",{className:"f-bg"},"ryan yang"),a.a.createElement("div",{className:"made-with"},"Made with ",a.a.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f")," at UCI on sbux ",a.a.createElement("span",{role:"img","aria-label":"coffee"},"\u2615")," & boba"))}),ne=function(e,t){document.documentElement.style.setProperty(e,t)},ie=function(e){e?(ne("--dark-mode","1"),ne("--background-color","#151515"),ne("--background-color-alt","#ffffff"),ne("--background-emphasis","#000000"),ne("--text-color","#ffffff"),ne("--text-color-alt","#000000"),ne("--emphasis-text","#ffffff"),ne("--accent-color","#ff00ff"),ne("--accent-color-alt","#00ffff"),ne("--emphasis-shadow","#ff00ff")):(ne("--dark-mode","0"),ne("--background-color","#ffeeee"),ne("--background-color-alt","#151515"),ne("--background-emphasis","#ffbbbb"),ne("--text-color","#000000"),ne("--text-color-alt","#ffeeee"),ne("--emphasis-text","#ff9999"),ne("--accent-color","#ff00ff"),ne("--accent-color-alt","#00ffff"),ne("--emphasis-shadow","#000000"))},ae=(n(144),function(){var e=Object(i.useState)(!0),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(i.useState)(0),c=Object(o.a)(s,2),l=c[0],m=c[1],d=Object(i.useRef)(m),g=Object(i.useRef)(null);return Object(i.useEffect)((function(){ie(n)}),[n]),Object(i.useEffect)((function(){var e=g.current,t=function(){d.current(e.scrollTop)};return t(),e.addEventListener("scroll",t),function(){e.removeEventListener("scroll",t)}}),[]),a.a.createElement("div",{id:"w",ref:g},a.a.createElement(u,{cur:n,set:r}),a.a.createElement(S,null),a.a.createElement(E,{scroll:l}),a.a.createElement(ee,null),a.a.createElement(te,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},28:function(e,t,n){e.exports=n.p+"static/media/gmail.2382b9b0.svg"},29:function(e,t,n){e.exports=n.p+"static/media/twitter.912b7273.svg"},30:function(e,t,n){e.exports=n.p+"static/media/github.d8e2822a.svg"},31:function(e,t,n){e.exports=n.p+"static/media/instagram.ce41af6a.svg"},35:function(e,t,n){e.exports=n.p+"static/media/boba_watch.86dab07c.png"},36:function(e,t,n){e.exports=n.p+"static/media/webdev.3dc93cf7.jpeg"},38:function(e,t,n){e.exports=n(145)},43:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){}},[[38,1,2]]]);
//# sourceMappingURL=main.df30c0c3.chunk.js.map