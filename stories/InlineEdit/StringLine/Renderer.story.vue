<template>
    <div>
        <h5>Full width</h5>
        <p>
            <StringLineRenderer :value="value"/>
        </p>
        <h5>100px width</h5>
        <p class="limited-width">
            <StringLineRenderer :value="value"/>
        </p>
    </div>
</template>

<script>
    import StringLineRenderer from '@/components/field-renderers/StringLineRenderer';
    import faker from 'faker';

    export default {
        components: { StringLineRenderer },
        data() {
            faker.seed(1);
            return {
                value: faker.lorem.sentence()
            };
        }
    };
</script>

<style scoped>
    .limited-width {
        width: 100px;
    }
</style>
