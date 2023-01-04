<template>
  <Select
    :value="value"
    :options="users"
    :async="true"
    :multi="multi"
    :is-focused="isFocused"
    :is-fetching="isFetching"
    :placeholder="placeholder"
    :normalizer="normalizer"
    v-on="$listeners"
    @open="loadInitialOptions"
    @search-change="debouncedGetUsers"
  >
    <div
      slot="option"
      slot-scope="{option}"
      class="label"
    >
      <UserRenderer
        tag="span"
        :user="option"
      />
    </div>
    <div
      slot="selected"
      slot-scope="{selected}"
      class="label"
    >
      <UserRenderer
        tag="span"
        :user="selected"
      />
    </div>
    <div
      slot="tag"
      slot-scope="{tag}"
      class="user-tag"
    >
      <UserRenderer
        appearance="micro"
        tag="span"
        :user="tag.value"
      />
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
                type: [Object, Array],
                default: undefined
            },
            multi: {
                type: Boolean,
                default: false
            },
            isFocused: {
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
            }
        }
    };
</script>
<style scoped>
    .user-tag {
        padding: 2px 4px 2px 4px;
    }
</style>
