(this["webpackJsonprecipe-finder"]=this["webpackJsonprecipe-finder"]||[]).push([[0],{10:function(e,c,n){},12:function(e,c,n){"use strict";n.r(c);var t=n(1),r=n.n(t),i=n(4),a=n.n(i),s=(n(9),n(3)),o=(n(10),n(0));var j=function(){var e=Object(t.useState)([]),c=Object(s.a)(e,2),n=c[0],r=c[1],i=Object(t.useState)(!1),a=Object(s.a)(i,2),j=a[0],u=a[1],d=Object(t.useRef)(null),l=function(e){u(!0);var c="search?q=".concat(e,"&app_id=").concat("40fc4687","&app_key=").concat("7714138714b74de48a0e40101285c424");fetch(c,{mode:"no-cors"}).then((function(e){return e.json()})).then((function(e){r(e.hits),u(!1)})).catch((function(e){console.log("error",e),u(!1)}))};return Object(t.useEffect)((function(){l("chicken")}),[]),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsxs)("div",{className:"InputWrapper",children:[Object(o.jsx)("input",{ref:d,placeholder:"Search for recipe"}),Object(o.jsx)("button",{onClick:function(){l(d.current.value),d.current.value=""},children:"Search"})]}),j&&Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)("div",{className:"Wrapper",children:n.map((function(e){var c=e.recipe,n=c.label,t=c.image,r=c.ingredientLines;return Object(o.jsxs)("div",{className:"Ingredient",children:[Object(o.jsx)("span",{children:n}),Object(o.jsx)("img",{src:t}),Object(o.jsx)("div",{className:"Steps",children:r.map((function(e,c){return Object(o.jsx)("p",{children:e},c)}))})]},n)}))})]})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(c){var n=c.getCLS,t=c.getFID,r=c.getFCP,i=c.getLCP,a=c.getTTFB;n(e),t(e),r(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),u()},9:function(e,c,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.6c964b45.chunk.js.map