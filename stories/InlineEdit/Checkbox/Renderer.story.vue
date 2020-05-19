<template>
    <div>
        <h5>Checked</h5>
        <p>
            <CheckboxRenderer :value="true"/>
        </p>
        <h5>Unchecked</h5>
        <p>
            <CheckboxRenderer :value="false"/>
        </p>
    </div>
</template>

<script>
    import CheckboxRenderer from '@/components/field-renderers/CheckboxRenderer';

    export default {
        components: { CheckboxRenderer }
    };
</script>
