(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8df8"],{5777:function(e,l,a){"use strict";a.r(l),a.d(l,"crudOptions",(function(){return r}));var t=a("c276"),r={columns:[{title:"姓名",key:"name",align:"center",type:"input",search:{disabled:!1},form:{rules:[{required:!0,message:"请填写姓名"}],editTemplateHandle:function(e){console.log("editTemplateHandle",this,e);var l=t["a"].getRole();console.log("role",l),1!==l&&(e.component.disabled=!0)}}},{title:"性别",key:"sex",align:"center",width:50,search:{},type:"select",form:{rules:[{required:!0,message:"请选择性别"}]},dict:{data:[{value:1,label:"男"},{value:2,label:"女"}]}},{title:"角色",key:"role",align:"center",width:100,search:{},type:"select",form:{rules:[{required:!0,message:"请选择性别"}]},dict:{data:[{value:2,label:"HR"},{value:3,label:"部门经理"},{value:4,label:"员工"}]}},{title:"部门",key:"deptId",align:"center",width:100,search:{},type:"select",form:{rules:[{required:!0,message:"请选择部门"}],component:{props:{filterable:!0,clearable:!0}},valueResolve:function(e,l){console.log("valueResolve",e,l)}},dict:{url:"/human/dept/list",value:"id",label:"deptName",isTree:!1}},{title:"岗位",key:"jobId",width:150,align:"center",search:{},type:"select",form:{rules:[{required:!1,message:"请选择岗位"}],component:{props:{filterable:!0,clearable:!0}}},dict:{url:"/human/job/list",value:"id",label:"jobName"}},{title:"任职资格",key:"qualification",align:"center",search:{},type:"select",form:{rules:[{required:!0,message:"请选择任职资格"}],component:{props:{filterable:!0,clearable:!0}}},dict:{data:[{value:1,label:"T1"},{value:2,label:"T2"},{value:3,label:"T3"},{value:4,label:"T4"},{value:5,label:"T5"},{value:6,label:"T6"},{value:7,label:"低级"},{value:8,label:"中级"},{value:9,label:"高级"},{value:10,label:"管理"}]}},{title:"联系方式",key:"tel",align:"center",search:{disabled:!0},type:"input",form:{rules:[{required:!0,message:"请填写联系方式"}],component:{props:{filterable:!0,multiple:!0,clearable:!0}}},dict:{data:[{value:"sz",label:"深圳"},{value:"gz",label:"广州"},{value:"wh",label:"武汉"},{value:"sh",label:"上海"}]}},{title:"邮箱地址",key:"email",width:200,align:"center",search:{disabled:!0},type:"input",form:{rules:[{required:!1,message:"请填写邮箱地址"}],component:{props:{filterable:!0,multiple:!0,clearable:!0}}},dict:{}},{title:"紧急联系人",key:"urgentMan",align:"center",search:{disabled:!0},type:"input",form:{rules:[{required:!1,message:"请填写紧急联系人"}],component:{props:{filterable:!0,multiple:!0,clearable:!0}}},dict:{data:[{value:"sz",label:"深圳"},{value:"gz",label:"广州"},{value:"wh",label:"武汉"},{value:"sh",label:"上海"}]}},{title:"紧急联系人电话",key:"urgentManTel",align:"center",search:{disabled:!0},type:"input",form:{rules:[{required:!1,message:"请填写紧急联系人电话"}],component:{props:{filterable:!0,multiple:!0,clearable:!0}}},dict:{}},{title:"系统账号",key:"account",align:"center",search:{disabled:!0},type:"input",form:{rules:[{required:!0,message:"请填写系统账号"}],component:{props:{filterable:!0,multiple:!0,clearable:!0}}},dict:{}},{title:"密码",align:"center",key:"password",search:{disabled:!0},type:"input",form:{rules:[{required:!0,message:"请填写密码"}],component:{props:{filterable:!0,multiple:!0,clearable:!0}}},dict:{}}],page:{current:1,size:10,total:1},rowHandle:{width:300,custom:[{text:"员工详情",type:"primary",size:"small",emit:"custom-emit"}]}}}}]);