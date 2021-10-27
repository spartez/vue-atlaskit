<template>
    <div>
        <h3>Simple dropdown</h3>
        <p>
            <Dropdown data-cy="simple-dropdown" label="Drop down menu">
                <DropdownItem data-cy="simple-dropdown-item">
                    First item
                </DropdownItem>
                <DropdownItem>Second item</DropdownItem>
                <DropdownItem>Lorem ipsum dolor sit amet consectetur adipisicing elit</DropdownItem>
            </Dropdown>
        </p>
        <h3>Dropdown with links</h3>
        <p>
            <Dropdown label="Drop down menu" min-width="200px">
                <DropdownItem href="https://www.spartez.com" target="_blank">
                    Spartez
                </DropdownItem>
                <DropdownItem href="https://www.google.com" target="_blank">
                    Google
                </DropdownItem>
                <DropdownItem href="https://www.atlassian.com" target="_blank">
                    Atlassian
                </DropdownItem>
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
        <h3>Dropdown with checkboxes (selected: {{ selected }})</h3>
        <p>
            <Dropdown label="With checkboxes" :close-on-click="false">
                <DropdownCheckboxItem v-model="selected" value="first">
                    First item
                </DropdownCheckboxItem>
                <DropdownCheckboxItem v-model="selected" value="second">
                    Second item
                </DropdownCheckboxItem>
                <DropdownCheckboxItem v-model="selected" value="third">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                </DropdownCheckboxItem>
            </Dropdown>
        </p>
        <h3>Mixed (value: {{ mixedValue }})</h3>
        <p>
            <Dropdown label="Mixed values" :close-on-click="false">
                <DropdownGroup label="Europe">
                    <DropdownItem>Poland</DropdownItem>
                    <DropdownItem>Germany</DropdownItem>
                    <DropdownItem>France</DropdownItem>
                    <DropdownItem>United Kingdom</DropdownItem>
                    <DropdownItem>Spain</DropdownItem>
                </DropdownGroup>
                <DropdownGroup label="North America">
                    <DropdownCheckboxItem v-model="mixedValue">
                        Some checkbox
                    </DropdownCheckboxItem>
                    <DropdownItem>United States of America</DropdownItem>
                </DropdownGroup>
            </Dropdown>
        </p>
        <h3>Scrolled items</h3>
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
                selected: ['second'],
                mixedValue: false
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
