<template>
    <div>
        <h3>Simple</h3>
        <Breadcrumbs :items="items"/>
        <h3>Custom</h3>
        <Breadcrumbs>
            <BreadcrumbItem text="Board">
                <BoardIcon slot="icon" size="xsmall"/>
            </BreadcrumbItem>
            <BreadcrumbItem text="Agile Poker">
                <IssuesIcon slot="icon" size="xsmall"/>
            </BreadcrumbItem>
            <BreadcrumbItem text="Awesome Session Name">
                <LockFilledIcon slot="icon" size="xsmall"/>
            </BreadcrumbItem>
        </Breadcrumbs>
    </div>
</template>

<script>
    import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
    import BreadcrumbItem from '@/components/Breadcrumbs/BreadcrumbItem';
    import { BoardIcon, IssuesIcon, LockFilledIcon } from '@/components/Icon';

    export default {
        name: 'BreadcrumbsStory',
        components: {
            Breadcrumbs, BoardIcon, BreadcrumbItem, IssuesIcon, LockFilledIcon
        },
        data() {
            return {
                items: [{
                    text: 'first'
                }, {
                    text: 'veeeeeeery long breadcrumb'
                }, {
                    text: 'long breadcrumb'
                }, {
                    text: 'never ellipsis'
                }]
            };
        }
    };
</script>

<style scoped>

</style>
