(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(t,e,n){t.exports=n(44)},34:function(t,e,n){},36:function(t,e,n){},40:function(t,e,n){},42:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a,i=n(0),r=n.n(i),o=n(21),c=n.n(o),u=n(4),l=(n(34),function(){return r.a.createElement(i.Fragment,null,r.a.createElement("button",null,"Add Note"),r.a.createElement("button",null,"Delete Note"))}),s=n(8),d=n(9),m=n(12),f=n(10),E=n(13),v=(n(36),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(i)))).handleChange=function(t){var e=n.props,a=e.id,i=e.onAddNote,r=e.onUpdateNoteContent,o=t.target.value;return n.activeNoteExists?r(a,o):i(o)},n}return Object(E.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props,e=t.content,n=t.lastEdited;return r.a.createElement("div",{className:"notepad"},n&&r.a.createElement("div",{className:"notepad__last-edit"},n),r.a.createElement("textarea",{className:"notepad__content",onChange:this.handleChange,value:e}))}},{key:"activeNoteExists",get:function(){return!!this.props.id}}]),e}(i.Component)),_=n(11),p=n.n(_),b="notes/addNote",N="notes/deleteNote",O="notes/updateNoteContent",h="notes/setActiveNote",j=n(23),g=n.n(j),A=function(){var t=g()(),e=t.format("MMMM D, YYYY"),n=t.format("h:mm A");return{raw:t,printed:"".concat(e," at ").concat(n)}},y=n(7),w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return"".concat(t.substr(0,e)).concat(t.length>e?"...":"")},C=function(t){return t.notes},k=Object(y.a)(C,function(t){return t.map(function(t){return{id:t.id,isActive:t.isActive,title:w(t.content),lastEdited:t.lastEdited}})}),S=Object(y.a)(C,function(t){return t.find(function(t){return t.isActive})||null}),D=Object(y.a)(S,function(t){return t?t.id:""}),x=Object(y.a)(S,function(t){return t?t.content:""}),M=Object(y.a)(S,function(t){return t?t.lastEdited:""}),T=Object(u.b)(function(t){return{id:D(t),content:x(t),lastEdited:M(t)}},function(t){return{onAddNote:function(e){return t(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:b,id:p()(),initalContent:t,lastEdited:A()}}(e))},onUpdateNoteContent:function(e,n){return t(function(t,e){return{type:O,id:t,content:e,lastEdited:A()}}(e,n))}}})(v),U=function(){return r.a.createElement("div",{className:"notelist__empty"},r.a.createElement("span",{role:"img","aria-label":"no-good-emoji"},"\ud83d\ude45\u200d\u2640\ufe0f")," No notes here!")},X=n(24),Y=n.n(X),I=function(t){var e=t.isActive,n=t.title,a=t.lastEdited,i=t.onSetActiveNote;return r.a.createElement("li",{className:Y()("notelist__list__item",{"notelist__list__item--active":e}),onClick:i,role:"button"},r.a.createElement("div",{className:"notelist__list__item__title"},n),r.a.createElement("div",{className:"notelist__list__item__last-edited"},a))},R=(n(40),function(t){function e(){return Object(s.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(E.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props,e=t.notes,n=t.onSetActiveNote;return r.a.createElement("div",{className:"notelist"},this.hasNotes?r.a.createElement("ul",{className:"notelist__list"},this.hasNotes&&e.map(function(t){return r.a.createElement(I,Object.assign({},t,{onSetActiveNote:n(t.id,t.isActive)}))})):r.a.createElement(U,null))}},{key:"hasNotes",get:function(){var t=this.props.notes;return t&&t.length>0}}]),e}(i.Component)),F=Object(u.b)(function(t){return{notes:k(t)}},function(t){return{onSetActiveNote:function(e,n){return function(){return!n&&t(function(t){return{type:h,id:t}}(e))}}}})(R),J=function(){return r.a.createElement(i.Fragment,null,r.a.createElement("div",{className:"main__controls"},r.a.createElement(l,null)),r.a.createElement("div",{className:"main__body"},r.a.createElement(F,null),r.a.createElement(T,null)))},L=n(3),V=n(1),B=n(5),P=function(t,e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,a=arguments.length>1?arguments[1]:void 0,i=e[a.type];return i?i(n,a):n}},W=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"New category";return{id:p()(),name:t,notes:[]}},q=P([W("Personal"),W("Work"),W("Other")],Object(V.a)({},"categories/updateCategoryName",function(t,e){return t.map(function(t){return t.id!==e.id?t:Object(B.a)({},t,{name:e.name})})})),z=P([],(a={},Object(V.a)(a,b,function(t,e){return t.map(function(t){return Object(B.a)({},t,{isActive:!1})}).concat([{id:e.id,content:e.initalContent||"",lastEdited:null,isActive:!0}])}),Object(V.a)(a,N,function(t,e){return t.filter(function(t){return t.id!==e.id})}),Object(V.a)(a,O,function(t,e){return t.map(function(t){return t.id!==e.id?t:Object(B.a)({},t,{content:e.content,lastEdited:e.lastEdited.printed,lastEditedRaw:e.lastEdited.raw})})}),Object(V.a)(a,h,function(t,e){return t.map(function(t){return Object(B.a)({},t,{isActive:t.id===e.id})})}),a)),G=Object(L.b)({categories:q,notes:z}),H=Object(L.c)(G,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n(42);c.a.render(r.a.createElement(u.a,{store:H},r.a.createElement(J,null)),document.getElementById("main"))}},[[25,2,1]]]);
//# sourceMappingURL=main.b6b936f6.chunk.js.map