<template>
    <div class="wrapper">
        <FieldGroup data-cy="field-group" label="Custom Select">
            <Select v-model="value" data-cy="input-component"
                    placeholder="Quick add..."
                    :select="false"
                    class="select-ww"
                    :options="options">
                <SearchIcon slot="icon" size="small"/>
                <Button slot="custom-action" appearance="subtle" class="create">
                    <AddIcon slot="icon-before" size="xsmall"/>
                    Create Issue
                </Button>
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
    import Select from '@/components/Select/Select.vue';
    import Button from '@/components/Button/Button.vue';
    import SearchIcon from '@/components/Icon/SearchIcon';
    import AddIcon from '@/components/Icon/AddIcon';
    import FieldGroup from '../../src/components/Form/FieldGroup.vue';
    import { cities } from '../api-mocks/fake-data';

    export default {
        components: {
            FieldGroup,
            Select,
            SearchIcon,
            Button,
            AddIcon
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

  .create {
      width: 100%;
      border-top: 1px solid #F6F9FC;
  }

  .create >>> span {
      justify-content: flex-start;
  }
</style>
