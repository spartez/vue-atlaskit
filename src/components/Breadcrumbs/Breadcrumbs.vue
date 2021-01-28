<template>
    <div class="wrapper">
        <div class="breadcrumbs">
            <slot>
                <BreadcrumbItem v-for="item in items" :key="item.text" :link="item.link"
                                :text="item.text"/>
            </slot>
        </div>
    </div>
</template>

<script>
    import BreadcrumbItem from './BreadcrumbItem';

    export default {
        name: 'Breadcrumbs',
        components: { BreadcrumbItem },
        props: {
            items: {
                type: Array,
                default: () => []
            }
        }
    };
</script>

<style scoped>
.wrapper {
    display: flex;
}

.breadcrumbs {
    color: rgb(94, 108, 132);
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    line-height: 24px;
    font-size: 14px;
}
</style>
