<template>
    <div class="tags">
        <Tag v-for="color in colors" :key="color" :label="color"
             :color="color"/>
        <Tag color="standard" label="link" link="#"
             tag="a"/>
    </div>
</template>

<script>
    import Tag from '@/components/Tag/Tag';

    export default {
        name: 'TagStory',
        components: {
            Tag
        },
        data() {
            return {
                colors: ['standard',
                         'green',
                         'blue',
                         'red',
                         'purple',
                         'grey',
                         'teal',
                         'yellow',
                         'green-light',
                         'blue-light',
                         'red-light',
                         'purple-light',
                         'grey-light',
                         'teal-light',
                         'yellow-light']
            };
        }
    };
</script>

<style scoped>

</style>
