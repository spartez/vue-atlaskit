<template>
    <Promised v-if="isPromise(value)" :promise="value" :pending-delay="pendingDelay">
        <template slot="combined" slot-scope="{ isPending, isDelayOver, data, error }">
            <ContentLoader v-if="(isDelayOver && isPending)"
                           :width="width" :height="height"
                           :preserve-aspect-ratio="preserveAspectRatio"
                           :view-box="viewBox"
                           class="content-loader"
                           primary-color="rgba(9, 30, 66, 0.08)"
                           secondary-color="rgba(9, 30, 66, 0.13)" :speed="1">
                <slot name="loader-shape">
                    <rect x="0" y="0"
                          :rx="height/2" :ry="height/2"
                          :width="width" :height="height"/>
                </slot>
            </ContentLoader>
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
    import { Promised } from 'vue-promised';
    import ContentLoader from '../ContentLoader/ContentLoader';
    import { isPromise } from '../../utils/utils';

    export default {
        name: 'PromisedContentLoader',
        components: { Promised, ContentLoader },
        props: {
            value: {
                type: Promise,
                required: true
            },
            width: {
                type: String,
                default: '200px'
            },
            height: {
                type: String,
                default: '16px'
            },
            tag: {
                type: String,
                default: 'span'
            },
            pendingDelay: {
                type: Number,
                default: 200
            },
            preserveAspectRatio: {
                type: String,
                default: 'none'
            },
            viewBox: {
                type: String,
                default: undefined
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
