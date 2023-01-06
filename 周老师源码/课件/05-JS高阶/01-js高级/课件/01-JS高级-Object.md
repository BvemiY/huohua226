# 1 理解Object

## 1.1 创建对象

实例化Object对象的方式有两种：使用`Object`构造器和使用对象的字面量。例如：

```javascript
var person1 = {
    name: '张美丽'
};
var person2 = new Object();
person2.name = '李美丽';
```

## 1.2 定义属性

我们可以随时随地为对象添加属性，也可以随时修改属性的值。

```javascript
var person1 = {
    name: '王美丽'
};

var person2 = new Object();
person2.name = '孙美丽';

//给对象添加属性
person1.age = 23;
person2.age = 25;

//修改属性的值
person1.name = '张美丽';
console.log(person1.name);     
person2.name = '李美丽';
console.log(person2.name);      
```


## 1.3 属性枚举(遍历)

### 1.3.1 for...in

默认情况下，我们添加到对象上的属性都是可枚举的，这样的话我们就可以使用`for-in`循环遍历它们。
### 1.3.2 Object.keys(obj)

参数：要返回其枚举自身属性的对象

返回值：一个表示给定对象的所有可枚举属性的字符串数组

```js
Object.keys(person) // ["name", "age", "address","getName"]
```

### 1.3.3 Object.getOwnPropertyNames()方法

该方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。

```js
Object.getOwnPropertyNames(obj)
```

- 参数:一个对象，其自身的可枚举和不可枚举属性的名称被返回。

- 返回值:在给定对象上找到的自身属性对应的字符串数组。

## 1.4 检查属性是否存在

由于对象的属性可以被随时随地被修改或删除，因此有时候我们需要检查对象的某个属性是否存在。使用下面的方式检查是不可靠的,那么通过`in`可以判断对象是否有这个属性。

## 1.5 删除属性

我们可以随时给对象添加属性，也可以随时地删除属性。有的人可能会使用`null`值赋值给属性，这样并不能删除属性，仅仅是改变了属性的值。我们需要使用`delete`操作符将属性从对象中完全删除。

```js
//删除属性
obj.name = undefined;
其name、say属性仍存在obj对象中，怎样才能在obj中移除name属性呢？
delete obj.name;
```

## 1.6 属性特征

### 1.6.1 通用特征

- 对象的属性的类型分两种：一种是**数据属性**，一个种是**访问器属性**。数据属性用来存储一个值，比如所上个例子中的`name`。**访问器**属性不包含值，而是定义了一个`get`和`set`函数，当读取属性时，调用`get`函数，当写属性时，调用`set`函数。

  ```js
  var obj = {
      _myname: 'zml',
      get name(){
          console.log('get方法被调用了');
          return this._myname + '1111';
      },
      set name(value){
          console.log('set方法被调用了');
          this._myname = value;
      }
  };
  ```

### 1.6.2 定义属性

- 通过赋值操作定义对象，添加的普通属性，**注意**:默认情况下都是可修改、可枚举、可配置的。

- 如果我们想改变属性的特征，可以使用`Object.defineProperty()`方法,该方法允许精确地添加或修改对象的属性,在遍历枚举对象属性时会被枚举到（[`for...in`] 或 [`Object.keys`]方法）。

- **注意**:默认情况下，使用 `Object.defineProperty()` 添加的属性值是不可修改，不可枚举，不可配置(删除和添加)。

  **语法:**

  ```js
  Object.defineProperty(obj, prop, descriptor)
  ```

- 该方法接受3个参数：拥有被修改属性的对象、被修改的属性名、包含描述特征的对象。

  - `configurable`

    当且仅当该属性的 `configurable` 键值为 `true` 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。 **默认为** **false**。

  - `enumerable`

    当且仅当该属性的 `enumerable` 键值为 `true` 时，该属性才会出现在对象的枚举属性中。 **默认为 false**。

  数据描述符还具有以下可选键值：

  - `value`

    该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。 **默认为 undefined**。

  - `writable`

    当且仅当该属性的 `writable` 键值为 `true` 时，属性的值，也就是上面的 `value`，才能被[`赋值运算符`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)改变。 **默认为 false。**

  存取描述符还具有以下可选键值：

  - `get`

    属性的 getter 函数，如果没有 getter，则为 `undefined`。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 `this` 对象（由于继承关系，这里的`this`并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。 **默认为 undefined**。

  - `set`

    属性的 setter 函数，如果没有 setter，则为 `undefined`。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 `this` 对象。 **默认为 undefined**。
    
```js
var obj = {
    _age: 3
};
//数据属性
Object.defineProperty(obj, 'name', {
    configurable: false, // 能否通过 delete 删除属性从而重新定义属性，能否修改属性的特性，能否把属性修改为访问器属性。
    enumerable: false, // 能否通过 for-in 循环返回属性。 
    writable: true, // 能否修改属性的值
    value: '张三' // 这个属性的数据值。
});
//访问题属性
Object.defineProperty(obj, 'age', {
    configurable: true,
    enumerable: true,
    get: function() { // 读取 age 属性时，会执行这个函数。返回值就是 age 的值。
        return this._age;
    },
    set: function(newValue) { // 写入 age  属性时，会执行这个函数。
        if (newValue > 5) {
            this._age += newValue;
        } else {
            this._age = newValue;
        }
    }
});
```


### 1.6.3 定义多个属性

定义单个属性的内部特性使用`Object.defineProperty()`，定义多个属性使用的是`Object.defineProperties()`，这个方法接受2个参数，第一个是属性所属的对象，第二个是包含被定义属性的对象。

```js
var obj = {
    _age: 2
};
Object.defineProperties(obj, {
    name: {
        configurable: false,
        writable: true,
        value: '李四'
    },
    age: {
        get: function () {
            return this._age; 
        },
        set: function (newValue) {
            if (newValue > 5) {
                this._age += newValue;
            } else {
                this._age = newValue;
            }
        }
    }
});
```

### 1.6.4 获取属性特征

**方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性**

获取属性的内部特性的方法有两个：`Object.getOwnPropertyDescriptor(obj, prop)`和`Object.getOwnPropertyDescriptors(obj)`。

#### 1.Object.getOwnPropertyDescriptor(obj, prop)

**参数**

> `obj` : 目标所在的对象。

> `prop` : 要获取特性的属性。

**返回值**

如果给定的属性存在于对象上，则返回属性描述符对象。否则返回 undefined。

#### 2.Object.getOwnPropertyDescriptors(obj)

**参数**

> `obj` : 要获取的目标对象。

**返回值**

所指定的对象的所有自身属性的特性描述符，如果没有任何自身属性则返回空对象。

