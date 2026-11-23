(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,634531,e=>{"use strict";var t=e.i(190072),r=e.i(360263);let i=t.cE,s=new t.as,o=new t.as;function a(e,t,r,a,l,n){let h=e.rig.bones,u=h[`clav${t}`],d=h[`arm${t}`],c=h[`fore${t}`],f=h[`hand${t}`],p=c.position.length(),g=f.position.length(),m=d.getWorldPosition(new i),v=r.clone().sub(m),b=Math.min(Math.max(v.length(),.08),(p+g)*.995),M=v.normalize(),x=a.clone().sub(m);x.addScaledVector(M,-x.dot(M)),1e-6>x.lengthSq()&&x.set(0,-1,0).addScaledVector(M,-M.y),x.normalize();let T=Math.acos(Math.min(1,Math.max(-1,(p*p+b*b-g*g)/(2*p*b)))),w=m.clone().addScaledVector(M,Math.cos(T)*p).addScaledVector(x,Math.sin(T)*p);u.getWorldQuaternion(s).invert();let S=w.clone().sub(m).normalize().applyQuaternion(s);o.setFromUnitVectors(c.position.clone().normalize(),S),d.quaternion.slerp(o,n),d.updateMatrixWorld(!0);let _=c.getWorldPosition(new i);d.getWorldQuaternion(s).invert();let C=r.clone().sub(_).normalize().applyQuaternion(s);o.setFromUnitVectors(f.position.clone().normalize(),C),c.quaternion.slerp(o,n),c.updateMatrixWorld(!0);let P=e.rig.frame,y=P.handTipL.clone().sub(P.joints.handL).normalize();"R"===t&&(y.x=-y.x),c.getWorldQuaternion(s).invert(),o.setFromUnitVectors(y,l.clone().normalize().applyQuaternion(s)),f.quaternion.slerp(o,n),f.updateMatrixWorld(!0)}let l=(e,t,r,s)=>e.group.localToWorld(new i(t,r,s));function n(e,t){let r=e.rig.frame.torso;if(t<r[0][0]||t>r[r.length-1][0])return null;for(let e=1;e<r.length;e++){let[i,s,o,a]=r[e];if(t<=i){let[l,n,h,u]=r[e-1],d=(t-l)/Math.max(1e-6,i-l);return{rx:n+(s-n)*d,rz:h+(o-h)*d,oz:u+(a-u)*d}}}return null}function h(e,t){let r=e.rig.frame.joints,i=e.rig.bones;return t>=r.neck.y?i.neck:t>=r.chest.y?i.chest:t>=r.spine.y?i.spine:i.hips}function u(e,t,r,s){var o;let a,l=n(e,r),u=Math.max(-.92,Math.min(.92,t/l.rx)),d=l.oz-l.rz*Math.sqrt(1-u*u)-s;return(a=h(e,(o=new i(u*l.rx,r,d)).y)).localToWorld(o.clone().sub(e.rig.frame.joints[a.name]))}function d(e,t,r){let i,s,o,a,l=(i=e.rig.frame.joints,o=(s=e.rig.bones.chest).worldToLocal(t.clone()).add(i.chest),(a=h(e,o.y))!==s&&(o=(s=a).worldToLocal(t.clone()).add(i[s.name])),o),u=n(e,l.y);if(u&&(l.x/(u.rx+r))**2+((l.z-u.oz)/(u.rz+r))**2<1)return!0;let d=e.rig.frame.head,c=e.rig.bones.head.worldToLocal(t.clone()).add(e.rig.frame.joints.head).sub(d.center);return(c.x/(d.r.x+r))**2+(c.y/(d.r.y+r))**2+(c.z/(d.r.z+r))**2<1}function c(e,t,r,s,o){let h=t.rig.frame.joints,c=e.rig.frame.joints,f=e.rig.bones,p=.024-.008*s;for(let s of["L","R"]){let g,m,v="L"===s?1:-1;"low"===r?(m="L"===s?h.spine.y+.05:h.armL.y-.15,g=("L"===s?-.62:.55)*n(t,m).rx):(m=t.rig.frame.collarY-.075,g=-(.42*v)*n(t,m).rx);let b=[f[`arm${s}`],f[`fore${s}`],f[`hand${s}`]].map(e=>e.quaternion.clone()),M="low"===r?.6:.5,x="low"===r?-.35:.22,T=0;for(let n=0;n<7;n++){let n=u(t,g,m,p+T),h=u(t,0,m-.035,p+T).sub(n),w=l(e,v*M,c.armL.y+x,"low"===r?-.15:.05);[f[`arm${s}`],f[`fore${s}`],f[`hand${s}`]].forEach((e,t)=>e.quaternion.copy(b[t])),f[`arm${s}`].updateMatrixWorld(!0),a(e,s,n,w,h,o);let S=function(e,t,r){let s=e.rig.bones,o=s[`arm${t}`].getWorldPosition(new i),a=s[`fore${t}`].getWorldPosition(new i),l=s[`hand${t}`].getWorldPosition(new i);for(let e of[.35,.55,.75,1])if(d(r,o.clone().lerp(a,e),.04))return"arm";for(let e of[.15,.35,.55])if(d(r,a.clone().lerp(l,e),.04))return"fore";for(let e of[.72,.86])if(d(r,a.clone().lerp(l,e),.032))return"wrist";return null}(e,s,t);if(!S||o<.999)break;"wrist"===S?T+=.012:(M+=.25,x+="low"===r?-.12:.14,"fore"===S&&(T+=.006))}}}e.s(["d",0,function(e,t,i,s){e.group.updateWorldMatrix(!0,!0),t.group.updateWorldMatrix(!0,!0);let o=(0,r.l)(.05,.85,s),a=(0,r.l)(1.1,1.7,s)*(.75+.25*Math.sin(1.7*s)),l=i?e:t,n=i?t:e;c(l,n,"low",a,o),c(n,l,"high",a,o)},"Y",0,function(e,t,r,s=0){if(r<=0)return;e.group.updateWorldMatrix(!0,!0),t.group.updateWorldMatrix(!0,!0);let o=e.rig.bones.armL.getWorldPosition(new i),l=t.rig.bones.armR.getWorldPosition(new i),n=new i(0,0,1).applyQuaternion(e.group.quaternion).add(new i(0,0,1).applyQuaternion(t.group.quaternion)).setY(0).normalize(),h=l.clone().sub(o).setY(0).normalize(),u=new i(0,-1,0),d=e.rig.bones.foreL.position.length()+e.rig.bones.handL.position.length(),c=o.clone().lerp(l,.5);c.y=Math.min(o.y,l.y)-.9*d,c.addScaledVector(n,.1+.05*Math.sin(s));let f=c.clone().addScaledVector(h,-.015).addScaledVector(n,-.012),p=c.clone().addScaledVector(h,.015).addScaledVector(n,.022),g=u.clone().addScaledVector(h,.3).addScaledVector(n,.12),m=u.clone().addScaledVector(h,-.38).addScaledVector(n,-.1),v=o.clone().addScaledVector(n,-.45).add(new i(0,-.3,0)).addScaledVector(h,-.05),b=l.clone().addScaledVector(n,-.45).add(new i(0,-.3,0)).addScaledVector(h,.05);a(e,"L",f,v,g,r),a(t,"R",p,b,m,r)},"E",0,function(e,t){let r=new i(Math.sin(t),0,Math.cos(t)),s=new i(-Math.cos(t),0,Math.sin(t));return e.group.position.clone().addScaledVector(r,.27).addScaledVector(s,.085)},"e",0,a])},959293,e=>{"use strict";e.s(["f",0,function(){let e={move:{x:0,y:0},yaw:0,pitch:.12,looking:!1},t=new Set,r=()=>{let r=(t.has("d")||t.has("arrowright")?1:0)-(t.has("a")||t.has("arrowleft")?1:0),i=(t.has("w")||t.has("arrowup")?1:0)-(t.has("s")||t.has("arrowdown")?1:0),s=Math.hypot(r,i)||1;e.move={x:r/s,y:i/s}},i=e=>{e.target?.closest?.("textarea,input")||(t.add(e.key.toLowerCase()),r())},s=e=>{t.delete(e.key.toLowerCase()),r()};return window.addEventListener("keydown",i),window.addEventListener("keyup",s),{...e,get move(){return e.move},set move(t){e.move=t},get yaw(){return e.yaw},set yaw(t){e.yaw=t},get pitch(){return e.pitch},set pitch(t){e.pitch=Math.max(-.35,Math.min(.75,t))},get looking(){return e.looking},set looking(t){e.looking=t},dispose(){window.removeEventListener("keydown",i),window.removeEventListener("keyup",s)}}}])},95005,e=>{"use strict";var t=e.i(190072);e.s(["f",0,function(){let e=new t.C9,r=new t.kE(new t.e0(.075,.26,18,1,!0),new t.aV({color:"#efe3cf",roughness:.8,side:t.Vs}));r.rotation.x=Math.PI,r.position.y=.1,e.add(r);let i=new t.aV({color:"#b8283c",roughness:.55}),s=new t.aV({color:"#3f6a3a",roughness:.7});for(let r=0;r<12;r++){let o=r/12*Math.PI*3.236,a=.02+r%4*.014,l=new t.kE(new t.Gu(.024,10,8),i);if(l.scale.y=.8,l.position.set(Math.cos(o)*a,.25+r%3*.012,Math.sin(o)*a),e.add(l),r%3==0){let r=new t.kE(new t.Gu(.02,6,4),s);r.scale.set(1,.3,1.8),r.position.set(.07*Math.cos(o),.22,.07*Math.sin(o)),e.add(r)}}return e}])},224518,e=>{"use strict";var t=e.i(408560),r=e.i(190072);let i={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var s=r;class o{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let a=new s.Sc(-1,1,1,-1,0,1);class l extends s.ld{constructor(){super(),this.setAttribute("position",new s.ki([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new s.ki([0,2,0,0,2,0],2))}}let n=new l;class h{constructor(e){this._mesh=new s.kE(n,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,a)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class u extends o{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof r.Zg?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=r.SP.clone(e.uniforms),this.material=new r.Zg({name:void 0!==e.name?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new h(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class d extends o{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){let i,s,o=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0),this.inverse?(i=0,s=1):(i=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),a.buffers.stencil.setFunc(o.ALWAYS,i,0xffffffff),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(o.EQUAL,1,0xffffffff),a.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),a.buffers.stencil.setLocked(!0)}}class c extends o{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class f{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),void 0===t){let i=e.getSize(new r.wq);this._width=i.width,this._height=i.height,(t=new r.qL(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:r.HN})).texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new u(i),this.copyPass.material.blending=r.A1,this.timer=new r.US}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),void 0===e&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),r=!1;for(let t=0,i=this.passes.length;t<i;t++){let i=this.passes[t];if(!1!==i.enabled){if(i.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),i.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),i.needsSwap){if(r){let t=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(t.NOTEQUAL,1,0xffffffff),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(t.EQUAL,1,0xffffffff)}this.swapBuffers()}void 0!==d&&(i instanceof d?r=!0:i instanceof c&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let t=this.renderer.getSize(new r.wq);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class p extends o{constructor(e,t,i=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new r.Es}render(e,t,r){let i,s,o=e.autoClear;e.autoClear=!1,null!==this.overrideMaterial&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),null!==this.clearColor&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),null!==this.clearAlpha&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),!0==this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),!0===this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),null!==this.clearColor&&e.setClearColor(this._oldClearColor),null!==this.clearAlpha&&e.setClearAlpha(i),null!==this.overrideMaterial&&(this.scene.overrideMaterial=s),e.autoClear=o}}let g={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new r.Es(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class m extends o{constructor(e,t=1,s,o){super(),this.strength=t,this.radius=s,this.threshold=o,this.resolution=void 0!==e?new r.wq(e.x,e.y):new r.wq(256,256),this.clearColor=new r.Es(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);this.renderTargetBright=new r.qL(a,l,{type:r.HN,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new r.qL(a,l,{type:r.HN,depthBuffer:!1});t.texture.name="UnrealBloomPass.h"+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let i=new r.qL(a,l,{type:r.HN,depthBuffer:!1});i.texture.name="UnrealBloomPass.v"+e,i.texture.generateMipmaps=!1,this.renderTargetsVertical.push(i),a=Math.round(a/2),l=Math.round(l/2)}this.highPassUniforms=r.SP.clone(g.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new r.Zg({uniforms:this.highPassUniforms,vertexShader:g.vertexShader,fragmentShader:g.fragmentShader}),this.separableBlurMaterials=[];let n=[6,10,14,18,22];a=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(n[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new r.wq(1/a,1/l),a=Math.round(a/2),l=Math.round(l/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.uniforms.bloomFactors.value=[1,.8,.6,.4,.2],this.bloomTintColors=[new r.cE(1,1,1),new r.cE(1,1,1),new r.cE(1,1,1),new r.cE(1,1,1),new r.cE(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=r.SP.clone(i.uniforms),this.blendMaterial=new r.Zg({uniforms:this.copyUniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,premultipliedAlpha:!0,blending:r.tq,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new r.Es,this._oldClearAlpha=1,this._basic=new r.p$,this._fsQuad=new h(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(i,s),this.renderTargetsVertical[e].setSize(i,s),this.separableBlurMaterials[e].uniforms.invSize.value=new r.wq(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,r,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let t=0;t<this.nMips;t++)this._fsQuad.material=this.separableBlurMaterials[t],this.separableBlurMaterials[t].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[t].uniforms.direction.value=m.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[t]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[t].uniforms.colorTexture.value=this.renderTargetsHorizontal[t].texture,this.separableBlurMaterials[t].uniforms.direction.value=m.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[t]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[t];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?e.setRenderTarget(null):e.setRenderTarget(r),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);let s=[],o=[];for(let r=1;r<e;r+=2){let i=t[r],a=r+1<e?t[r+1]:0,l=i+a;s.push((r*i+(r+1)*a)/l),o.push(l)}return new r.Zg({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new r.wq(.5,.5)},direction:{value:new r.wq(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:o}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new r.Zg({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}m.BlurDirectionX=new r.wq(1,0),m.BlurDirectionY=new r.wq(0,1);let v={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class b extends o{constructor(){super(),this.isOutputPass=!0,this.uniforms=r.SP.clone(v.uniforms),this.material=new r.or({name:v.name,uniforms:this.uniforms,vertexShader:v.vertexShader,fragmentShader:v.fragmentShader}),this._fsQuad=new h(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},r.v0.getTransfer(this._outputColorSpace)===r.W7&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===r.N9?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===r.Gr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===r.d4?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===r.c2?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===r.Li?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===r.x8?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===r.lG&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),!0===this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}e.s(["f",0,function(e,i="high"){let s=new t.T({antialias:"high"===i,powerPreference:"high-performance"}),o="function"==typeof window.matchMedia&&window.matchMedia("(pointer: coarse)").matches;s.setPixelRatio(Math.min(window.devicePixelRatio,"high"===i?o?1.6:2:1.25)),s.setSize(e.clientWidth,e.clientHeight),s.outputColorSpace=r.nj,s.toneMapping=r.c2,s.toneMappingExposure=1,s.shadowMap.enabled="high"===i,s.shadowMap.type=r.i8,e.appendChild(s.domElement);let a=new r.P6;a.fog=new r.IM("#0b1226",.022);let l=new r.zm(42,e.clientWidth/e.clientHeight,.05,900),n=new f(s);n.addPass(new p(a,l));let h=new m(new r.wq(e.clientWidth,e.clientHeight).multiplyScalar("high"===i?.5:.35),.6,.5,.85);n.addPass(h),n.addPass(new b);let u=()=>{s.setSize(e.clientWidth,e.clientHeight),n.setSize(e.clientWidth,e.clientHeight),l.aspect=e.clientWidth/e.clientHeight,l.updateProjectionMatrix()};return window.addEventListener("resize",u),{renderer:s,scene:a,camera:l,bloom:h,render:()=>n.render(),snapshot(e,t,i,o,a){let h=s.getSize(new r.wq),u=s.getPixelRatio(),d={pos:l.position.clone(),quat:l.quaternion.clone(),fov:l.fov,aspect:l.aspect};s.setPixelRatio(1),s.setSize(o,a,!1),n.setPixelRatio(1),n.setSize(o,a),l.position.copy(e),l.lookAt(t),l.fov=i,l.aspect=o/a,l.updateProjectionMatrix(),n.render();let c=document.createElement("canvas");return c.width=o,c.height=a,c.getContext("2d").drawImage(s.domElement,0,0,o,a),s.setPixelRatio(u),s.setSize(h.x,h.y,!1),n.setPixelRatio(u),n.setSize(h.x,h.y),l.position.copy(d.pos),l.quaternion.copy(d.quat),l.fov=d.fov,l.aspect=d.aspect,l.updateProjectionMatrix(),c},dispose(){window.removeEventListener("resize",u),n.dispose(),s.dispose(),s.domElement.remove()}}}],224518)},421675,e=>{"use strict";var t=e.i(190072);function r(e,i,s,o={}){let a=document.createElement("canvas");a.width=e,a.height=i;let l=a.getContext("2d");l&&s(l,e,i);let n=new t.Nk(a);return!1!==o.color&&(n.colorSpace=t.nj),n.anisotropy=8,o.repeat&&(n.wrapS=n.wrapT=t.FP,n.repeat.set(...o.repeat)),n}function i(e){let t=e>>>0;return()=>{let e=t=t+0x6d2b79f5>>>0;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/0x100000000}}e.s(["X",0,function(){let e=i(9);return r(512,512,(t,r,i)=>{t.fillStyle="#3a2a26",t.fillRect(0,0,r,i);for(let s=0;s<i/32;s++){let i=s%2?48:0;for(let o=-96;o<r+96;o+=96){let r=e();t.fillStyle=`rgb(${110+40*r},${52+18*r},${42+12*r})`,t.fillRect(o+i+3,32*s+3,90,26)}}},{repeat:[10,2]})},"Q",0,r,"C",0,function(e,t){return r(512,512,(r,i)=>{let s=i/2;r.fillStyle="#f4ecd9",r.beginPath(),r.arc(s,s,s-4,0,2*Math.PI),r.fill(),r.strokeStyle="#1d2234",r.lineWidth=14,r.beginPath(),r.arc(s,s,s-16,0,2*Math.PI),r.stroke();for(let e=0;e<60;e++){let t=e/60*Math.PI*2,i=e%5==0;r.lineWidth=i?9:3,r.beginPath(),r.moveTo(s+Math.sin(t)*(s-34),s-Math.cos(t)*(s-34)),r.lineTo(s+Math.sin(t)*(s-(i?74:50)),s-Math.cos(t)*(s-(i?74:50))),r.stroke()}let o=(e,t,i)=>{r.lineWidth=i,r.lineCap="round",r.beginPath(),r.moveTo(s-26*Math.sin(e),s+26*Math.cos(e)),r.lineTo(s+Math.sin(e)*t,s-Math.cos(e)*t),r.stroke()};o((e%12+t/60)/12*Math.PI*2,.5*s,16),o(t/60*Math.PI*2,.74*s,10),r.fillStyle="#1d2234",r.beginPath(),r.arc(s,s,16,0,2*Math.PI),r.fill()})},"f",0,function(){let e=i(5);return r(512,512,(t,r,i)=>{t.fillStyle="#8a8682",t.fillRect(0,0,r,i);for(let s=0;s<2600;s++){let s=110+50*e();t.fillStyle=`rgba(${s},${s-4},${s-8},${.18+.2*e()})`,t.fillRect(e()*r,e()*i,1+3*e(),1+3*e())}for(let s=0;s<9;s++){let s=e()*r,o=e()*i,a=40+90*e(),l=t.createRadialGradient(s,o,0,s,o,a);l.addColorStop(0,"rgba(40,40,46,0.35)"),l.addColorStop(1,"rgba(40,40,46,0)"),t.fillStyle=l,t.fillRect(s-a,o-a,2*a,2*a)}for(let e of(t.strokeStyle="rgba(50,48,46,0.6)",t.lineWidth=3,[0,256]))t.beginPath(),t.moveTo(e,0),t.lineTo(e,i),t.stroke(),t.beginPath(),t.moveTo(0,e),t.lineTo(r,e),t.stroke()},{repeat:[12,1.4]})},"a",0,function(e=.5){return r(128,128,(t,r)=>{let i=t.createRadialGradient(r/2,r/2,0,r/2,r/2,r/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(e,"rgba(255,255,255,0.35)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,r,r)})},"E",0,i,"s",0,function(e,t=""){return r(1024,220,(r,i,s)=>{r.fillStyle="#1b2744",r.fillRect(0,0,i,s),r.strokeStyle="#efe4cc",r.lineWidth=10,r.strokeRect(14,14,i-28,s-28),r.lineWidth=3,r.strokeRect(30,30,i-60,s-60),r.fillStyle="#f3e9d2",r.textAlign="center",r.textBaseline="middle";let o=Math.min(120,(i-120)/Math.max(4,.62*e.length));r.font=`600 ${o}px Georgia, 'Times New Roman', serif`,r.fillText(e.toUpperCase(),i/2,t?.44*s:s/2),t&&(r.font="italic 34px Georgia, serif",r.fillStyle="#d9c79f",r.fillText(t,i/2,.78*s))})},"v",0,function(){return r(512,128,(e,t,r)=>{e.clearRect(0,0,t,r),e.fillStyle="#ece2cb";let i=t/8;for(let t=0;t<8;t++)e.beginPath(),e.moveTo(t*i+2,0),e.lineTo(t*i+i-2,0),e.lineTo(t*i+i-2,.55*r),e.lineTo(t*i+i/2,.98*r),e.lineTo(t*i+2,.55*r),e.closePath(),e.fill()},{repeat:[16,1]})},"h",0,function(e){let t=i(e);return r(256,192,(e,r,i)=>{let s=e.createLinearGradient(0,0,0,i);s.addColorStop(0,"#ffd99a"),s.addColorStop(.55,"#f5b866"),s.addColorStop(1,"#a8642e"),e.fillStyle=s,e.fillRect(0,0,r,i);let o=r*(.35+.3*t()),a=e.createRadialGradient(o,.28*i,0,o,.28*i,.35*r);for(let t of(a.addColorStop(0,"rgba(255,248,225,0.95)"),a.addColorStop(1,"rgba(255,248,225,0)"),e.fillStyle=a,e.fillRect(0,0,r,i),e.fillStyle="rgba(90,32,28,0.75)",[.12*r,.62*r]))e.beginPath(),e.roundRect(t,.62*i,.26*r,.5*i,18),e.fill();for(let t of[0,1])for(let s=0;s<6;s++){let o=t?r-(s+1)*9:9*s;e.fillStyle=s%2?"rgba(122,34,38,0.95)":"rgba(150,48,50,0.95)",e.fillRect(o,0,10,i)}e.strokeStyle="#2a2018",e.lineWidth=12,e.strokeRect(0,0,r,i)})},"i",0,function(e="#6b4a33"){let t=i(13);return r(256,512,(r,i,s)=>{r.fillStyle=e,r.fillRect(0,0,i,s);for(let e=0;e<160;e++){r.strokeStyle=`rgba(30,18,10,${.05+.12*t()})`,r.lineWidth=1+2*t();let e=t()*i;r.beginPath(),r.moveTo(e,0),r.bezierCurveTo(e+10*t()-5,s/3,e+10*t()-5,2*s/3,e+6*t()-3,s),r.stroke()}r.fillStyle="rgba(20,12,8,0.5)";for(let e=0;e<i;e+=64)r.fillRect(e,0,3,s)},{repeat:[1,1]})}])}]);