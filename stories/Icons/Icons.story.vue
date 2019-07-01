<template>
    <div>
        <div>
            <label>Size</label>
            <select v-model="size">
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
                <option value="xlarge">xlarge</option>
            </select>
            <button @click="toggleColors">Toggle colors</button>
        </div>
        <p :style="{ color, backgroundColor, fill: backgroundColor, padding: '20px' }">
            <span v-for="(icon, name) in icons">
                <component :is="icon" :size="size" :key="name" secondary-color="inherit" :title="name"/>
            </span>
        </p>
    </div>
</template>

<script>
    import * as IconComponents from '../../src/components/Icon';

    export default {
    name: "Icons.story",
    data() {
        return {
            icons: IconComponents,
            size: 'medium',
            color: undefined,
            backgroundColor: '#fff'
        };
    },
    methods: {
        toggleColors() {
            if (!this.color) {
                this.color = '#ffffff';
                this.backgroundColor = '#0747a6';
            } else {
                this.color = undefined;
                this.backgroundColor = '#fff';
            }
        }
    }
}
</script>

<style scoped>

</style>
