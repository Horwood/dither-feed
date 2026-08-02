(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();var cn=Object.defineProperty,v0=Object.getOwnPropertyDescriptor,x0=Object.getOwnPropertyNames,S0=Object.prototype.hasOwnProperty,T0=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),P=(e,t)=>()=>(e&&(t=e(e=0)),t),ar=(e,t)=>{for(var r in t)cn(e,r,{get:t[r],enumerable:!0})},k0=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of x0(t))!S0.call(e,a)&&a!==r&&cn(e,a,{get:()=>t[a],enumerable:!(i=v0(t,a))||i.enumerable});return e},Tr=e=>k0(cn({},"__esModule",{value:!0}),e),lr,$t,Yt,Do,Tp,kp=P(()=>{lr=new Map,$t=[],Yt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=lr.get(e);if(i===void 0)lr.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=$t.indexOf(e);a!==-1&&$t.splice(a,1);for(let n=0;n<$t.length;n++)if(lr.get($t[n]).priority<=r){$t.splice(n,0,e);return}$t.push(e)}return}throw new TypeError("not a valid backend")},Do=async e=>{let t=lr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Tp=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?$t:r,a,n=[],s=new Set;for(let l of i){let d=await Do(l);typeof d=="string"?n.push({name:l,err:d}):(a||(a=d),a===d&&s.add(l))}if(!a)throw new Error(`no available backend found. ERR: ${n.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of n)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let u=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[a,new Proxy(e,{get:(l,d)=>d==="executionProviders"?u:Reflect.get(l,d)})]}}),E0=P(()=>{kp()}),Ep,I0=P(()=>{Ep="1.27.0"}),Fi,ze,Ip=P(()=>{I0(),Fi="warning",ze={wasm:{},webgl:{},webgpu:{},versions:{common:Ep},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Fi=e}},get logLevel(){return Fi}},Object.defineProperty(ze,"logLevel",{enumerable:!0})}),_e,z0=P(()=>{Ip(),_e=ze}),zp,Cp,C0=P(()=>{zp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[3]):(a=e.dims[3],n=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",u=t?.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let c=n*a,h=0,g=c,_=c*2,y=-1;s==="RGBA"?(h=0,g=c,_=c*2,y=c*3):s==="RGB"?(h=0,g=c,_=c*2):s==="RBG"&&(h=0,_=c,g=c*2);for(let w=0;w<n;w++)for(let S=0;S<a;S++){let v=(e.data[h++]-d[0])*l[0],b=(e.data[g++]-d[1])*l[1],E=(e.data[_++]-d[2])*l[2],T=y===-1?255:(e.data[y++]-d[3])*l[3];i.fillStyle="rgba("+v+","+b+","+E+","+T+")",i.fillRect(S,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Cp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[1],s=e.dims[3]):(a=e.dims[3],n=e.dims[2],s=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let h=n*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,_=0,y=1,w=2,S=3,v=0,b=h,E=h*2,T=-1;u==="RGBA"?(v=0,b=h,E=h*2,T=h*3):u==="RGB"?(v=0,b=h,E=h*2):u==="RBG"&&(v=0,E=h,b=h*2),i=r.createImageData(a,n);for(let I=0;I<n*a;_+=g,y+=g,w+=g,S+=g,I++)i.data[_]=(e.data[v++]-c[0])*d[0],i.data[y]=(e.data[b++]-c[1])*d[1],i.data[w]=(e.data[E++]-c[2])*d[2],i.data[S]=T===-1?255:(e.data[T++]-c[3])*d[3]}else throw new Error("Can not access image data");return i}}),Wr,Ap,Op,Rp,Bp,Mp,A0=P(()=>{hn(),Wr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},n,s;typeof a.mean=="number"?n=[a.mean,a.mean,a.mean,a.mean]:n=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),h=4,g=0,_=1,y=2,w=3,S=0,v=d,b=d*2,E=-1;u==="RGB"&&(h=3,g=0,_=1,y=2,w=-1),l==="RGBA"?E=d*3:l==="RBG"?(S=0,b=d,v=d*2):l==="BGR"&&(b=0,v=d,S=d*2);for(let T=0;T<d;T++,g+=h,y+=h,_+=h,w+=h)c[S++]=(e[g]+s[0])/n[0],c[v++]=(e[_]+s[1])/n[1],c[b++]=(e[y]+s[2])/n[2],E!==-1&&w!==-1&&(c[E++]=(e[w]+s[3])/n[3]);return l==="RGBA"?new Ue("float32",c,[1,4,r,i]):new Ue("float32",c,[1,3,r,i])},Ap=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let h=d(c);if(h!=null){let g=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=g,u.width=_}else u.tensorFormat="RGBA",u.height=g,u.width=_;h.drawImage(e,0,0),s=h.getImageData(0,0,_,g).data}else throw new Error("Can not access image data")}else if(i){let c,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,h=t.resizedWidth):(c=e.height,h=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=c,u.width=h,t!==void 0){let g=l();g.width=h,g.height=c;let _=d(g);if(_!=null)_.putImageData(e,0,0),s=_.getImageData(0,0,h,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let h=d(c);if(h!=null){let g=e.height,_=e.width;return h.drawImage(e,0,0,_,g),s=h.getImageData(0,0,_,g).data,u.height=g,u.width=_,Wr(s,u)}else throw new Error("Can not access image data")}else{if(n)return new Promise((c,h)=>{let g=l(),_=d(g);if(!e||!_)return h();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{g.width=y.width,g.height=y.height,_.drawImage(y,0,0,g.width,g.height);let w=_.getImageData(0,0,g.width,g.height);u.height=g.height,u.width=g.width,c(Wr(w.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Wr(s,u);throw new Error("Input data provided is not supported - aborted tensor creation")},Op=(e,t)=>{let{width:r,height:i,download:a,dispose:n}=t,s=[1,i,r,4];return new Ue({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:n})},Rp=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Ue({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:n})},Bp=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Ue({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:n})},Mp=(e,t,r)=>new Ue({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Bt,br,ji,Np,O0=P(()=>{Bt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),br=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ji=!1,Np=()=>{if(!ji){ji=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(Bt.set("int64",BigInt64Array),br.set(BigInt64Array,"int64")),t&&(Bt.set("uint64",BigUint64Array),br.set(BigUint64Array,"uint64")),i?(Bt.set("float16",r),br.set(r,"float16")):Bt.set("float16",Uint16Array)}}}),Dp,Up,R0=P(()=>{hn(),Dp=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Up=(e,t)=>{switch(e.location){case"cpu":return new Ue(e.type,e.data,t);case"cpu-pinned":return new Ue({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Ue({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Ue({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Ue({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ue,hn=P(()=>{C0(),A0(),O0(),R0(),Ue=class{constructor(e,t,r){Np();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=Bt.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=Bt.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=br.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(u===void 0)u=[s.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");a=u,this.cpuData=s,this.dataLocation="cpu"}let n=Dp(a);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=n}static async fromImage(e,t){return Ap(e,t)}static fromTexture(e,t){return Op(e,t)}static fromGpuBuffer(e,t){return Rp(e,t)}static fromMLTensor(e,t){return Bp(e,t)}static fromPinnedBuffer(e,t,r){return Mp(e,t,r)}toDataURL(e){return zp(this,e)}toImageData(e){return Cp(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Up(this,e)}}}),Ye,Pp=P(()=>{hn(),Ye=Ue}),si,Ki,st,Qe,Dt,Ut,Lp=P(()=>{Ip(),si=(e,t)=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ki=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(n+=`::${t}`),si("CPU",n);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},st=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||Ki("BEGIN",e)},Qe=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||Ki("END",e)},Dt=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.time(`ORT::${e}`)},Ut=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.timeEnd(`ORT::${e}`)}}),qp,B0=P(()=>{kp(),Pp(),Lp(),qp=class Wp{constructor(t){this.handler=t}async run(t,r,i){st(),Dt("InferenceSession.run");let a={},n={};if(typeof t!="object"||t===null||t instanceof Ye||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Ye)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);a[d]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let h of this.outputNames)if(c.indexOf(h)!==-1){let g=r[h];(g===null||g instanceof Ye)&&(d=!0,s=!1,a[h]=g)}if(d){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)a[d]=null;let u=await this.handler.run(t,a,n),l={};for(let d in u)if(Object.hasOwnProperty.call(u,d)){let c=u[d];c instanceof Ye?l[d]=c:l[d]=new Ye(c.type,c.data,c.dims)}return Ut("InferenceSession.run"),Qe(),l}async release(){return this.handler.dispose()}static async create(t,r,i,a){st(),Dt("InferenceSession.create");let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,h=0,g=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(g=t.byteLength-h,typeof i=="number"){if(g=i,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||h+g>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-h}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(c,h,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await Tp(s),d=await u.createInferenceSessionHandler(n,l);return Ut("InferenceSession.create"),Qe(),new Wp(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),fn,M0=P(()=>{B0(),fn=qp}),N0=P(()=>{}),D0=P(()=>{}),U0=P(()=>{}),P0=P(()=>{}),L0={};ar(L0,{InferenceSession:()=>fn,TRACE:()=>si,TRACE_EVENT_BEGIN:()=>Dt,TRACE_EVENT_END:()=>Ut,TRACE_FUNC_BEGIN:()=>st,TRACE_FUNC_END:()=>Qe,Tensor:()=>Ye,env:()=>_e,registerBackend:()=>Yt});var Ve=P(()=>{E0(),z0(),M0(),Pp(),N0(),D0(),Lp(),U0(),P0()}),mn=P(()=>{}),Vp={};ar(Vp,{default:()=>Gp});var Xi,Zi,Gp,q0=P(()=>{Zf(),Ht(),gn(),Xi="ort-wasm-proxy-worker",Zi=globalThis.self?.name===Xi,Zi&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":yn(r.wasm).then(()=>{Bn(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Mn(a,i).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:i}=r,a=hi(i);postMessage({type:t,out:a});break}case"create":{let{model:i,options:a}=r;Nn(i,a).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":Dn(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:a,inputs:n,outputIndices:s,options:u}=r;Un(i,a,n,s,new Array(s.length).fill(null),u).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},Ln([...n,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":Pn(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),Gp=Zi?null:e=>new Worker(e??De,{type:"module",name:Xi})}),Hp={};ar(Hp,{default:()=>Fp});async function Uo(e={}){var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,a=i&&self.name?.startsWith("em-pthread");t.mountExternalData=(o,p)=>{o.startsWith("./")&&(o=o.substring(2)),(t.Xc||(t.Xc=new Map)).set(o,p)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let n=o=>async(...p)=>{try{if(t.Yc)throw Error("Session already started");let m=t.Yc={Kd:p[0],errors:[]},f=await o(...p);if(t.Yc!==m)throw Error("Session mismatch");t.dd?.flush();let $=m.errors;if(0<$.length){let k=await Promise.all($);if(k=k.filter(z=>z),0<k.length)throw Error(k.join(`
`))}return f}finally{t.Yc=null}};t.jsepInit=(o,p)=>{if(o==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=p;let m=t.dd;t.jsepRegisterBuffer=(f,$,k,z)=>m.registerBuffer(f,$,k,z),t.jsepGetBuffer=f=>m.getBuffer(f),t.jsepCreateDownloader=(f,$,k)=>m.createDownloader(f,$,k),t.jsepOnCreateSession=f=>{m.onCreateSession(f)},t.jsepOnReleaseSession=f=>{m.onReleaseSession(f)},t.jsepOnRunStart=f=>m.onRunStart(f),t.Id=(f,$)=>{m.upload(f,$)}}else if(o==="webnn"){let m=p[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=p.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=f=>m.onRunStart(f),t.webnnOnRunEnd=m.onRunEnd.bind(m),t.webnnOnReleaseSession=f=>{m.onReleaseSession(f)},t.webnnCreateMLTensorDownloader=(f,$)=>m.createMLTensorDownloader(f,$),t.webnnRegisterMLTensor=(f,$,k,z)=>m.registerMLTensor(f,$,k,z),t.webnnCreateMLContext=f=>m.createMLContext(f),t.webnnRegisterMLConstant=(f,$,k,z,B,q)=>m.registerMLConstant(f,$,k,z,B,t.Xc,q),t.webnnRegisterGraphInput=m.registerGraphInput.bind(m),t.webnnIsGraphInput=m.isGraphInput.bind(m),t.webnnRegisterGraphOutput=m.registerGraphOutput.bind(m),t.webnnIsGraphOutput=m.isGraphOutput.bind(m),t.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),t.webnnIsGraphInputOutputTypeSupported=m.isGraphInputOutputTypeSupported.bind(m)}};let s=()=>{let o=p=>(...m)=>{let f=tt;return m=p(...m),tt!=f?new Promise(($,k)=>{Ri={resolve:$,reject:k}}):m};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[p]=o(t[p])})(),n!==void 0&&(t._OrtRun=n(t._OrtRun),t._OrtRunWithBinding=n(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s?.()};var u,l,d=(o,p)=>{throw p},c=import.meta.url,h="";if(r||i){try{h=new URL(".",c).href}catch{}i&&(l=o=>{var p=new XMLHttpRequest;return p.open("GET",o,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),u=async o=>{if(C(o))return new Promise((m,f)=>{var $=new XMLHttpRequest;$.open("GET",o,!0),$.responseType="arraybuffer",$.onload=()=>{$.status==200||$.status==0&&$.response?m($.response):f($.status)},$.onerror=f,$.send(null)});var p=await fetch(o,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)}}var g,_,y,w,S,v,b=console.log.bind(console),E=console.error.bind(console),T=b,I=E,A=!1,C=o=>o.startsWith("file://");function x(){yt.buffer!=L.buffer&&Q()}if(a){let o=function(p){try{var m=p.data,f=m.Sc;if(f==="load"){let $=[];self.onmessage=k=>$.push(k),v=()=>{postMessage({Sc:"loaded"});for(let k of $)o(k);self.onmessage=o};for(let k of m.xd)t[k]&&!t[k].proxy||(t[k]=(...z)=>{postMessage({Sc:"callHandler",wd:k,args:z})},k=="print"&&(T=t[k]),k=="printErr"&&(I=t[k]));yt=m.Od,Q(),_=m.Pd,Ae(),qr()}else if(f==="run"){(function($){var k=(x(),N)[$+52>>>2>>>0];$=(x(),N)[$+56>>>2>>>0],Fs(k,k-$),oe(k)})(m.Rc),Ui(m.Rc,0,0,1,0,0),jn(),Ci(m.Rc),D||(Ls(),D=!0);try{fm(m.Md,m.bd)}catch($){if($!="unwind")throw $}}else m.target!=="setimmediate"&&(f==="checkMailbox"?D&&Br():f&&(I(`worker: received unknown command ${f}`),I(m)))}catch($){throw qs(),$}};var D=!1;self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=o}var L,Y,F,K,R,N,G,J,ee,re,ne,U=!1;function Q(){var o=yt.buffer;t.HEAP8=L=new Int8Array(o),F=new Int16Array(o),t.HEAPU8=Y=new Uint8Array(o),K=new Uint16Array(o),t.HEAP32=R=new Int32Array(o),t.HEAPU32=N=new Uint32Array(o),G=new Float32Array(o),J=new Float64Array(o),ee=new BigInt64Array(o),re=new BigUint64Array(o)}function Z(){U=!0,a?v():ut.sb()}function V(o){throw I(o="Aborted("+o+")"),A=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),S?.(o),o}function Ee(){return{a:{ma:Dg,gb:Ng,g:mm,J:gm,f:ym,o:_m,h:bm,ha:wm,b:$m,T:vm,Ha:Jn,n:xm,$:is,Xa:as,Da:ns,Fa:ss,Ya:os,Va:us,Oa:ls,Ua:ds,ka:ps,Ea:cs,Ba:hs,Wa:fs,Ca:ms,bb:Sm,ea:Tm,wa:km,ua:Im,da:Cm,O:Am,H:Om,va:Rm,_:Lm,xa:qm,Ra:Wm,za:Gm,Ia:Hm,sa:Fm,fa:jm,Qa:Ci,_a:Km,R:Qm,r:ig,c:Ii,hb:ag,y:ng,M:sg,D:og,l:ug,s:xs,ib:lg,I:dg,S:pg,j:cg,u:hg,q:fg,k:mg,La:gg,Ma:yg,Na:_g,Ja:Es,Ka:Is,ta:zs,db:wg,ab:vg,v:xg,aa:Sg,ga:Tg,$a:$g,W:kg,Za:Eg,Aa:Ig,F:bg,U:zg,la:Pr,ya:Ag,fb:Cg,eb:Og,Sa:Rs,Ta:Bs,Ga:xi,V:Ms,ja:Ns,Pa:Ds,ia:Us,kb:b0,na:f0,lb:_0,oa:h0,G:a0,e:qg,t:Pg,w:Ug,B:Yg,mb:d0,K:t0,x:Gg,pa:p0,Y:m0,ba:l0,nb:u0,ob:o0,P:Qg,qa:s0,pb:n0,N:r0,Z:c0,d:Lg,A:Vg,m:Wg,jb:w0,p:Fg,z:jg,C:Hg,E:Kg,L:Jg,qb:i0,Q:g0,ca:e0,X:y0,rb:Zg,ra:Xg,i:Bg,a:yt,cb:vi}}}async function Ae(){function o(f,$){var k=ut=f.exports;f={};for(let[z,B]of Object.entries(k))typeof B=="function"?(k=Xm(B),f[z]=k):f[z]=B;return ut=f,ut=(function(){var z=ut,B=W=>se=>W(se)>>>0,q=W=>()=>W()>>>0;return(z=Object.assign({},z)).tb=B(z.tb),z.Xb=q(z.Xb),z.Zb=B(z.Zb),z.lc=B(z.lc),z.mc=q(z.mc),z.qc=B(z.qc),z})(),Hn.push(ut._b),Ps=(f=ut).tb,Ls=f.ub,t._OrtInit=f.vb,t._OrtGetLastError=f.wb,t._OrtCreateSessionOptions=f.xb,t._OrtAppendExecutionProvider=f.yb,t._OrtAddFreeDimensionOverride=f.zb,t._OrtAddSessionConfigEntry=f.Ab,t._OrtReleaseSessionOptions=f.Bb,t._OrtCreateSession=f.Cb,t._OrtReleaseSession=f.Db,t._OrtGetInputOutputCount=f.Eb,t._OrtGetInputOutputMetadata=f.Fb,t._OrtFree=f.Gb,t._OrtCreateTensor=f.Hb,t._OrtGetTensorData=f.Ib,t._OrtReleaseTensor=f.Jb,t._OrtCreateRunOptions=f.Kb,t._OrtAddRunConfigEntry=f.Lb,t._OrtReleaseRunOptions=f.Mb,t._OrtCreateBinding=f.Nb,t._OrtBindInput=f.Ob,t._OrtBindOutput=f.Pb,t._OrtClearBoundOutputs=f.Qb,t._OrtReleaseBinding=f.Rb,t._OrtRunWithBinding=f.Sb,t._OrtRun=f.Tb,t._OrtEndProfiling=f.Ub,t._JsepOutput=f.Vb,t._JsepGetNodeName=f.Wb,Lr=f.Xb,rt=t._free=f.Yb,or=t._malloc=f.Zb,Ui=f.ac,qs=f.bc,Ws=f.cc,Vs=f.dc,Pi=f.ec,Gs=f.fc,Hs=f.gc,de=f.hc,ur=f.ic,Fs=f.jc,oe=f.kc,Li=f.lc,le=f.mc,js=f.nc,qi=f.oc,Ks=f.pc,Xs=f.qc,Zs=f.rc,Wi=f.sc,Ys=f.tc,Qs=f.uc,Js=f.vc,eo=f.wc,to=f.xc,ro=f.yc,io=f.zc,ao=f.Ac,no=f.Bc,so=f.Cc,oo=f.Dc,uo=f.Ec,lo=f.Fc,po=f.Gc,co=f.Hc,ho=f.Ic,fo=f.Jc,mo=f.Kc,go=f.Lc,yo=f.Mc,_o=f.Nc,bo=f.Pc,wo=f.Qc,$o=f.$c,vo=f.ad,xo=f.fd,So=f.jd,To=f.kd,ko=f.ld,Eo=f.md,Io=f.nd,zo=f.od,Co=f.pd,Ao=f.qd,Oo=f.vd,Ro=f.Td,Bo=f.Ud,Mo=f.Vd,No=f.Wd,_=$,ut}var p,m=Ee();return t.instantiateWasm?new Promise(f=>{t.instantiateWasm(m,($,k)=>{f(o($,k))})}):a?o(new WebAssembly.Instance(_,Ee()),_):(ne??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",h):h+"ort-wasm-simd-threaded.jsep.wasm":new URL("/dither-feed/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href,p=await(async function(f){var $=ne;if(!g&&!C($))try{var k=fetch($,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(k,f)}catch(z){I(`wasm streaming compile failed: ${z}`),I("falling back to ArrayBuffer instantiation")}return(async function(z,B){try{var q=await(async function(W){if(!g)try{var se=await u(W);return new Uint8Array(se)}catch{}if(W==ne&&g)W=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";W=l(W)}return W})(z);return await WebAssembly.instantiate(q,B)}catch(W){I(`failed to asynchronously prepare wasm: ${W}`),V(W)}})($,f)})(m),o(p.instance,p.module))}class ve{name="ExitStatus";constructor(p){this.message=`Program terminated with exit(${p})`,this.status=p}}var Oe=o=>{o.terminate(),o.onmessage=()=>{}},ge=[],$e=0,Me=null,zr=o=>{gt.length==0&&(Xn(),Kn(gt[0]));var p=gt.pop();if(!p)return 6;nr.push(p),kt[o.Rc]=p,p.Rc=o.Rc;var m={Sc:"run",Md:o.Ld,bd:o.bd,Rc:o.Rc};return p.postMessage(m,o.rd),0},Je=0,xe=(o,p,...m)=>{var f,$=16*m.length,k=le(),z=Li($),B=z>>>3;for(f of m)typeof f=="bigint"?((x(),ee)[B++>>>0]=1n,(x(),ee)[B++>>>0]=f):((x(),ee)[B++>>>0]=0n,(x(),J)[B++>>>0]=f);return o=Ws(o,0,$,z,p),oe(k),o};function vi(o){if(a)return xe(0,1,o);if(y=o,!(0<Je)){for(var p of nr)Oe(p);for(p of gt)Oe(p);gt=[],nr=[],kt={},A=!0}d(0,new ve(o))}function Gn(o){if(a)return xe(1,0,o);xi(o)}var xi=o=>{if(y=o,a)throw Gn(o),"unwind";vi(o)},gt=[],nr=[],Hn=[],kt={},Fn=o=>{var p=o.Rc;delete kt[p],gt.push(o),nr.splice(nr.indexOf(o),1),o.Rc=0,Vs(p)};function jn(){Hn.forEach(o=>o())}var Kn=o=>new Promise(p=>{o.onmessage=$=>{var k=$.data;if($=k.Sc,k.Zc&&k.Zc!=Lr()){var z=kt[k.Zc];z?z.postMessage(k,k.rd):I(`Internal error! Worker sent a message "${$}" to target pthread ${k.Zc}, but that thread no longer exists!`)}else $==="checkMailbox"?Br():$==="spawnThread"?zr(k):$==="cleanupThread"?Rr(()=>{Fn(kt[k.Nd])}):$==="loaded"?(o.loaded=!0,p(o)):k.target==="setimmediate"?o.postMessage(k):$==="uncaughtException"?o.onerror(k.error):$==="callHandler"?t[k.wd](...k.args):$&&I(`worker sent an unknown command ${$}`)},o.onerror=$=>{throw I(`worker sent an error! ${$.filename}:${$.lineno}: ${$.message}`),$};var m,f=[];for(m of[])t.propertyIsEnumerable(m)&&f.push(m);o.postMessage({Sc:"load",xd:f,Od:yt,Pd:_})});function Xn(){var o=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});gt.push(o)}var yt,fm=(o,p)=>{Je=0,o=Wi(o,p),0<Je?y=o:Pi(o)},Cr=[],Ar=0;function mm(o){var p=new Si(o>>>=0);return(x(),L)[p.Tc+12>>>0]==0&&(Zn(p,!0),Ar--),Yn(p,!1),Cr.push(p),Xs(o)}var jt=0,gm=()=>{de(0,0);var o=Cr.pop();js(o.cd),jt=0};function Zn(o,p){p=p?1:0,(x(),L)[o.Tc+12>>>0]=p}function Yn(o,p){p=p?1:0,(x(),L)[o.Tc+13>>>0]=p}class Si{constructor(p){this.cd=p,this.Tc=p-24}}var Ti=o=>{var p=jt;if(!p)return ur(0),0;var m=new Si(p);(x(),N)[m.Tc+16>>>2>>>0]=p;var f=(x(),N)[m.Tc+4>>>2>>>0];if(!f)return ur(0),p;for(var $ of o){if($===0||$===f)break;if(Ks($,f,m.Tc+16))return ur($),p}return ur(f),p};function ym(){return Ti([])}function _m(o){return Ti([o>>>0])}function bm(o,p,m,f){return Ti([o>>>0,p>>>0,m>>>0,f>>>0])}var wm=()=>{var o=Cr.pop();o||V("no exception to throw");var p=o.cd;throw(x(),L)[o.Tc+13>>>0]==0&&(Cr.push(o),Yn(o,!0),Zn(o,!1),Ar++),qi(p),jt=p};function $m(o,p,m){var f=new Si(o>>>=0);throw p>>>=0,m>>>=0,(x(),N)[f.Tc+16>>>2>>>0]=0,(x(),N)[f.Tc+4>>>2>>>0]=p,(x(),N)[f.Tc+8>>>2>>>0]=m,qi(o),Ar++,jt=o}var vm=()=>Ar;function Qn(o,p,m,f){return a?xe(2,1,o,p,m,f):Jn(o,p,m,f)}function Jn(o,p,m,f){if(o>>>=0,p>>>=0,m>>>=0,f>>>=0,!globalThis.SharedArrayBuffer)return 6;var $=[];return a&&$.length===0?Qn(o,p,m,f):(o={Ld:m,Rc:o,bd:f,rd:$},a?(o.Sc="spawnThread",postMessage(o,$),0):zr(o))}function xm(o){throw jt||=o>>>0,jt}var es=globalThis.TextDecoder&&new TextDecoder,ts=(o,p,m,f)=>{if(m=p+m,f)return m;for(;o[p]&&!(p>=m);)++p;return p},rs=(o,p=0,m,f)=>{if(16<(m=ts(o,p>>>=0,m,f))-p&&o.buffer&&es)return es.decode(o.buffer instanceof ArrayBuffer?o.subarray(p,m):o.slice(p,m));for(f="";p<m;){var $=o[p++];if(128&$){var k=63&o[p++];if((224&$)==192)f+=String.fromCharCode((31&$)<<6|k);else{var z=63&o[p++];65536>($=(240&$)==224?(15&$)<<12|k<<6|z:(7&$)<<18|k<<12|z<<6|63&o[p++])?f+=String.fromCharCode($):($-=65536,f+=String.fromCharCode(55296|$>>10,56320|1023&$))}}else f+=String.fromCharCode($)}return f},ke=(o,p,m)=>(o>>>=0)?rs((x(),Y),o,p,m):"";function is(o,p,m){return a?xe(3,1,o,p,m):0}function as(o,p){if(a)return xe(4,1,o,p)}function ns(o,p){if(a)return xe(5,1,o,p)}function ss(o,p,m){if(a)return xe(6,1,o,p,m)}function os(o,p,m){return a?xe(7,1,o,p,m):0}function us(o,p){if(a)return xe(8,1,o,p)}function ls(o,p,m){if(a)return xe(9,1,o,p,m)}function ds(o,p,m,f){if(a)return xe(10,1,o,p,m,f)}function ps(o,p,m,f){if(a)return xe(11,1,o,p,m,f)}function cs(o,p,m,f){if(a)return xe(12,1,o,p,m,f)}function hs(o){if(a)return xe(13,1,o)}function fs(o,p){if(a)return xe(14,1,o,p)}function ms(o,p,m){if(a)return xe(15,1,o,p,m)}var Sm=()=>V(""),et=o=>{o>>>=0;for(var p="";;){var m=(x(),Y)[o++>>>0];if(!m)return p;p+=String.fromCharCode(m)}},ki={},Ei={},Kt=class extends Error{constructor(o){super(o),this.name="BindingError"}};function ot(o,p,m={}){return(function(f,$,k={}){var z=$.name;if(!f)throw new Kt(`type "${z}" must have a positive integer typeid pointer`);if(Ei.hasOwnProperty(f)){if(k.yd)return;throw new Kt(`Cannot register type '${z}' twice`)}Ei[f]=$,ki.hasOwnProperty(f)&&($=ki[f],delete ki[f],$.forEach(B=>B()))})(o,p,m)}var gs=(o,p,m)=>{switch(p){case 1:return m?f=>(x(),L)[f>>>0]:f=>(x(),Y)[f>>>0];case 2:return m?f=>(x(),F)[f>>>1>>>0]:f=>(x(),K)[f>>>1>>>0];case 4:return m?f=>(x(),R)[f>>>2>>>0]:f=>(x(),N)[f>>>2>>>0];case 8:return m?f=>(x(),ee)[f>>>3>>>0]:f=>(x(),re)[f>>>3>>>0];default:throw new TypeError(`invalid integer width (${p}): ${o}`)}};function Tm(o,p,m,f,$){o>>>=0,m>>>=0,p=et(p>>>0);let k=z=>z;if(f=f===0n){let z=8*m;k=B=>BigInt.asUintN(z,B),$=k($)}ot(o,{name:p,Oc:k,Vc:(z,B)=>(typeof B=="number"&&(B=BigInt(B)),B),Uc:gs(p,m,!f),Wc:null})}function km(o,p,m,f){ot(o>>>=0,{name:p=et(p>>>0),Oc:function($){return!!$},Vc:function($,k){return k?m:f},Uc:function($){return this.Oc((x(),Y)[$>>>0])},Wc:null})}var ys=[],Et=[0,1,,1,null,1,!0,1,!1,1];function Ii(o){9<(o>>>=0)&&--Et[o+1]===0&&(Et[o]=void 0,ys.push(o))}var Le=o=>{if(!o)throw new Kt(`Cannot use deleted val. handle = ${o}`);return Et[o]},Ge=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=ys.pop()||Et.length;return Et[p]=o,Et[p+1]=1,p}};function zi(o){return this.Oc((x(),N)[o>>>2>>>0])}var Em={name:"emscripten::val",Oc:o=>{var p=Le(o);return Ii(o),p},Vc:(o,p)=>Ge(p),Uc:zi,Wc:null};function Im(o){return ot(o>>>0,Em)}var zm=(o,p)=>{switch(p){case 4:return function(m){return this.Oc((x(),G)[m>>>2>>>0])};case 8:return function(m){return this.Oc((x(),J)[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${o}`)}};function Cm(o,p,m){m>>>=0,ot(o>>>=0,{name:p=et(p>>>0),Oc:f=>f,Vc:(f,$)=>$,Uc:zm(p,m),Wc:null})}function Am(o,p,m,f,$){o>>>=0,m>>>=0,p=et(p>>>0);let k=B=>B;if(f===0){var z=32-8*m;k=B=>B<<z>>>z,$=k($)}ot(o,{name:p,Oc:k,Vc:(B,q)=>q,Uc:gs(p,m,f!==0),Wc:null})}function Om(o,p,m){function f(k){var z=(x(),N)[k>>>2>>>0];return k=(x(),N)[k+4>>>2>>>0],new $((x(),L).buffer,k,z)}var $=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];ot(o>>>=0,{name:m=et(m>>>0),Oc:f,Uc:f},{yd:!0})}var _t=(o,p,m)=>{var f=(x(),Y);if(p>>>=0,0<m){var $=p;m=p+m-1;for(var k=0;k<o.length;++k){var z=o.codePointAt(k);if(127>=z){if(p>=m)break;f[p++>>>0]=z}else if(2047>=z){if(p+1>=m)break;f[p++>>>0]=192|z>>6,f[p++>>>0]=128|63&z}else if(65535>=z){if(p+2>=m)break;f[p++>>>0]=224|z>>12,f[p++>>>0]=128|z>>6&63,f[p++>>>0]=128|63&z}else{if(p+3>=m)break;f[p++>>>0]=240|z>>18,f[p++>>>0]=128|z>>12&63,f[p++>>>0]=128|z>>6&63,f[p++>>>0]=128|63&z,k++}}f[p>>>0]=0,o=p-$}else o=0;return o},Or=o=>{for(var p=0,m=0;m<o.length;++m){var f=o.charCodeAt(m);127>=f?p++:2047>=f?p+=2:55296<=f&&57343>=f?(p+=4,++m):p+=3}return p};function Rm(o,p){ot(o>>>=0,{name:p=et(p>>>0),Oc(m){var f=(x(),N)[m>>>2>>>0];return f=ke(m+4,f,!0),rt(m),f},Vc(m,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var $=typeof f=="string";if(!($||ArrayBuffer.isView(f)&&f.BYTES_PER_ELEMENT==1))throw new Kt("Cannot pass non-string to std::string");var k=$?Or(f):f.length,z=or(4+k+1),B=z+4;return(x(),N)[z>>>2>>>0]=k,$?_t(f,B,k+1):(x(),Y).set(f,B>>>0),m!==null&&m.push(rt,z),z},Uc:zi,Wc(m){rt(m)}})}var _s=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Bm=(o,p,m)=>{if(o>>>=1,16<(p=ts((x(),K),o,p/2,m))-o&&_s)return _s.decode((x(),K).slice(o,p));for(m="";o<p;++o){var f=(x(),K)[o>>>0];m+=String.fromCharCode(f)}return m},Mm=(o,p,m)=>{if(m??=2147483647,2>m)return 0;var f=p;m=(m-=2)<2*o.length?m/2:o.length;for(var $=0;$<m;++$){var k=o.charCodeAt($);(x(),F)[p>>>1>>>0]=k,p+=2}return(x(),F)[p>>>1>>>0]=0,p-f},Nm=o=>2*o.length,Dm=(o,p,m)=>{var f="";o>>>=2;for(var $=0;!($>=p/4);$++){var k=(x(),N)[o+$>>>0];if(!k&&!m)break;f+=String.fromCodePoint(k)}return f},Um=(o,p,m)=>{if(p>>>=0,m??=2147483647,4>m)return 0;var f=p;m=f+m-4;for(var $=0;$<o.length;++$){var k=o.codePointAt($);if(65535<k&&$++,(x(),R)[p>>>2>>>0]=k,(p+=4)+4>m)break}return(x(),R)[p>>>2>>>0]=0,p-f},Pm=o=>{for(var p=0,m=0;m<o.length;++m)65535<o.codePointAt(m)&&m++,p+=4;return p};function Lm(o,p,m){if(o>>>=0,p>>>=0,m=et(m>>>=0),p===2)var f=Bm,$=Mm,k=Nm;else f=Dm,$=Um,k=Pm;ot(o,{name:m,Oc:z=>{var B=(x(),N)[z>>>2>>>0];return B=f(z+4,B*p,!0),rt(z),B},Vc:(z,B)=>{if(typeof B!="string")throw new Kt(`Cannot pass non-string to C++ string type ${m}`);var q=k(B),W=or(4+q+p);return(x(),N)[W>>>2>>>0]=q/p,$(B,W+4,q+p),z!==null&&z.push(rt,W),W},Uc:zi,Wc(z){rt(z)}})}function qm(o,p){ot(o>>>=0,{zd:!0,name:p=et(p>>>0),Oc:()=>{},Vc:()=>{}})}function Wm(o){Ui(o>>>0,!i,1,!r,131072,!1),jn()}var Rr=o=>{if(!A)try{if(o(),!(0<Je))try{a?Lr()&&Pi(y):xi(y)}catch(p){p instanceof ve||p=="unwind"||d(0,p)}}catch(p){p instanceof ve||p=="unwind"||d(0,p)}},Vm=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Ci(o){o>>>=0,Vm||(Atomics.waitAsync((x(),R),o>>>2,o).value.then(Br),o+=128,Atomics.store((x(),R),o>>>2,1))}var Br=()=>Rr(()=>{var o=Lr();o&&(Ci(o),Hs())});function Gm(o,p){(o>>>=0)==p>>>0?setTimeout(Br):a?postMessage({Zc:o,Sc:"checkMailbox"}):(o=kt[o])&&o.postMessage({Sc:"checkMailbox"})}var Ai=[];function Hm(o,p,m,f,$){for(p>>>=0,$>>>=0,Ai.length=0,m=$>>>3,f=$+f>>>3;m<f;){var k;k=(x(),ee)[m++>>>0]?(x(),ee)[m++>>>0]:(x(),J)[m++>>>0],Ai.push(k)}return(p?Vi[p]:Mg[o])(...Ai)}var Fm=()=>{Je=0};function jm(o){o>>>=0,a?postMessage({Sc:"cleanupThread",Nd:o}):Fn(kt[o])}function Km(o){}var Mr=o=>{try{o()}catch(p){V(p)}};function Xm(o){var p=(...m)=>{Nr.push(o);try{return o(...m)}finally{A||(Nr.pop(),tt&&bt===1&&Nr.length===0&&(bt=0,Je+=1,Mr(Bo),typeof Fibers<"u"&&Fibers.Zd()))}};return $s.set(o,p),p}var bt=0,tt=null,bs=0,Nr=[],Oi=new Map,ws=new Map,$s=new Map,Zm=0,Ri=null,Ym=[],vs=o=>(function(p){if(!A){if(bt===0){var m=!1,f=!1;p(($=0)=>{if(!A&&(bs=$,m=!0,f)){bt=2,Mr(()=>Mo(tt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),$=!1;try{var k=(function(){var q=(x(),R)[tt+8>>>2>>>0];return q=ws.get(q),q=$s.get(q),--Je,q()})()}catch(q){k=q,$=!0}var z=!1;if(!tt){var B=Ri;B&&(Ri=null,($?B.reject:B.resolve)(k),z=!0)}if($&&!z)throw k}}),f=!0,m||(bt=1,tt=(function(){var $=or(65548),k=$+12;if((x(),N)[$>>>2>>>0]=k,(x(),N)[$+4>>>2>>>0]=k+65536,k=Nr[0],!Oi.has(k)){var z=Zm++;Oi.set(k,z),ws.set(z,k)}return k=Oi.get(k),(x(),R)[$+8>>>2>>>0]=k,$})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),Mr(()=>Ro(tt)))}else bt===2?(bt=0,Mr(No),rt(tt),tt=null,Ym.forEach(Rr)):V(`invalid state: ${bt}`);return bs}})(p=>{o().then(p)});function Qm(o){return o>>>=0,vs(async()=>{var p=await Le(o);return Ge(p)})}var Bi=[],Jm=o=>{var p=Bi.length;return Bi.push(o),p},eg=(o,p)=>{for(var m=Array(o),f=0;f<o;++f){var $=f,k=(x(),N)[p+4*f>>>2>>>0],z=Ei[k];if(z===void 0)throw o=`parameter ${f}`,k=Ps(k),p=et(k),rt(k),new Kt(`${o} has unknown type ${p}`);m[$]=z}return m},tg=(o,p,m)=>{var f=[];return o=o(f,m),f.length&&((x(),N)[p>>>2>>>0]=Ge(f)),o},rg={},Dr=o=>{var p=rg[o];return p===void 0?et(o):p};function ig(o,p,m){var[f,...$]=eg(o,p>>>0);p=f.Vc.bind(f);var k=$.map(q=>q.Uc.bind(q));o--;var z={toValue:Le};switch(o=k.map((q,W)=>{var se=`argFromPtr${W}`;return z[se]=q,`${se}(args${W?"+"+8*W:""})`}),m){case 0:var B="toValue(handle)";break;case 2:B="new (toValue(handle))";break;case 3:B="";break;case 1:z.getStringOrSymbol=Dr,B="toValue(handle)[getStringOrSymbol(methodName)]"}return B+=`(${o})`,f.zd||(z.toReturnWire=p,z.emval_returnValue=tg,B=`return emval_returnValue(toReturnWire, destructorsRef, ${B})`),B=`return function (handle, methodName, destructorsRef, args) {
  ${B}
  }`,m=new Function(Object.keys(z),B)(...Object.values(z)),B=`methodCaller<(${$.map(q=>q.name)}) => ${f.name}>`,Jm(Object.defineProperty(m,"name",{value:B}))}function ag(o,p){return p>>>=0,(o=Le(o>>>0))==Le(p)}function ng(o){return(o>>>=0)?(o=Dr(o),Ge(globalThis[o])):Ge(globalThis)}function sg(o){return o=Dr(o>>>0),Ge(t[o])}function og(o,p){return p>>>=0,o=Le(o>>>0),p=Le(p),Ge(o[p])}function ug(o){9<(o>>>=0)&&(Et[o+1]+=1)}function xs(o,p,m,f,$){return Bi[o>>>0](p>>>0,m>>>0,f>>>0,$>>>0)}function lg(o,p,m,f,$){return xs(o>>>0,p>>>0,m>>>0,f>>>0,$>>>0)}function dg(){return Ge([])}function pg(o){o=Le(o>>>0);for(var p=Array(o.length),m=0;m<o.length;m++)p[m]=o[m];return Ge(p)}function cg(o){return Ge(Dr(o>>>0))}function hg(){return Ge({})}function fg(o){for(var p=Le(o>>>=0);p.length;){var m=p.pop();p.pop()(m)}Ii(o)}function mg(o,p,m){p>>>=0,m>>>=0,o=Le(o>>>0),p=Le(p),m=Le(m),o[p]=m}function gg(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),(x(),R)[p>>>2>>>0]=o.getUTCSeconds(),(x(),R)[p+4>>>2>>>0]=o.getUTCMinutes(),(x(),R)[p+8>>>2>>>0]=o.getUTCHours(),(x(),R)[p+12>>>2>>>0]=o.getUTCDate(),(x(),R)[p+16>>>2>>>0]=o.getUTCMonth(),(x(),R)[p+20>>>2>>>0]=o.getUTCFullYear()-1900,(x(),R)[p+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(x(),R)[p+28>>>2>>>0]=o}var Ss=o=>o%4==0&&(o%100!=0||o%400==0),Ts=[0,31,60,91,121,152,182,213,244,274,305,335],ks=[0,31,59,90,120,151,181,212,243,273,304,334];function yg(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),(x(),R)[p>>>2>>>0]=o.getSeconds(),(x(),R)[p+4>>>2>>>0]=o.getMinutes(),(x(),R)[p+8>>>2>>>0]=o.getHours(),(x(),R)[p+12>>>2>>>0]=o.getDate(),(x(),R)[p+16>>>2>>>0]=o.getMonth(),(x(),R)[p+20>>>2>>>0]=o.getFullYear()-1900,(x(),R)[p+24>>>2>>>0]=o.getDay();var m=(Ss(o.getFullYear())?Ts:ks)[o.getMonth()]+o.getDate()-1|0;(x(),R)[p+28>>>2>>>0]=m,(x(),R)[p+36>>>2>>>0]=-60*o.getTimezoneOffset(),m=new Date(o.getFullYear(),6,1).getTimezoneOffset();var f=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(m!=f&&o.getTimezoneOffset()==Math.min(f,m)),(x(),R)[p+32>>>2>>>0]=o}function _g(o){o>>>=0;var p=new Date((x(),R)[o+20>>>2>>>0]+1900,(x(),R)[o+16>>>2>>>0],(x(),R)[o+12>>>2>>>0],(x(),R)[o+8>>>2>>>0],(x(),R)[o+4>>>2>>>0],(x(),R)[o>>>2>>>0],0),m=(x(),R)[o+32>>>2>>>0],f=p.getTimezoneOffset(),$=new Date(p.getFullYear(),6,1).getTimezoneOffset(),k=new Date(p.getFullYear(),0,1).getTimezoneOffset(),z=Math.min(k,$);return 0>m?(x(),R)[o+32>>>2>>>0]=+($!=k&&z==f):0<m!=(z==f)&&($=Math.max(k,$),p.setTime(p.getTime()+6e4*((0<m?z:$)-f))),(x(),R)[o+24>>>2>>>0]=p.getDay(),m=(Ss(p.getFullYear())?Ts:ks)[p.getMonth()]+p.getDate()-1|0,(x(),R)[o+28>>>2>>>0]=m,(x(),R)[o>>>2>>>0]=p.getSeconds(),(x(),R)[o+4>>>2>>>0]=p.getMinutes(),(x(),R)[o+8>>>2>>>0]=p.getHours(),(x(),R)[o+12>>>2>>>0]=p.getDate(),(x(),R)[o+16>>>2>>>0]=p.getMonth(),(x(),R)[o+20>>>2>>>0]=p.getYear(),o=p.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Es(o,p,m,f,$,k,z){return a?xe(16,1,o,p,m,f,$,k,z):-52}function Is(o,p,m,f,$,k){if(a)return xe(17,1,o,p,m,f,$,k)}var sr={},bg=()=>performance.timeOrigin+performance.now();function zs(o,p){if(a)return xe(18,1,o,p);if(sr[o]&&(clearTimeout(sr[o].id),delete sr[o]),!p)return 0;var m=setTimeout(()=>{delete sr[o],Rr(()=>Gs(o,performance.timeOrigin+performance.now()))},p);return sr[o]={id:m,Yd:p},0}function wg(o,p,m,f){o>>>=0,p>>>=0,m>>>=0,f>>>=0;var $=new Date().getFullYear(),k=new Date($,0,1).getTimezoneOffset();$=new Date($,6,1).getTimezoneOffset();var z=Math.max(k,$);(x(),N)[o>>>2>>>0]=60*z,(x(),R)[p>>>2>>>0]=+(k!=$),o=(p=B=>{var q=Math.abs(B);return`UTC${0<=B?"-":"+"}${String(Math.floor(q/60)).padStart(2,"0")}${String(q%60).padStart(2,"0")}`})(k),p=p($),$<k?(_t(o,m,17),_t(p,f,17)):(_t(o,f,17),_t(p,m,17))}var $g=()=>Date.now();function vg(o,p,m){return m>>>=0,0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),o=Math.round(1e6*o),(x(),ee)[m>>>3>>>0]=BigInt(o),0):28}var Mi=[],Cs=(o,p)=>{Mi.length=0;for(var m;m=(x(),Y)[o++>>>0];){var f=m!=105;p+=(f&=m!=112)&&p%8?4:0,Mi.push(m==112?(x(),N)[p>>>2>>>0]:m==106?(x(),ee)[p>>>3>>>0]:m==105?(x(),R)[p>>>2>>>0]:(x(),J)[p>>>3>>>0]),p+=f?8:4}return Mi};function xg(o,p,m){return o>>>=0,p=Cs(p>>>0,m>>>0),Vi[o](...p)}function Sg(o,p,m){return o>>>=0,p=Cs(p>>>0,m>>>0),Vi[o](...p)}var Tg=()=>{};function kg(o,p){return I(ke(o>>>0,p>>>0))}var Eg=()=>{throw Je+=1,"unwind"};function Ig(){return 4294901760}var zg=()=>navigator.hardwareConcurrency,It={},Ur=o=>{var p;return(p=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(o))?+p[1]:(p=/:(\d+):\d+(?:\)|$)/.exec(o))?2147483648|+p[1]:0},As=o=>{for(var p of o)(o=Ur(p))&&(It[o]=p)};function Cg(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),As(o),It.gd=Ur(o[3]),It.Jd=o,It.gd}function Pr(o){if(!(o=It[o>>>0]))return 0;var p;if(p=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(o))o=p[1];else if(p=/^\s+at (.*) \(.*\)$/.exec(o))o=p[1];else{if(!(p=/^(.+?)@/.exec(o)))return 0;o=p[1]}rt(Pr.hd??0),p=Or(o)+1;var m=or(p);return m&&_t(o,m,p),Pr.hd=m,Pr.hd}function Ag(o){o>>>=0;var p=(x(),Y).length;if(o<=p||4294901760<o)return!1;for(var m=1;4>=m;m*=2){var f=p*(1+.2/m);f=Math.min(f,o+100663296);e:{f=(Math.min(4294901760,65536*Math.ceil(Math.max(o,f)/65536))-yt.buffer.byteLength+65535)/65536|0;try{yt.grow(f),Q();var $=1;break e}catch{}$=void 0}if($)return!0}return!1}function Og(o,p,m){if(o>>>=0,p>>>=0,It.gd==o)var f=It.Jd;else(f=Error().stack.toString().split(`
`))[0]=="Error"&&f.shift(),As(f);for(var $=3;f[$]&&Ur(f[$])!=o;)++$;for(o=0;o<m&&f[o+$];++o)(x(),R)[p+4*o>>>2>>>0]=Ur(f[o+$]);return o}var Ni,Di={},Os=()=>{if(!Ni){var o,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in Di)Di[o]===void 0?delete p[o]:p[o]=Di[o];var m=[];for(o in p)m.push(`${o}=${p[o]}`);Ni=m}return Ni};function Rs(o,p){if(a)return xe(19,1,o,p);o>>>=0,p>>>=0;var m,f=0,$=0;for(m of Os()){var k=p+f;(x(),N)[o+$>>>2>>>0]=k,f+=_t(m,k,1/0)+1,$+=4}return 0}function Bs(o,p){if(a)return xe(20,1,o,p);o>>>=0,p>>>=0;var m=Os();for(var f of((x(),N)[o>>>2>>>0]=m.length,o=0,m))o+=Or(f)+1;return(x(),N)[p>>>2>>>0]=o,0}function Ms(o){return a?xe(21,1,o):52}function Ns(o,p,m,f){return a?xe(22,1,o,p,m,f):52}function Ds(o,p,m,f){return a?xe(23,1,o,p,m,f):70}var Rg=[null,[],[]];function Us(o,p,m,f){if(a)return xe(24,1,o,p,m,f);p>>>=0,m>>>=0,f>>>=0;for(var $=0,k=0;k<m;k++){var z=(x(),N)[p>>>2>>>0],B=(x(),N)[p+4>>>2>>>0];p+=8;for(var q=0;q<B;q++){var W=o,se=(x(),Y)[z+q>>>0],ce=Rg[W];se===0||se===10?((W===1?T:I)(rs(ce)),ce.length=0):ce.push(se)}$+=B}return(x(),N)[f>>>2>>>0]=$,0}function Bg(o){return o>>>0}a||(function(){for(var o=t.numThreads-1;o--;)Xn();ge.push(async()=>{var p=(async function(){if(!a)return Promise.all(gt.map(Kn))})();$e++,await p,--$e==0&&Me&&(p=Me,Me=null,p())})})(),a||(yt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Q()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>le(),t.stackRestore=o=>oe(o),t.stackAlloc=o=>Li(o),t.setValue=function(o,p,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":(x(),L)[o>>>0]=p;break;case"i16":(x(),F)[o>>>1>>>0]=p;break;case"i32":(x(),R)[o>>>2>>>0]=p;break;case"i64":(x(),ee)[o>>>3>>>0]=BigInt(p);break;case"float":(x(),G)[o>>>2>>>0]=p;break;case"double":(x(),J)[o>>>3>>>0]=p;break;case"*":(x(),N)[o>>>2>>>0]=p;break;default:V(`invalid type for setValue: ${m}`)}},t.getValue=function(o,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return(x(),L)[o>>>0];case"i16":return(x(),F)[o>>>1>>>0];case"i32":return(x(),R)[o>>>2>>>0];case"i64":return(x(),ee)[o>>>3>>>0];case"float":return(x(),G)[o>>>2>>>0];case"double":return(x(),J)[o>>>3>>>0];case"*":return(x(),N)[o>>>2>>>0];default:V(`invalid type for getValue: ${p}`)}},t.UTF8ToString=ke,t.stringToUTF8=_t,t.lengthBytesUTF8=Or;var Ps,Ls,Lr,rt,or,Ui,qs,Ws,Vs,Pi,Gs,Hs,de,ur,Fs,oe,Li,le,js,qi,Ks,Xs,Zs,Wi,Ys,Qs,Js,eo,to,ro,io,ao,no,so,oo,uo,lo,po,co,ho,fo,mo,go,yo,_o,bo,wo,$o,vo,xo,So,To,ko,Eo,Io,zo,Co,Ao,Oo,Ro,Bo,Mo,No,ut,Mg=[vi,Gn,Qn,is,as,ns,ss,os,us,ls,ds,ps,cs,hs,fs,ms,Es,Is,zs,Rs,Bs,Ms,Ns,Ds,Us],Vi={1003524:(o,p,m,f,$)=>{if(t===void 0||!t.Xc)return 1;if((o=ke(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=t.Xc.get(o)))return 2;if(p=Number(p>>>0),m=Number(m>>>0),f=Number(f>>>0),p+m>o.byteLength)return 3;try{let k=o.subarray(p,p+m);switch($){case 0:(x(),Y).set(k,f>>>0);break;case 1:t.Qd?t.Qd(f,k):t.Id(f,k);break;default:return 4}return 0}catch{return 4}},1004348:(o,p,m)=>{t.td(o,(x(),Y).subarray(p>>>0,p+m>>>0))},1004412:()=>t.Sd(),1004454:o=>{t.sd(o)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:o=>t.Ad(o),1004609:o=>t.Ed(o),1004641:(o,p,m)=>{t.ed(Number(o),Number(p),Number(m),!0)},1004704:(o,p,m)=>{t.ed(Number(o),Number(p),Number(m))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:o=>{t.$b("Abs",o,void 0)},1004869:o=>{t.$b("Neg",o,void 0)},1004920:o=>{t.$b("Floor",o,void 0)},1004973:o=>{t.$b("Ceil",o,void 0)},1005025:o=>{t.$b("Reciprocal",o,void 0)},1005083:o=>{t.$b("Sqrt",o,void 0)},1005135:o=>{t.$b("Exp",o,void 0)},1005186:o=>{t.$b("Erf",o,void 0)},1005237:o=>{t.$b("Sigmoid",o,void 0)},1005292:(o,p,m)=>{t.$b("HardSigmoid",o,{alpha:p,beta:m})},1005371:o=>{t.$b("Log",o,void 0)},1005422:o=>{t.$b("Sin",o,void 0)},1005473:o=>{t.$b("Cos",o,void 0)},1005524:o=>{t.$b("Tan",o,void 0)},1005575:o=>{t.$b("Asin",o,void 0)},1005627:o=>{t.$b("Acos",o,void 0)},1005679:o=>{t.$b("Atan",o,void 0)},1005731:o=>{t.$b("Sinh",o,void 0)},1005783:o=>{t.$b("Cosh",o,void 0)},1005835:o=>{t.$b("Asinh",o,void 0)},1005888:o=>{t.$b("Acosh",o,void 0)},1005941:o=>{t.$b("Atanh",o,void 0)},1005994:o=>{t.$b("Tanh",o,void 0)},1006046:o=>{t.$b("Not",o,void 0)},1006097:(o,p,m)=>{t.$b("Clip",o,{min:p,max:m})},1006166:o=>{t.$b("Clip",o,void 0)},1006218:(o,p)=>{t.$b("Elu",o,{alpha:p})},1006276:o=>{t.$b("Gelu",o,void 0)},1006328:o=>{t.$b("Relu",o,void 0)},1006380:(o,p)=>{t.$b("LeakyRelu",o,{alpha:p})},1006444:(o,p)=>{t.$b("ThresholdedRelu",o,{alpha:p})},1006514:(o,p)=>{t.$b("Cast",o,{to:p})},1006572:o=>{t.$b("Add",o,void 0)},1006623:o=>{t.$b("Sub",o,void 0)},1006674:o=>{t.$b("Mul",o,void 0)},1006725:o=>{t.$b("Div",o,void 0)},1006776:o=>{t.$b("Pow",o,void 0)},1006827:o=>{t.$b("Equal",o,void 0)},1006880:o=>{t.$b("Greater",o,void 0)},1006935:o=>{t.$b("GreaterOrEqual",o,void 0)},1006997:o=>{t.$b("Less",o,void 0)},1007049:o=>{t.$b("LessOrEqual",o,void 0)},1007108:(o,p,m,f,$)=>{t.$b("ReduceMean",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),R).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1007283:(o,p,m,f,$)=>{t.$b("ReduceMax",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),R).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1007457:(o,p,m,f,$)=>{t.$b("ReduceMin",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),R).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1007631:(o,p,m,f,$)=>{t.$b("ReduceProd",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),R).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1007806:(o,p,m,f,$)=>{t.$b("ReduceSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),R).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1007980:(o,p,m,f,$)=>{t.$b("ReduceL1",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),R).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1008153:(o,p,m,f,$)=>{t.$b("ReduceL2",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),R).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1008326:(o,p,m,f,$)=>{t.$b("ReduceLogSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),R).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1008503:(o,p,m,f,$)=>{t.$b("ReduceSumSquare",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),R).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1008683:(o,p,m,f,$)=>{t.$b("ReduceLogSumExp",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),R).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1008863:o=>{t.$b("Where",o,void 0)},1008916:(o,p,m)=>{t.$b("Transpose",o,{perm:p?Array.from((x(),R).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},1009040:(o,p,m,f)=>{t.$b("DepthToSpace",o,{blocksize:p,mode:ke(m),format:f?"NHWC":"NCHW"})},1009173:(o,p,m,f)=>{t.$b("DepthToSpace",o,{blocksize:p,mode:ke(m),format:f?"NHWC":"NCHW"})},1009306:(o,p,m,f,$,k,z,B,q,W,se,ce,ye,we,wt)=>{t.$b("ConvTranspose",o,{format:q?"NHWC":"NCHW",autoPad:p,dilations:[m],group:f,kernelShape:[$],pads:[k,z],strides:[B],wIsConst:()=>!!(x(),L)[W>>>0],outputPadding:se?Array.from((x(),R).subarray(Number(se)>>>0,Number(ce)>>>0)):[],outputShape:ye?Array.from((x(),R).subarray(Number(ye)>>>0,Number(we)>>>0)):[],activation:ke(wt)})},1009739:(o,p,m,f,$,k,z,B,q,W,se,ce,ye,we)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:p,dilations:Array.from((x(),R).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:f,kernelShape:Array.from((x(),R).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),pads:Array.from((x(),R).subarray(Number(k)>>>0,(Number(k)>>>0)+4>>>0)),strides:Array.from((x(),R).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(x(),L)[q>>>0],outputPadding:W?Array.from((x(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],outputShape:ce?Array.from((x(),R).subarray(Number(ce)>>>0,Number(ye)>>>0)):[],activation:ke(we)})},1010400:(o,p,m,f,$,k,z,B,q,W,se,ce,ye,we,wt)=>{t.$b("ConvTranspose",o,{format:q?"NHWC":"NCHW",autoPad:p,dilations:[m],group:f,kernelShape:[$],pads:[k,z],strides:[B],wIsConst:()=>!!(x(),L)[W>>>0],outputPadding:se?Array.from((x(),R).subarray(Number(se)>>>0,Number(ce)>>>0)):[],outputShape:ye?Array.from((x(),R).subarray(Number(ye)>>>0,Number(we)>>>0)):[],activation:ke(wt)})},1010833:(o,p,m,f,$,k,z,B,q,W,se,ce,ye,we)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:p,dilations:Array.from((x(),R).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:f,kernelShape:Array.from((x(),R).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),pads:Array.from((x(),R).subarray(Number(k)>>>0,(Number(k)>>>0)+4>>>0)),strides:Array.from((x(),R).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(x(),L)[q>>>0],outputPadding:W?Array.from((x(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],outputShape:ce?Array.from((x(),R).subarray(Number(ce)>>>0,Number(ye)>>>0)):[],activation:ke(we)})},1011494:(o,p)=>{t.$b("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},1011585:(o,p,m,f,$,k,z,B,q,W,se,ce,ye,we)=>{t.$b("AveragePool",o,{format:we?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:$,dilations:k?Array.from((x(),R).subarray(Number(k)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from((x(),R).subarray(Number(B)>>>0,Number(q)>>>0)):[],pads:W?Array.from((x(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],strides:ce?Array.from((x(),R).subarray(Number(ce)>>>0,Number(ye)>>>0)):[]})},1012064:(o,p)=>{t.$b("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},1012155:(o,p,m,f,$,k,z,B,q,W,se,ce,ye,we)=>{t.$b("AveragePool",o,{format:we?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:$,dilations:k?Array.from((x(),R).subarray(Number(k)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from((x(),R).subarray(Number(B)>>>0,Number(q)>>>0)):[],pads:W?Array.from((x(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],strides:ce?Array.from((x(),R).subarray(Number(ce)>>>0,Number(ye)>>>0)):[]})},1012634:(o,p)=>{t.$b("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},1012721:(o,p,m,f,$,k,z,B,q,W,se,ce,ye,we)=>{t.$b("MaxPool",o,{format:we?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:$,dilations:k?Array.from((x(),R).subarray(Number(k)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from((x(),R).subarray(Number(B)>>>0,Number(q)>>>0)):[],pads:W?Array.from((x(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],strides:ce?Array.from((x(),R).subarray(Number(ce)>>>0,Number(ye)>>>0)):[]})},1013196:(o,p)=>{t.$b("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},1013283:(o,p,m,f,$,k,z,B,q,W,se,ce,ye,we)=>{t.$b("MaxPool",o,{format:we?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:$,dilations:k?Array.from((x(),R).subarray(Number(k)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from((x(),R).subarray(Number(B)>>>0,Number(q)>>>0)):[],pads:W?Array.from((x(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],strides:ce?Array.from((x(),R).subarray(Number(ce)>>>0,Number(ye)>>>0)):[]})},1013758:(o,p,m,f,$)=>{t.$b("Gemm",o,{alpha:p,beta:m,transA:f,transB:$})},1013862:o=>{t.$b("MatMul",o,void 0)},1013916:(o,p,m,f)=>{t.$b("ArgMax",o,{keepDims:!!p,selectLastIndex:!!m,axis:f})},1014024:(o,p,m,f)=>{t.$b("ArgMin",o,{keepDims:!!p,selectLastIndex:!!m,axis:f})},1014132:(o,p)=>{t.$b("Softmax",o,{axis:p})},1014195:(o,p)=>{t.$b("Concat",o,{axis:p})},1014255:(o,p,m,f,$)=>{t.$b("Split",o,{axis:p,numOutputs:m,splitSizes:f?Array.from((x(),R).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1014411:o=>{t.$b("Expand",o,void 0)},1014465:(o,p)=>{t.$b("Gather",o,{axis:Number(p)})},1014536:(o,p)=>{t.$b("GatherElements",o,{axis:Number(p)})},1014615:(o,p)=>{t.$b("GatherND",o,{batch_dims:Number(p)})},1014694:(o,p,m,f,$,k,z,B,q,W,se)=>{t.$b("Resize",o,{antialias:p,axes:m?Array.from((x(),R).subarray(Number(m)>>>0,Number(f)>>>0)):[],coordinateTransformMode:ke($),cubicCoeffA:k,excludeOutside:z,extrapolationValue:B,keepAspectRatioPolicy:ke(q),mode:ke(W),nearestMode:ke(se)})},1015056:(o,p,m,f,$,k,z)=>{t.$b("Slice",o,{starts:p?Array.from((x(),R).subarray(Number(p)>>>0,Number(m)>>>0)):[],ends:f?Array.from((x(),R).subarray(Number(f)>>>0,Number($)>>>0)):[],axes:k?Array.from((x(),R).subarray(Number(k)>>>0,Number(z)>>>0)):[]})},1015320:o=>{t.$b("Tile",o,void 0)},1015372:(o,p,m)=>{t.$b("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},1015486:(o,p,m)=>{t.$b("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},1015600:o=>{t.$b("Range",o,void 0)},1015653:(o,p)=>{t.$b("Einsum",o,{equation:ke(p)})},1015734:(o,p,m,f,$)=>{t.$b("Pad",o,{mode:p,value:m,pads:f?Array.from((x(),R).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1015877:(o,p,m,f,$,k)=>{t.$b("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!$,trainingMode:!!f,format:k?"NHWC":"NCHW"})},1016046:(o,p,m,f,$,k)=>{t.$b("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!$,trainingMode:!!f,format:k?"NHWC":"NCHW"})},1016215:(o,p,m)=>{t.$b("CumSum",o,{exclusive:Number(p),reverse:Number(m)})},1016312:(o,p,m)=>{t.$b("DequantizeLinear",o,{axis:p,blockSize:m})},1016402:(o,p,m,f,$)=>{t.$b("GridSample",o,{align_corners:p,mode:ke(m),padding_mode:ke(f),format:$?"NHWC":"NCHW"})},1016572:(o,p,m,f,$)=>{t.$b("GridSample",o,{align_corners:p,mode:ke(m),padding_mode:ke(f),format:$?"NHWC":"NCHW"})},1016742:(o,p)=>{t.$b("ScatterND",o,{reduction:ke(p)})},1016827:(o,p,m,f,$,k,z,B,q)=>{t.$b("Attention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:f,scale:$,doRotary:k,qkvHiddenSizes:z?Array.from((x(),R).subarray(Number(B)>>>0,Number(B)+z>>>0)):[],pastPresentShareBuffer:!!q})},1017099:o=>{t.$b("BiasAdd",o,void 0)},1017154:o=>{t.$b("BiasSplitGelu",o,void 0)},1017215:o=>{t.$b("FastGelu",o,void 0)},1017271:(o,p,m,f,$,k,z,B,q,W,se,ce,ye,we,wt,Gi)=>{t.$b("Conv",o,{format:ce?"NHWC":"NCHW",auto_pad:p,dilations:m?Array.from((x(),R).subarray(Number(m)>>>0,Number(f)>>>0)):[],group:$,kernel_shape:k?Array.from((x(),R).subarray(Number(k)>>>0,Number(z)>>>0)):[],pads:B?Array.from((x(),R).subarray(Number(B)>>>0,Number(q)>>>0)):[],strides:W?Array.from((x(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],w_is_const:()=>!!(x(),L)[Number(ye)>>>0],activation:ke(we),activation_params:wt?Array.from((x(),G).subarray(Number(wt)>>>0,Number(Gi)>>>0)):[]})},1017855:o=>{t.$b("Gelu",o,void 0)},1017907:(o,p,m,f,$,k,z,B,q)=>{t.$b("GroupQueryAttention",o,{numHeads:p,kvNumHeads:m,scale:f,softcap:$,doRotary:k,rotaryInterleaved:z,smoothSoftmax:B,localWindowSize:q})},1018124:(o,p,m,f)=>{t.$b("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!f})},1018235:(o,p,m,f)=>{t.$b("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!f})},1018346:(o,p,m,f,$,k)=>{t.$b("MatMulNBits",o,{k:p,n:m,accuracyLevel:f,bits:$,blockSize:k})},1018473:(o,p,m,f,$,k)=>{t.$b("MultiHeadAttention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:f,scale:$,doRotary:k})},1018632:(o,p)=>{t.$b("QuickGelu",o,{alpha:p})},1018696:(o,p,m,f,$)=>{t.$b("RotaryEmbedding",o,{interleaved:!!p,numHeads:m,rotaryEmbeddingDim:f,scale:$})},1018835:(o,p,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},1018937:(o,p,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},1019039:(o,p,m,f)=>{t.$b("GatherBlockQuantized",o,{gatherAxis:p,quantizeAxis:m,blockSize:f})},1019160:o=>{t.Fd(o)},1019194:(o,p)=>t.Hd(Number(o),Number(p),t.Yc.Kd,t.Yc.errors)};function Ng(o,p,m){return vs(async()=>{await t.Dd(Number(o),Number(p),Number(m))})}function Dg(){return typeof wasmOffsetConverter<"u"}function Ug(o,p,m,f){var $=le();try{return ao(o,p,m,f)}catch(k){if(oe($),k!==k+0)throw k;de(1,0)}}function Pg(o,p,m){var f=le();try{return eo(o,p,m)}catch($){if(oe(f),$!==$+0)throw $;de(1,0)}}function Lg(o){var p=le();try{Ys(o)}catch(m){if(oe(p),m!==m+0)throw m;de(1,0)}}function qg(o,p){var m=le();try{return Wi(o,p)}catch(f){if(oe(m),f!==f+0)throw f;de(1,0)}}function Wg(o,p,m){var f=le();try{Zs(o,p,m)}catch($){if(oe(f),$!==$+0)throw $;de(1,0)}}function Vg(o,p){var m=le();try{no(o,p)}catch(f){if(oe(m),f!==f+0)throw f;de(1,0)}}function Gg(o,p,m,f,$,k,z){var B=le();try{return ro(o,p,m,f,$,k,z)}catch(q){if(oe(B),q!==q+0)throw q;de(1,0)}}function Hg(o,p,m,f,$,k){var z=le();try{Qs(o,p,m,f,$,k)}catch(B){if(oe(z),B!==B+0)throw B;de(1,0)}}function Fg(o,p,m,f){var $=le();try{io(o,p,m,f)}catch(k){if(oe($),k!==k+0)throw k;de(1,0)}}function jg(o,p,m,f,$){var k=le();try{Js(o,p,m,f,$)}catch(z){if(oe(k),z!==z+0)throw z;de(1,0)}}function Kg(o,p,m,f,$,k,z){var B=le();try{oo(o,p,m,f,$,k,z)}catch(q){if(oe(B),q!==q+0)throw q;de(1,0)}}function Xg(o,p,m,f,$,k,z){var B=le();try{uo(o,p,m,f,$,k,z)}catch(q){if(oe(B),q!==q+0)throw q;de(1,0)}}function Zg(o,p,m,f,$,k,z,B){var q=le();try{ho(o,p,m,f,$,k,z,B)}catch(W){if(oe(q),W!==W+0)throw W;de(1,0)}}function Yg(o,p,m,f,$){var k=le();try{return so(o,p,m,f,$)}catch(z){if(oe(k),z!==z+0)throw z;de(1,0)}}function Qg(o,p,m){var f=le();try{return fo(o,p,m)}catch($){if(oe(f),$!==$+0)throw $;de(1,0)}}function Jg(o,p,m,f,$,k,z,B){var q=le();try{mo(o,p,m,f,$,k,z,B)}catch(W){if(oe(q),W!==W+0)throw W;de(1,0)}}function e0(o,p,m,f,$,k,z,B,q,W,se,ce){var ye=le();try{lo(o,p,m,f,$,k,z,B,q,W,se,ce)}catch(we){if(oe(ye),we!==we+0)throw we;de(1,0)}}function t0(o,p,m,f,$,k){var z=le();try{return po(o,p,m,f,$,k)}catch(B){if(oe(z),B!==B+0)throw B;de(1,0)}}function r0(o,p,m){var f=le();try{return go(o,p,m)}catch($){if(oe(f),$!==$+0)throw $;return de(1,0),0n}}function i0(o,p,m,f,$,k,z,B,q){var W=le();try{to(o,p,m,f,$,k,z,B,q)}catch(se){if(oe(W),se!==se+0)throw se;de(1,0)}}function a0(o){var p=le();try{return yo(o)}catch(m){if(oe(p),m!==m+0)throw m;de(1,0)}}function n0(o,p){var m=le();try{return Oo(o,p)}catch(f){if(oe(m),f!==f+0)throw f;return de(1,0),0n}}function s0(o){var p=le();try{return _o(o)}catch(m){if(oe(p),m!==m+0)throw m;return de(1,0),0n}}function o0(o,p,m,f){var $=le();try{return So(o,p,m,f)}catch(k){if(oe($),k!==k+0)throw k;de(1,0)}}function u0(o,p,m,f,$){var k=le();try{return To(o,p,m,f,$)}catch(z){if(oe(k),z!==z+0)throw z;de(1,0)}}function l0(o,p,m,f,$,k){var z=le();try{return ko(o,p,m,f,$,k)}catch(B){if(oe(z),B!==B+0)throw B;de(1,0)}}function d0(o,p,m,f,$,k){var z=le();try{return Eo(o,p,m,f,$,k)}catch(B){if(oe(z),B!==B+0)throw B;de(1,0)}}function p0(o,p,m,f,$,k,z,B){var q=le();try{return co(o,p,m,f,$,k,z,B)}catch(W){if(oe(q),W!==W+0)throw W;de(1,0)}}function c0(o,p,m,f,$){var k=le();try{return Io(o,p,m,f,$)}catch(z){if(oe(k),z!==z+0)throw z;return de(1,0),0n}}function h0(o,p,m,f){var $=le();try{return zo(o,p,m,f)}catch(k){if(oe($),k!==k+0)throw k;de(1,0)}}function f0(o,p,m,f){var $=le();try{return Co(o,p,m,f)}catch(k){if(oe($),k!==k+0)throw k;de(1,0)}}function m0(o,p,m,f,$,k,z,B,q,W,se,ce){var ye=le();try{return Ao(o,p,m,f,$,k,z,B,q,W,se,ce)}catch(we){if(oe(ye),we!==we+0)throw we;de(1,0)}}function g0(o,p,m,f,$,k,z,B,q,W,se){var ce=le();try{vo(o,p,m,f,$,k,z,B,q,W,se)}catch(ye){if(oe(ce),ye!==ye+0)throw ye;de(1,0)}}function y0(o,p,m,f,$,k,z,B,q,W,se,ce,ye,we,wt,Gi){var $0=le();try{xo(o,p,m,f,$,k,z,B,q,W,se,ce,ye,we,wt,Gi)}catch(Hi){if(oe($0),Hi!==Hi+0)throw Hi;de(1,0)}}function _0(o,p,m){var f=le();try{return bo(o,p,m)}catch($){if(oe(f),$!==$+0)throw $;de(1,0)}}function b0(o,p,m){var f=le();try{return wo(o,p,m)}catch($){if(oe(f),$!==$+0)throw $;de(1,0)}}function w0(o,p,m,f){var $=le();try{$o(o,p,m,f)}catch(k){if(oe($),k!==k+0)throw k;de(1,0)}}function qr(){if(0<$e)Me=qr;else if(a)w?.(t),Z();else{for(var o=ge;0<o.length;)o.shift()(t);0<$e?Me=qr:(t.calledRun=!0,A||(Z(),w?.(t)))}}return a||(ut=await Ae(),qr()),t.PTR_SIZE=4,U?t:new Promise((o,p)=>{w=o,S=p})}var Fp,Po,W0=P(()=>{Fp=Uo,Po=globalThis.self?.name?.startsWith("em-pthread"),Po&&Uo()}),Yi,Ga,Lo,De,jp,Vr,qo,Wo,Qi,Vo,Ji,Kp,ea,Xp,gn=P(()=>{mn(),Yi=typeof location>"u"?void 0:location.origin,Ga=import.meta.url>"file:"&&import.meta.url<"file;",Lo=()=>{{if(Ga){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Yi).href}return import.meta.url}},De=Lo(),jp=()=>{if(De&&!De.startsWith("blob:"))return De.substring(0,De.lastIndexOf("/")+1)},Vr=(e,t)=>{try{let r=t??De;return(r?new URL(e,r):new URL(e)).origin===Yi}catch{return!1}},qo=(e,t)=>{let r=t??De;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Wo=(e,t)=>`${t??"./"}${e}`,Qi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Vo=async e=>(await import(e)).default,Ji=(q0(),Tr(Vp)).default,Kp=async()=>{if(!De)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Vr(De))return[void 0,Ji()];let e=await Qi(De);return[e,Ji(e)]},ea=(W0(),Tr(Hp)).default,Xp=async(e,t,r,i)=>{let a=ea&&!(e||t);if(a)if(De)a=Vr(De)||i&&!r;else if(i&&!r)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,ea];{let n="ort-wasm-simd-threaded.jsep.mjs",s=e??qo(n,t),u=r&&s&&!Vr(s,t),l=u?await Qi(s):s??Wo(n,t);return[u?l:void 0,await Vo(l)]}}}),ta,Gr,dr,ra,Go,Ho,Fo,yn,be,Ht=P(()=>{gn(),Gr=!1,dr=!1,ra=!1,Go=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Ho=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Fo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},yn=async e=>{if(Gr)return Promise.resolve();if(dr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(ra)throw new Error("previous call to 'initializeWebAssembly()' failed.");dr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Fo())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Ho())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Go();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,n=typeof a=="string"?a:void 0,s=a?.mjs,u=s?.href??s,l=a?.wasm,d=l?.href??l,c=e.wasmBinary,[h,g]=await Xp(u,n,r>1,!!c||!!d),_=!1,y=[];if(t>0&&y.push(new Promise(w=>{setTimeout(()=>{_=!0,w()},t)})),y.push(new Promise((w,S)=>{let v={numThreads:r};if(c)v.wasmBinary=c,v.locateFile=b=>b;else if(d||n)v.locateFile=b=>d??n+b;else if(u&&u.indexOf("blob:")!==0)v.locateFile=b=>new URL(b,u).href;else if(h){let b=jp();b&&(v.locateFile=E=>b+E)}g(v).then(b=>{dr=!1,Gr=!0,ta=b,w(),h&&URL.revokeObjectURL(h)},b=>{dr=!1,ra=!0,S(b)})})),await Promise.race(y),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},be=()=>{if(Gr&&ta)return ta;throw new Error("WebAssembly is not initialized yet.")}}),Ze,oi,me,_n=P(()=>{Ht(),Ze=(e,t)=>{let r=be(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},oi=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,n])=>{let s=t?t+a:a;if(typeof n=="object")oi(n,s+".",r,i);else if(typeof n=="string"||typeof n=="number")i(s,n.toString());else if(typeof n=="boolean")i(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},me=e=>{let t=be(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let n=Number(t.getValue(a,i===4?"i32":"i64")),s=t.getValue(a+i,"*"),u=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),Zp,V0=P(()=>{Ht(),_n(),Zp=e=>{let t=be(),r=0,i=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let n=0;return e?.tag!==void 0&&(n=Ze(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,n),r===0&&me("Can't create run options."),e?.extra!==void 0&&oi(e.extra,"",new WeakSet,(s,u)=>{let l=Ze(s,i),d=Ze(u,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&me(`Can't set a run config entry: ${s} - ${u}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),n}}}),jo,Ko,Xo,zt,Zo,Yp,G0=P(()=>{Ht(),_n(),jo=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Ko=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Xo=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},zt=(e,t,r,i)=>{let a=Ze(t,i),n=Ze(r,i);be()._OrtAddSessionConfigEntry(e,a,n)!==0&&me(`Can't set a session config entry: ${t} - ${r}.`)},Zo=async(e,t,r)=>{let i=t.executionProviders;for(let a of i){let n=typeof a=="string"?a:a.name,s=[];switch(n){case"webnn":if(n="WEBNN",zt(e,"session.disable_quant_qdq","1",r),zt(e,"session.disable_qdq_constant_folding","1",r),typeof a!="string"){let h=a?.deviceType;h&&zt(e,"deviceType",h,r)}break;case"webgpu":if(n="JS",typeof a!="string"){let h=a;if(h?.preferredLayout){if(h.preferredLayout!=="NCHW"&&h.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${h.preferredLayout}`);zt(e,"preferredLayout",h.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let u=Ze(n,r),l=s.length,d=0,c=0;if(l>0){d=be()._malloc(l*be().PTR_SIZE),r.push(d),c=be()._malloc(l*be().PTR_SIZE),r.push(c);for(let h=0;h<l;h++)be().setValue(d+h*be().PTR_SIZE,s[h][0],"*"),be().setValue(c+h*be().PTR_SIZE,s[h][1],"*")}await be()._OrtAppendExecutionProvider(e,u,d,c,l)!==0&&me(`Can't append execution provider: ${n}.`)}},Yp=async e=>{let t=be(),r=0,i=[],a=e||{};Xo(a);try{let n=jo(a.graphOptimizationLevel??"all"),s=Ko(a.executionMode??"sequential"),u=typeof a.logId=="string"?Ze(a.logId,i):0,l=a.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=a.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof a.optimizedModelFilePath=="string"?Ze(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(n,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,u,l,d,c),r===0&&me("Can't create session options."),a.executionProviders&&await Zo(r,a,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);zt(r,"enableGraphCapture",a.enableGraphCapture.toString(),i)}if(a.freeDimensionOverrides)for(let[h,g]of Object.entries(a.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let _=Ze(h,i);t._OrtAddFreeDimensionOverride(r,_,g)!==0&&me(`Can't set a free dimension override: ${h} - ${g}.`)}return a.extra!==void 0&&oi(a.extra,"",new WeakSet,(h,g)=>{zt(r,h,g,i)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&me("Can't release session options."),i.forEach(s=>t._free(s)),n}}}),Mt,pt,Nt,yi,ui,bn,wn,Ha,te=P(()=>{Mt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},pt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Nt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,n)=>a*n,1);return r>0?Math.ceil(i*r):void 0},yi=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},ui=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},bn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",wn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ha=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),$n,Qp=P(()=>{mn(),$n=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let l=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let s=0;for(;;){let{done:u,value:l}=await a.read();if(u)break;let d=l.byteLength;new Uint8Array(n,s,d).set(l),s+=d}return new Uint8Array(n,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Yo,Qo,Jo,eu,vn,tu,pe,mt=P(()=>{te(),Yo=["V","I","W","E","F"],Qo=(e,t)=>{console.log(`[${Yo[e]},${new Date().toISOString()}]${t}`)},vn=(e,t)=>{Jo=e,eu=t},tu=(e,t)=>{let r=ui(e),i=ui(Jo);r>=i&&Qo(r,typeof t=="function"?t():t)},pe=(...e)=>{eu&&tu(...e)}}),ru,er,O,li,Jp,ec,tc,ie=P(()=>{ru=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},er=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(i<2||a<2)return;let u=ru.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(u===void 0)return;[s[n-2],s[n-1]]=u}for(let u=r?3:1;u<=n;u++){let l=i-u<0?1:e[i-u],d=a-u<0?1:t[a-u];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)s[n-u]=Math.max(l,d);else{if(c>1)return;s[n-u]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},O=class ri{static size(t){return ri.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),n=i-1;for(;n>=0;){if(t[n]%r===0){a[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return ri.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return ri.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[n])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,n)=>a+r[n]+r[n+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},li=class wr{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<a.length){if(a[u]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let u=0;u<i.length;u++)if(u<n.length){if(n[u]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let u=0;u<i.length*2;u++)if(u<s.length){if(s[u]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[u]>=i[u]||s[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,n,s,u){if(u){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)wr.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],a[l],n,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,i,a,n,s,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return wr.computeShapeHelper(t,r,l,i,a,n,s,u),l}static computeConvOutputShape(t,r,i,a,n,s,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return wr.computeShapeHelper(!1,t,l,i,a,n,s,u),l}static computeShapeHelper(t,r,i,a,n,s,u,l){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(wr.adjustPadAndReturnShape(r[d+2],a[d],n[d],s[d],u,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,a,n,s,u,l){let d=i*(a-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return n[s]=0,n[u]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+a-t;return n[s]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),n[u]=c-n[s],Math.floor((t+c-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[s]+n[u]-d)/r+1)}},Jp=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,u;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let l=-1;if(i?(u=r[0],l=1):(u=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(n<=0||u<=0||s<=0)throw new Error("invalid shape specified");if(a&&!er.isValidBroadcast(a,[n,u]))throw new Error("gemm: invalid bias shape for broadcast");return[n,u,s]}},ec=-34028234663852886e22,tc=34028234663852886e22}),xn,rc=P(()=>{te(),xn=(e,t)=>new(yi(t))(e)}),ia,Fa,aa,iu,na,au,sa,oa,ua,nu,ic,H0=P(()=>{te(),mt(),ia=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Fa=(e,t)=>{if(t==="int32")return e;let r=ia.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let a=e.byteLength/i,n=new(yi(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let s=new Int32Array(a);for(let u=0;u<a;u++){let l=n[u];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[u]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&n.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(n,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},aa=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(i.some(n=>n<-128||n>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(i,Number);return new Uint8Array(a.buffer)}case"uint8":{if(i.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(i,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},iu=1,na=()=>iu++,au=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),sa=(e,t)=>{let r=ia.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},oa=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:a,shape:n,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=a,this.tensorShape=n,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return sa(this.dataType,this.tensorShape)}destroy(){pe("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=aa(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}setIsDataConverted(e){this.isDataConverted=e}},ua=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let a=this.tensorManager.getMLContext(e),n=this.tensorManager.getMLOpSupportLimits(e),s;if(!n?.input.dataTypes.includes(t)){if(s=au.get(t),!s||n?.input.dataTypes.includes(s))throw new Error(`WebNN backend does not support data type: ${t}`);pe("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==sa(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let u=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,u,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Fa(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else pe("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?aa(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},nu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=na();return this.tensorTrackersById.set(e,new ua(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,a){pe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");return n.ensureTensor(e,r,i,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){pe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=this.getMLContext(e),n=na(),s=new oa({sessionId:e,context:a,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(n,new ua(this,s)),this.externalTensors.add(s),n}async getCachedTensor(e,t,r,i,a,n,s){let u=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(u,t,r)){pe("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let h=this.freeTensors.splice(d,1)[0];return h.sessionId=e,h}pe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:a,readable:n});return new oa({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},ic=(...e)=>new nu(...e)}),pr,su,ac,F0=P(()=>{te(),Ht(),rc(),H0(),mt(),pr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),su=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,n)=>a===i[n]&&e[a]===t[a])},ac=class{constructor(e){this.tensorManager=ic(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,vn(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){pe("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){pe("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)pe("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>su(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){pe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,a){let n=pr.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,n,i,a)}async createTemporaryTensor(e,t,r){pe("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=pr.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,i,r,!1);let n=this.temporarySessionTensorIds.get(e);return n?n.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!be().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");pe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return xn(r,t)}}registerMLTensor(e,t,r,i){let a=pr.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.registerTensor(e,t,a,i);return pe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${n}}`),n}registerMLConstant(e,t,r,i,a,n,s=!1){if(!n)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let l=n.get(u);if(!l)throw new Error(`File with name ${u} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,c;switch(a.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(s){let h=Fa(new Uint8Array(d),"int64");c=new Int32Array(h.buffer),a.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return pe("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(a,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=pr.get(Mt(t)),a=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!a?.input.dataTypes.includes(i):!!a?.output.dataTypes.includes(i)}flush(){}}}),Sn=P(()=>{}),la,Hr,Fr,ou,uu,da,ja,lu,nc,j0=P(()=>{mt(),Sn(),la=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Hr=[],Fr=e=>Math.ceil(Number(e)/16)*16,ou=e=>{for(let t=0;t<Hr.length;t++){let r=Hr[t];if(e<=r)return r}return Math.ceil(e/16)*16},uu=1,da=()=>uu++,ja=async(e,t,r,i)=>{let a=Fr(r),n=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,a),e.flush(),await n.mapAsync(GPUMapMode.READ);let u=n.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{n.destroy()}},lu=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of la)Hr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,n=Fr(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=u.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,a)),u.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(u,0,s.gpuData.buffer,0,n),this.backend.device.queue.submit([d.finish()]),u.destroy(),pe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=Fr(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return pe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=da();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),pe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),pe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=ou(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||n){let u=(a?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:da(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),pe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return pe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await ja(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=la.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(pe("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},nc=(...e)=>new lu(...e)}),du,fe,Te=P(()=>{du=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},fe=e=>new du(e)}),tr,jr,Ie,Re,X,Se,Ka,Qt,St,j,cr,M,H,sc,Tn,pu,oc,ae=P(()=>{te(),ie(),tr=64,jr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ie=(e,t=1)=>{let r=jr(e,t);return typeof r=="string"?r:r[0]},Re=(e,t=1)=>{let r=jr(e,t);return typeof r=="string"?r:r[1]},X=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:O.computeStrides(r)})}),t},Se=e=>e%4===0?4:e%2===0?2:1,Ka=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Qt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,St=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,j=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,cr=(e,t,r,i,a)=>{let n=typeof r=="number",s=n?r:r.length,u=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=jr(t,a),c=typeof d=="string"?d:d[1],h=typeof d=="string"?d:d[0],g={indices:l,value:c,storage:h,tensor:t},_=U=>typeof U=="string"?U:`${U}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=n?"uniforms.":"",S=`${w}${e}_shape`,v=`${w}${e}_strides`,b="";for(let U=0;U<s-1;U++)b+=`
    let dim${U} = current / ${j(v,U,s)};
    let rest${U} = current % ${j(v,U,s)};
    indices[${U}] = dim${U};
    current = rest${U};
    `;b+=`indices[${s-1}] = current;`;let E=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${b}
    return indices;
  }`,T=U=>(y.offsetToIndices=!0,s<2?U:`o2i_${e}(${U})`),I=[];if(s>=2)for(let U=s-1;U>=0;U--)I.push(`${j(v,U,s)} * (indices[${U}])`);let A=s<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${I.join("+")};
  }`,C=U=>(y.indicesToOffset=!0,s<2?U:`i2o_${e}(${U})`),x=(...U)=>s===0?"0u":`${g.indices}(${U.map(_).join(",")})`,D=(U,Q)=>s<2?`${U}`:`${j(U,Q,s)}`,L=(U,Q,Z)=>s<2?`${U}=${Z};`:`${j(U,Q,s)}=${Z};`,Y={},F=(U,Q)=>{y.broadcastedIndicesToOffset=!0;let Z=`${Q.name}broadcastedIndicesTo${e}Offset`;if(Z in Y)return`${Z}(${U})`;let V=[];for(let Ee=s-1;Ee>=0;Ee--){let Ae=Q.indicesGet("outputIndices",Ee+Q.rank-s);V.push(`${D(v,Ee)} * (${Ae} % ${D(S,Ee)})`)}return Y[Z]=`fn ${Z}(outputIndices: ${Q.type.indices}) -> u32 {
             return ${V.length>0?V.join("+"):"0u"};
           }`,`${Z}(${U})`},K=(U,Q)=>(()=>{if(g.storage===g.value)return`${e}[${U}]=${Q};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${U}]=vec2<u32>(u32(${Q}), select(0u, 0xFFFFFFFFu, ${Q} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${U}]=vec2<u32>(u32(${Q}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${U}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${Q}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),R=U=>(()=>{if(g.storage===g.value)return`${e}[${U}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${U}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${U}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${U}] & 0xFFu), bool(${e}[${U}] & 0xFF00u), bool(${e}[${U}] & 0xFF0000u), bool(${e}[${U}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),N=s<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${c} {
    return ${R(`i2o_${e}(indices)`)};
  }`,G=s<2?"":(()=>{let U=u.map(Z=>`d${Z}: u32`).join(", "),Q=u.map(Z=>`d${Z}`).join(", ");return`
  fn get_${e}(${U}) -> ${c} {
    return get_${e}ByIndices(${x(Q)});
  }`})(),J=(...U)=>{if(U.length!==s)throw new Error(`indices length must be ${s}`);let Q=U.map(_).join(",");return s===0?R("0u"):s===1?R(Q[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${Q})`)},ee=U=>s<2?R(U):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${U})`),re=s<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${c}) {
    ${K(`i2o_${e}(indices)`,"value")}
  }`,ne=s<2?"":(()=>{let U=u.map(Z=>`d${Z}: u32`).join(", "),Q=u.map(Z=>`d${Z}`).join(", ");return`
  fn set_${e}(${U}, value: ${c}) {
    set_${e}ByIndices(${x(Q)}, value);
  }`})();return{impl:()=>{let U=[],Q=!1;return y.offsetToIndices&&(U.push(E),Q=!0),y.indicesToOffset&&(U.push(A),Q=!0),y.broadcastedIndicesToOffset&&(Object.values(Y).forEach(Z=>U.push(Z)),Q=!0),y.set&&(U.push(ne),Q=!0),y.setByIndices&&(U.push(re),Q=!0),y.get&&(U.push(G),Q=!0),y.getByIndices&&(U.push(N),Q=!0),!n&&Q&&U.unshift(`const ${S} = ${g.indices}(${r.join(",")});`,`const ${v} = ${g.indices}(${O.computeStrides(r).join(",")});`),U.join(`
`)},type:g,offsetToIndices:T,indicesToOffset:C,broadcastedIndicesToOffset:F,indices:x,indicesGet:D,indicesSet:L,set:(...U)=>{if(U.length!==s+1)throw new Error(`indices length must be ${s}`);let Q=U[s];if(typeof Q!="string")throw new Error("value must be string");let Z=U.slice(0,s).map(_).join(",");return s===0?K("0u",Q):s===1?K(Z[0],Q):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${Z}, ${Q})`)},setByOffset:K,setByIndices:(U,Q)=>s<2?K(U,Q):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${U}, ${Q});`),get:J,getByOffset:R,getByIndices:ee,usage:i,name:e,strides:v,shape:S,rank:s}},M=(e,t,r,i=1)=>cr(e,t,r,"input",i),H=(e,t,r,i=1)=>cr(e,t,r,"output",i),sc=(e,t,r)=>cr(e,t,r,"atomicOutput",1),Tn=(e,t,r,i=1)=>cr(e,t,r,"internal",i),pu=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=tr){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},oc=(e,t)=>new pu(e,t)}),cu,pa,hu,fu,mu,gu,Pe,uc,lc,Tt=P(()=>{te(),ie(),Te(),ae(),cu=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},pa=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),hu=(e,t)=>O.sortBasedOnPerm(e,pa(e.length,t)),fu=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)a+=`a[${e[n]}]=i[${n}];`;return a+="return a;}"},mu=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},gu=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Pe=(e,t)=>{let r=e.dataType,i=e.dims.length,a=pa(i,t),n=hu(e.dims,a),s=e.dims,u=n,l=i<2||gu(a,e.dims),d;if(l)return d=y=>{let w=M("input",r,s,4),S=H("output",r,u,4);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,S)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:d};let{newShape:c,newPerm:h}=mu(e.dims,a),g=O.areEqual(h,[2,3,1]),_=O.areEqual(h,[3,1,2]);if(c.length===2||g||_){s=g?[c[0],c[1]*c[2]]:_?[c[0]*c[1],c[2]]:c,u=[s[1],s[0]];let y=16;return d=w=>{let S=M("a",r,s.length),v=H("output",r,u.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(S,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${y+1}>, ${y}>;
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
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/y),y:Math.ceil(u[0]/y)},programUniforms:[{type:12,data:w},...X(s,u)]}},getShaderSource:d}}return d=y=>{let w=M("a",r,s.length),S=H("output",r,u.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,S)}

  ${fu(a,i,w,S)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...X(s,u)]}},getShaderSource:d}},uc=(e,t)=>{cu(e.inputs,t.perm),e.compute(Pe(e.inputs[0],t.perm))},lc=e=>fe({perm:e.perm})}),yu,_u,bu,wu,$u,vu,xu,Su,Tu,ku,He,dc,pc,cc,hc,fc,mc,gc,yc,_c,bc,K0=P(()=>{te(),ie(),ae(),kn(),Tt(),yu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},_u={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},bu={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},wu={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},$u=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},vu=(e,t)=>{let r=[],i=e.length;for(let n=0;n<i;n++)t.indexOf(n)===-1&&r.push(e[n]);let a=t.map(n=>e[n]);return[r,a]},xu=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?i.push(e[a++]):i.push(1);return i},Su=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Tu=(e,t)=>{let r=[];if(!Su(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},ku=(e,t,r,i,a,n,s)=>{let u=r[0].dims,l=O.size(n),d=O.size(s),c=M("_A",r[0].dataType,u),h=H("output",a,n),g=64;l===1&&(g=256);let _=`
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

          var bestValue = f32(${bu[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${yu[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${_u[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${i==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${wu[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},He=(e,t,r,i)=>{let a=e.inputs.length===1?r:Xa(e.inputs,r),n=a.axes;n.length===0&&!a.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((_,y)=>y));let s=O.normalizeAxes(n,e.inputs[0].dims.length),u=s,l=e.inputs[0],d=Tu(u,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Pe(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=$u(u.length,l.dims.length));let[c,h]=vu(l.dims,u),g=c;a.keepDims&&(g=xu(c,s)),e.compute(ku(t,a.cacheKey,[l],i,e.inputs[0].dataType,g,h),{inputs:[l]})},dc=(e,t)=>{He(e,"ReduceMeanShared",t,"mean")},pc=(e,t)=>{He(e,"ReduceL1Shared",t,"l1")},cc=(e,t)=>{He(e,"ReduceL2Shared",t,"l2")},hc=(e,t)=>{He(e,"ReduceLogSumExpShared",t,"logSumExp")},fc=(e,t)=>{He(e,"ReduceMaxShared",t,"max")},mc=(e,t)=>{He(e,"ReduceMinShared",t,"min")},gc=(e,t)=>{He(e,"ReduceProdShared",t,"prod")},yc=(e,t)=>{He(e,"ReduceSumShared",t,"sum")},_c=(e,t)=>{He(e,"ReduceSumSquareShared",t,"sumSquare")},bc=(e,t)=>{He(e,"ReduceLogSumShared",t,"logSum")}}),Fe,Eu,di,Xa,je,Iu,zu,Cu,Au,Ou,Ru,Bu,Mu,Nu,Du,Ke,wc,$c,vc,xc,Sc,Tc,kc,Ec,Ic,zc,kn=P(()=>{te(),ie(),Te(),ae(),K0(),Fe=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Eu=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],di=(e,t,r,i,a,n,s=!1,u=!1)=>{let l=[],d=r[0].dims,c=d.length,h=O.normalizeAxes(a,c),g=!u&&h.length===0;d.forEach((w,S)=>{g||h.indexOf(S)>=0?s&&l.push(1):l.push(w)});let _=l.length,y=O.size(l);return{name:e,shaderCache:t,getShaderSource:w=>{let S=[],v=M("_A",r[0].dataType,c),b=H("output",n,_),E=i(v,b,h),T=E[2];for(let I=0,A=0;I<c;I++)g||h.indexOf(I)>=0?(s&&A++,T=`for(var j${I}: u32 = 0; j${I} < ${d[I]}; j${I}++) {
                  ${E[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${v.indicesSet("input_indices",I,`j${I}`)}
                  ${T}
                }`):(S.push(`${v.indicesSet("input_indices",I,b.indicesGet("output_indices",A))};`),A++);return`

        ${w.registerUniform("output_size","u32").declareVariables(v,b)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${E[0]}       // init ops for reduce max/min
          ${E[1]}
          ${T}
          ${E[3]}
          ${E.length===4?b.setByOffset("global_idx","value"):E.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:n}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...X(d,l)]})}},Xa=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),fe({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},je=(e,t,r,i)=>{let a=e.inputs,n=a.length===1?r:Xa(a,r);e.compute(di(t,{hint:n.cacheKey,inputDependencies:["rank"]},[a[0]],n.noopWithEmptyAxes&&n.axes.length===0?Eu:i,n.axes,a[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},Iu=(e,t)=>{Fe(e.inputs),je(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},zu=(e,t)=>{Fe(e.inputs),je(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Cu=(e,t)=>{Fe(e.inputs),je(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Au=(e,t)=>{Fe(e.inputs),je(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Ou=(e,t)=>{Fe(e.inputs),je(e,"ReduceMax",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Ru=(e,t)=>{Fe(e.inputs),je(e,"ReduceMean",t,(r,i,a)=>{let n=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},Bu=(e,t)=>{Fe(e.inputs),je(e,"ReduceMin",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Mu=(e,t)=>{Fe(e.inputs),je(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Nu=(e,t)=>{Fe(e.inputs),je(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Du=(e,t)=>{Fe(e.inputs),je(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Ke=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?i*=e[n]:a*=e[n];return a<32&&i>1024},wc=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ru(e,t):dc(e,t)},$c=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zu(e,t):pc(e,t)},vc=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cu(e,t):cc(e,t)},xc=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Au(e,t):hc(e,t)},Sc=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ou(e,t):fc(e,t)},Tc=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Bu(e,t):mc(e,t)},kc=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Mu(e,t):gc(e,t)},Ec=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Nu(e,t):yc(e,t)},Ic=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Du(e,t):_c(e,t)},zc=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Iu(e,t):bc(e,t)}}),ca,Cc,Ac,Za,X0=P(()=>{te(),Te(),kn(),ca=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Cc=(e,t)=>{ca(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(di("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Ac=(e,t)=>{ca(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(di("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Za=e=>fe(e)}),Uu,Kr,Pu,Lu,qu,kr,Wu,Oc,En=P(()=>{te(),ie(),Sn(),ae(),Uu=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],u=e[5];if(s&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=a.dims[0]/3,g=h,_=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let E of t.qkvHiddenSizes)if(E%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let y=d;if(h!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==h+g+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(s){if(g!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=s.dims[3])}let S=y+w,v=-1,b=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==d||u.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:w,kvSequenceLength:y,totalSequenceLength:S,maxSequenceLength:v,inputHiddenSize:c,hiddenSize:h,vHiddenSize:_,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Kr=(e,t,r)=>t&&e?`
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
    `,Pu=(e,t,r,i,a,n,s,u)=>{let l=Se(s?1:n),d=64,c=n/l;c<d&&(d=32);let h=Math.ceil(n/l/d),g=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:c},{type:12,data:h}],_=Ie(e.dataType,l),y=Re(1,l),w=["type"];s&&w.push("type"),u&&w.push("type");let S=v=>{let b=H("x",e.dataType,e.dims,l),E=[b],T=s?M("seq_lens",s.dataType,s.dims):void 0;T&&E.push(T);let I=u?M("total_sequence_length_input",u.dataType,u.dims):void 0;I&&E.push(I);let A=Re(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(C).declareVariables(...E)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Kr(T,I,!1)}
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
        x[offset + i] = ${b.type.value}(${A}(1.0) / ${A}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${A}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${_};${l}`,inputDependencies:w},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:g})}},Lu=(e,t,r,i,a,n,s,u,l)=>{let d=s+n.kvSequenceLength,c=[n.batchSize,n.numHeads,n.sequenceLength,d],h=e>1&&i,g=n.kvNumHeads?n.kvNumHeads:n.numHeads,_=h?[n.batchSize,g,d,n.headSize]:void 0,y=n.nReps?n.nReps:1,w=n.scale===0?1/Math.sqrt(n.headSize):n.scale,S=Se(n.headSize),v=n.headSize/S,b=12,E={x:Math.ceil(d/b),y:Math.ceil(n.sequenceLength/b),z:n.batchSize*n.numHeads},T=[{type:12,data:n.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:w},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:y}],I=h&&i&&O.size(i.dims)>0,A=["type","type"];I&&A.push("type"),a&&A.push("type"),u&&A.push("type"),l&&A.push("type");let C=[{dims:c,dataType:t.dataType,gpuDataType:0}];h&&C.push({dims:_,dataType:t.dataType,gpuDataType:0});let x=D=>{let L=M("q",t.dataType,t.dims,S),Y=M("key",r.dataType,r.dims,S),F=[L,Y];if(I){let re=M("past_key",i.dataType,i.dims,S);F.push(re)}a&&F.push(M("attention_bias",a.dataType,a.dims));let K=u?M("seq_lens",u.dataType,u.dims):void 0;K&&F.push(K);let R=l?M("total_sequence_length_input",l.dataType,l.dims):void 0;R&&F.push(R);let N=H("output",t.dataType,c),G=[N];h&&G.push(H("present_key",t.dataType,_,S));let J=Re(1,S),ee=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${L.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${L.type.storage}, ${b*b}>;
  ${D.registerUniforms(ee).declareVariables(...F,...G)}
  ${D.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Kr(K,R,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${J}(0);
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
          value += ${J}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${N.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${a!==void 0};${i!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:C,dispatchGroup:E,programUniforms:T}),getShaderSource:x}},qu=(e,t,r,i,a,n,s=void 0,u=void 0)=>{let l=n+a.kvSequenceLength,d=a.nReps?a.nReps:1,c=a.vHiddenSize*d,h=e>1&&i,g=a.kvNumHeads?a.kvNumHeads:a.numHeads,_=h?[a.batchSize,g,l,a.headSize]:void 0,y=[a.batchSize,a.sequenceLength,c],w=12,S={x:Math.ceil(a.vHeadSize/w),y:Math.ceil(a.sequenceLength/w),z:a.batchSize*a.numHeads},v=[{type:12,data:a.sequenceLength},{type:12,data:l},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:c},{type:12,data:n},{type:12,data:a.kvSequenceLength},{type:12,data:d}],b=h&&i&&O.size(i.dims)>0,E=["type","type"];b&&E.push("type"),s&&E.push("type"),u&&E.push("type");let T=[{dims:y,dataType:t.dataType,gpuDataType:0}];h&&T.push({dims:_,dataType:t.dataType,gpuDataType:0});let I=A=>{let C=M("probs",t.dataType,t.dims),x=M("v",r.dataType,r.dims),D=[C,x];b&&D.push(M("past_value",i.dataType,i.dims));let L=s?M("seq_lens",s.dataType,s.dims):void 0;s&&D.push(L);let Y=u?M("total_sequence_length_input",u.dataType,u.dims):void 0;u&&D.push(Y);let F=[H("output",t.dataType,y)];h&&F.push(H("present_value",t.dataType,_));let K=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${C.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${C.type.value}, ${w*w}>;
  ${A.registerUniforms(K).declareVariables(...D,...F)}
  ${A.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Kr(L,Y,!0)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:T,dispatchGroup:S,programUniforms:v}),getShaderSource:I}},kr=(e,t,r,i,a,n,s,u,l,d,c=void 0,h=void 0)=>{let g=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),_=g>1?s:void 0,y=g>1?u:void 0,w=g>1?d.pastSequenceLength:0,S=w+d.kvSequenceLength,v=l&&O.size(l.dims)>0?l:void 0,b=[t,r];_&&O.size(_.dims)>0&&b.push(_),v&&b.push(v),c&&b.push(c),h&&b.push(h);let E=e.compute(Lu(g,t,r,_,v,d,w,c,h),{inputs:b,outputs:g>1?[-1,1]:[-1]})[0];e.compute(Pu(E,d.batchSize,d.numHeads,w,d.sequenceLength,S,c,h),{inputs:c&&h?[E,c,h]:[E],outputs:[]});let T=[E,i];y&&O.size(y.dims)>0&&T.push(y),c&&T.push(c),h&&T.push(h),e.compute(qu(g,E,i,y,d,w,c,h),{inputs:T,outputs:g>1?[0,2]:[0]})},Wu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,n=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=h=>{let g=H("output_q",l[0].dataType,r),_=H("output_k",l[0].dataType,r),y=H("output_v",l[0].dataType,r),w=M("input",l[0].dataType,l[0].dims),S=M("weight",l[1].dataType,l[1].dims),v=M("bias",l[2].dataType,l[2].dims),b=w.type.storage,E=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${b}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${b}, ${s*s}>;
  var<workgroup> tileWeightK: array<${b}, ${s*s}>;
  var<workgroup> tileWeightV: array<${b}, ${s*s}>;
  ${h.registerUniforms(E).declareVariables(w,S,v,g,_,y)}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},Oc=(e,t)=>{let r=Uu(e.inputs,t),[i,a,n]=Wu(e,r);return kr(e,i,a,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Vu,Gu,Hu,Rc,Z0=P(()=>{Ve(),te(),ie(),Te(),ae(),Vu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,n)=>{let s=a.length;if(s!==i.length)throw new Error(`${n}: num dimensions != ${s}`);a.forEach((u,l)=>{if(u!==i[l])throw new Error(`${n}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Gu=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,n=e[0].dims,s=i?Se(n[n.length-1]):1,u=a==="NHWC"&&n.length>1?s:1,l=O.size(n)/s,d=i,c=d?n.length:n,h=M("x",e[0].dataType,e[0].dims,s),g=M("scale",e[1].dataType,e[1].dims,u),_=M("bias",e[2].dataType,e[2].dims,u),y=M("inputMean",e[3].dataType,e[3].dims,u),w=M("inputVar",e[4].dataType,e[4].dims,u),S=H("y",e[0].dataType,c,s),v=()=>{let E="";if(i)E=`let cOffset = ${n.length===1?"0u":a==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")E=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{E=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let T=1;T<g.rank;T++)E+=`cIndices[${T}] = outputIndices[${T}];`;E+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return E},b=E=>`
  const epsilon = ${r};
  ${E.registerUniform("outputSize","u32").declareVariables(h,g,_,y,w,S)}
  ${E.mainStart()}
  ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${s}`)};
    ${v()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...X(n)]:[{type:12,data:l}]})}},Hu=e=>fe(e),Rc=(e,t)=>{let{inputs:r,outputCount:i}=e,a=Hu({...t,outputCount:i});if(_e.webgpu.validateInputContent&&Vu(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Gu(r,a))}}),Fu,ju,Bc,Y0=P(()=>{ie(),ae(),Fu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ju=e=>{let t=e[0].dims,r=e[0].dims[2],i=O.size(t)/4,a=e[0].dataType,n=M("input",a,t,4),s=M("bias",a,[r],4),u=M("residual",a,t,4),l=H("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(n,s,u,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Bc=e=>{Fu(e.inputs),e.compute(ju(e.inputs))}}),Ku,he,Mc,Nc,Dc,Uc,Pc,Lc,qc,Wc,Vc,Xu,Gc,Hc,Fc,jc,$r,Kc,ii,Xc,Zc,Yc,Qc,Jc,eh,th,rh,ih,ah,nh,sh,oh,uh,lh,dh,ha,ph,Ya,Qa,ch,hh,fh,Zu,Yu,mh,In=P(()=>{te(),ie(),Te(),ae(),Ku=(e,t,r,i,a,n,s)=>{let u=Math.ceil(t/4),l="";typeof a=="string"?l=`${a}(a)`:l=a("a");let d=M("inputData",r,[u],4),c=H("outputData",i,[u],4),h=[{name:"vec_size",type:"u32"}];return s&&h.push(...s),`
      ${e.registerUniforms(h).declareVariables(d,c)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},he=(e,t,r,i,a,n=e.dataType,s,u)=>{let l=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:d=>Ku(d,O.size(e.dims),e.dataType,n,r,i,u),getRunData:d=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(O.size(d[0].dims)/64/4)},programUniforms:l})}},Mc=e=>{e.compute(he(e.inputs[0],"Abs","abs"))},Nc=e=>{e.compute(he(e.inputs[0],"Acos","acos"))},Dc=e=>{e.compute(he(e.inputs[0],"Acosh","acosh"))},Uc=e=>{e.compute(he(e.inputs[0],"Asin","asin"))},Pc=e=>{e.compute(he(e.inputs[0],"Asinh","asinh"))},Lc=e=>{e.compute(he(e.inputs[0],"Atan","atan"))},qc=e=>{e.compute(he(e.inputs[0],"Atanh","atanh"))},Wc=e=>fe(e),Vc=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(he(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Xu=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return fe({min:t,max:r})},Gc=(e,t)=>{let r=t||Xu(e.inputs),i=Re(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Hc=e=>{e.compute(he(e.inputs[0],"Ceil","ceil"))},Fc=e=>{e.compute(he(e.inputs[0],"Cos","cos"))},jc=e=>{e.compute(he(e.inputs[0],"Cosh","cosh"))},$r=e=>fe(e),Kc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},ii=(e="f32")=>`
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
}`,Xc=e=>{let t=Re(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,ii(t)))},Zc=e=>{e.compute(he(e.inputs[0],"Exp","exp"))},Yc=e=>{e.compute(he(e.inputs[0],"Floor","floor"))},Qc=e=>{let t=Re(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,ii(t)))},Jc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(he(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},eh=e=>{e.compute(he(e.inputs[0],"Not",t=>`!${t}`))},th=e=>{e.compute(he(e.inputs[0],"Neg",t=>`-${t}`))},rh=e=>{e.compute(he(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},ih=e=>{let t=Re(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},ah=e=>{e.compute(he(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},nh=e=>fe(e),sh=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(he(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},oh=e=>{e.compute(he(e.inputs[0],"Sin","sin"))},uh=e=>{e.compute(he(e.inputs[0],"Sinh","sinh"))},lh=e=>{e.compute(he(e.inputs[0],"Sqrt","sqrt"))},dh=e=>{e.compute(he(e.inputs[0],"Tan","tan"))},ha=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,ph=e=>{e.compute(he(e.inputs[0],"Tanh",ha))},Ya=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ha("v")};
}
`,Qa=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,ch=e=>{let t=Re(e.inputs[0].dataType);e.compute(he(e.inputs[0],"FastGelu",Qa,Ya(t),void 0,e.inputs[0].dataType))},hh=(e,t)=>{let r=Re(e.inputs[0].dataType);return e.compute(he(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},fh=e=>{e.compute(he(e.inputs[0],"Log","log"))},Zu=(e,t)=>`
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
`,Yu=e=>`quick_gelu_impl(${e})`,mh=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(he(e.inputs[0],"QuickGelu",Yu,Zu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Qu,Ju,gh,Q0=P(()=>{ie(),ae(),In(),Qu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ju=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=M("input",e[0].dataType,e[0].dims,4),i=M("bias",e[0].dataType,[e[0].dims[2]],4),a=H("output",e[0].dataType,t,4),n=O.size(t)/4,s=Ie(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,i,a)}

  ${ii(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},gh=e=>{Qu(e.inputs),e.compute(Ju(e.inputs))}}),el,tl,Xe,yh,_h,bh,wh,$h,vh,xh,Sh,Th,kh,J0=P(()=>{te(),ie(),ae(),el=(e,t,r,i,a,n,s,u,l,d,c,h)=>{let g,_;typeof u=="string"?g=_=(b,E)=>`${u}((${b}),(${E}))`:typeof u=="function"?g=_=u:(g=u.scalar,_=u.vector);let y=H("outputData",c,i.length,4),w=M("aData",l,t.length,4),S=M("bData",d,r.length,4),v;if(a)if(n){let b=O.size(t)===1,E=O.size(r)===1,T=t.length>0&&t[t.length-1]%4===0,I=r.length>0&&r[r.length-1]%4===0;b||E?v=y.setByOffset("global_idx",_(b?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),E?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):v=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",_(s||T?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||I?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=y.setByOffset("global_idx",_(w.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(E,T,I="")=>{let A=`aData[indexA${T}][componentA${T}]`,C=`bData[indexB${T}][componentB${T}]`;return`
            let outputIndices${T} = ${y.offsetToIndices(`global_idx * 4u + ${T}u`)};
            let offsetA${T} = ${w.broadcastedIndicesToOffset(`outputIndices${T}`,y)};
            let offsetB${T} = ${S.broadcastedIndicesToOffset(`outputIndices${T}`,y)};
            let indexA${T} = offsetA${T} / 4u;
            let indexB${T} = offsetB${T} / 4u;
            let componentA${T} = offsetA${T} % 4u;
            let componentB${T} = offsetB${T} % 4u;
            ${E}[${T}] = ${I}(${g(A,C)});
          `};c===9?v=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,S,y)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},tl=(e,t,r,i,a,n,s=r.dataType)=>{let u=r.dims.map(Number),l=i.dims.map(Number),d=!O.areEqual(u,l),c=u,h=O.size(u),g=!1,_=!1,y=[d];if(d){let w=er.calcShape(u,l,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");c=w.slice(),h=O.size(c);let S=O.size(u)===1,v=O.size(l)===1,b=u.length>0&&u[u.length-1]%4===0,E=l.length>0&&l[l.length-1]%4===0;y.push(S),y.push(v),y.push(b),y.push(E);let T=1;for(let I=1;I<c.length;I++){let A=u[u.length-I],C=l[l.length-I];if(A===C)T*=A;else break}T%4===0?(_=!0,g=!0):(S||v||b||E)&&(g=!0)}else g=!0;return y.push(g),{name:e,shaderCache:{hint:t+y.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>el(w,u,l,c,g,d,_,a,r.dataType,i.dataType,s,n),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(c)/4)},...X(u,l,c)]})}},Xe=(e,t,r,i,a,n)=>{e.compute(tl(t,a??"",e.inputs[0],e.inputs[1],r,i,n))},yh=e=>{Xe(e,"Add",(t,r)=>`${t}+${r}`)},_h=e=>{Xe(e,"Div",(t,r)=>`${t}/${r}`)},bh=e=>{Xe(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},wh=e=>{Xe(e,"Mul",(t,r)=>`${t}*${r}`)},$h=e=>{let t=M("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Xe(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
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
      `)},vh=e=>{Xe(e,"Sub",(t,r)=>`${t}-${r}`)},xh=e=>{Xe(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Sh=e=>{Xe(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Th=e=>{Xe(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},kh=e=>{Xe(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),rl,il,al,nl,Eh,Ih,ey=P(()=>{te(),ie(),Te(),ae(),rl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,n=i.dims.length;e.forEach((s,u)=>{if(u!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},il=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,al=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let n=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(n):a===0?i.push(`if (inputIndex == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${a}) { ${n} }`)}return i.join(`
`)},nl=(e,t,r,i)=>{let a=O.size(r),n=new Array(e.length),s=new Array(e.length),u=0,l=[],d=[],c=[{type:12,data:a}];for(let w=0;w<e.length;++w)u+=e[w].dims[t],n[w]=u,d.push(e[w].dims.length),s[w]=M(`input${w}`,i,d[w]),l.push("rank"),c.push({type:12,data:n[w]});for(let w=0;w<e.length;++w)c.push(...X(e[w].dims));c.push(...X(r));let h=H("output",i,r.length),g=h.indicesGet("indices",t),_=Array.from(Array(n.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),y=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)w.registerUniform(`sizeInConcatAxis${S}`,"u32");return w.declareVariables(...s,h)})()}

  ${il(n.length,_)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${_});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${al(s,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:y}},Eh=(e,t)=>{let r=e.inputs,i=r[0].dims,a=O.normalizeAxis(t.axis,i.length);rl(r,a);let n=i.slice();n[a]=r.reduce((u,l)=>u+(l.dims.length>a?l.dims[a]:0),0);let s=r.filter(u=>O.size(u.dims)>0);e.compute(nl(s,a,n,r[0].dataType),{inputs:s})},Ih=e=>fe({axis:e.axis})}),Lt,qt,Wt,zn,Ft=P(()=>{te(),ie(),Lt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},qt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Wt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},zn=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[ec,tc];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ce,zh,Cn=P(()=>{Ce=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},zh=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Ch,ty=P(()=>{Ch=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),xr,An,On=P(()=>{te(),ie(),ae(),Ft(),xr=(e,t,r,i,a)=>{let n=i-r;return`
      ${Array.from({length:r}).map((s,u)=>`
      if (${j(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,j(a,u+n,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},An=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s[s.length-2],d=u[u.length-1],c=s[s.length-1],h=Se(d),g=Se(c),_=Se(l),y=O.size(r)/h/_,w=e.length>2,S=i?i.slice(0,-2):r.slice(0,-2),v=[O.size(S),l,d],b=[{type:12,data:y},{type:12,data:l},{type:12,data:d},{type:12,data:c}];qt(t,b),b.push(...X(S,s,u)),w&&b.push(...X(e[2].dims)),b.push(...X(v));let E=T=>{let I=Tn("batch_dims",e[0].dataType,S.length),A=M("a",e[0].dataType,s.length,g),C=M("b",e[1].dataType,u.length,h),x=H("output",e[0].dataType,v.length,h),D=Ie(x.type.tensor),L=Lt(t,x.type.value,D),Y=[A,C],F="";if(w){let N=a?h:1;Y.push(M("bias",e[2].dataType,e[2].dims.length,N)),F=`${a?`value += bias[col / ${N}];`:`value += ${x.type.value}(bias[row + i]);`}`}let K=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Wt(t,K);let R=()=>{let N=`var a_data: ${A.type.value};`;for(let G=0;G<g;G++)N+=`
              let b_data${G} = b[(b_offset + (k + ${G}) * uniforms.N + col) / ${h}];`;for(let G=0;G<_;G++){N+=`a_data = a[(a_offset + (row + ${G}) * uniforms.K + k) / ${g}];`;for(let J=0;J<g;J++)N+=`
            values[${G}] = fma(${C.type.value}(a_data${g===1?"":`[${J}]`}), b_data${J}, values[${G}]);
`}return N};return`
  ${T.registerUniforms(K).registerInternalVariables(I).declareVariables(...Y,x)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${A.type.indices};
    ${xr("a_indices",A,A.rank-2,I.rank,"batch_indices")}
    ${A.indicesSet("a_indices",A.rank-2,0)}
    ${A.indicesSet("a_indices",A.rank-1,0)}
    let a_offset = ${A.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${xr("b_indices",C,C.rank-2,I.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${x.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${R()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${F}
      ${L}
      let cur_indices = ${x.type.indices}(batch, row + i, col);
      let offset = ${x.indicesToOffset("cur_indices")};
      ${x.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${h};${g};${_};${a}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:b}),getShaderSource:E}}}),sl,ol,Ja,fa,ul,en,ll,pi,Rn=P(()=>{te(),ie(),ae(),Ft(),On(),Cn(),sl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,ol=(e,t)=>e?`
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
        }`,Ja=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=a?l:n,h=a?n:l,g=c/t[0],_=n/t[1];if(!((a&&g===4&&e[1]===4||!a&&(g===3||g===4))&&c%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
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
          ${sl(a,i)}
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

          ${ol(a,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},fa=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,ul=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",en=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],h=a?d:n,g=a?n:d;if(!(g%t[1]===0&&h%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let _=g/t[1],y=h/t[0],w=n/t[1],S=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${fa(a,i)}
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
      ${fa(a,i)}
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
      ${ul(a)}
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
`},ll=(e,t,r,i,a=!1)=>{let[n,s,u,l]=i,d=Ie(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ce(e,d)} {
      var value = ${Ce(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${xr("aIndices",s,s.rank-2,n.rank,"batchIndices")}
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
        ${xr("bIndices",u,u.rank-2,n.rank,"batchIndices")}
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
    `},pi=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s.slice(0,-2),d=u.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),h=O.size(c),g=s[s.length-2],_=s[s.length-1],y=u[u.length-1],w=_%4===0&&y%4===0,S=g<=8?[4,1,1]:[4,4,1],v=[8,8,1],b=[Math.ceil(y/v[0]/S[0]),Math.ceil(g/v[1]/S[1]),Math.ceil(h/v[2]/S[2])],E=w?4:1,T=[...l,g,_/E],I=T.length,A=[...d,_,y/E],C=A.length,x=[h,g,y/E],D=[{type:6,data:g},{type:6,data:y},{type:6,data:_}];qt(t,D),D.push(...X(c,T,A));let L=["rank","rank"],Y=e.length>2;Y&&(D.push(...X(e[2].dims)),L.push("rank")),D.push(...X(x));let F=K=>{let R=c.length,N=Tn("batchDims",e[0].dataType,R,1),G=Ie(e[0].dataType),J=M("a",e[0].dataType,I,E),ee=M("b",e[1].dataType,C,E),re=H("result",e[0].dataType,x.length,E),ne=[J,ee];if(Y){let Ee=a?E:1;ne.push(M("bias",e[2].dataType,e[2].dims.length,Ee))}let U=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Wt(t,U);let Q=Ie(re.type.tensor),Z=Lt(t,re.type.value,Q),V=ll(E,Y,Z,[N,J,ee,re],a);return`
  ${K.registerUniforms(U).registerInternalVariables(N).declareVariables(...ne,re)}
  ${V}
  ${w?Ja(S,v,G,N):en(S,v,G,N)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${w};${a}`,inputDependencies:L},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:D}),getShaderSource:F}}}),dl,Ah,ry=P(()=>{te(),mt(),ae(),Ft(),Cn(),ty(),Rn(),dl=(e,t,r,i,a=!1,n,s=4,u=4,l=4,d="f32")=>{let c=D=>{switch(D){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},h=D=>{switch(D){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},g=e?`
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
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",v=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
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
    return ${Ce(u,d)}(0.0);`,I=Ce(l,d),A=Ce(e?s:u,d),C=Ce(e?u:s,d),x=Lt(n,I,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${A} {
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
      ${zh(a)}
      ${x}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Ah=(e,t,r,i,a,n,s,u,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],h=r[0],g=d?r[2]:r[3],_=d?r[1]:r[2],y=d?r[3]:r[1],w=d&&(c%4===0||c%3===0)&&y%4===0,S=d?y:g*_,v=d?g*_:y,b=[8,8,1],E=i<=8?[4,1,1]:[4,4,1],T=[Math.ceil(S/b[0]/E[0]),Math.ceil(v/b[1]/E[1]),Math.ceil(h/b[2]/E[2])];pe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let I=w?d&&c%4!==0?3:4:1,A=b[1]*E[1],C=b[0]*E[0],x=Math.max(b[0]*I,b[1]),D=i%A===0,L=a%C===0,Y=n%x===0,F=w?[I,4,4]:[1,1,1],K=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];qt(t,K),K.push(...X(e[0].dims,e[1].dims));let R=["rank","rank"];s&&(K.push(...X(e[2].dims)),R.push("rank")),K.push(...X(r));let N=G=>{let J=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Wt(t,J);let ee=w?4:1,re=Ie(e[0].dataType),ne=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${re}>`:re}) {
        result[flatIndex] = ${w?`vec4<${re}>`:re}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${re}>`:re}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,U=M("x",e[0].dataType,e[0].dims.length,I===3?1:I),Q=M("w",e[1].dataType,e[1].dims.length,ee),Z=[U,Q],V=H("result",e[0].dataType,r.length,ee);if(s){let Ee=M("bias",e[2].dataType,e[2].dims.length,ee);Z.push(Ee),ne+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${re}>`:re} {
          return bias[coords.${d?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${Ch("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${G.registerUniforms(J).declareVariables(...Z,V)}
        ${ne}
        ${dl(d,D,L,Y,s,t,F[0],F[1],F[2],re)}
        ${w?Ja(E,b,re,void 0,!d,x):en(E,b,re,void 0,!d,x,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${w};${D};${L};${Y};${A};${C};${x}`,inputDependencies:R},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:K}),getShaderSource:N}}}),pl,ma,hr,cl,ga,hl,Oh,Rh,iy=P(()=>{te(),mt(),ie(),ae(),Ft(),Cn(),pl=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},ma=e=>typeof e=="number"?[e,e,e]:e,hr=(e,t)=>t<=1?e:e+(e-1)*(t-1),cl=(e,t,r,i=1)=>{let a=hr(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},ga=(e,t,r,i,a)=>{a==null&&(a=cl(e,t[0],i[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*a)/i[s]+1));return n},hl=(e,t,r,i,a,n,s,u,l,d)=>{let c,h,g,_;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=ga([t,r,i,1],[u,l,d],1,[a,n,s],e);h=y[0],g=y[1],_=y[2]}else if(Array.isArray(e)){if(!e.every((w,S,v)=>w===v[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=ga([t,r,i,1],[u,l,d],1,[a,n,s],e[0]);h=y[0],g=y[1],_=y[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/a),g=Math.ceil(r/n),_=Math.ceil(i/s);let y=(h-1)*a+u-t,w=(g-1)*n+l-r,S=(_-1)*s+d-i,v=Math.floor(y/2),b=y-v,E=Math.floor(w/2),T=w-E,I=Math.floor(S/2),A=S-I;c={top:E,bottom:T,left:I,right:A,front:v,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:h,outHeight:g,outWidth:_}},Oh=(e,t,r,i,a,n=!1,s="channelsLast")=>{let u,l,d,c,h;if(s==="channelsLast")[u,l,d,c,h]=e;else if(s==="channelsFirst")[u,h,l,d,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[g,,_,y,w]=t,[S,v,b]=ma(r),[E,T,I]=ma(i),A=hr(_,E),C=hr(y,T),x=hr(w,I),{padInfo:D,outDepth:L,outHeight:Y,outWidth:F}=hl(a,l,d,c,S,v,b,A,C,x),K=n?g*h:g,R=[0,0,0,0,0];return s==="channelsFirst"?R=[u,K,L,Y,F]:s==="channelsLast"&&(R=[u,L,Y,F,K]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:d,inWidth:c,inChannels:h,outDepth:L,outHeight:Y,outWidth:F,outChannels:K,padInfo:D,strideDepth:S,strideHeight:v,strideWidth:b,filterDepth:_,filterHeight:y,filterWidth:w,effectiveFilterDepth:A,effectiveFilterHeight:C,effectiveFilterWidth:x,dilationDepth:E,dilationHeight:T,dilationWidth:I,inShape:e,outShape:R,filterShape:t}},Rh=(e,t,r,i,a,n)=>{let s=n==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],l={x:r.map((S,v)=>v)},d=[Math.ceil(pl(l.x.map(S=>r[S]))/u[0]),1,1];pe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,h=O.size(r),g=[{type:12,data:h},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];qt(t,g),g.push(...X(e[0].dims,e[1].dims));let _=["rank","rank"],y=e.length===3;y&&(g.push(...X(e[2].dims)),_.push("rank")),g.push(...X(r));let w=S=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Wt(t,v);let b=1,E=Ie(e[0].dataType),T=M("x",e[0].dataType,e[0].dims.length,c),I=M("W",e[1].dataType,e[1].dims.length,b),A=[T,I],C=H("result",e[0].dataType,r.length,b),x="";if(y){let Y=M("bias",e[2].dataType,e[2].dims.length,b);A.push(Y),x+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${E} {
          return bias[${s?j("coords",4,5):j("coords",1,5)}];
        }`}let D=Ce(c,E),L=Lt(t,D,E);return`
            ${x}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${S.registerUniforms(v).declareVariables(...A,C)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${j("coords",0,T.rank)};
              let d2 = ${s?j("coords",T.rank-1,T.rank):j("coords",1,T.rank)};
              let xFRCCorner = vec3<u32>(${s?j("coords",1,T.rank):j("coords",2,T.rank)},
              ${s?j("coords",2,T.rank):j("coords",3,T.rank)},
              ${s?j("coords",3,T.rank):j("coords",4,T.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?j("uniforms.x_shape",1,T.rank):j("uniforms.x_shape",2,T.rank)};
              let xShapeZ = ${s?j("uniforms.x_shape",2,T.rank):j("uniforms.x_shape",3,T.rank)};
              let xShapeW = ${s?j("uniforms.x_shape",3,T.rank):j("uniforms.x_shape",4,T.rank)};
              let xShapeU = ${s?j("uniforms.x_shape",4,T.rank):j("uniforms.x_shape",1,T.rank)};
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
              ${L}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${c};${y}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:g}),getShaderSource:w}}}),Bh,Mh,ay=P(()=>{te(),ie(),ae(),Ft(),Bh=(e,t,r,i)=>{let a=e.length>2,n=a?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,h=l&&c>=4?Se(d):1,g=O.size(r)/h,_=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];qt(t,_),_.push(...X(s,[u[0],u[1],u[2],u[3]/h]));let y=a?["rank","rank","rank"]:["rank","rank"];_.push(...X([r[0],r[1],r[2],r[3]/h]));let w=S=>{let v=H("output",e[0].dataType,r.length,h),b=Ie(v.type.tensor),E=Lt(t,v.type.value,b),T=M("x",e[0].dataType,s.length),I=M("w",e[1].dataType,u.length,h),A=[T,I];a&&A.push(M("b",e[2].dataType,e[2].dims,h));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Wt(t,C);let x=l?`
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
  ${S.registerUniforms(C).declareVariables(...A,v)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${x}
    ${n}
    ${E}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:w}},Mh=(e,t,r,i)=>{let a=e.length>2,n=Se(r[3]),s=Se(r[2]),u=O.size(r)/n/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],c=[r[0],r[1],r[2],r[3]/n],h=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];qt(t,h),h.push(...X(l,d,c));let g=(s-1)*t.strides[1]+d[1],_=y=>{let w=H("output",e[0].dataType,c.length,n),S=Ie(w.type.tensor),v=Lt(t,w.type.value,S),b=M("x",e[0].dataType,l.length,n),E=M("w",e[1].dataType,d.length,n),T=[b,E];a&&T.push(M("b",e[2].dataType,e[2].dims,n));let I=a?"value += b[output_channel];":"",A=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Wt(t,A),`
  ${y.registerUniforms(A).declareVariables(...T,w)}
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
      ${v}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${g};${d[0]};${d[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h}),getShaderSource:_}}}),fl,Xr,ml,Zr,tn,ya,gl,yl,rn,ny=P(()=>{ie(),ry(),iy(),Rn(),ay(),Ft(),On(),Tt(),fl=(e,t,r,i,a,n)=>{let s=e[0],u=e.slice(n?1:2,n?3:4),l=u.length,d=t[0],c=t.slice(2).map((g,_)=>g+(g-1)*(r[_]-1)),h=u.map((g,_)=>g+i[_]+i[_+l]).map((g,_)=>Math.floor((g-c[_]+a[_])/a[_]));return h.splice(0,0,s),h.splice(n?3:1,0,d),h},Xr=[2,3,1,0],ml=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Zr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let i=e.pads.slice();li.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},tn=e=>{let t=zn(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,n=e.group,s=e.kernel_shape,u=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},ya=(e,t,r,i)=>{let a=r.format==="NHWC",n=fl(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let A=[t[0]];if(a){let C=e.kernelCustomData.wT??e.compute(Pe(t[1],Xr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),A.push(C)}else A.push(t[1]);t.length===3&&A.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Mh(A,r,n,i),{inputs:A}):e.compute(Bh(A,r,n,i),{inputs:A});return}let s=t.length===3,u=t[0].dims[a?1:2],l=t[0].dims[a?2:3],d=t[0].dims[a?3:1],c=t[1].dims[2],h=t[1].dims[3],g=n[a?1:2],_=n[a?2:3],y=n[a?3:1],w=a&&c===u&&h===l&&r.pads[0]===0&&r.pads[1]===0;if(w||c===1&&h===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let A=n[0],C,x,D,L=[];if(a){let K=e.kernelCustomData.wT??e.compute(Pe(t[1],Xr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=K),w){let R=u*l*d;C=t[0].reshape([1,A,R]),x=K.reshape([1,R,y]),D=[1,A,y]}else C=t[0].reshape([A,u*l,d]),x=K.reshape([1,d,y]),D=[A,g*_,y];L.push(C),L.push(x)}else C=t[0].reshape([A,d,u*l]),x=t[1].reshape([1,y,d]),D=[A,y,g*_],L.push(x),L.push(C);s&&L.push(t[2]);let Y=D[2],F=L[0].dims[L[0].dims.length-1];Y<8&&F<8?e.compute(An(L,r,n,D,a,i),{inputs:L}):e.compute(pi(L,r,n,D,a,i),{inputs:L});return}let S=!0,v=e.kernelCustomData.wT??e.compute(Pe(t[1],Xr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let b=[t[0],v];s&&b.push(t[2]);let E=a?g*_:y,T=a?y:g*_,I=c*h*d;e.compute(Ah(b,r,n,E,T,I,s,S,i),{inputs:b})},gl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=Zr({...t,pads:a,strides:n,dilations:s,kernelShape:u},i);ya(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},yl=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=Zr(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Oh(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,i);e.compute(Rh(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},rn=(e,t)=>{if(ml(e.inputs,t),e.inputs[0].dims.length===3)gl(e,t);else if(e.inputs[0].dims.length===5)yl(e,e.inputs,t);else{let r=Zr(t,e.inputs);ya(e,e.inputs,r)}}}),Nh,sy=P(()=>{te(),mt(),ie(),ae(),Nh=(e,t,r)=>{let i=e.length>2,a=t.outputShape,n=t.format==="NHWC",s=t.group,u=e[1].dims,l=u[2]/s,d=u[3],c=n?Se(l):1,h=n&&d===1&&l>=4,g=h?Math.floor(l/4)*4:Math.floor(l/c)*c,_=l-g,y=n?Se(d):1,w=n?d===1?c:y:1,S=O.size(a)/y,v=[Math.ceil(S/64),1,1];pe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let b=["rank","rank"],E=[t.strides[0],t.strides[1]],T=[t.kernelShape[n?1:2],t.kernelShape[n?2:3]],I=[t.dilations[0],t.dilations[1]],A=[T[0]+(t.dilations[0]<=1?0:(t.kernelShape[n?1:2]-1)*(t.dilations[0]-1)),T[1]+(t.dilations[1]<=1?0:(t.kernelShape[n?2:3]-1)*(t.dilations[1]-1))],C=[A[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),A[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],x=[{type:12,data:S},{type:12,data:E},{type:12,data:T},{type:12,data:I},{type:12,data:A},{type:6,data:C},{type:12,data:g},{type:12,data:l},{type:12,data:d},...X(e[0].dims,e[1].dims)];i&&(x.push(...X(e[2].dims)),b.push("rank")),x.push(...X(a));let D=L=>{let Y=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:E.length},{name:"filter_dims",type:"u32",length:T.length},{name:"dilations",type:"u32",length:T.length},{name:"effective_filter_dims",type:"u32",length:A.length},{name:"pads",type:"i32",length:C.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],F=Ie(e[0].dataType),K=n?1:2,R=n?2:3,N=n?3:1,G=M("W",e[1].dataType,e[1].dims.length,w),J=M("Dy",e[0].dataType,e[0].dims.length,c),ee=[J,G];i&&ee.push(M("bias",e[2].dataType,[a[N]].length,y));let re=H("result",e[0].dataType,a.length,y),ne=()=>{let Z="";if(h)c===4?Z+=`
        let xValue = ${J.getByOffset("x_offset")};
        let wValue = ${G.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?Z+=`
          dotProd = dotProd + dot(vec4<${F}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}), vec4<${F}>(${G.getByOffset("w_offset")}, ${G.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(Z+=`
          dotProd = dotProd + dot(vec4<${F}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}, ${J.getByOffset("x_offset + 2u")}, ${J.getByOffset("x_offset + 3u")}), vec4<${F}>(${G.getByOffset("w_offset")}, ${G.getByOffset("w_offset + 1u")}, ${G.getByOffset("w_offset + 2u")}, ${G.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Z+=`
                  let xValue = ${n?J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):J.get("batch","inputChannel","idyR","idyC")};
        `,c===1)Z+=`
          let w_offset = ${G.indicesToOffset(`${G.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${G.getByOffset(`w_offset / ${w}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let V=0;V<c;V++)Z+=`
            let wValue${V} = ${G.getByOffset(`${G.indicesToOffset(`${G.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${V}, wOutChannel)`)} / ${w}`)};
            dotProd = dotProd + xValue[${V}] * wValue${V};`;return Z},U=()=>{if(_===0)return"";if(!h)throw new Error(`packInputAs4 ${h} is not true.`);let Z="";if(c===1){Z+="dotProd = dotProd";for(let V=0;V<_;V++)Z+=`
            + ${J.getByOffset(`x_offset + ${V}`)} * ${G.getByOffset(`w_offset + ${V}`)}`;Z+=";"}else if(c===2){if(_!==2)throw new Error(`Invalid inputChannelsRemainder ${_}.`);Z+=`
          let xValue = ${J.getByOffset("x_offset")};
          let wValue = ${G.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Z},Q=`
            let outputIndices = ${re.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${re.indicesGet("outputIndices",0)};
            let d1 = ${re.indicesGet("outputIndices",N)};
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
              let dyR = (${F}(dyRCorner) + ${F}(wR)) / ${F}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${F}(uniforms.Dy_shape[${K}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${F}(dyCCorner) + ${F}(wC)) / ${F}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${F}(uniforms.Dy_shape[${R}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${h?`
                var x_offset = ${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${G.indicesToOffset(`${G.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${w};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${h?4:c}) {
                  ${ne()}
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
    ${L.registerUniforms(Y).declareVariables(...ee,re)}
      ${L.mainStart()}
      ${L.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Q}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${w}${y}${h}${_}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:x}),getShaderSource:D}}}),_l,bl,wl,_a,Dh,$l,ba,vl,Uh,oy=P(()=>{sy(),Ft(),Tt(),_l=(e,t,r,i,a,n)=>(e-1)*t+r+(i-1)*a+1-n,bl=(e,t,r,i,a)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=n,r[a]=e-n):t==="SAME_LOWER"&&(r[i]=e-n,r[a]=n)},wl=(e,t,r,i,a,n,s,u,l,d)=>{let c=e.length-2,h=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let g=e[0],_=t[u?3:1]*a;for(let y=0,w=e.length-c-(u?1:0);y<c;++y,++w){let S=e[w],v=h?S*s[y]:d[y],b=_l(S,s[y],n[y],t[w],r[y],v);bl(b,i,n,y,y+c),h&&d.push(s[y]*(S-1)+l[y]+(t[w]-1)*r[y]+1-n[y]-n[y+c])}d.splice(0,0,g),d.splice(u?3:1,0,_)},_a=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,g)=>h*g,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;l=new Array(h).fill(1)}let d=e.strides.slice();if(d.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;d=new Array(h).fill(1)}wl(u,r,l,e.autoPad,e.group,a,d,i,s,n);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:a,outputPadding:s,outputShape:n,dilations:l,strides:d}),c},Dh=e=>{let t=zn(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,n=e.group??1,s=e.kernelShape,u=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,h=e.outputShape;return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,outputPadding:c,outputShape:h,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},$l=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,u)=>s+u,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,u)=>s+u,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,u)=>s+u,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,u)=>s+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},ba=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(Pe(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let n=[t[0],a];t.length===3&&n.push(t[2]),e.compute(Nh(n,r,i),{inputs:n})},vl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),n=[1].concat(n),a=[1].concat(a);let l=t.outputPadding;l=[0].concat(l);let d=_a({...t,pads:u,strides:s,dilations:n,kernelShape:a,outputPadding:l},i);ba(e,i,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Uh=(e,t)=>{if($l(e.inputs,t),e.inputs[0].dims.length===3)vl(e,t);else{let r=_a(t,e.inputs);ba(e,e.inputs,r)}}}),xl,Ph,Lh,uy=P(()=>{te(),ie(),Te(),ae(),xl=(e,t,r,i)=>{let a=O.size(t),n=t.length,s=M("input",e,n),u=H("output",e,n),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=O.normalizeAxis(l,n),c=h=>{let g=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,_=j("uniforms.input_shape","uniforms.axis",n),y=i.reverse?g+(i.exclusive?" + 1":""):"0",w=i.reverse?_:g+(i.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:d},...X(t,t)]}),getShaderSource:c}},Ph=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(xl(i,r,a,t),{inputs:[0]})},Lh=e=>{let t=e.exclusive===1,r=e.reverse===1;return fe({exclusive:t,reverse:r})}}),Sl,Tl,kl,qh,Wh,ly=P(()=>{te(),ie(),Te(),ae(),Sl=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Tl=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},kl=(e,t)=>{let r,i,a,n,s,u,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,i,a,n]=e.dims,s=c?[r,i,a,d,d,n/d**2]:[r,i,a,n/d**2,d,d],u=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,d,d,n/d**2,i,a]:[r,n/d**2,d,d,i,a],u=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(s),g=h.dims.length,_=e.dataType,y=M("a",_,g),w=H("output",_,g),S=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Tl(u,g,y,w)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let b=l?[r,i*d,a*d,n/d**2]:[r,n/d**2,i*d,a*d],E=O.size(b),T=h.dims,I=O.sortBasedOnPerm(T,u);return{outputs:[{dims:b,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(E/64)},programUniforms:[{type:12,data:E},...X(T,I)]}},getShaderSource:S}},qh=(e,t)=>{Sl(e.inputs),e.compute(kl(e.inputs[0],t))},Wh=e=>fe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Yr,fr,wa,El,Il,zl,Cl,$a,Al,Vh,Gh,dy=P(()=>{te(),ie(),Te(),ae(),Yr="[a-zA-Z]|\\.\\.\\.",fr="("+Yr+")+",wa="^"+fr+"$",El="("+fr+",)*"+fr,Il="^"+El+"$",zl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Cl=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Il)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,n)=>{let s=e[n].dims.slice();if(!a.match(RegExp(wa)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,s,n);this.lhs.push(u)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,n])=>n.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(fr)))throw new Error("Invalid RHS");i.match(RegExp(Yr,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(a);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,n=!1,s=[],u=0;if(!e.match(RegExp(wa))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Yr,"g")),d=new zl(i);return l?.forEach((c,h)=>{if(c==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let g=a-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(u,u+g),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<s.length;_++){let y=String.fromCharCode(48+_);d.addSymbol(y,h+_),this.addSymbol(y,r[u++],i)}}else d.addSymbol(c,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[u++],i)}),d}},$a=e=>e+"_max",Al=(e,t,r,i)=>{let a=e.map(d=>d.length).map((d,c)=>M(`input${c}`,t,d)),n=O.size(i),s=H("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],h="var prod = 1.0;",g="var sum = 0.0;",_="sum += prod;",y=[],w=[],S=[],v=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((T,I)=>{if(r.rhs.symbolToIndices.has(I)){let A=r.rhs.symbolToIndices.get(I)?.[0];A!==void 0&&r.lhs.forEach((C,x)=>{if(T.inputIndices.includes(x)){let D=C.symbolToIndices.get(I);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(L=>{c.push(`${a[x].indicesSet(`input${x}Indices`,L,s.indicesGet("outputIndices",A))}`)})}})}else r.lhs.forEach((A,C)=>{if(T.inputIndices.includes(C)){let x=A.symbolToIndices.get(I);if(x===void 0)throw new Error("Invalid symbol error");x.forEach(D=>{y.push(`${a[C].indicesSet(`input${C}Indices`,D,`${I}`)}`)}),v.push(`prod *= ${a[C].getByIndices(`input${C}Indices`)};`)}}),w.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${$a(I)}; ${I}++) {`),S.push("}")});let E=b?[...c,`let sum = ${a.map((T,I)=>T.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...c,g,...w,...y,h,...v,_,...S];return`
            ${d.registerUniforms(u.map(T=>({name:`${$a(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((T,I)=>`var input${I}Indices: ${a[I].type.indices};`).join(`
`)}
            ${E.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=u.filter(h=>r.symbolToInfo.has(h)).map(h=>({type:12,data:r.symbolToInfo.get(h)?.dimValue||0}));d.push({type:12,data:n});let c=e.map((h,g)=>[...X(h)]).reduce((h,g)=>h.concat(g),d);return c.push(...X(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}},getShaderSource:l}},Vh=(e,t)=>{let r=new Cl(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((n,s)=>n.dims);e.compute(Al(a,e.inputs[0].dataType,r,i))},Gh=e=>{let t=e.equation.replace(/\s+/g,"");return fe({equation:t})}}),Ol,va,Rl,Bl,Hh,py=P(()=>{te(),ie(),ae(),Ol=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},va=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},Rl=(e,t)=>e.length>t.length?va(e,t):va(t,e),Bl=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=Rl(t,r),a=e[0].dataType,n=a===9||O.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,u=n||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(O.size(i)/u),d=h=>{let g=M("input",a,t.length,s),_=H("output",a,i.length,u),y;if(a===9){let w=(S,v,b="")=>`
          let outputIndices${v} = ${_.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${g.broadcastedIndicesToOffset(`outputIndices${v}`,_)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${S}[${v}] = ${b}(${g.getByOffset(`index${v}`)}[component${v}]);
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
    ${y}`},c=[{type:12,data:l},...X(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${u}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},Hh=e=>{Ol(e.inputs),e.compute(Bl(e.inputs),{inputs:[0]})}}),Ml,Fh,cy=P(()=>{te(),ie(),ae(),In(),Ml=e=>{let t=e[0].dataType,r=O.size(e[0].dims),i=O.size(e[1].dims),a=i%4===0,n=s=>{let u=M("x",t,[1],4),l=M("bias",t,[1],4),d=H("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${l.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,g=a?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(u,l,d)}

    ${Ya(Re(t))}

    ${s.mainStart(tr)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",Qa("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/tr/4)}})}},Fh=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?ch(e):e.compute(Ml(e.inputs))}}),Nl,Dl,jh,Kh,hy=P(()=>{te(),ie(),Te(),ae(),Nl=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Dl=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=O.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(n,1,...i);let u=r[n],l=e[0].dataType===9?4:1,d=Math.ceil(O.size(s)/l),c=[{type:12,data:d},{type:6,data:u},{type:12,data:n},...X(e[0].dims,e[1].dims,s)],h=g=>{let _=M("data",e[0].dataType,e[0].dims.length,l),y=M("inputIndices",e[1].dataType,e[1].dims.length),w=H("output",e[0].dataType,s.length,l),S=b=>{let E=i.length,T=`var indicesIndices${b}  = ${y.type.indices}(0);`;for(let I=0;I<E;I++)T+=`${E>1?`indicesIndices${b}[${I}]`:`indicesIndices${b}`} = ${s.length>1?`outputIndices${b}[uniforms.axis + ${I}]`:`outputIndices${b}`};`;T+=`
          var idx${b} = ${y.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${_.type.indices};
        `;for(let I=0,A=0;I<a;I++)I===n?(T+=`${a>1?`dataIndices${b}[${I}]`:`dataIndices${b}`} = u32(idx${b});`,A+=E):(T+=`${a>1?`dataIndices${b}[${I}]`:`dataIndices${b}`} = ${s.length>1?`outputIndices${b}[${A}]`:`outputIndices${b}`};`,A++);return T},v;if(e[0].dataType===9){let b=(E,T,I="")=>`
          let outputIndices${T} = ${w.offsetToIndices(`outputOffset + ${T}u`)};
          ${S(T)};
          let offset${T} = ${_.indicesToOffset(`dataIndices${T}`)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${E}[${T}] = ${I}(${_.getByOffset(`index${T}`)}[component${T}]);
        `;v=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${_.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,y,w)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:h}},jh=e=>fe({axis:e.axis}),Kh=(e,t)=>{let r=e.inputs;Nl(r),e.compute(Dl(e.inputs,t))}}),Ul,Xh,Zh,fy=P(()=>{te(),ie(),ae(),Ul=(e,t,r,i,a,n,s,u,l)=>{let d=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:u},{type:12,data:l}],c=[n];d.push(...X(t.dims,c));let h=g=>{let _=M("indices_data",t.dataType,t.dims.length),y=H("input_slice_offsets_data",12,1,1),w=[_,y],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:d}),getShaderSource:h},{inputs:[t],outputs:[-1]})[0]},Xh=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,n=r[1].dims,s=n[n.length-1],u=O.sizeToDimension(n,n.length-1),l=O.sizeFromDimension(i,t.batchDims+s),d=O.sizeToDimension(i,t.batchDims),c=O.sizeFromDimension(i,t.batchDims),h=u/d,g=new Array(s),_=l;for(let T=0;T<s;++T)g[s-1-T]=_,_*=i[t.batchDims+s-1-T];let y=Ul(e,r[1],g,t.batchDims,i,u,h,c,s),w=t.batchDims+s;if(w>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=n.slice(0,-1).concat(i.slice(w)),v=O.size(S),b=[{type:12,data:v},{type:12,data:l},...X(r[0].dims,y.dims,S)],E=T=>{let I=M("data",r[0].dataType,r[0].dims.length),A=M("slice_offsets",12,y.dims.length),C=H("output",r[0].dataType,S.length);return`
          ${T.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,A,C)}
            ${T.mainStart()}
            ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:a}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:b}),getShaderSource:E},{inputs:[r[0],y]})},Zh=e=>({batchDims:e.batch_dims,cacheKey:""})}),Pl,Ll,Yh,Qh,my=P(()=>{te(),ie(),Te(),ae(),Pl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==a.dims.length||!a.dims.map((u,l)=>l===r?Math.ceil(u/i)===n.dims[l]:u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((u,l)=>u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Ll=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=O.normalizeAxis(t.gatherAxis,a),s=O.normalizeAxis(t.quantizeAxis,a),u=r.slice(0);u.splice(n,1,...i);let l=O.size(u),d=e[2].dataType,c=e[0].dataType===22,h=[{type:12,data:l},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...X(...e.map((_,y)=>_.dims),u)],g=_=>{let y=M("data",e[0].dataType,e[0].dims.length),w=M("inputIndices",e[1].dataType,e[1].dims.length),S=M("scales",e[2].dataType,e[2].dims.length),v=e.length>3?M("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=H("output",d,u.length),E=[y,w,S];v&&E.push(v);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Re(d)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,y)=>y!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,y)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:g}},Yh=(e,t)=>{let r=e.inputs;Pl(r,t),e.compute(Ll(e.inputs,t))},Qh=e=>fe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),ql,Wl,Jh,ef,gy=P(()=>{te(),ie(),Te(),ae(),ql=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Wl=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,n=e[1].dims,s=e[1].dataType,u=O.normalizeAxis(t.axis,a),l=r[u],d=n.slice(0),c=O.size(d),h=M("input",i,a),g=M("indicesInput",s,n.length),_=H("output",i,d.length),y=[{type:12,data:c},{type:6,data:l},{type:12,data:u}];return y.push(...X(r,n,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:y}),getShaderSource:w=>`
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
  }`}},Jh=e=>fe({axis:e.axis}),ef=(e,t)=>{let r=e.inputs;ql(r),e.compute(Wl(e.inputs,t))}}),Vl,Gl,tf,rf,yy=P(()=>{te(),ie(),ae(),Vl=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Gl=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,n,s]=Jp.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[a,n];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(n/l),c=Math.ceil(a/l),h=!0,g=O.size(u),_=[{type:12,data:h?d:g},{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(_.push(...X(e[2].dims)),y.push("rank")),_.push(...X(u));let w=v=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let E=t.alpha===1?"":"value *= uniforms.alpha;",T=M("a",e[0].dataType,e[0].dims),I=M("b",e[1].dataType,e[1].dims),A=T.type.value,C=null,x=[T,I];e.length===3&&(C=M("c",e[2].dataType,e[2].dims.length),x.push(C));let D=H("output",e[0].dataType,u.length);x.push(D);let L=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(L).declareVariables(...x)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${A}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${E}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",D)}; value += ${A}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=v=>{let b=M("a",e[0].dataType,e[0].dims),E=M("b",e[1].dataType,e[1].dims),T=null,I=[b,E];e.length===3&&(T=M("c",e[2].dataType,e[2].dims.length),I.push(T));let A=H("output",e[0].dataType,u.length);I.push(A);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],x="",D="";t.transA&&t.transB?(D=`
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
      `,x="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(D=`
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
      `,x="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(D=`
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
      `,x="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(D=`
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
      `,x="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let L=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(C).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${E.type.storage}, ${l}>, ${l}>;
  ${v.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${A.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${D}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${x}
      }
      workgroupBarrier();
    }

    ${L}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${A.type.value}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:_}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:w}},tf=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},rf=(e,t)=>{Vl(e.inputs),e.compute(Gl(e.inputs,t))}}),it,lt,Ct,At,Hl,Fl,jl,Kl,Xl,Zl,Yl,Ql,af,nf,_y=P(()=>{te(),ie(),Te(),ae(),[it,lt,Ct,At]=[0,1,2,3],Hl=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Fl=`
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
`,jl=e=>`
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
`,Kl=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Xl=e=>`
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
`,Zl=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${it}] = batch;
     indices[${lt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Ct}] = u32(r);
            indices[${At}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Ct}] = u32(clamp(r, 0, H - 1));
          indices[${At}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Ct}] = gs_reflect(r, border[1], border[3]);
          indices[${At}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Yl=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${it}], indices[${lt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${it}], indices[${lt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${it}], indices[${lt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${it}], indices[${lt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${it}], indices[${lt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${it}], indices[${lt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Ql=(e,t)=>{let r=M("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=M("grid",e[1].dataType,i.length,2),n=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(n=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[it,lt,Ct,At]=[0,3,1,2]);let s=H("output",e[0].dataType,n.length),u=r.type.value,l=O.size(n),d=[{type:12,data:l},...X(e[0].dims,i,n)],c=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${Fl}
  ${jl(u)}
  ${Kl(t)}
  ${Xl(t)}
  ${Zl(r,u,t)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Ct}]);
      let W_in = i32(uniforms.x_shape[${At}]);

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
      var grid_indices = vec3<u32>(indices[${it}], indices[${Ct}], indices[${At}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Yl(s,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let g=O.size(n);return{outputs:[{dims:n,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:d}},getShaderSource:c}},af=(e,t)=>{Hl(e.inputs),e.compute(Ql(e.inputs,t))},nf=e=>fe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ne,Jl,sf,xa,ed,vr,of,uf=P(()=>{te(),ie(),Te(),Sn(),En(),ae(),Tt(),Ne=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Jl=(e,t)=>{let r=e[0],i=Ne(e,1),a=Ne(e,2),n=Ne(e,3),s=Ne(e,4),u=Ne(e,5),l=Ne(e,6),d=Ne(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],h=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=h,y=0,w=0,S=Math.floor(g/t.numHeads);if(l&&d&&O.size(l.dims)&&O.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=l.dims[2],w=l.dims[2]}else if(l&&O.size(l.dims)||d&&O.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&O.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,_=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,_=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,_=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(n&&O.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=y+_,E=0;if(s&&O.size(s.dims)>0){E=8;let C=s.dims;throw C.length===1?C[0]===c?E=1:C[0]===3*c+2&&(E=3):C.length===2&&C[0]===c&&C[1]===b&&(E=5),E===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,I=g;if(a&&O.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(_!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=a.dims[2]}else{if(_!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=a.dims[1]*a.dims[3],T=!0}}let A=!1;if(s&&O.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(u&&O.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[2]!==h||u.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:h,pastSequenceLength:y,kvSequenceLength:_,totalSequenceLength:b,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:g,vHiddenSize:I,headSize:S,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:E,scale:t.scale,broadcastResPosBias:A,passPastInKv:T,qkvFormat:v}},sf=e=>fe({...e}),xa=fe({perm:[0,2,1,3]}),ed=(e,t,r,i,a,n,s)=>{let u=[i,a,n],l=O.size(u),d=[{type:12,data:l},{type:12,data:s},{type:12,data:n}],c=h=>{let g=H("qkv_with_bias",t.dataType,u),_=M("qkv",t.dataType,u),y=M("bias",r.dataType,u),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(w).declareVariables(_,y,g)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},vr=(e,t,r,i,a,n,s,u)=>{let l=n;if(s&&O.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=ed(e,n,s,t,i,r*a,u),l=l.reshape([t,i,r,a]),r===1||i===1?l:e.compute(Pe(l,xa.perm),{inputs:[l],outputs:[-1]})[0]}else return n.dims.length===3&&(l=n.reshape([t,i,r,a])),r===1||i===1?l:e.compute(Pe(l,xa.perm),{inputs:[l],outputs:[-1]})[0]},of=(e,t)=>{let r=Jl(e.inputs,t),i=e.inputs[0],a=Ne(e.inputs,1),n=Ne(e.inputs,2),s=Ne(e.inputs,3),u=Ne(e.inputs,4),l=Ne(e.inputs,5),d=Ne(e.inputs,6),c=Ne(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let h=a&&n&&a.dims.length===4&&n.dims.length===4,g=vr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(h)return kr(e,g,a,n,u,void 0,d,c,l,r);if(!a||!n)throw new Error("key and value must be provided");let _=vr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),y=vr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);kr(e,g,_,y,u,void 0,d,c,l,r)}}),td,rd,id,ad,an,lf,df,pf=P(()=>{te(),ie(),Te(),ae(),td=e=>{if(!e||e.length<1)throw new Error("too few inputs")},rd=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),fe({numOutputs:i,axis:t.axis,splitSizes:r})},id=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${j("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,ad=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},an=(e,t)=>{let r=e[0].dims,i=O.size(r),a=e[0].dataType,n=O.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),u=M("input",a,r.length),l=new Array(t.numOutputs),d=[],c=[],h=0,g=[{type:12,data:i}];for(let y=0;y<t.numOutputs;y++){h+=t.splitSizes[y],l[y]=h;let w=r.slice();w[n]=t.splitSizes[y],c.push(w),s[y]=H(`output${y}`,a,w.length),d.push({dims:c[y],dataType:e[0].dataType})}g.push({type:12,data:l},...X(r,...c));let _=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...s)}
  ${id(l.length)}
  ${ad(s)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${j("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:g})}},lf=(e,t)=>{td(e.inputs);let r=e.inputs.length===1?t:rd(e.inputs,t);e.compute(an(e.inputs,r),{inputs:[0]})},df=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return fe({axis:t,numOutputs:i,splitSizes:r})}}),nd,ci,cf,hf=P(()=>{te(),ie(),Te(),ae(),nd=(e,t)=>{let[r,i,a,n]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!O.areEqual(i.dims,[])&&!O.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!O.areEqual(a.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=a.dims[0],h=O.sizeFromDimension(r.dims,1)/d,g=u===0?a.dims[1]*2:h/s;if(u>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==a.dims[1]&&u/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`)},ci=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:n}=t,s=e[0].dims[0],u=O.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=u/l,c=e[2].dims[1],h=a===0?c*2:d/i,g=new Array(s,l,d/h,h-c),_=O.computeStrides(g),y=[{type:1,data:n},{type:12,data:g},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[u,d,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,h,l*h,1]}):[],...X(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=S=>{let v=M("input",e[0].dataType,e[0].dims.length),b=M("position_ids",e[1].dataType,e[1].dims.length),E=M("cos_cache",e[2].dataType,e[2].dims.length),T=M("sin_cache",e[3].dataType,e[3].dims.length),I=H("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${S.declareVariables(v,b,E,T,I)}

        ${S.mainStart(tr)}
          let half_rotary_emb_dim = uniforms.${E.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",H("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${E.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${E.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:fe({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(g)/tr)},programUniforms:y})}},cf=(e,t)=>{nd(e.inputs,t),e.compute(ci(e.inputs,t))}}),sd,od,Sa,ud,ff,by=P(()=>{Te(),te(),En(),uf(),pf(),Tt(),hf(),ae(),sd=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=d,g=0,_=!i||i.dims.length===0,y=Math.floor(_?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);_&&(c=y*t.numHeads);let w=n&&n.dims.length!==0,S=s&&s.dims.length!==0;if(w&&n.dims.length===4&&n.dims[0]===l&&n.dims[1]!==t.kvNumHeads&&n.dims[2]===t.kvNumHeads&&n.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&S){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=n.dims[2]}else if(w||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');h=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let b=0,E=!1,T=t.kvNumHeads?y*t.kvNumHeads:c;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(h!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=a.dims[2]}else{if(h!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=a.dims[1]*a.dims[3],E=!0}}let I=e.length>4?e[5]:void 0;if(I){if(I.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let A=I.dims.reduce((C,x)=>C*x,1);if(A!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${A}.`);for(let C=0;C<I.dims.length;C++)if(I.dims[C]!==1&&I.dims[C]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${C}] = ${I.dims[C]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:T,headSize:y,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:E,qkvFormat:v}},od=fe({perm:[0,2,1,3]}),Sa=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(Pe(i,od.perm),{inputs:[i],outputs:[-1]})[0]),i},ud=(e,t,r,i)=>{let a=7,n=["type","type"],s=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],d=c=>{let h=M("seq_lens",r.dataType,r.dims),g=M("total_seq_lens",i.dataType,i.dims),_=H("pos_ids",a,s),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:n},getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d}},ff=(e,t)=>{let r=sd(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,n=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,h=fe({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[g,_,y]=!a&&!n?e.compute(an([i],h),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,n],w,S;if(t.doRotary){let T=e.compute(ud(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],I=e.inputs[7],A=e.inputs[8],C=fe({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),x=[g,T,I,A],D=[-1];w=e.compute(ci(x,C),{inputs:x,outputs:D})[0],x.splice(0,1,_);let L=fe({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(ci(x,L),{inputs:x,outputs:D})[0]}let v=vr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?w:g,void 0,0),b=Sa(e,t.doRotary?S:_,r),E=Sa(e,y,r);kr(e,v,b,E,void 0,void 0,s,u,void 0,r,l,d)}}),Ta,ld,dd,mf,wy=P(()=>{te(),ie(),Tt(),ae(),Ta=(e,t,r,i,a,n,s,u)=>{let l=Se(n),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,h=a*s,g=64;h===1&&(g=256);let _=[a,s,n/l],y=[a,s,2],w=["rank","type","type"],S=[];S.push(...X(_,y));let v=b=>{let E=M("x",t.dataType,3,l),T=M("scale",r.dataType,r.dims),I=M("bias",i.dataType,i.dims),A=H("output",1,3,2),C=[E,T,I,A];return`
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
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${g}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:h},programUniforms:S}),getShaderSource:v},{inputs:[t,r,i],outputs:[-1]})[0]},ld=(e,t,r)=>{let i=t[0].dims,a=i,n=2,s=i[0],u=i[1],l=O.sizeFromDimension(i,n),d=Se(l),c=O.size(a)/d,h=Ta(e,t[0],t[1],t[2],s,l,u,r.epsilon),g=[s,u,l/d],_=[s,u],y=["type","none"],w=S=>{let v=M("x",t[0].dataType,g.length,d),b=M("scale_shift",1,_.length,2),E=H("output",t[0].dataType,g.length,d),T=[v,b,E];return`
  ${S.registerUniform("output_size","u32").declareVariables(...T)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${E.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${E.type.value}(scale_shift.x) + ${E.type.value}(scale_shift.y);
      ${E.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...X(g,_,g)]}),getShaderSource:w},{inputs:[t[0],h]})},dd=(e,t,r)=>{let i=t[0].dims,a=i,n=i[0],s=i[i.length-1],u=O.sizeFromDimension(i,1)/s,l=Se(s),d=O.size(a)/l,c=[{type:12,data:u},{type:12,data:Math.floor(s/l)}],h=["type","type"],g=!1,_=[0,i.length-1];for(let v=0;v<i.length-2;v++)g=g||i[v+1]!==1,_.push(v+1);g=g&&i[i.length-1]!==1;let y=g?e.compute(Pe(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(v,b)=>i[_[b]])),w=Ta(e,y,t[1],t[2],n,u,s,r.epsilon),S=v=>{let b=Ie(t[0].dataType),E=l===1?"vec2f":`mat${l}x2f`,T=C=>{let x=C===0?"x":"y",D=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${b}(${D}(scale.${x}))`;case 2:return`vec2<${b}>(${D}(scale[0].${x}, scale[1].${x}))`;case 4:return`vec4<${b}>(${D}(scale[0].${x}, scale[1].${x}, scale[2].${x}, scale[3].${x}))`;default:throw new Error(`Not supported compoents ${l}`)}},I=M("input",t[0].dataType,t[0].dims,l),A=H("output",t[0].dataType,a,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${E}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${A.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${T(0)}, ${T(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:S},{inputs:[t[0],w]})},mf=(e,t)=>{t.format==="NHWC"?dd(e,e.inputs,t):ld(e,e.inputs,t)}}),pd,cd,gf,$y=P(()=>{te(),ie(),ae(),pd=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},cd=(e,t,r)=>{let i=t.simplified,a=e[0].dims,n=e[1],s=!i&&e[2],u=a,l=O.normalizeAxis(t.axis,a.length),d=O.sizeToDimension(a,l),c=O.sizeFromDimension(a,l),h=O.size(n.dims),g=s?O.size(s.dims):0;if(h!==c||s&&g!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${g}`);let _=[];for(let I=0;I<a.length;++I)I<l?_.push(a[I]):_.push(1);let y=Se(c),w=["type","type"],S=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/y)},{type:1,data:t.epsilon}];s&&w.push("type");let v=r>1,b=r>2,E=I=>{let A=Ie(e[0].dataType),C=[M("x",e[0].dataType,e[0].dims,y),M("scale",n.dataType,n.dims,y)];s&&C.push(M("bias",s.dataType,s.dims,y)),C.push(H("output",e[0].dataType,u,y)),v&&C.push(H("mean_data_output",1,_)),b&&C.push(H("inv_std_output",1,_));let x=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(x).declareVariables(...C)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ka("f32",y)};
    var mean_square_vector = ${Ka("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Qt(A,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${St("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${St("mean_square_vector",y)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Qt(A,y,"x[j + offset]")};
      let f32scale = ${Qt(A,y,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Qt(A,y,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:u,dataType:e[0].dataType}];return v&&T.push({dims:_,dataType:1}),b&&T.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${i}`,inputDependencies:w},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:E}},gf=(e,t)=>{pd(e.inputs),e.compute(cd(e.inputs,t,e.outputCount))}}),hd,yf,vy=P(()=>{ie(),On(),Rn(),hd=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},yf=e=>{hd(e.inputs);let t=er.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(An(e.inputs,{activation:""},t));else{let a=t[t.length-2],n=O.size(e.inputs[0].dims.slice(0,-2)),s=O.size(e.inputs[1].dims.slice(0,-2));if(n!==1&&a===1&&s===1){let u=e.inputs[0].reshape([1,n,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,n,r],c=[u,l];e.compute(pi(c,{activation:""},t,d),{inputs:c})}else e.compute(pi(e.inputs,{activation:""},t))}}}),fd,md,gd,_f,bf,xy=P(()=>{te(),ie(),Te(),ae(),fd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!O.areEqual(s.dims,[t.n,a,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(O.size(u)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(O.size(l)!==d)throw new Error("zeroPoints input size error.")}},md=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=O.size(u),d=e[1].dims[2]/4,c=e[0].dataType,h=Se(t.k),g=Se(d),_=Se(s),y=u.concat([a,s]),w=a>1&&s/_%2===0?2:1,S=O.size(y)/_/w,v=64,b=[],E=[l,a,n/h],T=O.convertShape(e[1].dims).slice();T.splice(-1,1,d/g),b.push(...X(E)),b.push(...X(T)),b.push(...X(e[2].dims)),e.length===4&&b.push(...X(O.convertShape(e[3].dims)));let I=[l,a,s/_];b.push(...X(I));let A=C=>{let x=E.length,D=M("a",e[0].dataType,x,h),L=M("b",12,T.length,g),Y=M("scales",e[2].dataType,e[2].dims.length),F=[D,L,Y],K=e.length===4?M("zero_points",12,e[3].dims.length):void 0;K&&F.push(K);let R=I.length,N=H("output",e[0].dataType,R,_),G=Ie(e[0].dataType),J=(()=>{switch(h){case 1:return`array<${G}, 8>`;case 2:return`mat4x2<${G}>`;case 4:return`mat2x4<${G}>`;default:throw new Error(`${h}-component is not supported.`)}})(),ee=Math.floor(32/t.bits),re=Math.floor(ee/8),ne=()=>{let Z="";for(let V=0;V<re;V++){let Ee=V*t.bits*4,Ae=Ee+t.bits;Z+=`
          // reuse a data (pass ${V})
            var input_offset${V>0?V:""} = ${V===0?D.indicesToOffset(`${D.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${V>0?V:""}: ${J};
            for (var j${V>0?V:""}: u32 = 0; j${V>0?V:""} < ${8/h}; j${V>0?V:""}++) {
              a_data${V>0?V:""}[j${V>0?V:""}] = ${D.getByOffset(`input_offset${V>0?V:""}`)};
              input_offset${V>0?V:""}++;
            }
          `;for(let ve=0;ve<_*w;ve++)Z+=`
            b_value = ${g===1?`b${ve}_data`:`b${ve}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${V*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${Ee}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Ae}u) & b_mask);`}
            b_quantized_values = ${J}(${Array.from({length:4},(Oe,ge)=>`${G}(b_value_lower[${ge}]), ${G}(b_value_upper[${ge}])`).join(", ")});
            b_dequantized_values = ${h===1?`${J}(${Array.from({length:8},(Oe,ge)=>`(b_quantized_values[${ge}] - ${K?`zero_point${ve}`:"zero_point"}) * scale${ve}`).join(", ")});`:`(b_quantized_values - ${J}(${Array(8).fill(`${K?`zero_point${ve}`:"zero_point"}`).join(",")})) * scale${ve};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(ve/_)}]${_>1?`[${ve%_}]`:""} += ${Array.from({length:8/h},(Oe,ge)=>`${h===1?`a_data${V>0?V:""}[${ge}] * b_dequantized_values[${ge}]`:`dot(a_data${V>0?V:""}[${ge}], b_dequantized_values[${ge}])`}`).join(" + ")};
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
            let zero_point = ${G}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let V=0;V<_*w;V++)Z+=`
            let scale${V} = ${Y.getByOffset("col_index * nBlocksPerCol + block")};
            ${K?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${V} = ${G}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Z},Q=()=>{let Z=`col_index = col * ${_};`;for(let V=0;V<_*w;V++)Z+=`
            let b${V}_data = ${L.getByIndices(`${L.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Z+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${J};
            var b_dequantized_values: ${J};`,Z};return`
        var<workgroup> workgroup_shared: array<${N.type.value}, ${w*v}>;
        ${C.declareVariables(...F,N)}
        ${C.mainStart([v,1,1])}
          let output_indices = ${N.offsetToIndices(`(global_idx / ${v}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/h};
            ${U()}
            for (var word: u32 = 0; word < ${d}; word += ${g}) {
              ${Q()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${ne()}
                word_offset += ${ee/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${N.type.value} = ${N.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${N.setByIndices(`${N.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${h};${g};${_};${w};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:c}],dispatchGroup:{x:S},programUniforms:b}),getShaderSource:A}},gd=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=O.size(u),d=e[1].dims[2]/4,c=e[0].dataType,h=Se(t.k),g=Se(d),_=u.concat([a,s]),y=128,w=s%8===0?8:s%4===0?4:1,S=y/w,v=Math.floor(32/t.bits),b=S*g*v,E=b/h,T=b/t.blockSize,I=O.size(_)/w,A=[],C=[l,a,n/h],x=O.convertShape(e[1].dims).slice();x.splice(-1,1,d/g),A.push(...X(C)),A.push(...X(x)),A.push(...X(e[2].dims)),e.length===4&&A.push(...X(O.convertShape(e[3].dims)));let D=[l,a,s];A.push(...X(D));let L=Y=>{let F=C.length,K=M("a",e[0].dataType,F,h),R=M("b",12,x.length,g),N=M("scales",e[2].dataType,e[2].dims.length),G=[K,R,N],J=e.length===4?M("zero_points",12,e[3].dims.length):void 0;J&&G.push(J);let ee=D.length,re=H("output",e[0].dataType,ee),ne=Ie(e[0].dataType),U=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${ne}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ne}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ne}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ne}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${K.type.value}, ${E}>;
        var<workgroup> inter_results: array<array<${re.type.value}, ${S}>, ${w}>;
        ${Y.declareVariables(...G,re)}
        ${Y.mainStart([S,w,1])}
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
            ${J?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${J.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ne}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ne}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${N.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${R.getByIndices(`${R.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/h};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let Q=Math.floor(v/8),Z="";for(let V=0;V<Q;V++){let Ee=V*t.bits*4,Ae=Ee+t.bits;Z+=`
              ${U()}
              {${t.bits===2?`
                let half_word = b_value >> ${V*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${Ee}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Ae}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ne}>(${Array.from({length:4},(ve,Oe)=>`${ne}(b_value_lower[${Oe}]), ${ne}(b_value_upper[${Oe}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ne}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ve,Oe)=>`${`dot(a_data${Oe}, b_dequantized_values[${Oe}])`}`).join(" + ")};
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${h};${g};${S};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:I},programUniforms:A}),getShaderSource:L}},_f=(e,t)=>{fd(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(gd(e.inputs,t)):e.compute(md(e.inputs,t))},bf=e=>fe(e)}),yd,_d,bd,wd,$d,vd,xd,Sd,wf,Sy=P(()=>{te(),ie(),ae(),yd=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},_d=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${j("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${j("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${j("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},bd=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${j("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${j("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${j("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${j("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},wd=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${j("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${j("uniforms.x_shape",a,t)})) {
                  k = i32(${j("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${j("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},$d=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${j("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${j("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${j("uniforms.x_shape",a,t)})) {
                  k -= i32(${j("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${j("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},vd=(e,t,r)=>{switch(r.mode){case 0:return _d(e,t,r.pads.length);case 1:return bd(e,t,r.pads.length);case 2:return wd(e,t,r.pads.length);case 3:return $d(e,t,r.pads.length);default:throw new Error("Invalid mode")}},xd=(e,t)=>{let r=O.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=O.size(r),n=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...X(e[0].dims,r));let u=["rank"],l=d=>{let c=H("output",e[0].dataType,r.length),h=M("x",e[0].dataType,i.length),g=h.type.value,_=vd(c,i.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:s?g:"f32"}),`
            ${d.registerUniforms(y).declareVariables(h,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(r)/64)},programUniforms:n}),getShaderSource:l}},Sd=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,n=new Int32Array(2*a).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)n[Number(u[l])]=Number(r[l]),n[Number(u[l])+a]=Number(r[l+u.length])}else r.forEach((u,l)=>n[Number(l)]=Number(u));let s=[];return n.forEach(u=>s.push(u)),{mode:t.mode,value:i,pads:s}}else return t},wf=(e,t)=>{yd(e.inputs);let r=Sd(e.inputs,t);e.compute(xd(e.inputs,r),{inputs:[0]})}}),mr,ka,Ea,Ia,za,Td,kd,Ca,Aa,$f,vf,Oa,xf,Sf,Ra,Tf,kf,Ef,If,Ty=P(()=>{Ve(),te(),ie(),ae(),mr=e=>{if(_e.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},ka=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),l=n?t.dilations.slice():[],d=t.pads.slice();li.adjustPoolAttributes(r,a,s,u,l,d);let c=li.computePoolOutputShape(r,a,u,l,s,d,t.autoPad),h=Object.assign({},t);n?Object.assign(h,{kernelShape:s,strides:u,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:s,strides:u,pads:d,cacheKey:t.cacheKey});let g=c.slice();return g.push(g.splice(1,1)[0]),[h,i?g:c]},Ea=(e,t)=>{let r=t.format==="NHWC",i=O.size(e),a=O.size(t.kernelShape),n=[{type:12,data:i},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],h=!!(d+c);n.push({type:12,data:u},{type:12,data:l},{type:12,data:d},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];g=!!(w+S),n.push({type:12,data:_},{type:12,data:y},{type:12,data:w},{type:12,data:S}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,h,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=O.computeStrides(t.kernelShape);n.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[n,s,!!l,!1,!1]}},Ia=(e,t,r,i,a,n,s,u,l,d,c,h)=>{let g=a.format==="NHWC",_=t.type.value,y=H("output",t.type.tensor,i);if(a.kernelShape.length<=2){let w="",S="",v="",b=r-(g?2:1);if(c?w=`
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
                `,v=`
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
              ${v}
              ${s}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=a.kernelShape.length,S=a.pads.length,v="";return d?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:v=`
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
                  offsets[j] = offset / ${j("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${j("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${j("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${j("uniforms.pads","j - 2u",S)};
                  ${v}
              }
              ${s}

              output[global_idx] = value;
            }`}},za=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Td=e=>`${za(e)};${e.countIncludePad}`,kd=e=>`${za(e)};${e.storageOrder};${e.dilations}`,Ca=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Aa=(e,t,r,i)=>{let[a,n]=ka(t,i,r),s=M("x",t.dataType,t.dims.length),u=s.type.value,l="value += x_val;",d="";a.countIncludePad?d+=`value /= ${u}(uniforms.kernelSize);`:d+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[c,h,g,_,y]=Ea(n,a);c.push(...X(t.dims,n));let w=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${g};${_};${y}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(n)/64)},programUniforms:c}),getShaderSource:S=>Ia(S,s,t.dims.length,n.length,a,l,d,0,h,g,_,y)}},$f=e=>{let t=e.count_include_pad!==0,r=Ca(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Td(i)}},vf=(e,t)=>{mr(e.inputs),e.compute(Aa("AveragePool",e.inputs[0],!1,t))},Oa={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},xf=e=>{let t=e.format;return{format:t,...Oa,cacheKey:t}},Sf=(e,t)=>{mr(e.inputs),e.compute(Aa("GlobalAveragePool",e.inputs[0],!0,t))},Ra=(e,t,r,i)=>{let[a,n]=ka(t,i,r),s=`
      value = max(x_val, value);
    `,u="",l=M("x",t.dataType,t.dims.length),d=["rank"],[c,h,g,_,y]=Ea(n,a);return c.push(...X(t.dims,n)),{name:e,shaderCache:{hint:`${i.cacheKey};${g};${_};${y}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(n)/64)},programUniforms:c}),getShaderSource:w=>Ia(w,l,t.dims.length,n.length,a,s,u,t.dataType===10?-65504:-1e5,h,g,_,y)}},Tf=(e,t)=>{mr(e.inputs),e.compute(Ra("MaxPool",e.inputs[0],!1,t))},kf=e=>{let t=e.storage_order,r=e.dilations,i=Ca(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:kd(a)}},Ef=e=>{let t=e.format;return{format:t,...Oa,cacheKey:t}},If=(e,t)=>{mr(e.inputs),e.compute(Ra("GlobalMaxPool",e.inputs[0],!0,t))}}),Ed,Id,zf,Cf,ky=P(()=>{te(),ie(),Te(),ae(),Ed=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,n)=>n===t.axis||a===e[0].dims[n]).reduce((a,n)=>a&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Id=(e,t)=>{let r=O.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,n=e[0].dims,s=e[1].dataType,u=O.size(n),l=i===3||i===2,d=l?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,h=e.length>2?e[2]:void 0,g=h?l?[Math.ceil(O.size(h.dims)/4)]:h.dims:void 0,_=c.length===0||c.length===1&&c[0]===1,y=_===!1&&c.length===1,w=Se(u),S=_&&(!l||w===4),v=S?w:1,b=S&&!l?w:1,E=M("input",l?12:i,d.length,b),T=M("scale",s,c.length),I=h?M("zero_point",l?12:i,g.length):void 0,A=H("output",s,n.length,v),C=[E,T];I&&C.push(I);let x=[d,c];h&&x.push(g);let D=[{type:12,data:u/v},{type:12,data:r},{type:12,data:t.blockSize},...X(...x,n)],L=Y=>{let F=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Y.registerUniforms(F).declareVariables(...C,A)}
      ${Y.mainStart()}
          ${Y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${A.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${E.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${E.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${T.getByOffset("0")}`:y?`
            let scale_index = ${A.indicesGet("output_indices","uniforms.axis")};
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
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${T.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${l?a?"i32":"u32":E.type.value}(0);`};
      // Compute and write output
      ${A.setByOffset("global_idx",`${A.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:L,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(u/v/64),y:1,z:1},programUniforms:D})}},zf=(e,t)=>{Ed(e.inputs,t),e.compute(Id(e.inputs,t))},Cf=e=>fe({axis:e.axis,blockSize:e.blockSize})}),zd,Cd,Af,Ey=P(()=>{Ve(),te(),ae(),zd=(e,t,r)=>{let i=e===t,a=e<t&&r<0,n=e>t&&r>0;if(i||a||n)throw new Error("Range these inputs' contents are invalid.")},Cd=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),n=[a],s=a,u=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...X(n)],l=d=>{let c=H("output",i,n.length),h=c.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${d.registerUniforms(g).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},Af=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),_e.webgpu.validateInputContent&&zd(t,r,i),e.compute(Cd(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),Ad,Od,Of,Rf,Iy=P(()=>{te(),ie(),Te(),ae(),Ad=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
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
                ${a}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${n}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Od=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,n=1,s=Math.ceil(O.sizeToDimension(i,i.length-1)/n),u=i[i.length-1],l=O.sizeFromDimension(r,u),d=[{type:12,data:s},{type:12,data:u},{type:12,data:l},...X(e[1].dims,e[2].dims,a)],c=h=>{let g=M("indices",e[1].dataType,e[1].dims.length),_=M("updates",e[2].dataType,e[2].dims.length,n),y=t.reduction!=="none"&&t.reduction!==""?sc("output",e[0].dataType,a.length):H("output",e[0].dataType,a.length,n);return`
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
    ${Ad(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:c}},Of=e=>fe({reduction:e.reduction}),Rf=(e,t)=>{e.compute(Od(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Rd,Bd,Md,Ba,Nd,Dd,Ud,Pd,Ld,qd,Wd,Vd,Ma,Gd,Hd,Fd,jd,Kd,Bf,Mf,zy=P(()=>{te(),ie(),Te(),ae(),Rd=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Bd=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,n)=>i[a]=e[n]),i},Md=(e,t,r,i,a,n)=>{let[s,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>n.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Rd(i,t),t.axes.length>0&&Bd(i,t.axes,d).forEach((c,h)=>i[h]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>a.push(Number(c))),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Ba=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,Nd=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Ba("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Ba("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Dd=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Ud=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((n,s)=>{i[n]=a[s],i[s+r]=a[t.length+s]}),i):a},Pd=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(n=>a.push(n)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((n,s)=>a[n]=r[s])}else r.forEach(n=>a.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((n,s)=>Math.round(n*t[s]))}return a},Ld=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=i),r.axes.forEach(n=>a[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),a.forEach((n,s)=>a[s]=Math.round(n*t[s]))),a},qd=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${j("uniforms.scales","i",i)};
        var roi_low = ${j("uniforms.roi","i",a)};
        var roi_hi = ${j("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${j("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${j("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Wd=(e,t,r,i,a,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${j("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${j("uniforms.roi","i",n)};
          var roi_hi = ${j("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${j("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${j("uniforms.output_shape","i",i.length)};
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
    }`,Vd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${j("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ma=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Gd=(e,t,r,i,a)=>{let[n,s,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${Ma(e,l,n,2)}
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
    }`},Hd=(e,t,r,i,a,n,s,u,l,d)=>{let c=r.length===2,[h,g]=c?[0,1]:[2,3],_=e.type.value,y=w=>{let S=w===h?"row":"col";return`
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
    `},Fd=(e,t,r,i,a)=>{let[n,s,u,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${Ma(e,d,n,3)}
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
    }`},jd=(e,t,r,i,a,n)=>{let s=e.dims,u=Ud(n,t.axes,s.length),l=Pd(s,i,a,t.axes),d=i.slice();i.length===0&&(d=s.map((b,E)=>b===0?1:l[E]/b),t.keepAspectRatioPolicy!=="stretch"&&(l=Ld(s,d,t)));let c=H("output",e.dataType,l.length),h=M("input",e.dataType,s.length),g=O.size(l),_=s.length===l.length&&s.every((b,E)=>b===l[E]),y=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,S=h.type.value,v=b=>`
      ${_?"":`
      ${Nd(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Vd(h,s)};
              ${Dd(t.nearestMode,r,S)};
              ${Wd(h,c,s,l,d.length,u.length,y)};
              `;case"linear":return`
              ${qd(c,s,l,d.length,u.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Gd(h,c,s,y,w)}`;if(s.length===3||s.length===5)return`${Fd(h,c,s,y,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Hd(h,c,s,l,d,u,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
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
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${a.length>0?a:""}|${u.length>0?u:""}|${_}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:d},{type:1,data:u},...X(s,l)]})}},Kd=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Bf=(e,t)=>{let r=[],i=[],a=[],n=Kd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Md(e.inputs,t,n,r,i,a),e.compute(jd(e.inputs[0],t,n,r,i,a),{inputs:[0]})},Mf=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return fe({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),Xd,Zd,Nf,Cy=P(()=>{te(),ie(),ae(),Xd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Zd=(e,t,r,i)=>{let a=t.simplified,n=e[0].dims,s=O.size(n),u=n,l=s,d=n.slice(-1)[0],c=i?n.slice(0,-1).concat(1):[],h=!a&&e.length>3,g=e.length>4,_=i&&r>1,y=i&&r>2,w=r>3,S=64,v=Se(d),b=[{type:12,data:l},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],E=I=>{let A=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[M("x",e[0].dataType,e[0].dims,v),M("skip",e[1].dataType,e[1].dims,v),M("gamma",e[2].dataType,e[2].dims,v)];h&&C.push(M("beta",e[3].dataType,e[3].dims,v)),g&&C.push(M("bias",e[4].dataType,e[4].dims,v)),C.push(H("output",e[0].dataType,u,v)),_&&C.push(H("mean_output",1,c)),y&&C.push(H("inv_std_output",1,c)),w&&C.push(H("input_skip_bias_sum",e[0].dataType,u,v));let x=Ie(e[0].dataType),D=Ie(1,v);return`

      ${I.registerUniforms(A).declareVariables(...C)}
      var<workgroup> sum_shared : array<${D}, ${S}>;
      var<workgroup> sum_squared_shared : array<${D}, ${S}>;

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
          let bias_value = ${g?"bias[offset1d + i]":x+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Qt(x,v,"value")};
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
        let mean = ${St("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${St("square_sum",v)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${x}(mean)`}) *
            ${x}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:u,dataType:e[0].dataType}];return r>1&&T.push({dims:c,dataType:1}),r>2&&T.push({dims:c,dataType:1}),r>3&&T.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${_};${y};${w}`,inputDependencies:e.map((I,A)=>"type")},getShaderSource:E,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:b})}},Nf=(e,t)=>{Xd(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Zd(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Yd,gr,Qd,Na,Jd,ep,Df,Uf,Ay=P(()=>{te(),ie(),Te(),ae(),Yd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},gr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Qd=(e,t)=>{if(e.length>1){let r=gr(e,1),i=gr(e,2),a=gr(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),fe({starts:r,ends:i,axes:a})}else return t},Na=(e,t,r,i,a)=>{let n=e;return e<0&&(n+=r[i[t]]),a[t]<0?Math.max(0,Math.min(n,r[i[t]]-1)):Math.max(0,Math.min(n,r[i[t]]))},Jd=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${j("uniforms.input_shape","i",r.length)};
            let steps_i = ${j("uniforms.steps","i",r.length)};
            let signs_i = ${j("uniforms.signs","i",r.length)};
            let starts_i = ${j("uniforms.starts","i",r.length)};
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
      }`,ep=(e,t)=>{let r=e[0].dims,i=O.size(r),a=t.axes.length>0?O.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=gr(e,4);n.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(a.length).fill(1));let s=t.starts.map((v,b)=>Na(v,b,r,a,n)),u=t.ends.map((v,b)=>Na(v,b,r,a,n));if(a.length!==s.length||a.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let v=0;v<r.length;++v)a.includes(v)||(s.splice(v,0,0),u.splice(v,0,r[v]),n.splice(v,0,1));let l=n.map(v=>Math.sign(v));n.forEach((v,b,E)=>{if(v<0){let T=(u[b]-s[b])/v,I=s[b],A=I+T*n[b];s[b]=A,u[b]=I,E[b]=-v}});let d=r.slice(0);a.forEach((v,b)=>{d[v]=Math.ceil((u[v]-s[v])/n[v])});let c={dims:d,dataType:e[0].dataType},h=H("output",e[0].dataType,d.length),g=M("input",e[0].dataType,e[0].dims.length),_=O.size(d),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:n.length}],w=[{type:12,data:_},{type:12,data:s},{type:6,data:l},{type:12,data:n},...X(e[0].dims,d)],S=v=>`
      ${v.registerUniforms(y).declareVariables(g,h)}
        ${Jd(g,h,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:w})}},Df=(e,t)=>{Yd(e.inputs,t);let r=Qd(e.inputs,t);e.compute(ep(e.inputs,r),{inputs:[0]})},Uf=e=>{let t=e.starts,r=e.ends,i=e.axes;return fe({starts:t,ends:r,axes:i})}}),tp,rp,Pf,Lf,Oy=P(()=>{te(),ie(),Te(),Tt(),ae(),tp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},rp=(e,t)=>{let r=e.inputs[0],i=r.dims,a=O.size(i),n=i.length,s=O.normalizeAxis(t.axis,n),u=s<i.length-1,l,d=[];u?(d=Array.from({length:n},(C,x)=>x),d[s]=n-1,d[n-1]=s,l=e.compute(Pe(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,h=c[n-1],g=a/h,_=Se(h),y=h/_,w=64;g===1&&(w=256);let S=(C,x)=>x===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:x===2?`max(${C}.x, ${C}.y)`:x===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,v=M("x",l.dataType,l.dims,_),b=H("result",l.dataType,l.dims,_),E=v.type.value,T=Ie(l.dataType)==="f32"?`var threadMax = ${E}(-3.4028234663852886e+38f);`:`var threadMax = ${E}(-65504.0h);`,I=C=>`
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
      ${C.registerUniform("packedCols","i32").declareVariables(v,b)}
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
      }`,A=e.compute({name:"Softmax",shaderCache:{hint:`${_};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:y}]}),getShaderSource:I},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(Pe(A,d),{inputs:[A]})},Pf=(e,t)=>{tp(e.inputs),rp(e,t)},Lf=e=>fe({axis:e.axis})}),Da,ip,ap,np,qf,Ry=P(()=>{te(),ie(),ae(),Da=e=>Array.from(e.getBigInt64Array(),Number),ip=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Da(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},ap=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},np=(e,t)=>{let r=e[0].dims,i=t??Da(e[1]),a=ap(r,i),n=O.size(a),s=e[0].dataType,u=M("input",s,r.length),l=H("output",s,a.length),d=c=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...X(e[0].dims,a)]}),getShaderSource:d}},qf=e=>{ip(e.inputs),e.compute(np(e.inputs),{inputs:[0]})}}),sp,op,Wf,By=P(()=>{te(),ie(),ae(),sp=(e,t,r,i,a)=>{let n=H("output_data",a,r.length,4),s=M("a_data",t[1].dataType,t[1].dims.length,4),u=M("b_data",t[2].dataType,t[2].dims.length,4),l=M("c_data",t[0].dataType,t[0].dims.length,4),d,c=(h,g,_)=>`select(${g}, ${h}, ${_})`;if(!i)d=n.setByOffset("global_idx",c(s.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let h=(g,_,y="")=>{let w=`a_data[index_a${_}][component_a${_}]`,S=`b_data[index_b${_}][component_b${_}]`,v=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
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
            ${g}[${_}] = ${y}(${c(w,S,v)});
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
      }`},op=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,n=!(O.areEqual(t,r)&&O.areEqual(r,i)),s=t,u=O.size(t);if(n){let d=er.calcShape(er.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,u=O.size(s)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>sp(d,e,s,n,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...X(i,t,r,s)]})}},Wf=e=>{e.compute(op(e.inputs))}}),Vf,My=P(()=>{X0(),En(),Z0(),Y0(),Q0(),J0(),ey(),ny(),oy(),uy(),ly(),dy(),py(),cy(),hy(),fy(),my(),gy(),yy(),_y(),by(),wy(),$y(),vy(),xy(),uf(),Sy(),Ty(),ky(),Ey(),Iy(),kn(),zy(),hf(),Cy(),Ay(),Oy(),pf(),Ry(),Tt(),In(),By(),Vf=new Map([["Abs",[Mc]],["Acos",[Nc]],["Acosh",[Dc]],["Add",[yh]],["ArgMax",[Ac,Za]],["ArgMin",[Cc,Za]],["Asin",[Uc]],["Asinh",[Pc]],["Atan",[Lc]],["Atanh",[qc]],["Attention",[Oc]],["AveragePool",[vf,$f]],["BatchNormalization",[Rc]],["BiasAdd",[Bc]],["BiasSplitGelu",[gh]],["Cast",[Vc,Wc]],["Ceil",[Hc]],["Clip",[Gc]],["Concat",[Eh,Ih]],["Conv",[rn,tn]],["ConvTranspose",[Uh,Dh]],["Cos",[Fc]],["Cosh",[jc]],["CumSum",[Ph,Lh]],["DepthToSpace",[qh,Wh]],["DequantizeLinear",[zf,Cf]],["Div",[_h]],["Einsum",[Vh,Gh]],["Elu",[Kc,$r]],["Equal",[bh]],["Erf",[Xc]],["Exp",[Zc]],["Expand",[Hh]],["FastGelu",[Fh]],["Floor",[Yc]],["FusedConv",[rn,tn]],["Gather",[Kh,jh]],["GatherElements",[ef,Jh]],["GatherBlockQuantized",[Yh,Qh]],["GatherND",[Xh,Zh]],["Gelu",[Qc]],["Gemm",[rf,tf]],["GlobalAveragePool",[Sf,xf]],["GlobalMaxPool",[If,Ef]],["Greater",[xh]],["GreaterOrEqual",[Th]],["GridSample",[af,nf]],["GroupQueryAttention",[ff]],["HardSigmoid",[sh,nh]],["InstanceNormalization",[mf]],["LayerNormalization",[gf]],["LeakyRelu",[Jc,$r]],["Less",[Sh]],["LessOrEqual",[kh]],["Log",[fh]],["MatMul",[yf]],["MatMulNBits",[_f,bf]],["MaxPool",[Tf,kf]],["Mul",[wh]],["MultiHeadAttention",[of,sf]],["Neg",[th]],["Not",[eh]],["Pad",[wf]],["Pow",[$h]],["QuickGelu",[mh,$r]],["Range",[Af]],["Reciprocal",[rh]],["ReduceMin",[Tc]],["ReduceMean",[wc]],["ReduceMax",[Sc]],["ReduceSum",[Ec]],["ReduceProd",[kc]],["ReduceL1",[$c]],["ReduceL2",[vc]],["ReduceLogSum",[zc]],["ReduceLogSumExp",[xc]],["ReduceSumSquare",[Ic]],["Relu",[ih]],["Resize",[Bf,Mf]],["RotaryEmbedding",[cf]],["ScatterND",[Rf,Of]],["Sigmoid",[ah]],["Sin",[oh]],["Sinh",[uh]],["Slice",[Df,Uf]],["SkipLayerNormalization",[Nf]],["Split",[lf,df]],["Sqrt",[lh]],["Softmax",[Pf,Lf]],["Sub",[vh]],["Tan",[dh]],["Tanh",[ph]],["ThresholdedRelu",[hh,$r]],["Tile",[qf]],["Transpose",[uc,lc]],["Where",[Wf]]])}),Gf,Ny=P(()=>{Ve(),mt(),ae(),Gf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){st(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let d of t)u.push({binding:u.length,resource:{buffer:d.buffer}});for(let d of r)u.push({binding:u.length,resource:{buffer:d.buffer}});a&&u.push({binding:u.length,resource:a});let l=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Qe(e.programInfo.name)}dispose(){}build(e,t){st(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let a=oc(t,this.backend.device.limits),n=e.getShaderSource(a),s=`${i.join(`
`)}
${a.additionalImplementations}
${n}`,u=r.createShaderModule({code:s,label:e.name});pe("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return Qe(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let n=t*r*i,s=Math.ceil(Math.sqrt(n));if(s>a){if(s=Math.ceil(Math.cbrt(n)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Hf={};ar(Hf,{WebGpuBackend:()=>Ff});var up,lp,dp,Ff,Dy=P(()=>{Ve(),te(),mt(),rc(),j0(),My(),Ny(),up=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let n=e[i].dims.length;r.push(`${a};${n}`);break}case"dims":{let n=e[i].dims.join(",");r.push(`${a};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},lp=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${up(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},dp=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Ff=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=u=>t.features.has(u)&&r.push(u)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(i);let n=t,s=t.info??(typeof n.requestAdapterInfo=="function"?await n.requestAdapterInfo():void 0);this.adapterInfo=new dp(s),this.gpuDataManager=nc(this),this.programManager=new Gf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,vn(e.logLevel,!!e.debug),this.device.onuncapturederror=u=>{u.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${u.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;st(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],n=a.kernelId,s=this.kernels.get(n),u=s.kernelType,l=s.kernelName,d=a.programName,c=a.inputTensorViews,h=a.outputTensorViews,g=t[i*2],_=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let y=Number(g-this.queryTimeBase),w=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(S=>({dims:S.dims,dataType:pt(S.dataType)})),outputsMetadata:h.map(S=>({dims:S.dims,dataType:pt(S.dataType)})),kernelId:n,kernelType:u,kernelName:l,programName:d,startTime:y,endTime:w});else{let S="";c.forEach((b,E)=>{S+=`input[${E}]: [${b.dims}] | ${pt(b.dataType)}, `});let v="";h.forEach((b,E)=>{v+=`output[${E}]: [${b.dims}] | ${pt(b.dataType)}, `}),console.log(`[profiling] kernel "${n}|${u}|${l}|${d}" ${S}${v}start time: ${y} ns, execution time: ${w-y} ns`)}si("GPU",`${d}::${g}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),Qe()}run(e,t,r,i,a,n){st(e.name);let s=[];for(let b=0;b<t.length;++b){let E=t[b].data;if(E===0)continue;let T=this.gpuDataManager.get(E);if(!T)throw new Error(`no GPU data for input: ${E}`);s.push(T)}let{outputs:u,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?u.map((b,E)=>E):r;if(c.length!==u.length)throw new Error(`Output size ${c.length} must be equal to ${u.length}.`);let h=[],g=[];for(let b=0;b<u.length;++b){if(!Number.isInteger(c[b])||c[b]<-3||c[b]>=n)throw new Error(`Invalid output index: ${c[b]}`);if(c[b]===-3)continue;let E=c[b]===-1,T=c[b]===-2,I=E||T?a(u[b].dataType,u[b].dims):i(c[b],u[b].dataType,u[b].dims);if(h.push(I),I.data===0)continue;let A=this.gpuDataManager.get(I.data);if(!A)throw new Error(`no GPU data for output: ${I.data}`);if(E&&this.temporaryData.push(A),T){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(A)}g.push(A)}if(s.length!==t.length||g.length!==h.length){if(g.length===0)return Qe(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(d){let b=0,E=[];d.forEach(C=>{let x=typeof C.data=="number"?[C.data]:C.data;if(x.length===0)return;let D=C.type===10?2:4,L,Y;C.type===10?(Y=x.length>4?16:x.length>2?8:x.length*D,L=x.length>4?16:D*x.length):(Y=x.length<=2?x.length*D:16,L=16),b=Math.ceil(b/Y)*Y,E.push(b);let F=C.type===10?8:4;b+=x.length>4?Math.ceil(x.length/F)*L:x.length*D});let T=16;b=Math.ceil(b/T)*T;let I=new ArrayBuffer(b);d.forEach((C,x)=>{let D=E[x],L=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(I,D,L.length).set(L);else if(C.type===12)new Uint32Array(I,D,L.length).set(L);else if(C.type===10)new Uint16Array(I,D,L.length).set(L);else if(C.type===1)new Float32Array(I,D,L.length).set(L);else throw new Error(`Unsupported uniform type: ${pt(C.type)}`)});let A=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(A.buffer,0,I,0,b),this.gpuDataManager.release(A.id),_={offset:0,size:b,buffer:A.buffer}}let y=this.programManager.normalizeDispatchGroupSize(l),w=y[1]===1&&y[2]===1,S=lp(e,t,w),v=this.programManager.getArtifact(S);if(v||(v=this.programManager.build(e,y),this.programManager.setArtifact(S,v),pe("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let b=0;b<d.length;b++){let E=d[b],T=E.type,I=typeof E.data=="number"?1:E.data.length,[A,C]=v.uniformVariablesInfo[b];if(T!==A||I!==C)throw new Error(`Uniform variable ${b} mismatch: expect type ${A} with size ${C}, got type ${T} with size ${I} in program "${v.programInfo.name}".`)}}if(pe("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run(v,s,g,y,_),Qe(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=Vf.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,n=i.kernelName,s=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),pe("info",()=>`[WebGPU] Start to run kernel "[${a}] ${n}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${n}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${a}] ${n}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let n=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,n);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await ja(this,e,t);return xn(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){pe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){pe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){pe("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),n=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(n.computePipeline),a.setBindGroup(0,n.bindGroup),a.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),jf={};ar(jf,{init:()=>Kf});var Qr,pp,Kf,Uy=P(()=>{te(),mt(),ie(),F0(),Qr=class Xf{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new Xf(this.module,this.dataType,this.data,t)}},pp=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,n=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,n));let s=Number(e.getValue(i*a++,n));this.outputCount=Number(e.getValue(i*a++,n)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,n));let u=[];for(let l=0;l<s;l++){let d=Number(e.getValue(i*a++,n)),c=Number(e.getValue(i*a++,"*")),h=Number(e.getValue(i*a++,n)),g=[];for(let _=0;_<h;_++)g.push(Number(e.getValue(i*a++,n)));u.push(new Qr(e,d,c,g))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],a=(s,u,l)=>new Qr(this.module,u,this.output(s,l),l),n=(s,u)=>{let l=Nt(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new Qr(this.module,s,d,u)};return this.backend.run(e,r,i,a,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",n=this.module.stackAlloc((1+t.length)*i);this.module.setValue(n,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(n+i*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,n)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Kf=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=(Dy(),Tr(Hf)).WebGpuBackend,s=new n;await s.initialize(r,i),a("webgpu",[s,u=>s.alloc(Number(u)),u=>s.free(u),(u,l,d,c=!1)=>{if(c)pe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(u),Number(l));else{pe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let h=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(d));s.upload(Number(l),h)}},async(u,l,d)=>{pe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${d}`),await s.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(u,l,d)=>s.createKernel(u,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>s.releaseKernel(u),(u,l,d,c)=>{pe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${u}, contextDataOffset=${l}`);let h=new pp(t,s,Number(l));return s.computeKernel(Number(u),h,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let n=new ac(r);a("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,u,l,d,c)=>n.ensureTensor(s,u,l,d,c),(s,u)=>{n.uploadTensor(s,u)},async(s,u)=>n.downloadTensor(s,u),(s,u)=>n.registerMLContext(s,u),!!r.trace])}}}),cp,Bn,Mn,vt,hp,Ua,hi,Nn,Dn,Pa,Un,Pn,Ln,Zf=P(()=>{Ve(),V0(),G0(),te(),Ht(),_n(),Qp(),cp=(e,t)=>{be()._OrtInit(e,t)!==0&&me("Can't initialize onnxruntime.")},Bn=async e=>{cp(e.wasm.numThreads,ui(e.logLevel))},Mn=async(e,t)=>{be().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:a}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(Uy(),Tr(jf)).init;t==="webgpu"&&await i("webgpu",be(),e,r),t==="webnn"&&await i("webnn",be(),e)}},vt=new Map,hp=e=>{let t=be(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&me("Can't get session input/output count.");let n=i===4?"i32":"i64";return[Number(t.getValue(a,n)),Number(t.getValue(a+i,n))]}finally{t.stackRestore(r)}},Ua=(e,t)=>{let r=be(),i=r.stackSave(),a=0;try{let n=r.PTR_SIZE,s=r.stackAlloc(2*n);r._OrtGetInputOutputMetadata(e,t,s,s+n)!==0&&me("Can't get session input/output metadata.");let u=Number(r.getValue(s,"*"));a=Number(r.getValue(s+n,"*"));let l=r.HEAP32[a/4];if(l===0)return[u,0];let d=r.HEAPU32[a/4+1],c=[];for(let h=0;h<d;h++){let g=Number(r.getValue(a+8+h*n,"*"));c.push(g!==0?r.UTF8ToString(g):Number(r.getValue(a+8+(h+d)*n,"*")))}return[u,l,c]}finally{r.stackRestore(i),a!==0&&r._OrtFree(a)}},hi=e=>{let t=be(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Nn=async(e,t)=>{let r,i,a=be();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=hi(e);let n=0,s=0,u=0,l=[],d=[],c=[];try{if([s,l]=await Yp(t),t?.externalData&&a.mountExternalData){let T=[];for(let I of t.externalData){let A=typeof I=="string"?I:I.path;T.push($n(typeof I=="string"?I:I.data).then(C=>{a.mountExternalData(A,C)}))}await Promise.all(T)}for(let T of t?.executionProviders??[])if((typeof T=="string"?T:T.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof T!="string"){let I=T,A=I?.context,C=I?.gpuDevice,x=I?.deviceType,D=I?.powerPreference;A?a.currentContext=A:C?a.currentContext=await a.webnnCreateMLContext(C):a.currentContext=await a.webnnCreateMLContext({deviceType:x,powerPreference:D})}else a.currentContext=await a.webnnCreateMLContext();break}n=await a._OrtCreateSession(r,i,s),a.webgpuOnCreateSession?.(n),n===0&&me("Can't create a session."),a.jsepOnCreateSession?.(),a.currentContext&&(a.webnnRegisterMLContext(n,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[h,g]=hp(n),_=!!t?.enableGraphCapture,y=[],w=[],S=[],v=[],b=[];for(let T=0;T<h;T++){let[I,A,C]=Ua(n,T);I===0&&me("Can't get an input name."),d.push(I);let x=a.UTF8ToString(I);y.push(x),S.push(A===0?{name:x,isTensor:!1}:{name:x,isTensor:!0,type:pt(A),shape:C})}for(let T=0;T<g;T++){let[I,A,C]=Ua(n,T+h);I===0&&me("Can't get an output name."),c.push(I);let x=a.UTF8ToString(I);w.push(x),v.push(A===0?{name:x,isTensor:!1}:{name:x,isTensor:!0,type:pt(A),shape:C});{if(_&&t?.preferredOutputLocation===void 0){b.push("gpu-buffer");continue}let D=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[x]??"cpu",L=a.webnnIsGraphOutput;if(D==="cpu"&&L&&L(n,x)){b.push("ml-tensor-cpu-output");continue}if(D!=="cpu"&&D!=="cpu-pinned"&&D!=="gpu-buffer"&&D!=="ml-tensor")throw new Error(`Not supported preferred output location: ${D}.`);if(_&&D!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${D}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);b.push(D)}}let E=null;return b.some(T=>T==="gpu-buffer"||T==="ml-tensor"||T==="ml-tensor-cpu-output")&&(u=a._OrtCreateBinding(n),u===0&&me("Can't create IO binding."),E={handle:u,outputPreferredLocations:b,outputPreferredLocationsEncoded:b.map(T=>T==="ml-tensor-cpu-output"?"ml-tensor":T).map(T=>Ha(T))}),vt.set(n,[n,d,c,E,_,!1]),[n,y,w,S,v]}catch(h){throw d.forEach(g=>a._OrtFree(g)),c.forEach(g=>a._OrtFree(g)),u!==0&&a._OrtReleaseBinding(u)!==0&&me("Can't release IO binding."),n!==0&&a._OrtReleaseSession(n)!==0&&me("Can't release session."),h}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&me("Can't release session options."),l.forEach(h=>a._free(h)),a.unmountExternalData?.()}},Dn=e=>{let t=be(),r=vt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,n,s,u]=r;s&&(u&&t._OrtClearBoundOutputs(s.handle)!==0&&me("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&me("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),a.forEach(l=>t._OrtFree(l)),n.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(i)!==0&&me("Can't release session."),vt.delete(e)},Pa=async(e,t,r,i,a,n,s=!1)=>{if(!e){t.push(0);return}let u=be(),l=u.PTR_SIZE,d=e[0],c=e[1],h=e[3],g=h,_,y;if(d==="string"&&(h==="gpu-buffer"||h==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&h!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(h==="gpu-buffer"){let v=e[2].gpuBuffer;y=Nt(Mt(d),c);{let b=u.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');_=b(i,n,v,y)}}else if(h==="ml-tensor"){let v=e[2].mlTensor;y=Nt(Mt(d),c);let b=u.webnnRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');_=b(i,v,Mt(d),c)}else{let v=e[2];if(Array.isArray(v)){y=l*v.length,_=u._malloc(y),r.push(_);for(let b=0;b<v.length;b++){if(typeof v[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);u.setValue(_+b*l,Ze(v[b],r),"*")}}else{let b=u.webnnIsGraphInput,E=u.webnnIsGraphOutput;if(d!=="string"&&b&&E){let T=u.UTF8ToString(a);if(b(i,T)||E(i,T)){let I=Mt(d);y=Nt(I,c),g="ml-tensor";let A=u.webnnCreateTemporaryTensor,C=u.webnnUploadTensor;if(!A||!C)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let x=await A(i,I,c);C(x,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),_=x}else y=v.byteLength,_=u._malloc(y),r.push(_),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,y),_)}else y=v.byteLength,_=u._malloc(y),r.push(_),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,y),_)}}let w=u.stackSave(),S=u.stackAlloc(4*c.length);try{c.forEach((b,E)=>u.setValue(S+E*l,b,l===4?"i32":"i64"));let v=u._OrtCreateTensor(Mt(d),_,y,S,c.length,Ha(g));v===0&&me(`Can't create tensor for input/output. session=${i}, index=${n}.`),t.push(v)}finally{u.stackRestore(w)}},Un=async(e,t,r,i,a,n)=>{let s=be(),u=s.PTR_SIZE,l=vt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],h=l[2],g=l[3],_=l[4],y=l[5],w=t.length,S=i.length,v=0,b=[],E=[],T=[],I=[],A=[],C=s.stackSave(),x=s.stackAlloc(w*u),D=s.stackAlloc(w*u),L=s.stackAlloc(S*u),Y=s.stackAlloc(S*u);try{[v,b]=Zp(n),Dt("wasm prepareInputOutputTensor");for(let N=0;N<w;N++)await Pa(r[N],E,I,e,c[t[N]],t[N],_);for(let N=0;N<S;N++)await Pa(a[N],T,I,e,h[i[N]],w+i[N],_);Ut("wasm prepareInputOutputTensor");for(let N=0;N<w;N++)s.setValue(x+N*u,E[N],"*"),s.setValue(D+N*u,c[t[N]],"*");for(let N=0;N<S;N++)s.setValue(L+N*u,T[N],"*"),s.setValue(Y+N*u,h[i[N]],"*");if(g&&!y){let{handle:N,outputPreferredLocations:G,outputPreferredLocationsEncoded:J}=g;if(c.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${c.length}).`);Dt("wasm bindInputsOutputs");for(let ee=0;ee<w;ee++){let re=t[ee];await s._OrtBindInput(N,c[re],E[ee])!==0&&me(`Can't bind input[${ee}] for session=${e}.`)}for(let ee=0;ee<S;ee++){let re=i[ee];a[ee]?.[3]?(A.push(T[ee]),s._OrtBindOutput(N,h[re],T[ee],0)!==0&&me(`Can't bind pre-allocated output[${ee}] for session=${e}.`)):s._OrtBindOutput(N,h[re],0,J[re])!==0&&me(`Can't bind output[${ee}] to ${G[ee]} for session=${e}.`)}Ut("wasm bindInputsOutputs"),vt.set(e,[d,c,h,g,_,!0])}s.jsepOnRunStart?.(d),s.webnnOnRunStart?.(d);let F;g?F=await s._OrtRunWithBinding(d,g.handle,S,L,v):F=await s._OrtRun(d,D,x,w,Y,S,L,v),F!==0&&me("failed to call OrtRun().");let K=[],R=[];Dt("wasm ProcessOutputTensor");for(let N=0;N<S;N++){let G=Number(s.getValue(L+N*u,"*"));if(G===T[N]||A.includes(T[N])){K.push(a[N]),G!==T[N]&&s._OrtReleaseTensor(G)!==0&&me("Can't release tensor.");continue}let J=s.stackSave(),ee=s.stackAlloc(4*u),re=!1,ne,U=0;try{s._OrtGetTensorData(G,ee,ee+u,ee+2*u,ee+3*u)!==0&&me(`Can't access output tensor data on index ${N}.`);let Q=u===4?"i32":"i64",Z=Number(s.getValue(ee,Q));U=s.getValue(ee+u,"*");let V=s.getValue(ee+u*2,"*"),Ee=Number(s.getValue(ee+u*3,Q)),Ae=[];for(let ge=0;ge<Ee;ge++)Ae.push(Number(s.getValue(V+ge*u,Q)));s._OrtFree(V)!==0&&me("Can't free memory for tensor dims.");let ve=Ae.reduce((ge,$e)=>ge*$e,1);ne=pt(Z);let Oe=g?.outputPreferredLocations[i[N]];if(ne==="string"){if(Oe==="gpu-buffer"||Oe==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ge=[];for(let $e=0;$e<ve;$e++){let Me=s.getValue(U+$e*u,"*"),zr=s.getValue(U+($e+1)*u,"*"),Je=$e===ve-1?void 0:zr-Me;ge.push(s.UTF8ToString(Me,Je))}K.push([ne,Ae,ge,"cpu"])}else if(Oe==="gpu-buffer"&&ve>0){let ge=s.jsepGetBuffer;if(!ge)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let $e=ge(U),Me=Nt(Z,ve);if(Me===void 0||!bn(ne))throw new Error(`Unsupported data type: ${ne}`);re=!0,K.push([ne,Ae,{gpuBuffer:$e,download:s.jsepCreateDownloader($e,Me,ne),dispose:()=>{s._OrtReleaseTensor(G)!==0&&me("Can't release tensor.")}},"gpu-buffer"])}else if(Oe==="ml-tensor"&&ve>0){let ge=s.webnnEnsureTensor,$e=s.webnnIsGraphInputOutputTypeSupported;if(!ge||!$e)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Nt(Z,ve)===void 0||!wn(ne))throw new Error(`Unsupported data type: ${ne}`);if(!$e(e,ne,!1))throw new Error(`preferredLocation "ml-tensor" for ${ne} output is not supported by current WebNN Context.`);let Me=await ge(e,U,Z,Ae,!1);re=!0,K.push([ne,Ae,{mlTensor:Me,download:s.webnnCreateMLTensorDownloader(U,ne),dispose:()=>{s.webnnReleaseTensorId(U),s._OrtReleaseTensor(G)}},"ml-tensor"])}else if(Oe==="ml-tensor-cpu-output"&&ve>0){let ge=s.webnnCreateMLTensorDownloader(U,ne)(),$e=K.length;re=!0,R.push((async()=>{let Me=[$e,await ge];return s.webnnReleaseTensorId(U),s._OrtReleaseTensor(G),Me})()),K.push([ne,Ae,[],"cpu"])}else{let ge=yi(ne),$e=new ge(ve);new Uint8Array($e.buffer,$e.byteOffset,$e.byteLength).set(s.HEAPU8.subarray(U,U+$e.byteLength)),K.push([ne,Ae,$e,"cpu"])}}finally{s.stackRestore(J),ne==="string"&&U&&s._free(U),re||s._OrtReleaseTensor(G)}}g&&!_&&(s._OrtClearBoundOutputs(g.handle)!==0&&me("Can't clear bound outputs."),vt.set(e,[d,c,h,g,_,!1]));for(let[N,G]of await Promise.all(R))K[N][2]=G;return Ut("wasm ProcessOutputTensor"),K}finally{s.webnnOnRunEnd?.(d),s.stackRestore(C),E.forEach(F=>s._OrtReleaseTensor(F)),T.forEach(F=>s._OrtReleaseTensor(F)),I.forEach(F=>s._free(F)),v!==0&&s._OrtReleaseRunOptions(v),b.forEach(F=>s._free(F))}},Pn=e=>{let t=be(),r=vt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&me("Can't get an profile file name."),t._OrtFree(a)},Ln=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),xt,qe,Xt,yr,_r,Jr,La,ei,Ot,Rt,fp,Yf,Qf,Jf,em,tm,rm,im,am=P(()=>{Ve(),Zf(),Ht(),gn(),xt=()=>!!_e.wasm.proxy&&typeof document<"u",Xt=!1,yr=!1,_r=!1,ei=new Map,Ot=(e,t)=>{let r=ei.get(e);r?r.push(t):ei.set(e,[t])},Rt=()=>{if(Xt||!yr||_r||!qe)throw new Error("worker not ready")},fp=e=>{switch(e.data.type){case"init-wasm":Xt=!1,e.data.err?(_r=!0,La[1](e.data.err)):(yr=!0,La[0]()),Jr&&(URL.revokeObjectURL(Jr),Jr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=ei.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Yf=async()=>{if(!yr){if(Xt)throw new Error("multiple calls to 'initWasm()' detected.");if(_r)throw new Error("previous call to 'initWasm()' failed.");if(Xt=!0,xt())return new Promise((e,t)=>{qe?.terminate(),Kp().then(([r,i])=>{try{qe=i,qe.onerror=n=>t(n),qe.onmessage=fp,La=[e,t];let a={type:"init-wasm",in:_e};!a.in.wasm.wasmPaths&&(r||Ga)&&(a.in.wasm.wasmPaths={wasm:new URL("/dither-feed/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href}),qe.postMessage(a),Jr=r}catch(a){t(a)}},t)});try{await yn(_e.wasm),await Bn(_e),yr=!0}catch(e){throw _r=!0,e}finally{Xt=!1}}},Qf=async e=>{if(xt())return Rt(),new Promise((t,r)=>{Ot("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:_e}};qe.postMessage(i)});await Mn(_e,e)},Jf=async e=>xt()?(Rt(),new Promise((t,r)=>{Ot("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};qe.postMessage(i,[e.buffer])})):hi(e),em=async(e,t)=>{if(xt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Rt(),new Promise((r,i)=>{Ot("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),qe.postMessage(a,n)})}else return Nn(e,t)},tm=async e=>{if(xt())return Rt(),new Promise((t,r)=>{Ot("release",[t,r]);let i={type:"release",in:e};qe.postMessage(i)});Dn(e)},rm=async(e,t,r,i,a,n)=>{if(xt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Rt(),new Promise((s,u)=>{Ot("run",[s,u]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:n}};qe.postMessage(d,Ln(l))})}else return Un(e,t,r,i,a,n)},im=async e=>{if(xt())return Rt(),new Promise((t,r)=>{Ot("end-profiling",[t,r]);let i={type:"end-profiling",in:e};qe.postMessage(i)});Pn(e)}}),qa,mp,nm,Py=P(()=>{Ve(),am(),te(),mn(),Qp(),qa=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},mp=e=>{switch(e[3]){case"cpu":return new Ye(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!bn(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Ye.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!wn(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return Ye.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},nm=class{async fetchModelAndCopyToWasmMemory(e){return Jf(await $n(e))}async loadModel(e,t){st();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await em(r,t),Qe()}async dispose(){return tm(this.sessionId)}async run(e,t,r){st();let i=[],a=[];Object.entries(e).forEach(h=>{let g=h[0],_=h[1],y=this.inputNames.indexOf(g);if(y===-1)throw new Error(`invalid input '${g}'`);i.push(_),a.push(y)});let n=[],s=[];Object.entries(t).forEach(h=>{let g=h[0],_=h[1],y=this.outputNames.indexOf(g);if(y===-1)throw new Error(`invalid output '${g}'`);n.push(_),s.push(y)});let u=i.map((h,g)=>qa(h,()=>`input "${this.inputNames[a[g]]}"`)),l=n.map((h,g)=>h?qa(h,()=>`output "${this.outputNames[s[g]]}"`):null),d=await rm(this.sessionId,a,u,s,l,r),c={};for(let h=0;h<d.length;h++)c[this.outputNames[s[h]]]=n[h]??mp(d[h]);return Qe(),c}startProfiling(){}endProfiling(){im(this.sessionId)}}}),sm={};ar(sm,{OnnxruntimeWebAssemblyBackend:()=>sn,initializeFlags:()=>nn,wasmBackend:()=>om});var nn,sn,om,Ly=P(()=>{Ve(),am(),Py(),nn=()=>{(typeof _e.wasm.initTimeout!="number"||_e.wasm.initTimeout<0)&&(_e.wasm.initTimeout=0);let e=_e.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),_e.wasm.simd=!1),typeof _e.wasm.proxy!="boolean"&&(_e.wasm.proxy=!1),typeof _e.wasm.trace!="boolean"&&(_e.wasm.trace=!1),typeof _e.wasm.numThreads!="number"||!Number.isInteger(_e.wasm.numThreads)||_e.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)_e.wasm.numThreads=1;else{let t=typeof navigator>"u"?T0("node:os").cpus().length:navigator.hardwareConcurrency;_e.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},sn=class{async init(e){nn(),await Yf(),await Qf(e)}async createInferenceSessionHandler(e,t){let r=new nm;return await r.loadModel(e,t),r}},om=new sn});Ve();Ve();Ve();var qy="1.27.0";{let e=(Ly(),Tr(sm)).wasmBackend;Yt("webgpu",e,5),Yt("webnn",e,5),Yt("cpu",e,10),Yt("wasm",e,10)}Object.defineProperty(_e.versions,"web",{value:qy,enumerable:!0});const Wy="/dither-feed/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",ue=24,ft=ue*ue,ct=4,Vy=1260,gp=1350,Gy=.065,Hy=64,um=["fauna","botanical","terrain","geometry","textile"],yp={fauna:{code:"FAU",symmetry:"vertical",minDensity:.38,sectorWeights:[40,20,20,15,5],palette:[[0,0,0],[85,0,0],[170,0,85],[255,85,0],[255,170,85],[255,255,170],[255,255,255]]},botanical:{code:"BOT",symmetry:"vertical",minDensity:.42,sectorWeights:[15,30,35,10,10],palette:[[0,0,0],[0,85,0],[0,170,85],[85,170,0],[170,255,85],[255,255,170],[255,255,255]]},terrain:{code:"TER",symmetry:"horizontal",minDensity:.4,sectorWeights:[25,20,15,25,15],palette:[[0,0,0],[0,0,85],[0,85,170],[0,170,255],[85,170,255],[170,255,255],[255,255,255]]},geometry:{code:"GEO",symmetry:"vertical",minDensity:.46,sectorWeights:[15,10,30,15,30],palette:[[0,0,0],[85,85,85],[170,170,170],[255,255,255],[255,85,0],[255,170,0],[255,255,85]]},textile:{code:"TXT",symmetry:"horizontal",minDensity:.48,sectorWeights:[15,40,25,5,15],palette:[[0,0,0],[85,0,85],[170,0,170],[255,0,170],[255,85,170],[255,170,255],[255,255,255]]}},We=4,rr=ue/We,qn=0,Er=1,Jt=2,ht=3,Vt=4,Fy=Math.floor(Math.random()*um.length),jy=3,Ky=220,Xy=window.matchMedia("(max-width: 640px)").matches?2:3,at=document.querySelector("#terminal-scroll"),fi=document.querySelector("#feed"),Zy=document.querySelector("#feed-sentinel"),ai=document.querySelector("#boot-screen"),on=document.querySelector("#boot-status"),_p=document.querySelector("#boot-progress-bar"),Wa=document.querySelector("#terminal-live-state"),bp=document.querySelector("#terminal-live-count"),wp=document.querySelector("#terminal-live-rate"),Wn=window.matchMedia("(prefers-reduced-motion: reduce)");let _i,Be,lm,Pt=!1,ir=!1,bi=!1,nt=0,Sr=null,Va=[];const un=new Set;let dm,pm,dt=7,ln=0;const Yy=performance.now(),ti=["mounting local model","reading latent bank","initializing wasm inference","warming pixel buffer"];function Qy(e){return e==="synth"?"SYNTH":e==="error"?"ERR":e==="ready"?"READY":"BOOT"}function Gt(e){if(!Wa||!bp||!wp)return;const t=e||(ir?"error":Pt?"synth":_i?"ready":"boot"),r=Math.max(1,(performance.now()-Yy)/1e3),i=ln/r;Wa.textContent=Qy(t),Wa.dataset.state=t,bp.textContent="GEN "+String(ln).padStart(4,"0"),wp.textContent="RATE "+i.toFixed(1)+"/S"}function Jy(){Gt("boot"),window.setInterval(()=>Gt(),700)}function ni(e,t=dt){on&&(on.textContent=e),_p&&(dt=Math.max(0,Math.min(100,t)),_p.style.transform=`scaleX(${dt/100})`)}function e_(){if(!ai)return;let e=0;ni(ti[e],dt),dm=window.setInterval(()=>{e=(e+1)%ti.length,ni(ti[e],dt)},520),pm=window.setInterval(()=>{dt=Math.min(91,dt+(dt<52?3.2:.8)),ni(on?.textContent||ti[e],dt)},140)}function cm(e=!1){ai&&(window.clearInterval(dm),window.clearInterval(pm),ni(e?"model unavailable":"feed ready",100),Gt(e?"error":"ready"),document.body.classList.remove("is-booting"),ai.dataset.state="leaving",window.setTimeout(()=>ai.remove(),Wn.matches?0:420))}e_();Jy();const t_=`
  attribute vec2 position;
  varying vec2 textureUv;

  void main() {
    textureUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,r_=`
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
`,wi=[[0,48,12,60,3,51,15,63],[32,16,44,28,35,19,47,31],[8,56,4,52,11,59,7,55],[40,24,36,20,43,27,39,23],[2,50,14,62,1,49,13,61],[34,18,46,30,33,17,45,29],[10,58,6,54,9,57,5,53],[42,26,38,22,41,25,37,21]];function $p(e){const t=e%ue,r=Math.floor(e/ue);return t+r+wi[r%8][t%8]/64}function vp(e){return Array.from({length:ft},(t,r)=>{const i=r%ue,a=Math.floor(r/ue),n=e==="vertical"?a*ue+(ue-1-i):(ue-1-a)*ue+i;return r>n?null:{position:r,mirror:n,score:Math.min($p(r),$p(n))}}).filter(Boolean).sort((t,r)=>t.score-r.score||t.position-r.position)}const mi={vertical:vp("vertical"),horizontal:vp("horizontal")};function i_(e){const t=Array.from({length:ft},(i,a)=>a);let r=e+1>>>0;for(let i=t.length-1;i>0;i-=1){r=r*1664525+1013904223>>>0;const a=r%(i+1);[t[i],t[a]]=[t[a],t[i]]}return t}function xp(e,t){if(!e.ok)throw new Error("Unable to load "+t+" ("+e.status+")");return e}function a_(){let e=0,t=0;for(;e===0;)e=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)}function n_(e){Va.push(e),un.add(e),Va.length>Hy&&un.delete(Va.shift())}function s_(){return Be?.styles?.length?Be.styles:um}function Ir(e){return yp[e]||yp.geometry}function o_(e){let t=(e^2654435769)>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function u_(e,t){const r=t.reduce((a,n)=>a+n,0);let i=e()*r;for(let a=0;a<t.length;a+=1)if(i-=t[a],i<=0)return a;return qn}function l_(e,t,r,i){const a=o_(r+5370206),n=Ir(e).sectorWeights,s=Array.from({length:We*We},()=>null);let u=0;for(let l=0;l<We;l+=1)for(let d=0;d<We;d+=1){const c=t==="vertical"?We-1-d:d,h=t==="horizontal"?We-1-l:l,g=l*We+d,_=h*We+c;if(g>_)continue;let y=u_(a,n);const w=l>0&&l<We-1&&d>0&&d<We-1;y===ht&&(w||u>=2)&&(y=qn),y===ht&&(u+=1);const S=1+Math.floor(a()*Math.max(1,i-2)),v=Math.floor(a()*4),b={mode:y,tone:S,phase:v};s[g]=b,s[_]=b}return s}function gi(e){const t=e%ue,r=Math.floor(e/ue);return Math.floor(r/rr)*We+Math.floor(t/rr)}function d_(e){const t=s_(),r=Math.floor(e/ct),i=e%ct;return t[(i+r*2+Fy)%t.length]}function p_(e){const t=Be.styleRanges?.[e],r=t?t[0]:0,i=t?t[1]:Be.perClass,a=Be.quality,n=a?Array.from({length:Math.max(1,i-r)},(d,c)=>r+c).filter(d=>a[d]>=.4):[],s=n.length?n:Array.from({length:Math.max(1,i-r)},(d,c)=>r+c);let u=s[Math.floor(Math.random()*s.length)],l=0;for(;un.has(u)&&l<12;)u=s[Math.floor(Math.random()*s.length)],l+=1;return n_(u),u}function dn(e){const t=document.createElement("canvas");return t.width=ue,t.height=ue,e&&(t.className=e),t.setAttribute("aria-hidden","true"),t}function c_(e,t){const r=e.getContext("2d"),i=r.createImageData(ue,ue);for(let a=0;a<ft;a+=1){const n=a%ue,s=Math.floor(a/ue),l=14+(n*17+s*31+t*13+(n+s)%5*7)%20,d=a*4;i.data[d]=l,i.data[d+1]=l,i.data[d+2]=l,i.data[d+3]=255}r.putImageData(i,0,0)}function h_(e,t,r){const i=document.createElement("div");i.className="tile-readout",i.setAttribute("aria-hidden","true"),[["ID",String(e).padStart(4,"0")],["PX","24×24"],["SYM",t==="vertical"?"V":"H"],["MOT",Ir(r).code],["SEC","4×4"],["PAL","64"],["BYR","8×8"]].forEach(([s,u])=>{const l=document.createElement("span");l.className="tile-readout-item",l.textContent=s+" "+u,i.append(l)});const n=document.createElement("span");return n.className="tile-readout-item tile-readout-code",n.textContent="LAT ---",i.append(n),{readout:i,code:n}}function f_(e){const t=document.createElement("div");t.className="pattern-tile",t.setAttribute("role","img"),t.setAttribute("tabindex","0"),t.setAttribute("aria-label","Generating pixel pattern"),t.dataset.state="generating";const r=d_(e),i=Ir(r).symmetry;t.dataset.symmetry=i,t.dataset.style=r;const a=dn("skeleton-canvas"),n=dn("output-canvas"),s=h_(e,i,r);return c_(a,e),t.append(a,n,s.readout),{element:t,skeleton:a,output:n,context:n.getContext("2d"),readout:s.readout,readoutCode:s.code,seed:e,style:r,symmetry:i,revealOrder:i_(e),image:null,revealed:0}}function m_(){const e=[],t=document.createDocumentFragment(),r=fi.children.length;for(let i=0;i<ct;i+=1){const a=f_(r+i);e.push(a),t.append(a.element)}return fi.append(t),e}function Zt(e){const t=e%ue,r=Math.floor(e/ue);return t===0||t===ue-1||r===0||r===ue-1}function g_(e){return Be.palette.findIndex(t=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2])}function y_(e){return Ir(e).palette.map(t=>g_(t)).filter(t=>t>=0)}function __(e){const t=Be.palette[e]||[0,0,0];return(t[0]*.2126+t[1]*.7152+t[2]*.0722)/255}function b_(e,t,r,i,a,n){if(e===0)return 0;if(a.length<2)return e;const s=__(e),u=wi[(Math.floor(r/ue)+i)%8][(r+i*3)%8];let l=Math.max(1,Math.min(a.length-1,Math.round(s*(a.length-1))+(u<12?1:0)));const d=n[gi(r)];d&&d.mode===Er&&u<12&&(l=d.tone),d&&d.mode===Vt&&(r%ue+Math.floor(r/ue)+d.phase)%5<1&&(l=d.tone);const c=a.length-1;return l===c&&u>24&&(l=Math.max(1,c-1)),l>1&&u>50&&d?.mode!==Vt&&(l-=1),a[l]}function w_(e,t,r,i,a,n,s){const u=wi[(r+i)%8][(t+i*3)%8],l=Math.abs(t-11.5),d=Math.abs(r-11.5),c=Math.sqrt(l*l+d*d),h=t>=n.minX&&t<=n.maxX&&r>=n.minY&&r<=n.maxY;if(e==="fauna")return(h?22:0)+(a?34:0)+(c<8?10:0)+(u<10?8:0)+(s.mode===Jt?18:0)+(s.mode===ht?-24:0);if(e==="botanical")return(Math.abs(l-d)<2.5||c<4?30:0)+(a?28:0)+(u<16?10:0)+(s.mode===Jt?22:0)+(s.mode===ht?-18:0);if(e==="terrain")return(Math.abs(r%6-2)<2?24:0)+(a?28:0)+(r>11?10:0)+(u<14?8:0)+(s.mode===Vt?24:0)+(s.mode===ht?-22:0);if(e==="geometry"){const _=Math.abs((l+d)%6-2)<1.8,y=(t+r+i)%5<2;return(_?26:0)+(y?14:0)+(a?30:0)+(u<18?8:0)+(s.mode===Vt?24:0)+(s.mode===Jt?18:0)+(s.mode===ht?-20:0)}return((Math.floor(t/3)+Math.floor(r/3)+i)%2===0?24:0)+(a?32:0)+(u<20?8:0)+(s.mode===Er?22:0)+(s.mode===ht?-16:0)}function $_(e,t,r,i,a){const n=((r-i+a+12)%6+6)%6;return t===Er?(r+i+a)%3===0:t===Vt?n===0||n===1:t!==Jt?!1:e==="fauna"?(r===1||r===4)&&i===2:e==="botanical"?Math.abs(Math.abs(r-2.5)-Math.abs(i-2.5))<.8:e==="terrain"?i===a%3||i===4&&r%2===a%2:e==="geometry"?n===0||(r+i+a)%5===0:(r+i+a)%4<2}function v_(e,t,r,i,a,n){mi[r].forEach(({position:s,mirror:u})=>{const l=n[gi(s)];if(!l||l.mode===qn||l.mode===ht)return;const d=s%ue,c=Math.floor(s/ue),h=d%rr,g=c%rr;if(!$_(i,l.mode,h,g,l.phase)||e[s]!==0||e[u]!==0)return;const _=a[l.tone]||a[1]||1;e[s]=_,e[u]=_})}function x_(e,t,r,i){const a=e.slice(),n=Ir(i),s=y_(i),u=l_(i,t,r,s.length),l=r%5===0,d={minX:ue,minY:ue,maxX:-1,maxY:-1};e.forEach((y,w)=>{if(y===0)return;const S=w%ue,v=Math.floor(w/ue);d.minX=Math.min(d.minX,S),d.maxX=Math.max(d.maxX,S),d.minY=Math.min(d.minY,v),d.maxY=Math.max(d.maxY,v),a[w]=b_(y,i,w,r,s,u)}),d.maxX<0&&(d.minX=4,d.maxX=19,d.minY=4,d.maxY=19);const c=mi[t],h=[];c.forEach(({position:y,mirror:w})=>{const S=u[gi(y)],v=y%ue,b=Math.floor(y/ue),E=wi[(b+r)%8][(v+r*3)%8],T=!Zt(y)&&!Zt(w)&&Math.abs(v-11.5)+Math.abs(b-11.5)>5;let I=!1;if(S.mode===ht&&e[y]!==0&&e[w]!==0&&T&&E>56&&(v%rr>1||b%rr>1)&&(v+b+S.phase)%5<2&&(a[y]=0,a[w]=0,I=!0),!I&&(e[y]!==0||e[w]!==0)||l&&(Zt(y)||Zt(w)))return;const A=[y-1,y+1,y-ue,y+ue].some(x=>x>=0&&x<ft&&e[x]!==0),C=w_(i,v,b,r,A,d,S);if(h.push({position:y,mirror:w,priority:C,x:v,y:b,sector:S}),C>=38||A&&C>=28){const x=S.mode===Jt||S.mode===Er||S.mode===Vt?s[S.tone]||s[1]||1:s[1+(v+b+r)%Math.max(1,s.length-1)]||s[1]||1;a[y]=x,a[w]=x}});const g=Math.floor(ft*n.minDensity);let _=a.reduce((y,w)=>y+(w!==0?1:0),0);return h.sort((y,w)=>w.priority-y.priority||y.position-w.position).some(({position:y,mirror:w,x:S,y:v,sector:b},E)=>{if(_>=g)return!0;if(a[y]!==0||a[w]!==0)return!1;const T=b.mode===Jt||b.mode===Er||b.mode===Vt?s[b.tone]||s[1]||1:s[1+(E+r+S+v)%Math.max(1,s.length-1)]||s[1]||1;return a[y]=T,a[w]=T,_+=y===w?1:2,!1}),v_(a,e,t,i,s,u),mi[t].forEach(({position:y,mirror:w})=>{if(a[y]!==0||a[w]!==0)return;const S=y%ue,v=Math.floor(y/ue),b=Math.abs(S-11.5)+Math.abs(v-11.5);if(Zt(y)||Zt(w)||b>8.5)return;const E=u[gi(y)],T=s[E.tone]||s[1]||1;a[y]=T,a[w]=T}),a}function S_(e,t,r,i,a){const n=new Uint8Array(ft),s=t*Be.palette.length*ft;return mi[r].forEach(({position:u,mirror:l})=>{let d=0,c=-1/0;for(let h=0;h<Be.palette.length;h+=1){const g=e[s+h*ft+u];g>c&&(c=g,d=h)}n[u]=d,n[l]=d}),x_(n,r,i,a)}function T_(e,t,r){const i=t*4;e.data[i]=r[0],e.data[i+1]=r[1],e.data[i+2]=r[2],e.data[i+3]=255}function k_(e,t,r,i){const a=e.revealed,n=Math.min(i,ft);for(let s=a;s<n;s+=1){const u=e.revealOrder[s],l=Be.palette[t[u]];T_(r,u,l)}n!==a&&(e.context.putImageData(r,0,0),e.revealed=n)}function Sp(e,t,r){const i=e.createShader(t);if(e.shaderSource(i,r),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){const a=e.getShaderInfoLog(i)||"Unknown shader compile error";throw e.deleteShader(i),new Error(a)}return i}function E_(e,t){if(Wn.matches)return;const r=dn("shader-effect"),i=e.getBoundingClientRect(),a=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(96,Math.round(i.width*a)),r.height=Math.max(96,Math.round(i.height*a)),e.append(r);const n=r.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1});if(!n){r.remove();return}let s,u,l,d,c,h=!1,g=0;const _=()=>{if(h)return;h=!0,window.cancelAnimationFrame(g),d&&n.deleteBuffer(d),c&&n.deleteTexture(c),l&&n.deleteProgram(l),s&&n.deleteShader(s),u&&n.deleteShader(u),r.remove(),delete e.dataset.effect;const b=n.getExtension("WEBGL_lose_context");b&&b.loseContext()};try{if(s=Sp(n,n.VERTEX_SHADER,t_),u=Sp(n,n.FRAGMENT_SHADER,r_),l=n.createProgram(),n.attachShader(l,s),n.attachShader(l,u),n.linkProgram(l),!n.getProgramParameter(l,n.LINK_STATUS))throw new Error(n.getProgramInfoLog(l)||"Unknown shader link error");d=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,d),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),n.STATIC_DRAW),n.viewport(0,0,r.width,r.height),n.useProgram(l);const b=n.getAttribLocation(l,"position");n.enableVertexAttribArray(b),n.vertexAttribPointer(b,2,n.FLOAT,!1,0,0),n.uniform2f(n.getUniformLocation(l,"resolution"),r.width,r.height),c=n.createTexture(),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,c),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),n.uniform1i(n.getUniformLocation(l,"pattern"),0),n.clearColor(0,0,0,0)}catch(b){console.warn("dither-feed: shader unavailable",b),_();return}const y=n.getUniformLocation(l,"progress");e.dataset.effect="active";const w=b=>{if(!h)try{n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,c),n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,t),n.clear(n.COLOR_BUFFER_BIT),n.uniform1f(y,b),n.drawArrays(n.TRIANGLE_STRIP,0,4)}catch(E){console.warn("dither-feed: shader frame skipped",E),_()}},S=performance.now(),v=b=>{h||(w(Math.min(1,(b-S)/gp)),!h&&(b-S<gp?g=window.requestAnimationFrame(v):_()))};return g=window.requestAnimationFrame(v),{dispose:_}}function I_(e,t){const r=e.map(i=>(i.image=i.context.createImageData(ue,ue),i.image));return new Promise(i=>{const a=performance.now(),n=()=>{e.forEach((u,l)=>{u.skeleton.remove(),u.element.setAttribute("aria-label","Generated pixel pattern "+(l+1)),u.element.dataset.state="ready",u.image=null,E_(u.element,u.output)}),ln+=e.length,Gt("ready"),i()},s=()=>{const u=Wn.matches?1:Math.min(1,(performance.now()-a)/Vy);if(e.forEach((l,d)=>{const c=Math.floor(u*l.revealOrder.length);k_(l,t[d],r[d],c)}),u>=1)return n();window.setTimeout(s,16)};s()})}async function z_(e){const t=new Float32Array(ct*Be.latent),r=new Uint32Array(ct);for(let n=0;n<ct;n+=1){const s=p_(e[n].style);e[n].readoutCode.textContent="LAT "+s.toString(16).toUpperCase().padStart(3,"0"),r[n]=e[n].seed+s*7919>>>0;const u=s*Be.latent,l=n*Be.latent;for(let d=0;d<Be.latent;d+=1)t[l+d]=lm[u+d]+a_()*Gy}const i=new Ye("float32",t,[ct,Be.latent]);let a;try{return a=await _i.run({latent:i}),Array.from({length:ct},(n,s)=>S_(a.logits.data,s,e[s].symmetry,r[s],e[s].style))}finally{i.dispose&&i.dispose(),a&&a.logits&&a.logits.dispose&&a.logits.dispose()}}function hm(e){ir=!0,console.error(e),fi.replaceChildren();const t=document.createElement("div");t.className="error-line",t.textContent=`dither-feed: model unavailable
`+(e.message||e),fi.append(t),Gt("error"),cm(!0)}async function pn(){if(Pt||ir||!_i)return;Pt=!0,Gt("synth");const e=m_();try{const t=await z_(e);await I_(e,t)}catch(t){e.forEach(r=>r.element.remove()),hm(t)}finally{Pt=!1,Gt()}}function $i(){return at.scrollTop+at.clientHeight>=at.scrollHeight-jy}function Vn(){!bi||Pt||ir||!$i()||nt<Ky||(nt=0,pn())}async function C_(){_e.wasm.numThreads=navigator.crossOriginIsolated?Math.min(4,navigator.hardwareConcurrency||1):1,_e.wasm.wasmPaths={wasm:Wy};const e="/dither-feed/model/",[t,r,i]=await Promise.all([fetch(e+"model.json").then(a=>xp(a,"model.json")).then(a=>a.json()),fetch(e+"latent-bank.bin").then(a=>xp(a,"latent-bank.bin")).then(async a=>new Float32Array(await a.arrayBuffer())),fn.create(e+"garden-cvae.onnx",{executionProviders:["wasm"],graphOptimizationLevel:"all"})]);if(t.batch!==ct||t.size!==ue)throw new Error("Model shape does not match the four-tile feed");if(r.length<t.perClass*t.latent)throw new Error("Latent bank is incomplete");Be=t,lm=r,_i=i}const A_=new IntersectionObserver(e=>{e.some(t=>t.isIntersecting)&&Vn()},{root:at,rootMargin:"0px 0px 40px 0px"});at.addEventListener("scroll",()=>{at.scrollTop>0&&(bi=!0),$i()||(nt=0)},{passive:!0});at.addEventListener("wheel",e=>{if(e.deltaY<=0){nt=0;return}if(bi=!0,Pt||!$i()){nt=0;return}nt+=Math.min(e.deltaY,80),Vn()},{passive:!0});at.addEventListener("touchstart",e=>{Sr=e.touches[0]?e.touches[0].clientY:null,nt=0},{passive:!0});at.addEventListener("touchmove",e=>{if(Sr===null||!e.touches[0])return;const t=e.touches[0].clientY,r=Sr-t;if(Sr=t,r<=0||Pt||!$i()){nt=0;return}bi=!0,nt+=Math.min(r,80),Vn()},{passive:!0});at.addEventListener("touchend",()=>{Sr=null,nt=0},{passive:!0});A_.observe(Zy);C_().then(async()=>{if(await pn(),!ir){cm();for(let e=1;e<Xy&&!ir;e+=1)await pn()}}).catch(hm);
