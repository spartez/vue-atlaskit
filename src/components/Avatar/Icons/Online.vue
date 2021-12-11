<template>
    <PresenceWrapper>
        <svg height="100%" version="1.1" viewBox="0 0 8 8"
             width="100%" xmlns="http://www.w3.org/2000/svg"><circle fill="rgb(54, 179, 126)" cx="4" cy="4"
                                                                     r="4"/></svg>
    </PresenceWrapper>
</template>

<script>
    import PresenceWrapper from './PresenceWrapper.vue';

    export default {
        name: 'Online',
        components: { PresenceWrapper }
    };
</script>
