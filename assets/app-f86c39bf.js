import{d as defineAsyncComponent,r as ref,a as readonly,b as reactive,c as defineComponent,i as isString$1,e as isArray,f as dedupeHead,g as resolveLocalePath,o as onMounted,h as computed,j as h$4,k as isLinkHttp,l as removeLeadingSlash,m as inject,u as unref,w as watch,n as getCurrentInstance,p as nextTick,q as getCurrentScope,s as onScopeDispose,t as shallowRef,v as watchEffect,x as camelize,y as capitalize,z as isFunction$1,T as Transition,A as useRouter,B as onBeforeUnmount,C as useRoute,D as resolveComponent,E as toRef,R as RouterLink,F as isLinkMailto,G as isLinkTel,H as isLinkExternal,I as removeEndingSlash,J as ensureEndingSlash,K as isPlainObject,L as provide,M as TransitionGroup,N as useLink,O as createSSRApp,P as RouterView,Q as createRouter,S as START_LOCATION_NORMALIZED,U as createWebHistory}from"./framework-1e9ccf99.js";const scriptRel="modulepreload",assetsURL=function(u){return"/"+u},seen={},__vitePreload=function(m,b,T){if(!b||b.length===0)return m();const $=document.getElementsByTagName("link");return Promise.all(b.map(j=>{if(j=assetsURL(j),j in seen)return;seen[j]=!0;const Z=j.endsWith(".css"),W=Z?'[rel="stylesheet"]':"";if(!!T)for(let nn=$.length-1;nn>=0;nn--){const tn=$[nn];if(tn.href===j&&(!Z||tn.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${j}"]${W}`))return;const Y=document.createElement("link");if(Y.rel=Z?"stylesheet":scriptRel,Z||(Y.as="script",Y.crossOrigin=""),Y.href=j,document.head.appendChild(Y),Z)return new Promise((nn,tn)=>{Y.addEventListener("load",nn),Y.addEventListener("error",()=>tn(new Error(`Unable to preload CSS for ${j}`)))})})).then(()=>m())},pagesData$1={"v-8daa1a0e":()=>__vitePreload(()=>import("./index.html-244388e1.js"),[]).then(({data:u})=>u),"v-2c765786":()=>__vitePreload(()=>import("./arithmetic-1.html-16b2ce6a.js"),[]).then(({data:u})=>u),"v-2e2b3025":()=>__vitePreload(()=>import("./arithmetic-2.html-081d11d3.js"),[]).then(({data:u})=>u),"v-465ffea1":()=>__vitePreload(()=>import("./array-1.html-1f610038.js"),[]).then(({data:u})=>u),"v-4814d740":()=>__vitePreload(()=>import("./array-2.html-14e2483f.js"),[]).then(({data:u})=>u),"v-7f4b585e":()=>__vitePreload(()=>import("./bit.html-f80a93f8.js"),[]).then(({data:u})=>u),"v-d87569c6":()=>__vitePreload(()=>import("./choose.html-ed1c7ba1.js"),[]).then(({data:u})=>u),"v-45ff4572":()=>__vitePreload(()=>import("./design-1.html-aedf2243.js"),[]).then(({data:u})=>u),"v-47b41e11":()=>__vitePreload(()=>import("./design-2.html-73a802a4.js"),[]).then(({data:u})=>u),"v-4968f6b0":()=>__vitePreload(()=>import("./design-3.html-68ef394c.js"),[]).then(({data:u})=>u),"v-4b1dcf4f":()=>__vitePreload(()=>import("./design-4.html-22619646.js"),[]).then(({data:u})=>u),"v-a918da98":()=>__vitePreload(()=>import("./file-1.html-a5537412.js"),[]).then(({data:u})=>u),"v-a5af295a":()=>__vitePreload(()=>import("./file-2.html-6e25583e.js"),[]).then(({data:u})=>u),"v-280a0150":()=>__vitePreload(()=>import("./function-1.html-fec7e49f.js"),[]).then(({data:u})=>u),"v-24a05012":()=>__vitePreload(()=>import("./function-2.html-f82bee7d.js"),[]).then(({data:u})=>u),"v-600747e8":()=>__vitePreload(()=>import("./order-1.html-33418951.js"),[]).then(({data:u})=>u),"v-5c9d96aa":()=>__vitePreload(()=>import("./order-2.html-fcec4bf7.js"),[]).then(({data:u})=>u),"v-5c4704fd":()=>__vitePreload(()=>import("./pointer-1.html-bde71557.js"),[]).then(({data:u})=>u),"v-5dfbdd9c":()=>__vitePreload(()=>import("./pointer-2.html-34eac1d3.js"),[]).then(({data:u})=>u),"v-3fb6678b":()=>__vitePreload(()=>import("./recycle.html-6104f33a.js"),[]).then(({data:u})=>u),"v-86449acc":()=>__vitePreload(()=>import("./type.html-dc6ff288.js"),[]).then(({data:u})=>u),"v-595a981a":()=>__vitePreload(()=>import("./animation.html-95c36a61.js"),[]).then(({data:u})=>u),"v-4d741660":()=>__vitePreload(()=>import("./flat-trans.html-1dcc9463.js"),[]).then(({data:u})=>u),"v-56af9d1b":()=>__vitePreload(()=>import("./flex.html-f40fac00.js"),[]).then(({data:u})=>u),"v-419d02c2":()=>__vitePreload(()=>import("./float.html-43051b82.js"),[]).then(({data:u})=>u),"v-6dac6e9c":()=>__vitePreload(()=>import("./intro.html-2d53bd3b.js"),[]).then(({data:u})=>u),"v-4c225352":()=>__vitePreload(()=>import("./mobile.html-80844b11.js"),[]).then(({data:u})=>u),"v-72386375":()=>__vitePreload(()=>import("./selector.html-d4305ad7.js"),[]).then(({data:u})=>u),"v-a3515546":()=>__vitePreload(()=>import("./space-trans.html-48c8c663.js"),[]).then(({data:u})=>u),"v-7c0d6123":()=>__vitePreload(()=>import("./tip.html-1f5d6066.js"),[]).then(({data:u})=>u),"v-92504580":()=>__vitePreload(()=>import("./index.html-b33bf4e9.js"),[]).then(({data:u})=>u),"v-14b2ee8b":()=>__vitePreload(()=>import("./index.html-4871d5fb.js"),[]).then(({data:u})=>u),"v-6e0450c0":()=>__vitePreload(()=>import("./dom.html-31b7cdd3.js"),[]).then(({data:u})=>u),"v-405dc04a":()=>__vitePreload(()=>import("./grammar.html-b1635980.js"),[]).then(({data:u})=>u),"v-e02a086e":()=>__vitePreload(()=>import("./index.html-92162979.js"),[]).then(({data:u})=>u),"v-6af6e8ce":()=>__vitePreload(()=>import("./Github-Flavored.html-85c0db98.js"),[]).then(({data:u})=>u),"v-2a9853ac":()=>__vitePreload(()=>import("./Markdown-emoji.html-5b0df950.js"),[]).then(({data:u})=>u),"v-30670774":()=>__vitePreload(()=>import("./intro.html-ca883434.js"),[]).then(({data:u})=>u),"v-5d14f3ef":()=>__vitePreload(()=>import("./ssp-shortcut.html-9bfedce6.js"),[]).then(({data:u})=>u),"v-4a459580":()=>__vitePreload(()=>import("./typora-shortcut.html-b92d9516.js"),[]).then(({data:u})=>u),"v-1c2dd3d6":()=>__vitePreload(()=>import("./index.html-04db95d3.js"),[]).then(({data:u})=>u),"v-1559ca3e":()=>__vitePreload(()=>import("./index.html-b0fb14fc.js"),[]).then(({data:u})=>u),"v-1fe4fcb6":()=>__vitePreload(()=>import("./ffmpeg.html-789d8486.js"),[]).then(({data:u})=>u),"v-49951ef6":()=>__vitePreload(()=>import("./git.html-297960e0.js"),[]).then(({data:u})=>u),"v-77ba32fe":()=>__vitePreload(()=>import("./vuepress.html-7650664f.js"),[]).then(({data:u})=>u),"v-2d0ac073":()=>__vitePreload(()=>import("./index.html-b1066fb3.js"),[]).then(({data:u})=>u),"v-451df50f":()=>__vitePreload(()=>import("./index.html-96fff9c0.js"),[]).then(({data:u})=>u),"v-23a4ecb7":()=>__vitePreload(()=>import("./beautiful.html-397aa2f6.js"),[]).then(({data:u})=>u),"v-571d3aad":()=>__vitePreload(()=>import("./install.html-ca3837b4.js"),[]).then(({data:u})=>u),"v-13b93c5c":()=>__vitePreload(()=>import("./lamp.html-75faad5a.js"),[]).then(({data:u})=>u),"v-3a6f6f77":()=>__vitePreload(()=>import("./skill.html-cc40c439.js"),[]).then(({data:u})=>u),"v-6f376f9b":()=>__vitePreload(()=>import("./system.html-c89bc645.js"),[]).then(({data:u})=>u),"v-6db12241":()=>__vitePreload(()=>import("./1.1.html-4c8fe898.js"),[]).then(({data:u})=>u),"v-6f65fae0":()=>__vitePreload(()=>import("./1.2.html-0b654a6a.js"),[]).then(({data:u})=>u),"v-711ad37f":()=>__vitePreload(()=>import("./1.3.html-77ec3e31.js"),[]).then(({data:u})=>u),"v-72cfac1e":()=>__vitePreload(()=>import("./1.4.html-f348dc44.js"),[]).then(({data:u})=>u),"v-7b6aaadb":()=>__vitePreload(()=>import("./10.1.html-8c6f0fbf.js"),[]).then(({data:u})=>u),"v-7d1f837a":()=>__vitePreload(()=>import("./10.2.html-72fe5258.js"),[]).then(({data:u})=>u),"v-3968508c":()=>__vitePreload(()=>import("./11.1.html-d6572e45.js"),[]).then(({data:u})=>u),"v-35fe9f4e":()=>__vitePreload(()=>import("./11.2.html-1e6c8b60.js"),[]).then(({data:u})=>u),"v-3294ee10":()=>__vitePreload(()=>import("./11.3.html-bce11e19.js"),[]).then(({data:u})=>u),"v-4b2d0499":()=>__vitePreload(()=>import("./12.1.html-437b16fb.js"),[]).then(({data:u})=>u),"v-4ce1dd38":()=>__vitePreload(()=>import("./12.2.html-0137593f.js"),[]).then(({data:u})=>u),"v-4e96b5d7":()=>__vitePreload(()=>import("./12.3.html-a578403c.js"),[]).then(({data:u})=>u),"v-504b8e76":()=>__vitePreload(()=>import("./12.4.html-2b6d2616.js"),[]).then(({data:u})=>u),"v-99e39d10":()=>__vitePreload(()=>import("./13.1.html-2c90bfa1.js"),[]).then(({data:u})=>u),"v-9679ebd2":()=>__vitePreload(()=>import("./13.2.html-007108db.js"),[]).then(({data:u})=>u),"v-93103a94":()=>__vitePreload(()=>import("./13.3.html-9b643224.js"),[]).then(({data:u})=>u),"v-8fa68956":()=>__vitePreload(()=>import("./13.4.html-6125d35e.js"),[]).then(({data:u})=>u),"v-54db61c0":()=>__vitePreload(()=>import("./2.1.html-04e49ebe.js"),[]).then(({data:u})=>u),"v-5171b082":()=>__vitePreload(()=>import("./2.2.html-0435dd7c.js"),[]).then(({data:u})=>u),"v-4e07ff44":()=>__vitePreload(()=>import("./2.3.html-b73c5485.js"),[]).then(({data:u})=>u),"v-4a9e4e06":()=>__vitePreload(()=>import("./2.4.html-0ffbfe1f.js"),[]).then(({data:u})=>u),"v-3d737bff":()=>__vitePreload(()=>import("./3.1.html-b8da56ff.js"),[]).then(({data:u})=>u),"v-3f28549e":()=>__vitePreload(()=>import("./3.2.html-8ece0825.js"),[]).then(({data:u})=>u),"v-b556ae44":()=>__vitePreload(()=>import("./4.1.html-c2674098.js"),[]).then(({data:u})=>u),"v-b1ecfd06":()=>__vitePreload(()=>import("./4.2.html-8f0be042.js"),[]).then(({data:u})=>u),"v-ae834bc8":()=>__vitePreload(()=>import("./4.3.html-860ede9f.js"),[]).then(({data:u})=>u),"v-0d35d5bd":()=>__vitePreload(()=>import("./5.1.html-4107353d.js"),[]).then(({data:u})=>u),"v-0eeaae5c":()=>__vitePreload(()=>import("./5.2.html-a1d4464a.js"),[]).then(({data:u})=>u),"v-7517029c":()=>__vitePreload(()=>import("./6.1.html-c12b3a47.js"),[]).then(({data:u})=>u),"v-76cbdb3b":()=>__vitePreload(()=>import("./6.2.html-780676e8.js"),[]).then(({data:u})=>u),"v-7880b3da":()=>__vitePreload(()=>import("./6.3.html-8a7da532.js"),[]).then(({data:u})=>u),"v-7a358c79":()=>__vitePreload(()=>import("./6.4.html-d6d4cb37.js"),[]).then(({data:u})=>u),"v-7bea6518":()=>__vitePreload(()=>import("./6.5.html-63bfad89.js"),[]).then(({data:u})=>u),"v-460fa10a":()=>__vitePreload(()=>import("./7.1.html-bcb811b1.js"),[]).then(({data:u})=>u),"v-42a5efcc":()=>__vitePreload(()=>import("./7.2.html-3fd3d827.js"),[]).then(({data:u})=>u),"v-3f3c3e8e":()=>__vitePreload(()=>import("./7.3.html-3cb1e4e4.js"),[]).then(({data:u})=>u),"v-44d95c5a":()=>__vitePreload(()=>import("./8.1.html-3d3e17a1.js"),[]).then(({data:u})=>u),"v-468e34f9":()=>__vitePreload(()=>import("./8.2.html-95aa7a3f.js"),[]).then(({data:u})=>u),"v-48430d98":()=>__vitePreload(()=>import("./8.3.html-e1461258.js"),[]).then(({data:u})=>u),"v-a68aed8e":()=>__vitePreload(()=>import("./9.1.html-511e1ce6.js"),[]).then(({data:u})=>u),"v-a3213c50":()=>__vitePreload(()=>import("./9.2.html-f21a7ca4.js"),[]).then(({data:u})=>u),"v-9fb78b12":()=>__vitePreload(()=>import("./9.3.html-e9689eb1.js"),[]).then(({data:u})=>u),"v-9c4dd9d4":()=>__vitePreload(()=>import("./9.4.html-4e165660.js"),[]).then(({data:u})=>u),"v-e76c14ee":()=>__vitePreload(()=>import("./intro.html-8f1d0581.js"),[]).then(({data:u})=>u),"v-9e737f80":()=>__vitePreload(()=>import("./1.html-25d52fbd.js"),[]).then(({data:u})=>u),"v-6834cc22":()=>__vitePreload(()=>import("./10.html-0e2f1e4d.js"),[]).then(({data:u})=>u),"v-69e9a4c1":()=>__vitePreload(()=>import("./11.html-f061efb5.js"),[]).then(({data:u})=>u),"v-9b09ce42":()=>__vitePreload(()=>import("./2.html-ca8863a2.js"),[]).then(({data:u})=>u),"v-97a01d04":()=>__vitePreload(()=>import("./3.html-0dfacf18.js"),[]).then(({data:u})=>u),"v-94366bc6":()=>__vitePreload(()=>import("./4.html-1986faa4.js"),[]).then(({data:u})=>u),"v-90ccba88":()=>__vitePreload(()=>import("./5.html-b4c853c2.js"),[]).then(({data:u})=>u),"v-8d63094a":()=>__vitePreload(()=>import("./6.html-0d5f0ac3.js"),[]).then(({data:u})=>u),"v-89f9580c":()=>__vitePreload(()=>import("./7.html-0baebd55.js"),[]).then(({data:u})=>u),"v-868fa6ce":()=>__vitePreload(()=>import("./8.html-d3eaed17.js"),[]).then(({data:u})=>u),"v-8325f590":()=>__vitePreload(()=>import("./9.html-505816b7.js"),[]).then(({data:u})=>u),"v-5d4b4ae5":()=>__vitePreload(()=>import("./intro.html-d5cdc0d7.js"),[]).then(({data:u})=>u),"v-76be69e7":()=>__vitePreload(()=>import("./1.1.html-337ea556.js"),[]).then(({data:u})=>u),"v-78734286":()=>__vitePreload(()=>import("./1.2.html-aca9b917.js"),[]).then(({data:u})=>u),"v-d7f35016":()=>__vitePreload(()=>import("./10.1.html-e3a81c78.js"),[]).then(({data:u})=>u),"v-d4899ed8":()=>__vitePreload(()=>import("./10.2.html-08e3ad01.js"),[]).then(({data:u})=>u),"v-d11fed9a":()=>__vitePreload(()=>import("./10.3.html-f7531a56.js"),[]).then(({data:u})=>u),"v-0830f658":()=>__vitePreload(()=>import("./11.1.html-b12f3c36.js"),[]).then(({data:u})=>u),"v-42c0d274":()=>__vitePreload(()=>import("./2.1.html-3705b53a.js"),[]).then(({data:u})=>u),"v-3f572136":()=>__vitePreload(()=>import("./2.2.html-9e52c9e2.js"),[]).then(({data:u})=>u),"v-3bed6ff8":()=>__vitePreload(()=>import("./2.3.html-66622541.js"),[]).then(({data:u})=>u),"v-4680c3a5":()=>__vitePreload(()=>import("./3.1.html-bcd3a089.js"),[]).then(({data:u})=>u),"v-48359c44":()=>__vitePreload(()=>import("./3.2.html-84ea857b.js"),[]).then(({data:u})=>u),"v-49ea74e3":()=>__vitePreload(()=>import("./3.3.html-a7e23502.js"),[]).then(({data:u})=>u),"v-4b9f4d82":()=>__vitePreload(()=>import("./3.4.html-5877cf32.js"),[]).then(({data:u})=>u),"v-a33c1ef8":()=>__vitePreload(()=>import("./4.1.html-0b0710a6.js"),[]).then(({data:u})=>u),"v-9fd26dba":()=>__vitePreload(()=>import("./4.2.html-90e47a80.js"),[]).then(({data:u})=>u),"v-16431d63":()=>__vitePreload(()=>import("./5.1.html-fa37782c.js"),[]).then(({data:u})=>u),"v-17f7f602":()=>__vitePreload(()=>import("./5.2.html-23682a2b.js"),[]).then(({data:u})=>u),"v-19accea1":()=>__vitePreload(()=>import("./5.3.html-c1aeb3d4.js"),[]).then(({data:u})=>u),"v-7e244a42":()=>__vitePreload(()=>import("./6.1.html-d5284d8d.js"),[]).then(({data:u})=>u),"v-7fd922e1":()=>__vitePreload(()=>import("./6.2.html-37be7e6f.js"),[]).then(({data:u})=>u),"v-33f511be":()=>__vitePreload(()=>import("./7.1.html-3016e66a.js"),[]).then(({data:u})=>u),"v-308b6080":()=>__vitePreload(()=>import("./7.2.html-cb4561ec.js"),[]).then(({data:u})=>u),"v-2d21af42":()=>__vitePreload(()=>import("./7.3.html-28d43bda.js"),[]).then(({data:u})=>u),"v-4de6a400":()=>__vitePreload(()=>import("./8.1.html-d660c9f8.js"),[]).then(({data:u})=>u),"v-4f9b7c9f":()=>__vitePreload(()=>import("./8.2.html-ea920d4d.js"),[]).then(({data:u})=>u),"v-5150553e":()=>__vitePreload(()=>import("./8.3.html-3e671649.js"),[]).then(({data:u})=>u),"v-94705e42":()=>__vitePreload(()=>import("./9.1.html-7894b310.js"),[]).then(({data:u})=>u),"v-9106ad04":()=>__vitePreload(()=>import("./9.2.html-1cb183ba.js"),[]).then(({data:u})=>u),"v-8d9cfbc6":()=>__vitePreload(()=>import("./9.3.html-137dcce7.js"),[]).then(({data:u})=>u),"v-8a334a88":()=>__vitePreload(()=>import("./9.4.html-097471c3.js"),[]).then(({data:u})=>u),"v-f1b828a2":()=>__vitePreload(()=>import("./intro.html-a1a97103.js"),[]).then(({data:u})=>u),"v-71b4ee23":()=>__vitePreload(()=>import("./1.html-83fc265d.js"),[]).then(({data:u})=>u),"v-7369c6c2":()=>__vitePreload(()=>import("./2.html-58c97a8a.js"),[]).then(({data:u})=>u),"v-751e9f61":()=>__vitePreload(()=>import("./3.html-a27164ac.js"),[]).then(({data:u})=>u),"v-76d37800":()=>__vitePreload(()=>import("./4.html-f41c3081.js"),[]).then(({data:u})=>u),"v-7888509f":()=>__vitePreload(()=>import("./5.html-0e23de60.js"),[]).then(({data:u})=>u),"v-7a3d293e":()=>__vitePreload(()=>import("./6.html-d5a94da4.js"),[]).then(({data:u})=>u),"v-7bf201dd":()=>__vitePreload(()=>import("./7.html-bf0c5bfb.js"),[]).then(({data:u})=>u),"v-7da6da7c":()=>__vitePreload(()=>import("./8.html-ff23477e.js"),[]).then(({data:u})=>u),"v-7f5bb31b":()=>__vitePreload(()=>import("./9.html-aad8241a.js"),[]).then(({data:u})=>u),"v-eccb6170":()=>__vitePreload(()=>import("./intro.html-d7a442d6.js"),[]).then(({data:u})=>u),"v-4cb3207b":()=>__vitePreload(()=>import("./1.html-0f91d875.js"),[]).then(({data:u})=>u),"v-49e3f347":()=>__vitePreload(()=>import("./10.html-90adee41.js"),[]).then(({data:u})=>u),"v-4e67f91a":()=>__vitePreload(()=>import("./2.html-56d9499a.js"),[]).then(({data:u})=>u),"v-501cd1b9":()=>__vitePreload(()=>import("./3.html-2cafc2e4.js"),[]).then(({data:u})=>u),"v-51d1aa58":()=>__vitePreload(()=>import("./4.html-27728ab8.js"),[]).then(({data:u})=>u),"v-538682f7":()=>__vitePreload(()=>import("./5.html-331667af.js"),[]).then(({data:u})=>u),"v-553b5b96":()=>__vitePreload(()=>import("./6.html-38351c9e.js"),[]).then(({data:u})=>u),"v-56f03435":()=>__vitePreload(()=>import("./7.html-d73385b2.js"),[]).then(({data:u})=>u),"v-58a50cd4":()=>__vitePreload(()=>import("./8.html-6cd90144.js"),[]).then(({data:u})=>u),"v-5a59e573":()=>__vitePreload(()=>import("./9.html-fe735ac2.js"),[]).then(({data:u})=>u),"v-7b0795a0":()=>__vitePreload(()=>import("./intro.html-c6b16b2c.js"),[]).then(({data:u})=>u),"v-38de7212":()=>__vitePreload(()=>import("./index.html-01e7bf07.js"),[]).then(({data:u})=>u),"v-8a291b10":()=>__vitePreload(()=>import("./1.html-8e95bc10.js"),[]).then(({data:u})=>u),"v-ba943e2c":()=>__vitePreload(()=>import("./10.html-e3b88291.js"),[]).then(({data:u})=>u),"v-86bf69d2":()=>__vitePreload(()=>import("./2.html-1769ee1b.js"),[]).then(({data:u})=>u),"v-8355b894":()=>__vitePreload(()=>import("./3.html-9d7c8ccd.js"),[]).then(({data:u})=>u),"v-7fec0756":()=>__vitePreload(()=>import("./4.html-c278fc2f.js"),[]).then(({data:u})=>u),"v-7c825618":()=>__vitePreload(()=>import("./5.html-f6231234.js"),[]).then(({data:u})=>u),"v-7918a4da":()=>__vitePreload(()=>import("./6.html-74d8fbd6.js"),[]).then(({data:u})=>u),"v-75aef39c":()=>__vitePreload(()=>import("./7.html-70dc51de.js"),[]).then(({data:u})=>u),"v-7245425e":()=>__vitePreload(()=>import("./8.html-9516e5b7.js"),[]).then(({data:u})=>u),"v-6edb9120":()=>__vitePreload(()=>import("./9.html-aaf9d742.js"),[]).then(({data:u})=>u),"v-580d07ac":()=>__vitePreload(()=>import("./1.html-5e4c9acf.js"),[]).then(({data:u})=>u),"v-54a3566e":()=>__vitePreload(()=>import("./2.html-e9e00cba.js"),[]).then(({data:u})=>u),"v-5139a530":()=>__vitePreload(()=>import("./3.html-81aaf865.js"),[]).then(({data:u})=>u),"v-4dcff3f2":()=>__vitePreload(()=>import("./4.html-4127f730.js"),[]).then(({data:u})=>u),"v-7b98493e":()=>__vitePreload(()=>import("./5..html-b7457201.js"),[]).then(({data:u})=>u),"v-46fc9176":()=>__vitePreload(()=>import("./6.html-6f007b81.js"),[]).then(({data:u})=>u),"v-4392e038":()=>__vitePreload(()=>import("./7.html-3c755822.js"),[]).then(({data:u})=>u),"v-c4d73988":()=>__vitePreload(()=>import("./0.html-2f7febbf.js"),[]).then(({data:u})=>u),"v-c16d884a":()=>__vitePreload(()=>import("./1.html-0b59ccbd.js"),[]).then(({data:u})=>u),"v-adce56f8":()=>__vitePreload(()=>import("./10.1.html-402c960a.js"),[]).then(({data:u})=>u),"v-aa64a5ba":()=>__vitePreload(()=>import("./10.2.html-82b3e270.js"),[]).then(({data:u})=>u),"v-a6faf47c":()=>__vitePreload(()=>import("./10.3.html-ebb1341f.js"),[]).then(({data:u})=>u),"v-a391433e":()=>__vitePreload(()=>import("./10.4.html-723ab408.js"),[]).then(({data:u})=>u),"v-a0279200":()=>__vitePreload(()=>import("./10.5.html-a8fc68b2.js"),[]).then(({data:u})=>u),"v-4bc61c86":()=>__vitePreload(()=>import("./11.html-ef1805cf.js"),[]).then(({data:u})=>u),"v-4d7af525":()=>__vitePreload(()=>import("./12.html-4a4e1c17.js"),[]).then(({data:u})=>u),"v-4f2fcdc4":()=>__vitePreload(()=>import("./13.html-f09f52e8.js"),[]).then(({data:u})=>u),"v-50e4a663":()=>__vitePreload(()=>import("./14.html-9a1a813f.js"),[]).then(({data:u})=>u),"v-be03d70c":()=>__vitePreload(()=>import("./2.html-639029d4.js"),[]).then(({data:u})=>u),"v-ba9a25ce":()=>__vitePreload(()=>import("./3.html-5fd640d4.js"),[]).then(({data:u})=>u),"v-b7307490":()=>__vitePreload(()=>import("./4.html-86c00966.js"),[]).then(({data:u})=>u),"v-b3c6c352":()=>__vitePreload(()=>import("./5.html-ce2ac5d2.js"),[]).then(({data:u})=>u),"v-b05d1214":()=>__vitePreload(()=>import("./6.html-5c3fe733.js"),[]).then(({data:u})=>u),"v-acf360d6":()=>__vitePreload(()=>import("./7.html-79f42efb.js"),[]).then(({data:u})=>u),"v-a989af98":()=>__vitePreload(()=>import("./8.html-db7a51ee.js"),[]).then(({data:u})=>u),"v-a61ffe5a":()=>__vitePreload(()=>import("./9.html-e742260e.js"),[]).then(({data:u})=>u),"v-e8abe160":()=>__vitePreload(()=>import("./1.html-92d599d7.js"),[]).then(({data:u})=>u),"v-2c6a41dc":()=>__vitePreload(()=>import("./10.html-dfd6c537.js"),[]).then(({data:u})=>u),"v-e5423022":()=>__vitePreload(()=>import("./2.html-d46bf08d.js"),[]).then(({data:u})=>u),"v-e1d87ee4":()=>__vitePreload(()=>import("./3.html-7e0465ca.js"),[]).then(({data:u})=>u),"v-de6ecda6":()=>__vitePreload(()=>import("./4.html-1fb1999d.js"),[]).then(({data:u})=>u),"v-db051c68":()=>__vitePreload(()=>import("./5.html-680b8d95.js"),[]).then(({data:u})=>u),"v-d79b6b2a":()=>__vitePreload(()=>import("./6.html-5aecbd93.js"),[]).then(({data:u})=>u),"v-d431b9ec":()=>__vitePreload(()=>import("./7.html-2a04654b.js"),[]).then(({data:u})=>u),"v-d0c808ae":()=>__vitePreload(()=>import("./8.html-dda602c1.js"),[]).then(({data:u})=>u),"v-cd5e5770":()=>__vitePreload(()=>import("./9.html-8ab87452.js"),[]).then(({data:u})=>u),"v-6523da9a":()=>__vitePreload(()=>import("./1.html-0ef77f5d.js"),[]).then(({data:u})=>u),"v-61ba295c":()=>__vitePreload(()=>import("./2.html-cf1abcf1.js"),[]).then(({data:u})=>u),"v-5e50781e":()=>__vitePreload(()=>import("./3.html-3533cd9a.js"),[]).then(({data:u})=>u),"v-15cd7890":()=>__vitePreload(()=>import("./intro.html-765a0042.js"),[]).then(({data:u})=>u),"v-09f986f3":()=>__vitePreload(()=>import("./skill.html-0ee0d0c6.js"),[]).then(({data:u})=>u),"v-dbfcd868":()=>__vitePreload(()=>import("./arithmetic-1.html-bb78a758.js"),[]).then(({data:u})=>u),"v-d893272a":()=>__vitePreload(()=>import("./arithmetic-2.html-4a235b00.js"),[]).then(({data:u})=>u),"v-e2b4a2ca":()=>__vitePreload(()=>import("./array-1.html-06714038.js"),[]).then(({data:u})=>u),"v-df4af18c":()=>__vitePreload(()=>import("./array-2.html-98e0247f.js"),[]).then(({data:u})=>u),"v-419b10cb":()=>__vitePreload(()=>import("./bit.html-336fcfdb.js"),[]).then(({data:u})=>u),"v-3f26983a":()=>__vitePreload(()=>import("./choose.html-e3dd946a.js"),[]).then(({data:u})=>u),"v-066f94b8":()=>__vitePreload(()=>import("./design-1.html-f5e4e9c6.js"),[]).then(({data:u})=>u),"v-08246d57":()=>__vitePreload(()=>import("./design-2.html-b4b5313c.js"),[]).then(({data:u})=>u),"v-09d945f6":()=>__vitePreload(()=>import("./design-3.html-6eb868b1.js"),[]).then(({data:u})=>u),"v-0b8e1e95":()=>__vitePreload(()=>import("./design-4.html-b4a38f89.js"),[]).then(({data:u})=>u),"v-0fca090c":()=>__vitePreload(()=>import("./file-1.html-19e2c7ff.js"),[]).then(({data:u})=>u),"v-0c6057ce":()=>__vitePreload(()=>import("./file-2.html-7c148621.js"),[]).then(({data:u})=>u),"v-5194951e":()=>__vitePreload(()=>import("./function-1.html-2102027c.js"),[]).then(({data:u})=>u),"v-53496dbd":()=>__vitePreload(()=>import("./function-2.html-f8c98e88.js"),[]).then(({data:u})=>u),"v-18420c06":()=>__vitePreload(()=>import("./order-1.html-00aafbc2.js"),[]).then(({data:u})=>u),"v-19f6e4a5":()=>__vitePreload(()=>import("./order-2.html-419be585.js"),[]).then(({data:u})=>u),"v-ac3ec312":()=>__vitePreload(()=>import("./pointer-1.html-a113e0c7.js"),[]).then(({data:u})=>u),"v-a8d511d4":()=>__vitePreload(()=>import("./pointer-2.html-78b17e22.js"),[]).then(({data:u})=>u),"v-f007d0f6":()=>__vitePreload(()=>import("./recycle.html-bef5e36d.js"),[]).then(({data:u})=>u),"v-63b494e0":()=>__vitePreload(()=>import("./type.html-d2ada44a.js"),[]).then(({data:u})=>u),"v-b21889d8":()=>__vitePreload(()=>import("./animation.html-251158c6.js"),[]).then(({data:u})=>u),"v-9a015ab4":()=>__vitePreload(()=>import("./flat-trans.html-c7f21f18.js"),[]).then(({data:u})=>u),"v-b951f43e":()=>__vitePreload(()=>import("./flex.html-7a260b51.js"),[]).then(({data:u})=>u),"v-ec3a9a88":()=>__vitePreload(()=>import("./float.html-59c57bdc.js"),[]).then(({data:u})=>u),"v-116f78ac":()=>__vitePreload(()=>import("./intro.html-c19a12b0.js"),[]).then(({data:u})=>u),"v-0c92a298":()=>__vitePreload(()=>import("./mobile.html-2cc5a0ed.js"),[]).then(({data:u})=>u),"v-505c0d8a":()=>__vitePreload(()=>import("./selector.html-fd07f50b.js"),[]).then(({data:u})=>u),"v-0b98bc52":()=>__vitePreload(()=>import("./space-trans.html-d4ec1ded.js"),[]).then(({data:u})=>u),"v-9fda70c6":()=>__vitePreload(()=>import("./tip.html-85e1710d.js"),[]).then(({data:u})=>u),"v-544b055e":()=>__vitePreload(()=>import("./index.html-11ce9cfe.js"),[]).then(({data:u})=>u),"v-4ebda85f":()=>__vitePreload(()=>import("./Github-Flavored.html-bc5c6a8a.js"),[]).then(({data:u})=>u),"v-d7bdeeb8":()=>__vitePreload(()=>import("./Markdown-emoji.html-7f59e154.js"),[]).then(({data:u})=>u),"v-d41b788c":()=>__vitePreload(()=>import("./intro.html-cb694b14.js"),[]).then(({data:u})=>u),"v-397f062e":()=>__vitePreload(()=>import("./ssp-shortcut.html-4f8e9682.js"),[]).then(({data:u})=>u),"v-5f165206":()=>__vitePreload(()=>import("./typora-shortcut.html-e8bec57d.js"),[]).then(({data:u})=>u),"v-52fd4df8":()=>__vitePreload(()=>import("./index.html-ea7c86f1.js"),[]).then(({data:u})=>u),"v-6d7e9630":()=>__vitePreload(()=>import("./ffmpeg.html-b82aa129.js"),[]).then(({data:u})=>u),"v-27dcd94b":()=>__vitePreload(()=>import("./git.html-aeb1302b.js"),[]).then(({data:u})=>u),"v-75595410":()=>__vitePreload(()=>import("./vuepress.html-6996e69e.js"),[]).then(({data:u})=>u),"v-5a9cea55":()=>__vitePreload(()=>import("./index.html-687f3c32.js"),[]).then(({data:u})=>u),"v-53522f7d":()=>__vitePreload(()=>import("./beautiful.html-b0a3e53e.js"),[]).then(({data:u})=>u),"v-86af121a":()=>__vitePreload(()=>import("./install.html-988f8008.js"),[]).then(({data:u})=>u),"v-43bcfb4c":()=>__vitePreload(()=>import("./lamp.html-1686e74f.js"),[]).then(({data:u})=>u),"v-bfedf586":()=>__vitePreload(()=>import("./skill.html-62478187.js"),[]).then(({data:u})=>u),"v-865edad6":()=>__vitePreload(()=>import("./system.html-67c45ae1.js"),[]).then(({data:u})=>u),"v-24c6867e":()=>__vitePreload(()=>import("./intro.html-e323fef0.js"),[]).then(({data:u})=>u),"v-39a6c9b9":()=>__vitePreload(()=>import("./skill.html-507f70a7.js"),[]).then(({data:u})=>u),"v-3706649a":()=>__vitePreload(()=>import("./404.html-bedecbbb.js"),[]).then(({data:u})=>u),"v-5bc93818":()=>__vitePreload(()=>import("./index.html-9821bfa8.js"),[]).then(({data:u})=>u),"v-744d024e":()=>__vitePreload(()=>import("./index.html-147eb382.js"),[]).then(({data:u})=>u),"v-e52c881c":()=>__vitePreload(()=>import("./index.html-1aeddda7.js"),[]).then(({data:u})=>u),"v-154dc4c4":()=>__vitePreload(()=>import("./index.html-47f11122.js"),[]).then(({data:u})=>u),"v-01560935":()=>__vitePreload(()=>import("./index.html-5ac65f71.js"),[]).then(({data:u})=>u),"v-0d5ff3de":()=>__vitePreload(()=>import("./index.html-01cac894.js"),[]).then(({data:u})=>u),"v-59aac9c2":()=>__vitePreload(()=>import("./index.html-d0775f3f.js"),[]).then(({data:u})=>u),"v-27c96f6c":()=>__vitePreload(()=>import("./index.html-89e5ea2a.js"),[]).then(({data:u})=>u),"v-531558ec":()=>__vitePreload(()=>import("./index.html-850fa362.js"),[]).then(({data:u})=>u),"v-9a26760a":()=>__vitePreload(()=>import("./index.html-5defab2c.js"),[]).then(({data:u})=>u),"v-a021e0fa":()=>__vitePreload(()=>import("./index.html-822ab054.js"),[]).then(({data:u})=>u),"v-7682606a":()=>__vitePreload(()=>import("./index.html-28b1a710.js"),[]).then(({data:u})=>u),"v-613077fc":()=>__vitePreload(()=>import("./index.html-ca06f73a.js"),[]).then(({data:u})=>u),"v-788a823d":()=>__vitePreload(()=>import("./index.html-45149e99.js"),[]).then(({data:u})=>u),"v-996b3820":()=>__vitePreload(()=>import("./index.html-bbb49bde.js"),[]).then(({data:u})=>u),"v-1be2aa56":()=>__vitePreload(()=>import("./index.html-10631954.js"),[]).then(({data:u})=>u),"v-7033ce02":()=>__vitePreload(()=>import("./index.html-ffc9013a.js"),[]).then(({data:u})=>u),"v-517c5074":()=>__vitePreload(()=>import("./index.html-53ab83f6.js"),[]).then(({data:u})=>u),"v-e7c94808":()=>__vitePreload(()=>import("./index.html-158aa1c3.js"),[]).then(({data:u})=>u),"v-475098ce":()=>__vitePreload(()=>import("./index.html-3f130571.js"),[]).then(({data:u})=>u),"v-303582c8":()=>__vitePreload(()=>import("./index.html-373c3ca7.js"),[]).then(({data:u})=>u)},siteData$1=JSON.parse('{"base":"/","lang":"en-US","title":"麦田守望者文档库","description":"等风来，不如追风去","head":[],"locales":{"/":{"lang":"zh-CN"},"/tw/":{"lang":"zh-TW"}}}'),pagesComponents={"v-8daa1a0e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b0d6f8ee.js"),["assets/index.html-b0d6f8ee.js","assets/framework-1e9ccf99.js"])),"v-2c765786":defineAsyncComponent(()=>__vitePreload(()=>import("./arithmetic-1.html-391df3fe.js"),["assets/arithmetic-1.html-391df3fe.js","assets/framework-1e9ccf99.js"])),"v-2e2b3025":defineAsyncComponent(()=>__vitePreload(()=>import("./arithmetic-2.html-910c8865.js"),["assets/arithmetic-2.html-910c8865.js","assets/framework-1e9ccf99.js"])),"v-465ffea1":defineAsyncComponent(()=>__vitePreload(()=>import("./array-1.html-80c79f24.js"),["assets/array-1.html-80c79f24.js","assets/framework-1e9ccf99.js"])),"v-4814d740":defineAsyncComponent(()=>__vitePreload(()=>import("./array-2.html-c3d95108.js"),["assets/array-2.html-c3d95108.js","assets/framework-1e9ccf99.js"])),"v-7f4b585e":defineAsyncComponent(()=>__vitePreload(()=>import("./bit.html-affb6ff2.js"),["assets/bit.html-affb6ff2.js","assets/framework-1e9ccf99.js"])),"v-d87569c6":defineAsyncComponent(()=>__vitePreload(()=>import("./choose.html-2b3fead0.js"),["assets/choose.html-2b3fead0.js","assets/framework-1e9ccf99.js"])),"v-45ff4572":defineAsyncComponent(()=>__vitePreload(()=>import("./design-1.html-17b713be.js"),["assets/design-1.html-17b713be.js","assets/framework-1e9ccf99.js"])),"v-47b41e11":defineAsyncComponent(()=>__vitePreload(()=>import("./design-2.html-38e1eb87.js"),["assets/design-2.html-38e1eb87.js","assets/framework-1e9ccf99.js"])),"v-4968f6b0":defineAsyncComponent(()=>__vitePreload(()=>import("./design-3.html-d93ccec7.js"),["assets/design-3.html-d93ccec7.js","assets/framework-1e9ccf99.js"])),"v-4b1dcf4f":defineAsyncComponent(()=>__vitePreload(()=>import("./design-4.html-7bb655da.js"),["assets/design-4.html-7bb655da.js","assets/framework-1e9ccf99.js"])),"v-a918da98":defineAsyncComponent(()=>__vitePreload(()=>import("./file-1.html-649c8a21.js"),["assets/file-1.html-649c8a21.js","assets/framework-1e9ccf99.js"])),"v-a5af295a":defineAsyncComponent(()=>__vitePreload(()=>import("./file-2.html-f2324c83.js"),["assets/file-2.html-f2324c83.js","assets/framework-1e9ccf99.js"])),"v-280a0150":defineAsyncComponent(()=>__vitePreload(()=>import("./function-1.html-fd0b1e1d.js"),["assets/function-1.html-fd0b1e1d.js","assets/framework-1e9ccf99.js"])),"v-24a05012":defineAsyncComponent(()=>__vitePreload(()=>import("./function-2.html-6ff5b261.js"),["assets/function-2.html-6ff5b261.js","assets/framework-1e9ccf99.js"])),"v-600747e8":defineAsyncComponent(()=>__vitePreload(()=>import("./order-1.html-f93b8031.js"),["assets/order-1.html-f93b8031.js","assets/framework-1e9ccf99.js"])),"v-5c9d96aa":defineAsyncComponent(()=>__vitePreload(()=>import("./order-2.html-260581b9.js"),["assets/order-2.html-260581b9.js","assets/framework-1e9ccf99.js"])),"v-5c4704fd":defineAsyncComponent(()=>__vitePreload(()=>import("./pointer-1.html-6c697386.js"),["assets/pointer-1.html-6c697386.js","assets/framework-1e9ccf99.js"])),"v-5dfbdd9c":defineAsyncComponent(()=>__vitePreload(()=>import("./pointer-2.html-55b60353.js"),["assets/pointer-2.html-55b60353.js","assets/framework-1e9ccf99.js"])),"v-3fb6678b":defineAsyncComponent(()=>__vitePreload(()=>import("./recycle.html-665ad0e0.js"),["assets/recycle.html-665ad0e0.js","assets/framework-1e9ccf99.js"])),"v-86449acc":defineAsyncComponent(()=>__vitePreload(()=>import("./type.html-5c03ce91.js"),["assets/type.html-5c03ce91.js","assets/framework-1e9ccf99.js"])),"v-595a981a":defineAsyncComponent(()=>__vitePreload(()=>import("./animation.html-34485cff.js"),["assets/animation.html-34485cff.js","assets/framework-1e9ccf99.js"])),"v-4d741660":defineAsyncComponent(()=>__vitePreload(()=>import("./flat-trans.html-f79c8159.js"),["assets/flat-trans.html-f79c8159.js","assets/framework-1e9ccf99.js"])),"v-56af9d1b":defineAsyncComponent(()=>__vitePreload(()=>import("./flex.html-ecdba23c.js"),["assets/flex.html-ecdba23c.js","assets/framework-1e9ccf99.js"])),"v-419d02c2":defineAsyncComponent(()=>__vitePreload(()=>import("./float.html-67366205.js"),["assets/float.html-67366205.js","assets/framework-1e9ccf99.js"])),"v-6dac6e9c":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-f206020a.js"),["assets/intro.html-f206020a.js","assets/framework-1e9ccf99.js"])),"v-4c225352":defineAsyncComponent(()=>__vitePreload(()=>import("./mobile.html-1506ad28.js"),["assets/mobile.html-1506ad28.js","assets/framework-1e9ccf99.js"])),"v-72386375":defineAsyncComponent(()=>__vitePreload(()=>import("./selector.html-22c6f3f7.js"),["assets/selector.html-22c6f3f7.js","assets/framework-1e9ccf99.js"])),"v-a3515546":defineAsyncComponent(()=>__vitePreload(()=>import("./space-trans.html-edc2f6f0.js"),["assets/space-trans.html-edc2f6f0.js","assets/framework-1e9ccf99.js"])),"v-7c0d6123":defineAsyncComponent(()=>__vitePreload(()=>import("./tip.html-588183f3.js"),["assets/tip.html-588183f3.js","assets/framework-1e9ccf99.js"])),"v-92504580":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-74d2eebc.js"),["assets/index.html-74d2eebc.js","assets/framework-1e9ccf99.js"])),"v-14b2ee8b":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a11ef0f7.js"),["assets/index.html-a11ef0f7.js","assets/framework-1e9ccf99.js"])),"v-6e0450c0":defineAsyncComponent(()=>__vitePreload(()=>import("./dom.html-bc6757fd.js"),["assets/dom.html-bc6757fd.js","assets/framework-1e9ccf99.js"])),"v-405dc04a":defineAsyncComponent(()=>__vitePreload(()=>import("./grammar.html-034aff48.js"),["assets/grammar.html-034aff48.js","assets/framework-1e9ccf99.js"])),"v-e02a086e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a3cdba7e.js"),["assets/index.html-a3cdba7e.js","assets/framework-1e9ccf99.js"])),"v-6af6e8ce":defineAsyncComponent(()=>__vitePreload(()=>import("./Github-Flavored.html-d078a85f.js"),["assets/Github-Flavored.html-d078a85f.js","assets/framework-1e9ccf99.js"])),"v-2a9853ac":defineAsyncComponent(()=>__vitePreload(()=>import("./Markdown-emoji.html-93f0df5f.js"),["assets/Markdown-emoji.html-93f0df5f.js","assets/framework-1e9ccf99.js"])),"v-30670774":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-0d931efa.js"),["assets/intro.html-0d931efa.js","assets/framework-1e9ccf99.js"])),"v-5d14f3ef":defineAsyncComponent(()=>__vitePreload(()=>import("./ssp-shortcut.html-57bc993a.js"),["assets/ssp-shortcut.html-57bc993a.js","assets/framework-1e9ccf99.js"])),"v-4a459580":defineAsyncComponent(()=>__vitePreload(()=>import("./typora-shortcut.html-cc05c9a6.js"),["assets/typora-shortcut.html-cc05c9a6.js","assets/framework-1e9ccf99.js"])),"v-1c2dd3d6":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a1af4b7b.js"),["assets/index.html-a1af4b7b.js","assets/framework-1e9ccf99.js"])),"v-1559ca3e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a29b31d2.js"),["assets/index.html-a29b31d2.js","assets/framework-1e9ccf99.js"])),"v-1fe4fcb6":defineAsyncComponent(()=>__vitePreload(()=>import("./ffmpeg.html-28e284f7.js"),["assets/ffmpeg.html-28e284f7.js","assets/framework-1e9ccf99.js"])),"v-49951ef6":defineAsyncComponent(()=>__vitePreload(()=>import("./git.html-72e8f784.js"),["assets/git.html-72e8f784.js","assets/framework-1e9ccf99.js"])),"v-77ba32fe":defineAsyncComponent(()=>__vitePreload(()=>import("./vuepress.html-b5fd3f43.js"),["assets/vuepress.html-b5fd3f43.js","assets/framework-1e9ccf99.js"])),"v-2d0ac073":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-9f568caf.js"),["assets/index.html-9f568caf.js","assets/framework-1e9ccf99.js"])),"v-451df50f":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-425a919c.js"),["assets/index.html-425a919c.js","assets/framework-1e9ccf99.js"])),"v-23a4ecb7":defineAsyncComponent(()=>__vitePreload(()=>import("./beautiful.html-07ad276b.js"),["assets/beautiful.html-07ad276b.js","assets/framework-1e9ccf99.js"])),"v-571d3aad":defineAsyncComponent(()=>__vitePreload(()=>import("./install.html-2fdcf1f7.js"),["assets/install.html-2fdcf1f7.js","assets/framework-1e9ccf99.js"])),"v-13b93c5c":defineAsyncComponent(()=>__vitePreload(()=>import("./lamp.html-9c963500.js"),["assets/lamp.html-9c963500.js","assets/framework-1e9ccf99.js"])),"v-3a6f6f77":defineAsyncComponent(()=>__vitePreload(()=>import("./skill.html-bb7c05bf.js"),["assets/skill.html-bb7c05bf.js","assets/framework-1e9ccf99.js"])),"v-6f376f9b":defineAsyncComponent(()=>__vitePreload(()=>import("./system.html-b09385d0.js"),["assets/system.html-b09385d0.js","assets/framework-1e9ccf99.js"])),"v-6db12241":defineAsyncComponent(()=>__vitePreload(()=>import("./1.1.html-bcea96fd.js"),["assets/1.1.html-bcea96fd.js","assets/framework-1e9ccf99.js"])),"v-6f65fae0":defineAsyncComponent(()=>__vitePreload(()=>import("./1.2.html-8650f2df.js"),["assets/1.2.html-8650f2df.js","assets/framework-1e9ccf99.js"])),"v-711ad37f":defineAsyncComponent(()=>__vitePreload(()=>import("./1.3.html-2fa50af7.js"),["assets/1.3.html-2fa50af7.js","assets/framework-1e9ccf99.js"])),"v-72cfac1e":defineAsyncComponent(()=>__vitePreload(()=>import("./1.4.html-26a1cab7.js"),["assets/1.4.html-26a1cab7.js","assets/framework-1e9ccf99.js"])),"v-7b6aaadb":defineAsyncComponent(()=>__vitePreload(()=>import("./10.1.html-1dbfe899.js"),["assets/10.1.html-1dbfe899.js","assets/framework-1e9ccf99.js"])),"v-7d1f837a":defineAsyncComponent(()=>__vitePreload(()=>import("./10.2.html-669d08f3.js"),["assets/10.2.html-669d08f3.js","assets/framework-1e9ccf99.js"])),"v-3968508c":defineAsyncComponent(()=>__vitePreload(()=>import("./11.1.html-10c3d49a.js"),["assets/11.1.html-10c3d49a.js","assets/framework-1e9ccf99.js"])),"v-35fe9f4e":defineAsyncComponent(()=>__vitePreload(()=>import("./11.2.html-3b85c609.js"),["assets/11.2.html-3b85c609.js","assets/framework-1e9ccf99.js"])),"v-3294ee10":defineAsyncComponent(()=>__vitePreload(()=>import("./11.3.html-3927b32d.js"),["assets/11.3.html-3927b32d.js","assets/framework-1e9ccf99.js"])),"v-4b2d0499":defineAsyncComponent(()=>__vitePreload(()=>import("./12.1.html-69871f6e.js"),["assets/12.1.html-69871f6e.js","assets/framework-1e9ccf99.js"])),"v-4ce1dd38":defineAsyncComponent(()=>__vitePreload(()=>import("./12.2.html-f6ade4ce.js"),["assets/12.2.html-f6ade4ce.js","assets/framework-1e9ccf99.js"])),"v-4e96b5d7":defineAsyncComponent(()=>__vitePreload(()=>import("./12.3.html-bc2d66cc.js"),["assets/12.3.html-bc2d66cc.js","assets/framework-1e9ccf99.js"])),"v-504b8e76":defineAsyncComponent(()=>__vitePreload(()=>import("./12.4.html-5e523323.js"),["assets/12.4.html-5e523323.js","assets/framework-1e9ccf99.js"])),"v-99e39d10":defineAsyncComponent(()=>__vitePreload(()=>import("./13.1.html-7877656a.js"),["assets/13.1.html-7877656a.js","assets/framework-1e9ccf99.js"])),"v-9679ebd2":defineAsyncComponent(()=>__vitePreload(()=>import("./13.2.html-4ed39c5b.js"),["assets/13.2.html-4ed39c5b.js","assets/framework-1e9ccf99.js"])),"v-93103a94":defineAsyncComponent(()=>__vitePreload(()=>import("./13.3.html-a663d93d.js"),["assets/13.3.html-a663d93d.js","assets/framework-1e9ccf99.js"])),"v-8fa68956":defineAsyncComponent(()=>__vitePreload(()=>import("./13.4.html-8ecc3b99.js"),["assets/13.4.html-8ecc3b99.js","assets/framework-1e9ccf99.js"])),"v-54db61c0":defineAsyncComponent(()=>__vitePreload(()=>import("./2.1.html-557b032b.js"),["assets/2.1.html-557b032b.js","assets/framework-1e9ccf99.js"])),"v-5171b082":defineAsyncComponent(()=>__vitePreload(()=>import("./2.2.html-37c309ec.js"),["assets/2.2.html-37c309ec.js","assets/framework-1e9ccf99.js"])),"v-4e07ff44":defineAsyncComponent(()=>__vitePreload(()=>import("./2.3.html-c2de66cb.js"),["assets/2.3.html-c2de66cb.js","assets/framework-1e9ccf99.js"])),"v-4a9e4e06":defineAsyncComponent(()=>__vitePreload(()=>import("./2.4.html-9e77c506.js"),["assets/2.4.html-9e77c506.js","assets/framework-1e9ccf99.js"])),"v-3d737bff":defineAsyncComponent(()=>__vitePreload(()=>import("./3.1.html-af3f0a01.js"),["assets/3.1.html-af3f0a01.js","assets/framework-1e9ccf99.js"])),"v-3f28549e":defineAsyncComponent(()=>__vitePreload(()=>import("./3.2.html-9091b5e0.js"),["assets/3.2.html-9091b5e0.js","assets/framework-1e9ccf99.js"])),"v-b556ae44":defineAsyncComponent(()=>__vitePreload(()=>import("./4.1.html-f1e04330.js"),["assets/4.1.html-f1e04330.js","assets/framework-1e9ccf99.js"])),"v-b1ecfd06":defineAsyncComponent(()=>__vitePreload(()=>import("./4.2.html-a2e67536.js"),["assets/4.2.html-a2e67536.js","assets/framework-1e9ccf99.js"])),"v-ae834bc8":defineAsyncComponent(()=>__vitePreload(()=>import("./4.3.html-3e93255a.js"),["assets/4.3.html-3e93255a.js","assets/framework-1e9ccf99.js"])),"v-0d35d5bd":defineAsyncComponent(()=>__vitePreload(()=>import("./5.1.html-36124210.js"),["assets/5.1.html-36124210.js","assets/framework-1e9ccf99.js"])),"v-0eeaae5c":defineAsyncComponent(()=>__vitePreload(()=>import("./5.2.html-160e507c.js"),["assets/5.2.html-160e507c.js","assets/framework-1e9ccf99.js"])),"v-7517029c":defineAsyncComponent(()=>__vitePreload(()=>import("./6.1.html-d4b83c12.js"),["assets/6.1.html-d4b83c12.js","assets/framework-1e9ccf99.js"])),"v-76cbdb3b":defineAsyncComponent(()=>__vitePreload(()=>import("./6.2.html-cb4f4594.js"),["assets/6.2.html-cb4f4594.js","assets/framework-1e9ccf99.js"])),"v-7880b3da":defineAsyncComponent(()=>__vitePreload(()=>import("./6.3.html-520121a7.js"),["assets/6.3.html-520121a7.js","assets/framework-1e9ccf99.js"])),"v-7a358c79":defineAsyncComponent(()=>__vitePreload(()=>import("./6.4.html-937317cd.js"),["assets/6.4.html-937317cd.js","assets/framework-1e9ccf99.js"])),"v-7bea6518":defineAsyncComponent(()=>__vitePreload(()=>import("./6.5.html-8e30e477.js"),["assets/6.5.html-8e30e477.js","assets/framework-1e9ccf99.js"])),"v-460fa10a":defineAsyncComponent(()=>__vitePreload(()=>import("./7.1.html-55917535.js"),["assets/7.1.html-55917535.js","assets/framework-1e9ccf99.js"])),"v-42a5efcc":defineAsyncComponent(()=>__vitePreload(()=>import("./7.2.html-6c96ebdb.js"),["assets/7.2.html-6c96ebdb.js","assets/framework-1e9ccf99.js"])),"v-3f3c3e8e":defineAsyncComponent(()=>__vitePreload(()=>import("./7.3.html-14179707.js"),["assets/7.3.html-14179707.js","assets/framework-1e9ccf99.js"])),"v-44d95c5a":defineAsyncComponent(()=>__vitePreload(()=>import("./8.1.html-638abb56.js"),["assets/8.1.html-638abb56.js","assets/framework-1e9ccf99.js"])),"v-468e34f9":defineAsyncComponent(()=>__vitePreload(()=>import("./8.2.html-a7cb114a.js"),["assets/8.2.html-a7cb114a.js","assets/framework-1e9ccf99.js"])),"v-48430d98":defineAsyncComponent(()=>__vitePreload(()=>import("./8.3.html-c2fc0772.js"),["assets/8.3.html-c2fc0772.js","assets/framework-1e9ccf99.js"])),"v-a68aed8e":defineAsyncComponent(()=>__vitePreload(()=>import("./9.1.html-9f97b5c5.js"),["assets/9.1.html-9f97b5c5.js","assets/framework-1e9ccf99.js"])),"v-a3213c50":defineAsyncComponent(()=>__vitePreload(()=>import("./9.2.html-46350c76.js"),["assets/9.2.html-46350c76.js","assets/framework-1e9ccf99.js"])),"v-9fb78b12":defineAsyncComponent(()=>__vitePreload(()=>import("./9.3.html-502008d2.js"),["assets/9.3.html-502008d2.js","assets/framework-1e9ccf99.js"])),"v-9c4dd9d4":defineAsyncComponent(()=>__vitePreload(()=>import("./9.4.html-905f0d69.js"),["assets/9.4.html-905f0d69.js","assets/framework-1e9ccf99.js"])),"v-e76c14ee":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-eabdaef0.js"),["assets/intro.html-eabdaef0.js","assets/framework-1e9ccf99.js"])),"v-9e737f80":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-5fc5aa6d.js"),["assets/1.html-5fc5aa6d.js","assets/framework-1e9ccf99.js"])),"v-6834cc22":defineAsyncComponent(()=>__vitePreload(()=>import("./10.html-b01725ef.js"),["assets/10.html-b01725ef.js","assets/framework-1e9ccf99.js"])),"v-69e9a4c1":defineAsyncComponent(()=>__vitePreload(()=>import("./11.html-84c818ac.js"),["assets/11.html-84c818ac.js","assets/framework-1e9ccf99.js"])),"v-9b09ce42":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-a436b2f6.js"),["assets/2.html-a436b2f6.js","assets/framework-1e9ccf99.js"])),"v-97a01d04":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-e9f5af1e.js"),["assets/3.html-e9f5af1e.js","assets/framework-1e9ccf99.js"])),"v-94366bc6":defineAsyncComponent(()=>__vitePreload(()=>import("./4.html-4db269cb.js"),["assets/4.html-4db269cb.js","assets/framework-1e9ccf99.js"])),"v-90ccba88":defineAsyncComponent(()=>__vitePreload(()=>import("./5.html-7ff61907.js"),["assets/5.html-7ff61907.js","assets/framework-1e9ccf99.js"])),"v-8d63094a":defineAsyncComponent(()=>__vitePreload(()=>import("./6.html-abfd0473.js"),["assets/6.html-abfd0473.js","assets/framework-1e9ccf99.js"])),"v-89f9580c":defineAsyncComponent(()=>__vitePreload(()=>import("./7.html-c91bb3aa.js"),["assets/7.html-c91bb3aa.js","assets/framework-1e9ccf99.js"])),"v-868fa6ce":defineAsyncComponent(()=>__vitePreload(()=>import("./8.html-07d6f7d7.js"),["assets/8.html-07d6f7d7.js","assets/framework-1e9ccf99.js"])),"v-8325f590":defineAsyncComponent(()=>__vitePreload(()=>import("./9.html-8f39d308.js"),["assets/9.html-8f39d308.js","assets/framework-1e9ccf99.js"])),"v-5d4b4ae5":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-d1b88df7.js"),["assets/intro.html-d1b88df7.js","assets/framework-1e9ccf99.js"])),"v-76be69e7":defineAsyncComponent(()=>__vitePreload(()=>import("./1.1.html-9a1903bb.js"),["assets/1.1.html-9a1903bb.js","assets/framework-1e9ccf99.js"])),"v-78734286":defineAsyncComponent(()=>__vitePreload(()=>import("./1.2.html-97d2bc70.js"),["assets/1.2.html-97d2bc70.js","assets/framework-1e9ccf99.js"])),"v-d7f35016":defineAsyncComponent(()=>__vitePreload(()=>import("./10.1.html-fdbd7ef2.js"),["assets/10.1.html-fdbd7ef2.js","assets/framework-1e9ccf99.js"])),"v-d4899ed8":defineAsyncComponent(()=>__vitePreload(()=>import("./10.2.html-9db469e8.js"),["assets/10.2.html-9db469e8.js","assets/framework-1e9ccf99.js"])),"v-d11fed9a":defineAsyncComponent(()=>__vitePreload(()=>import("./10.3.html-7e524909.js"),["assets/10.3.html-7e524909.js","assets/framework-1e9ccf99.js"])),"v-0830f658":defineAsyncComponent(()=>__vitePreload(()=>import("./11.1.html-3fe09f5d.js"),["assets/11.1.html-3fe09f5d.js","assets/framework-1e9ccf99.js"])),"v-42c0d274":defineAsyncComponent(()=>__vitePreload(()=>import("./2.1.html-a783d3b8.js"),["assets/2.1.html-a783d3b8.js","assets/framework-1e9ccf99.js"])),"v-3f572136":defineAsyncComponent(()=>__vitePreload(()=>import("./2.2.html-3512aca0.js"),["assets/2.2.html-3512aca0.js","assets/framework-1e9ccf99.js"])),"v-3bed6ff8":defineAsyncComponent(()=>__vitePreload(()=>import("./2.3.html-b7c3459e.js"),["assets/2.3.html-b7c3459e.js","assets/framework-1e9ccf99.js"])),"v-4680c3a5":defineAsyncComponent(()=>__vitePreload(()=>import("./3.1.html-d17df2e4.js"),["assets/3.1.html-d17df2e4.js","assets/framework-1e9ccf99.js"])),"v-48359c44":defineAsyncComponent(()=>__vitePreload(()=>import("./3.2.html-ca88d549.js"),["assets/3.2.html-ca88d549.js","assets/framework-1e9ccf99.js"])),"v-49ea74e3":defineAsyncComponent(()=>__vitePreload(()=>import("./3.3.html-469f81de.js"),["assets/3.3.html-469f81de.js","assets/framework-1e9ccf99.js"])),"v-4b9f4d82":defineAsyncComponent(()=>__vitePreload(()=>import("./3.4.html-93b94142.js"),["assets/3.4.html-93b94142.js","assets/framework-1e9ccf99.js"])),"v-a33c1ef8":defineAsyncComponent(()=>__vitePreload(()=>import("./4.1.html-9052fa16.js"),["assets/4.1.html-9052fa16.js","assets/framework-1e9ccf99.js"])),"v-9fd26dba":defineAsyncComponent(()=>__vitePreload(()=>import("./4.2.html-cbad3322.js"),["assets/4.2.html-cbad3322.js","assets/framework-1e9ccf99.js"])),"v-16431d63":defineAsyncComponent(()=>__vitePreload(()=>import("./5.1.html-e8b24854.js"),["assets/5.1.html-e8b24854.js","assets/framework-1e9ccf99.js"])),"v-17f7f602":defineAsyncComponent(()=>__vitePreload(()=>import("./5.2.html-f651e28f.js"),["assets/5.2.html-f651e28f.js","assets/framework-1e9ccf99.js"])),"v-19accea1":defineAsyncComponent(()=>__vitePreload(()=>import("./5.3.html-bfb77d6f.js"),["assets/5.3.html-bfb77d6f.js","assets/framework-1e9ccf99.js"])),"v-7e244a42":defineAsyncComponent(()=>__vitePreload(()=>import("./6.1.html-df7aa31d.js"),["assets/6.1.html-df7aa31d.js","assets/framework-1e9ccf99.js"])),"v-7fd922e1":defineAsyncComponent(()=>__vitePreload(()=>import("./6.2.html-f4179e14.js"),["assets/6.2.html-f4179e14.js","assets/framework-1e9ccf99.js"])),"v-33f511be":defineAsyncComponent(()=>__vitePreload(()=>import("./7.1.html-0e0d221d.js"),["assets/7.1.html-0e0d221d.js","assets/framework-1e9ccf99.js"])),"v-308b6080":defineAsyncComponent(()=>__vitePreload(()=>import("./7.2.html-14827817.js"),["assets/7.2.html-14827817.js","assets/framework-1e9ccf99.js"])),"v-2d21af42":defineAsyncComponent(()=>__vitePreload(()=>import("./7.3.html-ea293d57.js"),["assets/7.3.html-ea293d57.js","assets/framework-1e9ccf99.js"])),"v-4de6a400":defineAsyncComponent(()=>__vitePreload(()=>import("./8.1.html-5deb87bd.js"),["assets/8.1.html-5deb87bd.js","assets/framework-1e9ccf99.js"])),"v-4f9b7c9f":defineAsyncComponent(()=>__vitePreload(()=>import("./8.2.html-d977d904.js"),["assets/8.2.html-d977d904.js","assets/framework-1e9ccf99.js"])),"v-5150553e":defineAsyncComponent(()=>__vitePreload(()=>import("./8.3.html-42681b74.js"),["assets/8.3.html-42681b74.js","assets/framework-1e9ccf99.js"])),"v-94705e42":defineAsyncComponent(()=>__vitePreload(()=>import("./9.1.html-e0045fa9.js"),["assets/9.1.html-e0045fa9.js","assets/framework-1e9ccf99.js"])),"v-9106ad04":defineAsyncComponent(()=>__vitePreload(()=>import("./9.2.html-ed39dc76.js"),["assets/9.2.html-ed39dc76.js","assets/framework-1e9ccf99.js"])),"v-8d9cfbc6":defineAsyncComponent(()=>__vitePreload(()=>import("./9.3.html-08c0fe2d.js"),["assets/9.3.html-08c0fe2d.js","assets/framework-1e9ccf99.js"])),"v-8a334a88":defineAsyncComponent(()=>__vitePreload(()=>import("./9.4.html-27c68f7f.js"),["assets/9.4.html-27c68f7f.js","assets/framework-1e9ccf99.js"])),"v-f1b828a2":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-a37e8c96.js"),["assets/intro.html-a37e8c96.js","assets/framework-1e9ccf99.js"])),"v-71b4ee23":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-61f05872.js"),["assets/1.html-61f05872.js","assets/framework-1e9ccf99.js"])),"v-7369c6c2":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-770d8b44.js"),["assets/2.html-770d8b44.js","assets/framework-1e9ccf99.js"])),"v-751e9f61":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-c5a447f5.js"),["assets/3.html-c5a447f5.js","assets/framework-1e9ccf99.js"])),"v-76d37800":defineAsyncComponent(()=>__vitePreload(()=>import("./4.html-983ee41d.js"),["assets/4.html-983ee41d.js","assets/framework-1e9ccf99.js"])),"v-7888509f":defineAsyncComponent(()=>__vitePreload(()=>import("./5.html-d1be3cae.js"),["assets/5.html-d1be3cae.js","assets/framework-1e9ccf99.js"])),"v-7a3d293e":defineAsyncComponent(()=>__vitePreload(()=>import("./6.html-f46ccd13.js"),["assets/6.html-f46ccd13.js","assets/framework-1e9ccf99.js"])),"v-7bf201dd":defineAsyncComponent(()=>__vitePreload(()=>import("./7.html-ccf2e9f7.js"),["assets/7.html-ccf2e9f7.js","assets/framework-1e9ccf99.js"])),"v-7da6da7c":defineAsyncComponent(()=>__vitePreload(()=>import("./8.html-4469c678.js"),["assets/8.html-4469c678.js","assets/framework-1e9ccf99.js"])),"v-7f5bb31b":defineAsyncComponent(()=>__vitePreload(()=>import("./9.html-626b2678.js"),["assets/9.html-626b2678.js","assets/framework-1e9ccf99.js"])),"v-eccb6170":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-5b94d11e.js"),["assets/intro.html-5b94d11e.js","assets/framework-1e9ccf99.js"])),"v-4cb3207b":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-d178a3a0.js"),["assets/1.html-d178a3a0.js","assets/framework-1e9ccf99.js"])),"v-49e3f347":defineAsyncComponent(()=>__vitePreload(()=>import("./10.html-c94cbb6f.js"),["assets/10.html-c94cbb6f.js","assets/framework-1e9ccf99.js"])),"v-4e67f91a":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-fc0c29a6.js"),["assets/2.html-fc0c29a6.js","assets/framework-1e9ccf99.js"])),"v-501cd1b9":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-4d3409ba.js"),["assets/3.html-4d3409ba.js","assets/framework-1e9ccf99.js"])),"v-51d1aa58":defineAsyncComponent(()=>__vitePreload(()=>import("./4.html-9da79c99.js"),["assets/4.html-9da79c99.js","assets/framework-1e9ccf99.js"])),"v-538682f7":defineAsyncComponent(()=>__vitePreload(()=>import("./5.html-57479526.js"),["assets/5.html-57479526.js","assets/framework-1e9ccf99.js"])),"v-553b5b96":defineAsyncComponent(()=>__vitePreload(()=>import("./6.html-e093939a.js"),["assets/6.html-e093939a.js","assets/framework-1e9ccf99.js"])),"v-56f03435":defineAsyncComponent(()=>__vitePreload(()=>import("./7.html-747c54d0.js"),["assets/7.html-747c54d0.js","assets/framework-1e9ccf99.js"])),"v-58a50cd4":defineAsyncComponent(()=>__vitePreload(()=>import("./8.html-c630cab5.js"),["assets/8.html-c630cab5.js","assets/framework-1e9ccf99.js"])),"v-5a59e573":defineAsyncComponent(()=>__vitePreload(()=>import("./9.html-7c62b16f.js"),["assets/9.html-7c62b16f.js","assets/framework-1e9ccf99.js"])),"v-7b0795a0":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-4b990f3f.js"),["assets/intro.html-4b990f3f.js","assets/framework-1e9ccf99.js"])),"v-38de7212":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-db5d29f8.js"),["assets/index.html-db5d29f8.js","assets/framework-1e9ccf99.js"])),"v-8a291b10":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-d541f7d7.js"),["assets/1.html-d541f7d7.js","assets/framework-1e9ccf99.js"])),"v-ba943e2c":defineAsyncComponent(()=>__vitePreload(()=>import("./10.html-210f88e2.js"),["assets/10.html-210f88e2.js","assets/framework-1e9ccf99.js"])),"v-86bf69d2":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-e3f7e39e.js"),["assets/2.html-e3f7e39e.js","assets/framework-1e9ccf99.js"])),"v-8355b894":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-21f71cf1.js"),["assets/3.html-21f71cf1.js","assets/framework-1e9ccf99.js"])),"v-7fec0756":defineAsyncComponent(()=>__vitePreload(()=>import("./4.html-0beddea9.js"),["assets/4.html-0beddea9.js","assets/framework-1e9ccf99.js"])),"v-7c825618":defineAsyncComponent(()=>__vitePreload(()=>import("./5.html-e8470e8e.js"),["assets/5.html-e8470e8e.js","assets/framework-1e9ccf99.js"])),"v-7918a4da":defineAsyncComponent(()=>__vitePreload(()=>import("./6.html-517be2e8.js"),["assets/6.html-517be2e8.js","assets/framework-1e9ccf99.js"])),"v-75aef39c":defineAsyncComponent(()=>__vitePreload(()=>import("./7.html-cfc54a52.js"),["assets/7.html-cfc54a52.js","assets/framework-1e9ccf99.js"])),"v-7245425e":defineAsyncComponent(()=>__vitePreload(()=>import("./8.html-466a877c.js"),["assets/8.html-466a877c.js","assets/framework-1e9ccf99.js"])),"v-6edb9120":defineAsyncComponent(()=>__vitePreload(()=>import("./9.html-07988296.js"),["assets/9.html-07988296.js","assets/framework-1e9ccf99.js"])),"v-580d07ac":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-9ce77e8a.js"),["assets/1.html-9ce77e8a.js","assets/framework-1e9ccf99.js"])),"v-54a3566e":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-868b2277.js"),["assets/2.html-868b2277.js","assets/framework-1e9ccf99.js"])),"v-5139a530":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-be0b717e.js"),["assets/3.html-be0b717e.js","assets/framework-1e9ccf99.js"])),"v-4dcff3f2":defineAsyncComponent(()=>__vitePreload(()=>import("./4.html-eca4c76d.js"),["assets/4.html-eca4c76d.js","assets/framework-1e9ccf99.js"])),"v-7b98493e":defineAsyncComponent(()=>__vitePreload(()=>import("./5..html-01631b91.js"),["assets/5..html-01631b91.js","assets/framework-1e9ccf99.js"])),"v-46fc9176":defineAsyncComponent(()=>__vitePreload(()=>import("./6.html-2202728f.js"),["assets/6.html-2202728f.js","assets/framework-1e9ccf99.js"])),"v-4392e038":defineAsyncComponent(()=>__vitePreload(()=>import("./7.html-54c15fdf.js"),["assets/7.html-54c15fdf.js","assets/framework-1e9ccf99.js"])),"v-c4d73988":defineAsyncComponent(()=>__vitePreload(()=>import("./0.html-2de3c524.js"),["assets/0.html-2de3c524.js","assets/framework-1e9ccf99.js"])),"v-c16d884a":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-9533a431.js"),["assets/1.html-9533a431.js","assets/framework-1e9ccf99.js"])),"v-adce56f8":defineAsyncComponent(()=>__vitePreload(()=>import("./10.1.html-28a42310.js"),["assets/10.1.html-28a42310.js","assets/framework-1e9ccf99.js"])),"v-aa64a5ba":defineAsyncComponent(()=>__vitePreload(()=>import("./10.2.html-01dc1305.js"),["assets/10.2.html-01dc1305.js","assets/framework-1e9ccf99.js"])),"v-a6faf47c":defineAsyncComponent(()=>__vitePreload(()=>import("./10.3.html-b9f6ca34.js"),["assets/10.3.html-b9f6ca34.js","assets/framework-1e9ccf99.js"])),"v-a391433e":defineAsyncComponent(()=>__vitePreload(()=>import("./10.4.html-5143cd4c.js"),["assets/10.4.html-5143cd4c.js","assets/framework-1e9ccf99.js"])),"v-a0279200":defineAsyncComponent(()=>__vitePreload(()=>import("./10.5.html-7b0be8e2.js"),["assets/10.5.html-7b0be8e2.js","assets/framework-1e9ccf99.js"])),"v-4bc61c86":defineAsyncComponent(()=>__vitePreload(()=>import("./11.html-e921e8a7.js"),["assets/11.html-e921e8a7.js","assets/framework-1e9ccf99.js"])),"v-4d7af525":defineAsyncComponent(()=>__vitePreload(()=>import("./12.html-3be0997f.js"),["assets/12.html-3be0997f.js","assets/framework-1e9ccf99.js"])),"v-4f2fcdc4":defineAsyncComponent(()=>__vitePreload(()=>import("./13.html-3c5a1767.js"),["assets/13.html-3c5a1767.js","assets/framework-1e9ccf99.js"])),"v-50e4a663":defineAsyncComponent(()=>__vitePreload(()=>import("./14.html-2b0eadaf.js"),["assets/14.html-2b0eadaf.js","assets/framework-1e9ccf99.js"])),"v-be03d70c":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-4053b8f6.js"),["assets/2.html-4053b8f6.js","assets/framework-1e9ccf99.js"])),"v-ba9a25ce":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-6640d46d.js"),["assets/3.html-6640d46d.js","assets/framework-1e9ccf99.js"])),"v-b7307490":defineAsyncComponent(()=>__vitePreload(()=>import("./4.html-c27dfa7e.js"),["assets/4.html-c27dfa7e.js","assets/framework-1e9ccf99.js"])),"v-b3c6c352":defineAsyncComponent(()=>__vitePreload(()=>import("./5.html-90aca6ac.js"),["assets/5.html-90aca6ac.js","assets/framework-1e9ccf99.js"])),"v-b05d1214":defineAsyncComponent(()=>__vitePreload(()=>import("./6.html-ae28e7ad.js"),["assets/6.html-ae28e7ad.js","assets/framework-1e9ccf99.js"])),"v-acf360d6":defineAsyncComponent(()=>__vitePreload(()=>import("./7.html-a44dee4f.js"),["assets/7.html-a44dee4f.js","assets/framework-1e9ccf99.js"])),"v-a989af98":defineAsyncComponent(()=>__vitePreload(()=>import("./8.html-5191d8dd.js"),["assets/8.html-5191d8dd.js","assets/framework-1e9ccf99.js"])),"v-a61ffe5a":defineAsyncComponent(()=>__vitePreload(()=>import("./9.html-ad97897f.js"),["assets/9.html-ad97897f.js","assets/framework-1e9ccf99.js"])),"v-e8abe160":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-09a9bc75.js"),["assets/1.html-09a9bc75.js","assets/framework-1e9ccf99.js"])),"v-2c6a41dc":defineAsyncComponent(()=>__vitePreload(()=>import("./10.html-039e6c2c.js"),["assets/10.html-039e6c2c.js","assets/framework-1e9ccf99.js"])),"v-e5423022":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-a66050fa.js"),["assets/2.html-a66050fa.js","assets/framework-1e9ccf99.js"])),"v-e1d87ee4":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-75ae48fb.js"),["assets/3.html-75ae48fb.js","assets/framework-1e9ccf99.js"])),"v-de6ecda6":defineAsyncComponent(()=>__vitePreload(()=>import("./4.html-2411ac74.js"),["assets/4.html-2411ac74.js","assets/framework-1e9ccf99.js"])),"v-db051c68":defineAsyncComponent(()=>__vitePreload(()=>import("./5.html-18285501.js"),["assets/5.html-18285501.js","assets/framework-1e9ccf99.js"])),"v-d79b6b2a":defineAsyncComponent(()=>__vitePreload(()=>import("./6.html-9e4a6f0d.js"),["assets/6.html-9e4a6f0d.js","assets/framework-1e9ccf99.js"])),"v-d431b9ec":defineAsyncComponent(()=>__vitePreload(()=>import("./7.html-71465dc7.js"),["assets/7.html-71465dc7.js","assets/framework-1e9ccf99.js"])),"v-d0c808ae":defineAsyncComponent(()=>__vitePreload(()=>import("./8.html-6077adba.js"),["assets/8.html-6077adba.js","assets/framework-1e9ccf99.js"])),"v-cd5e5770":defineAsyncComponent(()=>__vitePreload(()=>import("./9.html-3bc6df52.js"),["assets/9.html-3bc6df52.js","assets/framework-1e9ccf99.js"])),"v-6523da9a":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-57bdf0f8.js"),["assets/1.html-57bdf0f8.js","assets/framework-1e9ccf99.js"])),"v-61ba295c":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-c3c2cdcf.js"),["assets/2.html-c3c2cdcf.js","assets/framework-1e9ccf99.js"])),"v-5e50781e":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-34567594.js"),["assets/3.html-34567594.js","assets/framework-1e9ccf99.js"])),"v-15cd7890":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-5a6ae1a9.js"),["assets/intro.html-5a6ae1a9.js","assets/framework-1e9ccf99.js"])),"v-09f986f3":defineAsyncComponent(()=>__vitePreload(()=>import("./skill.html-f679022c.js"),["assets/skill.html-f679022c.js","assets/framework-1e9ccf99.js"])),"v-dbfcd868":defineAsyncComponent(()=>__vitePreload(()=>import("./arithmetic-1.html-c3717aef.js"),["assets/arithmetic-1.html-c3717aef.js","assets/framework-1e9ccf99.js"])),"v-d893272a":defineAsyncComponent(()=>__vitePreload(()=>import("./arithmetic-2.html-b4e433f7.js"),["assets/arithmetic-2.html-b4e433f7.js","assets/framework-1e9ccf99.js"])),"v-e2b4a2ca":defineAsyncComponent(()=>__vitePreload(()=>import("./array-1.html-45c48bc6.js"),["assets/array-1.html-45c48bc6.js","assets/framework-1e9ccf99.js"])),"v-df4af18c":defineAsyncComponent(()=>__vitePreload(()=>import("./array-2.html-ba1c0617.js"),["assets/array-2.html-ba1c0617.js","assets/framework-1e9ccf99.js"])),"v-419b10cb":defineAsyncComponent(()=>__vitePreload(()=>import("./bit.html-f2d2a5e4.js"),["assets/bit.html-f2d2a5e4.js","assets/framework-1e9ccf99.js"])),"v-3f26983a":defineAsyncComponent(()=>__vitePreload(()=>import("./choose.html-d30aab16.js"),["assets/choose.html-d30aab16.js","assets/framework-1e9ccf99.js"])),"v-066f94b8":defineAsyncComponent(()=>__vitePreload(()=>import("./design-1.html-9a4ddc6f.js"),["assets/design-1.html-9a4ddc6f.js","assets/framework-1e9ccf99.js"])),"v-08246d57":defineAsyncComponent(()=>__vitePreload(()=>import("./design-2.html-2574af2c.js"),["assets/design-2.html-2574af2c.js","assets/framework-1e9ccf99.js"])),"v-09d945f6":defineAsyncComponent(()=>__vitePreload(()=>import("./design-3.html-44a47d70.js"),["assets/design-3.html-44a47d70.js","assets/framework-1e9ccf99.js"])),"v-0b8e1e95":defineAsyncComponent(()=>__vitePreload(()=>import("./design-4.html-a513ac15.js"),["assets/design-4.html-a513ac15.js","assets/framework-1e9ccf99.js"])),"v-0fca090c":defineAsyncComponent(()=>__vitePreload(()=>import("./file-1.html-b12b1758.js"),["assets/file-1.html-b12b1758.js","assets/framework-1e9ccf99.js"])),"v-0c6057ce":defineAsyncComponent(()=>__vitePreload(()=>import("./file-2.html-818d3502.js"),["assets/file-2.html-818d3502.js","assets/framework-1e9ccf99.js"])),"v-5194951e":defineAsyncComponent(()=>__vitePreload(()=>import("./function-1.html-6dc9c04f.js"),["assets/function-1.html-6dc9c04f.js","assets/framework-1e9ccf99.js"])),"v-53496dbd":defineAsyncComponent(()=>__vitePreload(()=>import("./function-2.html-d7ca11ae.js"),["assets/function-2.html-d7ca11ae.js","assets/framework-1e9ccf99.js"])),"v-18420c06":defineAsyncComponent(()=>__vitePreload(()=>import("./order-1.html-f51cc259.js"),["assets/order-1.html-f51cc259.js","assets/framework-1e9ccf99.js"])),"v-19f6e4a5":defineAsyncComponent(()=>__vitePreload(()=>import("./order-2.html-9bd8f2fb.js"),["assets/order-2.html-9bd8f2fb.js","assets/framework-1e9ccf99.js"])),"v-ac3ec312":defineAsyncComponent(()=>__vitePreload(()=>import("./pointer-1.html-89665641.js"),["assets/pointer-1.html-89665641.js","assets/framework-1e9ccf99.js"])),"v-a8d511d4":defineAsyncComponent(()=>__vitePreload(()=>import("./pointer-2.html-a98a3a7e.js"),["assets/pointer-2.html-a98a3a7e.js","assets/framework-1e9ccf99.js"])),"v-f007d0f6":defineAsyncComponent(()=>__vitePreload(()=>import("./recycle.html-06cc5457.js"),["assets/recycle.html-06cc5457.js","assets/framework-1e9ccf99.js"])),"v-63b494e0":defineAsyncComponent(()=>__vitePreload(()=>import("./type.html-ee568d0c.js"),["assets/type.html-ee568d0c.js","assets/framework-1e9ccf99.js"])),"v-b21889d8":defineAsyncComponent(()=>__vitePreload(()=>import("./animation.html-7a1046c4.js"),["assets/animation.html-7a1046c4.js","assets/framework-1e9ccf99.js"])),"v-9a015ab4":defineAsyncComponent(()=>__vitePreload(()=>import("./flat-trans.html-8094edaa.js"),["assets/flat-trans.html-8094edaa.js","assets/framework-1e9ccf99.js"])),"v-b951f43e":defineAsyncComponent(()=>__vitePreload(()=>import("./flex.html-b832e2a0.js"),["assets/flex.html-b832e2a0.js","assets/framework-1e9ccf99.js"])),"v-ec3a9a88":defineAsyncComponent(()=>__vitePreload(()=>import("./float.html-b0bf2107.js"),["assets/float.html-b0bf2107.js","assets/framework-1e9ccf99.js"])),"v-116f78ac":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-3b2d244d.js"),["assets/intro.html-3b2d244d.js","assets/framework-1e9ccf99.js"])),"v-0c92a298":defineAsyncComponent(()=>__vitePreload(()=>import("./mobile.html-9a18cdbc.js"),["assets/mobile.html-9a18cdbc.js","assets/framework-1e9ccf99.js"])),"v-505c0d8a":defineAsyncComponent(()=>__vitePreload(()=>import("./selector.html-e5ac379e.js"),["assets/selector.html-e5ac379e.js","assets/framework-1e9ccf99.js"])),"v-0b98bc52":defineAsyncComponent(()=>__vitePreload(()=>import("./space-trans.html-7192a08c.js"),["assets/space-trans.html-7192a08c.js","assets/framework-1e9ccf99.js"])),"v-9fda70c6":defineAsyncComponent(()=>__vitePreload(()=>import("./tip.html-38159994.js"),["assets/tip.html-38159994.js","assets/framework-1e9ccf99.js"])),"v-544b055e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-da1ee343.js"),["assets/index.html-da1ee343.js","assets/framework-1e9ccf99.js"])),"v-4ebda85f":defineAsyncComponent(()=>__vitePreload(()=>import("./Github-Flavored.html-23d280df.js"),["assets/Github-Flavored.html-23d280df.js","assets/framework-1e9ccf99.js"])),"v-d7bdeeb8":defineAsyncComponent(()=>__vitePreload(()=>import("./Markdown-emoji.html-1040818a.js"),["assets/Markdown-emoji.html-1040818a.js","assets/framework-1e9ccf99.js"])),"v-d41b788c":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-d5cd6dcb.js"),["assets/intro.html-d5cd6dcb.js","assets/framework-1e9ccf99.js"])),"v-397f062e":defineAsyncComponent(()=>__vitePreload(()=>import("./ssp-shortcut.html-887727b2.js"),["assets/ssp-shortcut.html-887727b2.js","assets/framework-1e9ccf99.js"])),"v-5f165206":defineAsyncComponent(()=>__vitePreload(()=>import("./typora-shortcut.html-4ba371f9.js"),["assets/typora-shortcut.html-4ba371f9.js","assets/framework-1e9ccf99.js"])),"v-52fd4df8":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-d1ef36de.js"),["assets/index.html-d1ef36de.js","assets/framework-1e9ccf99.js"])),"v-6d7e9630":defineAsyncComponent(()=>__vitePreload(()=>import("./ffmpeg.html-ba7b2d5f.js"),["assets/ffmpeg.html-ba7b2d5f.js","assets/framework-1e9ccf99.js"])),"v-27dcd94b":defineAsyncComponent(()=>__vitePreload(()=>import("./git.html-e3b8016b.js"),["assets/git.html-e3b8016b.js","assets/framework-1e9ccf99.js"])),"v-75595410":defineAsyncComponent(()=>__vitePreload(()=>import("./vuepress.html-0fbf6ab4.js"),["assets/vuepress.html-0fbf6ab4.js","assets/framework-1e9ccf99.js"])),"v-5a9cea55":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5f019e64.js"),["assets/index.html-5f019e64.js","assets/framework-1e9ccf99.js"])),"v-53522f7d":defineAsyncComponent(()=>__vitePreload(()=>import("./beautiful.html-cde23569.js"),["assets/beautiful.html-cde23569.js","assets/framework-1e9ccf99.js"])),"v-86af121a":defineAsyncComponent(()=>__vitePreload(()=>import("./install.html-657c5178.js"),["assets/install.html-657c5178.js","assets/framework-1e9ccf99.js"])),"v-43bcfb4c":defineAsyncComponent(()=>__vitePreload(()=>import("./lamp.html-276b9e16.js"),["assets/lamp.html-276b9e16.js","assets/framework-1e9ccf99.js"])),"v-bfedf586":defineAsyncComponent(()=>__vitePreload(()=>import("./skill.html-47c9c80f.js"),["assets/skill.html-47c9c80f.js","assets/framework-1e9ccf99.js"])),"v-865edad6":defineAsyncComponent(()=>__vitePreload(()=>import("./system.html-cf835c93.js"),["assets/system.html-cf835c93.js","assets/framework-1e9ccf99.js"])),"v-24c6867e":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-636f816d.js"),["assets/intro.html-636f816d.js","assets/framework-1e9ccf99.js"])),"v-39a6c9b9":defineAsyncComponent(()=>__vitePreload(()=>import("./skill.html-35470abd.js"),["assets/skill.html-35470abd.js","assets/framework-1e9ccf99.js"])),"v-3706649a":defineAsyncComponent(()=>__vitePreload(()=>import("./404.html-2c690837.js"),["assets/404.html-2c690837.js","assets/framework-1e9ccf99.js"])),"v-5bc93818":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-06d30d06.js"),["assets/index.html-06d30d06.js","assets/framework-1e9ccf99.js"])),"v-744d024e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c0391fee.js"),["assets/index.html-c0391fee.js","assets/framework-1e9ccf99.js"])),"v-e52c881c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-0ff4b4dd.js"),["assets/index.html-0ff4b4dd.js","assets/framework-1e9ccf99.js"])),"v-154dc4c4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-14bb1b6d.js"),["assets/index.html-14bb1b6d.js","assets/framework-1e9ccf99.js"])),"v-01560935":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-1bd2c3ef.js"),["assets/index.html-1bd2c3ef.js","assets/framework-1e9ccf99.js"])),"v-0d5ff3de":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-969549fe.js"),["assets/index.html-969549fe.js","assets/framework-1e9ccf99.js"])),"v-59aac9c2":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-396f85dc.js"),["assets/index.html-396f85dc.js","assets/framework-1e9ccf99.js"])),"v-27c96f6c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a730640f.js"),["assets/index.html-a730640f.js","assets/framework-1e9ccf99.js"])),"v-531558ec":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-db1f0930.js"),["assets/index.html-db1f0930.js","assets/framework-1e9ccf99.js"])),"v-9a26760a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-eca0196f.js"),["assets/index.html-eca0196f.js","assets/framework-1e9ccf99.js"])),"v-a021e0fa":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-738bbb6b.js"),["assets/index.html-738bbb6b.js","assets/framework-1e9ccf99.js"])),"v-7682606a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-830393c9.js"),["assets/index.html-830393c9.js","assets/framework-1e9ccf99.js"])),"v-613077fc":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-8fae2a1b.js"),["assets/index.html-8fae2a1b.js","assets/framework-1e9ccf99.js"])),"v-788a823d":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-929cba1f.js"),["assets/index.html-929cba1f.js","assets/framework-1e9ccf99.js"])),"v-996b3820":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-f06412a6.js"),["assets/index.html-f06412a6.js","assets/framework-1e9ccf99.js"])),"v-1be2aa56":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b736a4fe.js"),["assets/index.html-b736a4fe.js","assets/framework-1e9ccf99.js"])),"v-7033ce02":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-53868689.js"),["assets/index.html-53868689.js","assets/framework-1e9ccf99.js"])),"v-517c5074":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-cd8bbc45.js"),["assets/index.html-cd8bbc45.js","assets/framework-1e9ccf99.js"])),"v-e7c94808":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-7783cd71.js"),["assets/index.html-7783cd71.js","assets/framework-1e9ccf99.js"])),"v-475098ce":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-6395389c.js"),["assets/index.html-6395389c.js","assets/framework-1e9ccf99.js"])),"v-303582c8":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-054c52ab.js"),["assets/index.html-054c52ab.js","assets/framework-1e9ccf99.js"]))};var layoutsSymbol=Symbol(""),pagesData=ref(pagesData$1),pageDataEmpty=readonly({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),pageData=ref(pageDataEmpty),usePageData=()=>pageData,pageFrontmatterSymbol=Symbol(""),usePageFrontmatter=()=>{const u=inject(pageFrontmatterSymbol);if(!u)throw new Error("usePageFrontmatter() is called without provider.");return u},pageHeadSymbol=Symbol(""),usePageHead=()=>{const u=inject(pageHeadSymbol);if(!u)throw new Error("usePageHead() is called without provider.");return u},pageHeadTitleSymbol=Symbol(""),usePageHeadTitle=()=>{const u=inject(pageHeadTitleSymbol);if(!u)throw new Error("usePageHeadTitle() is called without provider.");return u},pageLangSymbol=Symbol(""),usePageLang=()=>{const u=inject(pageLangSymbol);if(!u)throw new Error("usePageLang() is called without provider.");return u},pageLayoutSymbol=Symbol(""),usePageLayout=()=>{const u=inject(pageLayoutSymbol);if(!u)throw new Error("usePageLayout() is called without provider.");return u},routeLocaleSymbol=Symbol(""),useRouteLocale=()=>{const u=inject(routeLocaleSymbol);if(!u)throw new Error("useRouteLocale() is called without provider.");return u},siteData=ref(siteData$1),useSiteData=()=>siteData,siteLocaleDataSymbol=Symbol(""),useSiteLocaleData=()=>{const u=inject(siteLocaleDataSymbol);if(!u)throw new Error("useSiteLocaleData() is called without provider.");return u},updateHeadSymbol=Symbol(""),LAYOUT_NAME_DEFAULT="Layout",LAYOUT_NAME_NOT_FOUND="NotFound",resolvers=reactive({resolveLayouts:u=>u.reduce((m,b)=>({...m,...b.layouts}),{}),resolvePageData:async u=>{const m=pagesData.value[u];return await(m==null?void 0:m())??pageDataEmpty},resolvePageFrontmatter:u=>u.frontmatter,resolvePageHead:(u,m,b)=>{const T=isString$1(m.description)?m.description:b.description,$=[...isArray(m.head)?m.head:[],...b.head,["title",{},u],["meta",{name:"description",content:T}]];return dedupeHead($)},resolvePageHeadTitle:(u,m)=>`${u.title?`${u.title}`:""}${m.title?` | ${m.title}`:""}`,resolvePageLang:u=>u.lang||"en",resolvePageLayout:(u,m)=>{let b;if(u.path){const T=u.frontmatter.layout;isString$1(T)?b=T:b=LAYOUT_NAME_DEFAULT}else b=LAYOUT_NAME_NOT_FOUND;return m[b]},resolveRouteLocale:(u,m)=>resolveLocalePath(u,m),resolveSiteLocaleData:(u,m)=>({...u,...u.locales[m]})}),ClientOnly=defineComponent({name:"ClientOnly",setup(u,m){const b=ref(!1);return onMounted(()=>{b.value=!0}),()=>{var T,$;return b.value?($=(T=m.slots).default)==null?void 0:$.call(T):null}}}),Content=defineComponent({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(u){const m=usePageData(),b=computed(()=>pagesComponents[u.pageKey||m.value.key]);return()=>b.value?h$4(b.value):h$4("div","404 Not Found")}}),defineClientConfig=(u={})=>u,withBase=u=>isLinkHttp(u)?u:`/${removeLeadingSlash(u)}`;const hopeInject="",clientConfig0={};var _a$1;const isClient=typeof window<"u",isFunction=u=>typeof u=="function",isString=u=>typeof u=="string",noop=()=>{};isClient&&((_a$1=window==null?void 0:window.navigator)!=null&&_a$1.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function resolveUnref(u){return typeof u=="function"?u():unref(u)}function createFilterWrapper(u,m){function b(...T){u(()=>m.apply(this,T),{fn:m,thisArg:this,args:T})}return b}const bypassFilter=u=>u();function debounceFilter(u,m={}){let b,T;return j=>{const Z=resolveUnref(u),W=resolveUnref(m.maxWait);if(b&&clearTimeout(b),Z<=0||W!==void 0&&W<=0)return T&&(clearTimeout(T),T=null),j();W&&!T&&(T=setTimeout(()=>{b&&clearTimeout(b),T=null,j()},W)),b=setTimeout(()=>{T&&clearTimeout(T),T=null,j()},Z)}}function throttleFilter(u,m=!0,b=!0){let T=0,$,j=!0;const Z=()=>{$&&(clearTimeout($),$=void 0)};return U=>{const Y=resolveUnref(u),nn=Date.now()-T;if(Z(),Y<=0)return T=Date.now(),U();nn>Y&&(b||!j)?(T=Date.now(),U()):m&&($=setTimeout(()=>{T=Date.now(),j=!0,Z(),U()},Y-nn)),!b&&!$&&($=setTimeout(()=>j=!0,Y)),j=!1}}function pausableFilter(u=bypassFilter){const m=ref(!0);function b(){m.value=!1}function T(){m.value=!0}return{isActive:m,pause:b,resume:T,eventFilter:(...j)=>{m.value&&u(...j)}}}function identity(u){return u}function tryOnScopeDispose(u){return getCurrentScope()?(onScopeDispose(u),!0):!1}function useDebounceFn(u,m=200,b={}){return createFilterWrapper(debounceFilter(m,b),u)}function useThrottleFn(u,m=200,b=!1,T=!0){return createFilterWrapper(throttleFilter(m,b,T),u)}function resolveRef(u){return typeof u=="function"?computed(u):ref(u)}function tryOnMounted(u,m=!0){getCurrentInstance()?onMounted(u):m?u():nextTick(u)}var __getOwnPropSymbols$6=Object.getOwnPropertySymbols,__hasOwnProp$6=Object.prototype.hasOwnProperty,__propIsEnum$6=Object.prototype.propertyIsEnumerable,__objRest$5=(u,m)=>{var b={};for(var T in u)__hasOwnProp$6.call(u,T)&&m.indexOf(T)<0&&(b[T]=u[T]);if(u!=null&&__getOwnPropSymbols$6)for(var T of __getOwnPropSymbols$6(u))m.indexOf(T)<0&&__propIsEnum$6.call(u,T)&&(b[T]=u[T]);return b};function watchWithFilter(u,m,b={}){const T=b,{eventFilter:$=bypassFilter}=T,j=__objRest$5(T,["eventFilter"]);return watch(u,createFilterWrapper($,m),j)}var __defProp$2=Object.defineProperty,__defProps$2=Object.defineProperties,__getOwnPropDescs$2=Object.getOwnPropertyDescriptors,__getOwnPropSymbols$2=Object.getOwnPropertySymbols,__hasOwnProp$2=Object.prototype.hasOwnProperty,__propIsEnum$2=Object.prototype.propertyIsEnumerable,__defNormalProp$2=(u,m,b)=>m in u?__defProp$2(u,m,{enumerable:!0,configurable:!0,writable:!0,value:b}):u[m]=b,__spreadValues$2=(u,m)=>{for(var b in m||(m={}))__hasOwnProp$2.call(m,b)&&__defNormalProp$2(u,b,m[b]);if(__getOwnPropSymbols$2)for(var b of __getOwnPropSymbols$2(m))__propIsEnum$2.call(m,b)&&__defNormalProp$2(u,b,m[b]);return u},__spreadProps$2=(u,m)=>__defProps$2(u,__getOwnPropDescs$2(m)),__objRest$1=(u,m)=>{var b={};for(var T in u)__hasOwnProp$2.call(u,T)&&m.indexOf(T)<0&&(b[T]=u[T]);if(u!=null&&__getOwnPropSymbols$2)for(var T of __getOwnPropSymbols$2(u))m.indexOf(T)<0&&__propIsEnum$2.call(u,T)&&(b[T]=u[T]);return b};function watchPausable(u,m,b={}){const T=b,{eventFilter:$}=T,j=__objRest$1(T,["eventFilter"]),{eventFilter:Z,pause:W,resume:U,isActive:Y}=pausableFilter($);return{stop:watchWithFilter(u,m,__spreadProps$2(__spreadValues$2({},j),{eventFilter:Z})),pause:W,resume:U,isActive:Y}}function unrefElement(u){var m;const b=resolveUnref(u);return(m=b==null?void 0:b.$el)!=null?m:b}const defaultWindow=isClient?window:void 0,defaultDocument=isClient?window.document:void 0;isClient&&window.navigator;isClient&&window.location;function useEventListener(...u){let m,b,T,$;if(isString(u[0])||Array.isArray(u[0])?([b,T,$]=u,m=defaultWindow):[m,b,T,$]=u,!m)return noop;Array.isArray(b)||(b=[b]),Array.isArray(T)||(T=[T]);const j=[],Z=()=>{j.forEach(nn=>nn()),j.length=0},W=(nn,tn,an)=>(nn.addEventListener(tn,an,$),()=>nn.removeEventListener(tn,an,$)),U=watch(()=>unrefElement(m),nn=>{Z(),nn&&j.push(...b.flatMap(tn=>T.map(an=>W(nn,tn,an))))},{immediate:!0,flush:"post"}),Y=()=>{U(),Z()};return tryOnScopeDispose(Y),Y}function onClickOutside(u,m,b={}){const{window:T=defaultWindow,ignore:$,capture:j=!0,detectIframe:Z=!1}=b;if(!T)return;let W=!0,U;const Y=en=>{T.clearTimeout(U);const on=unrefElement(u);if(!(!on||on===en.target||en.composedPath().includes(on))){if(!W){W=!0;return}m(en)}},nn=en=>$&&$.some(on=>{const sn=unrefElement(on);return sn&&(en.target===sn||en.composedPath().includes(sn))}),tn=[useEventListener(T,"click",Y,{passive:!0,capture:j}),useEventListener(T,"pointerdown",en=>{const on=unrefElement(u);on&&(W=!en.composedPath().includes(on)&&!nn(en))},{passive:!0}),useEventListener(T,"pointerup",en=>{if(en.button===0){const on=en.composedPath();en.composedPath=()=>on,U=T.setTimeout(()=>Y(en),50)}},{passive:!0}),Z&&useEventListener(T,"blur",en=>{var on;const sn=unrefElement(u);((on=T.document.activeElement)==null?void 0:on.tagName)==="IFRAME"&&!(sn!=null&&sn.contains(T.document.activeElement))&&m(en)})].filter(Boolean);return()=>tn.forEach(en=>en())}function useSupported(u,m=!1){const b=ref(),T=()=>b.value=Boolean(u());return T(),tryOnMounted(T,m),b}function useMediaQuery(u,m={}){const{window:b=defaultWindow}=m,T=useSupported(()=>b&&"matchMedia"in b&&typeof b.matchMedia=="function");let $;const j=ref(!1),Z=()=>{$&&("removeEventListener"in $?$.removeEventListener("change",W):$.removeListener(W))},W=()=>{T.value&&(Z(),$=b.matchMedia(resolveRef(u).value),j.value=$.matches,"addEventListener"in $?$.addEventListener("change",W):$.addListener(W))};return watchEffect(W),tryOnScopeDispose(()=>Z()),j}const _global=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},globalKey="__vueuse_ssr_handlers__";_global[globalKey]=_global[globalKey]||{};const handlers=_global[globalKey];function getSSRHandler(u,m){return handlers[u]||m}function guessSerializerType(u){return u==null?"any":u instanceof Set?"set":u instanceof Map?"map":u instanceof Date?"date":typeof u=="boolean"?"boolean":typeof u=="string"?"string":typeof u=="object"?"object":Number.isNaN(u)?"any":"number"}var __defProp$j=Object.defineProperty,__getOwnPropSymbols$l=Object.getOwnPropertySymbols,__hasOwnProp$l=Object.prototype.hasOwnProperty,__propIsEnum$l=Object.prototype.propertyIsEnumerable,__defNormalProp$j=(u,m,b)=>m in u?__defProp$j(u,m,{enumerable:!0,configurable:!0,writable:!0,value:b}):u[m]=b,__spreadValues$j=(u,m)=>{for(var b in m||(m={}))__hasOwnProp$l.call(m,b)&&__defNormalProp$j(u,b,m[b]);if(__getOwnPropSymbols$l)for(var b of __getOwnPropSymbols$l(m))__propIsEnum$l.call(m,b)&&__defNormalProp$j(u,b,m[b]);return u};const StorageSerializers={boolean:{read:u=>u==="true",write:u=>String(u)},object:{read:u=>JSON.parse(u),write:u=>JSON.stringify(u)},number:{read:u=>Number.parseFloat(u),write:u=>String(u)},any:{read:u=>u,write:u=>String(u)},string:{read:u=>u,write:u=>String(u)},map:{read:u=>new Map(JSON.parse(u)),write:u=>JSON.stringify(Array.from(u.entries()))},set:{read:u=>new Set(JSON.parse(u)),write:u=>JSON.stringify(Array.from(u))},date:{read:u=>new Date(u),write:u=>u.toISOString()}};function useStorage(u,m,b,T={}){var $;const{flush:j="pre",deep:Z=!0,listenToStorageChanges:W=!0,writeDefaults:U=!0,mergeDefaults:Y=!1,shallow:nn,window:tn=defaultWindow,eventFilter:an,onError:en=ln=>{console.error(ln)}}=T,on=(nn?shallowRef:ref)(m);if(!b)try{b=getSSRHandler("getDefaultStorage",()=>{var ln;return(ln=defaultWindow)==null?void 0:ln.localStorage})()}catch(ln){en(ln)}if(!b)return on;const sn=resolveUnref(m),cn=guessSerializerType(sn),un=($=T.serializer)!=null?$:StorageSerializers[cn],{pause:hn,resume:fn}=watchPausable(on,()=>An(on.value),{flush:j,deep:Z,eventFilter:an});return tn&&W&&useEventListener(tn,"storage",vn),vn(),on;function An(ln){try{ln==null?b.removeItem(u):b.setItem(u,un.write(ln))}catch(_n){en(_n)}}function En(ln){hn();try{const _n=ln?ln.newValue:b.getItem(u);if(_n==null)return U&&sn!==null&&b.setItem(u,un.write(sn)),sn;if(!ln&&Y){const gn=un.read(_n);return isFunction(Y)?Y(gn,sn):cn==="object"&&!Array.isArray(gn)?__spreadValues$j(__spreadValues$j({},sn),gn):gn}else return typeof _n!="string"?_n:un.read(_n)}catch(_n){en(_n)}finally{fn()}}function vn(ln){if(!(ln&&ln.storageArea!==b)){if(ln&&ln.key===null){on.value=sn;return}ln&&ln.key!==u||(on.value=En(ln))}}}function usePreferredDark(u){return useMediaQuery("(prefers-color-scheme: dark)",u)}const functionsMap=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function useFullscreen(u,m={}){const{document:b=defaultDocument,autoExit:T=!1}=m,$=u||(b==null?void 0:b.querySelector("html")),j=ref(!1);let Z=functionsMap[0];const W=useSupported(()=>{if(b){for(const sn of functionsMap)if(sn[1]in b)return Z=sn,!0}else return!1;return!1}),[U,Y,nn,,tn]=Z;async function an(){W.value&&(b!=null&&b[nn]&&await b[Y](),j.value=!1)}async function en(){if(!W.value)return;await an();const sn=unrefElement($);sn&&(await sn[U](),j.value=!0)}async function on(){j.value?await an():await en()}return b&&useEventListener(b,tn,()=>{j.value=!!(b!=null&&b[nn])},!1),T&&tryOnScopeDispose(an),{isSupported:W,isFullscreen:j,enter:en,exit:an,toggle:on}}var SwipeDirection;(function(u){u.UP="UP",u.RIGHT="RIGHT",u.DOWN="DOWN",u.LEFT="LEFT",u.NONE="NONE"})(SwipeDirection||(SwipeDirection={}));let _id=0;function useStyleTag(u,m={}){const b=ref(!1),{document:T=defaultDocument,immediate:$=!0,manual:j=!1,id:Z=`vueuse_styletag_${++_id}`}=m,W=ref(u);let U=()=>{};const Y=()=>{if(!T)return;const tn=T.getElementById(Z)||T.createElement("style");tn.isConnected||(tn.type="text/css",tn.id=Z,m.media&&(tn.media=m.media),T.head.appendChild(tn)),!b.value&&(U=watch(W,an=>{tn.innerText=an},{immediate:!0}),b.value=!0)},nn=()=>{!T||!b.value||(U(),T.head.removeChild(T.getElementById(Z)),b.value=!1)};return $&&!j&&tryOnMounted(Y),j||tryOnScopeDispose(nn),{id:Z,css:W,unload:nn,load:Y,isLoaded:readonly(b)}}var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(u,m,b)=>m in u?__defProp(u,m,{enumerable:!0,configurable:!0,writable:!0,value:b}):u[m]=b,__spreadValues=(u,m)=>{for(var b in m||(m={}))__hasOwnProp.call(m,b)&&__defNormalProp(u,b,m[b]);if(__getOwnPropSymbols)for(var b of __getOwnPropSymbols(m))__propIsEnum.call(m,b)&&__defNormalProp(u,b,m[b]);return u};const _TransitionPresets={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};__spreadValues({linear:identity},_TransitionPresets);const badge="",t$1=({type:u="info",text:m="",vertical:b="top",color:T},{slots:$})=>{var j;return h$4("span",{class:["badge",u,{diy:T}],style:{verticalAlign:b,...T?{backgroundColor:T}:{}}},m||((j=$.default)==null?void 0:j.call($)))};t$1.displayName="Badge";const i$3=({icon:u="",color:m,size:b})=>u?h$4("span",{class:["icon",`iconfont icon-${u}`],...m||b?{style:{...m?{color:m}:{},...b?{"font-size":`${b}px`}:{}}}:{}}):null;i$3.displayName="FontIcon",i$3.props={icon:String,color:String,size:Number};var u8=Uint8Array,u16=Uint16Array,u32=Uint32Array,fleb=new u8([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),fdeb=new u8([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),clim=new u8([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),freb=function(u,m){for(var b=new u16(31),T=0;T<31;++T)b[T]=m+=1<<u[T-1];for(var $=new u32(b[30]),T=1;T<30;++T)for(var j=b[T];j<b[T+1];++j)$[j]=j-b[T]<<5|T;return[b,$]},_a=freb(fleb,2),fl=_a[0],revfl=_a[1];fl[28]=258,revfl[258]=28;var _b=freb(fdeb,0),fd=_b[0],rev=new u16(32768);for(var i$2=0;i$2<32768;++i$2){var x$1=(i$2&43690)>>>1|(i$2&21845)<<1;x$1=(x$1&52428)>>>2|(x$1&13107)<<2,x$1=(x$1&61680)>>>4|(x$1&3855)<<4,rev[i$2]=((x$1&65280)>>>8|(x$1&255)<<8)>>>1}var hMap=function(u,m,b){for(var T=u.length,$=0,j=new u16(m);$<T;++$)u[$]&&++j[u[$]-1];var Z=new u16(m);for($=0;$<m;++$)Z[$]=Z[$-1]+j[$-1]<<1;var W;if(b){W=new u16(1<<m);var U=15-m;for($=0;$<T;++$)if(u[$])for(var Y=$<<4|u[$],nn=m-u[$],tn=Z[u[$]-1]++<<nn,an=tn|(1<<nn)-1;tn<=an;++tn)W[rev[tn]>>>U]=Y}else for(W=new u16(T),$=0;$<T;++$)u[$]&&(W[$]=rev[Z[u[$]-1]++]>>>15-u[$]);return W},flt=new u8(288);for(var i$2=0;i$2<144;++i$2)flt[i$2]=8;for(var i$2=144;i$2<256;++i$2)flt[i$2]=9;for(var i$2=256;i$2<280;++i$2)flt[i$2]=7;for(var i$2=280;i$2<288;++i$2)flt[i$2]=8;var fdt=new u8(32);for(var i$2=0;i$2<32;++i$2)fdt[i$2]=5;var flrm=hMap(flt,9,1),fdrm=hMap(fdt,5,1),max=function(u){for(var m=u[0],b=1;b<u.length;++b)u[b]>m&&(m=u[b]);return m},bits=function(u,m,b){var T=m/8|0;return(u[T]|u[T+1]<<8)>>(m&7)&b},bits16=function(u,m){var b=m/8|0;return(u[b]|u[b+1]<<8|u[b+2]<<16)>>(m&7)},shft=function(u){return(u+7)/8|0},slc=function(u,m,b){(m==null||m<0)&&(m=0),(b==null||b>u.length)&&(b=u.length);var T=new(u.BYTES_PER_ELEMENT==2?u16:u.BYTES_PER_ELEMENT==4?u32:u8)(b-m);return T.set(u.subarray(m,b)),T},ec=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],err=function(u,m,b){var T=new Error(m||ec[u]);if(T.code=u,Error.captureStackTrace&&Error.captureStackTrace(T,err),!b)throw T;return T},inflt=function(u,m,b){var T=u.length;if(!T||b&&b.f&&!b.l)return m||new u8(0);var $=!m||b,j=!b||b.i;b||(b={}),m||(m=new u8(T*3));var Z=function(Rn){var Sn=m.length;if(Rn>Sn){var xn=new u8(Math.max(Sn*2,Rn));xn.set(m),m=xn}},W=b.f||0,U=b.p||0,Y=b.b||0,nn=b.l,tn=b.d,an=b.m,en=b.n,on=T*8;do{if(!nn){W=bits(u,U,1);var sn=bits(u,U+1,3);if(U+=3,sn)if(sn==1)nn=flrm,tn=fdrm,an=9,en=5;else if(sn==2){var fn=bits(u,U,31)+257,An=bits(u,U+10,15)+4,En=fn+bits(u,U+5,31)+1;U+=14;for(var vn=new u8(En),ln=new u8(19),_n=0;_n<An;++_n)ln[clim[_n]]=bits(u,U+_n*3,7);U+=An*3;for(var gn=max(ln),wn=(1<<gn)-1,In=hMap(ln,gn,1),_n=0;_n<En;){var Mn=In[bits(u,U,wn)];U+=Mn&15;var cn=Mn>>>4;if(cn<16)vn[_n++]=cn;else{var kn=0,rn=0;for(cn==16?(rn=3+bits(u,U,3),U+=2,kn=vn[_n-1]):cn==17?(rn=3+bits(u,U,7),U+=3):cn==18&&(rn=11+bits(u,U,127),U+=7);rn--;)vn[_n++]=kn}}var pn=vn.subarray(0,fn),mn=vn.subarray(fn);an=max(pn),en=max(mn),nn=hMap(pn,an,1),tn=hMap(mn,en,1)}else err(1);else{var cn=shft(U)+4,un=u[cn-4]|u[cn-3]<<8,hn=cn+un;if(hn>T){j&&err(0);break}$&&Z(Y+un),m.set(u.subarray(cn,hn),Y),b.b=Y+=un,b.p=U=hn*8,b.f=W;continue}if(U>on){j&&err(0);break}}$&&Z(Y+131072);for(var dn=(1<<an)-1,yn=(1<<en)-1,bn=U;;bn=U){var kn=nn[bits16(u,U)&dn],Pn=kn>>>4;if(U+=kn&15,U>on){j&&err(0);break}if(kn||err(2),Pn<256)m[Y++]=Pn;else if(Pn==256){bn=U,nn=null;break}else{var Ln=Pn-254;if(Pn>264){var _n=Pn-257,Tn=fleb[_n];Ln=bits(u,U,(1<<Tn)-1)+fl[_n],U+=Tn}var $n=tn[bits16(u,U)&yn],Cn=$n>>>4;$n||err(3),U+=$n&15;var mn=fd[Cn];if(Cn>3){var Tn=fdeb[Cn];mn+=bits16(u,U)&(1<<Tn)-1,U+=Tn}if(U>on){j&&err(0);break}$&&Z(Y+131072);for(var On=Y+Ln;Y<On;Y+=4)m[Y]=m[Y-mn],m[Y+1]=m[Y+1-mn],m[Y+2]=m[Y+2-mn],m[Y+3]=m[Y+3-mn];Y=On}}b.l=nn,b.p=bn,b.b=Y,b.f=W,nn&&(W=1,b.m=an,b.d=tn,b.n=en)}while(!W);return Y==m.length?m:slc(m,0,Y)},et=new u8(0),zlv=function(u){((u[0]&15)!=8||u[0]>>>4>7||(u[0]<<8|u[1])%31)&&err(6,"invalid zlib data"),u[1]&32&&err(6,"invalid zlib data: preset dictionaries not supported")};function unzlibSync(u,m){return inflt((zlv(u),u.subarray(2,-4)),m)}var te=typeof TextEncoder<"u"&&new TextEncoder,td=typeof TextDecoder<"u"&&new TextDecoder,tds=0;try{td.decode(et,{stream:!0}),tds=1}catch{}var dutf8=function(u){for(var m="",b=0;;){var T=u[b++],$=(T>127)+(T>223)+(T>239);if(b+$>u.length)return[m,slc(u,b-1)];$?$==3?(T=((T&15)<<18|(u[b++]&63)<<12|(u[b++]&63)<<6|u[b++]&63)-65536,m+=String.fromCharCode(55296|T>>10,56320|T&1023)):$&1?m+=String.fromCharCode((T&31)<<6|u[b++]&63):m+=String.fromCharCode((T&15)<<12|(u[b++]&63)<<6|u[b++]&63):m+=String.fromCharCode(T)}};function strToU8(u,m){if(m){for(var b=new u8(u.length),T=0;T<u.length;++T)b[T]=u.charCodeAt(T);return b}if(te)return te.encode(u);for(var $=u.length,j=new u8(u.length+(u.length>>1)),Z=0,W=function(nn){j[Z++]=nn},T=0;T<$;++T){if(Z+5>j.length){var U=new u8(Z+8+($-T<<1));U.set(j),j=U}var Y=u.charCodeAt(T);Y<128||m?W(Y):Y<2048?(W(192|Y>>6),W(128|Y&63)):Y>55295&&Y<57344?(Y=65536+(Y&1023<<10)|u.charCodeAt(++T)&1023,W(240|Y>>18),W(128|Y>>12&63),W(128|Y>>6&63),W(128|Y&63)):(W(224|Y>>12),W(128|Y>>6&63),W(128|Y&63))}return slc(j,0,Z)}function strFromU8(u,m){if(m){for(var b="",T=0;T<u.length;T+=16384)b+=String.fromCharCode.apply(null,u.subarray(T,T+16384));return b}else{if(td)return td.decode(u);var $=dutf8(u),j=$[0],Z=$[1];return Z.length&&err(8),j}}const st=({name:u="",color:m="currentColor"},{slots:b})=>{var T;return h$4("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${u}-icon`],viewBox:"0 0 1024 1024",fill:m,"aria-label":`${u} icon`},(T=b.default)==null?void 0:T.call(b))};st.displayName="IconBase";const wt=(u,{slots:m})=>{var b;return((b=m.default)==null?void 0:b.call(m))||null},St=u=>{const m=getCurrentInstance();return typeof(m==null?void 0:m.appContext.components)=="object"&&(u in m.appContext.components||camelize(u)in m.appContext.components||capitalize(camelize(u))in m.appContext.components)},Mt=u=>{const m=useRouteLocale();return computed(()=>u[m.value])},Ut=(u,m)=>{let b=1;for(let T=0;T<u.length;T++)b+=u.charCodeAt(T),b+=b<<10,b^=b>>6;return b+=b<<3,b^=b>>11,b%m};class kt{constructor(){this.messageElements={};const m="message-container",b=document.getElementById(m);b?this.containerElement=b:(this.containerElement=document.createElement("div"),this.containerElement.id=m,document.body.appendChild(this.containerElement))}pop(m,b=2e3){const T=document.createElement("div"),$=Date.now();return T.className="message move-in",T.innerHTML=m,this.containerElement.appendChild(T),this.messageElements[$]=T,b>0&&setTimeout(()=>{this.close($)},b),$}close(m){if(m){const b=this.messageElements[m];b.className=b.className.replace("move-in",""),b.className+="move-out",b.addEventListener("animationend",()=>{b.remove(),delete this.messageElements[m]})}else Object.keys(this.messageElements).forEach(b=>this.close(Number(b)))}destroy(){document.body.removeChild(this.containerElement)}}const ot=/#.*$/u,at=u=>{const m=ot.exec(u);return m?m[0]:""},G=u=>decodeURI(u).replace(ot,"").replace(/(index)?\.(md|html)$/,""),Ht=(u,m)=>{if(m===void 0)return!1;const b=G(u.path),T=G(m),$=at(m);return $?$===u.hash&&(!T||b===T):b===T},Lt=u=>{const m=atob(u);return strFromU8(unzlibSync(strToU8(m,!0)))},ut=(u,...m)=>{const b=u.resolve(...m),T=b.matched[b.matched.length-1];if(!(T!=null&&T.redirect))return b;const{redirect:$}=T,j=isFunction$1($)?$(b):$,Z=isString$1(j)?{path:j}:j;return ut(u,{hash:b.hash,query:b.query,params:b.params,...Z})};var J$1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ct={exports:{}};(function(u,m){(function(b,T){u.exports=T()})(J$1,function(){var b=1e3,T=6e4,$=36e5,j="millisecond",Z="second",W="minute",U="hour",Y="day",nn="week",tn="month",an="quarter",en="year",on="date",sn="Invalid Date",cn=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,un=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,hn={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(kn){var rn=["th","st","nd","rd"],pn=kn%100;return"["+kn+(rn[(pn-20)%10]||rn[pn]||rn[0])+"]"}},fn=function(kn,rn,pn){var mn=String(kn);return!mn||mn.length>=rn?kn:""+Array(rn+1-mn.length).join(pn)+kn},An={s:fn,z:function(kn){var rn=-kn.utcOffset(),pn=Math.abs(rn),mn=Math.floor(pn/60),dn=pn%60;return(rn<=0?"+":"-")+fn(mn,2,"0")+":"+fn(dn,2,"0")},m:function kn(rn,pn){if(rn.date()<pn.date())return-kn(pn,rn);var mn=12*(pn.year()-rn.year())+(pn.month()-rn.month()),dn=rn.clone().add(mn,tn),yn=pn-dn<0,bn=rn.clone().add(mn+(yn?-1:1),tn);return+(-(mn+(pn-dn)/(yn?dn-bn:bn-dn))||0)},a:function(kn){return kn<0?Math.ceil(kn)||0:Math.floor(kn)},p:function(kn){return{M:tn,y:en,w:nn,d:Y,D:on,h:U,m:W,s:Z,ms:j,Q:an}[kn]||String(kn||"").toLowerCase().replace(/s$/,"")},u:function(kn){return kn===void 0}},En="en",vn={};vn[En]=hn;var ln=function(kn){return kn instanceof In},_n=function kn(rn,pn,mn){var dn;if(!rn)return En;if(typeof rn=="string"){var yn=rn.toLowerCase();vn[yn]&&(dn=yn),pn&&(vn[yn]=pn,dn=yn);var bn=rn.split("-");if(!dn&&bn.length>1)return kn(bn[0])}else{var Pn=rn.name;vn[Pn]=rn,dn=Pn}return!mn&&dn&&(En=dn),dn||!mn&&En},gn=function(kn,rn){if(ln(kn))return kn.clone();var pn=typeof rn=="object"?rn:{};return pn.date=kn,pn.args=arguments,new In(pn)},wn=An;wn.l=_n,wn.i=ln,wn.w=function(kn,rn){return gn(kn,{locale:rn.$L,utc:rn.$u,x:rn.$x,$offset:rn.$offset})};var In=function(){function kn(pn){this.$L=_n(pn.locale,null,!0),this.parse(pn)}var rn=kn.prototype;return rn.parse=function(pn){this.$d=function(mn){var dn=mn.date,yn=mn.utc;if(dn===null)return new Date(NaN);if(wn.u(dn))return new Date;if(dn instanceof Date)return new Date(dn);if(typeof dn=="string"&&!/Z$/i.test(dn)){var bn=dn.match(cn);if(bn){var Pn=bn[2]-1||0,Ln=(bn[7]||"0").substring(0,3);return yn?new Date(Date.UTC(bn[1],Pn,bn[3]||1,bn[4]||0,bn[5]||0,bn[6]||0,Ln)):new Date(bn[1],Pn,bn[3]||1,bn[4]||0,bn[5]||0,bn[6]||0,Ln)}}return new Date(dn)}(pn),this.$x=pn.x||{},this.init()},rn.init=function(){var pn=this.$d;this.$y=pn.getFullYear(),this.$M=pn.getMonth(),this.$D=pn.getDate(),this.$W=pn.getDay(),this.$H=pn.getHours(),this.$m=pn.getMinutes(),this.$s=pn.getSeconds(),this.$ms=pn.getMilliseconds()},rn.$utils=function(){return wn},rn.isValid=function(){return this.$d.toString()!==sn},rn.isSame=function(pn,mn){var dn=gn(pn);return this.startOf(mn)<=dn&&dn<=this.endOf(mn)},rn.isAfter=function(pn,mn){return gn(pn)<this.startOf(mn)},rn.isBefore=function(pn,mn){return this.endOf(mn)<gn(pn)},rn.$g=function(pn,mn,dn){return wn.u(pn)?this[mn]:this.set(dn,pn)},rn.unix=function(){return Math.floor(this.valueOf()/1e3)},rn.valueOf=function(){return this.$d.getTime()},rn.startOf=function(pn,mn){var dn=this,yn=!!wn.u(mn)||mn,bn=wn.p(pn),Pn=function(xn,Dn){var Vn=wn.w(dn.$u?Date.UTC(dn.$y,Dn,xn):new Date(dn.$y,Dn,xn),dn);return yn?Vn:Vn.endOf(Y)},Ln=function(xn,Dn){return wn.w(dn.toDate()[xn].apply(dn.toDate("s"),(yn?[0,0,0,0]:[23,59,59,999]).slice(Dn)),dn)},Tn=this.$W,$n=this.$M,Cn=this.$D,On="set"+(this.$u?"UTC":"");switch(bn){case en:return yn?Pn(1,0):Pn(31,11);case tn:return yn?Pn(1,$n):Pn(0,$n+1);case nn:var Rn=this.$locale().weekStart||0,Sn=(Tn<Rn?Tn+7:Tn)-Rn;return Pn(yn?Cn-Sn:Cn+(6-Sn),$n);case Y:case on:return Ln(On+"Hours",0);case U:return Ln(On+"Minutes",1);case W:return Ln(On+"Seconds",2);case Z:return Ln(On+"Milliseconds",3);default:return this.clone()}},rn.endOf=function(pn){return this.startOf(pn,!1)},rn.$set=function(pn,mn){var dn,yn=wn.p(pn),bn="set"+(this.$u?"UTC":""),Pn=(dn={},dn[Y]=bn+"Date",dn[on]=bn+"Date",dn[tn]=bn+"Month",dn[en]=bn+"FullYear",dn[U]=bn+"Hours",dn[W]=bn+"Minutes",dn[Z]=bn+"Seconds",dn[j]=bn+"Milliseconds",dn)[yn],Ln=yn===Y?this.$D+(mn-this.$W):mn;if(yn===tn||yn===en){var Tn=this.clone().set(on,1);Tn.$d[Pn](Ln),Tn.init(),this.$d=Tn.set(on,Math.min(this.$D,Tn.daysInMonth())).$d}else Pn&&this.$d[Pn](Ln);return this.init(),this},rn.set=function(pn,mn){return this.clone().$set(pn,mn)},rn.get=function(pn){return this[wn.p(pn)]()},rn.add=function(pn,mn){var dn,yn=this;pn=Number(pn);var bn=wn.p(mn),Pn=function($n){var Cn=gn(yn);return wn.w(Cn.date(Cn.date()+Math.round($n*pn)),yn)};if(bn===tn)return this.set(tn,this.$M+pn);if(bn===en)return this.set(en,this.$y+pn);if(bn===Y)return Pn(1);if(bn===nn)return Pn(7);var Ln=(dn={},dn[W]=T,dn[U]=$,dn[Z]=b,dn)[bn]||1,Tn=this.$d.getTime()+pn*Ln;return wn.w(Tn,this)},rn.subtract=function(pn,mn){return this.add(-1*pn,mn)},rn.format=function(pn){var mn=this,dn=this.$locale();if(!this.isValid())return dn.invalidDate||sn;var yn=pn||"YYYY-MM-DDTHH:mm:ssZ",bn=wn.z(this),Pn=this.$H,Ln=this.$m,Tn=this.$M,$n=dn.weekdays,Cn=dn.months,On=function(Dn,Vn,Bn,zn){return Dn&&(Dn[Vn]||Dn(mn,yn))||Bn[Vn].slice(0,zn)},Rn=function(Dn){return wn.s(Pn%12||12,Dn,"0")},Sn=dn.meridiem||function(Dn,Vn,Bn){var zn=Dn<12?"AM":"PM";return Bn?zn.toLowerCase():zn},xn={YY:String(this.$y).slice(-2),YYYY:this.$y,M:Tn+1,MM:wn.s(Tn+1,2,"0"),MMM:On(dn.monthsShort,Tn,Cn,3),MMMM:On(Cn,Tn),D:this.$D,DD:wn.s(this.$D,2,"0"),d:String(this.$W),dd:On(dn.weekdaysMin,this.$W,$n,2),ddd:On(dn.weekdaysShort,this.$W,$n,3),dddd:$n[this.$W],H:String(Pn),HH:wn.s(Pn,2,"0"),h:Rn(1),hh:Rn(2),a:Sn(Pn,Ln,!0),A:Sn(Pn,Ln,!1),m:String(Ln),mm:wn.s(Ln,2,"0"),s:String(this.$s),ss:wn.s(this.$s,2,"0"),SSS:wn.s(this.$ms,3,"0"),Z:bn};return yn.replace(un,function(Dn,Vn){return Vn||xn[Dn]||bn.replace(":","")})},rn.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},rn.diff=function(pn,mn,dn){var yn,bn=wn.p(mn),Pn=gn(pn),Ln=(Pn.utcOffset()-this.utcOffset())*T,Tn=this-Pn,$n=wn.m(this,Pn);return $n=(yn={},yn[en]=$n/12,yn[tn]=$n,yn[an]=$n/3,yn[nn]=(Tn-Ln)/6048e5,yn[Y]=(Tn-Ln)/864e5,yn[U]=Tn/$,yn[W]=Tn/T,yn[Z]=Tn/b,yn)[bn]||Tn,dn?$n:wn.a($n)},rn.daysInMonth=function(){return this.endOf(tn).$D},rn.$locale=function(){return vn[this.$L]},rn.locale=function(pn,mn){if(!pn)return this.$L;var dn=this.clone(),yn=_n(pn,mn,!0);return yn&&(dn.$L=yn),dn},rn.clone=function(){return wn.w(this.$d,this)},rn.toDate=function(){return new Date(this.valueOf())},rn.toJSON=function(){return this.isValid()?this.toISOString():null},rn.toISOString=function(){return this.$d.toISOString()},rn.toString=function(){return this.$d.toUTCString()},kn}(),Mn=In.prototype;return gn.prototype=Mn,[["$ms",j],["$s",Z],["$m",W],["$H",U],["$W",Y],["$M",tn],["$y",en],["$D",on]].forEach(function(kn){Mn[kn[1]]=function(rn){return this.$g(rn,kn[0],kn[1])}}),gn.extend=function(kn,rn){return kn.$i||(kn(rn,In,gn),kn.$i=!0),gn},gn.locale=_n,gn.isDayjs=ln,gn.unix=function(kn){return gn(1e3*kn)},gn.en=vn[En],gn.Ls=vn,gn.p={},gn})})(ct);var F$2=ct.exports,ft={exports:{}};(function(u,m){(function(b,T){u.exports=T()})(J$1,function(){return function(b,T,$){var j=T.prototype,Z=function(an){var en,on=an.date,sn=an.utc,cn={};if(!((en=on)instanceof Date||en instanceof Array||j.$utils().u(en)||en.constructor.name!=="Object")){if(!Object.keys(on).length)return new Date;var un=sn?$.utc():$();Object.keys(on).forEach(function(gn){var wn,In;cn[wn=gn,In=j.$utils().p(wn),In==="date"?"day":In]=on[gn]});var hn=cn.day||(cn.year||cn.month>=0?1:un.date()),fn=cn.year||un.year(),An=cn.month>=0?cn.month:cn.year||cn.day?0:un.month(),En=cn.hour||0,vn=cn.minute||0,ln=cn.second||0,_n=cn.millisecond||0;return sn?new Date(Date.UTC(fn,An,hn,En,vn,ln,_n)):new Date(fn,An,hn,En,vn,ln,_n)}return on},W=j.parse;j.parse=function(an){an.date=Z.bind(this)(an),W.bind(this)(an)};var U=j.set,Y=j.add,nn=j.subtract,tn=function(an,en,on,sn){sn===void 0&&(sn=1);var cn=Object.keys(en),un=this;return cn.forEach(function(hn){un=an.bind(un)(en[hn]*sn,hn)}),un};j.set=function(an,en){return en=en===void 0?an:en,an.constructor.name==="Object"?tn.bind(this)(function(on,sn){return U.bind(this)(sn,on)},en,an):U.bind(this)(an,en)},j.add=function(an,en){return an.constructor.name==="Object"?tn.bind(this)(Y,an,en):Y.bind(this)(an,en)},j.subtract=function(an,en){return an.constructor.name==="Object"?tn.bind(this)(Y,an,en,-1):nn.bind(this)(an,en)}}})})(ft);var Nt=ft.exports,ht={exports:{}};(function(u,m){(function(b,T){u.exports=T()})(J$1,function(){var b={year:0,month:1,day:2,hour:3,minute:4,second:5},T={};return function($,j,Z){var W,U=function(an,en,on){on===void 0&&(on={});var sn=new Date(an),cn=function(un,hn){hn===void 0&&(hn={});var fn=hn.timeZoneName||"short",An=un+"|"+fn,En=T[An];return En||(En=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:un,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:fn}),T[An]=En),En}(en,on);return cn.formatToParts(sn)},Y=function(an,en){for(var on=U(an,en),sn=[],cn=0;cn<on.length;cn+=1){var un=on[cn],hn=un.type,fn=un.value,An=b[hn];An>=0&&(sn[An]=parseInt(fn,10))}var En=sn[3],vn=En===24?0:En,ln=sn[0]+"-"+sn[1]+"-"+sn[2]+" "+vn+":"+sn[4]+":"+sn[5]+":000",_n=+an;return(Z.utc(ln).valueOf()-(_n-=_n%1e3))/6e4},nn=j.prototype;nn.tz=function(an,en){an===void 0&&(an=W);var on=this.utcOffset(),sn=this.toDate(),cn=sn.toLocaleString("en-US",{timeZone:an}),un=Math.round((sn-new Date(cn))/1e3/60),hn=Z(cn).$set("millisecond",this.$ms).utcOffset(15*-Math.round(sn.getTimezoneOffset()/15)-un,!0);if(en){var fn=hn.utcOffset();hn=hn.add(on-fn,"minute")}return hn.$x.$timezone=an,hn},nn.offsetName=function(an){var en=this.$x.$timezone||Z.tz.guess(),on=U(this.valueOf(),en,{timeZoneName:an}).find(function(sn){return sn.type.toLowerCase()==="timezonename"});return on&&on.value};var tn=nn.startOf;nn.startOf=function(an,en){if(!this.$x||!this.$x.$timezone)return tn.call(this,an,en);var on=Z(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return tn.call(on,an,en).tz(this.$x.$timezone,!0)},Z.tz=function(an,en,on){var sn=on&&en,cn=on||en||W,un=Y(+Z(),cn);if(typeof an!="string")return Z(an).tz(cn);var hn=function(vn,ln,_n){var gn=vn-60*ln*1e3,wn=Y(gn,_n);if(ln===wn)return[gn,ln];var In=Y(gn-=60*(wn-ln)*1e3,_n);return wn===In?[gn,wn]:[vn-60*Math.min(wn,In)*1e3,Math.max(wn,In)]}(Z.utc(an,sn).valueOf(),un,cn),fn=hn[0],An=hn[1],En=Z(fn).utcOffset(An);return En.$x.$timezone=cn,En},Z.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},Z.tz.setDefault=function(an){W=an}}})})(ht);var Wt=ht.exports,lt={exports:{}};(function(u,m){(function(b,T){u.exports=T()})(J$1,function(){var b="minute",T=/[+-]\d\d(?::?\d\d)?/g,$=/([+-]|\d\d)/g;return function(j,Z,W){var U=Z.prototype;W.utc=function(sn){var cn={date:sn,utc:!0,args:arguments};return new Z(cn)},U.utc=function(sn){var cn=W(this.toDate(),{locale:this.$L,utc:!0});return sn?cn.add(this.utcOffset(),b):cn},U.local=function(){return W(this.toDate(),{locale:this.$L,utc:!1})};var Y=U.parse;U.parse=function(sn){sn.utc&&(this.$u=!0),this.$utils().u(sn.$offset)||(this.$offset=sn.$offset),Y.call(this,sn)};var nn=U.init;U.init=function(){if(this.$u){var sn=this.$d;this.$y=sn.getUTCFullYear(),this.$M=sn.getUTCMonth(),this.$D=sn.getUTCDate(),this.$W=sn.getUTCDay(),this.$H=sn.getUTCHours(),this.$m=sn.getUTCMinutes(),this.$s=sn.getUTCSeconds(),this.$ms=sn.getUTCMilliseconds()}else nn.call(this)};var tn=U.utcOffset;U.utcOffset=function(sn,cn){var un=this.$utils().u;if(un(sn))return this.$u?0:un(this.$offset)?tn.call(this):this.$offset;if(typeof sn=="string"&&(sn=function(En){En===void 0&&(En="");var vn=En.match(T);if(!vn)return null;var ln=(""+vn[0]).match($)||["-",0,0],_n=ln[0],gn=60*+ln[1]+ +ln[2];return gn===0?0:_n==="+"?gn:-gn}(sn),sn===null))return this;var hn=Math.abs(sn)<=16?60*sn:sn,fn=this;if(cn)return fn.$offset=hn,fn.$u=sn===0,fn;if(sn!==0){var An=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(fn=this.local().add(hn+An,b)).$offset=hn,fn.$x.$localOffset=An}else fn=this.utc();return fn};var an=U.format;U.format=function(sn){var cn=sn||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return an.call(this,cn)},U.valueOf=function(){var sn=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*sn},U.isUTC=function(){return!!this.$u},U.toISOString=function(){return this.toDate().toISOString()},U.toString=function(){return this.toDate().toUTCString()};var en=U.toDate;U.toDate=function(sn){return sn==="s"&&this.$offset?W(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():en.call(this)};var on=U.diff;U.diff=function(sn,cn,un){if(sn&&this.$u===sn.$u)return on.call(this,sn,cn,un);var hn=this.local(),fn=W(sn).local();return on.call(hn,fn,cn,un)}}})})(lt);var Zt=lt.exports;F$2.extend(Nt),F$2.extend(Zt),F$2.extend(Wt);const Q$1=(u,m)=>{if(u){if(F$2(u instanceof Date?u:u.trim()).isValid()){const T=m?F$2(u).tz(m):F$2(u),$=T.year(),j=T.month()+1,Z=T.date(),W=T.hour(),U=T.minute(),Y=T.second(),nn=T.millisecond(),tn=W===0&&U===0&&Y===0&&nn===0;return{value:T.toDate(),info:{year:$,month:j,day:Z,...tn?{}:{hour:W,minute:U,second:Y}},type:tn?"date":"full"}}const b=/(?:(\d{2,4})[/-](\d{1,2})[/-](\d{1,2}))?\s*(?:(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/u.exec(u.trim());if(b){const[,T,$,j,Z,W,U]=b,Y=cn=>typeof cn>"u"?void 0:Number(cn),nn=cn=>cn&&cn<100?cn+2e3:cn,tn=cn=>Z&&W&&!U?0:cn,an={year:nn(Y(T)),month:Y($),day:Y(j),hour:Y(Z),minute:Y(W),second:tn(Y(U))},en=T===void 0&&$===void 0&&j===void 0,on=Z===void 0&&W===void 0&&U===void 0,sn=F$2({...an,month:an.month-1}).toDate();return{value:en?void 0:sn,info:on?{year:an.year,month:an.month,day:an.day}:en?{hour:an.hour,minute:an.minute,second:an.second}:an,type:en?"time":on?"date":"full"}}}return null},K=(u,...m)=>{if(m.length===0)return u;const b=m.shift()||{};return Object.keys(b).forEach(T=>{typeof u[T]=="object"&&!Array.isArray(u[T])&&typeof b[T]=="object"&&!Array.isArray(b[T])?K(u[T],b[T]):typeof b[T]=="object"?Array.isArray(b[T])?u[T]=[...b[T]]:u[T]={...b[T]}:u[T]=b[T]}),K(u,...m)},Pt=(u,m=!1)=>u?Array.isArray(u)?u.map(b=>typeof b=="string"?{name:b}:b):typeof u=="string"?[{name:u}]:typeof u=="object"&&u.name?[u]:(console.error(`Expect 'author' to be \`AuthorInfo[] | AuthorInfo | string[] | string ${m?"":"| false"} | undefined\`, but got`,u),[]):[],X=(u,m)=>{if(u){if(Array.isArray(u))return u;if(typeof u=="string")return[u];console.error(`Expect ${m||"value"} to be \`string[] | string | undefined\`, but got`,u)}return[]},Rt=u=>X(u,"category"),Bt=u=>X(u,"tag"),backToTop="",a$2=()=>h$4(st,{name:"back-to-top"},()=>[h$4("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),h$4("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);a$2.displayName="BackToTopIcon";var h$3=defineComponent({name:"BackToTop",props:{threshold:{type:Number,default:300}},setup(u){const m=usePageFrontmatter(),b=Mt({"/tw/":{backToTop:"返回頂部"},"/":{backToTop:"返回顶部"}}),T=ref(0),$=computed(()=>m.value.backToTop!==!1&&T.value>u.threshold),j=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;return onMounted(()=>{T.value=j()}),useEventListener("scroll",useDebounceFn(()=>{T.value=j()},100)),()=>h$4(Transition,{name:"fade"},()=>$.value?h$4("button",{class:"back-to-top","aria-label":b.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"}),T.value=0}},h$4(a$2)):null)}});const srOnly="",clientConfig1=defineClientConfig({enhance:({app:u})=>{u.component("Badge",t$1),u.component("FontIcon",i$3)},setup:()=>{useStyleTag('@import url("//at.alicdn.com/t/c/font_3692145_8t0j4wtzpjk.css");',{id:"icon-assets"})},rootComponents:[()=>h$4(h$3,{threshold:300})]});function r$2(u,m,b){var T,$,j;m===void 0&&(m=50),b===void 0&&(b={});var Z=(T=b.isImmediate)!=null&&T,W=($=b.callback)!=null&&$,U=b.maxWait,Y=Date.now(),nn=[];function tn(){if(U!==void 0){var en=Date.now()-Y;if(en+m>=U)return U-en}return m}var an=function(){var en=[].slice.call(arguments),on=this;return new Promise(function(sn,cn){var un=Z&&j===void 0;if(j!==void 0&&clearTimeout(j),j=setTimeout(function(){if(j=void 0,Y=Date.now(),!Z){var fn=u.apply(on,en);W&&W(fn),nn.forEach(function(An){return(0,An.resolve)(fn)}),nn=[]}},tn()),un){var hn=u.apply(on,en);return W&&W(hn),sn(hn)}nn.push({resolve:sn,reject:cn})})};return an.cancel=function(en){j!==void 0&&clearTimeout(j),nn.forEach(function(on){return(0,on.reject)(en)}),nn=[]},an}const useActiveHeaderLinks=({headerLinkSelector:u,headerAnchorSelector:m,delay:b,offset:T=5})=>{const $=useRouter(),Z=r$2(()=>{var sn,cn;const W=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(W-0)<T){updateHash($,"");return}const Y=window.innerHeight+W,nn=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),tn=Math.abs(nn-Y)<T,an=Array.from(document.querySelectorAll(u)),on=Array.from(document.querySelectorAll(m)).filter(un=>an.some(hn=>hn.hash===un.hash));for(let un=0;un<on.length;un++){const hn=on[un],fn=on[un+1],An=W>=(((sn=hn.parentElement)==null?void 0:sn.offsetTop)??0)-T,En=!fn||W<(((cn=fn.parentElement)==null?void 0:cn.offsetTop)??0)-T;if(!(An&&En))continue;const ln=decodeURIComponent($.currentRoute.value.hash),_n=decodeURIComponent(hn.hash);if(ln===_n)return;if(tn){for(let gn=un+1;gn<on.length;gn++)if(ln===decodeURIComponent(on[gn].hash))return}updateHash($,_n);return}},b);onMounted(()=>{window.addEventListener("scroll",Z)}),onBeforeUnmount(()=>{window.removeEventListener("scroll",Z)})},updateHash=async(u,m)=>{const{scrollBehavior:b}=u.options;u.options.scrollBehavior=void 0,await u.replace({query:u.currentRoute.value.query,hash:m,force:!0}).finally(()=>u.options.scrollBehavior=b)},headerLinkSelector=".sidebar-link, .toc-link",headerAnchorSelector=".header-anchor",delay=200,offset=5,clientConfig2=defineClientConfig({setup(){useActiveHeaderLinks({headerLinkSelector,headerAnchorSelector,delay,offset})}}),vars$1="",externalLinkIcon="",svg=h$4("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[h$4("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),h$4("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),ExternalLinkIcon=defineComponent({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(u){const m=useRouteLocale(),b=computed(()=>u.locales[m.value]??{openInNewWindow:"open in new window"});return()=>h$4("span",[svg,h$4("span",{class:"external-link-icon-sr-only"},b.value.openInNewWindow)])}}),locales={},clientConfig3=defineClientConfig({enhance({app:u}){u.component("ExternalLinkIcon",h$4(ExternalLinkIcon,{locales}))}});const nprogress$1={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:u=>{const m=nprogress$1.isStarted();u=clamp(u,nprogress$1.settings.minimum,1),nprogress$1.status=u===1?null:u;const b=nprogress$1.render(!m),T=b.querySelector(nprogress$1.settings.barSelector),$=nprogress$1.settings.speed,j=nprogress$1.settings.easing;return b.offsetWidth,queue(Z=>{css(T,{transform:"translate3d("+toBarPerc(u)+"%,0,0)",transition:"all "+$+"ms "+j}),u===1?(css(b,{transition:"none",opacity:"1"}),b.offsetWidth,setTimeout(function(){css(b,{transition:"all "+$+"ms linear",opacity:"0"}),setTimeout(function(){nprogress$1.remove(),Z()},$)},$)):setTimeout(()=>Z(),$)}),nprogress$1},isStarted:()=>typeof nprogress$1.status=="number",start:()=>{nprogress$1.status||nprogress$1.set(0);const u=()=>{setTimeout(()=>{nprogress$1.status&&(nprogress$1.trickle(),u())},nprogress$1.settings.trickleSpeed)};return nprogress$1.settings.trickle&&u(),nprogress$1},done:u=>!u&&!nprogress$1.status?nprogress$1:nprogress$1.inc(.3+.5*Math.random()).set(1),inc:u=>{let m=nprogress$1.status;return m?(typeof u!="number"&&(u=(1-m)*clamp(Math.random()*m,.1,.95)),m=clamp(m+u,0,.994),nprogress$1.set(m)):nprogress$1.start()},trickle:()=>nprogress$1.inc(Math.random()*nprogress$1.settings.trickleRate),render:u=>{if(nprogress$1.isRendered())return document.getElementById("nprogress");addClass(document.documentElement,"nprogress-busy");const m=document.createElement("div");m.id="nprogress",m.innerHTML=nprogress$1.settings.template;const b=m.querySelector(nprogress$1.settings.barSelector),T=u?"-100":toBarPerc(nprogress$1.status||0),$=document.querySelector(nprogress$1.settings.parent);return css(b,{transition:"all 0 linear",transform:"translate3d("+T+"%,0,0)"}),$!==document.body&&addClass($,"nprogress-custom-parent"),$==null||$.appendChild(m),m},remove:()=>{removeClass(document.documentElement,"nprogress-busy"),removeClass(document.querySelector(nprogress$1.settings.parent),"nprogress-custom-parent");const u=document.getElementById("nprogress");u&&removeElement(u)},isRendered:()=>!!document.getElementById("nprogress")},clamp=(u,m,b)=>u<m?m:u>b?b:u,toBarPerc=u=>(-1+u)*100,queue=function(){const u=[];function m(){const b=u.shift();b&&b(m)}return function(b){u.push(b),u.length===1&&m()}}(),css=function(){const u=["Webkit","O","Moz","ms"],m={};function b(Z){return Z.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(W,U){return U.toUpperCase()})}function T(Z){const W=document.body.style;if(Z in W)return Z;let U=u.length;const Y=Z.charAt(0).toUpperCase()+Z.slice(1);let nn;for(;U--;)if(nn=u[U]+Y,nn in W)return nn;return Z}function $(Z){return Z=b(Z),m[Z]||(m[Z]=T(Z))}function j(Z,W,U){W=$(W),Z.style[W]=U}return function(Z,W){for(const U in W){const Y=W[U];Y!==void 0&&Object.prototype.hasOwnProperty.call(W,U)&&j(Z,U,Y)}}}(),hasClass=(u,m)=>(typeof u=="string"?u:classList(u)).indexOf(" "+m+" ")>=0,addClass=(u,m)=>{const b=classList(u),T=b+m;hasClass(b,m)||(u.className=T.substring(1))},removeClass=(u,m)=>{const b=classList(u);if(!hasClass(u,m))return;const T=b.replace(" "+m+" "," ");u.className=T.substring(1,T.length-1)},classList=u=>(" "+(u.className||"")+" ").replace(/\s+/gi," "),removeElement=u=>{u&&u.parentNode&&u.parentNode.removeChild(u)},vars="",nprogress="",useNprogress=()=>{onMounted(()=>{const u=useRouter(),m=new Set;m.add(u.currentRoute.value.path),u.beforeEach(b=>{m.has(b.path)||nprogress$1.start()}),u.afterEach(b=>{m.add(b.path),nprogress$1.done()})})},clientConfig4=defineClientConfig({setup(){useNprogress()}}),themeData$1=JSON.parse('{"blog":{"medias":{"Gitee":"https://www.gitee.com/passwordgloo","GitHub":"https://github.com/passwordgloo","QQ":"http://wpa.qq.com/msgrd?v=3&uin=1943888301&site=qq&menu=yes","Qzone":"https://1943888301.qzone.qq.com","Steam":"https://steamcommunity.com/id/passwordgloo","Weibo":"https://weibo.com/passwordgloo"}},"encrypt":{},"pure":false,"darkmode":"switch","themeColor":{"blue":"#2196f3","red":"#FF6347","green":"#3eaf7c","orange":"#FF8C00","violet":"#FF00FF"},"fullscreen":false,"locales":{"/tw/":{"blog":{"description":"預見你真好","intro":"/tc/intro.html"},"repoDisplay":true,"navbarIcon":true,"navbarAutoHide":"mobile","hideSiteNameOnMobile":true,"sidebar":{"/tw/c/":"structure","/tw/css/":"structure","/javascript/":"structure","/tw/markdown/":"structure","/politics/law/":"structure","/politics/history/":"structure","/politics/mzdzt/":"structure","/politics/principle/":"structure","/tool/mysql/":"structure","/education/china/":"structure","/education/edu_psy/":"structure","/education/foreign/":"structure","/education/principle/":"structure"},"sidebarIcon":true,"headerDepth":2,"lang":"zh-TW","navbarLocales":{"langName":"繁體中文","selectLangAriaLabel":"選擇語言"},"metaLocales":{"author":"作者","date":"寫作日期","origin":"原創","views":"訪問量","category":"分類","tag":"標籤","readingTime":"閱讀時間","words":"字數","toc":"此頁內容","prev":"上一頁","next":"下一頁","lastUpdated":"上次編輯於","contributors":"貢獻者","editLink":"在 GitHub 上編輯此頁"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分類","tag":"標籤","timeline":"時間軸","timelineTitle":"昨日不在","all":"全部","intro":"個人介紹","star":"收藏"},"paginationLocales":{"prev":"上一頁","next":"下一頁","navigate":"跳轉到","action":"前往","errorText":"請輸入 1 到 $page 之前的頁碼！"},"outlookLocales":{"themeColor":"主題色","darkmode":"主題模式","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"頁面已加密","placeholder":"輸入密碼","remember":"記憶密碼","errorHint":"請輸入正確密碼"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundMsg":["這裡什麼也沒有","我們是怎麼來到這兒的？","這 是 四 零 四 !","看起来你訪問了一個失效的鏈結"],"back":"返回上一頁","home":"帶我回家","openInNewWindow":"Open in new window"},"author":{"name":"passwordgloo","url":"https://www.yuque.com/passwordgloo"},"logo":"avator.png","repo":"passwordgloo/passwordgloo.github.io","docsDir":"src","pageInfo":["Author","Original","Date","Category","Tag","ReadingTime"],"docsBranch":"study","navbar":["/tw/",{"text":"圖書","icon":"book","children":[{"text":"計算機","icon":"bookmark","link":"computer"},{"text":"教育學","icon":"bookmark","link":"education"},{"text":"政治","icon":"bookmark","link":"politics"}]},{"text":"語言","icon":"code","children":[{"text":"標記美化","icon":"pencil","prefix":"/","children":[{"text":"CSS","icon":"css","link":"tw/css/intro.md"},{"text":"HTML","icon":"html","link":"tw/html"},{"text":"Markdown","icon":"markdown","link":"tw/markdown/intro.md"}]},{"text":"編程語言","icon":"programme","prefix":"/","children":[{"text":"C","icon":"code","link":"tw/c/design-1.md"},{"text":"Java","icon":"java","link":"java"},{"text":"Javascript","icon":"js","link":"javascript"},{"text":"PHP","icon":"php","link":"php"},{"text":"Python","icon":"python","link":"python"}]}]},{"text":"軟件","icon":"software","prefix":"/","children":[{"text":"Office","icon":"office","link":"office"},{"text":"Adobe","icon":"adobe","link":"adobe"},{"text":"工具","icon":"tool","link":"tw/tool"}]},{"text":"平臺","icon":"platform","prefix":"/","children":[{"text":"Android","icon":"android","link":"android"},{"text":"Ubuntu","icon":"ubuntu","link":"tw/ubuntu"},{"text":"Linux","icon":"linux","link":"linux"}]}],"footer":"","displayFooter":true},"/":{"blog":{"description":"等风来，不如追风去","intro":"/intro.html"},"repoDisplay":true,"navbarIcon":true,"navbarAutoHide":"mobile","hideSiteNameOnMobile":true,"sidebar":{"/c/":"structure","/css/":"structure","/javascript/":"structure","/markdown/":"structure","/politics/law/":"structure","/politics/history/":"structure","/politics/mzdzt/":"structure","/politics/principle/":"structure","/tool/mysql/":"structure","/education/china/":"structure","/education/edu_psy/":"structure","/education/foreign/":"structure","/education/principle/":"structure"},"sidebarIcon":true,"headerDepth":2,"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"author":{"name":"passwordgloo","url":"https://www.yuque.com/passwordgloo"},"logo":"avator.png","repo":"passwordgloo/passwordgloo.github.io","docsDir":"src","pageInfo":["Author","Original","Date","Category","Tag","ReadingTime"],"docsBranch":"study","navbar":["/",{"text":"图书","icon":"book","children":[{"text":"计算机","icon":"bookmark","link":"computer"},{"text":"教育学","icon":"bookmark","link":"education"},{"text":"政治","icon":"bookmark","link":"politics"}]},{"text":"语言","icon":"code","children":[{"text":"标记美化","icon":"pencil","prefix":"/","children":[{"text":"CSS","icon":"css","link":"css/intro.md"},{"text":"HTML","icon":"html","link":"html"},{"text":"Markdown","icon":"markdown","link":"markdown/intro.md"}]},{"text":"编程语言","icon":"programme","prefix":"/","children":[{"text":"C","icon":"code","link":"c/design-1.md"},{"text":"Java","icon":"java","link":"java"},{"text":"Javascript","icon":"js","link":"javascript"},{"text":"PHP","icon":"php","link":"php"},{"text":"Python","icon":"python","link":"python"}]}]},{"text":"软件","icon":"software","prefix":"/","children":[{"text":"Office","icon":"office","link":"office"},{"text":"Adobe","icon":"adobe","link":"adobe"},{"text":"工具","icon":"tool","link":"tool"}]},{"text":"平台","icon":"platform","prefix":"/","children":[{"text":"Android","icon":"android","link":"android"},{"text":"Ubuntu","icon":"ubuntu","link":"ubuntu"},{"text":"Linux","icon":"linux","link":"linux"}]}],"footer":"","displayFooter":true,"toc":true,"lastUpdated":true}}}'),themeData=ref(themeData$1),useThemeData$1=()=>themeData,themeLocaleDataSymbol=Symbol(""),useThemeLocaleData$1=()=>{const u=inject(themeLocaleDataSymbol);if(!u)throw new Error("useThemeLocaleData() is called without provider.");return u},resolveThemeLocaleData=(u,m)=>{var b;return{...u,...(b=u.locales)==null?void 0:b[m]}},clientConfig5=defineClientConfig({enhance({app:u}){const m=useThemeData$1(),b=u._context.provides[routeLocaleSymbol],T=computed(()=>resolveThemeLocaleData(m.value,b.value));u.provide(themeLocaleDataSymbol,T),Object.defineProperties(u.config.globalProperties,{$theme:{get(){return m.value}},$themeLocale:{get(){return T.value}}})}}),giscus="",e$1={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/dark.css",repo:"vuepress-theme-hope/giscus-discussions",repoId:"R_kgDOG_Pt2A",category:"Announcements",categoryId:"DIC_kwDOG_Pt2M4COD69"},k$5=Boolean(e$1.categoryId),i$1=["de","gsw","en","es","fr","id","it","ja","ko","pl","ro","ru","tr","vi","zh-CN","zh-TW"];var P$3=defineComponent({name:"GiscusComment",props:{darkmode:Boolean},setup(u){const m=usePageFrontmatter(),b=useRoute(),T=ref(!1),$=computed(()=>{const W=usePageLang().value;if(i$1.includes(W))return W;const U=W.split("-")[0];return i$1.includes(U)?U:"en"}),j=computed(()=>{if(!k$5)return!1;const W=e$1.comment!==!1,U=m.value.comment;return Boolean(U)||W!==!1&&U!==!1}),Z=computed(()=>({repo:e$1.repo,repoId:e$1.repoId,category:e$1.category,categoryId:e$1.categoryId,lang:$.value,theme:u.darkmode?e$1.darkTheme:e$1.lightTheme,mapping:e$1.mapping||"pathname",term:withBase(b.path),inputPosition:e$1.inputPosition||"top",reactionsEnabled:e$1.reactionsEnabled!==!1?"1":"0",strict:e$1.strict!==!1?"1":"0",loading:e$1.lazyLoading!==!1?"lazy":"eager",emitMetadata:"0"}));return onMounted(async()=>{await __vitePreload(()=>import("./giscus-59cf0b2d.js"),[]),T.value=!0}),()=>h$4("div",{class:["giscus-wrapper",{"input-top":e$1.inputPosition!=="bottom"}],style:{display:j.value?"block":"none"}},T.value?h$4("giscus-widget",Z.value):h$4("div",{style:"text-align:center"},"Loading..."))}});const l$1={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/dark.css",repo:"vuepress-theme-hope/giscus-discussions",repoId:"R_kgDOG_Pt2A",category:"Announcements",categoryId:"DIC_kwDOG_Pt2M4COD69"}.comment!==!1;var s=defineClientConfig({enhance:({app:u})=>{const m=defineComponent({name:"CommentService",props:{darkmode:Boolean},setup(b){const T=usePageFrontmatter(),$=computed(()=>T.value.comment||l$1&&T.value.comment!==!1);return()=>h$4(P$3,{darkmode:b.darkmode,style:{display:$.value?"block":"none"}})}});u.component("CommentService",m)}});const message="",balloon="",button="",O$2=500,A$1=2e3,L$1={"/tw/":{copy:"複製代碼",copied:"已複製",hint:"複製成功"},"/":{copy:"复制代码",copied:"已复制",hint:"复制成功"}},d$3='.theme-hope-content div[class*="language-"] pre',g$1=!1,S$2=async u=>{try{return navigator.clipboard.writeText(u)}catch{const m=document.createElement("textarea"),b=document.activeElement;m.value=u,m.setAttribute("readonly",""),m.style.contain="strict",m.style.position="absolute",m.style.left="-9999px",m.style.fontSize="12pt";const T=document.getSelection(),$=T?T.rangeCount>0&&T.getRangeAt(0):null;document.body.appendChild(m),m.select(),m.selectionStart=0,m.selectionEnd=u.length,document.execCommand("copy"),document.body.removeChild(m),$&&(T.removeAllRanges(),T.addRange($)),b&&b.focus()}},_$3='<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#06a35a"><path d="M822.812 824.618c-83.076 81.992-188.546 124.614-316.05 127.865-122.085-3.251-223.943-45.873-305.935-127.865S76.213 640.406 72.962 518.682c3.251-127.503 45.873-232.973 127.865-316.05 81.992-83.075 184.211-126.058 305.936-129.309 127.503 3.251 232.973 46.234 316.049 129.31 83.076 83.076 126.059 188.546 129.31 316.05-2.89 121.723-46.234 223.943-129.31 305.935zM432.717 684.111c3.973 3.974 8.307 5.78 13.364 6.14 5.057.362 9.753-1.444 13.365-5.417l292.57-287.515c3.974-3.973 5.78-8.307 5.78-13.364s-1.806-9.753-5.78-13.365l1.807 1.806c-3.973-3.973-8.669-5.779-14.087-6.14-5.418-.361-10.475 1.445-14.809 5.418L460.529 592.006c-3.973 3.25-8.669 4.695-14.448 4.695-5.78 0-10.836-1.445-15.531-3.973l-94.273-72.962c-4.335-3.251-9.392-4.335-14.448-3.973s-9.392 3.25-12.642 7.585l-2.89 3.973c-3.25 4.334-4.334 9.391-3.973 14.81.722 5.417 2.528 10.113 5.779 14.086L432.717 684.11z"/></svg>',y$2=()=>navigator?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/iu.test(navigator.userAgent):!1,p$1=new Map,w$2=()=>{const u=useRoute(),m=Mt(L$1);let b;const T=Z=>{if(!Z.hasAttribute("copy-code-registered")){const W=document.createElement("button");W.classList.add("copy-code-button"),W.innerHTML='<div class="copy-icon" />',W.setAttribute("aria-label",m.value.copy),W.setAttribute("data-copied",m.value.copied),W.setAttribute("data-balloon-pos","left"),Z.parentElement&&Z.parentElement.insertBefore(W,Z),Z.setAttribute("copy-code-registered","")}},$=()=>{setTimeout(()=>{document.querySelectorAll(d$3).forEach(T)},O$2)},j=(Z,W,U)=>{let{innerText:Y=""}=W;/language-(shellscript|shell|bash|sh|zsh)/.test(Z.classList.toString())&&(Y=Y.replace(/^ *(\$|>) /gm,"")),S$2(Y).then(()=>{U.classList.add("copied"),clearTimeout(p$1.get(U));const nn=setTimeout(()=>{U.classList.remove("copied"),U.blur(),p$1.delete(U)},2e3);p$1.set(U,nn),b.pop(`${_$3}<span>${m.value.hint} 🎉</span>`,A$1)})};onMounted(()=>{b=new kt,(!y$2()||g$1)&&$(),window.addEventListener("click",Z=>{const W=Z.target;if(W.matches('div[class*="language-"] > button.copy')){const U=W.parentElement,Y=W.nextElementSibling;Y&&j(U,Y,W)}else if(W.matches('div[class*="language-"] div.copy-icon')){const U=W.parentElement,Y=U.parentElement,nn=U.nextElementSibling;nn&&j(Y,nn,U)}})}),watch(()=>u.path,()=>{(!y$2()||g$1)&&$()})};var P$2=defineClientConfig({setup:()=>{w$2()}});const chart="",LoadingIcon$1=()=>h$4(st,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(u=>h$4("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$4("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:u}),h$4("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:u})]))),parseChartConfig=(config,type)=>{if(type==="json")return JSON.parse(config);const exports={},module={exports};return eval(config),module.exports};var ChartJS=defineComponent({name:"ChartJS",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(u){const m=ref(),b=ref(),T=ref(!0);return onMounted(()=>{Promise.all([__vitePreload(()=>import("./auto-8dee5273.js"),[]),new Promise($=>setTimeout($,500))]).then(([{default:$}])=>{$.defaults.maintainAspectRatio=!1;const j=parseChartConfig(Lt(u.config),u.type),Z=b.value.getContext("2d");new $(Z,j),T.value=!1})}),()=>[u.title?h$4("div",{class:"chart-title"},decodeURIComponent(u.title)):null,T.value?h$4("div",{class:"chart-loading-wrapper"},h$4(LoadingIcon$1)):null,h$4("div",{ref:m,class:"chart-wrapper",id:u.id,style:{display:T.value?"none":"block"}},h$4("canvas",{ref:b,height:400}))]}});const codeTabs="",o$1=useStorage("VUEPRESS_CODE_TAB_STORE",{});var h$2=defineComponent({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},setup(u,{slots:m}){const b=ref((()=>{if(u.tabId){const U=u.data.findIndex(({title:Y,value:nn=Y})=>o$1.value[u.tabId]===nn);if(U!==-1)return U}return u.active})()),T=ref([]),$=()=>{if(u.tabId){const{title:U,value:Y=U}=u.data[b.value];o$1.value[u.tabId]=Y}},j=(U=b.value)=>{b.value=U<T.value.length-1?U+1:0,T.value[b.value].focus()},Z=(U=b.value)=>{b.value=U>0?U-1:T.value.length-1,T.value[b.value].focus()},W=(U,Y)=>{if(U.key===" "||U.key==="Enter"?(U.preventDefault(),b.value=Y):U.key==="ArrowRight"?(U.preventDefault(),j()):U.key==="ArrowLeft"&&(U.preventDefault(),Z()),u.tabId){const{title:nn,value:tn=nn}=u.data[b.value];o$1.value[u.tabId]=tn}};return watch(()=>o$1.value[u.tabId],(U,Y)=>{if(u.tabId&&U!==Y){const nn=u.data.findIndex(({title:tn,value:an=tn})=>an===U);nn!==-1&&(b.value=nn)}}),()=>h$4(ClientOnly,()=>u.data.length?h$4("div",{class:"code-tabs"},[h$4("div",{class:"code-tabs-nav",role:"tablist"},u.data.map(({title:U},Y)=>{const nn=Y===b.value;return h$4("button",{ref:tn=>{tn&&(T.value[Y]=tn)},class:["code-tabs-nav-tab",{active:nn}],role:"tab","aria-controls":`codetab-${u.id}-${Y}`,"aria-selected":nn,onClick:()=>{b.value=Y,$()},onKeydown:tn=>W(tn,Y)},U)})),u.data.map(({title:U,value:Y=U},nn)=>{var tn;const an=nn===b.value;return h$4("div",{class:["code-tab",{active:an}],id:`codetab-${u.id}-${nn}`,role:"tabpanel","aria-expanded":an},(tn=m[`tab${nn}`])==null?void 0:tn.call(m,{title:U,value:Y,isActive:an}))})]):null)}});const index$2="",codeDemo="",M$1=()=>h$4(st,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(u=>h$4("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$4("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:u}),h$4("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:u})]))),O$1='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',N='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg" width="228.516" height="200"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',L={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"},C$2={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},A=(u,m,b)=>{const T=document.createElement(u);return m&&Object.keys(m).forEach($=>{if($.indexOf("data"))T[$]=m[$];else{const j=$.replace("data","");T.dataset[j]=m[$]}}),b&&b.forEach($=>{T.appendChild($)}),T},w$1=u=>({...L,...u,jsLib:Array.from(new Set([...L.jsLib||[],...u.jsLib||[]])),cssLib:Array.from(new Set([...L.cssLib||[],...u.cssLib||[]]))}),v=(u,m)=>{if(u[m]!==void 0)return u[m];const b=new Promise(T=>{var $;const j=document.createElement("script");j.src=m,($=document.querySelector("body"))==null||$.appendChild(j),j.onload=()=>{T()}});return u[m]=b,b},k$4=(u,m)=>{if(m.css&&Array.from(u.childNodes).every(b=>b.nodeName!=="STYLE")){const b=A("style",{innerHTML:m.css});u.appendChild(b)}},D=(u,m,b)=>{const T=b.getScript();if(T&&Array.from(m.childNodes).every($=>$.nodeName!=="SCRIPT")){const $=document.createElement("script");$.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${u} .code-demo-container').shadowRoot;
${T}}`)),m.appendChild($)}},R=u=>{const m=Object.keys(u),b={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(T=>{const $=m.filter(j=>C$2[T].types.includes(j));if($.length){const j=$[0];b[T]=[u[j].replace(/^\n|\n$/g,""),C$2[T].map[j]||j]}}),b.isLegal=(!b.html.length||b.html[1]==="none")&&(!b.js.length||b.js[1]==="none")&&(!b.css.length||b.css[1]==="none"),b},x=u=>u.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),_$2=u=>`<div id="app">
${x(u)}
</div>`,B=u=>`${u.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,V=u=>u.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),q=u=>`(function(exports){var module={};module.exports=exports;${u};return module.exports.__esModule?module.exports.default:module.exports;})({})`,z=(u,m)=>{const b=w$1(m),T=u.js[0]||"";return{...b,html:x(u.html[0]||""),js:T,css:u.css[0]||"",isLegal:u.isLegal,getScript:()=>{var $;return b.useBabel?(($=window.Babel.transform(T,{presets:["es2015"]}))==null?void 0:$.code)||"":T}}},P$1=(u,m)=>{const b=w$1(m),T=u.html[0]||"",$=/<template>([\s\S]+)<\/template>/u.exec(T),j=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u.exec(T),Z=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u.exec(T),W=$?$[1].replace(/^\n|\n$/g,""):"",[U="",Y=""]=j?[j[4].replace(/^\n|\n$/g,""),j[3]]:[],[nn="",tn=""]=Z?[Z[4].replace(/^\n|\n$/g,""),Z[3]]:[],an=Y===""&&(tn===""||tn==="css");return{...b,html:_$2(W),js:V(U),css:nn,isLegal:an,jsLib:[b.vue,...b.jsLib],getScript:()=>{var en,on;const sn=m.useBabel?((on=(en=window.Babel)==null?void 0:en.transform(U,{presets:["es2015"]}))==null?void 0:on.code)||"":U.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${q(sn)};appOptions.template=\`${W.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},H$1=(u,m)=>{const b=w$1(m);return{...b,html:_$2(""),js:B(u.js[0]||""),css:u.css[0]||(u.js[0]?u.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:u.isLegal,jsLib:[b.react,b.reactDOM,...b.jsLib],jsx:!0,getScript:()=>{var T,$;const j=(($=(T=window.Babel)==null?void 0:T.transform(u.js[0]||"",{presets:["es2015","react"]}))==null?void 0:$.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${q(j)}))`}}},h$1={},I$1=u=>Promise.all([v(h$1,u.babel),v(h$1,u.react),v(h$1,u.reactDOM)]),J=u=>{const m=[v(h$1,u.vue)];return u.useBabel&&m.push(v(h$1,u.babel)),Promise.all(m)},Q=u=>u.useBabel?v(h$1,u.babel):Promise.resolve();var F$1=defineComponent({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},setup(u,{slots:m}){const b=ref(!1),T=ref(),$=ref(),j=ref("0"),Z=ref(!1),W=computed(()=>JSON.parse(u.config?Lt(u.config):"{}")),U=computed(()=>{const en=JSON.parse(Lt(u.code));return R(en)}),Y=computed(()=>u.type==="react"?H$1(U.value,W.value):u.type==="vue"?P$1(U.value,W.value):z(U.value,W.value)),nn=computed(()=>Y.value.isLegal),tn=(en=!1)=>{const on=T.value.attachShadow({mode:"open"}),sn=document.createElement("div");sn.classList.add("code-demo-app"),on.appendChild(sn),nn.value?(en&&(sn.innerHTML=Y.value.html),k$4(on,Y.value),D(u.id,on,Y.value),j.value="0"):j.value="auto",Z.value=!0},an=()=>{switch(u.type){case"react":return I$1(Y.value).then(()=>tn());case"vue":return J(Y.value).then(()=>tn());default:return Q(Y.value).then(()=>tn(!0))}};return onMounted(()=>{setTimeout(()=>{an()},500)}),()=>{var en;return h$4("div",{class:"code-demo-wrapper",id:u.id},[Z.value?null:h$4("div",{class:"loading"},h$4(M$1)),h$4("div",{class:"code-demo-header"},[Y.value.isLegal?h$4("button",{class:["toggle-button",b.value?"down":"right"],onClick:()=>{j.value=b.value?"0":`${$.value.clientHeight+13.8}px`,b.value=!b.value}}):null,u.title?h$4("span",{class:"title"},decodeURIComponent(u.title)):null,Y.value.isLegal&&Y.value.jsfiddle!==!1?h$4("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[h$4("input",{type:"hidden",name:"html",value:Y.value.html}),h$4("input",{type:"hidden",name:"js",value:Y.value.js}),h$4("input",{type:"hidden",name:"css",value:Y.value.css}),h$4("input",{type:"hidden",name:"wrap",value:"1"}),h$4("input",{type:"hidden",name:"panel_js",value:"3"}),h$4("input",{type:"hidden",name:"resources",value:[...Y.value.cssLib,...Y.value.jsLib].join(",")}),h$4("button",{type:"submit",class:"jsfiddle-button",innerHTML:N,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!Y.value.isLegal||Y.value.codepen!==!1?h$4("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[h$4("input",{type:"hidden",name:"data",value:JSON.stringify({html:Y.value.html,js:Y.value.js,css:Y.value.css,js_external:Y.value.jsLib.join(";"),css_external:Y.value.cssLib.join(";"),layout:Y.value.codepenLayout,html_pre_processor:U.value?U.value.html[1]:"none",js_pre_processor:U.value?U.value.js[1]:Y.value.jsx?"babel":"none",css_pre_processor:U.value?U.value.css[1]:"none",editors:Y.value.codepenEditors})}),h$4("button",{type:"submit",innerHTML:O$1,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),h$4("div",{ref:T,class:"code-demo-container",style:{display:nn.value&&Z.value?"block":"none"}}),h$4("div",{class:"code-demo-code-wrapper",style:{height:j.value}},h$4("div",{ref:$,class:"code-demo-codes"},(en=m.default)==null?void 0:en.call(m)))])}}});const echarts="",LoadingIcon=()=>h$4(st,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(u=>h$4("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$4("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:u}),h$4("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:u})]))),parseEChartsConfig=(config,type)=>{if(type==="js"){const exports={},module={exports};return eval(config),module.exports}return JSON.parse(config)};var ECharts=defineComponent({name:"ECharts",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(u){const m=ref();let b;const T=ref(!0);return onMounted(()=>{Promise.all([__vitePreload(()=>import("./index-e8ac5dda.js"),[]),new Promise($=>setTimeout($,500))]).then(([$])=>{const j=parseEChartsConfig(Lt(u.config),u.type);b=$.init(m.value),b.showLoading(),b.setOption(j),b.hideLoading(),T.value=!1}),useEventListener("resize",useDebounceFn(()=>b==null?void 0:b.resize(),100))}),onBeforeUnmount(()=>{b==null||b.dispose()}),()=>[u.title?h$4("div",{class:"echarts-title"},decodeURIComponent(u.title)):null,T.value?h$4("div",{class:"echarts-loading-wrapper"},h$4(LoadingIcon)):null,h$4("div",{ref:m,class:"echarts-wrapper",id:u.id})]}});const figure="",flowchart="",y$1=()=>h$4(st,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(u=>h$4("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$4("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:u}),h$4("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:u})])));var a$1={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":"#8DA1AC","line-color":"#8DA1AC","element-color":"black",fill:"white","yes-text":"Yes","no-text":"No","arrow-end":"block",scale:1},F={...a$1,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#595959","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#595959","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#FF485E","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FF485E","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"}}},C$1={...a$1,"line-width":1,symbols:{start:{class:"start-element",fill:"#ccc","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},end:{class:"end-element",fill:"#ccc","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},operation:{class:"operation-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},inputoutput:{class:"inputoutput-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},subroutine:{class:"subroutine-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},condition:{class:"condition-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},parallel:{class:"parallel-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"}}},g={...a$1,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#00BC7D","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#EB4D5D","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#937AC4","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FFB500","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"}}},p={ant:F,vue:g,pie:C$1},k$3=defineComponent({name:"FlowChart",props:{code:{type:String,required:!0},id:{type:String,required:!0},preset:{type:String,default:"vue"}},setup(u){let m;const b=ref(),T=ref(!0),$=ref(1),j=computed(()=>p[u.preset]||(console.warn(`[md-enhance:flowchart] Unknown preset: ${u.preset}`),p.vue)),Z=W=>W<419?.8:W>1280?1:.9;return onMounted(()=>{Promise.all([__vitePreload(()=>import("./flowchart.parse-08db0949.js").then(W=>W.f),[]),new Promise(W=>setTimeout(W,500))]).then(([{default:W}])=>{m=W(Lt(u.code)),$.value=Z(window.innerWidth),T.value=!1,m.drawSVG(u.id,{...j.value,scale:$.value}),useEventListener("resize",useDebounceFn(()=>{const U=Z(window.innerWidth);$.value!==U&&($.value=U,m.drawSVG(u.id,{...j.value,scale:U}))},100))})}),()=>[T.value?h$4("div",{class:"flowchart-loading-wrapper"},h$4(y$1)):null,h$4("div",{ref:b,class:["flowchart-wrapper",u.preset],id:u.id,style:{display:T.value?"none":"block"}})]}});const footnote="",imageMark="",mermaid="",M=()=>h$4(st,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(u=>h$4("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$4("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:u}),h$4("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:u})]))),k$2=u=>({dark:u,background:u?"#1e1e1e":"#fff",primaryColor:u?"#389d70":"#4abf8a",primaryBorderColor:u?"#389d70":"#4abf8a",primaryTextColor:"#fff",secondaryColor:"#ffb500",secondaryBorderColor:u?"#fff":"#000",secondaryTextColor:u?"#ddd":"#333",tertiaryColor:u?"#282828":"#efeef4",tertiaryBorderColor:u?"#bbb":"#242424",tertiaryTextColor:u?"#ddd":"#333",noteBkgColor:u?"#f6d365":"#fff5ad",noteTextColor:"#242424",noteBorderColor:u?"#f6d365":"#333",lineColor:u?"#d3d3d3":"#333",textColor:u?"#fff":"#242424",mainBkg:u?"#389d70":"#4abf8a",errorBkgColor:"#eb4d5d",errorTextColor:"#fff",nodeBorder:u?"#389d70":"#4abf8a",nodeTextColor:u?"#fff":"#242424",signalTextColor:u?"#9e9e9e":"#242424",classText:"#fff",labelColor:"#fff",fillType0:u?"#cf1322":"#f1636e",fillType1:"#f39c12",fillType2:"#2ecc71",fillType3:"#fa541c",fillType4:"#25a55b",fillType5:"#13c2c2",fillType6:"#096dd9",fillType7:"#aa6fe9"});var w=defineComponent({name:"Mermaid",props:{id:{type:String,required:!0},code:{type:String,required:!0}},setup(u){const m=ref(""),b=ref(),T=ref(!1);let $=null;return onMounted(()=>{const j=document.querySelector("html"),Z=Lt(u.code),W=()=>j.classList.contains("dark")||j.getAttribute("data-theme")==="dark";T.value=W(),Promise.all([__vitePreload(()=>import("./mermaid.esm.min-ef7393f1.js"),[]),__vitePreload(()=>import("./mermaid-mindmap.esm.min-c9e61f34.js"),["assets/mermaid-mindmap.esm.min-c9e61f34.js","assets/framework-1e9ccf99.js"]),new Promise(U=>setTimeout(U,500))]).then(async([{default:U},{default:Y}])=>{try{await U.registerExternalDiagrams([Y])}catch{}const nn=async()=>{const tn=document.createElement("div");tn.style.position="relative",tn.style.top="-9999px";const an=en=>{m.value=en,document.body.removeChild(tn)};U.initialize({theme:"base",themeVariables:k$2(T.value),flowchart:{useMaxWidth:!1},sequence:{useMaxWidth:!1},journey:{useMaxWidth:!1},gantt:{useMaxWidth:!1},er:{useMaxWidth:!1},pie:{useMaxWidth:!1},startOnLoad:!1}),m.value="",document.body.appendChild(tn),await nextTick(),await U.renderAsync(u.id,Z,an,tn)};await nn(),$=new MutationObserver(()=>{T.value=W()}),$.observe(j,{attributeFilter:["class","data-theme"],attributes:!0}),watch(T,nn)})}),onBeforeUnmount(()=>{$==null||$.disconnect()}),()=>h$4("div",{ref:b,class:["mermaid-wrapper",{loading:!m.value}]},m.value?h$4("div",{class:"content",innerHTML:m.value}):h$4(M))}});const o=()=>__vitePreload(()=>import("./highlight.esm-f3520595.js"),[]),t=()=>__vitePreload(()=>import("./markdown.esm-5207b596.js"),[]),e=()=>__vitePreload(()=>import("./math.esm-4cb70fc8.js"),[]),r$1=()=>__vitePreload(()=>import("./notes.esm-1ba2677c.js"),[]),a=()=>__vitePreload(()=>import("./reveal.esm-5c119aeb.js"),[]),i=()=>__vitePreload(()=>import("./search.esm-e8f6ca73.js"),[]),c=()=>__vitePreload(()=>import("./zoom.esm-68db8aeb.js"),[]),useReveal=()=>[a(),t(),o(),e(),i(),r$1(),c()],index$1="",leagueGothic="",sourceSansPro="",k$1=()=>h$4(st,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(u=>h$4("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$4("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:u}),h$4("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:u})])));var S$1=defineComponent({name:"Presentation",props:{id:{type:String,required:!0},code:{type:String,required:!0},theme:{type:String,default:"auto"}},setup(u){const m=usePageFrontmatter(),b=ref(""),T=ref(!1),$=ref(),j=ref();let Z;return onMounted(()=>{if(j.value){b.value=Lt(u.code),j.value.setAttribute("id",u.id),j.value.setAttribute("data-theme",u.theme);const W=[new Promise(U=>setTimeout(U,500)),...useReveal()];Promise.all(W).then(([,U,...Y])=>{Z=new U.default(j.value,{plugins:Y.map(nn=>nn.default)}),Z.initialize({backgroundTransition:"slide",hash:m.value.layout==="Slide",mouseWheel:m.value.layout==="Slide",transition:"slide",slideNumber:!0,...m.value.reveal||{},embedded:m.value.layout!=="Slide"}).then(()=>{T.value=!1,Z.configure({backgroundTransition:"slide"})})})}}),onBeforeUnmount(()=>{Z==null||Z.destroy()}),()=>h$4("div",{ref:$,class:{"md-enhance-presentation":!0,loading:T.value}},[T.value?h$4(k$1):null,h$4("div",{ref:j,class:["reveal","reveal-viewport"]},h$4("div",{class:"slides",style:{display:T.value?"none":"block"},innerHTML:`<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${b.value}</script></section>`}))])}});const playground="",n='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';var r=defineComponent({name:"Playground",props:{title:{type:String,default:""},link:{type:String,required:!0}},setup(u){return()=>[h$4("div",{class:"playground-wrapper"},[h$4("div",{class:"title-wrapper"},[u.title?h$4("div",{class:"title"},decodeURIComponent(u.title)):null,h$4("div",{class:"actions"},[h$4("a",{class:"action",href:decodeURIComponent(u.link),target:"_blank",innerHTML:n})])]),h$4("div",{class:"preview-container"},h$4("iframe",{class:"iframe-preview",src:decodeURIComponent(u.link)}))])]}});const tabs="",d$2=useStorage("VUEPRESS_TAB_STORE",{});var S=defineComponent({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},setup(u,{slots:m}){const b=ref((()=>{if(u.tabId){const U=u.data.findIndex(({title:Y,value:nn=Y})=>d$2.value[u.tabId]===nn);if(U!==-1)return U}return u.active})()),T=ref([]),$=()=>{if(u.tabId){const{title:U,value:Y=U}=u.data[b.value];d$2.value[u.tabId]=Y}},j=(U=b.value)=>{b.value=U<T.value.length-1?U+1:0,T.value[b.value].focus()},Z=(U=b.value)=>{b.value=U>0?U-1:T.value.length-1,T.value[b.value].focus()},W=(U,Y)=>{U.key===" "||U.key==="Enter"?(U.preventDefault(),b.value=Y):U.key==="ArrowRight"?(U.preventDefault(),j()):U.key==="ArrowLeft"&&(U.preventDefault(),Z()),$()};return watch(()=>d$2.value[u.tabId],(U,Y)=>{if(u.tabId&&U!==Y){const nn=u.data.findIndex(({title:tn,value:an=tn})=>an===U);nn!==-1&&(b.value=nn)}}),()=>h$4(ClientOnly,()=>h$4("div",{class:"tab-list"},[h$4("div",{class:"tab-list-nav",role:"tablist"},u.data.map(({title:U},Y)=>{const nn=Y===b.value;return h$4("button",{ref:tn=>{tn&&(T.value[Y]=tn)},class:["tab-list-nav-item",{active:nn}],role:"tab","aria-controls":`tab-${u.id}-${Y}`,"aria-selected":nn,onClick:()=>{b.value=Y,$()},onKeydown:tn=>W(tn,Y)},U)})),u.data.map(({title:U,value:Y=U},nn)=>{var tn;const an=nn===b.value;return h$4("div",{class:["tab-item",{active:an}],id:`tab-${u.id}-${nn}`,role:"tabpanel","aria-expanded":an},(tn=m[`tab${nn}`])==null?void 0:tn.call(m,{title:U,value:Y,isActive:an}))})]))}});const tasklist="",katex="",clientConfig8=defineClientConfig({enhance:({app:u})=>{u.component("ChartJS",ChartJS),u.component("CodeTabs",h$2),u.component("CodeDemo",F$1),u.component("ECharts",ECharts),u.component("FlowChart",k$3),u.component("Mermaid",w),u.component("Presentation",S$1),u.component("Playground",r),u.component("Tabs",S),u.component("VuePlayground",defineAsyncComponent(()=>__vitePreload(()=>import("./VuePlayground-f79c7ad2.js"),["assets/VuePlayground-f79c7ad2.js","assets/framework-1e9ccf99.js"])))}}),photoswipe="",_$1=".theme-hope-content :not(a) > img",E={"/tw/":{closeTitle:"關閉",downloadTitle:"下載圖片",fullscreenTitle:"切換全屏",zoomTitle:"縮放",arrowPrevTitle:"上一個 (左箭頭)",arrowNextTitle:"下一個 (右箭頭)"},"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}},P=500,O={},d$1=u=>({src:u.src,width:u.naturalWidth,height:u.naturalHeight,alt:u.alt}),H=u=>{const m=typeof u=="string"?Array.from(document.querySelectorAll(u)):u.map(b=>Array.from(document.querySelectorAll(b))).flat();return Promise.all(m.map(b=>new Promise((T,$)=>{b.complete?T(d$1(b)):(b.onload=()=>T(d$1(b)),b.onerror=j=>$(j))}))).then(b=>({elements:m,infos:b}))},I=()=>{const{isSupported:u,toggle:m}=useFullscreen(),b=Mt(E),T=useRoute(),$=()=>{Promise.all([__vitePreload(()=>import("./photoswipe.esm-c0aed5fe.js"),[]),new Promise(j=>setTimeout(j,P)).then(()=>H(_$1))]).then(([j,Z])=>{Z.elements.forEach((W,U)=>{const Y=()=>{const nn=new j.default({dataSource:Z.infos,...b.value,...O,index:U});nn.on("uiRegister",()=>{u&&nn.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{m()}}),nn.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(tn,an)=>{tn.setAttribute("download",""),tn.setAttribute("target","_blank"),tn.setAttribute("rel","noopener"),an.on("change",()=>{tn.href=an.currSlide.data.src})}})}),nn.init()};W.style.cursor="zoom-in",W.addEventListener("click",Y),W.addEventListener("keypress",({key:nn})=>{nn==="Enter"&&Y()})})})};watch(()=>T.path,()=>$()),onMounted(()=>$())};var y=defineClientConfig({setup:()=>{I()}});const useAutoLink=(u,m=!1)=>{const b=useRouter(),{fullPath:T,meta:$,name:j}=ut(b,encodeURI(u));return{text:!m&&$.s?$.s:$.title||u,link:j==="404"?u:T,...$.i?{icon:$.i}:{}}},useThemeData=()=>useThemeData$1(),useThemeLocaleData=()=>useThemeLocaleData$1(),usePure=()=>computed(()=>Boolean(useThemeData().value.pure)),useMobile=()=>{const u=useThemeData(),m=ref(!1),b=()=>{m.value=window.innerWidth<(u.value.mobileBreakPoint||719)};return onMounted(()=>{b(),useEventListener("resize",b,!1),useEventListener("orientationchange",b,!1)}),m},useNavigate=()=>{const u=useRouter(),m=useRoute();return b=>{if(b)if(b.startsWith("/"))m.path!==b&&u.push(b);else if(b.startsWith("http://")||b.startsWith("https://")||b.startsWith("mailto:"))window&&window.open(b);else{const T=m.path.slice(0,m.path.lastIndexOf("/"));u.push(`${T}/${encodeURI(b)}`)}}},usePageAuthor=()=>{const u=useThemeLocaleData(),m=usePageFrontmatter();return computed(()=>{const{author:b}=m.value;return b?Pt(b):b===!1?[]:Pt(u.value.author,!1)})},usePageCategory=()=>{const u=usePageFrontmatter();return computed(()=>Rt(u.value.category).map(m=>{var b,T;return{name:m,path:((T=(b=inject(Symbol.for("categoryMap")))==null?void 0:b.value.map[m])==null?void 0:T.path)||""}}))},usePageTag=()=>{const u=usePageFrontmatter();return computed(()=>Bt(u.value.tag).map(m=>{var b,T;return{name:m,path:((T=(b=inject(Symbol.for("tagMap")))==null?void 0:b.value.map[m])==null?void 0:T.path)||""}}))},usePageDate=()=>{const u=usePageFrontmatter(),m=usePageData();return computed(()=>{const{date:b}=u.value;if(b)return Q$1(b);const{createdTime:T}=m.value.git||{};return T?Q$1(new Date(T)):null})},usePageInfo=()=>{const u=useThemeLocaleData(),m=usePageData(),b=usePageFrontmatter(),T=usePageAuthor(),$=usePageCategory(),j=usePageTag(),Z=usePageDate(),W=computed(()=>({author:T.value,category:$.value,date:Z.value,localizedDate:m.value.localizedDate,tag:j.value,isOriginal:b.value.isOriginal||!1,readingTime:m.value.readingTime||null,pageview:"pageview"in b.value?b.value.pageview:!0})),U=computed(()=>"pageInfo"in b.value?b.value.pageInfo:"pageInfo"in u.value?u.value.pageInfo:null);return{info:W,items:U}};let promise=null,promiseResolve=null;const scrollPromise={wait:()=>promise,pending:()=>{promise=new Promise(u=>promiseResolve=u)},resolve:()=>{promiseResolve==null||promiseResolve(),promise=null,promiseResolve=null}},useScrollPromise=()=>scrollPromise,footer="",PageFooter=defineComponent({name:"PageFooter",setup(){const u=usePageFrontmatter(),m=useThemeLocaleData(),b=usePageAuthor(),T=computed(()=>{const{copyright:Z,footer:W}=u.value;return W!==!1&&Boolean(Z||W||m.value.displayFooter)}),$=computed(()=>{const{footer:Z}=u.value;return Z===!1?!1:typeof Z=="string"?Z:m.value.footer||""}),j=computed(()=>"copyright"in u.value?u.value.copyright:"copyright"in m.value?m.value.copyright:b.value.length?`Copyright © ${new Date().getFullYear()} ${b.value[0].name}`:!1);return()=>T.value?h$4("footer",{class:"footer-wrapper"},[h$4("div",{class:"footer",innerHTML:$.value}),j.value?h$4("div",{class:"copyright",innerHTML:j.value}):null]):null}}),I18nIcon=()=>h$4(st,{name:"i18n"},()=>[h$4("path",{d:"M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"})]);I18nIcon.displayName="I18nIcon";const GitHubIcon=()=>h$4(st,{name:"github"},()=>h$4("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));GitHubIcon.displayName="GitHubIcon";const GitlabIcon=()=>h$4(st,{name:"gitlab"},()=>h$4("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));GitlabIcon.displayName="GitlabIcon";const GiteeIcon=()=>h$4(st,{name:"gitee"},()=>h$4("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));GiteeIcon.displayName="GiteeIcon";const BitbucketIcon=()=>h$4(st,{name:"bitbucket"},()=>h$4("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));BitbucketIcon.displayName="BitbucketIcon";const SourceIcon=()=>h$4(st,{name:"source"},()=>h$4("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));SourceIcon.displayName="SourceIcon";const Icon=u=>{const{icon:m=""}=u;return isLinkHttp(m)?h$4("img",{class:"icon",src:m}):m.startsWith("/")?h$4("img",{class:"icon",src:withBase(m)}):h$4(resolveComponent("FontIcon"),u)};Icon.displayName="Icon";const AutoLink=defineComponent({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:{focusout:()=>!0},setup(u,{attrs:m,emit:b,slots:T}){const $=useRoute(),j=useSiteData(),Z=toRef(u,"config"),W=computed(()=>isLinkHttp(Z.value.link)),U=computed(()=>isLinkMailto(Z.value.link)||isLinkTel(Z.value.link)),Y=computed(()=>U.value?void 0:Z.value.target||(W.value?"_blank":void 0)),nn=computed(()=>Y.value==="_blank"),tn=computed(()=>!W.value&&!U.value&&!nn.value),an=computed(()=>U.value?void 0:Z.value.rel||(nn.value?"noopener noreferrer":void 0)),en=computed(()=>Z.value.ariaLabel||Z.value.text),on=computed(()=>{if(u.exact)return!1;const cn=Object.keys(j.value.locales);return cn.length?cn.every(un=>un!==Z.value.link):Z.value.link!=="/"}),sn=computed(()=>tn.value?Z.value.activeMatch?new RegExp(Z.value.activeMatch).test($.path):on.value?$.path.startsWith(Z.value.link):$.path===Z.value.link:!1);return()=>{var fn,An,En;const{text:cn,icon:un,link:hn}=Z.value;return tn.value?h$4(RouterLink,{to:hn,"aria-label":en.value,...m,class:["nav-link",{active:sn.value},m.class],onFocusout:()=>b("focusout")},()=>{var vn,ln,_n;return((vn=T.default)==null?void 0:vn.call(T))||[((ln=T.before)==null?void 0:ln.call(T))||h$4(Icon,{icon:un}),cn,(_n=T.after)==null?void 0:_n.call(T)]}):h$4("a",{href:hn,rel:an.value,target:Y.value,"aria-label":en.value,...m,class:["nav-link",m.class],onFocusout:()=>b("focusout")},((fn=T.default)==null?void 0:fn.call(T))||[((An=T.before)==null?void 0:An.call(T))||h$4(Icon,{icon:un}),cn,u.noExternalLinkIcon?null:h$4(ExternalLinkIcon),(En=T.after)==null?void 0:En.call(T)])}}}),dropdownLink="",DropdownLink=defineComponent({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},setup(u,{slots:m}){const b=useRoute(),T=toRef(u,"config"),$=computed(()=>T.value.ariaLabel||T.value.text),j=ref(!1);watch(()=>b.path,()=>{j.value=!1});const Z=W=>{W.detail===0&&(j.value=!j.value)};return()=>{var W;return h$4("div",{class:["dropdown-wrapper",{open:j.value}]},[h$4("button",{class:"dropdown-title",type:"button","aria-label":$.value,onClick:Z},[((W=m.title)==null?void 0:W.call(m))||h$4("span",{class:"title"},[h$4(Icon,{icon:T.value.icon}),u.config.text]),h$4("span",{class:"arrow"}),h$4("ul",{class:"nav-dropdown"},T.value.children.map((U,Y)=>{const nn=Y===T.value.children.length-1;return h$4("li",{class:"dropdown-item"},"children"in U?[h$4("h4",{class:"dropdown-subtitle"},U.link?h$4(AutoLink,{config:U,onFocusout:()=>{U.children.length===0&&nn&&(j.value=!1)}}):h$4("span",U.text)),h$4("ul",{class:"dropdown-subitem-wrapper"},U.children.map((tn,an)=>h$4("li",{class:"dropdown-subitem"},h$4(AutoLink,{config:tn,onFocusout:()=>{an===U.children.length-1&&nn&&(j.value=!1)}}))))]:h$4(AutoLink,{config:U,onFocusout:()=>{nn&&(j.value=!1)}}))}))])])}}}),resolveNavbarItem=(u,m="")=>isString$1(u)?useAutoLink(`${m}${u}`):"children"in u?{...u,...u.link&&!isLinkExternal(u.link)?useAutoLink(`${m}${u.link}`):{},children:u.children.map(b=>resolveNavbarItem(b,`${m}${u.prefix||""}`))}:{...u,link:isLinkExternal(u.link)?u.link:useAutoLink(`${m}${u.link}`).link},useNavbarConfig=()=>computed(()=>(useThemeLocaleData().value.navbar||[]).map(u=>resolveNavbarItem(u))),useNavbarLanguageDropdown=()=>{const u=useRouter(),m=useRouteLocale(),b=useSiteLocaleData(),T=useThemeData(),$=useThemeLocaleData();return computed(()=>{const j=Object.keys(b.value.locales);if(j.length<2)return null;const{path:Z,hash:W}=u.currentRoute.value,{navbarLocales:U}=$.value;return{text:"",ariaLabel:U==null?void 0:U.selectLangAriaLabel,children:j.map(nn=>{var cn,un,hn;const tn=((cn=b.value.locales)==null?void 0:cn[nn])??{},an=((un=T.value.locales)==null?void 0:un[nn])??{},en=tn.lang||"",on=((hn=an.navbarLocales)==null?void 0:hn.langName)??en;let sn;if(en===b.value.lang)sn=Z;else{const fn=Z.replace(m.value,nn);sn=u.getRoutes().some(An=>An.path===fn)?`${fn}${W}`:an.home??nn}return{text:on,link:sn}})}})},getAncestorLinks=(u,m)=>{const b=u.path.replace(m,"/").split("/"),T=[];let $=removeEndingSlash(m);return b.forEach((j,Z)=>{Z!==b.length-1?($+=`${j}/`,T.push($)):j!==""&&($+=j,T.push($))}),T},resolveRepoType=u=>!isLinkHttp(u)||/github\.com/.test(u)?"GitHub":/bitbucket\.org/.test(u)?"Bitbucket":/gitlab\.com/.test(u)?"GitLab":/gitee\.com/.test(u)?"Gitee":null,useNavbarRepo=()=>{const u=useThemeLocaleData(),m=computed(()=>u.value.repo||null),b=computed(()=>m.value?resolveRepoType(m.value):null),T=computed(()=>m.value&&!isLinkHttp(m.value)?`https://github.com/${m.value}`:m.value),$=computed(()=>T.value?u.value.repoLabel??(b.value===null?"Source":b.value):null);return computed(()=>!T.value||!$.value||u.value.repoDisplay===!1?null:{type:b.value||"Source",label:$.value,link:T.value})},LanguageDropdown=defineComponent({name:"LanguageDropdown",setup(){const u=useNavbarLanguageDropdown();return()=>u.value?h$4("div",{class:"nav-item"},h$4(DropdownLink,{class:"i18n-dropdown",config:u.value},{title:()=>{var m;return h$4(I18nIcon,{"aria-label":(m=u.value)==null?void 0:m.ariaLabel,style:{width:"1rem",height:"1rem",verticalAlign:"middle"}})}})):null}}),navbarBrand="",NavbarBrand=defineComponent({name:"NavbarBrand",setup(){const u=useRouteLocale(),m=useSiteLocaleData(),b=useThemeLocaleData(),T=computed(()=>b.value.home||u.value),$=computed(()=>m.value.title),j=computed(()=>b.value.logo?withBase(b.value.logo):null),Z=computed(()=>b.value.logoDark?withBase(b.value.logoDark):null);return()=>h$4(RouterLink,{to:T.value,class:"brand"},()=>[j.value?h$4("img",{class:["logo",{light:Boolean(Z.value)}],src:j.value,alt:$.value}):null,Z.value?h$4("img",{class:["logo dark"],src:Z.value,alt:$.value}):null,$.value?h$4("span",{class:["site-name",{"hide-in-pad":j.value}]},$.value):null])}}),navbarLinks="",NavbarLinks=defineComponent({name:"NavbarLinks",setup(){const u=useNavbarConfig();return()=>u.value.length?h$4("nav",{class:"nav-links"},[...u.value.map(m=>h$4("div",{class:"nav-item hide-in-mobile"},"children"in m?h$4(DropdownLink,{config:m}):h$4(AutoLink,{config:m})))]):null}});function _toConsumableArray(u){if(Array.isArray(u)){for(var m=0,b=Array(u.length);m<u.length;m++)b[m]=u[m];return b}else return Array.from(u)}var hasPassiveEvents=!1;if(typeof window<"u"){var passiveTestOptions={get passive(){hasPassiveEvents=!0}};window.addEventListener("testPassive",null,passiveTestOptions),window.removeEventListener("testPassive",null,passiveTestOptions)}var isIosDevice=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),locks=[],documentListenerAdded=!1,initialClientY=-1,previousBodyOverflowSetting=void 0,previousBodyPaddingRight=void 0,allowTouchMove=function u(m){return locks.some(function(b){return!!(b.options.allowTouchMove&&b.options.allowTouchMove(m))})},preventDefault=function u(m){var b=m||window.event;return allowTouchMove(b.target)||b.touches.length>1?!0:(b.preventDefault&&b.preventDefault(),!1)},setOverflowHidden=function u(m){if(previousBodyPaddingRight===void 0){var b=!!m&&m.reserveScrollBarGap===!0,T=window.innerWidth-document.documentElement.clientWidth;b&&T>0&&(previousBodyPaddingRight=document.body.style.paddingRight,document.body.style.paddingRight=T+"px")}previousBodyOverflowSetting===void 0&&(previousBodyOverflowSetting=document.body.style.overflow,document.body.style.overflow="hidden")},restoreOverflowSetting=function u(){previousBodyPaddingRight!==void 0&&(document.body.style.paddingRight=previousBodyPaddingRight,previousBodyPaddingRight=void 0),previousBodyOverflowSetting!==void 0&&(document.body.style.overflow=previousBodyOverflowSetting,previousBodyOverflowSetting=void 0)},isTargetElementTotallyScrolled=function u(m){return m?m.scrollHeight-m.scrollTop<=m.clientHeight:!1},handleScroll=function u(m,b){var T=m.targetTouches[0].clientY-initialClientY;return allowTouchMove(m.target)?!1:b&&b.scrollTop===0&&T>0||isTargetElementTotallyScrolled(b)&&T<0?preventDefault(m):(m.stopPropagation(),!0)},disableBodyScroll=function u(m,b){if(!m){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!locks.some(function($){return $.targetElement===m})){var T={targetElement:m,options:b||{}};locks=[].concat(_toConsumableArray(locks),[T]),isIosDevice?(m.ontouchstart=function($){$.targetTouches.length===1&&(initialClientY=$.targetTouches[0].clientY)},m.ontouchmove=function($){$.targetTouches.length===1&&handleScroll($,m)},documentListenerAdded||(document.addEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!0)):setOverflowHidden(b)}},clearAllBodyScrollLocks=function u(){isIosDevice?(locks.forEach(function(m){m.targetElement.ontouchstart=null,m.targetElement.ontouchmove=null}),documentListenerAdded&&(document.removeEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!1),initialClientY=-1):restoreOverflowSetting(),locks=[]};const navScreenDropdown="",NavScreenDropdown=defineComponent({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(u){const m=useRoute(),b=toRef(u,"config"),T=computed(()=>b.value.ariaLabel||b.value.text),$=ref(!1);watch(()=>m.path,()=>{$.value=!1});const j=(Z,W)=>W[W.length-1]===Z;return()=>[h$4("button",{class:["nav-screen-dropdown-title",{active:$.value}],type:"button","aria-label":T.value,onClick:()=>{$.value=!$.value}},[h$4("span",{class:"title"},[h$4(Icon,{icon:b.value.icon}),u.config.text]),h$4("span",{class:["arrow",$.value?"down":"right"]})]),h$4("ul",{class:["nav-screen-dropdown",{hide:!$.value}]},b.value.children.map(Z=>h$4("li",{class:"dropdown-item"},"children"in Z?[h$4("h4",{class:"dropdown-subtitle"},Z.link?h$4(AutoLink,{config:Z,onFocusout:()=>{j(Z,b.value.children)&&Z.children.length===0&&($.value=!1)}}):h$4("span",Z.text)),h$4("ul",{class:"dropdown-subitem-wrapper"},Z.children.map(W=>h$4("li",{class:"dropdown-subitem"},h$4(AutoLink,{config:W,onFocusout:()=>{j(W,Z.children)&&j(Z,b.value.children)&&($.value=!1)}}))))]:h$4(AutoLink,{config:Z,onFocusout:()=>{j(Z,b.value.children)&&($.value=!1)}}))))]}}),navScreenLinks="",NavScreenLinks=defineComponent({name:"NavScreenLinks",setup(){const u=useNavbarConfig();return()=>u.value.length?h$4("nav",{class:"nav-screen-links"},u.value.map(m=>h$4("div",{class:"navbar-links-item"},"children"in m?h$4(NavScreenDropdown,{config:m}):h$4(AutoLink,{config:m})))):null}}),DarkIcon=()=>h$4(st,{name:"dark"},()=>h$4("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));DarkIcon.displayName="DarkIcon";const LightIcon=()=>h$4(st,{name:"light"},()=>h$4("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));LightIcon.displayName="LightIcon";const AutoIcon=()=>h$4(st,{name:"auto"},()=>h$4("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));AutoIcon.displayName="AutoIcon";const EnterFullScreenIcon=()=>h$4(st,{name:"enter-fullscreen"},()=>h$4("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));EnterFullScreenIcon.displayName="EnterFullScreenIcon";const CancelFullScreenIcon=()=>h$4(st,{name:"cancel-fullscreen"},()=>h$4("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));CancelFullScreenIcon.displayName="CancelFullScreenIcon";const OutlookIcon=()=>h$4(st,{name:"outlook"},()=>[h$4("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);OutlookIcon.displayName="OutlookIcon";const darkModeSymbol=Symbol.for("darkMode"),useDarkMode=()=>{const u=inject(darkModeSymbol);if(!u)throw new Error("useDarkMode() is called without provider.");return u},injectDarkMode=u=>{const m=useThemeData(),b=usePreferredDark(),T=useStorage("vuepress-theme-hope-scheme","auto"),$=computed(()=>{const{darkmode:j}=m.value;return j==="disable"?!1:j==="enable"?!0:j==="auto"?b.value:j==="toggle"?T.value==="dark":T.value==="dark"||T.value==="auto"&&b.value});u.provide(darkModeSymbol,{isDarkMode:$,status:T}),Object.defineProperties(u.config.globalProperties,{$isDarkMode:{get:()=>$.value}})},setupDarkMode=()=>{const{isDarkMode:u}=useDarkMode(),m=(b=u.value)=>{const T=window==null?void 0:window.document.querySelector("html");T==null||T.setAttribute("data-theme",b?"dark":"light")};onMounted(()=>{watch(u,m,{immediate:!0})})},appearanceSwitch="",AppearanceSwitch=defineComponent({name:"AppearanceSwitch",setup(){const u=useThemeData(),{status:m}=useDarkMode(),b=computed(()=>u.value.darkmode),T=()=>{b.value==="switch"?m.value={light:"dark",dark:"auto",auto:"light"}[m.value]:m.value=m.value==="light"?"dark":"light"};return()=>h$4("button",{id:"appearance-switch",onClick:()=>T()},[h$4(AutoIcon,{style:{display:m.value==="auto"?"block":"none"}}),h$4(DarkIcon,{style:{display:m.value==="dark"?"block":"none"}}),h$4(LightIcon,{style:{display:m.value==="light"?"block":"none"}})])}}),AppearanceMode=defineComponent({name:"AppearanceMode",setup(){const u=useThemeData(),m=useThemeLocaleData(),b=computed(()=>m.value.outlookLocales.darkmode),T=computed(()=>u.value.darkmode),$=computed(()=>T.value==="switch"||T.value==="toggle");return()=>$.value?h$4("div",{class:"appearance-wrapper"},[h$4("label",{class:"appearance-title",for:"appearance-switch"},b.value),h$4(AppearanceSwitch)]):null}}),themeColorPicker="",ThemeColorPicker=defineComponent({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(u){const m=(b="")=>{const T=document.documentElement.classList,$=Object.keys(u.themeColor).map(j=>`theme-${j}`);if(!b){localStorage.removeItem("theme"),T.remove(...$);return}T.remove(...$.filter(j=>j!==`theme-${b}`)),T.add(`theme-${b}`),localStorage.setItem("theme",b)};return onMounted(()=>{const b=localStorage.getItem("theme");b&&m(b)}),()=>h$4("ul",{id:"theme-color-picker"},[h$4("li",h$4("span",{class:"theme-color",onClick:()=>m()})),...Object.entries(u.themeColor).map(([b,T])=>h$4("li",h$4("span",{style:{background:T},onClick:()=>m(b)})))])}}),ThemeColor=defineComponent({name:"ThemeColor",setup(){const u=useThemeData(),m=useThemeLocaleData(),b=computed(()=>m.value.outlookLocales.themeColor),T=computed(()=>{const{themeColor:$}=u.value;return $===!1?null:$});return()=>T.value?h$4("div",{class:"theme-color-wrapper"},[h$4("label",{class:"theme-color-title",for:"theme-color-picker"},b.value),h$4(ThemeColorPicker,{themeColor:T.value})]):null}}),toggleFullScreenButton="",ToggleFullScreenButton=defineComponent({name:"ToggleFullScreenButton",setup(){const u=useThemeLocaleData(),{isSupported:m,isFullscreen:b,toggle:T}=useFullscreen(),$=computed(()=>u.value.outlookLocales.fullscreen);return()=>m?h$4("div",{class:"fullscreen-wrapper"},[h$4("label",{class:"full-screen-title",for:"full-screen-switch"},$.value),h$4("button",{class:"full-screen",id:"full-screen-switch",ariaPressed:b.value,onClick:()=>T()},b.value?h$4(CancelFullScreenIcon):h$4(EnterFullScreenIcon))]):null}}),OutlookSettings=defineComponent({name:"OutlookSettings",setup(){const u=useThemeData(),m=usePure(),b=computed(()=>u.value.darkmode!=="disable"&&u.value.darkmode!=="enable"),T=computed(()=>!m.value&&Boolean(u.value.themeColor)),$=computed(()=>!m.value&&u.value.fullscreen);return()=>h$4(ClientOnly,()=>[T.value?h$4(ThemeColor):null,b.value?h$4(AppearanceMode):null,$.value?h$4(ToggleFullScreenButton):null])}}),navScreen="",NavScreen=defineComponent({name:"NavScreen",props:{show:Boolean},emits:{close:()=>!0},setup(u,{emit:m,slots:b}){const T=useRoute(),$=useMobile(),j=ref();return watch($,Z=>{!Z&&u.show&&(clearAllBodyScrollLocks(),m("close"))}),watch(()=>T.path,()=>{clearAllBodyScrollLocks(),m("close")}),onBeforeUnmount(()=>{clearAllBodyScrollLocks()}),()=>h$4(Transition,{name:"fade",onEnter:()=>disableBodyScroll(j.value,{reserveScrollBarGap:!0}),onAfterLeave:()=>clearAllBodyScrollLocks()},()=>{var Z,W;return u.show?h$4("div",{id:"nav-screen",ref:j},h$4("div",{class:"container"},[(Z=b.before)==null?void 0:Z.call(b),h$4(NavScreenLinks),h$4("div",{class:"outlook-wrapper"},h$4(OutlookSettings)),(W=b.after)==null?void 0:W.call(b)])):null})}}),outlookButton="",OutlookButton=defineComponent({name:"OutlookButton",setup(){const{isSupported:u}=useFullscreen(),m=useThemeData(),b=usePure(),T=useRoute(),$=ref(!1),j=computed(()=>m.value.darkmode!=="disable"&&m.value.darkmode!=="enable"),Z=computed(()=>!b.value&&Boolean(m.value.themeColor)),W=computed(()=>!b.value&&m.value.fullscreen&&u);return watch(()=>T.path,()=>{$.value=!1}),()=>j.value||W.value||Z.value?h$4("div",{class:"nav-item hide-in-mobile"},j.value&&!W.value&&!Z.value?h$4(AppearanceSwitch):W.value&&!j.value&&!Z.value?h$4(ToggleFullScreenButton):h$4("button",{class:["outlook-button",{open:$.value}],tabindex:"-1",ariaHidden:!0},[h$4(OutlookIcon),h$4("div",{class:"outlook-dropdown"},h$4(OutlookSettings))])):null}}),toggleNavbarButton="",ToggleNavbarButton=({active:u=!1},{emit:m})=>h$4("button",{class:["toggle-navbar-button",{"is-active":u}],"aria-label":"Toggle Navbar","aria-expanded":u,"aria-controls":"nav-screen",onClick:()=>m("toggle")},h$4("span",{class:"button-container"},[h$4("span",{class:"button-top"}),h$4("span",{class:"button-middle"}),h$4("span",{class:"button-bottom"})]));ToggleNavbarButton.displayName="ToggleNavbarButton";const toggleSidebarButton="",ToggleSidebarButton=(u,{emit:m})=>h$4("button",{class:"toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>m("toggle")},h$4("span",{class:"icon"}));ToggleSidebarButton.displayName="ToggleSidebarButton";ToggleSidebarButton.emits=["toggle"];const repoLink="",RepoLink=defineComponent({name:"RepoLink",components:{BitbucketIcon,GiteeIcon,GitHubIcon,GitlabIcon,SourceIcon},setup(){const u=useNavbarRepo();return()=>u.value?h$4("div",{class:"nav-item"},h$4("a",{class:"repo-link",href:u.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":u.value.label},h$4(resolveComponent(`${u.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}}),navbar="",Navbar=defineComponent({name:"NavBar",emits:{toggleSidebar:()=>!0},setup(u,{emit:m,slots:b}){const T=useThemeLocaleData(),$=useMobile(),j=ref(!1),Z=computed(()=>{const{navbarAutoHide:U}=T.value;return U!=="none"&&(U==="always"||$.value)}),W=computed(()=>T.value.navbarLayout||{left:["Brand"],center:["Links"],right:["Language","Repo","Outlook","Search"]});return()=>{var Y,nn,tn,an,en,on;const U={Brand:h$4(NavbarBrand),Language:h$4(LanguageDropdown),Links:h$4(NavbarLinks),Repo:h$4(RepoLink),Outlook:h$4(OutlookButton),Search:St("Docsearch")?h$4(resolveComponent("Docsearch")):St("SearchBox")?h$4(resolveComponent("SearchBox")):St("SearchBox")?h$4(resolveComponent("SearchBox")):null};return[h$4("header",{class:["navbar",{"auto-hide":Z.value,"hide-icon":!T.value.navbarIcon}]},[h$4("div",{class:"navbar-left"},[h$4(ToggleSidebarButton,{onToggle:()=>{j.value&&(j.value=!1),m("toggleSidebar")}}),(Y=b.leftStart)==null?void 0:Y.call(b),...W.value.left.map(sn=>U[sn]),(nn=b.leftEnd)==null?void 0:nn.call(b)]),h$4("div",{class:"navbar-center"},[(tn=b.centerStart)==null?void 0:tn.call(b),...W.value.center.map(sn=>U[sn]),(an=b.centerEnd)==null?void 0:an.call(b)]),h$4("div",{class:"navbar-right"},[(en=b.rightStart)==null?void 0:en.call(b),...W.value.right.map(sn=>U[sn]),(on=b.rightEnd)==null?void 0:on.call(b),h$4(ToggleNavbarButton,{active:j.value,onToggle:()=>{j.value=!j.value}})])]),h$4(NavScreen,{show:j.value,onClose:()=>{j.value=!1}},{before:()=>{var sn;return(sn=b.screenTop)==null?void 0:sn.call(b)},after:()=>{var sn;return(sn=b.screenBottom)==null?void 0:sn.call(b)}})]}}}),isActiveSidebarItem=(u,m,b=!1)=>"activeMatch"in m?new RegExp(m.activeMatch).test(u.path):Ht(u,m.link)?!0:m.children&&!b?m.children.some(T=>isActiveSidebarItem(u,T)):!1,isMatchedSidebarItem=(u,m)=>m.type==="group"?m.children.some(b=>b.type==="group"?isMatchedSidebarItem(u,b):b.type==="page"&&isActiveSidebarItem(u,b,!0))||"prefix"in m&&Ht(u,m.prefix):!1,renderItem=(u,m)=>u.link?h$4(AutoLink,{...m,config:u}):h$4("p",m,[h$4(Icon,{icon:u.icon}),u.text]),renderChildren$1=u=>{const m=useRoute();return u?h$4("ul",{class:"sidebar-sub-headers"},u.map(b=>{const T=isActiveSidebarItem(m,b,!0);return h$4("li",{class:"sidebar-sub-header"},[renderItem(b,{class:["sidebar-link","heading",{active:T}]}),renderChildren$1(b.children)])})):null},sidebarData={"/tw/c/":["design-1.md","design-2.md","design-3.md","design-4.md","arithmetic-1.md","arithmetic-2.md","order-1.md","order-2.md","choose.md","recycle.md","array-1.md","array-2.md","function-1.md","function-2.md","pointer-1.md","pointer-2.md","type.md","file-1.md","file-2.md","bit.md"],"/tw/css/":["intro.md","selector.md","float.md","flex.md","animation.md","flat-trans.md","space-trans.md","mobile.md","tip.md"],"/javascript/":["grammar.md","dom.md","index.md"],"/tw/markdown/":["Github-Flavored.md","Markdown-emoji.md","typora-shortcut.md","intro.md","ssp-shortcut.md"],"/politics/law/":["1.md","2.md","3.md","4.md","5..md","6.md","7.md"],"/politics/history/":["1.md","2.md","3.md","4.md","5.md","6.md","7.md","8.md","9.md","10.md"],"/politics/mzdzt/":["2.md","3.md","4.md","5.md","6.md","7.md","8.md","9.md","0.md","1.md","10.1.md","10.2.md","10.3.md","10.4.md","10.5.md","11.md","12.md","13.md","14.md"],"/politics/principle/":["1.md","2.md","3.md","4.md","5.md","6.md","7.md","8.md","9.md","10.md"],"/tool/mysql/":["intro.md","skill.md"],"/education/china/":["intro.md","1.md","2.md","3.md","4.md","5.md","6.md","7.md","8.md","9.md","10.md","11.md"],"/education/edu_psy/":["intro.md","1.1.md","1.2.md","2.1.md","2.2.md","2.3.md","3.1.md","3.2.md","3.3.md","3.4.md","4.1.md","4.2.md","5.1.md","5.2.md","5.3.md","6.1.md","6.2.md","7.1.md","7.2.md","7.3.md","8.1.md","8.2.md","8.3.md","9.1.md","9.2.md","9.3.md","9.4.md","10.1.md","10.2.md","10.3.md","11.1.md"],"/education/foreign/":["intro.md","1.md","2.md","3.md","4.md","5.md","6.md","7.md","8.md","9.md"],"/education/principle/":["intro.md","1.md","2.md","3.md","4.md","5.md","6.md","7.md","8.md","9.md","10.md"],"/c/":["design-1.md","design-2.md","design-3.md","design-4.md","arithmetic-1.md","arithmetic-2.md","order-1.md","order-2.md","choose.md","recycle.md","array-1.md","array-2.md","function-1.md","function-2.md","pointer-1.md","pointer-2.md","type.md","file-1.md","file-2.md","bit.md"],"/css/":["intro.md","selector.md","float.md","flex.md","animation.md","flat-trans.md","space-trans.md","mobile.md","tip.md"],"/markdown/":["Github-Flavored.md","Markdown-emoji.md","typora-shortcut.md","intro.md","ssp-shortcut.md"]},resolvePrefix=(u="",m="")=>m.startsWith("/")?m:`${ensureEndingSlash(u)}${m}`,headerToSidebarItem=(u,m)=>{const b=usePageData();return{type:"heading",text:u.title,link:`${b.value.path}#${u.slug}`,children:headersToSidebarItemChildren(u.children,m)}},headersToSidebarItemChildren=(u,m)=>m>0?u.map(b=>headerToSidebarItem(b,m-1)):[],resolveHeadingSidebarItems=u=>{const m=usePageData();return headersToSidebarItemChildren(m.value.headers,u)},resolveArraySidebarItems=(u,m,b="")=>{const T=usePageData(),$=useRoute(),j=(Z,W=b)=>{var Y;const U=isString$1(Z)?useAutoLink(resolvePrefix(W,Z)):Z.link?{...Z,...isLinkExternal(Z.link)?{}:{link:useAutoLink(resolvePrefix(W,Z.link)).link}}:Z;if("children"in U){const nn=resolvePrefix(W,U.prefix),tn=U.children==="structure"?sidebarData[nn]:U.children;return{type:"group",...U,prefix:nn,children:tn.map(an=>j(an,nn))}}return{type:"page",...U,children:U.link===$.path?headersToSidebarItemChildren(((Y=T.value.headers[0])==null?void 0:Y.level)===1?T.value.headers[0].children:T.value.headers,m):[]}};return u.map(Z=>j(Z))},resolveMultiSidebarItems=(u,m)=>{const b=useRoute(),T=Object.keys(u).sort(($,j)=>j.length-$.length);for(const $ of T)if(decodeURI(b.path).startsWith($)){const j=u[$];return j?resolveArraySidebarItems(j==="structure"?sidebarData[$]:j,m,$):[]}return console.warn(`${b.path} is missing sidebar config.`),[]},resolveSidebarItems=()=>{const u=useRouteLocale(),m=usePageFrontmatter(),b=useThemeLocaleData(),T=m.value.home?!1:m.value.sidebar??b.value.sidebar??"structure",$=m.value.headerDepth??b.value.headerDepth??2;return T===!1?[]:T==="heading"?resolveHeadingSidebarItems($):T==="structure"?resolveArraySidebarItems(sidebarData[u.value],$,u.value):isArray(T)?resolveArraySidebarItems(T,$):isPlainObject(T)?resolveMultiSidebarItems(T,$):[]},sidebarItemsSymbol=Symbol.for("sidebarItems"),setupSidebarItems=()=>{const u=computed(()=>resolveSidebarItems());provide(sidebarItemsSymbol,u)},useSidebarItems=()=>{const u=inject(sidebarItemsSymbol);if(!u)throw new Error("useSidebarItems() is called without provider.");return u},sidebarChild="",SidebarChild=defineComponent({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(u){const m=useRoute();return()=>[renderItem(u.config,{class:["sidebar-link",`sidebar-${u.config.type}`,{active:isActiveSidebarItem(m,u.config,!0)}],exact:!0}),renderChildren$1(u.config.children)]}}),sidebarGroup="",SidebarGroup=defineComponent({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:{toggle:()=>!0},setup(u,{emit:m}){const b=useRoute(),T=computed(()=>isActiveSidebarItem(b,u.config)),$=computed(()=>isActiveSidebarItem(b,u.config,!0));return()=>{const{collapsible:j,children:Z=[],icon:W,prefix:U,link:Y,text:nn}=u.config;return h$4("section",{class:"sidebar-group"},[h$4(j?"button":"p",{class:["sidebar-heading",{clickable:j||Y,exact:$.value,active:T.value}],...j?{onClick:()=>m("toggle"),onKeydown:tn=>{tn.key==="Enter"&&m("toggle")}}:{}},[h$4(Icon,{icon:W}),Y?h$4(RouterLink,{to:Y,class:"title"},()=>nn):h$4("span",{class:"title"},nn),j?h$4("span",{class:["arrow",u.open?"down":"right"]}):null]),u.open||!j?h$4(SidebarLinks,{key:U,config:Z}):null])}}}),sidebarLinks="",SidebarLinks=defineComponent({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(u){const m=useRoute(),b=ref(-1),T=$=>{b.value=$===b.value?-1:$};return watch(()=>m.path,()=>{const $=u.config.findIndex(j=>isMatchedSidebarItem(m,j));b.value=$},{immediate:!0,flush:"post"}),()=>h$4("ul",{class:"sidebar-links"},u.config.map(($,j)=>h$4("li",$.type==="group"?h$4(SidebarGroup,{config:$,open:j===b.value,onToggle:()=>T(j)}):h$4(SidebarChild,{config:$}))))}}),sidebar="",Sidebar=defineComponent({name:"SideBar",setup(u,{slots:m}){const b=useRoute(),T=useThemeLocaleData(),$=useSidebarItems(),j=ref();return onMounted(()=>{watch(()=>b.hash,Z=>{const W=document.querySelector(`.sidebar a.sidebar-link[href="${b.path}${Z}"]`);if(!W)return;const{top:U,height:Y}=j.value.getBoundingClientRect(),{top:nn,height:tn}=W.getBoundingClientRect();nn<U?W.scrollIntoView(!0):nn+tn>U+Y&&W.scrollIntoView(!1)})}),()=>{var Z,W,U;return h$4("aside",{class:["sidebar",{"hide-icon":!T.value.sidebarIcon}],ref:j},[(Z=m.top)==null?void 0:Z.call(m),((W=m.default)==null?void 0:W.call(m))||h$4(SidebarLinks,{config:$.value}),(U=m.bottom)==null?void 0:U.call(m)])}}}),common="",CommonWrapper=defineComponent({name:"CommonWrapper",props:{noNavbar:Boolean,noSidebar:Boolean},setup(u,{slots:m}){const b=useRouter(),T=usePageData(),$=usePageFrontmatter(),j=useThemeLocaleData(),Z=useMobile(),W=ref(!1),U=computed(()=>u.noNavbar||$.value.navbar===!1||j.value.navbar===!1?!1:Boolean(T.value.title||j.value.logo||j.value.repo||j.value.navbar)),Y=useSidebarItems(),nn=computed(()=>u.noSidebar?!1:$.value.sidebar!==!1&&Y.value.length!==0&&!$.value.home),tn=ref(!1),an=ref(!1),en=vn=>{tn.value=typeof vn=="boolean"?vn:!tn.value},on=vn=>{an.value=typeof vn=="boolean"?vn:!an.value},sn={x:0,y:0},cn=vn=>{sn.x=vn.changedTouches[0].clientX,sn.y=vn.changedTouches[0].clientY},un=vn=>{const ln=vn.changedTouches[0].clientX-sn.x,_n=vn.changedTouches[0].clientY-sn.y;Math.abs(ln)>Math.abs(_n)*1.5&&Math.abs(ln)>40&&(ln>0&&sn.x<=80?en(!0):en(!1))},hn=computed(()=>$.value.home?!1:$.value.toc||j.value.toc!==!1&&$.value.toc!==!1),fn=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let An,En=0;return useEventListener("scroll",useThrottleFn(()=>{const vn=fn();En<vn&&vn>58?tn.value||(W.value=!0):W.value=!1,En=vn},300,!0)),watch(Z,vn=>{vn||en(!1)}),onMounted(()=>{An=b.afterEach(()=>{en(!1)})}),onBeforeUnmount(()=>{An()}),()=>h$4("div",{class:["theme-container",{"no-navbar":!U.value,"no-sidebar":!nn.value&&!(m.sidebar||m.sidebarTop||m.sidebarBottom),"has-toc":hn.value,"hide-navbar":W.value,"sidebar-collapsed":!Z.value&&an.value,"sidebar-open":Z.value&&tn.value},$.value.containerClass||""],onTouchStart:cn,onTouchEnd:un},h$4(St("GlobalEncrypt")?resolveComponent("GlobalEncrypt"):wt,()=>{var vn;return[U.value?h$4(Navbar,{onToggleSidebar:()=>en()},{leftStart:()=>{var ln;return(ln=m.navbarLeftStart)==null?void 0:ln.call(m)},leftEnd:()=>{var ln;return(ln=m.navbarLeftEnd)==null?void 0:ln.call(m)},centerStart:()=>{var ln;return(ln=m.navbarCenterStart)==null?void 0:ln.call(m)},centerEnd:()=>{var ln;return(ln=m.navbarCenterEnd)==null?void 0:ln.call(m)},rightStart:()=>{var ln;return(ln=m.navbarRightStart)==null?void 0:ln.call(m)},rightEnd:()=>{var ln;return(ln=m.navbarRightEnd)==null?void 0:ln.call(m)},screenTop:()=>{var ln;return(ln=m.navScreenTop)==null?void 0:ln.call(m)},screenBottom:()=>{var ln;return(ln=m.navScreenBottom)==null?void 0:ln.call(m)}}):null,h$4(Transition,{name:"fade"},()=>tn.value?h$4("div",{class:"sidebar-mask",onClick:()=>en(!1)}):null),h$4(Transition,{name:"fade"},()=>Z.value?null:h$4("div",{class:"toggle-sidebar-wrapper",onClick:()=>on()},h$4("span",{class:["arrow",an.value?"right":"left"]}))),h$4(Sidebar,{},{...m.sidebar?{default:()=>{var ln;return(ln=m.sidebar)==null?void 0:ln.call(m)}}:{},top:()=>{var ln;return(ln=m.sidebarTop)==null?void 0:ln.call(m)},bottom:()=>{var ln;return(ln=m.sidebarBottom)==null?void 0:ln.call(m)}}),(vn=m.default)==null?void 0:vn.call(m),h$4(PageFooter)]}))}}),DropTransition=defineComponent({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},setup(u,{slots:m}){const b=$=>{$.style.transition=`transform ${u.duration}s ease-in-out ${u.delay}s, opacity ${u.duration}s ease-in-out ${u.delay}s`,$.style.transform="translateY(-20px)",$.style.opacity="0"},T=$=>{$.style.transform="translateY(0)",$.style.opacity="1"};return()=>h$4(u.type==="single"?Transition:TransitionGroup,{name:"drop",appear:u.appear,onAppear:b,onAfterAppear:T,onEnter:b,onAfterEnter:T,onBeforeLeave:b},()=>{var $;return($=m.default)==null?void 0:$.call(m)})}}),HomeFeatures=defineComponent({name:"HomeFeatures",setup(){const u=usePageFrontmatter(),m=computed(()=>isArray(u.value.features)?u.value.features:[]);return()=>{var b;return m.value.length?h$4("div",{class:"features"},(b=u.value.features)==null?void 0:b.map(T=>{const $=[h$4("h2",[h$4(Icon,{icon:T.icon}),h$4("span",{innerHTML:T.title})]),h$4("p",{innerHTML:T.details})];return T.link?isLinkExternal(T.link)?h$4("a",{class:"feature link",href:T.link,role:"navigation","aria-label":T.title,target:"_blank"},$):h$4(RouterLink,{class:"feature link",to:T.link,role:"navigation","aria-label":T.title},()=>$):h$4("div",{class:"feature"},$)})):null}}}),MarkdownContent=({custom:u})=>h$4(Content,{class:["theme-hope-content",{custom:u}]});MarkdownContent.displayName="MarkdownContent";MarkdownContent.props={custom:Boolean};const HomeHero=defineComponent({name:"HomeHero",setup(u,{slots:m}){const b=usePageFrontmatter(),T=useSiteLocaleData(),$=computed(()=>b.value.heroText===!1?!1:b.value.heroText||T.value.title||"Hello"),j=computed(()=>b.value.tagline===!1?!1:b.value.tagline||T.value.description||"Welcome to your VuePress site"),Z=computed(()=>b.value.heroImage?withBase(b.value.heroImage):null),W=computed(()=>b.value.heroImageDark?withBase(b.value.heroImageDark):null),U=computed(()=>b.value.heroAlt||$.value||"hero"),Y=computed(()=>b.value.actions??[]);return()=>{var nn,tn;return h$4("header",{class:"hero"},[((nn=m.heroImage)==null?void 0:nn.call(m))||h$4(DropTransition,{appear:!0,type:"group"},()=>[Z.value?h$4("img",{key:"light",class:{light:W.value},src:Z.value,alt:U.value}):null,W.value?h$4("img",{key:"dark",class:"dark",src:W.value,alt:U.value}):null]),((tn=m.heroInfo)==null?void 0:tn.call(m))||h$4("div",{class:"hero-info"},[$.value?h$4(DropTransition,{appear:!0,delay:.04},()=>h$4("h1",{id:"main-title"},$.value)):null,j.value?h$4(DropTransition,{appear:!0,delay:.08},()=>h$4("p",{class:"description"},j.value)):null,Y.value.length?h$4(DropTransition,{appear:!0,delay:.12},()=>h$4("p",{class:"actions"},Y.value.map(an=>h$4(AutoLink,{class:["action-button",an.type||"default"],config:an,noExternalLinkIcon:!0})))):null])])}}}),homePage="",HomePage=defineComponent({name:"HopePage",setup(u,{slots:m}){const b=usePure(),T=usePageFrontmatter();return()=>{var $,j,Z;return h$4("main",{class:["home project",{pure:b.value}],id:"main-content","aria-labelledby":T.value.heroText===null?void 0:"main-title"},[($=m.top)==null?void 0:$.call(m),h$4(HomeHero),h$4(DropTransition,{appear:!0,delay:.16},()=>h$4(HomeFeatures)),(j=m.center)==null?void 0:j.call(m),h$4(DropTransition,{appear:!0,delay:.24},()=>h$4(MarkdownContent,{custom:!0})),(Z=m.bottom)==null?void 0:Z.call(m)])}}}),breadcrumb="",BreadCrumb=defineComponent({name:"BreadCrumb",setup(){const u=useRouter(),m=useRoute(),b=useRouteLocale(),T=usePageFrontmatter(),$=useThemeLocaleData(),j=ref([]),Z=computed(()=>(T.value.breadcrumb||T.value.breadcrumb!==!1&&$.value.breadcrumb!==!1)&&j.value.length>1),W=computed(()=>T.value.breadcrumbIcon||T.value.breadcrumbIcon!==!1&&$.value.breadcrumbIcon!==!1),U=()=>{const Y=u.getRoutes(),nn=getAncestorLinks(m,b.value).map(tn=>{const an=Y.find(en=>en.path===tn);if(an){const{meta:en,path:on}=ut(u,an.path),sn=en.s||en.title;if(sn)return{title:sn,icon:en.i,path:on}}return null}).filter(tn=>tn!==null);nn.length>1&&(j.value=nn)};return onMounted(()=>{U(),watch(()=>m.path,U)}),()=>h$4("nav",{class:["breadcrumb",{disable:!Z.value}]},Z.value?h$4("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},j.value.map((Y,nn)=>h$4("li",{class:{"is-active":j.value.length-1===nn},property:"itemListElement",typeof:"ListItem"},[h$4(RouterLink,{to:Y.path,property:"item",typeof:"WebPage"},()=>[W.value?h$4(Icon,{icon:Y.icon}):null,h$4("span",{property:"name"},Y.title||"Unknown")]),h$4("meta",{property:"position",content:nn+1})]))):[])}}),pageNav="",resolveFromFrontmatterConfig=u=>u===!1?!1:isString$1(u)?useAutoLink(u,!0):isPlainObject(u)?u:null,resolveFromSidebarItems=(u,m,b)=>{const T=u.findIndex($=>$.link===m);if(T!==-1){const $=u[T+b];return $!=null&&$.link?$:null}for(const $ of u)if($.children){const j=resolveFromSidebarItems($.children,m,b);if(j)return j}return null},PageNav=defineComponent({name:"PageNav",setup(){const u=useThemeLocaleData(),m=usePageFrontmatter(),b=useSidebarItems(),T=useRoute(),$=useNavigate(),j=computed(()=>{const W=resolveFromFrontmatterConfig(m.value.prev);return W===!1?null:W||(u.value.prevLink===!1?null:resolveFromSidebarItems(b.value,T.path,-1))}),Z=computed(()=>{const W=resolveFromFrontmatterConfig(m.value.next);return W===!1?null:W||(u.value.nextLink===!1?null:resolveFromSidebarItems(b.value,T.path,1))});return useEventListener("keydown",W=>{W.altKey&&(W.key==="ArrowRight"?Z.value&&($(Z.value.link),W.preventDefault()):W.key==="ArrowLeft"&&j.value&&($(j.value.link),W.preventDefault()))}),()=>j.value||Z.value?h$4("nav",{class:"page-nav"},[j.value?h$4(AutoLink,{class:"prev",config:j.value},()=>{var W,U;return[h$4("div",{class:"hint"},[h$4("span",{class:"arrow left"}),u.value.metaLocales.prev]),h$4("div",{class:"link"},[h$4(Icon,{icon:(W=j.value)==null?void 0:W.icon}),(U=j.value)==null?void 0:U.text])]}):null,Z.value?h$4(AutoLink,{class:"next",config:Z.value},()=>{var W,U;return[h$4("div",{class:"hint"},[u.value.metaLocales.next,h$4("span",{class:"arrow right"})]),h$4("div",{class:"link"},[(W=Z.value)==null?void 0:W.text,h$4(Icon,{icon:(U=Z.value)==null?void 0:U.icon})])]}):null]):null}}),AuthorIcon=()=>h$4(st,{name:"author"},()=>h$4("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));AuthorIcon.displayName="AuthorIcon";const CalendarIcon=()=>h$4(st,{name:"calendar"},()=>h$4("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));CalendarIcon.displayName="CalendarIcon";const CategoryIcon$1=()=>h$4(st,{name:"category"},()=>h$4("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));CategoryIcon$1.displayName="CategoryIcon";const EyeIcon=()=>h$4(st,{name:"eye"},()=>h$4("path",{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"}));EyeIcon.displayName="EyeIcon";const FireIcon=()=>h$4(st,{name:"fire"},()=>h$4("path",{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"}));FireIcon.displayName="FireIcon";const TagIcon$1=()=>h$4(st,{name:"tag"},()=>h$4("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));TagIcon$1.displayName="TagIcon";const TimerIcon=()=>h$4(st,{name:"timer"},()=>h$4("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));TimerIcon.displayName="TimerIcon";const WordIcon=()=>h$4(st,{name:"word"},()=>[h$4("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),h$4("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);WordIcon.displayName="WordIcon";const useMetaLocale=()=>{const u=useThemeLocaleData();return computed(()=>u.value.metaLocales)},readingTimeLocales={"/tw/":{word:"約 $word 字",less1Minute:"小於 1 分鐘",time:"大约 $time 分鐘"},"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}},editLinkPatterns={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},resolveEditLink=({docsRepo:u,docsBranch:m,docsDir:b,filePathRelative:T,editLinkPattern:$})=>{if(!T)return null;const j=resolveRepoType(u);let Z;return $?Z=$:j!==null&&(Z=editLinkPatterns[j]),Z?Z.replace(/:repo/,isLinkHttp(u)?u:`https://github.com/${u}`).replace(/:branch/,m).replace(/:path/,removeLeadingSlash(`${removeEndingSlash(b)}/${T}`)):null},useEditLink=()=>{const u=useThemeLocaleData(),m=usePageData(),b=usePageFrontmatter();return computed(()=>{const{repo:T,docsRepo:$=T,docsBranch:j="main",docsDir:Z="",editLink:W,editLinkPattern:U=""}=u.value;if(!(b.value.editLink??W??!0)||!$)return null;const nn=resolveEditLink({docsRepo:$,docsBranch:j,docsDir:Z,editLinkPattern:U,filePathRelative:m.value.filePathRelative});return nn?{text:u.value.metaLocales.editLink,link:nn}:null})},useUpdateTime=()=>{const u=useSiteLocaleData(),m=useThemeLocaleData(),b=usePageData(),T=usePageFrontmatter();return computed(()=>{var Z,W;return!(T.value.lastUpdated??m.value.lastUpdated??!0)||!((Z=b.value.git)!=null&&Z.updatedTime)?null:new Date((W=b.value.git)==null?void 0:W.updatedTime).toLocaleString(u.value.lang)})},useContributors=()=>{const u=useThemeLocaleData(),m=usePageData(),b=usePageFrontmatter();return computed(()=>{var $;return b.value.contributors??u.value.contributors??!0?(($=m.value.git)==null?void 0:$.contributors)??null:null})},AuthorInfo=defineComponent({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(u){const m=useMetaLocale();return()=>u.author.length?h$4("span",{class:"author-info","aria-label":`${m.value.author}${u.pure?"":"🖊"}`,...u.pure?{}:{"data-balloon-pos":"down"}},[h$4(AuthorIcon),h$4("span",u.author.map(b=>b.url?h$4("a",{class:"author-item",href:b.url,target:"_blank",rel:"noopener noreferrer"},b.name):h$4("span",{class:"author-item"},b.name))),h$4("span",{property:"author",content:u.author.map(b=>b.name).join(", ")})]):null}}),category="",CategoryInfo=defineComponent({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(u){const m=useRouter(),b=useRoute(),T=useMetaLocale(),$=(j,Z="")=>{Z&&b.path!==Z&&(j.preventDefault(),m.push(Z))};return()=>u.category.length?h$4("span",{class:"category-info","aria-label":`${T.value.category}${u.pure?"":"🌈"}`,...u.pure?{}:{"data-balloon-pos":"down"}},[h$4(CategoryIcon$1),...u.category.map(({name:j,path:Z})=>h$4("span",{class:["category-item",{[`category${Ut(j,9)}`]:!u.pure,clickable:Z}],role:Z?"navigation":"",onClick:W=>$(W,Z)},j)),h$4("meta",{property:"articleSection",content:u.category.map(({name:j})=>j).join(",")})]):null}}),DateInfo=defineComponent({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(u){const m=usePageLang(),b=useMetaLocale();return()=>{var T,$;return u.date?h$4("span",{class:"date-info","aria-label":`${b.value.date}${u.pure?"":"📅"}`,...u.pure?{}:{"data-balloon-pos":"down"}},[h$4(CalendarIcon),h$4("span",h$4(ClientOnly,()=>{var j;return u.localizedDate||((j=u.date.value)==null?void 0:j.toLocaleDateString(m.value))})),h$4("meta",{property:"datePublished",content:(($=(T=u.date)==null?void 0:T.value)==null?void 0:$.toISOString())||""})]):null}}});defineComponent({name:"PageViewInfo",inheritAttrs:!1,props:{pageview:{type:[Boolean,String],default:!1},pure:Boolean},setup(u){const m=useRoute(),b=useMetaLocale(),T=ref(0),$=()=>{const j=document.querySelector(".waline-pageview-count");if(j){const Z=j.textContent;Z&&!isNaN(Number(Z))?T.value=Number(Z):setTimeout($,500)}};return onMounted(()=>{setTimeout($,1500)}),watch(()=>m.path,(j,Z)=>{j!==Z&&setTimeout($,500)}),()=>u.pageview?h$4("span",{class:"visitor-info","aria-label":`${b.value.views}${u.pure?"":"🔢"}`,...u.pure?{}:{"data-balloon-pos":"down"}},[h$4(T.value<1e3?EyeIcon:FireIcon),h$4("span",{class:"waline-pageview-count","data-path":typeof u.pageview=="string"?u.pageview:withBase(m.path)},"...")]):null}});const ReadingTimeInfo=defineComponent({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},pure:Boolean},setup(u){const m=useMetaLocale(),b=Mt(readingTimeLocales),T=computed(()=>{if(!u.readingTime)return null;const{minutes:$}=u.readingTime;return $<1?{text:b.value.less1Minute,time:"PT1M"}:{text:b.value.time.replace("$time",Math.round($).toString()),time:`PT${Math.round($)}M`}});return()=>T.value?h$4("span",{class:"reading-time-info","aria-label":`${m.value.readingTime}${u.pure?"":"⌛"}`,...u.pure?{}:{"data-balloon-pos":"down"}},[h$4(TimerIcon),h$4("span",T.value.text),h$4("meta",{property:"timeRequired",content:T.value.time})]):null}}),tag="",TagInfo=defineComponent({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(u){const m=useRouter(),b=useRoute(),T=useMetaLocale(),$=(j,Z="")=>{Z&&b.path!==Z&&(j.preventDefault(),m.push(Z))};return()=>u.tag.length?h$4("span",{class:"tag-info","aria-label":`${T.value.tag}${u.pure?"":"🏷"}`,...u.pure?{}:{"data-balloon-pos":"down"}},[h$4(TagIcon$1),...u.tag.map(({name:j,path:Z})=>h$4("span",{class:["tag-item",{[`tag-item${Ut(j,9)}`]:!u.pure,clickable:Z}],role:Z?"navigation":"",onClick:W=>$(W,Z)},j)),h$4("meta",{property:"keywords",content:u.tag.map(({name:j})=>j).join(",")})]):null}}),OriginalInfo=defineComponent({name:"OriginalMark",inheritAttrs:!1,props:{isOriginal:Boolean},setup(u){const m=useMetaLocale();return()=>u.isOriginal?h$4("span",{class:"origin"},m.value.origin):null}}),WordInfo=defineComponent({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},pure:Boolean},setup(u){const m=useMetaLocale(),b=Mt(readingTimeLocales),T=computed(()=>{var j;return(j=u.readingTime)==null?void 0:j.words.toString()}),$=computed(()=>b.value.word.replace("$word",T.value||""));return()=>T.value?h$4("span",{class:"words-info","aria-label":`${m.value.words}${u.pure?"":"🔠"}`,...u.pure?{}:{"data-balloon-pos":"down"}},[h$4(WordIcon),h$4("span",$.value),h$4("meta",{property:"wordCount",content:T.value})]):null}}),pageInfo="",PageInfo=defineComponent({name:"PageInfo",components:{AuthorInfo,CategoryInfo,DateInfo,OriginalInfo,PageViewInfo:()=>null,ReadingTimeInfo,TagInfo,WordInfo},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","Category","Tag","ReadingTime"]},info:{type:Object,required:!0}},setup(u){const m=usePure();return()=>u.items?h$4("div",{class:"page-info"},u.items.map(b=>h$4(resolveComponent(`${b}Info`),{...u.info,pure:m.value}))):null}}),pageTitle="",PageTitle=defineComponent({name:"PageTitle",setup(){const u=usePageData(),m=usePageFrontmatter(),b=useThemeLocaleData(),{info:T,items:$}=usePageInfo();return()=>h$4("div",{class:"page-title"},[h$4("h1",[b.value.titleIcon!==!1?h$4(Icon,{icon:m.value.icon}):null,u.value.title]),h$4(PageInfo,{info:T.value,...$.value===null?{}:{items:$.value}}),h$4("hr")])}}),EditIcon=()=>h$4(st,{name:"edit"},()=>[h$4("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),h$4("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);EditIcon.displayName="EditIcon";const NotFoundIcon=()=>h$4("svg",{xmlns:"http://www.w3.org/2000/svg",class:"not-found-icon",viewBox:"0 0 178 130",innerHTML:'<defs><linearGradient id="b" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e9e9e9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="c" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dcdcdc"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="d" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#f1f1f1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="e" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dedede"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="f" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e8e8e8"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="g" x1=".213" y1="1.265" x2=".846" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f5f5f5"/></linearGradient><linearGradient id="h" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#c5c5c5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="i" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#acacac"/><stop offset="1" stop-color="#f2f2f2" stop-opacity=".388"/></linearGradient><clipPath id="a"><path transform="translate(744 1111)" fill="none" d="M0 0h178v130H0z"/></clipPath></defs><g transform="translate(-744 -1111)" clip-path="url(#a)"><path d="M0 10.795 36.6 0v93.779L0 104.574z" transform="translate(772.466 1122.142)" fill="url(#b)"/><path d="M-8.492 10.642-26.361-.469v93.78l17.868 11.111z" transform="translate(780.958 1122.293)" fill="url(#c)"/><path d="M-8.5 5.55 28.106-5.3 10.228-16.437l-36.6 10.845z" transform="translate(780.963 1127.438)" fill="url(#d)"/><path d="M0 10.539 35.741 0v91.56L0 102.1z" transform="translate(870.158 1123.617)" fill="url(#d)"/><path d="M-8.913 10.38-26.361-.469v91.562l17.448 10.848z" transform="translate(879.071 1123.775)" fill="url(#e)"/><path d="m-8.918 5.032 35.741-10.59L9.366-16.437-26.375-5.848z" transform="translate(879.076 1129.175)" fill="url(#d)"/><path d="M0 9.137 30.839 0v79.381L0 88.519z" transform="translate(799.678 1151.579)" fill="url(#f)"/><path d="m-11.306 8.936-15.054-9.4v79.377l15.054 9.4z" transform="translate(810.985 1151.78)" fill="url(#c)"/><path d="M-11.313 2.087 19.526-7.05 4.464-16.437-26.375-7.3z" transform="translate(810.991 1158.63)" fill="url(#g)"/><path d="M178 53H0a51.361 51.361 0 0 1 10.453-20.952 74.532 74.532 0 0 1 19.742-16.811A103.3 103.3 0 0 1 57.089 4.058a127.515 127.515 0 0 1 63.823 0 103.3 103.3 0 0 1 26.894 11.179 74.532 74.532 0 0 1 19.741 16.811A51.363 51.363 0 0 1 178 53z" transform="translate(744 1187.549)" fill="url(#h)"/><path d="m814.529 1199.586-1.272 1.212h2.3l1.2-1.212zM816.725 1194.909l-1.272 1.212h2.3l1.263-1.212zM863.284 1199.585l-1.272 1.212h2.3l1.2-1.212zM865.519 1194.9l-1.272 1.212h2.3l1.263-1.212z" fill="#cbcbcb"/><path d="m799.527 1191.21 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#c6c6c6"/><path d="m798.306 1192.431 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#b2b2b2"/><path d="m-27.694-19.435 10.182 14.517h4.381l-9.931-14.352h14.876v-2.606h-19.508zm13.081 6.273h4.152v-11.8h-4.152zM6.115-25.156q-4.256 0-6.457 1.5a4.8 4.8 0 0 0-2.2 4.191v9.113a4.784 4.784 0 0 0 2.212 4.2 11.511 11.511 0 0 0 6.447 1.5q4.256 0 6.457-1.489a4.786 4.786 0 0 0 2.2-4.2v-9.113a4.784 4.784 0 0 0-2.212-4.2 11.511 11.511 0 0 0-6.447-1.502zm0 2.675a5.705 5.705 0 0 1 3.328.779 2.6 2.6 0 0 1 1.074 2.24v9.113a2.607 2.607 0 0 1-1.064 2.24 5.7 5.7 0 0 1-3.338.779 5.7 5.7 0 0 1-3.338-.779 2.607 2.607 0 0 1-1.064-2.24v-9.113A2.6 2.6 0 0 1 2.788-21.7a5.705 5.705 0 0 1 3.327-.782zm14.927 3.047L31.224-4.918h4.381l-9.931-14.351H40.55v-2.606H21.043zm13.081 6.273h4.152v-11.8h-4.151z" transform="translate(826 1226.245)" opacity=".32" fill="url(#i)"/><g fill="#e6e6e6"><path d="m858.428 1169.23-1.2 1.259h4.388l1.178-1.259zM802.944 1192.187l1.288-1.375h7.143v1.375zm8.415-9.25 1.273-1.234h4.15l-1.235 1.234zm-2.855-12.469 1.198-1.259h4.367l-1.178 1.259zM861.362 1181.678l-1.27 1.3h4.188l1.236-1.3zM865.519 1190.9l-1.27 1.3h2.3l1.162-1.3zM852.838 1190.791l-1.207 1.508h8.447v-1.508z"/></g></g>'}),pageMeta="",PageMeta=defineComponent({name:"PageMeta",setup(){const u=useThemeLocaleData(),m=useEditLink(),b=useUpdateTime(),T=useContributors();return()=>{const{metaLocales:$}=u.value;return h$4("footer",{class:"page-meta"},[m.value?h$4("div",{class:"meta-item edit-link"},h$4(AutoLink,{class:"label",config:m.value},{before:()=>h$4(EditIcon)})):null,b.value?h$4("div",{class:"meta-item update-time"},[h$4("span",{class:"label"},`${$.lastUpdated}: `),h$4(ClientOnly,()=>h$4("span",{class:"info"},b.value))]):null,T.value&&T.value.length?h$4("div",{class:"meta-item contributors"},[h$4("span",{class:"label"},`${$.contributors}: `),T.value.map(({email:j,name:Z},W)=>[h$4("span",{class:"contributor",title:`email: ${j}`},Z),W!==T.value.length-1?",":""])]):null])}}}),toc="",renderHeader=({title:u,level:m,slug:b})=>h$4(RouterLink,{to:`#${b}`,class:["toc-link",`level${m}`]},()=>u),renderChildren=(u,m)=>{const b=useRoute();return u.length&&m>0?h$4("ul",{class:"toc-list"},u.map(T=>[h$4("li",{class:["toc-item",{active:Ht(b,`#${T.slug}`)}]},renderHeader(T)),renderChildren(T.children,m-1)])):null},TOC=defineComponent({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},setup(u){const m=useRoute(),b=usePageData(),T=useMetaLocale(),$=ref(),j=Z=>{var W;(W=$.value)==null||W.scrollTo({top:Z,behavior:"smooth"})};return onMounted(()=>{watch(()=>m.hash,Z=>{if($.value){const W=document.querySelector(`#toc a.toc-link[href$="${Z}"]`);if(!W)return;const{top:U,height:Y}=$.value.getBoundingClientRect(),{top:nn,height:tn}=W.getBoundingClientRect();nn<U?j($.value.scrollTop+nn-U):nn+tn>U+Y&&j($.value.scrollTop+nn+tn-U-Y)}})}),()=>{const Z=u.items.length?renderChildren(u.items,u.headerDepth):b.value.headers?renderChildren(b.value.headers,u.headerDepth):null;return Z?h$4("div",{class:"toc-place-holder"},[h$4("aside",{id:"toc"},[h$4("div",{class:"toc-header"},T.value.toc),h$4("div",{class:"toc-wrapper",ref:$},[Z])])]):null}}}),page$1="",NormalPage=defineComponent({name:"NormalPage",setup(u,{slots:m}){const b=usePageFrontmatter(),{isDarkMode:T}=useDarkMode(),$=useThemeLocaleData(),j=computed(()=>b.value.toc||b.value.toc!==!1&&$.value.toc!==!1);return()=>h$4("main",{class:"page",id:"main-content"},h$4(St("LocalEncrypt")?resolveComponent("LocalEncrypt"):wt,()=>{var Z,W,U,Y;return[(Z=m.top)==null?void 0:Z.call(m),h$4(BreadCrumb),h$4(PageTitle),j.value?h$4(TOC,{headerDepth:b.value.headerDepth??$.value.headerDepth??2}):null,(W=m.contentBefore)==null?void 0:W.call(m),h$4(MarkdownContent),(U=m.contentAfter)==null?void 0:U.call(m),h$4(PageMeta),h$4(PageNav),St("CommentService")?h$4(resolveComponent("CommentService"),{darkmode:T.value}):null,(Y=m.bottom)==null?void 0:Y.call(m)]}))}}),fadeSlideY="",FadeSlideY=defineComponent({name:"FadeSlideY",setup(u,{slots:m}){const b=useScrollPromise(),T=b.resolve,$=b.pending;return()=>h$4(Transition,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:T,onBeforeLeave:$},()=>{var j;return(j=m.default)==null?void 0:j.call(m)})}}),skipLink="",SkipLink=defineComponent({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(u){const m=useRoute(),b=useThemeLocaleData(),T=ref();watch(()=>m.path,()=>T.value.focus());const $=({target:j})=>{const Z=document.querySelector(j.hash);if(Z){const W=()=>{Z.removeAttribute("tabindex"),Z.removeEventListener("blur",W)};Z.setAttribute("tabindex","-1"),Z.addEventListener("blur",W),Z.focus(),window.scrollTo(0,0)}};return()=>[h$4("span",{ref:T,tabindex:"-1"}),h$4("a",{href:`#${u.content}`,class:"skip-link sr-only",onClick:$},b.value.routeLocales.skipToContent)]}}),Layout=defineComponent({name:"Layout",setup(){const u=useThemeData(),m=useThemeLocaleData(),b=usePageData(),T=usePageFrontmatter(),$=useMobile(),j=computed(()=>m.value.blog.sidebarDisplay||u.value.blog.sidebarDisplay||"mobile");return()=>[h$4(SkipLink),h$4(CommonWrapper,{},{default:()=>T.value.home?h$4(HomePage):h$4(FadeSlideY,()=>h$4(NormalPage,{key:b.value.path})),...j.value!=="none"?{navScreenBottom:()=>h$4(resolveComponent("BloggerInfo"))}:{},...!$.value&&j.value==="always"?{sidebar:()=>h$4(resolveComponent("BloggerInfo"))}:{}})]}}),notFound="",NotFound=defineComponent({name:"NotFound",setup(){const u=useRouteLocale(),m=useThemeLocaleData(),b=()=>{const $=m.value.routeLocales.notFoundMsg;return $[Math.floor(Math.random()*$.length)]},{navigate:T}=useLink({to:m.value.home??u.value});return()=>[h$4(SkipLink),h$4(CommonWrapper,{noSidebar:!0},()=>h$4("main",{class:"page not-found",id:"main-content"},[h$4(NotFoundIcon),h$4("blockquote",b()),h$4("button",{class:"action-button",onClick:()=>{window.history.go(-1)}},m.value.routeLocales.back),h$4("button",{class:"action-button",onClick:()=>T()},m.value.routeLocales.home)]))]}}),index="",icons={Gitee:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>',GitHub:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>',QQ:'<svg xmlns="http://www.w3.org/2000/svg" class="icon qq-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#5EAADE"/><path fill="#fff" d="M729.46 627.3c-3.157-39.628-24.045-83.747-32.624-105.91l-22.084-57.047c-.702-23.73 6.312-78.322-30.511-146.61s-110.82-74.446-124.497-75.147c-13.677-.701-99.248-1.403-141.331 72.945-42.084 74.347-30.745 148.812-30.745 148.812l-23.523 57.478c-.001.002-10.962 26.223-20.43 58.135-9.469 31.914-18.938 82.064-9.469 92.234 9.47 10.17 43.837-46.643 46.993-51.903 0 0 2.456 27.18 8.943 41.383l.81 1.776.33.723.38.826.3.652.444.96.203.436a281.465 281.465 0 0 0 1.917 4.025l.189.386c.231.473.468.953.711 1.442l.146.292c6.886 13.807 18.61 33.823 37.443 50.42l.018.016-1.184.387c-10.667 3.516-31.694 11.21-40.625 19.82-1.717 1.655-2.987 3.344-3.65 5.045-5.376 13.794 4.208 15.43 20.575 16.366 16.366.934 94.923 3.04 132.564-2.221.407-.056.787-.114 1.17-.171 2.711.094 5.324.142 7.83.16l.151.002c.836.005 1.663.008 2.475.008.496 0 1.015-.002 1.542-.006l.21-.001a222.593 222.593 0 0 0 5.462-.107c.26.038.508.076.778.114 37.642 5.26 116.198 3.156 132.564 2.22 16.366-.934 25.951-2.571 20.574-16.365-4.302-11.037-34.175-21.62-45.956-25.413a141.388 141.388 0 0 0 7.958-7.645l.237-.245a142.494 142.494 0 0 0 2.53-2.702c42.435-46.643 38.928-76.101 40.682-92.935 0 0 35.775 51.553 43.488 53.306 7.713 1.754 10.169-6.31 7.012-45.94z"/></svg>',Qzone:'<svg xmlns="http://www.w3.org/2000/svg" class="icon qzone-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#0985DD"/><path fill="#fff" d="M722.38 595.24c22.486-4.056 11.345-12.424 2.156-11.346-16.685 1.72-40.43 1.925-66.562 1.284l3.029 17.79a656.641 656.641 0 0 0 61.402-7.702l-.025-.026zm68.95-174.915a5.287 5.287 0 0 0-4.493-3.645L598.42 389.29l-84.326-170.628c-1.925-3.594-7.958-3.594-9.857 0L419.885 389.29l-188.417 27.39a5.338 5.338 0 0 0-4.466 3.645 5.493 5.493 0 0 0 1.488 5.57l136.36 132.92-32.088 187.519a5.263 5.263 0 0 0 2.13 5.39c1.695 1.284 3.851 1.463 5.776.385l168.651-88.407 168.524 88.638 2.567.642 3.209-1.079c1.72-1.283 2.566-3.208 2.13-5.34l-24.591-143.648c-27.21 2.156-54.37 3.183-76.42 3.183-77.267 0-135.075-3.645-135.948-3.645a16.48 16.48 0 0 1-14.785-11.757 16.247 16.247 0 0 1 5.981-17.764l155.431-113.05c-99.959-7.906-183.873-6.418-184.721-6.418-13.502.642-25.67-3.645.642-14.375 4.518-1.694 109.2-23.72 230.362-7.445 6.673.847 12.013 5.75 13.733 12.194a16.61 16.61 0 0 1-6.263 17.302L497.204 571.598c27.826 5.802 100.37 12.014 160.745 13.502l-4.519-26.312 136.308-132.97a5.338 5.338 0 0 0 1.54-5.544l.051.051z"/></svg>',Steam:'<svg xmlns="http://www.w3.org/2000/svg" class="icon steam-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="488" fill="#fff"/><path fill="#13227a" d="M1008 512c0 274-222.4 496-496.8 496-227.6 0-419.2-152.6-478-360.8l190.4 78.6c12.8 64.2 69.8 112.8 137.8 112.8 78.4 0 143.8-64.8 140.4-147l169-120.4c104.2 2.6 191.6-81.8 191.6-187 0-103.2-84-187-187.4-187s-187.4 84-187.4 187v2.4L369.2 558c-31-1.8-61.4 6.8-87 24.2L16 472.2C36.4 216.8 250.2 16 511.2 16 785.6 16 1008 238 1008 512zM327.4 768.6l-61-25.2a105.58 105.58 0 0 0 54.4 51.6c53.8 22.4 115.6-3.2 138-56.8 10.8-26 11-54.6.2-80.6-10.8-26-31-46.4-57-57.2-25.8-10.8-53.4-10.4-77.8-1.2l63 26c39.6 16.4 58.4 61.8 41.8 101.4-16.6 39.8-62 58.4-101.6 42zM675 508.8c-68.8 0-124.8-56-124.8-124.6s56-124.6 124.8-124.6 124.8 56 124.8 124.6S744 508.8 675 508.8zm.2-31.2c51.8 0 93.8-42 93.8-93.6 0-51.8-42-93.6-93.8-93.6s-93.8 42-93.8 93.6c.2 51.6 42.2 93.6 93.8 93.6z"/></svg>',Weibo:'<svg xmlns="http://www.w3.org/2000/svg" class="icon weibo-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#E6162D"/><path fill="#fff" d="M745.314 454.802c9.652 0 17.869-7.258 19.239-16.728a8.39 8.39 0 0 0 .261-2.12C779.445 302.233 657.02 325.25 657.02 325.25c-10.869 0-19.567 8.94-19.567 20.089 0 10.97 8.698 19.907 19.567 19.907 87.95-19.732 68.54 69.649 68.54 69.649-.004 11.06 8.842 19.908 19.754 19.908z"/><path fill="#fff" d="M731.054 221.409c-42.342-10.077-85.862-1.393-98.055.981-.938.09-1.829.994-2.697 1.17-.415.088-.673.532-.673.532-12.045 3.457-20.828 14.77-20.828 28.14 0 15.932 12.694 29.034 28.564 29.034 0 0 15.39-2.097 25.846-6.252 10.364-4.246 98.012-3.16 141.576 71.17 23.734 54.247 10.428 90.553 8.778 96.387 0 0-5.653 14.095-5.653 27.973 0 16.024 12.694 26.083 28.433 26.083 13.169 0 24.211-1.821 27.452-24.447h.172c46.768-158.386-57.183-232.81-132.915-250.771zm-44.083 282.78c-28.28-5.579-14.519-21.062-14.519-21.062s27.67-46.38-5.482-80.099c-41.104-41.761-140.966 5.314-140.966 5.314-38.144 12.032-28.02-5.49-22.629-35.31 0-35.13-11.844-94.596-113.445-59.47-101.49 35.309-188.654 159.03-188.654 159.03-60.603 82.207-52.56 145.747-52.56 145.747 15.128 140.268 161.749 178.772 275.782 187.89 119.967 9.564 281.905-42.045 330.988-148.064 49.105-106.193-40.126-148.22-68.515-153.975zM433.387 766.675c-119.124 5.658-215.394-55.053-215.394-135.851 0-80.887 96.27-145.748 215.394-151.328 119.162-5.58 215.634 44.333 215.634 125.052.002 80.79-96.475 156.626-215.634 162.127z"/><path fill="#fff" d="M409.603 532.773c-119.77 14.249-105.943 128.31-105.943 128.31s-1.22 36.117 32.126 54.513c70.084 38.593 142.248 15.224 178.723-32.634 36.474-47.888 15.086-164.346-104.906-150.189zM379.39 692.856c-22.343 2.665-40.385-10.437-40.385-29.463 0-18.94 16.02-38.768 38.387-41.143 25.694-2.485 42.431 12.56 42.431 31.588-.003 18.936-18.128 36.449-40.433 39.018zm70.626-61.146c-7.59 5.754-16.893 4.958-20.892-1.948-4.175-6.726-2.607-17.52 5.046-23.19 8.863-6.714 18.105-4.779 22.106 1.958 4.02 6.893 1.153 17.246-6.26 23.18z"/></svg>'},categoryMap={category:{"/":{path:"/category/",map:{}},"/tw/":{path:"/tw/category/",map:{}}},tag:{"/":{path:"/tag/",map:{学生的心理发展:{path:"/tag/%E5%AD%A6%E7%94%9F%E7%9A%84%E5%BF%83%E7%90%86%E5%8F%91%E5%B1%95/",keys:["v-78734286","v-76be69e7"]},自我调节学习:{path:"/tag/%E8%87%AA%E6%88%91%E8%B0%83%E8%8A%82%E5%AD%A6%E4%B9%A0/",keys:["v-d7f35016","v-d4899ed8","v-d11fed9a"]},学习心理:{path:"/tag/%E5%AD%A6%E4%B9%A0%E5%BF%83%E7%90%86/",keys:["v-0830f658"]},学生的个体差异:{path:"/tag/%E5%AD%A6%E7%94%9F%E7%9A%84%E4%B8%AA%E4%BD%93%E5%B7%AE%E5%BC%82/",keys:["v-42c0d274","v-3f572136","v-3bed6ff8"]},行为主义学习理论:{path:"/tag/%E8%A1%8C%E4%B8%BA%E4%B8%BB%E4%B9%89%E5%AD%A6%E4%B9%A0%E7%90%86%E8%AE%BA/",keys:["v-4680c3a5","v-48359c44","v-49ea74e3","v-4b9f4d82"]},认知学习理论:{path:"/tag/%E8%AE%A4%E7%9F%A5%E5%AD%A6%E4%B9%A0%E7%90%86%E8%AE%BA/",keys:["v-a33c1ef8","v-9fd26dba"]},建构主义学习理论:{path:"/tag/%E5%BB%BA%E6%9E%84%E4%B8%BB%E4%B9%89%E5%AD%A6%E4%B9%A0%E7%90%86%E8%AE%BA/",keys:["v-16431d63","v-17f7f602","v-19accea1"]},人本主义学习理论及应用:{path:"/tag/%E4%BA%BA%E6%9C%AC%E4%B8%BB%E4%B9%89%E5%AD%A6%E4%B9%A0%E7%90%86%E8%AE%BA%E5%8F%8A%E5%BA%94%E7%94%A8/",keys:["v-7e244a42","v-7fd922e1"]},学习动机:{path:"/tag/%E5%AD%A6%E4%B9%A0%E5%8A%A8%E6%9C%BA/",keys:["v-33f511be","v-308b6080","v-2d21af42"]},知识建构:{path:"/tag/%E7%9F%A5%E8%AF%86%E5%BB%BA%E6%9E%84/",keys:["v-4de6a400","v-4f9b7c9f","v-5150553e"]},问题解决与创造性:{path:"/tag/%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E4%B8%8E%E5%88%9B%E9%80%A0%E6%80%A7/",keys:["v-94705e42","v-9106ad04","v-8d9cfbc6","v-8a334a88"]}}},"/tw/":{path:"/tw/tag/",map:{}}}},typeMap={article:{"/":{path:"/article/",keys:["v-8a291b10","v-ba943e2c","v-86bf69d2","v-8355b894","v-7fec0756","v-7c825618","v-7918a4da","v-75aef39c","v-7245425e","v-6edb9120","v-c4d73988","v-c16d884a","v-adce56f8","v-aa64a5ba","v-a6faf47c","v-a391433e","v-a0279200","v-4bc61c86","v-4d7af525","v-4f2fcdc4","v-50e4a663","v-be03d70c","v-ba9a25ce","v-b7307490","v-b3c6c352","v-b05d1214","v-acf360d6","v-a989af98","v-a61ffe5a","v-6523da9a","v-61ba295c","v-5e50781e","v-4dcff3f2","v-7b98493e","v-46fc9176","v-4392e038","v-580d07ac","v-54a3566e","v-5139a530","v-e8abe160","v-2c6a41dc","v-e5423022","v-e1d87ee4","v-de6ecda6","v-db051c68","v-d79b6b2a","v-d431b9ec","v-d0c808ae","v-cd5e5770","v-7a3d293e","v-7bf201dd","v-7da6da7c","v-7f5bb31b","v-6db12241","v-6f65fae0","v-711ad37f","v-72cfac1e","v-7b6aaadb","v-7d1f837a","v-3968508c","v-35fe9f4e","v-3294ee10","v-4b2d0499","v-4ce1dd38","v-4e96b5d7","v-504b8e76","v-99e39d10","v-9679ebd2","v-93103a94","v-8fa68956","v-54db61c0","v-5171b082","v-4a9e4e06","v-3d737bff","v-3f28549e","v-b556ae44","v-b1ecfd06","v-ae834bc8","v-0d35d5bd","v-0eeaae5c","v-7517029c","v-76cbdb3b","v-7880b3da","v-7a358c79","v-7bea6518","v-460fa10a","v-42a5efcc","v-3f3c3e8e","v-44d95c5a","v-468e34f9","v-48430d98","v-a68aed8e","v-a3213c50","v-9fb78b12","v-9c4dd9d4","v-6e0450c0","v-405dc04a","v-56af9d1b","v-419d02c2","v-6dac6e9c","v-72386375","v-7c0d6123","v-1fe4fcb6","v-595a981a","v-4d741660","v-4c225352","v-a3515546","v-49951ef6","v-77ba32fe","v-15cd7890","v-09f986f3","v-5dfbdd9c","v-6f376f9b","v-3a6f6f77","v-13b93c5c","v-24a05012","v-2c765786","v-2e2b3025","v-465ffea1","v-4814d740","v-7f4b585e","v-d87569c6","v-45ff4572","v-47b41e11","v-4968f6b0","v-4b1dcf4f","v-a918da98","v-a5af295a","v-280a0150","v-600747e8","v-5c9d96aa","v-5c4704fd","v-3fb6678b","v-86449acc","v-6af6e8ce","v-2a9853ac","v-30670774","v-5d14f3ef","v-4a459580","v-1559ca3e","v-23a4ecb7","v-571d3aad","v-78734286","v-42c0d274","v-3f572136","v-3bed6ff8","v-4680c3a5","v-48359c44","v-49ea74e3","v-4b9f4d82","v-a33c1ef8","v-9fd26dba","v-16431d63","v-17f7f602","v-7e244a42","v-7fd922e1","v-76be69e7","v-d7f35016","v-d4899ed8","v-d11fed9a","v-0830f658","v-19accea1","v-33f511be","v-308b6080","v-2d21af42","v-4de6a400","v-4f9b7c9f","v-5150553e","v-94705e42","v-9106ad04","v-8d9cfbc6","v-8a334a88","v-9e737f80","v-6834cc22","v-69e9a4c1","v-9b09ce42","v-97a01d04","v-94366bc6","v-90ccba88","v-8d63094a","v-89f9580c","v-868fa6ce","v-8325f590","v-5d4b4ae5","v-f1b828a2","v-14b2ee8b","v-4cb3207b","v-49e3f347","v-4e67f91a","v-501cd1b9","v-51d1aa58","v-538682f7","v-553b5b96","v-56f03435","v-58a50cd4","v-5a59e573","v-7b0795a0","v-38de7212","v-71b4ee23","v-7369c6c2","v-751e9f61","v-76d37800","v-7888509f","v-eccb6170","v-4e07ff44"]},"/tw/":{path:"/tw/article/",keys:["v-b951f43e","v-ec3a9a88","v-116f78ac","v-505c0d8a","v-9fda70c6","v-6d7e9630","v-b21889d8","v-9a015ab4","v-0c92a298","v-0b98bc52","v-27dcd94b","v-75595410","v-24c6867e","v-39a6c9b9","v-a8d511d4","v-865edad6","v-bfedf586","v-43bcfb4c","v-53496dbd","v-dbfcd868","v-d893272a","v-e2b4a2ca","v-df4af18c","v-419b10cb","v-3f26983a","v-066f94b8","v-08246d57","v-09d945f6","v-0b8e1e95","v-0fca090c","v-0c6057ce","v-5194951e","v-18420c06","v-19f6e4a5","v-ac3ec312","v-f007d0f6","v-63b494e0","v-4ebda85f","v-d7bdeeb8","v-d41b788c","v-397f062e","v-5f165206","v-52fd4df8","v-53522f7d","v-86af121a","v-544b055e"]}},star:{"/":{path:"/star/",keys:["v-8a291b10","v-c4d73988","v-580d07ac","v-e8abe160"]},"/tw/":{path:"/tw/star/",keys:[]}},timeline:{"/":{path:"/timeline/",keys:["v-8a291b10","v-ba943e2c","v-86bf69d2","v-8355b894","v-7fec0756","v-7c825618","v-7918a4da","v-75aef39c","v-7245425e","v-6edb9120","v-c4d73988","v-c16d884a","v-adce56f8","v-aa64a5ba","v-a6faf47c","v-a391433e","v-a0279200","v-4bc61c86","v-4d7af525","v-4f2fcdc4","v-50e4a663","v-be03d70c","v-ba9a25ce","v-b7307490","v-b3c6c352","v-b05d1214","v-acf360d6","v-a989af98","v-a61ffe5a","v-6523da9a","v-61ba295c","v-5e50781e","v-4dcff3f2","v-7b98493e","v-46fc9176","v-4392e038","v-580d07ac","v-54a3566e","v-5139a530","v-e8abe160","v-2c6a41dc","v-e5423022","v-e1d87ee4","v-de6ecda6","v-db051c68","v-d79b6b2a","v-d431b9ec","v-d0c808ae","v-cd5e5770","v-7a3d293e","v-7bf201dd","v-7da6da7c","v-7f5bb31b","v-6db12241","v-6f65fae0","v-711ad37f","v-72cfac1e","v-7b6aaadb","v-7d1f837a","v-3968508c","v-35fe9f4e","v-3294ee10","v-4b2d0499","v-4ce1dd38","v-4e96b5d7","v-504b8e76","v-99e39d10","v-9679ebd2","v-93103a94","v-8fa68956","v-54db61c0","v-5171b082","v-4a9e4e06","v-3d737bff","v-3f28549e","v-b556ae44","v-b1ecfd06","v-ae834bc8","v-0d35d5bd","v-0eeaae5c","v-7517029c","v-76cbdb3b","v-7880b3da","v-7a358c79","v-7bea6518","v-460fa10a","v-42a5efcc","v-3f3c3e8e","v-44d95c5a","v-468e34f9","v-48430d98","v-a68aed8e","v-a3213c50","v-9fb78b12","v-9c4dd9d4","v-6e0450c0","v-405dc04a","v-56af9d1b","v-419d02c2","v-6dac6e9c","v-72386375","v-7c0d6123","v-1fe4fcb6","v-595a981a","v-4d741660","v-4c225352","v-a3515546","v-49951ef6","v-77ba32fe","v-15cd7890","v-09f986f3","v-5dfbdd9c","v-6f376f9b","v-3a6f6f77","v-13b93c5c","v-24a05012","v-2c765786","v-2e2b3025","v-465ffea1","v-4814d740","v-7f4b585e","v-d87569c6","v-45ff4572","v-47b41e11","v-4968f6b0","v-4b1dcf4f","v-a918da98","v-a5af295a","v-280a0150","v-600747e8","v-5c9d96aa","v-5c4704fd","v-3fb6678b","v-86449acc","v-6af6e8ce","v-2a9853ac","v-30670774","v-5d14f3ef","v-4a459580","v-1559ca3e","v-23a4ecb7","v-571d3aad","v-78734286","v-42c0d274","v-3f572136","v-3bed6ff8","v-4680c3a5","v-48359c44","v-49ea74e3","v-4b9f4d82","v-a33c1ef8","v-9fd26dba","v-16431d63","v-17f7f602","v-7e244a42","v-7fd922e1","v-76be69e7","v-d7f35016","v-d4899ed8","v-d11fed9a","v-0830f658","v-19accea1","v-33f511be","v-308b6080","v-2d21af42","v-4de6a400","v-4f9b7c9f","v-5150553e","v-94705e42","v-9106ad04","v-8d9cfbc6","v-8a334a88","v-9e737f80","v-6834cc22","v-69e9a4c1","v-9b09ce42","v-97a01d04","v-94366bc6","v-90ccba88","v-8d63094a","v-89f9580c","v-868fa6ce","v-8325f590","v-5d4b4ae5","v-f1b828a2","v-14b2ee8b","v-4cb3207b","v-49e3f347","v-4e67f91a","v-501cd1b9","v-51d1aa58","v-538682f7","v-553b5b96","v-56f03435","v-58a50cd4","v-5a59e573","v-7b0795a0","v-38de7212","v-71b4ee23","v-7369c6c2","v-751e9f61","v-76d37800","v-7888509f","v-eccb6170"]},"/tw/":{path:"/tw/timeline/",keys:["v-b951f43e","v-ec3a9a88","v-116f78ac","v-505c0d8a","v-9fda70c6","v-6d7e9630","v-b21889d8","v-9a015ab4","v-0c92a298","v-0b98bc52","v-27dcd94b","v-75595410","v-24c6867e","v-39a6c9b9","v-a8d511d4","v-865edad6","v-bfedf586","v-43bcfb4c","v-53496dbd","v-dbfcd868","v-d893272a","v-e2b4a2ca","v-df4af18c","v-419b10cb","v-3f26983a","v-066f94b8","v-08246d57","v-09d945f6","v-0b8e1e95","v-0fca090c","v-0c6057ce","v-5194951e","v-18420c06","v-19f6e4a5","v-ac3ec312","v-f007d0f6","v-63b494e0","v-4ebda85f","v-d7bdeeb8","v-d41b788c","v-397f062e","v-5f165206","v-52fd4df8","v-53522f7d","v-86af121a","v-544b055e"]}}},l=ref(categoryMap),k=(u="")=>{const m=useRouter(),b=useRoute(),T=useRouteLocale();return computed(()=>{var $;const j=u||(($=usePageFrontmatter().value.blog)==null?void 0:$.key)||"";if(!j)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const Z=m.getRoutes();if(!l.value[j])throw new Error(`useBlogCategory: key ${j} is invalid`);const W=l.value[j][T.value],U={path:W.path,map:{}};for(const Y in W.map){const nn=W.map[Y];U.map[Y]={path:nn.path,items:[]};for(const tn of nn.keys){const an=Z.find(({name:en})=>en===tn);if(an){const en=ut(m,an.path);U.map[Y].items.push({path:en.path,info:en.meta})}}b.path===nn.path&&(U.currentItems=U.map[Y].items)}return U})},_=ref(typeMap),C=(u="")=>{const m=useRouter(),b=useRouteLocale();return computed(()=>{var T;const $=u||((T=usePageFrontmatter().value.blog)==null?void 0:T.key)||"";if(!$)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!_.value[$])throw new Error(`useBlogType: key ${u} is invalid`);const j=m.getRoutes(),Z=_.value[$][b.value],W={path:Z.path,items:[]};for(const U of Z.keys){const Y=j.find(({name:nn})=>nn===U);if(Y){const nn=ut(m,Y.path);W.items.push({path:nn.path,info:nn.meta})}}return W})},categoryMapSymbol=Symbol.for("categoryMap"),useCategoryMap=()=>{const u=inject(categoryMapSymbol);if(!u)throw new Error("useCategoryMap() is called without provider.");return u},setupCategoryMap=()=>{const u=k("category");provide(categoryMapSymbol,u)},useBlogOptions=()=>{const u=useThemeData(),m=useThemeLocaleData();return computed(()=>({...u.value.blog,...m.value.blog}))},tagMapSymbol=Symbol.for("tagMap"),useTagMap=()=>{const u=inject(tagMapSymbol);if(!u)throw new Error("useTagMap() is called without provider.");return u},setupTagMap=()=>{const u=k("tag");provide(tagMapSymbol,u)},useArticleAuthor=u=>{const m=useThemeLocaleData();return computed(()=>{const{["a"]:b}=u.value;return b?Pt(b):b===!1?[]:Pt(m.value.author,!1)})},useArticleCategory=u=>{const m=useCategoryMap();return computed(()=>Rt(u.value.c).map(b=>({name:b,path:m.value.map[b].path})))},useArticleTag=u=>{const m=useTagMap();return computed(()=>Bt(u.value.g).map(b=>({name:b,path:m.value.map[b].path})))},useArticleDate=u=>computed(()=>{const{["d"]:m}=u.value;return m?Q$1(m):null}),useArticleInfo=u=>{const m=toRef(u,"info"),b=useBlogOptions(),T=useArticleAuthor(m),$=useArticleCategory(m),j=useArticleTag(m),Z=useArticleDate(m),W=computed(()=>({author:T.value,category:$.value,date:Z.value,localizedDate:m.value.l||"",tag:j.value,isOriginal:m.value.o||!1,readingTime:m.value.r||null,pageview:u.path})),U=computed(()=>b.value.articleInfo);return{info:W,items:U}},articlesSymbol=Symbol.for("articles"),useArticles=()=>{const u=inject(articlesSymbol);if(!u)throw new Error("useArticles() is called without provider.");return u},setupArticles=()=>{const u=C("article");provide(articlesSymbol,u)},starsSymbol=Symbol.for("stars"),useStars=()=>{const u=inject(starsSymbol);if(!u)throw new Error("useStars() is called without provider.");return u},setupStars=()=>{const u=C("star");provide(starsSymbol,u)},timelinesSymbol=Symbol.for("timelines"),useTimelines=()=>{const u=inject(timelinesSymbol);if(!u)throw new Error("useTimelines() is called without provider.");return u},setupTimelines=()=>{const u=C("timeline"),m=computed(()=>{const b=[];return u.value.items.forEach(({info:T,path:$})=>{var U;const{year:j,month:Z,day:W}=((U=Q$1(T.d))==null?void 0:U.info)||{};j&&Z&&W&&((!b[0]||b[0].year!==j)&&b.unshift({year:j,items:[]}),b[0].items.push({date:`${Z}/${W}`,info:T,path:$}))}),{...u.value,config:b.reverse()}});provide(timelinesSymbol,m)},setupBlog=()=>{setupArticles(),setupCategoryMap(),setupStars(),setupTagMap(),setupTimelines()},socialMedia="",SocialMedia=defineComponent({name:"SocialMedia",setup(){const u=useBlogOptions(),m=usePure(),b=computed(()=>{const T=u.value.medias;return T?Object.entries(T).map(([$,j])=>({name:$,icon:icons[$],url:j})):[]});return()=>b.value.length?h$4("div",{class:"social-media-wrapper"},b.value.map(({name:T,icon:$,url:j})=>h$4("a",{class:"social-media",href:j,rel:"noopener noreferrer",target:"_blank","aria-label":T,...m.value?{}:{"data-balloon-pos":"up"},innerHTML:$}))):null}}),bloggerInfo="",BloggerInfo=defineComponent({name:"BloggerInfo",setup(){const u=useBlogOptions(),m=useSiteLocaleData(),b=useThemeLocaleData(),T=useArticles(),$=useCategoryMap(),j=useTagMap(),Z=useTimelines(),W=useNavigate(),U=computed(()=>{var an;return u.value.name||((an=Pt(b.value.author)[0])==null?void 0:an.name)||m.value.title}),Y=computed(()=>u.value.avatar||b.value.logo),nn=computed(()=>b.value.blogLocales),tn=computed(()=>u.value.intro);return()=>h$4("div",{class:"blogger-info",vocab:"https://schema.org/",typeof:"Person"},[h$4("div",{class:"blogger",...tn.value?{style:{cursor:"pointer"},"aria-label":nn.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>W(tn.value)}:{}},[Y.value?h$4("img",{class:["blogger-avatar",{round:u.value.roundAvatar}],src:withBase(Y.value),property:"image",alt:"Blogger Avatar"}):null,U.value?h$4("div",{class:"blogger-name",property:"name"},U.value):null,u.value.description?h$4("div",{class:"blogger-description",innerHTML:u.value.description}):null,tn.value?h$4("meta",{property:"url",content:withBase(tn.value)}):null]),h$4("div",{class:"num-wrapper"},[h$4("div",{onClick:()=>W(T.value.path)},[h$4("div",{class:"num"},T.value.items.length),h$4("div",nn.value.article)]),h$4("div",{onClick:()=>W($.value.path)},[h$4("div",{class:"num"},Object.keys($.value.map).length),h$4("div",nn.value.category)]),h$4("div",{onClick:()=>W(j.value.path)},[h$4("div",{class:"num"},Object.keys(j.value.map).length),h$4("div",nn.value.tag)]),h$4("div",{onClick:()=>W(Z.value.path)},[h$4("div",{class:"num"},Z.value.items.length),h$4("div",nn.value.timeline)])]),h$4(SocialMedia)])}}),CategoryIcon=()=>h$4(st,{name:"category"},()=>h$4("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));CategoryIcon.displayName="CategoryIcon";const TagIcon=()=>h$4(st,{name:"tag"},()=>h$4("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));TagIcon.displayName="TagIcon";const TimelineIcon=()=>h$4(st,{name:"timeline"},()=>h$4("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));TimelineIcon.displayName="TimelineIcon";const SlideIcon=()=>h$4(st,{name:"slides"},()=>h$4("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));SlideIcon.displayName="SlideIcon";const StickyIcon=()=>h$4(st,{name:"sticky"},()=>[h$4("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);StickyIcon.displayName="StickyIcon";const ArticleIcon=()=>h$4(st,{name:"article"},()=>h$4("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));ArticleIcon.displayName="ArticleIcon";const BookIcon=()=>h$4(st,{name:"book"},()=>h$4("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));BookIcon.displayName="BookIcon";const LinkIcon=()=>h$4(st,{name:"link"},()=>h$4("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));LinkIcon.displayName="LinkIcon";const ProjectIcon=()=>h$4(st,{name:"project"},()=>h$4("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));ProjectIcon.displayName="ProjectIcon";const FriendIcon=()=>h$4(st,{name:"friend"},()=>h$4("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));FriendIcon.displayName="FriendIcon";const SlideDownIcon=()=>h$4(st,{name:"slide-down"},()=>h$4("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));SlideDownIcon.displayName="SlideDownIcon";const emptyIcon="",EmptyIcon=()=>h$4("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});EmptyIcon.displayName="EmptyIcon";const LockIcon=()=>h$4(st,{name:"lock"},()=>h$4("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));LockIcon.displayName="LockIcon";const articleItem="",ArticleItem=defineComponent({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},setup(u){const m=toRef(u,"info"),{info:b,items:T}=useArticleInfo(u);return()=>h$4("div",{class:"article-item"},h$4("article",{class:"article",vocab:"https://schema.org/",typeof:"Article"},[m.value.u?h$4(StickyIcon):null,h$4(RouterLink,{to:u.path},()=>[h$4("header",{class:"title"},[m.value.n?h$4(LockIcon):null,m.value.y==="s"?h$4(SlideIcon):null,h$4("span",{property:"headline"},m.value.title),m.value.v?h$4("meta",{property:"image",content:withBase(m.value.v)}):null])]),m.value.e?h$4("div",{class:"article-excerpt",innerHTML:m.value.e}):null,h$4("hr",{class:"hr"}),h$4(PageInfo,{info:b.value,...T.value?{items:T.value}:{}})]))}}),pagination="",Pagination=defineComponent({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:{updateCurrentPage:u=>!0},setup(u,{emit:m}){let b;const T=useThemeLocaleData(),$=ref(""),j=computed(()=>T.value.paginationLocales),Z=computed(()=>Math.ceil(u.total/u.perPage)),W=computed(()=>Boolean(Z.value)&&Z.value!==1),U=computed(()=>Z.value<7?!1:u.current>4),Y=computed(()=>Z.value<7?!1:u.current<Z.value-3),nn=computed(()=>{const{current:en}=u;let on=1,sn=Z.value;const cn=[];Z.value>=7&&(en<=4&&en<Z.value-3?(on=1,sn=5):en>4&&en>=Z.value-3?(sn=Z.value,on=Z.value-4):Z.value>7&&(on=en-2,sn=en+2));for(let un=on;un<=sn;un++)cn.push(un);return cn}),tn=en=>m("updateCurrentPage",en),an=en=>{const on=parseInt(en);on<=Z.value&&on>0?tn(on):b.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${j.value.errorText.replace(/\$page/g,Z.value.toString())}`)};return onMounted(()=>{b=new kt}),()=>h$4("div",{class:"pagination-wrapper"},W.value?h$4("div",{class:"pagination-list"},[h$4("div",{class:"page-number"},[u.current>1?h$4("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>tn(u.current-1)},j.value.prev):null,...U.value?[h$4("div",{role:"navigation",onClick:()=>tn(1)},1),h$4("div",{class:"ellipsis"},"...")]:[],...nn.value.map(en=>h$4("div",{key:en,class:{active:u.current===en},role:"navigation",onClick:()=>tn(en)},en)),...Y.value?[h$4("div",{class:"ellipsis"},"..."),h$4("div",{role:"navigation",onClick:()=>tn(Z.value)},Z.value)]:[],u.current<Z.value?h$4("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>tn(u.current+1)},j.value.next):null]),h$4("div",{class:"navigate-wrapper"},[h$4("label",{for:"navigation-text"},`${j.value.navigate}: `),h$4("input",{id:"navigation-text",value:$.value,onInput:({target:en})=>{$.value=en.value},onKeydown:en=>{en.key==="Enter"&&(en.preventDefault(),an($.value))}}),h$4("button",{class:"navigate",role:"navigation",title:j.value.action,onClick:()=>an($.value)},j.value.action)])]):[])}}),articleList="",ArticleList=defineComponent({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(u){const m=useRoute(),b=useRouter(),T=useBlogOptions(),$=ref(1),j=computed(()=>T.value.articlePerPage||10),Z=computed(()=>u.items.slice(($.value-1)*j.value,$.value*j.value)),W=U=>{$.value=U;const Y={...m.query};Y.page===U.toString()||U===1&&!Y.page||(U===1?delete Y.page:Y.page=U.toString(),b.push({path:m.path,query:Y}))};return watch($,()=>{const U=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,U)},100)}),onMounted(()=>{const{page:U}=m.query;W(U?Number(U):1)}),()=>h$4("div",{id:"article-list",class:"article-wrapper"},Z.value.length?[...Z.value.map(({info:U,path:Y},nn)=>h$4(DropTransition,{appear:!0,delay:nn*.04},()=>h$4(ArticleItem,{key:Y,info:U,path:Y}))),h$4(Pagination,{current:$.value,perPage:j.value,total:u.items.length,onUpdateCurrentPage:W})]:h$4(EmptyIcon))}}),categoryList="",CategoryList=defineComponent({name:"CategoryList",setup(){const u=useRoute(),m=useCategoryMap();return()=>h$4("ul",{class:"category-list-wrapper"},Object.entries(m.value.map).map(([b,{path:T,items:$}])=>h$4("li",{class:["category",`category${Ut(b,9)}`,{active:T===u.path}]},h$4(RouterLink,{to:T},()=>[b,h$4("span",{class:"category-num"},$.length)]))))}}),tagList="",TagList=defineComponent({name:"TagList",setup(){const u=usePageFrontmatter(),m=useTagMap(),b=T=>{var $;return T===(($=u.value.blog)==null?void 0:$.name)};return()=>h$4("ul",{class:"tag-list-wrapper"},Object.entries(m.value.map).map(([T,{path:$,items:j}])=>h$4("li",{class:["tag",`tag${Ut(T,9)}`,{active:b(T)}]},h$4(RouterLink,{to:$},()=>[T,h$4("span",{class:"tag-num"},j.length)]))))}}),timelineList="",TimelineList=defineComponent({name:"TimelineList",setup(){const u=useThemeLocaleData(),m=useTimelines(),b=useNavigate(),T=computed(()=>u.value.blogLocales.timeline);return()=>h$4("div",{class:"timeline-list-wrapper"},[h$4("div",{class:"timeline-list-title",onClick:()=>b(m.value.path)},[h$4(TimelineIcon),h$4("span",{class:"num"},m.value.items.length),T.value]),h$4("hr"),h$4("div",{class:"timeline-content"},h$4("ul",{class:"timeline-list"},m.value.config.map(({year:$,items:j},Z)=>h$4(DropTransition,{appear:!0,delay:.08*(Z+1)},()=>h$4("li",[h$4("h3",{class:"timeline-year"},$),h$4("ul",{class:"timeline-year-wrapper"},j.map(({date:W,info:U,path:Y})=>h$4("li",{class:"timeline-item"},[h$4("span",{class:"timeline-date"},W),h$4(RouterLink,{class:"timeline-title",to:Y},()=>U.title)])))])))))])}}),infoList="",InfoList=defineComponent({name:"InfoList",setup(){const u=useThemeLocaleData(),m=useArticles(),b=useCategoryMap(),T=computed(()=>Object.keys(b.value.map).length),$=useStars(),j=useTagMap(),Z=computed(()=>Object.keys(j.value.map).length),W=useNavigate(),U=ref("article"),Y=computed(()=>u.value.blogLocales),nn=[["article",ArticleIcon],["category",CategoryIcon],["tag",TagIcon],["timeline",TimelineIcon]];return()=>h$4("div",{class:"blog-info-list"},[h$4("div",{class:"blog-type-wrapper"},nn.map(([tn,an])=>h$4("button",{class:"blog-type-button",onClick:()=>{U.value=tn}},h$4("div",{class:["icon-wrapper",{active:U.value===tn}],"aria-label":Y.value[tn],"data-balloon-pos":"up"},h$4(an))))),U.value==="article"?h$4(DropTransition,()=>[h$4("div",{class:"sticky-article-wrapper"},[h$4("div",{class:"title",onClick:()=>W(m.value.path)},[h$4(ArticleIcon),h$4("span",{class:"num"},m.value.items.length),Y.value.article]),h$4("hr"),h$4("ul",{class:"sticky-article-list"},$.value.items.map(({info:tn,path:an},en)=>h$4(DropTransition,{appear:!0,delay:.08*(en+1)},()=>h$4("li",{class:"sticky-article"},h$4(RouterLink,{to:an},()=>tn.title)))))])]):null,U.value==="category"?h$4(DropTransition,()=>[h$4("div",{class:"category-wrapper"},[T.value?h$4("div",{class:"title",onClick:()=>W(b.value.path)},[h$4(CategoryIcon),h$4("span",{class:"num"},T.value),Y.value.category]):null,h$4("hr"),h$4(DropTransition,{delay:.04},()=>h$4(CategoryList))])]):null,U.value==="tag"?h$4(DropTransition,()=>[h$4("div",{class:"tag-wrapper"},[Z.value?h$4("div",{class:"title",onClick:()=>W(j.value.path)},[h$4(TagIcon),h$4("span",{class:"num"},Z.value),Y.value.tag]):null,h$4("hr"),h$4(DropTransition,{delay:.04},()=>h$4(TagList))])]):null,U.value==="timeline"?h$4(DropTransition,()=>h$4(TimelineList)):null])}}),page="",BlogWrapper=defineComponent({name:"BlogCommon",setup(u,{slots:m}){const b=useMobile();return()=>[h$4(SkipLink),h$4(CommonWrapper,{noSidebar:!0},{default:()=>{var T;return(T=m.default)==null?void 0:T.call(m)},navScreenBottom:()=>h$4(BloggerInfo),...b.value?{sidebar:()=>h$4(InfoList)}:{}})]}}),infoPanel="",InfoPanel=()=>h$4("aside",{class:"blog-info-wrapper"},[h$4(DropTransition,()=>h$4(BloggerInfo)),h$4(DropTransition,{delay:.04},()=>h$4(InfoList))]);InfoPanel.displayName="InfoPanel";const BlogCategory=defineComponent({name:"BlogPage",components:{CategoryList,TagList},setup(){const u=usePageFrontmatter(),m=useRoute(),b=useCategoryMap(),T=useTagMap(),$=computed(()=>u.value.blog||{}),j=computed(()=>{const{key:W=""}=$.value;return W==="category"?"CategoryList":W==="tag"?"TagList":null}),Z=computed(()=>{const{name:W="",key:U=""}=$.value;return U==="category"?W?b.value.map[W].items:[]:U==="tag"?W?T.value.map[W].items:[]:[]});return()=>h$4(BlogWrapper,()=>h$4("div",{class:"page blog"},h$4("div",{class:"blog-page-wrapper"},[h$4("main",{class:"blog-main",id:"main-content"},[h$4(DropTransition,()=>j.value?h$4(resolveComponent(j.value)):null),h$4(DropTransition,{appear:!0,delay:.24},()=>h$4(ArticleList,{key:m.path,items:Z.value}))]),h$4(DropTransition,{delay:.16},()=>h$4(InfoPanel))])))}}),defaultHeroBgImagePath="/assets/hero-197a9d2d.jpg",blogHero="",BlogHero=defineComponent({name:"BlogHero",setup(){const u=usePageHeadTitle(),m=usePageFrontmatter(),b=ref(),T=computed(()=>m.value.heroImage||null),$=computed(()=>m.value.heroFullScreen||!1),j=computed(()=>({...{maxHeight:"180px",margin:m.value.heroText===!1?"6rem auto 1.5rem":"1rem auto"},...m.value.heroImageStyle})),Z=computed(()=>m.value.bgImage?withBase(m.value.bgImage):m.value.bgImage??defaultHeroBgImagePath),W=computed(()=>({...{height:"350px",textAlign:"center",overflow:"hidden"},...m.value.bgImageStyle}));return()=>m.value.hero!==!1?h$4("div",{ref:b,class:["blog-hero",{fullscreen:$.value}],style:W.value},[Z.value?h$4("div",{class:"mask",style:{background:`url(${Z.value}) center/cover no-repeat`}}):null,h$4(DropTransition,{appear:!0,delay:.04},()=>T.value?h$4("img",{class:"hero-image",style:j.value,src:withBase(T.value),alt:m.value.heroAlt||"hero image"}):null),h$4(DropTransition,{appear:!0,delay:.08},()=>m.value.heroText!==!1?h$4("h1",m.value.heroText||u.value):null),h$4(DropTransition,{appear:!0,delay:.12},()=>m.value.tagline?h$4("p",{class:"description",innerHTML:m.value.tagline}):null),$.value?h$4("button",{class:"slide-down-button",onClick:()=>{window.scrollTo({top:b.value.clientHeight,behavior:"smooth"})}},[h$4(SlideDownIcon),h$4(SlideDownIcon)]):null]):null}}),projectPanel="",AVAILABLE_PROJECT_TYPES=["link","article","book","project","friend"],ProjectPanel=defineComponent({name:"ProjectPanel",components:{ArticleIcon,BookIcon,FriendIcon,LinkIcon,ProjectIcon},setup(){const u=usePageFrontmatter(),m=usePure(),b=useNavigate(),T=($="",j="icon")=>AVAILABLE_PROJECT_TYPES.includes($)?h$4(resolveComponent(`${$}-icon`)):$.match(/^https?:\/\//)?h$4("img",{src:$,alt:j,class:"image"}):$.startsWith("/")?h$4("img",{src:withBase($),alt:j,class:"image"}):h$4(Icon,{icon:$});return()=>{var $;return($=u.value.projects)!=null&&$.length?h$4("div",{class:"project-panel"},u.value.projects.map(({icon:j,link:Z,name:W,desc:U},Y)=>h$4("div",{class:["project",{[`project${Y%9}`]:!m.value}],onClick:()=>b(Z)},[T(j,W),h$4("div",{class:"name"},W),h$4("div",{class:"desc"},U)]))):null}}}),home="",BlogHome$1=defineComponent({name:"BlogHome",setup(){const u=useArticles();return()=>h$4("div",{class:"page blog"},[h$4(BlogHero),h$4("div",{class:"blog-page-wrapper"},[h$4("main",{class:"blog-home",id:"main-content"},[h$4(DropTransition,{appear:!0,delay:.16},()=>h$4(ProjectPanel)),h$4(DropTransition,{appear:!0,delay:.24},()=>h$4(ArticleList,{items:u.value.items}))]),h$4(DropTransition,{appear:!0,delay:.16},()=>h$4(InfoPanel))]),h$4(DropTransition,{appear:!0,delay:.28},()=>h$4(MarkdownContent))])}}),BlogHome=defineComponent({name:"BlogHome",setup(){return()=>h$4(BlogWrapper,()=>h$4(BlogHome$1))}}),articleType="",ArticleType=defineComponent({name:"ArticleType",setup(){const u=useRouteLocale(),m=useThemeLocaleData(),b=useRoute(),T=useArticles(),$=useStars(),j=computed(()=>{const Z=m.value.blogLocales;return[{text:Z.all,path:T.value.path},{text:Z.star,path:$.value.path},...[].map(({key:W,path:U})=>({text:Z[W],path:U.replace(/^\//,u.value)}))]});return()=>h$4("ul",{class:"article-type-wrapper"},j.value.map(Z=>h$4("li",{class:["article-type",{active:Z.path===b.path}]},h$4(RouterLink,{to:Z.path},()=>Z.text))))}}),BlogType=defineComponent({name:"BlogPage",setup(){const u=C(),m=usePageFrontmatter(),b=useRoute(),T=useArticles(),$=useStars(),j=computed(()=>{const{key:Z="",type:W}=m.value.blog||{};return Z==="star"?$.value.items:W==="type"&&Z?u.value.items:T.value.items});return()=>h$4(BlogWrapper,()=>h$4("div",{class:"page blog"},h$4("div",{class:"blog-page-wrapper"},[h$4("main",{class:"blog-main",id:"main-content"},[h$4(DropTransition,()=>h$4(ArticleType)),h$4(DropTransition,{appear:!0,delay:.24},()=>h$4(ArticleList,{key:b.path,items:j.value}))]),h$4(DropTransition,{delay:.16},()=>h$4(InfoPanel))])))}}),timelineItems="",TimelineItems=defineComponent({name:"TimelineItems",setup(){const u=useBlogOptions(),m=useThemeLocaleData(),b=useTimelines(),T=computed(()=>u.value.timeline||m.value.blogLocales.timelineTitle),$=computed(()=>b.value.config.map(({year:j})=>({title:j.toString(),level:2,slug:j.toString(),children:[]})));return()=>h$4("div",{class:"timeline-wrapper"},h$4("ul",{class:"timeline-content"},[h$4(DropTransition,()=>h$4("li",{class:"motto"},T.value)),h$4(TOC,{items:$.value}),...b.value.config.map(({year:j,items:Z},W)=>h$4(DropTransition,{appear:!0,delay:.08*(W+1),type:"group"},()=>[h$4("h3",{key:"title",id:j,class:"timeline-year-title"},h$4("span",j)),h$4("li",{key:"content",class:"timeline-year-list"},[h$4("ul",{class:"timeline-year-wrapper"},Z.map(({date:U,info:Y,path:nn})=>h$4("li",{class:"timeline-item"},[h$4("span",{class:"timeline-date"},U),h$4(RouterLink,{class:"timeline-title",to:nn},()=>Y.title)])))])]))]))}}),Timeline=defineComponent({name:"Timeline",components:{ArticleType,CategoryList,TagList},setup(){return()=>h$4(BlogWrapper,()=>h$4("div",{class:"page blog"},h$4("div",{class:"blog-page-wrapper"},[h$4("main",{class:"blog-main",id:"main-content"},[h$4(DropTransition,{appear:!0,delay:.24},()=>h$4(TimelineItems))]),h$4(DropTransition,{delay:.16},()=>h$4(InfoPanel))])))}}),layout$1="",layout="",d=()=>h$4(st,{name:"back"},()=>h$4("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),h=()=>h$4(st,{name:"home"},()=>h$4("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"}));var f=defineComponent({name:"SlidePage",setup(){const u=useRouter(),m=ref(!1),b=ref(),T=()=>{m.value=!m.value},$=()=>{m.value=!1},j=()=>{$(),window.history.go(-1)},Z=()=>{$(),u.push("/")};return onClickOutside(b,$),()=>h$4("div",{class:"presentation"},[h$4(Content),h$4("div",{ref:b,class:["menu",{active:m.value}]},[h$4("button",{class:"menu-button",onClick:()=>T()},h$4("span",{class:"icon"})),h$4("button",{class:"back-button",onClick:()=>j()},h$4(d)),h$4("button",{class:"home-button",onClick:()=>Z()},h$4(h))])])}});const clientConfig10=defineClientConfig({enhance:({app:u,router:m})=>{const{scrollBehavior:b}=m.options;m.options.scrollBehavior=async(...T)=>(await useScrollPromise().wait(),b(...T)),injectDarkMode(u),u.component("BloggerInfo",BloggerInfo)},setup:()=>{setupDarkMode(),setupSidebarItems(),setupBlog()},layouts:{Layout,NotFound,BlogCategory,BlogHome,BlogType,Timeline,Slide:f}}),clientConfigs=[clientConfig0,clientConfig1,clientConfig2,clientConfig3,clientConfig4,clientConfig5,s,P$2,clientConfig8,y,clientConfig10],pagesRoutes=[["v-8daa1a0e","/",{y:"h",title:"预见",i:"home"},["/index.html","/README.md"]],["v-2c765786","/c/arithmetic-1.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 16.算法的基本概念</h2>
<h3> 程序</h3>
<p><code>对程序的描述</code>在程序中要指定哪些数据以及这些数据的类型和数据的组织形式。这就是数据结构
<code>对数据的描述</code>。即要求计算机进行操作的步骤，也就是<code>算法</code>。</p>
<h3> 沃斯公式</h3>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/warning.svg" alt="" loading="lazy">该说法已经不合时宜</p>
</blockquote>`,r:{minutes:1.29,words:387},y:"a",title:"算法学习（1）",i:"code"},["/c/arithmetic-1","/c/arithmetic-1.md"]],["v-2e2b3025","/c/arithmetic-2.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 17.1求素数</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"请输入一个整数:"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">&lt;=</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"这个数不是素数\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"这个数是素数\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">double</span> b <span class="token operator">=</span><span class="token function">sqrt</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//sqrt函数定义在math.h里面，求一个数平方根</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>b<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">%</span>i <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"这个数不是素数\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"这个数是素数\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.82,words:246},y:"a",title:"算法学习（2）",i:"code"},["/c/arithmetic-2","/c/arithmetic-2.md"]],["v-465ffea1","/c/array-1.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 38.单位换算</h2>
<blockquote>
<p>1KB=2^10B=1024B
1MB=2^10KB=1024KB
1GB=2^10MB=1024MB</p>
</blockquote>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%p,%p,%p"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">,</span><span class="token operator">&amp;</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">//%p,%o,%x以16进制格式输出,但是随机产生的数值可能不连续</span>


	<span class="token keyword">int</span> d<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d,%d,%d"</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%p,%p,%p\\n"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>d<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>d<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.3,words:991},y:"a",title:"数组（1）",i:"code"},["/c/array-1","/c/array-1.md"]],["v-4814d740","/c/array-2.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 44.求二维数组的鞍点</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//鞍点是该位置的元素在该行上最大，该列上最小</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdbool.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">N</span> <span class="token expression"><span class="token number">5</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">M</span> <span class="token expression"><span class="token number">6</span></span></span>
bool <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>a<span class="token punctuation">)</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">int</span> j<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> x <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>x<span class="token operator">&lt;</span>M<span class="token punctuation">;</span><span class="token operator">++</span>x<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&lt;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span> false<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span>M<span class="token punctuation">]</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">)</span>          <span class="token comment">//int a[][N]或者int (*a)[N]都是定义了一个指向N个整型元素的数组的指针</span>
<span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>M<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>N<span class="token punctuation">;</span><span class="token operator">++</span>j<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%5d"</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token function">putchar</span><span class="token punctuation">(</span><span class="token char">'\\n'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">[</span>M<span class="token punctuation">]</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>M<span class="token operator">*</span>N<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
		a<span class="token punctuation">[</span>i<span class="token operator">/</span>N<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token operator">%</span>N<span class="token punctuation">]</span><span class="token operator">-</span>i<span class="token punctuation">;</span>
	<span class="token function">show</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>


	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>M<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">int</span> k<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>N<span class="token punctuation">;</span><span class="token operator">++</span>j<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">&lt;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
				k<span class="token operator">=</span>j<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>i<span class="token punctuation">,</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"a[%d][%d]是这个二维数组的鞍点\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.03,words:1210},y:"a",title:"数组（2）",i:"code"},["/c/array-2","/c/array-2.md"]],["v-7f4b585e","/c/bit.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 89.按位与按位或运算符</h2>
<blockquote>
<p><strong>&amp;(按位与)</strong>：参加运算的两个数据，如果相应的二进制都为1，则该结果为1，否则为0
<strong>|(按位或)</strong>：参加运算的两个数据，如果相应的二进制都为0，则该位结果都为0，否则为1</p>
</blockquote>
<h2> 90.按位异或</h2>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">按位异或也称为XOF运算符，如果相应的二进制位不同，则该位结果为1，否则为0</p>
</blockquote>`,r:{minutes:3.08,words:924},y:"a",title:"位运算",i:"code"},["/c/bit","/c/bit.md"]],["v-d87569c6","/c/choose.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 24.判断两个实型数据是否相等</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">float</span> a <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2.12</span><span class="token punctuation">,</span>b <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10.33</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">fabs</span><span class="token punctuation">(</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">1e-4</span><span class="token punctuation">)</span>                           <span class="token comment">//double fabs(double), int abs(int)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"这两个数相等"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"这两个数不等"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.52,words:757},y:"a",title:"选择程序设计",i:"code"},["/c/choose","/c/choose.md"]],["v-45ff4572","/c/design-1.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 1.最简单的C语言程序</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"C programme\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.72,words:1415},y:"a",title:"程序设计和C语言（1）",i:"code"},["/c/design-1","/c/design-1.md"]],["v-47b41e11","/c/design-2.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h1> 运算符</h1>
<table>
<thead>
<tr>
<th>优先级</th>
<th>运算符</th>
<th>含义</th>
<th>运算对象个数</th>
<th>结合方向</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>()</td>
<td>圆括号</td>
<td></td>
<td>自左向右</td>
</tr>
<tr>
<td>1</td>
<td>[]</td>
<td>下标运算符</td>
<td></td>
<td>自左向右</td>
</tr>
<tr>
<td>1</td>
<td>-&gt;</td>
<td>指向结构体成员运算符</td>
<td></td>
<td>自左向右</td>
</tr>
<tr>
<td>1</td>
<td>.</td>
<td>结构体成员运算符</td>
<td></td>
<td>自左向右</td>
</tr>
<tr>
<td>2</td>
<td>!</td>
<td>逻辑非运算符</td>
<td>单目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>2</td>
<td>~</td>
<td>逻辑取反运算符</td>
<td>单目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>2</td>
<td>++</td>
<td>自增运算符</td>
<td>单目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>2</td>
<td>--</td>
<td>自减运算符</td>
<td>单目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>2</td>
<td>-</td>
<td>负号运算符</td>
<td>单目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>2</td>
<td>(类型)</td>
<td>类型转换运算符</td>
<td>单目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>2</td>
<td>*</td>
<td>指针运算符</td>
<td>单目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>2</td>
<td>&amp;</td>
<td>取地址运算符</td>
<td>单目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>2</td>
<td>sizeof</td>
<td>长度运算符</td>
<td>单目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>3</td>
<td>*</td>
<td>乘法运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>3</td>
<td>/</td>
<td>除法运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>3</td>
<td>%</td>
<td>求余运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>4</td>
<td>+</td>
<td>加法运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>4</td>
<td>-</td>
<td>减法运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>5</td>
<td>&lt;&lt;</td>
<td>左移运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>5</td>
<td>&gt;&gt;</td>
<td>右移运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>6</td>
<td>&lt;</td>
<td>关系运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>6</td>
<td>&lt;=</td>
<td>关系运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>6</td>
<td>&gt;</td>
<td>关系运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>6</td>
<td>&gt;=</td>
<td>关系运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>7</td>
<td>==</td>
<td>等于运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>7</td>
<td>!=</td>
<td>不等于运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>8</td>
<td>&amp;</td>
<td>按位与运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>9</td>
<td>^</td>
<td>按位异或运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>10</td>
<td>|</td>
<td>按位或运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>11</td>
<td>&amp;&amp;</td>
<td>逻辑与运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>12</td>
<td>||</td>
<td>逻辑非运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>13</td>
<td>?:</td>
<td>条件运算符</td>
<td>三目运算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>14</td>
<td>=</td>
<td>赋值运算符</td>
<td>双目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>+=</td>
<td>赋值运算符</td>
<td>双目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>-=</td>
<td>赋值运算符</td>
<td>双目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>*=</td>
<td>赋值运算符</td>
<td>双目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>/=</td>
<td>赋值运算符</td>
<td>双目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>%/</td>
<td>赋值运算符</td>
<td>双目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>&gt;&gt;=</td>
<td>赋值运算符</td>
<td>双目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>&lt;&lt;=</td>
<td>赋值运算符</td>
<td>双目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>&amp;=</td>
<td>赋值运算符</td>
<td>双目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>^=</td>
<td>赋值运算符</td>
<td>双目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>|=</td>
<td>赋值运算符</td>
<td>双目运算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>15</td>
<td>,</td>
<td>逗号运算符</td>
<td>双目运算符</td>
<td>自左向右</td>
</tr>
</tbody>
</table>`,r:{minutes:2.34,words:703},y:"a",title:"程序设计和C语言（2）",i:"code"},["/c/design-2","/c/design-2.md"]],["v-4968f6b0","/c/design-3.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 10.初等运算符及单目运算符</h2>
<blockquote>
<ol>
<li>优先级、操作数、结合方向--初等运算符优先级为1，单目运算符优先级为2</li>
<li>只有单目运算符和赋值运算符的结合方向是自右往左的</li>
</ol>
</blockquote>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//概念理解</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d,%d\\n"</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">2</span><span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d\\n"</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//学习目标（2）</span>


	<span class="token comment">//！逻辑非运算符，求该操作数的逻辑反值，如果该操作数值为真，则整个表达式为假，否则整个表达式值为真</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d,%d,%d\\n"</span><span class="token punctuation">,</span><span class="token operator">!</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">!</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//输出0，0，1</span>
	
	<span class="token comment">//-负号运算符</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d\\n"</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token operator">*</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//乘号比负号的优先级低，括号可以省略</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.19,words:1256},y:"a",title:"程序设计和C语言（3）",i:"code"},["/c/design-3","/c/design-3.md"]],["v-4b1dcf4f","/c/design-4.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 14.全局变量及宏定义</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
学习目标
(1)宏名，全局变量建议大写
(2)#开头的都是预处理指令，预处理是发生在预编译阶段(编译之前)，对源程序进行一些简单的文本替换
(3)全局变量的作用域就是从定义处开始，到整个文件的末尾
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">P1</span> <span class="token expression"><span class="token number">3.1415926</span>   </span><span class="token comment">//定义一个宏名P1，程序会在预编译阶段把该定义出之后的所有的P1地方替换为3.1415926</span></span>

<span class="token keyword">int</span> A<span class="token punctuation">;</span>                 <span class="token comment">//未初始化的全局变量A，初始值4的全局变量B</span>
<span class="token keyword">int</span> B<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d,%d\\n"</span><span class="token punctuation">,</span>A<span class="token punctuation">,</span>B<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"P1\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//	P1=10；         //error 符号常量P1不能被赋值</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d,%d\\n"</span><span class="token punctuation">,</span>A<span class="token punctuation">,</span>B<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.85,words:554},y:"a",title:"程序设计和C语言（4）",i:"code"},["/c/design-4","/c/design-4.md"]],["v-a918da98","/c/file-1.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 77.文件的基本概念</h2>
<h3> 文件分类</h3>
<h4> 程序文件</h4>
<blockquote>
<p>这种文件的内容是程序代码，如源程序文件，目标文件，可执行文件等</p>
</blockquote>
<h4> 数据文件</h4>
<blockquote>
<p>其内容不是程序，而是供程序运行时读写的数据
终端即计算机的各种输入输出设备。操作系统把终端都统一作为文件看待
一个文件要有唯一的文件标识，文件标识包括3个部分：
①文件路径 ②文件名主干 ③文件后缀
数据文件分类：ASCII(文本文件)和二进制文件(镜像文件)</p>
</blockquote>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token string">"H:/Java/Dos命令.txt"</span><span class="token punctuation">;</span>
	FILE <span class="token operator">*</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span><span class="token string">"r"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>               
	<span class="token keyword">if</span><span class="token punctuation">(</span>fp <span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"文件打开失败，程序退出\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	FILE <span class="token operator">*</span>fp2 <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">"H:\\\\Dos命令2.txt"</span><span class="token punctuation">,</span><span class="token string">"w"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>fp2 <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"文件打开失败，程序退出\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">char</span> ch<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ch <span class="token operator">=</span> <span class="token function">fgetc</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span><span class="token constant">EOF</span><span class="token punctuation">)</span>
		<span class="token function">fputc</span><span class="token punctuation">(</span>ch<span class="token punctuation">,</span>fp2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>fp2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.25,words:1275},y:"a",title:"对文件的输入输出（1）",i:"code"},["/c/file-1","/c/file-1.md"]],["v-a5af295a","/c/file-2.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 81.用二进制的方法读写数据</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	FILE <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">"H:/Java/Dos命令5.txt"</span><span class="token punctuation">,</span><span class="token string">"rb"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//打开方式为r，输出3个ASCII码值，如果打开方式为b,输出4个ASCII码值</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"文件打开失败，程序退出\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">char</span> ch<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ch <span class="token operator">=</span> <span class="token function">fgetc</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token operator">!=</span><span class="token constant">EOF</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d\\n"</span><span class="token punctuation">,</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
在windows系统下，使用fputs,fputc,fprintf向一个文件写入数据时，如果写入'\\n',文件的打开方式为文本模式，实际上写入的是'\\r'和'\\n'两个字符
如果文件的打开方式为二进制模式，实际就是写入一个'\\n'字符


使用fgetc,fgets,fscanf向一个文件读入数据，如果读到'\\r'和'\\n'，而且文件打开方式为文本模式，会把这两个字符当成一个'\\n'读进来
如果文件的打开方式是二进制模式，那么不会发生这种转换，读进来的就是'\\n'、'\\r'

建议：如果文件本身是一个文本文件，就用文件模式的文件使用方式打开，对这个文件进行读写就用这6个处理字符或者字符串的函数

*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.7,words:1409},y:"a",title:"对文件的输入输出（2）",i:"code"},["/c/file-2","/c/file-2.md"]],["v-280a0150","/c/function-1.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 51.宏定义</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">A</span> <span class="token expression"><span class="token number">2</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">B</span> <span class="token expression">A<span class="token operator">+</span>A</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">C</span> <span class="token expression"><span class="token punctuation">(</span>A<span class="token operator">+</span>A<span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">D</span><span class="token expression"><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">*</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d,%d,%d\\n"</span><span class="token punctuation">,</span>A<span class="token punctuation">,</span>B<span class="token operator">*</span>B<span class="token punctuation">,</span>C<span class="token operator">*</span>C<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d\\n"</span><span class="token punctuation">,</span><span class="token function">D</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.55,words:465},y:"a",title:"函数（1）",i:"code"},["/c/function-1","/c/function-1.md"]],["v-24a05012","/c/function-2.html",{d:"2022-07-30T15:41:26.000Z",l:"2022年7月30日",e:`<h2> 57.extern用法(1)</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">extern</span> <span class="token keyword">int</span> A<span class="token punctuation">;</span>         <span class="token comment">//extern可以在文件内扩展一个全局变量的作用域，extern只能修饰全局变量</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d\\n"</span><span class="token punctuation">,</span>A<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> A <span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.46,words:1039},y:"a",title:"函数（2）",i:"code"},["/c/function-2","/c/function-2.md"]],["v-600747e8","/c/order-1.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 18.1转义字符</h2>
<table>
<thead>
<tr>
<th>转义字符</th>
<th>字符值</th>
<th>输出结果</th>
<th>转义字符</th>
<th>字符值</th>
<th>输出结果</th>
</tr>
</thead>
<tbody>
<tr>
<td>\\'</td>
<td>一个单撇号(')</td>
<td>具有此8进制的字符</td>
<td>\\"</td>
<td>一个双撇号(")</td>
<td>输出此字符</td>
</tr>
<tr>
<td>?</td>
<td>一个问号(?)</td>
<td>输出此字符</td>
<td>\\\\</td>
<td>一个反斜线(\\)</td>
<td>输出此字符</td>
</tr>
<tr>
<td>\\a</td>
<td>警告</td>
<td>产生视觉或声音信号</td>
<td>\\b</td>
<td>退格</td>
<td>将当前位置后退一个字符</td>
</tr>
<tr>
<td><code>\\f</code></td>
<td>换页</td>
<td>将当前位置移到下一页的开头</td>
<td>\\n</td>
<td>换行</td>
<td>将当前位置移到下一行的开头</td>
</tr>
<tr>
<td><code>\\r</code></td>
<td>回车</td>
<td>将当前位置移到本行的开头</td>
<td>\\t</td>
<td>水平制表符</td>
<td>将当前位置移到下一个Tab位置</td>
</tr>
<tr>
<td>\\v</td>
<td>垂直制表符</td>
<td>将当前位置移到下一个垂直制表对齐点</td>
<td>\\o、\\oo、\\ooo</td>
<td>ASCII码</td>
<td></td>
</tr>
<tr>
<td>\\xh[h=……](16进制数字)</td>
<td>与该16进制码对的ASCII字符</td>
<td>与该16进制码对应的字符</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:5.5,words:1651},y:"a",title:"顺序程序设计（1）",i:"code"},["/c/order-1","/c/order-1.md"]],["v-5c9d96aa","/c/order-2.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 19.字符型数据</h2>
<blockquote>
<p>字符型是以整型形式(ASCII码)存放在内存单元中。ASCII共128个字符(也就是最多可以用7位数表示)</p>
</blockquote>
<table>
<thead>
<tr>
<th>类型</th>
<th>字符值</th>
<th>取值范围</th>
</tr>
</thead>
<tbody>
<tr>
<td>signed char</td>
<td>1</td>
<td>-128~127</td>
</tr>
<tr>
<td>unsigned char</td>
<td>1</td>
<td>0~255</td>
</tr>
</tbody>
</table>`,r:{minutes:2.55,words:765},y:"a",title:"顺序程序设计（2）",i:"code"},["/c/order-2","/c/order-2.md"]],["v-5c4704fd","/c/pointer-1.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 64.指针数组和多重指针</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//对一个字符型数组指针数组排序</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> len<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
		<span class="token function">puts</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">*</span>a<span class="token punctuation">,</span><span class="token keyword">int</span> len<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>len<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token operator">++</span>j<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				<span class="token keyword">char</span> <span class="token operator">*</span>p<span class="token operator">=</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
				a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>a<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				a<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span>p<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> <span class="token operator">*</span>a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"haha"</span><span class="token punctuation">,</span><span class="token string">"lala"</span><span class="token punctuation">,</span><span class="token string">"hello"</span><span class="token punctuation">,</span><span class="token string">"hehe"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">show</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.25,words:376},y:"a",title:"指针（1）",i:"code"},["/c/pointer-1","/c/pointer-1.md"]],["v-5dfbdd9c","/c/pointer-2.html",{d:"2022-07-31T00:00:00.000Z",l:"2022年7月31日",e:`<h2> 67.动态内存分配</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//输入学生数，再输入每个学生对应的姓名和成绩，最后把这些信息输出</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span>   <span class="token comment">//有nalloc calloc free exit的函数声明</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;malloc.h&gt;</span>   <span class="token comment">//alloc calloc free</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> n<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"请输入学生数："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//	void *malloc(unsigned int size):其功能是在堆区分配连续的size个字节的存储空间并且返回这段存储空间开头的地址，如果内存分配失败，会返回空指针</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>p1<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//强制数据类型转换可以省略</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p1 <span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span>                                <span class="token comment">//判断是否是空指针</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"内存分配失败，程序退出\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//void *calloc(unsigned int n,unsigned int size);</span>
	<span class="token keyword">char</span> <span class="token punctuation">(</span><span class="token operator">*</span>p2<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token function">calloc</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p2 <span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"内存分配失败，程序退出\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"请输入第%d个学生的成绩和姓名：\\n"</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d%s"</span><span class="token punctuation">,</span>p1<span class="token operator">+</span>i<span class="token punctuation">,</span>p2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"第%d个学生的成绩为%d,姓名为%s"</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>p1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>p2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">"\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//void free(void *p);</span>
	<span class="token function">free</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>                                    <span class="token comment">//释放动态存储空间</span>
	<span class="token function">free</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.01,words:1502},y:"a",title:"指针（2）",i:"code"},["/c/pointer-2","/c/pointer-2.md"]],["v-3fb6678b","/c/recycle.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> <a href="http://32.do" target="_blank" rel="noopener noreferrer">32.do</a>……while语句</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>s <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>sum <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">do</span>
	<span class="token punctuation">{</span>
		s<span class="token operator">=</span>s<span class="token operator">*</span>i<span class="token punctuation">;</span>
		sum<span class="token operator">=</span>sum<span class="token operator">+</span>s<span class="token punctuation">;</span>
		<span class="token operator">++</span>i<span class="token punctuation">;</span>                <span class="token comment">//思考i++与++i</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//思考while条件</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d\\n"</span><span class="token punctuation">,</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.01,words:303},y:"a",title:"循环结构程序",i:"code"},["/c/recycle","/c/recycle.md"]],["v-86449acc","/c/type.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 71.结构体的定义和初始化</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
                                               <span class="token comment">//结构体定义总结：结构体标记和变量名至少有一种，如果有变量。可以进行初始化</span>
<span class="token keyword">struct</span> <span class="token class-name">Student</span>                                 <span class="token comment">//1.定义时为结构体起一个结构体标记名</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> age<span class="token punctuation">;</span>
	<span class="token keyword">double</span> score<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">Student2</span>                                 <span class="token comment">//2.定义时为结构体起一个结构体标记名并定义这种数据类型的变量</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> age<span class="token punctuation">;</span>
	<span class="token keyword">double</span> score<span class="token punctuation">;</span>
<span class="token punctuation">}</span>A<span class="token punctuation">,</span><span class="token operator">*</span>p<span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">Student3</span>                                 <span class="token comment">//3.定义时为结构体起一个结构体标记名并为变量初始化</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> age<span class="token punctuation">;</span>
	<span class="token keyword">double</span> score<span class="token punctuation">;</span>
<span class="token punctuation">}</span>A1<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"张三"</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token operator">*</span>p1<span class="token punctuation">;</span>
<span class="token keyword">struct</span>                                 <span class="token comment">//4.只定义结构体类型的变量</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> age<span class="token punctuation">;</span>
	<span class="token keyword">double</span> score<span class="token punctuation">;</span>
<span class="token punctuation">}</span>A2<span class="token punctuation">,</span><span class="token operator">*</span>p2<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>	
	<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">Student</span> a <span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"张三"</span><span class="token punctuation">,</span><span class="token number">28</span><span class="token punctuation">,</span><span class="token number">34</span><span class="token punctuation">}</span><span class="token punctuation">;</span>      <span class="token comment">//①完全初始化</span>
	<span class="token keyword">struct</span> <span class="token class-name">Student</span> b <span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"张三"</span><span class="token punctuation">,</span><span class="token number">28</span><span class="token punctuation">}</span><span class="token punctuation">;</span>          <span class="token comment">//②部分初始化</span>
	<span class="token keyword">struct</span> <span class="token class-name">Student</span> c <span class="token operator">=</span> a<span class="token punctuation">;</span>                    <span class="token comment">//③定义结构体变量时，使用其他的结构体变量完成初始化</span>
	<span class="token keyword">struct</span> <span class="token class-name">Student</span> d <span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">23</span><span class="token punctuation">}</span><span class="token punctuation">;</span>         <span class="token comment">//④c99支持这种形式在定义一个定义一个结构体变量时，对其某一个成员初始化</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"学生的姓名：%s，年龄：%d,成绩：%lf"</span><span class="token punctuation">,</span>c<span class="token punctuation">.</span>name<span class="token punctuation">,</span>c<span class="token punctuation">.</span>age<span class="token punctuation">,</span>c<span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Student</span> a<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"请输入学生的姓名、年龄和成绩\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%s%d%lf"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">.</span>age<span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"学生的姓名：%s，年龄：%d,成绩：%lf"</span><span class="token punctuation">,</span>a<span class="token punctuation">.</span>name<span class="token punctuation">,</span>a<span class="token punctuation">.</span>age<span class="token punctuation">,</span>a<span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>              <span class="token comment">//①可以通过 变量名.成员名的方式访问一个结构体变量的成员</span>
	<span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token operator">*</span>p <span class="token operator">=</span><span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"学生的姓名：%s，年龄：%d,成绩：%lf"</span><span class="token punctuation">,</span>p<span class="token operator">-&gt;</span>name<span class="token punctuation">,</span>p<span class="token operator">-&gt;</span>age<span class="token punctuation">,</span>p<span class="token operator">-&gt;</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">//②可以通过 指针-&gt;成员名 的方式访问一个结构体变量的成员</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.31,words:1893},y:"a",title:"用户自定义数据类型",i:"code"},["/c/type","/c/type.md"]],["v-595a981a","/css/animation.html",{d:"2022-08-03T00:00:00.000Z",l:"2022年8月3日",e:`<h2> 定义动画</h2>
<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;!-- 两种状态动画 --&gt;
<span class="token atrule"><span class="token rule">@keyframes</span> 动画名称</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token selector">to</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
&lt;!-- 多个属性变化 --&gt;
<span class="token atrule"><span class="token rule">@keyframes</span> 动画名称</span> <span class="token punctuation">{</span>
	<span class="token selector">0%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token selector">10%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token selector">40%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.84,words:251},y:"a",title:"CSS3动画",i:"css"},["/css/animation","/css/animation.md"]],["v-4d741660","/css/flat-trans.html",{d:"2022-08-03T00:00:00.000Z",l:"2022年8月3日",e:`<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">改变盒子在平面内的形态</p>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/check.svg" alt="" loading="lazy">属性名<code>transform</code>(tf)设置平面转换</p>
</blockquote>
<h2> 位移</h2>
<h3> 语法</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translate</span><span class="token punctuation">(</span>水平移动距离<span class="token punctuation">,</span>垂直移动距离<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.9,words:270},y:"a",title:"平面转换",i:"css"},["/css/flat-trans","/css/flat-trans.md"]],["v-56af9d1b","/css/flex.html",{d:"2022-08-06T00:00:00.000Z",l:"2022年8月6日",e:`<blockquote>
<p>父元素设置<code>display:flex</code></p>
</blockquote>
<h2> 主轴对齐</h2>
<blockquote>
<p>使用<code>justify-content</code>属性设置主轴对齐</p>
<p>使用<code>align-content</code>设置换行后主轴对齐</p>
</blockquote>
<table>
<thead>
<tr>
<th>属性值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>flex-start</td>
<td>默认值</td>
</tr>
<tr>
<td>flex-end</td>
<td>终点开始</td>
</tr>
<tr>
<td>center</td>
<td>居中排列</td>
</tr>
<tr>
<td>space-around</td>
<td>均匀分布，空白在盒子两侧</td>
</tr>
<tr>
<td>space-between</td>
<td>均匀分布，空白在相邻盒子两侧</td>
</tr>
<tr>
<td>space-evenly</td>
<td>弹性盒子与容器之间距离相等</td>
</tr>
</tbody>
</table>`,r:{minutes:.63,words:189},y:"a",title:"Flex布局",i:"css"},["/css/flex","/css/flex.md"]],["v-419d02c2","/css/float.html",{d:"2022-08-06T00:00:00.000Z",l:"2022年8月6日",e:`<h1> 浮动</h1>
<h2> 标准流</h2>
<blockquote>
<p>又称文档流，是浏览器在渲染显示网页内容时默认采用的一套排版规则，规定了以何种方式排列元素</p>
</blockquote>
<h3> 常见标准流排版规则</h3>
<p>块级元素：从上往下、<code>垂直布局</code>、独占一行
行内元素或行内块元素：从左至右、<code>水平布局</code>、空间不够自动换行</p>
<h2> 浮动</h2>
<h3> 浮动的作用</h3>
<ul>
<li>图文环绕(早期)</li>
<li>网页布局(现在)</li>
</ul>
<h3> 浮动的代码</h3>`,r:{minutes:2.72,words:816},y:"a",title:"浮动",i:"css"},["/css/float","/css/float.md"]],["v-6dac6e9c","/css/intro.html",{d:"2022-08-06T00:00:00.000Z",l:"2022年8月6日",e:`<h2> CSS初识</h2>
<h3> CSS的介绍</h3>
<p>CSS(Cascading style sheets)层叠样式表，用于美化<code>HTML标签</code></p>
<h3> CSS的语法规则</h3>
<p>写在style标签中，style标签一般写在和head标签里面，title标签下面</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>美化对象<span class="token punctuation">{</span>
	属性名:属性值
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.43,words:429},y:"a",title:"基础认知",i:"css"},["/css/intro","/css/intro.md"]],["v-4c225352","/css/mobile.html",{d:"2022-08-03T00:00:00.000Z",l:"2022年8月3日",e:`<h2> 移动端特点</h2>
<h3> 移动端和PC端网页不同点</h3>
<ul>
<li>PC屏幕大，网页固定版心</li>
<li>手机屏幕小，网页宽度多数为100%</li>
</ul>
<h3> 谷歌模拟器</h3>
<p>浏览器按<code>F12</code>打开调试模式，选择手机模拟器</p>
<h3> 分辨率</h3>
<h4> 屏幕尺寸</h4>
<p>屏幕尺寸指的是<code>对角线</code>的长度，一般用<code>英寸</code>来度量</p>
<h4> 分辨率</h4>
<ul>
<li>物理分辨率(出厂设置)</li>
<li>逻辑分辨率(软件分辨率)</li>
</ul>`,r:{minutes:.85,words:254},y:"a",title:"移动端",i:"css"},["/css/mobile","/css/mobile.md"]],["v-72386375","/css/selector.html",{d:"2022-08-06T00:00:00.000Z",l:"2022年8月6日",e:`<h1> 选择器</h1>
<blockquote>
<p>!important&gt;行内样式&gt;id选择器&gt;类选择器&gt;标签选择器&gt;通配符选择器&gt;继承</p>
</blockquote>
<h2> 一般选择器</h2>
<ul>
<li>标签</li>
<li>id</li>
<li>class</li>
<li>
<ul>
<li></li>
</ul>
</li>
</ul>
<h2> 复合选择器</h2>
<h3> 后代选择器</h3>
<p css="">选择器1 选择器2</p>
<h3> 子代选择器</h3>
<p css="">选择器1<kbd>&gt;</kbd>选择器2</p>`,r:{minutes:1.36,words:407},y:"a",title:"选择器",i:"css"},["/css/selector","/css/selector.md"]],["v-a3515546","/css/space-trans.html",{d:"2022-08-03T00:00:00.000Z",l:"2022年8月3日",e:`<h2> 空间位移</h2>
<h3> 语法</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translate3d</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>
&lt;!-- 分开来写 --&gt;
<span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translateX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translateY</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translateZ</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.64,words:191},y:"a",title:"空间转换",i:"css"},["/css/space-trans","/css/space-trans.md"]],["v-7c0d6123","/css/tip.html",{d:"2022-08-06T00:00:00.000Z",l:"2022年8月6日",e:`<h2> 版心居中</h2>
<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrapper</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>1200px<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span>0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.36,words:108},y:"a",title:"技巧",i:"css"},["/css/tip","/css/tip.md"]],["v-92504580","/education/",{y:"h",title:"教育学",i:"education"},["/education/index.html","/education/README.md"]],["v-14b2ee8b","/html/",{d:"2020-06-10T00:00:00.000Z",l:"2020年6月10日",e:`<h1> 标签</h1>
<h2> 标题</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>一级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>二级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>三级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>四级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">&gt;</span></span>五级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">&gt;</span></span>六级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.17,words:352},y:"a",title:"标签",i:"html"},["/html/index.html","/html/README.md"]],["v-6e0450c0","/javascript/dom.html",{d:"2022-11-30T00:00:00.000Z",l:"2022年11月30日",e:`<h2> 节点</h2>
<p><abbr title="Document Object Modal">DOM</abbr>把文档比作一棵树，由一个个的节点<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup><a class="footnote-anchor" id="footnote-ref1">组成，可以通过css修改节点的样式</a></p><a class="footnote-anchor" id="footnote-ref1">
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 元素节点——所有标签</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 文本节点</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 属性节点</label></li>
</ul>
</a>`,r:{minutes:.59,words:176},y:"a",title:"3.Dom",i:"js"},["/javascript/dom","/javascript/dom.md"]],["v-405dc04a","/javascript/grammar.html",{d:"2022-11-30T00:00:00.000Z",l:"2022年11月30日",e:`<h2> 准备工作</h2>

<h2> 语法</h2>
<h3> 语句</h3>
<p>结束符<code>;</code>可加可不加</p>
<h3> 注释</h3>

<h2> 输入输出语句</h2>
<table>
<thead>
<tr>
<th>方法</th>
<th>说明</th>
<th>归属</th>
</tr>
</thead>
<tbody>
<tr>
<td>alert(msg)</td>
<td>浏览器弹出警示框</td>
<td>浏览器</td>
</tr>
<tr>
<td>console.log(msg)</td>
<td>浏览器控制台打印输出信息</td>
<td>浏览器</td>
</tr>
<tr>
<td>prompt(info)</td>
<td>浏览器弹出输入框，用户可以输入</td>
<td>浏览器</td>
</tr>
</tbody>
</table>`,r:{minutes:5.16,words:1547},y:"a",title:"2.语法",i:"js"},["/javascript/grammar","/javascript/grammar.md"]],["v-e02a086e","/javascript/",{y:"h",title:"Javascript",i:"js"},["/javascript/index.html","/javascript/index.md"]],["v-6af6e8ce","/markdown/Github-Flavored.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h1> GitHub Flavored Markdown</h1>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">部分格式参考<a href="/markdown/intro.html" target="blank">Markdown基本语法</a></p>
</blockquote>
<h2> 基本格式</h2>
<h3> 指定图像显示的主题</h3>
<p>通过<code>&lt;picture&gt;</code>元素与<code>prefers-color-scheme</code>媒体功能指定深色/浅色主题，将改善透明图片背景显示效果</p>`,r:{minutes:1.71,words:513},y:"a",title:"Github Flavored Markdown",i:"markdown"},["/markdown/Github-Flavored","/markdown/Github-Flavored.md"]],["v-2a9853ac","/markdown/Markdown-emoji.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/warning.svg" alt="" loading="lazy">为方便本地查看，复制网页内容</p>
</blockquote>
<h2> People</h2>
<table>
<thead>
<tr>
<th>💭 <code>:thought_balloon:</code></th>
<th>😄 <code>:smile:</code></th>
<th>😆 <code>:laughing:</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>😊 <code>:blush:</code></td>
<td>😃 <code>:smiley:</code></td>
<td>☺️ <code>:relaxed:</code></td>
</tr>
<tr>
<td>😏 <code>:smirk:</code></td>
<td>😍 <code>:heart_eyes:</code></td>
<td>😘 <code>:kissing_heart:</code></td>
</tr>
<tr>
<td>😚 <code>:kissing_closed_eyes:</code></td>
<td>😳 <code>:flushed:</code></td>
<td>😌 <code>:relieved:</code></td>
</tr>
<tr>
<td>😆 <code>:satisfied:</code></td>
<td>😁 <code>:grin:</code></td>
<td>😉 <code>:wink:</code></td>
</tr>
<tr>
<td>😜 <code>:stuck_out_tongue_winking_eye:</code></td>
<td>😝 <code>:stuck_out_tongue_closed_eyes:</code></td>
<td>😀 <code>:grinning:</code></td>
</tr>
<tr>
<td>😗 <code>:kissing:</code></td>
<td>😙 <code>:kissing_smiling_eyes:</code></td>
<td>😛 <code>:stuck_out_tongue:</code></td>
</tr>
<tr>
<td>😴 <code>:sleeping:</code></td>
<td>😟 <code>:worried:</code></td>
<td>😦 <code>:frowning:</code></td>
</tr>
<tr>
<td>😧 <code>:anguished:</code></td>
<td>😮 <code>:open_mouth:</code></td>
<td>😬 <code>:grimacing:</code></td>
</tr>
<tr>
<td>😕 <code>:confused:</code></td>
<td>😯 <code>:hushed:</code></td>
<td>😑 <code>:expressionless:</code></td>
</tr>
<tr>
<td>😒 <code>:unamused:</code></td>
<td>😅 <code>:sweat_smile:</code></td>
<td>😓 <code>:sweat:</code></td>
</tr>
<tr>
<td>😥 <code>:disappointed_relieved:</code></td>
<td>😩 <code>:weary:</code></td>
<td>😔 <code>:pensive:</code></td>
</tr>
<tr>
<td>😞 <code>:disappointed:</code></td>
<td>😖 <code>:confounded:</code></td>
<td>😨 <code>:fearful:</code></td>
</tr>
<tr>
<td>😰 <code>:cold_sweat:</code></td>
<td>😣 <code>:persevere:</code></td>
<td>😢 <code>:cry:</code></td>
</tr>
<tr>
<td>😭 <code>:sob:</code></td>
<td>😂 <code>:joy:</code></td>
<td>😲 <code>:astonished:</code></td>
</tr>
<tr>
<td>😱 <code>:scream:</code></td>
<td>💬 <code>:speech_balloon:</code></td>
<td>😫 <code>:tired_face:</code></td>
</tr>
<tr>
<td>😠 <code>:angry:</code></td>
<td>😡 <code>:rage:</code></td>
<td>😤 <code>:triumph:</code></td>
</tr>
<tr>
<td>😪 <code>:sleepy:</code></td>
<td>😋 <code>:yum:</code></td>
<td>😷 <code>:mask:</code></td>
</tr>
<tr>
<td>😎 <code>:sunglasses:</code></td>
<td>😵 <code>:dizzy_face:</code></td>
<td>👿 <code>:imp:</code></td>
</tr>
<tr>
<td>😈 <code>:smiling_imp:</code></td>
<td>😐 <code>:neutral_face:</code></td>
<td>😶 <code>:no_mouth:</code></td>
</tr>
<tr>
<td>😇 <code>:innocent:</code></td>
<td>👽 <code>:alien:</code></td>
<td>💛 <code>:yellow_heart:</code></td>
</tr>
<tr>
<td>💙 <code>:blue_heart:</code></td>
<td>💜 <code>:purple_heart:</code></td>
<td>❤️ <code>:heart:</code></td>
</tr>
<tr>
<td>💚 <code>:green_heart:</code></td>
<td>💔 <code>:broken_heart:</code></td>
<td>💓 <code>:heartbeat:</code></td>
</tr>
<tr>
<td>💗 <code>:heartpulse:</code></td>
<td>💕 <code>:two_hearts:</code></td>
<td>💞 <code>:revolving_hearts:</code></td>
</tr>
<tr>
<td>💘 <code>:cupid:</code></td>
<td>💖 <code>:sparkling_heart:</code></td>
<td>✨ <code>:sparkles:</code></td>
</tr>
<tr>
<td>⭐ <code>:star:</code></td>
<td>🌟 <code>:star2:</code></td>
<td>💫 <code>:dizzy:</code></td>
</tr>
<tr>
<td>💥 <code>:boom:</code></td>
<td>💥 <code>:collision:</code></td>
<td>💢 <code>:anger:</code></td>
</tr>
<tr>
<td>❗ <code>:exclamation:</code></td>
<td>❓ <code>:question:</code></td>
<td>❕ <code>:grey_exclamation:</code></td>
</tr>
<tr>
<td>❔ <code>:grey_question:</code></td>
<td>💤 <code>:zzz:</code></td>
<td>💨 <code>:dash:</code></td>
</tr>
<tr>
<td>💦 <code>:sweat_drops:</code></td>
<td>🎶 <code>:notes:</code></td>
<td>🎵 <code>:musical_note:</code></td>
</tr>
<tr>
<td>🔥 <code>:fire:</code></td>
<td>💩 <code>:hankey:</code></td>
<td>💩 <code>:poop:</code></td>
</tr>
<tr>
<td>💩 <code>:shit:</code></td>
<td>👍 <code>:+1:</code></td>
<td>👍 <code>:thumbsup:</code></td>
</tr>
<tr>
<td>👎 <code>:-1:</code></td>
<td>👎 <code>:thumbsdown:</code></td>
<td>👌 <code>:ok_hand:</code></td>
</tr>
<tr>
<td>👊 <code>:punch:</code></td>
<td>👊 <code>:facepunch:</code></td>
<td>✊ <code>:fist:</code></td>
</tr>
<tr>
<td>✌️ <code>:v:</code></td>
<td>👋 <code>:wave:</code></td>
<td>✋ <code>:hand:</code></td>
</tr>
<tr>
<td>✋ <code>:raised_hand:</code></td>
<td>👐 <code>:open_hands:</code></td>
<td>☝️ <code>:point_up:</code></td>
</tr>
<tr>
<td>👇 <code>:point_down:</code></td>
<td>👈 <code>:point_left:</code></td>
<td>👉 <code>:point_right:</code></td>
</tr>
<tr>
<td>🙌 <code>:raised_hands:</code></td>
<td>🙏 <code>:pray:</code></td>
<td>👆 <code>:point_up_2:</code></td>
</tr>
<tr>
<td>👏 <code>:clap:</code></td>
<td>💪 <code>:muscle:</code></td>
<td>🤘 <code>:metal:</code></td>
</tr>
<tr>
<td>🖕 <code>:fu:</code></td>
<td>🚶 <code>:walking:</code></td>
<td>🏃 <code>:runner:</code></td>
</tr>
<tr>
<td>🏃 <code>:running:</code></td>
<td>👫 <code>:couple:</code></td>
<td>👪 <code>:family:</code></td>
</tr>
<tr>
<td>👬 <code>:two_men_holding_hands:</code></td>
<td>👭 <code>:two_women_holding_hands:</code></td>
<td>💃 <code>:dancer:</code></td>
</tr>
<tr>
<td>👯 <code>:dancers:</code></td>
<td>🙆‍♀️ <code>:ok_woman:</code></td>
<td>🙅 <code>:no_good:</code></td>
</tr>
<tr>
<td>💁 <code>:information_desk_person:</code></td>
<td>🙋 <code>:raising_hand:</code></td>
<td>👰‍♀️ <code>:bride_with_veil:</code></td>
</tr>
<tr>
<td>:person_with_pouting_face: <code>:person_with_pouting_face:</code></td>
<td>:person_frowning: <code>:person_frowning:</code></td>
<td>🙇 <code>:bow:</code></td>
</tr>
<tr>
<td>💏 <code>:couplekiss:</code></td>
<td>💑 <code>:couple_with_heart:</code></td>
<td>💆 <code>:massage:</code></td>
</tr>
<tr>
<td>💇 <code>:haircut:</code></td>
<td>💅 <code>:nail_care:</code></td>
<td>👦 <code>:boy:</code></td>
</tr>
<tr>
<td>👧 <code>:girl:</code></td>
<td>👩 <code>:woman:</code></td>
<td>👨 <code>:man:</code></td>
</tr>
<tr>
<td>👶 <code>:baby:</code></td>
<td>👵 <code>:older_woman:</code></td>
<td>👴 <code>:older_man:</code></td>
</tr>
<tr>
<td>:person_with_blond_hair: <code>:person_with_blond_hair:</code></td>
<td>👲 <code>:man_with_gua_pi_mao:</code></td>
<td>👳‍♂️ <code>:man_with_turban:</code></td>
</tr>
<tr>
<td>👷 <code>:construction_worker:</code></td>
<td>👮 <code>:cop:</code></td>
<td>👼 <code>:angel:</code></td>
</tr>
<tr>
<td>👸 <code>:princess:</code></td>
<td>😺 <code>:smiley_cat:</code></td>
<td>😸 <code>:smile_cat:</code></td>
</tr>
<tr>
<td>😻 <code>:heart_eyes_cat:</code></td>
<td>😽 <code>:kissing_cat:</code></td>
<td>😼 <code>:smirk_cat:</code></td>
</tr>
<tr>
<td>🙀 <code>:scream_cat:</code></td>
<td>😿 <code>:crying_cat_face:</code></td>
<td>😹 <code>:joy_cat:</code></td>
</tr>
<tr>
<td>😾 <code>:pouting_cat:</code></td>
<td>👹 <code>:japanese_ogre:</code></td>
<td>👺 <code>:japanese_goblin:</code></td>
</tr>
<tr>
<td>🙈 <code>:see_no_evil:</code></td>
<td>🙉 <code>:hear_no_evil:</code></td>
<td>🙊 <code>:speak_no_evil:</code></td>
</tr>
<tr>
<td>💂‍♂️ <code>:guardsman:</code></td>
<td>💀 <code>:skull:</code></td>
<td>🐾 <code>:feet:</code></td>
</tr>
<tr>
<td>👄 <code>:lips:</code></td>
<td>💋 <code>:kiss:</code></td>
<td>💧 <code>:droplet:</code></td>
</tr>
<tr>
<td>👂 <code>:ear:</code></td>
<td>👀 <code>:eyes:</code></td>
<td>👃 <code>:nose:</code></td>
</tr>
<tr>
<td>👅 <code>:tongue:</code></td>
<td>💌 <code>:love_letter:</code></td>
<td>👤 <code>:bust_in_silhouette:</code></td>
</tr>
<tr>
<td>👥 <code>:busts_in_silhouette:</code></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:3.02,words:905},y:"a",title:"Markdown表情",i:"markdown"},["/markdown/Markdown-emoji","/markdown/Markdown-emoji.md"]],["v-30670774","/markdown/intro.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 标题</h2>
<table>
<caption></caption>
<thead>
    <tr><th>Atx形式</th>
    <th>Setext形式</th>
    <th>效果</th>
</tr></thead>
<tbody>
    <tr>
        <td># 标题1</td>
        <td>标题1<br>===</td>
        <td><h1>标题1</h1></td>
    </tr>
    <tr>
        <td>## 标题2</td>
        <td>标题2<br>---</td>
        <td><h2>标题2</h2></td>
    </tr>
    <tr>
        <td>### 标题3</td>
        <td>无</td>
        <td><h3>标题3</h3></td>
    </tr>
    <tr>
        <td>#### 标题4</td>
         <td>无</td>
        <td><h4>标题4</h4></td>
    </tr>
    <tr>
        <td>##### 标题5</td>
         <td>无</td>
        <td><h5>标题5</h5></td>
    </tr>
    <tr>
        <td>###### 标题6</td>
         <td>无</td>
        <td><h6>标题6</h6></td>
    </tr>
</tbody>
</table>`,r:{minutes:4.01,words:1203},y:"a",title:"基础语法",i:"markdown"},["/markdown/intro","/markdown/intro.md"]],["v-5d14f3ef","/markdown/ssp-shortcut.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h1> 少数派快捷键</h1>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">少数派网页端原生支持Markdown语法</p>
</blockquote>
<h2> 编辑</h2>
<table>
<thead>
<tr>
<th style="text-align:left">功能</th>
<th style="text-align:left">热键</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">新段落</td>
<td style="text-align:left">Enter</td>
</tr>
<tr>
<td style="text-align:left">新行（不另起段落）</td>
<td style="text-align:left">Shift + Enter</td>
</tr>
<tr>
<td style="text-align:left">剪切</td>
<td style="text-align:left">Ctrl + X</td>
</tr>
<tr>
<td style="text-align:left">复制</td>
<td style="text-align:left">Ctrl + C</td>
</tr>
<tr>
<td style="text-align:left">粘贴</td>
<td style="text-align:left">Ctrl + V</td>
</tr>
<tr>
<td style="text-align:left">全选</td>
<td style="text-align:left">Ctrl + A</td>
</tr>
<tr>
<td style="text-align:left">跳转到页面顶部</td>
<td style="text-align:left">Ctrl + Home</td>
</tr>
<tr>
<td style="text-align:left">跳转到页面底部</td>
<td style="text-align:left">Ctrl + End</td>
</tr>
<tr>
<td style="text-align:left">查找</td>
<td style="text-align:left">Ctrl + F</td>
</tr>
<tr>
<td style="text-align:left">查找下一个</td>
<td style="text-align:left">F3 / Enter</td>
</tr>
<tr>
<td style="text-align:left">查找上一个</td>
<td style="text-align:left">Shift + F3 / Shift + Enter</td>
</tr>
<tr>
<td style="text-align:left">替换</td>
<td style="text-align:left">Ctrl + H</td>
</tr>
</tbody>
</table>`,r:{minutes:.54,words:161},y:"a",title:"少数派快捷键",i:"markdown"},["/markdown/ssp-shortcut","/markdown/ssp-shortcut.md"]],["v-4a459580","/markdown/typora-shortcut.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 文件</h2>
<table>
<thead>
<tr>
<th style="text-align:left">功能</th>
<th style="text-align:left">热键(Windows/Linux)</th>
<th>热键 (macOS)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">新建文件</td>
<td style="text-align:left"><code>Ctrl</code> + <code>N</code></td>
<td>Command + N</td>
</tr>
<tr>
<td style="text-align:left">新窗口</td>
<td style="text-align:left"><code>Ctrl</code> + <code>Shift</code> + <code>N</code></td>
<td>Command +Shift + N</td>
</tr>
<tr>
<td style="text-align:left">新建选项卡</td>
<td style="text-align:left">Command + T</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">打开</td>
<td style="text-align:left"><code>Ctrl</code> + <code>O</code></td>
<td>Command + O</td>
</tr>
<tr>
<td style="text-align:left">快速打开</td>
<td style="text-align:left"><code>Ctrl</code> + <code>P</code></td>
<td>Command + Shift + O</td>
</tr>
<tr>
<td style="text-align:left">重新打开已关闭的文件</td>
<td style="text-align:left"><code>Ctrl</code> + <code>Shift</code> + <code>T</code></td>
<td>Command + Shift + T</td>
</tr>
<tr>
<td style="text-align:left">保存</td>
<td style="text-align:left"><code>Ctrl</code> + <code>S</code></td>
<td>Command + S</td>
</tr>
<tr>
<td style="text-align:left">另存为/副本</td>
<td style="text-align:left"><code>Ctrl</code> + <code>Shift</code> + <code>S</code></td>
<td>Command + Shift + S</td>
</tr>
<tr>
<td style="text-align:left">偏好</td>
<td style="text-align:left"><code>Ctrl</code> + <code>,</code></td>
<td>Command + ,</td>
</tr>
<tr>
<td style="text-align:left">关闭窗口</td>
<td style="text-align:left"><code>Ctrl</code> + <code>W</code></td>
<td>Command + W</td>
</tr>
</tbody>
</table>`,r:{minutes:2.02,words:605},y:"a",title:"Typora快捷键",i:"markdown"},["/markdown/typora-shortcut","/markdown/typora-shortcut.md"]],["v-1c2dd3d6","/politics/",{y:"h",title:"政治",i:"item"},["/politics/index.html","/politics/README.md"]],["v-1559ca3e","/tool/",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 编程环境</h2>
<h3> <img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/link.svg" alt="" loading="lazy">&nbsp;<a href="/tool/git.html" target="blank">Git</a></h3>
<h2> 数据库</h2>
<h3> <img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/link.svg" alt="" loading="lazy">&nbsp;<a href="./mysql">Mysql</a></h3>`,r:{minutes:.21,words:64},y:"a",title:"工具",i:"tool"},["/tool/index.html","/tool/README.md"]],["v-1fe4fcb6","/tool/ffmpeg.html",{d:"2022-08-03T17:40:14.000Z",l:"2022年8月4日",e:`<h2> 合并多个文件</h2>
<h3> 新建文本文件</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>file 1.ts
file 2.ts
……
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.19,words:57},y:"a",title:"Ffmpeg",i:"video"},["/tool/ffmpeg","/tool/ffmpeg.md"]],["v-49951ef6","/tool/git.html",{d:"2022-08-03T00:00:00.000Z",l:"2022年8月3日",e:`<h2> 安装</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>      		//普通用户安装
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>           		//root权限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.87,words:860},y:"a",title:"Git",i:"git"},["/tool/git","/tool/git.md"]],["v-77ba32fe","/tool/vuepress.html",{d:"2022-08-03T00:00:00.000Z",l:"2022年8月3日",e:`<blockquote>
<p>Vuepress2.X请参考<a href="https://blog.csdn.net/passwordgloo/article/details/127111857" target="_blank" rel="noopener noreferrer">Vuepress2.X从0-1保姆级入门教程</a></p>
</blockquote>
<h2> 环境</h2>

<h2> 部署</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#空项目预置环境</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">pnpm</span> run docs:build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> dist

<span class="token comment"># 如果是发布到自定义域名</span>
<span class="token comment"># echo 'passwordgloo.xyz' &gt; CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> study

<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>

<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"0.0.0.0.0.6(alpha)"</span>
<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:passwordgloo/passwordgloo.github.io.git study

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span>

<span class="token builtin class-name">cd</span> -

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.72,words:217},y:"a",title:"Vuepress Hope",i:"vue"},["/tool/vuepress","/tool/vuepress.md"]],["v-2d0ac073","/tw/",{y:"h",title:"預見",i:"home"},["/tw/index.html","/tw/README.md"]],["v-451df50f","/ubuntu/",{y:"h",title:"Ubuntu",i:"ubuntu"},["/ubuntu/index.html","/ubuntu/README.md"]],["v-23a4ecb7","/ubuntu/beautiful.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> Gnome插件</h2>
<h3> 安装Gnome管理软件</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gnome-tweaks chrome-gnome-shell		//安装gnome-tweaks<span class="token punctuation">(</span>中文译名优化<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.49,words:447},y:"a",title:"Ubuntu 系统美化篇",i:"ubuntu"},["/ubuntu/beautiful","/ubuntu/beautiful.md"]],["v-571d3aad","/ubuntu/install.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<blockquote>
<p>国内访问速度慢，<a href="https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/" target="_blank" rel="noopener noreferrer">切换清华源</a>加速软件更新安装</p>
</blockquote>
<h2> 输入法</h2>
<h3> Fcitx5</h3>
<h4> 安装</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> fcitx5 fcitx5-*
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> fcitx5 fcitx5-frontend-qt5 fcitx5-frontend-gtk3 fcitx5-frontend-gtk2 fcitx5-chinese-addons             //简化版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.5,words:750},y:"a",title:"Ubuntu 装机必备篇",i:"ubuntu"},["/ubuntu/install","/ubuntu/install.md"]],["v-13b93c5c","/ubuntu/lamp.html",{d:"2022-07-30T16:22:42.000Z",l:"2022年7月31日",e:`<h2> 安装</h2>
<h3> 更新Ubnutu服务器</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.95,words:284},y:"a",title:"Ubuntu Lamp环境",i:"ubuntu"},["/ubuntu/lamp","/ubuntu/lamp.md"]],["v-3a6f6f77","/ubuntu/skill.html",{d:"2022-07-30T16:27:03.000Z",l:"2022年7月31日",e:`<h2> 双系统时间不一致</h2>
<h3> 方法1</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>timedatectl set-local-rtc <span class="token number">1</span>     //Ubuntu设置硬件时钟为本地时间，windows需要手动同步时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.36,words:108},y:"a",title:"Ubuntu 实用技巧篇"},["/ubuntu/skill","/ubuntu/skill.md"]],["v-6f376f9b","/ubuntu/system.html",{d:"2022-07-30T16:28:27.000Z",l:"2022年7月31日",e:`<h2> 账户管理</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span>	   //一般用户,有时需要用户自己的密码
<span class="token function">su</span>         //切换root用户权限，输入后需要rootpassword确认
<span class="token function">sudo</span> <span class="token function">su</span>    //临时申请root权限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.12,words:636},y:"a",title:"Ubuntu 系统管理篇"},["/ubuntu/system","/ubuntu/system.md"]],["v-6db12241","/education/child_psy/1.1.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`
<h2> 一、研究对象<span alt="blue">了解</span></h2>
<blockquote>
<p>儿童心理学或儿童发展心理学是一门研究儿童的心理随着时间的流逝（年龄的增长）在<em>心理</em>上和<em>行为</em>上发生的变化的学科。</p>
</blockquote>
<p><code>儿童</code>。个体从出生到成熟这段时间内，在心理上和行为上发生的变化是儿童心理学研究的对象。这段时间里的个体就是儿童（广义的）。</p>
<p><code>成熟</code>。儿童期的确定与成熟有关，何谓“成熟”？一般指个人心身发育过程的完成。心身成熟意味着儿童期的结束，成年期的开始，或继续向成年期过渡。个体生理上的成熟时间很明确-性发育的完成。可是心理上的确切的成熟时间很难确定。因为心理活动本身是多侧面、多过程的。再说，生理和心理的发展虽然互相关联，但各系统成熟的时间并不同步，即使是身体各系统，其发展也是多元化的，因此对成熟年龄的估计也不易一致，不过，从总体上来说，国内外一般都认同的个体成熟的年龄在17、18岁左右。但随着社会的发展，儿童生理成熟年龄的前倾，心理成熟年龄的延缓或推迟，欧美一些国家已把儿童发展心理学研究的对象年龄范围延伸到19、20、22岁。这也反映现在的儿童成为成人需要经过更长的过渡期或准备期。</p>`,r:{minutes:14.61,words:4383},y:"a",title:"1.1概述",i:"psy"},["/education/child_psy/1.1","/education/child_psy/1.1.md"]],["v-6f65fae0","/education/child_psy/1.2.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、关于遗传与环境的争论<span alt="orange">论述</span></h2>
<p>在探讨儿童心理发展因素的过程中，很长时间以来存在着关于遗传和环境在发展中作用的争论。这种争论有时又称为“先天与后天”之争、“成熟与学习”之争，或“生物因素与社会因素”之争。所谓“先天”，是指有机体的生物遗传因素，是人们通过遗传而天生具备的某些禀赋和特质。“后天”指环境因素，是胎儿期和出生后的环境影响所获得的素质和经验。环境既包括生物环境，如营养、药物、医疗状况和身体意外等等，也包括社会环境，如家庭、学校、同伴群体、社区、媒体和文化等等。这场争论从中世纪开始一直持续到20世纪末，大致经历了三个阶段。</p>`,r:{minutes:20.06,words:6017},y:"a",title:"1.2儿童心理发展的基本问题",i:"psy"},["/education/child_psy/1.2","/education/child_psy/1.2.md"]],["v-711ad37f","/education/child_psy/1.3.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、过去与现在西方的儿童观<span alt="blue">了解</span></h2>
<table>
<thead>
<tr>
<th>历史时期</th>
<th>有关儿童观的一些特点</th>
</tr>
</thead>
<tbody>
<tr>
<td>古代</td>
<td>儿童实际上不被当作人来看待，杀婴行为非常普遍；发展不成熟的婴儿可能被看成不完全的人</td>
</tr>
<tr>
<td>中世纪欧洲</td>
<td>较高的婴儿与儿童死亡率；没有一个清晰的儿童观，儿童被看成是个“小成人”，而不是将儿童看作是需要养育与引导的个体。必要时会让他们去参加工作或承担成人的职责</td>
</tr>
<tr>
<td>18世纪欧洲</td>
<td>贫困以及情感上的漠不关心导致广泛的弃婴；依然有较高的婴儿死亡率；严厉惩罚违反法律的儿童</td>
</tr>
<tr>
<td>19世纪的欧洲与北美洲</td>
<td>工业化将儿童作为手工劳动者广泛地使用在工厂、矿山、田地、商店等地方；对儿童具有矛盾的态度</td>
</tr>
<tr>
<td>今天的发展中国家</td>
<td>5岁以下儿童的死亡率仍较高，通常死于可预防的疾病；对儿童权益有了更多的认识；越来越多地使用疫苗接种来阻止不必要的死亡</td>
</tr>
<tr>
<td>今天的工业化国家</td>
<td>加速提高的社会与技术的变化呈现出崭新的冒险与挑战；儿童能接触到大量的信息与娱乐，数量多得无法想象。离婚率显著增长、家庭更小、出生率降低，出现更多不要孩子的夫妻、更多比例的老人及“年轻成人”；电视与色情、游戏机与暴力、网络与网瘾泛滥，儿童新的恐慌：怕父母离婚、怕孤独</td>
</tr>
</tbody>
</table>`,r:{minutes:28.97,words:8692},y:"a",title:"1.3儿童发展心理学的历史与现状",i:"psy"},["/education/child_psy/1.3","/education/child_psy/1.3.md"]],["v-72cfac1e","/education/child_psy/1.4.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、儿童心理学研究课题的来源</h2>
<p>儿童心理研究的问题来自三个源头：（1）对儿童发展<s>过程本身的探究</s>和描述。如儿童的游戏如何发展，儿童对母亲的依恋要经过哪几个阶段，思维如何发展等等。（2）<s>对基本理论假设的检验</s>。如乔姆斯基认为儿童语言的获得与儿童头脑中具有先天的语言获得装置有关。什么是语言获得装置？有没有语言获得装置？这就要通过几种方法对这种理论假设作检验。弗洛伊德认为，喂食和大小便训练与儿童人格的发展有关。是不是真的有关呢？这些都是需要进一步探讨的问题。（3）<s>儿童的社会实际问题</s>。例如，现在我国独生子女家庭越来越普遍，独生子女因为没有兄弟姐妹，他们会不会变得很“自我中心”、依赖、自私，甚至成为“问题儿童”呢？独生子女是不是就比多子女家庭的孩子行为问题多呢？这是一个非常实际的问题。又比如，父母离异会对儿童产生什么消极影响？如何帮助这些儿童从家庭的阴影中走出来？等等。</p>`,r:{minutes:11.06,words:3318},y:"a",title:"1.4儿童发展心理学研究的方法",i:"psy"},["/education/child_psy/1.4","/education/child_psy/1.4.md"]],["v-7b6aaadb","/education/child_psy/10.1.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、性别定型化的几个基本概念</h2>
<h3> 1.性别</h3>
<p>性别，就是我们通常称谓的“男性”或“女性”。这是根据生物学特征对人类群体的身份所作的最基本的界定。作为男性，其性染色体由XY组成，有性腺、睾丸，而女性的性染色体由XX组成，性腺是卵巢。男女性的外部生殖器也不同。</p>
<h3> 2.性别角色</h3>
<p>性别角色（gender role)是被社会文化标准认可的男性和女性在社会上的一种地位，是按性别来规定的一个人的社会身份。也是社会对男性和女性在行为方式和态度上期望的总称。每个社会对男性和女性都会提出种种不同的要求，小到服饰、言谈举止、兴趣爱好、性格特征，大到家庭分工、社会分工，形成一套男女性别有意无意必须遵守的刻板的性别模式。不同的社会文化有不同的性别模式，并且随社会本身的变革、发展也会发生某些变化。因此，相对于以生物学特征划分的性别，性别角色实质上是一种社会性划分。生物学的性别是扮演社会性别角色的基础，但个体能否扮演好适合自己性别的性别角色或者说是否具有“男子气”或“女子气”，这与个体对性别及性别角色的认识和意愿有关。</p>`,r:{minutes:8.89,words:2666},y:"a",title:"10.1儿童性别定型化过程",i:"psy"},["/education/child_psy/10.1","/education/child_psy/10.1.md"]],["v-7d1f837a","/education/child_psy/10.2.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、性别差异的表现</h2>
<h3> 1.身体和动作方面</h3>
<p>出生时女孩在身体和神经系统方面的发展比男孩快些。无论走路、说话、长牙齿、青春期的到来，女孩都先于男孩。男婴出生时身体比女婴要长些、重些，有更加成熟的肌肉，比较大的心脏和肺，对痛的敏感性要低些。从婴儿期开始，男孩长期维持高效的新陈代谢，具有较强的活动能力，心脏与肺部发育均衡，血红蛋白高度集中，这在青春期更为明显。男性激素促进了血红蛋白的形成，而女性激素则没有这种直接作用。女婴的活动比较精细，大部分是面部表情，如张嘴、微笑和吸吮。男婴表现了更多的自发性活动，由大肌肉活动构成。同时，随着年龄的增长，男婴在大肌肉动作技能和力量方面显得更加优越。女婴的触觉和痛觉阈限较男婴低。</p>`,r:{minutes:42.18,words:12655},y:"a",title:"10.2性别差异的表现与原因",i:"psy"},["/education/child_psy/10.2","/education/child_psy/10.2.md"]],["v-3968508c","/education/child_psy/11.1.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、依恋的含义和发展过程</h2>
<h3> 1.什么是依恋（attachment)</h3>
<p>广义的依恋是指个体对另一个体的长期持续的积极的情绪联结。儿童心理学中的依恋是指婴儿是求并企图保持与特定的人亲密的身体账系的一种倾向。婴儿依恋的对象主要是母亲，也可以是别的抚养者或与婴儿联系亲密的人，如家庭其他成员。依恋主要表现为啼哭、笑、吸吮、喊叫、咿呀学语、抓握、身体接近偎依和跟随等行为。依恋是婴儿与抚养者之间一种积极的、充满深情的感情纽带。它对于激发父母和照顾者更精心地照料后代，对形成儿童最初信赖和不信赖的个性特点有着重要的影响。</p>
<h3> 2.依恋发展的过程</h3>
`,r:{minutes:22.71,words:6814},y:"a",title:"11.1依恋－最早出现的关系",i:"psy"},["/education/child_psy/11.1","/education/child_psy/11.1.md"]],["v-35fe9f4e","/education/child_psy/11.2.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、同伴的作用</h2>
<h3> 1.同伴是强化物</h3>
<p>帕特森（G.R.Patterson &amp;R.A.Littman,1967)等人为了研究同伴的反应在强化幼儿攻击性行为方面所起的作用，专门训练一组学生观察幼儿园儿童互相攻击的情况。实验对象是18个男孩和18个女孩，共观察33次，每次2.5小时。详细记录被攻击者的反应态度对攻击者攻击行为的影响。研究发现，当一个儿童猛冲过去，去抢另一个儿童的玩具时，若受害者作出哭、退缩或沉默的反应，那么这个进攻者以后还会用同样的方式去对付别的儿童，也就是说，消极的反应会强化儿童攻击性行为。相反，如果一个儿童受到攻击时立即给予反击，或者老师立即制止攻击者的行为，批评攻击者并把东西归还原主，那么，这个攻击者的攻击行为就可能要收敛一些，或者改变这种行为，或者另觅进攻的对象。</p>`,r:{minutes:19.18,words:5753},y:"a",title:"11.2儿童同伴关系的发展",i:"psy"},["/education/child_psy/11.2","/education/child_psy/11.2.md"]],["v-3294ee10","/education/child_psy/11.3.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、游戏的理论</h2>
<p>对游戏的解释曾有过不少理论。霍尔（Hall)的“种族复演说”认为，游戏是远古时代人类祖先的生活特征在儿童身上的重演，不同年龄的儿童以不同形式重演祖先的本能活动。如8-9岁是女孩复演母性的本能时期，她们爱玩洋娃娃；在6-9岁时是席勒－斯宾塞（Schiller-Spencer)的精力过剩说把游戏看作是儿童借以发泄体内过剩精力的一种方式。彪勒的“机能快乐说”强调儿童在游戏中可以使机体不受外界的任何约束，从中获得快乐。格罗斯（Groos)的“生活准备说”与以上几种理论不同，强调了游戏的功用，把游戏看成是儿童对未来生活无意识的准备。如女孩抱娃娃是为将来当母亲作准备，男孩狩猎、搜集是为将来负担家庭作准备。目前，主要的游戏理论有以下几种。男孩狩猎本能复演期。</p>`,r:{minutes:19.46,words:5837},y:"a",title:"11.3游戏与交往技能",i:"psy"},["/education/child_psy/11.3","/education/child_psy/11.3.md"]],["v-4b2d0499","/education/child_psy/12.1.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、皮亚杰的道德认知发展理论</h2>
<p>J·皮亚杰是第一个系统地追踪研究儿童道德认识，确切地说是研究儿童道德判断发展的心理学家。他在1932年出版的《儿童道德的判断》是研究儿童道德发展的里程碑。</p>
<h3> 1.皮亚杰的研究方法</h3>
<p>皮亚杰认为，道德是由种种规则体系构成的，道德的实质或者说成熟的道德包括两个方面的内容。一是对社会规则的理解和认识；二是儿童对人类关系中平等、互惠的关心，这是公道的基础。他和他的同事从以下几个方面着手揭示儿童道德的开端和发展规律：①儿童对游戏规则的理解和使用；②对撒谎和说真话的认识；③对权威的认识。</p>
<p>皮亚杰在研究儿童道德发展的课题中采用了他独创的临床研究法（谈话法）。这种方法先是通过观察和实验向儿童提出一些事先设计好的问题，然后分析儿童所作的回答，尤其是错误的回答，从中找出规律性的东西。</p>`,r:{minutes:26.76,words:8029},y:"a",title:"12.1儿童道德认知的发展",i:"psy"},["/education/child_psy/12.1","/education/child_psy/12.1.md"]],["v-4ce1dd38","/education/child_psy/12.2.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、班杜拉的社会学习理论</h2>
<p>社会学习理论的创始人之一班杜拉（A.Bandura),1925年生于加拿大，大学毕业后进入美国爱荷华大学研究所，专攻临床心理学，对学习理论在临床上的运用很感兴趣。1952年获博士学位后，他到斯坦福大学从事儿童攻击性行为的研究。他的理论兼具耶鲁大学和哈佛大学的发展研究传统。</p>
<p>早期的社会学习理论是在行为主义学习理论的基础上建立起来的，特别重视刺激一反应的接近性原理和强化原理，也十分重视动物研究，试图从动物行为研究的模式推论人的社会行为。这样的研究存在极大的局限性。</p>
<p>社会学习理论认为传统的行为研究过于简单，它只强调行为学习的外部环境，人或有机体都被看成是死气沉沉的“黑箱”，箱子里究竟发生了什么都无法被理解，也无需去理解。社会学习理论者还认为，人与鸽子、老鼠的不同在于人的心理活动，包括思维和预期。如果我们不剥离外部刺激和反应，就不能全面了解人类发展。到了20世纪60年代，班杜拉突破了传统的行为主义理论框架，从认知和行为联合起作用的观点上解释人的学习行为。他认为社会学习乃是一种信息加工理论和强化学习理论综合的过程。强化理论无法阐明行为获得过程中的内部活动，而信息加工理论又忽略了行为操作因素。班杜拉通过大量的实验研究和临床行为矫正，建立了现代社会学习理论。华生和斯金纳相信人类只能被动地为环境的所塑造，而班杜拉认为人的发展是通过人、人的行为和环境之间持续不断的相互作用而发生的。他把这个观点称作相互决定论。他还认为，人们在一定程度上是他们环境的产物，但是通过人的自觉的选择、创造和改造他们的周围环境，他们也是环境的制造者或创造者。后来的几十年，社会学习理论在很多方面逐渐压倒了经典性条件作用和操作性条件作用理论。这个理论具有以下几个特点：</p>`,r:{minutes:18.08,words:5423},y:"a",title:"12.2儿童道德行为的发展",i:"psy"},["/education/child_psy/12.2","/education/child_psy/12.2.md"]],["v-4e96b5d7","/education/child_psy/12.3.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、道德情感的三种形式</h2>
<p>道德感是关于人的言论、行动、思想或意图是否符合人的道德需要而产生的情感。道德情感从形式上来分，大致有以下三种：</p>
<h3> 1.直觉的情感体验</h3>
<p>它是由于对某种情境的感知而引起的，其产生往往极其迅速、突然。如，人由于突然的不安之感而制止了不道德的要求，由于突如其来的自尊心而激起了大胆果断的行为。这种道德体验表面上看来似乎是无源之水，实际上是个体长期稳定的道德认识、道德行为在特殊情境下的集中反映，对指导个体在紧急情况下迅速作出正常的行为定向有重要的作用。</p>
<h3> 2.与具体的道德形象相联系的情感体验</h3>
<p>当儿童听了一个报告、看了一本小说，或看了一部电影或电视片后，一些栩栩如生的人物形象和他们高尚的情操和思想往往会激起儿童情感上强烈的共鸣，有的形象则叫人永世难忘，只要一想到这样的形象儿童就会按照他们身上的某一种品质或行为来要求自己，激励自己。</p>`,r:{minutes:15.71,words:4714},y:"a",title:"12.3儿童道德情感的发展",i:"psy"},["/education/child_psy/12.3","/education/child_psy/12.3.md"]],["v-504b8e76","/education/child_psy/12.4.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、自我控制的测量</h2>
<p>测量儿童自我控制水平的方法有好几种，如注意力集中与分散的测验、图形配对测验、迷津测验、抵制诱惑和延缓满足测验等。</p>
<p>延缓满足，即为了得到以后更有价值的东西，愿意延缓立即能得到的奖励。这个测验是心理学家常用的工具。例如，让儿童在两者之间作一种选择：一种是立即可以得到的、但不太具吸引力的东西；另一种是须延缓一段时间才能得到的更具吸引力的东西。测验者认为选择立即要得到东西的儿童为缺乏自我控制力的儿童。</p>
<p>研究表明，一般有自我控制力的儿童和能延缓满足的儿童相对地比较成熟，有责任感，有较高的成就动机，更能遵守规则，即使在无人监督的情况下也是如此。</p>`,r:{minutes:5.77,words:1731},y:"a",title:"12.4儿童的自我控制",i:"psy"},["/education/child_psy/12.4","/education/child_psy/12.4.md"]],["v-99e39d10","/education/child_psy/13.1.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、攻击行为</h2>
<h3> 1.攻击行为及其发展</h3>
<p>（1)攻击行为 攻击行为是任何对生物体有意的伤害行为，而且被伤害者会力图避免这种行为。攻击行为根据其目的性不同分为敌意性攻击和工具性攻击。如果行为者的主要目的是伤害对方就是敌意性攻击，例如孩子甲打了孩子乙，并且嘲笑乙。工具性攻击是通过伤害别人而达到其他目的。例如，一个男孩为抢玩具打了一个女孩。他的目的是抢玩具，打人只是手段，就是工具性攻击。</p>
<p>（2)攻击行为的发展 1岁左右的婴儿就会显示比较明显的攻击意图。两个1岁的孩子可以为争夺玩具而争斗。在以后的成长岁月中，如果儿童没有学会以协商或者其他更友善的方式解决冲突，那么在更大的儿童身上就会表现更多攻击性行为。攻击行为发展研究显示，2-3岁的孩子会在玩伴妨碍或攻击自己的时候使用踢打等躯体行为进行反击。3-5岁时，身体攻击会下降，而语言攻击的频率上升了，孩子们更多使用嘲笑、说坏话、诽谤、起外号等方式对他人进行攻击。学龄前的孩子的攻击大多数情况下属于工具性攻击，其目的在于玩具、糖果等孩子认为有价值的东西。到童年中期，大多数孩子学会使用友善的方式解决大多数争端，身体攻击和言语攻击的发生率都会有所下降。</p>`,r:{minutes:14.81,words:4442},y:"a",title:"13.1攻击和退缩",i:"psy"},["/education/child_psy/13.1","/education/child_psy/13.1.md"]],["v-9679ebd2","/education/child_psy/13.2.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、注意力</h2>
<h3> 1.注意发展</h3>
<p>注意是指人的心理活动对外界一定事物的指向和集中。具有注意的能力称为注意力。好的注意力并非一蹴而就，其中既要顺应儿童注意发展的普遍规律，也要关注对儿童注意力的培养。</p>
<p>有证据表明，儿童在不同时期发展注意的三个子网络中，定向功能发育最早，4个月大的婴儿就会预期地看向非模糊刺激序列，但是直到1岁半，婴儿才能预期地注意内容导向序列。对外源线索的定向能力在儿童时期已经达到成人水平，而对内源线索的定向能力在儿童期逐渐发展。唤起功能在6-10岁间有着持续的发展。冲突控制功能方面，7岁儿童显著地优于6岁儿童，而7岁之后保持稳定，即达到与成人接近的水平。计划能力与注意以及其他认知加工能力存在一定的相关。实验和临床的证据表明，计划能力与注意的发展有一定的联系。Parrila等（1996)的研究表明，10岁儿童在简单计划任务中的表现已经接近成人水平，而复杂任务在青少年期得以持续地发展。</p>`,r:{minutes:11.64,words:3492},y:"a",title:"13.2与学业有关的问题－注意和焦虑",i:"psy"},["/education/child_psy/13.2","/education/child_psy/13.2.md"]],["v-93103a94","/education/child_psy/13.3.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、第一逆反期－幼儿期</h2>
<h3> 1.幼儿逆反的表现</h3>
<p>第一逆反期的表现是幼儿要求行为活动自主和实现自我意志，反抗父母控制，这是发展中的正常现象。近年来，中国儿童的第一逆反期提早到了两岁。一项家庭调查显示，2-4岁的幼儿中，有80.2%已有相当强的自我主张。孩子到了2岁左右，会有一个喜欢说“不”的叛逆时期。随着孩子自我意识萌芽，事事都喜欢自己做主，他们想参与成人的活动，认为别人能干的事自己也能干，大胆行动；有时他们自己要做的事被成人代做，就一定要退回原状态，自己重做；常常说“不”。其实有时候他们和父母对着干，只是在尝试自己在多大程度上可以按照自己的意愿做。儿童有一种全能感，认为自己“行”。他们也希望他人这样认为，所以很喜欢自己做，并得到称赞。</p>`,r:{minutes:7.19,words:2157},y:"a",title:"13.3儿童和青少年逆反",i:"psy"},["/education/child_psy/13.3","/education/child_psy/13.3.md"]],["v-8fa68956","/education/child_psy/13.4.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、儿童说谎的发展研究</h2>
<p>心理学家保罗·埃克曼（Paul Ekman)把谎言定义为存心误导别人的有意行为，事先未透露其目的，并且对方也没有明确要求被误导。在这个定义中，谎言包含三个部分－事实、意图和信念，即①所说的不是事实，②说的人知道所说的不真实，③说的人希望听的人认为它是真的。</p>
<p>那么当儿童所描述的情况与事实不吻合的时候，是否就判定这个孩子说谎呢？可能需要针对不同的情况来作判断。例如，一个4岁的孩子因为很想去参加一个活动，但是因为种种原因没有去成。几天之后，他向其他孩子描述了活动有多么有趣，自己有多开心。他说谎了吗？</p>
<p>早期研究普遍认为儿童在4岁之前是不会说谎的，因为在这个时候他们还不懂得什么叫做真实。因为儿童不理解一个事物可以被表象或者实质来表征。如果例子中的儿童只是太想去了，并且进行了想象，而且把自己的想象认为是真实的。按照埃克曼的定义，他并没有存心误导别人，在某种程度上，儿童混淆了现实和想象，自己也信以为真了。这样的情况在儿童身上确实存在。如果是这样，那么这个孩子就不是说谎。</p>`,r:{minutes:13.81,words:4144},y:"a",title:"13.4说谎",i:"psy"},["/education/child_psy/13.4","/education/child_psy/13.4.md"]],["v-54db61c0","/education/child_psy/2.1.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<p>略</p>
`,r:{minutes:.06,words:19},y:"a",title:"2.1生命的开始与遗传基因",i:"psy"},["/education/child_psy/2.1","/education/child_psy/2.1.md"]],["v-5171b082","/education/child_psy/2.2.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、胎儿的发育过程</h2>
<h3> 1．胚种期</h3>
<p>从受精卵到胎儿降生，其间大约270天，需经历三个阶段。第一个阶段是胚种期，也称组织和组织分化前期。卵细胞受精后，一方面继续向子宫移动，一方面开始有丝分裂。第一次细胞分裂大约在受精后24小时（或36小时）内进行，此后细胞按等比级数迅速分裂，约在受精后的第八天（或第九天）胚种进入子宫。进入子宫前受精卵的营养靠自己的卵黄。进入子宫后，植入在子宫壁上，营养靠母体供给。这个时期结束时出现胚胎。</p>
<h3> 2．胚胎期</h3>
<p>怀孕后的第二周到第八周为胚胎期，又称细胞和组织分化期。这个时期细胞发展极为迅速，胚胎分化出三个细胞层：内胚层、中胚层、外胚层。人体各个器官就是在这三个胚层的基础上分化而形成。外胚层是形成皮肤、感觉器官和神经系统的基础；中胚层进一步分化成为肌肉、血液和循环系统；而内胚层则产生消化系统和其他内部器官与腺体。胚胎浸泡在羊水之中，通过胎盘跟母体进行物质交换。到两个月时，它的长度约为3.8厘米至5厘米，体重约为2克，与受精卵相比增加了两万倍，在人的整个生命历程中胚胎期是发展最快的时期。这时它已大体上像个人的样子了，四肢已得到相当的发育，有了手指与足趾，脸、耳朵、眼睛、嘴都已清晰可见，心脏在跳动，神经系统显示出最初的反应。在这个时期，胚胎对环境影响非常敏感。</p>`,r:{minutes:11.69,words:3506},y:"a",title:"2.2胎儿的发育与先天素质",i:"psy"},["/education/child_psy/2.2","/education/child_psy/2.2.md"]],["v-4e07ff44","/education/child_psy/2.3.html",{e:`<h2> 一、身体的发展</h2>
<p>人体的生长发育不是直线上升，而是呈波浪式的，发展的速度是不等速的，有时快些，有时慢些，交替着进行。儿童的生长有四个显著的时期：（1）从出生到2岁，发展十分迅速；（2）2岁到青春发育期，发展较平缓；（3）青春发育期开始（男孩约在13-15岁，女孩约在11-13岁），发展急剧迅速，变化极大；（4）15、16岁到成熟，发展又趋缓慢。</p>
<h3> 1．身高和体重</h3>
<p>儿童身体发展的重要标志是身高和体重。它们标志着内部器官，如呼吸、消化、排泄系统以及骨骼的发育。体格检查时首先量身高、称体重，道理就在于此。</p>
<p>从出生到成熟的整个发育时期，儿童的身高和体重都在增长，一般女孩可长到18岁左右，男孩可长到2$\\theta <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord cjk_fallback">岁左右。不同的生长周期中儿童的身高和体重增加的速率是不同的，发育的速度呈</span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mord cjk_fallback">形（见图</span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">13</span><span class="mord cjk_fallback">）。有两个最快的发展期或称高峰期。第一个高峰期在出生后的第一、二年。在第一年内儿童的身长增加</span><span class="mord">2</span></span></span></span>\\theta <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">25</span><span class="mord cjk_fallback">厘米，为出生时身长（</span><span class="mord">5</span></span></span></span>\\theta <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord cjk_fallback">厘米）的</span><span class="mord">5</span></span></span></span>\\theta <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord cjk_fallback">％；体重增加</span><span class="mord">6</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">7</span><span class="mord cjk_fallback">公斤，为出生时体重（</span><span class="mord">3</span><span class="mord cjk_fallback">公斤）的两倍。第二年儿童的发展速度也是较快的，身长增加</span><span class="mord">1</span></span></span></span>\\theta $厘米，体重增加2.5-3.5公斤。此后，增长速度急剧下降，身高在两岁后每年增加4-5厘米，体重增加1.5-2.5公斤，保持了一个相对平稳的速度。相比之下，婴儿期与儿童早期（大约在5岁以前）比儿童中、晚期（5-12岁）增长要快些。到青春发育期又出现第二个高峰期。这时身高年增加一般为6-7厘米，体重年增加一般为4-5公斤，以后增长速度又开始减缓，直到发育成熟，骨骼钙化完成后，身高停止增长。儿童的身高和体重的增长水平可用以下公式计算：</p>`,r:{minutes:14.98,words:4494},y:"a",title:"2.3儿童身体、脑和神经系统的发展",i:"psy"},["/education/child_psy/2.3","/education/child_psy/2.3.md"]],["v-4a9e4e06","/education/child_psy/2.4.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、动作发展的规律</h2>
<p>儿童动作的发展是在脑和神经中枢、神经、肌肉控制下进行的，因此儿童动作的发展和儿童身体的发展、大脑和神经系统的发展密切相关。儿童身体的发展有先后次序，儿童动作的发展也表现有一定的时间顺序。在儿童早期，动作的发展在某种程度上标志着心理发展的水平，动作的发展同时也促进儿童心理发展。因此，在幼儿智能发育检查中，大（粗）动作和细动作的发展是检查的一个重要方面。动作的发展是和身体发展密切相连的，儿童动作的发展也有类似身体发展的规律</p>
<h3> 1.从上至下</h3>
<p>儿童最早发展的动作是头部动作，其次是躯干动作，最后是脚的动作。儿童最先学会抬头和转头，然后是翻身和坐，接着是使用手和臂，最后才学会腿和足的运动，能直立行走和跑跳。任何一个儿童的动作发展总是沿着抬头一翻身一坐一爬一站一行走的方向成熟的。</p>`,r:{minutes:12.69,words:3808},y:"a",title:"2.4儿童动作的发展",i:"psy"},["/education/child_psy/2.4","/education/child_psy/2.4.md"]],["v-3d737bff","/education/child_psy/3.1.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、评定新生儿感觉的几种方法</h2>
<p>要评定一个个体是否具有某种感知能力，一般要回答这样两个问题：一是个体能否察觉当前存在的客体或刺激源；二是个体能否区别物理上不同的刺激源，这种区别可以达到什么样的程度。</p>
<h3> 1.反射行为</h3>
<p>新生儿出生时已具备一套完整的无条件反射装置。只要给予适宜的刺激，就能引出相应的反射行为。如轻轻抚摸新生儿的面颊，他就能转头作觅食反射；用灯光刺激新生儿的眼睛，他的瞳孔就会缩小。这些反射行为的引出，仿佛是婴儿在告诉我们：“我已经感觉到了。”如果这个刺激未能引出新生儿相应的反射，我们就很难断定新生儿是否察觉了当前的刺激，或者是否有别的刺激干扰了已被婴儿察觉到的刺激，而抑制了反射活动。</p>`,r:{minutes:24.53,words:7358},y:"a",title:"3.1婴幼儿感觉的发展",i:"psy"},["/education/child_psy/3.1","/education/child_psy/3.1.md"]],["v-3f28549e","/education/child_psy/3.2.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、整体知觉和部分知觉的发展</h2>
<p>埃尔金德（D．Elkind）和凯格勒（R．R．Koegler，1964）研究了儿童部分知觉与整体知觉的问题。他们给195名5-9岁的儿童看一些如图3-2所示的图片，对儿童说：“我要给你看一些画，每次只看一张。你要告诉我，你看到了什么，它们看起来像是什么。”如果儿童在观察图片时，漏看了部分或漏看了整体，就再问他：“你看还有别的什么？”实验结果表明，71％的4岁儿童只看到了图片的个别部分。如“两只长颈鹿”，或“一个土豆”、“两根胡萝卜”。但9岁的儿童中仅有21％的人作这种回答。反过来，4岁儿童中只有11％既看到了一张图片中的部分，又看到了整体。如把上图看作“一个鸡心”、“一架飞机”。9岁儿童中已有79％能作这类回答。这个实验揭示了儿童对物体的部分知觉与整体知觉发展的过程。儿童先是认识客体的个别部分（4、5岁），然后开始看见整体部分，但不够确定（6岁）。接着既能看到部分，又能看到整体（7、8岁），但此时儿</p>`,r:{minutes:19.89,words:5966},y:"a",title:"3.2婴幼儿知觉的发展",i:"psy"},["/education/child_psy/3.2","/education/child_psy/3.2.md"]],["v-b556ae44","/education/child_psy/4.1.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、皮亚杰的认知机能模型：同化一顺化</h2>
<p>皮亚杰将人类认知视为一个复杂有机体在复杂环境中的一种具体的生物适应形式。他认为认知系统是极其活跃的，该认知系统在建构知识时，不是被动地对呈现于感官之前的各种信息进行简单复制，而是积极选择和解释环境信息。皮亚杰认为，心智总是主动对环境加以分析和解释，使之与自己已有的心理框架相一致。因而，心智既不是对世界进行复制，将其作为现成的东西而被动接受；也不是无视客观世界，完全自顾自地创造出个人关于世界的心理概念；而是通过吸收外在环境信息，对其加以解释、转换和重组，进而构筑自己的知识结构。因此，在皮亚杰看来，知识的获得过程是一个积极主动的建构过程，在建构知识的过程中，心智必然与环境相互接触，而知识对机体来说总具有适应性。概而言之，按照皮亚杰的观点，心智是以一种主动和自我指向的方式面对环境。</p>`,r:{minutes:26.24,words:7873},y:"a",title:"4.1皮亚杰的儿童认知发展研究",i:"psy"},["/education/child_psy/4.1","/education/child_psy/4.1.md"]],["v-b1ecfd06","/education/child_psy/4.2.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、社会文化理论与语言发展</h2>
<p>维果茨基的重要心理学思想之一，在于强调社会活动对人类意识的重要性，认为社会环境对学习具有关键性的作用，正是社会因素与个人因素二者的整合促成了人类学习。他将心理功能区分为初级心理功能和高级心理功能，前者在出生时就已经出现，有如感觉和注意，它们只因经验发生微小发展；后者是个体基于个体发展经验逐步发展而来的，有如问题解决和思维等功能。</p>
<p>从初级心理功能发展到高级心理功能的发展，离不开社会文化环境的影响。社会文化环境通过符号工具影响到认知功能，符号工具指的是社会的文化物品以及它的语言和社会机构。因此书本、教师、父母、专家以及任何能够传递知识的事物，都在维果茨基界定的社会文化之列。认知发展源于在社会交互作用中文化工具的使用，源于将这种交互作用内化和心理转换的过程。因此，维果茨基的理论是一种辩证的建构主义理论，它强调人与周围环境之间的相互作用，而符号中介则是发展与学习的关键机制。</p>`,r:{minutes:11.9,words:3569},y:"a",title:"4.2维果茨基的儿童认知发展研究",i:"psy"},["/education/child_psy/4.2","/education/child_psy/4.2.md"]],["v-ae834bc8","/education/child_psy/4.3.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、布鲁纳的建构主义观</h2>
<p>依照布鲁纳的观点，儿童的认知结构随年龄的增长而日渐成熟，从而能够以越来越复杂的方式思考和组织材料。这里我们再次看到了皮亚杰的影响，当然也有信息加工模型的影响。儿童也被视为是生来具有好奇心、渴求知识和认识。儿童自然适应于环境，其抽象思维发展于动作。与皮亚杰和维果茨基一样，布鲁纳认为儿童必须自己通过探究环境而学习，事实上，布鲁纳可被视为“极端的建构主义者”，因为他坚信我们所经历的世界是我们心灵的产物。我们所感知和认识的世界，作为符号加工的产物，是经由我们的心灵所建构的。布鲁纳拒绝皮亚杰所倡导以及维果茨基在一定程度上所支持的阶段观，其更关注儿童发展过程中知识是如何表征和组织的，而不是发展变化的年龄。</p>`,r:{minutes:10.22,words:3065},y:"a",title:"4.3布鲁纳的儿童认知发展研究",i:"psy"},["/education/child_psy/4.3","/education/child_psy/4.3.md"]],["v-0d35d5bd","/education/child_psy/5.1.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、信息加工理论的一般观点</h2>
<h3> 1.信息加工观的性质</h3>
<p>信息加工观是当今认知发展研究中的一个主要途径。这种观点将人类的心智设想为一个复杂的认知系统，这一系统在某些方面与数字计算机相似。与一台计算机一样，认知系统处理或加工来自环境或已经存储在系统内的信息。它以各种不同的方式加工信息：将信息编码、重编码或解码；把信息与其他信息比较或结合；将信息存储于记忆中或从记忆中提取信息；把信息纳入或排除出注意（或意识）的中心等等。信息加工理论对所有这些细节感兴趣。</p>
<p>认知发展的信息加工研究试图确定，在处理特定的某些任务或问题时儿童的认知系统究竟做了什么。它试图回答这样一些问题，诸如：在信息加工事件的开始时，认知系统首先做了什么，然后做了什么？哪些加工步骤是同时进行（平行加工），而非继时进行（系列加工）的？</p>`,r:{minutes:43.61,words:13082},y:"a",title:"5.1儿童期的认知发展：信息加工研究",i:"psy"},["/education/child_psy/5.1","/education/child_psy/5.1.md"]],["v-0eeaae5c","/education/child_psy/5.2.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、心理理论的发展研究</h2>
<h3> 1.什么是心理理论</h3>
<p>直觉的“心理理论（Theory of Mind,ToM)”是指个体对心理现象和心理状态的认识，它建立在心理世界与客观世界相区分、信念和愿望是人类行为之源这样一种认识的基础之上。</p>
<p>有心理学家认为，在日常生活中使用的那些心理词语，并不仅仅是一些任意的、毫无联系的常识语，而是类似于一些理论概念，这些概念构成了一个更大的认识或理论框架。诸如“相信”、“认为”等词语的意义是由一套法则加以界定的，就像物理学理论中的理论术语一样，这些法则源于我们日常生活中使用的一些概括化的知识或原理。因此，所谓的心理理论，描述的是一系列心理状态及这些心理状态与世界间的因果关系。</p>`,r:{minutes:26.16,words:7849},y:"a",title:"5.2认知发展的领域特殊性研究",i:"psy"},["/education/child_psy/5.2","/education/child_psy/5.2.md"]],["v-7517029c","/education/child_psy/6.1.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、语音知觉</h2>
<p>最近的研究发现，婴儿对言语刺激是非常敏感的。不到10天的新生儿就能区别语音和其他声音，并对之作出不同的反应。如原先已停止吸奶的婴儿，在听到一段语音后又开始用力吸，并且吸吮速率大大增加，而对非语言的乐音则增加不多。另有研究发现，一个正在听成人讲话的生下才1个月的婴儿，其肌肉运动的停顿和成人语流的停顿同步。这些都表明婴儿对言语刺激的敏感性。</p>
<p>婴儿的语音知觉和成人的语音知觉一样，具有范畴性。语言中同一个音（如b)在不同的情况下，即使是由同一个人发出，也都不完全相同。但我们都把它们知觉为同一个音，把它们归为同一个范畴，以区别于其他的音。人类婴儿从很小的时候起，就具有这种范畴知觉。</p>`,r:{minutes:8.25,words:2476},y:"a",title:"6.1语音发展",i:"psy"},["/education/child_psy/6.1","/education/child_psy/6.1.md"]],["v-76cbdb3b","/education/child_psy/6.2.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、儿童词汇的增加</h2>
<p>一般儿童在一岁后开始能说出第一批词，这时儿童才能用语言作为交流的工具。学会说一个词，必须（1)能识别一个相应的概念；（2)能识别一个语言单元；（3)在它们之间建立联系。因此，儿童能说出一个词的标准是：（1)该词是儿童自发产生的，即不是即时模仿的结果；（2)有稳定且接近成人的语音；（3)有比较明确、稳定的意义，在某一对象或情境出现时前后一致地使用某一个词，它具有一定的概括性。儿童最初的词汇量增加缓慢，一岁半到两岁后儿童能使用的词汇迅速增加。这时儿童往往对所有看到的事物都要给予一个名称。国外曾有人统计过儿童从一岁开始产生词以后逐年的词汇量，但由于研究者采取的标准和使用的方法不同，所以结果相差很大。国内目前尚无系统的研究。</p>`,r:{minutes:18.84,words:5651},y:"a",title:"6.2词汇发展",i:"psy"},["/education/child_psy/6.2","/education/child_psy/6.2.md"]],["v-7880b3da","/education/child_psy/6.3.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、句子的产生</h2>
<p>大约在一岁半时，当掌握了一定数量的单词以后，儿童就开始把两个词组合起来形成“句子”，这是儿童语言发展中的又一个里程碑。这时儿童对词的组合已遵循一定的规则，而不是任意的。因此，一般认为这是儿童句法的开始。在开始的一个阶段，儿童只能一次说一个词，表达成人要用一句话表达的意思，这可称之为单词句（单词语）。以后，儿童句子的完整性和复杂性逐渐增加。</p>
<p>按儿童所讲的语句结构的完整性和复杂性，句子可分为不完整句、完整句和复合句几个层次。</p>
<h3> 1.不完整句</h3>
<p>不完整句指表面结构不完整，但能表示一个句子意思。这里主要指单词句和电报句。这种句子的出现率在2至6岁范围内随儿童年龄的增长而逐渐下降。</p>`,r:{minutes:17.47,words:5242},y:"a",title:"6.3句子发展",i:"psy"},["/education/child_psy/6.3","/education/child_psy/6.3.md"]],["v-7a358c79","/education/child_psy/6.4.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、选择和调节</h2>
<p>由于交谈的场合不同，听者的知识、能力和当时需要不同，以及说话者和听话者关系的不同等等，说话的内容和形式都应该有所不同，这样才能够达到有效交流的目的。做出这样的选择和调节，要求说话者对情境状况作出判断，对听者已经知道什么，需要了解什么等等进行假定，然后根据这些判断和假定改变信息的内容和形式，这是语用技能发展的一个重要方面。</p>
<p>皮亚杰在提出儿童的自我中心问题时，就涉及儿童的语用技能。他认为，由于儿童的思维是自我中心的，因此妨碍他们在说话时考虑听者的情况。儿童在一起时，每个儿童都在讲自己正在做或准备做的事，既不注意别人说什么，也不关心自己的话语是否被别人注意、理解。在一个研究中，实验者对儿童讲一个故事，要求儿童把这个故事讲给另一个儿童听。这时，5、6岁的儿童也常会遗漏很重要的信息，因此成人往往不能理解他们的讲述，但他们自己却以为讲得很好，听的人也以为自己已经理解了。皮亚杰把儿童的这种言语称之为自我中心言语。2-6岁儿童的自我中心言语往往多于社会性言语。有人验证了皮亚杰的观点，认为学前儿童说话时还不能考虑听者的特点和需要。到7、8岁后才能用不同的方式对不同的听者解释游戏规则。</p>`,r:{minutes:8.03,words:2409},y:"a",title:"6.4语用技能的发展",i:"psy"},["/education/child_psy/6.4","/education/child_psy/6.4.md"]],["v-7bea6518","/education/child_psy/6.5.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、学习论</h2>
<h3> 1、模仿说</h3>
<p>模仿说强调模仿在北童语言学习申的作用。1922年就有学者说过：在语言的习得中，特别是形成句子的早期，起重要作用的是重复，仿效人们对儿童说的话1924年著名心理学家阿尔伯特在《社会心理学》一书中正式提出语言是通过模仿习得的观点。这种观点在20世纪20年代至50年代一直都很流行，许多学者都把模仿看成是语言习得中一个特别重要的因素。儿童通过重复、模拟他所听到的话语，逐渐接近他周围成人的语言。他们还把模仿利题化这两个因素联系起来，认为模仿是强化的必要和先决条件，儿童成功機仿了新词或新前句子形式，因此得到了强化，于是就习得了语言。而且，模仿本身也可以成为强化，它是一种自我强化。</p>`,r:{minutes:21.4,words:6419},y:"a",title:"6.5语言获得理论",i:"psy"},["/education/child_psy/6.5","/education/child_psy/6.5.md"]],["v-460fa10a","/education/child_psy/7.1.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、智力的定义</h2>
<p>什么是智力，心理学界至今还给不出一个科学的定义。《中国大百科全书·心理学》中对“智力”是这样论述的：“智力一词的含义看起来好像是人人皆知的，实际上却很难提出一种完全令人满意的定义。”心理学家一直在试图解释它，但还没有哪一种定义是所有心理学家都认同的。归纳起来可以看出，心理学家们不外乎是从智力的结构和功能上来加以阐释。</p>
<p>在智力研究的早期，心理学家较多地从智力的功能上来加以解释，如美国心理学家桑代克（E.Thorndike,1874-1949)认为，智力表现为学习的速度和效率。德国心理学家斯腾（W.Stern,1871-1938)、法国心理学家比纳（A.Binet,1857-1911)都认为，一般智力就是有机体对于新环境完善适应的能力。美国心理学家推孟（L.M.Terman,1877-1956)则认为，智力与抽象思维能力成正比。而另一位美国心理学家韦克斯勒（D.Wechsler,1896-1981)在20世纪50年代较全面地定义了智力，它是“一个人有目的地行动、合理地思维和有效地处理环境的总合的整体能量”。同样也是来自美国的心理学家考夫曼（A.S.Kaufman,1944-）认为“智力是个体解决问题及信息加工处理方式的过程”。</p>`,r:{minutes:10.33,words:3098},y:"a",title:"7.1智力的一般概念",i:"psy"},["/education/child_psy/7.1","/education/child_psy/7.1.md"]],["v-42a5efcc","/education/child_psy/7.2.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、智力的成长曲线</h2>
<p>根据心理学家的研究，人类智力是随年龄而不断发展的。尤其是在儿童期，智力呈快速增长的态势。但在整个儿童期，其增长的趋势不是等速的，而是一条先快后慢的发展曲线。推孟认为，儿童在10岁前智力呈直线向上的走势，这段时间里，智力每年都增长很多，因而相隔一年，甚至几个月，智力都有明显的增长。而10岁以后呈负加速的态势，即随年龄增长，智力成长的速度逐渐放慢。18岁以后智力则停止增长。另一些心理学家，如贝利（Nancy Bayley,1899-1994)和韦克斯勒等则认为，13岁之前是智力快速发展的时期，25岁以后智力停止增长。虽然人与人之间在发展的时间上会有个体差异，但这条智力的成长曲线则是基本相同的。</p>`,r:{minutes:17.3,words:5189},y:"a",title:"7.2智力的发展",i:"psy"},["/education/child_psy/7.2","/education/child_psy/7.2.md"]],["v-3f3c3e8e","/education/child_psy/7.3.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、智力测验的条件</h2>
<p>一个好的智力测验必须具备以下几个要求：</p>
<p>（1)有一组好的项目，即测题能真实反映一个人的智慧水平。能够测量智力水平的题目可以列举出许多，但一个测验不可能都采纳，所以要从中挑选最好的、最有代表性的，因而测验要从难度的合适性、编排的合理性和对所测群体的代表性上进行充分的考虑，这样才能形成一个高效和准确的智力测验。</p>
<p>（2)要有较高的质量，即有高的信度和效度。一个测验好不好，最主要的就是看其信度和效度。信度表示测验结果的稳定性，即多次测验结果是一致的；效度表示测验的有效性，即能测量到想测的那个特征。</p>
<p>（3)要进行标准化，即测验的编制、实施、评分和结果的解释等几个环节都规定了一致的程序，这样才能对不同被试的测验结果进行比较。如果条件不相同就不具有可比性。</p>`,r:{minutes:12.26,words:3677},y:"a",title:"7.3智力测验",i:"psy"},["/education/child_psy/7.3","/education/child_psy/7.3.md"]],["v-44d95c5a","/education/child_psy/8.1.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、情绪的功能</h2>
<h3> 1.情绪与健康</h3>
<p>人们提到健康往往只谈身体健康，其实身体的健康只是健康的一半。作为一个社会的人，真正的健康不仅含有生理的、躯体的健康，还应有心理的、精神的健康。而心理健康的关键或核心是情绪的健康。</p>
<p>心身统一在一个人身上，它们是互相影响、互相作用、不可分割的。情绪如果出了问题就会世响身体，使身体生病，这种疾病被称为心因性疾病或心身疾病（主要由情绪状态产生的身体失调），它反过来又会影响人的情绪。中国古代医学《黄帝内经》：书早就指出情绪与疾病的关系：“怒伤肝，喜伤心，思伤脾，忧，恐伤肾。”现代医学表明：长时间的动机斗争、长时间处于应激状态、多疑、听傲、自卑、撤谎、嫉妒、抑郁、焦虑、恐惧、过度敏感都会使人生病，或加剧病情的发展。</p>`,r:{minutes:12.98,words:3894},y:"a",title:"8.1情绪的概述",i:"psy"},["/education/child_psy/8.1","/education/child_psy/8.1.md"]],["v-468e34f9","/education/child_psy/8.2.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、婴儿的情绪</h2>
<h3> （一）情绪表达</h3>
<h4> 1、天生的情绪表达能力</h4>
<p>早在19世纪进化论的创立者查尔斯，达尔文就指出，人类的面部表情是天生的，不是习得的；这些表情在全世界都是一致的；它们是从动物进化而来。现在的发展学家还是相信情绪由进化而来。尤其是情绪的面部表情，有着坚固的生物学基础、独特的适应功能（Goldsmith&amp;Davidson,2004).如自出生就瞎的儿童会像有正常视力的儿童那样微笑或皱眉。20世纪早期行为主义的创始人华生曾详细地描述了新生儿有三种非习得性的情绪－爱、怒和怕的表现。但其后的研究者并未证实华生对新生儿有三种原始情绪的划分。于是有人认为新生儿的情绪是笔统的、未分化的（Shermen,1927).1932年加拿大心理学家布里奇斯（K,M.Bridge8)提出了新生儿情绪只是一种弥散性的兴奋或激动，是一种杂乱无章的未分化的反应。只是以后通过成熟与学习才能分化出不同性质的情绪。</p>`,r:{minutes:38.85,words:11655},y:"a",title:"8.2儿童情绪的发展",i:"psy"},["/education/child_psy/8.2","/education/child_psy/8.2.md"]],["v-48430d98","/education/child_psy/8.3.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、学习理论</h2>
<p>儿童的情绪可以通过经典性条件反射（或应答性条件反射）获得。华生和雷诺做了一个证明害怕是学习获得的经典实验。实验对象是一个名叫艾伯特（Albert)的11个月的男孩。实验者让小男孩玩白鼠，起初他一点也不害怕。后来，实验者就在小孩玩白鼠的同时，敲打钢棒，发出猛烈的响声。几次以后，艾伯特只要一看到白鼠，即使没有响声伴随，也表现出极度的害怕，不仅是害怕白鼠，还害怕与白鼠类似的物体，如狗、白兔、皮外套、棉花、羊毛等，甚至连圣诞老人的面具也害怕。1个月以后又对他重新测定，发现他的害怕程度虽有所下降，但这种条件性的害怕依然存在。由于这个实验会给儿童的心灵带来伤害，而受到人们的指责，但它也揭示了害怕的习得过程。儿童的害怕不仅可以通过条件反射的建立而获得，还可以通过新的条件反射的建立来加以克服（见本章第二节）。</p>`,r:{minutes:6.82,words:2045},y:"a",title:"8.3儿童情绪的获得",i:"psy"},["/education/child_psy/8.3","/education/child_psy/8.3.md"]],["v-a68aed8e","/education/child_psy/9.1.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、弗洛伊德的心理性欲理论</h2>
<p>西格蒙德·弗洛伊德（S.Freud,1856-1939)是19世纪末维也纳的精神病学家和精神分析学派的创始人。在与精神病人的长期接触和对他们的治疗过程中，弗洛伊德发现有些精神病人的发病与其童年早期的经验有关。因此，他十分重视早期经验在人格形成中的作用并详细地描述了儿童人格形成的过程。</p>
<h3> 1.人格结构的形成</h3>
<p>弗洛伊德设想一个人的人格由三个方面组成，即伊底（id)或本我、自我（ego)和超我（superego).我们可以将“伊底或本我”理解为人格的生物成分，将“自我”理解为人格的心理成分，而将“超我”理解为人格的社会成分。一个人的行动实际上是这三种成分互相作用的动力过程。</p>`,r:{minutes:32.39,words:9718},y:"a",title:"9.1儿童个性发展的理论",i:"psy"},["/education/child_psy/9.1","/education/child_psy/9.1.md"]],["v-a3213c50","/education/child_psy/9.2.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、最初的个性或气质</h2>
<p>气质，通常称为脾气或性情。它是个性或人格的生物和情绪基础。一定的气质类型使儿童的情绪和反应倾向于某一种类型。婴儿表现的气质特点，即是个体最初的个性。人们在动物行为的研究中已经发现，狗和其他一些动物的诸如攻击性、易发怒、胆怯、驯顺等行为特征都受到遗传强大的影响，因而能用选择性繁殖的方法培育出各种品性的动物，并利用其不同的行为品性为人类服务，如极其温顺、安静的狗，神经质的、极为凶猛的狗。</p>
<h3> 托马斯和切斯的分类</h3>
<p>人类行为中的某些特征也受到遗传强大的影响。托马斯、切斯和伯奇（A.Thomas,S.Chess &amp;H.Birch,1970)曾经对141名儿童追踪研究达30年之久，出生后第一年每3个月一次，1岁到5岁每半年一次，5岁后每年一次一直持续到长大成人。实验者根据九个独立的三级量表（three-point scales),概括地勾勒出了儿童的行为轮廓。研究者发现，这些实验对象在出生后的几周就在气质上表现出明显的个体差异，这些差异似乎与教养方式无关，而且这些特点在以后的实验里仍能见到。实验者认为大部分儿童可以归为三种气质类型：一种是易养型（easy child).他们的饮食、睡眠习惯和大小便都有一定的节律，喜欢探究新事物，对环境的变化很易适应。第二种是难养型（difficult child).他们的活动没有节律，对新生活很难适应，遇到新奇的事物或人容易产生退缩的行为，心境十分消极，容易表现不寻常的紧张反应，如大哭、大叫，发脾气时脸会变色。第三种是“慢慢活跃起来的”或迟缓型（slow towarm up).他们的生活节律多变，初遇到新事物或陌生人时往往会退缩，对环境的适应较慢，心境带有一点否定性（见表9-4).托马斯实验中141个被试中有40%的婴儿是“易养型”，15%是“迟缓型”，10%是“困难型”，另有35%婴儿属混合型，他们具有上述两类或两类以上的气质类型特征。</p>`,r:{minutes:16.59,words:4978},y:"a",title:"9.2个性形成的生物学因素",i:"psy"},["/education/child_psy/9.2","/education/child_psy/9.2.md"]],["v-9fb78b12","/education/child_psy/9.3.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、个性发展与社会化过程</h2>
<p>从某种意义上说，个性形成的过程也就是儿童逐步实现社会化的过程。所谓社会化（Socialization),是指个体学习他所属的社会中人们必须掌握的文化知识、行为习惯和价值体系的过程。世界上虽然不存在两个个性上一模一样的人，但是，同一个社会或同一阶层里的人往往有着共同的行为特征。如同样的风俗习惯、宗教信仰、生活方式、道德准则，等等。如果说，个性是一个人不同于其他任何人的行为、态度、观念的独特的综合的话，那么，社会化则是要使生活在同一个社会、同一个阶层或同一个亚文化群里的人都要学习、掌握该社会或该阶层甚至该性别相适应的行为体系。</p>
<p>一个社会要存在、要发展，就必须对它的社会成员提出一些基本的行为规范，提出社会化的目标。如儿童必须学习文化知识，必须有专门人员对他们进行教育；社会成员必须互相尊重、互相帮助；攻击性行为和性冲动必须加以控制，成就性行为和舍已救人的行为必须加以颂扬·····尽管各个社会由于历史发展的原因对社会成员的行为要求和限制有所不同，甚至很不相同，但每个社会内部的成员基本的社会行为是基本一致的。从哲学的角度看，人是社会关系的总和，从心理发展的角度看，人就是实现社会化过程的产物。人的多样性体现在每个个体具有的个性的特殊性或独特性上，而人的一般性则体现在各个社会成员的个性的共同性上一－共同的社会行为和社会的目标，如共同的信念、共同的理想、共同的社会准则。这些共同的社会行为特征存在于个性迥异的每个个体上。因而，个体与社会、个性与社会性是对立的统一。可以这样认为，个性是每个具有独特的生物学基础的个体，在各种不同的社会环境（社会文化、历史背景、家庭、学校、同伴、社区、媒体）中，在学习和掌握社会行为的过程中逐步形成的。就像气质给每个个体的心理特征抹上一层独特的色形一样，社会化也给一个特定社会里的每个成员的行为染上了一层区别于其他文化社会的色彩。每个社会都要造就适合该社会、维护该社会的个体，故个性的多样性总离不开个性的统一性，这是不以人的意志为转移的。</p>`,r:{minutes:3.68,words:1103},y:"a",title:"9.3个性发展的社会化动因－家庭",i:"psy"},["/education/child_psy/9.3","/education/child_psy/9.3.md"]],["v-9c4dd9d4","/education/child_psy/9.4.html",{d:"2022-12-12T00:00:00.000Z",l:"2022年12月12日",e:`<h2> 一、婴幼儿自我意识的发展</h2>
<h3> 1.婴儿自我意识萌芽的实验研究</h3>
<p>（1)阿姆斯特丹（B.Amsterdam,1972)借用盖勒帕（Gallup)在黑猩猩研究中使用的“点红测验”（以测定黑猩猩是否觉知“自我”这个客体），来研究婴儿自我觉知（Self-awareness).在婴儿（3个月到24个月）毫无觉察的情况下，主试在婴儿鼻子上涂个红点，然后观察婴儿照镜子时的反应。根据假设，如果婴儿在照镜子后能立即发现鼻子上的红点，并用手去摸它，表明婴儿已能将自己的形象和加在自己形象上的东西区分，这种行为可作为自我认识出现的标志。研究结果表明，婴儿对自我形象的认识要经历游戏伙伴阶段、退缩阶段、自我认知出现三个阶段。24个月的婴儿几乎都会利用镜中映像去抹掉不属于自己的“红点”。</p>`,r:{minutes:19.16,words:5748},y:"a",title:"9.4婴幼儿自我意识的发展",i:"psy"},["/education/child_psy/9.4","/education/child_psy/9.4.md"]],["v-e76c14ee","/education/child_psy/intro.html",{y:"h",title:"儿童发展心理学",i:"item"},["/education/child_psy/intro","/education/child_psy/intro.md"]],["v-9e737f80","/education/china/1.html",{d:"2020-06-30T00:00:00.000Z",l:"2020年6月30日",e:`<h1> 私人讲学的兴起与传统教育思想的奠基</h1>
<h2> 1.私人讲学的兴起与诸子百家私学的发展</h2>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>私人讲学原因：</td>
<td>1️⃣生产力与生产关系发展<br>2️⃣官学衰微<br>3️⃣士阶级的变化</td>
</tr>
<tr>
<td>官学衰微原因：</td>
<td>世袭制度造成贵族不重视教育<br>王权衰落造成学校荒废<br>战争动乱打破旧有文化垄断<br>士作为自由民，脱离生产劳动而以脑力劳动为主</td>
</tr>
<tr>
<td>学术官守原因：</td>
<td>生产水平有限，书写材料与工具笨重昂贵，难以量产学习的器物受物质条件限制<br>统治者需要学术垄断，以巩固宗法制统治</td>
</tr>
</tbody>
</table>`,r:{minutes:12.67,words:3801},y:"a",title:"私人讲学的兴起与传统教育思想的奠基",i:"china-edu"},["/education/china/1","/education/china/1.md"]],["v-6834cc22","/education/china/10.html",{d:"2020-06-30T00:00:00.000Z",l:"2020年6月30日",e:`<h1> 中国共产党领导下的革命根据地教育</h1>
<h2> 1. 苏维埃根据地与抗日民主根据地教育</h2>
<h3> （1）苏维埃文化教育综合征</h3>
<p>1931年中华苏维埃共和国宣告成立，明确提出苏维埃政权的教育方针：</p>
<p>工农劳苦大众，不论男子和女子在社会经济政治和教育上完全享有同等权利义务，取消一切麻醉人民的封建的宗教的和国民党的三民主义教育</p>
<h3> （2）抗日战争时期中国共产党的教育方针政策</h3>
<p>第一， 实行抗战教育，坚持教育为革命战争和阶级斗争服务</p>
<p>第二， 教育工作的首位是坚持正确的政治方向</p>
<p>第三， 教育与生产劳动、社会政治生活紧密结合</p>`,r:{minutes:2.96,words:887},y:"a",title:"中国共产党领导下的革命根据地教育",i:"china-edu"},["/education/china/10","/education/china/10.md"]],["v-69e9a4c1","/education/china/11.html",{d:"2020-06-30T00:00:00.000Z",l:"2020年6月30日",e:`<h1> 现代教育家的教育理论与实践</h1>
<h2> 1. 杨贤江与马克思主义教育理论</h2>
<h3> （1）论教育本质</h3>
<p>教育是社会的上层建筑之一，建立于经济基础之上，教育也是劳动再生产的手段</p>
<h3> （2）全人生指导</h3>
<p>对青年进行全面关心教育和引导，即不仅关心他们的文化知识学习，同时对他们生活中各种实际问题给予正确的指点和疏导，使之在德智体各方面都得以健康成长，成为一个完整的人，以顺应社会变化</p>
<p>其主要内容有：①人生观指导：以为人类做出贡献为幸福；②政治观指导：投身革命，改造社会，欲做专家，先做战士；③健康生活的指导：具备常识，注重锻炼，有强健的体魄与精神；④劳动生活的指导：以劳动为荣，有工作的知识技能；⑤公民生活指导：具有现代公民意识；⑥文化生活指导：参加文化活动</p>`,r:{minutes:6.85,words:2055},y:"a",title:"现代教育家的教育理论与实践",i:"china-edu"},["/education/china/11","/education/china/11.md"]],["v-9b09ce42","/education/china/2.html",{d:"2020-06-30T00:00:00.000Z",l:"2020年6月30日",e:`<h1> 儒学独尊与读经做官</h1>
<h2> 1.“独尊儒术”文教政策的确立</h2>
<p>董仲舒<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup><a class="footnote-anchor" id="footnote-ref1">首先提出独尊儒术，目的是加强中央集权，统一思想，抑制其他学派发展。</a></p><a class="footnote-anchor" id="footnote-ref1">
</a>`,r:{minutes:5.17,words:1550},y:"a",title:"儒学独尊与读经做官",i:"china-edu"},["/education/china/2","/education/china/2.md"]],["v-97a01d04","/education/china/3.html",{d:"2020-06-30T00:00:00.000Z",l:"2020年6月30日",e:`<h1> 封建国家教育体制的完善</h1>
<h2> 1.魏晋南北朝官学的变革</h2>
<h3> （1）魏的九品中正制</h3>
<p>地方上有名望的人充当中正官，将士人按照“才能”评定为九等，实际上是按照门第高等列等，政府按等选用。九品中正制选举全为世家大族所操纵，限制庶族地主政治权利</p>
<h3> （2）西晋的国子学</h3>
<p>国子学是西晋专门创办培养贵族子弟的学校，由晋武帝下令创立</p>
<p>国子学的创立，满足士族阶级享有教育特权，严格士庶之别的愿望</p>
<h3> （3）南朝宋的“四馆”与总明观</h3>
<p>四馆即(刘)宋文帝时期儒学馆，玄学馆，史学馆，文学馆的总称，作为官学教育，专门研究玄学，史学，文学，儒学的学习场所</p>`,r:{minutes:7.34,words:2202},y:"a",title:"封建国家教育体制的完善",i:"china-edu"},["/education/china/3","/education/china/3.md"]],["v-94366bc6","/education/china/4.html",{d:"2020-06-30T00:00:00.000Z",l:"2020年6月30日",e:`<h1> 理学教育思想和学校的改革与发展</h1>
<h2> 1.科举制度的演变与官学的改革</h2>
<h3> （1）科举制度的演变</h3>
<p>①扩大科举名额</p>
<p>②确定三年一贡举</p>
<p>③殿试成为定制</p>
<p>④建立新制度，防止客场作弊</p>
<p>⑤民族歧视明显</p>
<p>⑥规定从《四书》中出题</p>
<p>⑦科举制度日趋严密</p>
<p>⑧明朝建立童试——乡试——会试——殿试四级考试制度</p>
<p>⑨科场舞弊重生，积重难返</p>
<h3> （2）学校沦为科举附庸</h3>
<p>①学校以科举中试为目的，而不是探究知识</p>
<p>②学校教学内容空疏无用，八股文成为学校教学主要内容，导致治国救民之学荒废</p>`,r:{minutes:9.9,words:2970},y:"a",title:"理学教育思想和学校的改革与发展",i:"china-edu"},["/education/china/4","/education/china/4.md"]],["v-90ccba88","/education/china/5.html",{d:"2020-06-30T00:00:00.000Z",l:"2020年6月30日",e:`<h1> 理学教育思想的批判与反思</h1>
<h2> 1. 理学教育思想的批判</h2>
<p>①揭露传统教育严重脱离实际</p>
<p>②批驳传统教育义利对立观</p>
<p>③抨击八股取士制度</p>
<h2> 2. 黄宗羲的“公其非是于学校”</h2>
<p>学校不仅应具有培养人才，改进社会风俗的职能，而且还应该议论国家政事，倡导在学校中共同议论国家政事是非标准，而非以天子是非为标准</p>
<p>公其非是于学校思想的基本精神，在于反对封建君主专制，改变国家政事是非标准由天子一人化的愿望，已经接近近代议会制度</p>
<h2> 3. 颜元的教育思想</h2>
<h3> （1）颜元与漳南书院</h3>`,r:{minutes:2.01,words:604},y:"a",title:"理学教育思想的批判与反思",i:"china-edu"},["/education/china/5","/education/china/5.md"]],["v-8d63094a","/education/china/6.html",{d:"2020-06-30T00:00:00.000Z",l:"2020年6月30日",e:`<h1> 近代教育的起步</h1>
<h2> 1.教会学校在中国的举办</h2>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>英华书店</td>
<td>是第一所主要面向华人的新式学校</td>
</tr>
<tr>
<td>马礼逊学校</td>
<td>是最早设于中国本土比较正式的教会学校</td>
</tr>
<tr>
<td>评价：</td>
<td>①教会学校毕竟是西方殖民扩张产物，无视中国政府教育管辖权<br>②教会学校同时也是中国传统教育向近代教育过度的促进因素<br>③教会学校与洋务学堂并称为新式学堂</td>
</tr>
</tbody>
</table>`,r:{minutes:3.27,words:981},y:"a",title:"近代教育的起步",i:"china-edu"},["/education/china/6","/education/china/6.md"]],["v-89f9580c","/education/china/7.html",{d:"2020-06-30T00:00:00.000Z",l:"2020年6月30日",e:`<h1> 近代教育体系的建立</h1>
<h2> 1. 维新派的教育实践</h2>
<h3> （1）兴办学堂</h3>
<p>①为培养维新骨干，传播维新思想而设立的草堂</p>
<p>万木草堂，由康有为设立。继承传统书院办学形式和教学方法，教学内容包含义理考据，经世和西方科技政治，1898年戊戌政变后自行解散</p>
<p>②对洋务办学观念有所突破的学堂</p>
<p>南洋公学。1896年盛宣怀奏请在上海设立南洋公学，采用西方近代学校体系，分初高中等级，相互衔接并按年级逐年提升，包含维新观念，民国后发展为交通大学</p>
<p>经正女学。1898年经元善等人在上海创办，课程内容由中西两大类构成，是近代第一所中国人自办的正规女子学校</p>`,r:{minutes:8.15,words:2444},y:"a",title:"近代教育体系的建立",i:"china-edu"},["/education/china/7","/education/china/7.md"]],["v-868fa6ce","/education/china/8.html",{d:"2020-06-30T00:00:00.000Z",l:"2020年6月30日",e:`<h1> 近代教育体制的变革</h1>
<h2> 1. 民国初年的教育改革</h2>
<h3> （1）制定教育方针</h3>
<p>注重道德教育，以实利教育、军国民教育辅之，更以美德教育完成其道德</p>
<h3> （2）壬子癸丑学制</h3>
<p>最初意向是以欧美学制为蓝本，后来在参照日本学制基础上，结合中国实际经验，形成了民国新学制，即壬子学制</p>
<p>1913年陆续通过一些有关学制法令，因而1912-1913学制又称为壬子癸丑学制</p>
<p>壬子癸丑学制首次规定男女同校、废除读经，充实自然科学的内容，将学堂改为学校。</p>
<h3> （3）颁布课程标准</h3>
<p>1912年12月颁布《小学校教则及课程表》开设修身，国文，算术，手工图画等课程</p>`,r:{minutes:9.22,words:2765},y:"a",title:"近代教育体制的变革",i:"china-edu"},["/education/china/8","/education/china/8.md"]],["v-8325f590","/education/china/9.html",{d:"2020-06-30T00:00:00.000Z",l:"2020年6月30日",e:`<h1> 南京国民政府的教育</h1>
<h2> 1. 教育宗旨与教育方针的变迁</h2>
<h3> （1）党化教育</h3>
<p>1924年孙中山重新解释三民主义，确定联俄、联共、扶助农工三大政策，改组国民党，模仿苏俄的“以党治国”模式，推衍得出党化教育</p>
<p>所谓党化教育是在国民党指导下求得教育的革命化，民主化，科学化，社会化，即将教育方针建立在国民党的根本政策之下，按国民党的党义和政治的精神重新组织学校课程</p>
<p>党化教育的本质是推行一个政党，一个主义的专制教育，以管国民党的办法管教育，以国民党的组织纪律为学校的规章制度</p>
<h3> （2）三民主义教育宗旨</h3>`,r:{minutes:5.99,words:1796},y:"a",title:"南京国民政府的教育",i:"china-edu"},["/education/china/9","/education/china/9.md"]],["v-5d4b4ae5","/education/china/intro.html",{d:"2020-06-30T00:00:00.000Z",l:"2020年6月30日",e:`<h1> 官学制度的建立与“六艺”教育的形成</h1>
<h2> 1. 学校萌芽的传说</h2>
<p>（1）传说氏族公社末期产生学校的萌芽，如音乐学习场所——成均</p>
<p>（2）养老/仓库保管地方——庠</p>
<p>（3）教授射箭的场所——序(夏)</p>
<p>（4）养马驯马场所——校</p>
<p>（5）商代已有“大学”、“庠”的名称，瞽宗是贵族学习礼乐的学校。</p>
<p>（6）西周天子和诸侯所设的大学分别称为辟雍和泮宫</p>
<h2> 2. 西周教育制度</h2>
<h3> （1）家庭教育</h3>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>内容：</td>
<td>7岁时实行男女有别的教育，女子受女德教育，为将来成为贤妻良母作准备，男子主管外事。</td>
</tr>
<tr>
<td>意义：</td>
<td>能按儿童年龄发展特点提出不同要求，家庭教育过程具有较明显计划性</td>
</tr>
</tbody>
</table>`,r:{minutes:1.7,words:510},y:"a",title:"官学制度的建立与“六艺”教育的形成",i:"china-edu"},["/education/china/intro","/education/china/intro.md"]],["v-76be69e7","/education/edu_psy/1.1.html",{d:"2020-07-30T00:00:00.000Z",l:"2020年7月30日",g:["学生的心理发展"],e:`<h1> 学生的认知发展</h1>
<h2> 皮亚杰的认知发展观和教育</h2>
<h3> 建构主义发展观</h3>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">发展是一种建构的过程，是个体与环境不断<mark>相互作用</mark>中实现的的</p>
</blockquote>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/check.svg" alt="" loading="lazy">同化：是把外界元素整合到一个正在形成或已经形成的结构中去</p>
</blockquote>`,r:{minutes:3.79,words:1137},y:"a",title:"学生的认知发展",i:"psy"},["/education/edu_psy/1.1","/education/edu_psy/1.1.md"]],["v-78734286","/education/edu_psy/1.2.html",{d:"2020-07-30T16:09:52.000Z",l:"2020年7月31日",g:["学生的心理发展"],e:`<h1> 学生的个性和社会化发展</h1>
<h2> 埃里克森的心理社会发展理论</h2>
<h3> 埃里克森的心理社会发展的八个阶段</h3>
<table>
<thead>
<tr>
<th>年龄</th>
<th>发展危机</th>
<th>重要事件</th>
<th>危机描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>出身到18个月</td>
<td>信任对怀疑</td>
<td>喂食</td>
<td>婴儿与监护者建立初步的爱与信任，获得安全感<br>处理不好，则在不熟悉环境中产生焦虑</td>
</tr>
<tr>
<td>18个月-3岁</td>
<td>自主对羞愧</td>
<td>如厕训练</td>
<td>儿童身体机能获得发展，开始出现符合社会要求的自主性行为<br>如果不能较好控制自己的行为，则容易缺乏信心，发展为羞愧</td>
</tr>
<tr>
<td>3-6岁</td>
<td>主动对内疚</td>
<td>独立</td>
<td>儿童对周围世界更加主动和好奇，更具有自信和责任感<br>如发展不顺利，则表现出退缩行为或过于主动，引起内疚感</td>
</tr>
<tr>
<td>6-12岁</td>
<td>勤奋对自卑</td>
<td>入学</td>
<td>儿童开始学习知识并发展为人处世的能力<br>如发展不顺利，则产生自卑感和失败感，缺乏基本能力</td>
</tr>
<tr>
<td>12-18岁</td>
<td>同一性对角色混乱</td>
<td>同伴关系</td>
<td>青少年在职业、性别角色等方面获得了同一性，方向明确<br>如发展不顺利，容易丧失目标，失去信心</td>
</tr>
<tr>
<td>成年初期</td>
<td>亲密对孤独</td>
<td>爱情关系</td>
<td>成年初期逐渐感到和他人相处具有亲密感<br>如果发展不顺利，则容易被社会疏离而感到孤独寂寞</td>
</tr>
<tr>
<td>成年中期</td>
<td>繁殖对停滞</td>
<td>养育子女</td>
<td>成年中期关爱家庭，支持下一代人发展，具有社会责任感<br>如果发展不顺利，则不关心他人，生活容易失去意义</td>
</tr>
<tr>
<td>成年晚期</td>
<td>完美无憾对悲观绝望</td>
<td>反省和接受生活</td>
<td>成年晚期自我接受感和满足感达到顶点，安享晚年<br>如发展不顺利，则固着于陈年往事，虚度时光</td>
</tr>
</tbody>
</table>`,r:{minutes:3.07,words:921},y:"a",title:"学生的个性和社会化发展",i:"psy"},["/education/edu_psy/1.2","/education/edu_psy/1.2.md"]],["v-d7f35016","/education/edu_psy/10.1.html",{d:"2020-07-30T00:00:00.000Z",l:"2020年7月30日",g:["自我调节学习"],e:`<h1> 自我调节学习及其理论</h1>
<h2> 自我调节学习</h2>
<p>任务界定阶段</p>
<p>目标设置和计划阶段</p>
<p>策略执行阶段</p>
<p>元认知调节阶段</p>
<h2> 自我调节学习的理论</h2>
`,r:{minutes:.23,words:68},y:"a",title:"自我调节学习及其理论",i:"psy"},["/education/edu_psy/10.1","/education/edu_psy/10.1.md"]],["v-d4899ed8","/education/edu_psy/10.2.html",{d:"2020-07-30T00:00:00.000Z",l:"2020年7月30日",g:["自我调节学习"],e:`<h1> 自我调节学习的策略</h1>
<h2> 学习策略概述</h2>
<p><code>学习策略</code>指学习者为了提高学习的效果和效率，有目的有意识地制定有关学习过程的复杂的方案</p>
<h2> 认知策略</h2>
<h3> 复述策略</h3>
<blockquote>
<p>指在工作记忆中为了保持信息，运用内部语言在大脑中重现学习材料或刺激，以便把注意力维持在学习材料之上的策略</p>
</blockquote>
<h4> 画线</h4>
<h4> 复习策略</h4>
<ol>
<li>及时复习</li>
<li>分散复习</li>
<li>形式多样化</li>
<li>尝试背诵</li>
<li>自问自答</li>
</ol>`,r:{minutes:.85,words:255},y:"a",title:"自我调节学习的策略",i:"psy"},["/education/edu_psy/10.2","/education/edu_psy/10.2.md"]],["v-d11fed9a","/education/edu_psy/10.3.html",{d:"2020-07-30T00:00:00.000Z",l:"2020年7月30日",g:["自我调节学习"],e:`<h1> 自我调节学习的训练</h1>
<h2> 自我调节学习的训练原则</h2>
<h2> 自我调节学习的训练模式</h2>
<h3> 直接教学模式</h3>
<h3> 交互式教学模式</h3>
<h3> 支架式教学模式</h3>
<blockquote>
<p>教师在学生的现有知识水平和学习目标之间建立一种帮助学生理解的支架，帮助学生一步步把学习从一个水平提升另一个水平，最后实现学生自主学习的教学模式</p>
</blockquote>
<h3> 脚本式合作</h3>
<h2> 常见策略的训练方法</h2>
`,r:{minutes:.5,words:149},y:"a",title:"自我调节学习的训练",i:"psy"},["/education/edu_psy/10.3","/education/edu_psy/10.3.md"]],["v-0830f658","/education/edu_psy/11.1.html",{d:"2020-07-30T00:00:00.000Z",l:"2020年7月30日",g:["学习心理"],e:`<h1> 道德认知的发展及其培养</h1>
<h2> 皮亚杰道德认知发展理论</h2>
<p>随着认知能力的发展，道德发展也从他律道德阶段发展到自律道德阶段</p>
<table>
<thead>
<tr>
<th>他律道德阶段</th>
<th>自律道德阶段</th>
</tr>
</thead>
<tbody>
<tr>
<td>把规则看成是不可改变的，来源于外部，具有权威性</td>
<td>把规则看成是灵活的、彼此都认可的，是可以协商的</td>
</tr>
<tr>
<td>根据要禁止或惩罚的事来定义道德错误</td>
<td>依据违背了合作精神来定义道德错误</td>
</tr>
<tr>
<td>儿童应服从规则，因为是那些权威这指定的</td>
<td>儿童应服从规则，因为大家都关心其他人的权利</td>
</tr>
</tbody>
</table>`,r:{minutes:1.47,words:440},y:"a",title:"道德认知的发展及其培养",i:"psy"},["/education/edu_psy/11.1","/education/edu_psy/11.1.md"]],["v-42c0d274","/education/edu_psy/2.1.html",{d:"2020-07-30T16:09:52.000Z",l:"2020年7月31日",g:["学生的个体差异"],e:`<h1> 个体的智力差异</h1>
<h2> 智力的心理测量学理论与个体差异</h2>
<h3> 智力的二因素理论</h3>
<p>斯皮尔曼提出，智力包括两种潜在的因素，第一种是单一的一般因素，简称G因素，这是一种假想的、被用于许多种不同任务之中的、单一的智力能力，影响个体在所有智力测验中的表现。</p>
<p>第二种是特殊因素，简称S因素，这些因素只影响个体在某一种能力测验中的表现，特殊因素与智力不相关，因为它只能解释个体在单一测验的表现</p>
<h3> 流体智力和晶体智力</h3>
<p>斯皮尔曼的弟子，卡特尔与霍恩提出流体智力和晶体智力。流体智力是指基本与文化无关的、非言语的心智能力，如空间关系认知、反应速度、记忆力以及计算能力等，它建立在脑发育的基础上，受遗传因素影响较大</p>`,r:{minutes:3.48,words:1044},y:"a",title:"个体的智力差异",i:"psy"},["/education/edu_psy/2.1","/education/edu_psy/2.1.md"]],["v-3f572136","/education/edu_psy/2.2.html",{d:"2020-07-30T16:09:52.000Z",l:"2020年7月31日",g:["学生的个体差异"],e:`<h1> 个体的学习风格差异</h1>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">学习风格指学习者在完成学习任务时表现出来一贯的、典型的、独居个人特色的学习策略和学习倾向</p>
</blockquote>
<h2> 学习风格的生理因素</h2>
<h3> 生理因素</h3>
<h4> 生理刺激</h4>
<ul>
<li>声音</li>
<li>光线</li>
<li>温度</li>
<li>时间</li>
</ul>
<h4> 时间节律</h4>`,r:{minutes:1.25,words:376},y:"a",title:"个体的学习风格差异",i:"psy"},["/education/edu_psy/2.2","/education/edu_psy/2.2.md"]],["v-3bed6ff8","/education/edu_psy/2.3.html",{d:"2020-07-30T16:09:52.000Z",l:"2020年7月31日",g:["学生的个体差异"],e:`<h1> 特殊需要儿童的教育</h1>
<h2> 超常儿童</h2>
<p>超常儿童指智力发展明显超过同龄儿童一般发展水平的儿童，一般认为，智商在130以上者被认为属于超常儿童</p>
<h2> 智力落后儿童</h2>
<p>智力落后儿童指一般智力功能水平明显低于平均水平并表现出适应性行为障碍的儿童</p>
<p>自闭症是比较常见的发展性障碍，表现出认知发展困难、特别是言语发展障碍和社交发展障碍</p>
<h2> 感官障碍儿童</h2>
<p>感官障碍儿童主要是指听觉障碍和视觉障碍</p>
<h2> 学习障碍儿童</h2>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">学习障碍是不同学习异常的统称，包括听、说、读、写、推理和数学等方面的获得和使用上出席那明显困难者。</p>
</blockquote>`,r:{minutes:1.23,words:369},y:"a",title:"特殊需要儿童的教育",i:"psy"},["/education/edu_psy/2.3","/education/edu_psy/2.3.md"]],["v-4680c3a5","/education/edu_psy/3.1.html",{d:"2020-07-30T16:09:52.000Z",l:"2020年7月31日",g:["行为主义学习理论"],e:`<h1> 学习及其理论发展</h1>
<h2> 学习的界定</h2>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">学习是由于练习或反复经验而引起心理和行为的变化</p>
</blockquote>
<h2> 学习的分类</h2>
<h3> 学习水平分类</h3>
<p>1970年加涅根据学习的简繁程度将学习分为八种水平</p>
<ol>
<li>信号学习。经典性条件作用学习，学习对某种信号作出某种反应，其过程是：刺激—强化—反应</li>
<li>刺激—反应学习。操作性条件作用学习，其过程是：情境—反应—强化</li>
<li>连锁学习。一系列刺激—反应学习</li>
<li>言语联想学习。由言语单位所联结的连锁学习</li>
<li>辨别学习。识别多种刺激的异同并对之作出不同的反应</li>
<li>概念学习。对刺激进行分类时，学会对一类刺激作出同样的反应</li>
<li>规则的学习。了解两个或两个以上概念之间的关系</li>
<li>解决问题的学习。在各种情况下，使用所学规则去解决问题</li>
</ol>`,r:{minutes:2.13,words:639},y:"a",title:"学习及其理论发展",i:"psy"},["/education/edu_psy/3.1","/education/edu_psy/3.1.md"]],["v-48359c44","/education/edu_psy/3.2.html",{d:"2020-07-30T16:09:52.000Z",l:"2020年7月31日",g:["行为主义学习理论"],e:`<h1> 经典性条件作用</h1>
<h2> 巴普洛夫的经典性条件作用</h2>
<p>经典性条件作用一旦形成，机体对与条件刺激相似的刺激作出条件反应，这称为条件作用的<code>泛化</code></p>
<p>只强化条件刺激，而不强化与其相似的其他刺激，就可以导致条件作用的<code>分化</code></p>
<p>中性刺激一旦成为条件刺激，就可以成为无条件刺激，另一个中性刺激与其反复结合，可形成新的条件作用，这一过程称为<code>高级条件作用</code></p>
<p>凡是能够引起条件作用的物理性条件刺激叫做<code>第一信号系统</code>，凡是能够引起条件反应的以语言符号为中介的条件刺激叫做<code>第二信号系统</code></p>`,r:{minutes:1.02,words:307},y:"a",title:"经典性条件作用",i:"psy"},["/education/edu_psy/3.2","/education/edu_psy/3.2.md"]],["v-49ea74e3","/education/edu_psy/3.3.html",{d:"2020-07-30T16:09:52.000Z",l:"2020年7月31日",g:["行为主义学习理论"],e:`<h1> 操作性条件作用</h1>
<h2> 桑代克的联结主义</h2>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">学习的实质在于形成刺激—反应联结，这种联结是通过尝试与错误的过程而自动形成的，不需要以观念为中介</p>
</blockquote>
<p>桑代克超越巴普洛夫之处在于，他指出在某个行为之后出现的刺激影响了未来的行为。学习的效果律表明，在刺激与反应之间形成可改变的联结，给以满意度的后果，联结就增强</p>
<h2> 斯金纳的操作性条件作用</h2>`,r:{minutes:2.53,words:758},y:"a",title:"操作性条件作用",i:"psy"},["/education/edu_psy/3.3","/education/edu_psy/3.3.md"]],["v-4b9f4d82","/education/edu_psy/3.4.html",{d:"2020-07-30T16:09:52.000Z",l:"2020年7月31日",g:["行为主义学习理论"],e:`<h1> 社会学习理论</h1>
<h2> 社会认知理论</h2>
<h3> 交互决定论</h3>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">个人、环境和行为是相互影响、彼此联系的。三者影响力的大小取决于当时的环境和行为的性质</p>
</blockquote>
<h3> 学习和表现</h3>
<p><code>习得行为的表现</code>指情境适当或者有引起行为的刺激条件下，学习者从观察中习得行为并表现出来</p>
<h3> 参与性学习和替代性学习</h3>`,r:{minutes:1.18,words:353},y:"a",title:"社会学习理论",i:"psy"},["/education/edu_psy/3.4","/education/edu_psy/3.4.md"]],["v-a33c1ef8","/education/edu_psy/4.1.html",{d:"2020-07-30T16:09:52.000Z",l:"2020年7月31日",g:["认知学习理论"],e:`<h1> 学习的信息加工过程</h1>
<h2> 学习和记忆的信息加工模型</h2>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">工作记忆是指个体在执行认知任务中暂时储存与信息加工信息的容量有限的系统</p>
</blockquote>
<p>把零散的信息组织成更大的有意义的单元的过程称为<code>组块</code></p>
<h2> 学习的基本阶段</h2>
<h2> 促进知识的保持</h2>
<ul>
<li>
<p>加工深度</p>
</li>
<li>
<p>多元表征</p>
</li>
<li>
<p>应用情境和学习情境的一致性</p>
</li>
</ul>`,r:{minutes:.47,words:140},y:"a",title:"学习的信息加工过程",i:"psy"},["/education/edu_psy/4.1","/education/edu_psy/4.1.md"]],["v-9fd26dba","/education/edu_psy/4.2.html",{d:"2020-07-30T16:09:52.000Z",l:"2020年7月31日",g:["认知学习理论"],e:`<h1> 知识的组织结构</h1>
<h2> 认知结构</h2>
<p>人在认知活动中需要把感知到的信息组织成有机的整体，在头脑中构造和组织一种格式塔</p>
<h3> 布鲁纳的认知结构思想</h3>
<blockquote>
<p>认知结构是人关于现实世界的内在编码系统，是一系列相互关联、非具体性的条目</p>
</blockquote>
<h3> 认知结构与有意义学习</h3>
<p><code>有意义学习</code>是指在学习过程中，符号代表的新知识能够与学习者认知结构中已有的适当观念建立实质性的、非人为的联系。当新知识与原有认知结构合理地联系起来，有意义学习便发生了</p>
<p>奥苏贝尔认为，由于知识的概况水平不同，认知结构是有一定层次性的，他提出了三种同化模式</p>`,r:{minutes:1.8,words:541},y:"a",title:"知识的组织结构",i:"psy"},["/education/edu_psy/4.2","/education/edu_psy/4.2.md"]],["v-16431d63","/education/edu_psy/5.1.html",{d:"2020-07-30T16:09:52.000Z",l:"2020年7月31日",g:["建构主义学习理论"],e:`<h1> 建构主义概述</h1>
<h2> 建构主义在学习理论中的地位</h2>
<p>行为主义学习理论是以客观主义的哲学传统为基础的，即把知识和意义看作是存在于个体之外的东西，是完全由客观事物本身决定的</p>
<p>建构主义则强调意义不是独立于我们而存在的，个体的知识是由人建构起来的，对事物的理解不是简单由事物本身决定的，人以原先的知识经验为基础来建构自己对现实世界的解释和理解</p>
<h2> 建构主义的基本观点</h2>
<h3> 知识观</h3>
<ol>
<li>知识不是对现实的准确表征，它只是一种解释、一种假设，不是最终答案</li>
<li>知识并不能精确地概括世界的法则，需要针对具体情境进行再创造</li>
<li>我们通过语言符号赋予知识一定的外在形式，但不意味着学生对这些命题有着同样的理解</li>
</ol>`,r:{minutes:1.74,words:521},y:"a",title:"建构主义概述",i:"psy"},["/education/edu_psy/5.1","/education/edu_psy/5.1.md"]],["v-17f7f602","/education/edu_psy/5.2.html",{d:"2020-07-30T16:09:52.000Z",l:"2020年7月31日",g:["建构主义学习理论"],e:`<h1> 学习的认知建构过程</h1>
<h2> 生成性学习</h2>
<h3> 理解的生成过程</h3>
<p>学习是学习者生成信息的意义的过程，意义的形成是通过原有认知结构与环境中接受到的感觉信息的相互作用而实现的</p>
<h3> 意义建构的有效条件</h3>
<ul>
<li>学习材料本身的可理解性</li>
<li>学习者的先前知识水平</li>
<li>学习者的建构性加工活动，学习者应当联系自己的知识经验明确澄清</li>
</ul>
<h3> 促进意义生成的策略</h3>
<h2> 认知灵活性理论与知识的深化</h2>
<h2> 探究性学习</h2>
<h2> 以问题为中心的学习</h2>`,r:{minutes:.66,words:198},y:"a",title:"学习的认知建构过程",i:"psy"},["/education/edu_psy/5.2","/education/edu_psy/5.2.md"]],["v-19accea1","/education/edu_psy/5.3.html",{d:"2020-07-30T00:00:00.000Z",l:"2020年7月30日",g:["建构主义学习理论"],e:`<h1> 学习的社会建构过程</h1>
<h2> 活动参与与文化的内化</h2>
<h3> 内化理论</h3>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">内化是把存在于社会中的文化变成自己的一部分</p>
</blockquote>
<h3> 活动理论</h3>
<p>活动是指主体与客观对象进行相互作用的过程，是一种感性实践过程</p>
<h3> 支架性教学</h3>
<blockquote>
<p>教师或其他助学者通过与学习者共同完成蕴含了某种文化的活动，为学习者参与该活动提供外部支持，帮助他们完成独自无法完成的任务</p>
</blockquote>`,r:{minutes:.9,words:270},y:"a",title:"学习的社会建构过程",i:"psy"},["/education/edu_psy/5.3","/education/edu_psy/5.3.md"]],["v-7e244a42","/education/edu_psy/6.1.html",{d:"2020-07-30T16:09:52.000Z",l:"2020年7月31日",g:["人本主义学习理论及应用"],e:`<h1> 人本主义学习理论</h1>
<h2> 康布斯的学习理论</h2>
<p>知觉是个人对其所知觉到的对象产生的一种感受，是感性的</p>
<h2> 马斯洛的学习理论</h2>
<h3> 马斯洛的教育目标论</h3>
<h3> 马斯洛的内在学习论</h3>
<h3> 马斯洛的需要层次理论</h3>
<p>人有七种基本需要：生理需要、安全需要、归属与爱的需要、尊长需要、求知需要、美的需要、自我实现需要</p>
<h2> 罗杰斯的学习理论</h2>
<h3> 教育目标</h3>
<p>教育的目标在于促进学生的发展，使他们成为能够适应变化、知道如何学习的”自由人“，自由是指能够使人敢于涉猎未知的、不确定的领域，自己作出抉择的勇气</p>`,r:{minutes:1.72,words:517},y:"a",title:"人本主义学习理论",i:"psy"},["/education/edu_psy/6.1","/education/edu_psy/6.1.md"]],["v-7fd922e1","/education/edu_psy/6.2.html",{d:"2020-07-30T16:09:52.000Z",l:"2020年7月31日",g:["人本主义学习理论及应用"],e:`<h1> 人本主义教学应用</h1>
<h2> 人本主义课程理论</h2>
<h2> 价值理论</h2>
<p><code>价值澄清</code>鼓励学生检讨并分析自己的行为和信念间的关系，以澄清自己的价值观。其教学侧重个人的自由、自发以及健康全面的成长、尊重他人的价值以及社、文化的价值。教学目的在于协助个人澄清其价值</p>
<h2> 创造性的培养</h2>
<ol>
<li>提供良好的生理条件</li>
<li>充实的学习机会</li>
</ol>
<h2> 经验的学习</h2>
<h2> 人本主义教育示例</h2>
<ul>
<li>开放课堂</li>
<li>格拉塞尔学校</li>
<li>理性—情绪治疗的生活学校</li>
</ul>`,r:{minutes:.62,words:186},y:"a",title:"人本主义教学应用",i:"psy"},["/education/edu_psy/6.2","/education/edu_psy/6.2.md"]],["v-33f511be","/education/edu_psy/7.1.html",{d:"2020-07-30T00:00:00.000Z",l:"2020年7月30日",g:["学习动机"],e:`<h1> 学习动机及其理论</h1>
<h2> 学习动机的含义</h2>
<p><code>动机</code>指激发、引导、维持并使行为指向特定目的的一种力量</p>
<p><code>需要</code>是人体组织系统中的一种缺乏、不平衡的状态</p>
<p><code>学习动机</code>是指引发与维持学生的学习行为，并使之指向一定的学业目标的一种动力倾向</p>
<h2> 学习动机的分类</h2>
<h3> 外部动机与内部动机</h3>
<p><code>内部动机</code>指因学习活动本身的意义和价值所引起的动机</p>
<p><code>外部动机</code>指因学习活动的外部后果而引起的动机</p>`,r:{minutes:1.1,words:329},y:"a",title:"学习动机及其理论",i:"psy"},["/education/edu_psy/7.1","/education/edu_psy/7.1.md"]],["v-308b6080","/education/edu_psy/7.2.html",{d:"2020-07-30T00:00:00.000Z",l:"2020年7月30日",g:["学习动机"],e:`<h1> 学习动机的个体因素</h1>
<h2> 需要</h2>
<h3> 成就需要和成就动机理论</h3>
<blockquote>
<p><mark>成就动机</mark>是激励个体乐于从事自己认为重要的或有价值的工作，并力求取得成功的内在驱动力。它可以分为两部分，其一是追求成功的意向；其二是避免失败的意向</p>
</blockquote>
<h3> 关系需要</h3>
<h3> 自主需要与自我决定理论</h3>
<p>自主需要指个体希望具有控制事情发生、发展及其结果的能力</p>
<p><code>自我决定理论</code>认为人是积极的有机体，具有先天的心理成长和发展的潜能。自我决定是一种关于经验选择的潜能，是在充分认识个体需要和环境信息的基础上，个体对行动所作出的自由的选择。</p>`,r:{minutes:2.09,words:627},y:"a",title:"学习动机的个体因素",i:"psy"},["/education/edu_psy/7.2","/education/edu_psy/7.2.md"]],["v-2d21af42","/education/edu_psy/7.3.html",{d:"2020-07-30T00:00:00.000Z",l:"2020年7月30日",g:["学习动机"],e:`<h1> 学习动机的情境因素</h1>
<h2> 学习任务</h2>
<ul>
<li>任务性质</li>
<li>任务难度</li>
<li>任务价值</li>
</ul>
<h2> 评定与反馈</h2>
<p>评定</p>
<p>反馈</p>
<p>奖励与惩罚</p>
<h2> 家庭、教师及同伴</h2>
<h3> 家庭期望</h3>
<h3> 教师期望</h3>
<blockquote>
<p>教师的期望会传递给被期望的学生并产生鼓励效应，使其朝着教师期望的方向变化</p>
</blockquote>
<h3> 同伴竞争</h3>
<ul>
<li>竞赛的积极作用</li>
<li>竞赛的消极作用</li>
</ul>`,r:{minutes:.54,words:163},y:"a",title:"学习动机的情境因素",i:"psy"},["/education/edu_psy/7.3","/education/edu_psy/7.3.md"]],["v-4de6a400","/education/edu_psy/8.1.html",{d:"2020-07-30T00:00:00.000Z",l:"2020年7月30日",g:["知识建构"],e:`<h1> 知识概述</h1>
<h2> 知识与知识观</h2>
<p>知识是人对事物属性与联系的能动的反映，是通过人与客观事物的相互作用而形成的</p>
<p>知识观具体指怎样理解知识、对知识抱有怎样的态度。</p>
<h2> 知识分类</h2>
<h3> 陈述性知识、程序性知识和条件性知识</h3>
<table>
<thead>
<tr>
<th>类型</th>
<th>理解</th>
</tr>
</thead>
<tbody>
<tr>
<td>陈述性</td>
<td>是什么</td>
</tr>
<tr>
<td>程序性</td>
<td>如何做</td>
</tr>
<tr>
<td>条件性</td>
<td>什么时候，为什么</td>
</tr>
</tbody>
</table>`,r:{minutes:.83,words:248},y:"a",title:"知识概述",i:"psy"},["/education/edu_psy/8.1","/education/edu_psy/8.1.md"]],["v-4f9b7c9f","/education/edu_psy/8.2.html",{d:"2020-07-30T00:00:00.000Z",l:"2020年7月30日",g:["知识建构"],e:`<h1> 知识的学习</h1>
<h2> 陈述性知识的学习</h2>
<h3> 概念及其分类</h3>
<h4> 概念的界定</h4>
<blockquote>
<p>概念代表着事物的基本属性和基本特征，是一种简单的表征形式</p>
</blockquote>
<h4> 概念的特征</h4>
<p>特征表说<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><a class="footnote-anchor" id="footnote-ref1">
</a>`,r:{minutes:.94,words:283},y:"a",title:"知识的学习",i:"psy"},["/education/edu_psy/8.2","/education/edu_psy/8.2.md"]],["v-5150553e","/education/edu_psy/8.3.html",{d:"2020-07-30T00:00:00.000Z",l:"2020年7月30日",g:["知识建构"],e:`<h1> 知识迁移</h1>
<h2> 迁移及其分类</h2>
<h3> 不同领域的迁移</h3>
<h3> 顺向迁移和逆向迁移</h3>
<h3> 正迁移和负迁移</h3>
<h3> 特殊迁移和非特殊迁移</h3>
<blockquote>
<p>特殊迁移是某一领域或课题的学习直接对学习另一领域或课题所产生的影响</p>
</blockquote>
<h3> 近迁移和远迁移</h3>
<h3> 低通路迁移和高通路迁移</h3>
<h2> 迁移的理论与研究</h2>
<h3> 迁移的经典理论</h3>
<h4> 形式训练说</h4>
<h4> 相同要素说</h4>
<p>相同要素说认为，一种学习之所以能够对另一种学习产生影响，是因为两者有相同的元素</p>`,r:{minutes:1.06,words:318},y:"a",title:"知识迁移",i:"psy"},["/education/edu_psy/8.3","/education/edu_psy/8.3.md"]],["v-94705e42","/education/edu_psy/9.1.html",{d:"2020-07-30T00:00:00.000Z",l:"2020年7月30日",g:["问题解决与创造性"],e:`<h1> 问题与问题解决</h1>
<h2> 问题及其分类</h2>
<h3> 问题的界定</h3>
<p>问题是指这样一种情境：个体想做某件事，但不能马上知道直接完成的事时，就有了问题</p>
<h3> 问题的分类</h3>
<p><code>结构良好问题</code>是那些明确的初始状态、目标状态以及解决方法的问题</p>
<p><code>结构不良问题</code>是那些没有明确的初始状态、目标状态或解决方法的问题</p>
<h2> 问题解决的界定</h2>
<h2> 问题解决的理论</h2>
<h3> 试误说</h3>
<p>问题解决是由刺激情境与适当反应之间形成的联结构成的，这种联结是通过尝试错误逐渐形成的</p>`,r:{minutes:.79,words:237},y:"a",title:"问题与问题解决",i:"psy"},["/education/edu_psy/9.1","/education/edu_psy/9.1.md"]],["v-9106ad04","/education/edu_psy/9.2.html",{d:"2020-07-30T00:00:00.000Z",l:"2020年7月30日",g:["问题解决与创造性"],e:`<h1> 问题解决过程</h1>
<h2> 理解和表征问题阶段</h2>
<ol>
<li>识别相关信息</li>
<li>语义理解</li>
<li>整体表征</li>
<li>问题归类</li>
</ol>
<h2> 寻求解答阶段</h2>
<ul>
<li>手段—目的分析</li>
<li>爬山法</li>
<li>逆向反推法</li>
<li>类比思维</li>
</ul>
<h2> 执行计划或尝试某种解答阶段</h2>
<h2> 评价结果阶段</h2>
`,r:{minutes:.32,words:97},y:"a",title:"问题解决过程",i:"psy"},["/education/edu_psy/9.2","/education/edu_psy/9.2.md"]],["v-8d9cfbc6","/education/edu_psy/9.3.html",{d:"2020-07-30T00:00:00.000Z",l:"2020年7月30日",g:["问题解决与创造性"],e:`<h1> 问题解决能力的培养</h1>
<h2> 专家与新手</h2>
<h3> 专家与新手的差异</h3>
<p>条件产生式，关于在什么情境下采取什么行动的知识，能轻巧地操作陈述性知识去解决问题</p>
<h3> 新手的误区</h3>
<h3> 专家的优势与隐患</h3>
<h2> 一般性问题解决能力的训练</h2>
<ol>
<li>创作式思维教程</li>
<li>问题解决模式</li>
<li>CoRT教程</li>
<li>思维工具强化教程</li>
</ol>
<h2> 实际教学中问题解决能力的培养</h2>
<ol>
<li>创造适当气氛，鼓励主动质疑</li>
<li>提供难度适当的问题</li>
<li>帮助学生正确表征问题</li>
<li>帮助学生养成分析问题的习惯</li>
<li>帮助学生从记忆中提取信息</li>
<li>训练学生陈述自己的假设及其步骤</li>
<li>提供结构不良问题，培养解决实际问题的能力</li>
<li>训练学生对问题解决过程进行监控和调节</li>
</ol>`,r:{minutes:.87,words:260},y:"a",title:"问题解决能力的培养",i:"psy"},["/education/edu_psy/9.3","/education/edu_psy/9.3.md"]],["v-8a334a88","/education/edu_psy/9.4.html",{d:"2020-07-30T00:00:00.000Z",l:"2020年7月30日",g:["问题解决与创造性"],e:`<h1> 创造性</h1>
<h2> 创造性的含义</h2>
<h2> 创造性思维的特征</h2>
<ul>
<li>流畅性</li>
<li>灵活性</li>
<li>独创性</li>
</ul>
<h2> 创造性思维的训练</h2>
<ol>
<li>脑激励法</li>
<li>分合法</li>
<li>自由联想技术</li>
</ol>
`,r:{minutes:.22,words:67},y:"a",title:"创造性",i:"psy"},["/education/edu_psy/9.4","/education/edu_psy/9.4.md"]],["v-f1b828a2","/education/edu_psy/intro.html",{d:"2020-06-30T00:00:00.000Z",l:"2020年6月30日",e:`<h1> 走进教育心理学</h1>
<h2> 教育心理学的对象、性质和作用</h2>
<h3> 教育心理学的研究对象</h3>
<blockquote>
<p>教育心理学是研究学与教的基本心里规律的科学。它是应用心理学的一种，是教育学与心理学的交叉学科</p>
</blockquote>
<h3> 教学系统</h3>
<h4> 教学过程的基本要素</h4>
<ul>
<li>学生</li>
<li>教师</li>
<li>教学内容</li>
<li>教学媒体</li>
<li>教学环境</li>
</ul>
<h4> 教学过程的三个侧面</h4>
<ul>
<li>学习过程</li>
<li>教学过程</li>
<li>评价/反思过程</li>
</ul>`,r:{minutes:1.62,words:487},y:"a",title:"走进教育心理学",i:"psy"},["/education/edu_psy/intro","/education/edu_psy/intro.md"]],["v-71b4ee23","/education/foreign/1.html",{d:"2020-05-30T00:00:00.000Z",l:"2020年5月30日",e:`<h1> 古希腊教育</h1>
<h2> 1. 古风时代的教育</h2>
<h3> （1）斯巴达教育与雅典教育</h3>
<table>
<thead>
<tr>
<th></th>
<th>斯巴达教育</th>
<th>雅典教育</th>
</tr>
</thead>
<tbody>
<tr>
<td>政府态度</td>
<td>集权领导，免费接受教育</td>
<td>放任态度，家长自行选择</td>
</tr>
<tr>
<td>培养目标</td>
<td>勇敢善战士兵</td>
<td>身强力壮、品德优良、多才善辩和谐发展的人</td>
</tr>
<tr>
<td>教育机构</td>
<td>教练所，青年士官团(埃弗比)</td>
<td>音乐学校，体操学校，修辞学校</td>
</tr>
<tr>
<td>女子教育</td>
<td>重视女子教育</td>
<td>轻视女子教育</td>
</tr>
<tr>
<td>教学方法</td>
<td>服从师训，刻苦训练</td>
<td>启发诱导</td>
</tr>
</tbody>
</table>`,r:{minutes:1.08,words:323},y:"a",title:"古希腊教育",i:"foreign"},["/education/foreign/1","/education/foreign/1.md"]],["v-7369c6c2","/education/foreign/2.html",{d:"2020-05-30T00:00:00.000Z",l:"2020年5月30日",e:`<h1> 罗马教育</h1>
<h2> 1. 共和时期的罗马教育</h2>
<h3> （1）共和早期教育</h3>
<p>家庭教育：敬畏神明、《十二铜表法》记诵</p>
<p>农夫(军人)式教育：骑马、角力、游泳</p>
<h3> （2）共和后期教育</h3>
<p>初等教育(小学)：读写算、道德格言、《十二铜表法》、音乐、体育</p>
<p>中等教育(文法学校)：《荷马史诗》、西塞罗著作、地理、历史、数学</p>
<p>高等教育(修辞学校、雄辩士学校)文学、修辞学，辩证法，历史、法律、天文学、几何、伦理学、音乐</p>
<h2> 2. 帝国时期的罗马教育</h2>
<p>教育目的由培养演说家向培养帝国的顺民和官吏转变，提高教师地位和待遇，部分私立学校改为国立。</p>`,r:{minutes:3.03,words:908},y:"a",title:"罗马教育",i:"foreign"},["/education/foreign/2","/education/foreign/2.md"]],["v-751e9f61","/education/foreign/3.html",{d:"2020-05-30T00:00:00.000Z",l:"2020年5月30日",e:`<h1> 西欧中世纪教育</h1>
<h2> 1. 基督教教育</h2>
<table>
<tbody>
    <tr>
        <td>教育形式：</td>
        <td>修道(只有克制乃至消灭肉体欲望，才能获得精神上的拯救和神圣)</td>
    </tr>
    <tr>
        <td rowspan="3">教育机构与教学内容：</td>
        <td>修道院：读书写字、七艺；</td>
    </tr>
    <tr>
        <td>主教学校：宗教知识为主；</td>
    </tr>
    <tr>
        <td>堂区学校(面向世俗)：宗教知识为主，世俗知识少量。</td>
    </tr>
    <tr>
        <td>教学方法：</td>
        <td>教师口授与学生背诵抄写相结合，个别教学、灌输</td>
    </tr>
</tbody>
</table>`,r:{minutes:2.17,words:651},y:"a",title:"西欧中世纪教育",i:"foreign"},["/education/foreign/3","/education/foreign/3.md"]],["v-76d37800","/education/foreign/4.html",{d:"2020-05-30T00:00:00.000Z",l:"2020年5月30日",e:`<h1> 拜占廷与阿拉伯的教育</h1>
<h2> 1. 拜占廷的教育</h2>
<h3> （1）教育概况</h3>
<h4> ①世俗教育</h4>
<p>初等教育(私立初等学校)：正字法、文法初步、算术</p>
<p>中等教育(文法学校)：文法和古典作品</p>
<p>高等教育(专业学校)：医学、哲学、法律、修辞</p>
<h4> ②教会教育</h4>
<p>修道院/隐修院 远离城市 读经、行善，祈祷</p>
<p>座堂学校 主教教堂 神学</p>
<h3> （2）教育特点</h3>
<p>直接继承古希腊和古罗马文化教育遗产；</p>
<p>存在因世俗生活需要而得到发展的世俗教育体系；</p>`,r:{minutes:1.68,words:504},y:"a",title:"拜占廷与阿拉伯的教育",i:"foreign"},["/education/foreign/4","/education/foreign/4.md"]],["v-7888509f","/education/foreign/5.html",{d:"2020-05-30T00:00:00.000Z",l:"2020年5月30日",e:`<h1> 文艺复兴与宗教改革时期的教育</h1>
<h2> 1.人文主义教育</h2>
<figure><img src="http://file.passwordgloo.xyz/foreign/foreign-89.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3> （1）意大利人文主义教育</h3>
<h4> 费吉里奥</h4>
<ul>
<li>
<p>人文主义教育目的是培养身心全面发展的人(通才教育)</p>
</li>
<li>
<p>教学内容适合学生个人爱好和年龄特征</p>
</li>
<li>
<p>重视体育锻炼</p>
</li>
<li>
<p>文学是学习其他学科的基础</p>
</li>
<li>
<p>自由教育与职业教育对立，职业教育不是以培养绅士</p>
</li>
</ul>`,r:{minutes:4.39,words:1316},y:"a",title:"文艺复兴与宗教改革时期的教育",i:"foreign"},["/education/foreign/5","/education/foreign/5.md"]],["v-7a3d293e","/education/foreign/6.html",{d:"2022-12-30T00:00:00.000Z",l:"2022年12月30日",e:`<h1> 欧美主要国家和日本的近代教育</h1>
<h2> 1.英国近现代教育</h2>
<h3> 17-18世纪英国的学校教育</h3>
<figure><img src="http://file.passwordgloo.xyz/foreign/foreign-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3> 19世纪-20世纪初的学校教育</h3>
<figure><img src="http://file.passwordgloo.xyz/foreign/foreign-14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:1.36,words:407},y:"a",title:"欧美主要国家和日本的近代教育",i:"foreign"},["/education/foreign/6","/education/foreign/6.md"]],["v-7bf201dd","/education/foreign/7.html",{d:"2022-12-30T00:00:00.000Z",l:"2022年12月30日",e:`<h1> 三星级教育学家</h1>
<h2> 英国教育学家</h2>
<figure><img src="http://file.passwordgloo.xyz/foreign/foreign-40.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="http://file.passwordgloo.xyz/foreign/foreign-41.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:.3,words:89},y:"a",title:"三星级教育学家",i:"foreign"},["/education/foreign/7","/education/foreign/7.md"]],["v-7da6da7c","/education/foreign/8.html",{d:"2022-12-30T00:00:00.000Z",l:"2022年12月30日",e:`<h1> 五星级教育学家</h1>
<h2> 夸美纽斯</h2>
<figure><img src="http://file.passwordgloo.xyz/foreign/foreign-51.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="http://file.passwordgloo.xyz/foreign/foreign-52.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:.52,words:155},y:"a",title:"五星级教育学家",i:"foreign"},["/education/foreign/8","/education/foreign/8.md"]],["v-7f5bb31b","/education/foreign/9.html",{d:"2022-12-30T00:00:00.000Z",l:"2022年12月30日",e:`<h2> 19世纪教育思潮</h2>
<figure><img src="http://file.passwordgloo.xyz/foreign/foreign-75.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="http://file.passwordgloo.xyz/foreign/foreign-76.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:.53,words:159},y:"a",title:"",i:"foreign"},["/education/foreign/9","/education/foreign/9.md"]],["v-eccb6170","/education/foreign/intro.html",{d:"2020-05-30T00:00:00.000Z",l:"2020年5月30日",e:`<h1> 东方文明古国的教育</h1>
<figure><img src="http://file.passwordgloo.xyz/foreign/foreign-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
`,r:{minutes:.07,words:22},y:"a",title:"东方文明古国的教育",i:"foreign"},["/education/foreign/intro","/education/foreign/intro.md"]],["v-4cb3207b","/education/principle/1.html",{d:"2020-06-10T00:00:00.000Z",l:"2020年6月10日",e:`<h1> 教育及其产生与发展</h1>
<h2> （一） 教育的概念</h2>
<h3> 1. 教育定义的类型</h3>
<blockquote>
<p>美国教育家谢弗勒根据教育定义陈述方式的不同，将教育定义划分为描述性定义、规定性定义和纲领性定义。</p>
</blockquote>
<p><code>描述性定义</code>：适当描述一定情境中被定义对象的某些关键特征或指出使用被定义对象概念的方法(实然)</p>
<p><code>规定性定义</code>：作者自己所创制的定义，并在自己的教育论述中始终遵守</p>
<p><code>纲领性定义</code>：既指出被定义对象是什么，又明确指出或隐含地表面被定义对象应是什么</p>`,r:{minutes:6.87,words:2062},y:"a",title:"教育及其产生与发展",i:"education"},["/education/principle/1","/education/principle/1.md"]],["v-49e3f347","/education/principle/10.html",{d:"2020-06-10T00:00:00.000Z",l:"2020年6月10日",e:`<h1> 班主任工作与班级</h1>
<h2> （一） 班级</h2>
<h3> 1. 班级的概念</h3>
<p>班级是由教师和学生共同组成的，是学校进行教育和教学活动的基本单位</p>
<h3> 2. 班级的作用</h3>
<p>（1）促进学生相互学习和共同成长</p>
<p>（2）利于学生社会化与个性化发展</p>
<p>（3）利于学生提升自我教育与自我管理能力</p>
<h2> （二） 班集体</h2>
<h3> 1. 概念</h3>
<p>班集体是按照班级授课制培养目标和教育规范组织起来的，由具有明确的奋斗目标，坚强领导核心及良好纪律和舆论的班级学生所组成的活动共同体</p>
<h3> 2. 班集体的发展阶段</h3>`,r:{minutes:1.55,words:464},y:"a",title:"班主任工作与班级",i:"education"},["/education/principle/10","/education/principle/10.md"]],["v-4e67f91a","/education/principle/2.html",{d:"2020-06-10T00:00:00.000Z",l:"2020年6月10日",e:`<h1> 教育与社会发展</h1>
<h2> （一） 教育与社会关系的主要理论</h2>
<h3> 1. 教育独立论</h3>
<table>
<thead>
<tr>
<th>提出者：</th>
<th>蔡元培</th>
</tr>
</thead>
<tbody>
<tr>
<td>基本要求：</td>
<td>教育经费独立，专款专用；</td>
</tr>
<tr>
<td></td>
<td>教育行政独立，由懂教育专业人士主持，设立大学区制；</td>
</tr>
<tr>
<td></td>
<td>教育学术与内容独立，教育方针保持稳定；</td>
</tr>
<tr>
<td></td>
<td>教育脱离宗教而独立</td>
</tr>
<tr>
<td>评价：</td>
<td>教育活动必须接受社会物质支持并传播一定政治和社会价值体系，它因此附身和反作用于一定政治和社会力量，不可能独立，但可以相对独立</td>
</tr>
</tbody>
</table>`,r:{minutes:5.82,words:1745},y:"a",title:"教育与社会发展",i:"education"},["/education/principle/2","/education/principle/2.md"]],["v-501cd1b9","/education/principle/3.html",{d:"2020-06-10T00:00:00.000Z",l:"2020年6月10日",e:`<h1> 教育与人的发展</h1>
<h2> （一） 人的身心发展特点及其对教育的制约</h2>
<h3> 1. 人的身心发展的主要特点</h3>
<p>特点：未完成状态与未成熟状态，<code>可塑性</code>与<code>能动性</code>。</p>
<p>规律：发展的顺序性、阶段性、<code>差异性</code><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup><a class="footnote-anchor" id="footnote-ref1">、<code>不平衡性</code><sup class="footnote-ref"></sup></a><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2">与整体性</a></p>`,r:{minutes:2.84,words:853},y:"a",title:"教育与人的发展",i:"education"},["/education/principle/3","/education/principle/3.md"]],["v-51d1aa58","/education/principle/4.html",{d:"2020-06-10T00:00:00.000Z",l:"2020年6月10日",e:`<h1> 教育目的与培养目标</h1>
<h2> （一） 教育目的</h2>
<h3> 1.教育目的概念</h3>
<p>广义：存在于广大人民群众中头脑中对受教育者期望要求</p>
<p>狭义：各级各类学校在国家对受教育者培养的总的要求指导下，对人才培养的质量和规格上的具体要求。</p>
<h3> 2. 教育目的与教育方针</h3>
<p>教育方针是国家根据政治经济要求为实现教育目的所规定的教育工作的总方向，它包括教育目的、教育工作的服务方向，实施教育目的的途径。</p>
<p>教育目的包含=<code>为谁培养人+培养什么样的人</code>？</p>
<p>教育方针包含=为谁培养人+培养什么样的人+怎样培养人？</p>`,r:{minutes:4.44,words:1333},y:"a",title:"教育目的与培养目标",i:"education"},["/education/principle/4","/education/principle/4.md"]],["v-538682f7","/education/principle/5.html",{d:"2020-06-10T00:00:00.000Z",l:"2020年6月10日",e:`<h1> 教育制度</h1>
<h2> （一） 概念</h2>
<p>教育制度是指一个国家各级各类实施教育的机构体系及其组织运行的规则，它包含相互联系的两个基本方面，一是各级各类教育机构与组织，二是教育机构与组织赖以存在和运行的规则，如教育法律法规，条例。</p>
<h2> （二） 学校教育制度</h2>
<h3> 1. 学制的概念与要素</h3>
<p>学校教育制度简称学制，指的是一个国家各级各类学校的系统及其管理规则，它规定着各级各类学校的性质、任务、入学条件、教育年限以及学校之间的衔接与分工关系。</p>
<h3> 2. 学制确立的依据</h3>
<ul>
<li>
<p>生产力发展水平和科学技术发展状况</p>
</li>
<li>
<p>社会政治经济制度，</p>
</li>
<li>
<p>青少年儿童身心发展规律</p>
</li>
<li>
<p>本国学制历史发展和外国学制的影响，</p>
</li>
</ul>`,r:{minutes:4.07,words:1221},y:"a",title:"教育制度",i:"education"},["/education/principle/5","/education/principle/5.md"]],["v-553b5b96","/education/principle/6.html",{d:"2020-06-10T00:00:00.000Z",l:"2020年6月10日",e:`<h1> 课程</h1>
<h2> （一） 课程与课程理论</h2>
<h3> 1. 课程的概念</h3>
<p>课程是指教学的全部内容及其进程的安排。包括学校教学活动以及影响学生发展<code>潜在的教育影响</code>；不仅包括教学内容的规范，还包括<code>教学进程的规范</code></p>
<p>广义的课程指所有学科(教学科目)的总和，如小学课程、初中课程、高中课程。</p>
<p>狭义的课程指一门学科。如数学语文</p>
<p>(传统教育派)课程的逻辑组织是指根据学科本身的体系和知识的内在联系来组织课程内容</p>
<p>(现代教育派)课程的心理组织是指按照学生心理发展的特点来组织课程内容。</p>`,r:{minutes:17.65,words:5294},y:"a",title:"课程",i:"education"},["/education/principle/6","/education/principle/6.md"]],["v-56f03435","/education/principle/7.html",{d:"2020-06-10T00:00:00.000Z",l:"2020年6月10日",e:`<h1> 教学</h1>
<h2> （一） 教学概述</h2>
<h3> 1. 教学的概念</h3>
<blockquote>
<p>教学是在一定教育目的与特定环境下，基于预成课程框架，在教师有计划的引导下，学生能动地学习、掌握系统的课程预设的科学文化基础知识，发展自身的智力与体力，养成良好的品行与美感，逐步形成全面发展的个体素质的活动。</p>
</blockquote>
<h3> 2. 相关概念区别</h3>
<p><code>教学与教育</code>，是部分与整体的关系。教学只是学校教育的一个基本途径</p>
<p>教育与智育，是交叉关系。教学是德育、智育、体育、美育<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup><a class="footnote-anchor" id="footnote-ref1">的基本途径，智育只是教学的一个主要内容；智育也要通过课外活动才能全部实现</a></p>`,r:{minutes:25.71,words:7712},y:"a",title:"教学",i:"education"},["/education/principle/7","/education/principle/7.md"]],["v-58a50cd4","/education/principle/8.html",{d:"2020-06-10T00:00:00.000Z",l:"2020年6月10日",e:`<h1> 德育</h1>
<h2> （一） 德育概述</h2>
<h3> 1. 德育</h3>
<p>是教育者按照一定的社会或阶级的要求，有目的、有计划、系统地对受教育者积极的认识、体验与身体力行，以形成他们的品德和自我修养能力的教育活动。</p>
<h3> 2. 德育任务</h3>
<p>德育要求学生追求善与明鉴是非，培养学生的道德信念和人生观，形成学生道德习惯</p>
<h3> 3. 德育特性</h3>
<p>德育内容丰富性、德育方法多样化、</p>
<p>德育过程协同化、德育效果综合性、</p>
<p>德育途径多样性</p>
<h3> 4. 德育的实施方式</h3>
<p>直接的德育途径：直接的德育课程；间接的德育途径：其他学科课程中的德育任务，主张德育渗透于一切课程和教学之中（参见<a href="#%E6%95%99%E8%82%B2%E5%BD%B1%E5%93%8D%E4%B8%80%E8%87%B4%E6%80%A7">教育影响一致性</a>）。</p>`,r:{minutes:9.2,words:2760},y:"a",title:"德育",i:"education"},["/education/principle/8","/education/principle/8.md"]],["v-5a59e573","/education/principle/9.html",{d:"2020-06-10T00:00:00.000Z",l:"2020年6月10日",e:`<h1> 教师与学生</h1>
<h2> （一） 教师</h2>
<h3> 1. 教师的概念与类别</h3>
<h4> （1）教师概念</h4>
<p>教师是履行教学职责的专业人员，承担教书育人，培养社会主义事业建设者和接班人，提高民族素质的使命</p>
<h4> （2）教师类别</h4>
<p>班主任：负责班级日常教育教学工作和管理工作的老师；</p>
<p>科任老师：非班主任，承担各科教学任务的老师；</p>
<p>级任老师：承担各个年级的语文、数学等科的教学任务的老师</p>
<h3> 2. 教师职业的产生与发展</h3>
<p>古代原始部落传授生产知识与经验给下一代的长者是最早的兼职教师</p>`,r:{minutes:6.41,words:1923},y:"a",title:"教师与学生",i:"education"},["/education/principle/9","/education/principle/9.md"]],["v-7b0795a0","/education/principle/intro.html",{d:"2020-06-10T00:00:00.000Z",l:"2020年6月10日",e:`<h1> 教育学概述</h1>
<h2> （一）教育学的研究对象</h2>
<blockquote>
<p>教育学的研究对象是教育问题、教育现象</p>
</blockquote>
<h2> （二）教育学的研究任务</h2>
<ol>
<li>
<p>揭示教育规律；</p>
</li>
<li>
<p>探讨教育价值；</p>
</li>
<li>
<p>探讨教育技术。</p>
</li>
</ol>
<h2> （三）教育学的产生与发展</h2>
<h3> 1.教育学的萌芽</h3>
<p>（1）“教育”一词最早见于《孟子·尽心上》；</p>
<p>（2）《论语》一书汇集我国古代教育家孔子关于哲学伦理政治和教育方面言论；</p>`,r:{minutes:5.45,words:1635},y:"a",title:"教育学概述",i:"education"},["/education/principle/intro","/education/principle/intro.md"]],["v-38de7212","/en/html/",{d:"2020-06-10T00:00:00.000Z",l:"2020年6月10日",e:`<h1> Label</h1>
<h2> Title</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>First-level title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Second-level title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Third-level title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>Level 4 title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">&gt;</span></span>Five-level title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">&gt;</span></span>Level 6 title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.02,words:305},y:"a",title:"Label",i:"html"},["/en/html/index.html","/en/html/README.md"]],["v-8a291b10","/politics/history/1.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 鸦片战争前的中国与世界<span alt="blue">非重点</span></h2>
<h3> 鸦片战争前的中国</h3>
<p>经济——封建地主土地所有制经济占主导地位；</p>
<p>政治——实行高度中央集权的封建君主专制制度；</p>
<p>社会结构——族权和政权相结合的封建宗法等级制度，其核心是宗族家长制;</p>
<p>文化思想体系——儒家思想为核心</p>
<h3> 鸦片战争前的世界</h3>
<p>1640年的英国资产阶级革命标志着世界历史开始进入资本主义时代</p>
<p>18世纪中叶至19世纪中叶，从英国开始然后迅速推广到欧美各国的工业革命，使大机器生产取代了工场手工业，资本主义制度终于在欧美确立起来</p>`,r:{minutes:6.93,words:2078},y:"a",title:"1.反抗外国经略的斗争",i:"book"},["/politics/history/1","/politics/history/1.md"]],["v-ba943e2c","/politics/history/10.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 关于真理标准问题的讨论<span alt="purple">选择题</span></h2>
<p>真理标准问题的讨论是继五四运动和延安整风运动之后又一场马克思主义思想解放运动,</p>
<h2> 中共十一届三中全会的伟大转折<span alt="purple">选择题</span></h2>
<p>邓小平作了题为《解放思想，实事求是，团结一致向前看》的重要讲话。这篇讲话，把解放思想、实事求是,
坚持实践标准提到党的思想路线的高度，为冲破“两个凡是”禁锢，克服思想僵化状态，重新确立党的思想路线奠定了基础，因而成为开辟中国特色社会主义新道路、开创中国特色社会主义新理论的宣言书</p>
`,r:{minutes:2.22,words:667},y:"a",title:"10.中国特色社会主义的开创与接续发展",i:"book"},["/politics/history/10","/politics/history/10.md"]],["v-86bf69d2","/politics/history/2.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 太平天国农民战争</h2>
<h3> 太平天国农民战争爆发的原因<span alt="blue">非重点</span></h3>
<p>中国的农业和家庭手工业相结合的自然经济逐渐解体</p>
<p>1851年1月，洪秀全率拜上帝教教众在广西桂平县金田村发动起义，建号太平天国。</p>
<p>太平军所进行的战争，是一次反对清政府腐朽统治和地主阶级压迫、剥削的正义战争</p>
<h3> 《天朝田亩制度》<span alt="purple">选择题</span></h3>
<h4> 内容及性质</h4>
<p>《天朝田亩制度》是最能体现太平天国社会理想和这次农民起义特色的纲领性文件。它确立了平均分配土地的方案，即根据“凡天下田，天下人同耕”的原则，将土地按亩产高低划分为9等，好坏搭配，按人口平均分配。太平天国的领导者们希望建立“有田同耕，有饭同食，有衣同穿，有钱同使，无处不均匀，无人不饱暖”的理想社会</p>`,r:{minutes:6.68,words:2005},y:"a",title:"2.对国家出路的早期探索",i:"book"},["/politics/history/2","/politics/history/2.md"]],["v-8355b894","/politics/history/3.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 辛亥革命爆发的历史条件<span alt="blue">非重点</span></h2>
<p>第一，民族危机加深，社会矛盾激化</p>
<p>第二，清末“新政”的破产</p>
<p>第三，资产阶级革命派的阶级基础和骨干力</p>
<p>资产阶级革命派的骨干是一批资产阶级、小资产阶级知识分子。他们在国外更多地接触到了西方的政治思想，而且对世界大势与国内民族危机有了更敏锐的认识。这些青年知识分子,成为辛亥革命的中坚力量。</p>
<h2> 资产阶级革命派的活动<span alt="blue">非重点</span></h2>
<p>以孙中山为首的资产阶级革命派在踏上革命道路之时，就高举起民主革命的旗帜，并选择了以武装起义推翻清王朝统治的斗争方式。这也是中国资产阶级革命派与改良派的根本不同之处。</p>`,r:{minutes:6.35,words:1906},y:"a",title:"3.辛亥革命与君主专制制度的终结",i:"book"},["/politics/history/3","/politics/history/3.md"]],["v-7fec0756","/politics/history/4.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 新文化运动与思想解放的潮流<span alt="purple">选择题</span></h2>
<h3> 新文化运动的兴起</h3>
<p>新文化运动的主要阵地：《新青年》杂志和北京大学。</p>
<h3> 新文化运动的基本内容</h3>
<p>初期新文化运动的基本内容：提倡民主和科学，反对专制和迷信盲从；提倡个性解放，反对封建礼教；提倡新文学，反对旧文学，实行文学革命。</p>
<p>新文化运动提出的基本口号：民主和科学，即德先生（Democracy）和赛先生（Science）</p>
<figure><img src="http://file.passwordgloo.xyz/politics/politics_42.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:11.75,words:3526},y:"a",title:"4.开天辟地的久事变",i:"book"},["/politics/history/4","/politics/history/4.md"]],["v-7c825618","/politics/history/5.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 国民党在全国统治的建立<span alt="blue">非重点</span></h2>
<p>张学良于1928年12月29日从东北发出通告，宣布“遵守三民主义，服从国民
政府，改易旗帜”北洋军阀不再作为独立的政治力量继续存在，国民党就在全国范围内建立了自己的统治。</p>
<p>蒋介石、汪精卫先后叛变革命，实行清党分共政策后，国民党已经不再是工人、农民、城市小资产阶级和民族资产阶级的革命联盟，而是一个由代表地
主阶级、买办性的大资产阶级利益的反动集团所控制的政党。</p>
<p>国民党政府的统治依然是地主阶级和买办性的大资产阶级的统治，同北洋军阀的统治没有本质的区别。中国仍是一个处在帝国主义和封建主义统治之下的半殖民地半封建社会，中国革命的对象依然是帝国主义和封建主义，中国革命的性质也依然是反帝反封建的资产阶级民主革命</p>`,r:{minutes:10.5,words:3151},y:"a",title:"5.中国革命的新道路",i:"book"},["/politics/history/5","/politics/history/5.md"]],["v-7918a4da","/politics/history/6.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 日本灭亡中国的计划及其实施<span alt="blue">非重点</span></h2>
<p>日本首相田中义一主持召开“东方会议”，制定了《对华政策纲要》，确立了先占东北、内蒙古，进而侵占全中国的扩张政策</p>
<h3> 占东北</h3>
<p>1931年9月180,日本发动九一八事变，武装侵占中国东北</p>
<h3> 图华北</h3>
<p>日方又策动华北五省（河北、察哈尔、绥远、山西、山东）两市（北平、天津）“防共自治运动”，制造傀儡政权。这就是华北事变</p>
<h3> 全面抗战</h3>
<p>1937年7月7日爆发卢沟桥事变，日本全面侵华战争由此开始</p>
<h2> 残暴的殖民统治和中华民族的深重灾难<span alt="blue">非重点</span></h2>`,r:{minutes:15.93,words:4780},y:"a",title:"6.中华民族的抗日战争",i:"book"},["/politics/history/6","/politics/history/6.md"]],["v-75aef39c","/politics/history/7.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 抗战胜利后的国际国内局势<span alt="blue">非重点</span></h2>
<p>战后世界政治形势的一个重大变化，就是原来以维持欧洲大国均势为中心的传统的国际格局被美、苏两极格局所取代。在此基础上，逐步形成分别以美、苏为首的帝国主义和社会主义两个阵营的对立。</p>
<p>控制中国，成为战后美国全球战略的重要组成部分。抗日战争胜利后，美国取代了日本在中国的地位，在中国采取了扶蒋反共的政策</p>
<h2> 中国共产党争取和平民主的斗争<span alt="purple">选择题</span></h2>
<h3> 重庆谈判</h3>
<p>1945年8月，蒋介石连发三电，邀请毛泽东赴重庆谈判。8月25H,中共中央在对时局的宣言中明确提出“和平、民主、团结”的口号</p>`,r:{minutes:8.14,words:2442},y:"a",title:"7.为新中国而奋斗",i:"book"},["/politics/history/7","/politics/history/7.md"]],["v-7245425e","/politics/history/8.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 中华人民共和国的成立及其伟大意义<span alt="orange">论述题</span></h2>
<h3> 中华人民共和国的成立及其伟大意义</h3>
<p>第一，帝国主义列强压迫中国、奴役中国人民的历史从此结束，中华民族一洗近百年来蒙受的屈辱，开始以崭新的姿态自立于世界民族之林。
第二，本国封建主义、官僚资本主义统治的历史从此结束，长期以来受尽压迫和欺凌的广大中国人民在政治上翻了身，第一次成为新社会、新国家的主人。
第三，军阀割据、战乱频仍、匪患不断的历史从此结束，国家基本统一，民族团结，社会政治局面趋向稳定，各族人民开始过上安居乐业的生活。人民可以集中力量从事经济文化等方面建设的时期开始到来了。
第四，从根本上改变了中国社会的发展方向，为实现由新民主主义向社会主义的过渡创造了条件。
第五，中国共产党成为全国范围内的执政党。</p>`,r:{minutes:9.14,words:2742},y:"a",title:"8.社会主义基本制度在中国的确立",i:"book"},["/politics/history/8","/politics/history/8.md"]],["v-6edb9120","/politics/history/9.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 全面建设社会主义的开端<span alt="purple">选择题</span></h2>
<p>社会主义改造基本结束，社会主义经济制度和政治制度已
经建立，马克思主义在意识形态领域占据了主导地位。这标志着我国完成了从新民主主义向社会主义的转变，进入了社会主义的初级阶段，开始了全面建设社会主义的新时期。</p>
<p>当时中国主要面临两大问题：一个是如何处理好社会主义条件下的阶级斗争问题；另一个是如何处理好社会主义建设中的规模和速度问题</p>
<p>毛泽东<em>提出</em>的关于实行马克思主义同中国实际的“第二次结合”的任务，为探索适合中国情况的社会主义建设道路，提供了基本的指导原则。</p>`,r:{minutes:3.31,words:993},y:"a",title:"9.社会主义建设在探索中曲折发展",i:"book"},["/politics/history/9","/politics/history/9.md"]],["v-580d07ac","/politics/law/1.html",{d:"2022-12-31T00:00:00.000Z",l:"2022年12月31日",e:`
<h2> 做有理想有本领有担当的时代新人<span alt="blue">非重点</span></h2>
<p>第一，要有崇高的理想信念，牢记使命，自信自励；</p>
<p>第二，要有高强的本领才干，勤奋学习，全面发展；</p>
<p>第三，要有天下兴亡、匹夫有责的担当精神，讲求奉献，实干进取；</p>
<p>第四，有信念、有梦想、有奋斗、有奉献的人生，才是有意义的人生。</p>
<h2> 思想道徳和法律的关系<span alt="purple">选择题</span></h2>
<p>思想道德和法律都是调节人们思想行为、协调人际关系、维护社会秩序的重要手段。思想道德和法律虽然在调节领域、调节方式、调节目标等方面存在很大不同，但是二者都是上层建筑的重要组成部分，共同服务于一定的经济基础。</p>`,r:{minutes:6.91,words:2074},y:"a",title:"1.人生的青春之问",i:"book"},["/politics/law/1","/politics/law/1.md"]],["v-54a3566e","/politics/law/2.html",{d:"2022-12-31T00:00:00.000Z",l:"2022年12月31日",e:`
<h2> 理想信念<span alt="purple">选择题</span></h2>
<h3> 理想</h3>
<h4> 理想的内涵</h4>
<p>理想是人们在实践中形成的、有实现可能性的、对未来社会和自身发展目标的向往与追求，是人们的世界观、人生观和价值观在奋斗目标上的集中体现。</p>
<h4> 理想的分类</h4>
<p>理想是多方面和多类型的，根据不同的标准，可分为个人理想和社会理想,近期理想和远期理想，生活理想、职业理想、道德理想和政治理想，崇高理想和一般理想等。</p>
<h4> 理想的特征</h4>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 理想具有超越性</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 理想具有实践性</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 理想具有时代性</label></li>
</ul>`,r:{minutes:4.49,words:1346},y:"a",title:"2.人生理想",i:"book"},["/politics/law/2","/politics/law/2.md"]],["v-5139a530","/politics/law/3.html",{d:"2022-12-31T00:00:00.000Z",l:"2022年12月31日",e:`
<h2> 重精神是中华民族的优秀传统<span alt="purple">选择题</span></h2>
<p>第一，表现在对物质生活与精神生活相互关系的独到理解上</p>
<p>第二，表现在中国古人对理想的不懈追求上</p>
<p>第三，表现在对道德修养和道德教化的重视上。</p>
<p>第四，表现为对理想人格的推崇。</p>
<p>第五，中国共产党是中华民族重精神优秀传统的忠实继承者和坚定弘扬者</p>
<h2> 中国精神是民族精神和时代精神的统一<span alt="purple">选择题</span></h2>
<h3> 以爱国主义为核心的民族精神</h3>
<h4> 概念</h4>`,r:{minutes:8.6,words:2581},y:"a",title:"3.中国精神",i:"book"},["/politics/law/3","/politics/law/3.md"]],["v-4dcff3f2","/politics/law/4.html",{d:"2023-01-01T00:00:00.000Z",l:"2023年1月1日",e:`
<h2> 什么是道德<span alt="purple">选择题</span></h2>
<h3> 道德的起源</h3>
<p>劳动是道德起源的首要前提</p>
<p>社会关系是道德赖以产生的客观条件</p>
<p>人的自我意识是道德产生的主观条件</p>
<h3> 道德的本质</h3>
<h4> 道德的产生、发展和变化，根源于社会经济关系。</h4>
<ol>
<li>道德的性质和基本原则、规范反映了与之相应的社会经济关系的性质和内容。有什么样的社会经济关系，相应地就有什么样的道德。</li>
<li>道德随着社会经济关系的变化而变化。</li>
<li>道德作为一种社会意识，在阶级社会里总是反映着一定阶级的利益，因而不可避免地具有阶级性；同时，不同阶级之间的道德或多或少有一些共同之处，反映着道德的普遍性。</li>
<li>作为社会意识的道德一经产生，便有相对独立性。这种相对独立性既表现为道德的历史继承性，也表现为道德对社会发展具有能动的反作用。</li>
</ol>`,r:{minutes:9.39,words:2816},y:"a",title:"4.明大德守公德严私德",i:"book"},["/politics/law/4","/politics/law/4.md"]],["v-7b98493e","/politics/law/5..html",{d:"2023-01-01T00:00:00.000Z",l:"2023年1月1日",e:`
<h2> 社会主义核心价值观的基本内容<span alt="purple">选择题</span></h2>
<h3> 核心价值观</h3>
<blockquote>
<p>核心价值观是一定社会形态社会性质的集中体现，在一个社会的思想观念体系中处于主导地位，体现着社会制度、社会运行的基本原则和社会发展的基本方向。</p>
</blockquote>
<h3> 社会主义核心价值观</h3>
<p>社会主义核心价值观把涉及国家、社会、公民的价值要求融为一体，体现了社会主义本质要求，继承了中华优秀传统文化，吸收了世界文明有益成果，体现了时代精神，是对我们要建设什么样的国家、建设什么样的社会、培育什么样的公民等重大问题的深刻解答。</p>`,r:{minutes:6.02,words:1805},y:"a",title:"5.社会主义核心价值观",i:"book"},["/politics/law/5.","/politics/law/5..md"]],["v-46fc9176","/politics/law/6.html",{d:"2023-01-01T00:00:00.000Z",l:"2023年1月1日",e:`
<h2> 法律的含义<span alt="purple">选择题</span></h2>
<p>法律是由国家创制和实施的行为规范。国家创制法律规范的方式主要有两种：一是国家机关在法定的职权范围内依照法律程序，制定、修改、废止规范性法律文件的活动；二是国家机关赋予某些既存社会规范以法律效力，或者赋予先前的判例以法律效力的活动。</p>
<p>法律由一定的社会物质生活条件所决定</p>
<p>法律是统治阶级意志的体现</p>
<p>法律是由国家制定或认可并以国家强制力保证实施的，反映由特定社会物质生活条件所决定的统治阶级意志的规范体系。</p>
<h2> 我国社会主义法律的本质特征<span alt="purple">选择题</span></h2>`,r:{minutes:11.32,words:3395},y:"a",title:"6.中国特色社会主义法律体系和法制体系",i:"book"},["/politics/law/6","/politics/law/6.md"]],["v-4392e038","/politics/law/7.html",{d:"2023-01-01T00:00:00.000Z",l:"2023年1月1日",e:`
<h2> 坚持中国共产党的领导<span alt="purple">选择题</span></h2>
<h3> 走中国特色社会主义法治道路为什么要坚持党的领导</h3>
<p><s>党的领导是中国特色社会主义最本质的特征</s>*，是社会主义法治最根本的保证。社会主义法治必须坚持党的领导，党的领导必须依靠社会主义法治。法是党的主张和人民意愿的统一体现，党和法、党的领导和依法治国是高度统一的。</p>
<p>坚持党的领导，是社会主义法治的根本要求，是全面依法治国的题中应有之义。只有在党的领导下依法治国、厉行法治，人民当家作主才能充分实现，国家和社会生活法治化才能有序推进。</p>
<h3> 走中国特色社会主义法治道路怎样坚持党的领导</h3>`,r:{minutes:15.15,words:4546},y:"a",title:"7.法治道路与思维",i:"book"},["/politics/law/7","/politics/law/7.md"]],["v-c4d73988","/politics/mzdzt/0.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 马克思主义中国化的内涵<span alt="purple">选择题</span></h2>
<p>马克思主义中国化，<s>就是将马克思主义基本原理同中国具体实际相结合，不断形成具有中国特色的马克思主义理论成果的过程</s>。具体地说，就是把马克思主义基本原理同中国革命、建设和改革的实践结合起来，同中国的优秀传统和优秀文化结合起来，既坚持马克思主义，又发展马克思主义。</p>
<h2> 马克思主义中国化的历史过程<span alt="purple">选择题</span></h2>
<h3> 毛泽东思想</h3>
<p>1938年，毛泽东在党的六届六中全会上作的题为《论新阶段》的政治报告中，最先提出了“马克思主义中国化"的命题</p>`,r:{minutes:2.93,words:880},y:"a",title:"0.马克思主义中国化的三次飞跃",i:"book"},["/politics/mzdzt/0","/politics/mzdzt/0.md"]],["v-c16d884a","/politics/mzdzt/1.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 毛泽东思想形成和发展的历史条件<span alt="purple">选择题</span></h2>
<h5> 时代背景：19世纪末20世纪初，世界进入帝国主义和无产阶级革命时代</h5>
<p>1917年俄国十月革命的胜利，开辟了世界无产阶级社会主义革命的新时代。它使中国反帝反封建的民主革命从旧的世界资产阶级民主革命的一部分，转变为新的世界无产阶级社会主义革命的一部分。</p>
<h5> 实践基础：中国共产党领导人民进行革命和建设的成功实践</h5>
<h2> 毛泽东思想形成发展的过程<span alt="purple">选择题</span></h2>
<figure><img src="http://file.passwordgloo.xyz/politics/politics_48.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:2.46,words:739},y:"a",title:"1.毛泽东思想及其历史地位",i:"book"},["/politics/mzdzt/1","/politics/mzdzt/1.md"]],["v-adce56f8","/politics/mzdzt/10.1.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 坚持习近平经济思想<span alt="blue">非重点</span></h2>
<p>第一，坚持加强党对经济工作的集中统一领导。
第二，坚持以人民为中心的发展思想。
第三，坚持适应把握引领经济发展新常态。
第四，坚持使市场在资源配置中起决定性作用，更好发挥政府作用，推动有效市场和有为政府更好结合
第五，坚持适应我国经济发展主要矛盾变化完善宏观调控
第六，坚持问题导向部署经济发展新战略。
第七，坚持正确工作策略和方法。</p>
<h2> 深化供给侧结构性改革<span alt="purple">选择题</span></h2>
<p>实现经济高质量发展，必须坚持供给侧结构性改革。要坚持质量第一、效益优先，推动经济发展质量变革、效率变革、动力变革，提高全要素生产率。</p>`,r:{minutes:14.08,words:4225},y:"a",title:"10.1“五位一体”总体布局(经济)",i:"book"},["/politics/mzdzt/10.1","/politics/mzdzt/10.1.md"]],["v-aa64a5ba","/politics/mzdzt/10.2.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 坚持中国特色社会主义政治发展道路<span alt="purple">选择题</span></h2>
<h3> 人民当家作主是我们党矢志不渝的奋斗目标</h3>
<p>人民当家作主是社会主义民主政治的本质和核心。</p>
<p>第一，国家一切<em>权力属于人民</em>，体现在国家根本性质（即国体）上，就是工人阶级领导的、以工农联盟为基础的人民民主专政的社会主义国家；体现在国家政权组织形式（即政体）上,就是人民通过各级人民代表大会行使国家权力</p>
<p>第二，国家建立<em>健全法律制度和体制机制</em>，保证人民依照法律规定，通过各种途径和形式,管理国家事务，管理经济文化事业，管理社会事务。</p>`,r:{minutes:11.15,words:3344},y:"a",title:"10.2“五位一体”总体布局(政治)",i:"book"},["/politics/mzdzt/10.2","/politics/mzdzt/10.2.md"]],["v-a6faf47c","/politics/mzdzt/10.3.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 坚持中国特色社会主义文化发展道路<span alt="blue">非重点</span></h2>
<p>文化是一个国家、一个民族的灵魂。文化自信是更基础、更广泛、更深厚的自信，是一个国家、一个民族发展中更基本、更深沉、更持久的力量。习近平总书记强调：“没有高度的文化自信，没有文化的繁荣兴盛，就没有中华民族伟大复兴。”坚定中国特色社会主义道路自信、理论自信、制度自信，说到底是要坚定文化自信。</p>
<h2> 坚持马克思主义在意识形态领域指导地位的根本制度<span alt="purple">选择题</span></h2>
<p>意识形态关乎旗帜、关乎道路、关乎国家安全，决定文化前进方向和道路。把坚持马克思主义在意识形态领域的指导地位确立为根本制度，集中体现了我们党在领导文化建设长期实践中积累的成功经验和形成的方针原则，充分反映了我们党对社会主义文化建设规律的新认识。</p>`,r:{minutes:4.71,words:1413},y:"a",title:"10.3“五位一体”总体布局(文化)",i:"book"},["/politics/mzdzt/10.3","/politics/mzdzt/10.3.md"]],["v-a391433e","/politics/mzdzt/10.4.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 在发展中保障和改善民生<span alt="purple">选择题</span></h2>
<p>第一，建设高质量教育体系。建设教育强国是中华民族伟大复兴的基础工程，必须把教育事业放在优先位置</p>
<p>第二，实施就业优先战略。</p>
<p>第三，优化收入分配结构</p>
<p>第四，健全多层次社会保障体系。社会保障发挥着社会稳定器作用，保障全社会成员基本生存与生活需要，要全面建成覆盖全民、城乡统筹、权责清晰、保障适度、可持续的多层次社会保障体系</p>
<p>第五，全面推进健康中国建设</p>
<h2> 加强和创新社会治理<span alt="purple">选择题</span></h2>`,r:{minutes:2.11,words:634},y:"a",title:"10.4“五位一体”总体布局(社会)",i:"book"},["/politics/mzdzt/10.4","/politics/mzdzt/10.4.md"]],["v-a0279200","/politics/mzdzt/10.5.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 坚持习近平生态文明思想<span alt="purple">选择题</span></h2>
<p>第一，坚持人与自然和谐共生（核心）</p>
<p>第二，绿水青山就是金山银山</p>
<p>第三，树立尊重自然、顺应自然、保护自然的生态文明理念，保护自然生态系统，维护人与自然之间形成的生命共同体</p>
<p>第四，良好生态环境是最普惠的民生福祉</p>
<p>第五，统筹山水林田湖草沙系统治理</p>
<p>第六，用最严格制度最严密法治保护生态环境</p>
<p>第七，共谋全球生态文明建设</p>
<h2> 推动绿色发展，促进人与自然和谐共生<span alt="purple">选择题</span></h2>`,r:{minutes:1.37,words:412},y:"a",title:"10.5“五位一体”总体布局(生态)",i:"book"},["/politics/mzdzt/10.5","/politics/mzdzt/10.5.md"]],["v-4bc61c86","/politics/mzdzt/11.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 中国社会主义现代化国家的基本特征<span alt="purple">选择题</span><span alt="orange">论述题</span></h2>
<p>2021年7月1日，习近平在天安门城楼上庄严宣告，经过全党全国各族人民持续奋斗，我们实现了第一个百年奋斗目标，在中华大地上全面建成了小康社会，历史性地解决了绝对贫困问题，正在意气风发向着全面建成社会主义现代化强国的第二个百年奋斗目标迈进。</p>
<p>第一，中国的现代化是人口规模巨大的现代化；</p>
<p>第二，中国的现代化是全体人民共同富裕的现代化；</p>
<p>第三，中国的现代化是物质文明和精神文明相协调的现代化；</p>`,r:{minutes:15.05,words:4515},y:"a",title:"11.“四个全面”战略布局",i:"book"},["/politics/mzdzt/11","/politics/mzdzt/11.md"]],["v-4d7af525","/politics/mzdzt/12.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 坚持总体国家安全观<span alt="blue">非重点</span></h2>
<p>坚持总体国家安全观，必须坚持国家利益至上，以人民安全为宗旨，以政治安全为根本,以经济安全为基础，以军事、文化、社会安全为保障</p>
<h2> 坚持习近平强军思想<span alt="purple">选择题</span></h2>
<h3> 科学内涵</h3>
<p>习近平强军思想深刻回答了“新时代建设一支什么样的强大人民军队、怎样建设强大人民军队”的时代课题。习近平强军思想，是习近平新时代中国特色社会主义思想的重要组成部分,开拓了当代中国马克思主义军事理论和军事实践发展新境界，标志着党的军事指导理论的与时俱进，是全面推进新时代强军事业的科学指南。</p>`,r:{minutes:4.83,words:1448},y:"a",title:"12.实现中华民族伟大复兴的重要保障",i:"book"},["/politics/mzdzt/12","/politics/mzdzt/12.md"]],["v-4f2fcdc4","/politics/mzdzt/13.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 习近平外交思想<span alt="blue">非重点</span></h2>
<h3> 科学内涵</h3>
<p>以习近平同志为核心的党中央旗帜鲜明地回答了新时代中国应当推动建设什么样的世界、构建什么样的国际关系，中国需要什么样的外交、怎样办好新时代外交等一系列重大理论和实践问题，形成了习近平外交思想。</p>
<h3> 新时代对外工作的根本遵循</h3>
<ul>
<li>习近平外交思想是对新中国外交理论的继承与发展。</li>
<li>习近平外交思想是21世纪马克思主义在外交领域的最新成果。</li>
<li>习近平外交思想是对中华优秀传统文化的传承创新。</li>
<li>习近平外交思想是对传统国际关系理论的扬弃超越。</li>
</ul>`,r:{minutes:7.18,words:2155},y:"a",title:"13.中国特色大国外交",i:"book"},["/politics/mzdzt/13","/politics/mzdzt/13.md"]],["v-50e4a663","/politics/mzdzt/14.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 中国共产党的领导地位是历史和人民的选择<span alt="purple">选择题</span></h2>
<p>中国共产党是中国工人阶级的先锋队，同时是中国人民和中华民族的先锋队，是中国特色社会主义事业的领导核心。</p>
<h2> 中国特色社会主义最本质的特征<span alt="purple">选择题</span></h2>
<h3> 党的领导是中国特色社会主义最本质的特征的</h3>
<h4> 内涵</h4>
<p>中国共产党的领导是中国特色社会主义最本质的特征，这是党的十八大以来习近平提出的一个重要论断。这一论断符合科学社会主义的基本原则，反映中国特色社会主义的历史经验,适应新时代历史使命的实践要求。</p>`,r:{minutes:2.42,words:726},y:"a",title:"14.坚持和加强党的领导",i:"book"},["/politics/mzdzt/14","/politics/mzdzt/14.md"]],["v-be03d70c","/politics/mzdzt/2.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 近代中国国情和中国革命的时代特征<span alt="purple">选择题</span></h2>
<p>根本任务：推翻帝国主义、封建主义和官僚资本主义的统治</p>
<p>中国革命要分两步走，第一步是完成反帝反封建的新民主主义革命任务，第二步是完成社会主义革命任务，这是性质不同但又相互联系的两个革命过程。</p>
<figure><img src="http://file.passwordgloo.xyz/politics/politics_49.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:13.07,words:3922},y:"a",title:"2.新民主主义革命理论",i:"book"},["/politics/mzdzt/2","/politics/mzdzt/2.md"]],["v-ba9a25ce","/politics/mzdzt/3.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 新民主主义社会的性质和特点<span alt="purple">选择题</span></h2>
<h3> 经济方面</h3>
<figure><img src="http://file.passwordgloo.xyz/politics/politics_53.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3> 政治方面</h3>
<p>中国社会的阶级构成主要是工人阶级、农民阶级和其他小资产阶级、民族资产阶级等新民主主义社会基本的阶级力量</p>
<p>民族资产阶级仍然是一个具有两面性的阶级：既有剥削工人的一面，又有接受
工人阶级及其政党领导的一面</p>`,r:{minutes:5.17,words:1550},y:"a",title:"3.社会主义改造理论",i:"book"},["/politics/mzdzt/3","/politics/mzdzt/3.md"]],["v-b7307490","/politics/mzdzt/4.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 调动一切积极因素为社会主义事业服务<span alt="purple">选择题</span></h2>
<p>调动一切积极因素为社会主义事业服务的思想，是1956年毛泽东在《论十大关系》的报告中提出的《论十大关系》的报告，</p>
<p>初步总结了我国社会主义建设的经验，明确提出要以苏为鉴，独立自主地探索适合中国情况的社会主义建设道路。《论十大关系》标志着党探索中国社会主义建设道路的良好开端。</p>
<p>《论十大关系》确定了一个基本方针，就是“努力把党内党外、国内国外的一切积极的因素,直接的、间接的积极因素全部调动起来”，为社会主义建设服务</p>
<p>调动一切积极因素为社会主义事业服务，必须坚持中国共产党的领导</p>`,r:{minutes:4.98,words:1493},y:"a",title:"4.社会主哭建设道路初步抿索的理论成果",i:"book"},["/politics/mzdzt/4","/politics/mzdzt/4.md"]],["v-b3c6c352","/politics/mzdzt/5.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 邓小平理论的形成条件<span alt="purple">选择题</span></h2>
<h3> 时代背景</h3>
<p>现在世界上真正大的问题，带全球性的战略问题，一个是和平问题,一个是经济问题或者说是发展问题。和平问题是东西问题，发展问题是南北问题。概括起来，就是东西南北四个字。南北问题是核心问题</p>
<h3> 历史根据</h3>
<p>社会主义建设的经验教训</p>
<h3> 现实依据</h3>
<p>改革开放和现代化建设的实践</p>
<h2> 邓小平理论的形成过程<span alt="purple">选择题</span></h2>
<h3> 党的十一届三中全会</h3>`,r:{minutes:10.93,words:3280},y:"a",title:"5.邓小平理论",i:"book"},["/politics/mzdzt/5","/politics/mzdzt/5.md"]],["v-b05d1214","/politics/mzdzt/6.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`<p>略</p>
`,r:{minutes:.06,words:19},y:"a",title:"6.“三个代表”重要思想",i:"book"},["/politics/mzdzt/6","/politics/mzdzt/6.md"]],["v-acf360d6","/politics/mzdzt/7.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`<p>略</p>
`,r:{minutes:.05,words:16},y:"a",title:"7.科学发展观",i:"book"},["/politics/mzdzt/7","/politics/mzdzt/7.md"]],["v-a989af98","/politics/mzdzt/8.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 中国特色社会主义进入新时代<span alt="purple">选择题</span></h2>
<p>党的十八大以来，中国特色社会主义进入新时代，这是我国发展新的历史方位。这一重大政治论断，赋予党的历史使命、理论遵循、目标任务以新的时代内涵，为我们深刻把握当代中国发展的新阶段新特征，科学制定党的路线方针政策提供了时代坐标和基本依据。</p>
<h3> 历史成就和变革的必然结果</h3>
<p>革命战争年代历史成就</p>
<p>社会主义建设成就</p>
<p>改革开放成就</p>
<p>新时代历史成就</p>
<h3> 主要矛盾变化的必然结果</h3>
<h4> 主要矛盾</h4>`,r:{minutes:11.43,words:3429},y:"a",title:"8.习近平新时代中国特色社会主次思想及其历史地位",i:"book"},["/politics/mzdzt/8","/politics/mzdzt/8.md"]],["v-a61ffe5a","/politics/mzdzt/9.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`
<h2> 实现中华民族伟大复兴的中国梦<span alt="purple">选择题</span></h2>
<h3> 中国梦的科学内涵</h3>
<p>国家富强：是指我国综合国力进一步增强，中国特色社会主义事业进一步发展和完善。经济更加发达，科技创新在经济发展中的驱动力更加强劲，政治更加民主，文化更加繁荣，社会更加和谐，生态更加美好。</p>
<p>民族振兴：就是通过自身的不断发展与强大，继承并创造中华民族的优秀文化以及先进的文明成果，进而使中华民族再次处于世界领先的地位，再次以高昂的姿态屹立于世界民族之林。民族振兴，也会更好地造福世界人民，共创世界美好的未来。</p>
<p>人民幸福：就是人民权利保障更加充分、人人得享共同发展，生活在伟大祖国和伟大时代的中国人民，共同享有人生出彩的机会，共同享有梦想成真的机会，共同享有同祖国和时代一起成长与进步的机会。</p>`,r:{minutes:10.34,words:3102},y:"a",title:"9.坚持和发展中国特色社会主义的总任务",i:"book"},["/politics/mzdzt/9","/politics/mzdzt/9.md"]],["v-e8abe160","/politics/principle/1.html",{d:"2022-12-31T00:00:00.000Z",l:"2022年12月31日",e:`
<h2> 马克思主义的内涵<span alt="blue">非重点</span></h2>
<ul>
<li>
<p>是由马克思和恩格斯<s>创立</s>并不断发展的科学理论体系</p>
</li>
<li>
<p>是关于自然、社会和人类思维规律的学说</p>
</li>
<li>
<p>是关于社会主义必然代替资本主义，最终<em>实现共产主义</em>的学说</p>
</li>
<li>
<p>是关于无产阶级解放、全人类解放和每个人自由而<em>全面发展</em>的学说</p>
</li>
<li>
<p>是指引人民创造美好生活的<s>行动指南</s></p>
</li>
</ul>
<h2> 马克思主义的立场、观点和方法<span alt="purple">选择题</span></h2>`,r:{minutes:4.42,words:1326},y:"a",title:"1.导论",i:"book"},["/politics/principle/1","/politics/principle/1.md"]],["v-2c6a41dc","/politics/principle/10.html",{d:"2022-12-31T00:00:00.000Z",l:"2022年12月31日",e:`
<h2> 空想社会主义的局限性<span alt="purple">选择题</span></h2>
<p>空想社会主义者只看到了资本主义必然灭亡的命运，却未能揭示资本主义必然灭亡的经济根源；</p>
<p>他们要求埋葬资本主义，却看不到埋葬资本主义的力量；</p>
<p>他们憧憬取代资本主义的理想社会，却找不到通往理想社会的现实道路</p>
<h2> 科学社会主义的创立<span alt="purple">选择题</span></h2>
<p>理论基础：马克思、恩格斯在新的历史条件下创立了唯物史观和剩余价值学说，从而超越了空想社会主义，创立了科学社会主义</p>
<p>创立的标志：1848年2月，马克思、恩格斯为世界上第一个无产阶级政党“共产主义者同盟”所写的党纲《共产党宣言》的发表，标志着科学社会主义的产生。</p>`,r:{minutes:5.32,words:1597},y:"a",title:"10.科学社会主义",i:"book"},["/politics/principle/10","/politics/principle/10.md"]],["v-e5423022","/politics/principle/2.html",{d:"2022-12-31T00:00:00.000Z",l:"2022年12月31日",e:`
<h2> 物质范畴及其理论意义<span alt="purple">选择题</span></h2>
<h3> 恩格斯关于物质概念的提法</h3>
<blockquote>
<p>“物、物质无非是各种物的总和，而这个概念就是从这一总和中抽象出来的。”</p>
</blockquote>
<h3> 列宁关于物质概念的提法</h3>
<blockquote>
<p>“物质是标志<em>客观实在</em>的哲学范畴，这种客观实在是人通过感觉感知的，它不依赖于我们的感觉而存在，为我们的感觉所复写、摄影、反映。”</p>
</blockquote>
<p>物质的唯一特性：<em>客观实在</em></p>`,r:{minutes:6.1,words:1830},y:"a",title:"2.物质观与意识观",i:"book"},["/politics/principle/2","/politics/principle/2.md"]],["v-e1d87ee4","/politics/principle/3.html",{d:"2022-12-31T00:00:00.000Z",l:"2022年12月31日",e:`
<h2> 唯物辩证法两大总特征<span alt="purple">选择题</span></h2>
<h3> 事物的普遍联系</h3>
<blockquote>
<p>联系是指事物内部各要素之间和事物之间<em>相互影响</em>、<em>相互制约</em>和相互作用的关系。</p>
</blockquote>
<figure><img src="http://file.passwordgloo.xyz/politics/事物的普遍联系.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3> 事物的永恒发展</h3>`,r:{minutes:3.63,words:1089},y:"a",title:"3.辩证法",i:"book"},["/politics/principle/3","/politics/principle/3.md"]],["v-de6ecda6","/politics/principle/4.html",{d:"2022-12-31T00:00:00.000Z",l:"2022年12月31日",e:`
<h2> 实践的基本特征<span alt="purple">选择题</span></h2>
<h3> 错误实践观</h3>
<figure><img src="http://file.passwordgloo.xyz/politics/politics_10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3> 实践的基本特征</h3>
<p>实践是改造世界的客观物质活动，具有直接现实性。</p>
<p>实践是人类有意识的、有目的的活动，体现了自觉的能动性。</p>
<p>实践是社会的、历史的活动，具有社会历史性。</p>`,r:{minutes:13.73,words:4120},y:"a",title:"4.认识论",i:"book"},["/politics/principle/4","/politics/principle/4.md"]],["v-db051c68","/politics/principle/5.html",{d:"2022-12-31T00:00:00.000Z",l:"2022年12月31日",e:`
<h2> 唯物史观和唯心史观的对立<span alt="purple">选择题</span></h2>
<p>社会历史观的基本问题：社会存在和社会意识的关系问题。</p>
<p>唯心史观的缺陷：一是至多考察人们活动的思想动机，而没有进一步追究思想动机背后的物质动因；
二是只看到个人在历史上的作用，而忽视人民群众创造历史的决定作用。</p>
<figure><img src="http://file.passwordgloo.xyz/politics/politics_16.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:9.29,words:2788},y:"a",title:"5.唯物史观",i:"book"},["/politics/principle/5","/politics/principle/5.md"]],["v-d79b6b2a","/politics/principle/6.html",{d:"2022-12-31T00:00:00.000Z",l:"2022年12月31日",e:`
<h2> 资本主义生产关系的产生和资本主义生产方式的形成<span alt="blue">非重点</span></h2>
<p>资本主义生产关系产生的途径有两个：一是从小商品经济分化出来；二是从商人和高利贷者转化而成。</p>
<p>资本原始积累的概念：生产者与生产资料相分离，货币资本迅速集中于少数人手中的历史过程。</p>
<p>资本原始积累的途径：一是用暴力手段剥夺农民土地；二是用暴力手段掠夺货币财富。</p>
<h2> 价值是什么<span alt="purple">选择题</span></h2>
<p>商品经济是以交换为目的而进行生产的经济形式。</p>
<p>商品经济产生的历史条件有两个：一是社会分工的存在；二是生产资料和劳动产品属于不同的所有者。</p>`,r:{minutes:6.08,words:1824},y:"a",title:"6.资本主义的本质与规律",i:"book"},["/politics/principle/6","/politics/principle/6.md"]],["v-d431b9ec","/politics/principle/7.html",{d:"2022-12-31T00:00:00.000Z",l:"2022年12月31日",e:`
<h2> 劳动力成为商品与货币转化为资本<span alt="purple">选择题</span></h2>
<h3> 劳动力成为商品的基本条件</h3>
<p><code>劳动力</code>：劳动力是指人的劳动能力，是人的体力和脑力的总和。</p>
<p>劳动力的使用即<code>劳动</code>。</p>
<p>劳动力成为商品，要具备两个<em>基本条件</em>：第一，劳动者是自由人，能够把自己的劳动力当作自己的商品来支配；第二，劳动者没有别的商品可以出卖，“自由”得一无所有，没有任何实现自己的劳动力价值所必需的物质条件</p>
<h3> 劳动力商品的特点与货币转化为资本</h3>`,r:{minutes:4.68,words:1404},y:"a",title:"7.剩余价值的生产与积累",i:"book"},["/politics/principle/7","/politics/principle/7.md"]],["v-d0c808ae","/politics/principle/8.html",{d:"2022-12-31T00:00:00.000Z",l:"2022年12月31日",e:`
<h2> 资本的循环周转与再生产<span alt="purple">选择题</span></h2>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">产业资本在循环过程中要经历三个不同阶段，与此相联系的是资本依次执行三种不同职能</p>
</blockquote>
<p>第一个阶段是购买阶段，产业资本执行的是货币资本的职能；</p>
<p>第二个阶段是生产阶段，产业资本执行的是生产资本的职能；</p>
<p>第三个阶段是售卖阶段，产业资本执行的是商品资本的职能</p>`,r:{minutes:4.74,words:1422},y:"a",title:"8.剩余价值的流转与分配",i:"book"},["/politics/principle/8","/politics/principle/8.md"]],["v-cd5e5770","/politics/principle/9.html",{d:"2022-12-31T00:00:00.000Z",l:"2022年12月31日",e:`
<h2> 资本主义从自由竞争到垄断<span alt="purple">选择题</span></h2>
<h3> 生产集中与资本集中</h3>
<p>生产集中：是指生产资料、劳动力和商品的生产日益集中于少数大企业的过程，其结果是大企业在社会生产中所占的比重不断增加。</p>
<p>资本集中：是指大资本吞并小资本，或由许多小资本合并而成大资本的过程，其结果是越来越多的资本为少数大资本所支配。生产集中和资本集中是资本家追求剩余价值和自由竞争的结果，也是生产社会化和资本社会化的重要表现。</p>
<h3> 垄断的形成、本质及垄断组织</h3>
<p>垄断的概念：是指少数资本主义大企业，为了获得高额利润，通过相互协议或联合，对一个或几个部门商品的生产、销售和价格进行操纵与控制。</p>`,r:{minutes:3.43,words:1029},y:"a",title:"9.垄断资本主义的发展",i:"book"},["/politics/principle/9","/politics/principle/9.md"]],["v-6523da9a","/politics/special/1.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`<h2> 中共一大</h2>
<p>大会确定党的名称为中国共产党。党的纲领：以无产阶级革命军队推翻资产阶级，采用无产阶级专政以达到阶级斗争的目的一一消灭阶级，废除资本私有制，以及联合第三国际等</p>
<h2> 中共二大</h2>
<p>第一，中共二大第一次提出了反帝反封建的民主革命的纲领，为中国人民指出了明确的斗争目标</p>
<p>第二，开始采取民族资产阶级、小资产阶级的政党和政治派别没有采取过、也不可能采取的革命方法，即群众路线的方法。</p>
<h2> 八七会议</h2>
<h3> 主要内容</h3>
<p>第一，会议彻底清算了大革命后期的陈独秀右倾机会主义错误，提出了“整顿改编自己的队伍，纠正过去严重的错误，而找着新的道路”的任务。</p>`,r:{minutes:6.71,words:2014},y:"a",title:"中国共产党会议",i:"book"},["/politics/special/1","/politics/special/1.md"]],["v-61ba295c","/politics/special/2.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`<h2> 大革命时期</h2>
<h3> 《国民革命与农民运动》</h3>
<p>“<s>农民问题乃国民革命的中心问题</s>”，“所谓国民革命运动，其大部分即是农民运动”</p>
<h3> 八七会议</h3>
<p><a href="/politics/special/1.html##%E5%85%AB%E4%B8%83%E4%BC%9A%E8%AE%AE" target="blank">八七会议</a>上强调党“以后要非常注意军事，须知政权是由枪杆子中取得的”，实际上提出了以军事斗争作为党的工作重心的问题。</p>
<h2> 土地革命战争早期</h2>
<h3> 《中国的红色政权为什么能够存在？》和《井冈山的斗争》</h3>`,r:{minutes:5.07,words:1520},y:"a",title:"毛泽东著作",i:"book"},["/politics/special/2","/politics/special/2.md"]],["v-5e50781e","/politics/special/3.html",{d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",e:`<table>
<thead>
<tr>
<th></th>
<th>时期</th>
<th>标志性事件</th>
<th>统一战线</th>
</tr>
</thead>
<tbody>
<tr>
<td>1925-1927</td>
<td>大革命时期</td>
<td>五卅运动</td>
<td>国民革命统一战线<br>(国共合作统一战线)</td>
</tr>
<tr>
<td>1927-1937</td>
<td>土地革命时期</td>
<td>八七会议</td>
<td>工农民主统一战线</td>
</tr>
<tr>
<td>1937-1945</td>
<td>全面抗日战争时期</td>
<td>西安事变</td>
<td>抗日战争统一战线</td>
</tr>
<tr>
<td>1945-1949</td>
<td>解放战争时期</td>
<td>国民党进攻中原解放区</td>
<td>人民民主统一战线</td>
</tr>
</tbody>
</table>`,r:{minutes:.39,words:116},y:"a",title:"表格",i:"book"},["/politics/special/3","/politics/special/3.md"]],["v-15cd7890","/tool/mysql/intro.html",{d:"2022-08-03T00:00:00.000Z",l:"2022年8月3日",e:`<h2> 数据库</h2>
<h3> 查看数据库</h3>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show databases;    //查看数据库
use test;  //打开test数据库
select database(); //查看目前在哪个数据库里
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.66,words:199},y:"a",title:"基本操作",i:"mysql"},["/tool/mysql/intro","/tool/mysql/intro.md"]],["v-09f986f3","/tool/mysql/skill.html",{d:"2022-08-03T00:00:00.000Z",l:"2022年8月3日",e:`<h2> 编码方式</h2>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SHOW VARIABLES LIKE '%char%';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2> 函数</h2>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select version； //查看mysql版本
select 10+20；
select 98%3;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.46,words:138},y:"a",title:"技巧",i:"mysql"},["/tool/mysql/skill","/tool/mysql/skill.md"]],["v-dbfcd868","/tw/c/arithmetic-1.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 16.算法的基本概念</h2>
<h3> 程序</h3>
<p><code>對程序的描述</code>在程序中要指定哪些數據以及這些數據的類型和數據的組織形式。這就是數據結構
<code>對數據的描述</code>。即要求計算機進行操作的步驟，也就是<code>算法</code>。</p>
<h3> 沃斯公式</h3>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/warning.svg" alt="" loading="lazy">該說法已經不合時宜</p>
</blockquote>`,r:{minutes:1.29,words:387},y:"a",title:"算法學習（1）",i:"code"},["/tw/c/arithmetic-1","/tw/c/arithmetic-1.md"]],["v-d893272a","/tw/c/arithmetic-2.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 17.1求素數</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"請輸入壹個整數:"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">&lt;=</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"這個數不是素數\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"這個數是素數\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">double</span> b <span class="token operator">=</span><span class="token function">sqrt</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//sqrt函數定義在math.h裏面，求壹個數平方根</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>b<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">%</span>i <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"這個數不是素數\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"這個數是素數\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.82,words:246},y:"a",title:"算法學習（2）",i:"code"},["/tw/c/arithmetic-2","/tw/c/arithmetic-2.md"]],["v-e2b4a2ca","/tw/c/array-1.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 38.單位換算</h2>
<blockquote>
<p>1KB=2^10B=1024B
1MB=2^10KB=1024KB
1GB=2^10MB=1024MB</p>
</blockquote>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%p,%p,%p"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">,</span><span class="token operator">&amp;</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">//%p,%o,%x以16進制格式輸出,但是隨機產生的數值可能不連續</span>


	<span class="token keyword">int</span> d<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d,%d,%d"</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%p,%p,%p\\n"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>d<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>d<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.3,words:991},y:"a",title:"數組（1）",i:"code"},["/tw/c/array-1","/tw/c/array-1.md"]],["v-df4af18c","/tw/c/array-2.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 44.求二維數組的鞍點</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//鞍點是該位置的元素在該行上最大，該列上最小</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdbool.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">N</span> <span class="token expression"><span class="token number">5</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">M</span> <span class="token expression"><span class="token number">6</span></span></span>
bool <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>a<span class="token punctuation">)</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">int</span> j<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> x <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>x<span class="token operator">&lt;</span>M<span class="token punctuation">;</span><span class="token operator">++</span>x<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&lt;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span> false<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span>M<span class="token punctuation">]</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">)</span>          <span class="token comment">//int a[][N]或者int (*a)[N]都是定義了壹個指向N個整型元素的數組的指針</span>
<span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>M<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>N<span class="token punctuation">;</span><span class="token operator">++</span>j<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%5d"</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token function">putchar</span><span class="token punctuation">(</span><span class="token char">'\\n'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">[</span>M<span class="token punctuation">]</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>M<span class="token operator">*</span>N<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
		a<span class="token punctuation">[</span>i<span class="token operator">/</span>N<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token operator">%</span>N<span class="token punctuation">]</span><span class="token operator">-</span>i<span class="token punctuation">;</span>
	<span class="token function">show</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>


	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>M<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">int</span> k<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>N<span class="token punctuation">;</span><span class="token operator">++</span>j<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">&lt;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
				k<span class="token operator">=</span>j<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>i<span class="token punctuation">,</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"a[%d][%d]是這個二維數組的鞍點\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.03,words:1210},y:"a",title:"數組（2）",i:"code"},["/tw/c/array-2","/tw/c/array-2.md"]],["v-419b10cb","/tw/c/bit.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 89.按位與按位或運算符</h2>
<blockquote>
<p><strong>&amp;(按位與)</strong>：參加運算的兩個數據，如果相應的二進制都為1，則該結果為1，否則為0
<strong>|(按位或)</strong>：參加運算的兩個數據，如果相應的二進制都為0，則該位結果都為0，否則為1</p>
</blockquote>
<h2> 90.按位異或</h2>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">按位異或也稱為XOF運算符，如果相應的二進制位不同，則該位結果為1，否則為0</p>
</blockquote>`,r:{minutes:3.08,words:924},y:"a",title:"位運算",i:"code"},["/tw/c/bit","/tw/c/bit.md"]],["v-3f26983a","/tw/c/choose.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 24.判斷兩個實型數據是否相等</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">float</span> a <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2.12</span><span class="token punctuation">,</span>b <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10.33</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">fabs</span><span class="token punctuation">(</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">1e-4</span><span class="token punctuation">)</span>                           <span class="token comment">//double fabs(double), int abs(int)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"這兩個數相等"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"這兩個數不等"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.52,words:757},y:"a",title:"選擇程序設計",i:"code"},["/tw/c/choose","/tw/c/choose.md"]],["v-066f94b8","/tw/c/design-1.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 1.最簡單的C語言程序</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"C programme\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.72,words:1415},y:"a",title:"程序設計和C語言（1）",i:"code"},["/tw/c/design-1","/tw/c/design-1.md"]],["v-08246d57","/tw/c/design-2.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h1> 運算符</h1>
<table>
<thead>
<tr>
<th>優先級</th>
<th>運算符</th>
<th>含義</th>
<th>運算對象個數</th>
<th>結合方向</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>()</td>
<td>圓括號</td>
<td></td>
<td>自左向右</td>
</tr>
<tr>
<td>1</td>
<td>[]</td>
<td>下標運算符</td>
<td></td>
<td>自左向右</td>
</tr>
<tr>
<td>1</td>
<td>-&gt;</td>
<td>指向結構體成員運算符</td>
<td></td>
<td>自左向右</td>
</tr>
<tr>
<td>1</td>
<td>.</td>
<td>結構體成員運算符</td>
<td></td>
<td>自左向右</td>
</tr>
<tr>
<td>2</td>
<td>!</td>
<td>邏輯非運算符</td>
<td>單目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>2</td>
<td>~</td>
<td>邏輯取反運算符</td>
<td>單目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>2</td>
<td>++</td>
<td>自增運算符</td>
<td>單目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>2</td>
<td>--</td>
<td>自減運算符</td>
<td>單目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>2</td>
<td>-</td>
<td>負號運算符</td>
<td>單目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>2</td>
<td>(類型)</td>
<td>類型轉換運算符</td>
<td>單目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>2</td>
<td>*</td>
<td>指針運算符</td>
<td>單目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>2</td>
<td>&amp;</td>
<td>取地址運算符</td>
<td>單目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>2</td>
<td>sizeof</td>
<td>長度運算符</td>
<td>單目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>3</td>
<td>*</td>
<td>乘法運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>3</td>
<td>/</td>
<td>除法運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>3</td>
<td>%</td>
<td>求余運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>4</td>
<td>+</td>
<td>加法運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>4</td>
<td>-</td>
<td>減法運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>5</td>
<td>&lt;&lt;</td>
<td>左移運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>5</td>
<td>&gt;&gt;</td>
<td>右移運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>6</td>
<td>&lt;</td>
<td>關系運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>6</td>
<td>&lt;=</td>
<td>關系運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>6</td>
<td>&gt;</td>
<td>關系運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>6</td>
<td>&gt;=</td>
<td>關系運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>7</td>
<td>==</td>
<td>等於運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>7</td>
<td>!=</td>
<td>不等於運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>8</td>
<td>&amp;</td>
<td>按位與運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>9</td>
<td>^</td>
<td>按位異或運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>10</td>
<td>|</td>
<td>按位或運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>11</td>
<td>&amp;&amp;</td>
<td>邏輯與運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>12</td>
<td>||</td>
<td>邏輯非運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>13</td>
<td>?:</td>
<td>條件運算符</td>
<td>三目運算符</td>
<td>自左向右</td>
</tr>
<tr>
<td>14</td>
<td>=</td>
<td>賦值運算符</td>
<td>雙目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>+=</td>
<td>賦值運算符</td>
<td>雙目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>-=</td>
<td>賦值運算符</td>
<td>雙目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>*=</td>
<td>賦值運算符</td>
<td>雙目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>/=</td>
<td>賦值運算符</td>
<td>雙目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>%/</td>
<td>賦值運算符</td>
<td>雙目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>&gt;&gt;=</td>
<td>賦值運算符</td>
<td>雙目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>&lt;&lt;=</td>
<td>賦值運算符</td>
<td>雙目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>&amp;=</td>
<td>賦值運算符</td>
<td>雙目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>^=</td>
<td>賦值運算符</td>
<td>雙目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>14</td>
<td>|=</td>
<td>賦值運算符</td>
<td>雙目運算符</td>
<td><code>自右向左</code></td>
</tr>
<tr>
<td>15</td>
<td>,</td>
<td>逗號運算符</td>
<td>雙目運算符</td>
<td>自左向右</td>
</tr>
</tbody>
</table>`,r:{minutes:2.34,words:703},y:"a",title:"程序設計和C語言（2）",i:"code"},["/tw/c/design-2","/tw/c/design-2.md"]],["v-09d945f6","/tw/c/design-3.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 10.初等運算符及單目運算符</h2>
<blockquote>
<ol>
<li>優先級、操作數、結合方向--初等運算符優先級為1，單目運算符優先級為2</li>
<li>只有單目運算符和賦值運算符的結合方向是自右往左的</li>
</ol>
</blockquote>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//概念理解</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d,%d\\n"</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">2</span><span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d\\n"</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//學習目標（2）</span>


	<span class="token comment">//！邏輯非運算符，求該操作數的邏輯反值，如果該操作數值為真，則整個表達式為假，否則整個表達式值為真</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d,%d,%d\\n"</span><span class="token punctuation">,</span><span class="token operator">!</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">!</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//輸出0，0，1</span>
	
	<span class="token comment">//-負號運算符</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d\\n"</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token operator">*</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//乘號比負號的優先級低，括號可以省略</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.19,words:1256},y:"a",title:"程序設計和C語言（3）",i:"code"},["/tw/c/design-3","/tw/c/design-3.md"]],["v-0b8e1e95","/tw/c/design-4.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 14.全局變量及宏定義</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
學習目標
(1)宏名，全局變量建議大寫
(2)#開頭的都是預處理指令，預處理是發生在預編譯階段(編譯之前)，對源程序進行壹些簡單的文本替換
(3)全局變量的作用域就是從定義處開始，到整個文件的末尾
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">P1</span> <span class="token expression"><span class="token number">3.1415926</span>   </span><span class="token comment">//定義壹個宏名P1，程序會在預編譯階段把該定義出之後的所有的P1地方替換為3.1415926</span></span>

<span class="token keyword">int</span> A<span class="token punctuation">;</span>                 <span class="token comment">//未初始化的全局變量A，初始值4的全局變量B</span>
<span class="token keyword">int</span> B<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d,%d\\n"</span><span class="token punctuation">,</span>A<span class="token punctuation">,</span>B<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"P1\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//	P1=10；         //error 符號常量P1不能被賦值</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d,%d\\n"</span><span class="token punctuation">,</span>A<span class="token punctuation">,</span>B<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.85,words:554},y:"a",title:"程序設計和C語言（4）",i:"code"},["/tw/c/design-4","/tw/c/design-4.md"]],["v-0fca090c","/tw/c/file-1.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 77.文件的基本概念</h2>
<h3> 文件分類</h3>
<h4> 程序文件</h4>
<blockquote>
<p>這種文件的內容是程序代碼，如源程序文件，目標文件，可執行文件等</p>
</blockquote>
<h4> 數據文件</h4>
<blockquote>
<p>其內容不是程序，而是供程序運行時讀寫的數據
終端即計算機的各種輸入輸出設備。操作系統把終端都統壹作為文件看待
壹個文件要有唯壹的文件標識，文件標識包括3個部分：
①文件路徑 ②文件名主幹 ③文件後綴
數據文件分類：ASCII(文本文件)和二進制文件(鏡像文件)</p>
</blockquote>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token string">"H:/Java/Dos命令.txt"</span><span class="token punctuation">;</span>
	FILE <span class="token operator">*</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span><span class="token string">"r"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>               
	<span class="token keyword">if</span><span class="token punctuation">(</span>fp <span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"文件打開失敗，程序退出\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	FILE <span class="token operator">*</span>fp2 <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">"H:\\\\Dos命令2.txt"</span><span class="token punctuation">,</span><span class="token string">"w"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>fp2 <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"文件打開失敗，程序退出\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">char</span> ch<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ch <span class="token operator">=</span> <span class="token function">fgetc</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span><span class="token constant">EOF</span><span class="token punctuation">)</span>
		<span class="token function">fputc</span><span class="token punctuation">(</span>ch<span class="token punctuation">,</span>fp2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>fp2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.25,words:1275},y:"a",title:"對文件的輸入輸出（1）",i:"code"},["/tw/c/file-1","/tw/c/file-1.md"]],["v-0c6057ce","/tw/c/file-2.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 81.用二進制的方法讀寫數據</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	FILE <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">"H:/Java/Dos命令5.txt"</span><span class="token punctuation">,</span><span class="token string">"rb"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//打開方式為r，輸出3個ASCII碼值，如果打開方式為b,輸出4個ASCII碼值</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"文件打開失敗，程序退出\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">char</span> ch<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ch <span class="token operator">=</span> <span class="token function">fgetc</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token operator">!=</span><span class="token constant">EOF</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d\\n"</span><span class="token punctuation">,</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
在windows系統下，使用fputs,fputc,fprintf向壹個文件寫入數據時，如果寫入'\\n',文件的打開方式為文本模式，實際上寫入的是'\\r'和'\\n'兩個字符
如果文件的打開方式為二進制模式，實際就是寫入壹個'\\n'字符


使用fgetc,fgets,fscanf向壹個文件讀入數據，如果讀到'\\r'和'\\n'，而且文件打開方式為文本模式，會把這兩個字符當成壹個'\\n'讀進來
如果文件的打開方式是二進制模式，那麽不會發生這種轉換，讀進來的就是'\\n'、'\\r'

建議：如果文件本身是壹個文本文件，就用文件模式的文件使用方式打開，對這個文件進行讀寫就用這6個處理字符或者字符串的函數

*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.7,words:1409},y:"a",title:"對文件的輸入輸出（2）",i:"code"},["/tw/c/file-2","/tw/c/file-2.md"]],["v-5194951e","/tw/c/function-1.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 51.宏定義</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">A</span> <span class="token expression"><span class="token number">2</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">B</span> <span class="token expression">A<span class="token operator">+</span>A</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">C</span> <span class="token expression"><span class="token punctuation">(</span>A<span class="token operator">+</span>A<span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">D</span><span class="token expression"><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">*</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d,%d,%d\\n"</span><span class="token punctuation">,</span>A<span class="token punctuation">,</span>B<span class="token operator">*</span>B<span class="token punctuation">,</span>C<span class="token operator">*</span>C<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d\\n"</span><span class="token punctuation">,</span><span class="token function">D</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.55,words:465},y:"a",title:"函數（1）",i:"code"},["/tw/c/function-1","/tw/c/function-1.md"]],["v-53496dbd","/tw/c/function-2.html",{d:"2022-07-30T15:41:26.000Z",l:"2022年7月30日",e:`<h2> 57.extern用法(1)</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">extern</span> <span class="token keyword">int</span> A<span class="token punctuation">;</span>         <span class="token comment">//extern可以在文件內擴展壹個全局變量的作用域，extern只能修飾全局變量</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d\\n"</span><span class="token punctuation">,</span>A<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> A <span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.46,words:1039},y:"a",title:"函數（2）",i:"code"},["/tw/c/function-2","/tw/c/function-2.md"]],["v-18420c06","/tw/c/order-1.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 18.1轉義字符</h2>
<table>
<thead>
<tr>
<th>轉義字符</th>
<th>字符值</th>
<th>輸出結果</th>
<th>轉義字符</th>
<th>字符值</th>
<th>輸出結果</th>
</tr>
</thead>
<tbody>
<tr>
<td>\\'</td>
<td>壹個單撇號(')</td>
<td>具有此8進制的字符</td>
<td>\\"</td>
<td>壹個雙撇號(")</td>
<td>輸出此字符</td>
</tr>
<tr>
<td>?</td>
<td>壹個問號(?)</td>
<td>輸出此字符</td>
<td>\\\\</td>
<td>壹個反斜線(\\)</td>
<td>輸出此字符</td>
</tr>
<tr>
<td>\\a</td>
<td>警告</td>
<td>產生視覺或聲音信號</td>
<td>\\b</td>
<td>退格</td>
<td>將當前位置後退壹個字符</td>
</tr>
<tr>
<td><code>\\f</code></td>
<td>換頁</td>
<td>將當前位置移到下壹頁的開頭</td>
<td>\\n</td>
<td>換行</td>
<td>將當前位置移到下壹行的開頭</td>
</tr>
<tr>
<td><code>\\r</code></td>
<td>回車</td>
<td>將當前位置移到本行的開頭</td>
<td>\\t</td>
<td>水平制表符</td>
<td>將當前位置移到下壹個Tab位置</td>
</tr>
<tr>
<td>\\v</td>
<td>垂直制表符</td>
<td>將當前位置移到下壹個垂直制表對齊點</td>
<td>\\o、\\oo、\\ooo</td>
<td>ASCII碼</td>
<td></td>
</tr>
<tr>
<td>\\xh[h=……](16進制數字)</td>
<td>與該16進制碼對的ASCII字符</td>
<td>與該16進制碼對應的字符</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:5.5,words:1651},y:"a",title:"順序程序設計（1）",i:"code"},["/tw/c/order-1","/tw/c/order-1.md"]],["v-19f6e4a5","/tw/c/order-2.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 19.字符型數據</h2>
<blockquote>
<p>字符型是以整型形式(ASCII碼)存放在內存單元中。ASCII共128個字符(也就是最多可以用7位數表示)</p>
</blockquote>
<table>
<thead>
<tr>
<th>類型</th>
<th>字符值</th>
<th>取值範圍</th>
</tr>
</thead>
<tbody>
<tr>
<td>signed char</td>
<td>1</td>
<td>-128~127</td>
</tr>
<tr>
<td>unsigned char</td>
<td>1</td>
<td>0~255</td>
</tr>
</tbody>
</table>`,r:{minutes:2.55,words:765},y:"a",title:"順序程序設計（2）",i:"code"},["/tw/c/order-2","/tw/c/order-2.md"]],["v-ac3ec312","/tw/c/pointer-1.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 64.指針數組和多重指針</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//對壹個字符型數組指針數組排序</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> len<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
		<span class="token function">puts</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">*</span>a<span class="token punctuation">,</span><span class="token keyword">int</span> len<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>len<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token operator">++</span>j<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				<span class="token keyword">char</span> <span class="token operator">*</span>p<span class="token operator">=</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
				a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>a<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				a<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span>p<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> <span class="token operator">*</span>a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"haha"</span><span class="token punctuation">,</span><span class="token string">"lala"</span><span class="token punctuation">,</span><span class="token string">"hello"</span><span class="token punctuation">,</span><span class="token string">"hehe"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">show</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.25,words:376},y:"a",title:"指針（1）",i:"code"},["/tw/c/pointer-1","/tw/c/pointer-1.md"]],["v-a8d511d4","/tw/c/pointer-2.html",{d:"2022-07-31T00:00:00.000Z",l:"2022年7月31日",e:`<h2> 67.動態內存分配</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//輸入學生數，再輸入每個學生對應的姓名和成績，最後把這些信息輸出</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span>   <span class="token comment">//有nalloc calloc free exit的函數聲明</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;malloc.h&gt;</span>   <span class="token comment">//alloc calloc free</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> n<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"請輸入學生數："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//	void *malloc(unsigned int size):其功能是在堆區分配連續的size個字節的存儲空間並且返回這段存儲空間開頭的地址，如果內存分配失敗，會返回空指針</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>p1<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//強制數據類型轉換可以省略</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p1 <span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span>                                <span class="token comment">//判斷是否是空指針</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"內存分配失敗，程序退出\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//void *calloc(unsigned int n,unsigned int size);</span>
	<span class="token keyword">char</span> <span class="token punctuation">(</span><span class="token operator">*</span>p2<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token function">calloc</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p2 <span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"內存分配失敗，程序退出\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"請輸入第%d個學生的成績和姓名：\\n"</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d%s"</span><span class="token punctuation">,</span>p1<span class="token operator">+</span>i<span class="token punctuation">,</span>p2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"第%d個學生的成績為%d,姓名為%s"</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>p1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>p2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">"\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//void free(void *p);</span>
	<span class="token function">free</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>                                    <span class="token comment">//釋放動態存儲空間</span>
	<span class="token function">free</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.01,words:1502},y:"a",title:"指針（2）",i:"code"},["/tw/c/pointer-2","/tw/c/pointer-2.md"]],["v-f007d0f6","/tw/c/recycle.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> <a href="http://32.do" target="_blank" rel="noopener noreferrer">32.do</a>……while語句</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>s <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>sum <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">do</span>
	<span class="token punctuation">{</span>
		s<span class="token operator">=</span>s<span class="token operator">*</span>i<span class="token punctuation">;</span>
		sum<span class="token operator">=</span>sum<span class="token operator">+</span>s<span class="token punctuation">;</span>
		<span class="token operator">++</span>i<span class="token punctuation">;</span>                <span class="token comment">//思考i++與++i</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//思考while條件</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d\\n"</span><span class="token punctuation">,</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.01,words:303},y:"a",title:"循環結構程序",i:"code"},["/tw/c/recycle","/tw/c/recycle.md"]],["v-63b494e0","/tw/c/type.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 71.結構體的定義和初始化</h2>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
                                               <span class="token comment">//結構體定義總結：結構體標記和變量名至少有壹種，如果有變量。可以進行初始化</span>
<span class="token keyword">struct</span> <span class="token class-name">Student</span>                                 <span class="token comment">//1.定義時為結構體起壹個結構體標記名</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> age<span class="token punctuation">;</span>
	<span class="token keyword">double</span> score<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">Student2</span>                                 <span class="token comment">//2.定義時為結構體起壹個結構體標記名並定義這種數據類型的變量</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> age<span class="token punctuation">;</span>
	<span class="token keyword">double</span> score<span class="token punctuation">;</span>
<span class="token punctuation">}</span>A<span class="token punctuation">,</span><span class="token operator">*</span>p<span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">Student3</span>                                 <span class="token comment">//3.定義時為結構體起壹個結構體標記名並為變量初始化</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> age<span class="token punctuation">;</span>
	<span class="token keyword">double</span> score<span class="token punctuation">;</span>
<span class="token punctuation">}</span>A1<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"張三"</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token operator">*</span>p1<span class="token punctuation">;</span>
<span class="token keyword">struct</span>                                 <span class="token comment">//4.只定義結構體類型的變量</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> age<span class="token punctuation">;</span>
	<span class="token keyword">double</span> score<span class="token punctuation">;</span>
<span class="token punctuation">}</span>A2<span class="token punctuation">,</span><span class="token operator">*</span>p2<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>	
	<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">Student</span> a <span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"張三"</span><span class="token punctuation">,</span><span class="token number">28</span><span class="token punctuation">,</span><span class="token number">34</span><span class="token punctuation">}</span><span class="token punctuation">;</span>      <span class="token comment">//①完全初始化</span>
	<span class="token keyword">struct</span> <span class="token class-name">Student</span> b <span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"張三"</span><span class="token punctuation">,</span><span class="token number">28</span><span class="token punctuation">}</span><span class="token punctuation">;</span>          <span class="token comment">//②部分初始化</span>
	<span class="token keyword">struct</span> <span class="token class-name">Student</span> c <span class="token operator">=</span> a<span class="token punctuation">;</span>                    <span class="token comment">//③定義結構體變量時，使用其他的結構體變量完成初始化</span>
	<span class="token keyword">struct</span> <span class="token class-name">Student</span> d <span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">23</span><span class="token punctuation">}</span><span class="token punctuation">;</span>         <span class="token comment">//④c99支持這種形式在定義壹個定義壹個結構體變量時，對其某壹個成員初始化</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"學生的姓名：%s，年齡：%d,成績：%lf"</span><span class="token punctuation">,</span>c<span class="token punctuation">.</span>name<span class="token punctuation">,</span>c<span class="token punctuation">.</span>age<span class="token punctuation">,</span>c<span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">Student</span> a<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"請輸入學生的姓名、年齡和成績\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%s%d%lf"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">.</span>age<span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"學生的姓名：%s，年齡：%d,成績：%lf"</span><span class="token punctuation">,</span>a<span class="token punctuation">.</span>name<span class="token punctuation">,</span>a<span class="token punctuation">.</span>age<span class="token punctuation">,</span>a<span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>              <span class="token comment">//①可以通過 變量名.成員名的方式訪問壹個結構體變量的成員</span>
	<span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token operator">*</span>p <span class="token operator">=</span><span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"學生的姓名：%s，年齡：%d,成績：%lf"</span><span class="token punctuation">,</span>p<span class="token operator">-&gt;</span>name<span class="token punctuation">,</span>p<span class="token operator">-&gt;</span>age<span class="token punctuation">,</span>p<span class="token operator">-&gt;</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">//②可以通過 指針-&gt;成員名 的方式訪問壹個結構體變量的成員</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.31,words:1893},y:"a",title:"用戶自定義數據類型",i:"code"},["/tw/c/type","/tw/c/type.md"]],["v-b21889d8","/tw/css/animation.html",{d:"2022-08-03T00:00:00.000Z",l:"2022年8月3日",e:`<h2> 定義動畫</h2>
<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;!-- 兩種狀態動畫 --&gt;
<span class="token atrule"><span class="token rule">@keyframes</span> 動畫名稱</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token selector">to</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
&lt;!-- 多個屬性變化 --&gt;
<span class="token atrule"><span class="token rule">@keyframes</span> 動畫名稱</span> <span class="token punctuation">{</span>
	<span class="token selector">0%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token selector">10%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token selector">40%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.84,words:251},y:"a",title:"CSS3動畫",i:"css"},["/tw/css/animation","/tw/css/animation.md"]],["v-9a015ab4","/tw/css/flat-trans.html",{d:"2022-08-03T00:00:00.000Z",l:"2022年8月3日",e:`<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">改變盒子在平面內的形態</p>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/check.svg" alt="" loading="lazy">屬性名<code>transform</code>(tf)設置平面轉換</p>
</blockquote>
<h2> 位移</h2>
<h3> 語法</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translate</span><span class="token punctuation">(</span>水平移動距離<span class="token punctuation">,</span>垂直移動距離<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.9,words:270},y:"a",title:"平面轉換",i:"css"},["/tw/css/flat-trans","/tw/css/flat-trans.md"]],["v-b951f43e","/tw/css/flex.html",{d:"2022-08-06T00:00:00.000Z",l:"2022年8月6日",e:`<blockquote>
<p>父元素設置<code>display:flex</code></p>
</blockquote>
<h2> 主軸對齊</h2>
<blockquote>
<p>使用<code>justify-content</code>屬性設置主軸對齊</p>
<p>使用<code>align-content</code>設置換行後主軸對齊</p>
</blockquote>
<table>
<thead>
<tr>
<th>屬性值</th>
<th>說明</th>
</tr>
</thead>
<tbody>
<tr>
<td>flex-start</td>
<td>默認值</td>
</tr>
<tr>
<td>flex-end</td>
<td>終點開始</td>
</tr>
<tr>
<td>center</td>
<td>居中排列</td>
</tr>
<tr>
<td>space-around</td>
<td>均勻分布，空白在盒子兩側</td>
</tr>
<tr>
<td>space-between</td>
<td>均勻分布，空白在相鄰盒子兩側</td>
</tr>
<tr>
<td>space-evenly</td>
<td>彈性盒子與容器之間距離相等</td>
</tr>
</tbody>
</table>`,r:{minutes:.63,words:189},y:"a",title:"Flex布局",i:"css"},["/tw/css/flex","/tw/css/flex.md"]],["v-ec3a9a88","/tw/css/float.html",{d:"2022-08-06T00:00:00.000Z",l:"2022年8月6日",e:`<h1> 浮動</h1>
<h2> 標準流</h2>
<blockquote>
<p>又稱文檔流，是瀏覽器在渲染顯示網頁內容時默認采用的壹套排版規則，規定了以何種方式排列元素</p>
</blockquote>
<h3> 常見標準流排版規則</h3>
<p>塊級元素：從上往下、<code>垂直布局</code>、獨占壹行
行內元素或行內塊元素：從左至右、<code>水平布局</code>、空間不夠自動換行</p>
<h2> 浮動</h2>
<h3> 浮動的作用</h3>
<ul>
<li>圖文環繞(早期)</li>
<li>網頁布局(現在)</li>
</ul>
<h3> 浮動的代碼</h3>`,r:{minutes:2.72,words:816},y:"a",title:"浮動",i:"css"},["/tw/css/float","/tw/css/float.md"]],["v-116f78ac","/tw/css/intro.html",{d:"2022-08-06T00:00:00.000Z",l:"2022年8月6日",e:`<h2> CSS初识</h2>
<h3> CSS的介绍</h3>
<p>CSS(Cascading style sheets)层迭样式表，用于美化<code>HTML标签</code></p>
<h3> CSS的语法规则</h3>
<p>写在style标签中，style标签一般写在和head标签里面，title标签下面</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>美化对象<span class="token punctuation">{</span>
	属性名:属性值
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.43,words:429},y:"a",title:"基础认知",i:"css"},["/tw/css/intro","/tw/css/intro.md"]],["v-0c92a298","/tw/css/mobile.html",{d:"2022-08-03T00:00:00.000Z",l:"2022年8月3日",e:`<h2> 移動端特點</h2>
<h3> 移動端和PC端網頁不同點</h3>
<ul>
<li>PC屏幕大，網頁固定版心</li>
<li>手機屏幕小，網頁寬度多數為100%</li>
</ul>
<h3> 谷歌模擬器</h3>
<p>瀏覽器按<code>F12</code>打開調試模式，選擇手機模擬器</p>
<h3> 分辨率</h3>
<h4> 屏幕尺寸</h4>
<p>屏幕尺寸指的是<code>對角線</code>的長度，壹般用<code>英寸</code>來度量</p>
<h4> 分辨率</h4>
<ul>
<li>物理分辨率(出廠設置)</li>
<li>邏輯分辨率(軟件分辨率)</li>
</ul>`,r:{minutes:.85,words:254},y:"a",title:"移動端",i:"css"},["/tw/css/mobile","/tw/css/mobile.md"]],["v-505c0d8a","/tw/css/selector.html",{d:"2022-08-06T00:00:00.000Z",l:"2022年8月6日",e:`<h1> 選擇器</h1>
<blockquote>
<p>!important&gt;行內樣式&gt;id選擇器&gt;類選擇器&gt;標簽選擇器&gt;通配符選擇器&gt;繼承</p>
</blockquote>
<h2> 壹般選擇器</h2>
<ul>
<li>標簽</li>
<li>id</li>
<li>class</li>
<li>
<ul>
<li></li>
</ul>
</li>
</ul>
<h2> 復合選擇器</h2>
<h3> 後代選擇器</h3>
<p css="">選擇器1 選擇器2</p>
<h3> 子代選擇器</h3>
<p css="">選擇器1<kbd>&gt;</kbd>選擇器2</p>`,r:{minutes:1.36,words:407},y:"a",title:"選擇器",i:"css"},["/tw/css/selector","/tw/css/selector.md"]],["v-0b98bc52","/tw/css/space-trans.html",{d:"2022-08-03T00:00:00.000Z",l:"2022年8月3日",e:`<h2> 空間位移</h2>
<h3> 語法</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translate3d</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>
&lt;!-- 分開來寫 --&gt;
<span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translateX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translateY</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translateZ</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.64,words:191},y:"a",title:"空間轉換",i:"css"},["/tw/css/space-trans","/tw/css/space-trans.md"]],["v-9fda70c6","/tw/css/tip.html",{d:"2022-08-06T00:00:00.000Z",l:"2022年8月6日",e:`<h2> 版心居中</h2>
<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrapper</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>1200px<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span>0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.36,words:108},y:"a",title:"技巧",i:"css"},["/tw/css/tip","/tw/css/tip.md"]],["v-544b055e","/tw/html/",{d:"2020-06-10T00:00:00.000Z",l:"2020年6月10日",e:`<h1> 標籤</h1>
<h2> 標題</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>一級標題<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>二級標題<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>三級標題<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>四級標題<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">&gt;</span></span>五級標題<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">&gt;</span></span>六級標題<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.17,words:352},y:"a",title:"標籤",i:"html"},["/tw/html/index.html","/tw/html/README.md"]],["v-4ebda85f","/tw/markdown/Github-Flavored.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h1> GitHub Flavored Markdown</h1>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">部分格式参考<a href="/tw/markdown/intro.html" target="blank">Markdown基本语法</a></p>
</blockquote>
<h2> 基本格式</h2>
<h3> 指定图像显示的主题</h3>
<p>通过<code>&lt;picture&gt;</code>元素与<code>prefers-color-scheme</code>媒体功能指定深色/浅色主题，将改善透明图片背景显示效果</p>`,r:{minutes:1.71,words:513},y:"a",title:"Github Flavored Markdown",i:"markdown"},["/tw/markdown/Github-Flavored","/tw/markdown/Github-Flavored.md"]],["v-d7bdeeb8","/tw/markdown/Markdown-emoji.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/warning.svg" alt="" loading="lazy">為方便本地查看，復制網頁內容</p>
</blockquote>
<h2> People</h2>
<table>
<thead>
<tr>
<th>💭 <code>:thought_balloon:</code></th>
<th>😄 <code>:smile:</code></th>
<th>😆 <code>:laughing:</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>😊 <code>:blush:</code></td>
<td>😃 <code>:smiley:</code></td>
<td>☺️ <code>:relaxed:</code></td>
</tr>
<tr>
<td>😏 <code>:smirk:</code></td>
<td>😍 <code>:heart_eyes:</code></td>
<td>😘 <code>:kissing_heart:</code></td>
</tr>
<tr>
<td>😚 <code>:kissing_closed_eyes:</code></td>
<td>😳 <code>:flushed:</code></td>
<td>😌 <code>:relieved:</code></td>
</tr>
<tr>
<td>😆 <code>:satisfied:</code></td>
<td>😁 <code>:grin:</code></td>
<td>😉 <code>:wink:</code></td>
</tr>
<tr>
<td>😜 <code>:stuck_out_tongue_winking_eye:</code></td>
<td>😝 <code>:stuck_out_tongue_closed_eyes:</code></td>
<td>😀 <code>:grinning:</code></td>
</tr>
<tr>
<td>😗 <code>:kissing:</code></td>
<td>😙 <code>:kissing_smiling_eyes:</code></td>
<td>😛 <code>:stuck_out_tongue:</code></td>
</tr>
<tr>
<td>😴 <code>:sleeping:</code></td>
<td>😟 <code>:worried:</code></td>
<td>😦 <code>:frowning:</code></td>
</tr>
<tr>
<td>😧 <code>:anguished:</code></td>
<td>😮 <code>:open_mouth:</code></td>
<td>😬 <code>:grimacing:</code></td>
</tr>
<tr>
<td>😕 <code>:confused:</code></td>
<td>😯 <code>:hushed:</code></td>
<td>😑 <code>:expressionless:</code></td>
</tr>
<tr>
<td>😒 <code>:unamused:</code></td>
<td>😅 <code>:sweat_smile:</code></td>
<td>😓 <code>:sweat:</code></td>
</tr>
<tr>
<td>😥 <code>:disappointed_relieved:</code></td>
<td>😩 <code>:weary:</code></td>
<td>😔 <code>:pensive:</code></td>
</tr>
<tr>
<td>😞 <code>:disappointed:</code></td>
<td>😖 <code>:confounded:</code></td>
<td>😨 <code>:fearful:</code></td>
</tr>
<tr>
<td>😰 <code>:cold_sweat:</code></td>
<td>😣 <code>:persevere:</code></td>
<td>😢 <code>:cry:</code></td>
</tr>
<tr>
<td>😭 <code>:sob:</code></td>
<td>😂 <code>:joy:</code></td>
<td>😲 <code>:astonished:</code></td>
</tr>
<tr>
<td>😱 <code>:scream:</code></td>
<td>💬 <code>:speech_balloon:</code></td>
<td>😫 <code>:tired_face:</code></td>
</tr>
<tr>
<td>😠 <code>:angry:</code></td>
<td>😡 <code>:rage:</code></td>
<td>😤 <code>:triumph:</code></td>
</tr>
<tr>
<td>😪 <code>:sleepy:</code></td>
<td>😋 <code>:yum:</code></td>
<td>😷 <code>:mask:</code></td>
</tr>
<tr>
<td>😎 <code>:sunglasses:</code></td>
<td>😵 <code>:dizzy_face:</code></td>
<td>👿 <code>:imp:</code></td>
</tr>
<tr>
<td>😈 <code>:smiling_imp:</code></td>
<td>😐 <code>:neutral_face:</code></td>
<td>😶 <code>:no_mouth:</code></td>
</tr>
<tr>
<td>😇 <code>:innocent:</code></td>
<td>👽 <code>:alien:</code></td>
<td>💛 <code>:yellow_heart:</code></td>
</tr>
<tr>
<td>💙 <code>:blue_heart:</code></td>
<td>💜 <code>:purple_heart:</code></td>
<td>❤️ <code>:heart:</code></td>
</tr>
<tr>
<td>💚 <code>:green_heart:</code></td>
<td>💔 <code>:broken_heart:</code></td>
<td>💓 <code>:heartbeat:</code></td>
</tr>
<tr>
<td>💗 <code>:heartpulse:</code></td>
<td>💕 <code>:two_hearts:</code></td>
<td>💞 <code>:revolving_hearts:</code></td>
</tr>
<tr>
<td>💘 <code>:cupid:</code></td>
<td>💖 <code>:sparkling_heart:</code></td>
<td>✨ <code>:sparkles:</code></td>
</tr>
<tr>
<td>⭐ <code>:star:</code></td>
<td>🌟 <code>:star2:</code></td>
<td>💫 <code>:dizzy:</code></td>
</tr>
<tr>
<td>💥 <code>:boom:</code></td>
<td>💥 <code>:collision:</code></td>
<td>💢 <code>:anger:</code></td>
</tr>
<tr>
<td>❗ <code>:exclamation:</code></td>
<td>❓ <code>:question:</code></td>
<td>❕ <code>:grey_exclamation:</code></td>
</tr>
<tr>
<td>❔ <code>:grey_question:</code></td>
<td>💤 <code>:zzz:</code></td>
<td>💨 <code>:dash:</code></td>
</tr>
<tr>
<td>💦 <code>:sweat_drops:</code></td>
<td>🎶 <code>:notes:</code></td>
<td>🎵 <code>:musical_note:</code></td>
</tr>
<tr>
<td>🔥 <code>:fire:</code></td>
<td>💩 <code>:hankey:</code></td>
<td>💩 <code>:poop:</code></td>
</tr>
<tr>
<td>💩 <code>:shit:</code></td>
<td>👍 <code>:+1:</code></td>
<td>👍 <code>:thumbsup:</code></td>
</tr>
<tr>
<td>👎 <code>:-1:</code></td>
<td>👎 <code>:thumbsdown:</code></td>
<td>👌 <code>:ok_hand:</code></td>
</tr>
<tr>
<td>👊 <code>:punch:</code></td>
<td>👊 <code>:facepunch:</code></td>
<td>✊ <code>:fist:</code></td>
</tr>
<tr>
<td>✌️ <code>:v:</code></td>
<td>👋 <code>:wave:</code></td>
<td>✋ <code>:hand:</code></td>
</tr>
<tr>
<td>✋ <code>:raised_hand:</code></td>
<td>👐 <code>:open_hands:</code></td>
<td>☝️ <code>:point_up:</code></td>
</tr>
<tr>
<td>👇 <code>:point_down:</code></td>
<td>👈 <code>:point_left:</code></td>
<td>👉 <code>:point_right:</code></td>
</tr>
<tr>
<td>🙌 <code>:raised_hands:</code></td>
<td>🙏 <code>:pray:</code></td>
<td>👆 <code>:point_up_2:</code></td>
</tr>
<tr>
<td>👏 <code>:clap:</code></td>
<td>💪 <code>:muscle:</code></td>
<td>🤘 <code>:metal:</code></td>
</tr>
<tr>
<td>🖕 <code>:fu:</code></td>
<td>🚶 <code>:walking:</code></td>
<td>🏃 <code>:runner:</code></td>
</tr>
<tr>
<td>🏃 <code>:running:</code></td>
<td>👫 <code>:couple:</code></td>
<td>👪 <code>:family:</code></td>
</tr>
<tr>
<td>👬 <code>:two_men_holding_hands:</code></td>
<td>👭 <code>:two_women_holding_hands:</code></td>
<td>💃 <code>:dancer:</code></td>
</tr>
<tr>
<td>👯 <code>:dancers:</code></td>
<td>🙆‍♀️ <code>:ok_woman:</code></td>
<td>🙅 <code>:no_good:</code></td>
</tr>
<tr>
<td>💁 <code>:information_desk_person:</code></td>
<td>🙋 <code>:raising_hand:</code></td>
<td>👰‍♀️ <code>:bride_with_veil:</code></td>
</tr>
<tr>
<td>:person_with_pouting_face: <code>:person_with_pouting_face:</code></td>
<td>:person_frowning: <code>:person_frowning:</code></td>
<td>🙇 <code>:bow:</code></td>
</tr>
<tr>
<td>💏 <code>:couplekiss:</code></td>
<td>💑 <code>:couple_with_heart:</code></td>
<td>💆 <code>:massage:</code></td>
</tr>
<tr>
<td>💇 <code>:haircut:</code></td>
<td>💅 <code>:nail_care:</code></td>
<td>👦 <code>:boy:</code></td>
</tr>
<tr>
<td>👧 <code>:girl:</code></td>
<td>👩 <code>:woman:</code></td>
<td>👨 <code>:man:</code></td>
</tr>
<tr>
<td>👶 <code>:baby:</code></td>
<td>👵 <code>:older_woman:</code></td>
<td>👴 <code>:older_man:</code></td>
</tr>
<tr>
<td>:person_with_blond_hair: <code>:person_with_blond_hair:</code></td>
<td>👲 <code>:man_with_gua_pi_mao:</code></td>
<td>👳‍♂️ <code>:man_with_turban:</code></td>
</tr>
<tr>
<td>👷 <code>:construction_worker:</code></td>
<td>👮 <code>:cop:</code></td>
<td>👼 <code>:angel:</code></td>
</tr>
<tr>
<td>👸 <code>:princess:</code></td>
<td>😺 <code>:smiley_cat:</code></td>
<td>😸 <code>:smile_cat:</code></td>
</tr>
<tr>
<td>😻 <code>:heart_eyes_cat:</code></td>
<td>😽 <code>:kissing_cat:</code></td>
<td>😼 <code>:smirk_cat:</code></td>
</tr>
<tr>
<td>🙀 <code>:scream_cat:</code></td>
<td>😿 <code>:crying_cat_face:</code></td>
<td>😹 <code>:joy_cat:</code></td>
</tr>
<tr>
<td>😾 <code>:pouting_cat:</code></td>
<td>👹 <code>:japanese_ogre:</code></td>
<td>👺 <code>:japanese_goblin:</code></td>
</tr>
<tr>
<td>🙈 <code>:see_no_evil:</code></td>
<td>🙉 <code>:hear_no_evil:</code></td>
<td>🙊 <code>:speak_no_evil:</code></td>
</tr>
<tr>
<td>💂‍♂️ <code>:guardsman:</code></td>
<td>💀 <code>:skull:</code></td>
<td>🐾 <code>:feet:</code></td>
</tr>
<tr>
<td>👄 <code>:lips:</code></td>
<td>💋 <code>:kiss:</code></td>
<td>💧 <code>:droplet:</code></td>
</tr>
<tr>
<td>👂 <code>:ear:</code></td>
<td>👀 <code>:eyes:</code></td>
<td>👃 <code>:nose:</code></td>
</tr>
<tr>
<td>👅 <code>:tongue:</code></td>
<td>💌 <code>:love_letter:</code></td>
<td>👤 <code>:bust_in_silhouette:</code></td>
</tr>
<tr>
<td>👥 <code>:busts_in_silhouette:</code></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:3.02,words:905},y:"a",title:"Markdown表情",i:"markdown"},["/tw/markdown/Markdown-emoji","/tw/markdown/Markdown-emoji.md"]],["v-d41b788c","/tw/markdown/intro.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 標題</h2>
<table>
<caption></caption>
<thead>
    <tr><th>Atx形式</th>
    <th>Setext形式</th>
    <th>效果</th>
</tr></thead>
<tbody>
    <tr>
        <td># 標題1</td>
        <td>標題1<br>===</td>
        <td><h1>標題1</h1></td>
    </tr>
    <tr>
        <td>## 標題2</td>
        <td>標題2<br>---</td>
        <td><h2>標題2</h2></td>
    </tr>
    <tr>
        <td>### 標題3</td>
        <td>無</td>
        <td><h3>標題3</h3></td>
    </tr>
    <tr>
        <td>#### 標題4</td>
         <td>無</td>
        <td><h4>標題4</h4></td>
    </tr>
    <tr>
        <td>##### 標題5</td>
         <td>無</td>
        <td><h5>標題5</h5></td>
    </tr>
    <tr>
        <td>###### 標題6</td>
         <td>無</td>
        <td><h6>標題6</h6></td>
    </tr>
</tbody>
</table>`,r:{minutes:4.01,words:1203},y:"a",title:"基礎語法",i:"markdown"},["/tw/markdown/intro","/tw/markdown/intro.md"]],["v-397f062e","/tw/markdown/ssp-shortcut.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h1> 少數派快捷鍵</h1>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">少數派網頁端原生支持Markdown語法</p>
</blockquote>
<h2> 編輯</h2>
<table>
<thead>
<tr>
<th style="text-align:left">功能</th>
<th style="text-align:left">熱鍵</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">新段落</td>
<td style="text-align:left">Enter</td>
</tr>
<tr>
<td style="text-align:left">新行（不另起段落）</td>
<td style="text-align:left">Shift + Enter</td>
</tr>
<tr>
<td style="text-align:left">剪切</td>
<td style="text-align:left">Ctrl + X</td>
</tr>
<tr>
<td style="text-align:left">復制</td>
<td style="text-align:left">Ctrl + C</td>
</tr>
<tr>
<td style="text-align:left">粘貼</td>
<td style="text-align:left">Ctrl + V</td>
</tr>
<tr>
<td style="text-align:left">全選</td>
<td style="text-align:left">Ctrl + A</td>
</tr>
<tr>
<td style="text-align:left">跳轉到頁面頂部</td>
<td style="text-align:left">Ctrl + Home</td>
</tr>
<tr>
<td style="text-align:left">跳轉到頁面底部</td>
<td style="text-align:left">Ctrl + End</td>
</tr>
<tr>
<td style="text-align:left">查找</td>
<td style="text-align:left">Ctrl + F</td>
</tr>
<tr>
<td style="text-align:left">查找下壹個</td>
<td style="text-align:left">F3 / Enter</td>
</tr>
<tr>
<td style="text-align:left">查找上壹個</td>
<td style="text-align:left">Shift + F3 / Shift + Enter</td>
</tr>
<tr>
<td style="text-align:left">替換</td>
<td style="text-align:left">Ctrl + H</td>
</tr>
</tbody>
</table>`,r:{minutes:.54,words:161},y:"a",title:"少數派快捷鍵",i:"markdown"},["/tw/markdown/ssp-shortcut","/tw/markdown/ssp-shortcut.md"]],["v-5f165206","/tw/markdown/typora-shortcut.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 文件</h2>
<table>
<thead>
<tr>
<th style="text-align:left">功能</th>
<th style="text-align:left">熱鍵(Windows/Linux)</th>
<th>熱鍵 (macOS)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">新建文件</td>
<td style="text-align:left"><code>Ctrl</code> + <code>N</code></td>
<td>Command + N</td>
</tr>
<tr>
<td style="text-align:left">新窗口</td>
<td style="text-align:left"><code>Ctrl</code> + <code>Shift</code> + <code>N</code></td>
<td>Command +Shift + N</td>
</tr>
<tr>
<td style="text-align:left">新建選項卡</td>
<td style="text-align:left">Command + T</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">打開</td>
<td style="text-align:left"><code>Ctrl</code> + <code>O</code></td>
<td>Command + O</td>
</tr>
<tr>
<td style="text-align:left">快速打開</td>
<td style="text-align:left"><code>Ctrl</code> + <code>P</code></td>
<td>Command + Shift + O</td>
</tr>
<tr>
<td style="text-align:left">重新打開已關閉的文件</td>
<td style="text-align:left"><code>Ctrl</code> + <code>Shift</code> + <code>T</code></td>
<td>Command + Shift + T</td>
</tr>
<tr>
<td style="text-align:left">保存</td>
<td style="text-align:left"><code>Ctrl</code> + <code>S</code></td>
<td>Command + S</td>
</tr>
<tr>
<td style="text-align:left">另存為/副本</td>
<td style="text-align:left"><code>Ctrl</code> + <code>Shift</code> + <code>S</code></td>
<td>Command + Shift + S</td>
</tr>
<tr>
<td style="text-align:left">偏好</td>
<td style="text-align:left"><code>Ctrl</code> + <code>,</code></td>
<td>Command + ,</td>
</tr>
<tr>
<td style="text-align:left">關閉窗口</td>
<td style="text-align:left"><code>Ctrl</code> + <code>W</code></td>
<td>Command + W</td>
</tr>
</tbody>
</table>`,r:{minutes:2.02,words:605},y:"a",title:"Typora快捷鍵",i:"markdown"},["/tw/markdown/typora-shortcut","/tw/markdown/typora-shortcut.md"]],["v-52fd4df8","/tw/tool/",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> 編程環境</h2>
<h3> <img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/link.svg" alt="" loading="lazy">&nbsp;<a href="/tw/tool/git.html" target="blank">Git</a></h3>
<h2> 數據庫</h2>
<h3> <img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/link.svg" alt="" loading="lazy">&nbsp;<a href="./mysql">Mysql</a></h3>`,r:{minutes:.21,words:64},y:"a",title:"工具",i:"tool"},["/tw/tool/index.html","/tw/tool/README.md"]],["v-6d7e9630","/tw/tool/ffmpeg.html",{d:"2022-08-03T17:40:14.000Z",l:"2022年8月4日",e:`<h2> 合並多個文件</h2>
<h3> 新建文本文件</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>file 1.ts
file 2.ts
……
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.19,words:57},y:"a",title:"Ffmpeg",i:"video"},["/tw/tool/ffmpeg","/tw/tool/ffmpeg.md"]],["v-27dcd94b","/tw/tool/git.html",{d:"2022-08-03T00:00:00.000Z",l:"2022年8月3日",e:`<h2> 安裝</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>      		//普通用戶安裝
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>           		//root權限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.87,words:860},y:"a",title:"Git",i:"git"},["/tw/tool/git","/tw/tool/git.md"]],["v-75595410","/tw/tool/vuepress.html",{d:"2022-08-03T00:00:00.000Z",l:"2022年8月3日",e:`<blockquote>
<p>Vuepress2.X請參考<a href="https://blog.csdn.net/passwordgloo/article/details/127111857" target="_blank" rel="noopener noreferrer">Vuepress2.X从0-1保姆级入门教程</a></p>
</blockquote>
<h2> 環境</h2>

<h2> 部署</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#空項目預置環境</span>

<span class="token comment"># 確保腳本拋出遇到的錯誤</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成靜態文件</span>
<span class="token function">pnpm</span> run docs:build

<span class="token comment"># 進入生成的文件夾</span>
<span class="token builtin class-name">cd</span> dist

<span class="token comment"># 如果是發布到自定義域名</span>
<span class="token comment"># echo 'passwordgloo.xyz' &gt; CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> study

<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>

<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"0.0.0.0.0.6(alpha)"</span>
<span class="token comment"># 如果發布到 https://&lt;USERNAME&gt;.github.io</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:passwordgloo/passwordgloo.github.io.git study

<span class="token comment"># 如果發布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span>

<span class="token builtin class-name">cd</span> -

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.72,words:217},y:"a",title:"Vuepress Hope",i:"vue"},["/tw/tool/vuepress","/tw/tool/vuepress.md"]],["v-5a9cea55","/tw/ubuntu/",{y:"h",title:"Ubuntu",i:"ubuntu"},["/tw/ubuntu/index.html","/tw/ubuntu/README.md"]],["v-53522f7d","/tw/ubuntu/beautiful.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<h2> Gnome插件</h2>
<h3> 安裝Gnome管理軟件</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gnome-tweaks chrome-gnome-shell		//安裝gnome-tweaks<span class="token punctuation">(</span>中文譯名優化<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.49,words:447},y:"a",title:"Ubuntu 系统美化篇",i:"ubuntu"},["/tw/ubuntu/beautiful","/tw/ubuntu/beautiful.md"]],["v-86af121a","/tw/ubuntu/install.html",{d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",e:`<blockquote>
<p>國內訪問速度慢，<a href="https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/" target="_blank" rel="noopener noreferrer">切換清華源</a>加速軟件更新安裝</p>
</blockquote>
<h2> 輸入法</h2>
<h3> Fcitx5</h3>
<h4> 安裝</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> fcitx5 fcitx5-*
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> fcitx5 fcitx5-frontend-qt5 fcitx5-frontend-gtk3 fcitx5-frontend-gtk2 fcitx5-chinese-addons             //簡化版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.49,words:746},y:"a",title:"Ubuntu 装机必备篇",i:"ubuntu"},["/tw/ubuntu/install","/tw/ubuntu/install.md"]],["v-43bcfb4c","/tw/ubuntu/lamp.html",{d:"2022-07-30T16:22:42.000Z",l:"2022年7月31日",e:`<h2> 安裝</h2>
<h3> 更新Ubnutu服務器</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.95,words:284},y:"a",title:"Ubuntu Lamp环境",i:"ubuntu"},["/tw/ubuntu/lamp","/tw/ubuntu/lamp.md"]],["v-bfedf586","/tw/ubuntu/skill.html",{d:"2022-07-30T16:27:03.000Z",l:"2022年7月31日",e:`<h2> 雙系統時間不壹致</h2>
<h3> 方法1</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>timedatectl set-local-rtc <span class="token number">1</span>     //Ubuntu設置硬件時鐘為本地時間，windows需要手動同步時間
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.36,words:108},y:"a",title:"Ubuntu 實用技巧篇"},["/tw/ubuntu/skill","/tw/ubuntu/skill.md"]],["v-865edad6","/tw/ubuntu/system.html",{d:"2022-07-30T16:28:27.000Z",l:"2022年7月31日",e:`<h2> 賬戶管理</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span>	   //壹般用戶,有時需要用戶自己的密碼
<span class="token function">su</span>         //切換root用戶權限，輸入後需要rootpassword確認
<span class="token function">sudo</span> <span class="token function">su</span>    //臨時申請root權限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.12,words:636},y:"a",title:"Ubuntu 系統管理篇"},["/tw/ubuntu/system","/tw/ubuntu/system.md"]],["v-24c6867e","/tw/tool/mysql/intro.html",{d:"2022-08-03T00:00:00.000Z",l:"2022年8月3日",e:`<h2> 數據庫</h2>
<h3> 查看數據庫</h3>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show databases;    //查看數據庫
use test;  //打開test數據庫
select database(); //查看目前在哪個數據庫裏
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.66,words:199},y:"a",title:"基本操作",i:"mysql"},["/tw/tool/mysql/intro","/tw/tool/mysql/intro.md"]],["v-39a6c9b9","/tw/tool/mysql/skill.html",{d:"2022-08-03T00:00:00.000Z",l:"2022年8月3日",e:`<h2> 編碼方式</h2>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SHOW VARIABLES LIKE '%char%';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2> 函數</h2>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select version； //查看mysql版本
select 10+20；
select 98%3;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.46,words:138},y:"a",title:"技巧",i:"mysql"},["/tw/tool/mysql/skill","/tw/tool/mysql/skill.md"]],["v-3706649a","/404.html",{y:"p",title:""},["/404"]],["v-5bc93818","/category/",{y:"p",title:"分类"},["/category/index.html"]],["v-744d024e","/tag/",{y:"p",title:"标签"},["/tag/index.html"]],["v-e52c881c","/article/",{y:"p",title:"文章"},["/article/index.html"]],["v-154dc4c4","/star/",{y:"p",title:"收藏"},["/star/index.html"]],["v-01560935","/timeline/",{y:"p",title:"时间轴"},["/timeline/index.html"]],["v-0d5ff3de","/tw/category/",{y:"p",title:"分類"},["/tw/category/index.html"]],["v-59aac9c2","/tag/%E5%AD%A6%E7%94%9F%E7%9A%84%E5%BF%83%E7%90%86%E5%8F%91%E5%B1%95/",{y:"p",title:"学生的心理发展 标签"},["/tag/学生的心理发展/","/tag/%E5%AD%A6%E7%94%9F%E7%9A%84%E5%BF%83%E7%90%86%E5%8F%91%E5%B1%95/index.html"]],["v-27c96f6c","/tw/article/",{y:"p",title:"文章"},["/tw/article/index.html"]],["v-531558ec","/tw/star/",{y:"p",title:"收藏"},["/tw/star/index.html"]],["v-9a26760a","/tw/timeline/",{y:"p",title:"時間軸"},["/tw/timeline/index.html"]],["v-a021e0fa","/tag/%E8%87%AA%E6%88%91%E8%B0%83%E8%8A%82%E5%AD%A6%E4%B9%A0/",{y:"p",title:"自我调节学习 标签"},["/tag/自我调节学习/","/tag/%E8%87%AA%E6%88%91%E8%B0%83%E8%8A%82%E5%AD%A6%E4%B9%A0/index.html"]],["v-7682606a","/tag/%E5%AD%A6%E4%B9%A0%E5%BF%83%E7%90%86/",{y:"p",title:"学习心理 标签"},["/tag/学习心理/","/tag/%E5%AD%A6%E4%B9%A0%E5%BF%83%E7%90%86/index.html"]],["v-613077fc","/tag/%E5%AD%A6%E7%94%9F%E7%9A%84%E4%B8%AA%E4%BD%93%E5%B7%AE%E5%BC%82/",{y:"p",title:"学生的个体差异 标签"},["/tag/学生的个体差异/","/tag/%E5%AD%A6%E7%94%9F%E7%9A%84%E4%B8%AA%E4%BD%93%E5%B7%AE%E5%BC%82/index.html"]],["v-788a823d","/tag/%E8%A1%8C%E4%B8%BA%E4%B8%BB%E4%B9%89%E5%AD%A6%E4%B9%A0%E7%90%86%E8%AE%BA/",{y:"p",title:"行为主义学习理论 标签"},["/tag/行为主义学习理论/","/tag/%E8%A1%8C%E4%B8%BA%E4%B8%BB%E4%B9%89%E5%AD%A6%E4%B9%A0%E7%90%86%E8%AE%BA/index.html"]],["v-996b3820","/tag/%E8%AE%A4%E7%9F%A5%E5%AD%A6%E4%B9%A0%E7%90%86%E8%AE%BA/",{y:"p",title:"认知学习理论 标签"},["/tag/认知学习理论/","/tag/%E8%AE%A4%E7%9F%A5%E5%AD%A6%E4%B9%A0%E7%90%86%E8%AE%BA/index.html"]],["v-1be2aa56","/tag/%E5%BB%BA%E6%9E%84%E4%B8%BB%E4%B9%89%E5%AD%A6%E4%B9%A0%E7%90%86%E8%AE%BA/",{y:"p",title:"建构主义学习理论 标签"},["/tag/建构主义学习理论/","/tag/%E5%BB%BA%E6%9E%84%E4%B8%BB%E4%B9%89%E5%AD%A6%E4%B9%A0%E7%90%86%E8%AE%BA/index.html"]],["v-7033ce02","/tag/%E4%BA%BA%E6%9C%AC%E4%B8%BB%E4%B9%89%E5%AD%A6%E4%B9%A0%E7%90%86%E8%AE%BA%E5%8F%8A%E5%BA%94%E7%94%A8/",{y:"p",title:"人本主义学习理论及应用 标签"},["/tag/人本主义学习理论及应用/","/tag/%E4%BA%BA%E6%9C%AC%E4%B8%BB%E4%B9%89%E5%AD%A6%E4%B9%A0%E7%90%86%E8%AE%BA%E5%8F%8A%E5%BA%94%E7%94%A8/index.html"]],["v-517c5074","/tag/%E5%AD%A6%E4%B9%A0%E5%8A%A8%E6%9C%BA/",{y:"p",title:"学习动机 标签"},["/tag/学习动机/","/tag/%E5%AD%A6%E4%B9%A0%E5%8A%A8%E6%9C%BA/index.html"]],["v-e7c94808","/tag/%E7%9F%A5%E8%AF%86%E5%BB%BA%E6%9E%84/",{y:"p",title:"知识建构 标签"},["/tag/知识建构/","/tag/%E7%9F%A5%E8%AF%86%E5%BB%BA%E6%9E%84/index.html"]],["v-475098ce","/tag/%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E4%B8%8E%E5%88%9B%E9%80%A0%E6%80%A7/",{y:"p",title:"问题解决与创造性 标签"},["/tag/问题解决与创造性/","/tag/%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E4%B8%8E%E5%88%9B%E9%80%A0%E6%80%A7/index.html"]],["v-303582c8","/tw/tag/",{y:"p",title:"標籤"},["/tw/tag/index.html"]]];var Vuepress=defineComponent({name:"Vuepress",setup(){const u=usePageLayout();return()=>h$4(u.value)}}),createRoutes=()=>pagesRoutes.reduce((u,[m,b,T,$])=>(u.push({name:m,path:b,component:Vuepress,meta:T},...$.map(j=>({path:j,redirect:b}))),u),[{name:"404",path:"/:catchAll(.*)",component:Vuepress}]),historyCreator=createWebHistory,createVueRouter=()=>{const u=createRouter({history:historyCreator(removeEndingSlash("/")),routes:createRoutes(),scrollBehavior:(m,b,T)=>T||(m.hash?{el:m.hash}:{top:0})});return u.beforeResolve(async(m,b)=>{var T;(m.path!==b.path||b===START_LOCATION_NORMALIZED)&&([pageData.value]=await Promise.all([resolvers.resolvePageData(m.name),(T=pagesComponents[m.name])==null?void 0:T.__asyncLoader()]))}),u},setupGlobalComponents=u=>{u.component("ClientOnly",ClientOnly),u.component("Content",Content)},setupGlobalComputed=(u,m,b)=>{const T=computed(()=>resolvers.resolveLayouts(b)),$=computed(()=>resolvers.resolveRouteLocale(siteData.value.locales,m.currentRoute.value.path)),j=computed(()=>resolvers.resolveSiteLocaleData(siteData.value,$.value)),Z=computed(()=>resolvers.resolvePageFrontmatter(pageData.value)),W=computed(()=>resolvers.resolvePageHeadTitle(pageData.value,j.value)),U=computed(()=>resolvers.resolvePageHead(W.value,Z.value,j.value)),Y=computed(()=>resolvers.resolvePageLang(pageData.value)),nn=computed(()=>resolvers.resolvePageLayout(pageData.value,T.value));return u.provide(layoutsSymbol,T),u.provide(pageFrontmatterSymbol,Z),u.provide(pageHeadTitleSymbol,W),u.provide(pageHeadSymbol,U),u.provide(pageLangSymbol,Y),u.provide(pageLayoutSymbol,nn),u.provide(routeLocaleSymbol,$),u.provide(siteLocaleDataSymbol,j),Object.defineProperties(u.config.globalProperties,{$frontmatter:{get:()=>Z.value},$head:{get:()=>U.value},$headTitle:{get:()=>W.value},$lang:{get:()=>Y.value},$page:{get:()=>pageData.value},$routeLocale:{get:()=>$.value},$site:{get:()=>siteData.value},$siteLocale:{get:()=>j.value},$withBase:{get:()=>withBase}}),{layouts:T,pageData,pageFrontmatter:Z,pageHead:U,pageHeadTitle:W,pageLang:Y,pageLayout:nn,routeLocale:$,siteData,siteLocaleData:j}},setupUpdateHead=()=>{const u=useRoute(),m=usePageHead(),b=usePageLang(),T=ref([]),$=()=>{m.value.forEach(Z=>{const W=queryHeadTag(Z);W&&T.value.push(W)})},j=()=>{document.documentElement.lang=b.value,T.value.forEach(Z=>{Z.parentNode===document.head&&document.head.removeChild(Z)}),T.value.splice(0,T.value.length),m.value.forEach(Z=>{const W=createHeadTag(Z);W!==null&&(document.head.appendChild(W),T.value.push(W))})};provide(updateHeadSymbol,j),onMounted(()=>{$(),j(),watch(()=>u.path,()=>j())})},queryHeadTag=([u,m,b=""])=>{const T=Object.entries(m).map(([W,U])=>isString$1(U)?`[${W}=${JSON.stringify(U)}]`:U===!0?`[${W}]`:"").join(""),$=`head > ${u}${T}`;return Array.from(document.querySelectorAll($)).find(W=>W.innerText===b)||null},createHeadTag=([u,m,b])=>{if(!isString$1(u))return null;const T=document.createElement(u);return isPlainObject(m)&&Object.entries(m).forEach(([$,j])=>{isString$1(j)?T.setAttribute($,j):j===!0&&T.setAttribute($,"")}),isString$1(b)&&T.appendChild(document.createTextNode(b)),T},appCreator=createSSRApp,createVueApp=async()=>{var b;const u=appCreator({name:"VuepressApp",setup(){var T;setupUpdateHead();for(const $ of clientConfigs)(T=$.setup)==null||T.call($);return()=>[h$4(RouterView),...clientConfigs.flatMap(({rootComponents:$=[]})=>$.map(j=>h$4(j)))]}}),m=createVueRouter();setupGlobalComponents(u),setupGlobalComputed(u,m,clientConfigs);for(const T of clientConfigs)await((b=T.enhance)==null?void 0:b.call(T,{app:u,router:m,siteData}));return u.use(m),{app:u,router:m}};createVueApp().then(({app:u,router:m})=>{m.isReady().then(()=>{u.mount("#app")})});export{K,__vitePreload as _,createVueApp,st as s};
