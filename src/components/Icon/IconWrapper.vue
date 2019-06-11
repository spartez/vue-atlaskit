<script>
    export default {
        name: 'IconWrapper',
        props: {
            size: {
                type: String,
                default: 'medium'
            },
            primaryColor: {
                type: String,
                default: 'currentcolor'
            },
            secondaryColor: {
                type: String,
                default: '#fff'
            }
        },
        render(h) {
            return h(
                'span',
                {
                    style: { color: this.primaryColor, fill: this.secondaryColor },
                    attrs: { size: this.size },
                    on: { ...this.$listeners }
                }, [this.$slots.default]
            );
        }
    };
</script>

<style scoped>
    span {
        height: 24px;
        width: 24px;
        color: currentcolor;
        display: inline-block;
        fill: rgb(255, 255, 255);
        flex-shrink: 0;
        line-height: 1;
    }

    span > svg {
        height: 24px;
        width: 24px;
        max-height: 100%;
        max-width: 100%;
        pointer-events: none;
        vertical-align: bottom;
        overflow: hidden;
    }

    span[size="xsmall"],
    span[size="xsmall"] > svg {
        width: 16px;
        height: 16px;
    }

    span[size="small"],
    span[size="small"] > svg {
        width: 20px;
        height: 20px;
    }

    span[size="large"],
    span[size="large"] > svg {
        width: 32px;
        height: 32px;
    }

    span[size="xlarge"],
    span[size="xlarge"] > svg {
        width: 48px;
        height: 48px;
    }
</style>
