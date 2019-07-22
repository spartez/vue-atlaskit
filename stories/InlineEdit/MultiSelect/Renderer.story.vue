<template>
    <div>
        <h5>Full width</h5>
        <p>
            <MultiSelectRenderer :selected-values="selectedValues"/>
        </p>
        <h5>Empty</h5>
        <p>
            <MultiSelectRenderer :selected-values="[]"/>
        </p>
        <h5>400px width</h5>
        <p class="limited-width">
            <MultiSelectRenderer :selected-values="selectedValues"/>
        </p>
        <h5>400px width, long labels</h5>
        <p class="limited-width">
            <MultiSelectRenderer :selected-values="selectedValuesLong"/>
        </p>
    </div>
</template>

<script>
    import MultiSelectRenderer from '@/components/field-renderers/MultiSelectRenderer';
    import faker from 'faker';

    export default {
        components: { MultiSelectRenderer },
        data() {
            faker.seed(1);
            return {
                selectedValues: Array.from({ length: 10 }, () => faker.lorem.word()),
                selectedValuesLong: Array.from({ length: 10 }, () => faker.lorem.sentence())
            };
        }
    };
</script>

<style scoped>
    .limited-width {
        width: 400px;
    }
</style>
