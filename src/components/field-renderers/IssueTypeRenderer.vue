<template>
    <div class="type">
        <img class="issue-type-icon" :src="typeIconUrl" :alt="typeName"
             :title="typeName">
    </div>
</template>

<script>
    export default {
        name: 'IssueTypeRenderer',
        props: {
            value: {
                type: Object,
                required: true
            }
        },
        computed: {
            typeName() {
                return this.value && this.value.name;
            },
            typeIconUrl() {
                return this.value && this.value.iconUrl;
            }
        }
    };
</script>

<style scoped>
    .issue-type-icon {
        width: 16px;
        height: 16px;
        margin-right: 4px;
    }

    .type{
        display: inline-flex;
        align-items: center;
    }
</style>
