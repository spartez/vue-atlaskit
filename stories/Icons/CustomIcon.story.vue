<template>
    <IconWrapper size="small">
        <Trash/>
    </IconWrapper>
</template>

<script>
    import IconWrapper from '@/components/Icon/IconWrapper';
    import Trash from '../assets/svgs/trash.svg';

    export default {
        name: 'CustomIconStory',
        components: { IconWrapper, Trash }
    };
</script>
