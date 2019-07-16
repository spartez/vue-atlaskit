<template>
    <div class="icons">
        <Spinner v-if="isFetching" size="icon"/>
        <Clear v-if="multi && isSelected" size="xsmall" class="clear-icon"
               primary-color="#A5ADBA"
               @click.native="onClear"/>
        <Caret size="xsmall"/>
    </div>
</template>

<script>
    import Spinner from '../Spinner/Spinner';
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
            multi: {
                type: Boolean,
                default: false
            },
            isSelected: {
                type: Boolean,
                default: false
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
        position: absolute;
        right: 6px;
    }

    .clear-icon:hover {
        cursor: pointer;
    }
</style>
