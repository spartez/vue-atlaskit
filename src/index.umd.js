import atlaskit, * as components from './index';

// Automatically register components if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(atlaskit);
}

export default components;
