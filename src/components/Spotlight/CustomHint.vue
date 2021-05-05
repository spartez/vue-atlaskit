<template>
    <transition name="fade-in" mode="out-in">
        <div ref="message" class="spotlight-message">
            <header class="header">
                <h4 class="title">
                    <span>{{ title }}</span>
                </h4>
                <CrossIcon class="close-icon" :primary-color="color" size="small"
                           @click.native="onClose"
                           @mouseenter.native="onEnter"
                           @mouseleave.native="onLeave"/>
            </header>
            <div ref="content" class="content">
                <slot/>
            </div>
        </div>
    </transition>
</template>

<script>
    import Popper from 'popper.js';
    import { CrossIcon } from '../Icon';

    export default {
        name: 'CustomHint',
        components: {
            CrossIcon
        },
        props: {
            targetElement: {
                type: HTMLElement,
                required: true
            },
            placement: {
                type: String,
                default: 'right-start'
            },
            offset: {
                type: String,
                default: '-2,10'
            },
            title: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                popper: undefined,
                color: '#fff'
            };
        },
        mounted() {
            if (this.hasMessage) {
                document.body.appendChild(this.$refs.message);
            }
            this.initPopper();
            if (this.$refs.next) this.$refs.next.focus();
        },
        updated() {
            if (!this.popper) {
                this.popper.destroy();
            }
            this.initPopper();
        },
        methods: {
            initPopper() {
                if (!this.$refs.message) return;
                this.popper = new Popper(this.targetElement, this.$refs.message, {
                    placement: this.placement,
                    modifiers: {
                        offset: { offset: this.offset },
                        preventOverflow: {
                            boundariesElement: document.body
                        }
                    }
                });
            },
            onEnter() {
                this.color = '#998DD9';
            },
            onLeave() {
                this.color = '#fff';
            },
            onClose() {
                this.$emit('close');
            }
        }
    };
</script>

<style scoped>

    .spotlight-message {
        z-index: 9999999;
        color: rgb(255, 255, 255);
        max-width: 330px;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
        opacity: 1;
        background: rgb(101, 84, 192);
        overflow: auto;
        border-radius: 3px;
        padding: 15px 15px 20px 20px;
    }

    .header {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
    }

    .title {
        flex: 1 1 0;
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .close-icon {
        margin: 0 8px;
        flex: 0 0 auto;
        vertical-align: middle;
    }

    .fade-in-enter-active, .fade-in-leave-active {
        transition: opacity .1s ease-out;
    }

    .fade-in-enter, .fade-in-leave-to {
        opacity: 0;
    }

    .content {
        margin-right: 30px;
        color: #FFF;
    }

    .close-icon:hover {
        transition: all ease-in-out 0.2s;
        cursor: pointer;
    }
</style>
