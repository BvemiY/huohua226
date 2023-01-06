
var tabBox = document.querySelector("#tab");// 大盒子 
tabBox.ul = tabBox.querySelector("ul"); // ul
tabBox.tabCon = tabBox.querySelector(".tab-con"); // 内容区
var tabAdd = tabBox.querySelector(".tab-add"); // 添加按钮

var lis; //所有的li
var sections;//所有的li
var closeLi;//所有的关闭

//1 点li能够实现tab切换: 循环li 添加点击事件
toggleTab ();
var index=0; //选中的索引
function toggleTab () {
	lis = tabBox.querySelectorAll("li"); //所有的li
	sections = tabBox.querySelectorAll("section"); //所有的li
	closeLi = tabBox.querySelectorAll(".icon-guanbi"); //所有的关闭
	for (var i = 0; i < lis.length; i++) {
		(function (i) {
			//给所有li添加点击事件,进行切换
			lis[i].onclick=function () {
				clearClass();//清空所有li和section的样式
				lis[i].className="li-active";//设置当前点击li的样式
				sections[i].className="con-active";
				index=i;// 切换tab时的索引
				console.log(i);
			}
			//li添加双击操作
			lis[i].ondblclick=function () {
				var str = lis[i].children[0].innerText;//获取span的文本
				//将span的文本替换为输入框
				lis[i].children[0].innerHTML='<input type="text" autofocus>'
				//给输入框添加光标离开事件
				lis[i].children[0].children[0].onblur=function () {
					var v = lis[i].children[0].children[0].value;
					// 如果为输入框为空, 设置为原来文本, 不为空设置输入框的值
					if (v=='') {
						lis[i].children[0].innerHTML=str;
					} else {
						lis[i].children[0].innerHTML=v;
					}
				}
			}
			//给关闭按钮添加事件, 阻止事件冒泡
			closeLi[i].onclick=function (e) {
				e.stopPropagation();//阻止事件冒泡
				lis[i].remove();
				sections[i].remove();
				console.log(i,index);
				clearClass ();
				if (i==index) {
					index--;
				}
				lis[index].className="li-active";//设置当前点击li的样式
				sections[index].className="con-active";
				
			}
		})(i);
	}
}
//清空所有样式
function clearClass () {
	lis = tabBox.querySelectorAll("li"); //所有的li
	sections = tabBox.querySelectorAll("section"); //所有的li
	closeLi = tabBox.querySelectorAll(".icon-guanbi"); //所有的关闭
	for (var i = 0; i < lis.length; i++) {
		lis[i].className='';
		sections[i].className='';
	}
}

//给添加按钮加点击事件
tabAdd.onclick=function (e) {
	e.stopPropagation();
	clearClass();
	var li = `
		<li class="li-active">
			<span>新标签页</span>
			<span class="iconfont icon-guanbi"></span>
		</li>
	`;
	var section = '<section class="con-active">'+Math.random();+'</section>';
	
	tabBox.ul.innerHTML+=li; //z在ul最后追加 一个 li
	tabBox.tabCon.innerHTML+=section;	//在内容区
	// tabBox.ul.insertAdjacentHTML('beforeend',li); //z在ul最后追加 一个 li
	// tabBox.tabCon.insertAdjacentHTML('beforeend',section);	//在内容区追加一个section
	toggleTab ()// 重写执行 切换函数
}

