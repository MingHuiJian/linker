"use strict";(self["webpackChunklinker_web"]=self["webpackChunklinker_web"]||[]).push([[10],{9232:function(e,l,t){t.d(l,{W4:function(){return o},q:function(){return n},uQ:function(){return r}});var a=t(4);const n=e=>(0,a.zG)("relay/SetServers",e),o=()=>(0,a.zG)("relay/Subscribe"),r=e=>(0,a.zG)("relay/Connect",e)},743:function(e,l,t){t.d(l,{Ap:function(){return n},Co:function(){return o},DY:function(){return u},Qs:function(){return i},a9:function(){return s},eX:function(){return c},gz:function(){return d},pY:function(){return r}});var a=t(4);const n=()=>(0,a.zG)("sforwardclient/GetSecretKey"),o=e=>(0,a.zG)("sforwardclient/SetSecretKey",e),r=e=>(0,a.zG)("sforwardclient/get",e),s=()=>(0,a.zG)("sforwardclient/refresh"),d=(e="0")=>(0,a.zG)("sforwardclient/getcount",e),u=e=>(0,a.zG)("sforwardclient/remove",e),i=e=>(0,a.zG)("sforwardclient/add",e),c=e=>(0,a.zG)("sforwardclient/TestLocal",e)},920:function(e,l,t){t.d(l,{BJ:function(){return c},Ce:function(){return g},NS:function(){return r},PY:function(){return u},UB:function(){return p},Vk:function(){return i},aP:function(){return m},ir:function(){return d},lJ:function(){return o},mK:function(){return n},y2:function(){return h},yN:function(){return s}});var a=t(4);const n=(e="0")=>(0,a.zG)("updaterclient/get",e),o=e=>(0,a.zG)("updaterclient/confirm",e),r=e=>(0,a.zG)("updaterclient/exit",e),s=()=>(0,a.zG)("updaterclient/GetSecretKey"),d=e=>(0,a.zG)("updaterclient/SetSecretKey",e),u=e=>(0,a.zG)("updaterclient/SetInterval",e),i=()=>(0,a.zG)("updaterclient/getcurrent"),c=()=>(0,a.zG)("updaterclient/getserver"),h=e=>(0,a.zG)("updaterclient/confirmserver",e),m=()=>(0,a.zG)("updaterclient/exitserver"),p=()=>(0,a.zG)("updaterclient/Subscribe"),g=e=>(0,a.zG)("updaterclient/check",e)},2010:function(e,l,t){t.r(l),t.d(l,{default:function(){return oe}});var a=t(6768);const n={key:0,class:"servers-wrap"};function o(e,l,t,o,r,s){const d=(0,a.g2)("SignInServers"),u=(0,a.g2)("el-tab-pane"),i=(0,a.g2)("Groups"),c=(0,a.g2)("Async"),h=(0,a.g2)("el-tabs");return o.hasConfig?((0,a.uX)(),(0,a.CE)("div",n,[(0,a.bF)(h,{type:"border-card",style:{width:"100%"},modelValue:o.state.tab,"onUpdate:modelValue":l[0]||(l[0]=e=>o.state.tab=e)},{default:(0,a.k6)((()=>[(0,a.bF)(u,{label:"信标服务器",name:"signin"},{default:(0,a.k6)((()=>[(0,a.bF)(d)])),_:1}),(0,a.bF)(u,{label:"分组设置",name:"groups"},{default:(0,a.k6)((()=>[(0,a.bF)(i)])),_:1}),o.hasSync?((0,a.uX)(),(0,a.Wv)(u,{key:0,label:"配置同步",name:"async"},{default:(0,a.k6)((()=>[(0,a.bF)(c)])),_:1})):(0,a.Q3)("",!0)])),_:1},8,["modelValue"])])):(0,a.Q3)("",!0)}var r=t(144),s=t(3830),d=t(4232);const u={class:"flex"},i=(0,a.Lk)("span",null,"服务器地址。ip:端口 或者 域名:端口",-1),c={class:"flex"},h=(0,a.Lk)("span",null,"密钥正确时可连接服务器",-1),m={class:"t-c"};function p(e,l,t,n,o,r){const s=(0,a.g2)("el-input"),p=(0,a.g2)("el-form-item"),g=(0,a.g2)("RelayServers"),f=(0,a.g2)("SForward"),k=(0,a.g2)("Updater"),b=(0,a.g2)("el-form"),w=(0,a.g2)("el-button"),y=(0,a.g2)("el-card");return(0,a.uX)(),(0,a.CE)("div",{class:"signin-wrap",style:(0,d.Tr)({height:`${n.state.height}px`})},[(0,a.bF)(y,{shadow:"never"},{header:(0,a.k6)((()=>[(0,a.eW)("服务器相关设置")])),footer:(0,a.k6)((()=>[(0,a.Lk)("div",m,[(0,a.bF)(w,{type:"success",onClick:n.handleSave},{default:(0,a.k6)((()=>[(0,a.eW)("确定更改")])),_:1},8,["onClick"])])])),default:(0,a.k6)((()=>[(0,a.Lk)("div",null,[(0,a.bF)(b,{"label-width":"auto"},{default:(0,a.k6)((()=>[(0,a.bF)(p,{label:"服务器地址"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",u,[(0,a.bF)(s,{class:"flex-1",modelValue:n.state.list.Host,"onUpdate:modelValue":l[0]||(l[0]=e=>n.state.list.Host=e),onChange:n.handleSave},null,8,["modelValue","onChange"]),i])])),_:1}),(0,a.bF)(p,{label:"信标密钥"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",c,[(0,a.bF)(s,{class:"flex-1",type:"password","show-password":"",maxlength:"36",modelValue:n.state.list.SecretKey,"onUpdate:modelValue":l[1]||(l[1]=e=>n.state.list.SecretKey=e),onChange:n.handleSave},null,8,["modelValue","onChange"]),h])])),_:1}),(0,a.bF)(g),(0,a.bF)(f),(0,a.bF)(k)])),_:1})])])),_:1})],4)}var g=t(9299),f=t(1219);const k={class:"flex"},b=(0,a.Lk)("span",null,"密钥正确时可使用内网穿透",-1);function w(e,l,t,n,o,r){const s=(0,a.g2)("el-input"),d=(0,a.g2)("el-form-item");return(0,a.uX)(),(0,a.Wv)(d,{label:"服务器穿透密钥"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",k,[(0,a.bF)(s,{class:"flex-1",type:"password","show-password":"",modelValue:n.state.SForwardSecretKey,"onUpdate:modelValue":l[0]||(l[0]=e=>n.state.SForwardSecretKey=e),maxlength:"36",onBlur:n.handleChange},null,8,["modelValue","onBlur"]),b])])),_:1})}var y=t(743),v={setup(e){const l=(0,r.Kh)({SForwardSecretKey:""}),t=()=>{(0,y.Ap)().then((e=>{l.SForwardSecretKey=e}))},n=()=>{l.SForwardSecretKey&&(0,y.Co)(l.SForwardSecretKey).then((()=>{f.nk.success("已操作")})).catch((()=>{f.nk.error("操作失败")}))},o=()=>{n()};return(0,a.sV)((()=>{t()})),{state:l,handleChange:o}}},C=t(1241);const F=(0,C.A)(v,[["render",w]]);var S=F;const V={class:"flex"},_=(0,a.Lk)("span",null,"密钥正确时可更新服务端",-1);function x(e,l,t,n,o,r){const s=(0,a.g2)("el-input"),d=(0,a.g2)("el-form-item"),u=(0,a.g2)("el-input-number");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(d,{label:"服务器更新密钥"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",V,[(0,a.bF)(s,{class:"flex-1",type:"password","show-password":"",modelValue:n.state.secretKey,"onUpdate:modelValue":l[0]||(l[0]=e=>n.state.secretKey=e),maxlength:"36",onBlur:n.handleChange},null,8,["modelValue","onBlur"]),_])])),_:1}),(0,a.bF)(d,{label:"客户端更新检测频率"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",null,[(0,a.Lk)("div",null,[(0,a.bF)(u,{modelValue:n.state.year,"onUpdate:modelValue":l[1]||(l[1]=e=>n.state.year=e),min:0,max:99,style:{width:"12rem"},onChange:n.handleSecChange},null,8,["modelValue","onChange"]),(0,a.eW)(" 年 "),(0,a.bF)(u,{modelValue:n.state.month,"onUpdate:modelValue":l[2]||(l[2]=e=>n.state.month=e),min:0,max:99,style:{width:"12rem"},onChange:n.handleSecChange},null,8,["modelValue","onChange"]),(0,a.eW)(" 月 "),(0,a.bF)(u,{modelValue:n.state.day,"onUpdate:modelValue":l[3]||(l[3]=e=>n.state.day=e),min:0,max:99,style:{width:"12rem"},onChange:n.handleSecChange},null,8,["modelValue","onChange"]),(0,a.eW)(" 日 ")]),(0,a.Lk)("div",null,[(0,a.bF)(u,{modelValue:n.state.hour,"onUpdate:modelValue":l[4]||(l[4]=e=>n.state.hour=e),min:0,max:99,style:{width:"12rem"},onChange:n.handleSecChange},null,8,["modelValue","onChange"]),(0,a.eW)(" 时 "),(0,a.bF)(u,{modelValue:n.state.min,"onUpdate:modelValue":l[5]||(l[5]=e=>n.state.min=e),min:0,max:99,style:{width:"12rem"},onChange:n.handleSecChange},null,8,["modelValue","onChange"]),(0,a.eW)(" 分 "),(0,a.bF)(u,{modelValue:n.state.sec,"onUpdate:modelValue":l[6]||(l[6]=e=>n.state.sec=e),min:0,max:99,style:{width:"12rem"},onChange:n.handleSecChange},null,8,["modelValue","onChange"]),(0,a.eW)(" 秒 ")])])])),_:1})],64)}var K=t(920),G={setup(e){const l=(0,s.B)(),t=(0,r.Kh)({secretKey:"",year:0,month:0,day:0,hour:0,min:1,sec:0}),n=()=>{(0,K.yN)().then((e=>{t.secretKey=e}))},o=()=>{t.secretKey&&(0,K.ir)(t.secretKey).then((()=>{f.nk.success("已操作")})).catch((()=>{f.nk.error("操作失败")}))},d=()=>{const e=31536e3*t.year+2592e3*t.month+86400*t.day+3600*t.hour+60*t.min+t.sec;(0,K.PY)(e).then((()=>{f.nk.success("已操作")})).catch((()=>{f.nk.error("操作失败")}))},u=()=>{d()},i=()=>{o()};return(0,a.sV)((()=>{n();let e=l.value.config.Common.UpdateIntervalSeconds;t.year=Math.floor(e/31536e3),e%=31536e3,t.month=Math.floor(e/2592e3),e%=2592e3,t.day=Math.floor(e/86400),e%=86400,t.hour=Math.floor(e/3600),e%=3600,t.min=Math.floor(e/60),e%=60,t.sec=e})),{state:t,handleChange:i,handleSecChange:u}}};const z=(0,C.A)(G,[["render",x]]);var E=z;const B={key:0},U={key:1},W={key:0},I={key:1},L={key:0},X={key:1};function A(e,l,t,n,o,r){const s=(0,a.g2)("el-input"),u=(0,a.g2)("el-checkbox"),i=(0,a.g2)("el-form-item"),c=(0,a.g2)("el-table-column"),h=(0,a.g2)("el-switch"),m=(0,a.g2)("el-table"),p=(0,a.g2)("el-dialog");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(i,{label:"中继密钥"},{default:(0,a.k6)((()=>[(0,a.bF)(s,{type:"password","show-password":"",modelValue:n.state.list.SecretKey,"onUpdate:modelValue":l[0]||(l[0]=e=>n.state.list.SecretKey=e),maxlength:"36",onChange:n.handleSave},null,8,["modelValue","onChange"]),(0,a.bF)(u,{modelValue:n.state.list.SSL,"onUpdate:modelValue":l[1]||(l[1]=e=>n.state.list.SSL=e),label:"使用ssl",size:"large",onChange:n.handleSave},null,8,["modelValue","onChange"]),(0,a.bF)(u,{modelValue:n.state.list.Disabled,"onUpdate:modelValue":l[2]||(l[2]=e=>n.state.list.Disabled=e),label:"禁用中继",size:"large",onChange:n.handleSave},null,8,["modelValue","onChange"]),(0,a.Lk)("a",{href:"javascript:;",onClick:l[3]||(l[3]=e=>n.state.show=!0),class:(0,d.C4)(["delay a-line",{red:0==n.state.nodes.length,green:n.state.nodes.length>0}])}," 中继节点 : "+(0,d.v_)(n.state.nodes.length),3)])),_:1}),(0,a.bF)(p,{modelValue:n.state.show,"onUpdate:modelValue":l[4]||(l[4]=e=>n.state.show=e),title:"中继节点",width:"760",top:"2vh"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",null,[(0,a.bF)(m,{data:n.state.nodes,size:"small",border:"",height:"500"},{default:(0,a.k6)((()=>[(0,a.bF)(c,{property:"Name",label:"名称"}),(0,a.bF)(c,{property:"MaxGbTotal",label:"月流量",width:"160"},{default:(0,a.k6)((e=>[0==e.row.MaxGbTotal?((0,a.uX)(),(0,a.CE)("span",B,"无限制")):((0,a.uX)(),(0,a.CE)("span",U,(0,d.v_)((e.row.MaxGbTotalLastBytes/1024/1024/1024).toFixed(2))+"GB / "+(0,d.v_)(e.row.MaxGbTotal)+"GB ",1))])),_:1}),(0,a.bF)(c,{property:"MaxBandwidthTotal",label:"总带宽",width:"80"},{default:(0,a.k6)((e=>[0==e.row.MaxBandwidthTotal?((0,a.uX)(),(0,a.CE)("span",W,"无限制")):((0,a.uX)(),(0,a.CE)("span",I,(0,d.v_)(e.row.MaxBandwidthTotal)+"Mbps",1))])),_:1}),(0,a.bF)(c,{property:"MaxBandwidth",label:"连接带宽",width:"80"},{default:(0,a.k6)((e=>[0==e.row.MaxBandwidth?((0,a.uX)(),(0,a.CE)("span",L,"无限制")):((0,a.uX)(),(0,a.CE)("span",X,(0,d.v_)(e.row.MaxBandwidth)+"Mbps",1))])),_:1}),(0,a.bF)(c,{property:"ConnectionRatio",label:"连接数",width:"60"},{default:(0,a.k6)((e=>[(0,a.Lk)("span",null,(0,d.v_)(100*e.row.ConnectionRatio)+"%",1)])),_:1}),(0,a.bF)(c,{property:"Delay",label:"延迟",width:"60"},{default:(0,a.k6)((e=>[(0,a.Lk)("span",null,(0,d.v_)(e.row.Delay)+"ms",1)])),_:1}),(0,a.bF)(c,{property:"Public",label:"公开",width:"60"},{default:(0,a.k6)((e=>[(0,a.bF)(h,{disabled:"",modelValue:e.row.Public,"onUpdate:modelValue":l=>e.row.Public=l,size:"small"},null,8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"])])])),_:1},8,["modelValue"])],64)}var M=t(9232),P={setup(e){const l=(0,s.B)(),t=(0,r.Kh)({list:l.value.config.Client.Relay.Server,show:!1,nodes:[],timer:0});(0,a.wB)((()=>l.value.config.Client.Relay.Server),(()=>{t.list.Delay=l.value.config.Client.Relay.Server.Delay}));const n=()=>{(0,M.q)(t.list).then((()=>{f.nk.success("已操作")})).catch((()=>{f.nk.error("操作失败")}))},o=()=>{(0,M.W4)().then((e=>{t.nodes=e,t.timer=setTimeout(o,1e3)})).catch((()=>{t.timer=setTimeout(o,1e3)}))};return(0,a.sV)((()=>{o()})),(0,a.hi)((()=>{clearTimeout(t.timer)})),{state:t,handleSave:n}}};const T=(0,C.A)(P,[["render",A],["__scopeId","data-v-2dc931d2"]]);var D=T,N={components:{SForward:S,Updater:E,RelayServers:D},setup(e){const l=(0,s.B)(),t=(0,r.Kh)({list:l.value.config.Client.ServerInfo,height:(0,a.EW)((()=>l.value.height-90))}),n=()=>{(0,g.jU)(t.list).then((()=>{f.nk.success("已操作")})).catch((()=>{f.nk.error("操作失败")}))};return{state:t,handleSave:n}}};const R=(0,C.A)(N,[["render",p]]);var $=R;function Q(e,l,t,n,o,r){const s=(0,a.g2)("el-input"),u=(0,a.g2)("el-table-column"),i=(0,a.g2)("Delete"),c=(0,a.g2)("el-icon"),h=(0,a.g2)("el-button"),m=(0,a.g2)("el-popconfirm"),p=(0,a.g2)("Plus"),g=(0,a.g2)("el-table");return(0,a.uX)(),(0,a.Wv)(g,{stripe:"",data:n.state.list,border:"",size:"small",width:"100%",height:`${n.state.height}px`,onCellDblclick:n.handleCellClick},{default:(0,a.k6)((()=>[(0,a.bF)(u,{prop:"Name",label:"名称",width:"100"},{default:(0,a.k6)((e=>[e.row.NameEditing?((0,a.uX)(),(0,a.Wv)(s,{key:0,autofocus:"",size:"small",modelValue:e.row.Name,"onUpdate:modelValue":l=>e.row.Name=l,onBlur:l=>n.handleEditBlur(e.row,"Name")},null,8,["modelValue","onUpdate:modelValue","onBlur"])):((0,a.uX)(),(0,a.CE)(a.FK,{key:1},[(0,a.eW)((0,d.v_)(e.row.Name),1)],64))])),_:1}),(0,a.bF)(u,{prop:"Id",label:"Id"},{default:(0,a.k6)((e=>[e.row.IdEditing?((0,a.uX)(),(0,a.Wv)(s,{key:0,autofocus:"",size:"small",modelValue:e.row.Id,"onUpdate:modelValue":l=>e.row.Id=l,onBlur:l=>n.handleEditBlur(e.row,"Id")},null,8,["modelValue","onUpdate:modelValue","onBlur"])):((0,a.uX)(),(0,a.CE)(a.FK,{key:1},[(0,a.eW)((0,d.v_)(e.row.Id),1)],64))])),_:1}),(0,a.bF)(u,{prop:"Password",label:"密码"},{default:(0,a.k6)((e=>[e.row.PasswordEditing?((0,a.uX)(),(0,a.Wv)(s,{key:0,type:"password","show-password":"",size:"small",modelValue:e.row.Password,"onUpdate:modelValue":l=>e.row.Password=l,onBlur:l=>n.handleEditBlur(e.row,"Password")},null,8,["modelValue","onUpdate:modelValue","onBlur"])):((0,a.uX)(),(0,a.CE)(a.FK,{key:1},[(0,a.eW)((0,d.v_)(e.row.Password.replace(/.{1}/g,"*")),1)],64))])),_:1}),(0,a.bF)(u,{prop:"Oper",label:"操作",width:"110"},{default:(0,a.k6)((e=>[(0,a.Lk)("div",null,[(0,a.bF)(m,{title:"删除不可逆，是否确认?",onConfirm:l=>n.handleDel(e.$index)},{reference:(0,a.k6)((()=>[(0,a.bF)(h,{type:"danger",size:"small"},{default:(0,a.k6)((()=>[(0,a.bF)(c,null,{default:(0,a.k6)((()=>[(0,a.bF)(i)])),_:1})])),_:1})])),_:2},1032,["onConfirm"]),(0,a.bF)(h,{type:"primary",size:"small",onClick:l=>n.handleAdd(e.$index)},{default:(0,a.k6)((()=>[(0,a.bF)(c,null,{default:(0,a.k6)((()=>[(0,a.bF)(p)])),_:1})])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data","height","onCellDblclick"])}var Y=t(7477),j={components:{Delete:Y.epd,Plus:Y.FWt,Select:Y.l6P},setup(e){const l=(0,s.B)(),t=(0,r.Kh)({list:l.value.config.Client.Groups||[],height:(0,a.EW)((()=>l.value.height-90))});(0,a.wB)((()=>l.value.config.Client.Groups),(()=>{0==t.list.filter((e=>e["__editing"])).length&&(t.list=l.value.config.Client.Groups)}));const n=(e,l)=>{o(e,l.property)},o=(e,l)=>{t.list.forEach((e=>{e["NameEditing"]=!1,e["IdEditing"]=!1,e["PasswordEditing"]=!1})),e[`${l}Editing`]=!0,e["__editing"]=!0},d=(e,l)=>{e[`${l}Editing`]=!1,e["__editing"]=!1,c()},u=e=>{t.list.splice(e,1),c()},i=e=>{t.list.filter((e=>""==e.Id||""==e.Name)).length>0||(t.list.splice(e+1,0,{Name:"",Id:"",Password:""}),c())},c=()=>{(0,g.zp)(t.list).then((()=>{f.nk.success("已操作")})).catch((()=>{f.nk.error("操作失败")}))};return{state:t,handleCellClick:n,handleEditBlur:d,handleDel:u,handleAdd:i}}};const q=(0,C.A)(j,[["render",Q]]);var H=q;const J={class:"t-c"};function O(e,l,t,n,o,r){const s=(0,a.g2)("el-checkbox"),u=(0,a.g2)("el-col"),i=(0,a.g2)("el-row"),c=(0,a.g2)("el-checkbox-group"),h=(0,a.g2)("el-button"),m=(0,a.g2)("el-card");return(0,a.uX)(),(0,a.CE)("div",{style:(0,d.Tr)({height:`${n.state.height}px`})},[(0,a.bF)(m,{shadow:"never"},{header:(0,a.k6)((()=>[(0,a.eW)("选择你需要同步的项，将这些配置同步到本组所有客户端")])),footer:(0,a.k6)((()=>[(0,a.Lk)("div",J,[(0,a.bF)(h,{type:"success",onClick:n.handleSync},{default:(0,a.k6)((()=>[(0,a.eW)("确定同步")])),_:1},8,["onClick"])])])),default:(0,a.k6)((()=>[(0,a.Lk)("div",null,[(0,a.bF)(s,{modelValue:n.state.checkAll,"onUpdate:modelValue":l[0]||(l[0]=e=>n.state.checkAll=e),indeterminate:n.state.isIndeterminate,onChange:n.handleCheckAllChange},{default:(0,a.k6)((()=>[(0,a.eW)("全选")])),_:1},8,["modelValue","indeterminate","onChange"]),(0,a.bF)(c,{modelValue:n.state.checkeds,"onUpdate:modelValue":l[1]||(l[1]=e=>n.state.checkeds=e),onChange:n.handleCheckedsChange},{default:(0,a.k6)((()=>[(0,a.bF)(i,null,{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.state.names,(e=>((0,a.uX)(),(0,a.Wv)(u,{span:8},{default:(0,a.k6)((()=>[((0,a.uX)(),(0,a.Wv)(s,{key:e.name,label:e.label,value:e.name},{default:(0,a.k6)((()=>[(0,a.eW)((0,d.v_)(e.label),1)])),_:2},1032,["label","value"]))])),_:2},1024)))),256))])),_:1})])),_:1},8,["modelValue","onChange"])])])),_:1})],4)}var Z=t(8835),ee={label:"同步配置",name:"async",order:7,setup(e){const l=(0,s.B)(),t=(0,r.Kh)({names:[],checkAll:!1,isIndeterminate:!1,checkeds:[],height:(0,a.EW)((()=>l.value.height-90))}),n=e=>{t.checkeds=e?t.names.map((e=>e.name)):[],t.isIndeterminate=!1},o=e=>{const l=e.length;t.checkAll=l===t.names.length,t.isIndeterminate=l>0&&l<t.names.length},d={SignInSecretKey:"当前信标密钥",GroupSecretKey:"当前分组密码",RelaySecretKey:"当前中继密钥",SForwardSecretKey:"当前服务器穿透密钥",UpdaterSecretKey:"服务器更新密钥",TunnelTransports:"打洞协议列表"};(0,a.sV)((()=>{(0,Z.Iv)().then((e=>{t.names=e.map((e=>({name:e,label:d[e]})))}))}));const u=()=>{0!=t.checkeds.length?(0,Z.E1)(t.checkeds).then((e=>{f.nk.success("已操作")})):f.nk.error("至少选择一个")};return{state:t,handleCheckAllChange:n,handleCheckedsChange:o,handleSync:u}}};const le=(0,C.A)(ee,[["render",O]]);var te=le,ae={components:{SignInServers:$,Groups:H,Async:te},setup(e){const l=(0,s.B)(),t=(0,a.EW)((()=>l.value.hasAccess("Config"))),n=(0,a.EW)((()=>l.value.hasAccess("Sync"))),o=(0,r.Kh)({tab:"signin"});return{state:o,hasConfig:t,hasSync:n}}};const ne=(0,C.A)(ae,[["render",o],["__scopeId","data-v-11926c68"]]);var oe=ne}}]);