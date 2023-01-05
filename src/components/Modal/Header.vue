<template>
  <div class="header">
    <component
      :is="icon"
      v-if="appearance"
      class="icon"
      :primary-color="color"
    />
    <h3 class="title">
      {{ heading }}
    </h3>
  </div>
</template>

<script>
    import WarningIcon from '../Icon/WarningIcon';
    import ErrorIcon from '../Icon/ErrorIcon';

    export default {
        name: 'Header',
        components: { WarningIcon, ErrorIcon },
        props: {
            heading: {
                type: String,
                default: ''
            },
            appearance: {
                type: String,
                default: ''
            }
        },
        computed: {
            icon() {
                return this.appearance === 'danger' ? 'ErrorIcon' : 'WarningIcon';
            },
            color() {
                return this.appearance === 'danger' ? '#DE350B' : '#FF991F';
            }
        }
    };
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
}

.icon {
    margin-right: 8px;
}

.title {
    margin-top: 0;
}
</style>
