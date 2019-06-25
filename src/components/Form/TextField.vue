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
    padding: 6px;
    width: 100%;
    letter-spacing: inherit;
    box-sizing: border-box;
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
    color: #091E42;
    display: flex;
    flex: 1 0 auto;
    justify-content: space-between;
    max-width: 100%;
    overflow: hidden;
    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    word-wrap: break-word;
    background-color: #fafbfc;
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

.input-wrapper[is-focused] {
    background-color: #ffffff;
    border-color: #4c9aff;
}

.input-wrapper:not([is-focused])[is-invalid] {
    border-color: #de350b;
}
</style>
