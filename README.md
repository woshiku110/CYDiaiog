# CYDiaiog
[![](https://img.shields.io/badge/Support-Firefox-red.svg)](http://www.firefox.com.cn)
[![](https://img.shields.io/badge/Support-Chrome-green.svg)](https://www.google.cn/chrome/browser/desktop/index.html)
[![](https://img.shields.io/badge/Support-Opera-red.svg)](http://www.opera.com)
[![](https://img.shields.io/badge/Support-Safari-blue.svg)](https://www.apple.com/cn/safari/)
[![](https://img.shields.io/badge/Support-IE11-yellow.svg)](https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads)
[![](https://img.shields.io/badge/Support-IE%20Edge-yellowgreen.svg)](https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads)
</br>
[![](https://img.shields.io/badge/language-javascript-green.svg)](https://github.com/zhangchunyu2016/CYDiaiog)
[![](https://img.shields.io/badge/QQ-707214577-red.svg)](http://wpa.qq.com/msgrd?v=3&uin=707214577&site=qq&menu=yes)
</br>


<p>原生js写的轻量级对话层，不依赖任何库或框架。</p></br>
<img src="http://upload-images.jianshu.io/upload_images/2028853-3ed06fa8e0ae5bb0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></br>

## 一.  功能简介 - Introduction

- [x] 独立css文件，更容易修改UI
- [x] 抽离页面逻辑，弹出内容和页面可以并行开发
- [x] 弹出页面和所在页面通过中间对象传值，降低耦合

## 二.  使用 - How to use
直接拖入文件文件即可，然后引入js文件

```
<script type="text/javascript" src="xxx/CYDiaiog/CYDiaiog.js"></script>
```

#### 链式语法
```
CYDiaiog.init('550px','350px').show('这是链式语法弹出的' , './Child.html' , function func(result) {
      console.log(result);
}).expressObj({'key1':'value1' , 'key2':'value2'});
```

#### 普通语法
```
CYDiaiog.init('550px','350px');
CYDiaiog.show('这是普通语法弹出的' , './Child.html' , function func(result) {
      console.log(result);
});
CYDiaiog.expressObj({'key1':'value1' , 'key2':'value2'});
```

#### 更多用法请看Demo


## 三.  更新历史 - Update History
暂无
			  

## 四.  更多 - More

- 如果你发现任何Bug 或者 新需求请issue我.

- 大家一起讨论一起学习进步.