"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[825],{1825:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r,a,i,o,s=t(2791),d=t(9434),l=t(6052),c=t(4289),p=function(n){return n.contacts.items},u=function(n){return n.filter},x=t(885),m=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",t=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&t[n];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e},f=t(168),h=t(7691),g=h.ZP.form(r||(r=(0,f.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  padding: 20px;\n  border: 2px solid #1976d2;\n  margin-bottom: 20px;\n"]))),b=h.ZP.label(a||(a=(0,f.Z)(["\n  margin-bottom: 10px;\n"]))),Z=h.ZP.input(i||(i=(0,f.Z)(["\n  width: 250px;\n  padding: 8px;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n  margin-bottom: 20px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n"]))),v=h.ZP.button(o||(o=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 85px;\n  padding: 6px;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n\n  background-color: #ffffff;\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    color: #ffffff;\n    border: 1px solid #1976d2;\n    background-color: #1976d2;\n  }\n"]))),y=t(3329);function j(){var n=(0,s.useState)(""),e=(0,x.Z)(n,2),t=e[0],r=e[1],a=(0,s.useState)(""),i=(0,x.Z)(a,2),o=i[0],c=i[1],u=(0,d.v9)(p),f=(0,d.I0)(),h=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":c(a);break;default:return}};return(0,y.jsxs)(g,{onSubmit:function(n){n.preventDefault();var e=u.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}));e?alert("This contact is already in list"):f((0,l.uK)({id:m(),name:t,number:o})),r(""),c("")},children:[(0,y.jsx)(b,{htmlFor:"name",children:"Name"}),(0,y.jsx)(Z,{id:"name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:h}),(0,y.jsx)(b,{htmlFor:"phone",children:"Number"}),(0,y.jsx)(Z,{id:"phone",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:h}),(0,y.jsx)(v,{type:"submit",children:"Add contact"})]})}var w,P,k,C,A,F,z,S=t(1538),_=h.ZP.div(w||(w=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),I=h.ZP.label(P||(P=(0,f.Z)(["\n  margin-bottom: 10px;\n"]))),L=h.ZP.input(k||(k=(0,f.Z)(["\n  width: 250px;\n  padding: 8px;\n"])));function K(){var n=(0,d.I0)(),e=(0,d.v9)(u);return(0,y.jsxs)(_,{children:[(0,y.jsx)(I,{htmlFor:"filter",children:"Find contacts by name"}),(0,y.jsx)(L,{id:"filter",type:"text",name:"filter",value:e,onChange:function(e){n((0,S.W)(e.currentTarget.value))}})]})}var N,R,q,D=h.ZP.ul(C||(C=(0,f.Z)(["\n  width: 450px;\n  padding: 10px;\n  margin: 0;\n"]))),T=h.ZP.li(A||(A=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n"]))),U=h.ZP.p(F||(F=(0,f.Z)(["\n  margin: 0;\n  margin-right: 15px;\n"]))),B=h.ZP.button(z||(z=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 85px;\n  padding: 6px;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n\n  background-color: white;\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    border: 1px solid #9a20bc;\n    background-color: #e589ff;\n  }\n"])));function E(){var n=(0,d.v9)(p),e=(0,d.v9)(u),t=(0,d.I0)(),r=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,y.jsx)(D,{children:null===r||void 0===r?void 0:r.map((function(n){var e=n.id,r=n.name,a=n.phone;return(0,y.jsxs)(T,{children:[(0,y.jsxs)(U,{children:[(0,y.jsxs)("b",{children:[r,":"]})," ",a]}),(0,y.jsx)(B,{type:"button",onClick:function(){return t((0,l.GK)(e))},children:"Delete"})]},e)}))})}var G=h.ZP.div(N||(N=(0,f.Z)(["\n  margin-top: 64px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),J=h.ZP.h2(R||(R=(0,f.Z)(["\n  margin: 0;\n  margin-bottom: 20px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 28px;\n  font-weight: 600;\n  line-height: 1.75;\n  text-align: center;\n"]))),M=h.ZP.h2(q||(q=(0,f.Z)(["\n  margin: 0;\n  margin-bottom: 20px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 28px;\n  font-weight: 600;\n  line-height: 1.75;\n  text-align: center;\n"])));function V(){var n=(0,d.v9)(p),e=(0,d.v9)(c.rK),t=(0,d.I0)();return(0,s.useEffect)((function(){e&&t((0,l.yF)())}),[t,e]),(0,y.jsxs)(G,{children:[(0,y.jsx)(J,{children:"Phonebook"}),(0,y.jsx)(j,{}),n&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(M,{children:"Contacts"}),(0,y.jsx)(K,{}),(0,y.jsx)(E,{})]})]})}}}]);
//# sourceMappingURL=825.4bec9c6c.chunk.js.map