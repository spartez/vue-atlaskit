<template>
    <transition name="fade-in" mode="out-in">
        <div v-if="hasMessage" ref="message" class="spotlight-message">
            <CrossIcon class="close-icon" :primary-color="color" size="small"
                       @click.native="onClose"
                       @mouseenter.native="onEnter"
                       @mouseleave.native="onLeave"/>
            <div ref="content" class="content">
                <slot/>
            </div>
            <div class="footer">
                <div class="count">
                    {{ step }}/{{ total }}
                </div>
                <div class="buttons">
                    <button v-if="step !== 1" ref="prev" @click="prev">
                        Prev
                    </button>
                    <button ref="next" @click="next">
                        {{ lastStep ? 'Finish' : 'Next' }}
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import Popper from 'popper.js';
    import { CrossIcon } from '../Icon';

    export default {
        name: 'SpotlightHint',
        components: {
            CrossIcon
        },
        props: {
            targetElement: {
                type: HTMLElement,
                required: true
            },
            step: {
                type: Number,
                required: true
            },
            total: {
                type: Number,
                required: true
            },
            placement: {
                type: String,
                default: 'right-start'
            },
            offset: {
                type: String,
                default: '-2,10'
            }
        },
        data() {
            return {
                popper: undefined,
                color: '#fff'
            };
        },
        computed: {
            hasMessage() {
                return this.$slots.default;
            },
            lastStep() {
                return this.step === this.total;
            }
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
            prev() {
                this.$emit('prev');
            },
            next() {
                this.$emit('next');
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
        padding: 25px 40px 20px 20px;
    }

    .spotlight-message > * {

    }

    .content {
        margin-bottom: 16px;
    }

    .footer {
        display: flex;
        align-items: center;
    }

    .buttons {
        margin-left: auto;
    }

    button {
        padding: 6px 16px;
        background-color: #523FAD;
        outline: none;
        border: none;
        color: #fff;
        font-size: 14px;
        line-height: 24px;
        border-radius: 3px;
        font-weight: 600;
        cursor: pointer;
    }

    .fade-in-enter-active, .fade-in-leave-active {
        transition: opacity .1s ease-out;
    }

    .fade-in-enter, .fade-in-leave-to {
        opacity: 0;
    }

    button:focus {
        box-shadow: #998DD9 0 0 0 2px;
    }

    .content h4 {
        color: #FFF;
    }

    .close-icon {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 50%);
    }

    .close-icon:hover {
        transition: all ease-in-out 0.2s;
        cursor: pointer;
    }
</style>
