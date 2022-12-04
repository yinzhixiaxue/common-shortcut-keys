---
theme: github
---
## **一、JSON 结构和语法**

JSON 易于编写和阅读，并且易于在大多数语言使用的数据结构之间进行转换。下面看一下 JSON 对象的组成、JSON 支持的数据类型以及这种数据格式语法的其他细节。

### 1. 结构

下面是一个最基本的示例：

```
{"name": "kobe"}
```

在上面的示例中，key是 `name`，值是 `kobe`。JSON 可以保存多个 `key:value`对：

```
{"name": "kobe", "age": 40, "number": 24}
```

当然这只是一个简单的例子，在实际应用中JSON会存在多层嵌套。对象和数组是可以保存其他值的值，因此 JSON 数据可能会发生无限嵌套。这允许 JSON 描述大多数数据类型。

下面是 JSON 数据类型的完整列表：

-   string：用引号括起来的文字。
-   number：正整数或负整数或浮点数。
-   object：用花括号括起来的键值对
-   array：一个或多个 JSON 对象的集合。
-   boolean：不带引号的 true 或 false 值。
-   null：表示键值对没有数据，表示为null，不带引号。

下面是一个包含所有这些数据类型的 JSON 对象示例：

```
{
  "name": "kobe",
  "age": 41,
  "number": 24,
  "greatPlayer":true,
  "children": [{
    "name": "Natalia",
    "age": 19,
    "number": 2
  }, {
    "name": "Gianna",
    "age": 13,
  }, {
    "name": "Bianka",
    "age": 6,
  }, {
    "name": "Capri",
    "age": 3,
  }],
  "job": ["basketballPlayer", "JavaScript"],
  "soubriquet": "Black Mamba"
  "wife": "Vanessa",
  "wages": null,
}
```

###

## 二、JSON 解析与序列化

JSON 提供了两种方法：

-   `JSON.parse()` ：将数据转换为 JavaScript 对象。
-   `JSON.stringify()` ：将 JavaScript 对象转换为字符串。

### 1. JSON.parse()

`JSON.parse()` 的语法如下：

```
JSON.parse(text, reviver)
```

-   **text：** 必需， 一个有效的 JSON 字符串。
-   **reviver**：可选，一个转换结果的函数， 将为对象的每个成员调用此函数。

```
const json = '{"name": "kobe", "age": 41, "number": 24}';

const myJSON = JSON.parse(json);
 
console.log(myJSON.name, myJSON.age);  // kobe 41
```

我们可以启用 `JSON.parse` 的第二个参数 `reviver`，一个转换结果的函数，对象的每个成员调用此函数：

```
const json = '{"name": "kobe", "age": 41, "number": 24}';

const myJSON = JSON.parse(json, (key, value) => {
  if(typeof value === "number") {
     return String(value).padStart(5, "0"); // padStart是一共几位，然后空余补位
  }
  return value;
});
 
console.log(myJSON.name, myJSON.age);  // kobe 00041
```

### 2. JSON.stringify()

`JSON.stringify()` 的语法如下：

```
JSON.stringify(value, replacer, space)
```

-   **value：** 必需， 要转换的 JavaScript 值（通常为对象或数组）。
-   **replacer：** 可选。用于转换结果的函数或数组。如果 replacer 为函数，则 JSON.stringify 将调用该函数，并传入每个成员的键和值。使用返回值而不是原始值。如果此函数返回 undefined，则排除成员。根对象的键是一个空字符串：""。如果 replacer 是一个数组，则仅转换该数组中具有键值的成员。成员的转换顺序与键在数组中的顺序一样。当 value 参数也为数组时，将忽略 replacer 数组。
-   **space：** 可选，文本添加缩进、空格和换行符，如果 space 是一个数字，则返回值文本在每个级别缩进指定数目的空格，如果 space 大于 10，则文本缩进 10 个空格。space 也可以使用非数字，如：`\t`。
此处可以用在生成json文件：JSON.stringify(json, null, 2)

#### 实用技巧

下面来看看JSON有哪些实用技巧。

##### 1. 格式化JSON

上面我们说了可以`JSON.stringify()`来将JSON对象转换为字符串。它支持第二个和第三个参数。我们可以借助第二三参数来格式化JSON字符串。支持情况下，格式化后的字符串长这样：

```
const json = {"name": "kobe", "age": 41, "number": 24};

const myJSON = JSON.stringify(json);
 
console.log(myJSON);  // {"name": "kobe", "age": 41, "number": 24}
```

添加第二三个参数：

```
const json = {"name": "kobe", "age": 41, "number": 24};

const myJSON = JSON.stringify(json, null, 2);
 
console.log(myJSON);  
```

生成的字符串格式如下：

```
{
  "name": "kobe",
  "age": 41,
  "number": 24
}
```

这里的 2 其实就是为返回值文本在每个级别缩进 2 个空格。

如果缩进是一个字符串而不是空格，就可以传入需要缩进的填充字符串：（不过可能一般用的比较少）

```
const json = {"name": "kobe", "age": 41, "number": 24};

const myJSON = JSON.stringify(json, null, "--");
 
console.log(myJSON);  
```

输出结果如下：

```
{
--"name": "kobe",
--"age": 41,
--"number": 24
}
```

##### 2. 隐藏某些属性（此用法其实和直接用delete没什么区别）

我们知道`JSON.stringify()`支持第二个参数，用来处理JSON中的数据：

```
const user = {
  "name": "kobe",
  "age": 41,
  "number": 24
}

console.log(JSON.stringify(user, (key, value) => {
    if (key === 'age') return
    return value
}));

// 输出结果：{"name":"kobe","number":24}
```

可以将第二个参数抽离出一个函数：

```
const user = {
  "name": "kobe",
  "age": 41,
  "number": 24
}

console.log(JSON.stringify(user, filterKeys('name', 'number')))
function filterKeys(...keys) {
    return (key, value) => {
        if (keys.includes(key)) {
           return;
        }
        else return value;
    };
}

// 输出结果：{"age":41}
```

##### 3. 过滤结果(很好用，无需任何函数)

当JSON中的内容很多是，想要查看指定字段是比较难的。我们可以借助`JSON.stringify()`的第二个属性来获取指定值，只需传入指定一个包含要查看的属性 `key` 的数组即可：

```
const user = {
  "name": "kobe",
  "age": 41,
  "number": 24
}

console.log(JSON.stringify(user, ['name', 'number']))

// 输出结果：{"name":"kobe","number":24}
```
### 3. 异常处理

那如果JSON无效怎么办呢？比如缺少了逗号，引号等，上面的两种方法都会抛出异常。建议在使用这两个方法时使用`try...catch`来包裹，也可以将其封装成一个函数。

```
let myJSON = {}
const json = '{"name": "kobe", "age": 41, "number": 24}';

try {
  myJSON = JSON.parse(json);
} catch (e){
  console.error(e.message)
}
console.log(myJSON.name, myJSON.age);  // kobe 41
```

如果 JSON 操作时出现问题，这将确保应用程序不会因此中断。

### 4. 其他操作

#### ① 删除键值对

可以使用 `delete` 运算符来删除键值对：

```
const json = {"name": "kobe", "age": 41, "number": 24};

delete json.age;
 
console.log(json);  // {name: 'kobe', number: 24}
```

#### ② 访问数组项

可以使用方括号`[]`和索引从 JSON 中访问数组项：

```
const json = {
  "name": "kobe",
  "age": 41,
  "greatPlayer":true,
  "children": [{
    "name": "Natalia",
    "age": 19,
    "number": 2
  }, {
    "name": "Gianna",
    "age": 13,
  }, {
    "name": "Bianka",
    "age": 6,
  }, {
    "name": "Capri",
    "age": 3,
  }],
  "number": ["8", "24"],
  "soubriquet": "Black Mamba"
  "wife": "Vanessa",
  "wages": null,
};

console.log(json.number[0]); // 8
```

#### ③ 遍历数组项

可以使用`for`循环来遍历JSON中的数组项：

```
const json = {
  "name": "kobe",
  "age": 18,
  "number": ["8", "24"],
};

for (item of json.number) {
    console.log(item);  // 8 24
}
```
