import{d as e,H as s,m as l,p as a,o as t,c as u,w as o,a as n,b as r,j as i,r as d,F as c,i as v,h as p,y,e as m,t as f,J as g,K as _,B as x,f as b,k as h,v as k}from"./index-1160dd25.js";import{h as w}from"./index.e06187da.js";import{_ as T}from"./_plugin-vue_export-helper.1b428a4d.js";import"./http.22d6ec59.js";const j=T(e({__name:"hot",props:{type:null},setup(e){const T=e,j=[{type:"1",title:"特惠推荐",url:"/hot/preference"},{type:"2",title:"爆款推荐",url:"/hot/inVogue"},{type:"3",title:"一站买全",url:"/hot/oneStop"},{type:"4",title:"新鲜好物",url:"/hot/new"}].find((e=>e.type==T.type));s({title:j.title});const I={page:30,pageSize:10},G=l(),H=l();l([]);const S=l([]),C=l(!1),z=async()=>{if(!(H.value.subTypes[G.value.index].goodsItems.pages>I.page))return C.value=!0,x({icon:"none",title:"没有更多数据了"});{C.value=!1,I.page++;const e=(await w.GetHotGood(j.url,I)).result.subTypes[G.value.index].goodsItems.items;S.value[G.value.index].goodsItems.items.push(...e)}};return a((()=>{(async()=>{var e;const s=await w.GetHotGood(j.url,I);H.value=s.result,G.value||(G.value={...null==(e=H.value)?void 0:e.subTypes[0],index:0},I.subType=G.value.id),S.value=s.result.subTypes,console.log(G.value)})()})),(e,s)=>{const l=v,a=p,x=b,w=h,T=k;return t(),u(a,{class:"viewport"},{default:o((()=>[n(" 推荐封面图 "),r(a,{class:"cover"},{default:o((()=>{var e;return[r(l,{src:null==(e=H.value)?void 0:e.bannerPicture},null,8,["src"])]})),_:1}),n(" 推荐选项 "),r(a,{class:"tabs"},{default:o((()=>{var e;return[(t(!0),i(c,null,d(null==(e=H.value)?void 0:e.subTypes,((e,s)=>(t(),u(x,{class:y(["text",{active:s==G.value.index}]),key:e.id,onClick:l=>(async(e,s)=>{G.value={...e,index:s},I.subType=G.value.id,I.page=1})(e,s)},{default:o((()=>[m(f(e.title),1)])),_:2},1032,["class","onClick"])))),128))]})),_:1}),n(" 推荐列表 "),(t(!0),i(c,null,d(S.value,((e,s)=>{var n;return g((t(),u(T,{key:e.id,onScrolltolower:z,"scroll-y":"",class:"scroll-view"},{default:o((()=>[r(a,{class:"goods"},{default:o((()=>{var e,s;return[(t(!0),i(c,null,d(null==(s=S.value[null==(e=G.value)?void 0:e.index])?void 0:s.goodsItems.items,(e=>(t(),u(w,{"hover-class":"none",class:"navigator",key:e.id,url:`/pages/goods/goods?id=${e.id}`},{default:o((()=>[r(l,{class:"thumb",src:e.picture},null,8,["src"]),r(a,{class:"name ellipsis"},{default:o((()=>[m(f(e.name),1)])),_:2},1024),r(a,{class:"price"},{default:o((()=>[r(x,{class:"symbol"},{default:o((()=>[m("¥")])),_:1}),r(x,{class:"number"},{default:o((()=>[m(f(e.price),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["url"])))),128))]})),_:2},1024),r(a,{class:"loading-text"},{default:o((()=>[m(f(C.value?"没有更多数据了":"正在加载..."),1)])),_:1})])),_:2},1024)),[[_,s==(null==(n=G.value)?void 0:n.index)]])})),128))])),_:1})}}}),[["__scopeId","data-v-dcc84717"]]);export{j as default};
