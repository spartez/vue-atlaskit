<template>
    <div>
        <Button @click="toggle">
            Toggle
        </Button>
        <TransitionExpand>
            <div v-if="expanded">
                Magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor
                sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet.
            </div>
        </TransitionExpand>
    </div>
</template>

<script>
    import TransitionExpand from '@/components/common/TransitionExpand';
    import Button from '@/components/Button/Button';

    export default {
        name: 'TransitionExpandStory',
        components: { TransitionExpand, Button },
        data() {
            return {
                expanded: false
            };
        },
        methods: {
            toggle() {
                this.expanded = !this.expanded;
            }
        }
    };
</script>

<style scoped>

</style>
