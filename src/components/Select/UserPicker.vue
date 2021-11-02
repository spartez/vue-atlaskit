<template>
    <Select :model-value="modelValue"
            :options="users"
            :async="true"
            :multi="multi"
            :is-fetching="isFetching"
            :placeholder="placeholder"
            :normalizer="normalizer"
            v-on="$attrs"
            @update:value="onInput"
            @open="loadInitialOptions"
            @search-change="debouncedGetUsers">
        <template v-slot:option="{option}">
            <div class="label">
                <UserRenderer tag="span" :user="option"/>
            </div>
        </template>
        <template v-slot:selected="{selected}">
            <div class="label">
                <UserRenderer tag="span" :user="selected"/>
            </div>
        </template>
        <template v-slot:tag="{tag}">
            <div class="user-tag">
                <UserRenderer appearance="micro" tag="span" :user="tag.value"/>
            </div>
        </template>
    </Select>
</template>

<script>
    import pDebounce from 'p-debounce';
    import Select from './Select.vue';
    import UserRenderer from '../field-renderers/UserRenderer.vue';

    export default {
        name: 'UserPicker',
        components: { UserRenderer, Select },
        props: {
            getUsers: {
                type: Function,
                required: true
            },
            modelValue: {
                type: [Object, Array],
                default: undefined
            },
            multi: {
                type: Boolean,
                default: false
            },
            mapper: {
                type: Function,
                default: list => list
            },
            placeholder: {
                type: String,
                default: 'Type to search...'
            },
            searchPromptText: {
                type: String,
                default: 'Type to search...'
            },
            initialOptions: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                users: [],
                isFetching: false,
                debouncedGetUsers: undefined
            };
        },
        created() {
            this.debouncedGetUsers = pDebounce(this.onSearchChange, 200);
        },
        methods: {
            loadInitialOptions() {
                this.users = this.initialOptions;
            },

            async onSearchChange(query) {
                if (!query) return;
                this.isFetching = true;
                const { data: users } = await this.getUsers(query);
                this.users = this.mapper(users);
                this.isFetching = false;
            },

            normalizer(user) {
                return {
                    id: user.key,
                    label: user.name,
                    value: user,
                    disabled: user.disabled
                };
            },

            onInput(users) {
                this.$emit('update:modelValue', users);
            }
        }
    };
</script>
<style scoped>
    .user-tag {
        padding: 2px 4px 2px 4px;
    }
</style>
