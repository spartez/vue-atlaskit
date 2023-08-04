<template>
    <div>
        <h3>Only last + Copy</h3>
        <Breadcrumbs :wrap="false" :copy="true" :items="items" />
        <h3>Custom</h3>
        <Breadcrumbs>
            <BreadcrumbItem text="Board">
                <template #icon>
                    <BoardIcon size="xsmall" />
                </template>
            </BreadcrumbItem>
            <BreadcrumbItem text="Agile Poooooooooooker">
                <template #icon>
                    <IssuesIcon size="xsmall" />
                </template>
            </BreadcrumbItem>
            <BreadcrumbItem class="last">
                <template #icon>
                    <Tooltip label="Private session">
                        <LockFilledIcon class="icon" size="small" />
                    </Tooltip>
                </template>
                <template #link>
                    <Tooltip label="Session" class="tooltip">
                        <a href="#" target="_top" class="link">Session Name loooooong</a>
                    </Tooltip>
                </template>
            </BreadcrumbItem>
        </Breadcrumbs>
    </div>
</template>

<script>
    import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue';
    import BreadcrumbItem from '@/components/Breadcrumbs/BreadcrumbItem.vue';
    import Tooltip from '@/components/Tooltip/Tooltip.vue';
    import { BoardIcon, IssuesIcon, LockFilledIcon } from '@/components/Icon';

    export default {
        name: 'BreadcrumbsStory',
        components: {
            Breadcrumbs, BoardIcon, BreadcrumbItem, IssuesIcon, LockFilledIcon, Tooltip
        },
        data() {
            return {
                items: [{
                    text: 'first'
                }, {
                    text: 'veeeeeeery loooooong breadcrumb'
                }, {
                    text: 'long breadcrumb'
                }, {
                    link: '#/last-item',
                    text: 'never ellipsis'
                }]
            };
        }
    };
</script>
<style scoped>
.icon {
    display: flex;
}
</style>
