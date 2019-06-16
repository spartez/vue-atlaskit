import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import Toggle from '../src/components/Toggle/Toggle';


storiesOf('Toggle', module)
    .addDecorator(withInfo)
    .add('Size', () => ({
            components: { Toggle },
            template:
                `<main>
                    <Toggle v-model="regular" />
                    <Toggle size="large" v-model="large" />
                </main>`,
            data() {
                return {
                    regular: false,
                    large: false
                }
            }

        }),
        {
            info: {
                styles: { info: { fontFamily: 'Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' } }
            }
        });
