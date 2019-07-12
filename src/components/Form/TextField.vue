<template>
    <div class="input-wrapper" v-on="$listeners">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'TextField'
    };
</script>

<style scoped>
textarea,
input {
    background: transparent;
    border: 0;
    color: inherit;
    cursor: inherit;
    font-size: inherit;
    outline: none;
    line-height: inherit;
    width: 100%;
    padding: 0;
    letter-spacing: inherit;
    box-sizing: border-box;
    margin: 0;
}

.input-wrapper[compact] > input,
.input-wrapper[compact] > textarea {
    padding: 0;
}

textarea {
    resize: vertical;
}

textarea,
input ::-ms-clear {
    display: none;
}

textarea,
input ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    opacity: 1;
    color: #7a869a;
}

input::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #7a869a;
}

textarea,
input :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #7a869a;
    opacity: 1;
}

.input-wrapper {
    align-items: center;
    border: solid 2px #dfe1e6;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 6px;
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

.input-wrapper[select]:not([is-loading]) {
    background-color: #F4F5F7;
    border-color: #F4F5F7;
}

.input-wrapper[editable]:not([is-focused]) {
    border: transparent;
    background-color: inherit;
}

.input-wrapper[should-fit-container] {
    display: flex;
}

.input-wrapper[disabled] {
    pointer-events: none;
    background-color: #F4F5F7;
}

.input-wrapper:hover {
    background-color: #ebecf0;
}

.input-wrapper[select]:not([is-focused]):not([disabled]):hover {
    background-color: #ebecf0;
    border-color: #ebecf0;
    cursor: pointer;
}

.input-wrapper[is-focused]:not([disabled]):not([is-loading]) {
    background-color: #ffffff;
    border-color: #4c9aff;
}

.input-wrapper[is-invalid]:not([disabled]):not([is-loading]) {
    border-color: #de350b;
}

.input-wrapper[is-loading] {
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
</style>
