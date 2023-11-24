import { getGlobalTheme, setGlobalTheme } from '@atlaskit/tokens';
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
                attribute: 'theme',
                defaultState: {
                    name: "Light",
                    value: "light"
                },
                states: [
                    {
                        name: "dark",
                        value: "dark"
                    }
                ]
            }]
        })
        .addDecorator(withRootAttribute)
        .addParameters({
            rootAttribute: {
                attribute: 'theme',
                defaultState: {
                    name: "Light",
                    value: "light"
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
            mounted() {
                const targetNode = document.querySelector("html");
                const config = { attributes: true };
                const callback = function (mutationsList) {
                    for (let mutation of mutationsList) {
                        const currentTheme = mutation.target.getAttribute("theme");
                        if (mutation.type === 'attributes' && currentTheme && currentTheme !== getGlobalTheme().colorMode) {
                            void setGlobalTheme({ colorMode: mutation.target.getAttribute('theme') })
                        }
                    }
                };
                const observer = new MutationObserver(callback);
                observer.observe(targetNode, config);
            },
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
