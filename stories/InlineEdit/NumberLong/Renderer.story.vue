<template>
    <div>
        <h5>Full width</h5>
        <p>
            <NumberLongRenderer :value="value"/>
        </p>
        <h5>Limited width</h5>
        <p class="limited-width">
            <NumberLongRenderer :value="value"/>
        </p>
    </div>
</template>

<script>
    import NumberLongRenderer from '@/components/field-renderers/NumberLongRenderer';
    import faker from 'faker';

    export default {
        components: { NumberLongRenderer },
        data() {
            faker.seed(1);
            return {
                value: `${faker.random.number()}${faker.random.number()}${faker.random.number()}${faker.random.number()}`
            };
        }
    };
</script>

<style scoped>
    .limited-width {
        width: 100px;
    }
</style>
