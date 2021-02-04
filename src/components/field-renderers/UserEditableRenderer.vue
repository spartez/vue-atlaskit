<template>
    <InlineEdit v-if="editable && !avatarOnly"
                :value="user"
                class="user-inline-edit"
                :confirm="confirm"
                :placement="placement"
                @save-requested="onSaveRequested">
        <Select slot="editor" slot-scope="props"
                :value="props.value"
                :options="users"
                :open-on-focus="true"
                :is-clearable="clearable"
                :async="true"
                placeholder="Type to search..."
                :normalizer="normalizer"
                :is-invalid="props.isInvalid"
                :is-focused="props.isFocused"
                :is-loading="props.isLoading"
                :is-fetching="isFetching"
                :confirm="confirm"
                @open="loadInitialOptions"
                @search-change="debouncedGetUsers"
                @input="props.input"
                @blur="props.blur"
                @confirm="props.confirm"
                @focus="props.focus"
                @cancel="props.cancel">
            <div slot="option" slot-scope="{option}" class="label">
                <UserRenderer :tag="tag" :user="option" :avatar-only="avatarOnly"/>
            </div>
            <div slot="selected" slot-scope="{selected}" class="label">
                <UserRenderer :tag="tag" :user="selected" :avatar-only="avatarOnly"/>
            </div>
        </Select>
        <slot>
            <UserRenderer :tag="tag" :user="user" :avatar-only="avatarOnly"/>
        </slot>
    </InlineEdit>
    <UserRenderer v-else :tag="tag" :user="user"
                  :avatar-only="avatarOnly"/>
</template>

<script>
    import pDebounce from 'p-debounce';
    import Select from '../Select/Select';
    import UserRenderer from './UserRenderer';
    import InlineEdit from '../Form/InlineEdit';


    export default {
        name: 'UserEditableRenderer',
        components: { UserRenderer, InlineEdit, Select },
        props: {
            user: {
                type: Object,
                default: undefined
            },
            editable: {
                type: Boolean,
                default: true
            },
            placement: {
                type: String,
                default: 'right'
            },
            avatarOnly: {
                type: Boolean,
                default: false
            },
            loadOptions: {
                type: Function,
                required: true
            },
            tag: {
                type: String,
                default: 'span'
            },
            mapper: {
                type: Function,
                default: list => list
            },
            initialOptions: {
                type: Array,
                default: () => []
            },
            clearable: {
                type: Boolean,
                default: true
            },
            confirm: {
                type: Boolean,
                default: true
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
                this.isFetching = true;
                const { data: users } = await this.loadOptions(query);
                this.users = this.mapper(users);
                this.isFetching = false;
            },

            onSaveRequested(user, callback) {
                this.$emit('save-requested', user, callback);
            },

            normalizer(user) {
                return {
                    id: user && user.key,
                    label: user && user.name,
                    value: user
                };
            },

            loadInitialOptions() {
                this.users = this.initialOptions;
            }
        }
    };
</script>

<style scoped>
    .user-inline-edit {
        line-height: 24px;
    }
</style>
