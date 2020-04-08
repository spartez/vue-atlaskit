<template>
    <div class="wrapper">
        <UserPicker v-model="value" :initial-options="[initialOptions]" :get-users="getUsers"/>
        <p>{{ value }}</p>
        <br>
        <UserPicker v-model="users" :multi="true" :get-users="getUsers"/>
        <p>{{ users }}</p>
    </div>
</template>

<script>
    import UserPicker from '@/components/Select/UserPicker';
    import { createPersonsList } from '../api-mocks/people';

    const list = createPersonsList({}, 2);
    const [initialOptions] = list;
    const getUsers = query => new Promise((resolve) => {
        setTimeout(() => {
            const results = list.filter(user => user.name
                .toLowerCase()
                .includes(query.toLowerCase().trim()));
            resolve({ data: results });
        }, 300);
    });

    export default {
        name: 'UserPickerStory',
        components: { UserPicker },
        data() {
            return {
                value: undefined,
                users: [],
                getUsers,
                initialOptions
            };
        }

    };
</script>

<style scoped>
  .wrapper {
      padding: 20px;
  }
</style>
