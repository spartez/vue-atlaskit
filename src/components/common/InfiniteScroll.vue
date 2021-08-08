<template>
    <component :is="tag" ref="infinite-scroll-loader" class="infinite-scroll-loader">
        <Spinner size="small"/>
    </component>
</template>

<script>
    import Spinner from '../Spinner/Spinner';

    export default {
        name: 'InfiniteScroll',
        components: { Spinner },
        props: {
            tag: {
                type: String,
                default: 'td'
            }
        },
        data() {
            return {
                observer: undefined
            };
        },
        async mounted() {
            this.observer = new IntersectionObserver(([entries]) => {
                if (entries.isIntersecting) {
                    this.tableBottomReached();
                }
            });
            this.observe();
        },
        beforeDestroy() {
            this.observer.disconnect();
        },
        methods: {
            observe() {
                if (!this.$refs['infinite-scroll-loader']) {
                    return;
                }
                this.observer.disconnect();
                this.observer.observe(this.$refs['infinite-scroll-loader']);
            },
            tableBottomReached() {
                this.$emit('table-bottom-reached', () => {
                    this.observe();
                });
            }
        }
    };
</script>

<style scoped>
.infinite-scroll-loader {
    box-sizing: border-box;
    height: auto;
    display: flex;
    justify-content: center;
    padding: 5px;
}
</style>
