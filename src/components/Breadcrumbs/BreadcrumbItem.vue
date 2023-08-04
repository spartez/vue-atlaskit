<template>
  <div
    class="breadcrumb"
    :with-icon="$slots.icon"
  >
    <span class="item">
      <slot name="icon"/>
      <slot name="link">
        <a
          :href="link"
          :target="target"
        >{{ text }}</a>
      </slot>
    </span>
  </div>
</template>

<script>
    export default {
        name: 'BreadcrumbItem',
        props: {
            link: {
                type: String,
                default: '#'
            },
            text: {
                type: String,
                default: ''
            },
            target: {
                type: String,
                default: '_self'
            }
        }
    };
</script>

<style scoped>
.breadcrumb {
    min-width: 45px;
    display: flex;
    align-items: center;
    flex-shrink: 10;
    transition: all ease-out .3s;
}

.breadcrumb[with-icon] {
    min-width: 60px;
}

.breadcrumb:first-of-type {
    flex: 0 1 auto;
}

.item {
    display: flex;
    min-width: 0;
    align-items: center;
}

.item >>> a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--ds-text-subtle, #6B778C);
    margin-left: 0px;
    display: block;
}

[with-icon] >>> a {
    margin-left: 5px;
}

.breadcrumb:after {
    display: inline-block;
    content: '/';
    color: var(--ds-text-subtle, #6B778C);
    text-align: center;
    margin: 0px 6px;
    width: 8px;
}

.breadcrumb:last-of-type:after {
    content: none;
}

.breadcrumb:last-child {
    flex: 0 1 auto;
}

.breadcrumb:hover {
    flex: 1 0 auto;
    opacity: 1;
    transition: all ease-out .3s;
}
</style>
