<template>
    <div>
        <h5>Full width</h5>
        <p>
            <NumberFloatRenderer :value="value"/>
        </p>
        <h5>Limited width</h5>
        <p class="limited-width">
            <NumberFloatRenderer :value="value"/>
        </p>
    </div>
</template>

<script>
    import NumberFloatRenderer from '@/components/field-renderers/NumberFloatRenderer';

    export default {
        components: { NumberFloatRenderer },
        data() {
            return {
                value: (Math.random() * 1000).toString()
            };
        }
    };
</script>

<style scoped>
    .limited-width {
        width: 100px;
    }
</style>
