<template>
  <li>
    <span contenteditable="false">
      <input
        v-model="done"
        type="checkbox"
      >
    </span>
    <span
      ref="content"
      :contenteditable="view.editable.toString()"
      class="todo-content"
    />
  </li>
</template>

<script>
    export default {
        name: 'TaskItem',
        props: ['node', 'view'],
        data() {
            return {
                done: this.node.attrs.state === 'DONE'
            };
        }
    };
</script>
