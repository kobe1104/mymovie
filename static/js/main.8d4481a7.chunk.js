(this.webpackJsonpvidly=this.webpackJsonpvidly||[]).push([[0],{25:function(e,t,a){e.exports=a(39)},30:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),o=(a(30),a(44)),i=a(24),s=a(43),u=a(20),m=a(2),d=a(6),b=a(4),h=a(3),f=[{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"}];function v(){return f.filter((function(e){return e}))}var p=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,liked:!1,publishDate:"2018-01-03T19:04:28.809Z"},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5,liked:!1}];function g(){return p}function y(e){var t=p.find((function(t){return t._id===e._id}))||{};return t.title=e.title,t.genre=f.find((function(t){return t._id===e.genreId})),t.numberInStock=e.numberInStock,t.dailyRentalRate=e.dailyRentalRate,t._id||(t._id=Date.now().toString(),p.push(t)),t}var E=a(19),k=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e="fa fa-heart";return this.props.liked||(e+="-o"),r.a.createElement("i",{className:e,style:{cursor:"pointer"},onClick:this.props.handleLike,"aria-hidden":"true"})}}]),a}(n.Component),S=a(9),C=a.n(S),O=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).renderCell=function(e,t){return t.content?t.content(e):C.a.get(e,t.path)},e.createKey=function(e,t){return e._id+(t.path||t.key)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.columns;return r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t._id},n.map((function(a){return r.a.createElement("td",{key:e.createKey(t,a)},e.renderCell(t,a))})))})))}}]),a}(n.Component),j=a(12),N=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).raiseSort=function(t){var a=Object(j.a)({},e.props.sortCol);a.path===t?a.order="asc"===a.order?"desc":"asc":(a.path=t,a.order="asc"),e.props.onSort(a)},e.getSortIcon=function(t){var a=e.props.sortCol;if(t.path!==a.path)return null;return r.a.createElement("i",{className:"fa fa-sort-"+a.order})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.columns;return r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(t){return r.a.createElement("th",{className:"clickable",key:t.path||t.key,onClick:function(){return e.raiseSort(t.path)}},t.label," ",e.getSortIcon(t))}))))}}]),a}(n.Component),I=function(e){var t=e.columns,a=e.sortCol,n=e.onSort,l=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{columns:t,onSort:n,sortCol:a}),r.a.createElement(O,{data:l,columns:t}))},R=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).columns=[{path:"title",label:"Title",content:function(e){return r.a.createElement(E.a,{to:"/movies/".concat(e._id)},e.title)}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return r.a.createElement(k,{className:"m-2",handleLike:function(){return e.props.onLike(t)},liked:t.liked})}},{key:"delete",content:function(t){return r.a.createElement("button",{onClick:function(){return e.props.onDelete(t._id)},className:"btn-danger btn-sm btn m-2"},"Delete")}}],e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.onSort,n=e.sortCol;return r.a.createElement("table",{className:"table"},r.a.createElement(I,{columns:this.columns,data:t,onSort:a,sortCol:n}))}}]),a}(n.Component),_=function(e){var t=e.itemCount,a=e.pageSize,n=e.handlePageChange,l=e.currentPage,c=Math.ceil(t/a);if(1===c)return null;var o=C.a.range(1,c+1),i=function(e){return l===e?"page-item active":"page-item"};return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},o.map((function(e){return r.a.createElement("li",{className:i(e),key:e},r.a.createElement("div",{className:"page-link",onClick:function(){return n(e)}},e))}))))},w=function(e){var t=e.value,a=e.onChange;return r.a.createElement("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search...",value:t,onChange:function(e){return a(e.currentTarget.value)}})};function P(e,t,a){var n=(t-1)*a;return C()(e).slice(n).take(a).value()}function M(e){var t=e.genres,a=e.handleItemSelect,n=e.textProp,l=e.valProp,c=e.currentGenre,o=function(e){return(c||t[0])[l]===e[l]?"list-group-item active":"list-group-item"};return r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement("li",{className:o(e),key:e[n],onClick:function(){return a(e)}},e[n])})))}M.defaultProps={textProp:"name",valProp:"_id"};var G=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={allMovies:[],allGenres:[],searchQuery:"",pageSize:4,currentPage:1,sortCol:{path:"title",order:"asc"}},e.handleItemSelect=function(t){e.setState({currentGenre:t,searchQuery:"",currentPage:1})},e.handleSearch=function(t){e.setState({searchQuery:t,currentGenre:null,currentPage:1})},e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleRemove=function(t){var a=e.state.allMovies.filter((function(e){return e._id!==t}));e.setState({allMovies:a})},e.handleLike=function(t){var a=Object(u.a)(e.state.allMovies),n=a.indexOf(t);a[n].liked=!a[n].liked,e.setState({allMovies:a})},e.handleSort=function(t){e.setState({sortCol:t})},e.getMovieData=function(){var t=e.state,a=t.pageSize,n=t.currentPage,r=t.allMovies,l=t.currentGenre,c=t.searchQuery,o=t.sortCol,i=r;c?i=r.filter((function(e){return e.title.toLowerCase().startsWith(c.toLowerCase())})):l&&l._id&&(i=r.filter((function(e){return e.genre._id===l._id})));var s=P(C.a.orderBy(i,[o.path],[o.order]),n,a);return{totalCount:i.length,data:s}},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=[{name:"All Genres"}].concat(Object(u.a)(v()));this.setState({allMovies:g(),allGenres:e})}},{key:"render",value:function(){var e=this.state,t=e.pageSize,a=e.currentPage,n=e.sortCol,l=e.searchQuery,c=this.getMovieData(),o=c.totalCount,i=c.data;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement(M,{genres:this.state.allGenres,currentGenre:this.state.currentGenre,handleItemSelect:this.handleItemSelect})),r.a.createElement("div",{className:"col"},r.a.createElement(E.a,{to:"/movies/new",className:"btn btn-primary",style:{marginBottom:20}},"New Movie"),this.state.allMovies.length?r.a.createElement("h1",null,"currently showing:",o," movies"):r.a.createElement("h1",null,"there's no movies"),r.a.createElement(w,{value:l,onChange:this.handleSearch}),o>0&&r.a.createElement(R,{movies:i,sortCol:n,onLike:this.handleLike,onDelete:this.handleRemove,onSort:this.handleSort}),r.a.createElement(_,{pageSize:t,itemCount:o,currentPage:a,handlePageChange:this.handlePageChange})))}}]),a}(n.Component),A=function(e){return r.a.createElement("h1",null,"Customers")},T=function(e){return r.a.createElement("h1",null,"Rentals")},x=function(){return r.a.createElement("h1",null,"Page Not found")},D=a(41),q=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(E.a,{className:"navbar-brand",to:"/"},"Vidly"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(D.a,{className:"nav-link",to:"/"},"Movies")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(D.a,{className:"nav-link",to:"/customers"},"Customers")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(D.a,{className:"nav-link",to:"/rentals"},"Rentals")))))},L=a(23),B=a(13),F=a(5),z=a.n(F),Q=a(18),W=function(e){var t=e.name,a=e.label,n=e.focus,l=e.error,c=Object(Q.a)(e,["name","label","focus","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",Object.assign({},c,{id:t,name:t,autoFocus:n,className:"form-control"})),l&&r.a.createElement("div",{className:"alert alert-danger"},l))},U=function(e){var t=e.name,a=e.label,n=e.options,l=e.error,c=Object(Q.a)(e,["name","label","options","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("select",Object.assign({name:t,id:t},c,{className:"form-control"}),r.a.createElement("option",{value:""}),n.map((function(e){return r.a.createElement("option",{value:e._id,key:e._id},e.name)}))),l&&r.a.createElement("div",{className:"alert alert-danger"},l))},J=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={data:{},errors:{}},e.validateInput=function(t){var a=t.value,n=t.name,r=Object(B.a)({},n,a),l=Object(B.a)({},n,e.schema[n]),c=z.a.validate(r,l).error;return c?c.details[0].message:null},e.validate=function(){var t=z.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var a,n={},r=Object(L.a)(t.details);try{for(r.s();!(a=r.n()).done;){var l=a.value;n[l.path[0]]=l.message}}catch(c){r.e(c)}finally{r.f()}return n},e.handleChange=function(t){var a=t.currentTarget,n=Object(j.a)({},e.state.errors),r=e.validateInput(a);r?n[a.name]=r:delete n[a.name];var l=Object(j.a)({},e.state.data);l[a.name]=a.value,e.setState({data:l,errors:n})},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({errors:a||{}}),a||e.doSubmit()},e.renderInput=function(t,a){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"text",c=e.state,o=c.data,i=c.errors;return r.a.createElement(W,{type:l,name:t,label:a,value:o[t],onChange:e.handleChange,error:i[t],focus:n})},e.renderSelect=function(t,a,n){var l=e.state,c=l.data,o=l.errors;return r.a.createElement(U,{name:t,value:c[t],label:a,options:n,onChange:e.handleChange,error:o[t]})},e.renderButton=function(t){return r.a.createElement("button",{disabled:e.validate(),className:"btn btn-primary"},t)},e}return a}(n.Component),K=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],movies:g(),errors:{}},e.mapMovieModel=function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}},e.showError=function(){console.log(e.state.data);var t=z.a.validate(e.state.data,e.schema,{abortEarly:!1});console.log(t)},e.schema={_id:z.a.string(),title:z.a.string().required().label("Title"),genreId:z.a.string().required().label("Genre"),numberInStock:z.a.number().required().min(0).max(100).label("Number In Stock"),dailyRentalRate:z.a.number().required().min(0).max(10).label("Rate")},e.doSubmit=function(){y(e.state.data),e.props.history.push("/movies")},e}return Object(d.a)(a,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=v();this.setState({genres:e});var t=this.props.match.params.id;if("new"!==t){var a,n=(a=t,p.find((function(e){return e._id===a})));if(!n)return this.props.history.replace("/not-found");this.setState({data:this.mapMovieModel(n)})}}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("title","Title",!0),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number In Stock"),this.renderInput("dailyRentalRate","Rate"),this.renderButton("Save"))}}]),a}(J),H=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:""},errors:{}},e.schema={username:z.a.string().required().label("Username"),password:z.a.string().required().label("Password")},e.doSubmit=function(){console.log("login"),e.props.history.push("/")},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username",!0),this.renderInput("password","Password",!1,"password"),this.renderButton("Login")))}}]),a}(J),V=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:"",name:""},errors:{}},e.schema={username:z.a.string().required().email().label("Username"),password:z.a.string().required().min(5).label("Password"),name:z.a.string().required().label("Name")},e.doSubmit=function(){console.log("registered")},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderInput("username","Username",!0),this.renderInput("password","Password",!1,"password"),this.renderInput("name","Name",!1),this.renderButton("Register"))}}]),a}(J);a(36);var Z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement("main",{className:"container"},r.a.createElement(o.a,null,r.a.createElement(i.a,{path:"/login",component:H}),r.a.createElement(i.a,{path:"/register",component:V}),r.a.createElement(i.a,{path:"/movies/:id",component:K}),r.a.createElement(i.a,{path:"/movies",component:G}),r.a.createElement(i.a,{path:"/customers",component:A}),r.a.createElement(i.a,{path:"/rentals",component:T}),r.a.createElement(i.a,{path:"/not-found",component:x}),r.a.createElement(s.a,{from:"/",exact:!0,to:"movies"}),r.a.createElement(s.a,{to:"not-found"}))))},$=a(42);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(37),a(38);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($.a,null,r.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.8d4481a7.chunk.js.map