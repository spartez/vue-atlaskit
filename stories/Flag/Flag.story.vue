<template>
    <div>
        <div class="without-group">
            <Flag class="flag" :title="title" :description="description"
                  :actions="actions"/>
        </div>
        <div class="with-group">
            <Flag v-for="appearance in appearances" :key="appearance" class="flag"
                  :appearance="appearance" :title="title"
                  :description="description" :actions="actions"/>
        </div>
    </div>
</template>

<script>
    import Flag from '@/components/Flag/Flag';

    export default {
        name: 'NotificationStory',
        components: { Flag },
        data() {
            return {
                title: 'Welcome to the jungle',
                description: 'We got fun and games. We got everything you want honey, we know the names.',
                actions: ['Show me', 'No thanks'],
                appearances: ['error', 'info', 'success', 'warning']
            };
        }
    };
</script>

<style scoped>
.flag {
    margin-bottom: 10px;
}
</style>
