import * as components from './index';

// Automatically register components if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use({
        install(Vue) {
            Object.entries(components).forEach(([name, comp]) => Vue.component(name, comp));
        }
    });
}

export default components;
