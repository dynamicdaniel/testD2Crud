(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-395eaa83","chunk-2d216064","chunk-2d0c1b57"],{"15fd":function(e,t,r){"use strict";r("a4d3"),r("c975"),r("b64b");function a(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}function n(e,t){if(null==e)return{};var r,n,o=a(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,"a",(function(){return n}))},"46cb":function(e,t,r){"use strict";r.r(t),r.d(t,"crudOptions",(function(){return c}));r("99af");var a=r("c276"),n=r("c1df"),o=r.n(n),c={columns:[{title:"员工姓名",key:"userId",align:"center",width:100,type:"input",search:{disabled:!0},form:{rules:[{required:!0,message:"请填写姓名"}],addTemplateHandle:function(e){console.log("addTemplateHandle",e);var t=a["a"].cookies.get("id"),r=a["a"].cookies.get("username");console.log("user id",t),e.value=r,e.component.disabled=!0},editTemplateHandle:function(e){var t=a["a"].cookies.get("id"),r=a["a"].cookies.get("username");console.log("user id",t),e.value=r,e.component.disabled=!0}},valueBuilder:function(e,t){var r=a["a"].cookies.get("username");e.userId=r},valueResolve:function(e,t){var r=a["a"].cookies.get("id");e.userId=r},dict:{url:"/human/user/list",value:"id",label:"name"}},{title:"请假/出差原因",align:"center",width:200,key:"reason",search:{disabled:!0},type:"input",form:{rules:[{required:!0,message:"请填写原因"}]}},{title:"时间",key:"dateFromTo",align:"center",width:280,search:{width:300,disabled:!1},type:"datetimerange",form:{rules:[{required:!0,message:"请选择时间"}],component:{width:"100%",props:{clearable:!0}}},valueBuilder:function(e,t){console.log("valueBuilder",e),e.dateFromTo=[o()(e.startDate),o()(e.endDate)]},valueResolve:function(e,t){e.dateFrom=o()(e.dateFromTo[0]).format("YYYY-MM-DD HH:mm:ss"),e.dateTo=o()(e.dateFromTo[1]).format("YYYY-MM-DD HH:mm:ss")},formatter:function(e,t,r,a){return console.log("formatter",e,t,r,a),e.startDate&&e.endDate&&"".concat(o()(e.startDate).format("YYYY-MM-DD HH:mm:ss")," - ").concat(o()(e.endDate).format("YYYY-MM-DD HH:mm:ss"))}},{title:"请假类别",key:"type",align:"center",search:{},type:"select",form:{rules:[{required:!0,message:"请选择请假类别"}],component:{props:{clearable:!0}}},dict:{data:[{value:1,label:"出差"},{value:2,label:"请假"}]}},{title:"出差地点",key:"location",align:"center",search:{disabled:!0},type:"input",form:{rules:[{required:!0,message:"请填写联系方式"}],component:{props:{clearable:!0}}}},{title:"审核结果",key:"isAgree",align:"center",search:{},type:"select",form:{rules:[{required:!1,message:"请填写邮箱地址"}],disabled:!0,component:{props:{clearable:!0}}},dict:{data:[{label:"待审核",value:0},{label:"通过",value:1},{label:"驳回",value:2}]},formatter:function(e,t,r,a){return console.log("formatter",e,t,r,a),e.createAt&&o()(e.createA).format("YYYY-MM-DD HH:mm:ss")}}],formOptions:{labelWidth:"120px"},page:{current:1,size:5,total:1},rowHandle:{width:200}}},a749:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("d2-container",[r("crud-search",{ref:"search",staticClass:"d2-mb-10",attrs:{options:e.crud.searchOptions},on:{submit:e.handleSearch}}),r("d2-crud",{ref:"d2Crud",attrs:{columns:e.crud.columns,data:e.crud.list,rowHandle:e.crud.rowHandle,"edit-title":"修改","add-template":e.crud.addTemplate,"add-rules":e.crud.addRules,"edit-template":e.crud.editTemplate,"edit-rules":e.crud.editRules,"form-options":e.crud.formOptions,options:e.crud.options},on:{"dialog-open":e.handleDialogOpen,"row-edit":e.handleRowEdit,"row-add":e.handleRowAdd,"row-remove":e.handleRowRemove,"dialog-cancel":e.handleDialogCancel,"form-data-change":e.handleFormDataChange,"custom-emit":e.customEmit}},[r("el-button",{staticStyle:{"margin-bottom":"5px"},attrs:{slot:"header",size:"small",type:"primary"},on:{click:e.addRow},slot:"header"},[e._v("新增")])],1),r("crud-footer",{ref:"footer",attrs:{slot:"footer",current:e.crud.page.current,size:e.crud.page.size,total:e.crud.page.total},on:{change:e.handlePaginationChange},slot:"footer"})],1)},n=[],o=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),c=r("15fd"),u=r("c276"),l=r("46cb"),d=r("1fbf"),i=r("c166");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={name:"page1",mixins:[d["d2CrudPlus"].crud],methods:{getCrudOptions:function(){return l["crudOptions"]},pageRequest:function(e){var t=u["a"].cookies.get("id"),r=u["a"].cookies.get("role"),a=e.current,n=e.size,o=(e.dateFromTo,Object(c["a"])(e,["current","size","dateFromTo"]));console.log("员工请假条件",o);var l=m({roleType:r,userId:t,page:a,size:n},o);return Object(i["GetList"])(l).then((function(e){var t=e||{},r=t.list,a=t.total,n=t.page,o=t.size,c={data:{records:r,current:n,size:o,total:a}};return c}))},addRequest:function(e){return Object(i["AddObj"])(e)},updateRequest:function(e){return Object(i["UpdateObj"])(e)},delRequest:function(e){return Object(i["DelObj"])(e.id)},customEmit:function(e){}}},f=p,b=r("2877"),g=function(e){e.options.__source="src/views/personalOnOff/index.vue"},h=g,O=Object(b["a"])(f,a,n,!1,null,null,null);"function"===typeof h&&h(O);t["default"]=O.exports},c166:function(e,t,r){"use strict";r.r(t),r.d(t,"GetList",(function(){return n})),r.d(t,"AddObj",(function(){return o})),r.d(t,"UpdateObj",(function(){return c})),r.d(t,"DelObj",(function(){return u}));var a=r("9bd2");function n(e){return Object(a["a"])({url:"/human/travel/list",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/human/travel/create",method:"post",data:e})}function c(e){return Object(a["a"])({url:"/human/travel/update",method:"put",data:e})}function u(e){return Object(a["a"])({url:"/human/travel/delete",method:"delete",params:{id:e}})}}}]);