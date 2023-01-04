import '@atlaskit/css-reset/dist/bundle.css';
import '@atlaskit/tokens/css/atlassian-dark.css'
import '@atlaskit/tokens/css/atlassian-light.css'
import '@atlaskit/tokens/css/atlassian-spacing.css'
import '@atlaskit/tokens/css/atlassian-typography.css'
import './style.css';

import { storiesOf, configure } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withRootAttribute } from "storybook-addon-root-attribute";

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
        .addDecorator(withRootAttribute)
        .addParameters({
            rootAttributes: [{
                root: 'html',
                attribute: 'data-theme',
                defaultState: {
                    name: "Light",
                    value: null
                },
                states: [
                    {
                        name: "dark",
                        value: "dark"
                    }
                ]
            }]
        }).addDecorator(withRootAttribute)
        .addParameters({
            rootAttribute: {
                attribute: 'data-theme',
                defaultState: {
                    name: "Light",
                    value: null
                },
                states: [
                    {
                        name: "Dark",
                        value: "dark"
                    }
                ]
            }
        })
        .add(name, () => ({
            name: 'StoryWrapper',
            components: component.components,
            render(h) {
                return h(component, { style: { padding: '20px' } });
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
