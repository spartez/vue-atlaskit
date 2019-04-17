import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import Button from '../src/components/Button/Button.vue';


storiesOf('Button', module)
    .addDecorator(withInfo)
    .add(
        'Button',
        () => ({
            components: { Button },
            template: `
                    <div class="wrapper">
                        <div class="loading-state-switcher"><label><input type="checkbox" v-model="isLoading"><span>Show Loading State</span></label></div>
                        <div class="loading-state-switcher"><label><input type="checkbox" v-model="isDisabled"><span>Show Disable State</span></label></div>
                        <div class="loading-state-switcher"><label><input type="checkbox" v-model="isSelected"><span>Show Selected State</span></label></div>
                        <div class="buttons">
                            <Button :isLoading="isLoading" :isDisabled="isDisabled" 
                                    :isSelected="isSelected" :key="appearance" 
                                    v-for="appearance in appearances" :appearance="appearance">
                                        {{capitalize(appearance)}}
                            </Button>
                        </div>
                    </div>`,
            data() {
                return {
                    appearances: [
                        'default',
                        'primary',
                        'link',
                        'subtle',
                        'subtle-link',
                        'warning',
                        'danger'
                    ],
                    isLoading: false,
                    isDisabled: false,
                    isSelected: false

                };
            },
            methods: {
                capitalize(str) {
                    return str.charAt(0).toUpperCase() + str.slice(1);
                }
            }
        }),
        {
            info: {
                styles: { info: { fontFamily: 'Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' } }
            }
        }
    );
