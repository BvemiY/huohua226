//数组去重的函数
/**
 * @param {Object} oldArr 老数组
 * @param {Object} newArr 新数组
 */
function quChong(oldArr, newArr) {
	for (var i = 0; i < oldArr.length; i++) {
		if (!newArr.includes(oldArr[i])) {
			newArr.push(oldArr[i]);
		}
	}
}
