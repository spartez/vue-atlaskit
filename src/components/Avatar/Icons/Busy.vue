<template>
    <PresenceWrapper>
        <svg height="100%" version="1.1" viewBox="0 0 8 8"
             width="100%" xmlns="http://www.w3.org/2000/svg">
            <circle fill="rgb(255, 86, 48)" cx="4" cy="4"
                    r="4"/>
            <!--eslint-disable-next-line max-len-->
            <path fill="var(--ds-surface-overlay, var(--ds-surface, #FFFFFF))" d="M3.3,1.9l2.8,2.8c0.2,0.2,0.2,0.5,0,0.7L5.4,6.1c-0.2,0.2-0.5,0.2-0.7,0L1.9,3.3c-0.2-0.2-0.2-0.5,0-0.7l0.7-0.7C2.8,1.7,3.1,1.7,3.3,1.9z"/>
        </svg>
    </PresenceWrapper>
</template>

<script>
    import PresenceWrapper from './PresenceWrapper';

    export default {
        name: 'Busy',
        components: { PresenceWrapper }
    };
</script>
