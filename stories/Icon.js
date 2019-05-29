import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import * as AtlaskitComponents from '../src/components/Icon';

const IconComponents = Object.entries(AtlaskitComponents)
    .filter(([name]) => name.endsWith('Icon'))
    .reduce((acc, [name, comp]) => ({ ...acc, [name]: comp }), {});

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
                        <p :style="{ color, backgroundColor, padding: '20px' }">
                            <span v-for="(icon, name) in icons">
                                <component :is="icon" :size="size" :key="name" :title="name"/>
                            </span>
                        </p>
                    </div>`,
            data() {
                return {
                    icons: IconComponents,
                    size: 'medium',
                    color: undefined,
                    backgroundColor: undefined
                };
            },
            methods: {
                toggleColors() {
                    if (!this.color) {
                        this.color = '#ffffff';
                        this.backgroundColor = '#0747a6';
                    } else {
                        this.color = undefined;
                        this.backgroundColor = undefined;
                    }
                }
            }
        })
    );
