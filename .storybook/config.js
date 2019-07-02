import '@atlaskit/css-reset/dist/bundle.css';
import './style.css';
import '../dist/bundle.css';

import { storiesOf, configure } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';

const req = require.context('../stories', true, /\.story\.vue$/);

const parseFilename = (filename) => {
    const parts = filename.split('/');
    const name = parts[parts.length - 1].replace(/\.story\.vue$/, '');
    const group = parts.slice(1, -1).join('/');
    return { name, group };
};

const registerStory = (filename) => {
    const component = req(filename).default;
    const { group, name } = parseFilename(filename);

    const summary = require(`!!html-loader!../stories/${group}/${name}.story`);

    storiesOf(group, module)
        .addDecorator(withInfo)
        .add(name, () => ({
            name: 'StoryWrapper',
            components: component.components,
            render(h) {
                return h(component);
            }
        }), {
            info: {
                source: false,
                summary: `\`\`\`html \n ${summary} \`\`\``
            }
        });
};

function loadStories() {
    req.keys().forEach((filename) => {
        registerStory(filename);
    });
}

configure(loadStories, module);
