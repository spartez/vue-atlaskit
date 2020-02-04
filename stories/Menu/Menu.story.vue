<template>
    <div>
        <h3>Simple menu</h3>
        <div class="wrapper">
            <Menu>
                <MenuSection>
                    <MenuItem>First item</MenuItem>
                    <MenuItem>Second item</MenuItem>
                    <MenuItem>Lorem ipsum dolor sit amet consectetur adipisicing elit</MenuItem>
                </MenuSection>
            </Menu>
        </div>
        <h3>Menu sections with labels</h3>
        <div class="wrapper">
            <Menu>
                <MenuSection label="North America">
                    <MenuItem>Canada</MenuItem>
                    <MenuItem>United States of America</MenuItem>
                </MenuSection>
                <MenuSection label="Asia">
                    <MenuItem>China</MenuItem>
                    <MenuItem>Japan</MenuItem>
                    <MenuItem>India</MenuItem>
                </MenuSection>
            </Menu>
        </div>
        <h3>Items with icons</h3>
        <div class="wrapper">
            <Menu>
                <MenuSection>
                    <MenuItem>First item</MenuItem>
                    <MenuItem>Second item</MenuItem>
                    <MenuItem active>
                        Active item
                    </MenuItem>
                    <MenuItem>
                        <EditorAddIcon slot="icon-before"/>
                        Add item
                    </MenuItem>
                    <MenuItem>Second item</MenuItem>
                </MenuSection>
            </Menu>
        </div>
    </div>
</template>

<script>
    import Menu from '@/components/Menu/Menu';
    import MenuItem from '@/components/Menu/MenuItem';
    import MenuSection from '@/components/Menu/MenuSection';
    import EditorAddIcon from '@/components/Icon/EditorAddIcon';

    export default {
        name: 'MenuStory',
        components: {
            Menu, MenuItem, MenuSection, EditorAddIcon
        }
    };
</script>

<style scoped>
    .wrapper {
        background: #F4F5F7;
        width: 300px;
    }
</style>
