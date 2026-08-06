(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();var wn=Object.defineProperty,R0=Object.getOwnPropertyDescriptor,B0=Object.getOwnPropertyNames,M0=Object.prototype.hasOwnProperty,N0=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),L=(e,t)=>()=>(e&&(t=e(e=0)),t),nr=(e,t)=>{for(var r in t)wn(e,r,{get:t[r],enumerable:!0})},D0=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of B0(t))!M0.call(e,a)&&a!==r&&wn(e,a,{get:()=>t[a],enumerable:!(i=R0(t,a))||i.enumerable});return e},kr=e=>D0(wn({},"__esModule",{value:!0}),e),pr,$t,Qt,Fo,Mp,Np=L(()=>{pr=new Map,$t=[],Qt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=pr.get(e);if(i===void 0)pr.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=$t.indexOf(e);a!==-1&&$t.splice(a,1);for(let n=0;n<$t.length;n++)if(pr.get($t[n]).priority<=r){$t.splice(n,0,e);return}$t.push(e)}return}throw new TypeError("not a valid backend")},Fo=async e=>{let t=pr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Mp=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?$t:r,a,n=[],s=new Set;for(let l of i){let d=await Fo(l);typeof d=="string"?n.push({name:l,err:d}):(a||(a=d),a===d&&s.add(l))}if(!a)throw new Error(`no available backend found. ERR: ${n.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of n)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let u=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[a,new Proxy(e,{get:(l,d)=>d==="executionProviders"?u:Reflect.get(l,d)})]}}),P0=L(()=>{Np()}),Dp,U0=L(()=>{Dp="1.27.0"}),Zi,ze,Pp=L(()=>{U0(),Zi="warning",ze={wasm:{},webgl:{},webgpu:{},versions:{common:Dp},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Zi=e}},get logLevel(){return Zi}},Object.defineProperty(ze,"logLevel",{enumerable:!0})}),_e,L0=L(()=>{Pp(),_e=ze}),Up,Lp,q0=L(()=>{Up=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[3]):(a=e.dims[3],n=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",u=t?.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let c=n*a,h=0,g=c,_=c*2,y=-1;s==="RGBA"?(h=0,g=c,_=c*2,y=c*3):s==="RGB"?(h=0,g=c,_=c*2):s==="RBG"&&(h=0,_=c,g=c*2);for(let w=0;w<n;w++)for(let S=0;S<a;S++){let x=(e.data[h++]-d[0])*l[0],b=(e.data[g++]-d[1])*l[1],E=(e.data[_++]-d[2])*l[2],T=y===-1?255:(e.data[y++]-d[3])*l[3];i.fillStyle="rgba("+x+","+b+","+E+","+T+")",i.fillRect(S,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Lp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[1],s=e.dims[3]):(a=e.dims[3],n=e.dims[2],s=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let h=n*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,_=0,y=1,w=2,S=3,x=0,b=h,E=h*2,T=-1;u==="RGBA"?(x=0,b=h,E=h*2,T=h*3):u==="RGB"?(x=0,b=h,E=h*2):u==="RBG"&&(x=0,E=h,b=h*2),i=r.createImageData(a,n);for(let I=0;I<n*a;_+=g,y+=g,w+=g,S+=g,I++)i.data[_]=(e.data[x++]-c[0])*d[0],i.data[y]=(e.data[b++]-c[1])*d[1],i.data[w]=(e.data[E++]-c[2])*d[2],i.data[S]=T===-1?255:(e.data[T++]-c[3])*d[3]}else throw new Error("Can not access image data");return i}}),Gr,qp,Wp,Vp,Gp,Fp,W0=L(()=>{$n(),Gr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},n,s;typeof a.mean=="number"?n=[a.mean,a.mean,a.mean,a.mean]:n=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),h=4,g=0,_=1,y=2,w=3,S=0,x=d,b=d*2,E=-1;u==="RGB"&&(h=3,g=0,_=1,y=2,w=-1),l==="RGBA"?E=d*3:l==="RBG"?(S=0,b=d,x=d*2):l==="BGR"&&(b=0,x=d,S=d*2);for(let T=0;T<d;T++,g+=h,y+=h,_+=h,w+=h)c[S++]=(e[g]+s[0])/n[0],c[x++]=(e[_]+s[1])/n[1],c[b++]=(e[y]+s[2])/n[2],E!==-1&&w!==-1&&(c[E++]=(e[w]+s[3])/n[3]);return l==="RGBA"?new Pe("float32",c,[1,4,r,i]):new Pe("float32",c,[1,3,r,i])},qp=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let h=d(c);if(h!=null){let g=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=g,u.width=_}else u.tensorFormat="RGBA",u.height=g,u.width=_;h.drawImage(e,0,0),s=h.getImageData(0,0,_,g).data}else throw new Error("Can not access image data")}else if(i){let c,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,h=t.resizedWidth):(c=e.height,h=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=c,u.width=h,t!==void 0){let g=l();g.width=h,g.height=c;let _=d(g);if(_!=null)_.putImageData(e,0,0),s=_.getImageData(0,0,h,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let h=d(c);if(h!=null){let g=e.height,_=e.width;return h.drawImage(e,0,0,_,g),s=h.getImageData(0,0,_,g).data,u.height=g,u.width=_,Gr(s,u)}else throw new Error("Can not access image data")}else{if(n)return new Promise((c,h)=>{let g=l(),_=d(g);if(!e||!_)return h();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{g.width=y.width,g.height=y.height,_.drawImage(y,0,0,g.width,g.height);let w=_.getImageData(0,0,g.width,g.height);u.height=g.height,u.width=g.width,c(Gr(w.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Gr(s,u);throw new Error("Input data provided is not supported - aborted tensor creation")},Wp=(e,t)=>{let{width:r,height:i,download:a,dispose:n}=t,s=[1,i,r,4];return new Pe({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:n})},Vp=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Pe({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:n})},Gp=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Pe({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:n})},Fp=(e,t,r)=>new Pe({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Mt,$r,Qi,Hp,V0=L(()=>{Mt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),$r=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Qi=!1,Hp=()=>{if(!Qi){Qi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(Mt.set("int64",BigInt64Array),$r.set(BigInt64Array,"int64")),t&&(Mt.set("uint64",BigUint64Array),$r.set(BigUint64Array,"uint64")),i?(Mt.set("float16",r),$r.set(r,"float16")):Mt.set("float16",Uint16Array)}}}),jp,Kp,G0=L(()=>{$n(),jp=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Kp=(e,t)=>{switch(e.location){case"cpu":return new Pe(e.type,e.data,t);case"cpu-pinned":return new Pe({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Pe({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Pe({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Pe({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Pe,$n=L(()=>{q0(),W0(),V0(),G0(),Pe=class{constructor(e,t,r){Hp();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=Mt.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=Mt.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=$r.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(u===void 0)u=[s.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");a=u,this.cpuData=s,this.dataLocation="cpu"}let n=jp(a);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=n}static async fromImage(e,t){return qp(e,t)}static fromTexture(e,t){return Wp(e,t)}static fromGpuBuffer(e,t){return Vp(e,t)}static fromMLTensor(e,t){return Gp(e,t)}static fromPinnedBuffer(e,t,r){return Fp(e,t,r)}toDataURL(e){return Up(this,e)}toImageData(e){return Lp(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Kp(this,e)}}}),Qe,Xp=L(()=>{$n(),Qe=Pe}),ui,Ji,ot,Je,Pt,Ut,Yp=L(()=>{Pp(),ui=(e,t)=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ji=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(n+=`::${t}`),ui("CPU",n);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},ot=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||Ji("BEGIN",e)},Je=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||Ji("END",e)},Pt=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.time(`ORT::${e}`)},Ut=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.timeEnd(`ORT::${e}`)}}),Zp,F0=L(()=>{Np(),Xp(),Yp(),Zp=class Qp{constructor(t){this.handler=t}async run(t,r,i){ot(),Pt("InferenceSession.run");let a={},n={};if(typeof t!="object"||t===null||t instanceof Qe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Qe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);a[d]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let h of this.outputNames)if(c.indexOf(h)!==-1){let g=r[h];(g===null||g instanceof Qe)&&(d=!0,s=!1,a[h]=g)}if(d){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)a[d]=null;let u=await this.handler.run(t,a,n),l={};for(let d in u)if(Object.hasOwnProperty.call(u,d)){let c=u[d];c instanceof Qe?l[d]=c:l[d]=new Qe(c.type,c.data,c.dims)}return Ut("InferenceSession.run"),Je(),l}async release(){return this.handler.dispose()}static async create(t,r,i,a){ot(),Pt("InferenceSession.create");let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,h=0,g=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(g=t.byteLength-h,typeof i=="number"){if(g=i,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||h+g>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-h}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(c,h,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await Mp(s),d=await u.createInferenceSessionHandler(n,l);return Ut("InferenceSession.create"),Je(),new Qp(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),vn,H0=L(()=>{F0(),vn=Zp}),j0=L(()=>{}),K0=L(()=>{}),X0=L(()=>{}),Y0=L(()=>{}),Z0={};nr(Z0,{InferenceSession:()=>vn,TRACE:()=>ui,TRACE_EVENT_BEGIN:()=>Pt,TRACE_EVENT_END:()=>Ut,TRACE_FUNC_BEGIN:()=>ot,TRACE_FUNC_END:()=>Je,Tensor:()=>Qe,env:()=>_e,registerBackend:()=>Qt});var Ge=L(()=>{P0(),L0(),H0(),Xp(),j0(),K0(),Yp(),X0(),Y0()}),xn=L(()=>{}),Jp={};nr(Jp,{default:()=>ec});var ea,ta,ec,Q0=L(()=>{sm(),Ht(),Sn(),ea="ort-wasm-proxy-worker",ta=globalThis.self?.name===ea,ta&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Tn(r.wasm).then(()=>{Wn(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Vn(a,i).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:i}=r,a=mi(i);postMessage({type:t,out:a});break}case"create":{let{model:i,options:a}=r;Gn(i,a).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":Fn(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:a,inputs:n,outputIndices:s,options:u}=r;Hn(i,a,n,s,new Array(s.length).fill(null),u).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},Kn([...n,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":jn(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),ec=ta?null:e=>new Worker(e??De,{type:"module",name:ea})}),tc={};nr(tc,{default:()=>rc});async function Ho(e={}){var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,a=i&&self.name?.startsWith("em-pthread");t.mountExternalData=(o,p)=>{o.startsWith("./")&&(o=o.substring(2)),(t.Xc||(t.Xc=new Map)).set(o,p)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let n=o=>async(...p)=>{try{if(t.Yc)throw Error("Session already started");let m=t.Yc={Kd:p[0],errors:[]},f=await o(...p);if(t.Yc!==m)throw Error("Session mismatch");t.dd?.flush();let v=m.errors;if(0<v.length){let k=await Promise.all(v);if(k=k.filter(A=>A),0<k.length)throw Error(k.join(`
`))}return f}finally{t.Yc=null}};t.jsepInit=(o,p)=>{if(o==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=p;let m=t.dd;t.jsepRegisterBuffer=(f,v,k,A)=>m.registerBuffer(f,v,k,A),t.jsepGetBuffer=f=>m.getBuffer(f),t.jsepCreateDownloader=(f,v,k)=>m.createDownloader(f,v,k),t.jsepOnCreateSession=f=>{m.onCreateSession(f)},t.jsepOnReleaseSession=f=>{m.onReleaseSession(f)},t.jsepOnRunStart=f=>m.onRunStart(f),t.Id=(f,v)=>{m.upload(f,v)}}else if(o==="webnn"){let m=p[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=p.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=f=>m.onRunStart(f),t.webnnOnRunEnd=m.onRunEnd.bind(m),t.webnnOnReleaseSession=f=>{m.onReleaseSession(f)},t.webnnCreateMLTensorDownloader=(f,v)=>m.createMLTensorDownloader(f,v),t.webnnRegisterMLTensor=(f,v,k,A)=>m.registerMLTensor(f,v,k,A),t.webnnCreateMLContext=f=>m.createMLContext(f),t.webnnRegisterMLConstant=(f,v,k,A,B,q)=>m.registerMLConstant(f,v,k,A,B,t.Xc,q),t.webnnRegisterGraphInput=m.registerGraphInput.bind(m),t.webnnIsGraphInput=m.isGraphInput.bind(m),t.webnnRegisterGraphOutput=m.registerGraphOutput.bind(m),t.webnnIsGraphOutput=m.isGraphOutput.bind(m),t.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),t.webnnIsGraphInputOutputTypeSupported=m.isGraphInputOutputTypeSupported.bind(m)}};let s=()=>{let o=p=>(...m)=>{let f=rt;return m=p(...m),rt!=f?new Promise((v,k)=>{Pi={resolve:v,reject:k}}):m};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[p]=o(t[p])})(),n!==void 0&&(t._OrtRun=n(t._OrtRun),t._OrtRunWithBinding=n(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s?.()};var u,l,d=(o,p)=>{throw p},c=import.meta.url,h="";if(r||i){try{h=new URL(".",c).href}catch{}i&&(l=o=>{var p=new XMLHttpRequest;return p.open("GET",o,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),u=async o=>{if(C(o))return new Promise((m,f)=>{var v=new XMLHttpRequest;v.open("GET",o,!0),v.responseType="arraybuffer",v.onload=()=>{v.status==200||v.status==0&&v.response?m(v.response):f(v.status)},v.onerror=f,v.send(null)});var p=await fetch(o,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)}}var g,_,y,w,S,x,b=console.log.bind(console),E=console.error.bind(console),T=b,I=E,z=!1,C=o=>o.startsWith("file://");function $(){yt.buffer!=P.buffer&&ee()}if(a){let o=function(p){try{var m=p.data,f=m.Sc;if(f==="load"){let v=[];self.onmessage=k=>v.push(k),x=()=>{postMessage({Sc:"loaded"});for(let k of v)o(k);self.onmessage=o};for(let k of m.xd)t[k]&&!t[k].proxy||(t[k]=(...A)=>{postMessage({Sc:"callHandler",wd:k,args:A})},k=="print"&&(T=t[k]),k=="printErr"&&(I=t[k]));yt=m.Od,ee(),_=m.Pd,Oe(),Vr()}else if(f==="run"){(function(v){var k=($(),D)[v+52>>>2>>>0];v=($(),D)[v+56>>>2>>>0],eo(k,k-v),ue(k)})(m.Rc),Vi(m.Rc,0,0,1,0,0),ts(),Mi(m.Rc),M||(Ks(),M=!0);try{Tm(m.Md,m.bd)}catch(v){if(v!="unwind")throw v}}else m.target!=="setimmediate"&&(f==="checkMailbox"?M&&Nr():f&&(I(`worker: received unknown command ${f}`),I(m)))}catch(v){throw Xs(),v}};var M=!1;self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=o}var P,W,H,K,R,D,F,Q,J,re,se,U=!1;function ee(){var o=yt.buffer;t.HEAP8=P=new Int8Array(o),H=new Int16Array(o),t.HEAPU8=W=new Uint8Array(o),K=new Uint16Array(o),t.HEAP32=R=new Int32Array(o),t.HEAPU32=D=new Uint32Array(o),F=new Float32Array(o),Q=new Float64Array(o),J=new BigInt64Array(o),re=new BigUint64Array(o)}function Z(){U=!0,a?x():lt.sb()}function G(o){throw I(o="Aborted("+o+")"),z=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),S?.(o),o}function ke(){return{a:{ma:Kg,gb:jg,g:Em,J:km,f:Im,o:zm,h:Cm,ha:Am,b:Om,T:Rm,Ha:os,n:Bm,$:ps,Xa:cs,Da:hs,Fa:fs,Ya:ms,Va:gs,Oa:ys,Ua:_s,ka:bs,Ea:ws,Ba:$s,Wa:vs,Ca:xs,bb:Mm,ea:Nm,wa:Dm,ua:Um,da:qm,O:Wm,H:Vm,va:Gm,_:Zm,xa:Qm,Ra:Jm,za:tg,Ia:rg,sa:ig,fa:ag,Qa:Mi,_a:ng,R:lg,r:fg,c:Ri,hb:mg,y:gg,M:yg,D:_g,l:bg,s:As,ib:wg,I:$g,S:vg,j:xg,u:Sg,q:Tg,k:Eg,La:kg,Ma:Ig,Na:zg,Ja:Ms,Ka:Ns,ta:Ds,db:Ag,ab:Rg,v:Bg,aa:Mg,ga:Ng,$a:Og,W:Dg,Za:Pg,Aa:Ug,F:Cg,U:Lg,la:qr,ya:Wg,fb:qg,eb:Vg,Sa:qs,Ta:Ws,Ga:Ii,V:Vs,ja:Gs,Pa:Fs,ia:Hs,kb:C0,na:T0,lb:z0,oa:S0,G:m0,e:Qg,t:Yg,w:Xg,B:u0,mb:$0,K:c0,x:t0,pa:v0,Y:E0,ba:w0,nb:b0,ob:_0,P:l0,qa:y0,pb:g0,N:h0,Z:x0,d:Zg,A:e0,m:Jg,jb:A0,p:i0,z:a0,C:r0,E:n0,L:d0,qb:f0,Q:k0,ca:p0,X:I0,rb:o0,ra:s0,i:Fg,a:yt,cb:ki}}}async function Oe(){function o(f,v){var k=lt=f.exports;f={};for(let[A,B]of Object.entries(k))typeof B=="function"?(k=sg(B),f[A]=k):f[A]=B;return lt=f,lt=(function(){var A=lt,B=V=>oe=>V(oe)>>>0,q=V=>()=>V()>>>0;return(A=Object.assign({},A)).tb=B(A.tb),A.Xb=q(A.Xb),A.Zb=B(A.Zb),A.lc=B(A.lc),A.mc=q(A.mc),A.qc=B(A.qc),A})(),Jn.push(lt._b),js=(f=lt).tb,Ks=f.ub,t._OrtInit=f.vb,t._OrtGetLastError=f.wb,t._OrtCreateSessionOptions=f.xb,t._OrtAppendExecutionProvider=f.yb,t._OrtAddFreeDimensionOverride=f.zb,t._OrtAddSessionConfigEntry=f.Ab,t._OrtReleaseSessionOptions=f.Bb,t._OrtCreateSession=f.Cb,t._OrtReleaseSession=f.Db,t._OrtGetInputOutputCount=f.Eb,t._OrtGetInputOutputMetadata=f.Fb,t._OrtFree=f.Gb,t._OrtCreateTensor=f.Hb,t._OrtGetTensorData=f.Ib,t._OrtReleaseTensor=f.Jb,t._OrtCreateRunOptions=f.Kb,t._OrtAddRunConfigEntry=f.Lb,t._OrtReleaseRunOptions=f.Mb,t._OrtCreateBinding=f.Nb,t._OrtBindInput=f.Ob,t._OrtBindOutput=f.Pb,t._OrtClearBoundOutputs=f.Qb,t._OrtReleaseBinding=f.Rb,t._OrtRunWithBinding=f.Sb,t._OrtRun=f.Tb,t._OrtEndProfiling=f.Ub,t._JsepOutput=f.Vb,t._JsepGetNodeName=f.Wb,Wr=f.Xb,it=t._free=f.Yb,lr=t._malloc=f.Zb,Vi=f.ac,Xs=f.bc,Ys=f.cc,Zs=f.dc,Gi=f.ec,Qs=f.fc,Js=f.gc,de=f.hc,dr=f.ic,eo=f.jc,ue=f.kc,Fi=f.lc,le=f.mc,to=f.nc,Hi=f.oc,ro=f.pc,io=f.qc,ao=f.rc,ji=f.sc,no=f.tc,so=f.uc,oo=f.vc,uo=f.wc,lo=f.xc,po=f.yc,co=f.zc,ho=f.Ac,fo=f.Bc,mo=f.Cc,go=f.Dc,yo=f.Ec,_o=f.Fc,bo=f.Gc,wo=f.Hc,$o=f.Ic,vo=f.Jc,xo=f.Kc,So=f.Lc,To=f.Mc,Eo=f.Nc,ko=f.Pc,Io=f.Qc,zo=f.$c,Co=f.ad,Ao=f.fd,Oo=f.jd,Ro=f.kd,Bo=f.ld,Mo=f.md,No=f.nd,Do=f.od,Po=f.pd,Uo=f.qd,Lo=f.vd,qo=f.Td,Wo=f.Ud,Vo=f.Vd,Go=f.Wd,_=v,lt}var p,m=ke();return t.instantiateWasm?new Promise(f=>{t.instantiateWasm(m,(v,k)=>{f(o(v,k))})}):a?o(new WebAssembly.Instance(_,ke()),_):(se??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",h):h+"ort-wasm-simd-threaded.jsep.wasm":new URL("/dither-feed/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href,p=await(async function(f){var v=se;if(!g&&!C(v))try{var k=fetch(v,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(k,f)}catch(A){I(`wasm streaming compile failed: ${A}`),I("falling back to ArrayBuffer instantiation")}return(async function(A,B){try{var q=await(async function(V){if(!g)try{var oe=await u(V);return new Uint8Array(oe)}catch{}if(V==se&&g)V=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";V=l(V)}return V})(A);return await WebAssembly.instantiate(q,B)}catch(V){I(`failed to asynchronously prepare wasm: ${V}`),G(V)}})(v,f)})(m),o(p.instance,p.module))}class ve{name="ExitStatus";constructor(p){this.message=`Program terminated with exit(${p})`,this.status=p}}var Re=o=>{o.terminate(),o.onmessage=()=>{}},ge=[],$e=0,Me=null,Ar=o=>{gt.length==0&&(is(),rs(gt[0]));var p=gt.pop();if(!p)return 6;or.push(p),kt[o.Rc]=p,p.Rc=o.Rc;var m={Sc:"run",Md:o.Ld,bd:o.bd,Rc:o.Rc};return p.postMessage(m,o.rd),0},et=0,xe=(o,p,...m)=>{var f,v=16*m.length,k=le(),A=Fi(v),B=A>>>3;for(f of m)typeof f=="bigint"?(($(),J)[B++>>>0]=1n,($(),J)[B++>>>0]=f):(($(),J)[B++>>>0]=0n,($(),Q)[B++>>>0]=f);return o=Ys(o,0,v,A,p),ue(k),o};function ki(o){if(a)return xe(0,1,o);if(y=o,!(0<et)){for(var p of or)Re(p);for(p of gt)Re(p);gt=[],or=[],kt={},z=!0}d(0,new ve(o))}function Qn(o){if(a)return xe(1,0,o);Ii(o)}var Ii=o=>{if(y=o,a)throw Qn(o),"unwind";ki(o)},gt=[],or=[],Jn=[],kt={},es=o=>{var p=o.Rc;delete kt[p],gt.push(o),or.splice(or.indexOf(o),1),o.Rc=0,Zs(p)};function ts(){Jn.forEach(o=>o())}var rs=o=>new Promise(p=>{o.onmessage=v=>{var k=v.data;if(v=k.Sc,k.Zc&&k.Zc!=Wr()){var A=kt[k.Zc];A?A.postMessage(k,k.rd):I(`Internal error! Worker sent a message "${v}" to target pthread ${k.Zc}, but that thread no longer exists!`)}else v==="checkMailbox"?Nr():v==="spawnThread"?Ar(k):v==="cleanupThread"?Mr(()=>{es(kt[k.Nd])}):v==="loaded"?(o.loaded=!0,p(o)):k.target==="setimmediate"?o.postMessage(k):v==="uncaughtException"?o.onerror(k.error):v==="callHandler"?t[k.wd](...k.args):v&&I(`worker sent an unknown command ${v}`)},o.onerror=v=>{throw I(`worker sent an error! ${v.filename}:${v.lineno}: ${v.message}`),v};var m,f=[];for(m of[])t.propertyIsEnumerable(m)&&f.push(m);o.postMessage({Sc:"load",xd:f,Od:yt,Pd:_})});function is(){var o=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});gt.push(o)}var yt,Tm=(o,p)=>{et=0,o=ji(o,p),0<et?y=o:Gi(o)},Or=[],Rr=0;function Em(o){var p=new zi(o>>>=0);return($(),P)[p.Tc+12>>>0]==0&&(as(p,!0),Rr--),ns(p,!1),Or.push(p),io(o)}var Kt=0,km=()=>{de(0,0);var o=Or.pop();to(o.cd),Kt=0};function as(o,p){p=p?1:0,($(),P)[o.Tc+12>>>0]=p}function ns(o,p){p=p?1:0,($(),P)[o.Tc+13>>>0]=p}class zi{constructor(p){this.cd=p,this.Tc=p-24}}var Ci=o=>{var p=Kt;if(!p)return dr(0),0;var m=new zi(p);($(),D)[m.Tc+16>>>2>>>0]=p;var f=($(),D)[m.Tc+4>>>2>>>0];if(!f)return dr(0),p;for(var v of o){if(v===0||v===f)break;if(ro(v,f,m.Tc+16))return dr(v),p}return dr(f),p};function Im(){return Ci([])}function zm(o){return Ci([o>>>0])}function Cm(o,p,m,f){return Ci([o>>>0,p>>>0,m>>>0,f>>>0])}var Am=()=>{var o=Or.pop();o||G("no exception to throw");var p=o.cd;throw($(),P)[o.Tc+13>>>0]==0&&(Or.push(o),ns(o,!0),as(o,!1),Rr++),Hi(p),Kt=p};function Om(o,p,m){var f=new zi(o>>>=0);throw p>>>=0,m>>>=0,($(),D)[f.Tc+16>>>2>>>0]=0,($(),D)[f.Tc+4>>>2>>>0]=p,($(),D)[f.Tc+8>>>2>>>0]=m,Hi(o),Rr++,Kt=o}var Rm=()=>Rr;function ss(o,p,m,f){return a?xe(2,1,o,p,m,f):os(o,p,m,f)}function os(o,p,m,f){if(o>>>=0,p>>>=0,m>>>=0,f>>>=0,!globalThis.SharedArrayBuffer)return 6;var v=[];return a&&v.length===0?ss(o,p,m,f):(o={Ld:m,Rc:o,bd:f,rd:v},a?(o.Sc="spawnThread",postMessage(o,v),0):Ar(o))}function Bm(o){throw Kt||=o>>>0,Kt}var us=globalThis.TextDecoder&&new TextDecoder,ls=(o,p,m,f)=>{if(m=p+m,f)return m;for(;o[p]&&!(p>=m);)++p;return p},ds=(o,p=0,m,f)=>{if(16<(m=ls(o,p>>>=0,m,f))-p&&o.buffer&&us)return us.decode(o.buffer instanceof ArrayBuffer?o.subarray(p,m):o.slice(p,m));for(f="";p<m;){var v=o[p++];if(128&v){var k=63&o[p++];if((224&v)==192)f+=String.fromCharCode((31&v)<<6|k);else{var A=63&o[p++];65536>(v=(240&v)==224?(15&v)<<12|k<<6|A:(7&v)<<18|k<<12|A<<6|63&o[p++])?f+=String.fromCharCode(v):(v-=65536,f+=String.fromCharCode(55296|v>>10,56320|1023&v))}}else f+=String.fromCharCode(v)}return f},Ee=(o,p,m)=>(o>>>=0)?ds(($(),W),o,p,m):"";function ps(o,p,m){return a?xe(3,1,o,p,m):0}function cs(o,p){if(a)return xe(4,1,o,p)}function hs(o,p){if(a)return xe(5,1,o,p)}function fs(o,p,m){if(a)return xe(6,1,o,p,m)}function ms(o,p,m){return a?xe(7,1,o,p,m):0}function gs(o,p){if(a)return xe(8,1,o,p)}function ys(o,p,m){if(a)return xe(9,1,o,p,m)}function _s(o,p,m,f){if(a)return xe(10,1,o,p,m,f)}function bs(o,p,m,f){if(a)return xe(11,1,o,p,m,f)}function ws(o,p,m,f){if(a)return xe(12,1,o,p,m,f)}function $s(o){if(a)return xe(13,1,o)}function vs(o,p){if(a)return xe(14,1,o,p)}function xs(o,p,m){if(a)return xe(15,1,o,p,m)}var Mm=()=>G(""),tt=o=>{o>>>=0;for(var p="";;){var m=($(),W)[o++>>>0];if(!m)return p;p+=String.fromCharCode(m)}},Ai={},Oi={},Xt=class extends Error{constructor(o){super(o),this.name="BindingError"}};function ut(o,p,m={}){return(function(f,v,k={}){var A=v.name;if(!f)throw new Xt(`type "${A}" must have a positive integer typeid pointer`);if(Oi.hasOwnProperty(f)){if(k.yd)return;throw new Xt(`Cannot register type '${A}' twice`)}Oi[f]=v,Ai.hasOwnProperty(f)&&(v=Ai[f],delete Ai[f],v.forEach(B=>B()))})(o,p,m)}var Ss=(o,p,m)=>{switch(p){case 1:return m?f=>($(),P)[f>>>0]:f=>($(),W)[f>>>0];case 2:return m?f=>($(),H)[f>>>1>>>0]:f=>($(),K)[f>>>1>>>0];case 4:return m?f=>($(),R)[f>>>2>>>0]:f=>($(),D)[f>>>2>>>0];case 8:return m?f=>($(),J)[f>>>3>>>0]:f=>($(),re)[f>>>3>>>0];default:throw new TypeError(`invalid integer width (${p}): ${o}`)}};function Nm(o,p,m,f,v){o>>>=0,m>>>=0,p=tt(p>>>0);let k=A=>A;if(f=f===0n){let A=8*m;k=B=>BigInt.asUintN(A,B),v=k(v)}ut(o,{name:p,Oc:k,Vc:(A,B)=>(typeof B=="number"&&(B=BigInt(B)),B),Uc:Ss(p,m,!f),Wc:null})}function Dm(o,p,m,f){ut(o>>>=0,{name:p=tt(p>>>0),Oc:function(v){return!!v},Vc:function(v,k){return k?m:f},Uc:function(v){return this.Oc(($(),W)[v>>>0])},Wc:null})}var Ts=[],It=[0,1,,1,null,1,!0,1,!1,1];function Ri(o){9<(o>>>=0)&&--It[o+1]===0&&(It[o]=void 0,Ts.push(o))}var qe=o=>{if(!o)throw new Xt(`Cannot use deleted val. handle = ${o}`);return It[o]},Fe=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=Ts.pop()||It.length;return It[p]=o,It[p+1]=1,p}};function Bi(o){return this.Oc(($(),D)[o>>>2>>>0])}var Pm={name:"emscripten::val",Oc:o=>{var p=qe(o);return Ri(o),p},Vc:(o,p)=>Fe(p),Uc:Bi,Wc:null};function Um(o){return ut(o>>>0,Pm)}var Lm=(o,p)=>{switch(p){case 4:return function(m){return this.Oc(($(),F)[m>>>2>>>0])};case 8:return function(m){return this.Oc(($(),Q)[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${o}`)}};function qm(o,p,m){m>>>=0,ut(o>>>=0,{name:p=tt(p>>>0),Oc:f=>f,Vc:(f,v)=>v,Uc:Lm(p,m),Wc:null})}function Wm(o,p,m,f,v){o>>>=0,m>>>=0,p=tt(p>>>0);let k=B=>B;if(f===0){var A=32-8*m;k=B=>B<<A>>>A,v=k(v)}ut(o,{name:p,Oc:k,Vc:(B,q)=>q,Uc:Ss(p,m,f!==0),Wc:null})}function Vm(o,p,m){function f(k){var A=($(),D)[k>>>2>>>0];return k=($(),D)[k+4>>>2>>>0],new v(($(),P).buffer,k,A)}var v=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];ut(o>>>=0,{name:m=tt(m>>>0),Oc:f,Uc:f},{yd:!0})}var _t=(o,p,m)=>{var f=($(),W);if(p>>>=0,0<m){var v=p;m=p+m-1;for(var k=0;k<o.length;++k){var A=o.codePointAt(k);if(127>=A){if(p>=m)break;f[p++>>>0]=A}else if(2047>=A){if(p+1>=m)break;f[p++>>>0]=192|A>>6,f[p++>>>0]=128|63&A}else if(65535>=A){if(p+2>=m)break;f[p++>>>0]=224|A>>12,f[p++>>>0]=128|A>>6&63,f[p++>>>0]=128|63&A}else{if(p+3>=m)break;f[p++>>>0]=240|A>>18,f[p++>>>0]=128|A>>12&63,f[p++>>>0]=128|A>>6&63,f[p++>>>0]=128|63&A,k++}}f[p>>>0]=0,o=p-v}else o=0;return o},Br=o=>{for(var p=0,m=0;m<o.length;++m){var f=o.charCodeAt(m);127>=f?p++:2047>=f?p+=2:55296<=f&&57343>=f?(p+=4,++m):p+=3}return p};function Gm(o,p){ut(o>>>=0,{name:p=tt(p>>>0),Oc(m){var f=($(),D)[m>>>2>>>0];return f=Ee(m+4,f,!0),it(m),f},Vc(m,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var v=typeof f=="string";if(!(v||ArrayBuffer.isView(f)&&f.BYTES_PER_ELEMENT==1))throw new Xt("Cannot pass non-string to std::string");var k=v?Br(f):f.length,A=lr(4+k+1),B=A+4;return($(),D)[A>>>2>>>0]=k,v?_t(f,B,k+1):($(),W).set(f,B>>>0),m!==null&&m.push(it,A),A},Uc:Bi,Wc(m){it(m)}})}var Es=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Fm=(o,p,m)=>{if(o>>>=1,16<(p=ls(($(),K),o,p/2,m))-o&&Es)return Es.decode(($(),K).slice(o,p));for(m="";o<p;++o){var f=($(),K)[o>>>0];m+=String.fromCharCode(f)}return m},Hm=(o,p,m)=>{if(m??=2147483647,2>m)return 0;var f=p;m=(m-=2)<2*o.length?m/2:o.length;for(var v=0;v<m;++v){var k=o.charCodeAt(v);($(),H)[p>>>1>>>0]=k,p+=2}return($(),H)[p>>>1>>>0]=0,p-f},jm=o=>2*o.length,Km=(o,p,m)=>{var f="";o>>>=2;for(var v=0;!(v>=p/4);v++){var k=($(),D)[o+v>>>0];if(!k&&!m)break;f+=String.fromCodePoint(k)}return f},Xm=(o,p,m)=>{if(p>>>=0,m??=2147483647,4>m)return 0;var f=p;m=f+m-4;for(var v=0;v<o.length;++v){var k=o.codePointAt(v);if(65535<k&&v++,($(),R)[p>>>2>>>0]=k,(p+=4)+4>m)break}return($(),R)[p>>>2>>>0]=0,p-f},Ym=o=>{for(var p=0,m=0;m<o.length;++m)65535<o.codePointAt(m)&&m++,p+=4;return p};function Zm(o,p,m){if(o>>>=0,p>>>=0,m=tt(m>>>=0),p===2)var f=Fm,v=Hm,k=jm;else f=Km,v=Xm,k=Ym;ut(o,{name:m,Oc:A=>{var B=($(),D)[A>>>2>>>0];return B=f(A+4,B*p,!0),it(A),B},Vc:(A,B)=>{if(typeof B!="string")throw new Xt(`Cannot pass non-string to C++ string type ${m}`);var q=k(B),V=lr(4+q+p);return($(),D)[V>>>2>>>0]=q/p,v(B,V+4,q+p),A!==null&&A.push(it,V),V},Uc:Bi,Wc(A){it(A)}})}function Qm(o,p){ut(o>>>=0,{zd:!0,name:p=tt(p>>>0),Oc:()=>{},Vc:()=>{}})}function Jm(o){Vi(o>>>0,!i,1,!r,131072,!1),ts()}var Mr=o=>{if(!z)try{if(o(),!(0<et))try{a?Wr()&&Gi(y):Ii(y)}catch(p){p instanceof ve||p=="unwind"||d(0,p)}}catch(p){p instanceof ve||p=="unwind"||d(0,p)}},eg=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Mi(o){o>>>=0,eg||(Atomics.waitAsync(($(),R),o>>>2,o).value.then(Nr),o+=128,Atomics.store(($(),R),o>>>2,1))}var Nr=()=>Mr(()=>{var o=Wr();o&&(Mi(o),Js())});function tg(o,p){(o>>>=0)==p>>>0?setTimeout(Nr):a?postMessage({Zc:o,Sc:"checkMailbox"}):(o=kt[o])&&o.postMessage({Sc:"checkMailbox"})}var Ni=[];function rg(o,p,m,f,v){for(p>>>=0,v>>>=0,Ni.length=0,m=v>>>3,f=v+f>>>3;m<f;){var k;k=($(),J)[m++>>>0]?($(),J)[m++>>>0]:($(),Q)[m++>>>0],Ni.push(k)}return(p?Ki[p]:Hg[o])(...Ni)}var ig=()=>{et=0};function ag(o){o>>>=0,a?postMessage({Sc:"cleanupThread",Nd:o}):es(kt[o])}function ng(o){}var Dr=o=>{try{o()}catch(p){G(p)}};function sg(o){var p=(...m)=>{Pr.push(o);try{return o(...m)}finally{z||(Pr.pop(),rt&&bt===1&&Pr.length===0&&(bt=0,et+=1,Dr(Wo),typeof Fibers<"u"&&Fibers.Zd()))}};return zs.set(o,p),p}var bt=0,rt=null,ks=0,Pr=[],Di=new Map,Is=new Map,zs=new Map,og=0,Pi=null,ug=[],Cs=o=>(function(p){if(!z){if(bt===0){var m=!1,f=!1;p((v=0)=>{if(!z&&(ks=v,m=!0,f)){bt=2,Dr(()=>Vo(rt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),v=!1;try{var k=(function(){var q=($(),R)[rt+8>>>2>>>0];return q=Is.get(q),q=zs.get(q),--et,q()})()}catch(q){k=q,v=!0}var A=!1;if(!rt){var B=Pi;B&&(Pi=null,(v?B.reject:B.resolve)(k),A=!0)}if(v&&!A)throw k}}),f=!0,m||(bt=1,rt=(function(){var v=lr(65548),k=v+12;if(($(),D)[v>>>2>>>0]=k,($(),D)[v+4>>>2>>>0]=k+65536,k=Pr[0],!Di.has(k)){var A=og++;Di.set(k,A),Is.set(A,k)}return k=Di.get(k),($(),R)[v+8>>>2>>>0]=k,v})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),Dr(()=>qo(rt)))}else bt===2?(bt=0,Dr(Go),it(rt),rt=null,ug.forEach(Mr)):G(`invalid state: ${bt}`);return ks}})(p=>{o().then(p)});function lg(o){return o>>>=0,Cs(async()=>{var p=await qe(o);return Fe(p)})}var Ui=[],dg=o=>{var p=Ui.length;return Ui.push(o),p},pg=(o,p)=>{for(var m=Array(o),f=0;f<o;++f){var v=f,k=($(),D)[p+4*f>>>2>>>0],A=Oi[k];if(A===void 0)throw o=`parameter ${f}`,k=js(k),p=tt(k),it(k),new Xt(`${o} has unknown type ${p}`);m[v]=A}return m},cg=(o,p,m)=>{var f=[];return o=o(f,m),f.length&&(($(),D)[p>>>2>>>0]=Fe(f)),o},hg={},Ur=o=>{var p=hg[o];return p===void 0?tt(o):p};function fg(o,p,m){var[f,...v]=pg(o,p>>>0);p=f.Vc.bind(f);var k=v.map(q=>q.Uc.bind(q));o--;var A={toValue:qe};switch(o=k.map((q,V)=>{var oe=`argFromPtr${V}`;return A[oe]=q,`${oe}(args${V?"+"+8*V:""})`}),m){case 0:var B="toValue(handle)";break;case 2:B="new (toValue(handle))";break;case 3:B="";break;case 1:A.getStringOrSymbol=Ur,B="toValue(handle)[getStringOrSymbol(methodName)]"}return B+=`(${o})`,f.zd||(A.toReturnWire=p,A.emval_returnValue=cg,B=`return emval_returnValue(toReturnWire, destructorsRef, ${B})`),B=`return function (handle, methodName, destructorsRef, args) {
  ${B}
  }`,m=new Function(Object.keys(A),B)(...Object.values(A)),B=`methodCaller<(${v.map(q=>q.name)}) => ${f.name}>`,dg(Object.defineProperty(m,"name",{value:B}))}function mg(o,p){return p>>>=0,(o=qe(o>>>0))==qe(p)}function gg(o){return(o>>>=0)?(o=Ur(o),Fe(globalThis[o])):Fe(globalThis)}function yg(o){return o=Ur(o>>>0),Fe(t[o])}function _g(o,p){return p>>>=0,o=qe(o>>>0),p=qe(p),Fe(o[p])}function bg(o){9<(o>>>=0)&&(It[o+1]+=1)}function As(o,p,m,f,v){return Ui[o>>>0](p>>>0,m>>>0,f>>>0,v>>>0)}function wg(o,p,m,f,v){return As(o>>>0,p>>>0,m>>>0,f>>>0,v>>>0)}function $g(){return Fe([])}function vg(o){o=qe(o>>>0);for(var p=Array(o.length),m=0;m<o.length;m++)p[m]=o[m];return Fe(p)}function xg(o){return Fe(Ur(o>>>0))}function Sg(){return Fe({})}function Tg(o){for(var p=qe(o>>>=0);p.length;){var m=p.pop();p.pop()(m)}Ri(o)}function Eg(o,p,m){p>>>=0,m>>>=0,o=qe(o>>>0),p=qe(p),m=qe(m),o[p]=m}function kg(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),($(),R)[p>>>2>>>0]=o.getUTCSeconds(),($(),R)[p+4>>>2>>>0]=o.getUTCMinutes(),($(),R)[p+8>>>2>>>0]=o.getUTCHours(),($(),R)[p+12>>>2>>>0]=o.getUTCDate(),($(),R)[p+16>>>2>>>0]=o.getUTCMonth(),($(),R)[p+20>>>2>>>0]=o.getUTCFullYear()-1900,($(),R)[p+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,($(),R)[p+28>>>2>>>0]=o}var Os=o=>o%4==0&&(o%100!=0||o%400==0),Rs=[0,31,60,91,121,152,182,213,244,274,305,335],Bs=[0,31,59,90,120,151,181,212,243,273,304,334];function Ig(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),($(),R)[p>>>2>>>0]=o.getSeconds(),($(),R)[p+4>>>2>>>0]=o.getMinutes(),($(),R)[p+8>>>2>>>0]=o.getHours(),($(),R)[p+12>>>2>>>0]=o.getDate(),($(),R)[p+16>>>2>>>0]=o.getMonth(),($(),R)[p+20>>>2>>>0]=o.getFullYear()-1900,($(),R)[p+24>>>2>>>0]=o.getDay();var m=(Os(o.getFullYear())?Rs:Bs)[o.getMonth()]+o.getDate()-1|0;($(),R)[p+28>>>2>>>0]=m,($(),R)[p+36>>>2>>>0]=-60*o.getTimezoneOffset(),m=new Date(o.getFullYear(),6,1).getTimezoneOffset();var f=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(m!=f&&o.getTimezoneOffset()==Math.min(f,m)),($(),R)[p+32>>>2>>>0]=o}function zg(o){o>>>=0;var p=new Date(($(),R)[o+20>>>2>>>0]+1900,($(),R)[o+16>>>2>>>0],($(),R)[o+12>>>2>>>0],($(),R)[o+8>>>2>>>0],($(),R)[o+4>>>2>>>0],($(),R)[o>>>2>>>0],0),m=($(),R)[o+32>>>2>>>0],f=p.getTimezoneOffset(),v=new Date(p.getFullYear(),6,1).getTimezoneOffset(),k=new Date(p.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(k,v);return 0>m?($(),R)[o+32>>>2>>>0]=+(v!=k&&A==f):0<m!=(A==f)&&(v=Math.max(k,v),p.setTime(p.getTime()+6e4*((0<m?A:v)-f))),($(),R)[o+24>>>2>>>0]=p.getDay(),m=(Os(p.getFullYear())?Rs:Bs)[p.getMonth()]+p.getDate()-1|0,($(),R)[o+28>>>2>>>0]=m,($(),R)[o>>>2>>>0]=p.getSeconds(),($(),R)[o+4>>>2>>>0]=p.getMinutes(),($(),R)[o+8>>>2>>>0]=p.getHours(),($(),R)[o+12>>>2>>>0]=p.getDate(),($(),R)[o+16>>>2>>>0]=p.getMonth(),($(),R)[o+20>>>2>>>0]=p.getYear(),o=p.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Ms(o,p,m,f,v,k,A){return a?xe(16,1,o,p,m,f,v,k,A):-52}function Ns(o,p,m,f,v,k){if(a)return xe(17,1,o,p,m,f,v,k)}var ur={},Cg=()=>performance.timeOrigin+performance.now();function Ds(o,p){if(a)return xe(18,1,o,p);if(ur[o]&&(clearTimeout(ur[o].id),delete ur[o]),!p)return 0;var m=setTimeout(()=>{delete ur[o],Mr(()=>Qs(o,performance.timeOrigin+performance.now()))},p);return ur[o]={id:m,Yd:p},0}function Ag(o,p,m,f){o>>>=0,p>>>=0,m>>>=0,f>>>=0;var v=new Date().getFullYear(),k=new Date(v,0,1).getTimezoneOffset();v=new Date(v,6,1).getTimezoneOffset();var A=Math.max(k,v);($(),D)[o>>>2>>>0]=60*A,($(),R)[p>>>2>>>0]=+(k!=v),o=(p=B=>{var q=Math.abs(B);return`UTC${0<=B?"-":"+"}${String(Math.floor(q/60)).padStart(2,"0")}${String(q%60).padStart(2,"0")}`})(k),p=p(v),v<k?(_t(o,m,17),_t(p,f,17)):(_t(o,f,17),_t(p,m,17))}var Og=()=>Date.now();function Rg(o,p,m){return m>>>=0,0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),o=Math.round(1e6*o),($(),J)[m>>>3>>>0]=BigInt(o),0):28}var Li=[],Ps=(o,p)=>{Li.length=0;for(var m;m=($(),W)[o++>>>0];){var f=m!=105;p+=(f&=m!=112)&&p%8?4:0,Li.push(m==112?($(),D)[p>>>2>>>0]:m==106?($(),J)[p>>>3>>>0]:m==105?($(),R)[p>>>2>>>0]:($(),Q)[p>>>3>>>0]),p+=f?8:4}return Li};function Bg(o,p,m){return o>>>=0,p=Ps(p>>>0,m>>>0),Ki[o](...p)}function Mg(o,p,m){return o>>>=0,p=Ps(p>>>0,m>>>0),Ki[o](...p)}var Ng=()=>{};function Dg(o,p){return I(Ee(o>>>0,p>>>0))}var Pg=()=>{throw et+=1,"unwind"};function Ug(){return 4294901760}var Lg=()=>navigator.hardwareConcurrency,zt={},Lr=o=>{var p;return(p=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(o))?+p[1]:(p=/:(\d+):\d+(?:\)|$)/.exec(o))?2147483648|+p[1]:0},Us=o=>{for(var p of o)(o=Lr(p))&&(zt[o]=p)};function qg(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),Us(o),zt.gd=Lr(o[3]),zt.Jd=o,zt.gd}function qr(o){if(!(o=zt[o>>>0]))return 0;var p;if(p=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(o))o=p[1];else if(p=/^\s+at (.*) \(.*\)$/.exec(o))o=p[1];else{if(!(p=/^(.+?)@/.exec(o)))return 0;o=p[1]}it(qr.hd??0),p=Br(o)+1;var m=lr(p);return m&&_t(o,m,p),qr.hd=m,qr.hd}function Wg(o){o>>>=0;var p=($(),W).length;if(o<=p||4294901760<o)return!1;for(var m=1;4>=m;m*=2){var f=p*(1+.2/m);f=Math.min(f,o+100663296);e:{f=(Math.min(4294901760,65536*Math.ceil(Math.max(o,f)/65536))-yt.buffer.byteLength+65535)/65536|0;try{yt.grow(f),ee();var v=1;break e}catch{}v=void 0}if(v)return!0}return!1}function Vg(o,p,m){if(o>>>=0,p>>>=0,zt.gd==o)var f=zt.Jd;else(f=Error().stack.toString().split(`
`))[0]=="Error"&&f.shift(),Us(f);for(var v=3;f[v]&&Lr(f[v])!=o;)++v;for(o=0;o<m&&f[o+v];++o)($(),R)[p+4*o>>>2>>>0]=Lr(f[o+v]);return o}var qi,Wi={},Ls=()=>{if(!qi){var o,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in Wi)Wi[o]===void 0?delete p[o]:p[o]=Wi[o];var m=[];for(o in p)m.push(`${o}=${p[o]}`);qi=m}return qi};function qs(o,p){if(a)return xe(19,1,o,p);o>>>=0,p>>>=0;var m,f=0,v=0;for(m of Ls()){var k=p+f;($(),D)[o+v>>>2>>>0]=k,f+=_t(m,k,1/0)+1,v+=4}return 0}function Ws(o,p){if(a)return xe(20,1,o,p);o>>>=0,p>>>=0;var m=Ls();for(var f of(($(),D)[o>>>2>>>0]=m.length,o=0,m))o+=Br(f)+1;return($(),D)[p>>>2>>>0]=o,0}function Vs(o){return a?xe(21,1,o):52}function Gs(o,p,m,f){return a?xe(22,1,o,p,m,f):52}function Fs(o,p,m,f){return a?xe(23,1,o,p,m,f):70}var Gg=[null,[],[]];function Hs(o,p,m,f){if(a)return xe(24,1,o,p,m,f);p>>>=0,m>>>=0,f>>>=0;for(var v=0,k=0;k<m;k++){var A=($(),D)[p>>>2>>>0],B=($(),D)[p+4>>>2>>>0];p+=8;for(var q=0;q<B;q++){var V=o,oe=($(),W)[A+q>>>0],ce=Gg[V];oe===0||oe===10?((V===1?T:I)(ds(ce)),ce.length=0):ce.push(oe)}v+=B}return($(),D)[f>>>2>>>0]=v,0}function Fg(o){return o>>>0}a||(function(){for(var o=t.numThreads-1;o--;)is();ge.push(async()=>{var p=(async function(){if(!a)return Promise.all(gt.map(rs))})();$e++,await p,--$e==0&&Me&&(p=Me,Me=null,p())})})(),a||(yt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),ee()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>le(),t.stackRestore=o=>ue(o),t.stackAlloc=o=>Fi(o),t.setValue=function(o,p,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":($(),P)[o>>>0]=p;break;case"i16":($(),H)[o>>>1>>>0]=p;break;case"i32":($(),R)[o>>>2>>>0]=p;break;case"i64":($(),J)[o>>>3>>>0]=BigInt(p);break;case"float":($(),F)[o>>>2>>>0]=p;break;case"double":($(),Q)[o>>>3>>>0]=p;break;case"*":($(),D)[o>>>2>>>0]=p;break;default:G(`invalid type for setValue: ${m}`)}},t.getValue=function(o,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return($(),P)[o>>>0];case"i16":return($(),H)[o>>>1>>>0];case"i32":return($(),R)[o>>>2>>>0];case"i64":return($(),J)[o>>>3>>>0];case"float":return($(),F)[o>>>2>>>0];case"double":return($(),Q)[o>>>3>>>0];case"*":return($(),D)[o>>>2>>>0];default:G(`invalid type for getValue: ${p}`)}},t.UTF8ToString=Ee,t.stringToUTF8=_t,t.lengthBytesUTF8=Br;var js,Ks,Wr,it,lr,Vi,Xs,Ys,Zs,Gi,Qs,Js,de,dr,eo,ue,Fi,le,to,Hi,ro,io,ao,ji,no,so,oo,uo,lo,po,co,ho,fo,mo,go,yo,_o,bo,wo,$o,vo,xo,So,To,Eo,ko,Io,zo,Co,Ao,Oo,Ro,Bo,Mo,No,Do,Po,Uo,Lo,qo,Wo,Vo,Go,lt,Hg=[ki,Qn,ss,ps,cs,hs,fs,ms,gs,ys,_s,bs,ws,$s,vs,xs,Ms,Ns,Ds,qs,Ws,Vs,Gs,Fs,Hs],Ki={1003524:(o,p,m,f,v)=>{if(t===void 0||!t.Xc)return 1;if((o=Ee(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=t.Xc.get(o)))return 2;if(p=Number(p>>>0),m=Number(m>>>0),f=Number(f>>>0),p+m>o.byteLength)return 3;try{let k=o.subarray(p,p+m);switch(v){case 0:($(),W).set(k,f>>>0);break;case 1:t.Qd?t.Qd(f,k):t.Id(f,k);break;default:return 4}return 0}catch{return 4}},1004348:(o,p,m)=>{t.td(o,($(),W).subarray(p>>>0,p+m>>>0))},1004412:()=>t.Sd(),1004454:o=>{t.sd(o)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:o=>t.Ad(o),1004609:o=>t.Ed(o),1004641:(o,p,m)=>{t.ed(Number(o),Number(p),Number(m),!0)},1004704:(o,p,m)=>{t.ed(Number(o),Number(p),Number(m))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:o=>{t.$b("Abs",o,void 0)},1004869:o=>{t.$b("Neg",o,void 0)},1004920:o=>{t.$b("Floor",o,void 0)},1004973:o=>{t.$b("Ceil",o,void 0)},1005025:o=>{t.$b("Reciprocal",o,void 0)},1005083:o=>{t.$b("Sqrt",o,void 0)},1005135:o=>{t.$b("Exp",o,void 0)},1005186:o=>{t.$b("Erf",o,void 0)},1005237:o=>{t.$b("Sigmoid",o,void 0)},1005292:(o,p,m)=>{t.$b("HardSigmoid",o,{alpha:p,beta:m})},1005371:o=>{t.$b("Log",o,void 0)},1005422:o=>{t.$b("Sin",o,void 0)},1005473:o=>{t.$b("Cos",o,void 0)},1005524:o=>{t.$b("Tan",o,void 0)},1005575:o=>{t.$b("Asin",o,void 0)},1005627:o=>{t.$b("Acos",o,void 0)},1005679:o=>{t.$b("Atan",o,void 0)},1005731:o=>{t.$b("Sinh",o,void 0)},1005783:o=>{t.$b("Cosh",o,void 0)},1005835:o=>{t.$b("Asinh",o,void 0)},1005888:o=>{t.$b("Acosh",o,void 0)},1005941:o=>{t.$b("Atanh",o,void 0)},1005994:o=>{t.$b("Tanh",o,void 0)},1006046:o=>{t.$b("Not",o,void 0)},1006097:(o,p,m)=>{t.$b("Clip",o,{min:p,max:m})},1006166:o=>{t.$b("Clip",o,void 0)},1006218:(o,p)=>{t.$b("Elu",o,{alpha:p})},1006276:o=>{t.$b("Gelu",o,void 0)},1006328:o=>{t.$b("Relu",o,void 0)},1006380:(o,p)=>{t.$b("LeakyRelu",o,{alpha:p})},1006444:(o,p)=>{t.$b("ThresholdedRelu",o,{alpha:p})},1006514:(o,p)=>{t.$b("Cast",o,{to:p})},1006572:o=>{t.$b("Add",o,void 0)},1006623:o=>{t.$b("Sub",o,void 0)},1006674:o=>{t.$b("Mul",o,void 0)},1006725:o=>{t.$b("Div",o,void 0)},1006776:o=>{t.$b("Pow",o,void 0)},1006827:o=>{t.$b("Equal",o,void 0)},1006880:o=>{t.$b("Greater",o,void 0)},1006935:o=>{t.$b("GreaterOrEqual",o,void 0)},1006997:o=>{t.$b("Less",o,void 0)},1007049:o=>{t.$b("LessOrEqual",o,void 0)},1007108:(o,p,m,f,v)=>{t.$b("ReduceMean",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1007283:(o,p,m,f,v)=>{t.$b("ReduceMax",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1007457:(o,p,m,f,v)=>{t.$b("ReduceMin",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1007631:(o,p,m,f,v)=>{t.$b("ReduceProd",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1007806:(o,p,m,f,v)=>{t.$b("ReduceSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1007980:(o,p,m,f,v)=>{t.$b("ReduceL1",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1008153:(o,p,m,f,v)=>{t.$b("ReduceL2",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1008326:(o,p,m,f,v)=>{t.$b("ReduceLogSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1008503:(o,p,m,f,v)=>{t.$b("ReduceSumSquare",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1008683:(o,p,m,f,v)=>{t.$b("ReduceLogSumExp",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1008863:o=>{t.$b("Where",o,void 0)},1008916:(o,p,m)=>{t.$b("Transpose",o,{perm:p?Array.from(($(),R).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},1009040:(o,p,m,f)=>{t.$b("DepthToSpace",o,{blocksize:p,mode:Ee(m),format:f?"NHWC":"NCHW"})},1009173:(o,p,m,f)=>{t.$b("DepthToSpace",o,{blocksize:p,mode:Ee(m),format:f?"NHWC":"NCHW"})},1009306:(o,p,m,f,v,k,A,B,q,V,oe,ce,ye,we,wt)=>{t.$b("ConvTranspose",o,{format:q?"NHWC":"NCHW",autoPad:p,dilations:[m],group:f,kernelShape:[v],pads:[k,A],strides:[B],wIsConst:()=>!!($(),P)[V>>>0],outputPadding:oe?Array.from(($(),R).subarray(Number(oe)>>>0,Number(ce)>>>0)):[],outputShape:ye?Array.from(($(),R).subarray(Number(ye)>>>0,Number(we)>>>0)):[],activation:Ee(wt)})},1009739:(o,p,m,f,v,k,A,B,q,V,oe,ce,ye,we)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:p,dilations:Array.from(($(),R).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:f,kernelShape:Array.from(($(),R).subarray(Number(v)>>>0,(Number(v)>>>0)+2>>>0)),pads:Array.from(($(),R).subarray(Number(k)>>>0,(Number(k)>>>0)+4>>>0)),strides:Array.from(($(),R).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!($(),P)[q>>>0],outputPadding:V?Array.from(($(),R).subarray(Number(V)>>>0,Number(oe)>>>0)):[],outputShape:ce?Array.from(($(),R).subarray(Number(ce)>>>0,Number(ye)>>>0)):[],activation:Ee(we)})},1010400:(o,p,m,f,v,k,A,B,q,V,oe,ce,ye,we,wt)=>{t.$b("ConvTranspose",o,{format:q?"NHWC":"NCHW",autoPad:p,dilations:[m],group:f,kernelShape:[v],pads:[k,A],strides:[B],wIsConst:()=>!!($(),P)[V>>>0],outputPadding:oe?Array.from(($(),R).subarray(Number(oe)>>>0,Number(ce)>>>0)):[],outputShape:ye?Array.from(($(),R).subarray(Number(ye)>>>0,Number(we)>>>0)):[],activation:Ee(wt)})},1010833:(o,p,m,f,v,k,A,B,q,V,oe,ce,ye,we)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:p,dilations:Array.from(($(),R).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:f,kernelShape:Array.from(($(),R).subarray(Number(v)>>>0,(Number(v)>>>0)+2>>>0)),pads:Array.from(($(),R).subarray(Number(k)>>>0,(Number(k)>>>0)+4>>>0)),strides:Array.from(($(),R).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!($(),P)[q>>>0],outputPadding:V?Array.from(($(),R).subarray(Number(V)>>>0,Number(oe)>>>0)):[],outputShape:ce?Array.from(($(),R).subarray(Number(ce)>>>0,Number(ye)>>>0)):[],activation:Ee(we)})},1011494:(o,p)=>{t.$b("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},1011585:(o,p,m,f,v,k,A,B,q,V,oe,ce,ye,we)=>{t.$b("AveragePool",o,{format:we?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:v,dilations:k?Array.from(($(),R).subarray(Number(k)>>>0,Number(A)>>>0)):[],kernel_shape:B?Array.from(($(),R).subarray(Number(B)>>>0,Number(q)>>>0)):[],pads:V?Array.from(($(),R).subarray(Number(V)>>>0,Number(oe)>>>0)):[],strides:ce?Array.from(($(),R).subarray(Number(ce)>>>0,Number(ye)>>>0)):[]})},1012064:(o,p)=>{t.$b("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},1012155:(o,p,m,f,v,k,A,B,q,V,oe,ce,ye,we)=>{t.$b("AveragePool",o,{format:we?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:v,dilations:k?Array.from(($(),R).subarray(Number(k)>>>0,Number(A)>>>0)):[],kernel_shape:B?Array.from(($(),R).subarray(Number(B)>>>0,Number(q)>>>0)):[],pads:V?Array.from(($(),R).subarray(Number(V)>>>0,Number(oe)>>>0)):[],strides:ce?Array.from(($(),R).subarray(Number(ce)>>>0,Number(ye)>>>0)):[]})},1012634:(o,p)=>{t.$b("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},1012721:(o,p,m,f,v,k,A,B,q,V,oe,ce,ye,we)=>{t.$b("MaxPool",o,{format:we?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:v,dilations:k?Array.from(($(),R).subarray(Number(k)>>>0,Number(A)>>>0)):[],kernel_shape:B?Array.from(($(),R).subarray(Number(B)>>>0,Number(q)>>>0)):[],pads:V?Array.from(($(),R).subarray(Number(V)>>>0,Number(oe)>>>0)):[],strides:ce?Array.from(($(),R).subarray(Number(ce)>>>0,Number(ye)>>>0)):[]})},1013196:(o,p)=>{t.$b("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},1013283:(o,p,m,f,v,k,A,B,q,V,oe,ce,ye,we)=>{t.$b("MaxPool",o,{format:we?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:v,dilations:k?Array.from(($(),R).subarray(Number(k)>>>0,Number(A)>>>0)):[],kernel_shape:B?Array.from(($(),R).subarray(Number(B)>>>0,Number(q)>>>0)):[],pads:V?Array.from(($(),R).subarray(Number(V)>>>0,Number(oe)>>>0)):[],strides:ce?Array.from(($(),R).subarray(Number(ce)>>>0,Number(ye)>>>0)):[]})},1013758:(o,p,m,f,v)=>{t.$b("Gemm",o,{alpha:p,beta:m,transA:f,transB:v})},1013862:o=>{t.$b("MatMul",o,void 0)},1013916:(o,p,m,f)=>{t.$b("ArgMax",o,{keepDims:!!p,selectLastIndex:!!m,axis:f})},1014024:(o,p,m,f)=>{t.$b("ArgMin",o,{keepDims:!!p,selectLastIndex:!!m,axis:f})},1014132:(o,p)=>{t.$b("Softmax",o,{axis:p})},1014195:(o,p)=>{t.$b("Concat",o,{axis:p})},1014255:(o,p,m,f,v)=>{t.$b("Split",o,{axis:p,numOutputs:m,splitSizes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1014411:o=>{t.$b("Expand",o,void 0)},1014465:(o,p)=>{t.$b("Gather",o,{axis:Number(p)})},1014536:(o,p)=>{t.$b("GatherElements",o,{axis:Number(p)})},1014615:(o,p)=>{t.$b("GatherND",o,{batch_dims:Number(p)})},1014694:(o,p,m,f,v,k,A,B,q,V,oe)=>{t.$b("Resize",o,{antialias:p,axes:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(f)>>>0)):[],coordinateTransformMode:Ee(v),cubicCoeffA:k,excludeOutside:A,extrapolationValue:B,keepAspectRatioPolicy:Ee(q),mode:Ee(V),nearestMode:Ee(oe)})},1015056:(o,p,m,f,v,k,A)=>{t.$b("Slice",o,{starts:p?Array.from(($(),R).subarray(Number(p)>>>0,Number(m)>>>0)):[],ends:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[],axes:k?Array.from(($(),R).subarray(Number(k)>>>0,Number(A)>>>0)):[]})},1015320:o=>{t.$b("Tile",o,void 0)},1015372:(o,p,m)=>{t.$b("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},1015486:(o,p,m)=>{t.$b("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},1015600:o=>{t.$b("Range",o,void 0)},1015653:(o,p)=>{t.$b("Einsum",o,{equation:Ee(p)})},1015734:(o,p,m,f,v)=>{t.$b("Pad",o,{mode:p,value:m,pads:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1015877:(o,p,m,f,v,k)=>{t.$b("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!v,trainingMode:!!f,format:k?"NHWC":"NCHW"})},1016046:(o,p,m,f,v,k)=>{t.$b("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!v,trainingMode:!!f,format:k?"NHWC":"NCHW"})},1016215:(o,p,m)=>{t.$b("CumSum",o,{exclusive:Number(p),reverse:Number(m)})},1016312:(o,p,m)=>{t.$b("DequantizeLinear",o,{axis:p,blockSize:m})},1016402:(o,p,m,f,v)=>{t.$b("GridSample",o,{align_corners:p,mode:Ee(m),padding_mode:Ee(f),format:v?"NHWC":"NCHW"})},1016572:(o,p,m,f,v)=>{t.$b("GridSample",o,{align_corners:p,mode:Ee(m),padding_mode:Ee(f),format:v?"NHWC":"NCHW"})},1016742:(o,p)=>{t.$b("ScatterND",o,{reduction:Ee(p)})},1016827:(o,p,m,f,v,k,A,B,q)=>{t.$b("Attention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:f,scale:v,doRotary:k,qkvHiddenSizes:A?Array.from(($(),R).subarray(Number(B)>>>0,Number(B)+A>>>0)):[],pastPresentShareBuffer:!!q})},1017099:o=>{t.$b("BiasAdd",o,void 0)},1017154:o=>{t.$b("BiasSplitGelu",o,void 0)},1017215:o=>{t.$b("FastGelu",o,void 0)},1017271:(o,p,m,f,v,k,A,B,q,V,oe,ce,ye,we,wt,Xi)=>{t.$b("Conv",o,{format:ce?"NHWC":"NCHW",auto_pad:p,dilations:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(f)>>>0)):[],group:v,kernel_shape:k?Array.from(($(),R).subarray(Number(k)>>>0,Number(A)>>>0)):[],pads:B?Array.from(($(),R).subarray(Number(B)>>>0,Number(q)>>>0)):[],strides:V?Array.from(($(),R).subarray(Number(V)>>>0,Number(oe)>>>0)):[],w_is_const:()=>!!($(),P)[Number(ye)>>>0],activation:Ee(we),activation_params:wt?Array.from(($(),F).subarray(Number(wt)>>>0,Number(Xi)>>>0)):[]})},1017855:o=>{t.$b("Gelu",o,void 0)},1017907:(o,p,m,f,v,k,A,B,q)=>{t.$b("GroupQueryAttention",o,{numHeads:p,kvNumHeads:m,scale:f,softcap:v,doRotary:k,rotaryInterleaved:A,smoothSoftmax:B,localWindowSize:q})},1018124:(o,p,m,f)=>{t.$b("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!f})},1018235:(o,p,m,f)=>{t.$b("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!f})},1018346:(o,p,m,f,v,k)=>{t.$b("MatMulNBits",o,{k:p,n:m,accuracyLevel:f,bits:v,blockSize:k})},1018473:(o,p,m,f,v,k)=>{t.$b("MultiHeadAttention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:f,scale:v,doRotary:k})},1018632:(o,p)=>{t.$b("QuickGelu",o,{alpha:p})},1018696:(o,p,m,f,v)=>{t.$b("RotaryEmbedding",o,{interleaved:!!p,numHeads:m,rotaryEmbeddingDim:f,scale:v})},1018835:(o,p,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},1018937:(o,p,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},1019039:(o,p,m,f)=>{t.$b("GatherBlockQuantized",o,{gatherAxis:p,quantizeAxis:m,blockSize:f})},1019160:o=>{t.Fd(o)},1019194:(o,p)=>t.Hd(Number(o),Number(p),t.Yc.Kd,t.Yc.errors)};function jg(o,p,m){return Cs(async()=>{await t.Dd(Number(o),Number(p),Number(m))})}function Kg(){return typeof wasmOffsetConverter<"u"}function Xg(o,p,m,f){var v=le();try{return ho(o,p,m,f)}catch(k){if(ue(v),k!==k+0)throw k;de(1,0)}}function Yg(o,p,m){var f=le();try{return uo(o,p,m)}catch(v){if(ue(f),v!==v+0)throw v;de(1,0)}}function Zg(o){var p=le();try{no(o)}catch(m){if(ue(p),m!==m+0)throw m;de(1,0)}}function Qg(o,p){var m=le();try{return ji(o,p)}catch(f){if(ue(m),f!==f+0)throw f;de(1,0)}}function Jg(o,p,m){var f=le();try{ao(o,p,m)}catch(v){if(ue(f),v!==v+0)throw v;de(1,0)}}function e0(o,p){var m=le();try{fo(o,p)}catch(f){if(ue(m),f!==f+0)throw f;de(1,0)}}function t0(o,p,m,f,v,k,A){var B=le();try{return po(o,p,m,f,v,k,A)}catch(q){if(ue(B),q!==q+0)throw q;de(1,0)}}function r0(o,p,m,f,v,k){var A=le();try{so(o,p,m,f,v,k)}catch(B){if(ue(A),B!==B+0)throw B;de(1,0)}}function i0(o,p,m,f){var v=le();try{co(o,p,m,f)}catch(k){if(ue(v),k!==k+0)throw k;de(1,0)}}function a0(o,p,m,f,v){var k=le();try{oo(o,p,m,f,v)}catch(A){if(ue(k),A!==A+0)throw A;de(1,0)}}function n0(o,p,m,f,v,k,A){var B=le();try{go(o,p,m,f,v,k,A)}catch(q){if(ue(B),q!==q+0)throw q;de(1,0)}}function s0(o,p,m,f,v,k,A){var B=le();try{yo(o,p,m,f,v,k,A)}catch(q){if(ue(B),q!==q+0)throw q;de(1,0)}}function o0(o,p,m,f,v,k,A,B){var q=le();try{$o(o,p,m,f,v,k,A,B)}catch(V){if(ue(q),V!==V+0)throw V;de(1,0)}}function u0(o,p,m,f,v){var k=le();try{return mo(o,p,m,f,v)}catch(A){if(ue(k),A!==A+0)throw A;de(1,0)}}function l0(o,p,m){var f=le();try{return vo(o,p,m)}catch(v){if(ue(f),v!==v+0)throw v;de(1,0)}}function d0(o,p,m,f,v,k,A,B){var q=le();try{xo(o,p,m,f,v,k,A,B)}catch(V){if(ue(q),V!==V+0)throw V;de(1,0)}}function p0(o,p,m,f,v,k,A,B,q,V,oe,ce){var ye=le();try{_o(o,p,m,f,v,k,A,B,q,V,oe,ce)}catch(we){if(ue(ye),we!==we+0)throw we;de(1,0)}}function c0(o,p,m,f,v,k){var A=le();try{return bo(o,p,m,f,v,k)}catch(B){if(ue(A),B!==B+0)throw B;de(1,0)}}function h0(o,p,m){var f=le();try{return So(o,p,m)}catch(v){if(ue(f),v!==v+0)throw v;return de(1,0),0n}}function f0(o,p,m,f,v,k,A,B,q){var V=le();try{lo(o,p,m,f,v,k,A,B,q)}catch(oe){if(ue(V),oe!==oe+0)throw oe;de(1,0)}}function m0(o){var p=le();try{return To(o)}catch(m){if(ue(p),m!==m+0)throw m;de(1,0)}}function g0(o,p){var m=le();try{return Lo(o,p)}catch(f){if(ue(m),f!==f+0)throw f;return de(1,0),0n}}function y0(o){var p=le();try{return Eo(o)}catch(m){if(ue(p),m!==m+0)throw m;return de(1,0),0n}}function _0(o,p,m,f){var v=le();try{return Oo(o,p,m,f)}catch(k){if(ue(v),k!==k+0)throw k;de(1,0)}}function b0(o,p,m,f,v){var k=le();try{return Ro(o,p,m,f,v)}catch(A){if(ue(k),A!==A+0)throw A;de(1,0)}}function w0(o,p,m,f,v,k){var A=le();try{return Bo(o,p,m,f,v,k)}catch(B){if(ue(A),B!==B+0)throw B;de(1,0)}}function $0(o,p,m,f,v,k){var A=le();try{return Mo(o,p,m,f,v,k)}catch(B){if(ue(A),B!==B+0)throw B;de(1,0)}}function v0(o,p,m,f,v,k,A,B){var q=le();try{return wo(o,p,m,f,v,k,A,B)}catch(V){if(ue(q),V!==V+0)throw V;de(1,0)}}function x0(o,p,m,f,v){var k=le();try{return No(o,p,m,f,v)}catch(A){if(ue(k),A!==A+0)throw A;return de(1,0),0n}}function S0(o,p,m,f){var v=le();try{return Do(o,p,m,f)}catch(k){if(ue(v),k!==k+0)throw k;de(1,0)}}function T0(o,p,m,f){var v=le();try{return Po(o,p,m,f)}catch(k){if(ue(v),k!==k+0)throw k;de(1,0)}}function E0(o,p,m,f,v,k,A,B,q,V,oe,ce){var ye=le();try{return Uo(o,p,m,f,v,k,A,B,q,V,oe,ce)}catch(we){if(ue(ye),we!==we+0)throw we;de(1,0)}}function k0(o,p,m,f,v,k,A,B,q,V,oe){var ce=le();try{Co(o,p,m,f,v,k,A,B,q,V,oe)}catch(ye){if(ue(ce),ye!==ye+0)throw ye;de(1,0)}}function I0(o,p,m,f,v,k,A,B,q,V,oe,ce,ye,we,wt,Xi){var O0=le();try{Ao(o,p,m,f,v,k,A,B,q,V,oe,ce,ye,we,wt,Xi)}catch(Yi){if(ue(O0),Yi!==Yi+0)throw Yi;de(1,0)}}function z0(o,p,m){var f=le();try{return ko(o,p,m)}catch(v){if(ue(f),v!==v+0)throw v;de(1,0)}}function C0(o,p,m){var f=le();try{return Io(o,p,m)}catch(v){if(ue(f),v!==v+0)throw v;de(1,0)}}function A0(o,p,m,f){var v=le();try{zo(o,p,m,f)}catch(k){if(ue(v),k!==k+0)throw k;de(1,0)}}function Vr(){if(0<$e)Me=Vr;else if(a)w?.(t),Z();else{for(var o=ge;0<o.length;)o.shift()(t);0<$e?Me=Vr:(t.calledRun=!0,z||(Z(),w?.(t)))}}return a||(lt=await Oe(),Vr()),t.PTR_SIZE=4,U?t:new Promise((o,p)=>{w=o,S=p})}var rc,jo,J0=L(()=>{rc=Ho,jo=globalThis.self?.name?.startsWith("em-pthread"),jo&&Ho()}),ra,Ya,Ko,De,ic,Fr,Xo,Yo,ia,Zo,aa,ac,na,nc,Sn=L(()=>{xn(),ra=typeof location>"u"?void 0:location.origin,Ya=import.meta.url>"file:"&&import.meta.url<"file;",Ko=()=>{{if(Ya){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,ra).href}return import.meta.url}},De=Ko(),ic=()=>{if(De&&!De.startsWith("blob:"))return De.substring(0,De.lastIndexOf("/")+1)},Fr=(e,t)=>{try{let r=t??De;return(r?new URL(e,r):new URL(e)).origin===ra}catch{return!1}},Xo=(e,t)=>{let r=t??De;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Yo=(e,t)=>`${t??"./"}${e}`,ia=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Zo=async e=>(await import(e)).default,aa=(Q0(),kr(Jp)).default,ac=async()=>{if(!De)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Fr(De))return[void 0,aa()];let e=await ia(De);return[e,aa(e)]},na=(J0(),kr(tc)).default,nc=async(e,t,r,i)=>{let a=na&&!(e||t);if(a)if(De)a=Fr(De)||i&&!r;else if(i&&!r)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,na];{let n="ort-wasm-simd-threaded.jsep.mjs",s=e??Xo(n,t),u=r&&s&&!Fr(s,t),l=u?await ia(s):s??Yo(n,t);return[u?l:void 0,await Zo(l)]}}}),sa,Hr,cr,oa,Qo,Jo,eu,Tn,be,Ht=L(()=>{Sn(),Hr=!1,cr=!1,oa=!1,Qo=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Jo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},eu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Tn=async e=>{if(Hr)return Promise.resolve();if(cr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(oa)throw new Error("previous call to 'initializeWebAssembly()' failed.");cr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!eu())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Jo())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Qo();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,n=typeof a=="string"?a:void 0,s=a?.mjs,u=s?.href??s,l=a?.wasm,d=l?.href??l,c=e.wasmBinary,[h,g]=await nc(u,n,r>1,!!c||!!d),_=!1,y=[];if(t>0&&y.push(new Promise(w=>{setTimeout(()=>{_=!0,w()},t)})),y.push(new Promise((w,S)=>{let x={numThreads:r};if(c)x.wasmBinary=c,x.locateFile=b=>b;else if(d||n)x.locateFile=b=>d??n+b;else if(u&&u.indexOf("blob:")!==0)x.locateFile=b=>new URL(b,u).href;else if(h){let b=ic();b&&(x.locateFile=E=>b+E)}g(x).then(b=>{cr=!1,Hr=!0,sa=b,w(),h&&URL.revokeObjectURL(h)},b=>{cr=!1,oa=!0,S(b)})})),await Promise.race(y),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},be=()=>{if(Hr&&sa)return sa;throw new Error("WebAssembly is not initialized yet.")}}),Ze,li,me,En=L(()=>{Ht(),Ze=(e,t)=>{let r=be(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},li=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,n])=>{let s=t?t+a:a;if(typeof n=="object")li(n,s+".",r,i);else if(typeof n=="string"||typeof n=="number")i(s,n.toString());else if(typeof n=="boolean")i(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},me=e=>{let t=be(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let n=Number(t.getValue(a,i===4?"i32":"i64")),s=t.getValue(a+i,"*"),u=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),sc,ey=L(()=>{Ht(),En(),sc=e=>{let t=be(),r=0,i=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let n=0;return e?.tag!==void 0&&(n=Ze(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,n),r===0&&me("Can't create run options."),e?.extra!==void 0&&li(e.extra,"",new WeakSet,(s,u)=>{let l=Ze(s,i),d=Ze(u,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&me(`Can't set a run config entry: ${s} - ${u}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),n}}}),tu,ru,iu,Ct,au,oc,ty=L(()=>{Ht(),En(),tu=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},ru=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},iu=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Ct=(e,t,r,i)=>{let a=Ze(t,i),n=Ze(r,i);be()._OrtAddSessionConfigEntry(e,a,n)!==0&&me(`Can't set a session config entry: ${t} - ${r}.`)},au=async(e,t,r)=>{let i=t.executionProviders;for(let a of i){let n=typeof a=="string"?a:a.name,s=[];switch(n){case"webnn":if(n="WEBNN",Ct(e,"session.disable_quant_qdq","1",r),Ct(e,"session.disable_qdq_constant_folding","1",r),typeof a!="string"){let h=a?.deviceType;h&&Ct(e,"deviceType",h,r)}break;case"webgpu":if(n="JS",typeof a!="string"){let h=a;if(h?.preferredLayout){if(h.preferredLayout!=="NCHW"&&h.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${h.preferredLayout}`);Ct(e,"preferredLayout",h.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let u=Ze(n,r),l=s.length,d=0,c=0;if(l>0){d=be()._malloc(l*be().PTR_SIZE),r.push(d),c=be()._malloc(l*be().PTR_SIZE),r.push(c);for(let h=0;h<l;h++)be().setValue(d+h*be().PTR_SIZE,s[h][0],"*"),be().setValue(c+h*be().PTR_SIZE,s[h][1],"*")}await be()._OrtAppendExecutionProvider(e,u,d,c,l)!==0&&me(`Can't append execution provider: ${n}.`)}},oc=async e=>{let t=be(),r=0,i=[],a=e||{};iu(a);try{let n=tu(a.graphOptimizationLevel??"all"),s=ru(a.executionMode??"sequential"),u=typeof a.logId=="string"?Ze(a.logId,i):0,l=a.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=a.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof a.optimizedModelFilePath=="string"?Ze(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(n,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,u,l,d,c),r===0&&me("Can't create session options."),a.executionProviders&&await au(r,a,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);Ct(r,"enableGraphCapture",a.enableGraphCapture.toString(),i)}if(a.freeDimensionOverrides)for(let[h,g]of Object.entries(a.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let _=Ze(h,i);t._OrtAddFreeDimensionOverride(r,_,g)!==0&&me(`Can't set a free dimension override: ${h} - ${g}.`)}return a.extra!==void 0&&li(a.extra,"",new WeakSet,(h,g)=>{Ct(r,h,g,i)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&me("Can't release session options."),i.forEach(s=>t._free(s)),n}}}),Nt,ct,Dt,wi,di,kn,In,Za,te=L(()=>{Nt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},ct=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Dt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,n)=>a*n,1);return r>0?Math.ceil(i*r):void 0},wi=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},di=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},kn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",In=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Za=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),zn,uc=L(()=>{xn(),zn=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let l=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let s=0;for(;;){let{done:u,value:l}=await a.read();if(u)break;let d=l.byteLength;new Uint8Array(n,s,d).set(l),s+=d}return new Uint8Array(n,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),nu,su,ou,uu,Cn,lu,pe,mt=L(()=>{te(),nu=["V","I","W","E","F"],su=(e,t)=>{console.log(`[${nu[e]},${new Date().toISOString()}]${t}`)},Cn=(e,t)=>{ou=e,uu=t},lu=(e,t)=>{let r=di(e),i=di(ou);r>=i&&su(r,typeof t=="function"?t():t)},pe=(...e)=>{uu&&lu(...e)}}),du,tr,O,pi,lc,dc,pc,ae=L(()=>{du=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},tr=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(i<2||a<2)return;let u=du.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(u===void 0)return;[s[n-2],s[n-1]]=u}for(let u=r?3:1;u<=n;u++){let l=i-u<0?1:e[i-u],d=a-u<0?1:t[a-u];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)s[n-u]=Math.max(l,d);else{if(c>1)return;s[n-u]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},O=class ai{static size(t){return ai.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),n=i-1;for(;n>=0;){if(t[n]%r===0){a[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return ai.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return ai.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[n])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,n)=>a+r[n]+r[n+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},pi=class vr{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<a.length){if(a[u]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let u=0;u<i.length;u++)if(u<n.length){if(n[u]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let u=0;u<i.length*2;u++)if(u<s.length){if(s[u]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[u]>=i[u]||s[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,n,s,u){if(u){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)vr.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],a[l],n,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,i,a,n,s,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return vr.computeShapeHelper(t,r,l,i,a,n,s,u),l}static computeConvOutputShape(t,r,i,a,n,s,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return vr.computeShapeHelper(!1,t,l,i,a,n,s,u),l}static computeShapeHelper(t,r,i,a,n,s,u,l){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(vr.adjustPadAndReturnShape(r[d+2],a[d],n[d],s[d],u,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,a,n,s,u,l){let d=i*(a-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return n[s]=0,n[u]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+a-t;return n[s]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),n[u]=c-n[s],Math.floor((t+c-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[s]+n[u]-d)/r+1)}},lc=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,u;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let l=-1;if(i?(u=r[0],l=1):(u=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(n<=0||u<=0||s<=0)throw new Error("invalid shape specified");if(a&&!tr.isValidBroadcast(a,[n,u]))throw new Error("gemm: invalid bias shape for broadcast");return[n,u,s]}},dc=-34028234663852886e22,pc=34028234663852886e22}),An,cc=L(()=>{te(),An=(e,t)=>new(wi(t))(e)}),ua,Qa,la,pu,da,cu,pa,ca,ha,hu,hc,ry=L(()=>{te(),mt(),ua=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Qa=(e,t)=>{if(t==="int32")return e;let r=ua.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let a=e.byteLength/i,n=new(wi(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let s=new Int32Array(a);for(let u=0;u<a;u++){let l=n[u];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[u]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&n.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(n,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},la=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(i.some(n=>n<-128||n>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(i,Number);return new Uint8Array(a.buffer)}case"uint8":{if(i.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(i,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},pu=1,da=()=>pu++,cu=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),pa=(e,t)=>{let r=ua.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},ca=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:a,shape:n,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=a,this.tensorShape=n,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return pa(this.dataType,this.tensorShape)}destroy(){pe("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=la(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}setIsDataConverted(e){this.isDataConverted=e}},ha=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let a=this.tensorManager.getMLContext(e),n=this.tensorManager.getMLOpSupportLimits(e),s;if(!n?.input.dataTypes.includes(t)){if(s=cu.get(t),!s||n?.input.dataTypes.includes(s))throw new Error(`WebNN backend does not support data type: ${t}`);pe("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==pa(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let u=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,u,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Qa(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else pe("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?la(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},hu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=da();return this.tensorTrackersById.set(e,new ha(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,a){pe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");return n.ensureTensor(e,r,i,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){pe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=this.getMLContext(e),n=da(),s=new ca({sessionId:e,context:a,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(n,new ha(this,s)),this.externalTensors.add(s),n}async getCachedTensor(e,t,r,i,a,n,s){let u=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(u,t,r)){pe("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let h=this.freeTensors.splice(d,1)[0];return h.sessionId=e,h}pe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:a,readable:n});return new ca({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},hc=(...e)=>new hu(...e)}),hr,fu,fc,iy=L(()=>{te(),Ht(),cc(),ry(),mt(),hr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),fu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,n)=>a===i[n]&&e[a]===t[a])},fc=class{constructor(e){this.tensorManager=hc(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Cn(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){pe("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){pe("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)pe("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>fu(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){pe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,a){let n=hr.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,n,i,a)}async createTemporaryTensor(e,t,r){pe("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=hr.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,i,r,!1);let n=this.temporarySessionTensorIds.get(e);return n?n.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!be().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");pe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return An(r,t)}}registerMLTensor(e,t,r,i){let a=hr.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.registerTensor(e,t,a,i);return pe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${n}}`),n}registerMLConstant(e,t,r,i,a,n,s=!1){if(!n)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let l=n.get(u);if(!l)throw new Error(`File with name ${u} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,c;switch(a.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(s){let h=Qa(new Uint8Array(d),"int64");c=new Int32Array(h.buffer),a.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return pe("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(a,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=hr.get(Nt(t)),a=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!a?.input.dataTypes.includes(i):!!a?.output.dataTypes.includes(i)}flush(){}}}),On=L(()=>{}),fa,jr,Kr,mu,gu,ma,Ja,yu,mc,ay=L(()=>{mt(),On(),fa=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),jr=[],Kr=e=>Math.ceil(Number(e)/16)*16,mu=e=>{for(let t=0;t<jr.length;t++){let r=jr[t];if(e<=r)return r}return Math.ceil(e/16)*16},gu=1,ma=()=>gu++,Ja=async(e,t,r,i)=>{let a=Kr(r),n=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,a),e.flush(),await n.mapAsync(GPUMapMode.READ);let u=n.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{n.destroy()}},yu=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of fa)jr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,n=Kr(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=u.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,a)),u.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(u,0,s.gpuData.buffer,0,n),this.backend.device.queue.submit([d.finish()]),u.destroy(),pe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=Kr(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return pe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=ma();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),pe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),pe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=mu(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||n){let u=(a?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:ma(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),pe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return pe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Ja(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=fa.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(pe("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},mc=(...e)=>new yu(...e)}),_u,fe,Te=L(()=>{_u=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},fe=e=>new _u(e)}),rr,Xr,Ie,Be,Y,Se,en,Jt,St,X,fr,N,j,gc,Rn,bu,yc,ne=L(()=>{te(),ae(),rr=64,Xr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ie=(e,t=1)=>{let r=Xr(e,t);return typeof r=="string"?r:r[0]},Be=(e,t=1)=>{let r=Xr(e,t);return typeof r=="string"?r:r[1]},Y=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:O.computeStrides(r)})}),t},Se=e=>e%4===0?4:e%2===0?2:1,en=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Jt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,St=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,X=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,fr=(e,t,r,i,a)=>{let n=typeof r=="number",s=n?r:r.length,u=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Xr(t,a),c=typeof d=="string"?d:d[1],h=typeof d=="string"?d:d[0],g={indices:l,value:c,storage:h,tensor:t},_=U=>typeof U=="string"?U:`${U}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=n?"uniforms.":"",S=`${w}${e}_shape`,x=`${w}${e}_strides`,b="";for(let U=0;U<s-1;U++)b+=`
    let dim${U} = current / ${X(x,U,s)};
    let rest${U} = current % ${X(x,U,s)};
    indices[${U}] = dim${U};
    current = rest${U};
    `;b+=`indices[${s-1}] = current;`;let E=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${b}
    return indices;
  }`,T=U=>(y.offsetToIndices=!0,s<2?U:`o2i_${e}(${U})`),I=[];if(s>=2)for(let U=s-1;U>=0;U--)I.push(`${X(x,U,s)} * (indices[${U}])`);let z=s<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${I.join("+")};
  }`,C=U=>(y.indicesToOffset=!0,s<2?U:`i2o_${e}(${U})`),$=(...U)=>s===0?"0u":`${g.indices}(${U.map(_).join(",")})`,M=(U,ee)=>s<2?`${U}`:`${X(U,ee,s)}`,P=(U,ee,Z)=>s<2?`${U}=${Z};`:`${X(U,ee,s)}=${Z};`,W={},H=(U,ee)=>{y.broadcastedIndicesToOffset=!0;let Z=`${ee.name}broadcastedIndicesTo${e}Offset`;if(Z in W)return`${Z}(${U})`;let G=[];for(let ke=s-1;ke>=0;ke--){let Oe=ee.indicesGet("outputIndices",ke+ee.rank-s);G.push(`${M(x,ke)} * (${Oe} % ${M(S,ke)})`)}return W[Z]=`fn ${Z}(outputIndices: ${ee.type.indices}) -> u32 {
             return ${G.length>0?G.join("+"):"0u"};
           }`,`${Z}(${U})`},K=(U,ee)=>(()=>{if(g.storage===g.value)return`${e}[${U}]=${ee};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${U}]=vec2<u32>(u32(${ee}), select(0u, 0xFFFFFFFFu, ${ee} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${U}]=vec2<u32>(u32(${ee}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${U}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${ee}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),R=U=>(()=>{if(g.storage===g.value)return`${e}[${U}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${U}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${U}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${U}] & 0xFFu), bool(${e}[${U}] & 0xFF00u), bool(${e}[${U}] & 0xFF0000u), bool(${e}[${U}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),D=s<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${c} {
    return ${R(`i2o_${e}(indices)`)};
  }`,F=s<2?"":(()=>{let U=u.map(Z=>`d${Z}: u32`).join(", "),ee=u.map(Z=>`d${Z}`).join(", ");return`
  fn get_${e}(${U}) -> ${c} {
    return get_${e}ByIndices(${$(ee)});
  }`})(),Q=(...U)=>{if(U.length!==s)throw new Error(`indices length must be ${s}`);let ee=U.map(_).join(",");return s===0?R("0u"):s===1?R(ee[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${ee})`)},J=U=>s<2?R(U):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${U})`),re=s<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${c}) {
    ${K(`i2o_${e}(indices)`,"value")}
  }`,se=s<2?"":(()=>{let U=u.map(Z=>`d${Z}: u32`).join(", "),ee=u.map(Z=>`d${Z}`).join(", ");return`
  fn set_${e}(${U}, value: ${c}) {
    set_${e}ByIndices(${$(ee)}, value);
  }`})();return{impl:()=>{let U=[],ee=!1;return y.offsetToIndices&&(U.push(E),ee=!0),y.indicesToOffset&&(U.push(z),ee=!0),y.broadcastedIndicesToOffset&&(Object.values(W).forEach(Z=>U.push(Z)),ee=!0),y.set&&(U.push(se),ee=!0),y.setByIndices&&(U.push(re),ee=!0),y.get&&(U.push(F),ee=!0),y.getByIndices&&(U.push(D),ee=!0),!n&&ee&&U.unshift(`const ${S} = ${g.indices}(${r.join(",")});`,`const ${x} = ${g.indices}(${O.computeStrides(r).join(",")});`),U.join(`
`)},type:g,offsetToIndices:T,indicesToOffset:C,broadcastedIndicesToOffset:H,indices:$,indicesGet:M,indicesSet:P,set:(...U)=>{if(U.length!==s+1)throw new Error(`indices length must be ${s}`);let ee=U[s];if(typeof ee!="string")throw new Error("value must be string");let Z=U.slice(0,s).map(_).join(",");return s===0?K("0u",ee):s===1?K(Z[0],ee):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${Z}, ${ee})`)},setByOffset:K,setByIndices:(U,ee)=>s<2?K(U,ee):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${U}, ${ee});`),get:Q,getByOffset:R,getByIndices:J,usage:i,name:e,strides:x,shape:S,rank:s}},N=(e,t,r,i=1)=>fr(e,t,r,"input",i),j=(e,t,r,i=1)=>fr(e,t,r,"output",i),gc=(e,t,r)=>fr(e,t,r,"atomicOutput",1),Rn=(e,t,r,i=1)=>fr(e,t,r,"internal",i),bu=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=rr){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},yc=(e,t)=>new bu(e,t)}),wu,ga,$u,vu,xu,Su,Ue,_c,bc,Tt=L(()=>{te(),ae(),Te(),ne(),wu=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ga=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),$u=(e,t)=>O.sortBasedOnPerm(e,ga(e.length,t)),vu=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)a+=`a[${e[n]}]=i[${n}];`;return a+="return a;}"},xu=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},Su=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Ue=(e,t)=>{let r=e.dataType,i=e.dims.length,a=ga(i,t),n=$u(e.dims,a),s=e.dims,u=n,l=i<2||Su(a,e.dims),d;if(l)return d=y=>{let w=N("input",r,s,4),S=j("output",r,u,4);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,S)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:d};let{newShape:c,newPerm:h}=xu(e.dims,a),g=O.areEqual(h,[2,3,1]),_=O.areEqual(h,[3,1,2]);if(c.length===2||g||_){s=g?[c[0],c[1]*c[2]]:_?[c[0]*c[1],c[2]]:c,u=[s[1],s[0]];let y=16;return d=w=>{let S=N("a",r,s.length),x=j("output",r,u.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(S,x)}
  var<workgroup> tile : array<array<${x.type.value}, ${y+1}>, ${y}>;
  ${w.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${x.setByIndices(`${x.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/y),y:Math.ceil(u[0]/y)},programUniforms:[{type:12,data:w},...Y(s,u)]}},getShaderSource:d}}return d=y=>{let w=N("a",r,s.length),S=j("output",r,u.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,S)}

  ${vu(a,i,w,S)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...Y(s,u)]}},getShaderSource:d}},_c=(e,t)=>{wu(e.inputs,t.perm),e.compute(Ue(e.inputs[0],t.perm))},bc=e=>fe({perm:e.perm})}),Tu,Eu,ku,Iu,zu,Cu,Au,Ou,Ru,Bu,He,wc,$c,vc,xc,Sc,Tc,Ec,kc,Ic,zc,ny=L(()=>{te(),ae(),ne(),Bn(),Tt(),Tu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Eu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},ku={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Iu={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},zu=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Cu=(e,t)=>{let r=[],i=e.length;for(let n=0;n<i;n++)t.indexOf(n)===-1&&r.push(e[n]);let a=t.map(n=>e[n]);return[r,a]},Au=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?i.push(e[a++]):i.push(1);return i},Ou=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Ru=(e,t)=>{let r=[];if(!Ou(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Bu=(e,t,r,i,a,n,s)=>{let u=r[0].dims,l=O.size(n),d=O.size(s),c=N("_A",r[0].dataType,u),h=j("output",a,n),g=64;l===1&&(g=256);let _=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,y=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(c,h)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${ku[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${Tu[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Eu[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${i==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${Iu[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},He=(e,t,r,i)=>{let a=e.inputs.length===1?r:tn(e.inputs,r),n=a.axes;n.length===0&&!a.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((_,y)=>y));let s=O.normalizeAxes(n,e.inputs[0].dims.length),u=s,l=e.inputs[0],d=Ru(u,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Ue(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=zu(u.length,l.dims.length));let[c,h]=Cu(l.dims,u),g=c;a.keepDims&&(g=Au(c,s)),e.compute(Bu(t,a.cacheKey,[l],i,e.inputs[0].dataType,g,h),{inputs:[l]})},wc=(e,t)=>{He(e,"ReduceMeanShared",t,"mean")},$c=(e,t)=>{He(e,"ReduceL1Shared",t,"l1")},vc=(e,t)=>{He(e,"ReduceL2Shared",t,"l2")},xc=(e,t)=>{He(e,"ReduceLogSumExpShared",t,"logSumExp")},Sc=(e,t)=>{He(e,"ReduceMaxShared",t,"max")},Tc=(e,t)=>{He(e,"ReduceMinShared",t,"min")},Ec=(e,t)=>{He(e,"ReduceProdShared",t,"prod")},kc=(e,t)=>{He(e,"ReduceSumShared",t,"sum")},Ic=(e,t)=>{He(e,"ReduceSumSquareShared",t,"sumSquare")},zc=(e,t)=>{He(e,"ReduceLogSumShared",t,"logSum")}}),je,Mu,ci,tn,Ke,Nu,Du,Pu,Uu,Lu,qu,Wu,Vu,Gu,Fu,Xe,Cc,Ac,Oc,Rc,Bc,Mc,Nc,Dc,Pc,Uc,Bn=L(()=>{te(),ae(),Te(),ne(),ny(),je=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Mu=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],ci=(e,t,r,i,a,n,s=!1,u=!1)=>{let l=[],d=r[0].dims,c=d.length,h=O.normalizeAxes(a,c),g=!u&&h.length===0;d.forEach((w,S)=>{g||h.indexOf(S)>=0?s&&l.push(1):l.push(w)});let _=l.length,y=O.size(l);return{name:e,shaderCache:t,getShaderSource:w=>{let S=[],x=N("_A",r[0].dataType,c),b=j("output",n,_),E=i(x,b,h),T=E[2];for(let I=0,z=0;I<c;I++)g||h.indexOf(I)>=0?(s&&z++,T=`for(var j${I}: u32 = 0; j${I} < ${d[I]}; j${I}++) {
                  ${E[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${x.indicesSet("input_indices",I,`j${I}`)}
                  ${T}
                }`):(S.push(`${x.indicesSet("input_indices",I,b.indicesGet("output_indices",z))};`),z++);return`

        ${w.registerUniform("output_size","u32").declareVariables(x,b)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${x.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${E[0]}       // init ops for reduce max/min
          ${E[1]}
          ${T}
          ${E[3]}
          ${E.length===4?b.setByOffset("global_idx","value"):E.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:n}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...Y(d,l)]})}},tn=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),fe({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ke=(e,t,r,i)=>{let a=e.inputs,n=a.length===1?r:tn(a,r);e.compute(ci(t,{hint:n.cacheKey,inputDependencies:["rank"]},[a[0]],n.noopWithEmptyAxes&&n.axes.length===0?Mu:i,n.axes,a[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},Nu=(e,t)=>{je(e.inputs),Ke(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Du=(e,t)=>{je(e.inputs),Ke(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Pu=(e,t)=>{je(e.inputs),Ke(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Uu=(e,t)=>{je(e.inputs),Ke(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Lu=(e,t)=>{je(e.inputs),Ke(e,"ReduceMax",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},qu=(e,t)=>{je(e.inputs),Ke(e,"ReduceMean",t,(r,i,a)=>{let n=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},Wu=(e,t)=>{je(e.inputs),Ke(e,"ReduceMin",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Vu=(e,t)=>{je(e.inputs),Ke(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Gu=(e,t)=>{je(e.inputs),Ke(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Fu=(e,t)=>{je(e.inputs),Ke(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Xe=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?i*=e[n]:a*=e[n];return a<32&&i>1024},Cc=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?qu(e,t):wc(e,t)},Ac=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Du(e,t):$c(e,t)},Oc=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Pu(e,t):vc(e,t)},Rc=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Uu(e,t):xc(e,t)},Bc=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Lu(e,t):Sc(e,t)},Mc=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Wu(e,t):Tc(e,t)},Nc=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Vu(e,t):Ec(e,t)},Dc=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Gu(e,t):kc(e,t)},Pc=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fu(e,t):Ic(e,t)},Uc=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Nu(e,t):zc(e,t)}}),ya,Lc,qc,rn,sy=L(()=>{te(),Te(),Bn(),ya=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Lc=(e,t)=>{ya(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(ci("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},qc=(e,t)=>{ya(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(ci("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},rn=e=>fe(e)}),Hu,Yr,ju,Ku,Xu,Ir,Yu,Wc,Mn=L(()=>{te(),ae(),On(),ne(),Hu=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],u=e[5];if(s&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=a.dims[0]/3,g=h,_=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let E of t.qkvHiddenSizes)if(E%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let y=d;if(h!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==h+g+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(s){if(g!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=s.dims[3])}let S=y+w,x=-1,b=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==d||u.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:w,kvSequenceLength:y,totalSequenceLength:S,maxSequenceLength:x,inputHiddenSize:c,hiddenSize:h,vHiddenSize:_,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Yr=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,ju=(e,t,r,i,a,n,s,u)=>{let l=Se(s?1:n),d=64,c=n/l;c<d&&(d=32);let h=Math.ceil(n/l/d),g=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:c},{type:12,data:h}],_=Ie(e.dataType,l),y=Be(1,l),w=["type"];s&&w.push("type"),u&&w.push("type");let S=x=>{let b=j("x",e.dataType,e.dims,l),E=[b],T=s?N("seq_lens",s.dataType,s.dims):void 0;T&&E.push(T);let I=u?N("total_sequence_length_input",u.dataType,u.dims):void 0;I&&E.push(I);let z=Be(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${x.registerUniforms(C).declareVariables(...E)}
  ${x.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Yr(T,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${y}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${y}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${y}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${y}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${z}(1.0) / ${z}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${z}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${_};${l}`,inputDependencies:w},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:g})}},Ku=(e,t,r,i,a,n,s,u,l)=>{let d=s+n.kvSequenceLength,c=[n.batchSize,n.numHeads,n.sequenceLength,d],h=e>1&&i,g=n.kvNumHeads?n.kvNumHeads:n.numHeads,_=h?[n.batchSize,g,d,n.headSize]:void 0,y=n.nReps?n.nReps:1,w=n.scale===0?1/Math.sqrt(n.headSize):n.scale,S=Se(n.headSize),x=n.headSize/S,b=12,E={x:Math.ceil(d/b),y:Math.ceil(n.sequenceLength/b),z:n.batchSize*n.numHeads},T=[{type:12,data:n.sequenceLength},{type:12,data:x},{type:12,data:d},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:w},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:y}],I=h&&i&&O.size(i.dims)>0,z=["type","type"];I&&z.push("type"),a&&z.push("type"),u&&z.push("type"),l&&z.push("type");let C=[{dims:c,dataType:t.dataType,gpuDataType:0}];h&&C.push({dims:_,dataType:t.dataType,gpuDataType:0});let $=M=>{let P=N("q",t.dataType,t.dims,S),W=N("key",r.dataType,r.dims,S),H=[P,W];if(I){let re=N("past_key",i.dataType,i.dims,S);H.push(re)}a&&H.push(N("attention_bias",a.dataType,a.dims));let K=u?N("seq_lens",u.dataType,u.dims):void 0;K&&H.push(K);let R=l?N("total_sequence_length_input",l.dataType,l.dims):void 0;R&&H.push(R);let D=j("output",t.dataType,c),F=[D];h&&F.push(j("present_key",t.dataType,_,S));let Q=Be(1,S),J=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${P.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${P.type.storage}, ${b*b}>;
  ${M.registerUniforms(J).declareVariables(...H,...F)}
  ${M.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Yr(K,R,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Q}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&h?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${h?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Q}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${D.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${a!==void 0};${i!==void 0};${e}`,inputDependencies:z},getRunData:()=>({outputs:C,dispatchGroup:E,programUniforms:T}),getShaderSource:$}},Xu=(e,t,r,i,a,n,s=void 0,u=void 0)=>{let l=n+a.kvSequenceLength,d=a.nReps?a.nReps:1,c=a.vHiddenSize*d,h=e>1&&i,g=a.kvNumHeads?a.kvNumHeads:a.numHeads,_=h?[a.batchSize,g,l,a.headSize]:void 0,y=[a.batchSize,a.sequenceLength,c],w=12,S={x:Math.ceil(a.vHeadSize/w),y:Math.ceil(a.sequenceLength/w),z:a.batchSize*a.numHeads},x=[{type:12,data:a.sequenceLength},{type:12,data:l},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:c},{type:12,data:n},{type:12,data:a.kvSequenceLength},{type:12,data:d}],b=h&&i&&O.size(i.dims)>0,E=["type","type"];b&&E.push("type"),s&&E.push("type"),u&&E.push("type");let T=[{dims:y,dataType:t.dataType,gpuDataType:0}];h&&T.push({dims:_,dataType:t.dataType,gpuDataType:0});let I=z=>{let C=N("probs",t.dataType,t.dims),$=N("v",r.dataType,r.dims),M=[C,$];b&&M.push(N("past_value",i.dataType,i.dims));let P=s?N("seq_lens",s.dataType,s.dims):void 0;s&&M.push(P);let W=u?N("total_sequence_length_input",u.dataType,u.dims):void 0;u&&M.push(W);let H=[j("output",t.dataType,y)];h&&H.push(j("present_value",t.dataType,_));let K=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${C.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${C.type.value}, ${w*w}>;
  ${z.registerUniforms(K).declareVariables(...M,...H)}
  ${z.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Yr(P,W,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&h?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${h?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:T,dispatchGroup:S,programUniforms:x}),getShaderSource:I}},Ir=(e,t,r,i,a,n,s,u,l,d,c=void 0,h=void 0)=>{let g=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),_=g>1?s:void 0,y=g>1?u:void 0,w=g>1?d.pastSequenceLength:0,S=w+d.kvSequenceLength,x=l&&O.size(l.dims)>0?l:void 0,b=[t,r];_&&O.size(_.dims)>0&&b.push(_),x&&b.push(x),c&&b.push(c),h&&b.push(h);let E=e.compute(Ku(g,t,r,_,x,d,w,c,h),{inputs:b,outputs:g>1?[-1,1]:[-1]})[0];e.compute(ju(E,d.batchSize,d.numHeads,w,d.sequenceLength,S,c,h),{inputs:c&&h?[E,c,h]:[E],outputs:[]});let T=[E,i];y&&O.size(y.dims)>0&&T.push(y),c&&T.push(c),h&&T.push(h),e.compute(Xu(g,E,i,y,d,w,c,h),{inputs:T,outputs:g>1?[0,2]:[0]})},Yu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,n=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=h=>{let g=j("output_q",l[0].dataType,r),_=j("output_k",l[0].dataType,r),y=j("output_v",l[0].dataType,r),w=N("input",l[0].dataType,l[0].dims),S=N("weight",l[1].dataType,l[1].dims),x=N("bias",l[2].dataType,l[2].dims),b=w.type.storage,E=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${b}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${b}, ${s*s}>;
  var<workgroup> tileWeightK: array<${b}, ${s*s}>;
  var<workgroup> tileWeightV: array<${b}, ${s*s}>;
  ${h.registerUniforms(E).declareVariables(w,S,x,g,_,y)}
  ${h.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},Wc=(e,t)=>{let r=Hu(e.inputs,t),[i,a,n]=Yu(e,r);return Ir(e,i,a,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Zu,Qu,Ju,Vc,oy=L(()=>{Ge(),te(),ae(),Te(),ne(),Zu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,n)=>{let s=a.length;if(s!==i.length)throw new Error(`${n}: num dimensions != ${s}`);a.forEach((u,l)=>{if(u!==i[l])throw new Error(`${n}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Qu=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,n=e[0].dims,s=i?Se(n[n.length-1]):1,u=a==="NHWC"&&n.length>1?s:1,l=O.size(n)/s,d=i,c=d?n.length:n,h=N("x",e[0].dataType,e[0].dims,s),g=N("scale",e[1].dataType,e[1].dims,u),_=N("bias",e[2].dataType,e[2].dims,u),y=N("inputMean",e[3].dataType,e[3].dims,u),w=N("inputVar",e[4].dataType,e[4].dims,u),S=j("y",e[0].dataType,c,s),x=()=>{let E="";if(i)E=`let cOffset = ${n.length===1?"0u":a==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")E=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{E=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let T=1;T<g.rank;T++)E+=`cIndices[${T}] = outputIndices[${T}];`;E+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return E},b=E=>`
  const epsilon = ${r};
  ${E.registerUniform("outputSize","u32").declareVariables(h,g,_,y,w,S)}
  ${E.mainStart()}
  ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${s}`)};
    ${x()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...Y(n)]:[{type:12,data:l}]})}},Ju=e=>fe(e),Vc=(e,t)=>{let{inputs:r,outputCount:i}=e,a=Ju({...t,outputCount:i});if(_e.webgpu.validateInputContent&&Zu(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Qu(r,a))}}),el,tl,Gc,uy=L(()=>{ae(),ne(),el=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},tl=e=>{let t=e[0].dims,r=e[0].dims[2],i=O.size(t)/4,a=e[0].dataType,n=N("input",a,t,4),s=N("bias",a,[r],4),u=N("residual",a,t,4),l=j("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(n,s,u,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Gc=e=>{el(e.inputs),e.compute(tl(e.inputs))}}),rl,he,Fc,Hc,jc,Kc,Xc,Yc,Zc,Qc,Jc,il,eh,th,rh,ih,xr,ah,ni,nh,sh,oh,uh,lh,dh,ph,ch,hh,fh,mh,gh,yh,_h,bh,wh,_a,$h,an,nn,vh,xh,Sh,al,nl,Th,Nn=L(()=>{te(),ae(),Te(),ne(),rl=(e,t,r,i,a,n,s)=>{let u=Math.ceil(t/4),l="";typeof a=="string"?l=`${a}(a)`:l=a("a");let d=N("inputData",r,[u],4),c=j("outputData",i,[u],4),h=[{name:"vec_size",type:"u32"}];return s&&h.push(...s),`
      ${e.registerUniforms(h).declareVariables(d,c)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},he=(e,t,r,i,a,n=e.dataType,s,u)=>{let l=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:d=>rl(d,O.size(e.dims),e.dataType,n,r,i,u),getRunData:d=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(O.size(d[0].dims)/64/4)},programUniforms:l})}},Fc=e=>{e.compute(he(e.inputs[0],"Abs","abs"))},Hc=e=>{e.compute(he(e.inputs[0],"Acos","acos"))},jc=e=>{e.compute(he(e.inputs[0],"Acosh","acosh"))},Kc=e=>{e.compute(he(e.inputs[0],"Asin","asin"))},Xc=e=>{e.compute(he(e.inputs[0],"Asinh","asinh"))},Yc=e=>{e.compute(he(e.inputs[0],"Atan","atan"))},Zc=e=>{e.compute(he(e.inputs[0],"Atanh","atanh"))},Qc=e=>fe(e),Jc=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(he(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},il=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return fe({min:t,max:r})},eh=(e,t)=>{let r=t||il(e.inputs),i=Be(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},th=e=>{e.compute(he(e.inputs[0],"Ceil","ceil"))},rh=e=>{e.compute(he(e.inputs[0],"Cos","cos"))},ih=e=>{e.compute(he(e.inputs[0],"Cosh","cosh"))},xr=e=>fe(e),ah=(e,t)=>{let r=Be(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},ni=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,nh=e=>{let t=Be(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,ni(t)))},sh=e=>{e.compute(he(e.inputs[0],"Exp","exp"))},oh=e=>{e.compute(he(e.inputs[0],"Floor","floor"))},uh=e=>{let t=Be(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,ni(t)))},lh=(e,t)=>{let r=Be(e.inputs[0].dataType);e.compute(he(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},dh=e=>{e.compute(he(e.inputs[0],"Not",t=>`!${t}`))},ph=e=>{e.compute(he(e.inputs[0],"Neg",t=>`-${t}`))},ch=e=>{e.compute(he(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},hh=e=>{let t=Be(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},fh=e=>{e.compute(he(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},mh=e=>fe(e),gh=(e,t)=>{let r=Be(e.inputs[0].dataType);e.compute(he(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},yh=e=>{e.compute(he(e.inputs[0],"Sin","sin"))},_h=e=>{e.compute(he(e.inputs[0],"Sinh","sinh"))},bh=e=>{e.compute(he(e.inputs[0],"Sqrt","sqrt"))},wh=e=>{e.compute(he(e.inputs[0],"Tan","tan"))},_a=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,$h=e=>{e.compute(he(e.inputs[0],"Tanh",_a))},an=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${_a("v")};
}
`,nn=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,vh=e=>{let t=Be(e.inputs[0].dataType);e.compute(he(e.inputs[0],"FastGelu",nn,an(t),void 0,e.inputs[0].dataType))},xh=(e,t)=>{let r=Be(e.inputs[0].dataType);return e.compute(he(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Sh=e=>{e.compute(he(e.inputs[0],"Log","log"))},al=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,nl=e=>`quick_gelu_impl(${e})`,Th=(e,t)=>{let r=Be(e.inputs[0].dataType);e.compute(he(e.inputs[0],"QuickGelu",nl,al(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),sl,ol,Eh,ly=L(()=>{ae(),ne(),Nn(),sl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ol=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=N("input",e[0].dataType,e[0].dims,4),i=N("bias",e[0].dataType,[e[0].dims[2]],4),a=j("output",e[0].dataType,t,4),n=O.size(t)/4,s=Ie(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,i,a)}

  ${ni(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Eh=e=>{sl(e.inputs),e.compute(ol(e.inputs))}}),ul,ll,Ye,kh,Ih,zh,Ch,Ah,Oh,Rh,Bh,Mh,Nh,dy=L(()=>{te(),ae(),ne(),ul=(e,t,r,i,a,n,s,u,l,d,c,h)=>{let g,_;typeof u=="string"?g=_=(b,E)=>`${u}((${b}),(${E}))`:typeof u=="function"?g=_=u:(g=u.scalar,_=u.vector);let y=j("outputData",c,i.length,4),w=N("aData",l,t.length,4),S=N("bData",d,r.length,4),x;if(a)if(n){let b=O.size(t)===1,E=O.size(r)===1,T=t.length>0&&t[t.length-1]%4===0,I=r.length>0&&r[r.length-1]%4===0;b||E?x=y.setByOffset("global_idx",_(b?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),E?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):x=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",_(s||T?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||I?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else x=y.setByOffset("global_idx",_(w.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(E,T,I="")=>{let z=`aData[indexA${T}][componentA${T}]`,C=`bData[indexB${T}][componentB${T}]`;return`
            let outputIndices${T} = ${y.offsetToIndices(`global_idx * 4u + ${T}u`)};
            let offsetA${T} = ${w.broadcastedIndicesToOffset(`outputIndices${T}`,y)};
            let offsetB${T} = ${S.broadcastedIndicesToOffset(`outputIndices${T}`,y)};
            let indexA${T} = offsetA${T} / 4u;
            let indexB${T} = offsetB${T} / 4u;
            let componentA${T} = offsetA${T} % 4u;
            let componentB${T} = offsetB${T} % 4u;
            ${E}[${T}] = ${I}(${g(z,C)});
          `};c===9?x=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:x=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,S,y)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${x}
      }`},ll=(e,t,r,i,a,n,s=r.dataType)=>{let u=r.dims.map(Number),l=i.dims.map(Number),d=!O.areEqual(u,l),c=u,h=O.size(u),g=!1,_=!1,y=[d];if(d){let w=tr.calcShape(u,l,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");c=w.slice(),h=O.size(c);let S=O.size(u)===1,x=O.size(l)===1,b=u.length>0&&u[u.length-1]%4===0,E=l.length>0&&l[l.length-1]%4===0;y.push(S),y.push(x),y.push(b),y.push(E);let T=1;for(let I=1;I<c.length;I++){let z=u[u.length-I],C=l[l.length-I];if(z===C)T*=z;else break}T%4===0?(_=!0,g=!0):(S||x||b||E)&&(g=!0)}else g=!0;return y.push(g),{name:e,shaderCache:{hint:t+y.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>ul(w,u,l,c,g,d,_,a,r.dataType,i.dataType,s,n),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(c)/4)},...Y(u,l,c)]})}},Ye=(e,t,r,i,a,n)=>{e.compute(ll(t,a??"",e.inputs[0],e.inputs[1],r,i,n))},kh=e=>{Ye(e,"Add",(t,r)=>`${t}+${r}`)},Ih=e=>{Ye(e,"Div",(t,r)=>`${t}/${r}`)},zh=e=>{Ye(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Ch=e=>{Ye(e,"Mul",(t,r)=>`${t}*${r}`)},Ah=e=>{let t=N("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ye(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Oh=e=>{Ye(e,"Sub",(t,r)=>`${t}-${r}`)},Rh=e=>{Ye(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Bh=e=>{Ye(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Mh=e=>{Ye(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Nh=e=>{Ye(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),dl,pl,cl,hl,Dh,Ph,py=L(()=>{te(),ae(),Te(),ne(),dl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,n=i.dims.length;e.forEach((s,u)=>{if(u!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},pl=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,cl=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let n=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(n):a===0?i.push(`if (inputIndex == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${a}) { ${n} }`)}return i.join(`
`)},hl=(e,t,r,i)=>{let a=O.size(r),n=new Array(e.length),s=new Array(e.length),u=0,l=[],d=[],c=[{type:12,data:a}];for(let w=0;w<e.length;++w)u+=e[w].dims[t],n[w]=u,d.push(e[w].dims.length),s[w]=N(`input${w}`,i,d[w]),l.push("rank"),c.push({type:12,data:n[w]});for(let w=0;w<e.length;++w)c.push(...Y(e[w].dims));c.push(...Y(r));let h=j("output",i,r.length),g=h.indicesGet("indices",t),_=Array.from(Array(n.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),y=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)w.registerUniform(`sizeInConcatAxis${S}`,"u32");return w.declareVariables(...s,h)})()}

  ${pl(n.length,_)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${_});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${cl(s,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:y}},Dh=(e,t)=>{let r=e.inputs,i=r[0].dims,a=O.normalizeAxis(t.axis,i.length);dl(r,a);let n=i.slice();n[a]=r.reduce((u,l)=>u+(l.dims.length>a?l.dims[a]:0),0);let s=r.filter(u=>O.size(u.dims)>0);e.compute(hl(s,a,n,r[0].dataType),{inputs:s})},Ph=e=>fe({axis:e.axis})}),qt,Wt,Vt,Dn,jt=L(()=>{te(),ae(),qt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Wt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Vt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Dn=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[dc,pc];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ce,Uh,Pn=L(()=>{Ce=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Uh=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Lh,cy=L(()=>{Lh=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Tr,Un,Ln=L(()=>{te(),ae(),ne(),jt(),Tr=(e,t,r,i,a)=>{let n=i-r;return`
      ${Array.from({length:r}).map((s,u)=>`
      if (${X(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,X(a,u+n,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},Un=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s[s.length-2],d=u[u.length-1],c=s[s.length-1],h=Se(d),g=Se(c),_=Se(l),y=O.size(r)/h/_,w=e.length>2,S=i?i.slice(0,-2):r.slice(0,-2),x=[O.size(S),l,d],b=[{type:12,data:y},{type:12,data:l},{type:12,data:d},{type:12,data:c}];Wt(t,b),b.push(...Y(S,s,u)),w&&b.push(...Y(e[2].dims)),b.push(...Y(x));let E=T=>{let I=Rn("batch_dims",e[0].dataType,S.length),z=N("a",e[0].dataType,s.length,g),C=N("b",e[1].dataType,u.length,h),$=j("output",e[0].dataType,x.length,h),M=Ie($.type.tensor),P=qt(t,$.type.value,M),W=[z,C],H="";if(w){let D=a?h:1;W.push(N("bias",e[2].dataType,e[2].dims.length,D)),H=`${a?`value += bias[col / ${D}];`:`value += ${$.type.value}(bias[row + i]);`}`}let K=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Vt(t,K);let R=()=>{let D=`var a_data: ${z.type.value};`;for(let F=0;F<g;F++)D+=`
              let b_data${F} = b[(b_offset + (k + ${F}) * uniforms.N + col) / ${h}];`;for(let F=0;F<_;F++){D+=`a_data = a[(a_offset + (row + ${F}) * uniforms.K + k) / ${g}];`;for(let Q=0;Q<g;Q++)D+=`
            values[${F}] = fma(${C.type.value}(a_data${g===1?"":`[${Q}]`}), b_data${Q}, values[${F}]);
`}return D};return`
  ${T.registerUniforms(K).registerInternalVariables(I).declareVariables(...W,$)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${z.type.indices};
    ${Tr("a_indices",z,z.rank-2,I.rank,"batch_indices")}
    ${z.indicesSet("a_indices",z.rank-2,0)}
    ${z.indicesSet("a_indices",z.rank-1,0)}
    let a_offset = ${z.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${Tr("b_indices",C,C.rank-2,I.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${$.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${R()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${H}
      ${P}
      let cur_indices = ${$.type.indices}(batch, row + i, col);
      let offset = ${$.indicesToOffset("cur_indices")};
      ${$.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${h};${g};${_};${a}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:b}),getShaderSource:E}}}),fl,ml,sn,ba,gl,on,yl,hi,qn=L(()=>{te(),ae(),ne(),jt(),Ln(),Pn(),fl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,ml=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,sn=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=a?l:n,h=a?n:l,g=c/t[0],_=n/t[1];if(!((a&&g===4&&e[1]===4||!a&&(g===3||g===4))&&c%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${c/g}>, ${h}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${g};
const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${fl(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${g===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${ml(a,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ba=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,gl=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",on=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],h=a?d:n,g=a?n:d;if(!(g%t[1]===0&&h%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let _=g/t[1],y=h/t[0],w=n/t[1],S=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${ba(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${y}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${ba(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${gl(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${h}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},yl=(e,t,r,i,a=!1)=>{let[n,s,u,l]=i,d=Ie(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ce(e,d)} {
      var value = ${Ce(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${Tr("aIndices",s,s.rank-2,n.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ce(e,d)} {
      var value = ${Ce(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${Tr("bIndices",u,u.rank-2,n.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ce(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Ce(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},hi=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s.slice(0,-2),d=u.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),h=O.size(c),g=s[s.length-2],_=s[s.length-1],y=u[u.length-1],w=_%4===0&&y%4===0,S=g<=8?[4,1,1]:[4,4,1],x=[8,8,1],b=[Math.ceil(y/x[0]/S[0]),Math.ceil(g/x[1]/S[1]),Math.ceil(h/x[2]/S[2])],E=w?4:1,T=[...l,g,_/E],I=T.length,z=[...d,_,y/E],C=z.length,$=[h,g,y/E],M=[{type:6,data:g},{type:6,data:y},{type:6,data:_}];Wt(t,M),M.push(...Y(c,T,z));let P=["rank","rank"],W=e.length>2;W&&(M.push(...Y(e[2].dims)),P.push("rank")),M.push(...Y($));let H=K=>{let R=c.length,D=Rn("batchDims",e[0].dataType,R,1),F=Ie(e[0].dataType),Q=N("a",e[0].dataType,I,E),J=N("b",e[1].dataType,C,E),re=j("result",e[0].dataType,$.length,E),se=[Q,J];if(W){let ke=a?E:1;se.push(N("bias",e[2].dataType,e[2].dims.length,ke))}let U=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Vt(t,U);let ee=Ie(re.type.tensor),Z=qt(t,re.type.value,ee),G=yl(E,W,Z,[D,Q,J,re],a);return`
  ${K.registerUniforms(U).registerInternalVariables(D).declareVariables(...se,re)}
  ${G}
  ${w?sn(S,x,F,D):on(S,x,F,D)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${w};${a}`,inputDependencies:P},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:M}),getShaderSource:H}}}),_l,qh,hy=L(()=>{te(),mt(),ne(),jt(),Pn(),cy(),qn(),_l=(e,t,r,i,a=!1,n,s=4,u=4,l=4,d="f32")=>{let c=M=>{switch(M){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${M} is not supported.`)}},h=M=>{switch(M){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${M} is not supported.`)}},g=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",x=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${x} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${x} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${x} % inChannels;
    var resData = ${Ce(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${w}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,E=e?t&&i?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${Ce(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${Ce(s,d)}(0.0);`,T=e?i&&r?h(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${h(u)}
    }
    return ${Ce(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${h(u)}
    }
    return ${Ce(u,d)}(0.0);`,I=Ce(l,d),z=Ce(e?s:u,d),C=Ce(e?u:s,d),$=qt(n,I,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?E:T}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?T:E}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${Uh(a)}
      ${$}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},qh=(e,t,r,i,a,n,s,u,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],h=r[0],g=d?r[2]:r[3],_=d?r[1]:r[2],y=d?r[3]:r[1],w=d&&(c%4===0||c%3===0)&&y%4===0,S=d?y:g*_,x=d?g*_:y,b=[8,8,1],E=i<=8?[4,1,1]:[4,4,1],T=[Math.ceil(S/b[0]/E[0]),Math.ceil(x/b[1]/E[1]),Math.ceil(h/b[2]/E[2])];pe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let I=w?d&&c%4!==0?3:4:1,z=b[1]*E[1],C=b[0]*E[0],$=Math.max(b[0]*I,b[1]),M=i%z===0,P=a%C===0,W=n%$===0,H=w?[I,4,4]:[1,1,1],K=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Wt(t,K),K.push(...Y(e[0].dims,e[1].dims));let R=["rank","rank"];s&&(K.push(...Y(e[2].dims)),R.push("rank")),K.push(...Y(r));let D=F=>{let Q=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Vt(t,Q);let J=w?4:1,re=Ie(e[0].dataType),se=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${re}>`:re}) {
        result[flatIndex] = ${w?`vec4<${re}>`:re}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${re}>`:re}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,U=N("x",e[0].dataType,e[0].dims.length,I===3?1:I),ee=N("w",e[1].dataType,e[1].dims.length,J),Z=[U,ee],G=j("result",e[0].dataType,r.length,J);if(s){let ke=N("bias",e[2].dataType,e[2].dims.length,J);Z.push(ke),se+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${re}>`:re} {
          return bias[coords.${d?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${Lh("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${F.registerUniforms(Q).declareVariables(...Z,G)}
        ${se}
        ${_l(d,M,P,W,s,t,H[0],H[1],H[2],re)}
        ${w?sn(E,b,re,void 0,!d,$):on(E,b,re,void 0,!d,$,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${w};${M};${P};${W};${z};${C};${$}`,inputDependencies:R},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:K}),getShaderSource:D}}}),bl,wa,mr,wl,$a,$l,Wh,Vh,fy=L(()=>{te(),mt(),ae(),ne(),jt(),Pn(),bl=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},wa=e=>typeof e=="number"?[e,e,e]:e,mr=(e,t)=>t<=1?e:e+(e-1)*(t-1),wl=(e,t,r,i=1)=>{let a=mr(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},$a=(e,t,r,i,a)=>{a==null&&(a=wl(e,t[0],i[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*a)/i[s]+1));return n},$l=(e,t,r,i,a,n,s,u,l,d)=>{let c,h,g,_;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=$a([t,r,i,1],[u,l,d],1,[a,n,s],e);h=y[0],g=y[1],_=y[2]}else if(Array.isArray(e)){if(!e.every((w,S,x)=>w===x[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=$a([t,r,i,1],[u,l,d],1,[a,n,s],e[0]);h=y[0],g=y[1],_=y[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/a),g=Math.ceil(r/n),_=Math.ceil(i/s);let y=(h-1)*a+u-t,w=(g-1)*n+l-r,S=(_-1)*s+d-i,x=Math.floor(y/2),b=y-x,E=Math.floor(w/2),T=w-E,I=Math.floor(S/2),z=S-I;c={top:E,bottom:T,left:I,right:z,front:x,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:h,outHeight:g,outWidth:_}},Wh=(e,t,r,i,a,n=!1,s="channelsLast")=>{let u,l,d,c,h;if(s==="channelsLast")[u,l,d,c,h]=e;else if(s==="channelsFirst")[u,h,l,d,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[g,,_,y,w]=t,[S,x,b]=wa(r),[E,T,I]=wa(i),z=mr(_,E),C=mr(y,T),$=mr(w,I),{padInfo:M,outDepth:P,outHeight:W,outWidth:H}=$l(a,l,d,c,S,x,b,z,C,$),K=n?g*h:g,R=[0,0,0,0,0];return s==="channelsFirst"?R=[u,K,P,W,H]:s==="channelsLast"&&(R=[u,P,W,H,K]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:d,inWidth:c,inChannels:h,outDepth:P,outHeight:W,outWidth:H,outChannels:K,padInfo:M,strideDepth:S,strideHeight:x,strideWidth:b,filterDepth:_,filterHeight:y,filterWidth:w,effectiveFilterDepth:z,effectiveFilterHeight:C,effectiveFilterWidth:$,dilationDepth:E,dilationHeight:T,dilationWidth:I,inShape:e,outShape:R,filterShape:t}},Vh=(e,t,r,i,a,n)=>{let s=n==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],l={x:r.map((S,x)=>x)},d=[Math.ceil(bl(l.x.map(S=>r[S]))/u[0]),1,1];pe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,h=O.size(r),g=[{type:12,data:h},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];Wt(t,g),g.push(...Y(e[0].dims,e[1].dims));let _=["rank","rank"],y=e.length===3;y&&(g.push(...Y(e[2].dims)),_.push("rank")),g.push(...Y(r));let w=S=>{let x=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Vt(t,x);let b=1,E=Ie(e[0].dataType),T=N("x",e[0].dataType,e[0].dims.length,c),I=N("W",e[1].dataType,e[1].dims.length,b),z=[T,I],C=j("result",e[0].dataType,r.length,b),$="";if(y){let W=N("bias",e[2].dataType,e[2].dims.length,b);z.push(W),$+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${E} {
          return bias[${s?X("coords",4,5):X("coords",1,5)}];
        }`}let M=Ce(c,E),P=qt(t,M,E);return`
            ${$}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${S.registerUniforms(x).declareVariables(...z,C)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${X("coords",0,T.rank)};
              let d2 = ${s?X("coords",T.rank-1,T.rank):X("coords",1,T.rank)};
              let xFRCCorner = vec3<u32>(${s?X("coords",1,T.rank):X("coords",2,T.rank)},
              ${s?X("coords",2,T.rank):X("coords",3,T.rank)},
              ${s?X("coords",3,T.rank):X("coords",4,T.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?X("uniforms.x_shape",1,T.rank):X("uniforms.x_shape",2,T.rank)};
              let xShapeZ = ${s?X("uniforms.x_shape",2,T.rank):X("uniforms.x_shape",3,T.rank)};
              let xShapeW = ${s?X("uniforms.x_shape",3,T.rank):X("uniforms.x_shape",4,T.rank)};
              let xShapeU = ${s?X("uniforms.x_shape",4,T.rank):X("uniforms.x_shape",1,T.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${y?"value = value + getBiasByOutputCoords(coords)":""};
              ${P}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${c};${y}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:g}),getShaderSource:w}}}),Gh,Fh,my=L(()=>{te(),ae(),ne(),jt(),Gh=(e,t,r,i)=>{let a=e.length>2,n=a?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,h=l&&c>=4?Se(d):1,g=O.size(r)/h,_=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];Wt(t,_),_.push(...Y(s,[u[0],u[1],u[2],u[3]/h]));let y=a?["rank","rank","rank"]:["rank","rank"];_.push(...Y([r[0],r[1],r[2],r[3]/h]));let w=S=>{let x=j("output",e[0].dataType,r.length,h),b=Ie(x.type.tensor),E=qt(t,x.type.value,b),T=N("x",e[0].dataType,s.length),I=N("w",e[1].dataType,u.length,h),z=[T,I];a&&z.push(N("b",e[2].dataType,e[2].dims,h));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Vt(t,C);let $=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${T.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${I.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${T.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(C).declareVariables(...z,x)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${x.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${x.type.value} = ${x.type.value}(0);
    ${$}
    ${n}
    ${E}
    ${x.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:w}},Fh=(e,t,r,i)=>{let a=e.length>2,n=Se(r[3]),s=Se(r[2]),u=O.size(r)/n/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],c=[r[0],r[1],r[2],r[3]/n],h=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Wt(t,h),h.push(...Y(l,d,c));let g=(s-1)*t.strides[1]+d[1],_=y=>{let w=j("output",e[0].dataType,c.length,n),S=Ie(w.type.tensor),x=qt(t,w.type.value,S),b=N("x",e[0].dataType,l.length,n),E=N("w",e[1].dataType,d.length,n),T=[b,E];a&&T.push(N("b",e[2].dataType,e[2].dims,n));let I=a?"value += b[output_channel];":"",z=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Vt(t,z),`
  ${y.registerUniforms(z).declareVariables(...T,w)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${g}>;
    var values: array<${w.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${E.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${I}
      ${x}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${g};${d[0]};${d[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h}),getShaderSource:_}}}),vl,Zr,xl,Qr,un,va,Sl,Tl,ln,gy=L(()=>{ae(),hy(),fy(),qn(),my(),jt(),Ln(),Tt(),vl=(e,t,r,i,a,n)=>{let s=e[0],u=e.slice(n?1:2,n?3:4),l=u.length,d=t[0],c=t.slice(2).map((g,_)=>g+(g-1)*(r[_]-1)),h=u.map((g,_)=>g+i[_]+i[_+l]).map((g,_)=>Math.floor((g-c[_]+a[_])/a[_]));return h.splice(0,0,s),h.splice(n?3:1,0,d),h},Zr=[2,3,1,0],xl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Qr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let i=e.pads.slice();pi.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},un=e=>{let t=Dn(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,n=e.group,s=e.kernel_shape,u=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},va=(e,t,r,i)=>{let a=r.format==="NHWC",n=vl(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let z=[t[0]];if(a){let C=e.kernelCustomData.wT??e.compute(Ue(t[1],Zr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),z.push(C)}else z.push(t[1]);t.length===3&&z.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Fh(z,r,n,i),{inputs:z}):e.compute(Gh(z,r,n,i),{inputs:z});return}let s=t.length===3,u=t[0].dims[a?1:2],l=t[0].dims[a?2:3],d=t[0].dims[a?3:1],c=t[1].dims[2],h=t[1].dims[3],g=n[a?1:2],_=n[a?2:3],y=n[a?3:1],w=a&&c===u&&h===l&&r.pads[0]===0&&r.pads[1]===0;if(w||c===1&&h===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let z=n[0],C,$,M,P=[];if(a){let K=e.kernelCustomData.wT??e.compute(Ue(t[1],Zr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=K),w){let R=u*l*d;C=t[0].reshape([1,z,R]),$=K.reshape([1,R,y]),M=[1,z,y]}else C=t[0].reshape([z,u*l,d]),$=K.reshape([1,d,y]),M=[z,g*_,y];P.push(C),P.push($)}else C=t[0].reshape([z,d,u*l]),$=t[1].reshape([1,y,d]),M=[z,y,g*_],P.push($),P.push(C);s&&P.push(t[2]);let W=M[2],H=P[0].dims[P[0].dims.length-1];W<8&&H<8?e.compute(Un(P,r,n,M,a,i),{inputs:P}):e.compute(hi(P,r,n,M,a,i),{inputs:P});return}let S=!0,x=e.kernelCustomData.wT??e.compute(Ue(t[1],Zr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let b=[t[0],x];s&&b.push(t[2]);let E=a?g*_:y,T=a?y:g*_,I=c*h*d;e.compute(qh(b,r,n,E,T,I,s,S,i),{inputs:b})},Sl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=Qr({...t,pads:a,strides:n,dilations:s,kernelShape:u},i);va(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Tl=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=Qr(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Wh(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,i);e.compute(Vh(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},ln=(e,t)=>{if(xl(e.inputs,t),e.inputs[0].dims.length===3)Sl(e,t);else if(e.inputs[0].dims.length===5)Tl(e,e.inputs,t);else{let r=Qr(t,e.inputs);va(e,e.inputs,r)}}}),Hh,yy=L(()=>{te(),mt(),ae(),ne(),Hh=(e,t,r)=>{let i=e.length>2,a=t.outputShape,n=t.format==="NHWC",s=t.group,u=e[1].dims,l=u[2]/s,d=u[3],c=n?Se(l):1,h=n&&d===1&&l>=4,g=h?Math.floor(l/4)*4:Math.floor(l/c)*c,_=l-g,y=n?Se(d):1,w=n?d===1?c:y:1,S=O.size(a)/y,x=[Math.ceil(S/64),1,1];pe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${x}`);let b=["rank","rank"],E=[t.strides[0],t.strides[1]],T=[t.kernelShape[n?1:2],t.kernelShape[n?2:3]],I=[t.dilations[0],t.dilations[1]],z=[T[0]+(t.dilations[0]<=1?0:(t.kernelShape[n?1:2]-1)*(t.dilations[0]-1)),T[1]+(t.dilations[1]<=1?0:(t.kernelShape[n?2:3]-1)*(t.dilations[1]-1))],C=[z[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),z[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],$=[{type:12,data:S},{type:12,data:E},{type:12,data:T},{type:12,data:I},{type:12,data:z},{type:6,data:C},{type:12,data:g},{type:12,data:l},{type:12,data:d},...Y(e[0].dims,e[1].dims)];i&&($.push(...Y(e[2].dims)),b.push("rank")),$.push(...Y(a));let M=P=>{let W=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:E.length},{name:"filter_dims",type:"u32",length:T.length},{name:"dilations",type:"u32",length:T.length},{name:"effective_filter_dims",type:"u32",length:z.length},{name:"pads",type:"i32",length:C.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],H=Ie(e[0].dataType),K=n?1:2,R=n?2:3,D=n?3:1,F=N("W",e[1].dataType,e[1].dims.length,w),Q=N("Dy",e[0].dataType,e[0].dims.length,c),J=[Q,F];i&&J.push(N("bias",e[2].dataType,[a[D]].length,y));let re=j("result",e[0].dataType,a.length,y),se=()=>{let Z="";if(h)c===4?Z+=`
        let xValue = ${Q.getByOffset("x_offset")};
        let wValue = ${F.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?Z+=`
          dotProd = dotProd + dot(vec4<${H}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}), vec4<${H}>(${F.getByOffset("w_offset")}, ${F.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(Z+=`
          dotProd = dotProd + dot(vec4<${H}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}, ${Q.getByOffset("x_offset + 2u")}, ${Q.getByOffset("x_offset + 3u")}), vec4<${H}>(${F.getByOffset("w_offset")}, ${F.getByOffset("w_offset + 1u")}, ${F.getByOffset("w_offset + 2u")}, ${F.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Z+=`
                  let xValue = ${n?Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):Q.get("batch","inputChannel","idyR","idyC")};
        `,c===1)Z+=`
          let w_offset = ${F.indicesToOffset(`${F.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${F.getByOffset(`w_offset / ${w}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let G=0;G<c;G++)Z+=`
            let wValue${G} = ${F.getByOffset(`${F.indicesToOffset(`${F.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${G}, wOutChannel)`)} / ${w}`)};
            dotProd = dotProd + xValue[${G}] * wValue${G};`;return Z},U=()=>{if(_===0)return"";if(!h)throw new Error(`packInputAs4 ${h} is not true.`);let Z="";if(c===1){Z+="dotProd = dotProd";for(let G=0;G<_;G++)Z+=`
            + ${Q.getByOffset(`x_offset + ${G}`)} * ${F.getByOffset(`w_offset + ${G}`)}`;Z+=";"}else if(c===2){if(_!==2)throw new Error(`Invalid inputChannelsRemainder ${_}.`);Z+=`
          let xValue = ${Q.getByOffset("x_offset")};
          let wValue = ${F.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Z},ee=`
            let outputIndices = ${re.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${re.indicesGet("outputIndices",0)};
            let d1 = ${re.indicesGet("outputIndices",D)};
            let r = ${re.indicesGet("outputIndices",K)};
            let c = ${re.indicesGet("outputIndices",R)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${re.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${H}(dyRCorner) + ${H}(wR)) / ${H}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${H}(uniforms.Dy_shape[${K}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${H}(dyCCorner) + ${H}(wC)) / ${H}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${H}(uniforms.Dy_shape[${R}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${h?`
                var x_offset = ${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${F.indicesToOffset(`${F.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${w};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${h?4:c}) {
                  ${se()}
                  inputChannel = inputChannel + ${h?4:c};
                }
                ${U()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${y}]`:""};
            ${re.setByOffset("global_idx","value")};
          `;return`
    ${P.registerUniforms(W).declareVariables(...J,re)}
      ${P.mainStart()}
      ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${ee}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${w}${y}${h}${_}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:x[0],y:x[1],z:x[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:$}),getShaderSource:M}}}),El,kl,Il,xa,jh,zl,Sa,Cl,Kh,_y=L(()=>{yy(),jt(),Tt(),El=(e,t,r,i,a,n)=>(e-1)*t+r+(i-1)*a+1-n,kl=(e,t,r,i,a)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=n,r[a]=e-n):t==="SAME_LOWER"&&(r[i]=e-n,r[a]=n)},Il=(e,t,r,i,a,n,s,u,l,d)=>{let c=e.length-2,h=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let g=e[0],_=t[u?3:1]*a;for(let y=0,w=e.length-c-(u?1:0);y<c;++y,++w){let S=e[w],x=h?S*s[y]:d[y],b=El(S,s[y],n[y],t[w],r[y],x);kl(b,i,n,y,y+c),h&&d.push(s[y]*(S-1)+l[y]+(t[w]-1)*r[y]+1-n[y]-n[y+c])}d.splice(0,0,g),d.splice(u?3:1,0,_)},xa=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,g)=>h*g,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;l=new Array(h).fill(1)}let d=e.strides.slice();if(d.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;d=new Array(h).fill(1)}Il(u,r,l,e.autoPad,e.group,a,d,i,s,n);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:a,outputPadding:s,outputShape:n,dilations:l,strides:d}),c},jh=e=>{let t=Dn(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,n=e.group??1,s=e.kernelShape,u=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,h=e.outputShape;return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,outputPadding:c,outputShape:h,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},zl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,u)=>s+u,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,u)=>s+u,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,u)=>s+u,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,u)=>s+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Sa=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(Ue(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let n=[t[0],a];t.length===3&&n.push(t[2]),e.compute(Hh(n,r,i),{inputs:n})},Cl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),n=[1].concat(n),a=[1].concat(a);let l=t.outputPadding;l=[0].concat(l);let d=xa({...t,pads:u,strides:s,dilations:n,kernelShape:a,outputPadding:l},i);Sa(e,i,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Kh=(e,t)=>{if(zl(e.inputs,t),e.inputs[0].dims.length===3)Cl(e,t);else{let r=xa(t,e.inputs);Sa(e,e.inputs,r)}}}),Al,Xh,Yh,by=L(()=>{te(),ae(),Te(),ne(),Al=(e,t,r,i)=>{let a=O.size(t),n=t.length,s=N("input",e,n),u=j("output",e,n),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=O.normalizeAxis(l,n),c=h=>{let g=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,_=X("uniforms.input_shape","uniforms.axis",n),y=i.reverse?g+(i.exclusive?" + 1":""):"0",w=i.reverse?_:g+(i.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,u)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:d},...Y(t,t)]}),getShaderSource:c}},Xh=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(Al(i,r,a,t),{inputs:[0]})},Yh=e=>{let t=e.exclusive===1,r=e.reverse===1;return fe({exclusive:t,reverse:r})}}),Ol,Rl,Bl,Zh,Qh,wy=L(()=>{te(),ae(),Te(),ne(),Ol=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Rl=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},Bl=(e,t)=>{let r,i,a,n,s,u,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,i,a,n]=e.dims,s=c?[r,i,a,d,d,n/d**2]:[r,i,a,n/d**2,d,d],u=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,d,d,n/d**2,i,a]:[r,n/d**2,d,d,i,a],u=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(s),g=h.dims.length,_=e.dataType,y=N("a",_,g),w=j("output",_,g),S=x=>`
  ${x.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Rl(u,g,y,w)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:x=>{let b=l?[r,i*d,a*d,n/d**2]:[r,n/d**2,i*d,a*d],E=O.size(b),T=h.dims,I=O.sortBasedOnPerm(T,u);return{outputs:[{dims:b,dataType:x[0].dataType}],dispatchGroup:{x:Math.ceil(E/64)},programUniforms:[{type:12,data:E},...Y(T,I)]}},getShaderSource:S}},Zh=(e,t)=>{Ol(e.inputs),e.compute(Bl(e.inputs[0],t))},Qh=e=>fe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Jr,gr,Ta,Ml,Nl,Dl,Pl,Ea,Ul,Jh,ef,$y=L(()=>{te(),ae(),Te(),ne(),Jr="[a-zA-Z]|\\.\\.\\.",gr="("+Jr+")+",Ta="^"+gr+"$",Ml="("+gr+",)*"+gr,Nl="^"+Ml+"$",Dl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Pl=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Nl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,n)=>{let s=e[n].dims.slice();if(!a.match(RegExp(Ta)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,s,n);this.lhs.push(u)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,n])=>n.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(gr)))throw new Error("Invalid RHS");i.match(RegExp(Jr,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(a);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,n=!1,s=[],u=0;if(!e.match(RegExp(Ta))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Jr,"g")),d=new Dl(i);return l?.forEach((c,h)=>{if(c==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let g=a-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(u,u+g),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<s.length;_++){let y=String.fromCharCode(48+_);d.addSymbol(y,h+_),this.addSymbol(y,r[u++],i)}}else d.addSymbol(c,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[u++],i)}),d}},Ea=e=>e+"_max",Ul=(e,t,r,i)=>{let a=e.map(d=>d.length).map((d,c)=>N(`input${c}`,t,d)),n=O.size(i),s=j("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],h="var prod = 1.0;",g="var sum = 0.0;",_="sum += prod;",y=[],w=[],S=[],x=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((T,I)=>{if(r.rhs.symbolToIndices.has(I)){let z=r.rhs.symbolToIndices.get(I)?.[0];z!==void 0&&r.lhs.forEach((C,$)=>{if(T.inputIndices.includes($)){let M=C.symbolToIndices.get(I);if(M===void 0)throw new Error("Invalid symbol error");M.forEach(P=>{c.push(`${a[$].indicesSet(`input${$}Indices`,P,s.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,C)=>{if(T.inputIndices.includes(C)){let $=z.symbolToIndices.get(I);if($===void 0)throw new Error("Invalid symbol error");$.forEach(M=>{y.push(`${a[C].indicesSet(`input${C}Indices`,M,`${I}`)}`)}),x.push(`prod *= ${a[C].getByIndices(`input${C}Indices`)};`)}}),w.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${Ea(I)}; ${I}++) {`),S.push("}")});let E=b?[...c,`let sum = ${a.map((T,I)=>T.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...c,g,...w,...y,h,...x,_,...S];return`
            ${d.registerUniforms(u.map(T=>({name:`${Ea(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((T,I)=>`var input${I}Indices: ${a[I].type.indices};`).join(`
`)}
            ${E.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=u.filter(h=>r.symbolToInfo.has(h)).map(h=>({type:12,data:r.symbolToInfo.get(h)?.dimValue||0}));d.push({type:12,data:n});let c=e.map((h,g)=>[...Y(h)]).reduce((h,g)=>h.concat(g),d);return c.push(...Y(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}},getShaderSource:l}},Jh=(e,t)=>{let r=new Pl(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((n,s)=>n.dims);e.compute(Ul(a,e.inputs[0].dataType,r,i))},ef=e=>{let t=e.equation.replace(/\s+/g,"");return fe({equation:t})}}),Ll,ka,ql,Wl,tf,vy=L(()=>{te(),ae(),ne(),Ll=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ka=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},ql=(e,t)=>e.length>t.length?ka(e,t):ka(t,e),Wl=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=ql(t,r),a=e[0].dataType,n=a===9||O.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,u=n||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(O.size(i)/u),d=h=>{let g=N("input",a,t.length,s),_=j("output",a,i.length,u),y;if(a===9){let w=(S,x,b="")=>`
          let outputIndices${x} = ${_.offsetToIndices(`outputOffset + ${x}u`)};
          let offset${x} = ${g.broadcastedIndicesToOffset(`outputIndices${x}`,_)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${S}[${x}] = ${b}(${g.getByOffset(`index${x}`)}[component${x}]);
        `;y=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else y=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${g.getByOffset(`inputOffset / ${s}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(g,_)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},c=[{type:12,data:l},...Y(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${u}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},tf=e=>{Ll(e.inputs),e.compute(Wl(e.inputs),{inputs:[0]})}}),Vl,rf,xy=L(()=>{te(),ae(),ne(),Nn(),Vl=e=>{let t=e[0].dataType,r=O.size(e[0].dims),i=O.size(e[1].dims),a=i%4===0,n=s=>{let u=N("x",t,[1],4),l=N("bias",t,[1],4),d=j("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${l.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,g=a?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(u,l,d)}

    ${an(Be(t))}

    ${s.mainStart(rr)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",nn("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/rr/4)}})}},rf=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?vh(e):e.compute(Vl(e.inputs))}}),Gl,Fl,af,nf,Sy=L(()=>{te(),ae(),Te(),ne(),Gl=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Fl=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=O.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(n,1,...i);let u=r[n],l=e[0].dataType===9?4:1,d=Math.ceil(O.size(s)/l),c=[{type:12,data:d},{type:6,data:u},{type:12,data:n},...Y(e[0].dims,e[1].dims,s)],h=g=>{let _=N("data",e[0].dataType,e[0].dims.length,l),y=N("inputIndices",e[1].dataType,e[1].dims.length),w=j("output",e[0].dataType,s.length,l),S=b=>{let E=i.length,T=`var indicesIndices${b}  = ${y.type.indices}(0);`;for(let I=0;I<E;I++)T+=`${E>1?`indicesIndices${b}[${I}]`:`indicesIndices${b}`} = ${s.length>1?`outputIndices${b}[uniforms.axis + ${I}]`:`outputIndices${b}`};`;T+=`
          var idx${b} = ${y.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${_.type.indices};
        `;for(let I=0,z=0;I<a;I++)I===n?(T+=`${a>1?`dataIndices${b}[${I}]`:`dataIndices${b}`} = u32(idx${b});`,z+=E):(T+=`${a>1?`dataIndices${b}[${I}]`:`dataIndices${b}`} = ${s.length>1?`outputIndices${b}[${z}]`:`outputIndices${b}`};`,z++);return T},x;if(e[0].dataType===9){let b=(E,T,I="")=>`
          let outputIndices${T} = ${w.offsetToIndices(`outputOffset + ${T}u`)};
          ${S(T)};
          let offset${T} = ${_.indicesToOffset(`dataIndices${T}`)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${E}[${T}] = ${I}(${_.getByOffset(`index${T}`)}[component${T}]);
        `;x=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else x=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${_.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,y,w)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${x}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:h}},af=e=>fe({axis:e.axis}),nf=(e,t)=>{let r=e.inputs;Gl(r),e.compute(Fl(e.inputs,t))}}),Hl,sf,of,Ty=L(()=>{te(),ae(),ne(),Hl=(e,t,r,i,a,n,s,u,l)=>{let d=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:u},{type:12,data:l}],c=[n];d.push(...Y(t.dims,c));let h=g=>{let _=N("indices_data",t.dataType,t.dims.length),y=j("input_slice_offsets_data",12,1,1),w=[_,y],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(S).declareVariables(...w)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:d}),getShaderSource:h},{inputs:[t],outputs:[-1]})[0]},sf=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,n=r[1].dims,s=n[n.length-1],u=O.sizeToDimension(n,n.length-1),l=O.sizeFromDimension(i,t.batchDims+s),d=O.sizeToDimension(i,t.batchDims),c=O.sizeFromDimension(i,t.batchDims),h=u/d,g=new Array(s),_=l;for(let T=0;T<s;++T)g[s-1-T]=_,_*=i[t.batchDims+s-1-T];let y=Hl(e,r[1],g,t.batchDims,i,u,h,c,s),w=t.batchDims+s;if(w>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=n.slice(0,-1).concat(i.slice(w)),x=O.size(S),b=[{type:12,data:x},{type:12,data:l},...Y(r[0].dims,y.dims,S)],E=T=>{let I=N("data",r[0].dataType,r[0].dims.length),z=N("slice_offsets",12,y.dims.length),C=j("output",r[0].dataType,S.length);return`
          ${T.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,z,C)}
            ${T.mainStart()}
            ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:a}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:b}),getShaderSource:E},{inputs:[r[0],y]})},of=e=>({batchDims:e.batch_dims,cacheKey:""})}),jl,Kl,uf,lf,Ey=L(()=>{te(),ae(),Te(),ne(),jl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==a.dims.length||!a.dims.map((u,l)=>l===r?Math.ceil(u/i)===n.dims[l]:u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((u,l)=>u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Kl=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=O.normalizeAxis(t.gatherAxis,a),s=O.normalizeAxis(t.quantizeAxis,a),u=r.slice(0);u.splice(n,1,...i);let l=O.size(u),d=e[2].dataType,c=e[0].dataType===22,h=[{type:12,data:l},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...Y(...e.map((_,y)=>_.dims),u)],g=_=>{let y=N("data",e[0].dataType,e[0].dims.length),w=N("inputIndices",e[1].dataType,e[1].dims.length),S=N("scales",e[2].dataType,e[2].dims.length),x=e.length>3?N("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=j("output",d,u.length),E=[y,w,S];x&&E.push(x);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(T).declareVariables(...E,b)}
        ${_.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${y.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${y.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${y.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${y.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${y.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${x?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${x.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${x.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Be(d)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,y)=>y!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,y)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:g}},uf=(e,t)=>{let r=e.inputs;jl(r,t),e.compute(Kl(e.inputs,t))},lf=e=>fe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Xl,Yl,df,pf,ky=L(()=>{te(),ae(),Te(),ne(),Xl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Yl=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,n=e[1].dims,s=e[1].dataType,u=O.normalizeAxis(t.axis,a),l=r[u],d=n.slice(0),c=O.size(d),h=N("input",i,a),g=N("indicesInput",s,n.length),_=j("output",i,d.length),y=[{type:12,data:c},{type:6,data:l},{type:12,data:u}];return y.push(...Y(r,n,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:y}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,g,_)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},df=e=>fe({axis:e.axis}),pf=(e,t)=>{let r=e.inputs;Xl(r),e.compute(Yl(e.inputs,t))}}),Zl,Ql,cf,hf,Iy=L(()=>{te(),ae(),ne(),Zl=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Ql=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,n,s]=lc.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[a,n];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(n/l),c=Math.ceil(a/l),h=!0,g=O.size(u),_=[{type:12,data:h?d:g},{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(_.push(...Y(e[2].dims)),y.push("rank")),_.push(...Y(u));let w=x=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let E=t.alpha===1?"":"value *= uniforms.alpha;",T=N("a",e[0].dataType,e[0].dims),I=N("b",e[1].dataType,e[1].dims),z=T.type.value,C=null,$=[T,I];e.length===3&&(C=N("c",e[2].dataType,e[2].dims.length),$.push(C));let M=j("output",e[0].dataType,u.length);$.push(M);let P=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${x.registerUniforms(P).declareVariables(...$)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${z}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${E}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${z}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=x=>{let b=N("a",e[0].dataType,e[0].dims),E=N("b",e[1].dataType,e[1].dims),T=null,I=[b,E];e.length===3&&(T=N("c",e[2].dataType,e[2].dims.length),I.push(T));let z=j("output",e[0].dataType,u.length);I.push(z);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],$="",M="";t.transA&&t.transB?(M=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(M=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(M=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(M=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let P=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${x.registerUniforms(C).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${E.type.storage}, ${l}>, ${l}>;
  ${x.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${z.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${M}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${$}
      }
      workgroupBarrier();
    }

    ${P}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",z)}; value += ${z.type.value}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:_}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:w}},cf=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},hf=(e,t)=>{Zl(e.inputs),e.compute(Ql(e.inputs,t))}}),at,dt,At,Ot,Jl,ed,td,rd,id,ad,nd,sd,ff,mf,zy=L(()=>{te(),ae(),Te(),ne(),[at,dt,At,Ot]=[0,1,2,3],Jl=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},ed=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,td=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,rd=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,id=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,ad=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${at}] = batch;
     indices[${dt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${At}] = u32(r);
            indices[${Ot}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${At}] = u32(clamp(r, 0, H - 1));
          indices[${Ot}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${At}] = gs_reflect(r, border[1], border[3]);
          indices[${Ot}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,nd=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${at}], indices[${dt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${at}], indices[${dt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${at}], indices[${dt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${at}], indices[${dt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${at}], indices[${dt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${at}], indices[${dt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,sd=(e,t)=>{let r=N("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=N("grid",e[1].dataType,i.length,2),n=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(n=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[at,dt,At,Ot]=[0,3,1,2]);let s=j("output",e[0].dataType,n.length),u=r.type.value,l=O.size(n),d=[{type:12,data:l},...Y(e[0].dims,i,n)],c=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${ed}
  ${td(u)}
  ${rd(t)}
  ${id(t)}
  ${ad(r,u,t)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${At}]);
      let W_in = i32(uniforms.x_shape[${Ot}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${at}], indices[${At}], indices[${Ot}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${nd(s,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let g=O.size(n);return{outputs:[{dims:n,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:d}},getShaderSource:c}},ff=(e,t)=>{Jl(e.inputs),e.compute(sd(e.inputs,t))},mf=e=>fe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ne,od,gf,Ia,ud,Sr,yf,_f=L(()=>{te(),ae(),Te(),On(),Mn(),ne(),Tt(),Ne=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,od=(e,t)=>{let r=e[0],i=Ne(e,1),a=Ne(e,2),n=Ne(e,3),s=Ne(e,4),u=Ne(e,5),l=Ne(e,6),d=Ne(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],h=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=h,y=0,w=0,S=Math.floor(g/t.numHeads);if(l&&d&&O.size(l.dims)&&O.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=l.dims[2],w=l.dims[2]}else if(l&&O.size(l.dims)||d&&O.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x;if(i&&O.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');x=2,_=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');x=5,_=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');x=0,_=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}if(n&&O.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=y+_,E=0;if(s&&O.size(s.dims)>0){E=8;let C=s.dims;throw C.length===1?C[0]===c?E=1:C[0]===3*c+2&&(E=3):C.length===2&&C[0]===c&&C[1]===b&&(E=5),E===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,I=g;if(a&&O.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(_!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=a.dims[2]}else{if(_!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=a.dims[1]*a.dims[3],T=!0}}let z=!1;if(s&&O.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(u&&O.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[2]!==h||u.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:h,pastSequenceLength:y,kvSequenceLength:_,totalSequenceLength:b,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:g,vHiddenSize:I,headSize:S,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:E,scale:t.scale,broadcastResPosBias:z,passPastInKv:T,qkvFormat:x}},gf=e=>fe({...e}),Ia=fe({perm:[0,2,1,3]}),ud=(e,t,r,i,a,n,s)=>{let u=[i,a,n],l=O.size(u),d=[{type:12,data:l},{type:12,data:s},{type:12,data:n}],c=h=>{let g=j("qkv_with_bias",t.dataType,u),_=N("qkv",t.dataType,u),y=N("bias",r.dataType,u),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(w).declareVariables(_,y,g)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},Sr=(e,t,r,i,a,n,s,u)=>{let l=n;if(s&&O.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=ud(e,n,s,t,i,r*a,u),l=l.reshape([t,i,r,a]),r===1||i===1?l:e.compute(Ue(l,Ia.perm),{inputs:[l],outputs:[-1]})[0]}else return n.dims.length===3&&(l=n.reshape([t,i,r,a])),r===1||i===1?l:e.compute(Ue(l,Ia.perm),{inputs:[l],outputs:[-1]})[0]},yf=(e,t)=>{let r=od(e.inputs,t),i=e.inputs[0],a=Ne(e.inputs,1),n=Ne(e.inputs,2),s=Ne(e.inputs,3),u=Ne(e.inputs,4),l=Ne(e.inputs,5),d=Ne(e.inputs,6),c=Ne(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let h=a&&n&&a.dims.length===4&&n.dims.length===4,g=Sr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(h)return Ir(e,g,a,n,u,void 0,d,c,l,r);if(!a||!n)throw new Error("key and value must be provided");let _=Sr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),y=Sr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);Ir(e,g,_,y,u,void 0,d,c,l,r)}}),ld,dd,pd,cd,dn,bf,wf,$f=L(()=>{te(),ae(),Te(),ne(),ld=e=>{if(!e||e.length<1)throw new Error("too few inputs")},dd=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),fe({numOutputs:i,axis:t.axis,splitSizes:r})},pd=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${X("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,cd=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},dn=(e,t)=>{let r=e[0].dims,i=O.size(r),a=e[0].dataType,n=O.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),u=N("input",a,r.length),l=new Array(t.numOutputs),d=[],c=[],h=0,g=[{type:12,data:i}];for(let y=0;y<t.numOutputs;y++){h+=t.splitSizes[y],l[y]=h;let w=r.slice();w[n]=t.splitSizes[y],c.push(w),s[y]=j(`output${y}`,a,w.length),d.push({dims:c[y],dataType:e[0].dataType})}g.push({type:12,data:l},...Y(r,...c));let _=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...s)}
  ${pd(l.length)}
  ${cd(s)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${X("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:g})}},bf=(e,t)=>{ld(e.inputs);let r=e.inputs.length===1?t:dd(e.inputs,t);e.compute(dn(e.inputs,r),{inputs:[0]})},wf=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return fe({axis:t,numOutputs:i,splitSizes:r})}}),hd,fi,vf,xf=L(()=>{te(),ae(),Te(),ne(),hd=(e,t)=>{let[r,i,a,n]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!O.areEqual(i.dims,[])&&!O.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!O.areEqual(a.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=a.dims[0],h=O.sizeFromDimension(r.dims,1)/d,g=u===0?a.dims[1]*2:h/s;if(u>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==a.dims[1]&&u/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`)},fi=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:n}=t,s=e[0].dims[0],u=O.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=u/l,c=e[2].dims[1],h=a===0?c*2:d/i,g=new Array(s,l,d/h,h-c),_=O.computeStrides(g),y=[{type:1,data:n},{type:12,data:g},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[u,d,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,h,l*h,1]}):[],...Y(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=S=>{let x=N("input",e[0].dataType,e[0].dims.length),b=N("position_ids",e[1].dataType,e[1].dims.length),E=N("cos_cache",e[2].dataType,e[2].dims.length),T=N("sin_cache",e[3].dataType,e[3].dims.length),I=j("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${S.declareVariables(x,b,E,T,I)}

        ${S.mainStart(rr)}
          let half_rotary_emb_dim = uniforms.${E.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",j("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${x.getByOffset("i")} * ${E.get("position_id","bsnh[3]")} -
                ${x.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${x.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} +
                ${x.getByOffset("j")} * ${E.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",x.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:fe({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(g)/rr)},programUniforms:y})}},vf=(e,t)=>{hd(e.inputs,t),e.compute(fi(e.inputs,t))}}),fd,md,za,gd,Sf,Cy=L(()=>{Te(),te(),Mn(),_f(),$f(),Tt(),xf(),ne(),fd=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=d,g=0,_=!i||i.dims.length===0,y=Math.floor(_?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);_&&(c=y*t.numHeads);let w=n&&n.dims.length!==0,S=s&&s.dims.length!==0;if(w&&n.dims.length===4&&n.dims[0]===l&&n.dims[1]!==t.kvNumHeads&&n.dims[2]===t.kvNumHeads&&n.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&S){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=n.dims[2]}else if(w||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');h=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}let b=0,E=!1,T=t.kvNumHeads?y*t.kvNumHeads:c;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(h!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=a.dims[2]}else{if(h!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=a.dims[1]*a.dims[3],E=!0}}let I=e.length>4?e[5]:void 0;if(I){if(I.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let z=I.dims.reduce((C,$)=>C*$,1);if(z!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${z}.`);for(let C=0;C<I.dims.length;C++)if(I.dims[C]!==1&&I.dims[C]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${C}] = ${I.dims[C]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:T,headSize:y,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:E,qkvFormat:x}},md=fe({perm:[0,2,1,3]}),za=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(Ue(i,md.perm),{inputs:[i],outputs:[-1]})[0]),i},gd=(e,t,r,i)=>{let a=7,n=["type","type"],s=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],d=c=>{let h=N("seq_lens",r.dataType,r.dims),g=N("total_seq_lens",i.dataType,i.dims),_=j("pos_ids",a,s),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(h,g,_)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${g.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${h.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${_.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:n},getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d}},Sf=(e,t)=>{let r=fd(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,n=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,h=fe({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[g,_,y]=!a&&!n?e.compute(dn([i],h),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,n],w,S;if(t.doRotary){let T=e.compute(gd(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],I=e.inputs[7],z=e.inputs[8],C=fe({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),$=[g,T,I,z],M=[-1];w=e.compute(fi($,C),{inputs:$,outputs:M})[0],$.splice(0,1,_);let P=fe({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(fi($,P),{inputs:$,outputs:M})[0]}let x=Sr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?w:g,void 0,0),b=za(e,t.doRotary?S:_,r),E=za(e,y,r);Ir(e,x,b,E,void 0,void 0,s,u,void 0,r,l,d)}}),Ca,yd,_d,Tf,Ay=L(()=>{te(),ae(),Tt(),ne(),Ca=(e,t,r,i,a,n,s,u)=>{let l=Se(n),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,h=a*s,g=64;h===1&&(g=256);let _=[a,s,n/l],y=[a,s,2],w=["rank","type","type"],S=[];S.push(...Y(_,y));let x=b=>{let E=N("x",t.dataType,3,l),T=N("scale",r.dataType,r.dims),I=N("bias",i.dataType,i.dims),z=j("output",1,3,2),C=[E,T,I,z];return`
  var<workgroup> workgroup_shared : array<${c}, ${g}>;
  const workgroup_size = ${g}u;
  ${b.declareVariables(...C)}
  ${b.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${E.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${St("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${St("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${g}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:h},programUniforms:S}),getShaderSource:x},{inputs:[t,r,i],outputs:[-1]})[0]},yd=(e,t,r)=>{let i=t[0].dims,a=i,n=2,s=i[0],u=i[1],l=O.sizeFromDimension(i,n),d=Se(l),c=O.size(a)/d,h=Ca(e,t[0],t[1],t[2],s,l,u,r.epsilon),g=[s,u,l/d],_=[s,u],y=["type","none"],w=S=>{let x=N("x",t[0].dataType,g.length,d),b=N("scale_shift",1,_.length,2),E=j("output",t[0].dataType,g.length,d),T=[x,b,E];return`
  ${S.registerUniform("output_size","u32").declareVariables(...T)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${E.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${x.getByOffset("global_idx")} * ${E.type.value}(scale_shift.x) + ${E.type.value}(scale_shift.y);
      ${E.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...Y(g,_,g)]}),getShaderSource:w},{inputs:[t[0],h]})},_d=(e,t,r)=>{let i=t[0].dims,a=i,n=i[0],s=i[i.length-1],u=O.sizeFromDimension(i,1)/s,l=Se(s),d=O.size(a)/l,c=[{type:12,data:u},{type:12,data:Math.floor(s/l)}],h=["type","type"],g=!1,_=[0,i.length-1];for(let x=0;x<i.length-2;x++)g=g||i[x+1]!==1,_.push(x+1);g=g&&i[i.length-1]!==1;let y=g?e.compute(Ue(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(x,b)=>i[_[b]])),w=Ca(e,y,t[1],t[2],n,u,s,r.epsilon),S=x=>{let b=Ie(t[0].dataType),E=l===1?"vec2f":`mat${l}x2f`,T=C=>{let $=C===0?"x":"y",M=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${b}(${M}(scale.${$}))`;case 2:return`vec2<${b}>(${M}(scale[0].${$}, scale[1].${$}))`;case 4:return`vec4<${b}>(${M}(scale[0].${$}, scale[1].${$}, scale[2].${$}, scale[3].${$}))`;default:throw new Error(`Not supported compoents ${l}`)}},I=N("input",t[0].dataType,t[0].dims,l),z=j("output",t[0].dataType,a,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${E}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${z.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${x.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${T(0)}, ${T(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:S},{inputs:[t[0],w]})},Tf=(e,t)=>{t.format==="NHWC"?_d(e,e.inputs,t):yd(e,e.inputs,t)}}),bd,wd,Ef,Oy=L(()=>{te(),ae(),ne(),bd=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},wd=(e,t,r)=>{let i=t.simplified,a=e[0].dims,n=e[1],s=!i&&e[2],u=a,l=O.normalizeAxis(t.axis,a.length),d=O.sizeToDimension(a,l),c=O.sizeFromDimension(a,l),h=O.size(n.dims),g=s?O.size(s.dims):0;if(h!==c||s&&g!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${g}`);let _=[];for(let I=0;I<a.length;++I)I<l?_.push(a[I]):_.push(1);let y=Se(c),w=["type","type"],S=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/y)},{type:1,data:t.epsilon}];s&&w.push("type");let x=r>1,b=r>2,E=I=>{let z=Ie(e[0].dataType),C=[N("x",e[0].dataType,e[0].dims,y),N("scale",n.dataType,n.dims,y)];s&&C.push(N("bias",s.dataType,s.dims,y)),C.push(j("output",e[0].dataType,u,y)),x&&C.push(j("mean_data_output",1,_)),b&&C.push(j("inv_std_output",1,_));let $=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms($).declareVariables(...C)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${en("f32",y)};
    var mean_square_vector = ${en("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Jt(z,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${St("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${St("mean_square_vector",y)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Jt(z,y,"x[j + offset]")};
      let f32scale = ${Jt(z,y,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Jt(z,y,"bias[j]")}`:""}
      );
    }

    ${x?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:u,dataType:e[0].dataType}];return x&&T.push({dims:_,dataType:1}),b&&T.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${i}`,inputDependencies:w},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:E}},Ef=(e,t)=>{bd(e.inputs),e.compute(wd(e.inputs,t,e.outputCount))}}),$d,kf,Ry=L(()=>{ae(),Ln(),qn(),$d=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},kf=e=>{$d(e.inputs);let t=tr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(Un(e.inputs,{activation:""},t));else{let a=t[t.length-2],n=O.size(e.inputs[0].dims.slice(0,-2)),s=O.size(e.inputs[1].dims.slice(0,-2));if(n!==1&&a===1&&s===1){let u=e.inputs[0].reshape([1,n,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,n,r],c=[u,l];e.compute(hi(c,{activation:""},t,d),{inputs:c})}else e.compute(hi(e.inputs,{activation:""},t))}}}),vd,xd,Sd,If,zf,By=L(()=>{te(),ae(),Te(),ne(),vd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!O.areEqual(s.dims,[t.n,a,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(O.size(u)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(O.size(l)!==d)throw new Error("zeroPoints input size error.")}},xd=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=O.size(u),d=e[1].dims[2]/4,c=e[0].dataType,h=Se(t.k),g=Se(d),_=Se(s),y=u.concat([a,s]),w=a>1&&s/_%2===0?2:1,S=O.size(y)/_/w,x=64,b=[],E=[l,a,n/h],T=O.convertShape(e[1].dims).slice();T.splice(-1,1,d/g),b.push(...Y(E)),b.push(...Y(T)),b.push(...Y(e[2].dims)),e.length===4&&b.push(...Y(O.convertShape(e[3].dims)));let I=[l,a,s/_];b.push(...Y(I));let z=C=>{let $=E.length,M=N("a",e[0].dataType,$,h),P=N("b",12,T.length,g),W=N("scales",e[2].dataType,e[2].dims.length),H=[M,P,W],K=e.length===4?N("zero_points",12,e[3].dims.length):void 0;K&&H.push(K);let R=I.length,D=j("output",e[0].dataType,R,_),F=Ie(e[0].dataType),Q=(()=>{switch(h){case 1:return`array<${F}, 8>`;case 2:return`mat4x2<${F}>`;case 4:return`mat2x4<${F}>`;default:throw new Error(`${h}-component is not supported.`)}})(),J=Math.floor(32/t.bits),re=Math.floor(J/8),se=()=>{let Z="";for(let G=0;G<re;G++){let ke=G*t.bits*4,Oe=ke+t.bits;Z+=`
          // reuse a data (pass ${G})
            var input_offset${G>0?G:""} = ${G===0?M.indicesToOffset(`${M.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${G>0?G:""}: ${Q};
            for (var j${G>0?G:""}: u32 = 0; j${G>0?G:""} < ${8/h}; j${G>0?G:""}++) {
              a_data${G>0?G:""}[j${G>0?G:""}] = ${M.getByOffset(`input_offset${G>0?G:""}`)};
              input_offset${G>0?G:""}++;
            }
          `;for(let ve=0;ve<_*w;ve++)Z+=`
            b_value = ${g===1?`b${ve}_data`:`b${ve}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${G*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ke}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Oe}u) & b_mask);`}
            b_quantized_values = ${Q}(${Array.from({length:4},(Re,ge)=>`${F}(b_value_lower[${ge}]), ${F}(b_value_upper[${ge}])`).join(", ")});
            b_dequantized_values = ${h===1?`${Q}(${Array.from({length:8},(Re,ge)=>`(b_quantized_values[${ge}] - ${K?`zero_point${ve}`:"zero_point"}) * scale${ve}`).join(", ")});`:`(b_quantized_values - ${Q}(${Array(8).fill(`${K?`zero_point${ve}`:"zero_point"}`).join(",")})) * scale${ve};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(ve/_)}]${_>1?`[${ve%_}]`:""} += ${Array.from({length:8/h},(Re,ge)=>`${h===1?`a_data${G>0?G:""}[${ge}] * b_dequantized_values[${ge}]`:`dot(a_data${G>0?G:""}[${ge}], b_dequantized_values[${ge}])`}`).join(" + ")};
          `}return Z},U=()=>{let Z=`
            var col_index = col * ${_};
            ${K?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${F}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let G=0;G<_*w;G++)Z+=`
            let scale${G} = ${W.getByOffset("col_index * nBlocksPerCol + block")};
            ${K?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${G} = ${F}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Z},ee=()=>{let Z=`col_index = col * ${_};`;for(let G=0;G<_*w;G++)Z+=`
            let b${G}_data = ${P.getByIndices(`${P.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Z+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Q};
            var b_dequantized_values: ${Q};`,Z};return`
        var<workgroup> workgroup_shared: array<${D.type.value}, ${w*x}>;
        ${C.declareVariables(...H,D)}
        ${C.mainStart([x,1,1])}
          let output_indices = ${D.offsetToIndices(`(global_idx / ${x}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${x}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/h};
            ${U()}
            for (var word: u32 = 0; word < ${d}; word += ${g}) {
              ${ee()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${se()}
                word_offset += ${J/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${D.type.value} = ${D.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${x}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${D.setByIndices(`${D.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${h};${g};${_};${w};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:c}],dispatchGroup:{x:S},programUniforms:b}),getShaderSource:z}},Sd=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=O.size(u),d=e[1].dims[2]/4,c=e[0].dataType,h=Se(t.k),g=Se(d),_=u.concat([a,s]),y=128,w=s%8===0?8:s%4===0?4:1,S=y/w,x=Math.floor(32/t.bits),b=S*g*x,E=b/h,T=b/t.blockSize,I=O.size(_)/w,z=[],C=[l,a,n/h],$=O.convertShape(e[1].dims).slice();$.splice(-1,1,d/g),z.push(...Y(C)),z.push(...Y($)),z.push(...Y(e[2].dims)),e.length===4&&z.push(...Y(O.convertShape(e[3].dims)));let M=[l,a,s];z.push(...Y(M));let P=W=>{let H=C.length,K=N("a",e[0].dataType,H,h),R=N("b",12,$.length,g),D=N("scales",e[2].dataType,e[2].dims.length),F=[K,R,D],Q=e.length===4?N("zero_points",12,e[3].dims.length):void 0;Q&&F.push(Q);let J=M.length,re=j("output",e[0].dataType,J),se=Ie(e[0].dataType),U=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${se}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${se}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${se}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${se}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${K.type.value}, ${E}>;
        var<workgroup> inter_results: array<array<${re.type.value}, ${S}>, ${w}>;
        ${W.declareVariables(...F,re)}
        ${W.mainStart([S,w,1])}
          let output_indices = ${re.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${T} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${E};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${E}; a_offset += ${y})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${K.getByIndices(`${K.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${K.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${T} + local_id.x;
            ${Q?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${Q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${se}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${se}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${D.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${R.getByIndices(`${R.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/h};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let ee=Math.floor(x/8),Z="";for(let G=0;G<ee;G++){let ke=G*t.bits*4,Oe=ke+t.bits;Z+=`
              ${U()}
              {${t.bits===2?`
                let half_word = b_value >> ${G*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ke}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Oe}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${se}>(${Array.from({length:4},(ve,Re)=>`${se}(b_value_lower[${Re}]), ${se}(b_value_upper[${Re}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${se}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ve,Re)=>`${`dot(a_data${Re}, b_dequantized_values[${Re}])`}`).join(" + ")};
              }
              word_offset += ${8/h};`}return Z})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${re.type.value} = ${re.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${re.setByIndices(`${re.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${h};${g};${S};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:I},programUniforms:z}),getShaderSource:P}},If=(e,t)=>{vd(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Sd(e.inputs,t)):e.compute(xd(e.inputs,t))},zf=e=>fe(e)}),Td,Ed,kd,Id,zd,Cd,Ad,Od,Cf,My=L(()=>{te(),ae(),ne(),Td=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Ed=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${X("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${X("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${X("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},kd=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${X("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${X("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${X("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${X("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Id=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${X("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${X("uniforms.x_shape",a,t)})) {
                  k = i32(${X("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${X("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},zd=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${X("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${X("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${X("uniforms.x_shape",a,t)})) {
                  k -= i32(${X("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${X("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Cd=(e,t,r)=>{switch(r.mode){case 0:return Ed(e,t,r.pads.length);case 1:return kd(e,t,r.pads.length);case 2:return Id(e,t,r.pads.length);case 3:return zd(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Ad=(e,t)=>{let r=O.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=O.size(r),n=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...Y(e[0].dims,r));let u=["rank"],l=d=>{let c=j("output",e[0].dataType,r.length),h=N("x",e[0].dataType,i.length),g=h.type.value,_=Cd(c,i.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:s?g:"f32"}),`
            ${d.registerUniforms(y).declareVariables(h,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(r)/64)},programUniforms:n}),getShaderSource:l}},Od=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,n=new Int32Array(2*a).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)n[Number(u[l])]=Number(r[l]),n[Number(u[l])+a]=Number(r[l+u.length])}else r.forEach((u,l)=>n[Number(l)]=Number(u));let s=[];return n.forEach(u=>s.push(u)),{mode:t.mode,value:i,pads:s}}else return t},Cf=(e,t)=>{Td(e.inputs);let r=Od(e.inputs,t);e.compute(Ad(e.inputs,r),{inputs:[0]})}}),yr,Aa,Oa,Ra,Ba,Rd,Bd,Ma,Na,Af,Of,Da,Rf,Bf,Pa,Mf,Nf,Df,Pf,Ny=L(()=>{Ge(),te(),ae(),ne(),yr=e=>{if(_e.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Aa=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),l=n?t.dilations.slice():[],d=t.pads.slice();pi.adjustPoolAttributes(r,a,s,u,l,d);let c=pi.computePoolOutputShape(r,a,u,l,s,d,t.autoPad),h=Object.assign({},t);n?Object.assign(h,{kernelShape:s,strides:u,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:s,strides:u,pads:d,cacheKey:t.cacheKey});let g=c.slice();return g.push(g.splice(1,1)[0]),[h,i?g:c]},Oa=(e,t)=>{let r=t.format==="NHWC",i=O.size(e),a=O.size(t.kernelShape),n=[{type:12,data:i},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],h=!!(d+c);n.push({type:12,data:u},{type:12,data:l},{type:12,data:d},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];g=!!(w+S),n.push({type:12,data:_},{type:12,data:y},{type:12,data:w},{type:12,data:S}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,h,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=O.computeStrides(t.kernelShape);n.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[n,s,!!l,!1,!1]}},Ra=(e,t,r,i,a,n,s,u,l,d,c,h)=>{let g=a.format==="NHWC",_=t.type.value,y=j("output",t.type.tensor,i);if(a.kernelShape.length<=2){let w="",S="",x="",b=r-(g?2:1);if(c?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,a.kernelShape.length===2){let E=r-(g?3:2);h?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${E}] = indices[${E}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${E}] < 0 || xIndices[${E}] >= uniforms.x_shape[${E}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${E}] = indices[${E}] * uniforms.sh - uniforms.phStart + j;
                `,x=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var value = ${_}(${u});
              var pad = 0;
              ${S}
              ${w}
              ${x}
              ${s}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=a.kernelShape.length,S=a.pads.length,x="";return d?x=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:x=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${_}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${X("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${X("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${X("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${X("uniforms.pads","j - 2u",S)};
                  ${x}
              }
              ${s}

              output[global_idx] = value;
            }`}},Ba=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Rd=e=>`${Ba(e)};${e.countIncludePad}`,Bd=e=>`${Ba(e)};${e.storageOrder};${e.dilations}`,Ma=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Na=(e,t,r,i)=>{let[a,n]=Aa(t,i,r),s=N("x",t.dataType,t.dims.length),u=s.type.value,l="value += x_val;",d="";a.countIncludePad?d+=`value /= ${u}(uniforms.kernelSize);`:d+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[c,h,g,_,y]=Oa(n,a);c.push(...Y(t.dims,n));let w=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${g};${_};${y}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(n)/64)},programUniforms:c}),getShaderSource:S=>Ra(S,s,t.dims.length,n.length,a,l,d,0,h,g,_,y)}},Af=e=>{let t=e.count_include_pad!==0,r=Ma(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Rd(i)}},Of=(e,t)=>{yr(e.inputs),e.compute(Na("AveragePool",e.inputs[0],!1,t))},Da={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Rf=e=>{let t=e.format;return{format:t,...Da,cacheKey:t}},Bf=(e,t)=>{yr(e.inputs),e.compute(Na("GlobalAveragePool",e.inputs[0],!0,t))},Pa=(e,t,r,i)=>{let[a,n]=Aa(t,i,r),s=`
      value = max(x_val, value);
    `,u="",l=N("x",t.dataType,t.dims.length),d=["rank"],[c,h,g,_,y]=Oa(n,a);return c.push(...Y(t.dims,n)),{name:e,shaderCache:{hint:`${i.cacheKey};${g};${_};${y}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(n)/64)},programUniforms:c}),getShaderSource:w=>Ra(w,l,t.dims.length,n.length,a,s,u,t.dataType===10?-65504:-1e5,h,g,_,y)}},Mf=(e,t)=>{yr(e.inputs),e.compute(Pa("MaxPool",e.inputs[0],!1,t))},Nf=e=>{let t=e.storage_order,r=e.dilations,i=Ma(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:Bd(a)}},Df=e=>{let t=e.format;return{format:t,...Da,cacheKey:t}},Pf=(e,t)=>{yr(e.inputs),e.compute(Pa("GlobalMaxPool",e.inputs[0],!0,t))}}),Md,Nd,Uf,Lf,Dy=L(()=>{te(),ae(),Te(),ne(),Md=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,n)=>n===t.axis||a===e[0].dims[n]).reduce((a,n)=>a&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Nd=(e,t)=>{let r=O.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,n=e[0].dims,s=e[1].dataType,u=O.size(n),l=i===3||i===2,d=l?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,h=e.length>2?e[2]:void 0,g=h?l?[Math.ceil(O.size(h.dims)/4)]:h.dims:void 0,_=c.length===0||c.length===1&&c[0]===1,y=_===!1&&c.length===1,w=Se(u),S=_&&(!l||w===4),x=S?w:1,b=S&&!l?w:1,E=N("input",l?12:i,d.length,b),T=N("scale",s,c.length),I=h?N("zero_point",l?12:i,g.length):void 0,z=j("output",s,n.length,x),C=[E,T];I&&C.push(I);let $=[d,c];h&&$.push(g);let M=[{type:12,data:u/x},{type:12,data:r},{type:12,data:t.blockSize},...Y(...$,n)],P=W=>{let H=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${W.registerUniforms(H).declareVariables(...C,z)}
      ${W.mainStart()}
          ${W.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${z.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${E.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${x===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${E.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${T.getByOffset("0")}`:y?`
            let scale_index = ${z.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${T.getByOffset("scale_index")};`:`
            var scale_indices: ${T.type.indices} = output_indices;
            let index = ${T.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${T.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${T.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?_?l?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:y?l?`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${T.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${l?a?"i32":"u32":E.type.value}(0);`};
      // Compute and write output
      ${z.setByOffset("global_idx",`${z.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:P,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(u/x/64),y:1,z:1},programUniforms:M})}},Uf=(e,t)=>{Md(e.inputs,t),e.compute(Nd(e.inputs,t))},Lf=e=>fe({axis:e.axis,blockSize:e.blockSize})}),Dd,Pd,qf,Py=L(()=>{Ge(),te(),ne(),Dd=(e,t,r)=>{let i=e===t,a=e<t&&r<0,n=e>t&&r>0;if(i||a||n)throw new Error("Range these inputs' contents are invalid.")},Pd=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),n=[a],s=a,u=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...Y(n)],l=d=>{let c=j("output",i,n.length),h=c.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${d.registerUniforms(g).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},qf=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),_e.webgpu.validateInputContent&&Dd(t,r,i),e.compute(Pd(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),Ud,Ld,Wf,Vf,Uy=L(()=>{te(),ae(),Te(),ne(),Ud=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,n=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${a}bitcast<${i}>(oldValue) + (${r})${n}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${n}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Ld=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,n=1,s=Math.ceil(O.sizeToDimension(i,i.length-1)/n),u=i[i.length-1],l=O.sizeFromDimension(r,u),d=[{type:12,data:s},{type:12,data:u},{type:12,data:l},...Y(e[1].dims,e[2].dims,a)],c=h=>{let g=N("indices",e[1].dataType,e[1].dims.length),_=N("updates",e[2].dataType,e[2].dims.length,n),y=t.reduction!=="none"&&t.reduction!==""?gc("output",e[0].dataType,a.length):j("output",e[0].dataType,a.length,n);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,_,y)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Ud(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:c}},Wf=e=>fe({reduction:e.reduction}),Vf=(e,t)=>{e.compute(Ld(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),qd,Wd,Vd,Ua,Gd,Fd,Hd,jd,Kd,Xd,Yd,Zd,La,Qd,Jd,ep,tp,rp,Gf,Ff,Ly=L(()=>{te(),ae(),Te(),ne(),qd=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Wd=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,n)=>i[a]=e[n]),i},Vd=(e,t,r,i,a,n)=>{let[s,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>n.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");qd(i,t),t.axes.length>0&&Wd(i,t.axes,d).forEach((c,h)=>i[h]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>a.push(Number(c))),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Ua=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,Gd=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Ua("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Ua("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Fd=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Hd=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((n,s)=>{i[n]=a[s],i[s+r]=a[t.length+s]}),i):a},jd=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(n=>a.push(n)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((n,s)=>a[n]=r[s])}else r.forEach(n=>a.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((n,s)=>Math.round(n*t[s]))}return a},Kd=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=i),r.axes.forEach(n=>a[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),a.forEach((n,s)=>a[s]=Math.round(n*t[s]))),a},Xd=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${X("uniforms.scales","i",i)};
        var roi_low = ${X("uniforms.roi","i",a)};
        var roi_hi = ${X("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${X("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${X("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Yd=(e,t,r,i,a,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${X("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${X("uniforms.roi","i",n)};
          var roi_hi = ${X("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${X("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${X("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Zd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${X("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,La=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Qd=(e,t,r,i,a)=>{let[n,s,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${La(e,l,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${u}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Jd=(e,t,r,i,a,n,s,u,l,d)=>{let c=r.length===2,[h,g]=c?[0,1]:[2,3],_=e.type.value,y=w=>{let S=w===h?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[w]},
        ${i[w]}, ${r[w]}, ${n[w]}, ${n[w]} + ${r.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[w]} - 1))) {
          return ${l};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${_} = originalIdx + ${_}(i);
          if (${S} < 0 || ${S} >= ${r[w]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${S} = max(0, min(${S}, ${r[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${S})`)};
          data[i + 1] = ${w===h?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${y(h)};
    ${y(g)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${_} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},ep=(e,t,r,i,a)=>{let[n,s,u,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${La(e,d,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${u}];
      var width:${c} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},tp=(e,t,r,i,a,n)=>{let s=e.dims,u=Hd(n,t.axes,s.length),l=jd(s,i,a,t.axes),d=i.slice();i.length===0&&(d=s.map((b,E)=>b===0?1:l[E]/b),t.keepAspectRatioPolicy!=="stretch"&&(l=Kd(s,d,t)));let c=j("output",e.dataType,l.length),h=N("input",e.dataType,s.length),g=O.size(l),_=s.length===l.length&&s.every((b,E)=>b===l[E]),y=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,S=h.type.value,x=b=>`
      ${_?"":`
      ${Gd(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Zd(h,s)};
              ${Fd(t.nearestMode,r,S)};
              ${Yd(h,c,s,l,d.length,u.length,y)};
              `;case"linear":return`
              ${Xd(c,s,l,d.length,u.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Qd(h,c,s,y,w)}`;if(s.length===3||s.length===5)return`${ep(h,c,s,y,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Jd(h,c,s,l,d,u,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(h,c)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${a.length>0?a:""}|${u.length>0?u:""}|${_}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:d},{type:1,data:u},...Y(s,l)]})}},rp=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Gf=(e,t)=>{let r=[],i=[],a=[],n=rp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Vd(e.inputs,t,n,r,i,a),e.compute(tp(e.inputs[0],t,n,r,i,a),{inputs:[0]})},Ff=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return fe({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),ip,ap,Hf,qy=L(()=>{te(),ae(),ne(),ip=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},ap=(e,t,r,i)=>{let a=t.simplified,n=e[0].dims,s=O.size(n),u=n,l=s,d=n.slice(-1)[0],c=i?n.slice(0,-1).concat(1):[],h=!a&&e.length>3,g=e.length>4,_=i&&r>1,y=i&&r>2,w=r>3,S=64,x=Se(d),b=[{type:12,data:l},{type:12,data:x},{type:12,data:d},{type:1,data:t.epsilon}],E=I=>{let z=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[N("x",e[0].dataType,e[0].dims,x),N("skip",e[1].dataType,e[1].dims,x),N("gamma",e[2].dataType,e[2].dims,x)];h&&C.push(N("beta",e[3].dataType,e[3].dims,x)),g&&C.push(N("bias",e[4].dataType,e[4].dims,x)),C.push(j("output",e[0].dataType,u,x)),_&&C.push(j("mean_output",1,c)),y&&C.push(j("inv_std_output",1,c)),w&&C.push(j("input_skip_bias_sum",e[0].dataType,u,x));let $=Ie(e[0].dataType),M=Ie(1,x);return`

      ${I.registerUniforms(z).declareVariables(...C)}
      var<workgroup> sum_shared : array<${M}, ${S}>;
      var<workgroup> sum_squared_shared : array<${M}, ${S}>;

      ${I.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":$+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Jt($,x,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${St("sum",x)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${St("square_sum",x)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${$}(mean)`}) *
            ${$}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:u,dataType:e[0].dataType}];return r>1&&T.push({dims:c,dataType:1}),r>2&&T.push({dims:c,dataType:1}),r>3&&T.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${x};${_};${y};${w}`,inputDependencies:e.map((I,z)=>"type")},getShaderSource:E,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:b})}},Hf=(e,t)=>{ip(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(ap(e.inputs,t,e.outputCount,!1),{outputs:r})}}),np,_r,sp,qa,op,up,jf,Kf,Wy=L(()=>{te(),ae(),Te(),ne(),np=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},_r=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},sp=(e,t)=>{if(e.length>1){let r=_r(e,1),i=_r(e,2),a=_r(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),fe({starts:r,ends:i,axes:a})}else return t},qa=(e,t,r,i,a)=>{let n=e;return e<0&&(n+=r[i[t]]),a[t]<0?Math.max(0,Math.min(n,r[i[t]]-1)):Math.max(0,Math.min(n,r[i[t]]))},op=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${X("uniforms.input_shape","i",r.length)};
            let steps_i = ${X("uniforms.steps","i",r.length)};
            let signs_i = ${X("uniforms.signs","i",r.length)};
            let starts_i = ${X("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,up=(e,t)=>{let r=e[0].dims,i=O.size(r),a=t.axes.length>0?O.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=_r(e,4);n.forEach(x=>x!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(a.length).fill(1));let s=t.starts.map((x,b)=>qa(x,b,r,a,n)),u=t.ends.map((x,b)=>qa(x,b,r,a,n));if(a.length!==s.length||a.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let x=0;x<r.length;++x)a.includes(x)||(s.splice(x,0,0),u.splice(x,0,r[x]),n.splice(x,0,1));let l=n.map(x=>Math.sign(x));n.forEach((x,b,E)=>{if(x<0){let T=(u[b]-s[b])/x,I=s[b],z=I+T*n[b];s[b]=z,u[b]=I,E[b]=-x}});let d=r.slice(0);a.forEach((x,b)=>{d[x]=Math.ceil((u[x]-s[x])/n[x])});let c={dims:d,dataType:e[0].dataType},h=j("output",e[0].dataType,d.length),g=N("input",e[0].dataType,e[0].dims.length),_=O.size(d),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:n.length}],w=[{type:12,data:_},{type:12,data:s},{type:6,data:l},{type:12,data:n},...Y(e[0].dims,d)],S=x=>`
      ${x.registerUniforms(y).declareVariables(g,h)}
        ${op(g,h,r)}
        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:w})}},jf=(e,t)=>{np(e.inputs,t);let r=sp(e.inputs,t);e.compute(up(e.inputs,r),{inputs:[0]})},Kf=e=>{let t=e.starts,r=e.ends,i=e.axes;return fe({starts:t,ends:r,axes:i})}}),lp,dp,Xf,Yf,Vy=L(()=>{te(),ae(),Te(),Tt(),ne(),lp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},dp=(e,t)=>{let r=e.inputs[0],i=r.dims,a=O.size(i),n=i.length,s=O.normalizeAxis(t.axis,n),u=s<i.length-1,l,d=[];u?(d=Array.from({length:n},(C,$)=>$),d[s]=n-1,d[n-1]=s,l=e.compute(Ue(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,h=c[n-1],g=a/h,_=Se(h),y=h/_,w=64;g===1&&(w=256);let S=(C,$)=>$===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:$===2?`max(${C}.x, ${C}.y)`:$===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,x=N("x",l.dataType,l.dims,_),b=j("result",l.dataType,l.dims,_),E=x.type.value,T=Ie(l.dataType)==="f32"?`var threadMax = ${E}(-3.4028234663852886e+38f);`:`var threadMax = ${E}(-65504.0h);`,I=C=>`
      var<workgroup> rowMaxShared : ${E};
      var<workgroup> rowSumShared : ${E};
      var<workgroup> threadShared : array<${E}, ${w}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${E} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${E}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${C.registerUniform("packedCols","i32").declareVariables(x,b)}
      ${C.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${T}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${E}(${S("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${E}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${E}(${St("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${E}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,z=e.compute({name:"Softmax",shaderCache:{hint:`${_};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:y}]}),getShaderSource:I},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(Ue(z,d),{inputs:[z]})},Xf=(e,t)=>{lp(e.inputs),dp(e,t)},Yf=e=>fe({axis:e.axis})}),Wa,pp,cp,hp,Zf,Gy=L(()=>{te(),ae(),ne(),Wa=e=>Array.from(e.getBigInt64Array(),Number),pp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Wa(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},cp=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},hp=(e,t)=>{let r=e[0].dims,i=t??Wa(e[1]),a=cp(r,i),n=O.size(a),s=e[0].dataType,u=N("input",s,r.length),l=j("output",s,a.length),d=c=>`
      const inputShape = ${u.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(u,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...Y(e[0].dims,a)]}),getShaderSource:d}},Zf=e=>{pp(e.inputs),e.compute(hp(e.inputs),{inputs:[0]})}}),fp,mp,Qf,Fy=L(()=>{te(),ae(),ne(),fp=(e,t,r,i,a)=>{let n=j("output_data",a,r.length,4),s=N("a_data",t[1].dataType,t[1].dims.length,4),u=N("b_data",t[2].dataType,t[2].dims.length,4),l=N("c_data",t[0].dataType,t[0].dims.length,4),d,c=(h,g,_)=>`select(${g}, ${h}, ${_})`;if(!i)d=n.setByOffset("global_idx",c(s.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let h=(g,_,y="")=>{let w=`a_data[index_a${_}][component_a${_}]`,S=`b_data[index_b${_}][component_b${_}]`,x=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${n.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${s.broadcastedIndicesToOffset(`output_indices${_}`,n)};
            let offset_b${_} = ${u.broadcastedIndicesToOffset(`output_indices${_}`,n)};
            let offset_c${_} = ${l.broadcastedIndicesToOffset(`output_indices${_}`,n)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${g}[${_}] = ${y}(${c(w,S,x)});
          `};a===9?d=`
            var data = vec4<u32>(0);
            ${h("data",0,"u32")}
            ${h("data",1,"u32")}
            ${h("data",2,"u32")}
            ${h("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${h("output_data[global_idx]",0)}
            ${h("output_data[global_idx]",1)}
            ${h("output_data[global_idx]",2)}
            ${h("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,u,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},mp=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,n=!(O.areEqual(t,r)&&O.areEqual(r,i)),s=t,u=O.size(t);if(n){let d=tr.calcShape(tr.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,u=O.size(s)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>fp(d,e,s,n,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...Y(i,t,r,s)]})}},Qf=e=>{e.compute(mp(e.inputs))}}),Jf,Hy=L(()=>{sy(),Mn(),oy(),uy(),ly(),dy(),py(),gy(),_y(),by(),wy(),$y(),vy(),xy(),Sy(),Ty(),Ey(),ky(),Iy(),zy(),Cy(),Ay(),Oy(),Ry(),By(),_f(),My(),Ny(),Dy(),Py(),Uy(),Bn(),Ly(),xf(),qy(),Wy(),Vy(),$f(),Gy(),Tt(),Nn(),Fy(),Jf=new Map([["Abs",[Fc]],["Acos",[Hc]],["Acosh",[jc]],["Add",[kh]],["ArgMax",[qc,rn]],["ArgMin",[Lc,rn]],["Asin",[Kc]],["Asinh",[Xc]],["Atan",[Yc]],["Atanh",[Zc]],["Attention",[Wc]],["AveragePool",[Of,Af]],["BatchNormalization",[Vc]],["BiasAdd",[Gc]],["BiasSplitGelu",[Eh]],["Cast",[Jc,Qc]],["Ceil",[th]],["Clip",[eh]],["Concat",[Dh,Ph]],["Conv",[ln,un]],["ConvTranspose",[Kh,jh]],["Cos",[rh]],["Cosh",[ih]],["CumSum",[Xh,Yh]],["DepthToSpace",[Zh,Qh]],["DequantizeLinear",[Uf,Lf]],["Div",[Ih]],["Einsum",[Jh,ef]],["Elu",[ah,xr]],["Equal",[zh]],["Erf",[nh]],["Exp",[sh]],["Expand",[tf]],["FastGelu",[rf]],["Floor",[oh]],["FusedConv",[ln,un]],["Gather",[nf,af]],["GatherElements",[pf,df]],["GatherBlockQuantized",[uf,lf]],["GatherND",[sf,of]],["Gelu",[uh]],["Gemm",[hf,cf]],["GlobalAveragePool",[Bf,Rf]],["GlobalMaxPool",[Pf,Df]],["Greater",[Rh]],["GreaterOrEqual",[Mh]],["GridSample",[ff,mf]],["GroupQueryAttention",[Sf]],["HardSigmoid",[gh,mh]],["InstanceNormalization",[Tf]],["LayerNormalization",[Ef]],["LeakyRelu",[lh,xr]],["Less",[Bh]],["LessOrEqual",[Nh]],["Log",[Sh]],["MatMul",[kf]],["MatMulNBits",[If,zf]],["MaxPool",[Mf,Nf]],["Mul",[Ch]],["MultiHeadAttention",[yf,gf]],["Neg",[ph]],["Not",[dh]],["Pad",[Cf]],["Pow",[Ah]],["QuickGelu",[Th,xr]],["Range",[qf]],["Reciprocal",[ch]],["ReduceMin",[Mc]],["ReduceMean",[Cc]],["ReduceMax",[Bc]],["ReduceSum",[Dc]],["ReduceProd",[Nc]],["ReduceL1",[Ac]],["ReduceL2",[Oc]],["ReduceLogSum",[Uc]],["ReduceLogSumExp",[Rc]],["ReduceSumSquare",[Pc]],["Relu",[hh]],["Resize",[Gf,Ff]],["RotaryEmbedding",[vf]],["ScatterND",[Vf,Wf]],["Sigmoid",[fh]],["Sin",[yh]],["Sinh",[_h]],["Slice",[jf,Kf]],["SkipLayerNormalization",[Hf]],["Split",[bf,wf]],["Sqrt",[bh]],["Softmax",[Xf,Yf]],["Sub",[Oh]],["Tan",[wh]],["Tanh",[$h]],["ThresholdedRelu",[xh,xr]],["Tile",[Zf]],["Transpose",[_c,bc]],["Where",[Qf]]])}),em,jy=L(()=>{Ge(),mt(),ne(),em=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){ot(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let d of t)u.push({binding:u.length,resource:{buffer:d.buffer}});for(let d of r)u.push({binding:u.length,resource:{buffer:d.buffer}});a&&u.push({binding:u.length,resource:a});let l=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Je(e.programInfo.name)}dispose(){}build(e,t){ot(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let a=yc(t,this.backend.device.limits),n=e.getShaderSource(a),s=`${i.join(`
`)}
${a.additionalImplementations}
${n}`,u=r.createShaderModule({code:s,label:e.name});pe("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return Je(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let n=t*r*i,s=Math.ceil(Math.sqrt(n));if(s>a){if(s=Math.ceil(Math.cbrt(n)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),tm={};nr(tm,{WebGpuBackend:()=>rm});var gp,yp,_p,rm,Ky=L(()=>{Ge(),te(),mt(),cc(),ay(),Hy(),jy(),gp=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let n=e[i].dims.length;r.push(`${a};${n}`);break}case"dims":{let n=e[i].dims.join(",");r.push(`${a};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},yp=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${gp(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},_p=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},rm=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=u=>t.features.has(u)&&r.push(u)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(i);let n=t,s=t.info??(typeof n.requestAdapterInfo=="function"?await n.requestAdapterInfo():void 0);this.adapterInfo=new _p(s),this.gpuDataManager=mc(this),this.programManager=new em(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Cn(e.logLevel,!!e.debug),this.device.onuncapturederror=u=>{u.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${u.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;ot(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],n=a.kernelId,s=this.kernels.get(n),u=s.kernelType,l=s.kernelName,d=a.programName,c=a.inputTensorViews,h=a.outputTensorViews,g=t[i*2],_=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let y=Number(g-this.queryTimeBase),w=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(S=>({dims:S.dims,dataType:ct(S.dataType)})),outputsMetadata:h.map(S=>({dims:S.dims,dataType:ct(S.dataType)})),kernelId:n,kernelType:u,kernelName:l,programName:d,startTime:y,endTime:w});else{let S="";c.forEach((b,E)=>{S+=`input[${E}]: [${b.dims}] | ${ct(b.dataType)}, `});let x="";h.forEach((b,E)=>{x+=`output[${E}]: [${b.dims}] | ${ct(b.dataType)}, `}),console.log(`[profiling] kernel "${n}|${u}|${l}|${d}" ${S}${x}start time: ${y} ns, execution time: ${w-y} ns`)}ui("GPU",`${d}::${g}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),Je()}run(e,t,r,i,a,n){ot(e.name);let s=[];for(let b=0;b<t.length;++b){let E=t[b].data;if(E===0)continue;let T=this.gpuDataManager.get(E);if(!T)throw new Error(`no GPU data for input: ${E}`);s.push(T)}let{outputs:u,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?u.map((b,E)=>E):r;if(c.length!==u.length)throw new Error(`Output size ${c.length} must be equal to ${u.length}.`);let h=[],g=[];for(let b=0;b<u.length;++b){if(!Number.isInteger(c[b])||c[b]<-3||c[b]>=n)throw new Error(`Invalid output index: ${c[b]}`);if(c[b]===-3)continue;let E=c[b]===-1,T=c[b]===-2,I=E||T?a(u[b].dataType,u[b].dims):i(c[b],u[b].dataType,u[b].dims);if(h.push(I),I.data===0)continue;let z=this.gpuDataManager.get(I.data);if(!z)throw new Error(`no GPU data for output: ${I.data}`);if(E&&this.temporaryData.push(z),T){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(z)}g.push(z)}if(s.length!==t.length||g.length!==h.length){if(g.length===0)return Je(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(d){let b=0,E=[];d.forEach(C=>{let $=typeof C.data=="number"?[C.data]:C.data;if($.length===0)return;let M=C.type===10?2:4,P,W;C.type===10?(W=$.length>4?16:$.length>2?8:$.length*M,P=$.length>4?16:M*$.length):(W=$.length<=2?$.length*M:16,P=16),b=Math.ceil(b/W)*W,E.push(b);let H=C.type===10?8:4;b+=$.length>4?Math.ceil($.length/H)*P:$.length*M});let T=16;b=Math.ceil(b/T)*T;let I=new ArrayBuffer(b);d.forEach((C,$)=>{let M=E[$],P=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(I,M,P.length).set(P);else if(C.type===12)new Uint32Array(I,M,P.length).set(P);else if(C.type===10)new Uint16Array(I,M,P.length).set(P);else if(C.type===1)new Float32Array(I,M,P.length).set(P);else throw new Error(`Unsupported uniform type: ${ct(C.type)}`)});let z=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(z.buffer,0,I,0,b),this.gpuDataManager.release(z.id),_={offset:0,size:b,buffer:z.buffer}}let y=this.programManager.normalizeDispatchGroupSize(l),w=y[1]===1&&y[2]===1,S=yp(e,t,w),x=this.programManager.getArtifact(S);if(x||(x=this.programManager.build(e,y),this.programManager.setArtifact(S,x),pe("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&x.uniformVariablesInfo){if(d.length!==x.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${x.uniformVariablesInfo.length}, got ${d.length} in program "${x.programInfo.name}".`);for(let b=0;b<d.length;b++){let E=d[b],T=E.type,I=typeof E.data=="number"?1:E.data.length,[z,C]=x.uniformVariablesInfo[b];if(T!==z||I!==C)throw new Error(`Uniform variable ${b} mismatch: expect type ${z} with size ${C}, got type ${T} with size ${I} in program "${x.programInfo.name}".`)}}if(pe("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:x.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run(x,s,g,y,_),Je(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=Jf.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,n=i.kernelName,s=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),pe("info",()=>`[WebGPU] Start to run kernel "[${a}] ${n}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${n}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${a}] ${n}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let n=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,n);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Ja(this,e,t);return An(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){pe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){pe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){pe("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),n=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(n.computePipeline),a.setBindGroup(0,n.bindGroup),a.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),im={};nr(im,{init:()=>am});var ei,bp,am,Xy=L(()=>{te(),mt(),ae(),iy(),ei=class nm{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new nm(this.module,this.dataType,this.data,t)}},bp=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,n=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,n));let s=Number(e.getValue(i*a++,n));this.outputCount=Number(e.getValue(i*a++,n)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,n));let u=[];for(let l=0;l<s;l++){let d=Number(e.getValue(i*a++,n)),c=Number(e.getValue(i*a++,"*")),h=Number(e.getValue(i*a++,n)),g=[];for(let _=0;_<h;_++)g.push(Number(e.getValue(i*a++,n)));u.push(new ei(e,d,c,g))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],a=(s,u,l)=>new ei(this.module,u,this.output(s,l),l),n=(s,u)=>{let l=Dt(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new ei(this.module,s,d,u)};return this.backend.run(e,r,i,a,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",n=this.module.stackAlloc((1+t.length)*i);this.module.setValue(n,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(n+i*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,n)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},am=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=(Ky(),kr(tm)).WebGpuBackend,s=new n;await s.initialize(r,i),a("webgpu",[s,u=>s.alloc(Number(u)),u=>s.free(u),(u,l,d,c=!1)=>{if(c)pe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(u),Number(l));else{pe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let h=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(d));s.upload(Number(l),h)}},async(u,l,d)=>{pe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${d}`),await s.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(u,l,d)=>s.createKernel(u,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>s.releaseKernel(u),(u,l,d,c)=>{pe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${u}, contextDataOffset=${l}`);let h=new bp(t,s,Number(l));return s.computeKernel(Number(u),h,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let n=new fc(r);a("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,u,l,d,c)=>n.ensureTensor(s,u,l,d,c),(s,u)=>{n.uploadTensor(s,u)},async(s,u)=>n.downloadTensor(s,u),(s,u)=>n.registerMLContext(s,u),!!r.trace])}}}),wp,Wn,Vn,vt,$p,Va,mi,Gn,Fn,Ga,Hn,jn,Kn,sm=L(()=>{Ge(),ey(),ty(),te(),Ht(),En(),uc(),wp=(e,t)=>{be()._OrtInit(e,t)!==0&&me("Can't initialize onnxruntime.")},Wn=async e=>{wp(e.wasm.numThreads,di(e.logLevel))},Vn=async(e,t)=>{be().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:a}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(Xy(),kr(im)).init;t==="webgpu"&&await i("webgpu",be(),e,r),t==="webnn"&&await i("webnn",be(),e)}},vt=new Map,$p=e=>{let t=be(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&me("Can't get session input/output count.");let n=i===4?"i32":"i64";return[Number(t.getValue(a,n)),Number(t.getValue(a+i,n))]}finally{t.stackRestore(r)}},Va=(e,t)=>{let r=be(),i=r.stackSave(),a=0;try{let n=r.PTR_SIZE,s=r.stackAlloc(2*n);r._OrtGetInputOutputMetadata(e,t,s,s+n)!==0&&me("Can't get session input/output metadata.");let u=Number(r.getValue(s,"*"));a=Number(r.getValue(s+n,"*"));let l=r.HEAP32[a/4];if(l===0)return[u,0];let d=r.HEAPU32[a/4+1],c=[];for(let h=0;h<d;h++){let g=Number(r.getValue(a+8+h*n,"*"));c.push(g!==0?r.UTF8ToString(g):Number(r.getValue(a+8+(h+d)*n,"*")))}return[u,l,c]}finally{r.stackRestore(i),a!==0&&r._OrtFree(a)}},mi=e=>{let t=be(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Gn=async(e,t)=>{let r,i,a=be();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=mi(e);let n=0,s=0,u=0,l=[],d=[],c=[];try{if([s,l]=await oc(t),t?.externalData&&a.mountExternalData){let T=[];for(let I of t.externalData){let z=typeof I=="string"?I:I.path;T.push(zn(typeof I=="string"?I:I.data).then(C=>{a.mountExternalData(z,C)}))}await Promise.all(T)}for(let T of t?.executionProviders??[])if((typeof T=="string"?T:T.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof T!="string"){let I=T,z=I?.context,C=I?.gpuDevice,$=I?.deviceType,M=I?.powerPreference;z?a.currentContext=z:C?a.currentContext=await a.webnnCreateMLContext(C):a.currentContext=await a.webnnCreateMLContext({deviceType:$,powerPreference:M})}else a.currentContext=await a.webnnCreateMLContext();break}n=await a._OrtCreateSession(r,i,s),a.webgpuOnCreateSession?.(n),n===0&&me("Can't create a session."),a.jsepOnCreateSession?.(),a.currentContext&&(a.webnnRegisterMLContext(n,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[h,g]=$p(n),_=!!t?.enableGraphCapture,y=[],w=[],S=[],x=[],b=[];for(let T=0;T<h;T++){let[I,z,C]=Va(n,T);I===0&&me("Can't get an input name."),d.push(I);let $=a.UTF8ToString(I);y.push($),S.push(z===0?{name:$,isTensor:!1}:{name:$,isTensor:!0,type:ct(z),shape:C})}for(let T=0;T<g;T++){let[I,z,C]=Va(n,T+h);I===0&&me("Can't get an output name."),c.push(I);let $=a.UTF8ToString(I);w.push($),x.push(z===0?{name:$,isTensor:!1}:{name:$,isTensor:!0,type:ct(z),shape:C});{if(_&&t?.preferredOutputLocation===void 0){b.push("gpu-buffer");continue}let M=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[$]??"cpu",P=a.webnnIsGraphOutput;if(M==="cpu"&&P&&P(n,$)){b.push("ml-tensor-cpu-output");continue}if(M!=="cpu"&&M!=="cpu-pinned"&&M!=="gpu-buffer"&&M!=="ml-tensor")throw new Error(`Not supported preferred output location: ${M}.`);if(_&&M!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${M}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);b.push(M)}}let E=null;return b.some(T=>T==="gpu-buffer"||T==="ml-tensor"||T==="ml-tensor-cpu-output")&&(u=a._OrtCreateBinding(n),u===0&&me("Can't create IO binding."),E={handle:u,outputPreferredLocations:b,outputPreferredLocationsEncoded:b.map(T=>T==="ml-tensor-cpu-output"?"ml-tensor":T).map(T=>Za(T))}),vt.set(n,[n,d,c,E,_,!1]),[n,y,w,S,x]}catch(h){throw d.forEach(g=>a._OrtFree(g)),c.forEach(g=>a._OrtFree(g)),u!==0&&a._OrtReleaseBinding(u)!==0&&me("Can't release IO binding."),n!==0&&a._OrtReleaseSession(n)!==0&&me("Can't release session."),h}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&me("Can't release session options."),l.forEach(h=>a._free(h)),a.unmountExternalData?.()}},Fn=e=>{let t=be(),r=vt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,n,s,u]=r;s&&(u&&t._OrtClearBoundOutputs(s.handle)!==0&&me("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&me("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),a.forEach(l=>t._OrtFree(l)),n.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(i)!==0&&me("Can't release session."),vt.delete(e)},Ga=async(e,t,r,i,a,n,s=!1)=>{if(!e){t.push(0);return}let u=be(),l=u.PTR_SIZE,d=e[0],c=e[1],h=e[3],g=h,_,y;if(d==="string"&&(h==="gpu-buffer"||h==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&h!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(h==="gpu-buffer"){let x=e[2].gpuBuffer;y=Dt(Nt(d),c);{let b=u.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');_=b(i,n,x,y)}}else if(h==="ml-tensor"){let x=e[2].mlTensor;y=Dt(Nt(d),c);let b=u.webnnRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');_=b(i,x,Nt(d),c)}else{let x=e[2];if(Array.isArray(x)){y=l*x.length,_=u._malloc(y),r.push(_);for(let b=0;b<x.length;b++){if(typeof x[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);u.setValue(_+b*l,Ze(x[b],r),"*")}}else{let b=u.webnnIsGraphInput,E=u.webnnIsGraphOutput;if(d!=="string"&&b&&E){let T=u.UTF8ToString(a);if(b(i,T)||E(i,T)){let I=Nt(d);y=Dt(I,c),g="ml-tensor";let z=u.webnnCreateTemporaryTensor,C=u.webnnUploadTensor;if(!z||!C)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let $=await z(i,I,c);C($,new Uint8Array(x.buffer,x.byteOffset,x.byteLength)),_=$}else y=x.byteLength,_=u._malloc(y),r.push(_),u.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,y),_)}else y=x.byteLength,_=u._malloc(y),r.push(_),u.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,y),_)}}let w=u.stackSave(),S=u.stackAlloc(4*c.length);try{c.forEach((b,E)=>u.setValue(S+E*l,b,l===4?"i32":"i64"));let x=u._OrtCreateTensor(Nt(d),_,y,S,c.length,Za(g));x===0&&me(`Can't create tensor for input/output. session=${i}, index=${n}.`),t.push(x)}finally{u.stackRestore(w)}},Hn=async(e,t,r,i,a,n)=>{let s=be(),u=s.PTR_SIZE,l=vt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],h=l[2],g=l[3],_=l[4],y=l[5],w=t.length,S=i.length,x=0,b=[],E=[],T=[],I=[],z=[],C=s.stackSave(),$=s.stackAlloc(w*u),M=s.stackAlloc(w*u),P=s.stackAlloc(S*u),W=s.stackAlloc(S*u);try{[x,b]=sc(n),Pt("wasm prepareInputOutputTensor");for(let D=0;D<w;D++)await Ga(r[D],E,I,e,c[t[D]],t[D],_);for(let D=0;D<S;D++)await Ga(a[D],T,I,e,h[i[D]],w+i[D],_);Ut("wasm prepareInputOutputTensor");for(let D=0;D<w;D++)s.setValue($+D*u,E[D],"*"),s.setValue(M+D*u,c[t[D]],"*");for(let D=0;D<S;D++)s.setValue(P+D*u,T[D],"*"),s.setValue(W+D*u,h[i[D]],"*");if(g&&!y){let{handle:D,outputPreferredLocations:F,outputPreferredLocationsEncoded:Q}=g;if(c.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${c.length}).`);Pt("wasm bindInputsOutputs");for(let J=0;J<w;J++){let re=t[J];await s._OrtBindInput(D,c[re],E[J])!==0&&me(`Can't bind input[${J}] for session=${e}.`)}for(let J=0;J<S;J++){let re=i[J];a[J]?.[3]?(z.push(T[J]),s._OrtBindOutput(D,h[re],T[J],0)!==0&&me(`Can't bind pre-allocated output[${J}] for session=${e}.`)):s._OrtBindOutput(D,h[re],0,Q[re])!==0&&me(`Can't bind output[${J}] to ${F[J]} for session=${e}.`)}Ut("wasm bindInputsOutputs"),vt.set(e,[d,c,h,g,_,!0])}s.jsepOnRunStart?.(d),s.webnnOnRunStart?.(d);let H;g?H=await s._OrtRunWithBinding(d,g.handle,S,P,x):H=await s._OrtRun(d,M,$,w,W,S,P,x),H!==0&&me("failed to call OrtRun().");let K=[],R=[];Pt("wasm ProcessOutputTensor");for(let D=0;D<S;D++){let F=Number(s.getValue(P+D*u,"*"));if(F===T[D]||z.includes(T[D])){K.push(a[D]),F!==T[D]&&s._OrtReleaseTensor(F)!==0&&me("Can't release tensor.");continue}let Q=s.stackSave(),J=s.stackAlloc(4*u),re=!1,se,U=0;try{s._OrtGetTensorData(F,J,J+u,J+2*u,J+3*u)!==0&&me(`Can't access output tensor data on index ${D}.`);let ee=u===4?"i32":"i64",Z=Number(s.getValue(J,ee));U=s.getValue(J+u,"*");let G=s.getValue(J+u*2,"*"),ke=Number(s.getValue(J+u*3,ee)),Oe=[];for(let ge=0;ge<ke;ge++)Oe.push(Number(s.getValue(G+ge*u,ee)));s._OrtFree(G)!==0&&me("Can't free memory for tensor dims.");let ve=Oe.reduce((ge,$e)=>ge*$e,1);se=ct(Z);let Re=g?.outputPreferredLocations[i[D]];if(se==="string"){if(Re==="gpu-buffer"||Re==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ge=[];for(let $e=0;$e<ve;$e++){let Me=s.getValue(U+$e*u,"*"),Ar=s.getValue(U+($e+1)*u,"*"),et=$e===ve-1?void 0:Ar-Me;ge.push(s.UTF8ToString(Me,et))}K.push([se,Oe,ge,"cpu"])}else if(Re==="gpu-buffer"&&ve>0){let ge=s.jsepGetBuffer;if(!ge)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let $e=ge(U),Me=Dt(Z,ve);if(Me===void 0||!kn(se))throw new Error(`Unsupported data type: ${se}`);re=!0,K.push([se,Oe,{gpuBuffer:$e,download:s.jsepCreateDownloader($e,Me,se),dispose:()=>{s._OrtReleaseTensor(F)!==0&&me("Can't release tensor.")}},"gpu-buffer"])}else if(Re==="ml-tensor"&&ve>0){let ge=s.webnnEnsureTensor,$e=s.webnnIsGraphInputOutputTypeSupported;if(!ge||!$e)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Dt(Z,ve)===void 0||!In(se))throw new Error(`Unsupported data type: ${se}`);if(!$e(e,se,!1))throw new Error(`preferredLocation "ml-tensor" for ${se} output is not supported by current WebNN Context.`);let Me=await ge(e,U,Z,Oe,!1);re=!0,K.push([se,Oe,{mlTensor:Me,download:s.webnnCreateMLTensorDownloader(U,se),dispose:()=>{s.webnnReleaseTensorId(U),s._OrtReleaseTensor(F)}},"ml-tensor"])}else if(Re==="ml-tensor-cpu-output"&&ve>0){let ge=s.webnnCreateMLTensorDownloader(U,se)(),$e=K.length;re=!0,R.push((async()=>{let Me=[$e,await ge];return s.webnnReleaseTensorId(U),s._OrtReleaseTensor(F),Me})()),K.push([se,Oe,[],"cpu"])}else{let ge=wi(se),$e=new ge(ve);new Uint8Array($e.buffer,$e.byteOffset,$e.byteLength).set(s.HEAPU8.subarray(U,U+$e.byteLength)),K.push([se,Oe,$e,"cpu"])}}finally{s.stackRestore(Q),se==="string"&&U&&s._free(U),re||s._OrtReleaseTensor(F)}}g&&!_&&(s._OrtClearBoundOutputs(g.handle)!==0&&me("Can't clear bound outputs."),vt.set(e,[d,c,h,g,_,!1]));for(let[D,F]of await Promise.all(R))K[D][2]=F;return Ut("wasm ProcessOutputTensor"),K}finally{s.webnnOnRunEnd?.(d),s.stackRestore(C),E.forEach(H=>s._OrtReleaseTensor(H)),T.forEach(H=>s._OrtReleaseTensor(H)),I.forEach(H=>s._free(H)),x!==0&&s._OrtReleaseRunOptions(x),b.forEach(H=>s._free(H))}},jn=e=>{let t=be(),r=vt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&me("Can't get an profile file name."),t._OrtFree(a)},Kn=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),xt,We,Yt,br,wr,ti,Fa,ri,Rt,Bt,vp,om,um,lm,dm,pm,cm,hm,fm=L(()=>{Ge(),sm(),Ht(),Sn(),xt=()=>!!_e.wasm.proxy&&typeof document<"u",Yt=!1,br=!1,wr=!1,ri=new Map,Rt=(e,t)=>{let r=ri.get(e);r?r.push(t):ri.set(e,[t])},Bt=()=>{if(Yt||!br||wr||!We)throw new Error("worker not ready")},vp=e=>{switch(e.data.type){case"init-wasm":Yt=!1,e.data.err?(wr=!0,Fa[1](e.data.err)):(br=!0,Fa[0]()),ti&&(URL.revokeObjectURL(ti),ti=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=ri.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},om=async()=>{if(!br){if(Yt)throw new Error("multiple calls to 'initWasm()' detected.");if(wr)throw new Error("previous call to 'initWasm()' failed.");if(Yt=!0,xt())return new Promise((e,t)=>{We?.terminate(),ac().then(([r,i])=>{try{We=i,We.onerror=n=>t(n),We.onmessage=vp,Fa=[e,t];let a={type:"init-wasm",in:_e};!a.in.wasm.wasmPaths&&(r||Ya)&&(a.in.wasm.wasmPaths={wasm:new URL("/dither-feed/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href}),We.postMessage(a),ti=r}catch(a){t(a)}},t)});try{await Tn(_e.wasm),await Wn(_e),br=!0}catch(e){throw wr=!0,e}finally{Yt=!1}}},um=async e=>{if(xt())return Bt(),new Promise((t,r)=>{Rt("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:_e}};We.postMessage(i)});await Vn(_e,e)},lm=async e=>xt()?(Bt(),new Promise((t,r)=>{Rt("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};We.postMessage(i,[e.buffer])})):mi(e),dm=async(e,t)=>{if(xt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Bt(),new Promise((r,i)=>{Rt("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),We.postMessage(a,n)})}else return Gn(e,t)},pm=async e=>{if(xt())return Bt(),new Promise((t,r)=>{Rt("release",[t,r]);let i={type:"release",in:e};We.postMessage(i)});Fn(e)},cm=async(e,t,r,i,a,n)=>{if(xt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Bt(),new Promise((s,u)=>{Rt("run",[s,u]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:n}};We.postMessage(d,Kn(l))})}else return Hn(e,t,r,i,a,n)},hm=async e=>{if(xt())return Bt(),new Promise((t,r)=>{Rt("end-profiling",[t,r]);let i={type:"end-profiling",in:e};We.postMessage(i)});jn(e)}}),Ha,xp,mm,Yy=L(()=>{Ge(),fm(),te(),xn(),uc(),Ha=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},xp=e=>{switch(e[3]){case"cpu":return new Qe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!kn(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Qe.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!In(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return Qe.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},mm=class{async fetchModelAndCopyToWasmMemory(e){return lm(await zn(e))}async loadModel(e,t){ot();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await dm(r,t),Je()}async dispose(){return pm(this.sessionId)}async run(e,t,r){ot();let i=[],a=[];Object.entries(e).forEach(h=>{let g=h[0],_=h[1],y=this.inputNames.indexOf(g);if(y===-1)throw new Error(`invalid input '${g}'`);i.push(_),a.push(y)});let n=[],s=[];Object.entries(t).forEach(h=>{let g=h[0],_=h[1],y=this.outputNames.indexOf(g);if(y===-1)throw new Error(`invalid output '${g}'`);n.push(_),s.push(y)});let u=i.map((h,g)=>Ha(h,()=>`input "${this.inputNames[a[g]]}"`)),l=n.map((h,g)=>h?Ha(h,()=>`output "${this.outputNames[s[g]]}"`):null),d=await cm(this.sessionId,a,u,s,l,r),c={};for(let h=0;h<d.length;h++)c[this.outputNames[s[h]]]=n[h]??xp(d[h]);return Je(),c}startProfiling(){}endProfiling(){hm(this.sessionId)}}}),gm={};nr(gm,{OnnxruntimeWebAssemblyBackend:()=>cn,initializeFlags:()=>pn,wasmBackend:()=>ym});var pn,cn,ym,Zy=L(()=>{Ge(),fm(),Yy(),pn=()=>{(typeof _e.wasm.initTimeout!="number"||_e.wasm.initTimeout<0)&&(_e.wasm.initTimeout=0);let e=_e.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),_e.wasm.simd=!1),typeof _e.wasm.proxy!="boolean"&&(_e.wasm.proxy=!1),typeof _e.wasm.trace!="boolean"&&(_e.wasm.trace=!1),typeof _e.wasm.numThreads!="number"||!Number.isInteger(_e.wasm.numThreads)||_e.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)_e.wasm.numThreads=1;else{let t=typeof navigator>"u"?N0("node:os").cpus().length:navigator.hardwareConcurrency;_e.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},cn=class{async init(e){pn(),await om(),await um(e)}async createInferenceSessionHandler(e,t){let r=new mm;return await r.loadModel(e,t),r}},ym=new cn});Ge();Ge();Ge();var Qy="1.27.0";{let e=(Zy(),kr(gm)).wasmBackend;Qt("webgpu",e,5),Qt("webnn",e,5),Qt("cpu",e,10),Qt("wasm",e,10)}Object.defineProperty(_e.versions,"web",{value:Qy,enumerable:!0});const Jy="/dither-feed/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",ie=24,nt=ie*ie,ht=4,e_=1260,Sp=1350,t_=120,r_=480,ja=512,i_=.065,a_=64,_m=["fauna","botanical","terrain","geometry","textile"],Tp={fauna:{code:"FAU",symmetry:"vertical",minDensity:.38,sectorWeights:[40,20,20,15,5],palette:[[0,0,0],[85,0,0],[170,0,85],[255,85,0],[255,170,85],[255,255,170],[255,255,255]]},botanical:{code:"BOT",symmetry:"vertical",minDensity:.42,sectorWeights:[15,30,35,10,10],palette:[[0,0,0],[0,85,0],[0,170,85],[85,170,0],[170,255,85],[255,255,170],[255,255,255]]},terrain:{code:"TER",symmetry:"horizontal",minDensity:.4,sectorWeights:[25,20,15,25,15],palette:[[0,0,0],[0,0,85],[0,85,170],[0,170,255],[85,170,255],[170,255,255],[255,255,255]]},geometry:{code:"GEO",symmetry:"vertical",minDensity:.46,sectorWeights:[15,10,30,15,30],palette:[[0,0,0],[85,85,85],[170,170,170],[255,255,255],[255,85,0],[255,170,0],[255,255,85]]},textile:{code:"TXT",symmetry:"horizontal",minDensity:.48,sectorWeights:[15,40,25,5,15],palette:[[0,0,0],[85,0,85],[170,0,170],[255,0,170],[255,85,170],[255,170,255],[255,255,255]]}},Ve=4,ir=ie/Ve,Xn=0,zr=1,er=2,ft=3,Gt=4;function bm(e){let t=2166136261;for(const r of String(e))t^=r.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}function n_(){const e=new Uint32Array(1);return globalThis.crypto?.getRandomValues?(globalThis.crypto.getRandomValues(e),e[0]>>>0):Math.floor(Math.random()*4294967296)>>>0}function s_(e){const t=String(e).trim();return/^0x[\da-f]+$/i.test(t)?Number.parseInt(t,16)>>>0:/^\d+$/.test(t)?Number.parseInt(t,10)>>>0:/^[\da-f]+$/i.test(t)?Number.parseInt(t,16)>>>0:bm(t)}function $i(e){return(e>>>0).toString(16).toUpperCase().padStart(8,"0")}const Ep=new URL(window.location.href).searchParams.get("seed"),Et=Ep===null?n_():s_(Ep);function o_(){const e=new URL(window.location.href);e.searchParams.set("seed",$i(Et));const t=e.pathname+e.search+e.hash,r=window.location.pathname+window.location.search+window.location.hash;t!==r&&window.history.replaceState(null,"",t)}o_();const u_=Et%_m.length,l_=3,d_=220,p_=window.matchMedia("(max-width: 640px)").matches?2:3,Le=document.querySelector("#terminal-scroll"),gi=document.querySelector("#feed"),c_=document.querySelector("#feed-sentinel"),si=document.querySelector("#boot-screen"),hn=document.querySelector("#boot-status"),kp=document.querySelector("#boot-progress-bar"),Ka=document.querySelector("#terminal-live-state"),Ip=document.querySelector("#terminal-live-count"),zp=document.querySelector("#terminal-live-rate"),Cp=document.querySelector("#terminal-live-run"),sr=window.matchMedia("(prefers-reduced-motion: reduce)"),Ap=document.querySelector(".terminal-shell");Ap&&(Ap.dataset.seed=$i(Et));let vi,Ae,wm,Lt=!1,ar=!1,xi=!1,st=0,Er=null,Xa=[];const fn=new Set;let $m,vm,pt=7,mn=0;const h_=performance.now(),ii=["mounting local model","reading latent bank","initializing wasm inference","warming pixel buffer"];function f_(e){return e==="synth"?"SYNTH":e==="error"?"ERR":e==="ready"?"READY":"BOOT"}function Ft(e){if(!Ka||!Ip||!zp||!Cp)return;const t=e||(ar?"error":Lt?"synth":vi?"ready":"boot"),r=Math.max(1,(performance.now()-h_)/1e3),i=mn/r;Ka.textContent=f_(t),Ka.dataset.state=t,Ip.textContent="GEN "+String(mn).padStart(4,"0"),zp.textContent="RATE "+i.toFixed(1)+"/S",Cp.textContent="RUN "+$i(Et)}function m_(){Ft("boot"),window.setInterval(()=>Ft(),700)}function oi(e,t=pt){hn&&(hn.textContent=e),kp&&(pt=Math.max(0,Math.min(100,t)),kp.style.transform=`scaleX(${pt/100})`)}function g_(){if(!si)return;let e=0;oi(ii[e],pt),$m=window.setInterval(()=>{e=(e+1)%ii.length,oi(ii[e],pt)},520),vm=window.setInterval(()=>{pt=Math.min(91,pt+(pt<52?3.2:.8)),oi(hn?.textContent||ii[e],pt)},140)}function xm(e=!1){si&&(window.clearInterval($m),window.clearInterval(vm),oi(e?"model unavailable":"feed ready",100),Ft(e?"error":"ready"),document.body.classList.remove("is-booting"),si.dataset.state="leaving",window.setTimeout(()=>si.remove(),sr.matches?0:420))}g_();m_();const y_=`
  attribute vec2 position;
  varying vec2 textureUv;

  void main() {
    textureUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,__=`
  precision highp float;

  uniform sampler2D pattern;
  uniform vec2 resolution;
  uniform float progress;
  varying vec2 textureUv;

  float easeInOutCubic(float value) {
    return value < 0.5
      ? 4.0 * value * value * value
      : 1.0 - pow(-2.0 * value + 2.0, 3.0) * 0.5;
  }

  float luminance(vec3 color) {
    return dot(color, vec3(0.2126, 0.7152, 0.0722));
  }

  void main() {
    vec2 uv = textureUv;
    vec2 centered = uv - 0.5;
    centered.x *= resolution.x / resolution.y;
    float distanceFromCenter = length(centered) * 2.0;
    vec2 direction = centered / max(length(centered), 0.001);

    vec2 texel = vec2(1.0 / 24.0);
    float height = luminance(texture2D(pattern, uv).rgb);
    float heightLeft = luminance(texture2D(pattern, uv - vec2(texel.x, 0.0)).rgb);
    float heightRight = luminance(texture2D(pattern, uv + vec2(texel.x, 0.0)).rgb);
    float heightDown = luminance(texture2D(pattern, uv - vec2(0.0, texel.y)).rgb);
    float heightUp = luminance(texture2D(pattern, uv + vec2(0.0, texel.y)).rgb);
    vec2 reliefNormal = vec2(heightLeft - heightRight, heightDown - heightUp);
    vec2 pixelCell = fract(uv * 24.0) - 0.5;
    float pixelEdge = smoothstep(0.34, 0.49, max(abs(pixelCell.x), abs(pixelCell.y)));
    float pixelRelief = height * 0.72 + (1.0 - pixelEdge) * 0.28;
    vec2 pixelCenterUv = (floor(uv * 24.0) + 0.5) / 24.0;
    vec2 pixelCentered = pixelCenterUv - 0.5;
    pixelCentered.x *= resolution.x / resolution.y;
    float pixelDistance = length(pixelCentered) * 2.0;

    float eased = easeInOutCubic(progress);
    float waveRadius = eased * 1.45;
    float steppedDistance = mix(distanceFromCenter, pixelDistance, 0.62);
    float waveDistance = steppedDistance - waveRadius
      - (pixelRelief - 0.5) * 0.052;
    // A broad envelope makes the wave twice as wide; the crest profile below
    // keeps its center concentrated and gives the edges a softer falloff.
    float envelope = exp(-waveDistance * waveDistance * 39.0);
    float wake = exp(-waveDistance * waveDistance * 14.0);
    float innerRipple = sin(waveDistance * 92.0 - progress * 10.0);
    float life = smoothstep(0.0, 0.07, progress)
      * (1.0 - smoothstep(0.72, 1.0, progress));
    float crest = exp(-waveDistance * waveDistance * 180.0);
    float waveEnergy = envelope * (0.14 + crest * 1.06);

    vec2 refraction = (
      direction * (
        innerRipple * 0.18
        + sin(waveDistance * 38.0 - progress * 7.0) * 0.075
      )
      + reliefNormal * (0.12 + pixelEdge * 0.1)
      + vec2(reliefNormal.y, -reliefNormal.x)
        * sin(waveDistance * 66.0 - progress * 12.0) * 0.045
    ) * (waveEnergy * 1.08 + wake * 0.12) * life;
    vec2 redShift = refraction * 2.35;
    vec2 blueShift = refraction * 0.22;
    vec4 baseSample = texture2D(pattern, uv);
    float red = texture2D(pattern, uv + redShift).r;
    float green = texture2D(pattern, uv + refraction).g;
    float blue = texture2D(pattern, uv + blueShift).b;
    vec3 color = vec3(red, green, blue);

    float caustic = envelope
      * (0.12 + crest * 1.08)
      * (0.5 + 0.5 * cos(waveDistance * 138.0 - progress * 16.0));
    vec3 reliefVector = normalize(vec3(reliefNormal * 5.0, 0.72));
    float reliefLight = clamp(
      dot(reliefVector, normalize(vec3(-0.55, 0.65, 0.8))),
      0.0,
      1.0
    );
    float pixelSpecular = waveEnergy
      * (0.12 + reliefLight * 1.08)
      * (0.35 + pixelEdge * 0.65);
    float faceShade = (reliefLight - 0.42)
      * waveEnergy * (1.0 - pixelEdge) * 0.58;
    color = clamp(
      color + vec3(faceShade - pixelEdge * envelope * 0.055) * life,
      0.0,
      1.0
    );
    vec3 spectralLight = vec3(0.65, 0.94, 1.0)
      * crest * (0.42 + pixelRelief * 0.72)
      + vec3(0.28, 0.68, 1.0) * caustic * 0.34
      + vec3(0.82, 0.98, 1.0) * pixelSpecular * 0.55;

    gl_FragColor = vec4(
      color + spectralLight * life * baseSample.a,
      baseSample.a
    );
  }
`,b_=`
  precision highp float;

  attribute vec2 particlePosition;
  attribute float particleSize;
  attribute float particleLife;
  attribute float particleSeed;
  uniform vec2 resolution;
  uniform float pixelRatio;
  uniform float time;
  varying float life;
  varying float shimmer;

  void main() {
    vec2 clip = vec2(
      particlePosition.x / resolution.x * 2.0 - 1.0,
      1.0 - particlePosition.y / resolution.y * 2.0
    );
    gl_Position = vec4(clip, 0.0, 1.0);
    gl_PointSize = particleSize * pixelRatio
      * (0.94 + sin(time * 9.0 + particleSeed * 17.0) * 0.08);
    life = particleLife;
    shimmer = 0.5 + 0.5 * sin(time * 8.5 + particleSeed * 23.0);
  }
`,w_=`
  precision highp float;

  varying float life;
  varying float shimmer;

  void main() {
    vec2 point = gl_PointCoord - 0.5;
    float body = length(vec2(point.x * 1.45, point.y * 0.72));
    float halo = 1.0 - smoothstep(0.06, 0.52, body);
    float core = 1.0 - smoothstep(0.0, 0.18, body);
    float streak = (1.0 - smoothstep(0.0, 0.22, abs(point.x)))
      * (1.0 - smoothstep(0.02, 0.5, abs(point.y)));
    float fade = smoothstep(0.0, 0.16, life);

    vec3 amber = vec3(1.0, 0.26, 0.015);
    vec3 gold = vec3(1.0, 0.68, 0.06);
    vec3 color = mix(amber, gold, 0.42 + shimmer * 0.48);
    color += vec3(0.34, 0.12, 0.0) * core * 0.22;
    float alpha = (halo * 0.52 + core * 0.95 + streak * 0.28) * fade;

    gl_FragColor = vec4(color * (0.9 + shimmer * 0.42), alpha);
  }
`,Si=[[0,48,12,60,3,51,15,63],[32,16,44,28,35,19,47,31],[8,56,4,52,11,59,7,55],[40,24,36,20,43,27,39,23],[2,50,14,62,1,49,13,61],[34,18,46,30,33,17,45,29],[10,58,6,54,9,57,5,53],[42,26,38,22,41,25,37,21]];function Op(e){const t=e%ie,r=Math.floor(e/ie);return t+r+Si[r%8][t%8]/64}function Rp(e){return Array.from({length:nt},(t,r)=>{const i=r%ie,a=Math.floor(r/ie),n=e==="vertical"?a*ie+(ie-1-i):(ie-1-a)*ie+i;return r>n?null:{position:r,mirror:n,score:Math.min(Op(r),Op(n))}}).filter(Boolean).sort((t,r)=>t.score-r.score||t.position-r.position)}const yi={vertical:Rp("vertical"),horizontal:Rp("horizontal")};function $_(e){const t=Array.from({length:nt},(i,a)=>a);let r=e+1>>>0;for(let i=t.length-1;i>0;i-=1){r=r*1664525+1013904223>>>0;const a=r%(i+1);[t[i],t[a]]=[t[a],t[i]]}return t}function Bp(e,t){if(!e.ok)throw new Error("Unable to load "+t+" ("+e.status+")");return e}function v_(e=Math.random){let t=0,r=0;for(;t===0;)t=e();for(;r===0;)r=e();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*r)}function x_(e){Xa.push(e),fn.add(e),Xa.length>a_&&fn.delete(Xa.shift())}function S_(){return Ae?.styles?.length?Ae.styles:_m}function Cr(e){return Tp[e]||Tp.geometry}function Ti(e){let t=(e^2654435769)>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function T_(e,t){const r=t.reduce((a,n)=>a+n,0);let i=e()*r;for(let a=0;a<t.length;a+=1)if(i-=t[a],i<=0)return a;return Xn}function E_(e,t,r,i){const a=Ti(r+5370206),n=Cr(e).sectorWeights,s=Array.from({length:Ve*Ve},()=>null);let u=0;for(let l=0;l<Ve;l+=1)for(let d=0;d<Ve;d+=1){const c=t==="vertical"?Ve-1-d:d,h=t==="horizontal"?Ve-1-l:l,g=l*Ve+d,_=h*Ve+c;if(g>_)continue;let y=T_(a,n);const w=l>0&&l<Ve-1&&d>0&&d<Ve-1;y===ft&&(w||u>=2)&&(y=Xn),y===ft&&(u+=1);const S=1+Math.floor(a()*Math.max(1,i-2)),x=Math.floor(a()*4),b={mode:y,tone:S,phase:x};s[g]=b,s[_]=b}return s}function _i(e){const t=e%ie,r=Math.floor(e/ie);return Math.floor(r/ir)*Ve+Math.floor(t/ir)}function k_(e){const t=S_(),r=Math.floor(e/ht),i=e%ht;return t[(i+r*2+u_)%t.length]}function I_(e,t){const r=Ae.styleRanges?.[e],i=r?r[0]:0,a=r?r[1]:Ae.perClass,n=Ae.quality,s=n?Array.from({length:Math.max(1,a-i)},(h,g)=>i+g).filter(h=>n[h]>=.4):[],u=s.length?s:Array.from({length:Math.max(1,a-i)},(h,g)=>i+g),l=Ti(Et^bm(e||"")^Math.imul(t+1,2654435761));let d=u[Math.floor(l()*u.length)],c=0;for(;fn.has(d)&&c<12;)d=u[Math.floor(l()*u.length)],c+=1;return x_(d),d}function gn(e){const t=document.createElement("canvas");return t.width=ie,t.height=ie,e&&(t.className=e),t.setAttribute("aria-hidden","true"),t}function z_(e,t){const r=e.getContext("2d"),i=r.createImageData(ie,ie);for(let a=0;a<nt;a+=1){const n=a%ie,s=Math.floor(a/ie),l=14+(n*17+s*31+t*13+(n+s)%5*7)%20,d=a*4;i.data[d]=l,i.data[d+1]=l,i.data[d+2]=l,i.data[d+3]=255}r.putImageData(i,0,0)}function C_(e,t,r){const i=document.createElement("div");i.className="tile-readout",i.setAttribute("aria-hidden","true"),[["ID",String(e).padStart(4,"0")],["RUN",$i(Et).slice(0,4)],["PX","24×24"],["SYM",t==="vertical"?"V":"H"],["MOT",Cr(r).code],["SEC","4×4"],["PAL","64"],["BYR","8×8"]].forEach(([s,u])=>{const l=document.createElement("span");l.className="tile-readout-item",l.textContent=s+" "+u,i.append(l)});const n=document.createElement("span");return n.className="tile-readout-item tile-readout-code",n.textContent="LAT ---",i.append(n),{readout:i,code:n}}function A_(e){const t=document.createElement("div");t.className="pattern-tile",t.setAttribute("role","img"),t.setAttribute("tabindex","0"),t.setAttribute("aria-label","Generating pixel pattern"),t.dataset.state="generating";const r=k_(e),i=Cr(r).symmetry;t.dataset.symmetry=i,t.dataset.style=r;const a=gn("skeleton-canvas"),n=gn("output-canvas"),s=C_(e,i,r);return z_(a,e),t.append(a,n,s.readout),{element:t,skeleton:a,output:n,context:n.getContext("2d"),readout:s.readout,readoutCode:s.code,seed:e,style:r,symmetry:i,revealOrder:$_(e),image:null,revealed:0}}function O_(e=!1){const t=[],r=document.createDocumentFragment(),i=gi.querySelectorAll(".pattern-tile").length;for(let a=0;a<ht;a+=1){const n=A_(i+a);e&&(n.element.dataset.entry="sparks",n.element.setAttribute("aria-hidden","true")),t.push(n),r.append(n.element)}return gi.append(r),t}function Zt(e){const t=e%ie,r=Math.floor(e/ie);return t===0||t===ie-1||r===0||r===ie-1}function R_(e){return Ae.palette.findIndex(t=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2])}function B_(e){return Cr(e).palette.map(t=>R_(t)).filter(t=>t>=0)}function M_(e){const t=Ae.palette[e]||[0,0,0];return(t[0]*.2126+t[1]*.7152+t[2]*.0722)/255}function N_(e,t,r,i,a,n){if(e===0)return 0;if(a.length<2)return e;const s=M_(e),u=Si[(Math.floor(r/ie)+i)%8][(r+i*3)%8];let l=Math.max(1,Math.min(a.length-1,Math.round(s*(a.length-1))+(u<12?1:0)));const d=n[_i(r)];d&&d.mode===zr&&u<12&&(l=d.tone),d&&d.mode===Gt&&(r%ie+Math.floor(r/ie)+d.phase)%5<1&&(l=d.tone);const c=a.length-1;return l===c&&u>24&&(l=Math.max(1,c-1)),l>1&&u>50&&d?.mode!==Gt&&(l-=1),a[l]}function D_(e,t,r,i,a,n,s){const u=Si[(r+i)%8][(t+i*3)%8],l=Math.abs(t-11.5),d=Math.abs(r-11.5),c=Math.sqrt(l*l+d*d),h=t>=n.minX&&t<=n.maxX&&r>=n.minY&&r<=n.maxY;if(e==="fauna")return(h?22:0)+(a?34:0)+(c<8?10:0)+(u<10?8:0)+(s.mode===er?18:0)+(s.mode===ft?-24:0);if(e==="botanical")return(Math.abs(l-d)<2.5||c<4?30:0)+(a?28:0)+(u<16?10:0)+(s.mode===er?22:0)+(s.mode===ft?-18:0);if(e==="terrain")return(Math.abs(r%6-2)<2?24:0)+(a?28:0)+(r>11?10:0)+(u<14?8:0)+(s.mode===Gt?24:0)+(s.mode===ft?-22:0);if(e==="geometry"){const _=Math.abs((l+d)%6-2)<1.8,y=(t+r+i)%5<2;return(_?26:0)+(y?14:0)+(a?30:0)+(u<18?8:0)+(s.mode===Gt?24:0)+(s.mode===er?18:0)+(s.mode===ft?-20:0)}return((Math.floor(t/3)+Math.floor(r/3)+i)%2===0?24:0)+(a?32:0)+(u<20?8:0)+(s.mode===zr?22:0)+(s.mode===ft?-16:0)}function P_(e,t,r,i,a){const n=((r-i+a+12)%6+6)%6;return t===zr?(r+i+a)%3===0:t===Gt?n===0||n===1:t!==er?!1:e==="fauna"?(r===1||r===4)&&i===2:e==="botanical"?Math.abs(Math.abs(r-2.5)-Math.abs(i-2.5))<.8:e==="terrain"?i===a%3||i===4&&r%2===a%2:e==="geometry"?n===0||(r+i+a)%5===0:(r+i+a)%4<2}function U_(e,t,r,i,a,n){yi[r].forEach(({position:s,mirror:u})=>{const l=n[_i(s)];if(!l||l.mode===Xn||l.mode===ft)return;const d=s%ie,c=Math.floor(s/ie),h=d%ir,g=c%ir;if(!P_(i,l.mode,h,g,l.phase)||e[s]!==0||e[u]!==0)return;const _=a[l.tone]||a[1]||1;e[s]=_,e[u]=_})}function L_(e,t,r,i){const a=e.slice(),n=Cr(i),s=B_(i),u=E_(i,t,r,s.length),l=r%5===0,d={minX:ie,minY:ie,maxX:-1,maxY:-1};e.forEach((y,w)=>{if(y===0)return;const S=w%ie,x=Math.floor(w/ie);d.minX=Math.min(d.minX,S),d.maxX=Math.max(d.maxX,S),d.minY=Math.min(d.minY,x),d.maxY=Math.max(d.maxY,x),a[w]=N_(y,i,w,r,s,u)}),d.maxX<0&&(d.minX=4,d.maxX=19,d.minY=4,d.maxY=19);const c=yi[t],h=[];c.forEach(({position:y,mirror:w})=>{const S=u[_i(y)],x=y%ie,b=Math.floor(y/ie),E=Si[(b+r)%8][(x+r*3)%8],T=!Zt(y)&&!Zt(w)&&Math.abs(x-11.5)+Math.abs(b-11.5)>5;let I=!1;if(S.mode===ft&&e[y]!==0&&e[w]!==0&&T&&E>56&&(x%ir>1||b%ir>1)&&(x+b+S.phase)%5<2&&(a[y]=0,a[w]=0,I=!0),!I&&(e[y]!==0||e[w]!==0)||l&&(Zt(y)||Zt(w)))return;const z=[y-1,y+1,y-ie,y+ie].some($=>$>=0&&$<nt&&e[$]!==0),C=D_(i,x,b,r,z,d,S);if(h.push({position:y,mirror:w,priority:C,x,y:b,sector:S}),C>=38||z&&C>=28){const $=S.mode===er||S.mode===zr||S.mode===Gt?s[S.tone]||s[1]||1:s[1+(x+b+r)%Math.max(1,s.length-1)]||s[1]||1;a[y]=$,a[w]=$}});const g=Math.floor(nt*n.minDensity);let _=a.reduce((y,w)=>y+(w!==0?1:0),0);return h.sort((y,w)=>w.priority-y.priority||y.position-w.position).some(({position:y,mirror:w,x:S,y:x,sector:b},E)=>{if(_>=g)return!0;if(a[y]!==0||a[w]!==0)return!1;const T=b.mode===er||b.mode===zr||b.mode===Gt?s[b.tone]||s[1]||1:s[1+(E+r+S+x)%Math.max(1,s.length-1)]||s[1]||1;return a[y]=T,a[w]=T,_+=y===w?1:2,!1}),U_(a,e,t,i,s,u),yi[t].forEach(({position:y,mirror:w})=>{if(a[y]!==0||a[w]!==0)return;const S=y%ie,x=Math.floor(y/ie),b=Math.abs(S-11.5)+Math.abs(x-11.5);if(Zt(y)||Zt(w)||b>8.5)return;const E=u[_i(y)],T=s[E.tone]||s[1]||1;a[y]=T,a[w]=T}),a}function q_(e,t,r,i,a){const n=new Uint8Array(nt),s=t*Ae.palette.length*nt;return yi[r].forEach(({position:u,mirror:l})=>{let d=0,c=-1/0;for(let h=0;h<Ae.palette.length;h+=1){const g=e[s+h*nt+u];g>c&&(c=g,d=h)}n[u]=d,n[l]=d}),L_(n,r,i,a)}function W_(e,t,r){const i=t*4;e.data[i]=r[0],e.data[i+1]=r[1],e.data[i+2]=r[2],e.data[i+3]=255}function Yn(e,t,r,i){const a=e.revealed,n=Math.min(i,nt);for(let s=a;s<n;s+=1){const u=e.revealOrder[s];if(!Number.isInteger(u))continue;const l=Ae.palette[t?.[u]??0]||Ae.palette[0];W_(r,u,l)}n!==a&&(e.context.putImageData(r,0,0),e.revealed=n)}function bi(e,t,r){const i=e.createShader(t);if(e.shaderSource(i,r),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){const a=e.getShaderInfoLog(i)||"Unknown shader compile error";throw e.deleteShader(i),new Error(a)}return i}function V_(e,t){if(sr.matches)return;const r=gn("shader-effect"),i=e.getBoundingClientRect(),a=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(96,Math.round(i.width*a)),r.height=Math.max(96,Math.round(i.height*a)),e.append(r);const n=r.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1});if(!n){r.remove();return}let s,u,l,d,c,h=!1,g=0;const _=()=>{if(h)return;h=!0,window.cancelAnimationFrame(g),d&&n.deleteBuffer(d),c&&n.deleteTexture(c),l&&n.deleteProgram(l),s&&n.deleteShader(s),u&&n.deleteShader(u),r.remove(),delete e.dataset.effect;const b=n.getExtension("WEBGL_lose_context");b&&b.loseContext()};try{if(s=bi(n,n.VERTEX_SHADER,y_),u=bi(n,n.FRAGMENT_SHADER,__),l=n.createProgram(),n.attachShader(l,s),n.attachShader(l,u),n.linkProgram(l),!n.getProgramParameter(l,n.LINK_STATUS))throw new Error(n.getProgramInfoLog(l)||"Unknown shader link error");d=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,d),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),n.STATIC_DRAW),n.viewport(0,0,r.width,r.height),n.useProgram(l);const b=n.getAttribLocation(l,"position");n.enableVertexAttribArray(b),n.vertexAttribPointer(b,2,n.FLOAT,!1,0,0),n.uniform2f(n.getUniformLocation(l,"resolution"),r.width,r.height),c=n.createTexture(),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,c),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),n.uniform1i(n.getUniformLocation(l,"pattern"),0),n.clearColor(0,0,0,0)}catch(b){console.warn("dither-feed: shader unavailable",b),_();return}const y=n.getUniformLocation(l,"progress");e.dataset.effect="active";const w=b=>{if(!h)try{n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,c),n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,t),n.clear(n.COLOR_BUFFER_BIT),n.uniform1f(y,b),n.drawArrays(n.TRIANGLE_STRIP,0,4)}catch(E){console.warn("dither-feed: shader frame skipped",E),_()}},S=performance.now(),x=b=>{if(h)return;const E=b-S;if(E>=Sp){_();return}w(E/Sp),!h&&(g=window.requestAnimationFrame(x))};return g=window.requestAnimationFrame(x),{dispose:_}}function G_(e){return new Promise(t=>window.setTimeout(t,e))}function F_(){if(sr.matches)return null;const e=document.createElement("canvas");e.className="gold-particle-field",e.setAttribute("aria-hidden","true"),document.body.append(e);const t=e.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1});if(!t)return e.remove(),null;const r=[],i=new Map;let a,n,s,u,l=0,d=!1,c=!0,h=window.innerWidth,g=window.innerHeight,_=Math.min(window.devicePixelRatio||1,2);const y=performance.now();let w=y;const S=()=>{h=window.innerWidth,g=window.innerHeight,_=Math.min(window.devicePixelRatio||1,2),e.width=Math.max(1,Math.round(h*_)),e.height=Math.max(1,Math.round(g*_)),t.viewport(0,0,e.width,e.height)},x=()=>{if(d)return;d=!0,window.cancelAnimationFrame(l),window.removeEventListener("resize",S),u&&t.deleteBuffer(u),s&&t.deleteProgram(s),a&&t.deleteShader(a),n&&t.deleteShader(n),e.remove();const z=t.getExtension("WEBGL_lose_context");z&&z.loseContext()};try{if(a=bi(t,t.VERTEX_SHADER,b_),n=bi(t,t.FRAGMENT_SHADER,w_),s=t.createProgram(),t.attachShader(s,a),t.attachShader(s,n),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS))throw new Error(t.getProgramInfoLog(s)||"Unknown gold particle shader link error");u=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,u);const z=5*Float32Array.BYTES_PER_ELEMENT,C=t.getAttribLocation(s,"particlePosition"),$=t.getAttribLocation(s,"particleSize"),M=t.getAttribLocation(s,"particleLife"),P=t.getAttribLocation(s,"particleSeed");t.enableVertexAttribArray(C),t.vertexAttribPointer(C,2,t.FLOAT,!1,z,0),t.enableVertexAttribArray($),t.vertexAttribPointer($,1,t.FLOAT,!1,z,8),t.enableVertexAttribArray(M),t.vertexAttribPointer(M,1,t.FLOAT,!1,z,12),t.enableVertexAttribArray(P),t.vertexAttribPointer(P,1,t.FLOAT,!1,z,16),t.useProgram(s),t.clearColor(0,0,0,0),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE)}catch(z){return console.warn("dither-feed: gold particle shader unavailable",z),x(),null}const b=t.getUniformLocation(s,"resolution"),E=t.getUniformLocation(s,"pixelRatio"),T=t.getUniformLocation(s,"time"),I=z=>{if(d)return;const C=Math.max(0,Math.min(.04,(z-w)/1e3));w=z,t.clear(t.COLOR_BUFFER_BIT);for(let $=r.length-1;$>=0;$-=1){const M=r[$];M.age+=C,M.velocityY+=M.gravity*C,M.x+=(M.velocityX+Math.sin(M.age*10+M.seed*13)*18)*C,M.y+=M.velocityY*C,(M.y>g+M.size*4||M.age>=M.maxLife)&&r.splice($,1)}if(r.length){const $=new Float32Array(r.length*5);r.forEach((M,P)=>{const W=P*5;$[W]=M.x,$[W+1]=M.y,$[W+2]=M.size,$[W+3]=Math.max(0,1-M.age/M.maxLife),$[W+4]=M.seed}),t.bindBuffer(t.ARRAY_BUFFER,u),t.bufferData(t.ARRAY_BUFFER,$,t.DYNAMIC_DRAW),t.useProgram(s),t.uniform2f(b,h,g),t.uniform1f(E,_),t.uniform1f(T,(z-y)/1e3),t.drawArrays(t.POINTS,0,r.length)}c||r.length?l=window.requestAnimationFrame(I):x()};return S(),window.addEventListener("resize",S),l=window.requestAnimationFrame(I),{emit(z,C,$,M){if(d||!c||r.length>=ja)return;const P=z.output.getBoundingClientRect();if(P.width<=0||P.height<=0)return;let W=i.get(z.seed);W||(W=Ti(Et^Math.imul(z.seed+1,2246822519)),i.set(z.seed,W));const H=P.width/ie,K=P.height/ie;for(let R=$;R<M&&!(r.length>=ja);R+=1){const D=z.revealOrder[R];if(!Number.isInteger(D))continue;const F=Ae.palette[C?.[D]??0];if(!F||Math.max(...F)<48||W()>.18)continue;const Q=W()>.9?2:1;for(let J=0;J<Q&&!(r.length>=ja);J+=1)r.push({x:P.left+(D%ie+.5)*H+(W()-.5)*H*.7,y:P.top+(Math.floor(D/ie)+.5)*K+(W()-.5)*K*.5,velocityX:(W()-.5)*82,velocityY:76+W()*122,gravity:520+W()*360,age:0,maxLife:2.4+W()*.8,size:8.4+W()*11.6,seed:W()})}},finishEmission(){c=!1},dispose:x}}function H_(){window.requestAnimationFrame(()=>{Le.scrollTo({top:Math.max(0,Le.scrollHeight-Le.clientHeight),behavior:sr.matches?"auto":"smooth"})})}function yn(e){e.forEach(t=>{delete t.element.dataset.entry,t.element.removeAttribute("aria-hidden")})}function j_(e,t){e.forEach((r,i)=>{r.image=r.context.createImageData(ie,ie),Yn(r,t[i],r.image,nt)})}function _n(e,t=!0){e.forEach((r,i)=>{r.skeleton.remove(),r.element.setAttribute("aria-label","Generated pixel pattern "+(i+1)),r.element.removeAttribute("aria-hidden"),r.element.dataset.state="ready",r.image=null,t&&V_(r.element,r.output)}),mn+=e.length,Ft("ready")}function K_(e,t){if(sr.matches)return j_(e,t),yn(e),_n(e),Promise.resolve();const r=e.map(a=>(a.image=a.context.createImageData(ie,ie),a.image)),i=F_();return e.forEach(a=>{a.element.dataset.entry="revealing"}),new Promise(a=>{const n=performance.now(),s=()=>{yn(e),_n(e),i?.finishEmission(),a()},u=l=>{const d=Math.max(0,l-n),c=Math.max(0,Math.min(1,d/r_)),h=1-Math.pow(1-c,2.35);if(e.forEach((g,_)=>{const y=g.revealed,w=Math.floor(h*g.revealOrder.length);Yn(g,t[_],r[_],w),i?.emit(g,t[_],y,g.revealed)}),c<1){window.requestAnimationFrame(u);return}s()};window.requestAnimationFrame(u)})}function X_(e,t){const r=e.map(i=>(i.image=i.context.createImageData(ie,ie),i.image));return new Promise(i=>{const a=performance.now(),n=()=>{_n(e),i()},s=()=>{const u=sr.matches?1:Math.min(1,(performance.now()-a)/e_);if(e.forEach((l,d)=>{const c=Math.floor(u*l.revealOrder.length);Yn(l,t[d],r[d],c)}),u>=1)return n();window.setTimeout(s,16)};s()})}async function Y_(e){const t=new Float32Array(ht*Ae.latent),r=new Uint32Array(ht);for(let n=0;n<ht;n+=1){const s=I_(e[n].style,e[n].seed);e[n].readoutCode.textContent="LAT "+s.toString(16).toUpperCase().padStart(3,"0"),r[n]=(Et^Math.imul(e[n].seed+1,2654435761)^Math.imul(s+1,7919))>>>0;const u=Ti(r[n]^2772213275),l=s*Ae.latent,d=n*Ae.latent;for(let c=0;c<Ae.latent;c+=1)t[d+c]=wm[l+c]+v_(u)*i_}const i=new Qe("float32",t,[ht,Ae.latent]);let a;try{return a=await vi.run({latent:i}),Array.from({length:ht},(n,s)=>q_(a.logits.data,s,e[s].symmetry,r[s],e[s].style))}finally{i.dispose&&i.dispose(),a&&a.logits&&a.logits.dispose&&a.logits.dispose()}}function Sm(e){ar=!0,console.error(e),gi.replaceChildren();const t=document.createElement("div");t.className="error-line",t.textContent=`dither-feed: model unavailable
`+(e.message||e),gi.append(t),Ft("error"),xm(!0)}async function bn({entryEffect:e=!1}={}){if(Lt||ar||!vi)return;Lt=!0,Ft("synth");const t=O_(e);e?H_():yn(t);try{const r=Y_(t),i=e?(await Promise.all([r,G_(t_)]))[0]:await r;e?await K_(t,i):await X_(t,i)}catch(r){t.forEach(i=>i.element.remove()),Sm(r)}finally{Lt=!1,Ft()}}function Ei(){return Le.scrollTop+Le.clientHeight>=Le.scrollHeight-l_}function Zn(){!xi||Lt||ar||!Ei()||st<d_||(st=0,bn({entryEffect:!0}))}async function Z_(){_e.wasm.numThreads=navigator.crossOriginIsolated?Math.min(4,navigator.hardwareConcurrency||1):1,_e.wasm.wasmPaths={wasm:Jy};const e="/dither-feed/model/",[t,r,i]=await Promise.all([fetch(e+"model.json").then(a=>Bp(a,"model.json")).then(a=>a.json()),fetch(e+"latent-bank.bin").then(a=>Bp(a,"latent-bank.bin")).then(async a=>new Float32Array(await a.arrayBuffer())),vn.create(e+"garden-cvae.onnx",{executionProviders:["wasm"],graphOptimizationLevel:"all"})]);if(t.batch!==ht||t.size!==ie)throw new Error("Model shape does not match the four-tile feed");if(r.length<t.perClass*t.latent)throw new Error("Latent bank is incomplete");Ae=t,wm=r,vi=i}const Q_=new IntersectionObserver(e=>{e.some(t=>t.isIntersecting)&&Zn()},{root:Le,rootMargin:"0px 0px 40px 0px"});Le.addEventListener("scroll",()=>{Le.scrollTop>0&&(xi=!0),Ei()||(st=0)},{passive:!0});Le.addEventListener("wheel",e=>{if(e.deltaY<=0){st=0;return}if(xi=!0,Lt||!Ei()){st=0;return}st+=Math.min(e.deltaY,80),Zn()},{passive:!0});Le.addEventListener("touchstart",e=>{Er=e.touches[0]?e.touches[0].clientY:null,st=0},{passive:!0});Le.addEventListener("touchmove",e=>{if(Er===null||!e.touches[0])return;const t=e.touches[0].clientY,r=Er-t;if(Er=t,r<=0||Lt||!Ei()){st=0;return}xi=!0,st+=Math.min(r,80),Zn()},{passive:!0});Le.addEventListener("touchend",()=>{Er=null,st=0},{passive:!0});Q_.observe(c_);Z_().then(async()=>{if(await bn(),!ar){xm();for(let e=1;e<p_&&!ar;e+=1)await bn()}}).catch(Sm);
