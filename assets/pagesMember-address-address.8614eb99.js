import{d as s,m as a,z as e,o as t,c as l,w as d,a as c,b as r,j as o,r as n,F as i,e as u,h as f,k as m,q as _,s as p,v,t as k,M as g,E as h,B as w,G as b,f as j,D as y}from"./index-1160dd25.js";import{_ as C,a as x}from"./uni-swipe-action.c8d63658.js";import{u as A}from"./index.bc1a2cbc.js";import{U as D}from"./address.b1290e47.js";import{_ as M}from"./_plugin-vue_export-helper.1b428a4d.js";import"./http.22d6ec59.js";const q=M(s({__name:"address",setup(s){const M=a([]),q=async()=>{const s=await A.getAddress();M.value=s.result};e((()=>{q()}));const z=D();return(s,a)=>{const e=j,D=f,B=m,E=y,F=_(p("uni-swipe-action-item"),C),G=_(p("uni-swipe-action"),x),I=v;return t(),l(D,{class:"viewport"},{default:d((()=>[c(" 地址列表 "),r(I,{class:"scroll-view","scroll-y":""},{default:d((()=>[M.value.length>=0?(t(),l(D,{key:0,class:"address"},{default:d((()=>[r(G,{class:"address-list"},{default:d((()=>[c(" 收货地址项 "),(t(!0),o(i,null,n(M.value,(s=>(t(),l(F,{class:"item",key:s.id},{right:d((()=>[r(E,{onClick:a=>{return e=s.id,void h({content:"确定要删除吗？",success:async s=>{s.confirm?(await A.DelAddress(e),q(),w({title:"删除成功",icon:"none"})):s.cancel}});var e},class:"delete-button"},{default:d((()=>[u("删除")])),_:2},1032,["onClick"])])),default:d((()=>[r(D,{class:"item-content",onClick:a=>(s=>{z.changeSelectedAddress(s),b()})(s)},{default:d((()=>[r(D,{class:"user"},{default:d((()=>[u(k(s.receiver)+" ",1),r(e,{class:"contact"},{default:d((()=>[u(k(s.contact),1)])),_:2},1024),1==s.isDefault?(t(),l(e,{key:0,class:"badge"},{default:d((()=>[u("默认")])),_:1})):c("v-if",!0)])),_:2},1024),r(D,{class:"locate"},{default:d((()=>[u(k(s.fullLocation)+" "+k(s.address),1)])),_:2},1024),r(B,{onClick:a[0]||(a[0]=g((()=>{}),["stop"])),class:"edit","hover-class":"none",url:`/pagesMember/address-form/address-form?id=${s.id}`},{default:d((()=>[u(" 修改 ")])),_:2},1032,["url"])])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})])),_:1})):(t(),l(D,{key:1,class:"blank"},{default:d((()=>[u("暂无收货地址")])),_:1}))])),_:1}),c(" 添加按钮 "),r(D,{class:"add-btn"},{default:d((()=>[r(B,{"hover-class":"none",url:"/pagesMember/address-form/address-form"},{default:d((()=>[u(" 新建地址 ")])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-cacc4dc9"]]);export{q as default};
