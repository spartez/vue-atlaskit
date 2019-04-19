import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import Input from '../src/components/Form/Input';
import TextArea from '../src/components/Form/TextArea';
import FieldGroup from '../src/components/Form/FieldGroup';


storiesOf('Form', module)
    .addDecorator(withInfo)
    .add('Input', () => ({
            components: { Input, FieldGroup },
            template:
                `<main>
                <FieldGroup label="Label" required ><Input should-fit-container placeholder="Click here to input"/></FieldGroup>
                <FieldGroup label="Label" required ><Input value="candy" is-invalid /></FieldGroup>
            </main>`
        }),
        {
            info: {
                styles: { info: { fontFamily: 'Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' } }
            }
        })
    .add('TextArea', () => ({
        components: { TextArea, FieldGroup },
        template: '<FieldGroup label="Label" required><TextArea should-fit-container/></FieldGroup>'
    }));
