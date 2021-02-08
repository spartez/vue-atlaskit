<template>
    <label :for="id" :disabled="disabled">
        <input :id="id"
               :disabled="disabled"
               type="checkbox"
               :checked="value"
               @change="toggle">
        <div class="slide" :size="size">
            <div class="slide-inner">
                <EditorDoneIcon v-if="value" data-cy="done" :size="iconSize"
                                :primary-color="color"
                                class="done"/>
                <EditorCloseIcon v-else data-cy="cross" :size="iconSize"
                                 :primary-color="color"
                                 class="close"/>
            </div>
        </div>
    </label>
</template>

<script>
    import EditorDoneIcon from '../Icon/EditorDoneIcon';
    import EditorCloseIcon from '../Icon/EditorCloseIcon';

    export default {
        name: 'Toggle',
        components: { EditorCloseIcon, EditorDoneIcon },
        props: {
            value: {
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
                return this.disabled ? 'rgb(165, 173, 186)' : 'white';
            }
        },
        created() {
            // eslint-disable-next-line
            this.id = this._uuid;
        },
        methods: {
            toggle() {
                if (this.disabled) return;
                this.$emit('input', !this.value);
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
    background-color: rgb(107, 119, 140);
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

input:focus + .slide {
    border: 2px solid rgb(76, 154, 255);
}

.slide[size="large"] {
    height: 20px;
    width: 40px;
    border-radius: 20px;
}

.slide::before {
    background-color: rgb(255, 255, 255);
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
    background-color: rgb(0, 135, 90);
}

input:checked + .slide::before {
    transform: translateX(16px);
}

input:checked + .slide[size="large"]::before {
    transform: translateX(20px);
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

input:checked:not(:disabled) + .slide:hover {
    background-color: rgb(54, 179, 126);
}

input:not(:checked):not(:disabled) + .slide:hover {
    background-color: rgb(165, 173, 186);
}

label[disabled] .slide {
    cursor: not-allowed;
}

label[disabled] input + .slide {
    background-color: rgb(244, 245, 247);
}
</style>
