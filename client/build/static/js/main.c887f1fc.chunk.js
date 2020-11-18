(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{154:function(e,t,c){},155:function(e,t,c){},290:function(e,t,c){"use strict";c.r(t);var n=c(6),a=c(0),i=c(25),r=c.n(i),s=(c(154),c(51)),l=(c(155),c(68)),o=c.n(l),d="".concat("http://localhost:9001","/api"),j=c(57),u=c(294),b=c(296),x=u.a.Option;var f=function(e){var t=e.action,c=e.fetchAllCars,i=Object(a.useState)(""),r=Object(s.a)(i,2),l=r[0],o=r[1],d=Object(a.useState)(""),f=Object(s.a)(d,2),O=f[0],h=f[1];return Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(n.jsxs)(u.a,{onChange:function(e){h(e)},style:{width:"150px"},children:[Object(n.jsx)(x,{value:"manufacturer",children:"Manufacturer"}),Object(n.jsx)(x,{value:"model",children:"Model"}),Object(n.jsx)(x,{value:"year",children:"Year"}),Object(n.jsx)(x,{value:"color",children:"Color"})]}),Object(n.jsx)(b.a,{disabled:""===O,style:{width:"40%",margin:"0px 15px"},onChange:function(e){o(e.target.value)}}),Object(n.jsx)(j.a,{disabled:""===O,onClick:function(){if(""===l)c();else{var e={};e[O]="year"===O?Number.parseInt(l):l,t({filter:e})}},children:"Filter"})]})},O=c.p+"static/media/car.a4771928.png",h=c.p+"static/media/edit.249fb4c7.svg",p=c.p+"static/media/delete.86bb3836.svg",m=c(298);var y=function(e){var t=e.car,c=e.deleteCar,a=e.onEditClick;return Object(n.jsxs)("div",{style:{display:"flex",backgroundColor:"white",borderRadius:"40px",padding:"10px 30px",margin:"10px 0"},children:[Object(n.jsx)("img",{style:{borderRadius:"40px",maxWidth:"150px",maxHeight:"150px"},src:O,alt:"car"}),Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[Object(n.jsx)("p",{style:{fontWeight:"bolder",fontSize:"20px",height:"fit-content",alignSelf:"center"},children:"".concat(t.manufacturer," ").concat(t.model)}),Object(n.jsx)("div",{style:{margin:"0 40px"},children:Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(n.jsxs)("div",{style:{display:"flex"},children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("span",{children:"Color: "}),Object(n.jsx)("span",{style:{color:t.color},children:t.color.toUpperCase()})]}),Object(n.jsx)("span",{style:{margin:"0 50px"},children:"Year: ".concat(t.year)})]}),Object(n.jsx)("p",{children:"VIN: ".concat(t.vin)})]})})]}),Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around"},children:[Object(n.jsx)("img",{src:h,alt:"edit",style:{cursor:"pointer"},onClick:a}),Object(n.jsx)(m.a,{placement:"bottom",trigger:"click",content:Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(n.jsx)("span",{children:"Submit action"}),Object(n.jsx)(j.a,{danger:!0,onClick:function(){return c(t._id.$oid)},children:"Submit"})]}),children:Object(n.jsx)("img",{src:p,alt:"delete",style:{cursor:"pointer"}})})]})]})},v=c(293),g=c(297),C=c(295);var k=function(e){var t=e.visible,c=e.carData,i=e.addNewCar,r=e.editCar,l=Object(a.useState)(!1),o=Object(s.a)(l,2),d=o[0],u=o[1];Object(a.useEffect)((function(){u(!0)}),[t]),Object(a.useEffect)((function(){u(!1)}),[]);var x=function(e){u(!1),null===c?i(e):r(e,c._id.$oid)};return Object(n.jsx)(C.a,{footer:null,visible:d,onCancel:function(){u(!1)},onOk:function(){u(!1)},children:Object(n.jsxs)(v.a,{onFinish:x,preserve:!1,initialValues:c,style:{margin:"20px 0 0 0"},children:[Object(n.jsx)(v.a.Item,{label:"Manufacturer",name:"manufacturer",required:!0,children:Object(n.jsx)(b.a,{})}),Object(n.jsx)(v.a.Item,{label:"Model",name:"model",required:!0,children:Object(n.jsx)(b.a,{})}),Object(n.jsx)(v.a.Item,{label:"Color",name:"color",required:!0,children:Object(n.jsx)(b.a,{})}),Object(n.jsx)(v.a.Item,{label:"Year",name:"year",required:!0,children:Object(n.jsx)(g.a,{})}),Object(n.jsx)(v.a.Item,{label:"VIN",name:"vin",required:!0,children:Object(n.jsx)(b.a,{})}),Object(n.jsx)(v.a.Item,{children:Object(n.jsx)(j.a,{type:"primary",htmlType:"submit",children:"Submit"})})]},null===c?"form":c.vin)})};var S=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),c=t[0],i=t[1],r=Object(a.useState)(null),l=Object(s.a)(r,2),u=l[0],b=l[1],x=Object(a.useState)(!1),O=Object(s.a)(x,2),h=O[0],p=O[1];Object(a.useEffect)((function(){m()}),[]);var m=function(){o.a.post("".concat(d,"/get_cars")).then((function(e){e.data.success&&i(e.data.cars)}))},v=function(e){console.log(e),o.a.post("".concat(d,"/delete_car"),{id:e}).then((function(t){t.data.success&&i(c.filter((function(t){return t._id.$oid!==e})))}))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"70%"},children:[Object(n.jsx)(j.a,{type:"dashed",style:{margin:"40px"},onClick:function(){b(null),p(!0),setTimeout((function(){return p(!1)}),0)},children:"Add new car"}),Object(n.jsx)(f,{action:function(e){o.a.post("".concat(d,"/get_cars"),e).then((function(e){e.data.success&&i(e.data.cars),console.log(e.data.cars)}))},fetchAllCars:m}),c.map((function(e){return Object(n.jsx)(y,{car:e,deleteCar:v,onEditClick:function(){return function(e){b(e),p(!0),setTimeout((function(){return p(!1)}),0)}(e)}},e.vin)}))]})}),Object(n.jsx)(k,{carData:u,visible:h,addNewCar:function(e){o.a.post("".concat(d,"/add_car"),e).then((function(e){e.data.success&&m()}))},editCar:function(e,t){o.a.post("".concat(d,"/edit_car"),{id:t,data_to_set:e}).then((function(e){e.data.success&&m()}))}})]})};r.a.render(Object(n.jsx)(S,{}),document.getElementById("root"))}},[[290,1,2]]]);
//# sourceMappingURL=main.c887f1fc.chunk.js.map