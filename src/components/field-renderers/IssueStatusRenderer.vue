<template>
  <span
    class="status"
    :status-color="statusColor"
    :title="statusName"
  >
    <span class="content">{{ statusName }}</span>
  </span>
</template>

<script>
    export default {
        name: 'IssueStatusRenderer',
        props: {
            value: {
                type: Object,
                required: true
            }
        },
        computed: {
            statusName() {
                return this.value && this.value.name;
            },
            statusColor() {
                return this.value && this.value.statusCategory && this.value.statusCategory.colorName;
            }
        }
    };
</script>

<style scoped>
    .status {
        background-color: #dfe1e6;
        color: #42526e;
        box-sizing: border-box;
        display: inline-block;
        font-size: 11px;
        font-weight: 700;
        line-height: 1;
        max-width: 100%;
        text-transform: uppercase;
        vertical-align: baseline;
        border-radius: 3px;
        padding: 2px 0px 3px;
        cursor: default;
    }

    .status[status-color="medium-gray"] {
        background-color: #dfe1e6;
        color: #42526e;
    }

    .status[status-color="green"] {
        background-color: #e3fcef;
        color: #064;
    }

    .status[status-color="yellow"] {
        background-color: #fff0b3;
        color: #172b4d;
    }

    .status[status-color="warm-red"] {
        background-color: #ffebe6;
        color: #bf2600;
    }

    .status[status-color="blue-gray"] {
        background-color: #deebff;
        color: #0747a6;
    }

    .content {
        display: inline-block;
        vertical-align: top;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
        max-width: 200px;
        width: 100%;
        overflow: hidden;
        padding: 0px 4px;
    }
</style>
