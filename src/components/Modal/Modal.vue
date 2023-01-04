<template>
    <transition name="modal" appear>
        <Blanket class="dialog" :z-index="zIndex">
            <PositionerAbsolute :width="width">
                <form class="modal-container" novalidate @submit.prevent="onSubmit">
                    <slot>
                        <header>
                            <slot name="header">
                                <Header :heading="heading" :appearance="appearance"/>
                            </slot>
                        </header>
                        <div class="content">
                            <slot name="content"/>
                        </div>
                        <footer>
                            <slot name="footer">
                                <slot name="progress"/>
                                <Footer :actions="actions" :auto-focus="autoFocus" :appearance="appearance"
                                        :should-allow-submit="shouldAllowSubmit" :pending="pending" @cancel="onCancel"/>
                            </slot>
                        </footer>
                    </slot>
                </form>
            </PositionerAbsolute>
        </Blanket>
    </transition>
</template>

<script>
    import Blanket from './Blanket';
    import PositionerAbsolute from './PositionerAbsolute';
    import Header from './Header';
    import Footer from './Footer';

    const ESC = 27;
    export default {
        name: 'Modal',
        components: {
            Blanket, PositionerAbsolute, Header, Footer
        },
        props: {
            heading: {
                type: String,
                default: ''
            },
            appearance: {
                type: String,
                default: undefined
            },
            autoFocus: {
                type: Boolean,
                default: false
            },
            actions: {
                type: Array,
                default: () => ['Continue', 'Cancel']
            },
            pending: {
                type: Boolean,
                default: false
            },
            shouldAllowSubmit: {
                type: Boolean,
                default: true
            },
            width: {
                type: String,
                default: '600px'
            },
            zIndex: {
                type: Number,
                default: 999
            },
            closeOnEsc: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                mounted: false
            };
        },
        beforeMount() {
            document.addEventListener('keyup', this.onEsc);
        },
        beforeUnmount() {
            document.removeEventListener('keyup', this.onEsc);
        },
        methods: {
            onEsc(e) {
                if (e.keyCode === ESC && this.closeOnEsc && !this.pending) {
                    this.$emit('cancel');
                }
            },
            onCancel() {
                this.$emit('cancel');
            },
            onSubmit() {
                this.$emit('submit');
            }
        }
    };
</script>

<style scoped>
    .modal-container {
        background-color: var(--ds-surface-overlay, #FFFFFF);
        box-shadow: rgba(9, 30, 66, 0.08) 0 0 0 1px,
        rgba(9, 30, 66, 0.08) 0 2px 1px,
        rgba(9, 30, 66, 0.31) 0 0 20px -6px;
        color: var(--ds-text, #091E42);
        display: flex;
        flex-direction: column;
        max-height: 100%;
        pointer-events: auto;
        border-radius: 3px;
        outline: 0;
        overflow: hidden;
    }

    .content {
        overflow-y: auto;
        overflow-x: hidden;
        flex: 1 1 auto;
        padding: 2px 20px;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .positioner {
        opacity: 0;
        transform: translateY(20px);
    }

    .modal-leave-active .positioner {
        opacity: 0;
        transform: translateY(-20px);
    }

    header, footer {
        align-items: center;
        display: flex;
        z-index: 1;
        box-shadow: none;
        flex: 0 0 auto;
        transition: box-shadow 200ms ease 0s;
        padding: 20px 20px 14px;
    }

    footer {
        justify-content: flex-end;
    }
</style>
