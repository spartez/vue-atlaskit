import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { Button } from '../src';
import ButtonAppearance from './Button/ButtonApperance.vue';
import ButtonSpacing from './Button/ButtonSpacing.vue';
import ButtonWithIcon from './Button/ButtonWithIcons.vue';

const styles = { info: { fontFamily: 'Helvetica, Arial, sans-serif' } };

storiesOf('Button', module)
    .addDecorator(withInfo)
    .add(
        'Appearances',
        () => ({
            components: { Button, ButtonAppearance },
            template: '<ButtonAppearance/>',
            propsDescription: {
                Button: {
                    appearance: ['default', 'primary', 'link', 'subtle', 'subtle-link', 'warning', 'danger'],
                    spacing: ['default', 'compact', 'none']
                }
            }
        }),
        { info: { styles, source: false } }
    )
    .add(
        'Spacing',
        () => ({
            components: { Button, ButtonSpacing },
            template: `<ButtonSpacing/>`,
        }),
        { info: { styles, source: false } }
    )
    .add(
        'Icon before & after',
        () => ({
            components: { Button, ButtonWithIcon },
            template: `<ButtonWithIcon/>`,

        }),
        { info: { styles, source: false } }
    );
