<template>
    <span>
        <span class="lozenge" :appearance="appearance" :bold="isBold">
            <slot/>
        </span>
    </span>
</template>

<script>
    export default {
        props: {
            appearance: {
                type: String,
                validator: value => [
                    'default',
                    'success',
                    'removed',
                    'inprogress',
                    'new',
                    'moved'
                ].includes(value),
                default: 'default'
            },
            isBold: {
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style scoped>
    .lozenge {
        background-color: rgb(223, 225, 230);
        box-sizing: border-box;
        color: rgb(66, 82, 110);
        display: inline;
        font-size: 11px;
        font-weight: 700;
        line-height: 1;
        text-transform: uppercase;
        vertical-align: baseline;
        border-radius: 3px;
        padding: 1px 4px 2px;
        overflow: hidden;
        max-width: 200px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .lozenge[appearance="success"] {
        background-color: rgb(227, 252, 239);
        color: rgb(0, 102, 68);
    }

    .lozenge[appearance="removed"] {
        background-color: rgb(255, 235, 230);
        color: rgb(191, 38, 0);
    }

    .lozenge[appearance="inprogress"] {
        background-color: rgb(222, 235, 255);
        color: rgb(7, 71, 166);
    }

    .lozenge[appearance="new"] {
        background-color: rgb(234, 230, 255);
        color: rgb(64, 50, 148);
    }

    .lozenge[appearance="moved"] {
        background-color: rgb(255, 240, 179);
        color: rgb(23, 43, 77);
    }

    .lozenge[bold] {
        background-color: rgb(66, 82, 110);
        color: rgb(255, 255, 255);
    }

    .lozenge[bold][appearance="success"] {
        background-color: rgb(0, 135, 90);
    }

    .lozenge[bold][appearance="removed"] {
        background-color: rgb(222, 53, 11);
    }

    .lozenge[bold][appearance="inprogress"] {
        background-color: rgb(0, 82, 204);
    }

    .lozenge[bold][appearance="new"] {
        background-color: rgb(82, 67, 170);
    }

    .lozenge[bold][appearance="moved"] {
        background-color: rgb(255, 139, 0);
        color: rgb(23, 43, 77);
    }
</style>
