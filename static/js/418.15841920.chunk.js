"use strict";(self.webpackChunksmart_nation=self.webpackChunksmart_nation||[]).push([[418],{3998:function(e,s,a){a.r(s),a.d(s,{default:function(){return k}});var t=a(1413),i=a(9439),n=a(7411),c=a(2791),l=a(7022),d=a(9140),r=a(9743),o=a(2677),m=a(1134),u=a.p+"static/media/bootdis.9b9719ad1d79f8496e7a.png",f=a.p+"static/media/booten.8bb7185e5065ec5cd85c.png",g=a.p+"static/media/eyedis.97f2d221130dc6adfee5.png",p=a.p+"static/media/eyeen.511602c91e59e1538290.png",h=a.p+"static/media/glovedis.d0c21b9dc75f1f99e0d3.png",x=a.p+"static/media/gloveen.ef9a5ee3eae0f6d59f8f.png",j=a.p+"static/media/hatdis.2314d9cb86d13cf6ffb5.png",b=a.p+"static/media/haten.41f4e166c42ca5cf7197.png",v=a.p+"static/media/maskdis.4a734687bfc3ad8702af.png",N=a.p+"static/media/masken.c93ef9e3d1c76187bcf2.png",S=a.p+"static/media/vestdis.a07319b4a2c02b84a391.png",y=a.p+"static/media/vesten.b1e13c7b6b86bf4e14d3.png",Z=a(1989),R=a(184),k=function(){var e=(0,m.cI)(),s=e.register,a=e.handleSubmit,k=(0,c.useState)("Click to Upload a File"),I=(0,i.Z)(k,2),w=I[0],D=I[1],L=(0,c.useState)([]),C=(0,i.Z)(L,2),P=C[0],U=C[1],A=(0,c.useState)(!1),T=(0,i.Z)(A,2),F=T[0],B=T[1];return(0,R.jsx)("div",{className:"User",children:(0,R.jsx)("div",{className:"pages",children:(0,R.jsxs)(l.Z,{children:[(0,R.jsx)("div",{className:"upload",children:(0,R.jsxs)("form",{className:"fileUpload",onSubmit:a((function(e){return new Promise((function(s,a){var t=new FileReader;t.readAsDataURL(e.image[0]),t.onload=function(){s(t.result);var e=t.result.replace("data:image/jpeg;base64,","").replace("data:image/png;base64,","").replace("data:image/jpg;base64,","");console.log("\ud83d\ude80 ~ file: User.jsx:15 ~ returnnewPromise ~ image64",e),n.ZP.post(n.Nt,{health:"",rule:"",person:"",deviceid:"safetybrain-website",lng:0,lat:0,image:e}).then((function(e){console.log(e.data),U(e.data),B(!0)})).catch((function(e){console.log(e)}))},t.onerror=function(e){a(e)}}))})),children:[(0,R.jsxs)("label",{htmlFor:"inputTag",onChange:function(e){return D(e.target.files[0].name)},children:[w,(0,R.jsx)("input",(0,t.Z)({id:"inputTag",type:"file"},s("image")))]}),(0,R.jsx)("button",{className:"btn",type:"submit",children:"Send Image"})]})}),F?(0,R.jsx)("div",{className:"result",children:(0,R.jsxs)(d.Z,{className:"resultCard",children:[(0,R.jsxs)(r.Z,{className:"d-flex justify-content-around align-items-center",children:[(0,R.jsx)(o.Z,{md:3,className:"text-center",children:(0,R.jsx)("img",{src:P.SafetyResult?"http://109.205.28.225:8443".concat(P.SafetyResult[0].Photo):"",alt:"",className:"img-fluid resultImg"})}),(0,R.jsxs)(o.Z,{md:4,children:[(0,R.jsxs)("h5",{children:["ID: ",P.id?P.id:"NA"]}),(0,R.jsxs)("h5",{children:["Device Name: ",P.Device?P.Device.Name:"NA"]}),(0,R.jsxs)("h5",{children:["Latitude: ",P.Device.Lattitude?P.Device.Lattitude:0]}),(0,R.jsxs)("h5",{children:["Longitude: ",P.Device.Longitude?P.Device.Longitude:0]})]}),(0,R.jsx)(o.Z,{md:5,children:(0,R.jsxs)(r.Z,{className:"rowCustom",children:[(0,R.jsx)(o.Z,{xs:4,children:(0,R.jsx)("img",{src:P.SafetyResult?P.SafetyResult[0].Boot?f:u:"",alt:"",className:"img-fluid safImg"})}),(0,R.jsx)(o.Z,{xs:4,children:(0,R.jsx)("img",{src:P.SafetyResult?P.SafetyResult[0].Glasses?p:g:"",alt:"",className:"img-fluid safImg"})}),(0,R.jsx)(o.Z,{xs:4,children:(0,R.jsx)("img",{src:P.SafetyResult?P.SafetyResult[0].Gloves?x:h:"",alt:"",className:"img-fluid safImg"})}),(0,R.jsx)(o.Z,{xs:4,children:(0,R.jsx)("img",{src:P.SafetyResult?P.SafetyResult[0].Hat?b:j:"",alt:"",className:"img-fluid safImg"})}),(0,R.jsx)(o.Z,{xs:4,children:(0,R.jsx)("img",{src:P.SafetyResult?P.SafetyResult[0].Mask?N:v:"",alt:"",className:"img-fluid safImg"})}),(0,R.jsx)(o.Z,{xs:4,children:(0,R.jsx)("img",{src:P.SafetyResult?P.SafetyResult[0].Vest?y:S:"",alt:"",className:"img-fluid safImg"})})]})})]}),(0,R.jsx)("div",{})]})}):"",(0,R.jsx)("button",{className:"btn logOutBtn",onClick:function(){return sessionStorage.clear(),window.location.reload(),(0,Z.uX)("/login")},children:"Log Out"})]})})})}},7411:function(e,s,a){a.d(s,{Nt:function(){return n},PX:function(){return i}});var t=a(1044),i="login/",n="events/",c=sessionStorage.getItem("token"),l=t.ZP.create({baseURL:"http://109.205.28.225:8443/api/",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(c)}});s.ZP=l}}]);
//# sourceMappingURL=418.15841920.chunk.js.map