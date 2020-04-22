<template>
    <div>
        <h1>Tree Select</h1>
        <TreeSelect v-model="value" :options="nodes" placeholder="Select item">
            <template v-slot:selected="{selected,ancestors}">
                <span>{{ buildPath(selected,ancestors) }}</span>
            </template>
        </TreeSelect>
        <div style="padding: 20px;">
            {{ value }}
        </div>
    </div>
</template>

<script>
    import TreeSelect from '@/components/Select/TreeSelect/TreeSelect';

    export default {
        name: 'TreeStory',
        components: { TreeSelect },
        data() {
            return {
                value: undefined,
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
        },
        methods: {
            buildPath(selected, ancestors) {
                if (!selected.label) return '';
                if (!ancestors.length) {
                    return selected.label;
                }
                return `${ancestors.map(n => n.label).join('/')}/${selected.label}`;
            }
        }
    };
</script>
