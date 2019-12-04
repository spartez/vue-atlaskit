<template>
    <div class="priority">
        <img class="issue-priority-icon" :src="value.iconUrl" :alt="value.name"
             :title="value.name">
        <span>{{ value.name }}</span>
    </div>
</template>

<script>
    export default {
        name: 'IssuePriorityRenderer',
        props: {
            value: {
                type: Object,
                default: () => ({})
            }
        }
    };
</script>

<style scoped>
    .issue-priority-icon {
        width: 16px;
        height: 16px;
        margin-right: 2px;
    }

    .priority {
        display: inline-flex;
        align-items: center;
    }
</style>
