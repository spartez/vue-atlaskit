<template>
    <section class="message" :appearance="appearance">
        <div class="icon">
            <component :is="`${appearance}-icon`"/>
        </div>
        <div class="content-wrapper">
            <h1 v-if="title" class="title">
                {{ title }}
            </h1>
            <div class="content">
                <slot/>
            </div>
            <div v-if="$slots.actions" class="actions">
                <slot name="actions" />
            </div>
        </div>
    </section>
</template>

<script>
    import InfoIcon from '../Icon/InfoIcon';
    import WarningIcon from '../Icon/WarningIcon';
    import ErrorIcon from '../Icon/ErrorIcon';
    import CheckCircleIcon from '../Icon/CheckCircleIcon';
    import QuestionCircleIcon from '../Icon/QuestionCircleIcon';

    export default {
        components: {
            InfoIcon, WarningIcon, ErrorIcon, 'confirmation-icon': CheckCircleIcon, 'change-icon': QuestionCircleIcon
        },
        props: {
            title: {
                type: String,
                default: undefined
            },
            appearance: {
                type: String,
                default: 'info',
                validator: value => ['info', 'warning', 'error', 'confirmation', 'change'].includes(value)
            }
        }
    };
</script>

<style scoped>
    .message {
        display: flex;
        background-color: var(--ds-background-information, #DEEBFF);
        border-radius: 3px;
        padding: 16px;
        color: var(--ds-text, #172B4D);
    }

    .message .icon {
        width: 40px;
        flex: 0 0 auto;
        color: var(--ds-icon-information, #0747A6);
    }

    .message[appearance=warning] {
        background-color: var(--ds-background-warning, #FFFAE6);
    }

    .message[appearance=warning] .icon {
        color: var(--ds-icon-warning, #FF8B00);
        fill: var(--ds-background-warning, #FFFAE6);
    }

    .message[appearance=error] {
        background-color: var(--ds-background-danger, #FFEBE6);
    }

    .message[appearance=error] .icon {
        color: var(--ds-icon-danger, #BF2600);
        fill: var(--ds-background-danger, #FFEBE6);
    }

    .message[appearance=confirmation] {
        background-color: var(--ds-background-success, #E3FCEF);
    }

    .message[appearance=confirmation] .icon {
        color: var(--ds-icon-success, #006644);
        fill: var(--ds-background-success, #E3FCEF);
    }

    .message[appearance=change] {
        background-color: var(--ds-background-discovery, #EAE6FF);
    }

    .message[appearance=change] .icon {
        color: var(--ds-icon-discovery, #403294);
        fill: var(--ds-background-discovery, #EAE6FF);
    }

    .message .content-wrapper {
        flex-grow: 1;
    }

    .message .title {
        font-size: 1.14286em;
        font-style: inherit;
        line-height: 1.25;
        color: var(--ds-text, #172B4D);
        font-weight: 600;
        letter-spacing: -0.006em;
        margin: 0;
    }

    .message .content:not(:first-child) {
        margin-top: 8px;
    }

    .message .actions {
        margin-top: 8px;
    }

    /*noinspection CssInvalidPseudoSelector*/
    ::v-slotted(.message .actions ul) {
        display: flex;
        padding-left: 0;
        list-style: none;
    }

    /*noinspection CssInvalidPseudoSelector*/
    ::v-slotted(.message .actions ul li){
        align-items: center;
        display: flex;
        margin: 0;
    }

    /*noinspection CssInvalidPseudoSelector*/
    ::v-slotted(.message .actions ul li + li::before) {
        color: rgb(66, 82, 110);
        content: "·";
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        width: 16px;
    }

</style>
