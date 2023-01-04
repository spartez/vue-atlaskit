<template>
  <Tooltip
    :label="tooltip"
    :placement="placement"
    :spacing="spacing"
  >
    <div
      class="content"
      @click="onClick"
    >
      <slot>
        <Button :appearance="appearance">
          <CopyIcon/>
        </Button>
      </slot>
    </div>
  </Tooltip>
</template>

<script>
    import Button from '../Button/Button';
    import { CopyIcon } from '../Icon';
    import Tooltip from '../Tooltip/Tooltip';

    export default {
        name: 'CopyToClipboard',
        components: { Tooltip, Button, CopyIcon },
        props: {
            appearance: {
                type: String,
                default: 'subtle'
            },
            spacing: {
                type: String,
                default: 'subtle'
            },
            text: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: 'Copy to clipboard'
            },
            placement: {
                type: String,
                default: 'bottom'
            }
        },
        data() {
            return {
                copied: false,
                timeout: undefined
            };
        },
        computed: {
            tooltip() {
                return this.copied ? 'Copied' : this.label;
            }
        },
        beforeDestroy() {
            clearTimeout(this.timeout);
        },
        methods: {
            onClick() {
                const input = document.createElement('input');
                input.setAttribute('readonly', '');
                input.value = this.text;
                input.style.cssText = 'position:fixed;pointer-events:none;z-index:-9999;opacity:0;';
                document.body.appendChild(input);
                input.select();
                try {
                    document.execCommand('copy');
                } catch (err) {
                    console.warn(err);
                }
                document.body.removeChild(input);
                this.copied = true;
                this.timeout = setTimeout(() => {
                    this.copied = false;
                }, 2000);
            }
        }
    };
</script>

<style scoped>
.content {
    display: flex;
}
</style>
