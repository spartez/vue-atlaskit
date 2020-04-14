<template>
    <div>
        <h1>Multiple selection with checkboxes</h1>
        <Tree v-model="selected" :multi="true" :nodes="nodes"/>
        <div style="padding: 20px;">
            {{ selected }}
        </div>
    </div>
</template>

<script>
    import Tree from '@/components/Tree/Tree';

    export default {
        name: 'TreeCheckboxStory',
        components: { Tree },
        data() {
            return {
                selected: [],
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

</style>
