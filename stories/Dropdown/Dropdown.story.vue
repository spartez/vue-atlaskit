<template>
    <div>
        <h3>Simple dropdown</h3>
        <p>
            <Dropdown label="Drop down menu">
                <DropdownItem>First item</DropdownItem>
                <DropdownItem>Second item</DropdownItem>
                <DropdownItem>Lorem ipsum dolor sit amet consectetur adipisicing elit</DropdownItem>
            </Dropdown>
        </p>
        <h3>Grouped items</h3>
        <p>
            <Dropdown label="Drop down menu">
                <DropdownGroup label="Europe">
                    <DropdownItem>Poland</DropdownItem>
                    <DropdownItem>Germany</DropdownItem>
                    <DropdownItem>France</DropdownItem>
                    <DropdownItem>United Kingdom</DropdownItem>
                    <DropdownItem>Spain</DropdownItem>
                </DropdownGroup>
                <DropdownGroup label="North America">
                    <DropdownItem>Canada</DropdownItem>
                    <DropdownItem>United States of America</DropdownItem>
                </DropdownGroup>
                <DropdownGroup label="Asia">
                    <DropdownItem>China</DropdownItem>
                    <DropdownItem>Japan</DropdownItem>
                    <DropdownItem>India</DropdownItem>
                </DropdownGroup>
            </Dropdown>
        </p>
        <h3>Custom trigger</h3>
        <p>
            <Dropdown label="Drop down menu">
                <div slot="trigger" slot-scope="{ toggle, isOpen }" class="custom-trigger">
                    <span v-if="isOpen" @click="toggle">💥</span>
                    <span v-else @click="toggle">🎁</span>
                </div>
                <DropdownItem>First item</DropdownItem>
                <DropdownItem>Second item</DropdownItem>
                <DropdownItem>Lorem ipsum dolor sit amet consectetur adipisicing elit</DropdownItem>
            </Dropdown>
        </p>
        <h3>Dropdown with checkboxes ({{ valueA }}, {{ valueB }}, {{ valueC }})</h3>
        <p>
            <Dropdown label="With checkboxes" :close-on-click="false">
                <DropdownCheckboxItem v-model="valueA">
                    First item
                </DropdownCheckboxItem>
                <DropdownCheckboxItem v-model="valueB">
                    Second item
                </DropdownCheckboxItem>
                <DropdownCheckboxItem v-model="valueC">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                </DropdownCheckboxItem>
            </Dropdown>
        </p>
    </div>
</template>

<script>
    import Dropdown from '@/components/Dropdown/Dropdown';
    import DropdownItem from '@/components/Dropdown/DropdownItem';
    import DropdownGroup from '@/components/Dropdown/DropdownGroup';
    import DropdownCheckboxItem from '@/components/Dropdown/DropdownCheckboxItem';

    export default {
        name: 'DropdownStory',
        components: {
            Dropdown, DropdownItem, DropdownGroup, DropdownCheckboxItem
        },
        data() {
            return {
                valueA: false,
                valueB: true,
                valueC: false
            };
        }
    };
</script>

<style scoped>
    .custom-trigger {
        font-size: 20px;
        cursor: pointer;
    }
</style>
