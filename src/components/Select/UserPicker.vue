<template>
    <Select :value="value"
            :options="users"
            :async="true"
            :is-fetching="isFetching"
            placeholder="Type to search..."
            :normalizer="normalizer"
            v-on="$listeners"
            @search-change="debouncedGetUsers">
        <div slot="option" slot-scope="{option}" class="label">
            <UserRenderer tag="span" :user="option"/>
        </div>
        <div slot="selected" slot-scope="{selected}" class="label">
            <UserRenderer tag="span" :user="selected"/>
        </div>
    </Select>
</template>

<script>
    import pDebounce from 'p-debounce';
    import Select from './Select';
    import UserRenderer from '../field-renderers/UserRenderer';

    export default {
        name: 'UserPicker',
        components: { UserRenderer, Select },
        props: {
            getUsers: {
                type: Function,
                required: true
            },
            value: {
                type: Object,
                default: undefined
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
            async onSearchChange(query) {
                if (!query) return;
                this.isFetching = true;
                const { data: users } = await this.getUsers(query);
                this.users = users;
                this.isFetching = false;
            },

            normalizer(user) {
                return {
                    id: user.key,
                    label: user.name,
                    value: user
                };
            }
        }
    };
</script>
