<template>
    <div>
        <CopyToClipboard text="text"/>
        <CopyToClipboard text="text" spacing="none" placement="right">
            <Button appearance="subtle">
                <EditorLinkIcon/>
            </Button>
        </CopyToClipboard>
        <CopyToClipboard text="text" placement="right">
            Copy
        </CopyToClipboard>
    </div>
</template>

<script>
    import Button from '../../src/components/Button/Button';
    import CopyToClipboard from '../../src/components/CopyToClipboard/CopyToClipboard';
    import { EditorLinkIcon } from '../../src/components/Icon';

    export default {
        name: 'CopyToClipboardStory',
        components: { Button, CopyToClipboard, EditorLinkIcon }
    };
</script>
