// 匀速动画
function moveAnimation(ele, target) {

    // 清除定时器 清除状态
    clearInterval(ele.aaa);

    ele.aaa = setInterval(function() {
        if (ele.offsetLeft > target) {
            // 如果当前的位置大于最终的目的地位置  需要向左走
            if ((ele.offsetLeft - 7) < target) {
                ele.style.left = target + "px"
            } else {
                ele.style.left = ele.offsetLeft - 7 + "px";
            }
            // 步长不整

        } else if (ele.offsetLeft < target) {
            // 如果当前位置小于目的地的位置  需要向右走
            if ((ele.offsetLeft + 7) > target) {
                ele.style.left = target + "px"
            } else {
                ele.style.left = ele.offsetLeft + 7 + "px";
            }
            // 步长不整

        } else if (ele.offsetLeft == target) {
            // 如果当前的位置等于最终位置  已经到达了目的地 可以停止了
            clearInterval(ele.aaa);
        }
    }, 50)

}


// 缓慢动画
function moveAnimation1(ele, target) {

    // 清除定时器
    clearInterval(ele.aaa);

    ele.aaa = setInterval(function() {
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
    }, 100)

}