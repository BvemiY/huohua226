/**
 * 匀速运动
 * @param {*} ele 元素对象ul长图
 * @param {*} target 移动距离
 */
function moveAnimation(ele, target) {
	clearInterval(interId);
	interId = setInterval(function() {
		// x:小盒距离 大盒子的距离 和 target目标距离
		// x800|0 == target800|0 ,,清空定时器
		// x0-799 > target 0, 向左  点击向左 moveAnimation(small,0)
		// x0-799 <target 800 向右  点击向右 moveAnimation(small,800)
		var x = ele.offsetLeft; //0 -1000 -2000     -1000
		if (x == target) {
			clearInterval(interId);
		} else if (x > target) {
			x -= 30;
			x = x < target ? target : x;
			ele.style.left = x + 'px';
		} else if (x < target) {
			x += 30;
			x = x > target ? target : x;
			ele.style.left = x + 'px';
		}
	}, 10)
}
var interId;
/**
 * 缓速动画
 * @param {*} ele
 * @param {*} target
 */
function slowMoveAnima(ele, target) {
	clearInterval(interId)
	interId = setInterval(function() {
		if (ele.offsetLeft == target) {
			clearInterval(interId);
		} else {
			var x = (target - ele.offsetLeft) / 10; // (700,0)(200,800)
			x = x > 0 ? Math.ceil(x) : Math.floor(x);
			ele.style.left = ele.offsetLeft + x + 'px';
		}
	}, 10);
}
