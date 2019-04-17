<template>
    <div class="spinner" :size="size">
        <svg focusable="false"
             :size="dimensions.px"
             :height="dimensions.px"
             :width="dimensions.px"
             :viewBox="`0 0 ${dimensions.px} ${dimensions.px}`">
            <circle :cx="origin" :cy="origin" :r="dimensions.radius"/>
        </svg>
    </div>
</template>

<script>
    export default {
        props: {
            size: {
                type: String,
                default: 'medium'
            }
        },
        computed: {
            dimensions() {
                switch (this.size) {
                    case 'icon':
                        return {
                            px: 14,
                            radius: 5
                        };
                    case 'small':
                        return {
                            px: 20,
                            radius: 9
                        };
                    case 'medium':
                        return {
                            px: 30,
                            radius: 13.5
                        };
                    case 'large':
                        return {
                            px: 50,
                            radius: 22.5
                        };
                    default:
                        return {
                            name: 'medium',
                            px: 30,
                            radius: 13.5
                        };
                }
            },
            origin() {
                return this.dimensions.px / 2;
            }
        }
    };
</script>

<style scoped>
.spinner {
    box-sizing: border-box;
    position: relative;
    width: 30px;
    height: 30px;
    color: #42526e;
    display: inline-block;
    z-index: 2000000000;
}

.spinner[size="small"] {
    width: 20px;
    height: 20px;
}

.spinner[size="large"] {
    width: 50px;
    height: 50px;
}

.spinner[size="icon"] {
    width: 16px;
    height: 16px;
    vertical-align: text-top;
}

.spinner[size="small"] svg {
    stroke-dasharray: 56px;
    stroke-dashoffset: 45px;
    stroke-width: 2px;
}

.spinner[size="large"] svg {
    stroke-dasharray: 140px;
    stroke-dashoffset: 112.5px;
    stroke-width: 5px;
}

.spinner[size="icon"] svg {
    top: 1px;
    left: 1px;
    stroke-width: 2px;
}

svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    animation: 0.86s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite spinnerRotateAnimation;
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    transform-origin: center;
    stroke-dasharray: 84px;
    stroke-dashoffset: 67.5px;
    stroke-width: 3px;
}

@keyframes spinnerRotateAnimation {
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
