import{A as c,C as r,o as p,e as i,s as _,v as d,f as l}from"./vendor.b99b632f.js";import{_ as u}from"./index.8bb5b140.js";const m=o=>(_("data-v-07cb6596"),o=o(),d(),o),v={class:"map__x"},w=m(()=>l("div",{id:"container"},null,-1)),B=[w],M={setup(o){const a=c();function n(){const e=new BMapGL.Map("container"),t=new BMapGL.Point(113.942651,22.53945);e.centerAndZoom(t,12),e.enableScrollWheelZoom(!0);const s=new BMapGL.Polygon([new BMapGL.Point(113.942651,22.53945),new BMapGL.Point(113.862651,22.42945),new BMapGL.Point(113.82651,22.43945),new BMapGL.Point(113.80651,22.53945)],{strokeColor:"#e84a5f",strokeWeight:10,strokeOpacity:.5,fillColor:"#10ddc2"});e.addOverlay(s)}return r(()=>{n(),a.commit("setComponentPath","src/views/BaiduMap/Basic/pages/Layer/DrawPolygon.vue")}),(e,t)=>(p(),i("div",v,B))}};var P=u(M,[["__scopeId","data-v-07cb6596"]]);export{P as default};
