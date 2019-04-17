import { configure } from '@storybook/vue';
import './style.css'


function loadStories() {
    // You can require as many stories as you need.
    const req = require.context('../stories', true, /\.jsx?$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
