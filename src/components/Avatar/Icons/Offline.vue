<template>
    <PresenceWrapper>
        <svg height="100%" version="1.1" viewBox="0 0 8 8"
             width="100%" xmlns="http://www.w3.org/2000/svg"><path fill="rgb(107, 119, 140)" d="M4,8 C6.209139,8 8,6.209139 8,4 C8,1.790861 6.209139,0 4,0 C1.790861,0 0,1.790861 0,4 C0,6.209139 1.790861,8 4,8 Z M4,6 C5.1045695,6 6,5.1045695 6,4 C6,2.8954305 5.1045695,2 4,2 C2.8954305,2 2,2.8954305 2,4 C2,5.1045695 2.8954305,6 4,6 Z"/><path fill="var(--ds-surface-overlay, var(--ds-surface, #FFFFFF))" d="M4,6 C5.1045695,6 6,5.1045695 6,4 C6,2.8954305 5.1045695,2 4,2 C2.8954305,2 2,2.8954305 2,4 C2,5.1045695 2.8954305,6 4,6 Z"/></svg>
    </PresenceWrapper>
</template>

<script>
    import PresenceWrapper from './PresenceWrapper';

    export default {
        name: 'Offline',
        components: { PresenceWrapper }
    };
</script>
