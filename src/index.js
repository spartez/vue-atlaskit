import Button from './components/Button/Button';
import Spinner from './components/Spinner/Spinner';
import IconWrapper from './components/Icon/IconWrapper';
import * as Icons from './components/Icon';

const atlaskit = {
    Button,
    Spinner,

    install(Vue) {
        Vue.component('Button', Button);
        Vue.component('Spinner', Spinner);
        Vue.component('IconWrapper', IconWrapper);

        Object.entries(Icons).forEach(([name, comp]) => Vue.component(name, comp));
    }
};

// Export library
export default atlaskit;

export { Button, Spinner, IconWrapper };
export * from './components/Icon';
