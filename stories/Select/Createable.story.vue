<template>
    <div class="wrapper">
        <FieldGroup class="createable" label="Createable">
            <Select v-model="value" data-cy="simple" createable
                    multi placeholder="Type something and press enter..."/>
        </FieldGroup>
        <FieldGroup class="createable" label="Limited number of tags">
            <Select v-model="value" data-cy="limited" :max="3"
                    createable multi placeholder="Maximum 3 elements.."/>
        </FieldGroup>
        <FieldGroup class="createable" label="Minimum number of elements, plus validation">
            <Select v-model="minmax" data-cy="validated" multi
                    createable :is-valid-option="validateTimer" :min="1"
                    :max="3"
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

    export default {
        components: {
            FieldGroup,
            Select
        },
        data() {
            return {
                value: [],
                minmax: ['10']
            };
        },
        methods: {
            validateTimer(value) {
                return /^\d+$/.test(value);
            }
        }
    };
</script>
<style scoped>
  .wrapper {
      padding: 20px;
  }

  .createable {
      max-width: 500px;
  }
</style>
