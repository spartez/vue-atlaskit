<template>
  <section
    class="message"
    :appearance="appearance"
  >
    <div class="icon">
      <component :is="`${appearance}-icon`"/>
    </div>
    <span>{{ node.textContent }}</span>
  </section>
</template>

<script>
    import InfoIcon from '../../../Icon/InfoIcon';
    import WarningIcon from '../../../Icon/WarningIcon';
    import ErrorIcon from '../../../Icon/ErrorIcon';
    import EditorHintIcon from '../../../Icon/EditorHintIcon';
    import EditorNoteIcon from '../../../Icon/EditorNoteIcon';
    import CheckCircleIcon from '../../../Icon/CheckCircleIcon';
    import QuestionCircleIcon from '../../../Icon/QuestionCircleIcon';

    export default {
        name: 'Panel',
        components: {
            InfoIcon,
            WarningIcon,
            ErrorIcon,
            TipIcon: EditorHintIcon,
            NoteIcon: EditorNoteIcon,
            SuccessIcon: CheckCircleIcon,
            QuestionCircleIcon
        },
        props: ['node', 'updateAttrs', 'view'],
        computed: {
            appearance() {
                return this.node && this.node.attrs.panelType;
            }
        }
    };
</script>

<style scoped>
    .message {
        display: flex;
        background-color: rgb(222, 235, 255);
        border-radius: 3px;
        padding: 16px;
        align-items: center;
    }

    .message .icon {
        width: 40px;
        flex: 0 0 auto;
        display: inline-flex;
        color: rgb(7, 71, 166);
    }

    .message[appearance=warning] {
        background-color: rgb(255, 250, 230);
    }

    .message[appearance=warning] .icon {
        color: rgb(255, 139, 0);
        fill: rgb(255, 250, 230);
    }

    .message[appearance=error] {
        background-color: rgb(255, 235, 230);
    }

    .message[appearance=error] .icon {
        color: rgb(191, 38, 0);
        fill: rgb(255, 235, 230);
    }

    .message[appearance=success], .message[appearance=tip] {
        background-color: rgb(227, 252, 239);
    }

    .message[appearance=success] .icon, .message[appearance=tip] .icon {
        color: rgb(0, 102, 68);
        fill: rgb(227, 252, 239);
    }

    .message[appearance=note] {
        background-color: rgb(234, 230, 255);
    }

    .message[appearance=note] .icon {
        color: rgb(64, 50, 148);
        fill: rgb(234, 230, 255);
    }
</style>
