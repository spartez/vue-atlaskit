<template>
    <Promised v-if="isPromise(value)" :promise="value" :pending-delay="pendingDelay">
        <template slot="combined" slot-scope="{ isPending, isDelayOver, data, error }">
            <VueContentLoader v-if="(isDelayOver && isPending)"
                              :style="{ width: `${width}px`, height: `${height}px` }"
                              :width="width" :height="height"
                              class="content-loader"
                              primary-color="rgba(9, 30, 66, 0.08)"
                              secondary-color="rgba(9, 30, 66, 0.13)" :speed="1">
                <slot name="loader-shape">
                    <rect x="0" y="0"
                          :rx="height/2" :ry="height/2"
                          :width="width" :height="height"/>
                </slot>
            </VueContentLoader>
            <slot v-else-if="error" name="error-message">
                <div class="error-message">
                    {{ error.message }}
                </div>
            </slot>
            <slot v-else :value="data"/>
        </template>
    </Promised>
    <component :is="tag" v-else>
        <slot :value="value"/>
    </component>
</template>

<script>
    import { ContentLoader as VueContentLoader } from 'vue-content-loader';
    import { Promised } from 'vue-promised';
    import { isPromise } from '../../utils/utils';

    export default {
        name: 'ContentLoader',
        components: { Promised, VueContentLoader },
        props: {
            value: {
                type: Promise,
                required: true
            },
            width: {
                type: Number,
                default: 200
            },
            height: {
                type: Number,
                default: 16
            },
            tag: {
                type: String,
                default: 'span'
            },
            pendingDelay: {
                type: Number,
                default: 200
            }
        },
        methods: {
            isPromise(payload) {
                return isPromise(payload);
            }
        }
    };
</script>

<style scoped>
    .content-loader {
        display: block;
    }

    .error-message {
        position: relative;
        padding-left: 24px;
    }

    .error-message::first-letter {
        text-transform: uppercase;
    }

    .error-message::before {
        content: '';
        font-size: 24px;
        color: rgb(191, 38, 0);
        position: absolute;
        left: -2px;
        top: -8px;
    }
</style>
