<template>
    <div class="wrapper">
        <FieldGroup class="multiselect" label="Custom Tags">
            <Select v-model="value"
                    :multi="true"
                    :options="options"
                    placeholder="select item">
                <template slot="tag" slot-scope="{tag}">
                    <span class="custom-tag">🌈 {{ tag.value }}</span>
                </template>
            </Select>
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

    const cities = many(faker.address.city)({}, 10);
    const [city] = cities;

    export default {
        components: {
            FieldGroup,
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

  .multiselect {
      max-width: 500px;
  }

  .custom-tag {
      color: magenta;
      font-size: 85%;
      font-weight: bold;
      text-transform: uppercase;
      padding: 2px;
  }
</style>
