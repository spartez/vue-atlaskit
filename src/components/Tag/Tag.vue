<template>
  <div
    class="tag"
    :color="color"
  >
    <component
      :is="tag"
      class="text"
      :href="link"
    >
      {{ label }}
    </component>
  </div>
</template>

<script>
    export default {
        name: 'Tag',
        props: {
            label: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                default: ''
            },
            tag: {
                type: String,
                default: 'span'
            },
            link: {
                type: String,
                default: undefined
            }
        }
    };
</script>

<style scoped>
.tag {
    display: inline-flex;
    border-radius: 3px;
    height: 20px;
    margin: 4px;
}

.text {
    display: inline-block;
    outline: none;
    padding: 2px 0;
    line-height: 1;
    font-size: 14px;
    margin: 0 4px;
    max-width: 180px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

[color="standard"] {
    background-color: var(--ds-background-neutral, #F4F5F7);
    color: var(--ds-text, #253858);
}

[color="green"] {
    background-color: var(--ds-background-accent-green-subtle, #57D9A3);
    color: var(--ds-text, #253858);
}

[color="blue"] {
    background-color: var(--ds-background-accent-blue-subtle, #4C9AFF);
    color: var(--ds-text, #253858);
}

[color="red"] {
    background-color: var(--ds-background-accent-red-subtle, #FF8F73);
    color: var(--ds-text, #253858);
}

[color="purple"] {
    background-color: var(--ds-background-accent-purple-subtle, #998DD9);
    color: var(--ds-text, #253858);
}

[color="grey"] {
    background-color: var(--ds-background-accent-gray-subtle, #42526E);
    color: var(--ds-text-accent-gray-bolder, #FFFFFF);
}

[color="teal"] {
    background-color: var(--ds-background-accent-teal-subtle, #00C7E6);
    color: var(--ds-text, #253858);
}

[color="yellow"] {
    background-color: var(--ds-background-accent-yellow-subtle, #FFC400);
    color: var(--ds-text, #253858);
}

[color="green-light"] {
    background-color: var(--ds-background-accent-green-subtler, #79F2C0);
    color: var(--ds-text-accent-green, #006644);
}

[color="blue-light"] {
    background-color: var(--ds-background-accent-blue-subtler, #B3D4FF);
    color: var(--ds-text-accent-blue, #0747A6);
}

[color="red-light"] {
    background-color: var(--ds-background-accent-red-subtler, #FFBDAD);
    color: var(--ds-text-accent-red, #42526E);
}

[color="purple-light"] {
    background-color: var(--ds-background-accent-purple-subtler, #C0B6F2);
    color: var(--ds-text-accent-purple, #403294);
}

[color="grey-light"] {
    background-color: var(--ds-background-accent-gray-subtler, #EBECF0);
    color: var(--ds-text-accent-gray, #42526E);
}

[color="teal-light"] {
    background-color: var(--ds-background-accent-teal-subtler, #79E2F2);
    color: var(--ds-text-accent-teal, #42526E);
}

[color="yellow-light"] {
    background-color: var(--ds-background-accent-orange-subtler, #FFE380);
    color: var(--ds-text-accent-yellow, #42526E);
}
</style>
