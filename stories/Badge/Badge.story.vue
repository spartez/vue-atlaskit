<template>
    <div>
        <div v-for="appearance in appearances" :key="appearance">
            {{ appearance }}
            <Badge value="22" :appearance="appearance"/>
        </div>
        <div>
            <span>with icon before</span>
            <Badge value="22" appearance="default">
                <CheckIcon slot="icon-before" size="xsmall"/>
            </Badge>
        </div>
        <div>
            <span>with icon after</span>
            <Badge value="22" appearance="default">
                <EditFilledIcon slot="icon-after" size="xxsmall"/>
            </Badge>
        </div>
        <div>
            <span>with icon after and long text</span>
            <Badge value="1w 1d 1m" appearance="default" max-width="40px">
                <EditFilledIcon slot="icon-after" size="xxsmall"/>
            </Badge>
        </div>
    </div>
</template>

<script>
    import Badge from '@/components/Badge/Badge';
    import { CheckIcon, EditFilledIcon } from '@/components/Icon';

    export default {
        name: 'BadgeStory',
        components: { Badge, CheckIcon, EditFilledIcon },
        data() {
            return {
                appearances: ['added', 'default', 'important', 'primary', 'removed']
            };
        }
    };
</script>
