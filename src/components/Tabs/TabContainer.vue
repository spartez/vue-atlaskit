<script>
    import Tab from './Tab';

    export default {
        name: 'Tabs',
        functional: true,
        render(h, { slots, props, listeners }) {
            const { tabs, content } = slots();
            return [
                h('nav', tabs.map((vnode) => {
                    const { componentOptions, data: { attrs, staticClass } } = vnode;
                    return h(Tab, {
                        props: { ...componentOptions.propsData, selected: props.value },
                        attrs: { ...attrs },
                        class: { ...(staticClass && { [staticClass]: true }) },
                        on: { ...listeners }
                    }, [vnode]);
                })),
                h('div', [content.find(({ componentOptions }) => componentOptions.propsData.id === props.value)])
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
        margin: 0px -8px;
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
