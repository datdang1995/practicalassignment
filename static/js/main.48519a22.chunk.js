(this["webpackJsonpfor-testing-purpose"]=this["webpackJsonpfor-testing-purpose"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"category":"Sporting Goods","price":"$49.99","stocked":true,"name":"Football"},{"category":"Sporting Goods","price":"$9.99","stocked":true,"name":"Baseball"},{"category":"Sporting Goods","price":"$29.99","stocked":false,"name":"Basketball"},{"category":"Electronics","price":"$99.99","stocked":true,"name":"iPod Touch"},{"category":"Electronics","price":"$399.99","stocked":false,"name":"iPhone 5"},{"category":"Electronics","price":"$199.99","stocked":true,"name":"Nexus 7"}]')},function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),l=(n(14),n(15),n(1)),i=n(2),s=n(4),u=n(3),h=n(5),p=n(8),m=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleTextChange=function(e){return n.props.onTextChange(e.target.value)},n.handleStokeChange=function(e){return n.props.onStokeChange(e.target.checked)},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.text,t=this.props.stoke;return r.a.createElement("form",null,r.a.createElement("input",{value:e,type:"text",onChange:this.handleTextChange,placeholder:"Search..."}),r.a.createElement("p",null,r.a.createElement("input",{type:"checkbox",onChange:this.handleStokeChange,checked:t,id:"filter"}),r.a.createElement("label",{htmlFor:"filter"},"Only show products in stock")))}}]),t}(a.Component);function d(e){var t=e.category;return r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"2"},t))}function g(e){var t=e.product.stocked?e.product.name:r.a.createElement("span",{style:{color:"red"}},e.product.name);return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,e.product.price))}var f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=[],t=null,n=this.props.text,a=this.props.stoke;return this.props.products.forEach((function(o){-1!==o.name.indexOf(n)&&(a&&!o.stocked||(o.category!==t&&e.push(r.a.createElement(d,{category:o.category,key:o.category})),e.push(r.a.createElement(g,{product:o,key:o.name})),t=o.category))})),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Price"))),r.a.createElement("tbody",null,e))}}]),t}(a.Component),k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleTextChange=function(e){return n.setState({filterText:e})},n.handleStokeChange=function(e){return n.setState({inStoke:e})},n.state={filterText:"",inStoke:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{text:this.state.filterText,stoke:this.state.inStoke,onTextChange:this.handleTextChange,onStokeChange:this.handleStokeChange}),r.a.createElement(f,{products:p,text:this.state.filterText,stoke:this.state.inStoke}))}}]),t}(a.Component);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.48519a22.chunk.js.map