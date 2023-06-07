<template>
    <label :for="id">
        <input :id="id"
               type="checkbox"
               :checked="modelValue"
               :disabled="disabled"
               @change="toggle">
        <div class="slide" :size="size">
            <div class="slide-inner">
                <EditorDoneIcon v-if="modelValue" data-cy="done" :size="iconSize"
                                :primary-color="color"
                                class="done"
                                aria-hidden="true" />
                <CrossIcon v-else data-cy="cross" :size="iconSize"
                           :primary-color="color"
                           class="close"
                           aria-hidden="true" />
            </div>
        </div>
    </label>
</template>

<script>
    import EditorDoneIcon from '../Icon/EditorDoneIcon';
    import CrossIcon from '../Icon/CrossIcon';

    export default {
        name: 'Toggle',
        components: { CrossIcon, EditorDoneIcon },
        props: {
            modelValue: {
                type: [Number, String, Boolean],
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: 'regular'
            }
        },
        data() {
            return { id: undefined };
        },
        computed: {
            iconSize() {
                return this.size === 'large' ? 'small' : 'xsmall';
            },
            color() {
                return this.disabled
                  ? 'var(--ds-icon-disabled, #A5ADBA)'
                  : 'var(--ds-surface, #FFFFFF)';
            }
        },
        created() {
            // eslint-disable-next-line
            this.id = this._uuid;
        },
        methods: {
            toggle() {
                if (this.disabled) return;
                this.$emit('update:modelValue', !this.modelValue);
            }
        }
    };
</script>

<style scoped>
input {
    opacity: 0;
    position: absolute;
}

label {
    display: inline-block;
    padding: 2px;
}

.slide {
    background-clip: content-box;
    background-color: var(--ds-background-neutral-bold, #6B778C);
    display: block;
    height: 16px;
    position: relative;
    width: 32px;
    border-radius: 16px;
    border: 2px solid transparent;
    padding: 2px;
    transition: all 0.2s ease 0s;
    cursor: pointer;
}

input:disabled + .slide {
    cursor: not-allowed;
}

input:focus + .slide {
    border: 2px solid var(--ds-border-focused, #4C9AFF);
}

.slide[size="large"] {
    height: 20px;
    width: 40px;
    border-radius: 20px;
}

.slide::before {
    background-color: var(--ds-surface, #FFFFFF);
    bottom: 4px;
    content: "";
    height: 12px;
    left: 4px;
    position: absolute;
    transform: initial;
    width: 12px;
    border-radius: 50%;
    transition: all 0.2s ease 0s;
}

.slide[size="large"]::before {
    height: 16px;
    width: 16px;
}

input:checked + .slide {
    background-color: var(--ds-background-success-bold, #00875A);
}

input:disabled + .slide {
    background-color: var(--ds-background-disabled, #F4F5F7);
}

input:checked + .slide::before {
    transform: translateX(16px);
}

input:checked + .slide[size="large"]::before {
    transform: translateX(20px);
}

input:disabled + .slide::before {
  background: var(--ds-surface, #FFFFFF);
}

.done {
    padding-left: 2px;
    padding-right: 0;
}

.close {
    padding-left: 0;
    padding-right: 2px;
}

.slide-inner {
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
    align-items: center;
    width: 100%;
    transition: all 0.2s ease 0s;
}

input:checked + .slide > .slide-inner {
    flex-direction: row;
}

input:not(:disabled):checked + .slide:hover {
    background-color: var(--ds-background-success-bold-hovered, #36B37E);
}

input:not(:disabled):not(:checked) + .slide:hover {
    background-color: var(--ds-background-neutral-bold-hovered, #A5ADBA);
}
</style>
