<template>
    <div class="outer">
        <div class="loading-state-switcher">
            <label>
                <input type="checkbox" v-model="isLoading">
                <span>Show Loading State</span>
            </label>
        </div>
        <div class="wrapper">
            <div class="buttons">
                <div v-for="appearance in appearances">
                    <Button :isLoading="isLoading" :key="appearance" :appearance="appearance">
                    {{capitalize(appearance)}}
                </Button>
                </div>
            </div>
            <div class="buttons">
                <div v-for="appearance in appearances">
                    <Button :isLoading="isLoading" :is-disabled="true" :key="appearance" :appearance="appearance">
                        {{capitalize(appearance)}}
                    </Button>
                </div>
            </div>
            <div class="buttons">
                <div v-for="appearance in appearances">
                    <Button :isLoading="isLoading" :is-selected="true" :key="appearance" :appearance="appearance">
                        {{capitalize(appearance)}}
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from '../../src/components/Button/Button'

    export default {
        name: "ButtonAppearance",
        components: { Button },
        data() {
            return {
                appearances: ['default', 'primary', 'link', 'subtle', 'subtle-link', 'warning', 'danger'],
                isLoading: false,
                isSelected: false

            };
        },
        methods: {
            capitalize(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
        },
    }
</script>

<style scoped>
.buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: normal;
}

.buttons >>> button {
    margin-bottom: 10px;
}

.wrapper {
    display: flex;
    max-width: 80%;
    justify-content: space-between;
}

.loading-state-switcher {
    margin-bottom: 10px;
}
</style>
