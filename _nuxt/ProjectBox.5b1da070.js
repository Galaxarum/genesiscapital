import{_ as i}from"./nuxt-link.7c0071c1.js";import{_ as d,o as t,f as o,a as r,t as n,F as p,h as u,b as l,w as h,p as y,j as f}from"./entry.8ddfe90b.js";const m={props:{title:{type:String,required:!0},projects:{type:Array,required:!0},hasProjects:{type:Boolean,required:!0}}},x=e=>(y("data-v-13fad1b8"),e=e(),f(),e),j={class:"project-box"},k={key:1},v=x(()=>r("p",null,"This employee is not currently working on a project.",-1)),b=[v];function g(e,B,s,S,w,I){const a=i;return t(),o("div",j,[r("h2",null,n(s.title),1),s.hasProjects?(t(!0),o(p,{key:0},u(s.projects,(_,c)=>(t(),o("div",{key:c},[l(a,{to:"/projects/"+_.id},{default:h(()=>[r("p",null,n(_.title),1)]),_:2},1032,["to"])]))),128)):(t(),o("div",k,b))])}const P=d(m,[["render",g],["__scopeId","data-v-13fad1b8"]]);export{P as _};
