"use strict";(self["webpackChunklinker_web"]=self["webpackChunklinker_web"]||[]).push([[357],{5096:function(e,t,a){a.d(t,{A:function(){return p}});var l=a(6768);const o=e=>((0,l.Qi)("data-v-4892cd3c"),e=e(),(0,l.jt)(),e),s=o((()=>(0,l.Lk)("input",{type:"file",id:"file-input"},null,-1)));function n(e,t,a,o,n,r){const i=(0,l.g2)("PictureRounded"),d=(0,l.g2)("el-icon");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("a",{href:"javascript:;",onClick:t[0]||(t[0]=(...e)=>o.handleBg&&o.handleBg(...e))},[(0,l.bF)(d,null,{default:(0,l.k6)((()=>[(0,l.bF)(i)])),_:1})]),s],64)}var r=a(7477),i=a(2933),d={components:{PictureRounded:r.syp},props:["name"],setup(e){const t=`bg-${e.name}`,a=()=>{localStorage.getItem(t)?i.s.confirm("清除背景？","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{s()})).catch((()=>{})):document.getElementById("file-input").click()},o=e=>{const t=e.target.files[0];if(t)try{const e=new FileReader;e.onload=function(e){s(e.target.result)},e.readAsDataURL(t)}catch(a){}e.target.value=""},s=e=>{e?(document.body.className="sunny",localStorage.setItem(t,e),document.body.style=`background-image:url(${e})`):(document.body.className="",document.body.style="",localStorage.setItem(t,""))};return(0,l.sV)((()=>{document.getElementById("file-input").addEventListener("change",o),s(localStorage.getItem(t))})),{handleBg:a}}},u=a(1241);const c=(0,u.A)(d,[["render",n],["__scopeId","data-v-4892cd3c"]]);var p=c},2995:function(e,t,a){a.d(t,{A:function(){return pt}});var l=a(6768),o=a(4232),s=a.p+"img/coin.6431311b.svg",n=a.p+"img/qr.a05c5f6e.jpg";const r=e=>((0,l.Qi)("data-v-a4a3b11e"),e=e(),(0,l.jt)(),e),i={class:"status-wrap flex"},d={class:"copy"},u=["title"],c=r((()=>(0,l.Lk)("img",{src:s,alt:"memory"},null,-1))),p=r((()=>(0,l.Lk)("a",{href:"https://github.com/snltty/linker",target:"_blank"},"Github",-1))),g={href:"https://linker.snltty.com",target:"_blank"},m={href:"https://linker-doc.snltty.com",target:"_blank"},v={href:"https://v.netzo123.com",target:"_blank"},f=r((()=>(0,l.Lk)("div",{class:"flex-1"},null,-1))),h={class:"export"},w={class:"api"},k={class:"server"},y=r((()=>(0,l.Lk)("div",{class:"pay"},[(0,l.Lk)("img",{src:n,alt:""})],-1)));function b(e,t,a,s,n,r){const b=(0,l.g2)("Export"),S=(0,l.g2)("Api"),B=(0,l.g2)("Server"),_=(0,l.g2)("el-dialog");return(0,l.uX)(),(0,l.CE)("div",i,[(0,l.Lk)("div",d,[(0,l.Lk)("a",{href:"javascript:;",class:"memory",title:e.$t("status.support"),onClick:t[0]||(t[0]=e=>s.state.showPay=!0)},[c,(0,l.Lk)("span",null,(0,o.v_)(e.$t("status.support")),1),(0,l.Lk)("span",null,"©linker "+(0,o.v_)(s.self.Version),1)],8,u),p,(0,l.Lk)("a",g,(0,o.v_)(e.$t("status.website")),1),(0,l.Lk)("a",m,(0,o.v_)(e.$t("status.doc")),1),(0,l.Lk)("a",v,(0,o.v_)(e.$t("status.cdkey")),1)]),f,(0,l.Lk)("div",h,[(0,l.bF)(b,{config:s.config},null,8,["config"])]),(0,l.Lk)("div",w,[(0,l.bF)(S,{config:s.config},null,8,["config"])]),(0,l.Lk)("div",k,[(0,l.bF)(B,{config:s.config},null,8,["config"])]),(0,l.bF)(_,{modelValue:s.state.showPay,"onUpdate:modelValue":t[1]||(t[1]=e=>s.state.showPay=e),title:e.$t("status.support"),width:"400"},{default:(0,l.k6)((()=>[y])),_:1},8,["modelValue","title"])])}var S=a(144);const B={href:"javascript:;"};function _(e,t,a,s,n,r){const i=(0,l.g2)("Tools"),d=(0,l.g2)("el-icon"),u=(0,l.g2)("el-popconfirm");return s.config?((0,l.uX)(),(0,l.CE)("div",{key:0,class:(0,o.C4)(["status-api-wrap",{connected:s.connected}])},[(0,l.bF)(u,{"confirm-button-text":e.$t("status.apiClear"),"cancel-button-text":e.$t("status.apiAlter"),title:e.$t("status.apiAlterConfirm"),onCancel:s.handleShow,onConfirm:s.handleResetConnect},{reference:(0,l.k6)((()=>[(0,l.Lk)("a",B,[(0,l.bF)(d,{size:"16"},{default:(0,l.k6)((()=>[(0,l.bF)(i)])),_:1}),(0,l.eW)(" "+(0,o.v_)(e.$t("status.api")),1)])])),_:1},8,["confirm-button-text","cancel-button-text","title","onCancel","onConfirm"])],2)):(0,l.Q3)("",!0)}var F=a(3830),$=a(4),C=a(7477),V={components:{Tools:C.S0q},props:["config"],setup(e){const t=(0,F.B)(),a=(0,l.EW)((()=>t.value.api.connected)),o=()=>{localStorage.setItem("api-cache",""),sessionStorage.setItem("api-cache",""),window.location.reload()},s=()=>{(0,$.e3)(),(0,$.a1)(`ws${"https:"===window.location.protocol?"s":""}://${window.location.hostname}:12345`,"snltty")};return{config:e.config,connected:a,handleShow:s,handleResetConnect:o}}},x=a(1241);const T=(0,x.A)(V,[["render",_],["__scopeId","data-v-439c62dc"]]);var I=T;const R={class:"status-server-wrap"};function P(e,t,a,o,s,n){const r=(0,l.g2)("ServerConfig"),i=(0,l.g2)("ServerVersion"),d=(0,l.g2)("ServerFlow");return(0,l.uX)(),(0,l.CE)("div",R,[(0,l.bF)(r,{config:o.config},null,8,["config"]),(0,l.bF)(i,{config:o.config},null,8,["config"]),o.config&&o.hasFlow?((0,l.uX)(),(0,l.Wv)(d,{key:0,config:o.config},null,8,["config"])):(0,l.Q3)("",!0)])}function A(e,t,a,s,n,r){const i=(0,l.g2)("Avatar"),d=(0,l.g2)("el-icon"),u=(0,l.g2)("ArrowDown"),c=(0,l.g2)("el-dropdown-item"),p=(0,l.g2)("el-dropdown-menu"),g=(0,l.g2)("el-dropdown"),m=(0,l.g2)("Groups");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(g,null,{dropdown:(0,l.k6)((()=>[s.hasGroup?((0,l.uX)(),(0,l.Wv)(p,{key:0},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.state.groups,(e=>((0,l.uX)(),(0,l.Wv)(c,{onClick:t=>s.handleGroupChange(e.Id)},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.Name),1)])),_:2},1032,["onClick"])))),256)),(0,l.bF)(c,{onClick:t[0]||(t[0]=e=>s.state.showGroups=!0)},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.$t("status.group")),1)])),_:1})])),_:1})):(0,l.Q3)("",!0)])),default:(0,l.k6)((()=>[(0,l.Lk)("span",{class:(0,o.C4)(["el-dropdown-link",{connected:s.state.connected}])},[(0,l.bF)(d,null,{default:(0,l.k6)((()=>[(0,l.bF)(i)])),_:1}),(0,l.eW)(" "+(0,o.v_)(s.state.groupName)+" ",1),(0,l.bF)(d,null,{default:(0,l.k6)((()=>[(0,l.bF)(u)])),_:1})],2)])),_:1}),s.state.showGroups?((0,l.uX)(),(0,l.Wv)(m,{key:0,modelValue:s.state.showGroups,"onUpdate:modelValue":t[1]||(t[1]=e=>s.state.showGroups=e)},null,8,["modelValue"])):(0,l.Q3)("",!0)],64)}var D=a(9299),z=a(1219),E=a(5931);const W={class:"group-wrap"},U={class:"flex"},O=(0,l.Lk)("span",{class:"flex-1"},null,-1);function X(e,t,a,s,n,r){const i=(0,l.g2)("el-input"),d=(0,l.g2)("el-table-column"),u=(0,l.g2)("Sync"),c=(0,l.g2)("Delete"),p=(0,l.g2)("el-icon"),g=(0,l.g2)("el-button"),m=(0,l.g2)("el-popconfirm"),v=(0,l.g2)("Plus"),f=(0,l.g2)("el-table"),h=(0,l.g2)("el-dialog");return(0,l.uX)(),(0,l.Wv)(h,{class:"options-center",title:e.$t("status.group"),"destroy-on-close":"",modelValue:s.state.show,"onUpdate:modelValue":t[0]||(t[0]=e=>s.state.show=e),width:"77rem",top:"2vh"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",W,[(0,l.bF)(f,{stripe:"",data:s.state.list,border:"",size:"small",width:"100%",height:"70vh",onCellDblclick:s.handleCellClick},{default:(0,l.k6)((()=>[(0,l.bF)(d,{prop:"Name",label:e.$t("status.groupName"),width:"100"},{default:(0,l.k6)((e=>[e.row.NameEditing?((0,l.uX)(),(0,l.Wv)(i,{key:0,autofocus:"",size:"small",modelValue:e.row.Name,"onUpdate:modelValue":t=>e.row.Name=t,onBlur:t=>s.handleEditBlur(e.row,"Name")},null,8,["modelValue","onUpdate:modelValue","onBlur"])):((0,l.uX)(),(0,l.CE)(l.FK,{key:1},[(0,l.eW)((0,o.v_)(e.row.Name),1)],64))])),_:1},8,["label"]),(0,l.bF)(d,{prop:"Id",label:"Id"},{default:(0,l.k6)((e=>[e.row.IdEditing?((0,l.uX)(),(0,l.Wv)(i,{key:0,autofocus:"",size:"small",modelValue:e.row.Id,"onUpdate:modelValue":t=>e.row.Id=t,onBlur:t=>s.handleEditBlur(e.row,"Id")},null,8,["modelValue","onUpdate:modelValue","onBlur"])):((0,l.uX)(),(0,l.CE)(l.FK,{key:1},[(0,l.eW)((0,o.v_)(e.row.Id),1)],64))])),_:1}),(0,l.bF)(d,{prop:"Password",label:e.$t("status.groupPassword")},{default:(0,l.k6)((e=>[e.row.PasswordEditing?((0,l.uX)(),(0,l.Wv)(i,{key:0,type:"password","show-password":"",size:"small",modelValue:e.row.Password,"onUpdate:modelValue":t=>e.row.Password=t,onBlur:t=>s.handleEditBlur(e.row,"Password")},null,8,["modelValue","onUpdate:modelValue","onBlur"])):((0,l.uX)(),(0,l.CE)(l.FK,{key:1},[(0,l.eW)((0,o.v_)(e.row.Password.replace(/.{1}/g,"*")),1)],64))])),_:1},8,["label"]),(0,l.bF)(d,{prop:"Oper",label:e.$t("status.groupOper"),width:"110"},{header:(0,l.k6)((()=>[(0,l.Lk)("div",U,[(0,l.Lk)("strong",null,(0,o.v_)(e.$t("status.groupOper")),1),O,(0,l.bF)(u,{name:"GroupSecretKey"})])])),default:(0,l.k6)((t=>[(0,l.Lk)("div",null,[(0,l.bF)(m,{title:e.$t("status.groupDelConfirm"),onConfirm:e=>s.handleDel(t.$index)},{reference:(0,l.k6)((()=>[(0,l.bF)(g,{type:"danger",size:"small"},{default:(0,l.k6)((()=>[(0,l.bF)(p,null,{default:(0,l.k6)((()=>[(0,l.bF)(c)])),_:1})])),_:1})])),_:2},1032,["title","onConfirm"]),(0,l.bF)(g,{size:"small",onClick:e=>s.handleAdd(t.$index)},{default:(0,l.k6)((()=>[(0,l.bF)(p,null,{default:(0,l.k6)((()=>[(0,l.bF)(v)])),_:1})])),_:2},1032,["onClick"])])])),_:1},8,["label"])])),_:1},8,["data","onCellDblclick"])])])),_:1},8,["title","modelValue"])}var K=a(7225),N={props:["modelValue"],emits:["update:modelValue"],components:{Delete:C.epd,Plus:C.FWt,Select:C.l6P,Sync:K.A},setup(e,{emit:t}){const{t:a}=(0,E.s9)(),o=(0,F.B)(),s=(0,S.Kh)({list:o.value.config.Client.Groups||[],show:!0});(0,l.wB)((()=>o.value.config.Client.Groups),(()=>{0==s.list.filter((e=>e["__editing"])).length&&(s.list=o.value.config.Client.Groups)})),(0,l.wB)((()=>s.show),(e=>{e||setTimeout((()=>{t("update:modelValue",e)}),300)}));const n=(e,t)=>{r(e,t.property)},r=(e,t)=>{s.list.forEach((e=>{e["NameEditing"]=!1,e["IdEditing"]=!1,e["PasswordEditing"]=!1})),e[`${t}Editing`]=!0,e["__editing"]=!0},i=(e,t)=>{e[`${t}Editing`]=!1,e["__editing"]=!1,p()},d=e=>{s.list.splice(e,1),p()},u=e=>{s.list.filter((e=>""==e.Id||""==e.Name)).length>0||(s.list.splice(e+1,0,{Name:"",Id:"",Password:""}),p())},c=e=>{const t=s.list.slice(),l=t[e];t[e]=t[0],t[0]=l,(0,D.rd)({name:o.value.config.Client.Name,groups:t}).then((()=>{z.nk.success(a("common.oper")),setTimeout((()=>{window.location.reload()}),1e3)})).catch((e=>{console.log(e),z.nk.error(a("common.operFail"))}))},p=()=>{(0,D.zp)(s.list).then((()=>{z.nk.success(a("common.oper"))})).catch((e=>{console.log(e),z.nk.error(a("common.operFail"))}))};return{state:s,handleCellClick:n,handleEditBlur:i,handleDel:d,handleAdd:u,handleUse:c}}};const M=(0,x.A)(N,[["render",X]]);var G=M,j={components:{ArrowDown:C.yd$,Avatar:C.euF,Groups:G},props:["config"],setup(e){const{t:t}=(0,E.s9)(),a=(0,F.B)(),o=(0,l.EW)((()=>a.value.hasAccess("Group"))),s=(0,S.Kh)({loading:!1,connected:(0,l.EW)((()=>a.value.signin.Connected)),groupName:a.value.config.Client.Group.Name,groups:a.value.config.Client.Groups.slice(),showGroups:!1}),n=e=>{const t=s.groups.map(((e,t)=>(e.$index=t,e))).filter((t=>t.Id==e))[0].$index,a=s.groups[t];s.groups[t]=s.groups[0],s.groups[0]=a,r()},r=()=>{s.loading=!0,(0,D.rd)({Name:a.value.config.Client.Name,Groups:s.groups}).then((()=>{s.loading=!1,s.show=!1,z.nk.success(t("common.oper")),setTimeout((()=>{window.location.reload()}),1e3)})).catch((e=>{console.log(e),s.loading=!1,z.nk.error(t("common.operFail"))}))};return{config:e.config,hasGroup:o,state:s,handleGroupChange:n}}};const Q=(0,x.A)(j,[["render",A],["__scopeId","data-v-10d34f3c"]]);var Y=Q;const Z={key:0,class:"flow-wrap"},q=["title"],J=["title"],H=["title"],ee=["title"];function te(e,t,a,s,n,r){const i=(0,l.g2)("el-table-column"),d=(0,l.g2)("el-button"),u=(0,l.g2)("el-table"),c=(0,l.g2)("el-dialog"),p=(0,l.g2)("ServerFlowMessenger"),g=(0,l.g2)("ServerFlowSForward"),m=(0,l.g2)("ServerFlowRelay"),v=(0,l.g2)("OnlineMap"),f=(0,l.g2)("OnlineAllMap");return(0,l.uX)(),(0,l.CE)(l.FK,null,[s.config?((0,l.uX)(),(0,l.CE)("div",Z,[(0,l.Lk)("p",null,[(0,l.eW)((0,o.v_)(e.$t("status.flowOnline"))+" ",1),(0,l.Lk)("a",{href:"javascript:;",onClick:t[0]||(t[0]=e=>s.state.showMap=!0),title:`${e.$t("status.flowThisServer")}\r\n${e.$t("status.flowOnline")}/${e.$t("status.flowOnline7Day")}`},(0,o.v_)(s.state.overallOnline),9,q),(0,l.Lk)("a",{href:"javascript:;",onClick:t[1]||(t[1]=e=>s.state.showAllMap=!0),title:`${e.$t("status.flowAllServer")}\r\n${e.$t("status.flowOnline")}/${e.$t("status.flowOnline7Day")}/${e.$t("status.flowServer")}`},(0,o.v_)(s.state.serverOnline),9,J)]),(0,l.Lk)("p",null,[(0,l.eW)((0,o.v_)(e.$t("status.flowUpload"))+" ",1),(0,l.Lk)("a",{href:"javascript:;",title:`${e.$t("status.flowThisServer")}\r\n${e.$t("status.flowAllSend")}`,onClick:t[2]||(t[2]=(...e)=>s.handleShow&&s.handleShow(...e))},(0,o.v_)(s.state.overallSendtSpeed)+"/s",9,H)]),(0,l.Lk)("p",null,[(0,l.eW)((0,o.v_)(e.$t("status.flowDownload"))+" ",1),(0,l.Lk)("a",{href:"javascript:;",title:`${e.$t("status.flowThisServer")}\r\n${e.$t("status.flowAllReceive")}`,onClick:t[3]||(t[3]=(...e)=>s.handleShow&&s.handleShow(...e))},(0,o.v_)(s.state.overallReceiveSpeed)+"/s",9,ee)])])):(0,l.Q3)("",!0),(0,l.bF)(c,{title:s.state.time,"destroy-on-close":"",modelValue:s.state.show,"onUpdate:modelValue":t[4]||(t[4]=e=>s.state.show=e),width:"640"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.bF)(u,{data:s.state.list,border:"",size:"small",width:"100%"},{default:(0,l.k6)((()=>[(0,l.bF)(i,{prop:"text",label:e.$t("status.flowType")},null,8,["label"]),(0,l.bF)(i,{prop:"sendtBytes",label:e.$t("status.flowUpload"),sortable:""},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.sendtBytesText),1)])),_:1},8,["label"]),(0,l.bF)(i,{prop:"sendtSpeed",label:e.$t("status.flowUpload"),sortable:""},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.sendtSpeedText)+"/s",1)])),_:1},8,["label"]),(0,l.bF)(i,{prop:"receiveBytes",label:e.$t("status.flowDownload"),sortable:""},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.receiveBytesText),1)])),_:1},8,["label"]),(0,l.bF)(i,{prop:"receiveSpeed",label:e.$t("status.flowDownload"),sortable:""},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.receiveSpeedText)+"/s",1)])),_:1},8,["label"]),(0,l.bF)(i,{prop:"oper",label:e.$t("status.flowOper"),width:"70"},{default:(0,l.k6)((t=>[t.row.detail?((0,l.uX)(),(0,l.Wv)(d,{key:0,size:"small",onClick:e=>s.handleShowDetail(t.row.id)},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.$t("status.flowDetail")),1)])),_:2},1032,["onClick"])):(0,l.Q3)("",!0)])),_:1},8,["label"])])),_:1},8,["data"])])])),_:1},8,["title","modelValue"]),s.state.details.Messenger?((0,l.uX)(),(0,l.Wv)(p,{key:1,config:s.config,modelValue:s.state.details.Messenger,"onUpdate:modelValue":t[5]||(t[5]=e=>s.state.details.Messenger=e)},null,8,["config","modelValue"])):(0,l.Q3)("",!0),s.state.details.SForward?((0,l.uX)(),(0,l.Wv)(g,{key:2,config:s.config,modelValue:s.state.details.SForward,"onUpdate:modelValue":t[6]||(t[6]=e=>s.state.details.SForward=e)},null,8,["config","modelValue"])):(0,l.Q3)("",!0),s.state.details.Relay?((0,l.uX)(),(0,l.Wv)(m,{key:3,config:s.config,modelValue:s.state.details.Relay,"onUpdate:modelValue":t[7]||(t[7]=e=>s.state.details.Relay=e)},null,8,["config","modelValue"])):(0,l.Q3)("",!0),s.state.showMap?((0,l.uX)(),(0,l.Wv)(v,{key:4,config:s.config,modelValue:s.state.showMap,"onUpdate:modelValue":t[8]||(t[8]=e=>s.state.showMap=e)},null,8,["config","modelValue"])):(0,l.Q3)("",!0),s.state.showAllMap?((0,l.uX)(),(0,l.Wv)(f,{key:5,config:s.config,modelValue:s.state.showAllMap,"onUpdate:modelValue":t[9]||(t[9]=e=>s.state.showAllMap=e)},null,8,["config","modelValue"])):(0,l.Q3)("",!0)],64)}a(4114);var ae=a(4921);function le(e,t,a,s,n,r){const i=(0,l.g2)("el-table-column"),d=(0,l.g2)("el-table"),u=(0,l.g2)("el-dialog");return(0,l.uX)(),(0,l.Wv)(u,{title:e.$t("status.flowMessenger"),class:"options-center",top:"1vh","destroy-on-close":"",modelValue:s.state.show,"onUpdate:modelValue":t[0]||(t[0]=e=>s.state.show=e),width:"680"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.bF)(d,{data:s.state.list,stripe:"",border:"",size:"small",width:"100%",height:"60vh"},{default:(0,l.k6)((()=>[(0,l.bF)(i,{prop:"id",label:"id",width:"200"}),(0,l.bF)(i,{prop:"sendtBytes",label:e.$t("status.flowUpload"),sortable:""},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.sendtBytesText),1)])),_:1},8,["label"]),(0,l.bF)(i,{prop:"sendtSpeed",label:e.$t("status.flowUpload"),sortable:""},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.sendtSpeedText)+"/s",1)])),_:1},8,["label"]),(0,l.bF)(i,{prop:"receiveBytes",label:e.$t("status.flowDownload"),sortable:""},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.receiveBytesText),1)])),_:1},8,["label"]),(0,l.bF)(i,{prop:"receiveSpeed",label:e.$t("status.flowDownload"),sortable:""},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.receiveSpeedText)+"/s",1)])),_:1},8,["label"])])),_:1},8,["data"])])])),_:1},8,["title","modelValue"])}var oe={props:["modelValue","config"],emits:["update:modelValue"],setup(e,{emit:t}){const{t:a}=(0,E.s9)(),o=(0,S.Kh)({show:!0,timer:0,list:[],old:null});(0,l.wB)((()=>o.show),(e=>{e||setTimeout((()=>{t("update:modelValue",e)}),300)}));const s=()=>{clearTimeout(o.timer),(0,ae.zq)().then((e=>{const t=o.old||e,l=[];for(let o in e){const s=e[o],r=t[o],i=`[${o}]${a(`status.messenger${o}`)||"unknown"}`;l.push({id:i,sendtBytes:s.SendtBytes,sendtBytesText:n(s.SendtBytes),sendtSpeed:s.SendtBytes-r.SendtBytes,sendtSpeedText:n(s.SendtBytes-r.SendtBytes),receiveBytes:s.ReceiveBytes,receiveBytesText:n(s.ReceiveBytes),receiveSpeed:s.ReceiveBytes-r.ReceiveBytes,receiveSpeedText:n(s.ReceiveBytes-r.ReceiveBytes)})}o.list=l.filter((e=>!!e.id)),o.old=e,o.timer=setTimeout(s,1e3)})).catch((e=>{o.timer=setTimeout(s,1e3)}))},n=e=>{let t=0;while(e>=1024)e/=1024,t++;return`${e.toFixed(2)}${["B","KB","MB","GB","TB"][t]}`};return(0,l.sV)((()=>{s()})),(0,l.hi)((()=>{clearTimeout(o.timer)})),{config:e.config,state:o}}};const se=(0,x.A)(oe,[["render",le],["__scopeId","data-v-80718c08"]]);var ne=se;const re={class:"head"},ie={class:"page t-c"},de={class:"page-wrap"};function ue(e,t,a,s,n,r){const i=(0,l.g2)("el-input"),d=(0,l.g2)("el-table-column"),u=(0,l.g2)("el-table"),c=(0,l.g2)("el-pagination"),p=(0,l.g2)("el-dialog");return(0,l.uX)(),(0,l.Wv)(p,{title:e.$t("status.flowServerForward"),class:"options-center",top:"1vh","destroy-on-close":"",modelValue:s.state.show,"onUpdate:modelValue":t[1]||(t[1]=e=>s.state.show=e),width:"680"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.Lk)("div",re,[(0,l.bF)(i,{modelValue:s.state.page.Key,"onUpdate:modelValue":t[0]||(t[0]=e=>s.state.page.Key=e),placeholder:e.$t("status.flowSearchDomainPort")},null,8,["modelValue","placeholder"])]),(0,l.bF)(u,{data:s.state.list,stripe:"",border:"",size:"small",width:"100%",height:"60vh",onSortChange:s.handleSort},{default:(0,l.k6)((()=>[(0,l.bF)(d,{prop:"Key",label:e.$t("status.flowSearchDomainPort"),width:"200"},null,8,["label"]),(0,l.bF)(d,{prop:"SendtBytes",label:e.$t("status.flowUpload"),sortable:"custom"},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.SendtBytesText),1)])),_:1},8,["label"]),(0,l.bF)(d,{prop:"DiffSendtBytes",label:e.$t("status.flowUpload"),sortable:"custom"},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.DiffSendtBytesText)+"/s",1)])),_:1},8,["label"]),(0,l.bF)(d,{prop:"ReceiveBytes",label:e.$t("status.flowDownload"),sortable:"custom"},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.ReceiveBytesText),1)])),_:1},8,["label"]),(0,l.bF)(d,{prop:"DiffReceiveBytes",label:e.$t("status.flowDownload"),sortable:"custom"},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.DiffReceiveBytesText)+"/s",1)])),_:1},8,["label"])])),_:1},8,["data","onSortChange"]),(0,l.Lk)("div",ie,[(0,l.Lk)("div",de,[(0,l.bF)(c,{small:"",background:"",layout:"total,prev,pager, next",total:s.state.page.Count,"page-size":s.state.page.PageSize,"current-page":s.state.page.Page,onCurrentChange:s.handlePageChange},null,8,["total","page-size","current-page","onCurrentChange"])])])])])),_:1},8,["title","modelValue"])}var ce={props:["modelValue","config"],emits:["update:modelValue"],setup(e,{emit:t}){const a=(0,S.Kh)({show:!0,timer:0,list:[],page:{Key:"",Page:1,PageSize:15,Count:0,Order:1,OrderType:0}});(0,l.wB)((()=>a.show),(e=>{e||setTimeout((()=>{t("update:modelValue",e)}),300)}));const o=()=>{clearTimeout(a.timer),(0,ae.mb)({Key:a.page.Key,Page:a.page.Page,PageSize:a.page.PageSize,Order:a.page.Order,OrderType:a.page.OrderType}).then((e=>{try{a.page.Page=e.Page,a.page.PageSize=e.PageSize,a.page.Count=e.Count;const t=[];for(let a=0;a<e.Data.length;a++){const l=e.Data[a];Object.assign(l,{SendtBytesText:s(l.SendtBytes),ReceiveBytesText:s(l.ReceiveBytes),DiffSendtBytesText:s(l.DiffSendtBytes),DiffReceiveBytesText:s(l.DiffReceiveBytes)}),t.push(l)}a.list=t}catch(t){console.log(t)}a.timer=setTimeout(o,1e3)})).catch((e=>{a.timer=setTimeout(o,1e3)}))},s=e=>{let t=0;while(e>=1024)e/=1024,t++;return`${e.toFixed(2)}${["B","KB","MB","GB","TB"][t]}`},n=e=>{e&&(a.page.Page=e)},r=e=>{const t={ascending:1,descending:0}[e.order],l={SendtBytes:1,DiffSendtBytes:2,ReceiveBytes:3,DiffReceiveBytes:4}[e.prop];a.page.Order=l,a.page.OrderType=t};return(0,l.sV)((()=>{o()})),(0,l.hi)((()=>{clearTimeout(a.timer)})),{config:e.config,state:a,handlePageChange:n,handleSort:r}}};const pe=(0,x.A)(ce,[["render",ue],["__scopeId","data-v-f73b7458"]]);var ge=pe;const me={class:"head"},ve={class:"page t-c"},fe={class:"page-wrap"};function he(e,t,a,s,n,r){const i=(0,l.g2)("el-input"),d=(0,l.g2)("el-table-column"),u=(0,l.g2)("el-table"),c=(0,l.g2)("el-pagination"),p=(0,l.g2)("el-dialog");return(0,l.uX)(),(0,l.Wv)(p,{title:e.$t("status.flowRelay"),class:"options-center",top:"1vh","destroy-on-close":"",modelValue:s.state.show,"onUpdate:modelValue":t[1]||(t[1]=e=>s.state.show=e),width:"680"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.Lk)("div",me,[(0,l.bF)(i,{modelValue:s.state.page.Key,"onUpdate:modelValue":t[0]||(t[0]=e=>s.state.page.Key=e),placeholder:"名字搜索"},null,8,["modelValue"])]),(0,l.bF)(u,{data:s.state.list,stripe:"",border:"",size:"small",width:"100%",height:"60vh",onSortChange:s.handleSort},{default:(0,l.k6)((()=>[(0,l.bF)(d,{prop:"FromName",label:e.$t("status.flowRelaySource"),width:"120"},null,8,["label"]),(0,l.bF)(d,{prop:"ToName",label:e.$t("status.flowRelayTarget"),width:"120"},null,8,["label"]),(0,l.bF)(d,{prop:"SendtBytes",label:e.$t("status.flowUpload"),sortable:"custom"},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.SendtBytesText),1)])),_:1},8,["label"]),(0,l.bF)(d,{prop:"DiffSendtBytes",label:e.$t("status.flowUpload"),sortable:"custom"},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.DiffSendtBytesText)+"/s",1)])),_:1},8,["label"]),(0,l.bF)(d,{prop:"ReceiveBytes",label:e.$t("status.flowDownload"),sortable:"custom"},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.ReceiveBytesText),1)])),_:1},8,["label"]),(0,l.bF)(d,{prop:"DiffReceiveBytes",label:e.$t("status.flowDownload"),sortable:"custom"},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.DiffReceiveBytesText)+"/s",1)])),_:1},8,["label"])])),_:1},8,["data","onSortChange"]),(0,l.Lk)("div",ve,[(0,l.Lk)("div",fe,[(0,l.bF)(c,{small:"",background:"",layout:"total,prev,pager, next",total:s.state.page.Count,"page-size":s.state.page.PageSize,"current-page":s.state.page.Page,onCurrentChange:s.handlePageChange},null,8,["total","page-size","current-page","onCurrentChange"])])])])])),_:1},8,["title","modelValue"])}var we={props:["modelValue","config"],emits:["update:modelValue"],setup(e,{emit:t}){const a=(0,S.Kh)({show:!0,timer:0,list:[],page:{Key:"",Page:1,PageSize:15,Count:0,Order:1,OrderType:0}});(0,l.wB)((()=>a.show),(e=>{e||setTimeout((()=>{t("update:modelValue",e)}),300)}));const o=()=>{clearTimeout(a.timer),(0,ae.xy)({Key:a.page.Key,Page:a.page.Page,PageSize:a.page.PageSize,Order:a.page.Order,OrderType:a.page.OrderType}).then((e=>{try{a.page.Page=e.Page,a.page.PageSize=e.PageSize,a.page.Count=e.Count;const t=[];for(let a=0;a<e.Data.length;a++){const l=e.Data[a];Object.assign(l,{SendtBytesText:s(l.SendtBytes),ReceiveBytesText:s(l.ReceiveBytes),DiffSendtBytesText:s(l.DiffSendtBytes),DiffReceiveBytesText:s(l.DiffReceiveBytes)}),t.push(l)}a.list=t}catch(t){console.log(t)}a.timer=setTimeout(o,1e3)})).catch((e=>{a.timer=setTimeout(o,1e3)}))},s=e=>{let t=0;while(e>=1024)e/=1024,t++;return`${e.toFixed(2)}${["B","KB","MB","GB","TB"][t]}`},n=e=>{e&&(a.page.Page=e)},r=e=>{const t={ascending:1,descending:0}[e.order],l={SendtBytes:1,DiffSendtBytes:2,ReceiveBytes:3,DiffReceiveBytes:4}[e.prop];a.page.Order=l,a.page.OrderType=t};return(0,l.sV)((()=>{o()})),(0,l.hi)((()=>{clearTimeout(a.timer)})),{config:e.config,state:a,handlePageChange:n,handleSort:r}}};const ke=(0,x.A)(we,[["render",he],["__scopeId","data-v-019c1d95"]]);var ye=ke;const be=e=>((0,l.Qi)("data-v-3c0782be"),e=e(),(0,l.jt)(),e),Se=be((()=>(0,l.Lk)("div",{class:"map-wrap",id:"map"},null,-1)));function Be(e,t,a,o,s,n){const r=(0,l.g2)("el-dialog");return(0,l.uX)(),(0,l.Wv)(r,{class:"options-center",title:e.$t("status.flowOnline"),"destroy-on-close":"",modelValue:o.state.show,"onUpdate:modelValue":t[0]||(t[0]=e=>o.state.show=e),width:"77rem",top:"2vh"},{default:(0,l.k6)((()=>[Se])),_:1},8,["title","modelValue"])}var _e=a(83),Fe={props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:t}){const{t:a}=(0,E.s9)(),o=(0,S.Kh)({show:!0});(0,l.wB)((()=>o.show),(e=>{e||setTimeout((()=>{t("update:modelValue",e)}),300)}));const s=(e,t)=>{const l=L.map("map").setView([38,105],4);L.tileLayer("https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",{attribution:"linker",maxZoom:10}).addTo(l);for(let s=0;s<t.length;s++)try{const o=t[s];if(!e[o.MachineId])continue;const n=e[o.MachineId].Net;if(0==n.Lat||0==n.Lon)continue;const r=new L.Icon({iconSize:[18,28],iconAnchor:[9,28],shadowAnchor:[0,0],popupAnchor:[0,-27],shadowSize:[0,0],iconUrl:o.Online?"/marker-green.png":"/marker-grey.png",shadowUrl:"/marker-shadow.png"}),i=`\n                        <div class="marker-content" >\n                            <h3 class="marker-title" style="font-size:1.6rem">${o.MachineName}</h3>\n                            <div class="marker-text" style="font-size:1.3rem">${a("status.flowArea")} : ${n.CountryCode}、${n.City}</div>\n                            <div class="marker-text" style="font-size:1.3rem">${a("status.flowNet")} : ${n.Isp}</div>\n                        </div>\n                    `;new L.marker(new L.latLng([n.Lat+Math.random()/5,n.Lon+Math.random()/5]),{icon:r}).bindPopup(i,{}).on("mouseover",(function(e){this.openPopup()})).on("mouseout",(function(e){this.closePopup()})).addTo(l)}catch(o){console.log(o)}};return(0,l.sV)((()=>{(0,l.dY)((()=>{(0,_e.r7)().then((e=>{(0,D.NT)().then((t=>{s(e.List,t)})).catch((()=>{}))})).catch((()=>{}))}))})),{state:o}}};const $e=(0,x.A)(Fe,[["render",Be],["__scopeId","data-v-3c0782be"]]);var Ce=$e;const Ve=e=>((0,l.Qi)("data-v-6f5477f6"),e=e(),(0,l.jt)(),e),xe=Ve((()=>(0,l.Lk)("div",{class:"map-wrap",id:"map"},null,-1)));function Le(e,t,a,o,s,n){const r=(0,l.g2)("el-dialog");return(0,l.uX)(),(0,l.Wv)(r,{class:"options-center",title:e.$t("status.flowOnline"),"destroy-on-close":"",modelValue:o.state.show,"onUpdate:modelValue":t[0]||(t[0]=e=>o.state.show=e),width:"77rem",top:"2vh"},{default:(0,l.k6)((()=>[xe])),_:1},8,["title","modelValue"])}var Te={props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:t}){const{t:a}=(0,E.s9)(),o=(0,S.Kh)({show:!0});(0,l.wB)((()=>o.show),(e=>{e||setTimeout((()=>{t("update:modelValue",e)}),300)}));const s=e=>{const t=L.map("map").setView([38,105],4);L.tileLayer("https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",{attribution:"linker",maxZoom:10}).addTo(t);for(let a=0;a<e.length;a++){const l=e[a],o=new L.Icon({iconSize:[18,28],iconAnchor:[9,28],shadowAnchor:[0,0],popupAnchor:[0,-27],shadowSize:[0,0],iconUrl:"/marker-green.png",shadowUrl:"/marker-shadow.png"}),s=`\n                    <div class="marker-content" >\n                        <h3 class="marker-title" style="font-size:1.6rem">${l.City} ${l.Count}</h3>\n                    </div>\n                `;new L.marker(new L.latLng([l.Lat,l.Lon]),{icon:o}).bindPopup(s,{}).on("mouseover",(function(e){this.openPopup()})).on("mouseout",(function(e){this.closePopup()})).addTo(t)}};return(0,l.sV)((()=>{(0,l.dY)((()=>{(0,ae.B8)().then((e=>{s(e)})).catch((()=>{}))}))})),{state:o}}};const Ie=(0,x.A)(Te,[["render",Le],["__scopeId","data-v-6f5477f6"]]);var Re=Ie,Pe={props:["config"],components:{ServerFlowMessenger:ne,ServerFlowSForward:ge,ServerFlowRelay:ye,OnlineMap:Ce,OnlineAllMap:Re},setup(e){const{t:t}=(0,E.s9)(),a=(0,F.B)(),o=(0,l.EW)((()=>a.value.hasAccess("SForwardFlow"))),s=(0,l.EW)((()=>a.value.hasAccess("RelayFlow"))),n=(0,l.EW)((()=>a.value.hasAccess("SigninFlow"))),r=(0,S.Kh)({show:!1,timer:0,overallSendtSpeed:"0000.00KB",overallReceiveSpeed:"0000.00KB",overallOnline:"0/0",serverOnline:"",time:"",list:[],old:null,details:{Messenger:!1,SForward:!1,Relay:!1},showMap:!1,showAllMap:!1}),i=()=>{r.show=!0},d=e=>{r.details[e]=!0},u={External:{text:t("status.flowWanPort"),detail:!1},RelayReport:{text:t("status.flowRelayNode"),detail:!1},Relay:{text:t("status.flowRelay"),detail:s.value},Messenger:{text:t("status.flowMessenger"),detail:n.value},SForward:{text:t("status.flowServerForward"),detail:o.value},flow:{text:"",detail:!1}},c=()=>{clearTimeout(r.timer),(0,ae.Qj)().then((e=>{const t=r.old||e;if(e.Items["_"]&&(r.overallOnline=`${e.Items["_"].SendtBytes}/${e.Items["_"].ReceiveBytes}`,delete e.Items["_"]),e.Items["flow"]&&e.Items["flow"].ReceiveBytes>0){const t=(BigInt(e.Items["flow"].ReceiveBytes)>>BigInt(32)).toString(),a=(BigInt(e.Items["flow"].ReceiveBytes)&BigInt(4294967295)).toString(),l=e.Items["flow"].SendtBytes;r.serverOnline=`、${t}/${a}/${l}`,delete e.Items["flow"]}let a=0,l=0,o=0,s=0;for(let r in t.Items)a+=t.Items[r].ReceiveBytes,l+=t.Items[r].SendtBytes;for(let r in e.Items)o+=e.Items[r].ReceiveBytes,s+=e.Items[r].SendtBytes;r.overallSendtSpeed=p(s-l),r.overallReceiveSpeed=p(o-a),r.time=`${e.Start}`;const n=[];for(let r in e.Items){const a=e.Items[r],l=t.Items[r],o=u[`${r}`]||{text:`Unknow${r}`,detail:!1};n.push({id:r,text:o.text,detail:o.detail,sendtBytes:a.SendtBytes,sendtBytesText:p(a.SendtBytes),sendtSpeed:a.SendtBytes-l.SendtBytes,sendtSpeedText:p(a.SendtBytes-l.SendtBytes),receiveBytes:a.ReceiveBytes,receiveBytesText:p(a.ReceiveBytes),receiveSpeed:a.ReceiveBytes-l.ReceiveBytes,receiveSpeedText:p(a.ReceiveBytes-l.ReceiveBytes)})}r.list=n.filter((e=>!!e.id)),r.old=e,r.timer=setTimeout(c,1e3)})).catch((e=>{r.timer=setTimeout(c,1e3)}))},p=e=>{let t=0;while(e>=1024)e/=1024,t++;return`${e.toFixed(2)}${["B","KB","MB","GB","TB"][t]}`};return(0,l.sV)((()=>{c()})),(0,l.hi)((()=>{clearTimeout(r.timer)})),{hasSForwardFlow:o,config:e.config,state:r,handleShow:i,handleShowDetail:d}}};const Ae=(0,x.A)(Pe,[["render",te],["__scopeId","data-v-12cd5250"]]);var De=Ae;const ze=["title"],Ee={key:0,class:"progress"},We={key:1,class:"progress"};function Ue(e,t,a,s,n,r){const i=(0,l.g2)("Loading"),d=(0,l.g2)("el-icon"),u=(0,l.g2)("Download"),c=(0,l.g2)("CircleCheck");return(0,l.uX)(),(0,l.CE)("a",{href:"javascript:;",onClick:t[0]||(t[0]=(...e)=>s.handleUpdate&&s.handleUpdate(...e)),class:(0,o.C4)(["download",s.updateColor()]),title:s.updateText()},[(0,l.Lk)("span",null,(0,o.v_)(s.state.version),1),s.updaterServer.Version?((0,l.uX)(),(0,l.CE)(l.FK,{key:0},[1==s.updaterServer.Status?((0,l.uX)(),(0,l.Wv)(d,{key:0,size:"14",class:"loading"},{default:(0,l.k6)((()=>[(0,l.bF)(i)])),_:1})):2==s.updaterServer.Status?((0,l.uX)(),(0,l.Wv)(d,{key:1,size:"14"},{default:(0,l.k6)((()=>[(0,l.bF)(u)])),_:1})):3==s.updaterServer.Status||5==s.updaterServer.Status?((0,l.uX)(),(0,l.CE)(l.FK,{key:2},[(0,l.bF)(d,{size:"14",class:"loading"},{default:(0,l.k6)((()=>[(0,l.bF)(i)])),_:1}),0==s.updaterServer.Length?((0,l.uX)(),(0,l.CE)("span",Ee,"0%")):((0,l.uX)(),(0,l.CE)("span",We,(0,o.v_)(parseInt(s.updaterServer.Current/s.updaterServer.Length*100))+"%",1))],64)):6==s.updaterServer.Status?((0,l.uX)(),(0,l.Wv)(d,{key:3,size:"14",class:"yellow"},{default:(0,l.k6)((()=>[(0,l.bF)(c)])),_:1})):(0,l.Q3)("",!0)],64)):((0,l.uX)(),(0,l.Wv)(d,{key:1,size:"14"},{default:(0,l.k6)((()=>[(0,l.bF)(u)])),_:1}))],10,ze)}var Oe=a(2933),Xe=a(920),Ke={components:{Promotion:C.Yk4,Download:C.f5X,Loading:C.Rhj,CircleCheck:C.rW7,ServerFlow:De},props:["config"],setup(e){const{t:t}=(0,E.s9)(),a=(0,F.B)(),o=(0,l.EW)((()=>a.value.hasAccess("UpdateServer"))),s=(0,S.KR)({Version:"",Status:0,Length:0,Current:0,Msg:[],DateTime:""}),n=(0,S.Kh)({show:!1,loading:!1,connected:(0,l.EW)((()=>a.value.signin.Connected)),version:(0,l.EW)((()=>a.value.signin.Version)),timer:0}),r=()=>{clearTimeout(n.timer),(0,Xe.BJ)().then((e=>{s.value.Version=e.Version,s.value.Status=e.Status,s.value.Length=e.Length,s.value.Current=e.Current,s.value.Msg=e.Msg,s.value.DateTime=e.DateTime,s.value.Status>2&&s.value.Status<6&&(n.timer=setTimeout((()=>{r()}),1e3))})).catch((()=>{n.timer=setTimeout((()=>{r()}),1e3)}))},i=()=>s.value.Version?s.value.Status<=2?n.version!=s.value.Version?`${t("status.serverNotNew")}(${s.value.Version})`:`${t("status.serverNew")}`:{3:t("status.serverDownloading"),4:t("status.serverDownloaded"),5:t("status.serverUnZipIng"),6:t("status.serverUnZip")}[s.value.Status]:t("status.serverNoUpdate"),d=()=>n.version!=s.value.Version?"yellow":"green",u=()=>{e.config&&o.value&&([0,1,3,5].indexOf(s.value.Status)>=0?z.nk.error(t("common.operating")):6!=s.value.Status?2==s.value.Status&&Oe.s.confirm(t("status.serverConfirm"),t("common.tips"),{confirmButtonText:t("common.confirm"),cancelButtonText:t("common.cancel"),type:"warning"}).then((()=>{(0,Xe.y2)(s.value.Version||a.value.signin.Version).then((()=>{setTimeout((()=>{r()}),1e3)}))})).catch((()=>{})):Oe.s.confirm(t("status.serverCloseConfirm"),t("common.tips"),{confirmButtonText:t("common.confirm"),cancelButtonText:t("common.cancel"),type:"warning"}).then((()=>{(0,Xe.aP)()})).catch((()=>{})))};return(0,l.sV)((()=>{r()})),{config:e.config,state:n,updaterServer:s,handleUpdate:u,updateText:i,updateColor:d}}};const Ne=(0,x.A)(Ke,[["render",Ue],["__scopeId","data-v-070ba6bb"]]);var Me=Ne,Ge={components:{ServerConfig:Y,ServerFlow:De,ServerVersion:Me},props:["config"],setup(e){const t=(0,F.B)(),a=(0,l.EW)((()=>t.value.hasAccess("Flow"))),o=(0,S.Kh)({show:!1,loading:!1});return{config:e.config,hasFlow:a,state:o}}};const je=(0,x.A)(Ge,[["render",P],["__scopeId","data-v-2d85a782"]]);var Qe=je;const Ye={key:0,class:"status-export-wrap"},Ze=["title"],qe={class:"port-wrap"},Je={class:"text"},He={class:"body"},et={class:"card-header"},tt={class:"flex"},at={style:{"margin-left":"2rem"}};function lt(e,t,a,s,n,r){const i=(0,l.g2)("Share"),d=(0,l.g2)("el-icon"),u=(0,l.g2)("el-checkbox"),c=(0,l.g2)("el-input"),p=(0,l.g2)("Access"),g=(0,l.g2)("el-card"),m=(0,l.g2)("el-button"),v=(0,l.g2)("el-dialog");return s.config&&s.hasExport?((0,l.uX)(),(0,l.CE)("div",Ye,[(0,l.Lk)("a",{href:"javascript:;",title:e.$t("status.export"),onClick:t[0]||(t[0]=e=>s.state.show=!0)},[(0,l.bF)(d,{size:"16"},{default:(0,l.k6)((()=>[(0,l.bF)(i)])),_:1}),(0,l.eW)(" "+(0,o.v_)(e.$t("status.export")),1)],8,Ze),(0,l.bF)(v,{class:"options-center",title:e.$t("status.export"),"destroy-on-close":"",modelValue:s.state.show,"onUpdate:modelValue":t[5]||(t[5]=e=>s.state.show=e),center:"",width:"580",top:"1vh"},{footer:(0,l.k6)((()=>[(0,l.bF)(m,{plain:"",onClick:t[4]||(t[4]=e=>s.state.show=!1),loading:s.state.loading},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.$t("common.cancel")),1)])),_:1},8,["loading"]),(0,l.bF)(m,{type:"success",plain:"",onClick:s.handleExport,loading:s.state.loading},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.$t("common.confirm")),1)])),_:1},8,["onClick","loading"])])),default:(0,l.k6)((()=>[(0,l.Lk)("div",qe,[(0,l.Lk)("div",Je,(0,o.v_)(e.$t("status.exportText")),1),(0,l.Lk)("div",He,[(0,l.bF)(g,{shadow:"never"},{header:(0,l.k6)((()=>[(0,l.Lk)("div",et,[(0,l.Lk)("div",tt,[(0,l.Lk)("div",null,[(0,l.bF)(u,{disabled:s.onlyNode,modelValue:s.state.single,"onUpdate:modelValue":t[1]||(t[1]=e=>s.state.single=e),label:e.$t("status.exportSingle")},null,8,["disabled","modelValue","label"])]),(0,l.Lk)("div",at,[(0,l.Lk)("span",null,(0,o.v_)(e.$t("status.exportName"))+" : ",1),(0,l.bF)(c,{disabled:!s.state.single,modelValue:s.state.name,"onUpdate:modelValue":t[2]||(t[2]=e=>s.state.name=e),maxlength:"32","show-word-limit":"",style:{width:"15rem"}},null,8,["disabled","modelValue"])]),(0,l.Lk)("div",null,[(0,l.Lk)("span",null,(0,o.v_)(e.$t("status.exportApiPassword"))+" : ",1),(0,l.bF)(c,{type:"password","show-password":"",disabled:s.onlyNode,modelValue:s.state.apipassword,"onUpdate:modelValue":t[3]||(t[3]=e=>s.state.apipassword=e),maxlength:"36","show-word-limit":"",style:{width:"15rem"}},null,8,["disabled","modelValue"])])])])])),default:(0,l.k6)((()=>[(0,l.bF)(p,{ref:"accessDom",machineid:s.machineId},null,8,["machineid"])])),_:1})])])])),_:1},8,["title","modelValue"])])):(0,l.Q3)("",!0)}var ot=a(8835),st=a(6158),nt={components:{Share:C.SYj,Access:st.A},props:["config"],setup(e){const{t:t}=(0,E.s9)(),a=(0,F.B)(),o=(0,l.EW)((()=>a.value.hasAccess("Export"))),s=(0,l.EW)((()=>a.value.config.Client.OnlyNode)),n=(0,l.EW)((()=>a.value.config.Client.Id)),r=(0,S.Kh)({show:!1,loading:!1,single:!0,name:"",apipassword:s.value?a.value.config.Client.CApi.ApiPassword:""}),i=(0,S.KR)(null),d=()=>{if(!o.value)return;const e={access:i.value.getValue(),single:r.single,name:r.name,apipassword:r.apipassword};if(e.single){if(!e.name)return void z.nk.error(t("status.exportNamePlease"))}else e.name="";if(r.apipassword)return e;z.nk.error(t("status.exportApiPasswordPlease"))},u=()=>{const e=document.createElement("a");r.single?e.download=`client-node-export-${r.name}.zip`:e.download="client-node-export.zip",e.href="/client-node-export.zip",document.body.appendChild(e),e.click(),document.body.removeChild(e)},c=()=>{const e=d();e&&(r.loading=!0,(0,ot.P$)(e).then((()=>{r.loading=!1,r.show=!1,z.nk.success(t("common.oper")),u()})).catch((()=>{z.nk.error(t("common.operFail")),r.loading=!1})))};return{config:e.config,onlyNode:s,hasExport:o,machineId:n,state:r,accessDom:i,handleExport:c}}};const rt=(0,x.A)(nt,[["render",lt],["__scopeId","data-v-b1c8c77a"]]);var it=rt,dt=a(1604),ut={components:{Api:I,Server:Qe,Export:it,UpdaterBtn:dt.A},props:["config"],setup(e){const t=(0,F.B)(),a=(0,l.EW)((()=>t.value.self)),o=(0,S.Kh)({showPay:!1});return{state:o,config:e.config,self:a}}};const ct=(0,x.A)(ut,[["render",b],["__scopeId","data-v-a4a3b11e"]]);var pt=ct},7225:function(e,t,a){a.d(t,{A:function(){return v}});var l=a(6768);function o(e,t,a,o,s,n){const r=(0,l.g2)("Share"),i=(0,l.g2)("el-icon"),d=(0,l.g2)("el-button");return(0,l.uX)(),(0,l.CE)("div",null,[(0,l.bF)(d,{class:"btn",size:"small",onClick:o.handleSync},{default:(0,l.k6)((()=>[(0,l.bF)(i,null,{default:(0,l.k6)((()=>[(0,l.bF)(r)])),_:1})])),_:1},8,["onClick"])])}var s=a(4);const n=e=>(0,s.zG)("sync/Sync",e);var r=a(3830),i=a(7477),d=a(1219),u=a(2933),c=a(5931),p={props:["name"],components:{Share:i.SYj},setup(e){const{t:t}=(0,c.s9)(),a=(0,r.B)(),o=(0,l.EW)((()=>a.value.hasAccess("Sync"))),s=()=>{o.value?u.s.confirm(`${t("server.sync")} ${t(`server.async${e.name}`)} ? `,t("common.tips"),{confirmButtonText:t("common.confirm"),cancelButtonText:t("common.cancel"),type:"warning"}).then((()=>{n([e.name]).then((e=>{d.nk.success(t("common.oper"))}))})).catch((()=>{})):d.nk.success(t("common.access"))};return{handleSync:s}}},g=a(1241);const m=(0,g.A)(p,[["render",o]]);var v=m}}]);