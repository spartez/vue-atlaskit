<template>
    <a ref="button"
       href="#"
       :appearance="appearance"
       :disabled="isDisabled"
       :selected="isSelected"
       :loading="isLoading"
       :spacing="spacing"
       @click.prevent="onClick">
        <span class="wrapper" tabindex="-1">
            <span v-if="$slots['default']" ref="label" class="label"><slot/></span>
            <span class="icon">
                <Spinner v-if="isLoading" :size="spacing === 'default' ? 'small' : 'icon'"/>
                <slot v-else name="icon"/>
            </span>
        </span>
    </a>
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
        mounted() {
            if (this.autoFocus) {
                this.$refs.button.focus();
            }
        },
        methods: {
            onClick() {
                this.$emit('click');
            }
        }

    };
</script>

<style scoped>
a {
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-size: 14px;
    align-items: baseline;
    border-radius: 3px;
    border-width: 0;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font-style: normal;
    margin: 0;
    max-width: 100%;
    text-align: center;
    text-decoration: none;
    transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
    padding: 0 8px;
    outline: none;
    position: relative;
    overflow: hidden;
}

a[spacing="default"] {
    height: 32px;
    line-height: 32px;
}

a[spacing="compact"] {
    height: 24px;
    line-height: 24px;
}

a[spacing="none"] {
    height: auto;
    line-height: inherit;
    padding: 0;
}

span.wrapper {
    border-radius: 3px;
    outline: none;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
}

span.label {
    margin: 0 4px;
}

[spacing="none"] span.label {
    margin: 0;
}

span.icon {
    display: flex;
}

a[loading] {
    pointer-events: none;
}

a[loading] span.label {
    opacity: 0;
}

a[loading] .spinner {
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

a[loading][selected] .spinner {
    color: #FFF;
}

a:focus {
    box-shadow: rgba(38, 132, 255, 0.6) 0 0 0 2px;
}

/*default*/
a[appearance="default"] {
    background: rgba(9, 30, 66, 0.04);
    color: #505F79;
}

a[appearance="default"]:hover {
    background: rgba(9, 30, 66, 0.08);
}

a[appearance="default"]:active {
    background: rgba(179, 212, 255, 0.6);
    color: #0052CC;
}

/*primary*/
a[appearance="primary"] {
    background: #0052CC;
    color: #FFFFFF;
}

a[appearance="primary"]:hover {
    background: #0065FF;
}

a[appearance="primary"]:active {
    background: #0747A6;
}

a[appearance="primary"][loading] .spinner {
    color: #FFF;
}

/*link*/
a[appearance="link"] {
    background: none;
    color: #0052CC;
}

a[appearance="link"]:hover {
    color: #0065FF;
    text-decoration: underline;
}

a[appearance="link"]:active {
    text-decoration: none;
    color: #0747A6;
}

/*subtle*/
a[appearance="subtle"] {
    background: none;
    color: #505F79;
}

a[appearance="subtle"]:hover {
    background-color: rgba(9, 30, 66, 0.08);
}

a[appearance="subtle"]:active {
    background: rgba(179, 212, 255, 0.6);
    color: #0052CC;
}

/*subtle-link*/
a[appearance="subtle-link"] {
    background: none;
    color: #6B778C;
}

a[appearance="subtle-link"]:hover {
    text-decoration: underline;
    color: #8993A4;
}

a[appearance="subtle-link"]:active {
    text-decoration: none;
    color: #505F79;
}

/*warning*/
a[appearance="warning"] {
    background: #FFAB00;
    color: #172B4D;
}

a:focus[appearance="warning"] {
    box-shadow: #FF8B00 0 0 0 2px;
}

a[appearance="warning"]:hover {
    background: #FFC400;
}

a[appearance="warning"]:active, a[appearance="warning"][selected], a[appearance="warning"][selected]:hover {
    background: #FF991F;
    color: #172B4D;
}

/*danger*/
a[appearance="danger"] {
    background: #DE350B;
    color: #FFFFFF;
}

a:focus[appearance="danger"] {
    box-shadow: #FF8F73 0 0 0 2px;
}

a[appearance="danger"]:hover {
    background: #FF5630;
}

a[appearance="danger"]:active, a[appearance="danger"][selected], a[appearance="danger"][selected]:hover {
    background: #BF2600;
}

a[appearance="danger"][loading] .spinner {
    color: #FFF;
}

a[selected], a[selected]:hover, a[selected]:active {
    background: #253858;
    color: rgb(244, 245, 247);
    text-decoration: none;
}

a[disabled] {
    color: rgb(165, 173, 186);
    pointer-events: none;
}

a[loading][disabled] .spinner {
    color: #172B4D;
}

a[disabled]:not([appearance="subtle-link"]):not([appearance="link"]):not([appearance="subtle"]) {
    background: rgba(9, 30, 66, 0.04);
}

a::-moz-focus-inner, span::-moz-focus-inner, button::-moz-focus-inner {
    border: 0;
    margin: 0;
    padding: 0;
}
</style>
