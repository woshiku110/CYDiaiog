/**
 * Created by zhangchunyu on 2017/7/4.
 */

var CYDiaiog = {
    //快递数据
    expressData:{},
    //返回回调(返回参数为 true或false)
    result: undefined,
    /**
     * 显示弹出层
     * @param   message        显示的字符串
     * @param   htmlPath       iframe的html路径
     * @param   result         成功回调
     * @return                 弹出层对象
     */
    show: function (message , htmlPath , result) {
        var dc = this.findTopWindow().document;
        if (dc.getElementById('CYDiaiog_bg') == undefined){
            this.init('600px' , '450px'); //默认大小
        }

        var bodyHeight = Math.max(dc.body.scrollHeight,dc.documentElement.scrollHeight);
        dc.getElementById('CYDiaiog_bg').style.height = bodyHeight+'px';
        dc.getElementById('CYDiaiog_title').innerText = message;
        dc.getElementById('CYDiaiog_iframe').src = htmlPath;

        this.result = result; //记录成功的回调
        this.findTopWindow().CYDiaiogBuffer = this; //临时记录当前弹出的对象

        return this;
    },
    /**
     * 设置一个快递对象(可供弹出子页访问)
     * @param   objArr         自定义对象
     * @return                 弹出层对象
     */
    expressObj:function (objArr) {
        for (var obj in objArr){
            CYDiaiog.expressData[obj] = objArr[obj];
        }
    },
    /**
     * 初始化
     * @param   width       宽
     * @param   height      高
     * @return              弹出层对象
     */
    init: function (width , height) {
        var dc = this.findTopWindow().document;
        var bg = dc.getElementById('CYDiaiog_bg');
        if (bg != undefined){
            try{bg.remove();}catch(ex){try{bg.removeNode(true);}catch(ex){console.log(ex);}}
        }
        var that = this;

        //背景
        bg = dc.createElement('CYDiaiogDiv');
        bg.id = 'CYDiaiog_bg';
        bg.className =  'CYDiaiog_DOM_OBJ';

        //内容盒子
        var content  = dc.createElement('CYDiaiogDiv');
        content.id = 'CYDiaiog_content';
        content.className = 'CYDiaiog_DOM_OBJ';
        content.style.width = width;
        content.style.height = height;

        //标题盒子
        var titleBox = dc.createElement('CYDiaiogDiv');
        titleBox.id = 'CYDiaiog_titleBox';
        titleBox.className = 'CYDiaiog_DOM_OBJ';
        titleBox.style.width = width;

        //标题
        var title = dc.createElement('p');
        title.id = 'CYDiaiog_title';
        title.className =  'CYDiaiog_DOM_OBJ';

        //关闭按钮
        var closeBtn = dc.createElement('img');
        closeBtn.src = 'data:image/png;base64,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';
        closeBtn.id = 'CYDiaiog_closeButton';
        closeBtn.className =  'CYDiaiog_DOM_OBJ';
        closeBtn.onclick = function () {
            that.dimiss('0');
        };

        //网页
        var iframe = dc.createElement('iframe');
        iframe.id = 'CYDiaiog_iframe';
        iframe.className = 'CYDiaiog_DOM_OBJ';
        iframe.style.border = '0';
        iframe.showSourceDom = this;

        /// 添加控件
        dc.getElementsByTagName('body')[0].appendChild(bg);
        bg.appendChild(content);
        content.appendChild(titleBox);
        titleBox.appendChild(title);
        titleBox.appendChild(closeBtn);
        content.appendChild(iframe);

        return this;
    },
    /**
     * 关闭窗口
     * @param   identifier  关闭状态boolean标识
     */
    dimiss:function (identifier) {
        if (CYDiaiog.result != undefined && (typeof identifier == 'string')){
            CYDiaiog.result(identifier);
        }
        var bg = CYDiaiog.findTopWindow().document.getElementById('CYDiaiog_bg');
        try{bg.remove();}catch(ex){try{bg.removeNode(true);}catch(ex){console.log(ex);}}
    },
    /**
     * 找到顶层window(被动调用)
     */
    findTopWindow:function () {
        var w = parent;
        while (w !== w.parent){
            w = w.parent;
        }
        return w.window;
    }
};

(function LoadCSS(){
    var dc = CYDiaiog.findTopWindow().document;
    var __FILE__ = (function () {
        try {
            throw Error();
        }catch(ex){
            if(ex.fileName) { //Firefox
                return ex.fileName;
            }
            else if(ex.sourceURL){ //Safari
                return  ex.sourceURL;
            }
            else if(ex.stack){ //Chrome 或 IE
                var stackPath = (ex.stack.match(/at\s+(.*?):\d+:\d+/)||['',''])[1];
                return (stackPath.indexOf('Anonymous function (') >= 0)
                    ? stackPath.substring(20,stackPath.length)
                    : stackPath;
            }
            else{
                var path = dc.scripts[dc.scripts.length-1].src;//兼容IE10以下
                return path ? path : location.href; //内联js文件，将返回所在html路径
            }
        }
    })();
    var s = dc.createElement("link");
    s.rel = "stylesheet";
    s.type = "text/css";
    s.href = __FILE__.substring(0,__FILE__.lastIndexOf('/')+1) +'CYDiaiog.css';
    dc.getElementsByTagName("head")[0].appendChild(s);
})();