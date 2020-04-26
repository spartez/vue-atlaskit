<template>
    <div>
        <FieldGroup class="search" label="Search">
            <Input v-model="search"/>
        </FieldGroup>
        <Tree v-model="selected" :search="search" :nodes="nodes"/>
        <div style="padding: 20px;">
            {{ selected }}
        </div>
    </div>
</template>

<script>
    import Tree from '@/components/Tree/Tree';
    import Input from '@/components/Form/Input';
    import FieldGroup from '../../src/components/Form/FieldGroup';

    export default {
        name: 'TreeStory',
        components: { FieldGroup, Tree, Input },
        data() {
            return {
                selected: undefined,
                value: undefined,
                search: '',
                nodes: [
                    { id: '1', label: 'Keyboards' },
                    { id: '2', label: 'Displays' },
                    {
                        id: '3',
                        label: 'Computers',
                        children: [
                            {
                                id: '4',
                                label: 'Laptops',
                                children: [{ id: '5', label: 'Macbook' }, { id: '6', label: 'Dell' }]
                            },
                            { id: '7', label: 'Notebooks' },
                            {
                                id: '8',
                                label: 'PC',
                                children:
                                    [
                                        { id: '9', label: 'Windows XP' },
                                        { id: '10', label: 'Windows 10' },
                                        { id: '11', label: 'Linux' }]
                            }
                        ]
                    }
                ]
            };
        }
    };
</script>

<style scoped>
.search {
    max-width: 250px;
}
</style>
