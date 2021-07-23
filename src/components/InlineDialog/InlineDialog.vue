<template>
    <div ref="dialog-container" class="dialog-container">
        <slot name="trigger"
              :is-open="open"
              :toggle="onTriggerClick"/>
        <Popup ref="dialog" :is-open="open" :offset="offset"
               :target-element="$refs['dialog-container']"
               :boundaries-element="boundariesElement"
               :placement="placement"
               :position-fixed="positionFixed">
            <div ref="dialog-content" class="dialog-content">
                <slot/>
            </div>
        </Popup>
    </div>
</template>

<script>
    import Popup from '../common/Popup';

    export default {
        components: {
            Popup
        },
        props: {
            boundariesElement: {
                type: [String, HTMLElement, Function],
                default: 'viewport'
            },
            placement: {
                type: String,
                default: 'right-top'
            },
            offset: {
                type: String,
                default: '8,8'
            },
            closeOnOutsideClick: {
                type: Boolean,
                default: true
            },
            closeOnEsc: {
                type: Boolean,
                default: true
            },
            positionFixed: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                open: false
            };
        },
        watch: {
            open(value) {
                if (value) {
                    document.addEventListener('click', this.onOutsideClick);
                    document.addEventListener('keydown', this.onKeyDown);
                    this.$emit('open');
                } else {
                    document.removeEventListener('click', this.onOutsideClick);
                    document.removeEventListener('keydown', this.onKeyDown);
                    this.$emit('close');
                }
            }
        },
        beforeDestroy() {
            document.removeEventListener('click', this.onOutsideClick);
        },
        methods: {
            onTriggerClick() {
                this.open = !this.open;
            },
            onOutsideClick(event) {
                if (this.$refs['dialog-container'].contains(event.target)) return;
                if (this.closeOnOutsideClick) {
                    this.open = false;
                }
            },
            onKeyDown(event) {
                if (event.keyCode === 27 && this.closeOnEsc) {
                    this.open = false;
                }
            }
        }
    };
</script>

<style scoped>
    .dialog-container {
        display: inline-block;
    }

    .dialog-content {
        max-width: 300px;
        max-height: 400px;
        overflow: auto;
    }
</style>
