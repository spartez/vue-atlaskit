<template>
  <div class="type">
    <img
      class="issue-type-icon"
      :src="typeIconUrl"
      :alt="typeName"
      :title="typeName"
    >
    <span v-if="compact">{{ value.name }}</span>
  </div>
</template>

<script>
    export default {
        name: 'IssueTypeRenderer',
        props: {
            value: {
                type: Object,
                required: true
            },
            compact: {
                type: Boolean,
                default: false
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
    }

    span {
        margin-left: 4px;
    }

    .type {
        display: inline-flex;
        align-items: center;
    }
</style>
