<template>
  <div>
    <template v-if="isLoading">
      <ContentLoader
        v-for="row in rows"
        :key="row"
        v-bind="$attrs"
        :view-box="viewBox"
        :preserve-aspect-ratio="preserveAspectRatio"
        :width="width"
        :height="height"
      >
        <rect
          x="30"
          y="13"
          rx="3"
          ry="3"
          width="23"
          height="12"
        />
        <rect
          x="70"
          y="13"
          rx="3"
          ry="3"
          width="78"
          height="12"
        />
        <rect
          x="210"
          y="13"
          rx="3"
          ry="3"
          :width="117 * random()"
          height="12"
        />
        <rect
          x="360"
          y="13"
          rx="3"
          ry="3"
          width="83"
          height="12"
        />
        <rect
          x="480"
          y="13"
          rx="3"
          ry="3"
          :width="250 * random()"
          height="12"
        />
        <rect
          x="750"
          y="13"
          rx="3"
          ry="3"
          :width="500 * random()"
          height="12"
        />
        <rect
          x="0"
          y="39"
          rx="3"
          ry="3"
          width="1260"
          height="0.5"
        />
      </ContentLoader>
    </template>
    <slot v-else/>
  </div>
</template>

<script>
    import ContentLoader from './ContentLoader';

    const random = () => Math.random() * (1 - 0.7) + 0.7;
    export default {
        name: 'TableLoader',
        components: { ContentLoader },
        props: {
            rows: {
                type: Number,
                default: 10
            },
            isLoading: {
                type: Boolean,
                default: false
            },
            viewBox: {
                type: String,
                default: '0 0 1260 40'
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '40px'
            },
            preserveAspectRatio: {
                type: String,
                default: 'none'
            }
        },
        data() {
            return { random };
        }
    };
</script>
