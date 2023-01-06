var banner_ul = document.getElementsByClassName("banner_ul")[0];
var dot = document.getElementsByClassName("dot");
var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];
var flag = 0;
// 计数器 
setInterval(function () {

    if (flag == 1) {
        // 通过计数器来判断当前是不是最后一张图片
        flag = 0;
        banner_ul.style.left = "0px";
        // 计数器清零   位置清零  回到最原始的位置
    } else {
        // 正常计数器自增
        flag++;
    }

    for (var j = 0; j < dot.length; j++) {
        dot[j].className = "dot";
    }
    // 将当前单击的元素添加active类名来做到添加新的样式 
    dot[flag].className = "dot active";
    // 通过提前封装好的动画方法  进行ul的位置移动
    moveAnimation1(banner_ul, -1519 * flag);

}, 7000);
// 每一张图片需要多久事件



prev.onclick = function () {
    if (flag == 0) {
        // 通过计数器来判断当前是不是最后一张图片
        flag = 1;
        // 计数器清零   位置清零  回到最原始的位置
    } else {
        // 正常计数器自增
        flag--;
    }

    for (var j = 0; j < dot.length; j++) {
        dot[j].className = "dot";
    }
    // 将当前单击的元素添加active类名来做到添加新的样式 
    dot[flag].className = "dot active";

    moveAnimation1(banner_ul, -1519 * flag);
}


next.onclick = function () {
    if (flag == 1) {
        // 通过计数器来判断当前是不是最后一张图片
        flag = 0;
        // 计数器清零   位置清零  回到最原始的位置
    } else {
        // 正常计数器自增
        flag++;
    }

    for (var j = 0; j < dot.length; j++) {
        dot[j].className = "dot";
    }
    // 将当前单击的元素添加active类名来做到添加新的样式 
    dot[flag].className = "dot active";

    moveAnimation1(banner_ul, -1519 * flag);
}




for (var i = 0; i < dot.length; i++) {
    // 保存i值 在dom元素中 i值所代表的就是每一个小圆点的索引 它对应第几张照片
    dot[i].index = i;
    // 绑定事件
    dot[i].onclick = function () {
        // 当单击小圆点之后 将原点的index值 赋值给计数器 做到同步执行
        flag = this.index;
        // 排他思想
        for (var j = 0; j < dot.length; j++) {
            dot[j].className = "dot";
        }
        // 将当前单击的元素添加active类名来做到添加新的样式 
        this.className = "dot active";
        // 计算最终要到达的目的地位置
        var target = this.index * (-1519);
        // 走动画
        moveAnimation1(banner_ul, target);

    }
}
function moveAnimation1(ele, target) {

    // 清除定时器 清除状态
    clearInterval(ele.aaa);

    ele.aaa = setInterval(function () {
        if (ele.offsetLeft > target) {
            // 如果当前的位置大于最终的目的地位置  需要向左走
            if ((ele.offsetLeft - 13) < target) {
                ele.style.left = target + "px"
            } else {
                ele.style.left = ele.offsetLeft - 13 + "px";
            }
            // 步长不整

        } else if (ele.offsetLeft < target) {
            // 如果当前位置小于目的地的位置  需要向右走
            if ((ele.offsetLeft + 13) > target) {
                ele.style.left = target + "px"
            } else {
                ele.style.left = ele.offsetLeft + 13 + "px";
            }
            // 步长不整

        } else if (ele.offsetLeft == target) {
            // 如果当前的位置等于最终位置  已经到达了目的地 可以停止了
            clearInterval(ele.aaa);
        }
    }, 20)

}


// 缓慢动画
function moveAnimation1(ele, target) {

    // 清除定时器
    clearInterval(ele.aaa);

    ele.aaa = setInterval(function () {
        if (ele.offsetLeft == target) {
            clearInterval(ele.aaa);
        } else {
            var show = (target - ele.offsetLeft) / 10;
            // 目标位置到当前位置的距离 / 10   通过这种百分比相同的计算 来做到 由快到慢的一个速度曲线
            if (show > 0) {
                show = Math.ceil(show);
            } else {
                show = Math.floor(show);
            }
            // show = parseInt(show);
            // console.log(show);
            // 取整数  如果是大于零 向右走 向上取整
            // 如果小于零  向左走 向下取整
            ele.style.left = ele.offsetLeft + show + "px";
        }
    }, 20)

}

// 轮播图上方导航栏
var ul_li = document.getElementsByClassName("ul_li");
var New = document.getElementsByClassName("New")[0];
for (var i = 0; i < ul_li.length; i++) {
    ul_li[i].index = i;
    ul_li[i].onmouseover = function () {
        pt()
        ul_li[this.index].style.backgroundColor = "#F0AC07";
    }
}
function pt() {
    for (var j = 0; j < ul_li.length; j++) {
        ul_li[j].style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}