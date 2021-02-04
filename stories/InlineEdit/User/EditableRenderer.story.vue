<template>
    <div>
        <h5>Editable:</h5>
        <p>
            <UserEditableRenderer :user="user" :load-options="loadOptions"
                                  @save-requested="onSave"/>
        </p>
        <h5>Confirm false:</h5>
        <p>
            <UserEditableRenderer :user="user" :load-options="loadOptions" :confirm="false"
                                  @save-requested="onSave"/>
        </p>
        <h5>Editable - callback with error:</h5>
        <p>
            <UserEditableRenderer :user="user" :load-options="loadOptions"
                                  @save-requested="onSaveError"/>
        </p>
        <h5>Non-editable:</h5>
        <p>
            <UserEditableRenderer :user="user" :load-options="loadOptions"
                                  :editable="false"/>
        </p>
        <h5>Avatar only:</h5>
        <p>
            <UserEditableRenderer :user="user" :avatar-only="true"/>
        </p>
    </div>
</template>

<script>
    import pDebounce from 'p-debounce';
    import UserEditableRenderer from '@/components/field-renderers/UserEditableRenderer';
    import { createPersonsList } from '../../api-mocks/people';


    const list = createPersonsList({}, 50);
    const getUsers = query => new Promise((resolve) => {
        setTimeout(() => {
            const results = {
                data: list.filter(user => user.name
                    .toLowerCase()
                    .includes(query.toLowerCase().trim()))
            };
            resolve(results);
        }, 1000);
    });
    const debouncedUsers = pDebounce(getUsers, 100);

    export default {
        components: { UserEditableRenderer },
        data() {
            return {
                user: undefined,
                baseUrl: '',
                loadOptions: query => debouncedUsers(query)
            };
        },
        methods: {
            onSave(value, callback) {
                if (value) {
                    this.user = value;
                } else {
                    this.user = undefined;
                }
                callback();
            },

            onSaveError(value, callback) {
                setTimeout(() => callback(new Error('Something went wrong')), 100);
            }
        }
    };
</script>
