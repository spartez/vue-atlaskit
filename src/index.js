import Button from './components/Button/Button';
import Spinner from './components/Spinner/Spinner';

const atlaskit = {
    Button,
    Spinner,

    install(Vue) {
        Vue.component('Button', Button);
        Vue.component('Spinner', Spinner);
    }
};

// Export library
export default atlaskit;

export { Button, Spinner };
