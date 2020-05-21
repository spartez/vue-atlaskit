<template>
    <div class="wrapper">
        <FieldGroup class="multiselect" label="MultiSelect">
            <Select v-model="basic"
                    multi
                    :options="options"
                    placeholder="select item"
                    data-cy="multiselect-simple"/>
        </FieldGroup>
        <FieldGroup class="mutliselect" label="MinMax options set, only numbers">
            <Select v-model="minmax"
                    multi
                    createable
                    :is-valid-option="validateTimer"
                    :min="1"
                    :max="3"
                    placeholder="select item"/>
        </FieldGroup>
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
                basic: [],
                minmax: ['10'],
                isLoading: false
            };
        },
        methods: {
            normalizer(value) {
                const disabled = value === city;
                return ({
                    id: value, label: value, value, disabled
                });
            },
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

  .multiselect {
      max-width: 500px;
  }
</style>
