<template>
    <button ref="button"
            :appearance="appearance"
            :disabled="isDisabled"
            :selected="isSelected"
            :loading="isLoading"
            :spacing="spacing"
            v-on="listeners">
        <span class="wrapper" tabindex="-1" :icon-is-only-child="iconIsOnlyChild">
            <slot v-if="!isLoading" name="icon-before"/>
            <span v-if="this.$slots.default" ref="label" class="label">
                <slot/>
            </span>
            <slot v-if="!isLoading" name="icon-after"/>
            <Spinner v-if="isLoading" :size="spacing === 'default' ? 'small' : 'icon'"/>
        </span>
    </button>
</template>

<script>
    import Spinner from '../Spinner/Spinner';

    export default {
        name: 'Button',
        components: {
            Spinner
        },
        props: {
            isSelected: { type: Boolean, default: false },
            isDisabled: { type: Boolean, default: false },
            appearance: { type: String, default: 'default' },
            autoFocus: { type: Boolean, default: false },
            isLoading: { type: Boolean, default: false },
            spacing: { type: String, default: 'default' }
        },
        computed: {
            iconIsOnlyChild() {
                return !!(this.$slots['icon-after'] && !this.$slots['icon-before'] && !this.$slots.default)
                    || (!this.$slots['icon-after'] && this.$slots['icon-before'] && !this.$slots.default);
            },
            listeners() {
                return this.$listeners;
            }
        },
        mounted() {
            if (this.autoFocus) {
                this.$refs.button.focus();
            }
        }
    };
</script>

<style scoped>
button {
    font-size: 14px;
    align-items: baseline;
    border-radius: 3px;
    border-width: 0;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    font-style: normal;
    margin: 0;
    max-width: 100%;
    text-align: center;
    text-decoration: none;
    transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
    outline: none;
    position: relative;
    overflow: hidden;
    padding: 0;
}

button[spacing="default"] {
    height: 32px;
    line-height: 32px;
    min-width: 32px;
}

button[spacing="compact"] {
    height: 24px;
    line-height: 24px;
    min-width: 24px;
}

button[spacing="none"] {
    height: auto;
    line-height: inherit;
}

[spacing="none"] span.wrapper {
    padding: 0;
}

span.wrapper {
    border-radius: 3px;
    outline: none;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    padding: 0 8px;
}

[spacing="compact"] span.wrapper[icon-is-only-child] {
    padding: 0 4px;
}

span.label {
    align-self: center;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: 0 4px;
}

span.label,
button[loading],
button[loading] span.wrapper {
    pointer-events: none;
}

button[loading] span.label {
    opacity: 0;
}

button[loading] >>> .spinner {
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

button[loading][selected] >>> .spinner {
    color: #FFF;
}

button:focus {
    box-shadow: rgba(38, 132, 255, 0.6) 0 0 0 2px;
}

/*default*/
button[appearance="default"] {
    background: #f6f7f8;
    color: #505F79;
}

button[appearance="default"]:hover {
    background: #efeff2;
}

button[appearance="default"]:active {
    background: #d2e6ff;
    color: #0052CC;
}

button[appearance="default"]:active >>> svg {
    color: #0052CC;
}

/*primary*/
button[appearance="primary"] {
    background: #0052CC;
    color: #FFFFFF;
}

button[appearance="primary"]:hover {
    background: #0065FF;
}

button[appearance="primary"]:active {
    background: #0747A6;
}

button[appearance="primary"][loading] >>> .spinner {
    color: #FFF;
}

/*link*/
button[appearance="link"] {
    background: none;
    color: #0052CC;
}

button[appearance="link"]:hover {
    color: #0065FF;
    text-decoration: underline;
}

button[appearance="link"]:active {
    text-decoration: none;
    color: #0747A6;
}

/*subtle*/
button[appearance="subtle"] {
    background: none;
    color: #505F79;
}

button[appearance="subtle"]:hover {
    background-color: rgba(9, 30, 66, 0.08);
}

button[appearance="subtle"]:active {
    background: rgba(179, 212, 255, 0.6);
    color: #0052CC;
}

/*subtle-link*/
button[appearance="subtle-link"] {
    background: none;
    color: #6B778C;
}

button[appearance="subtle-link"]:hover {
    text-decoration: underline;
    color: #8993A4;
}

button[appearance="subtle-link"]:active {
    text-decoration: none;
    color: #505F79;
}

/*warning*/
button[appearance="warning"] {
    background: #FFAB00;
    color: #172B4D;
}

button:focus[appearance="warning"] {
    box-shadow: #FF8B00 0 0 0 2px;
}

button[appearance="warning"]:hover {
    background: #FFC400;
}

button[appearance="warning"]:active,
button[appearance="warning"][selected],
button[appearance="warning"][selected]:hover {
    background: #FF991F;
    color: #172B4D;
}

button[appearance="warning"]:active >>> svg,
button[appearance="warning"][selected] >>> svg,
button[appearance="warning"][selected]:hover >>> svg {
    color: #172B4D;
}

/*danger*/
button[appearance="danger"] {
    background: #DE350B;
    color: #FFFFFF;
}

button:focus[appearance="danger"] {
    box-shadow: #FF8F73 0 0 0 2px;
}

button[appearance="danger"]:hover {
    background: #FF5630;
}

button[appearance="danger"]:active,
button[appearance="danger"][selected],
button[appearance="danger"][selected]:hover {
    background: #BF2600;
}

button[appearance="danger"][loading] >>> .spinner {
    color: #FFF;
}

button[selected],
button[selected]:hover,
button[selected]:active {
    background: #253858;
    color: rgb(244, 245, 247);
    text-decoration: none;
}

button[selected] >>> svg,
button[selected]:hover >>> svg,
button[selected]:active >>> svg {
    color: rgb(244, 245, 247);
}

button[disabled] span.wrapper,
button[disabled] >>> svg {
    color: rgb(165, 173, 186);
    pointer-events: none;
}

button[loading][disabled] >>> .spinner {
    color: #172B4D;
}

button[disabled]:not([appearance="subtle-link"]):not([appearance="link"]):not([appearance="subtle"]) {
    background: rgba(9, 30, 66, 0.04);
}

button::-moz-focus-inner,
span::-moz-focus-inner,
button::-moz-focus-inner {
    border: 0;
    margin: 0;
    padding: 0;
}

button ~ button {
    margin-left: 10px;
}
</style>
