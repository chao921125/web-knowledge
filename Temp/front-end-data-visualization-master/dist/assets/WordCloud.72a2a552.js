import{A as d,b as u,C as c,o as l,e as i}from"./vendor.b99b632f.js";import{i as m}from"./index.04f38bd2.js";import"./wordCloud.73465aab.js";import{_ as h}from"./index.8bb5b140.js";import"./echarts.7709889d.js";const p={setup(_){const r=d(),o=u(null);function s(){const t=m(o.value),e=[{name:"\u96F7\u7334\u554A",value:100},{name:"\u8B66\u5BDF\u53D4\u53D4",value:50},{name:"\u98DE\u5929\u8001\u9F20",value:20},{name:"\u6211\u6BCD\u9E21",value:30}];t.setOption({series:[{type:"wordCloud",data:e,textStyle:{fontFamily:"sans-serif",fontWeight:"bold",color:function(){return"rgb("+[Math.round(Math.random()*160),Math.round(Math.random()*160),Math.round(Math.random()*160)].join(",")+")"}},emphasis:{focus:"self",textStyle:{shadowBlur:10,shadowColor:"#000"}}}]})}return c(()=>{r.commit("setComponentPath","src/views/ECharts/Basic/pages/WordCloud/WordCloud.vue"),s()}),(t,e)=>(l(),i("div",{class:"chart",ref:(a,n)=>{n.chartDom=a,o.value=a}},null,512))}};var M=h(p,[["__scopeId","data-v-539a4c8b"]]);export{M as default};
