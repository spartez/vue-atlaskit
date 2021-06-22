import TabContainer from './TabContainer';

const TabItem = content => ({
    ...content,
    render() {
        return this.$slots.default;
    }
});

const Tab = TabItem({ name: 'Tab' });
const TabContent = TabItem({ name: 'TabContent' });
export { TabContainer, Tab, TabContent };
