import{A as u,b as _,C as w,o as b,e as d}from"./vendor.b99b632f.js";import{bc as e,M as f,V as y}from"./ol.bb58850a.js";import{T as v}from"./TileImage.0ebee0ae.js";import{T as M}from"./TileJSON.ffbcb6a3.js";import{a as r,b as o,I as A,S,L as j}from"./Vector.c1a6c122.js";import{_ as k}from"./index.8bb5b140.js";import"./net.a0d7cd86.js";var t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAQlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARERH///+Pj48gICDv7+/f39+fn59gYGBAQEAQEBCvr68LwgumAAAADHRSTlMA758QML+Pf29AIPArTt/eAAAAgklEQVQY023RSw7FIAgF0IJ/K9Rf97/VR15r44A7Mich4vVYMTmb97gkRY/oY9rcBgeTeYIL9jME7tQadQa0y85BtUgqjfNRE2DcV/nnugcEI5gck9irxC4JRui1fKkdokz7SWULTW+OjNx2bIxZRXVcu0hdSV1ee6ZaiF6dXrL6HT8b2gxR7DJAHAAAAABJRU5ErkJggg==";const B={id:"map",class:"map__x"},R={setup(V){const i=u();let a=new r({geometry:new e([12.5,31.9])}),s=new r({geometry:new e([-.12755,41.507222])}),n=new r({geometry:new e([-3.683333,30.4])});a.setStyle(new o({image:new A({color:"#8959A8",crossOrigin:"anonymous",src:t})})),s.setStyle(new o({image:new A({color:"#4271AE",crossOrigin:"anonymous",src:t})})),n.setStyle(new o({image:new A({color:[113,140,0],crossOrigin:"anonymous",src:t})}));let c=new S({features:[a,s,n]}),m=new j({source:c});const g=_(null);let l=new v({source:new M({url:"https://api.tiles.mapbox.com/v4/mapbox.world-light.json?secure&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q",crossOrigin:"anonymous"})});function p(){g.value=new f({target:"map",layers:[l,m],view:new y({projection:"EPSG:4326",center:[0,0],zoom:3})})}return w(()=>{i.commit("setComponentPath","src/views/OpenLayers/Basic/pages/BrightMark/BrightMark.vue"),p()}),(h,E)=>(b(),d("div",B))}};var C=k(R,[["__scopeId","data-v-30bda912"]]);export{C as default};
