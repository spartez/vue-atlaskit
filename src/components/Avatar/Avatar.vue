<template>
    <div class="outer" :style="`zIndex: ${zIndex}`">
        <div class="wrapper" :size="size">
            <img v-if="avatar" :src="avatar" alt="avatar">
            <svg v-else viewBox="0 0 128 128" version="1.1"
                 xmlns="http://www.w3.org/2000/svg">
                <g>
                    <circle cx="64" cy="64" r="64"
                            fill="rgb(193, 199, 208)"/>
                    <g>
                        <!--eslint-disable-next-line max-len-->
                        <path d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"/>
                        <!--eslint-disable-next-line max-len-->
                        <path d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"/>
                    </g>
                </g>
            </svg>
            <component :is="presence" v-if="presence" :size="size"
                       class="presence" primary-color="green"/>
        </div>
    </div>
</template>

<script>
    import {
        Online, Busy, Offline, Focus
    } from './PresenceIcons';

    export default {
        name: 'Avatar',
        components: {
            Online, Busy, Offline, Focus
        },
        props: {
            size: {
                type: String,
                default: 'medium'
            },
            presence: {
                type: String,
                default: ''
            },
            avatar: {
                type: String,
                default: ''
            },
            zIndex: {
                type: Number,
                default: 999
            }
        }
    };
</script>

<style scoped>

.outer {
    display: inline-block;
}

.wrapper {
    padding: 2px;
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    background-color: #fff;
    border-radius: 50%;
}

img {
    border-radius: 50%;
    height: 100%;
    width: 100%;
    background: rgba(9, 30, 66, 0.13);
}

.wrapper[size='xxlarge'] {
    height: 132px;
    width: 132px;
}

.wrapper[size='xlarge'] {
    height: 100px;
    width: 100px;
}

.wrapper[size='large'] {
    height: 44px;
    width: 44px;
}

.wrapper[size='medium'] {
    height: 36px;
    width: 36px;
}

.wrapper[size='small'] {
    height: 28px;
    width: 28px;
}

.wrapper[size='xsmall'] {
    height: 20px;
    width: 20px;
}

svg {
    background: transparent;
    border-radius: 50%;
}

g {
    fill: rgb(255, 255, 255);
}

.presence {
    pointer-events: none;
    position: absolute;
}

[size='xxlarge'] .presence, [size='xsmall'] .presence {
    display: none;
}

[size='xlarge'] .presence {
    bottom: 7px;
    right: 7px;
}

[size='large'] .presence {
    bottom: 1px;
    right: 1px;
}

[size='medium'] .presence, [size='small'] .presence {
    bottom: 0;
    right: 0;
}
</style>
