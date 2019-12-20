<template>
    <div class="wrapper">
        <UserPicker v-model="value" :get-users="getUsers"/>
    </div>
</template>

<script>
    import UserPicker from '@/components/Select/UserPicker';
    import { createPersonsList } from '../api-mocks/people';

    const list = createPersonsList({}, 50);
    const getUsers = query => new Promise((resolve) => {
        setTimeout(() => {
            const results = list.filter(user => user.name
                .toLowerCase()
                .includes(query.toLowerCase().trim()));
            resolve({ data: results });
        }, 1000);
    });

    export default {
        name: 'UserPickerStory',
        components: { UserPicker },
        data() {
            return {
                value: undefined,
                getUsers
            };
        }

    };
</script>

<style scoped>
  .wrapper {
      padding: 20px;
  }
</style>
