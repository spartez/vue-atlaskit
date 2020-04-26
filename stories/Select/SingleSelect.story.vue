<template>
    <div class="wrapper">
        <FieldGroup label="Single Select">
            <Select v-model="value"
                    append-to-body
                    :options="options"
                    placeholder="select item"/>
        </FieldGroup>
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
    import FieldGroup from '../../src/components/Form/FieldGroup';

    const cities = many(faker.address.city)({}, 20);

    export default {
        components: {
            FieldGroup,
            Select
        },
        data() {
            return {
                options: cities,
                value: undefined,
                isLoading: false
            };
        }
    };
</script>
<style scoped>
  .wrapper {
      padding: 20px;
      width: 245px;
      overflow: hidden;
  }
</style>
