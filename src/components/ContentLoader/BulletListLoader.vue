<template>
  <div>
    <ContentLoader
      v-for="item in items"
      :key="item"
      view-box="0 0 300 24"
      height="24px"
      width="300px"
    >
      <rect
        x="0"
        y="4"
        :rx="3"
        :ry="3"
        :width="16"
        :height="16"
      />
      <rect
        x="24"
        y="4"
        :rx="3"
        :ry="3"
        :width="40"
        :height="16"
      />
      <rect
        x="72"
        y="4"
        :rx="3"
        :ry="3"
        :width="160"
        :height="16"
      />
    </ContentLoader>
  </div>
</template>

<script>
    import ContentLoader from './ContentLoader';

    export default {
        name: 'BulletListLoader',
        components: { ContentLoader },
        props: {
            items: {
                type: Number,
                default: 3
            }
        }
    };
</script>

<style scoped>

</style>
