<template>
    <div>
        <Button ref="button" @click="onClick">
            Click me!
        </Button>
        <CustomHint v-if="show" title="Lorem ipsum dolor" :target-element="$refs.button.$el"
                    @close="onClose">
            <div class="hint">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta metus nec quam molestie aliquet. Etiam viverra eu felis nec porttitor. Integer et rhoncus orci.Maecenas euismod arcu vel risus cursus interdum. Mauris sapien lorem, varius a massa in, ultrices tincidunt mi.</span>
            </div>
        </CustomHint>
    </div>
</template>

<script>
    import Button from '@/components/Button/Button';
    import CustomHint from '@/components/Spotlight/CustomHint';

    export default {
        name: 'HintStory',
        components: { Button, CustomHint },
        data() {
            return {
                show: false
            };
        },
        beforeDestroy() {
            this.show = false;
        },
        methods: {
            onClick() {
                this.show = true;
            },
            onClose() {
                this.show = false;
            }
        }
    };
</script>

<style scoped>
.hint * {
    color: white;
}
</style>
