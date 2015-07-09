/** *********************角色修改*****start*********************** */
var zNodes = [];
function updatetree(role_code){
	var setting = {
			check: {
					enable: true,
					chkStyle: "checkbox",  
				    chkboxType: { "Y" : "ps", "N" : "ps" }
				},
			data : {
				key : {
					name : "module_name",
					url:""
				},
				simpleData : {
					enable : true,
					idKey : "module_code",
					pIdKey : "parent_module_code"
				}
			},
			async : {
				enable : true,
				url : "/Hotel/rest/module/menuall",
				dataType: "json",//默认text
				type : "get",// 默认post
				otherParam: { "role_code":role_code},
				dataFilter : filter
			// 异步返回后经过Filter
			},
			callback : {
				onAsyncSuccess : zTreeOnAsyncSuccess,// 异步加载成功的
				onAsyncError: zTreeOnAsyncError,//失败
			// 捕获单击节点之前的事件回调函数
				onClick: onClick
			}
		};
	$.fn.zTree.init($("#roleTree"), setting, zNodes);//权限菜单tree
}

//treeId是treeDemo
function filter(treeId, parentNode, data) {
	var module_1;
	if(data.succeed){
		if(data.result.statusCode == "200"){
			module_1 = data.result.successMsg;
		}
	}
	return module_1;
}
function zTreeOnAsyncError(event, treeId, treeNode, XMLHttpRequest, textStatus, errorThrown) {
}
function zTreeOnAsyncSuccess(event, treeId, treeNode, msg){
	var treeObj  = $.fn.zTree.getZTreeObj("roleTree");
	treeObj.expandAll(true);
	var nodes = treeObj.transformToArray(treeObj.getNodes());
	for (var i=0, l=nodes.length; i < l; i++) {
		if(nodes[i].ischecked=="1"){
			treeObj.checkNode(nodes[i], true, false);
		}
	}
}
function onClick(e,treeId, treeNode) {
	var zTree = $.fn.zTree.getZTreeObj("roleTree");
	zTree.expandNode(treeNode);
}

/** *********************角色修改*****end*********************** */
/** *********************角色查看*****start*********************** */
var code;
var zNodes2 = [];
function getTree( s){
	code=s;
	var setting2 = {
			view: {
					showIcon: showIconForTree
				},
			data : {
				key : {
					name : "module_name",
					url:""
				},
				simpleData : {
					enable : true,
					idKey : "module_code",
					pIdKey : "parent_module_code"
				}
			},
			async : {
				enable : true,
				url : "/Hotel/rest/rolemodule/rolemenu",
				otherParam: { "role_code":code},
				dataType: "json",//默认text
				type : "get",// 默认post
				dataFilter : filter2
			},
			callback : {
				onAsyncSuccess : zTreeOnAsyncSuccess2,// 异步加载成功的
				onAsyncError: zTreeOnAsyncError2,//失败
			// 捕获单击节点之前的事件回调函数
				onClick: onClick2
			}
		};


	$.fn.zTree.init($("#roleTree"), setting2, zNodes2);//权限菜单tree
}


function filter2(treeId, parentNode, data) {
	var module_1;
	if(data.succeed){
		if(data.result.statusCode == "200"){
			module_1 = data.result.successMsg;
		}
	}
	return module_1;
}
function showIconForTree(treeId, treeNode) {
	return !treeNode.isParent;
}
function zTreeOnAsyncError2(event, treeId, treeNode, XMLHttpRequest, textStatus, errorThrown) {
}
function zTreeOnAsyncSuccess2(event, treeId, treeNode, msg){
	var treeObj  = $.fn.zTree.getZTreeObj("roleTree");
	treeObj.expandAll(true);
}
function onClick2(e,treeId, treeNode) {
	var zTree = $.fn.zTree.getZTreeObj("roleTree");
	zTree.expandNode(treeNode);
}
/** *********************角色查看*****end*********************** */

/** *********************角色新增*****start*********************** */
var zNodes3 = [];
var setting3 = {
	check: {
			enable: true,
			chkStyle: "checkbox",  
		    chkboxType: { "Y" : "ps", "N" : "ps" }
		},
	data : {
		key : {
			name : "module_name",
			url:""
		},
		simpleData : {
			enable : true,
			idKey : "module_code",
			pIdKey : "parent_module_code"
		}
	},
	async : {
		enable : true,
		url : "/Hotel/rest/module/menuall",
		dataType: "json",//默认text
		type : "get",// 默认post
		dataFilter : filter
	// 异步返回后经过Filter
	},
	callback : {
		onAsyncSuccess : zTreeOnAsyncSuccess3,// 异步加载成功的
		onAsyncError: zTreeOnAsyncError3,//失败
	// 捕获单击节点之前的事件回调函数
		onClick: onClick3
	}
};
//treeId是treeDemo
function filter(treeId, parentNode, data) {
	var module_1;
	if(data.succeed){
		if(data.result.statusCode == "200"){
			module_1 = data.result.successMsg;
		}
	}
	return module_1;
}
function zTreeOnAsyncError3(event, treeId, treeNode, XMLHttpRequest, textStatus, errorThrown) {
}
function zTreeOnAsyncSuccess3(event, treeId, treeNode, msg){
	var treeObj  = $.fn.zTree.getZTreeObj("roleTree");
	treeObj.expandAll(true);
}
function onClick3(e,treeId, treeNode) {
	var zTree = $.fn.zTree.getZTreeObj("roleTree");
	zTree.expandNode(treeNode);
}



var zNodes = [];
/** *********************角色新增*****end*********************** */
