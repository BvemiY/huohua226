# 1. Ajax

在web应用编程技术中，Ajax很流行，它使用HTTP脚本来按需加载数据，使用我们可以在不刷新整个页面的情况下，实现页面的局部变更。jQuery对原生的Ajax操作进行了封装，定义了一个工具方法和四个工具函数。这些高级工具都基于同一个强大的底层函数：`$.ajax()`。

## $.get()

 通过远程 HTTP GET 请求载入信息。

```javascript
jQuery.get(url, [data], [callback], [type])
```

**url**:待载入页面的URL地址

**data**:待发送 Key/value 参数,对象或字符串，传递给服务器的数据。

**callback**:载入成功时回调函数。

**type**:返回内容格式，xml, html, script, json, text, _default

## $.getJSON()

$.getJSON函数获取到文本之后，不会将其当作脚本执行，而会将其解析为JSON。当成功加载URL，并且将内容成功解析为JSON后，解析结果会作为第一个参数传入回调函数中。

语法格式：

```javascript
jQuery.getJSON(url, [data], [callback])
```

参数说明：

URL 必需。请求的URL。

data：对象或字符串，传递给服务器的数据。

回调函数:function(data,status,xhr)   可选。请求完成时的回调函数，无论请求成功或失败。 

回调函数的参数说明：

data：服务器返回的脚本的文本内容。

status：请求的状态。

xhr： XMLHttpRequest对象。

## $.post()

```javascript
jQuery.post(url, [data], [callback], [type])
```

**url**:发送请求地址。

**data**:待发送 Key/value 参数。

**callback**:发送成功时回调函数。

**type**:返回内容格式，xml, html, script, json, text, _default。

## $.ajax()函数

这些函数可以用于发起任意Ajax请求,通过 HTTP 请求加载远程数据,$.ajax() 返回其创建的 XMLHttpRequest 对象.

```js
jQuery.ajax( [settings ] )
```

**settings**:AJAX 请求设置。所有选项都是可选的。[详情参照](https://www.jquery123.com/jQuery.ajax/)

```js
$.ajax({
    type: 'GET',
    url: baseURL + '/api/student/getStudent',
    data: {
        name: '小谷'
    },
    success: function(data, status, xhr) {
        console.log(data);
    },
    error: function(err) {
        console.log('请求失败');
        console.log(err);
    }
});
$.ajax({
    type: 'POST',
    url: baseURL + '/api/student/addStudent',
    contentType: 'application/json',
    data: JSON.stringify({
    }),
    success: function(data, status, xhr) {
        console.log(data);
    },
    error: function(err) {
        console.log('请求失败');
        console.log(err);
    },
    cache: false,
    dataType: 'json'
});
```



# 2. jQuery工具函数

在jQuery中,工具函数是指直接依附于jQuery对象,针对jQuery对象本身定义的方法,即全局性的,我们统称为工具函数,或Utilites函数。

主要作用于：字符串、数组、对象。

调用格式:
    $.函数名()或jQuery.函数名()

## $.each( array/object, callback )   

该工具函数与 `$('.box').each()` 方法不同，`$('.box').each()` 方法只能辨认jQuery对象，而 `$.each()` 工具函数不仅可以遍历数组元素还可以遍历对象属性。第一个参数是要遍历的数组或对象；第二个参数是要在每个数组元素或对象属性上调用的函数。该函数在调用时会带有两个参数：数组元素的索引或对象的属性名，以及数组元素的值或对象的属性值。函数中的 `this` 值和第二个参数是一样的。

```js
$.each( array, callback )

$.each( object, callback )
```

## $.map()

该函数和Array对象的`map()`方法类似。它接受数组或类数组对象作为第一个参数；第二个参数则为映射函数。每一个数组元素与索引都会传入这个映射函数中，返回值就是由映射函数返回的值组成的新数组。`$.map()`与`map()`方法存在两点不同。首先，如果映射函数返回的是`null`，该值不会被包含在返回的数组中。其次，如果映射函数返回的是数组，该数组的元素会被添加到结果数组中，而不是数组本身中。

## $.extend()

该函数接受对象作为参数。它会将第二个及其之后参数对象的属性复制到第一个参数对象中，如果同名的属性在第一个参数对象中已经存在，则会覆盖它。该函数会忽略任何值为 `undefineed` 的属性。如果仅传入一个对象，该对象的属性会被复制到jQuery对象自身中。该对象的返回值是属性被复制到的对象。如果第一个参数的值为 `true`，会执行深拷贝：第三个（及其之后）对象的属性会被复制到第二个对象上。注意，第一个参数为 `false` 是不被支持的。

```js
jQuery.extend([deep], target, object1, [objectN])
```

**deep**:如果设为true为深拷贝，默认为false浅拷贝。

**target**:目标对象，待修改对象。

**object1**:待合并到第一个对象的对象。

**objectN**:待合并到第一个对象的对象。

**浅拷贝**:是把被拷贝对象复杂数据类型中的地址拷贝给目标对象,修改其中一个对象会影响其他对象。

**深拷贝**:前面加上true,完全克隆,修改目标对象不会影响被拷贝对象。

# 3.  jQuery 插件

   想要更复杂的特效效果，可以借助于 jQuery 插件完成，这些插件也是依赖于jQuery来完成的，所以必须要先引入。

   jQuery 插件常用的网站：

1. jQuery 插件库  http://www.jq22.com/     
2. jQuery 之家   http://www.htmleaf.com/ 

   jQuery 插件使用步骤：

1. 引入相关文件。（jQuery 文件 和 插件文件）    
2. 复制相关html、css、js (调用插件)。

## 3.1 瀑布流插件

   jQuery之家的开源插件，瀑布流。我们将重点详细讲解，从找到插件所在网页，然后点击下载代码，到插件的使用等，后面的插件使用可参考瀑布流插件的使用。

以下为例演示:http://www.htmleaf.com/jQuery/pubuliuchajian/201601093003.html

**代码演示**

   插件的使用三点：   1. 引入css.           2.引入JS            3.引入html。 （有的简单插件只需引入html和js，甚至有的只需引入js）

- 总结：jQuery插件就是引入别人写好的：html 、css、js  （有时也可以只引入一部分，读懂后也可以修改部分内容）

## 3.2 图片懒加载插件

	图片的懒加载就是：当页面滑动到有图片的位置，图片才进行加载，用以提升页面打开的速度及用户体验。

**代码演示**https://www.jq22.com/jquery-info11629

	懒加载只需引入html 和 js操作 即可，此插件不涉及css。

- 1.引入js

```javascript
<script src="js/EasyLazyload.min.js"></script>
<script>
   	lazyLoadInit({
   		showTime: 1100,
   		onLoadBackEnd: function(i, e) {
     		console.log("onLoadBackEnd:" + i);
   		},
   		onLoadBackStart: function(i, e) {
     		console.log("onLoadBackStart:" + i);
   		}
 	});
</script>
```

- 2.引入html

```javascript
 <img data-lazy-src="upload/floor-1-3.png" alt="">
```

## 3.3 全屏滚动插件

	全屏滚动插件比较大，所以，一般大型插件都会有帮助文档，或者网站。全屏滚动插件介绍比较详细的网站为：

http://www.dowebok.com/demo/2014/77/

**代码演示**

	全屏滚动因为有多重形式，所以不一样的风格html和css也不一样，但是 js 变化不大。所以下面只演示js的引入，html和css引入根据自己实际

项目需要使用哪种风格引入对应的HTML和CSS。

```javascript
<script src="js/jquery.min.js"></script>
<script src="js/fullpage.min.js"></script>
<script>
  	$(function() {
  		$('#dowebok').fullpage({
    		sectionsColor: ['pink', '#4BBFC3', '#7BAABE', '#f90'],
    		navigation: true
  		});
	});
</script>
```

注意：实际开发，一般复制文件，然后在文件中进行修改和添加功能。

## 3.4 数字滚动插件

jquery.countup.js是一款轻量级jquery数字动画插件。该数字动画插件可以在页面滚动时，将指定的数字从0开始计数增加动画。

该数字动画插件可以控制动画的延迟时间和动画过渡时间。它依赖于Waypoints插件来监听滚动事件。

https://www.jq22.com/jquery-info10784

## 3.5 页面滚动动画

当页面向滚动时触发动画效果,非常好用

https://www.jq22.com/jquery-info1384

## 3.7 bootstrap组件(之后详细讲解)

Bootstrap是 Twitter 公司设计的基于HTML、CSS、JavaScript开发的简洁、直观、强悍的前端开发框架，他依靠jQuery实现，且支持响应式布局，使得 Web 开发更加方便快捷。

## 3.8 补充:swiper插件(js框架)

Swiper(前称Swiper master) 是一款免费以及轻量级的移动设备触控滑块的js框架，使用硬件加速过渡（如果该设备支持的话）。主要使用与移动端的网站、网页应用程序（web apps），以及原生的应用程序（native apps）。同时，在Android、WP8系统以及PC端的浏览器也有着良好的用户体验。