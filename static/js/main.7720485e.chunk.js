(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(14),a(1));a(16);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode),style:{backgroundColor:"".concat(e.mode)}},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("#3FC1C9"===e.mode?"dark":"#3FC1C9")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch","aria-checked":!0,id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}var i=a(4),m=a.n(i);function u(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h1",{className:"mb-4",style:{color:"#3FC1C9"===e.mode?"black":"white"}},e.heading),l.a.createElement("div",{className:"mb-3",style:{color:"#3FC1C9"===e.mode?"black":"white"}},l.a.createElement("textarea",{className:"form-control",id:"myBox",rows:"8",placeholder:"Enter text here",value:r,onChange:function(e){o(e.target.value)}})),l.a.createElement("button",{className:"btn mx-1 my-1",style:{backgroundColor:"#3FC1C9",border:"none",color:"black"},disabled:0===r.length,onClick:function(){var t=r.toUpperCase();o(t),e.showAlert("Converted to UpperCase","success")}},"Convert to UpperCase"),l.a.createElement("button",{className:"btn mx-1 my-1",style:{backgroundColor:"#3FC1C9",border:"none",color:"black"},disabled:0===r.length,onClick:function(){var t=r.toLowerCase();o(t),e.showAlert("Converted to LowerCase","success")}},"Convert to LowerCase"),l.a.createElement("button",{className:"btn mx-1 my-1",style:{backgroundColor:"#3FC1C9",border:"none",color:"black"},disabled:0===r.length,onClick:function(){o(""),e.showAlert("Cleared Text","success")}},"Clear Text"),l.a.createElement("button",{className:"btn mx-1 my-1",style:{backgroundColor:"#3FC1C9",border:"none",color:"black"},disabled:0===r.length,onClick:function(){var t=r.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" ");o(t),e.showAlert("Capitalized","success")}},"Capitalize"),l.a.createElement("button",{className:"btn mx-1 my-1",style:{backgroundColor:"#3FC1C9",border:"none",color:"black"},disabled:0===r.length,onClick:function(){navigator.clipboard.writeText(r),e.showAlert("Copied Text","success")}},"Copy Text"),l.a.createElement("button",{className:"btn mx-1 my-1",style:{backgroundColor:"#3FC1C9",border:"none",color:"black"},disabled:0===r.length,onClick:function(){var t=r.split(/[ ]+/);o(t.join(" ")),e.showAlert("Spaces Removed","success")}},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-3",style:{color:"#3FC1C9"===e.mode?"black":"white"}},l.a.createElement("h2",null,"Your text summary"),l.a.createElement("p",null,r.split(/\s+/).filter(function(e){return 0!==e.length}).length," words"),l.a.createElement("p",null,r.length," characters"),l.a.createElement("p",null,.008*(""===r?0:r.split(" ").length)," minutes read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Nothing to preview")))}var d=function(e){return l.a.createElement("div",{style:{height:"50px"}},e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.typ," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.typ)),": ",e.alert.msg))};s.propTypes={title:m.a.string.isRequired},s.defaultProps={title:"Set title here"};var b=function(){var e=Object(n.useState)("#3FC1C9"),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),i=Object(c.a)(o,2),m=i[0],b=i[1],C=function(e,t){b({msg:e,typ:t}),setTimeout(function(){b(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtils",mode:a,toggleMode:function(){"#3FC1C9"===a?(r("dark"),document.body.style.backgroundColor="#042743",C("Dark Mode has been enabled","success")):(r("#3FC1C9"),document.body.style.backgroundColor="#F9F7F7",C("Light Mode has been enabled","success"))}}),l.a.createElement(d,{alert:m}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(u,{heading:"Try TextUtils - Word counter, Character counter, Remove extra spaces ",mode:a,showAlert:C})))},C=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,21)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null))),C()},5:function(e,t,a){e.exports=a(20)}},[[5,3,2]]]);
//# sourceMappingURL=main.7720485e.chunk.js.map