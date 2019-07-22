<template>
    <div>
        <p>
            <HyperlinkRenderer :link="link"/>
        </p>
    </div>
</template>

<script>
    import HyperlinkRenderer from '@/components/field-renderers/HyperlinkRenderer';
    import faker from 'faker';

    export default {
        components: { HyperlinkRenderer },
        data() {
            faker.seed(1);
            return {
                link: 'https://www.spartez.com'
            };
        }
    };
</script>
