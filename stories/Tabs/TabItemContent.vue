<template>
    <Tooltip :label="'Tab ' + index" append-to-body>
        <div class="tab-item">
            <span class="title">Tab {{ index }}</span>
            <Badge appearance="default" :value="index"/>
        </div>
    </Tooltip>
</template>

<script>
    import Badge from '@/components/Badge/Badge';
    import Tooltip from '@/components/Tooltip/Tooltip';

    export default {
        name: 'TabItemContent',
        components: {
            Badge, Tooltip
        },
        props: {
            index: {
                type: Number
            }
        }
    };
</script>

<style scoped>
.tab-item {
    display: inline-flex;
    align-items: center;
    width: 100%;
}

.title {
    margin-right: 8px;
    white-space: nowrap;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
