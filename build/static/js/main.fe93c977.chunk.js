(this["webpackJsonpdirectory-search"]=this["webpackJsonpdirectory-search"]||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var s=c(2),r=c(12),a=c.n(r),n=c(13),l=c(14),i=c(15),h=c(18),o=c(17),d=(c(23),c(0));var j=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("table",{className:"table table-bordered table-striped",children:[Object(d.jsx)("thead",{className:"thead-dark",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col justify-content-center",children:"Employee"}),Object(d.jsx)("th",{scope:"col",children:"Name"}),Object(d.jsx)("th",{scope:"col",children:"Email"}),Object(d.jsx)("th",{scope:"col",children:"Phone"}),Object(d.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(d.jsx)("tbody",{children:e.results.map((function(t){return e.searchValue.length&&t.name.first.toLowerCase().includes(e.searchValue.toLowerCase())||e.searchValue.length&&t.name.last.toLowerCase().includes(e.searchValue.toLowerCase())||e.searchValue.length&&t.email.toLowerCase().includes(e.searchValue.toLowerCase())||e.searchValue.length&&t.phone.toLowerCase().includes(e.searchValue.toLowerCase())||e.searchValue.length&&t.dob.date.toLowerCase().includes(e.searchValue.toLowerCase())?Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("img",{src:t.picture.medium,alt:"employee image"})}),Object(d.jsxs)("td",{children:[t.name.first," ",t.name.last]}),Object(d.jsx)("td",{children:t.email}),Object(d.jsx)("td",{children:t.phone.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3")}),Object(d.jsx)("td",{children:t.dob.date.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/,"$2-$3-$1")})]},t.login.uuid):e.searchValue.length?null:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("img",{src:t.picture.thumbnail,alt:"employee image"})}),Object(d.jsxs)("td",{children:[t.name.first," ",t.name.last]}),Object(d.jsx)("td",{children:t.email}),Object(d.jsx)("td",{children:t.phone}),Object(d.jsx)("td",{children:t.dob.date.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/,"$2-$3-$1")})]},t.login.uuid)}))})]})})};c(25);var u=function(e){return Object(d.jsx)("div",{className:"wrap",children:Object(d.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(d.jsx)("form",{children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Search for Employee "}),Object(d.jsx)("input",{className:"form-control-lg",onChange:e.handleInputChange,value:e.search,name:"search",type:"text",id:"search"})]})})})})},b=c(16),m=c.n(b),O=function(){return m.a.get("https://randomuser.me/api/?results=20")},p=function(e){Object(h.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(l.a)(this,c);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={search:"",results:[]},e.searchEmp=function(){O().then((function(t){return e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var c=t.target.name,s=t.target.value;e.setState(Object(n.a)({},c,s))},e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){this.searchEmp()}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(u,{handleInputChange:this.handleInputChange}),Object(d.jsx)(j,{results:this.state.results,searchValue:this.state.search})]})}}]),c}(s.Component);var x=function(){return Object(d.jsx)(p,{})};c(44);a.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.fe93c977.chunk.js.map