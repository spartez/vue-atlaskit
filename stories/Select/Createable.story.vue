<template>
    <div class="wrapper">
        <div>
            <Select v-model="value"
                    :normalizer="normalizer"
                    createable
                    multi
                    placeholder="Type something and press enter..."/>
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
                value: [city],
                cities
            };
        },
        methods: {
            normalizer(v) {
                return ({ id: v, label: v, value: v });
            }
        }
    };
</script>
<style scoped>
  .wrapper {
      padding: 20px;
  }
</style>
