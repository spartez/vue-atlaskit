# @spartez/vue-atlaskit

![Rollup badge](https://img.shields.io/badge/Rollup-^1.10.0-ff69b4.svg)
![Jest](https://img.shields.io/badge/Jest-^24.7.1-blue.svg)
![Vue](https://img.shields.io/badge/Vue-^2.5.13-brightgreen.svg)
![Storybook](https://img.shields.io/badge/Storybook-^5.0.8-ff70a3.svg)
![Npm badge](https://img.shields.io/npm/v/@spartez/vue-atlaskit.svg)

> Unofficial Vue UI library, built according to the Atlassian Design Guidelines.

## Installation
```
npm install @spartez/vue-atlaskit
```

### ES6
```js
//
// Register a component manually for optimal tree shaking
//
import { Spinner } from '@spartez/vue-atlaskit';

export default {
  components: {
    Spinner
  },
};
```

### Browser

```html
<script src="path/to/vue/vue.min.js"></script>
<script src="https://unpkg.com/@spartez/vue-atlaskit/dist/index.min.js"></script>
<!-- Components are registered globally -->
```

### After that, you can use it in your templates:

```html
<script>
  new Vue({
      el: '#app',
      template: `<Button>{{hello}}</Button>`,
      data: { hello: 'Click Me!' }
  })
</script>
```
For including styles you can either place the below styles in your `index.html` 
 ```html
 <link href="https://unpkg.com/@spartez/vue-atlaskit/dist/bundle.css" rel="stylesheet">
 ```
 
 
Or you can import it to your webpack entry point file. This is _usually_ your `main.js` file.
```js
import '@spartez/vue-atlaskit/dist/bundle.css';
```

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).
