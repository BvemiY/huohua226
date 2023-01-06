# 1. Location 对象

location 对象包含有关当前 URL 的信息

location 对象是 window 对象的一部分，可通过 window.location 属性对其进行访问。

## 属性

| 属性     | 描述                                  |
| -------- | ------------------------------------- |
| origin   | 返回页面来源的域名                    |
| host     | 返回一个URL的主机名和端口             |
| hostname | 返回URL的主机名                       |
| port     | 返回一个URL服务器使用的端口号         |
| pathname | 返回的URL路径名。                     |
| protocol | 返回一个URL协议                       |
| hash     | 返回从井号 (#) 开始的 URL（锚）       |
| href     | 返回完整的URL                         |
| search   | 返回从问号 (?) 开始的 URL（查询部分） |

## 方法

| 属性                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| assign()                                                     | 加载新的文档。跟href一样，可以跳转页面                       |
| replace()                                                    | 用新的文档替换当前文档。替换当前页面，不记录历史，不可以后退 |
| [reload()](https://www.w3school.com.cn/jsref/met_loc_reload.asp) | 重新加载当前文档。相当于点击刷新按钮刷新F5，如果参数为true，相当于ctrl+F5强制刷新 |

提示：

- window.location.reload():它先会根据浏览器的*http*请求的头部 If-**Modified-Since**的值来判断在请求文件时文件是否发生变化，如果文档已改变，reload() 会再次下载该文档。如果文档未改变，则该方法将从[缓存](http://www.so.com/s?q=%E7%BC%93%E5%AD%98&ie=utf-8&src=internal_wenda_recommend_textn)中装载文档。这与用户单击[浏览器](http://www.so.com/s?q=%E6%B5%8F%E8%A7%88%E5%99%A8&ie=utf-8&src=internal_wenda_recommend_textn)的刷新[按钮](http://www.so.com/s?q=%E6%8C%89%E9%92%AE&ie=utf-8&src=internal_wenda_recommend_textn)的效果是完全一样的。 window.location.reload(false);
- 参数为true，无论文档的修改时间是什么，或者有没有缓存，它都会从新在服务器端请求一次来更新到页面。

# 2. Navigator对象

[navigator](https://www.w3school.com.cn/jsref/dom_obj_navigator.asp) 对象是包含有关浏览器的信息。

window.navigator 接口表示用户代理的状态和标识。 

navigator 对象包含有关浏览器的信息，它有很多属性，我们最常用的是 userAgent，该属性可以返回由客户机发送服务器的 user-agent 头部的值。

下面前端代码可以判断用户那个终端打开页面，实现跳转

```js
if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    window.location.href = "";     //跳转到手机端的页面
} else {
    window.location.href = "";     //跳转到pc端的页面
}
```

扩展阅读：

[浏览器的User-Agent](https://www.cnblogs.com/wuhaozhou/archive/2017/05/25/6905188.html )

[浏览器的小故事](http://blog.sina.com.cn/s/blog_8a122dcf0102xbzq.html)

**HTML5中提供了一个Navigator.geolocation可以获取地理位置，但是由于兼容性太差，所以在这我们不过多给同学讲解。**

## 2.1 通过第三方API获取 

在现实开发中，通过调用第三方API（如百度地图）来实现地理定位信息，这些API都是基于用户当前位置的，并将用位置位置（经/纬度）当做参数传递，就可以实现相应的功能。

http://api.map.baidu.com/lbsapi/creatmap/index.html

- 1.在搜索引擎中搜索“百度地图生成器”。

- 2.切换当前城市。

- 3.查找定位地点。

- 4.拖动地图，微调定位地点，使定位地点位于地图的中央。

- 5.也可通过地图上的控件调整地图的等级和位置。

- 6.根据项目需求设置地图的显示尺寸，要现实的操作控件以及地图的状态。

- 7.添加标注点，并对标注点进行设置说明，然后保存。

- 8.预览最终结果，然后获取生成代码。

- 9.拷贝生成代码，创建html文件，例如，map.html，并粘贴拷贝的代码。

- 生成代码默认使用的gb2312编码

  <meta http-equiv="Content-Type" content="text/html; charset=gb2312" /\>
  修改成utf-8即可。

- 地图中的图标默认是显示不出来的，需要手动替换图片地址。

- <http://api.map.baidu.com/lbsapi/creatmap/images/us_cursor.gif>、http://api.map.baidu.com/img/markers.png

功能复杂的地图建议：http://lbsyun.baidu.com/   百度地图api，调用百度API进行地图设置

## 2.2 Navigator.onLine网络状态

onLine 属性是一个只读的布尔值，声明了系统是否处于脱机模式，如果系统属于脱机状态，则返回 false，否则返回 true。

```js
if (navigator.onLine) {
    alert('online')
} else {
    alert('offline');
}
```

提示：浏览器的兼容性.

HTML5 给我们提供了2个事件  online  和 offline，给window绑定事件--检测网络开始状态

```js
window.ononline = function() {
    console.log('你的浏览器在线工作');
};
window.onoffline = function() {
    console.log('你的浏览器离线工作');
}
```

#   3. History 对象

History 对象包含用户（在浏览器窗口中）访问过的 URL。

History 对象是 window 对象的一部分，可通过 window.history 属性对其进行访问。

## 属性

| 属性                                                         | 描述                              |
| ------------------------------------------------------------ | --------------------------------- |
| length | 返回浏览器历史列表中的 URL 数量。 |

## 方法
| 方法      | 描述                                                         |
| --------- | ------------------------------------------------------------ |
| back()    | 加载 history 列表中的前一个 URL。                            |
| forward() | 加载 history 列表中的下一个 URL。                            |
| go()      | 加载 history 列表中的某个具体页面。其中go()参数为正值前进,参数为负值后退,为0刷新页面 |

# 4. 文件读取

怎么上传文件显示到页面？  或者 上传完毕图片显示缩略图到页面上。。。

通过FileReader对象我们可以读取本地存储的文件，使用 [File ](https://developer.mozilla.org/zh-CN/docs/DOM/File)对象来指定所要读取的文件或数据。其中File对象可以是来自用户在一个元素上选择文件后返回的[FileList ](https://developer.mozilla.org/zh-CN/docs/DOM/FileList)对象。

## 4.1 Files对象

由于HTML5中我们可以通过为表单元素添加multiple属性，因此我们通过<input>上传文件后得到的是一个Files对象（伪数组形式）。

## 4.2 FileReader对象

HTML5新增内建对象，可以读取本地文件内容。

var reader = new FileReader(); 可以实例化一个对象

实例方法

1、reader.readAsDataURL()：DataURL形式读取文件

2、reader.readAsText()：读取文件根据特殊的编码格式转化为内容(字符串形式)

事件监听

onload 当文读取完成时调用

属性

reader.result 文件读取结果

[参考资料](#toc)

https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader



# 5. 拖拽

在 HTML5 中，拖放是标准的一部分，任何元素都能够拖放。

## 5.1 拖拽和释放

拖拽：Drag

释放：Drop

拖拽指的是鼠标点击源对象后一直移动对象不松手，一但松手即释放了

## 5.2 设置元素为可拖放

draggable 属性：就是标签元素要设置draggable=true，否则不会有效果 

注意：  链接和图片默认是可拖动的，不需要 draggable 属性。

##  5.3 拖拽API的相关事件

**被拖动的源对象可以触发的事件：**

(1)ondragstart：源对象开始被拖动

(2)ondrag：源对象被拖动过程中(鼠标可能在移动也可能未移动)

(3)ondragend：源对象被拖动结束

  **拖动源对象可以进入到上方的目标对象可以触发的事件：**

(1)ondragenter：目标对象被源对象拖动着进入

(2)ondragover：目标对象被源对象拖动着悬停在上方

(3)ondragleave：源对象拖动着离开了目标对象

(4)ondrop：源对象拖动着在目标对象上方释放/松手

拖拽API总共就是7个函数！！

## 5.4 DataTransfer(拖拽事件提供的方法)

在进行拖放操作时，`DataTransfer` 对象用来保存被拖动的数据。它可以保存一项或多项数据、一种或者多种数据类型



