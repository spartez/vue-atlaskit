<template>
    <div class="wrapper">
        <div>
            <Select v-model="value"
                    :options="options"
                    :is-fetching="isFetching"
                    :normalizer="normalizer"
                    :async="true"
                    placeholder="Type to search..."
                    @search-change="onGetSuggestions">
                <div slot="option" slot-scope="{option}" class="label">
                    <img height="24" :src="option.avatar" alt="">
                    <span>{{ option.name }}</span>
                </div>
                <div slot="selected" slot-scope="{selected}" class="label">
                    <img class="avatar" height="24" :src="selected.avatar"
                         alt="">
                    <span>{{ selected.name }}</span>
                </div>
            </Select>
        </div>
        <table>
            <thead>
                <tr>
                    <th>value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import pDebounce from 'p-debounce';
    import Select from '@/components/Select/Select';
    import { createPersonsList } from '../api-mocks/people';

    const list = createPersonsList({}, 50);
    const getUsers = query => new Promise((resolve) => {
        setTimeout(() => {
            const results = list.filter(user => user.name
                .toLowerCase()
                .includes(query.toLowerCase().trim()));
            resolve(results);
        }, 1000);
    });
    const debouncedUsers = pDebounce(getUsers, 100);

    export default {
        components: {
            Select
        },
        data() {
            return {
                options: [],
                value: undefined,
                isFetching: false
            };
        },
        methods: {
            normalizer(value) {
                return ({
                    id: value.key,
                    label: value.name,
                    value
                });
            },
            async onGetSuggestions(query) {
                this.isFetching = true;
                const results = await debouncedUsers(query);
                this.isFetching = false;
                this.options = results;
            }
        }
    };
</script>
<style scoped>
  .wrapper {
      padding: 20px;
  }

  .label {
      display: flex;
      align-items: center;
  }

  .avatar {
      border-radius: 50%;
      margin-right: 5px;
  }
</style>
