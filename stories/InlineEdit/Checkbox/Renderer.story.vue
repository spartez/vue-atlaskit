<template>
    <div>
        <h5>Checked</h5>
        <p>
            <CheckboxRenderer value="1"/>
        </p>
        <h5>Unchecked</h5>
        <p>
            <CheckboxRenderer value="0"/>
        </p>
    </div>
</template>

<script>
    import CheckboxRenderer from '@/components/field-renderers/CheckboxRenderer';

    export default {
        components: { CheckboxRenderer }
    };
</script>
