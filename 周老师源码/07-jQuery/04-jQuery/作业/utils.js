/**
     * 返回将表单数据序列化为 k=v&k=v
     * @param {Object} form 表单对象
     */
function serializeKeyValue(form) {
  var params = [];
  for (var i = 0; i < form.elements.length; i++) {
    var field = form.elements[i];
    switch (field.type) {
      case "file":
      case "submit":
      case "reset":
      case "button":
        break;
      case "radio":
      case "checkbox":
        if (!field.checked) {
          break;
        };
      default:
        //不包含没有名字的表单字段
        if (field.name.length) {
          params.push(encodeURIComponent(field.name) + "=" +
            encodeURIComponent(field.value));
        }
    }
  }
  return params.join("&");
}
/**
 * 序列化为JSON对象{'k':v,'k':v}
 * @param {Object} form 当前表单对象
 */
function serializeJSON(form) {
  var arr = {};
  for (var i = 0; i < form.elements.length; i++) {
    var field = form.elements[i];
    switch (field.type) {
      case undefined:
      case 'button':
      case 'file':
      case 'reset':
      case 'submit':
        break;
      case 'checkbox':
      case 'radio':
        if (!field.checked) {
          break;
        };
      default:
        if (arr[field.name]) {
          arr[field.name] = arr[field.name] + ',' + field.value;
        } else {
          arr[field.name] = field.value;
        }
    }
  }
  return arr;
}