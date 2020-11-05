<template>
    <div class="container">
        <Flag class="flag" :title="title" :description="description"
              :actions="actions"/>
        <Flag class="flag" :title="title" :description="description"
              type="info"
              :actions="actions"/>
        <Flag v-if="show" class="flag" :title="title"
              :description="description" type="info"
              :actions="actions" @close="show = false">
            <div class="content">
                <FieldGroup label="Give us your best email address">
                    <Input v-model="value"/>
                </FieldGroup>
                <div class="buttons">
                    <Button>Skip</Button>
                    <Button appearance="primary">
                        Send
                    </Button>
                </div>
            </div>
        </Flag>
        <Flag v-for="appearance in appearances" :key="appearance" class="flag"
              :appearance="appearance" :title="title"
              :description="description" :actions="actions"/>
    </div>
</template>

<script>
    import Flag from '@/components/Flag/Flag';
    import Input from '@/components/Form/Input';
    import Button from '@/components/Button/Button';
    import FieldGroup from '@/components/Form/FieldGroup';

    export default {
        name: 'NotificationStory',
        components: {
            Flag, Input, FieldGroup, Button
        },
        data() {
            return {
                title: 'Welcome to the jungle',
                description: 'We got fun and games. We got everything you want honey, we know the names.',
                actions: ['Show me', 'No thanks'],
                appearances: ['error', 'info', 'success', 'warning'],
                value: '',
                show: true
            };
        }
    };
</script>

<style scoped>
.flag {
    margin-bottom: 10px;
}

.container {
    position: fixed;
    right: 10px;
    top: 10px;
    z-index: 999;
}

.content {
    padding: 0px 24px 0px 40px;

}

.buttons {
    display: flex;
    margin-top: 20px;
    justify-content: flex-end;
}
</style>
