<template>
    <UserEditableRendererEnriched :user="user" :avatar-only="avatarOnly" :editable="false"/>
</template>

<script>
    import UserEditableRendererEnriched from './UserEditableRendererEnriched';

    export default {
        name: 'UserRendererEnriched',
        components: {
            UserEditableRendererEnriched
        },
        props: {
            user: {
                type: Object,
                required: true
            },
            avatarOnly: {
                type: Boolean,
                default: false
            }
        }
    };
</script>
