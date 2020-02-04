<template>
    <div>
        <Spinner size="icon"/>
        <Spinner size="small"/>
        <Spinner size="medium"/>
        <Spinner size="large"/>
    </div>
</template>

<script>
    import Spinner from '@/components/Spinner/Spinner';

    export default {
        name: 'SpinnerStory',
        components: { Spinner }
    };
</script>
