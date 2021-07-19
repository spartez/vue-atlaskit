<template>
    <div>
        <div class="buttons-group">
            <Button v-tooltip.top="{ label: `I'm at the top` }">
                Top
            </Button>
            <Button v-tooltip.right="{ label: `I'm at the right` }">
                Right
            </Button>
            <Button v-tooltip.bottom="{ label: `I'm at the bottom` }">
                Bottom
            </Button>
            <Button v-tooltip.left="{ label: `I'm at the left` }">
                Left
            </Button>
        </div>
        <div class="buttons-group">
            <Button v-tooltip.right="{ label: 'Bigger offset here', offset: '0,20' }">
                Custom offset
            </Button>
        </div>
        <div class="buttons-group">
            <Button v-tooltip.right="{ label: `Instant tooltip`, withDelay: false }">
                Without delay
            </Button>
        </div>
        <div class="buttons-group">
            <Button v-tooltip.top="{ label: currentTime }">
                Dynamic label
            </Button>
        </div>
        <div class="buttons-group">
            <Toggle v-model="enabled"/>
            <Button v-tooltip.top="{ label: `I'm enabled now!`, disabled: !enabled }">
                Disable using 'disabled' prop: disabled={{ !enabled }}
            </Button>
        </div>
        <div class="buttons-group">
            <Toggle v-model="withLabel"/>
            <Button v-tooltip.top="label">
                Disable using empty label: label="{{ label }}"
            </Button>
        </div>
    </div>
</template>

<script>
    import tooltip from '@/directives/tooltip';
    import Toggle from '@/components/Toggle/Toggle';
    import Button from '@/components/Button/Button';

    export default {
        name: 'TooltipStory',
        components: { Button, Toggle },
        directives: { tooltip },
        data() {
            return {
                currentTime: (new Date()).toUTCString(),
                interval: undefined,
                enabled: true,
                withLabel: true
            };
        },
        computed: {
            label() {
                return this.withLabel ? 'I\'m enabled now!' : undefined;
            }
        },
        mounted() {
            this.interval = setInterval(() => {
                this.currentTime = (new Date()).toUTCString();
            }, 1000);
        },
        beforeDestroy() {
            clearInterval(this.interval);
        }
    };
</script>

<style scoped>
.buttons-group {
    max-width: 800px;
    margin-top: 50px;
    display: flex;
    align-items: center;
}
</style>
