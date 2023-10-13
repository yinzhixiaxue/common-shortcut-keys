---
theme: github
---

## 一、js 基础

### 1.解释一下原型链

#### 讲概念

原型链是 JavaScript 中实现继承的一种机制。每个实例对象（object）都有一个私有属性（称之为 **proto** ）指向它的构造函数的原型对象（prototype）。该原型对象也有一个自己的原型对象（**proto**），层层向上直到 Object.prototype 的**proto**为 null 。这样就形成了一个原型链。

#### 可以直接拓展

如果在当前对象中查找某个属性或方法时，当前对象不存在该属性或方法，JavaScript 引擎会沿着原型链向上查找，直到找到该属性或方法为止，或者查找到原型链的顶端。

#### 案例理解

例如，假设有一个对象 obj，它的构造函数的原型对象为 prototype1，而 prototype1 的构造函数的原型对象为 prototype2，那么在查找 obj 的属性或方法时，JavaScript 引擎会按照以下顺序进行查找：

在 obj 本身中查找该属性或方法。

如果 obj 中不存在该属性或方法，则在 prototype1 中查找。

如果 prototype1 中也不存在该属性或方法，则继续在 prototype2 中查找，以此类推，直到查找到 Object.prototype。

如果在 Object.prototype 中仍然没有找到该属性或方法，则返回 undefined。

这个查找过程就构成了原型链。在 JavaScript 中，对象的原型对象可以通过 **proto** 属性或 Object.getPrototypeOf() 方法获取。

原型链的作用在于实现了 JavaScript 中的继承。当一个对象需要继承另一个对象的属性和方法时，可以将父对象设置为子对象的原型对象，从而使子对象能够沿着原型链访问父对象的属性和方法。

#### 缺点

在原型链上查找属性比较耗时，对性能有副作用，这在性能要求苛刻（一般情况基本无影响）的情况下很重要。另外，试图访问不存在的属性时会遍历整个原型链（这点也很重要，需要记住）。

### 2.具体原型链判断

Object.**proto** === Function.prototype; (对象的隐式原型指向构造函数的显式原型)

Function.prototype.**proto** === Object.prototype;

Object.prototype.**proto** === null;

Person.prototype.constructor === Person

p1.**proto** === Person.prototype

#### 判断准则：

prototype 是构造函数才有的属性

**proto**：是隐式原型，是对象才有的属性，由于函数也属于对象的一种，所以函数也有这个属性

constructor 是原型对象才有的属性

对象.**proto** === 构造函数.prototype

构造函数.prototype.constructor = 构造函数

所有构造函数的 **proto** 属性都指向 Function.prototype

所有普通对象的 **proto** 属性都指向 Object.prototype

Object.prototype.**proto** === null

实例本身没有 constructor 属性，constructor 是原型对象才有的属性，所以它会沿着原型链在它的构造函数的原型对象上找到 constuctor 这个属性，也就是它的构造函数

￼

￼￼

### 3.Object.prototype.**proto** 原型链的尽头是什么

答案为 null，为什么？

因为 Object 的原型对象的**proto**属性指向的是 Object 的原型对象的构造函数的原型对象，但是因为 Object 的构造函数是 Object，那 Object.prototype 的**proto**是什么呢，是它自己，为防止死循环，所以原型链的尽头的 null

### 4.Function.prototype.**__proto__** 答案是什么

答案是 Object.prototype，为什么？
对象的隐式原型**proto**指向它构造函数的显式原型 prototype，Function.prototype 是原型对象，它的**proto**指向它构造函数 Object 的 prototype，所以 Function.prototype.**proto**=Object.prototype

### 5.构造函数自身的**proto**是什么

Function.prototype

由于对象的（隐式原型**proto**）指向它构造函数的（显式原型 prototype），Function 也是对象，它的构造函数是它本身，也就是 Function.**proto**===Function.prototype

### 6.Object.**proto** 答案是什么

Function.prototype

由于对象的（隐式原型**proto**）指向它构造函数的（显式原型 prototype），Object 的构造函数是 Function，所以 Object.**proto**=Function.prototype

### 7.Function.prototype===Function.**proto**

true

由于对象的（隐式原型**proto**）指向它构造函数的（显式原型 prototype），Function 的构造函数是他自己，所以 Function.**proto**===Function.prototype

### 8.Object instanceof Function

true

instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。

Object.**proto**指向它构造函数 Function 的 prototype，所以 Object instanceof Function 为 true

### 9.Function instanceof Object

true

instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。

Function 的构造函数是 Function 本身，Function.**proto**=Function.prototype,继续向上找，Function.prototype 是一个对象，Function.prototype.**proto**===Object.prototype，因为 Function.prototype 是一个对象，所以他的构造函数是 Object. 所以是 true

### 10. Function instanceof Function

true

instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。

Function 的构造函数是 Function 本身，Function.**proto**=Function.prototype,

### 11. instanceof 的原理及实现？typeof 和 instanceof 的区别是什么？

原理：原型链向上查找，判断构造函数(右值)的原型是否在对象(左值)的原型链上

```js
function myInstanceof(left, right) {
  if (typeof left !== 'object' || typeof left === null) return false let rprototype = right.prototype let lproto = left.__proto__
  while (true) {
    if (lproto === null) return false
    if (lproto === rprototype) return true lproto = lproto.__proto__
  }
}
```

#### typeof 与 instanceof 都是判断数据类型的方法，区别如下：

● 返回类型不同，typeof 会返回一个运算数的基本类型，instanceof 返回的是布尔值

● instanceof 可以准确判断引用数据类型，但是不能正确判断原始数据类型

● typeof 虽然可以判断原始数据类型（null 除外），但是无法判断引用数据类型（function 除外）

```js
typeof 1; // 'number'
typeof '1' // 'string' 
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol' 
typeof null // 'object' 
typeof[] // 'object'
typeof {} // 'object' 
typeof(() = >{}) // 'function' 
typeof new Date() // 'object' 
typeof new RegExp() // 'object'
```

typeof 比较特殊的是 null，function

function 也是 object，为什么 typeof function 是 function，而不是 object？

function 实际上是 object 的一个子类型，更深点说，函数是一个可以被调用的对象。（参考：你不知道的 JS-中卷）。

函数本质上就是对象，只不过与普通的对象相比，它在内部实现了一个[[call]]方法，用来表示该对象可以被调用。

typeof 来判断一个对象时，如果发现内部包含了[[call]]方法，就会返回 function。

附上 typeof 操作符返回判断图：

￼

#### 扩展：typeof 的原理

其实，js 在底层存储变量的时候，会在变量的机器码的 1-3 位存储其类型信息，对象的机器码是 000，但是对于 undefined 和 null 来说，null 的所有机器码都是 000，undefined 则是-2^30 整数,

typeof 可以对基本数据类型进行类型判断，例如 number, string, object, boolean, function, undefined, symbol，但是在判断 object 类型的时候，而不能细致的具体到哪一种 object，如果要想具体到哪一种 object，可

推荐使用：Object.prototype.toString.call()

```js
Object.prototype.toString.call(1); // "[object Number]" 
Object.prototype.toString.call('1') // "[object String]" 
Object.prototype.toString.call(undefined) // "[object Undefined]" 
Object.prototype.toString.call(true) // "[object Boolean]" 
Object.prototype.toString.call(Symbol(1)) // "[object Symbol]" 
Object.prototype.toString.call(null) // "[object Null]" 
Object.prototype.toString.call([]) // "[object Array]" 
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call(true) // "[object Boolean]" 
Object.prototype.toString.call(() = >{}) // "[object Function]" 
Object.prototype.toString.call(new Date()) // "[object Date]" 
Object.prototype.toString.call(new RegExp()) // "[object RegExp]"

```

### 12.new 操作符具体做了什么？

（1）首先创建了一个新的空对象

（2）设置原型，将对象的隐式原型（**proto**）设置为构造函数的显示原型（ prototype 对象）。

（3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）

（4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

```js
function _new(fn, ...rest) {
  // 判断参数是否是一个函数 
  if (typeof fn !== 'function') {
    console.error('type error') return
  }
  // 新建一个空对象，对象的隐式原型为构造函数的 显式原型（prototype 对象） 
  let obj = Object.create(fn.prototype) // 将 this 指向新建对象，并执行函数 
  let result = fn.apply(obj, rest)
  // 判断返回对象 
  let flag = result && (typeof result === 'object' || typeof result === 'function')
  // 判断返回结果 
  return flag ? result: obj
}
```

### 13.es6 let var const 的区别


#### 1、块级作用域

块级作用域是指{}包括的区域存在块级作用域，let 和 const 存在块级作用域，var 不存在

#### 2、变量提升

var 声明的变量存在变量提升，而 const 和 let 不存在

#### 3、暂时性死区

var 定义的变量不存在暂时性死区，而 const 和 let 存在

#### 4、重复声明

var 定义的变量可以重复声明，而 let 和 const 不可以

#### 5、全局变量

var 定义的变量会被存在 window 对象上，node 则是 global 对象上，而 let 和 const 不会

#### 6、初始值设置

let 和 var 可以不用设置初始值，但是 const 要设置初始值

#### 7、指针指向

let 和 const 是 es6 的新增变量的语法，let 可以被重新赋值，即改变指针指向，而 const 不可以改变指针指向

### 15.this 指向问题

关键词：函数执行上下文、箭头函数、new

规则：箭头函数>new>显式调用>隐式调用>默认绑定

解释：this 是 javascript 中的一个关键字，多数情况下指向的是调用它的对象

首先，this 应该指向的是一个对象（函数执行上下文对象），其次这个对象指向的是调用它它的对象，如果调用它的不是一个对象或者对象不存在，那么它指向的就是全局对象（严格模式下为 undefined）

其实，this 在函数被调用时就确定了，它的指向就是函数被调用的地方，而不是它声明的地方（除箭头函数外）。当函数被调用时，会创建一个执行上下文，它包含了函数在哪里被调用（调用栈）、函数调用的方式、以及函数的参数等信息，this 就是一个记录它的一个属性，在函数执行的过程中会被用到

#### 1、默认绑定

函数的浏览器在全局环境中直接使用代表的是全局对象 Window，在 node 环境下则是 Global，如果是严格模式下，则是 undefined

#### 2、隐式绑定

理解：谁调用就指向谁

#### 3、显式绑定

apply、call、bind 都是可以改变函数指向，但是 call 和 apply 是直接进行函数调用 ，不会执行函数，而是返回一个新的函数，这个新的函数已经自动绑定了新的 this 指向，需要我们手动调用。 call 方法接受的是参数列表，而 apply 方法接受的是一个参数数组

```js
const target = {} 
fn.call(target, 'arg1', 'arg2') 
fn.apply(target, ['arg1', 'arg2']) 
fn.bind(target, 'arg1', 'arg2')()
```

如果传入了 null 或者 undefined 作为 this 指向，则 this 会使用默认绑定规则

并且使用多次 bind 绑定，永远取第一次 this 的指向

#### 4、new 绑定

函数作为构造函数使用 new 调用时， this 绑定的是新创建的构造函数的实例

#### 5、特殊 this 指向

1.箭头函数中的 this 只取决包裹箭头函数的第一个普通函数的 this

2.数组方法：例如 forEach、find、findIndex、map、some、every 都可以改变 this 指向(第二个参数)

3.立即执行函数：就是默认的全局对象 window

4.setTimeout 和 setInterval:其实，延时效果（setTimeout）和定时效果（setInterval）都是在全局作用域下实现的。无论是 setTimeout 还是 setInterval 里传入的函数，都会首先被交到全局对象手上。因此，函数中 this 的值，会被自动指向 window

6、不在函数中的场景，可分为浏览器的 script 标签里，或 Node.js 的模块文件里。
 1) 在 script 标签里，this 指向 Window。
 2) 在 Node.js 的模块文件里，this 指向 Module 的默认导出对象，也就是 module.exports。

### 16.apply、call、bind 的区别

关键词：参数格式、this 指向，返回值、必须是 Function 调用

1、apply、call、bind 的相同点：都是用来改变 this 指向，传入的第一个参数是绑定的 this 指向、在非严格模式下，如果传入 null 或者 undefined 的话，会把全局对象 window 当做 this 指向；要注意的是，如果在严格模式下，传入 null 就是 null，undefined 就是 undefined

2、call 和 apply 的区别是：call、bind 传入的都是参数列表，apply 传入的是参数数组；call 传入的参数如果是数组将会映射到第一个参数上，其他的是 undefined；apply 的第二个参数必须是数组或类数组，

￼

3、bind、call 和 appy 的区别是：bind 的返回的是一个改变 this 指向的函数，便于稍后调用，不像 call 和 apply 会立即调用；bind 和 call 很像，传入的也是参数列表，但是可以多次传入，不需要像 call，一次传入

总结：

1、call 和 apply 的主要作用，是改变对象的执行上下文，并且是立即执行的。它们在参数上的写法略有区别。

2、bind 也能改变对象的执行上下文，它与 call 和 apply 不同的是，返回值是一个函数，并且需要稍后再调用一下，才会执行。

### 17.apply、call、bind 的实现

（1）call 函数的实现

判断调用的对象是不是一个函数，即使是定义在函数原型上的，也有可能出现使用 call 等方式调用的情况

截取除第一个外的剩余参数，并判断 context 上下文对象是否存在，不存在则设置为 window

将函数作为上下文对象的一个方法，添加在上下文对象上

调用该上下文对象的方法并把参数传进去

删除该上下文对象的方法属性

返回调用后的结果

```js
Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    console.error("type error")
  }
  let args = [...arguments].slice(1) let result = null context = context || window context.fn = this result = context.fn(...args) delete context.fn
  return result
}
```

（2）apply 函数的实现

判断调用对象是不是一个函数，即使定义在原型，也会出现 apply 方式调用的场景

判断传入的 context 即第一个参数是否存在，如果不存在，那就默认是 window

给上下文对象添加属性方法 fn

判断 apply 的第二个参数是否存在，如果不存在直接调用，如果存在把参数放进去调用

删除新添加的属性方法

返回调用后的结果

```js
Function.prototype.myApply = function(context) {
  if (typeof this !== "function") {
    console.error("type error")
  }
  let result = null context = context || window context.fn = this
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}
```

（3）bind 函数的实现

判断调用对象是不是一个函数，即使定义在原型上，也会出现 bind 方式调用的场景

获取除第一个参数外的剩余参数

判断 context 上下文对象是否存在

返回一个函数，并且判断是否为 new 构造函数，即使用 instanceof 判断是否函数内部 this 指向构造函数

如果不是则使用 apply 调用，把剩余参数映射到第一个位置

如果是则使用 new 构造函数，把函数内部 this 指向新创建的对象
为
```js
Function.prototype.myBind = function(context) {
  if (typeof this !== "function") {
    console.error("type error")
  }
  let fn = this let args = [...arguments].slice(1) return function Fn() {
    return fn.apply(this instanceof Fn ? this: context, args.concat(...arguments));
  }
}
```

### 18.连续多个 bind，最后 this 指向是什么

无论调用多少次，最终函数的 this 只会取第一次的 bind 方法的参数

### 19.谈谈你对作用域和作用域链的理解

关键词：作用域是什么、存储变量访问变量的规则是什么、编译阶段和执行阶段、全局、函数、块级

#### 1、作用域是什么？(重点)

作用域是一套规则，可以存储变量、访问变量的规则。

#### 2、规则是什么？

在 JavaScript 底层当中，程序中的代码分为三个步骤：词法分析、语法分析、代码生成

词法分析：就是将代码拆成最小的、不可再分的词法单元（token）。比如 var name = “hello”,就会被分成四个词法单元，var name = "hello"；并且在 JavaScript 中，空格是直接被忽略的

语法分析：就是将上一步的词法单元数据，根据语法规则生成 AST。如果源码复合语法规则，这一步就直接完成，如果存在语法错误，这一步就会被终止，并且抛出语法错误

代码生成：就是将上一步生成的 AST 转换成真正可以运行的代码，简单来说就是将 AST 转换成一组机器指令，例如 var name = “hello”，则会创建一个 name 变量（需要给 name 分配内存），并将一个值存储到 name 中。

#### 3、什么是编译阶段和执行阶段

编译阶段：编译器会找遍当前作用域，看看是不是有一个 name 变量，如果有则忽略，继续执行下一步；如果没有，则会在作用域立创建一个 name 变量，然后编译器会为引擎生成可以运行的代码，然后进入执行阶段

执行阶段：js 引擎在执行代码的时候，仍然会继续查找当前作用域，，看看是不是有一个 name 的变量。如果能找到，就给他赋值；如果找不到，js 引擎就会抛出一个异常

#### 4、作用域链是什么？(重点)

当访问变量的作用域的时候，如果在当前作用域没找到，就会继续向上级查找，直到找到该变量或者不存在父级作用域中，这样的链路就是作用域链

#### 5、有哪些作用域？(重点)

全局作用域：定义的全局变量默认是挂载在 window 对象上，具有全局作用域。并且如果没有声明直接赋值的变量也是全局变量。

函数作用域：定义在函数内部的变量，只能在函数内部访问，具有函数作用域。并且在函数执行完成后，这个局部变量也会被销毁

块级作用域：es6 提出的 let const 关键词具有块级作用域。他们定义的变量只能在块级作用域内才能访问。 if 语句及 for 语句后面 {} 这里面所包括的也是块级作用域

#### 6、暂时性死区和变量提升是什么意思？

变量提升：使用 var 定义的变量存在变量提升，// a = 1

暂时性死区：如果使用 let 或 const 定义的变量，则会存在暂时性死区。起始域函数开头，终止于相关变量声明的这一行，在这个范围内无法访问该变量


### 20.闭包的作用和原理以及使用场景
#### 1、闭包是什么？
一个函数和对其周围状态的引用捆绑在了一起（或者说函数被引用包围），这样的组合就是闭包。也就是说闭包就是一个让你可以访问外层函数的作用域。通俗来说，闭包其实就是一个可以访问其他函数内部变量的一个函数，即定义在函数内部的函数，或者说闭包就是一个内嵌函数。
通常来说，函数内部的变量是无法在外部进行访问的（即全局变量和局部的变量的区别），因此使用闭包的作用实现了，能在外部访问某个函数内部的变量的功能，让这些变量的值始终可以保存在内存当中。
从直观上讲，闭包这个概念为JavaScript中访问函数内变量提供了途径和便利。这样做的好处有很多，比如闭包实现缓存等。
#### 2、作用域链的概念
当访问一个变量时，代码编辑器会首先在当前作用域去查找，如果没还找到，就会继续往父级作用域去查找，直到找到该变量或者不存在父级作用域内，这样的链路操作就是作用域链。
#### 3、闭包的本质是什么？
当前环境内存在对于父级作用域的引用
#### 4、闭包的使用场景
ⅰ.在定时器、事件监听、Ajax请求、web workers、任何异步中，只要使用了回调函数，实际上就是使用闭包，防抖和节流，以及vue底层都使用了

```js
// 定时器
setTimeout(function handler(){
  console.log('1');
}，1000);
// 事件监听
document.getElementById(app).addEventListener('click', () => {
  console.log('Event Listener');
});
```

ⅱ.作为函数参数的传递的形式

```js
var a = 1;
function foo(){
  var a = 2;
  function baz(){
    console.log(a);
  }
  bar(baz);
}
function bar(fn){
  // 这是闭包
  fn();
}
foo();  // 输出2，而不是1
```

ⅲ.立即执行函数：创建了闭包，保存了全局作用域和当前作用域，因此可以输出全局的变量。

```js
var a = 2;
(function IIFE(){
  console.log(a);  // 输出2
})();
```

ⅳ.结果缓存（备忘模式）

```js
function memorize (fn){
  var cache ={}
  return function(...args){
    var key = JSON.strify(args)
    return cache[key] || cache[key] = fn.apply(fn,args)
  }
}
function add (a){
  return a +1
}
var adder = memorize(add)
adder(1)  // 输出: 2    当前: cache: { '[1]': 2 }
adder(1)  // 输出: 2    当前: cache: { '[1]': 2 }
adder(2)  // 输出: 3    当前: cache: { '[1]': 2, '[2]': 3 }
```


5、常见的闭包的循环输出的问题

```js
for(var i = 1; i <= 5; i ++){
  setTimeout(function() {
    console.log(i)
  }, 0)
}
输出5个6
解决办法：
1、利用立即执行函数
for(var i = 1; i <= 5; i ++){
  (function(j){
    setTimeout(function() {
      console.log(j)
    }, 0)
  })(i)
}
2、使用es6的let
3、使用定时器的第三个参数
for(var i=1;i<=5;i++){
  setTimeout(function(j) {
    console.log(j)
  }, 0, i)
}
定时器的第三个参数，这些参数会作为回调函数的附加参数存在
```

### 22.箭头函数和普通函数有啥区别？箭头函数能当构造函数吗？
区别：
1. 箭头函数比普通函数更加简洁：
箭头函数返回值只有一句，直接可以省略大括号。如果不需要返回值直接加上void就可以了
2. 箭头函数没有自己的this
箭头函数不会创建自己的this，所以它没有this，它只会继承自己作用域的上一层，所以箭头函数在创建的时候this指向就已经定义好了
3. 箭头的函数的this指向永远不会被改变
4. call、apply、bind等方法不会改变箭头函数this的指向
5. 箭头函数不能作为构造函数使用：因为箭头函数没有自己的this，所以会报错
6. 箭头函数没有自己的arguments：箭头函数没有自己的argumnets对象，在箭头函数中访问的实际上获得的是它外层函数的arguments值
7. 箭头函数没有prototype
8. 箭头函数不能作为Genrator函数，不能使用yield关键字

### 23.es6有哪些新特性？
1. let、const
2. 模版字符串
3. 解构赋值
4. 函数设置默认值
5. ...运算符
6. 箭头函数
7. for of
    - for of 不能遍历对象，可以遍历数组
    - for in 遍历得到的是下标或者是对象的key
    - 可迭代对象可以使用for of
    - 
    - for of 不同与forEach，前者可以使用break、continue、return配合使用，也就是可以随时跳出循环
8. class类，原型链的语法糖的表现形式
9. 导入导出 export default 、import
10. Promise
11. async 和 await
12. Symbol 新的基本类型
13. Set集合

### 24.Map和Object的区别
关键词：$\color{red} 键值区别、长度大小获取、原型、顺序、循环（迭代器）$
1. Object的键必须是简单数据类型（整数，字符串或者是 symbol），但是Map的键可以是 JavaScript 支持的所有数据类型
2. Map的长度大小可以通过size来获取，但是Object则需要通过Object.keys(obj).length
3. Object的键值可能会和原型上的属性重名，我们可以使用Object.create（null）来设置没有原型的对象
4. Object的key的顺序是先判断数字开头的key，再判断字符串，而Map的顺序是在插入时决定的
5. Map结构的数据可以使用迭代器比如for of来循环，而Object则需要手动遍历，用for in
6. Map在频繁增删键值对的场景下表现更好。
综上所诉：如果需要存储不同的键值并且保持插入顺序的话用Map会更加灵活

### 27.symbol这个新增的基础数据类型有什么用？使用场景
解释：Symbol是ES6中引入的新数据类型，表示的是一个唯一得常量，通过Symbol函数来创建对应的数据类型，可以在创建的时候添加变量描述，该变量会被强制转换为字符串（变量为什么会被强制转化为字符串，什么时候会转换）
用法：常量值和对象属性
1. 避免常量值重复
2. 避免对象属性覆盖：给函数的参数赋值，如果参数是一个对象，且包含相同属性，就可以利用Symbol来赋值和读取

### 28、js脚本异步加载如何实现？有什么区别？
1. 当script上没有defer或者async的时候，浏览器在执行脚本的时候会阻塞后续文档的加载。当存在defer或async的时候都是异步加载，它们不会阻塞页面的解析：
区别：
    1、执行顺序：多个async属性不会保证执行的顺序，多个defer属性会保证执行的顺序
    2、脚本是否并行执行：async会异步下载解析脚本（即加载后续文档元素的过程中和js脚本的加载是并行进行）；而defer表示延迟加载，脚本会先不执行，而是等到文档解析完成后再去执行。
2. JavaScript脚本延迟加载的方式有哪些？
延迟加载就是等页面加载完成之后再加载 JavaScript 文件。 js 延迟加载有助于提高页面加载速度。
一般有以下几种方式：
* defer 属性：给 js 脚本添加 defer 属性，这个属性会让脚本的加载与文档的解析同步解析，然后在文档解析完成后再执行这个脚本文件，这样的话就能使页面的渲染不被阻塞。多个设置了 defer 属性的脚本按规范来说最后是顺序执行的，但是在一些浏览器中可能不是这样。
* async 属性：给 js 脚本添加 async 属性，这个属性会使脚本异步加载，不会阻塞页面的解析过程，但是当脚本加载完成后立即执行 js 脚本，这个时候如果文档没有解析完成的话同样会阻塞。多个 async 属性的脚本的执行顺序是不可预测的，一般不会按照代码的顺序依次执行。
* 动态创建 DOM 方式：动态创建 DOM 标签的方式，可以对文档的加载事件进行监听，当文档加载完成后再动态的创建 script 标签来引入 js 脚本。
* 使用 setTimeout 延迟方法：设置一个定时器来延迟加载js脚本文件
* 让 JS 最后加载：将 js 脚本放在文档的底部，来使 js 脚本尽可能的在最后来加载执行。

### 29.for in 、for of的区别？map和forEach可以通过break跳出吗？
for of 是ES6新增的遍历方式，允许遍历含有iterator接口的数据结构（数组、对象等）并且返回各项的值
区别：
1. for of 遍历获取的是对象的键值，for in 获取的是对象的键名（key）
2. for in 会遍历对象的整个原型链，性能很差不推荐使用，而for of 只遍历当前对象不会遍历原型链
3. 对于数组的遍历，for in会返回数组中可枚举的属性（包括原型链上），for of只返回数组的下标对应的属性值
总结：for in 循环主要是为了遍历对象，不适用遍历数组；for of循环可以用来遍历数组、类数组、字符串、Set、Map以及含有iterator接口的对象

map 和forEach无法使用return 或break跳出循环；但是可以抛出throw new Error（），通过try catch去捕获这个错误终止循环

### 30.js如何判断数据类型？操作数组元素的方法有哪些？
1、判断数组类型(待补充)

```js
1、通过Object.prototype.toString.call()

Object.prototype.toString.call(obj).slice(8,-1) === 'Array'

2、通过ES6的Array.isArray()来判断

Array.isArray(obj)

3、通过原型链做判断

obj.__proto__ ===Array.prototype

4、通过instanceof来判断

obj instanceof Array

5、通过Array.prototype.isPrototypeOf

Array.prototype.isPrototypeOf(obj)
```


2、操作数组元素的方法

改变数组的方法：

push、pop、shift、unshift、splice、sort、reverse、fill（其中前七种是）

不改变数组的方法：
concat、every、some、filter、find、map、findIndex、forEach、indexOf、includes、join、lastIndexOf、reduce、reduceRight、slice、some

数组转化成字符串的方法：
toLocalString、toString、valueOf、join

添加返回数组长度，而删除则返回数组的删除的那一项
sort不传参数的情况下回造成不准确的情况，因为会调用Sting转型函数
sort的比较函数的原理是第一个参数排在第二个参数前面，则返回-1；如果相等则返回0；第一个参数排在第二个参数后面，则返回1
slice返回该截取的数组
splice删除、替换、插入，会返回被删除的数组
reduce正序执行，reduceRight倒序执行