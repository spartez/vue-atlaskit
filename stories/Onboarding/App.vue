<template>
    <div class="wrapper">
        <div class="start">
            <Button @click="onClick">
                Start Onboarding
            </Button>
        </div>
        <Spotlight :step="1" placement="top-end" offset="-50%,-50%">
            <div slot="message">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
        </Spotlight>
        <FieldGroup label="Title" required>
            <Spotlight :step="2">
                <Input v-model="title" auto-focus/>
                <div slot="message">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </Spotlight>
        </FieldGroup>
        <FieldGroup label="Folder" required>
            <Spotlight :step="3">
                <Input v-model="folder"/>
                <div slot="message">
                    Curabitur efficitur lorem a velit iaculis vehicula.
                </div>
            </Spotlight>
        </FieldGroup>
        <FieldGroup label="Type" required>
            <Spotlight :step="4">
                <Select v-model="type" :options="options" :selected="selected"/>
                <div slot="message">
                    Curabitur fermentum quam turpis, eget condimentum quam consequat ac.
                </div>
            </Spotlight>
        </FieldGroup>
        <SpotlightOverlay/>
    </div>
</template>

<script>
    import SpotlightOverlay from '@/components/Spotlight/SpotlightOverlay';
    import Spotlight from '@/components/Spotlight/Spotlight';
    import Button from '@/components/Button/Button';
    import FieldGroup from '@/components/Form/FieldGroup';
    import Input from '@/components/Form/Input';
    import Select from '@/components/Select/Select';

    export default {
        name: 'App',
        components: {
            Spotlight, SpotlightOverlay, Button, FieldGroup, Input, Select
        },
        inject: {
            $spotlight: {
                from: '$spotlight',
                default: undefined
            }
        },
        data() {
            return {
                title: '',
                folder: '',
                selected: undefined,
                type: undefined,
                options: ['foo', 'bar', 'baz']
            };
        },
        methods: {
            onClick() {
                this.$spotlight.showSpotlight(1);
            }
        }
    };
</script>

<style scoped>
.wrapper {
    max-width: 50%;
}
</style>
