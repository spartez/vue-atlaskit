<template>
    <div>
        <FieldGroup>
            <Button @click="toggle">
                Toggle
            </Button>
        </FieldGroup>
        <FieldGroup>
            <Checkbox v-model="enterTransition"/> Enter transition
            <Checkbox v-model="leaveTransition"/> Leave transition
        </FieldGroup>
        <TransitionExpand :enter-transition="enterTransition" :leave-transition="leaveTransition">
            <div v-if="expanded" class="content">
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
    import Checkbox from '@/components/Checkbox/Checkbox';
    import FieldGroup from '@/components/Form/FieldGroup';

    export default {
        name: 'TransitionExpandStory',
        components: {
            TransitionExpand, Checkbox, Button, FieldGroup
        },
        data() {
            return {
                expanded: false,
                enterTransition: true,
                leaveTransition: true
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
    .content {
        /* padding: 20px; */
        background: lightblue;
        overflow: hidden;
    }
</style>
