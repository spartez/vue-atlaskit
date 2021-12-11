<template>
    <div class="icons">
        <Spinner v-if="isFetching" class="spinner-icon" size="icon"/>
        <Clear
            v-if="shouldShowClearIcon"
            size="xsmall"
            class="clear-icon"
            primary-color="#A5ADBA"
            @click.native="onClear"/>
        <slot>
            <Caret v-if="!createable" size="xsmall"/>
        </slot>
    </div>
</template>

<script>
    import Spinner from '../Spinner/Spinner.vue';
    import Caret from '../Icon/HipchatChevronDownIcon';
    import Clear from '../Icon/EditorErrorIcon';

    export default {
        name: 'Icons',
        components: { Spinner, Caret, Clear },
        props: {
            isFetching: {
                type: Boolean,
                default: false
            },
            isSelected: {
                type: Boolean,
                default: false
            },
            createable: {
                type: Boolean,
                default: false
            },
            isClearable: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            shouldShowClearIcon() {
                return this.isSelected && !this.isFetching && this.isClearable;
            }
        },
        methods: {
            onClear() {
                this.$emit('clear');
            }
        }
    };
</script>

<style scoped>
.icons {
    display: inline-flex;
    align-items: center;
    position: absolute;
    right: 6px;
}

.clear-icon,
.spinner-icon {
    margin-right: 3px;
}

.clear-icon:hover {
    cursor: pointer;
}
</style>
