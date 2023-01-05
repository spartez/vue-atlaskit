<template>
  <ul>
    <li
      v-for="issue in issues"
      :key="issue.id"
    >
      <IssueRenderer
        :issue="issue"
        :base-url="baseUrl"
        :appearance="appearance"
      />
    </li>
  </ul>
</template>

<script>
    import IssueRenderer from './IssueRenderer';

    export default {
        name: 'LinkedIssuesList',
        components: { IssueRenderer },
        props: {
            issues: {
                type: Array,
                default: () => []
            },
            baseUrl: {
                type: String,
                default: ''
            },
            appearance: {
                type: String,
                default: 'normal',
                validator: value => ['normal', 'compact', 'micro'].includes(value)
            }
        }
    };
</script>

<style scoped>
ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
}
</style>
