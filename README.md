# @spartez/vue-atlaskit-next

[comment]: <> (![Rollup badge]&#40;https://img.shields.io/badge/Rollup-^1.10.0-ff69b4.svg&#41;)

[comment]: <> (![Jest]&#40;https://img.shields.io/badge/Jest-^24.7.1-blue.svg&#41;)

Vue: ^3.0.5

NPM: ^7.6.0

Node: ^15.11.0

[comment]: <> (![Vue]&#40;https://img.shields.io/badge/Vue-^2.5.13-brightgreen.svg&#41;)

[comment]: <> (![Storybook]&#40;https://img.shields.io/badge/Storybook-^5.0.8-ff70a3.svg&#41;)

[comment]: <> (![Npm badge]&#40;https://img.shields.io/npm/v/@spartez/vue-atlaskit.svg&#41;)

> Unofficial Vue 3 UI library, built according to the Atlassian Design Guidelines.

## Installation
```
npm install @spartez/vue-atlaskit-next
```

### ES6
```js
//
// Register a component manually for optimal tree shaking
//
import { Spinner } from '@spartez/vue-atlaskit-next';

export default {
  components: {
    Spinner
  },
};
```

### Browser

```html
<script src="path/to/vue3/vue3.min.js"></script>
<script src="https://unpkg.com/@spartez/vue-atlaskit-next/dist/index.min.js"></script>
<!-- Components are registered globally -->
```

### After that, you can use it in your templates:

```html
<script>
    const app = {
        template: `<Button>{{hello}}</Button>`,
        data: { hello: 'Click Me!' }
    }
    Vue.createApp(app).mount('#app');
</script>
```
For including styles you can either place the below styles in your `index.html` 
 ```html
 <link href="https://unpkg.com/@spartez/vue-atlaskit-next/dist/bundle.css" rel="stylesheet">
 ```
 
 
Or you can import it to your webpack entry point file. This is _usually_ your `main.js` file.
```js
import '@spartez/vue-atlaskit/dist/bundle.css';
```

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).
