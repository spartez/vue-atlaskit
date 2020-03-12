<template>
    <svg
        style="display: flex"
        :viewBox="viewBox"
        :width="width"
        :height="height"
        version="1.1"
        :preserveAspectRatio="preserveAspectRatio">
        <rect
            :style="fill"
            color="yellow"
            :clip-path="clipPath"
            x="0"
            y="0"
            width="100%"
            height="100%"/>

        <defs>
            <clipPath :id="idClip">
                <rect v-if="!$slots['default']"
                      x="0"
                      y="0"
                      rx="5"
                      ry="5"
                      width="100%"
                      height="100%"/>
                <slot/>
            </clipPath>

            <linearGradient :id="idGradient">
                <stop offset="0%" :stop-color="primaryColor" :stop-opacity="primaryOpacity">
                    <animate v-if="animate"
                             attributeName="offset"
                             values="-2; 1"
                             :dur="speed"
                             repeatCount="indefinite"/>
                </stop>
                <stop offset="50%" :stop-color="secondaryColor" :stop-opacity="secondaryOpacity">
                    <animate v-if="animate"
                             attributeName="offset"
                             values="-1.5; 1.5"
                             :dur="speed"
                             repeatCount="indefinite"/>
                </stop>
                <stop offset="100%" :stop-color="primaryColor" :stop-opacity="primaryOpacity">
                    <animate v-if="animate"
                             attributeName="offset"
                             values="-1; 2"
                             :dur="speed"
                             repeatCount="indefinite"/>
                </stop>
            </linearGradient>
        </defs>
    </svg>
</template>

<script>
    const uid = () => Math.random().toString(36).substring(2);

    export default {
        name: 'ContentLoader',
        props: {
            speed: {
                type: Number,
                default: 2
            },
            preserveAspectRatio: {
                type: String,
                default: 'xMinYMax meet'
            },
            baseUrl: {
                type: String,
                default: ''
            },
            primaryColor: {
                type: String,
                default: '#f9f9f9'
            },
            secondaryColor: {
                type: String,
                default: '#ecebeb'
            },
            primaryOpacity: {
                type: Number,
                default: 1
            },
            secondaryOpacity: {
                type: Number,
                default: 1
            },
            uniqueKey: {
                type: String
            },
            animate: {
                type: Boolean,
                default: true
            },
            viewBox: {
                type: String,
                default: undefined
            },
            width: {
                type: String,
                default: '300px'
            },
            height: {
                type: String,
                default: '20px'
            }
        },

        computed: {
            fill() {
                return { fill: `url(${this.baseUrl}#${this.idGradient})` };
            },
            idClip() {
                return this.uniqueKey ? `${this.uniqueKey}-idClip` : uid();
            },
            idGradient() {
                return this.uniqueKey ? `${this.uniqueKey}-idGradient` : uid();
            },
            clipPath() {
                return `url(${this.baseUrl}#${this.idClip})`;
            }
        }
    };
</script>
