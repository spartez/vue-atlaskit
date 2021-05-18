<template>
    <div>
        <h3>Only last + Copy</h3>
        <Breadcrumbs :wrap="false" :copy="true" :items="items"/>
        <h3>Custom</h3>
        <Breadcrumbs>
            <BreadcrumbItem text="Board">
                <BoardIcon slot="icon" size="xsmall"/>
            </BreadcrumbItem>
            <BreadcrumbItem text="Agile Poooooooooooker">
                <IssuesIcon slot="icon" size="xsmall"/>
            </BreadcrumbItem>
            <BreadcrumbItem class="last" text="Awesome Session Name">
                <Tooltip slot="icon" label="Private session">
                    <LockFilledIcon class="icon" size="small"/>
                </Tooltip>
                <Tooltip slot="link" label="Session" class="tooltip">
                    <a href="#" target="_top" class="link">Session Name loooooong</a>
                </Tooltip>
            </BreadcrumbItem>
        </Breadcrumbs>
    </div>
</template>

<script>
    import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
    import BreadcrumbItem from '@/components/Breadcrumbs/BreadcrumbItem';
    import Tooltip from '@/components/Tooltip/Tooltip';
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
