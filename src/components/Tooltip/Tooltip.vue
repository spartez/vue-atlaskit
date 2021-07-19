<template>
    <div class="tooltip">
        <div ref="target" class="target" @mouseenter="onMouseEnter"
             @mouseleave="onMouseLeave">
            <slot/>
        </div>
        <TooltipContent v-if="show" ref="popper"
                        :target-element="$refs.target"
                        :boundaries-element="boundariesElement"
                        :placement="placement" :offset="offset" :label="label"/>
    </div>
</template>

<script>
    import TooltipContent from './TooltipContent.vue';

    export default {
        name: 'Tooltip',
        components: { TooltipContent },
        props: {
            label: {
                type: String,
                required: true
            },
            placement: {
                type: String,
                default: 'bottom'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            offset: {
                type: String,
                default: '0,5'
            },
            appendToBody: {
                type: Boolean,
                default: false
            },
            boundariesElement: {
                type: String,
                default: 'viewport'
            }
        },
        data() {
            return {
                show: false
            };
        },
        methods: {
            onMouseEnter() {
                if (this.disabled) {
                    return;
                }
                this.show = true;
                if (this.appendToBody) {
                    this.$nextTick(() => {
                        this.append();
                    });
                }
            },
            onMouseLeave() {
                if (this.appendToBody) {
                    if (this.$refs.popper) {
                        document.body.removeChild(this.$refs.popper.$el);
                    }
                }
                this.show = false;
            },
            append() {
                document.body.appendChild(this.$refs.popper.$el);
            }
        }
    };
</script>

<style scoped>
.tooltip {
    display: inline-block;
    min-width: 20px;
}
</style>
