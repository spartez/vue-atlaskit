<template>
    <div>
        <CopyToClipboard text="text"/>
        <CopyToClipboard text="text" spacing="none" placement="right">
            <EditorLinkIcon/>
        </CopyToClipboard>
    </div>
</template>

<script>
    import CopyToClipboard from '../../src/components/CopyToClipboard/CopyToClipboard';
    import { EditorLinkIcon } from '../../src/components/Icon';

    export default {
        name: 'CopyToClipboardStory',
        components: { CopyToClipboard, EditorLinkIcon }
    };
</script>
