import{A as I,b as A,C as b,o as N,e as M,J as k,O as S,f as p,F as T,s as V,v as Q}from"./vendor.b99b632f.js";import{T as y}from"./TileImage.0ebee0ae.js";import{T as w}from"./TileJSON.ffbcb6a3.js";import{bc as h,M as E,V as j}from"./ol.bb58850a.js";import{a as D,b as d,I as L,S as O,L as R}from"./Vector.c1a6c122.js";import{O as W}from"./Overlay.1f873668.js";import{_ as Y}from"./index.8bb5b140.js";import"./net.a0d7cd86.js";var C="data:image/png;base64,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";const P=a=>(V("data-v-119ab039"),a=a(),Q(),a),F=P(()=>p("div",{id:"map",class:"map__x"},null,-1)),x={setup(a){const u=I(),s=A(null),m=new y({source:new w({url:"https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q",crossOrigin:""})});let n=new D({geometry:new h([0,0]),name:"\u4F60\u70B9\u6211\u4E86",population:4e3,rainfall:500}),U=new d({image:new L({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",src:C})});n.setStyle(U);let g=new O({features:[n]}),f=new R({source:g});const t=A(!1),c=A(null),l=A(null);function v(){s.value=new E({target:"map",layers:[m,f],view:new j({center:[0,0],zoom:3})}),s.value.on("singleclick",i=>{let r=c.value;l.value=new W({element:r,positioning:"bottom-center",stopEvent:!1,offset:[0,-50]}),s.value.addOverlay(l.value);let e=s.value.forEachFeatureAtPixel(i.pixel,o=>o);if(e){t.value=!0,r.innerHTML=e.values_.name;let o=e.getGeometry().getCoordinates();setTimeout(()=>{l.value.setPosition(o)},0)}else t.value=!1})}return b(()=>{u.commit("setComponentPath","src/views/OpenLayers/Basic/pages/SimplenessLabel/SimplenessLabel.vue"),v()}),(i,r)=>(N(),M(T,null,[F,k(p("div",{ref:(e,o)=>{o.popupCom=e,c.value=e},class:"popup"},null,512),[[S,t.value]])],64))}};var G=Y(x,[["__scopeId","data-v-119ab039"]]);export{G as default};
