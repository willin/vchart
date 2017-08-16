# vchart

Vue [Chartist.js](https://gionkunz.github.io/chartist-js) Component

[![github](https://img.shields.io/github/followers/willin.svg?style=social&label=Follow)](https://github.com/willin) [![npm](https://img.shields.io/npm/v/vchart.svg)](https://npmjs.org/package/vchart) [![npm](https://img.shields.io/npm/dm/vchart.svg)](https://npmjs.org/package/vchart) [![npm](https://img.shields.io/npm/dt/vchart.svg)](https://npmjs.org/package/vchart) ![size](https://img.shields.io/github/size/willin/vchart/dist/vchart.min.js.svg) ![dep](https://img.shields.io/david/willin/vchart.svg)

> 浏览器版本: 3.78kb, GZip压缩后1.42kb

## Usage / 使用说明

### Installation / 安装

```bash
yarn add vchart
# or
npm i -S vchart
```

### Props

- __ratio__ - `String` 
 class ratio of Chartist. see values on / 参考: [Chartist web site](https://gionkunz.github.io/chartist-js/getting-started.html#as-simple-as-it-can-get)

- __type__ - `String` (required / 必选) 
chart type, possible values: / 支持的类型有:
    - `Line`
    - `Bar`
    - `Pie`

- __data__ - `Object` data object like this:
```js
// 示例:
const data = {
    labels: ["A", "B", "C"],
    series:[[1, 3, 2], [4, 6, 5]]
}
```

- __options__ - `Object`
options object, see defaultOptions on / 默认配置参考 [API Documentation / API 文档](https://gionkunz.github.io/chartist-js/api-documentation.html)

- __empty__ - `String` 
message when no data / 无数据时显示的文字消息

- __event-handlers__ - `Array` 
a special array to use `chart.on(event, function)`
```javascript
// 处理 `chart.on(event, function)` 事件
const eventHandlers = [{
    event: 'draw',
    fn() {
        // animation / 动画
    }
}, {
    // an other event hander / 另一个事件处理器
}]
```

- __responsive-options__ - `Array`
object for responsive options / 响应式参数对象


## Example / 示例

Demo / 在线示例: <https://vchart.js.cool/>

### Single File Components / 单文件组件中使用

```vue
<template>
<vchart
    ratio="ct-major-second"
    :type="type"
    :data="chartData"
    :options="options" >
</vchart>
</template>

<script>
import vchart from 'vchart';

exports default {
  components: {
    vchart
  },
  data() {
    return {
      data: {},
      options: {},
      type: 'Line'
    };
  }
}
</script>
```

## Browser / 浏览器中使用

```html
<!doctype html>
<html>
<head>
  <!-- Import CSS / 引用CSS -->
  <link rel="stylesheet" href="//unpkg.com/chartist/dist/chartist.css">
</head>
<body>

<!-- Example / 示例 -->
<vchart
    ratio="ct-major-second"
    :type="type"
    :data="chartData"
    :options="options" >
</vchart>

<!-- Import Scripts / 引用JS资源 -->
<script src="//unpkg.com/vue"></script>
<script src="//unpkg.com/chartist"></script>
<script src="//unpkg.com/vchart"></script>
<script>
  new Vue({
    el: '#app',
    components: {
        vchart
    },
    data() {
        return {
            data: {
                labels: '["周一", "周二", "周三", "周四", "周五"]',
                series: "[4, 3.8, 3, 5, 4.1]"
            },
            type: 'Line',
            options: {
                fullWidth: true,
                lineSmooth: false
            }
        }
    }
})
</script>
</body>
</html>
```

## License

MIT

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
