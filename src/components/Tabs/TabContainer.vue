<script>
    import TabItem from './TabItem';

    export default {
        name: 'Tabs',
        functional: true,
        render(h, { slots, props, listeners }) {
            const { tabs, content } = slots();
            return [
                h('nav', tabs.map(vnode => h(TabItem, {
                    props: { ...vnode.data.attrs, selected: props.value },
                    on: { ...listeners }
                }, [vnode]))),
                h('span', [content.find(({ data }) => data.attrs.id === props.value)])
            ];
        }
    };
</script>

<style scoped>
    nav {
        position: relative;
        display: flex;
        font-weight: 500;
        padding: 0px;
        margin: 0px;
    }

    nav:before {
        content: "";
        border-radius: 2px;
        bottom: 0px;
        margin: 0px;
        position: absolute;
        width: inherit;
        left: 8px;
        right: 8px;
        background-color: rgb(235, 236, 240);
        height: 2px;
    }
</style>
