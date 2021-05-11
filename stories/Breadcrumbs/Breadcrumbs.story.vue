<template>
    <div>
        <h3>Between</h3>
        <Breadcrumbs :items="items"/>
        <h3>Only last</h3>
        <Breadcrumbs :wrap="false" :items="items"/>
        <h3>Custom</h3>
        <Breadcrumbs>
            <BreadcrumbItem text="Board">
                <BoardIcon slot="icon" size="xsmall"/>
            </BreadcrumbItem>
            <BreadcrumbItem text="Agile Poker">
                <IssuesIcon slot="icon" size="xsmall"/>
            </BreadcrumbItem>
            <Tooltip class="tooltip" label="Additional info">
                <BreadcrumbItem text="Awesome Session Name">
                    <LockFilledIcon slot="icon" size="xsmall"/>
                </BreadcrumbItem>
            </Tooltip>
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
                    text: 'never ellipsis'
                }]
            };
        }
    };
</script>
