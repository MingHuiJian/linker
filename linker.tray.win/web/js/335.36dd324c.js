"use strict";(self["webpackChunklinker_web"]=self["webpackChunklinker_web"]||[]).push([[335],{83:function(e,l,t){t.d(l,{$M:function(){return d},KW:function(){return o},gM:function(){return r},r7:function(){return n}});var a=t(4);const n=(e="0")=>(0,a.zG)("tunnel/get",e),r=()=>(0,a.zG)("tunnel/refresh"),o=e=>(0,a.zG)("tunnel/SetRouteLevel",e),d=e=>(0,a.zG)("tunnel/SetTransports",e)},7335:function(e,l,t){t.r(l),t.d(l,{default:function(){return c}});var a=t(6768);const n={class:"transport-wrap"};function r(e,l,t,r,o,d){const u=(0,a.g2)("el-table-column"),i=(0,a.g2)("el-option"),s=(0,a.g2)("el-select"),p=(0,a.g2)("el-switch"),h=(0,a.g2)("el-input-number"),b=(0,a.g2)("el-table");return(0,a.uX)(),(0,a.CE)("div",n,[(0,a.bF)(b,{stripe:"",data:r.state.list,border:"",size:"small",width:"100%",height:`${r.state.height}px`},{default:(0,a.k6)((()=>[(0,a.bF)(u,{prop:"Name",label:"名称",width:"120"}),(0,a.bF)(u,{prop:"Label",label:"说明"}),(0,a.bF)(u,{prop:"ProtocolType",label:"协议",width:"60"}),(0,a.bF)(u,{prop:"BufferSize",label:"缓冲区",width:"100"},{default:(0,a.k6)((e=>[(0,a.bF)(s,{modelValue:e.row.BufferSize,"onUpdate:modelValue":l=>e.row.BufferSize=l,placeholder:"Select",size:"small",onChange:r.handleSave},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.state.bufferSize,((e,l)=>((0,a.uX)(),(0,a.Wv)(i,{key:l,label:e,value:l},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),(0,a.bF)(u,{property:"Reverse",label:"反向",width:"60"},{default:(0,a.k6)((e=>[(0,a.bF)(p,{disabled:e.row.DisableReverse,modelValue:e.row.Reverse,"onUpdate:modelValue":l=>e.row.Reverse=l,onChange:r.handleSave,"inline-prompt":"","active-text":"是","inactive-text":"否"},null,8,["disabled","modelValue","onUpdate:modelValue","onChange"])])),_:1}),(0,a.bF)(u,{property:"SSL",label:"SSL",width:"60"},{default:(0,a.k6)((e=>[(0,a.bF)(p,{disabled:e.row.DisableSSL,modelValue:e.row.SSL,"onUpdate:modelValue":l=>e.row.SSL=l,onChange:r.handleSave,"inline-prompt":"","active-text":"是","inactive-text":"否"},null,8,["disabled","modelValue","onUpdate:modelValue","onChange"])])),_:1}),(0,a.bF)(u,{property:"Disabled",label:"禁用",width:"60"},{default:(0,a.k6)((e=>[(0,a.bF)(p,{modelValue:e.row.Disabled,"onUpdate:modelValue":l=>e.row.Disabled=l,onChange:r.handleSave,"inline-prompt":"","active-text":"是","inactive-text":"否",style:{"--el-switch-on-color":"red","--el-switch-off-color":"#ddd"}},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),(0,a.bF)(u,{prop:"Order",label:"调序",width:"104",fixed:"right"},{default:(0,a.k6)((e=>[(0,a.Lk)("div",null,[(0,a.bF)(h,{modelValue:e.row.Order,"onUpdate:modelValue":l=>e.row.Order=l,min:1,max:255,onChange:r.handleOrderChange,size:"small"},null,8,["modelValue","onUpdate:modelValue","onChange"])])])),_:1})])),_:1},8,["data","height"])])}var o=t(83),d=t(3830),u=t(1219),i=t(144),s=t(7477),p={label:"打洞协议",name:"transports",order:2,components:{Delete:s.epd,Plus:s.FWt,Top:s.EjV,Bottom:s.i5o},setup(e){const l=(0,d.B)(),t=(0,i.Kh)({list:l.value.config.Client.Tunnel.Transports.sort(((e,l)=>e.Order-l.Order)),height:(0,a.EW)((()=>l.value.height-20)),bufferSize:l.value.bufferSize});(0,a.wB)((()=>l.value.config.Client.Tunnel.Transports),(()=>{t.list=l.value.config.Client.Tunnel.Transports.sort(((e,l)=>e.Order-l.Order))}));const n=()=>{r(t.list)},r=()=>{t.list=t.list.slice().sort(((e,l)=>e.Order-l.Order)),(0,o.$M)(t.list).then((()=>{u.nk.success("已操作")})).catch((()=>{u.nk.error("操作失败")}))};return{state:t,handleOrderChange:n,handleSave:r}}},h=t(1241);const b=(0,h.A)(p,[["render",r],["__scopeId","data-v-5e206b1d"]]);var c=b}}]);