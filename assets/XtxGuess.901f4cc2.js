import{d as s,a5 as a,m as e,B as l,o as t,j as u,a as i,b as r,w as c,e as o,F as d,r as n,c as p,t as _,f as g,h as m,i as f,k as v}from"./index-1160dd25.js";import{h as x}from"./index.e06187da.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";const h=k(s({__name:"XtxGuess",setup(s,{expose:k}){a((()=>{w()}));const h={page:1,pageSize:10},j=e([]),G=e(!1),w=async()=>{if(G.value)return l({icon:"none",title:"没有更多数据了"});const s=await x.getGuessLike(h);j.value.push(...s.result.items),s.result.pages>h.page?h.page++:G.value=!0};return k({resetData:()=>{j.value=[],h.page=1,G.value=!1},getGuessLike:w}),(s,a)=>{const e=g,l=m,x=f,k=v;return t(),u(d,null,[i(" 猜你喜欢 "),r(l,{class:"caption"},{default:c((()=>[r(e,{class:"text"},{default:c((()=>[o("猜你喜欢")])),_:1})])),_:1}),r(l,{class:"guess"},{default:c((()=>[(t(!0),u(d,null,n(j.value,(s=>(t(),p(k,{class:"guess-item",key:s.id,url:`/pages/goods/goods?id=${s.id}`},{default:c((()=>[r(x,{class:"image",mode:"aspectFill",src:s.picture},null,8,["src"]),r(l,{class:"name"},{default:c((()=>[o(_(s.name),1)])),_:2},1024),r(l,{class:"price"},{default:c((()=>[r(e,{class:"small"},{default:c((()=>[o("¥")])),_:1}),r(e,null,{default:c((()=>[o(_(s.price),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["url"])))),128))])),_:1}),r(l,{class:"loading-text"},{default:c((()=>[o(_(G.value?"没有更多数据了":"正在加载..."),1)])),_:1})],64)}}}),[["__scopeId","data-v-0d5297d8"]]);export{h as _};
