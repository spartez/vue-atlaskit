<template>
    <div>
        <div v-for="appearance in appearances" :key="appearance">
            {{ appearance }}
            <Badge value="22" :appearance="appearance"/>
        </div>
    </div>
</template>

<script>
    import Badge from '@/components/Badge/Badge';

    export default {
        name: 'BadgeStory',
        components: { Badge },
        data() {
            return {
                appearances: ['added', 'default', 'important', 'primary', 'removed']
            };
        }
    };
</script>
