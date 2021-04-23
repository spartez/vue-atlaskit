<template>
    <div class="wrapper">
        <FieldGroup class="picker single" label="Single User">
            <UserPicker v-model="value" data-cy="single" :initial-options="[initialOptions]"
                        :get-users="getUsers"/>
        </FieldGroup>
        <p>{{ value }}</p>
        <FieldGroup class="picker multi" label="Many Users">
            <UserPicker v-model="users" :multi="true" :get-users="getUsers"/>
        </FieldGroup>
        <p>{{ users }}</p>
    </div>
</template>

<script>
    import UserPicker from '@/components/Select/UserPicker';
    import { createPersonsList } from '../api-mocks/people';
    import FieldGroup from '../../src/components/Form/FieldGroup';

    const list = createPersonsList({}, 50);
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
        components: { FieldGroup, UserPicker },
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

  .picker.single {
      max-width: 250px;
  }

  .picker.multi {
      max-width: 550px;
  }
</style>
