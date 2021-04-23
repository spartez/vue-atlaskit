<template>
    <div class="wrapper">
        <FieldGroup data-cy="field-group" label="Single Select">
            <Select v-model="value" data-cy="input-component"
                    append-to-body
                    :options="options"
                    placeholder="Select city..."/>
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
    import FieldGroup from '../../src/components/Form/FieldGroup';
    import { cities } from '../api-mocks/fake-data';

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
