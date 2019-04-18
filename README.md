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
vue-atlaskit can be used as a module in both CommonJS and ES modular environments.

When in non-modular environment, vue-atlaskit will register all the components to vue by itself.</p>

### ES6
```js
//
// You can register a component manually
//
import { Spinner } from '@spartez/vue-atlaskit';

export default {
  components: {
    Spinner
  },
};

//
// or register the whole module with vue
//
import atlaskit from '@spartez/vue-atlaskit';

// Install this library
Vue.use(atlaskit);
```

### CommonJS
```js
//
// You can register a component manually
//
const Vue = require('vue');
const atlaskit = require('@spartez/vue-atlaskit');

const YourComponent = Vue.extend({
  components: {
    'spinner': atlaskit.spinner
  },
});

//
// or register the whole module with vue
//
const Vue = require('vue');
const atlaskit = require('@spartez/vue-atlaskit');

// Install this library
Vue.use(atlaskit);
```

### Browser

```html
<script src="path/to/vue/vue.min.js"></script>
<script src="path/to/@spartez/vue-atlaskit/dist/vue-atlaskit.min.js"></script>
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

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).
