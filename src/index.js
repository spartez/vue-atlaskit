import Button from './components/Button/Button';
import Spinner from './components/Spinner/Spinner';
import IconWrapper from './components/Icon/IconWrapper';
import Input from './components/Form/Input';
import TextArea from './components/Form/TextArea';
import FieldGroup from './components/Form/FieldGroup';
import * as Icons from './components/Icon';
import '@atlaskit/css-reset/dist/bundle.css';

const atlaskit = {
    Button,
    Spinner,

    install(Vue) {
        Vue.component('Button', Button);
        Vue.component('Spinner', Spinner);
        Vue.component('Input', Input);
        Vue.component('TextArea', TextArea);
        Vue.component('FieldGroup', FieldGroup);
        Vue.component('IconWrapper', IconWrapper);

        Object.entries(Icons).forEach(([name, comp]) => Vue.component(name, comp));
    }
};

// Export library
export default atlaskit;

export { Button, Spinner, IconWrapper, FieldGroup, TextArea, Input };
export * from './components/Icon';
