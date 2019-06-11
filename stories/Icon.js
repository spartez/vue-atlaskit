import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import * as IconComponents from '../src/components/Icon';
import IconWrapper from '../src/components/Icon/IconWrapper';
import Trash from '../src/components/Icon/custom-icons/trash.svg';
import Button from '../src/components/Button/Button.vue';

storiesOf('Icon', module)
    .addDecorator(withInfo)
    .add(
        'Icon',
        () => ({
            components: { ...IconComponents },
            template: `
                    <div>
                        <div>
                            <label>Size</label>
                            <select v-model="size">
                                <option value="small">small</option>
                                <option value="medium">medium</option>
                                <option value="large">large</option>
                                <option value="xlarge">xlarge</option>
                            </select>
                            <button @click="toggleColors">Toggle colors</button>
                        </div>
                        <p :style="{ color, backgroundColor, fill: backgroundColor, padding: '20px' }">
                            <span v-for="(icon, name) in icons">
                                <component :is="icon" :size="size" :key="name" secondary-color="inherit" :title="name"/>
                            </span>
                        </p>
                    </div>`,
            data() {
                return {
                    icons: IconComponents,
                    size: 'medium',
                    color: undefined,
                    backgroundColor: '#fff'
                };
            },
            methods: {
                toggleColors() {
                    if (!this.color) {
                        this.color = '#ffffff';
                        this.backgroundColor = '#0747a6';
                    } else {
                        this.color = undefined;
                        this.backgroundColor = '#fff';
                    }
                }
            }
        })
    )
    .add(
        'Custom Icon',
        () => ({
            components: { IconWrapper, Trash, Button },
            template:
                `
                  <Button>
                      <IconWrapper slot="icon-before" size="small"><Trash/></IconWrapper>
                  </Button>
                `
        })
    );