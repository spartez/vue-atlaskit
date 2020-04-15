<template>
    <div class="wrapper">
        <div class="row">
            <h3>Basic</h3>
            <Select v-model="basic"
                    multi
                    :min="3"
                    :options="options"
                    placeholder="select item"/>
        </div>
        <div>
            <h3>Min & Max Selected Options - Createable</h3>
            <Select v-model="minmax"
                    multi
                    createable
                    :is-valid-option="validateTimer"
                    :min="1"
                    :max="3"
                    placeholder="select item"/>
        </div>
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
                basic: [],
                minmax: ['Initial option'],
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

  .row {
      margin-bottom: 100px;
  }
</style>
