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
    color: inherit;
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

textarea::-ms-clear,
input::-ms-clear {
    display: none;
}

textarea::-moz-placeholder,
input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    opacity: 1;
    color: #7a869a;
}

input::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #7a869a;
}

textarea:-moz-placeholder,
input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #7a869a;
    opacity: 1;
}

.input-wrapper {
    align-items: center;
    border: solid 2px #dfe1e6;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 0;
    color: #091E42;
    display: flex;
    flex: 1 0 auto;
    position: relative;
    justify-content: space-between;
    max-width: 100%;
    overflow: hidden;
    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    word-wrap: break-word;
    background-color: #fafbfc;
}

.input-wrapper[select=true]:not([is-loading=true]) {
    background-color: #F4F5F7;
    border-color: #F4F5F7;
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
    background-color: #F4F5F7;
}

.input-wrapper:hover {
    background-color: #ebecf0;
}

.input-wrapper[select=true]:not([is-focused=true]):not([disabled=true]):hover {
    background-color: #ebecf0;
    border-color: #ebecf0;
    cursor: pointer;
}

.input-wrapper[is-focused=true]:not([disabled=true]):not([is-loading=true]) {
    background-color: #ffffff;
    border-color: #4c9aff;
}

.input-wrapper[is-invalid=true]:not([disabled=true]):not([is-loading=true]) {
    border-color: #de350b;
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
