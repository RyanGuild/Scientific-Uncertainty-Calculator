(this["webpackJsonpuncert-calc"]=this["webpackJsonpuncert-calc"]||[]).push([[0],{47:function(e,a,t){e.exports=t(57)},56:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),c=t.n(l),u=t(14),o=t(11),i=t(96),s=t(97),b=t(95),m=t(93),d=t(94);var f=function(){var e,a,t=Object(n.useState)([]),l=Object(o.a)(t,2),c=l[0],f=l[1],v=Object(n.useState)(!0),E=Object(o.a)(v,2),j=E[0],h=E[1],O=Object(n.useState)(!0),g=Object(o.a)(O,2),p=g[0],y=g[1],x=Object(n.useState)(!0),S=Object(o.a)(x,2),V=S[0],N=S[1],C=Object(n.useState)("x"),F=Object(o.a)(C,2),T=F[0],k=F[1],w=Object(n.useState)(0),R=Object(o.a)(w,2),U=R[0],M=R[1],A=Object(n.useState)(.01),D=Object(o.a)(A,2),J=D[0],q=D[1],B=Object(n.useState)(!0),I=Object(o.a)(B,2),W=I[0],z=I[1],G=Object(n.useState)(d.b("x^2")),H=Object(o.a)(G,2),K=H[0],L=H[1],P=Object(n.useState)(),Q=Object(o.a)(P,2),X=Q[0],Y=Q[1],Z=function(e){var a={};return e.forEach((function(e){var t=Object(o.a)(e,3),n=t[0],r=(t[1],t[2]);a[n]=r})),a};try{e=null===K||void 0===K?void 0:K.evaluate(Z(c))}catch($){e="Error"}try{a=null===X||void 0===X?void 0:X.evaluate(Z(c))}catch(_){a="Error"}return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Mesurable Uncertainty Calculator"),r.a.createElement("form",null,r.a.createElement("h2",null,"Mesurables"),r.a.createElement(b.a,{error:!j,id:"standard-basic",label:"Variable Symbol",defaultValue:"x",style:{marginRight:"10px"},onChange:function(e){var a=c.find((function(a){return Object(o.a)(a,1)[0]===e.currentTarget.value}));1!==e.currentTarget.value.length||a?h(!1):(h(!0),k(e.currentTarget.value))}}),r.a.createElement(b.a,{error:!p,id:"standard-basic",label:"Variable Value",defaultValue:"0",style:{marginRight:"10px"},onChange:function(e){var a=Number.parseFloat(e.currentTarget.value);Number.isNaN(a)?y(!1):(y(!0),M(a))}}),r.a.createElement(b.a,{error:!V,id:"standard-basic",label:r.a.createElement(r.a.Fragment,null,"Variable \u03b4"),defaultValue:"0.01",onChange:function(e){var a=Number.parseFloat(e.currentTarget.value);Number.isNaN(a)?N(!1):(N(!0),q(a))}}),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(e){var a=c.find((function(e){return Object(o.a)(e,1)[0]===T}));p&&j&&V&&!a&&(f([].concat(Object(u.a)(c),[[T,J,U]])),h(!1))}},"Add Variable"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"}},c.map((function(e,a){var t,n=Object(o.a)(e,3),l=n[0],u=n[1],b=n[2];return r.a.createElement(i.a,{key:a,color:"primary",label:r.a.createElement(r.a.Fragment,null,"value = ",b,"; \u03b4 = ",u),onDelete:(t=a,function(e){Y(void 0),f(c.filter((function(e,a){return a!==t})))}),avatar:r.a.createElement(s.a,null,l),style:{marginRight:"2px"}})})))),r.a.createElement("form",null,r.a.createElement("h2",null,"Function"),r.a.createElement(b.a,{error:!W,id:"standard-basic",label:"Function Expression",defaultValue:"x^2",onChange:function(e){try{var a=d.b(e.currentTarget.value);z(!0),L(a)}catch(t){console.error(t),L(void 0),z(!1)}}}),r.a.createElement("br",null),r.a.createElement("small",null,"uses the math.js"," ",r.a.createElement("a",{href:"https://mathjs.org/docs/expressions/syntax.html"},"syntax"))),r.a.createElement("br",null),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(e){if(K)if(0===c.length)Y(d.b("0"));else if(c.length<=1){var a=c[0][0],t=d.b("".concat(c[0][1]," * ").concat(d.a(K,a).toString()));Y(t)}else{var n=c.map((function(e){var a=Object(o.a)(e,2),t=a[0],n=a[1];return"(".concat(n," * ").concat(d.a(K,t).toString(),")^2")})).join(" + ");Y(d.b("sqrt(".concat(n,")")))}else Y(void 0)}},"Evaluate Uncertainty"),r.a.createElement("br",null),X?r.a.createElement("h3",null,"Uncertainty Function:"," ","f(".concat(c.map((function(e){var a=Object(o.a)(e,2),t=a[0];a[1];return t})).join(","),") = "),X.toString()):null,X&&K?r.a.createElement("h3",null,"Value: ",e):null,X?r.a.createElement("h3",null,"Uncertainty: ",a):null,X&&K?r.a.createElement("h3",null,"Result: ",e,"\xb1",a):null)};t(56);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.1cf35b57.chunk.js.map