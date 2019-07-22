<template>
    <InlineEdit v-if="editable && !avatarOnly"
                :value="user"
                class="user-inline-edit"
                @save-requested="onSaveRequested">
        <Select slot="editor" slot-scope="props"
                :value="props.value"
                :options="users"
                :async="true"
                placeholder="Type to search..."
                :normalizer="normalizer"
                :is-invalid="props.isInvalid"
                :is-focused="props.isFocused"
                :is-loading="props.isLoading"
                :is-fetching="isFetching"
                @search-change="debouncedGetUsers"
                @input="props.input"
                @blur="props.blur"
                @confirm="props.confirm"
                @focus="props.focus"
                @cancel="props.cancel">
            <div slot="option" slot-scope="{option}" class="label">
                <UserRenderer tag="span" :user="option" :avatar-only="avatarOnly"/>
            </div>
            <div slot="selected" slot-scope="{selected}" class="label">
                <UserRenderer tag="span" :user="selected" :avatar-only="avatarOnly"/>
            </div>
        </Select>
        <slot>
            <UserRenderer :user="user" :avatar-only="avatarOnly" @click.native.stop/>
        </slot>
    </InlineEdit>
    <UserRenderer v-else :user="user" :avatar-only="avatarOnly"/>
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
            avatarOnly: {
                type: Boolean,
                default: false
            },
            loadOptions: {
                type: Function,
                required: true
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
                this.users = users;
                this.isFetching = false;
            },

            onSaveRequested(user, callback) {
                const key = user ? user.key : '';
                this.$emit('save-requested', key, callback);
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

<style scoped>
    .user-inline-edit {
        line-height: 24px;
    }
</style>
