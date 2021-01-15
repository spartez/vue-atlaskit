<template>
    <div class="image-container" :loading="isLoading">
        <img v-if="url"
             class="image"
             :src="url"
             alt="attached image"
             :height="height"
             :width="width">
        <div v-else class="placeholder" :style="{ width: `${placeholderSize}px`, height: `${placeholderSize}px` }"/>
        <div v-if="showActions && (url || $slots.actions)" class="actions">
            <a v-if="url && zoomable" :href="url" target="_blank">
                <Button class="action-button" appearance="subtle">
                    <SearchIcon/>
                </Button>
            </a>
            <slot name="actions"/>
        </div>
    </div>
</template>

<script>
    import Button from '../Button/Button';
    import SearchIcon from '../Icon/SearchIcon';

    export default {
        name: 'ImageRenderer',
        components: { Button, SearchIcon },
        props: {
            url: {
                type: String,
                default: undefined
            },
            height: {
                type: [Number, String],
                default: 24
            },
            width: {
                type: [Number, String],
                default: 24
            },
            showActions: {
                type: Boolean,
                default: false
            },
            zoomable: {
                type: Boolean,
                default: true
            },
            isLoading: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            placeholderSize() {
                const height = +this.height || Number.POSITIVE_INFINITY;
                const width = +this.width || Number.POSITIVE_INFINITY;
                const size = Math.min(width, height) || 100;
                return size;
            }
        }
    };
</script>

<style scoped>
    .image-container {
        display: inline-flex;
        position: relative;
    }

    .image {
        border-radius: 3px;
        display: inline-flex;
        object-fit: scale-down;
        transition: opacity 0.25s;
        max-width: 100%;
    }

    .image-container::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        border-radius: 3px;
        animation: loading 1s infinite;
        background-image: linear-gradient(90deg, rgba(9, 30, 66, 0.08) 30%, rgba(9, 30, 66, 0.16) 50%, rgba(9, 30, 66, 0.08) 70%);
        background-size: 300%;
        background-position: 0% 0%;
        pointer-events: none;
        transition: opacity 0.25s;
    }

    .placeholder {
        border-radius: 3px;
        background: rgba(9, 30, 66, 0.08);
    }

    .image-container[loading=true]::after {
        opacity: 1;
    }

    .image-container[loading=true] .image {
        opacity: .5;
    }

    .actions {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: rgba(9, 30, 66, 0.36);
        transition: opacity .25s;
        color: white;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
    }

    .image-container:hover .actions {
        opacity: 1;
    }

    .image-container[loading=true] .actions {
        display: none;
    }

    .actions >>> button[appearance="subtle"] {
        color: white;
    }

    .actions >>> button[appearance="subtle"]:not([selected=true]):not([disabled=true]):active {
        color: white;
    }

    .actions >>> button[appearance="subtle"] {
        height: 36px;
    }

    .actions >>> button[appearance="subtle"] .wrapper {
        padding: 0 2px;
    }

    @keyframes loading {
        0% {
            background-position: 100% 0%;
        }
        100% {
            background-position: 0% 0%;
        }
    }
</style>
