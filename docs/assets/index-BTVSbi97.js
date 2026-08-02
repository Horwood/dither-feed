(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();var Za=Object.defineProperty,u0=Object.getOwnPropertyDescriptor,l0=Object.getOwnPropertyNames,d0=Object.prototype.hasOwnProperty,p0=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),P=(e,t)=>()=>(e&&(t=e(e=0)),t),Zt=(e,t)=>{for(var r in t)Za(e,r,{get:t[r],enumerable:!0})},c0=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of l0(t))!d0.call(e,a)&&a!==r&&Za(e,a,{get:()=>t[a],enumerable:!(i=u0(t,a))||i.enumerable});return e},yr=e=>c0(Za({},"__esModule",{value:!0}),e),tr,yt,Gt,vo,dp,pp=P(()=>{tr=new Map,yt=[],Gt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=tr.get(e);if(i===void 0)tr.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=yt.indexOf(e);a!==-1&&yt.splice(a,1);for(let n=0;n<yt.length;n++)if(tr.get(yt[n]).priority<=r){yt.splice(n,0,e);return}yt.push(e)}return}throw new TypeError("not a valid backend")},vo=async e=>{let t=tr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},dp=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?yt:r,a,n=[],s=new Set;for(let l of i){let p=await vo(l);typeof p=="string"?n.push({name:l,err:p}):(a||(a=p),a===p&&s.add(l))}if(!a)throw new Error(`no available backend found. ERR: ${n.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:p}of n)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${p}`);let u=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[a,new Proxy(e,{get:(l,p)=>p==="executionProviders"?u:Reflect.get(l,p)})]}}),h0=P(()=>{pp()}),cp,f0=P(()=>{cp="1.27.0"}),Ri,ze,hp=P(()=>{f0(),Ri="warning",ze={wasm:{},webgl:{},webgpu:{},versions:{common:cp},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ri=e}},get logLevel(){return Ri}},Object.defineProperty(ze,"logLevel",{enumerable:!0})}),ye,m0=P(()=>{hp(),ye=ze}),fp,mp,g0=P(()=>{fp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[3]):(a=e.dims[3],n=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",u=t?.norm,l,p;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let h=n*a,f=0,g=h,y=h*2,_=-1;s==="RGBA"?(f=0,g=h,y=h*2,_=h*3):s==="RGB"?(f=0,g=h,y=h*2):s==="RBG"&&(f=0,y=h,g=h*2);for(let w=0;w<n;w++)for(let T=0;T<a;T++){let x=(e.data[f++]-p[0])*l[0],b=(e.data[g++]-p[1])*l[1],E=(e.data[y++]-p[2])*l[2],S=_===-1?255:(e.data[_++]-p[3])*l[3];i.fillStyle="rgba("+x+","+b+","+E+","+S+")",i.fillRect(T,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},mp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[1],s=e.dims[3]):(a=e.dims[3],n=e.dims[2],s=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,p,h;l===void 0||l.mean===void 0?p=[255,255,255,255]:typeof l.mean=="number"?p=[l.mean,l.mean,l.mean,l.mean]:(p=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(p[3]=l.mean[3])),l===void 0||l.bias===void 0?h=[0,0,0,0]:typeof l.bias=="number"?h=[l.bias,l.bias,l.bias,l.bias]:(h=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(h[3]=l.bias[3]));let f=n*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,y=0,_=1,w=2,T=3,x=0,b=f,E=f*2,S=-1;u==="RGBA"?(x=0,b=f,E=f*2,S=f*3):u==="RGB"?(x=0,b=f,E=f*2):u==="RBG"&&(x=0,E=f,b=f*2),i=r.createImageData(a,n);for(let I=0;I<n*a;y+=g,_+=g,w+=g,T+=g,I++)i.data[y]=(e.data[x++]-h[0])*p[0],i.data[_]=(e.data[b++]-h[1])*p[1],i.data[w]=(e.data[E++]-h[2])*p[2],i.data[T]=S===-1?255:(e.data[S++]-h[3])*p[3]}else throw new Error("Can not access image data");return i}}),Rr,gp,yp,_p,bp,wp,y0=P(()=>{Ya(),Rr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},n,s;typeof a.mean=="number"?n=[a.mean,a.mean,a.mean,a.mean]:n=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*i,h=l==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),f=4,g=0,y=1,_=2,w=3,T=0,x=p,b=p*2,E=-1;u==="RGB"&&(f=3,g=0,y=1,_=2,w=-1),l==="RGBA"?E=p*3:l==="RBG"?(T=0,b=p,x=p*2):l==="BGR"&&(b=0,x=p,T=p*2);for(let S=0;S<p;S++,g+=f,_+=f,y+=f,w+=f)h[T++]=(e[g]+s[0])/n[0],h[x++]=(e[y]+s[1])/n[1],h[b++]=(e[_]+s[2])/n[2],E!==-1&&w!==-1&&(h[E++]=(e[w]+s[3])/n[3]);return l==="RGBA"?new De("float32",h,[1,4,r,i]):new De("float32",h,[1,3,r,i])},gp=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(r){let h=l();h.width=e.width,h.height=e.height;let f=p(h);if(f!=null){let g=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=g,u.width=y}else u.tensorFormat="RGBA",u.height=g,u.width=y;f.drawImage(e,0,0),s=f.getImageData(0,0,y,g).data}else throw new Error("Can not access image data")}else if(i){let h,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,f=t.resizedWidth):(h=e.height,f=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=h,u.width=f,t!==void 0){let g=l();g.width=f,g.height=h;let y=p(g);if(y!=null)y.putImageData(e,0,0),s=y.getImageData(0,0,f,h).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=l();h.width=e.width,h.height=e.height;let f=p(h);if(f!=null){let g=e.height,y=e.width;return f.drawImage(e,0,0,y,g),s=f.getImageData(0,0,y,g).data,u.height=g,u.width=y,Rr(s,u)}else throw new Error("Can not access image data")}else{if(n)return new Promise((h,f)=>{let g=l(),y=p(g);if(!e||!y)return f();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{g.width=_.width,g.height=_.height,y.drawImage(_,0,0,g.width,g.height);let w=y.getImageData(0,0,g.width,g.height);u.height=g.height,u.width=g.width,h(Rr(w.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Rr(s,u);throw new Error("Input data provided is not supported - aborted tensor creation")},yp=(e,t)=>{let{width:r,height:i,download:a,dispose:n}=t,s=[1,i,r,4];return new De({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:n})},_p=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new De({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:n})},bp=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new De({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:n})},wp=(e,t,r)=>new De({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Ct,pr,Bi,$p,_0=P(()=>{Ct=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),pr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Bi=!1,$p=()=>{if(!Bi){Bi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(Ct.set("int64",BigInt64Array),pr.set(BigInt64Array,"int64")),t&&(Ct.set("uint64",BigUint64Array),pr.set(BigUint64Array,"uint64")),i?(Ct.set("float16",r),pr.set(r,"float16")):Ct.set("float16",Uint16Array)}}}),vp,xp,b0=P(()=>{Ya(),vp=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},xp=(e,t)=>{switch(e.location){case"cpu":return new De(e.type,e.data,t);case"cpu-pinned":return new De({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new De({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new De({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new De({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),De,Ya=P(()=>{g0(),y0(),_0(),b0(),De=class{constructor(e,t,r){$p();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=Ct.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=Ct.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=pr.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(u===void 0)u=[s.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");a=u,this.cpuData=s,this.dataLocation="cpu"}let n=vp(a);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=n}static async fromImage(e,t){return gp(e,t)}static fromTexture(e,t){return yp(e,t)}static fromGpuBuffer(e,t){return _p(e,t)}static fromMLTensor(e,t){return bp(e,t)}static fromPinnedBuffer(e,t,r){return wp(e,t,r)}toDataURL(e){return fp(this,e)}toImageData(e){return mp(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return xp(this,e)}}}),Ze,Sp=P(()=>{Ya(),Ze=De}),Yr,Mi,nt,Ye,Rt,Bt,Tp=P(()=>{hp(),Yr=(e,t)=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.timeStamp(`${e}::ORT::${t}`)},Mi=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(n+=`::${t}`),Yr("CPU",n);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},nt=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||Mi("BEGIN",e)},Ye=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||Mi("END",e)},Rt=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.time(`ORT::${e}`)},Bt=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.timeEnd(`ORT::${e}`)}}),kp,w0=P(()=>{pp(),Sp(),Tp(),kp=class Ep{constructor(t){this.handler=t}async run(t,r,i){nt(),Rt("InferenceSession.run");let a={},n={};if(typeof t!="object"||t===null||t instanceof Ze||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Ze)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);a[p]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,h=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(h.indexOf(f)!==-1){let g=r[f];(g===null||g instanceof Ze)&&(p=!0,s=!1,a[f]=g)}if(p){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(s)for(let p of this.outputNames)a[p]=null;let u=await this.handler.run(t,a,n),l={};for(let p in u)if(Object.hasOwnProperty.call(u,p)){let h=u[p];h instanceof Ze?l[p]=h:l[p]=new Ze(h.type,h.data,h.dims)}return Bt("InferenceSession.run"),Ye(),l}async release(){return this.handler.dispose()}static async create(t,r,i,a){nt(),Rt("InferenceSession.create");let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,f=0,g=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(g=t.byteLength-f,typeof i=="number"){if(g=i,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||f+g>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-f}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(h,f,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await dp(s),p=await u.createInferenceSessionHandler(n,l);return Bt("InferenceSession.create"),Ye(),new Ep(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Qa,$0=P(()=>{w0(),Qa=kp}),v0=P(()=>{}),x0=P(()=>{}),S0=P(()=>{}),T0=P(()=>{}),k0={};Zt(k0,{InferenceSession:()=>Qa,TRACE:()=>Yr,TRACE_EVENT_BEGIN:()=>Rt,TRACE_EVENT_END:()=>Bt,TRACE_FUNC_BEGIN:()=>nt,TRACE_FUNC_END:()=>Ye,Tensor:()=>Ze,env:()=>ye,registerBackend:()=>Gt});var We=P(()=>{h0(),m0(),$0(),Sp(),v0(),x0(),Tp(),S0(),T0()}),Ja=P(()=>{}),Ip={};Zt(Ip,{default:()=>zp});var Ni,Di,zp,E0=P(()=>{Mf(),Pt(),en(),Ni="ort-wasm-proxy-worker",Di=globalThis.self?.name===Ni,Di&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":tn(r.wasm).then(()=>{bn(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;wn(a,i).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:i}=r,a=ai(i);postMessage({type:t,out:a});break}case"create":{let{model:i,options:a}=r;$n(i,a).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":vn(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:a,inputs:n,outputIndices:s,options:u}=r;xn(i,a,n,s,new Array(s.length).fill(null),u).then(l=>{l.some(p=>p[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},Tn([...n,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":Sn(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),zp=Di?null:e=>new Worker(e??Ne,{type:"module",name:Ni})}),Cp={};Zt(Cp,{default:()=>Ap});async function xo(e={}){var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,a=i&&self.name?.startsWith("em-pthread");t.mountExternalData=(o,d)=>{o.startsWith("./")&&(o=o.substring(2)),(t.Xc||(t.Xc=new Map)).set(o,d)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let n=o=>async(...d)=>{try{if(t.Yc)throw Error("Session already started");let m=t.Yc={Kd:d[0],errors:[]},c=await o(...d);if(t.Yc!==m)throw Error("Session mismatch");t.dd?.flush();let $=m.errors;if(0<$.length){let k=await Promise.all($);if(k=k.filter(z=>z),0<k.length)throw Error(k.join(`
`))}return c}finally{t.Yc=null}};t.jsepInit=(o,d)=>{if(o==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=d;let m=t.dd;t.jsepRegisterBuffer=(c,$,k,z)=>m.registerBuffer(c,$,k,z),t.jsepGetBuffer=c=>m.getBuffer(c),t.jsepCreateDownloader=(c,$,k)=>m.createDownloader(c,$,k),t.jsepOnCreateSession=c=>{m.onCreateSession(c)},t.jsepOnReleaseSession=c=>{m.onReleaseSession(c)},t.jsepOnRunStart=c=>m.onRunStart(c),t.Id=(c,$)=>{m.upload(c,$)}}else if(o==="webnn"){let m=d[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=d.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=c=>m.onRunStart(c),t.webnnOnRunEnd=m.onRunEnd.bind(m),t.webnnOnReleaseSession=c=>{m.onReleaseSession(c)},t.webnnCreateMLTensorDownloader=(c,$)=>m.createMLTensorDownloader(c,$),t.webnnRegisterMLTensor=(c,$,k,z)=>m.registerMLTensor(c,$,k,z),t.webnnCreateMLContext=c=>m.createMLContext(c),t.webnnRegisterMLConstant=(c,$,k,z,B,L)=>m.registerMLConstant(c,$,k,z,B,t.Xc,L),t.webnnRegisterGraphInput=m.registerGraphInput.bind(m),t.webnnIsGraphInput=m.isGraphInput.bind(m),t.webnnRegisterGraphOutput=m.registerGraphOutput.bind(m),t.webnnIsGraphOutput=m.isGraphOutput.bind(m),t.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),t.webnnIsGraphInputOutputTypeSupported=m.isGraphInputOutputTypeSupported.bind(m)}};let s=()=>{let o=d=>(...m)=>{let c=et;return m=d(...m),et!=c?new Promise(($,k)=>{wi={resolve:$,reject:k}}):m};(()=>{for(let d of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[d]=o(t[d])})(),n!==void 0&&(t._OrtRun=n(t._OrtRun),t._OrtRunWithBinding=n(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s?.()};var u,l,p=(o,d)=>{throw d},h=import.meta.url,f="";if(r||i){try{f=new URL(".",h).href}catch{}i&&(l=o=>{var d=new XMLHttpRequest;return d.open("GET",o,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),u=async o=>{if(C(o))return new Promise((m,c)=>{var $=new XMLHttpRequest;$.open("GET",o,!0),$.responseType="arraybuffer",$.onload=()=>{$.status==200||$.status==0&&$.response?m($.response):c($.status)},$.onerror=c,$.send(null)});var d=await fetch(o,{credentials:"same-origin"});if(d.ok)return d.arrayBuffer();throw Error(d.status+" : "+d.url)}}var g,y,_,w,T,x,b=console.log.bind(console),E=console.error.bind(console),S=b,I=E,A=!1,C=o=>o.startsWith("file://");function v(){ht.buffer!=q.buffer&&Q()}if(a){let o=function(d){try{var m=d.data,c=m.Sc;if(c==="load"){let $=[];self.onmessage=k=>$.push(k),x=()=>{postMessage({Sc:"loaded"});for(let k of $)o(k);self.onmessage=o};for(let k of m.xd)t[k]&&!t[k].proxy||(t[k]=(...z)=>{postMessage({Sc:"callHandler",wd:k,args:z})},k=="print"&&(S=t[k]),k=="printErr"&&(I=t[k]));ht=m.Od,Q(),y=m.Pd,Ae(),Or()}else if(c==="run"){(function($){var k=(v(),N)[$+52>>>2>>>0];$=(v(),N)[$+56>>>2>>>0],As(k,k-$),oe(k)})(m.Rc),Ti(m.Rc,0,0,1,0,0),On(),yi(m.Rc),D||(Ts(),D=!0);try{em(m.Md,m.bd)}catch($){if($!="unwind")throw $}}else m.target!=="setimmediate"&&(c==="checkMailbox"?D&&Tr():c&&(I(`worker: received unknown command ${c}`),I(m)))}catch($){throw ks(),$}};var D=!1;self.onunhandledrejection=d=>{throw d.reason||d},self.onmessage=o}var q,Y,F,K,R,N,G,J,ee,re,ne,U=!1;function Q(){var o=ht.buffer;t.HEAP8=q=new Int8Array(o),F=new Int16Array(o),t.HEAPU8=Y=new Uint8Array(o),K=new Uint16Array(o),t.HEAP32=R=new Int32Array(o),t.HEAPU32=N=new Uint32Array(o),G=new Float32Array(o),J=new Float64Array(o),ee=new BigInt64Array(o),re=new BigUint64Array(o)}function Z(){U=!0,a?x():ot.sb()}function V(o){throw I(o="Aborted("+o+")"),A=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),T?.(o),o}function Ee(){return{a:{ma:xg,gb:vg,g:tm,J:rm,f:im,o:am,h:nm,ha:sm,b:om,T:um,Ha:Un,n:lm,$:Wn,Xa:Vn,Da:Gn,Fa:Hn,Ya:Fn,Va:jn,Oa:Kn,Ua:Xn,ka:Zn,Ea:Yn,Ba:Qn,Wa:Jn,Ca:es,bb:dm,ea:pm,wa:cm,ua:fm,da:gm,O:ym,H:_m,va:bm,_:km,xa:Em,Ra:Im,za:Cm,Ia:Am,sa:Om,fa:Rm,Qa:yi,_a:Bm,R:Um,r:Vm,c:mi,hb:Gm,y:Hm,M:Fm,D:jm,l:Km,s:us,ib:Xm,I:Zm,S:Ym,j:Qm,u:Jm,q:eg,k:tg,La:rg,Ma:ig,Na:ag,Ja:cs,Ka:hs,ta:fs,db:sg,ab:ug,v:lg,aa:dg,ga:pg,$a:og,W:cg,Za:hg,Aa:fg,F:ng,U:mg,la:Cr,ya:yg,fb:gg,eb:_g,Sa:_s,Ta:bs,Ga:di,V:ws,ja:$s,Pa:vs,ia:xs,kb:n0,na:e0,lb:a0,oa:Jg,G:Gg,e:Eg,t:Tg,w:Sg,B:Dg,mb:Zg,K:Lg,x:Cg,pa:Yg,Y:t0,ba:Xg,nb:Kg,ob:jg,P:Ug,qa:Fg,pb:Hg,N:Wg,Z:Qg,d:kg,A:zg,m:Ig,jb:s0,p:Og,z:Rg,C:Ag,E:Bg,L:Pg,qb:Vg,Q:r0,ca:qg,X:i0,rb:Ng,ra:Mg,i:wg,a:ht,cb:li}}}async function Ae(){function o(c,$){var k=ot=c.exports;c={};for(let[z,B]of Object.entries(k))typeof B=="function"?(k=Mm(B),c[z]=k):c[z]=B;return ot=c,ot=(function(){var z=ot,B=W=>se=>W(se)>>>0,L=W=>()=>W()>>>0;return(z=Object.assign({},z)).tb=B(z.tb),z.Xb=L(z.Xb),z.Zb=B(z.Zb),z.lc=B(z.lc),z.mc=L(z.mc),z.qc=B(z.qc),z})(),Cn.push(ot._b),Ss=(c=ot).tb,Ts=c.ub,t._OrtInit=c.vb,t._OrtGetLastError=c.wb,t._OrtCreateSessionOptions=c.xb,t._OrtAppendExecutionProvider=c.yb,t._OrtAddFreeDimensionOverride=c.zb,t._OrtAddSessionConfigEntry=c.Ab,t._OrtReleaseSessionOptions=c.Bb,t._OrtCreateSession=c.Cb,t._OrtReleaseSession=c.Db,t._OrtGetInputOutputCount=c.Eb,t._OrtGetInputOutputMetadata=c.Fb,t._OrtFree=c.Gb,t._OrtCreateTensor=c.Hb,t._OrtGetTensorData=c.Ib,t._OrtReleaseTensor=c.Jb,t._OrtCreateRunOptions=c.Kb,t._OrtAddRunConfigEntry=c.Lb,t._OrtReleaseRunOptions=c.Mb,t._OrtCreateBinding=c.Nb,t._OrtBindInput=c.Ob,t._OrtBindOutput=c.Pb,t._OrtClearBoundOutputs=c.Qb,t._OrtReleaseBinding=c.Rb,t._OrtRunWithBinding=c.Sb,t._OrtRun=c.Tb,t._OrtEndProfiling=c.Ub,t._JsepOutput=c.Vb,t._JsepGetNodeName=c.Wb,Ar=c.Xb,tt=t._free=c.Yb,Jt=t._malloc=c.Zb,Ti=c.ac,ks=c.bc,Es=c.cc,Is=c.dc,ki=c.ec,zs=c.fc,Cs=c.gc,le=c.hc,er=c.ic,As=c.jc,oe=c.kc,Ei=c.lc,ue=c.mc,Os=c.nc,Ii=c.oc,Rs=c.pc,Bs=c.qc,Ms=c.rc,zi=c.sc,Ns=c.tc,Ds=c.uc,Us=c.vc,Ps=c.wc,qs=c.xc,Ls=c.yc,Ws=c.zc,Vs=c.Ac,Gs=c.Bc,Hs=c.Cc,Fs=c.Dc,js=c.Ec,Ks=c.Fc,Xs=c.Gc,Zs=c.Hc,Ys=c.Ic,Qs=c.Jc,Js=c.Kc,eo=c.Lc,to=c.Mc,ro=c.Nc,io=c.Pc,ao=c.Qc,no=c.$c,so=c.ad,oo=c.fd,uo=c.jd,lo=c.kd,po=c.ld,co=c.md,ho=c.nd,fo=c.od,mo=c.pd,go=c.qd,yo=c.vd,_o=c.Td,bo=c.Ud,wo=c.Vd,$o=c.Wd,y=$,ot}var d,m=Ee();return t.instantiateWasm?new Promise(c=>{t.instantiateWasm(m,($,k)=>{c(o($,k))})}):a?o(new WebAssembly.Instance(y,Ee()),y):(ne??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",f):f+"ort-wasm-simd-threaded.jsep.wasm":new URL("/dither-feed/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href,d=await(async function(c){var $=ne;if(!g&&!C($))try{var k=fetch($,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(k,c)}catch(z){I(`wasm streaming compile failed: ${z}`),I("falling back to ArrayBuffer instantiation")}return(async function(z,B){try{var L=await(async function(W){if(!g)try{var se=await u(W);return new Uint8Array(se)}catch{}if(W==ne&&g)W=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";W=l(W)}return W})(z);return await WebAssembly.instantiate(L,B)}catch(W){I(`failed to asynchronously prepare wasm: ${W}`),V(W)}})($,c)})(m),o(d.instance,d.module))}class $e{name="ExitStatus";constructor(d){this.message=`Program terminated with exit(${d})`,this.status=d}}var Oe=o=>{o.terminate(),o.onmessage=()=>{}},me=[],we=0,Be=null,wr=o=>{ct.length==0&&(Bn(),Rn(ct[0]));var d=ct.pop();if(!d)return 6;Yt.push(d),vt[o.Rc]=d,d.Rc=o.Rc;var m={Sc:"run",Md:o.Ld,bd:o.bd,Rc:o.Rc};return d.postMessage(m,o.rd),0},Qe=0,ve=(o,d,...m)=>{var c,$=16*m.length,k=ue(),z=Ei($),B=z>>>3;for(c of m)typeof c=="bigint"?((v(),ee)[B++>>>0]=1n,(v(),ee)[B++>>>0]=c):((v(),ee)[B++>>>0]=0n,(v(),J)[B++>>>0]=c);return o=Es(o,0,$,z,d),oe(k),o};function li(o){if(a)return ve(0,1,o);if(_=o,!(0<Qe)){for(var d of Yt)Oe(d);for(d of ct)Oe(d);ct=[],Yt=[],vt={},A=!0}p(0,new $e(o))}function zn(o){if(a)return ve(1,0,o);di(o)}var di=o=>{if(_=o,a)throw zn(o),"unwind";li(o)},ct=[],Yt=[],Cn=[],vt={},An=o=>{var d=o.Rc;delete vt[d],ct.push(o),Yt.splice(Yt.indexOf(o),1),o.Rc=0,Is(d)};function On(){Cn.forEach(o=>o())}var Rn=o=>new Promise(d=>{o.onmessage=$=>{var k=$.data;if($=k.Sc,k.Zc&&k.Zc!=Ar()){var z=vt[k.Zc];z?z.postMessage(k,k.rd):I(`Internal error! Worker sent a message "${$}" to target pthread ${k.Zc}, but that thread no longer exists!`)}else $==="checkMailbox"?Tr():$==="spawnThread"?wr(k):$==="cleanupThread"?Sr(()=>{An(vt[k.Nd])}):$==="loaded"?(o.loaded=!0,d(o)):k.target==="setimmediate"?o.postMessage(k):$==="uncaughtException"?o.onerror(k.error):$==="callHandler"?t[k.wd](...k.args):$&&I(`worker sent an unknown command ${$}`)},o.onerror=$=>{throw I(`worker sent an error! ${$.filename}:${$.lineno}: ${$.message}`),$};var m,c=[];for(m of[])t.propertyIsEnumerable(m)&&c.push(m);o.postMessage({Sc:"load",xd:c,Od:ht,Pd:y})});function Bn(){var o=new Worker((()=>{let d=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new d("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});ct.push(o)}var ht,em=(o,d)=>{Qe=0,o=zi(o,d),0<Qe?_=o:ki(o)},$r=[],vr=0;function tm(o){var d=new pi(o>>>=0);return(v(),q)[d.Tc+12>>>0]==0&&(Mn(d,!0),vr--),Nn(d,!1),$r.push(d),Bs(o)}var Lt=0,rm=()=>{le(0,0);var o=$r.pop();Os(o.cd),Lt=0};function Mn(o,d){d=d?1:0,(v(),q)[o.Tc+12>>>0]=d}function Nn(o,d){d=d?1:0,(v(),q)[o.Tc+13>>>0]=d}class pi{constructor(d){this.cd=d,this.Tc=d-24}}var ci=o=>{var d=Lt;if(!d)return er(0),0;var m=new pi(d);(v(),N)[m.Tc+16>>>2>>>0]=d;var c=(v(),N)[m.Tc+4>>>2>>>0];if(!c)return er(0),d;for(var $ of o){if($===0||$===c)break;if(Rs($,c,m.Tc+16))return er($),d}return er(c),d};function im(){return ci([])}function am(o){return ci([o>>>0])}function nm(o,d,m,c){return ci([o>>>0,d>>>0,m>>>0,c>>>0])}var sm=()=>{var o=$r.pop();o||V("no exception to throw");var d=o.cd;throw(v(),q)[o.Tc+13>>>0]==0&&($r.push(o),Nn(o,!0),Mn(o,!1),vr++),Ii(d),Lt=d};function om(o,d,m){var c=new pi(o>>>=0);throw d>>>=0,m>>>=0,(v(),N)[c.Tc+16>>>2>>>0]=0,(v(),N)[c.Tc+4>>>2>>>0]=d,(v(),N)[c.Tc+8>>>2>>>0]=m,Ii(o),vr++,Lt=o}var um=()=>vr;function Dn(o,d,m,c){return a?ve(2,1,o,d,m,c):Un(o,d,m,c)}function Un(o,d,m,c){if(o>>>=0,d>>>=0,m>>>=0,c>>>=0,!globalThis.SharedArrayBuffer)return 6;var $=[];return a&&$.length===0?Dn(o,d,m,c):(o={Ld:m,Rc:o,bd:c,rd:$},a?(o.Sc="spawnThread",postMessage(o,$),0):wr(o))}function lm(o){throw Lt||=o>>>0,Lt}var Pn=globalThis.TextDecoder&&new TextDecoder,qn=(o,d,m,c)=>{if(m=d+m,c)return m;for(;o[d]&&!(d>=m);)++d;return d},Ln=(o,d=0,m,c)=>{if(16<(m=qn(o,d>>>=0,m,c))-d&&o.buffer&&Pn)return Pn.decode(o.buffer instanceof ArrayBuffer?o.subarray(d,m):o.slice(d,m));for(c="";d<m;){var $=o[d++];if(128&$){var k=63&o[d++];if((224&$)==192)c+=String.fromCharCode((31&$)<<6|k);else{var z=63&o[d++];65536>($=(240&$)==224?(15&$)<<12|k<<6|z:(7&$)<<18|k<<12|z<<6|63&o[d++])?c+=String.fromCharCode($):($-=65536,c+=String.fromCharCode(55296|$>>10,56320|1023&$))}}else c+=String.fromCharCode($)}return c},ke=(o,d,m)=>(o>>>=0)?Ln((v(),Y),o,d,m):"";function Wn(o,d,m){return a?ve(3,1,o,d,m):0}function Vn(o,d){if(a)return ve(4,1,o,d)}function Gn(o,d){if(a)return ve(5,1,o,d)}function Hn(o,d,m){if(a)return ve(6,1,o,d,m)}function Fn(o,d,m){return a?ve(7,1,o,d,m):0}function jn(o,d){if(a)return ve(8,1,o,d)}function Kn(o,d,m){if(a)return ve(9,1,o,d,m)}function Xn(o,d,m,c){if(a)return ve(10,1,o,d,m,c)}function Zn(o,d,m,c){if(a)return ve(11,1,o,d,m,c)}function Yn(o,d,m,c){if(a)return ve(12,1,o,d,m,c)}function Qn(o){if(a)return ve(13,1,o)}function Jn(o,d){if(a)return ve(14,1,o,d)}function es(o,d,m){if(a)return ve(15,1,o,d,m)}var dm=()=>V(""),Je=o=>{o>>>=0;for(var d="";;){var m=(v(),Y)[o++>>>0];if(!m)return d;d+=String.fromCharCode(m)}},hi={},fi={},Wt=class extends Error{constructor(o){super(o),this.name="BindingError"}};function st(o,d,m={}){return(function(c,$,k={}){var z=$.name;if(!c)throw new Wt(`type "${z}" must have a positive integer typeid pointer`);if(fi.hasOwnProperty(c)){if(k.yd)return;throw new Wt(`Cannot register type '${z}' twice`)}fi[c]=$,hi.hasOwnProperty(c)&&($=hi[c],delete hi[c],$.forEach(B=>B()))})(o,d,m)}var ts=(o,d,m)=>{switch(d){case 1:return m?c=>(v(),q)[c>>>0]:c=>(v(),Y)[c>>>0];case 2:return m?c=>(v(),F)[c>>>1>>>0]:c=>(v(),K)[c>>>1>>>0];case 4:return m?c=>(v(),R)[c>>>2>>>0]:c=>(v(),N)[c>>>2>>>0];case 8:return m?c=>(v(),ee)[c>>>3>>>0]:c=>(v(),re)[c>>>3>>>0];default:throw new TypeError(`invalid integer width (${d}): ${o}`)}};function pm(o,d,m,c,$){o>>>=0,m>>>=0,d=Je(d>>>0);let k=z=>z;if(c=c===0n){let z=8*m;k=B=>BigInt.asUintN(z,B),$=k($)}st(o,{name:d,Oc:k,Vc:(z,B)=>(typeof B=="number"&&(B=BigInt(B)),B),Uc:ts(d,m,!c),Wc:null})}function cm(o,d,m,c){st(o>>>=0,{name:d=Je(d>>>0),Oc:function($){return!!$},Vc:function($,k){return k?m:c},Uc:function($){return this.Oc((v(),Y)[$>>>0])},Wc:null})}var rs=[],xt=[0,1,,1,null,1,!0,1,!1,1];function mi(o){9<(o>>>=0)&&--xt[o+1]===0&&(xt[o]=void 0,rs.push(o))}var qe=o=>{if(!o)throw new Wt(`Cannot use deleted val. handle = ${o}`);return xt[o]},Ve=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let d=rs.pop()||xt.length;return xt[d]=o,xt[d+1]=1,d}};function gi(o){return this.Oc((v(),N)[o>>>2>>>0])}var hm={name:"emscripten::val",Oc:o=>{var d=qe(o);return mi(o),d},Vc:(o,d)=>Ve(d),Uc:gi,Wc:null};function fm(o){return st(o>>>0,hm)}var mm=(o,d)=>{switch(d){case 4:return function(m){return this.Oc((v(),G)[m>>>2>>>0])};case 8:return function(m){return this.Oc((v(),J)[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${d}): ${o}`)}};function gm(o,d,m){m>>>=0,st(o>>>=0,{name:d=Je(d>>>0),Oc:c=>c,Vc:(c,$)=>$,Uc:mm(d,m),Wc:null})}function ym(o,d,m,c,$){o>>>=0,m>>>=0,d=Je(d>>>0);let k=B=>B;if(c===0){var z=32-8*m;k=B=>B<<z>>>z,$=k($)}st(o,{name:d,Oc:k,Vc:(B,L)=>L,Uc:ts(d,m,c!==0),Wc:null})}function _m(o,d,m){function c(k){var z=(v(),N)[k>>>2>>>0];return k=(v(),N)[k+4>>>2>>>0],new $((v(),q).buffer,k,z)}var $=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][d];st(o>>>=0,{name:m=Je(m>>>0),Oc:c,Uc:c},{yd:!0})}var ft=(o,d,m)=>{var c=(v(),Y);if(d>>>=0,0<m){var $=d;m=d+m-1;for(var k=0;k<o.length;++k){var z=o.codePointAt(k);if(127>=z){if(d>=m)break;c[d++>>>0]=z}else if(2047>=z){if(d+1>=m)break;c[d++>>>0]=192|z>>6,c[d++>>>0]=128|63&z}else if(65535>=z){if(d+2>=m)break;c[d++>>>0]=224|z>>12,c[d++>>>0]=128|z>>6&63,c[d++>>>0]=128|63&z}else{if(d+3>=m)break;c[d++>>>0]=240|z>>18,c[d++>>>0]=128|z>>12&63,c[d++>>>0]=128|z>>6&63,c[d++>>>0]=128|63&z,k++}}c[d>>>0]=0,o=d-$}else o=0;return o},xr=o=>{for(var d=0,m=0;m<o.length;++m){var c=o.charCodeAt(m);127>=c?d++:2047>=c?d+=2:55296<=c&&57343>=c?(d+=4,++m):d+=3}return d};function bm(o,d){st(o>>>=0,{name:d=Je(d>>>0),Oc(m){var c=(v(),N)[m>>>2>>>0];return c=ke(m+4,c,!0),tt(m),c},Vc(m,c){c instanceof ArrayBuffer&&(c=new Uint8Array(c));var $=typeof c=="string";if(!($||ArrayBuffer.isView(c)&&c.BYTES_PER_ELEMENT==1))throw new Wt("Cannot pass non-string to std::string");var k=$?xr(c):c.length,z=Jt(4+k+1),B=z+4;return(v(),N)[z>>>2>>>0]=k,$?ft(c,B,k+1):(v(),Y).set(c,B>>>0),m!==null&&m.push(tt,z),z},Uc:gi,Wc(m){tt(m)}})}var is=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,wm=(o,d,m)=>{if(o>>>=1,16<(d=qn((v(),K),o,d/2,m))-o&&is)return is.decode((v(),K).slice(o,d));for(m="";o<d;++o){var c=(v(),K)[o>>>0];m+=String.fromCharCode(c)}return m},$m=(o,d,m)=>{if(m??=2147483647,2>m)return 0;var c=d;m=(m-=2)<2*o.length?m/2:o.length;for(var $=0;$<m;++$){var k=o.charCodeAt($);(v(),F)[d>>>1>>>0]=k,d+=2}return(v(),F)[d>>>1>>>0]=0,d-c},vm=o=>2*o.length,xm=(o,d,m)=>{var c="";o>>>=2;for(var $=0;!($>=d/4);$++){var k=(v(),N)[o+$>>>0];if(!k&&!m)break;c+=String.fromCodePoint(k)}return c},Sm=(o,d,m)=>{if(d>>>=0,m??=2147483647,4>m)return 0;var c=d;m=c+m-4;for(var $=0;$<o.length;++$){var k=o.codePointAt($);if(65535<k&&$++,(v(),R)[d>>>2>>>0]=k,(d+=4)+4>m)break}return(v(),R)[d>>>2>>>0]=0,d-c},Tm=o=>{for(var d=0,m=0;m<o.length;++m)65535<o.codePointAt(m)&&m++,d+=4;return d};function km(o,d,m){if(o>>>=0,d>>>=0,m=Je(m>>>=0),d===2)var c=wm,$=$m,k=vm;else c=xm,$=Sm,k=Tm;st(o,{name:m,Oc:z=>{var B=(v(),N)[z>>>2>>>0];return B=c(z+4,B*d,!0),tt(z),B},Vc:(z,B)=>{if(typeof B!="string")throw new Wt(`Cannot pass non-string to C++ string type ${m}`);var L=k(B),W=Jt(4+L+d);return(v(),N)[W>>>2>>>0]=L/d,$(B,W+4,L+d),z!==null&&z.push(tt,W),W},Uc:gi,Wc(z){tt(z)}})}function Em(o,d){st(o>>>=0,{zd:!0,name:d=Je(d>>>0),Oc:()=>{},Vc:()=>{}})}function Im(o){Ti(o>>>0,!i,1,!r,131072,!1),On()}var Sr=o=>{if(!A)try{if(o(),!(0<Qe))try{a?Ar()&&ki(_):di(_)}catch(d){d instanceof $e||d=="unwind"||p(0,d)}}catch(d){d instanceof $e||d=="unwind"||p(0,d)}},zm=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function yi(o){o>>>=0,zm||(Atomics.waitAsync((v(),R),o>>>2,o).value.then(Tr),o+=128,Atomics.store((v(),R),o>>>2,1))}var Tr=()=>Sr(()=>{var o=Ar();o&&(yi(o),Cs())});function Cm(o,d){(o>>>=0)==d>>>0?setTimeout(Tr):a?postMessage({Zc:o,Sc:"checkMailbox"}):(o=vt[o])&&o.postMessage({Sc:"checkMailbox"})}var _i=[];function Am(o,d,m,c,$){for(d>>>=0,$>>>=0,_i.length=0,m=$>>>3,c=$+c>>>3;m<c;){var k;k=(v(),ee)[m++>>>0]?(v(),ee)[m++>>>0]:(v(),J)[m++>>>0],_i.push(k)}return(d?Ci[d]:$g[o])(..._i)}var Om=()=>{Qe=0};function Rm(o){o>>>=0,a?postMessage({Sc:"cleanupThread",Nd:o}):An(vt[o])}function Bm(o){}var kr=o=>{try{o()}catch(d){V(d)}};function Mm(o){var d=(...m)=>{Er.push(o);try{return o(...m)}finally{A||(Er.pop(),et&&mt===1&&Er.length===0&&(mt=0,Qe+=1,kr(bo),typeof Fibers<"u"&&Fibers.Zd()))}};return ss.set(o,d),d}var mt=0,et=null,as=0,Er=[],bi=new Map,ns=new Map,ss=new Map,Nm=0,wi=null,Dm=[],os=o=>(function(d){if(!A){if(mt===0){var m=!1,c=!1;d(($=0)=>{if(!A&&(as=$,m=!0,c)){mt=2,kr(()=>wo(et)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),$=!1;try{var k=(function(){var L=(v(),R)[et+8>>>2>>>0];return L=ns.get(L),L=ss.get(L),--Qe,L()})()}catch(L){k=L,$=!0}var z=!1;if(!et){var B=wi;B&&(wi=null,($?B.reject:B.resolve)(k),z=!0)}if($&&!z)throw k}}),c=!0,m||(mt=1,et=(function(){var $=Jt(65548),k=$+12;if((v(),N)[$>>>2>>>0]=k,(v(),N)[$+4>>>2>>>0]=k+65536,k=Er[0],!bi.has(k)){var z=Nm++;bi.set(k,z),ns.set(z,k)}return k=bi.get(k),(v(),R)[$+8>>>2>>>0]=k,$})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),kr(()=>_o(et)))}else mt===2?(mt=0,kr($o),tt(et),et=null,Dm.forEach(Sr)):V(`invalid state: ${mt}`);return as}})(d=>{o().then(d)});function Um(o){return o>>>=0,os(async()=>{var d=await qe(o);return Ve(d)})}var $i=[],Pm=o=>{var d=$i.length;return $i.push(o),d},qm=(o,d)=>{for(var m=Array(o),c=0;c<o;++c){var $=c,k=(v(),N)[d+4*c>>>2>>>0],z=fi[k];if(z===void 0)throw o=`parameter ${c}`,k=Ss(k),d=Je(k),tt(k),new Wt(`${o} has unknown type ${d}`);m[$]=z}return m},Lm=(o,d,m)=>{var c=[];return o=o(c,m),c.length&&((v(),N)[d>>>2>>>0]=Ve(c)),o},Wm={},Ir=o=>{var d=Wm[o];return d===void 0?Je(o):d};function Vm(o,d,m){var[c,...$]=qm(o,d>>>0);d=c.Vc.bind(c);var k=$.map(L=>L.Uc.bind(L));o--;var z={toValue:qe};switch(o=k.map((L,W)=>{var se=`argFromPtr${W}`;return z[se]=L,`${se}(args${W?"+"+8*W:""})`}),m){case 0:var B="toValue(handle)";break;case 2:B="new (toValue(handle))";break;case 3:B="";break;case 1:z.getStringOrSymbol=Ir,B="toValue(handle)[getStringOrSymbol(methodName)]"}return B+=`(${o})`,c.zd||(z.toReturnWire=d,z.emval_returnValue=Lm,B=`return emval_returnValue(toReturnWire, destructorsRef, ${B})`),B=`return function (handle, methodName, destructorsRef, args) {
  ${B}
  }`,m=new Function(Object.keys(z),B)(...Object.values(z)),B=`methodCaller<(${$.map(L=>L.name)}) => ${c.name}>`,Pm(Object.defineProperty(m,"name",{value:B}))}function Gm(o,d){return d>>>=0,(o=qe(o>>>0))==qe(d)}function Hm(o){return(o>>>=0)?(o=Ir(o),Ve(globalThis[o])):Ve(globalThis)}function Fm(o){return o=Ir(o>>>0),Ve(t[o])}function jm(o,d){return d>>>=0,o=qe(o>>>0),d=qe(d),Ve(o[d])}function Km(o){9<(o>>>=0)&&(xt[o+1]+=1)}function us(o,d,m,c,$){return $i[o>>>0](d>>>0,m>>>0,c>>>0,$>>>0)}function Xm(o,d,m,c,$){return us(o>>>0,d>>>0,m>>>0,c>>>0,$>>>0)}function Zm(){return Ve([])}function Ym(o){o=qe(o>>>0);for(var d=Array(o.length),m=0;m<o.length;m++)d[m]=o[m];return Ve(d)}function Qm(o){return Ve(Ir(o>>>0))}function Jm(){return Ve({})}function eg(o){for(var d=qe(o>>>=0);d.length;){var m=d.pop();d.pop()(m)}mi(o)}function tg(o,d,m){d>>>=0,m>>>=0,o=qe(o>>>0),d=qe(d),m=qe(m),o[d]=m}function rg(o,d){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),d>>>=0,o=new Date(1e3*o),(v(),R)[d>>>2>>>0]=o.getUTCSeconds(),(v(),R)[d+4>>>2>>>0]=o.getUTCMinutes(),(v(),R)[d+8>>>2>>>0]=o.getUTCHours(),(v(),R)[d+12>>>2>>>0]=o.getUTCDate(),(v(),R)[d+16>>>2>>>0]=o.getUTCMonth(),(v(),R)[d+20>>>2>>>0]=o.getUTCFullYear()-1900,(v(),R)[d+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),R)[d+28>>>2>>>0]=o}var ls=o=>o%4==0&&(o%100!=0||o%400==0),ds=[0,31,60,91,121,152,182,213,244,274,305,335],ps=[0,31,59,90,120,151,181,212,243,273,304,334];function ig(o,d){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),d>>>=0,o=new Date(1e3*o),(v(),R)[d>>>2>>>0]=o.getSeconds(),(v(),R)[d+4>>>2>>>0]=o.getMinutes(),(v(),R)[d+8>>>2>>>0]=o.getHours(),(v(),R)[d+12>>>2>>>0]=o.getDate(),(v(),R)[d+16>>>2>>>0]=o.getMonth(),(v(),R)[d+20>>>2>>>0]=o.getFullYear()-1900,(v(),R)[d+24>>>2>>>0]=o.getDay();var m=(ls(o.getFullYear())?ds:ps)[o.getMonth()]+o.getDate()-1|0;(v(),R)[d+28>>>2>>>0]=m,(v(),R)[d+36>>>2>>>0]=-60*o.getTimezoneOffset(),m=new Date(o.getFullYear(),6,1).getTimezoneOffset();var c=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(m!=c&&o.getTimezoneOffset()==Math.min(c,m)),(v(),R)[d+32>>>2>>>0]=o}function ag(o){o>>>=0;var d=new Date((v(),R)[o+20>>>2>>>0]+1900,(v(),R)[o+16>>>2>>>0],(v(),R)[o+12>>>2>>>0],(v(),R)[o+8>>>2>>>0],(v(),R)[o+4>>>2>>>0],(v(),R)[o>>>2>>>0],0),m=(v(),R)[o+32>>>2>>>0],c=d.getTimezoneOffset(),$=new Date(d.getFullYear(),6,1).getTimezoneOffset(),k=new Date(d.getFullYear(),0,1).getTimezoneOffset(),z=Math.min(k,$);return 0>m?(v(),R)[o+32>>>2>>>0]=+($!=k&&z==c):0<m!=(z==c)&&($=Math.max(k,$),d.setTime(d.getTime()+6e4*((0<m?z:$)-c))),(v(),R)[o+24>>>2>>>0]=d.getDay(),m=(ls(d.getFullYear())?ds:ps)[d.getMonth()]+d.getDate()-1|0,(v(),R)[o+28>>>2>>>0]=m,(v(),R)[o>>>2>>>0]=d.getSeconds(),(v(),R)[o+4>>>2>>>0]=d.getMinutes(),(v(),R)[o+8>>>2>>>0]=d.getHours(),(v(),R)[o+12>>>2>>>0]=d.getDate(),(v(),R)[o+16>>>2>>>0]=d.getMonth(),(v(),R)[o+20>>>2>>>0]=d.getYear(),o=d.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function cs(o,d,m,c,$,k,z){return a?ve(16,1,o,d,m,c,$,k,z):-52}function hs(o,d,m,c,$,k){if(a)return ve(17,1,o,d,m,c,$,k)}var Qt={},ng=()=>performance.timeOrigin+performance.now();function fs(o,d){if(a)return ve(18,1,o,d);if(Qt[o]&&(clearTimeout(Qt[o].id),delete Qt[o]),!d)return 0;var m=setTimeout(()=>{delete Qt[o],Sr(()=>zs(o,performance.timeOrigin+performance.now()))},d);return Qt[o]={id:m,Yd:d},0}function sg(o,d,m,c){o>>>=0,d>>>=0,m>>>=0,c>>>=0;var $=new Date().getFullYear(),k=new Date($,0,1).getTimezoneOffset();$=new Date($,6,1).getTimezoneOffset();var z=Math.max(k,$);(v(),N)[o>>>2>>>0]=60*z,(v(),R)[d>>>2>>>0]=+(k!=$),o=(d=B=>{var L=Math.abs(B);return`UTC${0<=B?"-":"+"}${String(Math.floor(L/60)).padStart(2,"0")}${String(L%60).padStart(2,"0")}`})(k),d=d($),$<k?(ft(o,m,17),ft(d,c,17)):(ft(o,c,17),ft(d,m,17))}var og=()=>Date.now();function ug(o,d,m){return m>>>=0,0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),o=Math.round(1e6*o),(v(),ee)[m>>>3>>>0]=BigInt(o),0):28}var vi=[],ms=(o,d)=>{vi.length=0;for(var m;m=(v(),Y)[o++>>>0];){var c=m!=105;d+=(c&=m!=112)&&d%8?4:0,vi.push(m==112?(v(),N)[d>>>2>>>0]:m==106?(v(),ee)[d>>>3>>>0]:m==105?(v(),R)[d>>>2>>>0]:(v(),J)[d>>>3>>>0]),d+=c?8:4}return vi};function lg(o,d,m){return o>>>=0,d=ms(d>>>0,m>>>0),Ci[o](...d)}function dg(o,d,m){return o>>>=0,d=ms(d>>>0,m>>>0),Ci[o](...d)}var pg=()=>{};function cg(o,d){return I(ke(o>>>0,d>>>0))}var hg=()=>{throw Qe+=1,"unwind"};function fg(){return 4294901760}var mg=()=>navigator.hardwareConcurrency,St={},zr=o=>{var d;return(d=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(o))?+d[1]:(d=/:(\d+):\d+(?:\)|$)/.exec(o))?2147483648|+d[1]:0},gs=o=>{for(var d of o)(o=zr(d))&&(St[o]=d)};function gg(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),gs(o),St.gd=zr(o[3]),St.Jd=o,St.gd}function Cr(o){if(!(o=St[o>>>0]))return 0;var d;if(d=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(o))o=d[1];else if(d=/^\s+at (.*) \(.*\)$/.exec(o))o=d[1];else{if(!(d=/^(.+?)@/.exec(o)))return 0;o=d[1]}tt(Cr.hd??0),d=xr(o)+1;var m=Jt(d);return m&&ft(o,m,d),Cr.hd=m,Cr.hd}function yg(o){o>>>=0;var d=(v(),Y).length;if(o<=d||4294901760<o)return!1;for(var m=1;4>=m;m*=2){var c=d*(1+.2/m);c=Math.min(c,o+100663296);e:{c=(Math.min(4294901760,65536*Math.ceil(Math.max(o,c)/65536))-ht.buffer.byteLength+65535)/65536|0;try{ht.grow(c),Q();var $=1;break e}catch{}$=void 0}if($)return!0}return!1}function _g(o,d,m){if(o>>>=0,d>>>=0,St.gd==o)var c=St.Jd;else(c=Error().stack.toString().split(`
`))[0]=="Error"&&c.shift(),gs(c);for(var $=3;c[$]&&zr(c[$])!=o;)++$;for(o=0;o<m&&c[o+$];++o)(v(),R)[d+4*o>>>2>>>0]=zr(c[o+$]);return o}var xi,Si={},ys=()=>{if(!xi){var o,d={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in Si)Si[o]===void 0?delete d[o]:d[o]=Si[o];var m=[];for(o in d)m.push(`${o}=${d[o]}`);xi=m}return xi};function _s(o,d){if(a)return ve(19,1,o,d);o>>>=0,d>>>=0;var m,c=0,$=0;for(m of ys()){var k=d+c;(v(),N)[o+$>>>2>>>0]=k,c+=ft(m,k,1/0)+1,$+=4}return 0}function bs(o,d){if(a)return ve(20,1,o,d);o>>>=0,d>>>=0;var m=ys();for(var c of((v(),N)[o>>>2>>>0]=m.length,o=0,m))o+=xr(c)+1;return(v(),N)[d>>>2>>>0]=o,0}function ws(o){return a?ve(21,1,o):52}function $s(o,d,m,c){return a?ve(22,1,o,d,m,c):52}function vs(o,d,m,c){return a?ve(23,1,o,d,m,c):70}var bg=[null,[],[]];function xs(o,d,m,c){if(a)return ve(24,1,o,d,m,c);d>>>=0,m>>>=0,c>>>=0;for(var $=0,k=0;k<m;k++){var z=(v(),N)[d>>>2>>>0],B=(v(),N)[d+4>>>2>>>0];d+=8;for(var L=0;L<B;L++){var W=o,se=(v(),Y)[z+L>>>0],pe=bg[W];se===0||se===10?((W===1?S:I)(Ln(pe)),pe.length=0):pe.push(se)}$+=B}return(v(),N)[c>>>2>>>0]=$,0}function wg(o){return o>>>0}a||(function(){for(var o=t.numThreads-1;o--;)Bn();me.push(async()=>{var d=(async function(){if(!a)return Promise.all(ct.map(Rn))})();we++,await d,--we==0&&Be&&(d=Be,Be=null,d())})})(),a||(ht=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Q()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>ue(),t.stackRestore=o=>oe(o),t.stackAlloc=o=>Ei(o),t.setValue=function(o,d,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":(v(),q)[o>>>0]=d;break;case"i16":(v(),F)[o>>>1>>>0]=d;break;case"i32":(v(),R)[o>>>2>>>0]=d;break;case"i64":(v(),ee)[o>>>3>>>0]=BigInt(d);break;case"float":(v(),G)[o>>>2>>>0]=d;break;case"double":(v(),J)[o>>>3>>>0]=d;break;case"*":(v(),N)[o>>>2>>>0]=d;break;default:V(`invalid type for setValue: ${m}`)}},t.getValue=function(o,d="i8"){switch(d.endsWith("*")&&(d="*"),d){case"i1":case"i8":return(v(),q)[o>>>0];case"i16":return(v(),F)[o>>>1>>>0];case"i32":return(v(),R)[o>>>2>>>0];case"i64":return(v(),ee)[o>>>3>>>0];case"float":return(v(),G)[o>>>2>>>0];case"double":return(v(),J)[o>>>3>>>0];case"*":return(v(),N)[o>>>2>>>0];default:V(`invalid type for getValue: ${d}`)}},t.UTF8ToString=ke,t.stringToUTF8=ft,t.lengthBytesUTF8=xr;var Ss,Ts,Ar,tt,Jt,Ti,ks,Es,Is,ki,zs,Cs,le,er,As,oe,Ei,ue,Os,Ii,Rs,Bs,Ms,zi,Ns,Ds,Us,Ps,qs,Ls,Ws,Vs,Gs,Hs,Fs,js,Ks,Xs,Zs,Ys,Qs,Js,eo,to,ro,io,ao,no,so,oo,uo,lo,po,co,ho,fo,mo,go,yo,_o,bo,wo,$o,ot,$g=[li,zn,Dn,Wn,Vn,Gn,Hn,Fn,jn,Kn,Xn,Zn,Yn,Qn,Jn,es,cs,hs,fs,_s,bs,ws,$s,vs,xs],Ci={1003524:(o,d,m,c,$)=>{if(t===void 0||!t.Xc)return 1;if((o=ke(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=t.Xc.get(o)))return 2;if(d=Number(d>>>0),m=Number(m>>>0),c=Number(c>>>0),d+m>o.byteLength)return 3;try{let k=o.subarray(d,d+m);switch($){case 0:(v(),Y).set(k,c>>>0);break;case 1:t.Qd?t.Qd(c,k):t.Id(c,k);break;default:return 4}return 0}catch{return 4}},1004348:(o,d,m)=>{t.td(o,(v(),Y).subarray(d>>>0,d+m>>>0))},1004412:()=>t.Sd(),1004454:o=>{t.sd(o)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:o=>t.Ad(o),1004609:o=>t.Ed(o),1004641:(o,d,m)=>{t.ed(Number(o),Number(d),Number(m),!0)},1004704:(o,d,m)=>{t.ed(Number(o),Number(d),Number(m))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:o=>{t.$b("Abs",o,void 0)},1004869:o=>{t.$b("Neg",o,void 0)},1004920:o=>{t.$b("Floor",o,void 0)},1004973:o=>{t.$b("Ceil",o,void 0)},1005025:o=>{t.$b("Reciprocal",o,void 0)},1005083:o=>{t.$b("Sqrt",o,void 0)},1005135:o=>{t.$b("Exp",o,void 0)},1005186:o=>{t.$b("Erf",o,void 0)},1005237:o=>{t.$b("Sigmoid",o,void 0)},1005292:(o,d,m)=>{t.$b("HardSigmoid",o,{alpha:d,beta:m})},1005371:o=>{t.$b("Log",o,void 0)},1005422:o=>{t.$b("Sin",o,void 0)},1005473:o=>{t.$b("Cos",o,void 0)},1005524:o=>{t.$b("Tan",o,void 0)},1005575:o=>{t.$b("Asin",o,void 0)},1005627:o=>{t.$b("Acos",o,void 0)},1005679:o=>{t.$b("Atan",o,void 0)},1005731:o=>{t.$b("Sinh",o,void 0)},1005783:o=>{t.$b("Cosh",o,void 0)},1005835:o=>{t.$b("Asinh",o,void 0)},1005888:o=>{t.$b("Acosh",o,void 0)},1005941:o=>{t.$b("Atanh",o,void 0)},1005994:o=>{t.$b("Tanh",o,void 0)},1006046:o=>{t.$b("Not",o,void 0)},1006097:(o,d,m)=>{t.$b("Clip",o,{min:d,max:m})},1006166:o=>{t.$b("Clip",o,void 0)},1006218:(o,d)=>{t.$b("Elu",o,{alpha:d})},1006276:o=>{t.$b("Gelu",o,void 0)},1006328:o=>{t.$b("Relu",o,void 0)},1006380:(o,d)=>{t.$b("LeakyRelu",o,{alpha:d})},1006444:(o,d)=>{t.$b("ThresholdedRelu",o,{alpha:d})},1006514:(o,d)=>{t.$b("Cast",o,{to:d})},1006572:o=>{t.$b("Add",o,void 0)},1006623:o=>{t.$b("Sub",o,void 0)},1006674:o=>{t.$b("Mul",o,void 0)},1006725:o=>{t.$b("Div",o,void 0)},1006776:o=>{t.$b("Pow",o,void 0)},1006827:o=>{t.$b("Equal",o,void 0)},1006880:o=>{t.$b("Greater",o,void 0)},1006935:o=>{t.$b("GreaterOrEqual",o,void 0)},1006997:o=>{t.$b("Less",o,void 0)},1007049:o=>{t.$b("LessOrEqual",o,void 0)},1007108:(o,d,m,c,$)=>{t.$b("ReduceMean",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1007283:(o,d,m,c,$)=>{t.$b("ReduceMax",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1007457:(o,d,m,c,$)=>{t.$b("ReduceMin",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1007631:(o,d,m,c,$)=>{t.$b("ReduceProd",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1007806:(o,d,m,c,$)=>{t.$b("ReduceSum",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1007980:(o,d,m,c,$)=>{t.$b("ReduceL1",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1008153:(o,d,m,c,$)=>{t.$b("ReduceL2",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1008326:(o,d,m,c,$)=>{t.$b("ReduceLogSum",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1008503:(o,d,m,c,$)=>{t.$b("ReduceSumSquare",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1008683:(o,d,m,c,$)=>{t.$b("ReduceLogSumExp",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1008863:o=>{t.$b("Where",o,void 0)},1008916:(o,d,m)=>{t.$b("Transpose",o,{perm:d?Array.from((v(),R).subarray(Number(d)>>>0,Number(m)>>>0)):[]})},1009040:(o,d,m,c)=>{t.$b("DepthToSpace",o,{blocksize:d,mode:ke(m),format:c?"NHWC":"NCHW"})},1009173:(o,d,m,c)=>{t.$b("DepthToSpace",o,{blocksize:d,mode:ke(m),format:c?"NHWC":"NCHW"})},1009306:(o,d,m,c,$,k,z,B,L,W,se,pe,ge,be,gt)=>{t.$b("ConvTranspose",o,{format:L?"NHWC":"NCHW",autoPad:d,dilations:[m],group:c,kernelShape:[$],pads:[k,z],strides:[B],wIsConst:()=>!!(v(),q)[W>>>0],outputPadding:se?Array.from((v(),R).subarray(Number(se)>>>0,Number(pe)>>>0)):[],outputShape:ge?Array.from((v(),R).subarray(Number(ge)>>>0,Number(be)>>>0)):[],activation:ke(gt)})},1009739:(o,d,m,c,$,k,z,B,L,W,se,pe,ge,be)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:d,dilations:Array.from((v(),R).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:c,kernelShape:Array.from((v(),R).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),pads:Array.from((v(),R).subarray(Number(k)>>>0,(Number(k)>>>0)+4>>>0)),strides:Array.from((v(),R).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(v(),q)[L>>>0],outputPadding:W?Array.from((v(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],outputShape:pe?Array.from((v(),R).subarray(Number(pe)>>>0,Number(ge)>>>0)):[],activation:ke(be)})},1010400:(o,d,m,c,$,k,z,B,L,W,se,pe,ge,be,gt)=>{t.$b("ConvTranspose",o,{format:L?"NHWC":"NCHW",autoPad:d,dilations:[m],group:c,kernelShape:[$],pads:[k,z],strides:[B],wIsConst:()=>!!(v(),q)[W>>>0],outputPadding:se?Array.from((v(),R).subarray(Number(se)>>>0,Number(pe)>>>0)):[],outputShape:ge?Array.from((v(),R).subarray(Number(ge)>>>0,Number(be)>>>0)):[],activation:ke(gt)})},1010833:(o,d,m,c,$,k,z,B,L,W,se,pe,ge,be)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:d,dilations:Array.from((v(),R).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:c,kernelShape:Array.from((v(),R).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),pads:Array.from((v(),R).subarray(Number(k)>>>0,(Number(k)>>>0)+4>>>0)),strides:Array.from((v(),R).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(v(),q)[L>>>0],outputPadding:W?Array.from((v(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],outputShape:pe?Array.from((v(),R).subarray(Number(pe)>>>0,Number(ge)>>>0)):[],activation:ke(be)})},1011494:(o,d)=>{t.$b("GlobalAveragePool",o,{format:d?"NHWC":"NCHW"})},1011585:(o,d,m,c,$,k,z,B,L,W,se,pe,ge,be)=>{t.$b("AveragePool",o,{format:be?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:c,storage_order:$,dilations:k?Array.from((v(),R).subarray(Number(k)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from((v(),R).subarray(Number(B)>>>0,Number(L)>>>0)):[],pads:W?Array.from((v(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],strides:pe?Array.from((v(),R).subarray(Number(pe)>>>0,Number(ge)>>>0)):[]})},1012064:(o,d)=>{t.$b("GlobalAveragePool",o,{format:d?"NHWC":"NCHW"})},1012155:(o,d,m,c,$,k,z,B,L,W,se,pe,ge,be)=>{t.$b("AveragePool",o,{format:be?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:c,storage_order:$,dilations:k?Array.from((v(),R).subarray(Number(k)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from((v(),R).subarray(Number(B)>>>0,Number(L)>>>0)):[],pads:W?Array.from((v(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],strides:pe?Array.from((v(),R).subarray(Number(pe)>>>0,Number(ge)>>>0)):[]})},1012634:(o,d)=>{t.$b("GlobalMaxPool",o,{format:d?"NHWC":"NCHW"})},1012721:(o,d,m,c,$,k,z,B,L,W,se,pe,ge,be)=>{t.$b("MaxPool",o,{format:be?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:c,storage_order:$,dilations:k?Array.from((v(),R).subarray(Number(k)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from((v(),R).subarray(Number(B)>>>0,Number(L)>>>0)):[],pads:W?Array.from((v(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],strides:pe?Array.from((v(),R).subarray(Number(pe)>>>0,Number(ge)>>>0)):[]})},1013196:(o,d)=>{t.$b("GlobalMaxPool",o,{format:d?"NHWC":"NCHW"})},1013283:(o,d,m,c,$,k,z,B,L,W,se,pe,ge,be)=>{t.$b("MaxPool",o,{format:be?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:c,storage_order:$,dilations:k?Array.from((v(),R).subarray(Number(k)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from((v(),R).subarray(Number(B)>>>0,Number(L)>>>0)):[],pads:W?Array.from((v(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],strides:pe?Array.from((v(),R).subarray(Number(pe)>>>0,Number(ge)>>>0)):[]})},1013758:(o,d,m,c,$)=>{t.$b("Gemm",o,{alpha:d,beta:m,transA:c,transB:$})},1013862:o=>{t.$b("MatMul",o,void 0)},1013916:(o,d,m,c)=>{t.$b("ArgMax",o,{keepDims:!!d,selectLastIndex:!!m,axis:c})},1014024:(o,d,m,c)=>{t.$b("ArgMin",o,{keepDims:!!d,selectLastIndex:!!m,axis:c})},1014132:(o,d)=>{t.$b("Softmax",o,{axis:d})},1014195:(o,d)=>{t.$b("Concat",o,{axis:d})},1014255:(o,d,m,c,$)=>{t.$b("Split",o,{axis:d,numOutputs:m,splitSizes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1014411:o=>{t.$b("Expand",o,void 0)},1014465:(o,d)=>{t.$b("Gather",o,{axis:Number(d)})},1014536:(o,d)=>{t.$b("GatherElements",o,{axis:Number(d)})},1014615:(o,d)=>{t.$b("GatherND",o,{batch_dims:Number(d)})},1014694:(o,d,m,c,$,k,z,B,L,W,se)=>{t.$b("Resize",o,{antialias:d,axes:m?Array.from((v(),R).subarray(Number(m)>>>0,Number(c)>>>0)):[],coordinateTransformMode:ke($),cubicCoeffA:k,excludeOutside:z,extrapolationValue:B,keepAspectRatioPolicy:ke(L),mode:ke(W),nearestMode:ke(se)})},1015056:(o,d,m,c,$,k,z)=>{t.$b("Slice",o,{starts:d?Array.from((v(),R).subarray(Number(d)>>>0,Number(m)>>>0)):[],ends:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[],axes:k?Array.from((v(),R).subarray(Number(k)>>>0,Number(z)>>>0)):[]})},1015320:o=>{t.$b("Tile",o,void 0)},1015372:(o,d,m)=>{t.$b("InstanceNormalization",o,{epsilon:d,format:m?"NHWC":"NCHW"})},1015486:(o,d,m)=>{t.$b("InstanceNormalization",o,{epsilon:d,format:m?"NHWC":"NCHW"})},1015600:o=>{t.$b("Range",o,void 0)},1015653:(o,d)=>{t.$b("Einsum",o,{equation:ke(d)})},1015734:(o,d,m,c,$)=>{t.$b("Pad",o,{mode:d,value:m,pads:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1015877:(o,d,m,c,$,k)=>{t.$b("BatchNormalization",o,{epsilon:d,momentum:m,spatial:!!$,trainingMode:!!c,format:k?"NHWC":"NCHW"})},1016046:(o,d,m,c,$,k)=>{t.$b("BatchNormalization",o,{epsilon:d,momentum:m,spatial:!!$,trainingMode:!!c,format:k?"NHWC":"NCHW"})},1016215:(o,d,m)=>{t.$b("CumSum",o,{exclusive:Number(d),reverse:Number(m)})},1016312:(o,d,m)=>{t.$b("DequantizeLinear",o,{axis:d,blockSize:m})},1016402:(o,d,m,c,$)=>{t.$b("GridSample",o,{align_corners:d,mode:ke(m),padding_mode:ke(c),format:$?"NHWC":"NCHW"})},1016572:(o,d,m,c,$)=>{t.$b("GridSample",o,{align_corners:d,mode:ke(m),padding_mode:ke(c),format:$?"NHWC":"NCHW"})},1016742:(o,d)=>{t.$b("ScatterND",o,{reduction:ke(d)})},1016827:(o,d,m,c,$,k,z,B,L)=>{t.$b("Attention",o,{numHeads:d,isUnidirectional:m,maskFilterValue:c,scale:$,doRotary:k,qkvHiddenSizes:z?Array.from((v(),R).subarray(Number(B)>>>0,Number(B)+z>>>0)):[],pastPresentShareBuffer:!!L})},1017099:o=>{t.$b("BiasAdd",o,void 0)},1017154:o=>{t.$b("BiasSplitGelu",o,void 0)},1017215:o=>{t.$b("FastGelu",o,void 0)},1017271:(o,d,m,c,$,k,z,B,L,W,se,pe,ge,be,gt,Ai)=>{t.$b("Conv",o,{format:pe?"NHWC":"NCHW",auto_pad:d,dilations:m?Array.from((v(),R).subarray(Number(m)>>>0,Number(c)>>>0)):[],group:$,kernel_shape:k?Array.from((v(),R).subarray(Number(k)>>>0,Number(z)>>>0)):[],pads:B?Array.from((v(),R).subarray(Number(B)>>>0,Number(L)>>>0)):[],strides:W?Array.from((v(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],w_is_const:()=>!!(v(),q)[Number(ge)>>>0],activation:ke(be),activation_params:gt?Array.from((v(),G).subarray(Number(gt)>>>0,Number(Ai)>>>0)):[]})},1017855:o=>{t.$b("Gelu",o,void 0)},1017907:(o,d,m,c,$,k,z,B,L)=>{t.$b("GroupQueryAttention",o,{numHeads:d,kvNumHeads:m,scale:c,softcap:$,doRotary:k,rotaryInterleaved:z,smoothSoftmax:B,localWindowSize:L})},1018124:(o,d,m,c)=>{t.$b("LayerNormalization",o,{axis:d,epsilon:m,simplified:!!c})},1018235:(o,d,m,c)=>{t.$b("LayerNormalization",o,{axis:d,epsilon:m,simplified:!!c})},1018346:(o,d,m,c,$,k)=>{t.$b("MatMulNBits",o,{k:d,n:m,accuracyLevel:c,bits:$,blockSize:k})},1018473:(o,d,m,c,$,k)=>{t.$b("MultiHeadAttention",o,{numHeads:d,isUnidirectional:m,maskFilterValue:c,scale:$,doRotary:k})},1018632:(o,d)=>{t.$b("QuickGelu",o,{alpha:d})},1018696:(o,d,m,c,$)=>{t.$b("RotaryEmbedding",o,{interleaved:!!d,numHeads:m,rotaryEmbeddingDim:c,scale:$})},1018835:(o,d,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:d,simplified:!!m})},1018937:(o,d,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:d,simplified:!!m})},1019039:(o,d,m,c)=>{t.$b("GatherBlockQuantized",o,{gatherAxis:d,quantizeAxis:m,blockSize:c})},1019160:o=>{t.Fd(o)},1019194:(o,d)=>t.Hd(Number(o),Number(d),t.Yc.Kd,t.Yc.errors)};function vg(o,d,m){return os(async()=>{await t.Dd(Number(o),Number(d),Number(m))})}function xg(){return typeof wasmOffsetConverter<"u"}function Sg(o,d,m,c){var $=ue();try{return Vs(o,d,m,c)}catch(k){if(oe($),k!==k+0)throw k;le(1,0)}}function Tg(o,d,m){var c=ue();try{return Ps(o,d,m)}catch($){if(oe(c),$!==$+0)throw $;le(1,0)}}function kg(o){var d=ue();try{Ns(o)}catch(m){if(oe(d),m!==m+0)throw m;le(1,0)}}function Eg(o,d){var m=ue();try{return zi(o,d)}catch(c){if(oe(m),c!==c+0)throw c;le(1,0)}}function Ig(o,d,m){var c=ue();try{Ms(o,d,m)}catch($){if(oe(c),$!==$+0)throw $;le(1,0)}}function zg(o,d){var m=ue();try{Gs(o,d)}catch(c){if(oe(m),c!==c+0)throw c;le(1,0)}}function Cg(o,d,m,c,$,k,z){var B=ue();try{return Ls(o,d,m,c,$,k,z)}catch(L){if(oe(B),L!==L+0)throw L;le(1,0)}}function Ag(o,d,m,c,$,k){var z=ue();try{Ds(o,d,m,c,$,k)}catch(B){if(oe(z),B!==B+0)throw B;le(1,0)}}function Og(o,d,m,c){var $=ue();try{Ws(o,d,m,c)}catch(k){if(oe($),k!==k+0)throw k;le(1,0)}}function Rg(o,d,m,c,$){var k=ue();try{Us(o,d,m,c,$)}catch(z){if(oe(k),z!==z+0)throw z;le(1,0)}}function Bg(o,d,m,c,$,k,z){var B=ue();try{Fs(o,d,m,c,$,k,z)}catch(L){if(oe(B),L!==L+0)throw L;le(1,0)}}function Mg(o,d,m,c,$,k,z){var B=ue();try{js(o,d,m,c,$,k,z)}catch(L){if(oe(B),L!==L+0)throw L;le(1,0)}}function Ng(o,d,m,c,$,k,z,B){var L=ue();try{Ys(o,d,m,c,$,k,z,B)}catch(W){if(oe(L),W!==W+0)throw W;le(1,0)}}function Dg(o,d,m,c,$){var k=ue();try{return Hs(o,d,m,c,$)}catch(z){if(oe(k),z!==z+0)throw z;le(1,0)}}function Ug(o,d,m){var c=ue();try{return Qs(o,d,m)}catch($){if(oe(c),$!==$+0)throw $;le(1,0)}}function Pg(o,d,m,c,$,k,z,B){var L=ue();try{Js(o,d,m,c,$,k,z,B)}catch(W){if(oe(L),W!==W+0)throw W;le(1,0)}}function qg(o,d,m,c,$,k,z,B,L,W,se,pe){var ge=ue();try{Ks(o,d,m,c,$,k,z,B,L,W,se,pe)}catch(be){if(oe(ge),be!==be+0)throw be;le(1,0)}}function Lg(o,d,m,c,$,k){var z=ue();try{return Xs(o,d,m,c,$,k)}catch(B){if(oe(z),B!==B+0)throw B;le(1,0)}}function Wg(o,d,m){var c=ue();try{return eo(o,d,m)}catch($){if(oe(c),$!==$+0)throw $;return le(1,0),0n}}function Vg(o,d,m,c,$,k,z,B,L){var W=ue();try{qs(o,d,m,c,$,k,z,B,L)}catch(se){if(oe(W),se!==se+0)throw se;le(1,0)}}function Gg(o){var d=ue();try{return to(o)}catch(m){if(oe(d),m!==m+0)throw m;le(1,0)}}function Hg(o,d){var m=ue();try{return yo(o,d)}catch(c){if(oe(m),c!==c+0)throw c;return le(1,0),0n}}function Fg(o){var d=ue();try{return ro(o)}catch(m){if(oe(d),m!==m+0)throw m;return le(1,0),0n}}function jg(o,d,m,c){var $=ue();try{return uo(o,d,m,c)}catch(k){if(oe($),k!==k+0)throw k;le(1,0)}}function Kg(o,d,m,c,$){var k=ue();try{return lo(o,d,m,c,$)}catch(z){if(oe(k),z!==z+0)throw z;le(1,0)}}function Xg(o,d,m,c,$,k){var z=ue();try{return po(o,d,m,c,$,k)}catch(B){if(oe(z),B!==B+0)throw B;le(1,0)}}function Zg(o,d,m,c,$,k){var z=ue();try{return co(o,d,m,c,$,k)}catch(B){if(oe(z),B!==B+0)throw B;le(1,0)}}function Yg(o,d,m,c,$,k,z,B){var L=ue();try{return Zs(o,d,m,c,$,k,z,B)}catch(W){if(oe(L),W!==W+0)throw W;le(1,0)}}function Qg(o,d,m,c,$){var k=ue();try{return ho(o,d,m,c,$)}catch(z){if(oe(k),z!==z+0)throw z;return le(1,0),0n}}function Jg(o,d,m,c){var $=ue();try{return fo(o,d,m,c)}catch(k){if(oe($),k!==k+0)throw k;le(1,0)}}function e0(o,d,m,c){var $=ue();try{return mo(o,d,m,c)}catch(k){if(oe($),k!==k+0)throw k;le(1,0)}}function t0(o,d,m,c,$,k,z,B,L,W,se,pe){var ge=ue();try{return go(o,d,m,c,$,k,z,B,L,W,se,pe)}catch(be){if(oe(ge),be!==be+0)throw be;le(1,0)}}function r0(o,d,m,c,$,k,z,B,L,W,se){var pe=ue();try{so(o,d,m,c,$,k,z,B,L,W,se)}catch(ge){if(oe(pe),ge!==ge+0)throw ge;le(1,0)}}function i0(o,d,m,c,$,k,z,B,L,W,se,pe,ge,be,gt,Ai){var o0=ue();try{oo(o,d,m,c,$,k,z,B,L,W,se,pe,ge,be,gt,Ai)}catch(Oi){if(oe(o0),Oi!==Oi+0)throw Oi;le(1,0)}}function a0(o,d,m){var c=ue();try{return io(o,d,m)}catch($){if(oe(c),$!==$+0)throw $;le(1,0)}}function n0(o,d,m){var c=ue();try{return ao(o,d,m)}catch($){if(oe(c),$!==$+0)throw $;le(1,0)}}function s0(o,d,m,c){var $=ue();try{no(o,d,m,c)}catch(k){if(oe($),k!==k+0)throw k;le(1,0)}}function Or(){if(0<we)Be=Or;else if(a)w?.(t),Z();else{for(var o=me;0<o.length;)o.shift()(t);0<we?Be=Or:(t.calledRun=!0,A||(Z(),w?.(t)))}}return a||(ot=await Ae(),Or()),t.PTR_SIZE=4,U?t:new Promise((o,d)=>{w=o,T=d})}var Ap,So,I0=P(()=>{Ap=xo,So=globalThis.self?.name?.startsWith("em-pthread"),So&&xo()}),Ui,Ca,To,Ne,Op,Br,ko,Eo,Pi,Io,qi,Rp,Li,Bp,en=P(()=>{Ja(),Ui=typeof location>"u"?void 0:location.origin,Ca=import.meta.url>"file:"&&import.meta.url<"file;",To=()=>{{if(Ca){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Ui).href}return import.meta.url}},Ne=To(),Op=()=>{if(Ne&&!Ne.startsWith("blob:"))return Ne.substring(0,Ne.lastIndexOf("/")+1)},Br=(e,t)=>{try{let r=t??Ne;return(r?new URL(e,r):new URL(e)).origin===Ui}catch{return!1}},ko=(e,t)=>{let r=t??Ne;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Eo=(e,t)=>`${t??"./"}${e}`,Pi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Io=async e=>(await import(e)).default,qi=(E0(),yr(Ip)).default,Rp=async()=>{if(!Ne)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Br(Ne))return[void 0,qi()];let e=await Pi(Ne);return[e,qi(e)]},Li=(I0(),yr(Cp)).default,Bp=async(e,t,r,i)=>{let a=Li&&!(e||t);if(a)if(Ne)a=Br(Ne)||i&&!r;else if(i&&!r)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,Li];{let n="ort-wasm-simd-threaded.jsep.mjs",s=e??ko(n,t),u=r&&s&&!Br(s,t),l=u?await Pi(s):s??Eo(n,t);return[u?l:void 0,await Io(l)]}}}),Wi,Mr,rr,Vi,zo,Co,Ao,tn,_e,Pt=P(()=>{en(),Mr=!1,rr=!1,Vi=!1,zo=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Co=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ao=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},tn=async e=>{if(Mr)return Promise.resolve();if(rr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Vi)throw new Error("previous call to 'initializeWebAssembly()' failed.");rr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Ao())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Co())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=zo();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,n=typeof a=="string"?a:void 0,s=a?.mjs,u=s?.href??s,l=a?.wasm,p=l?.href??l,h=e.wasmBinary,[f,g]=await Bp(u,n,r>1,!!h||!!p),y=!1,_=[];if(t>0&&_.push(new Promise(w=>{setTimeout(()=>{y=!0,w()},t)})),_.push(new Promise((w,T)=>{let x={numThreads:r};if(h)x.wasmBinary=h,x.locateFile=b=>b;else if(p||n)x.locateFile=b=>p??n+b;else if(u&&u.indexOf("blob:")!==0)x.locateFile=b=>new URL(b,u).href;else if(f){let b=Op();b&&(x.locateFile=E=>b+E)}g(x).then(b=>{rr=!1,Mr=!0,Wi=b,w(),f&&URL.revokeObjectURL(f)},b=>{rr=!1,Vi=!0,T(b)})})),await Promise.race(_),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},_e=()=>{if(Mr&&Wi)return Wi;throw new Error("WebAssembly is not initialized yet.")}}),Xe,Qr,fe,rn=P(()=>{Pt(),Xe=(e,t)=>{let r=_e(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},Qr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,n])=>{let s=t?t+a:a;if(typeof n=="object")Qr(n,s+".",r,i);else if(typeof n=="string"||typeof n=="number")i(s,n.toString());else if(typeof n=="boolean")i(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},fe=e=>{let t=_e(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let n=Number(t.getValue(a,i===4?"i32":"i64")),s=t.getValue(a+i,"*"),u=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),Mp,z0=P(()=>{Pt(),rn(),Mp=e=>{let t=_e(),r=0,i=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let n=0;return e?.tag!==void 0&&(n=Xe(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,n),r===0&&fe("Can't create run options."),e?.extra!==void 0&&Qr(e.extra,"",new WeakSet,(s,u)=>{let l=Xe(s,i),p=Xe(u,i);t._OrtAddRunConfigEntry(r,l,p)!==0&&fe(`Can't set a run config entry: ${s} - ${u}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),n}}}),Oo,Ro,Bo,Tt,Mo,Np,C0=P(()=>{Pt(),rn(),Oo=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Ro=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Bo=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Tt=(e,t,r,i)=>{let a=Xe(t,i),n=Xe(r,i);_e()._OrtAddSessionConfigEntry(e,a,n)!==0&&fe(`Can't set a session config entry: ${t} - ${r}.`)},Mo=async(e,t,r)=>{let i=t.executionProviders;for(let a of i){let n=typeof a=="string"?a:a.name,s=[];switch(n){case"webnn":if(n="WEBNN",Tt(e,"session.disable_quant_qdq","1",r),Tt(e,"session.disable_qdq_constant_folding","1",r),typeof a!="string"){let f=a?.deviceType;f&&Tt(e,"deviceType",f,r)}break;case"webgpu":if(n="JS",typeof a!="string"){let f=a;if(f?.preferredLayout){if(f.preferredLayout!=="NCHW"&&f.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${f.preferredLayout}`);Tt(e,"preferredLayout",f.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let u=Xe(n,r),l=s.length,p=0,h=0;if(l>0){p=_e()._malloc(l*_e().PTR_SIZE),r.push(p),h=_e()._malloc(l*_e().PTR_SIZE),r.push(h);for(let f=0;f<l;f++)_e().setValue(p+f*_e().PTR_SIZE,s[f][0],"*"),_e().setValue(h+f*_e().PTR_SIZE,s[f][1],"*")}await _e()._OrtAppendExecutionProvider(e,u,p,h,l)!==0&&fe(`Can't append execution provider: ${n}.`)}},Np=async e=>{let t=_e(),r=0,i=[],a=e||{};Bo(a);try{let n=Oo(a.graphOptimizationLevel??"all"),s=Ro(a.executionMode??"sequential"),u=typeof a.logId=="string"?Xe(a.logId,i):0,l=a.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let p=a.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let h=typeof a.optimizedModelFilePath=="string"?Xe(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(n,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,u,l,p,h),r===0&&fe("Can't create session options."),a.executionProviders&&await Mo(r,a,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);Tt(r,"enableGraphCapture",a.enableGraphCapture.toString(),i)}if(a.freeDimensionOverrides)for(let[f,g]of Object.entries(a.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let y=Xe(f,i);t._OrtAddFreeDimensionOverride(r,y,g)!==0&&fe(`Can't set a free dimension override: ${f} - ${g}.`)}return a.extra!==void 0&&Qr(a.extra,"",new WeakSet,(f,g)=>{Tt(r,f,g,i)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&fe("Can't release session options."),i.forEach(s=>t._free(s)),n}}}),At,dt,Ot,si,Jr,an,nn,Aa,te=P(()=>{At=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},dt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Ot=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,n)=>a*n,1);return r>0?Math.ceil(i*r):void 0},si=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Jr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},an=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",nn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Aa=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),sn,Dp=P(()=>{Ja(),sn=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let l=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let s=0;for(;;){let{done:u,value:l}=await a.read();if(u)break;let p=l.byteLength;new Uint8Array(n,s,p).set(l),s+=p}return new Uint8Array(n,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),No,Do,Uo,Po,on,qo,de,pt=P(()=>{te(),No=["V","I","W","E","F"],Do=(e,t)=>{console.log(`[${No[e]},${new Date().toISOString()}]${t}`)},on=(e,t)=>{Uo=e,Po=t},qo=(e,t)=>{let r=Jr(e),i=Jr(Uo);r>=i&&Do(r,typeof t=="function"?t():t)},de=(...e)=>{Po&&qo(...e)}}),Lo,Kt,O,ei,Up,Pp,qp,ie=P(()=>{Lo=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Kt=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(i<2||a<2)return;let u=Lo.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(u===void 0)return;[s[n-2],s[n-1]]=u}for(let u=r?3:1;u<=n;u++){let l=i-u<0?1:e[i-u],p=a-u<0?1:t[a-u];if(l!==p&&l>1&&p>1)return;let h=Math.max(l,p);if(l&&p)s[n-u]=Math.max(l,p);else{if(h>1)return;s[n-u]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},O=class jr{static size(t){return jr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),n=i-1;for(;n>=0;){if(t[n]%r===0){a[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return jr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return jr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[n])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,n)=>a+r[n]+r[n+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},ei=class cr{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<a.length){if(a[u]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let u=0;u<i.length;u++)if(u<n.length){if(n[u]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let u=0;u<i.length*2;u++)if(u<s.length){if(s[u]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[u]>=i[u]||s[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,n,s,u){if(u){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)cr.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],a[l],n,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,i,a,n,s,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return cr.computeShapeHelper(t,r,l,i,a,n,s,u),l}static computeConvOutputShape(t,r,i,a,n,s,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return cr.computeShapeHelper(!1,t,l,i,a,n,s,u),l}static computeShapeHelper(t,r,i,a,n,s,u,l){if(t)for(let p=0;p<r.length-2;p++)i.push(1);else for(let p=0;p<r.length-2;p++)i.push(cr.adjustPadAndReturnShape(r[p+2],a[p],n[p],s[p],u,p,p+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,a,n,s,u,l){let p=i*(a-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return n[s]=0,n[u]=0,Math.floor((t-p)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+r-1)/r-1)*r+a-t;return n[s]=Math.floor(l==="SAME_LOWER"?(h+1)/2:h/2),n[u]=h-n[s],Math.floor((t+h-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[s]+n[u]-p)/r+1)}},Up=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,u;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let l=-1;if(i?(u=r[0],l=1):(u=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(n<=0||u<=0||s<=0)throw new Error("invalid shape specified");if(a&&!Kt.isValidBroadcast(a,[n,u]))throw new Error("gemm: invalid bias shape for broadcast");return[n,u,s]}},Pp=-34028234663852886e22,qp=34028234663852886e22}),un,Lp=P(()=>{te(),un=(e,t)=>new(si(t))(e)}),Gi,Oa,Hi,Wo,Fi,Vo,ji,Ki,Xi,Go,Wp,A0=P(()=>{te(),pt(),Gi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Oa=(e,t)=>{if(t==="int32")return e;let r=Gi.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let a=e.byteLength/i,n=new(si(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let s=new Int32Array(a);for(let u=0;u<a;u++){let l=n[u];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[u]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&n.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(n,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Hi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(i.some(n=>n<-128||n>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(i,Number);return new Uint8Array(a.buffer)}case"uint8":{if(i.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(i,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Wo=1,Fi=()=>Wo++,Vo=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),ji=(e,t)=>{let r=Gi.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},Ki=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:a,shape:n,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=a,this.tensorShape=n,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return ji(this.dataType,this.tensorShape)}destroy(){de("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Hi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}setIsDataConverted(e){this.isDataConverted=e}},Xi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let a=this.tensorManager.getMLContext(e),n=this.tensorManager.getMLOpSupportLimits(e),s;if(!n?.input.dataTypes.includes(t)){if(s=Vo.get(t),!s||n?.input.dataTypes.includes(s))throw new Error(`WebNN backend does not support data type: ${t}`);de("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==ji(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let u=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,u,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Oa(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else de("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?Hi(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Go=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Fi();return this.tensorTrackersById.set(e,new Xi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,a){de("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");return n.ensureTensor(e,r,i,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){de("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=this.getMLContext(e),n=Fi(),s=new Ki({sessionId:e,context:a,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(n,new Xi(this,s)),this.externalTensors.add(s),n}async getCachedTensor(e,t,r,i,a,n,s){let u=this.getMLContext(e);for(let[p,h]of this.freeTensors.entries())if(h.canReuseTensor(u,t,r)){de("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let f=this.freeTensors.splice(p,1)[0];return f.sessionId=e,f}de("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:a,readable:n});return new Ki({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Wp=(...e)=>new Go(...e)}),ir,Ho,Vp,O0=P(()=>{te(),Pt(),Lp(),A0(),pt(),ir=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Ho=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,n)=>a===i[n]&&e[a]===t[a])},Vp=class{constructor(e){this.tensorManager=Wp(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,on(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){de("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){de("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)de("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>Ho(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){de("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,a){let n=ir.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,n,i,a)}async createTemporaryTensor(e,t,r){de("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=ir.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,i,r,!1);let n=this.temporarySessionTensorIds.get(e);return n?n.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!_e().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");de("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return un(r,t)}}registerMLTensor(e,t,r,i){let a=ir.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.registerTensor(e,t,a,i);return de("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${n}}`),n}registerMLConstant(e,t,r,i,a,n,s=!1){if(!n)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let l=n.get(u);if(!l)throw new Error(`File with name ${u} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let p=l.slice(t,t+r).buffer,h;switch(a.dataType){case"float32":h=new Float32Array(p);break;case"float16":h=typeof Float16Array<"u"?new Float16Array(p):new Uint16Array(p);break;case"int32":h=new Int32Array(p);break;case"uint32":h=new Uint32Array(p);break;case"int64":if(s){let f=Oa(new Uint8Array(p),"int64");h=new Int32Array(f.buffer),a.dataType="int32"}else h=new BigInt64Array(p);break;case"uint64":h=new BigUint64Array(p);break;case"int8":h=new Int8Array(p);break;case"int4":case"uint4":case"uint8":h=new Uint8Array(p);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return de("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(a,h)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=ir.get(At(t)),a=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!a?.input.dataTypes.includes(i):!!a?.output.dataTypes.includes(i)}flush(){}}}),ln=P(()=>{}),Zi,Nr,Dr,Fo,jo,Yi,Ra,Ko,Gp,R0=P(()=>{pt(),ln(),Zi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Nr=[],Dr=e=>Math.ceil(Number(e)/16)*16,Fo=e=>{for(let t=0;t<Nr.length;t++){let r=Nr[t];if(e<=r)return r}return Math.ceil(e/16)*16},jo=1,Yi=()=>jo++,Ra=async(e,t,r,i)=>{let a=Dr(r),n=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,a),e.flush(),await n.mapAsync(GPUMapMode.READ);let u=n.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{n.destroy()}},Ko=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Zi)Nr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,n=Dr(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=u.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,a)),u.unmap();let p=this.backend.device.createCommandEncoder();p.copyBufferToBuffer(u,0,s.gpuData.buffer,0,n),this.backend.device.queue.submit([p.finish()]),u.destroy(),de("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=Dr(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Yi();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),de("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Fo(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||n){let u=(a?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:Yi(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),de("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return de("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Ra(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Zi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(de("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Gp=(...e)=>new Ko(...e)}),Xo,he,Te=P(()=>{Xo=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},he=e=>new Xo(e)}),Xt,Ur,Ie,Re,X,Se,Ba,Ht,wt,j,ar,M,H,Hp,dn,Zo,Fp,ae=P(()=>{te(),ie(),Xt=64,Ur=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ie=(e,t=1)=>{let r=Ur(e,t);return typeof r=="string"?r:r[0]},Re=(e,t=1)=>{let r=Ur(e,t);return typeof r=="string"?r:r[1]},X=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:O.computeStrides(r)})}),t},Se=e=>e%4===0?4:e%2===0?2:1,Ba=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Ht=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,wt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,j=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,ar=(e,t,r,i,a)=>{let n=typeof r=="number",s=n?r:r.length,u=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,p=Ur(t,a),h=typeof p=="string"?p:p[1],f=typeof p=="string"?p:p[0],g={indices:l,value:h,storage:f,tensor:t},y=U=>typeof U=="string"?U:`${U}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=n?"uniforms.":"",T=`${w}${e}_shape`,x=`${w}${e}_strides`,b="";for(let U=0;U<s-1;U++)b+=`
    let dim${U} = current / ${j(x,U,s)};
    let rest${U} = current % ${j(x,U,s)};
    indices[${U}] = dim${U};
    current = rest${U};
    `;b+=`indices[${s-1}] = current;`;let E=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${b}
    return indices;
  }`,S=U=>(_.offsetToIndices=!0,s<2?U:`o2i_${e}(${U})`),I=[];if(s>=2)for(let U=s-1;U>=0;U--)I.push(`${j(x,U,s)} * (indices[${U}])`);let A=s<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${I.join("+")};
  }`,C=U=>(_.indicesToOffset=!0,s<2?U:`i2o_${e}(${U})`),v=(...U)=>s===0?"0u":`${g.indices}(${U.map(y).join(",")})`,D=(U,Q)=>s<2?`${U}`:`${j(U,Q,s)}`,q=(U,Q,Z)=>s<2?`${U}=${Z};`:`${j(U,Q,s)}=${Z};`,Y={},F=(U,Q)=>{_.broadcastedIndicesToOffset=!0;let Z=`${Q.name}broadcastedIndicesTo${e}Offset`;if(Z in Y)return`${Z}(${U})`;let V=[];for(let Ee=s-1;Ee>=0;Ee--){let Ae=Q.indicesGet("outputIndices",Ee+Q.rank-s);V.push(`${D(x,Ee)} * (${Ae} % ${D(T,Ee)})`)}return Y[Z]=`fn ${Z}(outputIndices: ${Q.type.indices}) -> u32 {
             return ${V.length>0?V.join("+"):"0u"};
           }`,`${Z}(${U})`},K=(U,Q)=>(()=>{if(g.storage===g.value)return`${e}[${U}]=${Q};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${U}]=vec2<u32>(u32(${Q}), select(0u, 0xFFFFFFFFu, ${Q} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${U}]=vec2<u32>(u32(${Q}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${U}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${Q}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),R=U=>(()=>{if(g.storage===g.value)return`${e}[${U}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${U}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${U}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${U}] & 0xFFu), bool(${e}[${U}] & 0xFF00u), bool(${e}[${U}] & 0xFF0000u), bool(${e}[${U}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),N=s<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${h} {
    return ${R(`i2o_${e}(indices)`)};
  }`,G=s<2?"":(()=>{let U=u.map(Z=>`d${Z}: u32`).join(", "),Q=u.map(Z=>`d${Z}`).join(", ");return`
  fn get_${e}(${U}) -> ${h} {
    return get_${e}ByIndices(${v(Q)});
  }`})(),J=(...U)=>{if(U.length!==s)throw new Error(`indices length must be ${s}`);let Q=U.map(y).join(",");return s===0?R("0u"):s===1?R(Q[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${Q})`)},ee=U=>s<2?R(U):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${U})`),re=s<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${h}) {
    ${K(`i2o_${e}(indices)`,"value")}
  }`,ne=s<2?"":(()=>{let U=u.map(Z=>`d${Z}: u32`).join(", "),Q=u.map(Z=>`d${Z}`).join(", ");return`
  fn set_${e}(${U}, value: ${h}) {
    set_${e}ByIndices(${v(Q)}, value);
  }`})();return{impl:()=>{let U=[],Q=!1;return _.offsetToIndices&&(U.push(E),Q=!0),_.indicesToOffset&&(U.push(A),Q=!0),_.broadcastedIndicesToOffset&&(Object.values(Y).forEach(Z=>U.push(Z)),Q=!0),_.set&&(U.push(ne),Q=!0),_.setByIndices&&(U.push(re),Q=!0),_.get&&(U.push(G),Q=!0),_.getByIndices&&(U.push(N),Q=!0),!n&&Q&&U.unshift(`const ${T} = ${g.indices}(${r.join(",")});`,`const ${x} = ${g.indices}(${O.computeStrides(r).join(",")});`),U.join(`
`)},type:g,offsetToIndices:S,indicesToOffset:C,broadcastedIndicesToOffset:F,indices:v,indicesGet:D,indicesSet:q,set:(...U)=>{if(U.length!==s+1)throw new Error(`indices length must be ${s}`);let Q=U[s];if(typeof Q!="string")throw new Error("value must be string");let Z=U.slice(0,s).map(y).join(",");return s===0?K("0u",Q):s===1?K(Z[0],Q):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${Z}, ${Q})`)},setByOffset:K,setByIndices:(U,Q)=>s<2?K(U,Q):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${U}, ${Q});`),get:J,getByOffset:R,getByIndices:ee,usage:i,name:e,strides:x,shape:T,rank:s}},M=(e,t,r,i=1)=>ar(e,t,r,"input",i),H=(e,t,r,i=1)=>ar(e,t,r,"output",i),Hp=(e,t,r)=>ar(e,t,r,"atomicOutput",1),dn=(e,t,r,i=1)=>ar(e,t,r,"internal",i),Zo=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Xt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Fp=(e,t)=>new Zo(e,t)}),Yo,Qi,Qo,Jo,eu,tu,Pe,jp,Kp,$t=P(()=>{te(),ie(),Te(),ae(),Yo=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Qi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Qo=(e,t)=>O.sortBasedOnPerm(e,Qi(e.length,t)),Jo=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)a+=`a[${e[n]}]=i[${n}];`;return a+="return a;}"},eu=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},tu=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Pe=(e,t)=>{let r=e.dataType,i=e.dims.length,a=Qi(i,t),n=Qo(e.dims,a),s=e.dims,u=n,l=i<2||tu(a,e.dims),p;if(l)return p=_=>{let w=M("input",r,s,4),T=H("output",r,u,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(w,T)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:p};let{newShape:h,newPerm:f}=eu(e.dims,a),g=O.areEqual(f,[2,3,1]),y=O.areEqual(f,[3,1,2]);if(h.length===2||g||y){s=g?[h[0],h[1]*h[2]]:y?[h[0]*h[1],h[2]]:h,u=[s[1],s[0]];let _=16;return p=w=>{let T=M("a",r,s.length),x=H("output",r,u.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(T,x)}
  var<workgroup> tile : array<array<${x.type.value}, ${_+1}>, ${_}>;
  ${w.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${T.getByIndices(`${T.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${x.setByIndices(`${x.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/_),y:Math.ceil(u[0]/_)},programUniforms:[{type:12,data:w},...X(s,u)]}},getShaderSource:p}}return p=_=>{let w=M("a",r,s.length),T=H("output",r,u.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(w,T)}

  ${Jo(a,i,w,T)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${T.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${T.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...X(s,u)]}},getShaderSource:p}},jp=(e,t)=>{Yo(e.inputs,t.perm),e.compute(Pe(e.inputs[0],t.perm))},Kp=e=>he({perm:e.perm})}),ru,iu,au,nu,su,ou,uu,lu,du,pu,Ge,Xp,Zp,Yp,Qp,Jp,ec,tc,rc,ic,ac,B0=P(()=>{te(),ie(),ae(),pn(),$t(),ru={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},iu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},au={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},nu={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},su=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},ou=(e,t)=>{let r=[],i=e.length;for(let n=0;n<i;n++)t.indexOf(n)===-1&&r.push(e[n]);let a=t.map(n=>e[n]);return[r,a]},uu=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?i.push(e[a++]):i.push(1);return i},lu=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},du=(e,t)=>{let r=[];if(!lu(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},pu=(e,t,r,i,a,n,s)=>{let u=r[0].dims,l=O.size(n),p=O.size(s),h=M("_A",r[0].dataType,u),f=H("output",a,n),g=64;l===1&&(g=256);let y=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,_=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(h,f)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${au[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${ru[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${iu[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${i==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${nu[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:l},programUniforms:[{type:12,data:p}]})}},Ge=(e,t,r,i)=>{let a=e.inputs.length===1?r:Ma(e.inputs,r),n=a.axes;n.length===0&&!a.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((y,_)=>_));let s=O.normalizeAxes(n,e.inputs[0].dims.length),u=s,l=e.inputs[0],p=du(u,e.inputs[0].dims.length);p.length>0&&(l=e.compute(Pe(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],u=su(u.length,l.dims.length));let[h,f]=ou(l.dims,u),g=h;a.keepDims&&(g=uu(h,s)),e.compute(pu(t,a.cacheKey,[l],i,e.inputs[0].dataType,g,f),{inputs:[l]})},Xp=(e,t)=>{Ge(e,"ReduceMeanShared",t,"mean")},Zp=(e,t)=>{Ge(e,"ReduceL1Shared",t,"l1")},Yp=(e,t)=>{Ge(e,"ReduceL2Shared",t,"l2")},Qp=(e,t)=>{Ge(e,"ReduceLogSumExpShared",t,"logSumExp")},Jp=(e,t)=>{Ge(e,"ReduceMaxShared",t,"max")},ec=(e,t)=>{Ge(e,"ReduceMinShared",t,"min")},tc=(e,t)=>{Ge(e,"ReduceProdShared",t,"prod")},rc=(e,t)=>{Ge(e,"ReduceSumShared",t,"sum")},ic=(e,t)=>{Ge(e,"ReduceSumSquareShared",t,"sumSquare")},ac=(e,t)=>{Ge(e,"ReduceLogSumShared",t,"logSum")}}),He,cu,ti,Ma,Fe,hu,fu,mu,gu,yu,_u,bu,wu,$u,vu,je,nc,sc,oc,uc,lc,dc,pc,cc,hc,fc,pn=P(()=>{te(),ie(),Te(),ae(),B0(),He=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},cu=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],ti=(e,t,r,i,a,n,s=!1,u=!1)=>{let l=[],p=r[0].dims,h=p.length,f=O.normalizeAxes(a,h),g=!u&&f.length===0;p.forEach((w,T)=>{g||f.indexOf(T)>=0?s&&l.push(1):l.push(w)});let y=l.length,_=O.size(l);return{name:e,shaderCache:t,getShaderSource:w=>{let T=[],x=M("_A",r[0].dataType,h),b=H("output",n,y),E=i(x,b,f),S=E[2];for(let I=0,A=0;I<h;I++)g||f.indexOf(I)>=0?(s&&A++,S=`for(var j${I}: u32 = 0; j${I} < ${p[I]}; j${I}++) {
                  ${E[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${x.indicesSet("input_indices",I,`j${I}`)}
                  ${S}
                }`):(T.push(`${x.indicesSet("input_indices",I,b.indicesGet("output_indices",A))};`),A++);return`

        ${w.registerUniform("output_size","u32").declareVariables(x,b)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${x.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${T.join(`
`)}
          ${E[0]}       // init ops for reduce max/min
          ${E[1]}
          ${S}
          ${E[3]}
          ${E.length===4?b.setByOffset("global_idx","value"):E.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:n}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...X(p,l)]})}},Ma=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),he({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Fe=(e,t,r,i)=>{let a=e.inputs,n=a.length===1?r:Ma(a,r);e.compute(ti(t,{hint:n.cacheKey,inputDependencies:["rank"]},[a[0]],n.noopWithEmptyAxes&&n.axes.length===0?cu:i,n.axes,a[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},hu=(e,t)=>{He(e.inputs),Fe(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},fu=(e,t)=>{He(e.inputs),Fe(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},mu=(e,t)=>{He(e.inputs),Fe(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},gu=(e,t)=>{He(e.inputs),Fe(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},yu=(e,t)=>{He(e.inputs),Fe(e,"ReduceMax",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},_u=(e,t)=>{He(e.inputs),Fe(e,"ReduceMean",t,(r,i,a)=>{let n=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},bu=(e,t)=>{He(e.inputs),Fe(e,"ReduceMin",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},wu=(e,t)=>{He(e.inputs),Fe(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},$u=(e,t)=>{He(e.inputs),Fe(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},vu=(e,t)=>{He(e.inputs),Fe(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},je=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?i*=e[n]:a*=e[n];return a<32&&i>1024},nc=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_u(e,t):Xp(e,t)},sc=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fu(e,t):Zp(e,t)},oc=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mu(e,t):Yp(e,t)},uc=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gu(e,t):Qp(e,t)},lc=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yu(e,t):Jp(e,t)},dc=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bu(e,t):ec(e,t)},pc=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wu(e,t):tc(e,t)},cc=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$u(e,t):rc(e,t)},hc=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vu(e,t):ic(e,t)},fc=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hu(e,t):ac(e,t)}}),Ji,mc,gc,Na,M0=P(()=>{te(),Te(),pn(),Ji=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},mc=(e,t)=>{Ji(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(ti("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},gc=(e,t)=>{Ji(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(ti("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Na=e=>he(e)}),xu,Pr,Su,Tu,ku,_r,Eu,yc,cn=P(()=>{te(),ie(),ln(),ae(),xu=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],u=e[5];if(s&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],p=r.dims[1],h=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=a.dims[0]/3,g=f,y=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let E of t.qkvHiddenSizes)if(E%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let _=p;if(f!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==f+g+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(s){if(g!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=s.dims[3])}let T=_+w,x=-1,b=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==p||u.dims[3]!==T)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:p,pastSequenceLength:w,kvSequenceLength:_,totalSequenceLength:T,maxSequenceLength:x,inputHiddenSize:h,hiddenSize:f,vHiddenSize:y,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Pr=(e,t,r)=>t&&e?`
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
    `,Su=(e,t,r,i,a,n,s,u)=>{let l=Se(s?1:n),p=64,h=n/l;h<p&&(p=32);let f=Math.ceil(n/l/p),g=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:h},{type:12,data:f}],y=Ie(e.dataType,l),_=Re(1,l),w=["type"];s&&w.push("type"),u&&w.push("type");let T=x=>{let b=H("x",e.dataType,e.dims,l),E=[b],S=s?M("seq_lens",s.dataType,s.dims):void 0;S&&E.push(S);let I=u?M("total_sequence_length_input",u.dataType,u.dims):void 0;I&&E.push(I);let A=Re(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${p}>;
  var<workgroup> thread_sum: array<f32, ${p}>;
  ${x.registerUniforms(C).declareVariables(...E)}
  ${x.mainStart([p,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Pr(S,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${p}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${p}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${p}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${A}(1.0) / ${A}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${A}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${p};${y};${l}`,inputDependencies:w},getShaderSource:T,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:g})}},Tu=(e,t,r,i,a,n,s,u,l)=>{let p=s+n.kvSequenceLength,h=[n.batchSize,n.numHeads,n.sequenceLength,p],f=e>1&&i,g=n.kvNumHeads?n.kvNumHeads:n.numHeads,y=f?[n.batchSize,g,p,n.headSize]:void 0,_=n.nReps?n.nReps:1,w=n.scale===0?1/Math.sqrt(n.headSize):n.scale,T=Se(n.headSize),x=n.headSize/T,b=12,E={x:Math.ceil(p/b),y:Math.ceil(n.sequenceLength/b),z:n.batchSize*n.numHeads},S=[{type:12,data:n.sequenceLength},{type:12,data:x},{type:12,data:p},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:w},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:_}],I=f&&i&&O.size(i.dims)>0,A=["type","type"];I&&A.push("type"),a&&A.push("type"),u&&A.push("type"),l&&A.push("type");let C=[{dims:h,dataType:t.dataType,gpuDataType:0}];f&&C.push({dims:y,dataType:t.dataType,gpuDataType:0});let v=D=>{let q=M("q",t.dataType,t.dims,T),Y=M("key",r.dataType,r.dims,T),F=[q,Y];if(I){let re=M("past_key",i.dataType,i.dims,T);F.push(re)}a&&F.push(M("attention_bias",a.dataType,a.dims));let K=u?M("seq_lens",u.dataType,u.dims):void 0;K&&F.push(K);let R=l?M("total_sequence_length_input",l.dataType,l.dims):void 0;R&&F.push(R);let N=H("output",t.dataType,h),G=[N];f&&G.push(H("present_key",t.dataType,y,T));let J=Re(1,T),ee=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${q.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${q.type.storage}, ${b*b}>;
  ${D.registerUniforms(ee).declareVariables(...F,...G)}
  ${D.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Pr(K,R,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${J}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
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
      var sum: f32 = ${(()=>{switch(T){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${T}`)}})()};
        output[outputIdx] = ${N.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${T};${a!==void 0};${i!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:C,dispatchGroup:E,programUniforms:S}),getShaderSource:v}},ku=(e,t,r,i,a,n,s=void 0,u=void 0)=>{let l=n+a.kvSequenceLength,p=a.nReps?a.nReps:1,h=a.vHiddenSize*p,f=e>1&&i,g=a.kvNumHeads?a.kvNumHeads:a.numHeads,y=f?[a.batchSize,g,l,a.headSize]:void 0,_=[a.batchSize,a.sequenceLength,h],w=12,T={x:Math.ceil(a.vHeadSize/w),y:Math.ceil(a.sequenceLength/w),z:a.batchSize*a.numHeads},x=[{type:12,data:a.sequenceLength},{type:12,data:l},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:h},{type:12,data:n},{type:12,data:a.kvSequenceLength},{type:12,data:p}],b=f&&i&&O.size(i.dims)>0,E=["type","type"];b&&E.push("type"),s&&E.push("type"),u&&E.push("type");let S=[{dims:_,dataType:t.dataType,gpuDataType:0}];f&&S.push({dims:y,dataType:t.dataType,gpuDataType:0});let I=A=>{let C=M("probs",t.dataType,t.dims),v=M("v",r.dataType,r.dims),D=[C,v];b&&D.push(M("past_value",i.dataType,i.dims));let q=s?M("seq_lens",s.dataType,s.dims):void 0;s&&D.push(q);let Y=u?M("total_sequence_length_input",u.dataType,u.dims):void 0;u&&D.push(Y);let F=[H("output",t.dataType,_)];f&&F.push(H("present_value",t.dataType,y));let K=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${C.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${C.type.value}, ${w*w}>;
  ${A.registerUniforms(K).declareVariables(...D,...F)}
  ${A.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${p===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${p===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Pr(q,Y,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:S,dispatchGroup:T,programUniforms:x}),getShaderSource:I}},_r=(e,t,r,i,a,n,s,u,l,p,h=void 0,f=void 0)=>{let g=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),y=g>1?s:void 0,_=g>1?u:void 0,w=g>1?p.pastSequenceLength:0,T=w+p.kvSequenceLength,x=l&&O.size(l.dims)>0?l:void 0,b=[t,r];y&&O.size(y.dims)>0&&b.push(y),x&&b.push(x),h&&b.push(h),f&&b.push(f);let E=e.compute(Tu(g,t,r,y,x,p,w,h,f),{inputs:b,outputs:g>1?[-1,1]:[-1]})[0];e.compute(Su(E,p.batchSize,p.numHeads,w,p.sequenceLength,T,h,f),{inputs:h&&f?[E,h,f]:[E],outputs:[]});let S=[E,i];_&&O.size(_.dims)>0&&S.push(_),h&&S.push(h),f&&S.push(f),e.compute(ku(g,E,i,_,p,w,h,f),{inputs:S,outputs:g>1?[0,2]:[0]})},Eu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,n=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=f=>{let g=H("output_q",l[0].dataType,r),y=H("output_k",l[0].dataType,r),_=H("output_v",l[0].dataType,r),w=M("input",l[0].dataType,l[0].dims),T=M("weight",l[1].dataType,l[1].dims),x=M("bias",l[2].dataType,l[2].dims),b=w.type.storage,E=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${b}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${b}, ${s*s}>;
  var<workgroup> tileWeightK: array<${b}, ${s*s}>;
  var<workgroup> tileWeightV: array<${b}, ${s*s}>;
  ${f.registerUniforms(E).declareVariables(w,T,x,g,y,_)}
  ${f.mainStart([s,s,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:p}),getShaderSource:h},{inputs:l,outputs:[-1,-1,-1]})},yc=(e,t)=>{let r=xu(e.inputs,t),[i,a,n]=Eu(e,r);return _r(e,i,a,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Iu,zu,Cu,_c,N0=P(()=>{We(),te(),ie(),Te(),ae(),Iu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,n)=>{let s=a.length;if(s!==i.length)throw new Error(`${n}: num dimensions != ${s}`);a.forEach((u,l)=>{if(u!==i[l])throw new Error(`${n}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},zu=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,n=e[0].dims,s=i?Se(n[n.length-1]):1,u=a==="NHWC"&&n.length>1?s:1,l=O.size(n)/s,p=i,h=p?n.length:n,f=M("x",e[0].dataType,e[0].dims,s),g=M("scale",e[1].dataType,e[1].dims,u),y=M("bias",e[2].dataType,e[2].dims,u),_=M("inputMean",e[3].dataType,e[3].dims,u),w=M("inputVar",e[4].dataType,e[4].dims,u),T=H("y",e[0].dataType,h,s),x=()=>{let E="";if(i)E=`let cOffset = ${n.length===1?"0u":a==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")E=`
            ${T.indicesSet("outputIndices","0","0")}
            let cOffset = ${T.indicesToOffset("outputIndices")};`;else{E=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let S=1;S<g.rank;S++)E+=`cIndices[${S}] = outputIndices[${S}];`;E+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return E},b=E=>`
  const epsilon = ${r};
  ${E.registerUniform("outputSize","u32").declareVariables(f,g,y,_,w,T)}
  ${E.mainStart()}
  ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${T.offsetToIndices(`global_idx * ${s}`)};
    ${x()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${T.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p?[{type:12,data:l},...X(n)]:[{type:12,data:l}]})}},Cu=e=>he(e),_c=(e,t)=>{let{inputs:r,outputCount:i}=e,a=Cu({...t,outputCount:i});if(ye.webgpu.validateInputContent&&Iu(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(zu(r,a))}}),Au,Ou,bc,D0=P(()=>{ie(),ae(),Au=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ou=e=>{let t=e[0].dims,r=e[0].dims[2],i=O.size(t)/4,a=e[0].dataType,n=M("input",a,t,4),s=M("bias",a,[r],4),u=M("residual",a,t,4),l=H("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(n,s,u,l)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},bc=e=>{Au(e.inputs),e.compute(Ou(e.inputs))}}),Ru,ce,wc,$c,vc,xc,Sc,Tc,kc,Ec,Ic,Bu,zc,Cc,Ac,Oc,hr,Rc,Kr,Bc,Mc,Nc,Dc,Uc,Pc,qc,Lc,Wc,Vc,Gc,Hc,Fc,jc,Kc,Xc,ea,Zc,Da,Ua,Yc,Qc,Jc,Mu,Nu,eh,hn=P(()=>{te(),ie(),Te(),ae(),Ru=(e,t,r,i,a,n,s)=>{let u=Math.ceil(t/4),l="";typeof a=="string"?l=`${a}(a)`:l=a("a");let p=M("inputData",r,[u],4),h=H("outputData",i,[u],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(p,h)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",l)}
  }`},ce=(e,t,r,i,a,n=e.dataType,s,u)=>{let l=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:p=>Ru(p,O.size(e.dims),e.dataType,n,r,i,u),getRunData:p=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(O.size(p[0].dims)/64/4)},programUniforms:l})}},wc=e=>{e.compute(ce(e.inputs[0],"Abs","abs"))},$c=e=>{e.compute(ce(e.inputs[0],"Acos","acos"))},vc=e=>{e.compute(ce(e.inputs[0],"Acosh","acosh"))},xc=e=>{e.compute(ce(e.inputs[0],"Asin","asin"))},Sc=e=>{e.compute(ce(e.inputs[0],"Asinh","asinh"))},Tc=e=>{e.compute(ce(e.inputs[0],"Atan","atan"))},kc=e=>{e.compute(ce(e.inputs[0],"Atanh","atanh"))},Ec=e=>he(e),Ic=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ce(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Bu=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return he({min:t,max:r})},zc=(e,t)=>{let r=t||Bu(e.inputs),i=Re(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Cc=e=>{e.compute(ce(e.inputs[0],"Ceil","ceil"))},Ac=e=>{e.compute(ce(e.inputs[0],"Cos","cos"))},Oc=e=>{e.compute(ce(e.inputs[0],"Cosh","cosh"))},hr=e=>he(e),Rc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Kr=(e="f32")=>`
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
}`,Bc=e=>{let t=Re(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Kr(t)))},Mc=e=>{e.compute(ce(e.inputs[0],"Exp","exp"))},Nc=e=>{e.compute(ce(e.inputs[0],"Floor","floor"))},Dc=e=>{let t=Re(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Kr(t)))},Uc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Pc=e=>{e.compute(ce(e.inputs[0],"Not",t=>`!${t}`))},qc=e=>{e.compute(ce(e.inputs[0],"Neg",t=>`-${t}`))},Lc=e=>{e.compute(ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Wc=e=>{let t=Re(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Vc=e=>{e.compute(ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Gc=e=>he(e),Hc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Fc=e=>{e.compute(ce(e.inputs[0],"Sin","sin"))},jc=e=>{e.compute(ce(e.inputs[0],"Sinh","sinh"))},Kc=e=>{e.compute(ce(e.inputs[0],"Sqrt","sqrt"))},Xc=e=>{e.compute(ce(e.inputs[0],"Tan","tan"))},ea=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Zc=e=>{e.compute(ce(e.inputs[0],"Tanh",ea))},Da=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ea("v")};
}
`,Ua=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Yc=e=>{let t=Re(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"FastGelu",Ua,Da(t),void 0,e.inputs[0].dataType))},Qc=(e,t)=>{let r=Re(e.inputs[0].dataType);return e.compute(ce(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Jc=e=>{e.compute(ce(e.inputs[0],"Log","log"))},Mu=(e,t)=>`
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
`,Nu=e=>`quick_gelu_impl(${e})`,eh=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"QuickGelu",Nu,Mu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Du,Uu,th,U0=P(()=>{ie(),ae(),hn(),Du=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Uu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=M("input",e[0].dataType,e[0].dims,4),i=M("bias",e[0].dataType,[e[0].dims[2]],4),a=H("output",e[0].dataType,t,4),n=O.size(t)/4,s=Ie(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,i,a)}

  ${Kr(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},th=e=>{Du(e.inputs),e.compute(Uu(e.inputs))}}),Pu,qu,Ke,rh,ih,ah,nh,sh,oh,uh,lh,dh,ph,P0=P(()=>{te(),ie(),ae(),Pu=(e,t,r,i,a,n,s,u,l,p,h,f)=>{let g,y;typeof u=="string"?g=y=(b,E)=>`${u}((${b}),(${E}))`:typeof u=="function"?g=y=u:(g=u.scalar,y=u.vector);let _=H("outputData",h,i.length,4),w=M("aData",l,t.length,4),T=M("bData",p,r.length,4),x;if(a)if(n){let b=O.size(t)===1,E=O.size(r)===1,S=t.length>0&&t[t.length-1]%4===0,I=r.length>0&&r[r.length-1]%4===0;b||E?x=_.setByOffset("global_idx",y(b?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),E?`${T.type.value}(${T.getByOffset("0")}.x)`:T.getByOffset("global_idx"))):x=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${T.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",y(s||S?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||I?T.getByOffset("offsetB / 4u"):`${T.type.value}(${T.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else x=_.setByOffset("global_idx",y(w.getByOffset("global_idx"),T.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(E,S,I="")=>{let A=`aData[indexA${S}][componentA${S}]`,C=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${_.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${w.broadcastedIndicesToOffset(`outputIndices${S}`,_)};
            let offsetB${S} = ${T.broadcastedIndicesToOffset(`outputIndices${S}`,_)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${E}[${S}] = ${I}(${g(A,C)});
          `};h===9?x=`
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
        ${e.registerUniform("vec_size","u32").declareVariables(w,T,_)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${x}
      }`},qu=(e,t,r,i,a,n,s=r.dataType)=>{let u=r.dims.map(Number),l=i.dims.map(Number),p=!O.areEqual(u,l),h=u,f=O.size(u),g=!1,y=!1,_=[p];if(p){let w=Kt.calcShape(u,l,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");h=w.slice(),f=O.size(h);let T=O.size(u)===1,x=O.size(l)===1,b=u.length>0&&u[u.length-1]%4===0,E=l.length>0&&l[l.length-1]%4===0;_.push(T),_.push(x),_.push(b),_.push(E);let S=1;for(let I=1;I<h.length;I++){let A=u[u.length-I],C=l[l.length-I];if(A===C)S*=A;else break}S%4===0?(y=!0,g=!0):(T||x||b||E)&&(g=!0)}else g=!0;return _.push(g),{name:e,shaderCache:{hint:t+_.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>Pu(w,u,l,h,g,p,y,a,r.dataType,i.dataType,s,n),getRunData:()=>({outputs:[{dims:h,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(h)/4)},...X(u,l,h)]})}},Ke=(e,t,r,i,a,n)=>{e.compute(qu(t,a??"",e.inputs[0],e.inputs[1],r,i,n))},rh=e=>{Ke(e,"Add",(t,r)=>`${t}+${r}`)},ih=e=>{Ke(e,"Div",(t,r)=>`${t}/${r}`)},ah=e=>{Ke(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},nh=e=>{Ke(e,"Mul",(t,r)=>`${t}*${r}`)},sh=e=>{let t=M("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ke(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
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
      `)},oh=e=>{Ke(e,"Sub",(t,r)=>`${t}-${r}`)},uh=e=>{Ke(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},lh=e=>{Ke(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},dh=e=>{Ke(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},ph=e=>{Ke(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Lu,Wu,Vu,Gu,ch,hh,q0=P(()=>{te(),ie(),Te(),ae(),Lu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,n=i.dims.length;e.forEach((s,u)=>{if(u!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((l,p)=>{if(p!==t&&l!==i.dims[p])throw new Error("non concat dimensions must match")})}})},Wu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Vu=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let n=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(n):a===0?i.push(`if (inputIndex == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${a}) { ${n} }`)}return i.join(`
`)},Gu=(e,t,r,i)=>{let a=O.size(r),n=new Array(e.length),s=new Array(e.length),u=0,l=[],p=[],h=[{type:12,data:a}];for(let w=0;w<e.length;++w)u+=e[w].dims[t],n[w]=u,p.push(e[w].dims.length),s[w]=M(`input${w}`,i,p[w]),l.push("rank"),h.push({type:12,data:n[w]});for(let w=0;w<e.length;++w)h.push(...X(e[w].dims));h.push(...X(r));let f=H("output",i,r.length),g=f.indicesGet("indices",t),y=Array.from(Array(n.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),_=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let T=0;T<e.length;T++)w.registerUniform(`sizeInConcatAxis${T}`,"u32");return w.declareVariables(...s,f)})()}

  ${Wu(n.length,y)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${y});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Vu(s,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h}),getShaderSource:_}},ch=(e,t)=>{let r=e.inputs,i=r[0].dims,a=O.normalizeAxis(t.axis,i.length);Lu(r,a);let n=i.slice();n[a]=r.reduce((u,l)=>u+(l.dims.length>a?l.dims[a]:0),0);let s=r.filter(u=>O.size(u.dims)>0);e.compute(Gu(s,a,n,r[0].dataType),{inputs:s})},hh=e=>he({axis:e.axis})}),Nt,Dt,Ut,fn,qt=P(()=>{te(),ie(),Nt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Dt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Ut=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},fn=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[Pp,qp];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ce,fh,mn=P(()=>{Ce=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},fh=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),mh,L0=P(()=>{mh=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),mr,gn,yn=P(()=>{te(),ie(),ae(),qt(),mr=(e,t,r,i,a)=>{let n=i-r;return`
      ${Array.from({length:r}).map((s,u)=>`
      if (${j(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,j(a,u+n,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},gn=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s[s.length-2],p=u[u.length-1],h=s[s.length-1],f=Se(p),g=Se(h),y=Se(l),_=O.size(r)/f/y,w=e.length>2,T=i?i.slice(0,-2):r.slice(0,-2),x=[O.size(T),l,p],b=[{type:12,data:_},{type:12,data:l},{type:12,data:p},{type:12,data:h}];Dt(t,b),b.push(...X(T,s,u)),w&&b.push(...X(e[2].dims)),b.push(...X(x));let E=S=>{let I=dn("batch_dims",e[0].dataType,T.length),A=M("a",e[0].dataType,s.length,g),C=M("b",e[1].dataType,u.length,f),v=H("output",e[0].dataType,x.length,f),D=Ie(v.type.tensor),q=Nt(t,v.type.value,D),Y=[A,C],F="";if(w){let N=a?f:1;Y.push(M("bias",e[2].dataType,e[2].dims.length,N)),F=`${a?`value += bias[col / ${N}];`:`value += ${v.type.value}(bias[row + i]);`}`}let K=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Ut(t,K);let R=()=>{let N=`var a_data: ${A.type.value};`;for(let G=0;G<g;G++)N+=`
              let b_data${G} = b[(b_offset + (k + ${G}) * uniforms.N + col) / ${f}];`;for(let G=0;G<y;G++){N+=`a_data = a[(a_offset + (row + ${G}) * uniforms.K + k) / ${g}];`;for(let J=0;J<g;J++)N+=`
            values[${G}] = fma(${C.type.value}(a_data${g===1?"":`[${J}]`}), b_data${J}, values[${G}]);
`}return N};return`
  ${S.registerUniforms(K).registerInternalVariables(I).declareVariables(...Y,v)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${A.type.indices};
    ${mr("a_indices",A,A.rank-2,I.rank,"batch_indices")}
    ${A.indicesSet("a_indices",A.rank-2,0)}
    ${A.indicesSet("a_indices",A.rank-1,0)}
    let a_offset = ${A.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${mr("b_indices",C,C.rank-2,I.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${R()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${F}
      ${q}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${g};${y};${a}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:b}),getShaderSource:E}}}),Hu,Fu,Pa,ta,ju,qa,Ku,ri,_n=P(()=>{te(),ie(),ae(),qt(),yn(),mn(),Hu=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Fu=(e,t)=>e?`
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
        }`,Pa=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32)=>{let l=t[1]*e[1],p=t[0]*e[0],h=a?l:n,f=a?n:l,g=h/t[0],y=n/t[1];if(!((a&&g===4&&e[1]===4||!a&&(g===3||g===4))&&h%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${h/g}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${n}>;

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
  let tileRowB = localRow * ${y};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Hu(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
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

          ${Fu(a,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ta=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,ju=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",qa=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32,l=!1)=>{let p=e[1]*t[1],h=e[0]*t[0],f=a?p:n,g=a?n:p;if(!(g%t[1]===0&&f%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let y=g/t[1],_=f/t[0],w=n/t[1],T=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${ta(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
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
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${y};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${ta(a,i)}
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
      ${ju(a)}
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
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${h}>, ${n}>;
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
    ${T}
  }
`},Ku=(e,t,r,i,a=!1)=>{let[n,s,u,l]=i,p=Ie(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ce(e,p)} {
      var value = ${Ce(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${mr("aIndices",s,s.rank-2,n.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ce(e,p)} {
      var value = ${Ce(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${mr("bIndices",u,u.rank-2,n.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ce(e,p)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Ce(e,p)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ri=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s.slice(0,-2),p=u.slice(0,-2),h=i?i.slice(0,-2):r.slice(0,-2),f=O.size(h),g=s[s.length-2],y=s[s.length-1],_=u[u.length-1],w=y%4===0&&_%4===0,T=g<=8?[4,1,1]:[4,4,1],x=[8,8,1],b=[Math.ceil(_/x[0]/T[0]),Math.ceil(g/x[1]/T[1]),Math.ceil(f/x[2]/T[2])],E=w?4:1,S=[...l,g,y/E],I=S.length,A=[...p,y,_/E],C=A.length,v=[f,g,_/E],D=[{type:6,data:g},{type:6,data:_},{type:6,data:y}];Dt(t,D),D.push(...X(h,S,A));let q=["rank","rank"],Y=e.length>2;Y&&(D.push(...X(e[2].dims)),q.push("rank")),D.push(...X(v));let F=K=>{let R=h.length,N=dn("batchDims",e[0].dataType,R,1),G=Ie(e[0].dataType),J=M("a",e[0].dataType,I,E),ee=M("b",e[1].dataType,C,E),re=H("result",e[0].dataType,v.length,E),ne=[J,ee];if(Y){let Ee=a?E:1;ne.push(M("bias",e[2].dataType,e[2].dims.length,Ee))}let U=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Ut(t,U);let Q=Ie(re.type.tensor),Z=Nt(t,re.type.value,Q),V=Ku(E,Y,Z,[N,J,ee,re],a);return`
  ${K.registerUniforms(U).registerInternalVariables(N).declareVariables(...ne,re)}
  ${V}
  ${w?Pa(T,x,G,N):qa(T,x,G,N)}
                   `};return{name:"MatMul",shaderCache:{hint:`${T};${t.activation};${w};${a}`,inputDependencies:q},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:D}),getShaderSource:F}}}),Xu,gh,W0=P(()=>{te(),pt(),ae(),qt(),mn(),L0(),_n(),Xu=(e,t,r,i,a=!1,n,s=4,u=4,l=4,p="f32")=>{let h=D=>{switch(D){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},f=D=>{switch(D){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},g=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,y=e?`
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
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",T=e?"row":"col",x=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${T} / outWidth;
    let outCol = ${T} % outWidth;

    let WRow = ${x} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${x} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${x} % inChannels;
    var resData = ${Ce(s,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${w}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${h(s)}
    }
    return resData;`,E=e?t&&i?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${Ce(s,p)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${Ce(s,p)}(0.0);`,S=e?i&&r?f(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(u)}
    }
    return ${Ce(u,p)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(u)}
    }
    return ${Ce(u,p)}(0.0);`,I=Ce(l,p),A=Ce(e?s:u,p),C=Ce(e?u:s,p),v=Nt(n,I,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?E:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?S:E}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${fh(a)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},gh=(e,t,r,i,a,n,s,u,l)=>{let p=t.format==="NHWC",h=p?e[0].dims[3]:e[0].dims[1],f=r[0],g=p?r[2]:r[3],y=p?r[1]:r[2],_=p?r[3]:r[1],w=p&&(h%4===0||h%3===0)&&_%4===0,T=p?_:g*y,x=p?g*y:_,b=[8,8,1],E=i<=8?[4,1,1]:[4,4,1],S=[Math.ceil(T/b[0]/E[0]),Math.ceil(x/b[1]/E[1]),Math.ceil(f/b[2]/E[2])];de("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let I=w?p&&h%4!==0?3:4:1,A=b[1]*E[1],C=b[0]*E[0],v=Math.max(b[0]*I,b[1]),D=i%A===0,q=a%C===0,Y=n%v===0,F=w?[I,4,4]:[1,1,1],K=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Dt(t,K),K.push(...X(e[0].dims,e[1].dims));let R=["rank","rank"];s&&(K.push(...X(e[2].dims)),R.push("rank")),K.push(...X(r));let N=G=>{let J=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Ut(t,J);let ee=w?4:1,re=Ie(e[0].dataType),ne=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${re}>`:re}) {
        result[flatIndex] = ${w?`vec4<${re}>`:re}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${re}>`:re}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,U=M("x",e[0].dataType,e[0].dims.length,I===3?1:I),Q=M("w",e[1].dataType,e[1].dims.length,ee),Z=[U,Q],V=H("result",e[0].dataType,r.length,ee);if(s){let Ee=M("bias",e[2].dataType,e[2].dims.length,ee);Z.push(Ee),ne+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${re}>`:re} {
          return bias[coords.${p?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${mh("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${G.registerUniforms(J).declareVariables(...Z,V)}
        ${ne}
        ${Xu(p,D,q,Y,s,t,F[0],F[1],F[2],re)}
        ${w?Pa(E,b,re,void 0,!p,v):qa(E,b,re,void 0,!p,v,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${w};${D};${q};${Y};${A};${C};${v}`,inputDependencies:R},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:K}),getShaderSource:N}}}),Zu,ra,nr,Yu,ia,Qu,yh,_h,V0=P(()=>{te(),pt(),ie(),ae(),qt(),mn(),Zu=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},ra=e=>typeof e=="number"?[e,e,e]:e,nr=(e,t)=>t<=1?e:e+(e-1)*(t-1),Yu=(e,t,r,i=1)=>{let a=nr(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},ia=(e,t,r,i,a)=>{a==null&&(a=Yu(e,t[0],i[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*a)/i[s]+1));return n},Qu=(e,t,r,i,a,n,s,u,l,p)=>{let h,f,g,y;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=ia([t,r,i,1],[u,l,p],1,[a,n,s],e);f=_[0],g=_[1],y=_[2]}else if(Array.isArray(e)){if(!e.every((w,T,x)=>w===x[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=ia([t,r,i,1],[u,l,p],1,[a,n,s],e[0]);f=_[0],g=_[1],y=_[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/a),g=Math.ceil(r/n),y=Math.ceil(i/s);let _=(f-1)*a+u-t,w=(g-1)*n+l-r,T=(y-1)*s+p-i,x=Math.floor(_/2),b=_-x,E=Math.floor(w/2),S=w-E,I=Math.floor(T/2),A=T-I;h={top:E,bottom:S,left:I,right:A,front:x,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:f,outHeight:g,outWidth:y}},yh=(e,t,r,i,a,n=!1,s="channelsLast")=>{let u,l,p,h,f;if(s==="channelsLast")[u,l,p,h,f]=e;else if(s==="channelsFirst")[u,f,l,p,h]=e;else throw new Error(`Unknown dataFormat ${s}`);let[g,,y,_,w]=t,[T,x,b]=ra(r),[E,S,I]=ra(i),A=nr(y,E),C=nr(_,S),v=nr(w,I),{padInfo:D,outDepth:q,outHeight:Y,outWidth:F}=Qu(a,l,p,h,T,x,b,A,C,v),K=n?g*f:g,R=[0,0,0,0,0];return s==="channelsFirst"?R=[u,K,q,Y,F]:s==="channelsLast"&&(R=[u,q,Y,F,K]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:p,inWidth:h,inChannels:f,outDepth:q,outHeight:Y,outWidth:F,outChannels:K,padInfo:D,strideDepth:T,strideHeight:x,strideWidth:b,filterDepth:y,filterHeight:_,filterWidth:w,effectiveFilterDepth:A,effectiveFilterHeight:C,effectiveFilterWidth:v,dilationDepth:E,dilationHeight:S,dilationWidth:I,inShape:e,outShape:R,filterShape:t}},_h=(e,t,r,i,a,n)=>{let s=n==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],l={x:r.map((T,x)=>x)},p=[Math.ceil(Zu(l.x.map(T=>r[T]))/u[0]),1,1];de("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let h=1,f=O.size(r),g=[{type:12,data:f},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];Dt(t,g),g.push(...X(e[0].dims,e[1].dims));let y=["rank","rank"],_=e.length===3;_&&(g.push(...X(e[2].dims)),y.push("rank")),g.push(...X(r));let w=T=>{let x=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Ut(t,x);let b=1,E=Ie(e[0].dataType),S=M("x",e[0].dataType,e[0].dims.length,h),I=M("W",e[1].dataType,e[1].dims.length,b),A=[S,I],C=H("result",e[0].dataType,r.length,b),v="";if(_){let Y=M("bias",e[2].dataType,e[2].dims.length,b);A.push(Y),v+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${E} {
          return bias[${s?j("coords",4,5):j("coords",1,5)}];
        }`}let D=Ce(h,E),q=Nt(t,D,E);return`
            ${v}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${T.registerUniforms(x).declareVariables(...A,C)}
          ${T.mainStart()}
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${j("coords",0,S.rank)};
              let d2 = ${s?j("coords",S.rank-1,S.rank):j("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${s?j("coords",1,S.rank):j("coords",2,S.rank)},
              ${s?j("coords",2,S.rank):j("coords",3,S.rank)},
              ${s?j("coords",3,S.rank):j("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?j("uniforms.x_shape",1,S.rank):j("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${s?j("uniforms.x_shape",2,S.rank):j("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${s?j("uniforms.x_shape",3,S.rank):j("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${s?j("uniforms.x_shape",4,S.rank):j("uniforms.x_shape",1,S.rank)};
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
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${q}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${h};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:g}),getShaderSource:w}}}),bh,wh,G0=P(()=>{te(),ie(),ae(),qt(),bh=(e,t,r,i)=>{let a=e.length>2,n=a?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,l=t.format==="NHWC",p=l?r[3]:r[1],h=p/t.group,f=l&&h>=4?Se(p):1,g=O.size(r)/f,y=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];Dt(t,y),y.push(...X(s,[u[0],u[1],u[2],u[3]/f]));let _=a?["rank","rank","rank"]:["rank","rank"];y.push(...X([r[0],r[1],r[2],r[3]/f]));let w=T=>{let x=H("output",e[0].dataType,r.length,f),b=Ie(x.type.tensor),E=Nt(t,x.type.value,b),S=M("x",e[0].dataType,s.length),I=M("w",e[1].dataType,u.length,f),A=[S,I];a&&A.push(M("b",e[2].dataType,e[2].dims,f));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Ut(t,C);let v=l?`
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
            let xVal = ${S.get("batch","xHeight","xWidth","input_channel")};
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

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${T.registerUniforms(C).declareVariables(...A,x)}

  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${x.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${x.type.value} = ${x.type.value}(0);
    ${v}
    ${n}
    ${E}
    ${x.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:w}},wh=(e,t,r,i)=>{let a=e.length>2,n=Se(r[3]),s=Se(r[2]),u=O.size(r)/n/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],p=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],h=[r[0],r[1],r[2],r[3]/n],f=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Dt(t,f),f.push(...X(l,p,h));let g=(s-1)*t.strides[1]+p[1],y=_=>{let w=H("output",e[0].dataType,h.length,n),T=Ie(w.type.tensor),x=Nt(t,w.type.value,T),b=M("x",e[0].dataType,l.length,n),E=M("w",e[1].dataType,p.length,n),S=[b,E];a&&S.push(M("b",e[2].dataType,e[2].dims,n));let I=a?"value += b[output_channel];":"",A=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Ut(t,A),`
  ${_.registerUniforms(A).declareVariables(...S,w)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
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
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
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
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${g};${p[0]};${p[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f}),getShaderSource:y}}}),Ju,qr,el,Lr,La,aa,tl,rl,Wa,H0=P(()=>{ie(),W0(),V0(),_n(),G0(),qt(),yn(),$t(),Ju=(e,t,r,i,a,n)=>{let s=e[0],u=e.slice(n?1:2,n?3:4),l=u.length,p=t[0],h=t.slice(2).map((g,y)=>g+(g-1)*(r[y]-1)),f=u.map((g,y)=>g+i[y]+i[y+l]).map((g,y)=>Math.floor((g-h[y]+a[y])/a[y]));return f.splice(0,0,s),f.splice(n?3:1,0,p),f},qr=[2,3,1,0],el=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Lr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let i=e.pads.slice();ei.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},La=e=>{let t=fn(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,n=e.group,s=e.kernel_shape,u=e.pads,l=e.strides,p=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,pads:u,strides:l,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},aa=(e,t,r,i)=>{let a=r.format==="NHWC",n=Ju(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let A=[t[0]];if(a){let C=e.kernelCustomData.wT??e.compute(Pe(t[1],qr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),A.push(C)}else A.push(t[1]);t.length===3&&A.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(wh(A,r,n,i),{inputs:A}):e.compute(bh(A,r,n,i),{inputs:A});return}let s=t.length===3,u=t[0].dims[a?1:2],l=t[0].dims[a?2:3],p=t[0].dims[a?3:1],h=t[1].dims[2],f=t[1].dims[3],g=n[a?1:2],y=n[a?2:3],_=n[a?3:1],w=a&&h===u&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(w||h===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let A=n[0],C,v,D,q=[];if(a){let K=e.kernelCustomData.wT??e.compute(Pe(t[1],qr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=K),w){let R=u*l*p;C=t[0].reshape([1,A,R]),v=K.reshape([1,R,_]),D=[1,A,_]}else C=t[0].reshape([A,u*l,p]),v=K.reshape([1,p,_]),D=[A,g*y,_];q.push(C),q.push(v)}else C=t[0].reshape([A,p,u*l]),v=t[1].reshape([1,_,p]),D=[A,_,g*y],q.push(v),q.push(C);s&&q.push(t[2]);let Y=D[2],F=q[0].dims[q[0].dims.length-1];Y<8&&F<8?e.compute(gn(q,r,n,D,a,i),{inputs:q}):e.compute(ri(q,r,n,D,a,i),{inputs:q});return}let T=!0,x=e.kernelCustomData.wT??e.compute(Pe(t[1],qr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let b=[t[0],x];s&&b.push(t[2]);let E=a?g*y:_,S=a?_:g*y,I=h*f*p;e.compute(gh(b,r,n,E,S,I,s,T,i),{inputs:b})},tl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=Lr({...t,pads:a,strides:n,dilations:s,kernelShape:u},i);aa(e,i,l,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},rl=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=Lr(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=yh(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,i);e.compute(_h(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},Wa=(e,t)=>{if(el(e.inputs,t),e.inputs[0].dims.length===3)tl(e,t);else if(e.inputs[0].dims.length===5)rl(e,e.inputs,t);else{let r=Lr(t,e.inputs);aa(e,e.inputs,r)}}}),$h,F0=P(()=>{te(),pt(),ie(),ae(),$h=(e,t,r)=>{let i=e.length>2,a=t.outputShape,n=t.format==="NHWC",s=t.group,u=e[1].dims,l=u[2]/s,p=u[3],h=n?Se(l):1,f=n&&p===1&&l>=4,g=f?Math.floor(l/4)*4:Math.floor(l/h)*h,y=l-g,_=n?Se(p):1,w=n?p===1?h:_:1,T=O.size(a)/_,x=[Math.ceil(T/64),1,1];de("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${x}`);let b=["rank","rank"],E=[t.strides[0],t.strides[1]],S=[t.kernelShape[n?1:2],t.kernelShape[n?2:3]],I=[t.dilations[0],t.dilations[1]],A=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[n?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[n?2:3]-1)*(t.dilations[1]-1))],C=[A[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),A[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:T},{type:12,data:E},{type:12,data:S},{type:12,data:I},{type:12,data:A},{type:6,data:C},{type:12,data:g},{type:12,data:l},{type:12,data:p},...X(e[0].dims,e[1].dims)];i&&(v.push(...X(e[2].dims)),b.push("rank")),v.push(...X(a));let D=q=>{let Y=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:E.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:A.length},{name:"pads",type:"i32",length:C.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],F=Ie(e[0].dataType),K=n?1:2,R=n?2:3,N=n?3:1,G=M("W",e[1].dataType,e[1].dims.length,w),J=M("Dy",e[0].dataType,e[0].dims.length,h),ee=[J,G];i&&ee.push(M("bias",e[2].dataType,[a[N]].length,_));let re=H("result",e[0].dataType,a.length,_),ne=()=>{let Z="";if(f)h===4?Z+=`
        let xValue = ${J.getByOffset("x_offset")};
        let wValue = ${G.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?Z+=`
          dotProd = dotProd + dot(vec4<${F}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}), vec4<${F}>(${G.getByOffset("w_offset")}, ${G.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(Z+=`
          dotProd = dotProd + dot(vec4<${F}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}, ${J.getByOffset("x_offset + 2u")}, ${J.getByOffset("x_offset + 3u")}), vec4<${F}>(${G.getByOffset("w_offset")}, ${G.getByOffset("w_offset + 1u")}, ${G.getByOffset("w_offset + 2u")}, ${G.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Z+=`
                  let xValue = ${n?J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):J.get("batch","inputChannel","idyR","idyC")};
        `,h===1)Z+=`
          let w_offset = ${G.indicesToOffset(`${G.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${G.getByOffset(`w_offset / ${w}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let V=0;V<h;V++)Z+=`
            let wValue${V} = ${G.getByOffset(`${G.indicesToOffset(`${G.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${V}, wOutChannel)`)} / ${w}`)};
            dotProd = dotProd + xValue[${V}] * wValue${V};`;return Z},U=()=>{if(y===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let Z="";if(h===1){Z+="dotProd = dotProd";for(let V=0;V<y;V++)Z+=`
            + ${J.getByOffset(`x_offset + ${V}`)} * ${G.getByOffset(`w_offset + ${V}`)}`;Z+=";"}else if(h===2){if(y!==2)throw new Error(`Invalid inputChannelsRemainder ${y}.`);Z+=`
          let xValue = ${J.getByOffset("x_offset")};
          let wValue = ${G.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Z},Q=`
            let outputIndices = ${re.offsetToIndices(`global_idx * ${_}`)};
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
                ${f?`
                var x_offset = ${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${G.indicesToOffset(`${G.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${w};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:h}) {
                  ${ne()}
                  inputChannel = inputChannel + ${f?4:h};
                }
                ${U()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${_}]`:""};
            ${re.setByOffset("global_idx","value")};
          `;return`
    ${q.registerUniforms(Y).declareVariables(...ee,re)}
      ${q.mainStart()}
      ${q.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Q}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${w}${_}${f}${y}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:x[0],y:x[1],z:x[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:D}}}),il,al,nl,na,vh,sl,sa,ol,xh,j0=P(()=>{F0(),qt(),$t(),il=(e,t,r,i,a,n)=>(e-1)*t+r+(i-1)*a+1-n,al=(e,t,r,i,a)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=n,r[a]=e-n):t==="SAME_LOWER"&&(r[i]=e-n,r[a]=n)},nl=(e,t,r,i,a,n,s,u,l,p)=>{let h=e.length-2,f=p.length===0;l.length<h&&l.push(...Array(h-l.length).fill(0));let g=e[0],y=t[u?3:1]*a;for(let _=0,w=e.length-h-(u?1:0);_<h;++_,++w){let T=e[w],x=f?T*s[_]:p[_],b=il(T,s[_],n[_],t[w],r[_],x);al(b,i,n,_,_+h),f&&p.push(s[_]*(T-1)+l[_]+(t[w]-1)*r[_]+1-n[_]-n[_+h])}p.splice(0,0,g),p.splice(u?3:1,0,y)},na=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,g)=>f*g,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((f,g)=>f+g,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let p=e.strides.slice();if(p.reduce((f,g)=>f+g,0)===0){let f=t[0].dims.length-2;p=new Array(f).fill(1)}nl(u,r,l,e.autoPad,e.group,a,p,i,s,n);let h=Object.assign({},e);return Object.assign(h,{kernelShape:r,pads:a,outputPadding:s,outputShape:n,dilations:l,strides:p}),h},vh=e=>{let t=fn(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,n=e.group??1,s=e.kernelShape,u=e.pads,l=e.strides,p=e.wIsConst(),h=e.outputPadding,f=e.outputShape;return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,outputPadding:h,outputShape:f,pads:u,strides:l,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},sl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,u)=>s+u,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,u)=>s+u,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,u)=>s+u,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,u)=>s+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},sa=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(Pe(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let n=[t[0],a];t.length===3&&n.push(t[2]),e.compute($h(n,r,i),{inputs:n})},ol=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),n=[1].concat(n),a=[1].concat(a);let l=t.outputPadding;l=[0].concat(l);let p=na({...t,pads:u,strides:s,dilations:n,kernelShape:a,outputPadding:l},i);sa(e,i,p,h=>r?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},xh=(e,t)=>{if(sl(e.inputs,t),e.inputs[0].dims.length===3)ol(e,t);else{let r=na(t,e.inputs);sa(e,e.inputs,r)}}}),ul,Sh,Th,K0=P(()=>{te(),ie(),Te(),ae(),ul=(e,t,r,i)=>{let a=O.size(t),n=t.length,s=M("input",e,n),u=H("output",e,n),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=O.normalizeAxis(l,n),h=f=>{let g=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,y=j("uniforms.input_shape","uniforms.axis",n),_=i.reverse?g+(i.exclusive?" + 1":""):"0",w=i.reverse?y:g+(i.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,u)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:p},...X(t,t)]}),getShaderSource:h}},Sh=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(ul(i,r,a,t),{inputs:[0]})},Th=e=>{let t=e.exclusive===1,r=e.reverse===1;return he({exclusive:t,reverse:r})}}),ll,dl,pl,kh,Eh,X0=P(()=>{te(),ie(),Te(),ae(),ll=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},dl=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},pl=(e,t)=>{let r,i,a,n,s,u,l=t.format==="NHWC",p=t.blocksize,h=t.mode==="DCR";l?([r,i,a,n]=e.dims,s=h?[r,i,a,p,p,n/p**2]:[r,i,a,n/p**2,p,p],u=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=h?[r,p,p,n/p**2,i,a]:[r,n/p**2,p,p,i,a],u=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),g=f.dims.length,y=e.dataType,_=M("a",y,g),w=H("output",y,g),T=x=>`
  ${x.registerUniform("output_size","u32").declareVariables(_,w)}

  ${dl(u,g,_,w)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:x=>{let b=l?[r,i*p,a*p,n/p**2]:[r,n/p**2,i*p,a*p],E=O.size(b),S=f.dims,I=O.sortBasedOnPerm(S,u);return{outputs:[{dims:b,dataType:x[0].dataType}],dispatchGroup:{x:Math.ceil(E/64)},programUniforms:[{type:12,data:E},...X(S,I)]}},getShaderSource:T}},kh=(e,t)=>{ll(e.inputs),e.compute(pl(e.inputs[0],t))},Eh=e=>he({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Wr,sr,oa,cl,hl,fl,ml,ua,gl,Ih,zh,Z0=P(()=>{te(),ie(),Te(),ae(),Wr="[a-zA-Z]|\\.\\.\\.",sr="("+Wr+")+",oa="^"+sr+"$",cl="("+sr+",)*"+sr,hl="^"+cl+"$",fl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},ml=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(hl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,n)=>{let s=e[n].dims.slice();if(!a.match(RegExp(oa)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,s,n);this.lhs.push(u)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,n])=>n.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(sr)))throw new Error("Invalid RHS");i.match(RegExp(Wr,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(a);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,n=!1,s=[],u=0;if(!e.match(RegExp(oa))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Wr,"g")),p=new fl(i);return l?.forEach((h,f)=>{if(h==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let g=a-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(u,u+g),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<s.length;y++){let _=String.fromCharCode(48+y);p.addSymbol(_,f+y),this.addSymbol(_,r[u++],i)}}else p.addSymbol(h,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,r[u++],i)}),p}},ua=e=>e+"_max",gl=(e,t,r,i)=>{let a=e.map(p=>p.length).map((p,h)=>M(`input${h}`,t,p)),n=O.size(i),s=H("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),l=p=>{let h=[],f="var prod = 1.0;",g="var sum = 0.0;",y="sum += prod;",_=[],w=[],T=[],x=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((S,I)=>{if(r.rhs.symbolToIndices.has(I)){let A=r.rhs.symbolToIndices.get(I)?.[0];A!==void 0&&r.lhs.forEach((C,v)=>{if(S.inputIndices.includes(v)){let D=C.symbolToIndices.get(I);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(q=>{h.push(`${a[v].indicesSet(`input${v}Indices`,q,s.indicesGet("outputIndices",A))}`)})}})}else r.lhs.forEach((A,C)=>{if(S.inputIndices.includes(C)){let v=A.symbolToIndices.get(I);if(v===void 0)throw new Error("Invalid symbol error");v.forEach(D=>{_.push(`${a[C].indicesSet(`input${C}Indices`,D,`${I}`)}`)}),x.push(`prod *= ${a[C].getByIndices(`input${C}Indices`)};`)}}),w.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${ua(I)}; ${I}++) {`),T.push("}")});let E=b?[...h,`let sum = ${a.map((S,I)=>S.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...h,g,...w,..._,f,...x,y,...T];return`
            ${p.registerUniforms(u.map(S=>({name:`${ua(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((S,I)=>`var input${I}Indices: ${a[I].type.indices};`).join(`
`)}
            ${E.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=u.filter(f=>r.symbolToInfo.has(f)).map(f=>({type:12,data:r.symbolToInfo.get(f)?.dimValue||0}));p.push({type:12,data:n});let h=e.map((f,g)=>[...X(f)]).reduce((f,g)=>f.concat(g),p);return h.push(...X(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:h}},getShaderSource:l}},Ih=(e,t)=>{let r=new ml(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((n,s)=>n.dims);e.compute(gl(a,e.inputs[0].dataType,r,i))},zh=e=>{let t=e.equation.replace(/\s+/g,"");return he({equation:t})}}),yl,la,_l,bl,Ch,Y0=P(()=>{te(),ie(),ae(),yl=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},la=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},_l=(e,t)=>e.length>t.length?la(e,t):la(t,e),bl=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=_l(t,r),a=e[0].dataType,n=a===9||O.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,u=n||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(O.size(i)/u),p=f=>{let g=M("input",a,t.length,s),y=H("output",a,i.length,u),_;if(a===9){let w=(T,x,b="")=>`
          let outputIndices${x} = ${y.offsetToIndices(`outputOffset + ${x}u`)};
          let offset${x} = ${g.broadcastedIndicesToOffset(`outputIndices${x}`,y)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${T}[${x}] = ${b}(${g.getByOffset(`index${x}`)}[component${x}]);
        `;_=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${y.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${y.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",y)};
        let data = ${y.type.value}(${g.getByOffset(`inputOffset / ${s}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(g,y)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},h=[{type:12,data:l},...X(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${u}`,inputDependencies:["rank"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h})}},Ch=e=>{yl(e.inputs),e.compute(bl(e.inputs),{inputs:[0]})}}),wl,Ah,Q0=P(()=>{te(),ie(),ae(),hn(),wl=e=>{let t=e[0].dataType,r=O.size(e[0].dims),i=O.size(e[1].dims),a=i%4===0,n=s=>{let u=M("x",t,[1],4),l=M("bias",t,[1],4),p=H("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${l.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,g=a?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(h).declareVariables(u,l,p)}

    ${Da(Re(t))}

    ${s.mainStart(Xt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",Ua("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Xt/4)}})}},Ah=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?Yc(e):e.compute(wl(e.inputs))}}),$l,vl,Oh,Rh,J0=P(()=>{te(),ie(),Te(),ae(),$l=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},vl=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=O.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(n,1,...i);let u=r[n],l=e[0].dataType===9?4:1,p=Math.ceil(O.size(s)/l),h=[{type:12,data:p},{type:6,data:u},{type:12,data:n},...X(e[0].dims,e[1].dims,s)],f=g=>{let y=M("data",e[0].dataType,e[0].dims.length,l),_=M("inputIndices",e[1].dataType,e[1].dims.length),w=H("output",e[0].dataType,s.length,l),T=b=>{let E=i.length,S=`var indicesIndices${b}  = ${_.type.indices}(0);`;for(let I=0;I<E;I++)S+=`${E>1?`indicesIndices${b}[${I}]`:`indicesIndices${b}`} = ${s.length>1?`outputIndices${b}[uniforms.axis + ${I}]`:`outputIndices${b}`};`;S+=`
          var idx${b} = ${_.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${y.type.indices};
        `;for(let I=0,A=0;I<a;I++)I===n?(S+=`${a>1?`dataIndices${b}[${I}]`:`dataIndices${b}`} = u32(idx${b});`,A+=E):(S+=`${a>1?`dataIndices${b}[${I}]`:`dataIndices${b}`} = ${s.length>1?`outputIndices${b}[${A}]`:`outputIndices${b}`};`,A++);return S},x;if(e[0].dataType===9){let b=(E,S,I="")=>`
          let outputIndices${S} = ${w.offsetToIndices(`outputOffset + ${S}u`)};
          ${T(S)};
          let offset${S} = ${y.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${E}[${S}] = ${I}(${y.getByOffset(`index${S}`)}[component${S}]);
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
      ${T("")};
      let value = ${y.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,_,w)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${x}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:h}),getShaderSource:f}},Oh=e=>he({axis:e.axis}),Rh=(e,t)=>{let r=e.inputs;$l(r),e.compute(vl(e.inputs,t))}}),xl,Bh,Mh,ey=P(()=>{te(),ie(),ae(),xl=(e,t,r,i,a,n,s,u,l)=>{let p=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:u},{type:12,data:l}],h=[n];p.push(...X(t.dims,h));let f=g=>{let y=M("indices_data",t.dataType,t.dims.length),_=H("input_slice_offsets_data",12,1,1),w=[y,_],T=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(T).declareVariables(...w)}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:p}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},Bh=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,n=r[1].dims,s=n[n.length-1],u=O.sizeToDimension(n,n.length-1),l=O.sizeFromDimension(i,t.batchDims+s),p=O.sizeToDimension(i,t.batchDims),h=O.sizeFromDimension(i,t.batchDims),f=u/p,g=new Array(s),y=l;for(let S=0;S<s;++S)g[s-1-S]=y,y*=i[t.batchDims+s-1-S];let _=xl(e,r[1],g,t.batchDims,i,u,f,h,s),w=t.batchDims+s;if(w>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let T=n.slice(0,-1).concat(i.slice(w)),x=O.size(T),b=[{type:12,data:x},{type:12,data:l},...X(r[0].dims,_.dims,T)],E=S=>{let I=M("data",r[0].dataType,r[0].dims.length),A=M("slice_offsets",12,_.dims.length),C=H("output",r[0].dataType,T.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,A,C)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:T,dataType:a}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:b}),getShaderSource:E},{inputs:[r[0],_]})},Mh=e=>({batchDims:e.batch_dims,cacheKey:""})}),Sl,Tl,Nh,Dh,ty=P(()=>{te(),ie(),Te(),ae(),Sl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==a.dims.length||!a.dims.map((u,l)=>l===r?Math.ceil(u/i)===n.dims[l]:u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((u,l)=>u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Tl=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=O.normalizeAxis(t.gatherAxis,a),s=O.normalizeAxis(t.quantizeAxis,a),u=r.slice(0);u.splice(n,1,...i);let l=O.size(u),p=e[2].dataType,h=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...X(...e.map((y,_)=>y.dims),u)],g=y=>{let _=M("data",e[0].dataType,e[0].dims.length),w=M("inputIndices",e[1].dataType,e[1].dims.length),T=M("scales",e[2].dataType,e[2].dims.length),x=e.length>3?M("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=H("output",p,u.length),E=[_,w,T];x&&E.push(x);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(S).declareVariables(...E,b)}
        ${y.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${T.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${T.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${T.getByIndices("scale_indices")};
        ${x?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${x.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${x.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Re(p)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,_)=>_!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,_)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:p}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:g}},Nh=(e,t)=>{let r=e.inputs;Sl(r,t),e.compute(Tl(e.inputs,t))},Dh=e=>he({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),kl,El,Uh,Ph,ry=P(()=>{te(),ie(),Te(),ae(),kl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},El=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,n=e[1].dims,s=e[1].dataType,u=O.normalizeAxis(t.axis,a),l=r[u],p=n.slice(0),h=O.size(p),f=M("input",i,a),g=M("indicesInput",s,n.length),y=H("output",i,p.length),_=[{type:12,data:h},{type:6,data:l},{type:12,data:u}];return _.push(...X(r,n,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:_}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,g,y)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${y.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${y.setByOffset("global_idx","value")};
  }`}},Uh=e=>he({axis:e.axis}),Ph=(e,t)=>{let r=e.inputs;kl(r),e.compute(El(e.inputs,t))}}),Il,zl,qh,Lh,iy=P(()=>{te(),ie(),ae(),Il=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},zl=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,n,s]=Up.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[a,n];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,p=Math.ceil(n/l),h=Math.ceil(a/l),f=!0,g=O.size(u),y=[{type:12,data:f?p:g},{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(y.push(...X(e[2].dims)),_.push("rank")),y.push(...X(u));let w=x=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let E=t.alpha===1?"":"value *= uniforms.alpha;",S=M("a",e[0].dataType,e[0].dims),I=M("b",e[1].dataType,e[1].dims),A=S.type.value,C=null,v=[S,I];e.length===3&&(C=M("c",e[2].dataType,e[2].dims.length),v.push(C));let D=H("output",e[0].dataType,u.length);v.push(D);let q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${x.registerUniforms(q).declareVariables(...v)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${A}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${E}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",D)}; value += ${A}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},T=x=>{let b=M("a",e[0].dataType,e[0].dims),E=M("b",e[1].dataType,e[1].dims),S=null,I=[b,E];e.length===3&&(S=M("c",e[2].dataType,e[2].dims.length),I.push(S));let A=H("output",e[0].dataType,u.length);I.push(A);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",D="";t.transA&&t.transB?(D=`
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
      `,v="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(D=`
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
      `,v="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(D=`
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
      `,v="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(D=`
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
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let q=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${x.registerUniforms(C).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${E.type.storage}, ${l}>, ${l}>;
  ${x.mainStart([l,l,1])}
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
        ${v}
      }
      workgroupBarrier();
    }

    ${q}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${A.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:p*h},programUniforms:y}),getShaderSource:T}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:w}},qh=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Lh=(e,t)=>{Il(e.inputs),e.compute(zl(e.inputs,t))}}),rt,ut,kt,Et,Cl,Al,Ol,Rl,Bl,Ml,Nl,Dl,Wh,Vh,ay=P(()=>{te(),ie(),Te(),ae(),[rt,ut,kt,Et]=[0,1,2,3],Cl=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Al=`
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
`,Ol=e=>`
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
`,Rl=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Bl=e=>`
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
`,Ml=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${rt}] = batch;
     indices[${ut}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${kt}] = u32(r);
            indices[${Et}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${kt}] = u32(clamp(r, 0, H - 1));
          indices[${Et}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${kt}] = gs_reflect(r, border[1], border[3]);
          indices[${Et}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Nl=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${rt}], indices[${ut}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${rt}], indices[${ut}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${rt}], indices[${ut}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${rt}], indices[${ut}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${rt}], indices[${ut}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${rt}], indices[${ut}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Dl=(e,t)=>{let r=M("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=M("grid",e[1].dataType,i.length,2),n=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(n=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[rt,ut,kt,Et]=[0,3,1,2]);let s=H("output",e[0].dataType,n.length),u=r.type.value,l=O.size(n),p=[{type:12,data:l},...X(e[0].dims,i,n)],h=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${Al}
  ${Ol(u)}
  ${Rl(t)}
  ${Bl(t)}
  ${Ml(r,u,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${kt}]);
      let W_in = i32(uniforms.x_shape[${Et}]);

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
      var grid_indices = vec3<u32>(indices[${rt}], indices[${kt}], indices[${Et}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Nl(s,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let g=O.size(n);return{outputs:[{dims:n,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:p}},getShaderSource:h}},Wh=(e,t)=>{Cl(e.inputs),e.compute(Dl(e.inputs,t))},Vh=e=>he({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Me,Ul,Gh,da,Pl,fr,Hh,Fh=P(()=>{te(),ie(),Te(),ln(),cn(),ae(),$t(),Me=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ul=(e,t)=>{let r=e[0],i=Me(e,1),a=Me(e,2),n=Me(e,3),s=Me(e,4),u=Me(e,5),l=Me(e,6),p=Me(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=r.dims[0],f=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],y=f,_=0,w=0,T=Math.floor(g/t.numHeads);if(l&&p&&O.size(l.dims)&&O.size(p.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[3]!==T)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==h||p.dims[1]!==t.numHeads||p.dims[3]!==T)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],w=l.dims[2]}else if(l&&O.size(l.dims)||p&&O.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x;if(i&&O.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');x=2,y=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==T)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');x=5,y=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==T)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');x=0,y=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}if(n&&O.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=_+y,E=0;if(s&&O.size(s.dims)>0){E=8;let C=s.dims;throw C.length===1?C[0]===h?E=1:C[0]===3*h+2&&(E=3):C.length===2&&C[0]===h&&C[1]===b&&(E=5),E===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,I=g;if(a&&O.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(y!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=a.dims[2]}else{if(y!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=a.dims[1]*a.dims[3],S=!0}}let A=!1;if(s&&O.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(u&&O.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==h||u.dims[1]!==t.numHeads||u.dims[2]!==f||u.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:f,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:b,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:g,vHiddenSize:I,headSize:T,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:E,scale:t.scale,broadcastResPosBias:A,passPastInKv:S,qkvFormat:x}},Gh=e=>he({...e}),da=he({perm:[0,2,1,3]}),Pl=(e,t,r,i,a,n,s)=>{let u=[i,a,n],l=O.size(u),p=[{type:12,data:l},{type:12,data:s},{type:12,data:n}],h=f=>{let g=H("qkv_with_bias",t.dataType,u),y=M("qkv",t.dataType,u),_=M("bias",r.dataType,u),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(w).declareVariables(y,_,g)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:h},{inputs:[t,r],outputs:[-1]})[0]},fr=(e,t,r,i,a,n,s,u)=>{let l=n;if(s&&O.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Pl(e,n,s,t,i,r*a,u),l=l.reshape([t,i,r,a]),r===1||i===1?l:e.compute(Pe(l,da.perm),{inputs:[l],outputs:[-1]})[0]}else return n.dims.length===3&&(l=n.reshape([t,i,r,a])),r===1||i===1?l:e.compute(Pe(l,da.perm),{inputs:[l],outputs:[-1]})[0]},Hh=(e,t)=>{let r=Ul(e.inputs,t),i=e.inputs[0],a=Me(e.inputs,1),n=Me(e.inputs,2),s=Me(e.inputs,3),u=Me(e.inputs,4),l=Me(e.inputs,5),p=Me(e.inputs,6),h=Me(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let f=a&&n&&a.dims.length===4&&n.dims.length===4,g=fr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(f)return _r(e,g,a,n,u,void 0,p,h,l,r);if(!a||!n)throw new Error("key and value must be provided");let y=fr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),_=fr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);_r(e,g,y,_,u,void 0,p,h,l,r)}}),ql,Ll,Wl,Vl,Va,jh,Kh,Xh=P(()=>{te(),ie(),Te(),ae(),ql=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Ll=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),he({numOutputs:i,axis:t.axis,splitSizes:r})},Wl=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${j("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Vl=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Va=(e,t)=>{let r=e[0].dims,i=O.size(r),a=e[0].dataType,n=O.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),u=M("input",a,r.length),l=new Array(t.numOutputs),p=[],h=[],f=0,g=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){f+=t.splitSizes[_],l[_]=f;let w=r.slice();w[n]=t.splitSizes[_],h.push(w),s[_]=H(`output${_}`,a,w.length),p.push({dims:h[_],dataType:e[0].dataType})}g.push({type:12,data:l},...X(r,...h));let y=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...s)}
  ${Wl(l.length)}
  ${Vl(s)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${j("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:g})}},jh=(e,t)=>{ql(e.inputs);let r=e.inputs.length===1?t:Ll(e.inputs,t);e.compute(Va(e.inputs,r),{inputs:[0]})},Kh=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return he({axis:t,numOutputs:i,splitSizes:r})}}),Gl,ii,Zh,Yh=P(()=>{te(),ie(),Te(),ae(),Gl=(e,t)=>{let[r,i,a,n]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!O.areEqual(i.dims,[])&&!O.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!O.areEqual(a.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],p=r.dims[r.dims.length-2],h=a.dims[0],f=O.sizeFromDimension(r.dims,1)/p,g=u===0?a.dims[1]*2:f/s;if(u>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(p!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(p>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==a.dims[1]&&u/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`)},ii=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:n}=t,s=e[0].dims[0],u=O.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],p=u/l,h=e[2].dims[1],f=a===0?h*2:p/i,g=new Array(s,l,p/f,f-h),y=O.computeStrides(g),_=[{type:1,data:n},{type:12,data:g},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[u,p,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,f,l*f,1]}):[],...X(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=T=>{let x=M("input",e[0].dataType,e[0].dims.length),b=M("position_ids",e[1].dataType,e[1].dims.length),E=M("cos_cache",e[2].dataType,e[2].dims.length),S=M("sin_cache",e[3].dataType,e[3].dims.length),I=H("output",e[0].dataType,e[0].dims.length);return T.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${T.declareVariables(x,b,E,S,I)}

        ${T.mainStart(Xt)}
          let half_rotary_emb_dim = uniforms.${E.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",H("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${x.getByOffset("i")} * ${E.get("position_id","bsnh[3]")} -
                ${x.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${x.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${x.getByOffset("j")} * ${E.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",x.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:he({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(g)/Xt)},programUniforms:_})}},Zh=(e,t)=>{Gl(e.inputs,t),e.compute(ii(e.inputs,t))}}),Hl,Fl,pa,jl,Qh,ny=P(()=>{Te(),te(),cn(),Fh(),Xh(),$t(),Yh(),ae(),Hl=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],p=r.dims[1],h=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=p,g=0,y=!i||i.dims.length===0,_=Math.floor(y?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);y&&(h=_*t.numHeads);let w=n&&n.dims.length!==0,T=s&&s.dims.length!==0;if(w&&n.dims.length===4&&n.dims[0]===l&&n.dims[1]!==t.kvNumHeads&&n.dims[2]===t.kvNumHeads&&n.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&T){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=n.dims[2]}else if(w||T)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');f=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}let b=0,E=!1,S=t.kvNumHeads?_*t.kvNumHeads:h;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(f!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=a.dims[2]}else{if(f!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=a.dims[1]*a.dims[3],E=!0}}let I=e.length>4?e[5]:void 0;if(I){if(I.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let A=I.dims.reduce((C,v)=>C*v,1);if(A!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${A}.`);for(let C=0;C<I.dims.length;C++)if(I.dims[C]!==1&&I.dims[C]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${C}] = ${I.dims[C]}.`)}return{batchSize:l,sequenceLength:p,pastSequenceLength:g,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:S,headSize:_,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:E,qkvFormat:x}},Fl=he({perm:[0,2,1,3]}),pa=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(Pe(i,Fl.perm),{inputs:[i],outputs:[-1]})[0]),i},jl=(e,t,r,i)=>{let a=7,n=["type","type"],s=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],p=h=>{let f=M("seq_lens",r.dataType,r.dims),g=M("total_seq_lens",i.dataType,i.dims),y=H("pos_ids",a,s),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${h.registerUniforms(_).declareVariables(f,g,y)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${g.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${y.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:n},getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:p}},Qh=(e,t)=>{let r=Hl(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,n=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,p=e.inputs.length>5?e.inputs[6]:void 0,h=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=he({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,h*r.headSize,h*r.headSize]}),[g,y,_]=!a&&!n?e.compute(Va([i],f),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,n],w,T;if(t.doRotary){let S=e.compute(jl(r.batchSize,r.sequenceLength,l,p),{inputs:[l,p],outputs:[-1]})[0],I=e.inputs[7],A=e.inputs[8],C=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),v=[g,S,I,A],D=[-1];w=e.compute(ii(v,C),{inputs:v,outputs:D})[0],v.splice(0,1,y);let q=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});T=e.compute(ii(v,q),{inputs:v,outputs:D})[0]}let x=fr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?w:g,void 0,0),b=pa(e,t.doRotary?T:y,r),E=pa(e,_,r);_r(e,x,b,E,void 0,void 0,s,u,void 0,r,l,p)}}),ca,Kl,Xl,Jh,sy=P(()=>{te(),ie(),$t(),ae(),ca=(e,t,r,i,a,n,s,u)=>{let l=Se(n),p=l===1?"f32":`vec${l}f`,h=l===1?"vec2f":`mat2x${l}f`,f=a*s,g=64;f===1&&(g=256);let y=[a,s,n/l],_=[a,s,2],w=["rank","type","type"],T=[];T.push(...X(y,_));let x=b=>{let E=M("x",t.dataType,3,l),S=M("scale",r.dataType,r.dims),I=M("bias",i.dataType,i.dims),A=H("output",1,3,2),C=[E,S,I,A];return`
  var<workgroup> workgroup_shared : array<${h}, ${g}>;
  const workgroup_size = ${g}u;
  ${b.declareVariables(...C)}
  ${b.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${p}(0);
    var squared_sum = ${p}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${p}(${E.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${h}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${wt("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${wt("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${g}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:f},programUniforms:T}),getShaderSource:x},{inputs:[t,r,i],outputs:[-1]})[0]},Kl=(e,t,r)=>{let i=t[0].dims,a=i,n=2,s=i[0],u=i[1],l=O.sizeFromDimension(i,n),p=Se(l),h=O.size(a)/p,f=ca(e,t[0],t[1],t[2],s,l,u,r.epsilon),g=[s,u,l/p],y=[s,u],_=["type","none"],w=T=>{let x=M("x",t[0].dataType,g.length,p),b=M("scale_shift",1,y.length,2),E=H("output",t[0].dataType,g.length,p),S=[x,b,E];return`
  ${T.registerUniform("output_size","u32").declareVariables(...S)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${E.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${x.getByOffset("global_idx")} * ${E.type.value}(scale_shift.x) + ${E.type.value}(scale_shift.y);
      ${E.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${p}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...X(g,y,g)]}),getShaderSource:w},{inputs:[t[0],f]})},Xl=(e,t,r)=>{let i=t[0].dims,a=i,n=i[0],s=i[i.length-1],u=O.sizeFromDimension(i,1)/s,l=Se(s),p=O.size(a)/l,h=[{type:12,data:u},{type:12,data:Math.floor(s/l)}],f=["type","type"],g=!1,y=[0,i.length-1];for(let x=0;x<i.length-2;x++)g=g||i[x+1]!==1,y.push(x+1);g=g&&i[i.length-1]!==1;let _=g?e.compute(Pe(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(x,b)=>i[y[b]])),w=ca(e,_,t[1],t[2],n,u,s,r.epsilon),T=x=>{let b=Ie(t[0].dataType),E=l===1?"vec2f":`mat${l}x2f`,S=C=>{let v=C===0?"x":"y",D=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${b}(${D}(scale.${v}))`;case 2:return`vec2<${b}>(${D}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${b}>(${D}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${l}`)}},I=M("input",t[0].dataType,t[0].dims,l),A=H("output",t[0].dataType,a,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${E}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${A.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${x.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:h}),getShaderSource:T},{inputs:[t[0],w]})},Jh=(e,t)=>{t.format==="NHWC"?Xl(e,e.inputs,t):Kl(e,e.inputs,t)}}),Zl,Yl,ef,oy=P(()=>{te(),ie(),ae(),Zl=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Yl=(e,t,r)=>{let i=t.simplified,a=e[0].dims,n=e[1],s=!i&&e[2],u=a,l=O.normalizeAxis(t.axis,a.length),p=O.sizeToDimension(a,l),h=O.sizeFromDimension(a,l),f=O.size(n.dims),g=s?O.size(s.dims):0;if(f!==h||s&&g!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${g}`);let y=[];for(let I=0;I<a.length;++I)I<l?y.push(a[I]):y.push(1);let _=Se(h),w=["type","type"],T=[{type:12,data:p},{type:1,data:h},{type:12,data:Math.floor(h/_)},{type:1,data:t.epsilon}];s&&w.push("type");let x=r>1,b=r>2,E=I=>{let A=Ie(e[0].dataType),C=[M("x",e[0].dataType,e[0].dims,_),M("scale",n.dataType,n.dims,_)];s&&C.push(M("bias",s.dataType,s.dims,_)),C.push(H("output",e[0].dataType,u,_)),x&&C.push(H("mean_data_output",1,y)),b&&C.push(H("inv_std_output",1,y));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(v).declareVariables(...C)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ba("f32",_)};
    var mean_square_vector = ${Ba("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Ht(A,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${wt("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${wt("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Ht(A,_,"x[j + offset]")};
      let f32scale = ${Ht(A,_,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Ht(A,_,"bias[j]")}`:""}
      );
    }

    ${x?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:u,dataType:e[0].dataType}];return x&&S.push({dims:y,dataType:1}),b&&S.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:w},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:T}),getShaderSource:E}},ef=(e,t)=>{Zl(e.inputs),e.compute(Yl(e.inputs,t,e.outputCount))}}),Ql,tf,uy=P(()=>{ie(),yn(),_n(),Ql=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},tf=e=>{Ql(e.inputs);let t=Kt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(gn(e.inputs,{activation:""},t));else{let a=t[t.length-2],n=O.size(e.inputs[0].dims.slice(0,-2)),s=O.size(e.inputs[1].dims.slice(0,-2));if(n!==1&&a===1&&s===1){let u=e.inputs[0].reshape([1,n,i]),l=e.inputs[1].reshape([1,i,r]),p=[1,n,r],h=[u,l];e.compute(ri(h,{activation:""},t,p),{inputs:h})}else e.compute(ri(e.inputs,{activation:""},t))}}}),Jl,ed,td,rf,af,ly=P(()=>{te(),ie(),Te(),ae(),Jl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!O.areEqual(s.dims,[t.n,a,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(O.size(u)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,p=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(O.size(l)!==p)throw new Error("zeroPoints input size error.")}},ed=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=O.size(u),p=e[1].dims[2]/4,h=e[0].dataType,f=Se(t.k),g=Se(p),y=Se(s),_=u.concat([a,s]),w=a>1&&s/y%2===0?2:1,T=O.size(_)/y/w,x=64,b=[],E=[l,a,n/f],S=O.convertShape(e[1].dims).slice();S.splice(-1,1,p/g),b.push(...X(E)),b.push(...X(S)),b.push(...X(e[2].dims)),e.length===4&&b.push(...X(O.convertShape(e[3].dims)));let I=[l,a,s/y];b.push(...X(I));let A=C=>{let v=E.length,D=M("a",e[0].dataType,v,f),q=M("b",12,S.length,g),Y=M("scales",e[2].dataType,e[2].dims.length),F=[D,q,Y],K=e.length===4?M("zero_points",12,e[3].dims.length):void 0;K&&F.push(K);let R=I.length,N=H("output",e[0].dataType,R,y),G=Ie(e[0].dataType),J=(()=>{switch(f){case 1:return`array<${G}, 8>`;case 2:return`mat4x2<${G}>`;case 4:return`mat2x4<${G}>`;default:throw new Error(`${f}-component is not supported.`)}})(),ee=Math.floor(32/t.bits),re=Math.floor(ee/8),ne=()=>{let Z="";for(let V=0;V<re;V++){let Ee=V*t.bits*4,Ae=Ee+t.bits;Z+=`
          // reuse a data (pass ${V})
            var input_offset${V>0?V:""} = ${V===0?D.indicesToOffset(`${D.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${V>0?V:""}: ${J};
            for (var j${V>0?V:""}: u32 = 0; j${V>0?V:""} < ${8/f}; j${V>0?V:""}++) {
              a_data${V>0?V:""}[j${V>0?V:""}] = ${D.getByOffset(`input_offset${V>0?V:""}`)};
              input_offset${V>0?V:""}++;
            }
          `;for(let $e=0;$e<y*w;$e++)Z+=`
            b_value = ${g===1?`b${$e}_data`:`b${$e}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${V*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${Ee}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Ae}u) & b_mask);`}
            b_quantized_values = ${J}(${Array.from({length:4},(Oe,me)=>`${G}(b_value_lower[${me}]), ${G}(b_value_upper[${me}])`).join(", ")});
            b_dequantized_values = ${f===1?`${J}(${Array.from({length:8},(Oe,me)=>`(b_quantized_values[${me}] - ${K?`zero_point${$e}`:"zero_point"}) * scale${$e}`).join(", ")});`:`(b_quantized_values - ${J}(${Array(8).fill(`${K?`zero_point${$e}`:"zero_point"}`).join(",")})) * scale${$e};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor($e/y)}]${y>1?`[${$e%y}]`:""} += ${Array.from({length:8/f},(Oe,me)=>`${f===1?`a_data${V>0?V:""}[${me}] * b_dequantized_values[${me}]`:`dot(a_data${V>0?V:""}[${me}], b_dequantized_values[${me}])`}`).join(" + ")};
          `}return Z},U=()=>{let Z=`
            var col_index = col * ${y};
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
            `;for(let V=0;V<y*w;V++)Z+=`
            let scale${V} = ${Y.getByOffset("col_index * nBlocksPerCol + block")};
            ${K?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${V} = ${G}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Z},Q=()=>{let Z=`col_index = col * ${y};`;for(let V=0;V<y*w;V++)Z+=`
            let b${V}_data = ${q.getByIndices(`${q.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Z+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${J};
            var b_dequantized_values: ${J};`,Z};return`
        var<workgroup> workgroup_shared: array<${N.type.value}, ${w*x}>;
        ${C.declareVariables(...F,N)}
        ${C.mainStart([x,1,1])}
          let output_indices = ${N.offsetToIndices(`(global_idx / ${x}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${x}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${U()}
            for (var word: u32 = 0; word < ${p}; word += ${g}) {
              ${Q()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${ne()}
                word_offset += ${ee/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${N.type.value} = ${N.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${x}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${N.setByIndices(`${N.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${g};${y};${w};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:h}],dispatchGroup:{x:T},programUniforms:b}),getShaderSource:A}},td=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=O.size(u),p=e[1].dims[2]/4,h=e[0].dataType,f=Se(t.k),g=Se(p),y=u.concat([a,s]),_=128,w=s%8===0?8:s%4===0?4:1,T=_/w,x=Math.floor(32/t.bits),b=T*g*x,E=b/f,S=b/t.blockSize,I=O.size(y)/w,A=[],C=[l,a,n/f],v=O.convertShape(e[1].dims).slice();v.splice(-1,1,p/g),A.push(...X(C)),A.push(...X(v)),A.push(...X(e[2].dims)),e.length===4&&A.push(...X(O.convertShape(e[3].dims)));let D=[l,a,s];A.push(...X(D));let q=Y=>{let F=C.length,K=M("a",e[0].dataType,F,f),R=M("b",12,v.length,g),N=M("scales",e[2].dataType,e[2].dims.length),G=[K,R,N],J=e.length===4?M("zero_points",12,e[3].dims.length):void 0;J&&G.push(J);let ee=D.length,re=H("output",e[0].dataType,ee),ne=Ie(e[0].dataType),U=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${ne}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ne}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ne}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ne}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${K.type.value}, ${E}>;
        var<workgroup> inter_results: array<array<${re.type.value}, ${T}>, ${w}>;
        ${Y.declareVariables(...G,re)}
        ${Y.mainStart([T,w,1])}
          let output_indices = ${re.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${E};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${E}; a_offset += ${_})
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
            let block = tile * ${S} + local_id.x;
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
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let Q=Math.floor(x/8),Z="";for(let V=0;V<Q;V++){let Ee=V*t.bits*4,Ae=Ee+t.bits;Z+=`
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
                let b_quantized_values = mat2x4<${ne}>(${Array.from({length:4},($e,Oe)=>`${ne}(b_value_lower[${Oe}]), ${ne}(b_value_upper[${Oe}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ne}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},($e,Oe)=>`${`dot(a_data${Oe}, b_dequantized_values[${Oe}])`}`).join(" + ")};
              }
              word_offset += ${8/f};`}return Z})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${re.type.value} = ${re.type.value}(0);
            for (var b = 0u; b < ${T}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${re.setByIndices(`${re.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${g};${T};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:h}],dispatchGroup:{x:I},programUniforms:A}),getShaderSource:q}},rf=(e,t)=>{Jl(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(td(e.inputs,t)):e.compute(ed(e.inputs,t))},af=e=>he(e)}),rd,id,ad,nd,sd,od,ud,ld,nf,dy=P(()=>{te(),ie(),ae(),rd=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},id=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
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
      `},ad=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
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
          `},nd=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
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
          `},sd=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
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
          `},od=(e,t,r)=>{switch(r.mode){case 0:return id(e,t,r.pads.length);case 1:return ad(e,t,r.pads.length);case 2:return nd(e,t,r.pads.length);case 3:return sd(e,t,r.pads.length);default:throw new Error("Invalid mode")}},ud=(e,t)=>{let r=O.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=O.size(r),n=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...X(e[0].dims,r));let u=["rank"],l=p=>{let h=H("output",e[0].dataType,r.length),f=M("x",e[0].dataType,i.length),g=f.type.value,y=od(h,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:s?g:"f32"}),`
            ${p.registerUniforms(_).declareVariables(f,h)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(r)/64)},programUniforms:n}),getShaderSource:l}},ld=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,n=new Int32Array(2*a).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)n[Number(u[l])]=Number(r[l]),n[Number(u[l])+a]=Number(r[l+u.length])}else r.forEach((u,l)=>n[Number(l)]=Number(u));let s=[];return n.forEach(u=>s.push(u)),{mode:t.mode,value:i,pads:s}}else return t},nf=(e,t)=>{rd(e.inputs);let r=ld(e.inputs,t);e.compute(ud(e.inputs,r),{inputs:[0]})}}),or,ha,fa,ma,ga,dd,pd,ya,_a,sf,of,ba,uf,lf,wa,df,pf,cf,hf,py=P(()=>{We(),te(),ie(),ae(),or=e=>{if(ye.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},ha=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),l=n?t.dilations.slice():[],p=t.pads.slice();ei.adjustPoolAttributes(r,a,s,u,l,p);let h=ei.computePoolOutputShape(r,a,u,l,s,p,t.autoPad),f=Object.assign({},t);n?Object.assign(f,{kernelShape:s,strides:u,pads:p,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:u,pads:p,cacheKey:t.cacheKey});let g=h.slice();return g.push(g.splice(1,1)[0]),[f,i?g:h]},fa=(e,t)=>{let r=t.format==="NHWC",i=O.size(e),a=O.size(t.kernelShape),n=[{type:12,data:i},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],f=!!(p+h);n.push({type:12,data:u},{type:12,data:l},{type:12,data:p},{type:12,data:h}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],T=t.pads[t.pads.length-2];g=!!(w+T),n.push({type:12,data:y},{type:12,data:_},{type:12,data:w},{type:12,data:T}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,f,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=O.computeStrides(t.kernelShape);n.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((p,h)=>p+h);return[n,s,!!l,!1,!1]}},ma=(e,t,r,i,a,n,s,u,l,p,h,f)=>{let g=a.format==="NHWC",y=t.type.value,_=H("output",t.type.tensor,i);if(a.kernelShape.length<=2){let w="",T="",x="",b=r-(g?2:1);if(h?w=`
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
                }`,a.kernelShape.length===2){let E=r-(g?3:2);f?T=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${E}] = indices[${E}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${E}] < 0 || xIndices[${E}] >= uniforms.x_shape[${E}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:T=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${E}] = indices[${E}] * uniforms.sh - uniforms.phStart + j;
                `,x=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${y}(${u});
              var pad = 0;
              ${T}
              ${w}
              ${x}
              ${s}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=a.kernelShape.length,T=a.pads.length,x="";return p?x=`
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
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${y}(${u});
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
                    + offsets[j - ${r-w}u] - ${j("uniforms.pads","j - 2u",T)};
                  ${x}
              }
              ${s}

              output[global_idx] = value;
            }`}},ga=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,dd=e=>`${ga(e)};${e.countIncludePad}`,pd=e=>`${ga(e)};${e.storageOrder};${e.dilations}`,ya=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),_a=(e,t,r,i)=>{let[a,n]=ha(t,i,r),s=M("x",t.dataType,t.dims.length),u=s.type.value,l="value += x_val;",p="";a.countIncludePad?p+=`value /= ${u}(uniforms.kernelSize);`:p+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[h,f,g,y,_]=fa(n,a);h.push(...X(t.dims,n));let w=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${g};${y};${_}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(n)/64)},programUniforms:h}),getShaderSource:T=>ma(T,s,t.dims.length,n.length,a,l,p,0,f,g,y,_)}},sf=e=>{let t=e.count_include_pad!==0,r=ya(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:dd(i)}},of=(e,t)=>{or(e.inputs),e.compute(_a("AveragePool",e.inputs[0],!1,t))},ba={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},uf=e=>{let t=e.format;return{format:t,...ba,cacheKey:t}},lf=(e,t)=>{or(e.inputs),e.compute(_a("GlobalAveragePool",e.inputs[0],!0,t))},wa=(e,t,r,i)=>{let[a,n]=ha(t,i,r),s=`
      value = max(x_val, value);
    `,u="",l=M("x",t.dataType,t.dims.length),p=["rank"],[h,f,g,y,_]=fa(n,a);return h.push(...X(t.dims,n)),{name:e,shaderCache:{hint:`${i.cacheKey};${g};${y};${_}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(n)/64)},programUniforms:h}),getShaderSource:w=>ma(w,l,t.dims.length,n.length,a,s,u,t.dataType===10?-65504:-1e5,f,g,y,_)}},df=(e,t)=>{or(e.inputs),e.compute(wa("MaxPool",e.inputs[0],!1,t))},pf=e=>{let t=e.storage_order,r=e.dilations,i=ya(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:pd(a)}},cf=e=>{let t=e.format;return{format:t,...ba,cacheKey:t}},hf=(e,t)=>{or(e.inputs),e.compute(wa("GlobalMaxPool",e.inputs[0],!0,t))}}),cd,hd,ff,mf,cy=P(()=>{te(),ie(),Te(),ae(),cd=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,n)=>n===t.axis||a===e[0].dims[n]).reduce((a,n)=>a&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},hd=(e,t)=>{let r=O.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,n=e[0].dims,s=e[1].dataType,u=O.size(n),l=i===3||i===2,p=l?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,f=e.length>2?e[2]:void 0,g=f?l?[Math.ceil(O.size(f.dims)/4)]:f.dims:void 0,y=h.length===0||h.length===1&&h[0]===1,_=y===!1&&h.length===1,w=Se(u),T=y&&(!l||w===4),x=T?w:1,b=T&&!l?w:1,E=M("input",l?12:i,p.length,b),S=M("scale",s,h.length),I=f?M("zero_point",l?12:i,g.length):void 0,A=H("output",s,n.length,x),C=[E,S];I&&C.push(I);let v=[p,h];f&&v.push(g);let D=[{type:12,data:u/x},{type:12,data:r},{type:12,data:t.blockSize},...X(...v,n)],q=Y=>{let F=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Y.registerUniforms(F).declareVariables(...C,A)}
      ${Y.mainStart()}
          ${Y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${A.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${E.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${x===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${E.getByOffset("global_idx")};`};

          // Set scale input
          ${y?`let scale_value= ${S.getByOffset("0")}`:_?`
            let scale_index = ${A.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?y?l?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:_?l?`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${l?a?"i32":"u32":E.type.value}(0);`};
      // Compute and write output
      ${A.setByOffset("global_idx",`${A.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:q,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(u/x/64),y:1,z:1},programUniforms:D})}},ff=(e,t)=>{cd(e.inputs,t),e.compute(hd(e.inputs,t))},mf=e=>he({axis:e.axis,blockSize:e.blockSize})}),fd,md,gf,hy=P(()=>{We(),te(),ae(),fd=(e,t,r)=>{let i=e===t,a=e<t&&r<0,n=e>t&&r>0;if(i||a||n)throw new Error("Range these inputs' contents are invalid.")},md=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),n=[a],s=a,u=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...X(n)],l=p=>{let h=H("output",i,n.length),f=h.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${p.registerUniforms(g).declareVariables(h)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},gf=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),ye.webgpu.validateInputContent&&fd(t,r,i),e.compute(md(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),gd,yd,yf,_f,fy=P(()=>{te(),ie(),Te(),ae(),gd=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
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
                ${a}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${n}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${e} is not supported.`)}},yd=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,n=1,s=Math.ceil(O.sizeToDimension(i,i.length-1)/n),u=i[i.length-1],l=O.sizeFromDimension(r,u),p=[{type:12,data:s},{type:12,data:u},{type:12,data:l},...X(e[1].dims,e[2].dims,a)],h=f=>{let g=M("indices",e[1].dataType,e[1].dims.length),y=M("updates",e[2].dataType,e[2].dims.length,n),_=t.reduction!=="none"&&t.reduction!==""?Hp("output",e[0].dataType,a.length):H("output",e[0].dataType,a.length,n);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,y,_)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
    ${gd(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p}),getShaderSource:h}},yf=e=>he({reduction:e.reduction}),_f=(e,t)=>{e.compute(yd(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),_d,bd,wd,$a,$d,vd,xd,Sd,Td,kd,Ed,Id,va,zd,Cd,Ad,Od,Rd,bf,wf,my=P(()=>{te(),ie(),Te(),ae(),_d=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},bd=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,n)=>i[a]=e[n]),i},wd=(e,t,r,i,a,n)=>{let[s,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(h=>n.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(h=>i.push(h)),i.length!==0&&i.length!==p&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");_d(i,t),t.axes.length>0&&bd(i,t.axes,p).forEach((h,f)=>i[f]=h)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(h=>a.push(Number(h))),a.length!==0&&a.length!==p&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},$a=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,$d=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${$a("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${$a("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",vd=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",xd=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((n,s)=>{i[n]=a[s],i[s+r]=a[t.length+s]}),i):a},Sd=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(n=>a.push(n)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((n,s)=>a[n]=r[s])}else r.forEach(n=>a.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((n,s)=>Math.round(n*t[s]))}return a},Td=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=i),r.axes.forEach(n=>a[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),a.forEach((n,s)=>a[s]=Math.round(n*t[s]))),a},kd=(e,t,r,i,a)=>`
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
    }`,Ed=(e,t,r,i,a,n,s)=>`
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
    }`,Id=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${j("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,va=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",zd=(e,t,r,i,a)=>{let[n,s,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${va(e,l,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${s}];
      var col:${p} = originalIndices[${u}];
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
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Cd=(e,t,r,i,a,n,s,u,l,p)=>{let h=r.length===2,[f,g]=h?[0,1]:[2,3],y=e.type.value,_=w=>{let T=w===f?"row":"col";return`
      fn ${T}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[w]},
        ${i[w]}, ${r[w]}, ${n[w]}, ${n[w]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[w]} - 1))) {
          return ${l};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${T}: ${y} = originalIdx + ${y}(i);
          if (${T} < 0 || ${T} >= ${r[w]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${T} = max(0, min(${T}, ${r[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${T})`)};
          data[i + 1] = ${w===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(f)};
    ${_(g)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Ad=(e,t,r,i,a)=>{let[n,s,u,l,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${va(e,p,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${h} = originalIndices[${s}];
      var height:${h} = originalIndices[${u}];
      var width:${h} = originalIndices[${l}];
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
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${h} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${h} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${h} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${h} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${h} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${h} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${h} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${h} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${h} = abs(depth - ${h}(depth1));
      var dx2: ${h} = abs(${h}(depth2) - depth);
      var dy1: ${h} = abs(height - ${h}(height1));
      var dy2: ${h} = abs(${h}(height2) - height);
      var dz1: ${h} = abs(width - ${h}(width1));
      var dz2: ${h} = abs(${h}(width2) - width);
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
    }`},Od=(e,t,r,i,a,n)=>{let s=e.dims,u=xd(n,t.axes,s.length),l=Sd(s,i,a,t.axes),p=i.slice();i.length===0&&(p=s.map((b,E)=>b===0?1:l[E]/b),t.keepAspectRatioPolicy!=="stretch"&&(l=Td(s,p,t)));let h=H("output",e.dataType,l.length),f=M("input",e.dataType,s.length),g=O.size(l),y=s.length===l.length&&s.every((b,E)=>b===l[E]),_=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,T=f.type.value,x=b=>`
      ${y?"":`
      ${$d(t.coordinateTransformMode,T)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Id(f,s)};
              ${vd(t.nearestMode,r,T)};
              ${Ed(f,h,s,l,p.length,u.length,_)};
              `;case"linear":return`
              ${kd(h,s,l,p.length,u.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${zd(f,h,s,_,w)}`;if(s.length===3||s.length===5)return`${Ad(f,h,s,_,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Cd(f,h,s,l,p,u,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",u.length).declareVariables(f,h)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?t.mode==="cubic"?p:p.length:""}|${a.length>0?a:""}|${u.length>0?u:""}|${y}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:p},{type:1,data:u},...X(s,l)]})}},Rd=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},bf=(e,t)=>{let r=[],i=[],a=[],n=Rd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");wd(e.inputs,t,n,r,i,a),e.compute(Od(e.inputs[0],t,n,r,i,a),{inputs:[0]})},wf=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return he({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:u,mode:l,nearestMode:p})}}),Bd,Md,$f,gy=P(()=>{te(),ie(),ae(),Bd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Md=(e,t,r,i)=>{let a=t.simplified,n=e[0].dims,s=O.size(n),u=n,l=s,p=n.slice(-1)[0],h=i?n.slice(0,-1).concat(1):[],f=!a&&e.length>3,g=e.length>4,y=i&&r>1,_=i&&r>2,w=r>3,T=64,x=Se(p),b=[{type:12,data:l},{type:12,data:x},{type:12,data:p},{type:1,data:t.epsilon}],E=I=>{let A=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[M("x",e[0].dataType,e[0].dims,x),M("skip",e[1].dataType,e[1].dims,x),M("gamma",e[2].dataType,e[2].dims,x)];f&&C.push(M("beta",e[3].dataType,e[3].dims,x)),g&&C.push(M("bias",e[4].dataType,e[4].dims,x)),C.push(H("output",e[0].dataType,u,x)),y&&C.push(H("mean_output",1,h)),_&&C.push(H("inv_std_output",1,h)),w&&C.push(H("input_skip_bias_sum",e[0].dataType,u,x));let v=Ie(e[0].dataType),D=Ie(1,x);return`

      ${I.registerUniforms(A).declareVariables(...C)}
      var<workgroup> sum_shared : array<${D}, ${T}>;
      var<workgroup> sum_squared_shared : array<${D}, ${T}>;

      ${I.mainStart([T,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${T};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${T};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${T-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":v+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Ht(v,x,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${T};
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
        let mean = ${wt("sum",x)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${wt("square_sum",x)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${y?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:u,dataType:e[0].dataType}];return r>1&&S.push({dims:h,dataType:1}),r>2&&S.push({dims:h,dataType:1}),r>3&&S.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${x};${y};${_};${w}`,inputDependencies:e.map((I,A)=>"type")},getShaderSource:E,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/p)},programUniforms:b})}},$f=(e,t)=>{Bd(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Md(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Nd,ur,Dd,xa,Ud,Pd,vf,xf,yy=P(()=>{te(),ie(),Te(),ae(),Nd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},ur=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Dd=(e,t)=>{if(e.length>1){let r=ur(e,1),i=ur(e,2),a=ur(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),he({starts:r,ends:i,axes:a})}else return t},xa=(e,t,r,i,a)=>{let n=e;return e<0&&(n+=r[i[t]]),a[t]<0?Math.max(0,Math.min(n,r[i[t]]-1)):Math.max(0,Math.min(n,r[i[t]]))},Ud=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,Pd=(e,t)=>{let r=e[0].dims,i=O.size(r),a=t.axes.length>0?O.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=ur(e,4);n.forEach(x=>x!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(a.length).fill(1));let s=t.starts.map((x,b)=>xa(x,b,r,a,n)),u=t.ends.map((x,b)=>xa(x,b,r,a,n));if(a.length!==s.length||a.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let x=0;x<r.length;++x)a.includes(x)||(s.splice(x,0,0),u.splice(x,0,r[x]),n.splice(x,0,1));let l=n.map(x=>Math.sign(x));n.forEach((x,b,E)=>{if(x<0){let S=(u[b]-s[b])/x,I=s[b],A=I+S*n[b];s[b]=A,u[b]=I,E[b]=-x}});let p=r.slice(0);a.forEach((x,b)=>{p[x]=Math.ceil((u[x]-s[x])/n[x])});let h={dims:p,dataType:e[0].dataType},f=H("output",e[0].dataType,p.length),g=M("input",e[0].dataType,e[0].dims.length),y=O.size(p),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:n.length}],w=[{type:12,data:y},{type:12,data:s},{type:6,data:l},{type:12,data:n},...X(e[0].dims,p)],T=x=>`
      ${x.registerUniforms(_).declareVariables(g,f)}
        ${Ud(g,f,r)}
        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:T,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:w})}},vf=(e,t)=>{Nd(e.inputs,t);let r=Dd(e.inputs,t);e.compute(Pd(e.inputs,r),{inputs:[0]})},xf=e=>{let t=e.starts,r=e.ends,i=e.axes;return he({starts:t,ends:r,axes:i})}}),qd,Ld,Sf,Tf,_y=P(()=>{te(),ie(),Te(),$t(),ae(),qd=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Ld=(e,t)=>{let r=e.inputs[0],i=r.dims,a=O.size(i),n=i.length,s=O.normalizeAxis(t.axis,n),u=s<i.length-1,l,p=[];u?(p=Array.from({length:n},(C,v)=>v),p[s]=n-1,p[n-1]=s,l=e.compute(Pe(r,p),{inputs:[r],outputs:[-1]})[0]):l=r;let h=l.dims,f=h[n-1],g=a/f,y=Se(f),_=f/y,w=64;g===1&&(w=256);let T=(C,v)=>v===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:v===2?`max(${C}.x, ${C}.y)`:v===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,x=M("x",l.dataType,l.dims,y),b=H("result",l.dataType,l.dims,y),E=x.type.value,S=Ie(l.dataType)==="f32"?`var threadMax = ${E}(-3.4028234663852886e+38f);`:`var threadMax = ${E}(-65504.0h);`,I=C=>`
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
        ${S}
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
          rowMaxShared = ${E}(${T("threadShared[0]",y)});
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
          rowSumShared = ${E}(${wt("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${E}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,A=e.compute({name:"Softmax",shaderCache:{hint:`${y};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:_}]}),getShaderSource:I},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(Pe(A,p),{inputs:[A]})},Sf=(e,t)=>{qd(e.inputs),Ld(e,t)},Tf=e=>he({axis:e.axis})}),Sa,Wd,Vd,Gd,kf,by=P(()=>{te(),ie(),ae(),Sa=e=>Array.from(e.getBigInt64Array(),Number),Wd=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Sa(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Vd=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Gd=(e,t)=>{let r=e[0].dims,i=t??Sa(e[1]),a=Vd(r,i),n=O.size(a),s=e[0].dataType,u=M("input",s,r.length),l=H("output",s,a.length),p=h=>`
      const inputShape = ${u.indices(...r)};
      ${h.registerUniform("output_size","u32").declareVariables(u,l)}
      ${h.mainStart()}
      ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...X(e[0].dims,a)]}),getShaderSource:p}},kf=e=>{Wd(e.inputs),e.compute(Gd(e.inputs),{inputs:[0]})}}),Hd,Fd,Ef,wy=P(()=>{te(),ie(),ae(),Hd=(e,t,r,i,a)=>{let n=H("output_data",a,r.length,4),s=M("a_data",t[1].dataType,t[1].dims.length,4),u=M("b_data",t[2].dataType,t[2].dims.length,4),l=M("c_data",t[0].dataType,t[0].dims.length,4),p,h=(f,g,y)=>`select(${g}, ${f}, ${y})`;if(!i)p=n.setByOffset("global_idx",h(s.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(g,y,_="")=>{let w=`a_data[index_a${y}][component_a${y}]`,T=`b_data[index_b${y}][component_b${y}]`,x=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
            let output_indices${y} = ${n.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offset_a${y} = ${s.broadcastedIndicesToOffset(`output_indices${y}`,n)};
            let offset_b${y} = ${u.broadcastedIndicesToOffset(`output_indices${y}`,n)};
            let offset_c${y} = ${l.broadcastedIndicesToOffset(`output_indices${y}`,n)};
            let index_a${y} = offset_a${y} / 4u;
            let index_b${y} = offset_b${y} / 4u;
            let index_c${y} = offset_c${y} / 4u;
            let component_a${y} = offset_a${y} % 4u;
            let component_b${y} = offset_b${y} % 4u;
            let component_c${y} = offset_c${y} % 4u;
            ${g}[${y}] = ${_}(${h(w,T,x)});
          `};a===9?p=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,u,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},Fd=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,n=!(O.areEqual(t,r)&&O.areEqual(r,i)),s=t,u=O.size(t);if(n){let p=Kt.calcShape(Kt.calcShape(t,r,!1),i,!1);if(!p)throw new Error("Can't perform where op on the given tensors");s=p,u=O.size(s)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>Hd(p,e,s,n,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...X(i,t,r,s)]})}},Ef=e=>{e.compute(Fd(e.inputs))}}),If,$y=P(()=>{M0(),cn(),N0(),D0(),U0(),P0(),q0(),H0(),j0(),K0(),X0(),Z0(),Y0(),Q0(),J0(),ey(),ty(),ry(),iy(),ay(),ny(),sy(),oy(),uy(),ly(),Fh(),dy(),py(),cy(),hy(),fy(),pn(),my(),Yh(),gy(),yy(),_y(),Xh(),by(),$t(),hn(),wy(),If=new Map([["Abs",[wc]],["Acos",[$c]],["Acosh",[vc]],["Add",[rh]],["ArgMax",[gc,Na]],["ArgMin",[mc,Na]],["Asin",[xc]],["Asinh",[Sc]],["Atan",[Tc]],["Atanh",[kc]],["Attention",[yc]],["AveragePool",[of,sf]],["BatchNormalization",[_c]],["BiasAdd",[bc]],["BiasSplitGelu",[th]],["Cast",[Ic,Ec]],["Ceil",[Cc]],["Clip",[zc]],["Concat",[ch,hh]],["Conv",[Wa,La]],["ConvTranspose",[xh,vh]],["Cos",[Ac]],["Cosh",[Oc]],["CumSum",[Sh,Th]],["DepthToSpace",[kh,Eh]],["DequantizeLinear",[ff,mf]],["Div",[ih]],["Einsum",[Ih,zh]],["Elu",[Rc,hr]],["Equal",[ah]],["Erf",[Bc]],["Exp",[Mc]],["Expand",[Ch]],["FastGelu",[Ah]],["Floor",[Nc]],["FusedConv",[Wa,La]],["Gather",[Rh,Oh]],["GatherElements",[Ph,Uh]],["GatherBlockQuantized",[Nh,Dh]],["GatherND",[Bh,Mh]],["Gelu",[Dc]],["Gemm",[Lh,qh]],["GlobalAveragePool",[lf,uf]],["GlobalMaxPool",[hf,cf]],["Greater",[uh]],["GreaterOrEqual",[dh]],["GridSample",[Wh,Vh]],["GroupQueryAttention",[Qh]],["HardSigmoid",[Hc,Gc]],["InstanceNormalization",[Jh]],["LayerNormalization",[ef]],["LeakyRelu",[Uc,hr]],["Less",[lh]],["LessOrEqual",[ph]],["Log",[Jc]],["MatMul",[tf]],["MatMulNBits",[rf,af]],["MaxPool",[df,pf]],["Mul",[nh]],["MultiHeadAttention",[Hh,Gh]],["Neg",[qc]],["Not",[Pc]],["Pad",[nf]],["Pow",[sh]],["QuickGelu",[eh,hr]],["Range",[gf]],["Reciprocal",[Lc]],["ReduceMin",[dc]],["ReduceMean",[nc]],["ReduceMax",[lc]],["ReduceSum",[cc]],["ReduceProd",[pc]],["ReduceL1",[sc]],["ReduceL2",[oc]],["ReduceLogSum",[fc]],["ReduceLogSumExp",[uc]],["ReduceSumSquare",[hc]],["Relu",[Wc]],["Resize",[bf,wf]],["RotaryEmbedding",[Zh]],["ScatterND",[_f,yf]],["Sigmoid",[Vc]],["Sin",[Fc]],["Sinh",[jc]],["Slice",[vf,xf]],["SkipLayerNormalization",[$f]],["Split",[jh,Kh]],["Sqrt",[Kc]],["Softmax",[Sf,Tf]],["Sub",[oh]],["Tan",[Xc]],["Tanh",[Zc]],["ThresholdedRelu",[Qc,hr]],["Tile",[kf]],["Transpose",[jp,Kp]],["Where",[Ef]]])}),zf,vy=P(()=>{We(),pt(),ae(),zf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){nt(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let p of t)u.push({binding:u.length,resource:{buffer:p.buffer}});for(let p of r)u.push({binding:u.length,resource:{buffer:p.buffer}});a&&u.push({binding:u.length,resource:a});let l=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ye(e.programInfo.name)}dispose(){}build(e,t){nt(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(p=>{r.features.has(p.feature)&&i.push(`enable ${p.extension};`)});let a=Fp(t,this.backend.device.limits),n=e.getShaderSource(a),s=`${i.join(`
`)}
${a.additionalImplementations}
${n}`,u=r.createShaderModule({code:s,label:e.name});de("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return Ye(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let n=t*r*i,s=Math.ceil(Math.sqrt(n));if(s>a){if(s=Math.ceil(Math.cbrt(n)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Cf={};Zt(Cf,{WebGpuBackend:()=>Af});var jd,Kd,Xd,Af,xy=P(()=>{We(),te(),pt(),Lp(),R0(),$y(),vy(),jd=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let n=e[i].dims.length;r.push(`${a};${n}`);break}case"dims":{let n=e[i].dims.join(",");r.push(`${a};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Kd=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${jd(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},Xd=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Af=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=u=>t.features.has(u)&&r.push(u)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(i);let n=t,s=t.info??(typeof n.requestAdapterInfo=="function"?await n.requestAdapterInfo():void 0);this.adapterInfo=new Xd(s),this.gpuDataManager=Gp(this),this.programManager=new zf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,on(e.logLevel,!!e.debug),this.device.onuncapturederror=u=>{u.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${u.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;nt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],n=a.kernelId,s=this.kernels.get(n),u=s.kernelType,l=s.kernelName,p=a.programName,h=a.inputTensorViews,f=a.outputTensorViews,g=t[i*2],y=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let _=Number(g-this.queryTimeBase),w=Number(y-this.queryTimeBase);if(!Number.isSafeInteger(_)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(T=>({dims:T.dims,dataType:dt(T.dataType)})),outputsMetadata:f.map(T=>({dims:T.dims,dataType:dt(T.dataType)})),kernelId:n,kernelType:u,kernelName:l,programName:p,startTime:_,endTime:w});else{let T="";h.forEach((b,E)=>{T+=`input[${E}]: [${b.dims}] | ${dt(b.dataType)}, `});let x="";f.forEach((b,E)=>{x+=`output[${E}]: [${b.dims}] | ${dt(b.dataType)}, `}),console.log(`[profiling] kernel "${n}|${u}|${l}|${p}" ${T}${x}start time: ${_} ns, execution time: ${w-_} ns`)}Yr("GPU",`${p}::${g}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),Ye()}run(e,t,r,i,a,n){nt(e.name);let s=[];for(let b=0;b<t.length;++b){let E=t[b].data;if(E===0)continue;let S=this.gpuDataManager.get(E);if(!S)throw new Error(`no GPU data for input: ${E}`);s.push(S)}let{outputs:u,dispatchGroup:l,programUniforms:p}=e.getRunData(t),h=r.length===0?u.map((b,E)=>E):r;if(h.length!==u.length)throw new Error(`Output size ${h.length} must be equal to ${u.length}.`);let f=[],g=[];for(let b=0;b<u.length;++b){if(!Number.isInteger(h[b])||h[b]<-3||h[b]>=n)throw new Error(`Invalid output index: ${h[b]}`);if(h[b]===-3)continue;let E=h[b]===-1,S=h[b]===-2,I=E||S?a(u[b].dataType,u[b].dims):i(h[b],u[b].dataType,u[b].dims);if(f.push(I),I.data===0)continue;let A=this.gpuDataManager.get(I.data);if(!A)throw new Error(`no GPU data for output: ${I.data}`);if(E&&this.temporaryData.push(A),S){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(A)}g.push(A)}if(s.length!==t.length||g.length!==f.length){if(g.length===0)return Ye(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(p){let b=0,E=[];p.forEach(C=>{let v=typeof C.data=="number"?[C.data]:C.data;if(v.length===0)return;let D=C.type===10?2:4,q,Y;C.type===10?(Y=v.length>4?16:v.length>2?8:v.length*D,q=v.length>4?16:D*v.length):(Y=v.length<=2?v.length*D:16,q=16),b=Math.ceil(b/Y)*Y,E.push(b);let F=C.type===10?8:4;b+=v.length>4?Math.ceil(v.length/F)*q:v.length*D});let S=16;b=Math.ceil(b/S)*S;let I=new ArrayBuffer(b);p.forEach((C,v)=>{let D=E[v],q=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(I,D,q.length).set(q);else if(C.type===12)new Uint32Array(I,D,q.length).set(q);else if(C.type===10)new Uint16Array(I,D,q.length).set(q);else if(C.type===1)new Float32Array(I,D,q.length).set(q);else throw new Error(`Unsupported uniform type: ${dt(C.type)}`)});let A=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(A.buffer,0,I,0,b),this.gpuDataManager.release(A.id),y={offset:0,size:b,buffer:A.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),w=_[1]===1&&_[2]===1,T=Kd(e,t,w),x=this.programManager.getArtifact(T);if(x||(x=this.programManager.build(e,_),this.programManager.setArtifact(T,x),de("info",()=>`[artifact] key: ${T}, programName: ${e.name}`)),p&&x.uniformVariablesInfo){if(p.length!==x.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${x.uniformVariablesInfo.length}, got ${p.length} in program "${x.programInfo.name}".`);for(let b=0;b<p.length;b++){let E=p[b],S=E.type,I=typeof E.data=="number"?1:E.data.length,[A,C]=x.uniformVariablesInfo[b];if(S!==A||I!==C)throw new Error(`Uniform variable ${b} mismatch: expect type ${A} with size ${C}, got type ${S} with size ${I} in program "${x.programInfo.name}".`)}}if(de("info",()=>`[ProgramManager] run "${e.name}" (key=${T}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:x.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run(x,s,g,_,y),Ye(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=If.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,n=i.kernelName,s=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),de("info",()=>`[WebGPU] Start to run kernel "[${a}] ${n}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${n}" failed. ${p}`)),1}finally{l&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${a}] ${n}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let n=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,n);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Ra(this,e,t);return un(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){de("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){de("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){de("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),n=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(n.computePipeline),a.setBindGroup(0,n.bindGroup),a.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Of={};Zt(Of,{init:()=>Rf});var Vr,Zd,Rf,Sy=P(()=>{te(),pt(),ie(),O0(),Vr=class Bf{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new Bf(this.module,this.dataType,this.data,t)}},Zd=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,n=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,n));let s=Number(e.getValue(i*a++,n));this.outputCount=Number(e.getValue(i*a++,n)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,n));let u=[];for(let l=0;l<s;l++){let p=Number(e.getValue(i*a++,n)),h=Number(e.getValue(i*a++,"*")),f=Number(e.getValue(i*a++,n)),g=[];for(let y=0;y<f;y++)g.push(Number(e.getValue(i*a++,n)));u.push(new Vr(e,p,h,g))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],a=(s,u,l)=>new Vr(this.module,u,this.output(s,l),l),n=(s,u)=>{let l=Ot(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let p=l>0?this.backend.gpuDataManager.create(l).id:0;return new Vr(this.module,s,p,u)};return this.backend.run(e,r,i,a,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",n=this.module.stackAlloc((1+t.length)*i);this.module.setValue(n,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(n+i*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,n)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Rf=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=(xy(),yr(Cf)).WebGpuBackend,s=new n;await s.initialize(r,i),a("webgpu",[s,u=>s.alloc(Number(u)),u=>s.free(u),(u,l,p,h=!1)=>{if(h)de("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(p)}`),s.memcpy(Number(u),Number(l));else{de("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(p)}`);let f=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(p));s.upload(Number(l),f)}},async(u,l,p)=>{de("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${p}`),await s.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+p)>>>0))},(u,l,p)=>s.createKernel(u,Number(l),p,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>s.releaseKernel(u),(u,l,p,h)=>{de("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${p}, kernel=${u}, contextDataOffset=${l}`);let f=new Zd(t,s,Number(l));return s.computeKernel(Number(u),f,h)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let n=new Vp(r);a("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,u,l,p,h)=>n.ensureTensor(s,u,l,p,h),(s,u)=>{n.uploadTensor(s,u)},async(s,u)=>n.downloadTensor(s,u),(s,u)=>n.registerMLContext(s,u),!!r.trace])}}}),Yd,bn,wn,_t,Qd,Ta,ai,$n,vn,ka,xn,Sn,Tn,Mf=P(()=>{We(),z0(),C0(),te(),Pt(),rn(),Dp(),Yd=(e,t)=>{_e()._OrtInit(e,t)!==0&&fe("Can't initialize onnxruntime.")},bn=async e=>{Yd(e.wasm.numThreads,Jr(e.logLevel))},wn=async(e,t)=>{_e().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:a}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(Sy(),yr(Of)).init;t==="webgpu"&&await i("webgpu",_e(),e,r),t==="webnn"&&await i("webnn",_e(),e)}},_t=new Map,Qd=e=>{let t=_e(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&fe("Can't get session input/output count.");let n=i===4?"i32":"i64";return[Number(t.getValue(a,n)),Number(t.getValue(a+i,n))]}finally{t.stackRestore(r)}},Ta=(e,t)=>{let r=_e(),i=r.stackSave(),a=0;try{let n=r.PTR_SIZE,s=r.stackAlloc(2*n);r._OrtGetInputOutputMetadata(e,t,s,s+n)!==0&&fe("Can't get session input/output metadata.");let u=Number(r.getValue(s,"*"));a=Number(r.getValue(s+n,"*"));let l=r.HEAP32[a/4];if(l===0)return[u,0];let p=r.HEAPU32[a/4+1],h=[];for(let f=0;f<p;f++){let g=Number(r.getValue(a+8+f*n,"*"));h.push(g!==0?r.UTF8ToString(g):Number(r.getValue(a+8+(f+p)*n,"*")))}return[u,l,h]}finally{r.stackRestore(i),a!==0&&r._OrtFree(a)}},ai=e=>{let t=_e(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},$n=async(e,t)=>{let r,i,a=_e();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=ai(e);let n=0,s=0,u=0,l=[],p=[],h=[];try{if([s,l]=await Np(t),t?.externalData&&a.mountExternalData){let S=[];for(let I of t.externalData){let A=typeof I=="string"?I:I.path;S.push(sn(typeof I=="string"?I:I.data).then(C=>{a.mountExternalData(A,C)}))}await Promise.all(S)}for(let S of t?.executionProviders??[])if((typeof S=="string"?S:S.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof S!="string"){let I=S,A=I?.context,C=I?.gpuDevice,v=I?.deviceType,D=I?.powerPreference;A?a.currentContext=A:C?a.currentContext=await a.webnnCreateMLContext(C):a.currentContext=await a.webnnCreateMLContext({deviceType:v,powerPreference:D})}else a.currentContext=await a.webnnCreateMLContext();break}n=await a._OrtCreateSession(r,i,s),a.webgpuOnCreateSession?.(n),n===0&&fe("Can't create a session."),a.jsepOnCreateSession?.(),a.currentContext&&(a.webnnRegisterMLContext(n,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[f,g]=Qd(n),y=!!t?.enableGraphCapture,_=[],w=[],T=[],x=[],b=[];for(let S=0;S<f;S++){let[I,A,C]=Ta(n,S);I===0&&fe("Can't get an input name."),p.push(I);let v=a.UTF8ToString(I);_.push(v),T.push(A===0?{name:v,isTensor:!1}:{name:v,isTensor:!0,type:dt(A),shape:C})}for(let S=0;S<g;S++){let[I,A,C]=Ta(n,S+f);I===0&&fe("Can't get an output name."),h.push(I);let v=a.UTF8ToString(I);w.push(v),x.push(A===0?{name:v,isTensor:!1}:{name:v,isTensor:!0,type:dt(A),shape:C});{if(y&&t?.preferredOutputLocation===void 0){b.push("gpu-buffer");continue}let D=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[v]??"cpu",q=a.webnnIsGraphOutput;if(D==="cpu"&&q&&q(n,v)){b.push("ml-tensor-cpu-output");continue}if(D!=="cpu"&&D!=="cpu-pinned"&&D!=="gpu-buffer"&&D!=="ml-tensor")throw new Error(`Not supported preferred output location: ${D}.`);if(y&&D!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${D}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);b.push(D)}}let E=null;return b.some(S=>S==="gpu-buffer"||S==="ml-tensor"||S==="ml-tensor-cpu-output")&&(u=a._OrtCreateBinding(n),u===0&&fe("Can't create IO binding."),E={handle:u,outputPreferredLocations:b,outputPreferredLocationsEncoded:b.map(S=>S==="ml-tensor-cpu-output"?"ml-tensor":S).map(S=>Aa(S))}),_t.set(n,[n,p,h,E,y,!1]),[n,_,w,T,x]}catch(f){throw p.forEach(g=>a._OrtFree(g)),h.forEach(g=>a._OrtFree(g)),u!==0&&a._OrtReleaseBinding(u)!==0&&fe("Can't release IO binding."),n!==0&&a._OrtReleaseSession(n)!==0&&fe("Can't release session."),f}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&fe("Can't release session options."),l.forEach(f=>a._free(f)),a.unmountExternalData?.()}},vn=e=>{let t=_e(),r=_t.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,n,s,u]=r;s&&(u&&t._OrtClearBoundOutputs(s.handle)!==0&&fe("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&fe("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),a.forEach(l=>t._OrtFree(l)),n.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(i)!==0&&fe("Can't release session."),_t.delete(e)},ka=async(e,t,r,i,a,n,s=!1)=>{if(!e){t.push(0);return}let u=_e(),l=u.PTR_SIZE,p=e[0],h=e[1],f=e[3],g=f,y,_;if(p==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let x=e[2].gpuBuffer;_=Ot(At(p),h);{let b=u.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=b(i,n,x,_)}}else if(f==="ml-tensor"){let x=e[2].mlTensor;_=Ot(At(p),h);let b=u.webnnRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=b(i,x,At(p),h)}else{let x=e[2];if(Array.isArray(x)){_=l*x.length,y=u._malloc(_),r.push(y);for(let b=0;b<x.length;b++){if(typeof x[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);u.setValue(y+b*l,Xe(x[b],r),"*")}}else{let b=u.webnnIsGraphInput,E=u.webnnIsGraphOutput;if(p!=="string"&&b&&E){let S=u.UTF8ToString(a);if(b(i,S)||E(i,S)){let I=At(p);_=Ot(I,h),g="ml-tensor";let A=u.webnnCreateTemporaryTensor,C=u.webnnUploadTensor;if(!A||!C)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await A(i,I,h);C(v,new Uint8Array(x.buffer,x.byteOffset,x.byteLength)),y=v}else _=x.byteLength,y=u._malloc(_),r.push(y),u.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,_),y)}else _=x.byteLength,y=u._malloc(_),r.push(y),u.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,_),y)}}let w=u.stackSave(),T=u.stackAlloc(4*h.length);try{h.forEach((b,E)=>u.setValue(T+E*l,b,l===4?"i32":"i64"));let x=u._OrtCreateTensor(At(p),y,_,T,h.length,Aa(g));x===0&&fe(`Can't create tensor for input/output. session=${i}, index=${n}.`),t.push(x)}finally{u.stackRestore(w)}},xn=async(e,t,r,i,a,n)=>{let s=_e(),u=s.PTR_SIZE,l=_t.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let p=l[0],h=l[1],f=l[2],g=l[3],y=l[4],_=l[5],w=t.length,T=i.length,x=0,b=[],E=[],S=[],I=[],A=[],C=s.stackSave(),v=s.stackAlloc(w*u),D=s.stackAlloc(w*u),q=s.stackAlloc(T*u),Y=s.stackAlloc(T*u);try{[x,b]=Mp(n),Rt("wasm prepareInputOutputTensor");for(let N=0;N<w;N++)await ka(r[N],E,I,e,h[t[N]],t[N],y);for(let N=0;N<T;N++)await ka(a[N],S,I,e,f[i[N]],w+i[N],y);Bt("wasm prepareInputOutputTensor");for(let N=0;N<w;N++)s.setValue(v+N*u,E[N],"*"),s.setValue(D+N*u,h[t[N]],"*");for(let N=0;N<T;N++)s.setValue(q+N*u,S[N],"*"),s.setValue(Y+N*u,f[i[N]],"*");if(g&&!_){let{handle:N,outputPreferredLocations:G,outputPreferredLocationsEncoded:J}=g;if(h.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${h.length}).`);Rt("wasm bindInputsOutputs");for(let ee=0;ee<w;ee++){let re=t[ee];await s._OrtBindInput(N,h[re],E[ee])!==0&&fe(`Can't bind input[${ee}] for session=${e}.`)}for(let ee=0;ee<T;ee++){let re=i[ee];a[ee]?.[3]?(A.push(S[ee]),s._OrtBindOutput(N,f[re],S[ee],0)!==0&&fe(`Can't bind pre-allocated output[${ee}] for session=${e}.`)):s._OrtBindOutput(N,f[re],0,J[re])!==0&&fe(`Can't bind output[${ee}] to ${G[ee]} for session=${e}.`)}Bt("wasm bindInputsOutputs"),_t.set(e,[p,h,f,g,y,!0])}s.jsepOnRunStart?.(p),s.webnnOnRunStart?.(p);let F;g?F=await s._OrtRunWithBinding(p,g.handle,T,q,x):F=await s._OrtRun(p,D,v,w,Y,T,q,x),F!==0&&fe("failed to call OrtRun().");let K=[],R=[];Rt("wasm ProcessOutputTensor");for(let N=0;N<T;N++){let G=Number(s.getValue(q+N*u,"*"));if(G===S[N]||A.includes(S[N])){K.push(a[N]),G!==S[N]&&s._OrtReleaseTensor(G)!==0&&fe("Can't release tensor.");continue}let J=s.stackSave(),ee=s.stackAlloc(4*u),re=!1,ne,U=0;try{s._OrtGetTensorData(G,ee,ee+u,ee+2*u,ee+3*u)!==0&&fe(`Can't access output tensor data on index ${N}.`);let Q=u===4?"i32":"i64",Z=Number(s.getValue(ee,Q));U=s.getValue(ee+u,"*");let V=s.getValue(ee+u*2,"*"),Ee=Number(s.getValue(ee+u*3,Q)),Ae=[];for(let me=0;me<Ee;me++)Ae.push(Number(s.getValue(V+me*u,Q)));s._OrtFree(V)!==0&&fe("Can't free memory for tensor dims.");let $e=Ae.reduce((me,we)=>me*we,1);ne=dt(Z);let Oe=g?.outputPreferredLocations[i[N]];if(ne==="string"){if(Oe==="gpu-buffer"||Oe==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let me=[];for(let we=0;we<$e;we++){let Be=s.getValue(U+we*u,"*"),wr=s.getValue(U+(we+1)*u,"*"),Qe=we===$e-1?void 0:wr-Be;me.push(s.UTF8ToString(Be,Qe))}K.push([ne,Ae,me,"cpu"])}else if(Oe==="gpu-buffer"&&$e>0){let me=s.jsepGetBuffer;if(!me)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let we=me(U),Be=Ot(Z,$e);if(Be===void 0||!an(ne))throw new Error(`Unsupported data type: ${ne}`);re=!0,K.push([ne,Ae,{gpuBuffer:we,download:s.jsepCreateDownloader(we,Be,ne),dispose:()=>{s._OrtReleaseTensor(G)!==0&&fe("Can't release tensor.")}},"gpu-buffer"])}else if(Oe==="ml-tensor"&&$e>0){let me=s.webnnEnsureTensor,we=s.webnnIsGraphInputOutputTypeSupported;if(!me||!we)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ot(Z,$e)===void 0||!nn(ne))throw new Error(`Unsupported data type: ${ne}`);if(!we(e,ne,!1))throw new Error(`preferredLocation "ml-tensor" for ${ne} output is not supported by current WebNN Context.`);let Be=await me(e,U,Z,Ae,!1);re=!0,K.push([ne,Ae,{mlTensor:Be,download:s.webnnCreateMLTensorDownloader(U,ne),dispose:()=>{s.webnnReleaseTensorId(U),s._OrtReleaseTensor(G)}},"ml-tensor"])}else if(Oe==="ml-tensor-cpu-output"&&$e>0){let me=s.webnnCreateMLTensorDownloader(U,ne)(),we=K.length;re=!0,R.push((async()=>{let Be=[we,await me];return s.webnnReleaseTensorId(U),s._OrtReleaseTensor(G),Be})()),K.push([ne,Ae,[],"cpu"])}else{let me=si(ne),we=new me($e);new Uint8Array(we.buffer,we.byteOffset,we.byteLength).set(s.HEAPU8.subarray(U,U+we.byteLength)),K.push([ne,Ae,we,"cpu"])}}finally{s.stackRestore(J),ne==="string"&&U&&s._free(U),re||s._OrtReleaseTensor(G)}}g&&!y&&(s._OrtClearBoundOutputs(g.handle)!==0&&fe("Can't clear bound outputs."),_t.set(e,[p,h,f,g,y,!1]));for(let[N,G]of await Promise.all(R))K[N][2]=G;return Bt("wasm ProcessOutputTensor"),K}finally{s.webnnOnRunEnd?.(p),s.stackRestore(C),E.forEach(F=>s._OrtReleaseTensor(F)),S.forEach(F=>s._OrtReleaseTensor(F)),I.forEach(F=>s._free(F)),x!==0&&s._OrtReleaseRunOptions(x),b.forEach(F=>s._free(F))}},Sn=e=>{let t=_e(),r=_t.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&fe("Can't get an profile file name."),t._OrtFree(a)},Tn=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),bt,Le,Vt,lr,dr,Gr,Ea,Hr,It,zt,Jd,Nf,Df,Uf,Pf,qf,Lf,Wf,Vf=P(()=>{We(),Mf(),Pt(),en(),bt=()=>!!ye.wasm.proxy&&typeof document<"u",Vt=!1,lr=!1,dr=!1,Hr=new Map,It=(e,t)=>{let r=Hr.get(e);r?r.push(t):Hr.set(e,[t])},zt=()=>{if(Vt||!lr||dr||!Le)throw new Error("worker not ready")},Jd=e=>{switch(e.data.type){case"init-wasm":Vt=!1,e.data.err?(dr=!0,Ea[1](e.data.err)):(lr=!0,Ea[0]()),Gr&&(URL.revokeObjectURL(Gr),Gr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Hr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Nf=async()=>{if(!lr){if(Vt)throw new Error("multiple calls to 'initWasm()' detected.");if(dr)throw new Error("previous call to 'initWasm()' failed.");if(Vt=!0,bt())return new Promise((e,t)=>{Le?.terminate(),Rp().then(([r,i])=>{try{Le=i,Le.onerror=n=>t(n),Le.onmessage=Jd,Ea=[e,t];let a={type:"init-wasm",in:ye};!a.in.wasm.wasmPaths&&(r||Ca)&&(a.in.wasm.wasmPaths={wasm:new URL("/dither-feed/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href}),Le.postMessage(a),Gr=r}catch(a){t(a)}},t)});try{await tn(ye.wasm),await bn(ye),lr=!0}catch(e){throw dr=!0,e}finally{Vt=!1}}},Df=async e=>{if(bt())return zt(),new Promise((t,r)=>{It("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:ye}};Le.postMessage(i)});await wn(ye,e)},Uf=async e=>bt()?(zt(),new Promise((t,r)=>{It("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Le.postMessage(i,[e.buffer])})):ai(e),Pf=async(e,t)=>{if(bt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return zt(),new Promise((r,i)=>{It("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),Le.postMessage(a,n)})}else return $n(e,t)},qf=async e=>{if(bt())return zt(),new Promise((t,r)=>{It("release",[t,r]);let i={type:"release",in:e};Le.postMessage(i)});vn(e)},Lf=async(e,t,r,i,a,n)=>{if(bt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return zt(),new Promise((s,u)=>{It("run",[s,u]);let l=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:n}};Le.postMessage(p,Tn(l))})}else return xn(e,t,r,i,a,n)},Wf=async e=>{if(bt())return zt(),new Promise((t,r)=>{It("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Le.postMessage(i)});Sn(e)}}),Ia,ep,Gf,Ty=P(()=>{We(),Vf(),te(),Ja(),Dp(),Ia=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},ep=e=>{switch(e[3]){case"cpu":return new Ze(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!an(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Ze.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!nn(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return Ze.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},Gf=class{async fetchModelAndCopyToWasmMemory(e){return Uf(await sn(e))}async loadModel(e,t){nt();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Pf(r,t),Ye()}async dispose(){return qf(this.sessionId)}async run(e,t,r){nt();let i=[],a=[];Object.entries(e).forEach(f=>{let g=f[0],y=f[1],_=this.inputNames.indexOf(g);if(_===-1)throw new Error(`invalid input '${g}'`);i.push(y),a.push(_)});let n=[],s=[];Object.entries(t).forEach(f=>{let g=f[0],y=f[1],_=this.outputNames.indexOf(g);if(_===-1)throw new Error(`invalid output '${g}'`);n.push(y),s.push(_)});let u=i.map((f,g)=>Ia(f,()=>`input "${this.inputNames[a[g]]}"`)),l=n.map((f,g)=>f?Ia(f,()=>`output "${this.outputNames[s[g]]}"`):null),p=await Lf(this.sessionId,a,u,s,l,r),h={};for(let f=0;f<p.length;f++)h[this.outputNames[s[f]]]=n[f]??ep(p[f]);return Ye(),h}startProfiling(){}endProfiling(){Wf(this.sessionId)}}}),Hf={};Zt(Hf,{OnnxruntimeWebAssemblyBackend:()=>Ha,initializeFlags:()=>Ga,wasmBackend:()=>Ff});var Ga,Ha,Ff,ky=P(()=>{We(),Vf(),Ty(),Ga=()=>{(typeof ye.wasm.initTimeout!="number"||ye.wasm.initTimeout<0)&&(ye.wasm.initTimeout=0);let e=ye.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ye.wasm.simd=!1),typeof ye.wasm.proxy!="boolean"&&(ye.wasm.proxy=!1),typeof ye.wasm.trace!="boolean"&&(ye.wasm.trace=!1),typeof ye.wasm.numThreads!="number"||!Number.isInteger(ye.wasm.numThreads)||ye.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ye.wasm.numThreads=1;else{let t=typeof navigator>"u"?p0("node:os").cpus().length:navigator.hardwareConcurrency;ye.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Ha=class{async init(e){Ga(),await Nf(),await Df(e)}async createInferenceSessionHandler(e,t){let r=new Gf;return await r.loadModel(e,t),r}},Ff=new Ha});We();We();We();var Ey="1.27.0";{let e=(ky(),yr(Hf)).wasmBackend;Gt("webgpu",e,5),Gt("webnn",e,5),Gt("cpu",e,10),Gt("wasm",e,10)}Object.defineProperty(ye.versions,"web",{value:Ey,enumerable:!0});const Iy="/dither-feed/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",xe=24,Mt=xe*xe,Ft=4,zy=1260,tp=1350,Cy=.065,Ay=64,rp=["vertical","horizontal"],Oy=3,Ry=220,By=window.matchMedia("(max-width: 640px)").matches?2:3,it=document.querySelector("#terminal-scroll"),ni=document.querySelector("#feed"),My=document.querySelector("#feed-sentinel"),Xr=document.querySelector("#boot-screen"),Fa=document.querySelector("#boot-status"),ip=document.querySelector("#boot-progress-bar"),kn=window.matchMedia("(prefers-reduced-motion: reduce)");let En,Ue,jf,jt=!1,br=!1,oi=!1,at=0,gr=null,za=[];const ja=new Set;let Kf,Xf,lt=7;const Fr=["mounting local model","reading latent bank","initializing wasm inference","warming pixel buffer"];function Zr(e,t=lt){Fa&&(Fa.textContent=e),ip&&(lt=Math.max(0,Math.min(100,t)),ip.style.transform=`scaleX(${lt/100})`)}function Ny(){if(!Xr)return;let e=0;Zr(Fr[e],lt),Kf=window.setInterval(()=>{e=(e+1)%Fr.length,Zr(Fr[e],lt)},520),Xf=window.setInterval(()=>{lt=Math.min(91,lt+(lt<52?3.2:.8)),Zr(Fa?.textContent||Fr[e],lt)},140)}function Zf(e=!1){Xr&&(window.clearInterval(Kf),window.clearInterval(Xf),Zr(e?"model unavailable":"feed ready",100),document.body.classList.remove("is-booting"),Xr.dataset.state="leaving",window.setTimeout(()=>Xr.remove(),kn.matches?0:420))}Ny();const Dy=`
  attribute vec2 position;
  varying vec2 textureUv;

  void main() {
    textureUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Uy=`
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
`,Yf=[[0,48,12,60,3,51,15,63],[32,16,44,28,35,19,47,31],[8,56,4,52,11,59,7,55],[40,24,36,20,43,27,39,23],[2,50,14,62,1,49,13,61],[34,18,46,30,33,17,45,29],[10,58,6,54,9,57,5,53],[42,26,38,22,41,25,37,21]];function ap(e){const t=e%xe,r=Math.floor(e/xe);return t+r+Yf[r%8][t%8]/64}function np(e){return Array.from({length:Mt},(t,r)=>{const i=r%xe,a=Math.floor(r/xe),n=e==="vertical"?a*xe+(xe-1-i):(xe-1-a)*xe+i;return r>n?null:{position:r,mirror:n,score:Math.min(ap(r),ap(n))}}).filter(Boolean).sort((t,r)=>t.score-r.score||t.position-r.position)}const Qf={vertical:np("vertical"),horizontal:np("horizontal")};function Py(e){const t=Array.from({length:Mt},(i,a)=>a);let r=e+1>>>0;for(let i=t.length-1;i>0;i-=1){r=r*1664525+1013904223>>>0;const a=r%(i+1);[t[i],t[a]]=[t[a],t[i]]}return t}function sp(e,t){if(!e.ok)throw new Error("Unable to load "+t+" ("+e.status+")");return e}function qy(){let e=0,t=0;for(;e===0;)e=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)}function Ly(e){za.push(e),ja.add(e),za.length>Ay&&ja.delete(za.shift())}function Wy(){let e=Math.floor(Math.random()*Ue.perClass),t=0;for(;ja.has(e)&&t<12;)e=Math.floor(Math.random()*Ue.perClass),t+=1;return Ly(e),e}function Ka(e){const t=document.createElement("canvas");return t.width=xe,t.height=xe,e&&(t.className=e),t.setAttribute("aria-hidden","true"),t}function Vy(e,t){const r=e.getContext("2d"),i=r.createImageData(xe,xe);for(let a=0;a<Mt;a+=1){const n=a%xe,s=Math.floor(a/xe),l=14+(n*17+s*31+t*13+(n+s)%5*7)%20,p=a*4;i.data[p]=l,i.data[p+1]=l,i.data[p+2]=l,i.data[p+3]=255}r.putImageData(i,0,0)}function Gy(e,t){const r=document.createElement("div");r.className="tile-readout",r.setAttribute("aria-hidden","true"),[["ID",String(e).padStart(4,"0")],["PX","24×24"],["SYM",t==="vertical"?"V":"H"],["PAL","64"],["BYR","8×8"]].forEach(([n,s])=>{const u=document.createElement("span");u.className="tile-readout-item",u.textContent=n+" "+s,r.append(u)});const a=document.createElement("span");return a.className="tile-readout-item tile-readout-code",a.textContent="LAT ---",r.append(a),{readout:r,code:a}}function Hy(e){const t=document.createElement("div");t.className="pattern-tile",t.setAttribute("role","img"),t.setAttribute("tabindex","0"),t.setAttribute("aria-label","Generating pixel pattern"),t.dataset.state="generating";const r=rp[e%rp.length];t.dataset.symmetry=r;const i=Ka("skeleton-canvas"),a=Ka("output-canvas"),n=Gy(e,r);return Vy(i,e),t.append(i,a,n.readout),{element:t,skeleton:i,output:a,context:a.getContext("2d"),readout:n.readout,readoutCode:n.code,seed:e,symmetry:r,revealOrder:Py(e),image:null,revealed:0}}function Fy(){const e=[],t=document.createDocumentFragment(),r=ni.children.length;for(let i=0;i<Ft;i+=1){const a=Hy(r+i);e.push(a),t.append(a.element)}return ni.append(t),e}function jy(e){const t=e%xe,r=Math.floor(e/xe);return t===0||t===xe-1||r===0||r===xe-1}const op=[[[0,0,85],[0,0,170]],[[85,0,0],[170,0,0]],[[0,85,0],[0,170,0]],[[85,0,85],[170,0,170]],[[85,85,0],[170,170,0]],[[0,85,85],[0,170,170]],[[85,85,85],[170,170,170]]];function up(e){return Ue.palette.findIndex(t=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2])}function Ky(e,t,r){const i=e.slice(),a=r%4===0,n=new Map;e.forEach(y=>{y!==0&&n.set(y,(n.get(y)||0)+1)});let s=1,u=0;n.forEach((y,_)=>{y>u&&(s=_,u=y)});const l=Ue.palette[s]||[85,85,85],p=l.indexOf(Math.max(...l)),h=op[(p+r)%op.length],f=Math.max(1,up(h[0])),g=Math.max(1,up(h[1]));return Qf[t].forEach(({position:y,mirror:_})=>{if(e[y]!==0||a&&jy(y))return;const w=y%xe,T=Math.floor(y/xe),b=Yf[(T+r)%8][(w+r*3)%8]<8?g:f;i[y]=b,i[_]=i[y]}),i}function Xy(e,t,r,i){const a=new Uint8Array(Mt),n=t*Ue.palette.length*Mt;return Qf[r].forEach(({position:s,mirror:u})=>{let l=0,p=-1/0;for(let h=0;h<Ue.palette.length;h+=1){const f=e[n+h*Mt+s];f>p&&(p=f,l=h)}a[s]=l,a[u]=l}),Ky(a,r,i)}function Zy(e,t,r){const i=t*4;e.data[i]=r[0],e.data[i+1]=r[1],e.data[i+2]=r[2],e.data[i+3]=255}function Yy(e,t,r,i){const a=e.revealed,n=Math.min(i,Mt);for(let s=a;s<n;s+=1){const u=e.revealOrder[s],l=Ue.palette[t[u]];Zy(r,u,l)}n!==a&&(e.context.putImageData(r,0,0),e.revealed=n)}function lp(e,t,r){const i=e.createShader(t);if(e.shaderSource(i,r),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){const a=e.getShaderInfoLog(i)||"Unknown shader compile error";throw e.deleteShader(i),new Error(a)}return i}function Qy(e,t){if(kn.matches)return;const r=Ka("shader-effect"),i=e.getBoundingClientRect(),a=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(96,Math.round(i.width*a)),r.height=Math.max(96,Math.round(i.height*a)),e.append(r);const n=r.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1});if(!n){r.remove();return}let s,u,l,p,h,f=!1,g=0;const y=()=>{if(f)return;f=!0,window.cancelAnimationFrame(g),p&&n.deleteBuffer(p),h&&n.deleteTexture(h),l&&n.deleteProgram(l),s&&n.deleteShader(s),u&&n.deleteShader(u),r.remove(),delete e.dataset.effect;const b=n.getExtension("WEBGL_lose_context");b&&b.loseContext()};try{if(s=lp(n,n.VERTEX_SHADER,Dy),u=lp(n,n.FRAGMENT_SHADER,Uy),l=n.createProgram(),n.attachShader(l,s),n.attachShader(l,u),n.linkProgram(l),!n.getProgramParameter(l,n.LINK_STATUS))throw new Error(n.getProgramInfoLog(l)||"Unknown shader link error");p=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,p),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),n.STATIC_DRAW),n.viewport(0,0,r.width,r.height),n.useProgram(l);const b=n.getAttribLocation(l,"position");n.enableVertexAttribArray(b),n.vertexAttribPointer(b,2,n.FLOAT,!1,0,0),n.uniform2f(n.getUniformLocation(l,"resolution"),r.width,r.height),h=n.createTexture(),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,h),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),n.uniform1i(n.getUniformLocation(l,"pattern"),0),n.clearColor(0,0,0,0)}catch(b){console.warn("dither-feed: shader unavailable",b),y();return}const _=n.getUniformLocation(l,"progress");e.dataset.effect="active";const w=b=>{if(!f)try{n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,h),n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,t),n.clear(n.COLOR_BUFFER_BIT),n.uniform1f(_,b),n.drawArrays(n.TRIANGLE_STRIP,0,4)}catch(E){console.warn("dither-feed: shader frame skipped",E),y()}},T=performance.now(),x=b=>{f||(w(Math.min(1,(b-T)/tp)),!f&&(b-T<tp?g=window.requestAnimationFrame(x):y()))};return g=window.requestAnimationFrame(x),{dispose:y}}function Jy(e,t){const r=e.map(i=>(i.image=i.context.createImageData(xe,xe),i.image));return new Promise(i=>{const a=performance.now(),n=()=>{e.forEach((u,l)=>{u.skeleton.remove(),u.element.setAttribute("aria-label","Generated pixel pattern "+(l+1)),u.element.dataset.state="ready",u.image=null,Qy(u.element,u.output)}),i()},s=()=>{const u=kn.matches?1:Math.min(1,(performance.now()-a)/zy);if(e.forEach((l,p)=>{const h=Math.floor(u*l.revealOrder.length);Yy(l,t[p],r[p],h)}),u>=1)return n();window.setTimeout(s,16)};s()})}async function e_(e){const t=new Float32Array(Ft*Ue.latent);for(let a=0;a<Ft;a+=1){const n=Wy();e[a].readoutCode.textContent="LAT "+n.toString(16).toUpperCase().padStart(3,"0");const s=n*Ue.latent,u=a*Ue.latent;for(let l=0;l<Ue.latent;l+=1)t[u+l]=jf[s+l]+qy()*Cy}const r=new Ze("float32",t,[Ft,Ue.latent]);let i;try{return i=await En.run({latent:r}),Array.from({length:Ft},(a,n)=>Xy(i.logits.data,n,e[n].symmetry,e[n].seed))}finally{r.dispose&&r.dispose(),i&&i.logits&&i.logits.dispose&&i.logits.dispose()}}function Jf(e){br=!0,console.error(e),ni.replaceChildren();const t=document.createElement("div");t.className="error-line",t.textContent=`dither-feed: model unavailable
`+(e.message||e),ni.append(t),Zf(!0)}async function Xa(){if(jt||br||!En)return;jt=!0;const e=Fy();try{const t=await e_(e);await Jy(e,t)}catch(t){e.forEach(r=>r.element.remove()),Jf(t)}finally{jt=!1}}function ui(){return it.scrollTop+it.clientHeight>=it.scrollHeight-Oy}function In(){!oi||jt||br||!ui()||at<Ry||(at=0,Xa())}async function t_(){ye.wasm.numThreads=navigator.crossOriginIsolated?Math.min(4,navigator.hardwareConcurrency||1):1,ye.wasm.wasmPaths={wasm:Iy};const e="/dither-feed/model/",[t,r,i]=await Promise.all([fetch(e+"model.json").then(a=>sp(a,"model.json")).then(a=>a.json()),fetch(e+"latent-bank.bin").then(a=>sp(a,"latent-bank.bin")).then(async a=>new Float32Array(await a.arrayBuffer())),Qa.create(e+"garden-cvae.onnx",{executionProviders:["wasm"],graphOptimizationLevel:"all"})]);if(t.batch!==Ft||t.size!==xe)throw new Error("Model shape does not match the four-tile feed");if(r.length<t.perClass*t.latent)throw new Error("Latent bank is incomplete");Ue=t,jf=r,En=i}const r_=new IntersectionObserver(e=>{e.some(t=>t.isIntersecting)&&In()},{root:it,rootMargin:"0px 0px 40px 0px"});it.addEventListener("scroll",()=>{it.scrollTop>0&&(oi=!0),ui()||(at=0)},{passive:!0});it.addEventListener("wheel",e=>{if(e.deltaY<=0){at=0;return}if(oi=!0,jt||!ui()){at=0;return}at+=Math.min(e.deltaY,80),In()},{passive:!0});it.addEventListener("touchstart",e=>{gr=e.touches[0]?e.touches[0].clientY:null,at=0},{passive:!0});it.addEventListener("touchmove",e=>{if(gr===null||!e.touches[0])return;const t=e.touches[0].clientY,r=gr-t;if(gr=t,r<=0||jt||!ui()){at=0;return}oi=!0,at+=Math.min(r,80),In()},{passive:!0});it.addEventListener("touchend",()=>{gr=null,at=0},{passive:!0});r_.observe(My);t_().then(async()=>{if(await Xa(),!br){Zf();for(let e=1;e<By&&!br;e+=1)await Xa()}}).catch(Jf);
