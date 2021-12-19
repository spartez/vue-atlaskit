<template>
    <PresenceWrapper>
        <svg height="100%" version="1.1" viewBox="0 0 8 8"
             width="100%" xmlns="http://www.w3.org/2000/svg"><circle fill="#00875A" cx="4" cy="4"
                                                                     r="4"/><path
                                                                         fill="#FFFFFF"
                                                                         d="M2.47140452,3.52859548 C2.21105499,3.26824595 1.78894501,3.26824595 1.52859548,3.52859548 C1.26824595,3.78894501 1.26824595,4.21105499 1.52859548,4.47140452 L2.86192881,5.80473785 C3.12227834,6.06508738 3.54438833,6.06508738 3.80473785,5.80473785 L6.47140452,3.13807119 C6.73175405,2.87772166 6.73175405,2.45561167 6.47140452,2.19526215 C6.21105499,1.93491262 5.78894501,1.93491262 5.52859548,2.19526215 L3.33333333,4.39052429 L2.47140452,3.52859548 Z"/></svg>
    </PresenceWrapper>
</template>

<script>
    import PresenceWrapper from './PresenceWrapper';

    export default {
        name: 'Approved',
        components: { PresenceWrapper }
    };
</script>

<style scoped>

</style>
