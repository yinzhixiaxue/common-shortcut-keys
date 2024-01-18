---
theme: github
---

## 一、vue基础题目

### 1.谈谈你对 vue 的理解

点题收敛
Vue 是一个渐进式 Javascript 框架，它专注于构建用户界面。
Vue 的核心思想是**数据驱动和组件化**。通过将页面拆分成独立的组件，可以更好的管理代码，提高代码的复用性和可维护性。
追问拓展
1. Vue 的优势在于其简单易用、灵活性高、性能卓越和扩展性强。
2. Vue 的模板语法易于理解和学习，可以快速构建交互式的 Web 应用程序。
3. Vue 的生命周期钩子和自定义指令等功能，使得 Vue 可以满足各种复杂的需求。
4. Vue 还提供了 Vuex、Vue Router 等官方插件，可以进一步扩展 Vue 的功能。
5. Vue 的响应式数据绑定机制是 Vue 最核心的特性之一。（通过对数据进行劫持和监听，可以实现数据的双向绑定，即数据变化会自动的更新视图，同时视图的变化也会反映到数据上。这种机制使得 Vue 的数据流非常清晰和可预测，同时也减少了开发的工作量）
总之，我认为 Vue 是一个优秀的 JavaScript 框架，它简单易用、功能强大、扩展性好，并且有着极佳的性能表现。对于前端开发人员来说，Vue 是一个值得深入学习和使用的框架。

### 2.Vue nextTick 的实现原理

#### 点题收敛
在 Vue 中，当我们对数据进行修改时，Vue 会异步执行 DOM 更新。在某种情况下，我们需要在 DOM 更新完成后执行一些操作，这时就需要使用到 Vue.nextTick() 方法。 
#### 知识点深入
Vue.nextTick() 方法的实现原理是基于浏览器的**异步任务队列**，采用**微任务优先**的方式。
当修改数据时，Vue 会将 DOM 更新操作放到一个异步任务队列中，等待下一次事件循环时执行。而 Vue.nextTick() 方法则是将一个回调函数推入到异步任务队列中，等待 DOM 更新完成后执行。

具体实现方式有以下几种：
1. 使用原生的 setTimeout 方法
在 vue 2 中，如果浏览器支持 Promise ，则会优先使用 Promise.then() 方法。如果不支持 Promise，则会使用原生的 setTimeout 方法模拟异步操作。
2. 使用 MutationObserver
如果浏览器支持 MutationObserver ，Vue 会使用 MutationObserver 监听 DOM 更新，并在 DOM 更新后执行回调函数。
3. 使用 setImmediate
在 IE 中，setImmediate 方法可以用来延迟异步执行任务。在 vue 2 中，如果浏览器支持 setImmediate，则会优先使用 setImmediate，否则会使用 setTimeout 方法。
### 总结
总而言之， Vue.nextTick() 的实现原理是利用浏览器的异步任务队列，在 DOM 更新完成后执行回调函数。不同浏览器支持的异步任务方法不同，Vue 会根据浏览器支持情况选择合适的异步任务方法。
### 意义（理解）
关键点：确保我们操作的是更新后的 DOM，避免了频繁的 DOM 操作，提高性能。
Vue.nextTick 的意义在于它可以让我们在下次 DOM 更新循环结束后执行回调函数，确保我们操作的是更新后的 DOM 。
Vue 采用异步更新机制来提高渲染效率，当数据修改时 Vue 不会立即更新 DOM , 而是将 DOM 更新操作放到一个异步队列中，等到下一次事件循环执行。这样可以避免频繁的 DOM 操作，提高性能。
但是，由于 Vue 的异步更新机制，当我们修改数据后，如果想要立即获取更新后的 DOM，可能会出现获取的是更新前的 DOM 的情况。这时就需要使用 Vue.nextTick 。
Vue.nextTick 可以将回调函数推入异步任务队列中，在 DOM 更新完成后执行。这样就可以确保我们操作的是更新后的 DOM 。比如在某种情况下，需要获取某个元素的尺寸、位置等属性时，如果不使用 Vue.nextTick ，可能会获取到错误的结果。
因此，Vue.nextTick 是一个非常实用的方法，能够确保在操作 DOM 时获取到更新后的结果，提高代码的可靠性。

### 3. vue 在渲染列表时，为什么不建议用数组的下标当作列表的 key 值
#### 点题收敛
因为要保证渲染列表的性能和正确性。
#### 深入知识点
key 说明
在 Vue 渲染列表时，每个元素需要一个唯一的 key 值来标识自己，这个 key 值会被用来判断列表中哪些元素需要更新、删除或新增。
点题
如果使用数组的下标作为 key 值，虽然可以满足每个元素 key 值唯一的需要，但是由于 vue 的更新机制是基于 diff 算法实现的，使用数组下标作为 key 值会导致 vue 无法正确的判断列表中元素的变化情况。
具体来说，如果将数组下标作为 key 值，那么当列表发生变化时，可能会导致 key 值发生改变，而从引发不必要的组件重新渲染，甚至会导致性能问题。例如，当删除列表某个元素时，其后面的所有元素的下标都会发生改变，导致 Vue 重新渲染整个列表。
规避
为了避免这个问题，我们需要为每一项提供一个稳定的、与其内容相关的唯一 key 值，例如使用元素的 id 属性作为 key 值。这样在列表变化时能够正确地更新和复用 DOM 元素，提高性能
总结
为了保证 vue 渲染列表的性能和正确性，应该尽量避免使用数组下标作为 key 值。


### 4. 对 vuex 的理解
#### 点题收敛
Vuex 是一个专门为 vue 开发的状态管理库，它提供了一个集中式的状态管理机制，用于管理 vue 应用中的所有组件的共享状态。
vuex 的核心思想是将组件的共享状态抽离出来，以单独状态树的形式存储，然后通过定义一系列的 mutations、actions、getters 来操作这个状态树。
#### 深入知识点
##### 核心概念
state：应用的状态
mutations：用于修改 state 中的状态
actions：用于处理异步操作或批量的同步操作，最终通过 mutations 来改变 state
getters：用于对 state 中的数据进行计算或过滤
##### 使用介绍
在 Vuex 中，数据流的流向是单向的，从 state 到组件，再从组件到 mutations / actions 。这种单向数据流的机制使得数据的流动更加清晰，同时也更容易进行调试和维护。
Vuex 还提供了一些辅助函数，比如，mapState、mapMutations、mapActions、mapGetters等，用于方便地访问和操作状态树。
#### 总结
总之，Vuex 是 Vue 生态中的一个非常重要的插件，适用于中大型的 Vue 应用，它通过提供集中式的状态管理机制，更好地管理数据流，提高应用的可维护性和可扩展性。同时，Vuex 还有一些高级特性，比如模块化的状态管理和插件机制，能够进一步提高开发效率。

### 5. vue-router 有哪些导航钩子
#### 核心
##### beforeRouteLeave（组件内的导航钩子）
在离开当前路由时执行，可以进行页面数据的保存或弹窗提示等操作。
##### beforeEach（全局导航钩子）
在每次路由跳转之前执行，可以进行用户身份验证、路由拦截等操作。
##### beforeRouteUpdate（组件内的导航钩子）
在路由更新时执行，比如路由参数发生了变化时。
##### beforeEnter（路由独享的钩子）
在进入路由之前执行，与全局 beforeEach 的区别是它可以针对某个具体路由进行设置。
##### beforeRouteEnter（组件内的导航钩子）
在渲染该组件的对应路由被验证前调用，此时组件实例还未创建。
##### beforeResolve（全局导航钩子）
在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后执行。
##### afterEach（全局导航钩子）
在每次路由跳转之后执行，可以进行路由跳转后的操作，比如页面滚动、统计PV等操作。
#### 总结
这些导航钩子提供了灵活的路由跳转控制机制，可以方便地实现各种复杂的路由跳转需求。
同时，Vue Router 还提供了一些其他的导航钩子和高级特性，比如路由元信息、动态路由、命名路由等，可以进一步提高开发效率和应用的可维护性。
#### 理解
完整的导航解析流程
- 导航被触发。
- 在失活的组件里调用 beforeRouteLeave 守卫。
- 调用全局的 beforeEach 守卫。
- 在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。
- 在路由配置里调用 beforeEnter。
- 解析异步路由组件。
- 在被激活的组件里调用 beforeRouteEnter。
- 调用全局的 beforeResolve 守卫(2.5+)。
- 导航被确认。
- 调用全局的 afterEach 钩子。
- 触发 DOM 更新。
- 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

### 6. vue-router 的核心原理

#### 点题收敛
Vue Router 是 Vue 官方提供的一款路由管理器，它通过监听 URL 的变化，匹配路由规则，展示对应的组件内容，从而实现单页应用的路由控制。
#### 核心原理
##### 路由匹配
Vue Router 通过定义路由规则来匹配 URL 路径，并根据匹配结果展示对应的组件内容。
路由规则可以使用路径、参数、查询参数等多种方式进行定义，同时支持嵌套路由和命名路由等高级特性。
##### 路由模式
Vue Router 支持两种路由模式，分别是 Hash 模式 和 History 模式。
在 Hash 模式下，路由信息会被保存在 URL 的 Hash 部分，通过监听 Hash 变化来进行路由控制。
在 History 模式下，路由信息会被保存在浏览器的 History API 中，通过修改浏览器历史记录来进行路由控制。
##### 路由导航
Vue Router 中的导航钩子可以监听路由的变化，进行路由拦截、身份验证等操作。
导航钩子包含全局导航钩子和组件内导航钩子，可以在路由跳转前、跳转后和路由更新等不同阶段执行相应的逻辑。
##### 路由组件
Vue Router 通过组件的动态加载来实现异步路由组件，可以根据需要动态加载路由组件，从而提高应用的性能和用户体验。
同时 Vue Router 还支持路由懒加载、路由元信息等高级特性，可以进一步提高应用的灵活性和可维护性。
#### 总结
总之， Vue Router 是 实现 Vue 单页应用路由控制的核心组件之一，它通过路由匹配、路由模式、路由导航和路由组件等多个方面，实现了完整的路由控制逻辑，为开发者提供了强大的路由控制能力。

### 7. Vue Router History 模式上线注意事项
Vue Router 的 History 模式相比于默认的 Hash 模式来说，能够更好地模拟传统的多页面应用的 URL 地址，让用户体验更加自然。
#### 注意事项
#### 后端配置
使用 History 模式需要后端对所有可能的路由路径都进行处理，以	避免在刷新或直接输入 URL 时出现 404 错误。
后端配置的方式取决于后端服务器的类型，如 Apache、Nginx等，需要在服务器上进行相关配置。
#### 安全性
使用 History 模式会暴露出服务器上文件路径，因此需要特别注意安全性。
在部署时需要仔细检查服务器配置，确保不会因为恶意请求而导致安全问题。
#### 兼容性
History 模式需要支持 HTML5 的 history.pushState API，因此在一些老的浏览器可能存在兼容性问题。需要在开发时做好相关的测试和兼容性处理。
#### 打包发布
在使用 Webpack 等工具打包发布时，需要配置正确的 PublicPath ，保证 HTML 中引用的资源路径正确。
同时需要注意，如果项目使用了多个子路由，需要在打包时将所有的子路由都配置到 PublicPath 中。
#### 总结
总之，使用 History 模式需要对后端进行相关配置，并且需要特别注意安全性和兼容性问题，同时在打包发布时需要正确地配置 publicPath ，确保页面资源路径正确。

### 8. Vue Router history 模式为什么刷新出现 404
#### 点题收敛
原因是因为浏览器在刷新页面时，会向服务器发送 GET 请求，但此时服务器并没有相应的资源来匹配这个请求，因为在 History 模式下，所有的路由都是在前端路由中实现的，并没有对应的后端资源文件。
#### 解决方案
为了解决这个问题，我们需要在服务器端进行相关配置，让所有的路由都指向同一入口文件（比如 index.html)，由前端路由来处理 URL 请求，返回对应的页面内容。
具体的配置方式取决于服务器类型，常见的有 Apache、Nginx等。
```nginx
server {
  listen 80;
  server_name yourdomain.com;

  location / {
    root /usr/share/nginx/html;
    index index.html;
    try_files $uri $uri/ /index.html;
  }
}
```
这段代码会将所有的请求都指向根目录下的 index.html 文件，让前端路由来处理 URL 请求。
同时需要注意，在使用 History 模式时需要保证所有路由的访问路径都指向 index.html，否则仍然会出现 404 错误。

### 9. 用 vue-router 的 hash 模式实现描点
#### 实现
1. Vue Router 的路由配置中，将 mode 值设置为 "hash"
```js
const router = new VueRouter({
  mode: 'history',
  routes: [
    // Your routes
  ]
});
```

2. 跳转时，设置目标 URL  的 hash 部分为描点

```js
router.push({path: '/yourpath#anchor'})
```

3. 目标页面组件中，可以在 mounted 钩子函数上获取目标描点，并使用 scrollIntoView 方法将其滚动到目标位置。
```js
export default {
  mounted() {
    // 获取锚点名称
    const anchor = this.$route.hash;

    // 如果存在锚点名称，则滚动到相应位置
    if (anchor) {
      const targetElement = document.querySelector(anchor);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
};
```
当路由携带着标点信息跳转到目标页面时，页面会自动滚动到指定的描点位置。

### 10. 说下虚拟 DOM 和 diff 算法，key 的作用
#### 概念
虚拟 DOM 和 diff 算法是 Vue 和 React 中的两个核心概念。

##### 虚拟 DOM 
虚拟 DOM 是指用 JavaScript 对象模拟 DOM 树结构，包括节点的类型、属性和子节点等信息。
当状态发生变化时，React 会使用新的状态生成一个新的虚拟 DOM 树，并通过 diff 算法来对比新旧虚拟 DOM 树的差异，计算出需要更新的节点，最终只更新需要更新的节点，从而提高性能。
##### diff 算法
diff 算法是指两个树形结构之间找出差异的算法。
在 React 中，通过对比新旧虚拟 DOM 树节点的不同，分别以下三种情况：
- 替换节点：节点的类型发生了变化，例如从 div 变成了 p 。
- 更新属性：节点的属性发生了变化，例如 class、style 等。
- 更新子节点：节点的子节点发生了变化。
在 diff 算法的过程中，key 的作用是给每个虚拟 DOM 节点添加一个唯一的标识符。
这样在进行新旧虚拟 DOM 对比时，可以通过 key 值的对比快速判断是否是同一个节点，避免不必要的 DOM 操作。如果不添加 key，diff 算法只能通过遍历子节点的方式查找，效率较低。


Vue 采用了虚拟 DOM 和 diff 算法来提高渲染性能。
虚拟 DOM
在 Vue 中，虚拟 DOM 的概念被称为  VNode , 它是一个轻量级的 JavaScript 对象，用于描述 DOM 节点。
当数据发生变化时，Vue 会创建一个新的 VNode 树，并通过 diff 算法来对比新旧 VNode 树，找到最小变更并进行渲染。这样可以避免对整个 DOM 树进行重绘，提高性能。
key 属性
Vue 中的 key 属性用于标识节点的唯一性，当节点需要移动时，key 可以帮助 Vue 更准确地定位节点，避免不必要的操作。
如果没有使用 key ，Vue 会尝试通过就地复用和移动算法来尽可能减少 DOM 操作，但这可能会导致一些意外的行为，例如数据不一致、输入框内容丢失等。
#### 总结
总之，Vue 的虚拟 DOM 和 diff 算法与 React 类似，但具体实现和一些细节可能有所不同。

### 11.vue 项目中 style 样式中为什么要添加 scoped
#### 点题收敛
在 vue 中使用 scoped 属性可以让样式作用域仅限于当前组件中，不影响全局，避免了**样式污染和样式冲突**的问题。
scoped 属性会为每个组件的 style 标签添加一个唯一的属性作为标记，这样每个组件的样式规则只作用于当前组件的元素，不影响其他组件的样式。
```js
<template>
  <div calss="demo">
    <p> scoped demo </p>
  </div>
</template>

<style scoped>
  .demo{
    color: red;
  }
</style>
```

### 12.vue2 修改了数组的哪些方法，为什么
#### 点题收敛
vue2 修改了以下数组的方法：
- push
- pop
- shift
- unshift
- splice
- sort
- reverse
#### 解释
这些方法都是会改变原数组的。为了实现数据响应式更新，vue2 在这些方法中添加了特定的代码，以便在执行这这些方法时通知 vue 视图更新数据。
比如，当使用 push() 方法向数组中添加元素时，vue2 会检测到这个数组发生了变化，并通知 vue 视图更新相关数据。这个操作不需要开发者手动去更新视图，vue2 会自动完成。
需要注意的是，如果使用非响应式的方式来更新数组，例如直接修改数组中某个元素的值，或者修改数组的长度，vue2 就无法监听到这个变化，所以需要遵循 vue2 的修改数组的规范，才能让 vue2 正常响应式更新数据。

### 13. mounted 生命周期和 keep-alive中的 activated 的优先级
#### 点题
mounted 生命周期高于 activated 生命周期。
#### 解释
在 vue 中， mounted 生命周期是指一个组件被挂载到 DOM 中之后触发的钩子函数。
而 keep-alive 是一个用来缓存组件的内置抽象组件，它本身没有任何展示效果，只是将内部包含的组件缓存起来，从而能够在需要时快速切换到缓存的组件。
当一个组件第一次被挂载时，mounted 生命周期会被触发，同时 keep-alive 中的缓存组件还没有被渲染，因此 activated 生命周期并不会被触发。
只有当一个被缓存的组件被激活后（如从其他页面返回到该组件所在的页面），activated 生命周期才会被触发。
因此优先级上， mounted 生命周期高于 activated 生命周期。

### 24.Computed 和 Watch 的区别 
#### 对于Computed :
  - 它支持缓存，只有依赖的数据发生变化，才会重新计算
  - 不支持异步，当Computed中有异步操作时，无法监听数据的变化
  - computed的值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data声明过，或者父组件传递过来的props中的数据进行计算的。
  - 如果一个属性是由其他属性计算而来的，这个属性依赖于其他属性，一般会用computed
  - 如果computed属性的属性值是函数，那么默认使用get方法，函数的返回值就是属性的属性值；在computed中，属性有一个get方法和set方法，当数据发生变化时，会调用set方法。
#### 对于Watch：
- 它不支持缓存，数据变化时，它就会触发响应的操作
- 支持异步监听
- 监听的函数接收两个参数，第一个参数是最新的值，第二个参数是变化之前的值
- 当一个属性发生变化时，就需要执行相应的操作
- 监听数据必须是data中声明的或者父组件传递过来的props中的数据，当发生变化时，会触发其他操作，函数有两个参数：
  + immediate：组件加载立即触发回调函数
  + deep：深度监听，发现数据内部的变化 ，在复杂数据类型中使用，例如数组中的对象发生变化，需要注意的是，deep无法监听到数组和对象内部的变化。
当想要执行异步或者昂贵的操作以响应不断地变化时，就需要使用watch。
#### 总结：
- computed计算属性：依赖其他属性值，并且computed的值有缓存，只有它依赖的属性值发生改变，下一次获取computed的值时才会重新计算computed的值
- watch侦听器：更多的时观察的作用，无缓存性，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作。
### 25. v-if和v-show的区别

#### 手段：
v-if是动态的向DOM树内添加或者删除DOM元素；v-show是通过设置DOM 元素的display样式属性控制显隐；
#### 编译过程：
v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部地事件监听和子组件；v-show只是简单地基于css切换；
#### 编译条件：
v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译；v-show是在任何条件下，无论首次条件是否为真，都被编译，然后被缓存，而且DOM元素保留；
#### 性能消耗：
v-if有更高的切换消耗；v-show有更高的初始渲染消耗；
#### 使用场景：
v-if适合运营条件不大可能改变；v-show适合频繁切换。

### 26. 说一下Vue的生命周期

Vue示例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模板、挂载Dom->渲染、更新->渲染、卸载等一系列过程，称这是Vue的生命周期。
1. beforeCreate(创建前）：数据观测和初始化事件还未开始，此时data的响应式追踪、event/watcher都还没有被设置，也就是说不能访问到data、computed、watch、methods上的方法和数据。
2. created（创建后）：实例创建完成，实例上配置的options包=包括data、computed、watch、methods等配置完成，但是此时渲染的节点还未挂载到DOM，所以不能访问到$el属性。
3. beforeMount（挂载前）：在开始挂载之前被调用，相关的render函数首次被调用。实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。此时还没有挂载html到页面上。
4. mounted（挂载后）：在el被新创建的vm.$el替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。完成模板中html渲染到html页面中。此过程中进行ajax交互。
5. beforeUpdate（更新前）：响应式数据更新时调用，此时虽然响应式数据更新了，但对应的真实DOM还没有被渲染。
6. updated（更新后）：在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。此时DOM 已经根据响应式数据的变化更新了。调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作。然而在大多数的情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。
7. beforeDestroy(销毁前）：实例销毁之前调用。这一步，实例仍然完全可用，this仍能获取到实例。
8. destroyed（销毁后）：实例销毁后调用，调用后，Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有子实例也会被销毁。该钩子在夫服务器端渲染期间不可被调用。

### 27. 说一下keep-alive的理解，它是如何实现的，具体的缓存是什么？

keep-alive 是一个内置组件，可以使被包含的组件保留状态，避免重新渲染
1. 一般结合路由和动态组件使用，用于缓存组件 
2. 提供 include，exclude，max 属性，都支持字符串和正则，其中 exclude 的优先级比 include 高，组件内部会动态监听这两个属性。
include 表示只有匹配的组件被缓存
exclude 表示任何匹配到的组件都不会被缓存 
max 数字，最多可以缓存多少组件实例

3. 对应 activated 和 deactivated 两个钩子函数，激活时触发 activated，移除时触发 deactivated。 同时，beforeDestory和destoryed就不会被触发了，因为组件不会被真的销毁
4. keep-alive 的中还运用了 LRU(最近最少使用) 算法，选择最近最久未使用的组件予以淘汰。

LRU 即“最近最少使用”算法,根据数据的历史记录来进行淘汰数据，其核心思想是“如果数据最近访问过，那么将来被访问的几率也很高”。最常见的实现是使用一个链表保存缓存数据，详细算法如下：
- 新数据插入到链表头部
- 每当缓存命中（即缓存数据被访问），则将数据移到链表头部
- 链表满的时候，将链表尾部的数据丢弃 

举例说明：
```vue
<template>
  <div>
    <button @click="changeComponent">Switch Component</button>
    <keep-alive :include="['ComponentA']" :exclude="['ComponentB']" :max="2">
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'
import ComponentC from './ComponentC.vue'

export default {
  data() {
    return {
      components: ['ComponentA', 'ComponentB', 'ComponentC'],
      currentComponent: 'ComponentA'
    }
  },
  methods: {
    changeComponent() {
      const index = this.components.indexOf(this.currentComponent)
      this.currentComponent = this.components[(index + 1) % this.components.length]
    }
  },
  components: {
    ComponentA,
    ComponentB,
    ComponentC
  }
}
</script>
```
在这个例子中，我们有三个组件 ComponentA，ComponentB 和 ComponentC，以及一个按钮用于切换当前显示的组件。

我们使用了 `<keep-alive>` 的 include 属性，指定只有 ComponentA 应该被缓存；使用了 exclude 属性，指定 ComponentB 不应该被缓存；使用了 max 属性，指定缓存的最大数量为 2。

这意味着，当我们切换组件时，ComponentA 会被缓存，ComponentB 不会被缓存，而对于 ComponentC，由于它没有被 include 和 exclude 指定，所以它的缓存行为会根据 max 来决定：如果当前缓存的组件数量已经达到了 max，那么 ComponentC 不会被缓存；否则，ComponentC 会被缓存。




### 28. slot是什么？有什么作用？原理是什么？

slot插槽，一般在封装组件的时候使用，在组建内不知道以那种形式来展示内容时，可以用slot来占据位置，最终展示形式由父组件以内容形式传递过来，主要分为三种：

-   默认插槽：又名匿名查抄，当slot没有指定name属性值的时候一个默认显示插槽，一个组件内只有有一个匿名插槽。
-   具名插槽：带有具体名字的插槽，也就是带有name属性的slot，一个组件可以出现多个具名插槽。
-   作用域插槽：默认插槽、具名插槽的一个变体，可以是匿名插槽，也可以是具名插槽，该插槽的不同点是在子组件渲染作用域插槽时，可以将子组件内部的数据传递给父组件，让父组件根据子组件的传递过来的数据决定如何渲染该插槽。

#### 实现原理：
当子组件vm实例化时，获取到父组件传入的slot标签的内容，存放在vm.$slot中，默认插槽为vm.$slot.default，具名插槽为vm.$slot.xxx，xxx 为插槽名，当组件执行渲染函数时候，遇到slot标签，使用$slot中的内容进行替换，此时可以为插槽传递数据，若存在数据，则可称该插槽为作用域插槽。

## 二、vue和其他框架的对比

### 29. vuex和redux的区别

vuex 和 redux 都是为了解决在应用中管理状态的问题而设计的，它们有很多的相似之处，也有不同点，具体如下：
#### 设计理念不同
vuex 是为了 vue 应用程序开发的状态管理模式。
redux 是一个通用的状态管理器，可以用于任何 JavaScript 应用程序。
#### 状态更新机制不同
vuex 的状态更新是基于 vue 的响应式系统的
redux 的状态更新是通过发送一个 action , 并在一个 reducer 中处理这个 action，返回新的状态。
#### 代码结构不同
vuex 的代码结构相对简单，所有的相关代码都包含在一个单一的文件中。
redux 则需要分为不同的文件，如 action、reducer、store等
#### 易用性不同
由于 vuex 是专门为 vue 应用开发的，因此在 vue 应用程序中 vuex 可能会更加简单。
redux 则需要在使用时进行更多的配置和编码
#### 代码可维护性不同：
redux 的严格单向数据流使得应用程序更加易于维护，但这也可能增加了代码量。
vuex 则相对简单，但也可能会出现难以维护的情况
总结
总之，vuex 和 redux 都是解决状态管理问题的工具，可以根据项目需要选择适合的工具。

