import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import Checkbox from '../src/components/Checkbox/Checkbox';


storiesOf('Checkbox', module)
    .addDecorator(withInfo)
    .add('Size', () => ({
            components: { Checkbox },
            template:
                `<main>
                    <Checkbox v-model="checked">Basic Checkbox</Checkbox>
                </main>`,
            data() {
                return {
                    checked: false,
                }
            }
        }),
        {
            info: {
                styles: { info: { fontFamily: 'Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' } }
            }
        });
