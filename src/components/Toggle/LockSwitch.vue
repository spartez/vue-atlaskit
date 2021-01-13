<template>
    <label :for="id">
        <input :id="id"
               type="checkbox"
               :checked="value"
               @change="toggle">
        <div class="slide" :size="size">
            <div class="slide-inner">
                <LockFilledIcon v-if="value" :size="iconSize"
                                primary-color="White"
                                class="done"/>
                <UnlockFilledIcon v-else :size="iconSize"
                                  primary-color="White"
                                  class="close"/>
            </div>
        </div>
    </label>
</template>

<script>
    import LockFilledIcon from '../Icon/LockFilledIcon';
    import UnlockFilledIcon from '../Icon/UnlockFilledIcon';

    export default {
        name: 'LockSwitch',
        components: { LockFilledIcon, UnlockFilledIcon },
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
                return this.size === 'large' ? 'xsmall' : 'xxsmall';
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
    background-color: #6B778C;
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
    background-color: #0052CC;
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
    padding-right: 3px;
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

input:checked + .slide:hover {
    background-color: #0065FF;
}

input:not(:checked) + .slide:hover {
    background-color: rgb(165, 173, 186);
}
</style>
