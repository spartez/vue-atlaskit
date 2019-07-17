<template>
    <div class="wrapper">
        <div>
            <Select v-model="value"
                    :multi="true"
                    :options="options"
                    placeholder="select item"/>
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
    import Select from '@/components/Select/Select';
    import faker from 'faker';
    import { many } from '../api-mocks/helpers';

    const cities = many(faker.address.city)({}, 10);
    const [city] = cities;

    export default {
        components: {
            Select
        },
        data() {
            return {
                options: cities,
                value: [city],
                isLoading: false
            };
        }
    };
</script>
<style scoped>
  .wrapper {
      padding: 20px;
  }
</style>
