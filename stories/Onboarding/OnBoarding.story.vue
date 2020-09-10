<template>
    <div>
        <SpotlightContext>
            <App/>
        </SpotlightContext>
    </div>
</template>

<script>
    import App from './App';
    import SpotlightContext from '@/components/Spotlight/SpotlightContext';


    export default {
        name: 'OnBoardingStory',
        components: { App, SpotlightContext }
    };
</script>
