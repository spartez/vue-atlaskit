<template>
    <div class="wrapper">
        <div class="breadcrumbs">
            <slot>
                <BreadcrumbItem v-for="item in items" :key="item.text" :link="item.link"
                                :text="item.text" :wrap="wrap"/>
            </slot>
        </div>

        <CopyToClipboard v-if="copy" :text="lastItemLink" placement="bottom-start"
                         class="copy-icon">
            <CopyIcon/>
        </CopyToClipboard>
    </div>
</template>

<script>
    import BreadcrumbItem from './BreadcrumbItem';
    import CopyIcon from '../Icon/CopyIcon';
    import CopyToClipboard from '../CopyToClipboard/CopyToClipboard';

    export default {
        name: 'Breadcrumbs',
        components: { BreadcrumbItem, CopyIcon, CopyToClipboard },
        props: {
            items: {
                type: Array,
                default: () => []
            },
            wrap: {
                type: Boolean,
                default: true
            },
            copy: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                lastItemLink: undefined
            };
        },
        mounted() {
            const links = this.$el.querySelectorAll('a');
            this.lastItemLink = links[links.length - 1].getAttribute('href');
        }
    };
</script>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
}

.breadcrumbs {
    color: rgb(94, 108, 132);
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    line-height: 24px;
    font-size: 14px;
}

.copy-icon {
    height: 24px;
    transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;
    opacity: 0;
    transform: scale(0.8) translate(-6px, 1px);
    cursor: pointer;
}

.wrapper:hover .copy-icon {
    opacity: 1;
    transform: scale(0.8) translate(2px, 1px);
}
</style>
