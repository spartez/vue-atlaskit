<template>
    <button ref="button"
            type="button"
            :appearance="appearance"
            :disabled="isDisabled"
            :selected="isSelected"
            :loading="isLoading"
            :spacing="spacing"
            v-bind="$attrs">
        <span class="wrapper" tabindex="-1" :icon-is-only-child="iconIsOnlyChild">
            <slot v-if="!isLoading" name="icon-before"/>
            <span v-if="$slots.default" ref="label" class="label"><slot/></span>
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
        compatConfig: {
            MODE: 3
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
button[loading=true],
button[loading=true] span.wrapper {
    pointer-events: none;
}

button[loading=true] span.label {
    opacity: 0;
}

button[loading=true] :deep(.spinner) {
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

button[loading=true][selected=true] :deep(.spinner) {
    color: var(--ds-text-inverse, #FFFFFF);
}

button:focus {
    box-shadow: var(--ds-border-focused, #4C9AFF) 0 0 0 2px;
}

/*default*/
button[appearance="default"] {
    background: var(--ds-background-neutral, #f4f5f7);
    color: var(--ds-text, #505f79);
}

button[appearance="default"]:not([disabled]):not([selected=true]):hover {
    background: var(--ds-background-neutral-hovered, #ebecf0);
}

button[appearance="default"]:not([disabled]):not([selected=true]):active {
    background-color: var(--ds-background-neutral-pressed, #505f79);
    color: var(--ds-text, #0052CC);
}

button[appearance="default"]:active :deep(svg) {
    color: var(--ds-text, #0052CC);
}

/*primary*/
button[appearance="primary"] {
    background: var(--ds-background-brand-bold, #0052CC);
    color: var(--ds-text-inverse, #FFFFFF);
}

button[appearance="primary"]:not([disabled]):not([selected=true]):hover {
    background: var(--ds-background-brand-bold-hovered, rgba(0, 82, 204, 0.9));
}

button[appearance="primary"]:not([disabled]):not([selected=true]):active {
    background: var(--ds-background-brand-bold-pressed, #0747A6);
}

button[appearance="primary"][loading=true] :deep(.spinner) {
    color: var(--ds-text-inverse, #FFFFFF);
}

/*link*/
button[appearance="link"] {
    background: none;
    color: var(--ds-background-brand-bold, #0052CC);
}

button[appearance="link"]:not([disabled]):not([selected=true]):hover {
    olor: var(--ds-link, #0065FF);
    text-decoration: underline;
}

button[appearance="link"]:not([disabled]):not([selected=true]):active {
    text-decoration: none;
    color: var(--ds-link-pressed, #0747A6);
}

/*subtle*/
button[appearance="subtle"] {
    background: var(--ds-background-neutral-subtle, none);
    color: var(--ds-text-subtle, #505f79);
}

button[appearance="subtle"]:not([disabled]):not([selected=true]):hover {
    background-color: var(--ds-background-neutral-subtle-hovered, rgba(9, 30, 66, 0.08));
}

button[appearance="subtle"]:not([disabled]):not([selected=true]):active {
    background: var(--ds-background-neutral-subtle-pressed, rgba(179, 212, 255, 0.6));
    color: var(--ds-text, #0052CC);
}

/*subtle-link*/
button[appearance="subtle-link"] {
    background: var(--ds-background-neutral-subtle, none);
    color: var(--ds-text-subtle, #505f79);
}

button[appearance="subtle-link"]:not([disabled]):not([selected=true]):hover {
    text-decoration: underline;
    color: var(--ds-text-subtle, #505f79);
}

button[appearance="subtle-link"]:not([disabled]):not([selected=true]):active {
    text-decoration: none;
    color: var(--ds-text-subtle, #505f79);
}

/*warning*/
button[appearance="warning"] {
    background: var(--ds-background-warning-bold, #FFAB00);
    color: var(--ds-text-inverse, #FFFFFF);

}

button:focus[appearance="warning"] {
    box-shadow: var(--ds-background-warning-bold, #FFAB00) 0 0 0 2px;
}

button[appearance="warning"]:not([disabled]):not([selected=true]):hover {
    background: var(--ds-background-warning-bold-hovered, #FFC400);
}

button[appearance="warning"]:not([disabled]):not([selected=true]):active,
button[appearance="warning"][selected=true],
button[appearance="warning"][selected=true]:hover {
    background: var(--ds-background-warning-bold-pressed, #FF991F);
    color: var(--ds-text-inverse, #FFFFFF);
}

button[appearance="warning"]:active :deep(svg),
button[appearance="warning"][selected=true] :deep(svg),
button[appearance="warning"][selected=true]:hover :deep(svg) {
    color: var(--ds-text-inverse, #FFFFFF);
}

/*danger*/
button[appearance="danger"] {
    background: var(--ds-background-danger-bold, #DE350B);
    color: var(--ds-text-inverse, #FFFFFF);
}

button:focus[appearance="danger"] {
    box-shadow: var(--ds-border-focused, #FF8F73) 0 0 0 2px;
}

button[appearance="danger"]:not([disabled]):not([selected=true]):hover {
    background: var(--ds-background-danger-bold-hovered, #FF5630);
}

button[appearance="danger"]:not([disabled]):not([selected=true]):active,
button[appearance="danger"][selected=true],
button[appearance="danger"][selected=true]:hover {
    background: var(--ds-background-danger-bold-pressed, #BF2600);
    color: var(--ds-text-inverse, #FFFFFF);
}

button[appearance="danger"][loading=true] :deep(.spinner) {
    color: var(--ds-text-inverse, #FFFFFF);
}

button[selected=true],
button[selected=true]:hover,
button[selected=true]:active {
    background: var(--ds-background-selected, #253858);
    color: var(--ds-text-selected, #F4F5F7);
    text-decoration: none;
}

button[selected=true] :deep(svg),
button[selected=true]:hover :deep(svg),
button[selected=true]:active :deep(svg) {
    color: var(--ds-text-selected, #F4F5F7);
}

button[disabled] span.wrapper,
button[disabled] :deep(svg) {
    color: rgb(165, 173, 186);
    pointer-events: none;
}

button[disabled] {
    cursor: not-allowed;
}

button[loading=true][disabled] :deep(.spinner) {
    color: var(--ds-text, #FFFFFF);
}

button[disabled]:not([appearance="subtle-link"]):not([appearance="link"]):not([appearance="subtle"]) {
    background: var(--ds-background-disabled, rgb(245 246 248));
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
