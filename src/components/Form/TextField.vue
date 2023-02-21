<template>
    <div class="input-wrapper" data-cy="input-wrapper" v-bind="$attrs">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'TextField'
    };
</script>

<style scoped>
::v-deep(textarea),
::v-deep(input) {
    background: transparent;
    border: 0;
    color: var(--ds-text, #091E42);
    cursor: inherit;
    font-size: inherit;
    outline: none;
    line-height: inherit;
    width: 100%;
    padding: 6px;
    letter-spacing: inherit;
    box-sizing: border-box;
    margin: 0;
}

.input-wrapper[compact=true] > input,
.input-wrapper[compact=true] > textarea {
    padding: 0;
}

textarea {
    resize: vertical;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgb(122, 134, 154);
}

textarea::-ms-clear,
input::-ms-clear {
    display: none;
}

.input-wrapper {
    align-items: center;
    border: solid 2px var(--ds-border-input, #DFE1E6);
    background-color: var(--ds-background-input, #FAFBFC);
    border-radius: 3px;
    box-sizing: border-box;
    padding: 0;
    color: inherit;
    display: flex;
    flex: 1 0 auto;
    position: relative;
    justify-content: space-between;
    max-width: 100%;
    overflow: hidden;
    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    word-wrap: break-word;
}

.input-wrapper[select=true]:not([is-loading=true]) {
    background-color: var(--ds-background-input, #F4F5F7);
    border-color: var(--ds-border-input, #F4F5F7);
}

.input-wrapper[editable=true]:not([is-focused=true]) {
    border: transparent;
    background-color: inherit;
}

.input-wrapper[should-fit-container] {
    display: flex;
}

.input-wrapper[disabled=true] {
    pointer-events: none;
    background-color: var(--ds-background-disabled, #FAFBFC);
    color: var(--ds-text-disabled, #A5ADBA);
}

.input-wrapper[disabled=true] input::placeholder {
    color: var(--ds-text-disabled, #A5ADBA);
}

.input-wrapper[select=true]:not([is-focused=true]):not([disabled=true]):hover {
    background-color: var(--ds-background-input-hovered, #EBECF0);
    border-color: var(--ds-border, #EBECF0);
    cursor: pointer;
}

.input-wrapper[is-focused=true]:not([disabled=true]):not([is-loading=true]) {
    background-color: var(--ds-background-input-pressed, #FFFFFF);
    border-color: var(--ds-border-focused, #4C9AFF);
}

.input-wrapper[is-invalid=true]:not([disabled=true]):not([is-loading=true]) {
    border-color: var(--ds-background-danger-bold, #DE350B);
    animation: shake .5s linear;
}

.input-wrapper[is-loading=true] {
    background-color: white;
    animation: loading 1s linear infinite;
    background-image: linear-gradient(90deg, rgba(9, 30, 66, 0.08) 30%, rgba(9, 30, 66, 0.16) 50%, rgba(9, 30, 66, 0.08) 70%);
    background-size: 300%;
    background-position: 0% 0%;
}

@keyframes loading {
    0% {
        background-position: 100% 0%;
    }
    100% {
        background-position: 0% 0%;
    }
}

@keyframes shake {
    8%, 41% {
        transform: translateX(-10px);
    }
    25%, 58% {
        transform: translateX(10px);
    }
    75% {
        transform: translateX(-5px);
    }
    92% {
        transform: translateX(5px);
    }
    0%, 100% {
        transform: translateX(0);
    }
}
</style>
