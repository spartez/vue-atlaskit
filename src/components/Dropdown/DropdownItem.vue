<template>
    <div class="dropdown-item" v-on="$attrs" @click="$emit('select',value)">
        <span class="dropdown-item-label">
            <slot/>
        </span>
    </div>
</template>
<script>
    export default {
        props: {
            value: {
                type: [Object, String, Number, Boolean]
            }
        }
    };
</script>
<style scoped>
    .dropdown-item {
        align-items: center;
        box-sizing: border-box;
        cursor: pointer;
        background-color: rgb(255, 255, 255);
        color: rgb(23, 43, 77);
        text-decoration: none;
        padding: 8px 12px 7px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 40px;
        display: flex;
    }

    .dropdown-item-label {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .dropdown-item:hover {
        background-color: rgb(244, 245, 247);
        color: rgb(23, 43, 77);
        fill: rgb(244, 245, 247);
        text-decoration: none;
    }
</style>
