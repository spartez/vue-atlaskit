<template>
  <div>
    <h3>Normal</h3>
    <p
      v-for="appearance in appearances"
      :key="appearance"
    >
      <Lozenge :appearance="appearance">
        {{ appearance }}
      </Lozenge>
    </p>
    <h3>Bold</h3>
    <p
      v-for="appearance in appearances"
      :key="`bold-${appearance}`"
    >
      <Lozenge
        :appearance="appearance"
        :is-bold="true"
      >
        {{ appearance }}
      </Lozenge>
    </p>
    <h3>Long text</h3>
    <p>
      <Lozenge>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Lozenge>
    </p>
  </div>
</template>

<script>
    import Lozenge from '@/components/Lozenge/Lozenge';

    export default {
        name: 'Lozenges',
        components: { Lozenge },
        data() {
            return {
                appearances: [
                    'default',
                    'success',
                    'removed',
                    'inprogress',
                    'new',
                    'moved'
                ]
            };
        }
    };
</script>
