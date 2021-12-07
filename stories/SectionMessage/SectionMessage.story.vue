<template>
    <div>
        <div class="wrapper">
            <SectionMessage title="Message title">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt totam ipsa suscipit corrupti dolorum,
                    dolor sit nihil? Earum ab alias dolorum molestiae porro consectetur deleniti ducimus velit amet a?
                </p>
                <template v-slot:actions>
                    <ul>
                        <li><a href>Help</a></li>
                        <li><a href>Ignore</a></li>
                    </ul>
                </template>
            </SectionMessage>
        </div>
        <div v-for="appearance of appearances" :key="appearance" class="wrapper">
            <SectionMessage :appearance="appearance" :title="appearance">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ab cupiditate ratione voluptatem corporis? Asperiores accusamus tempore porro beatae repudiandae. Odit labore tempore nisi laboriosam repellat facilis aperiam in quos!
                </p>
            </SectionMessage>
        </div>
    </div>
</template>

<script>
    import SectionMessage from '@/components/SectionMessage/SectionMessage';

    export default {
        components: { SectionMessage },
        computed: {
            appearances() {
                return ['info', 'warning', 'error', 'confirmation', 'change'];
            }
        }
    };
</script>

<style scoped>
    .wrapper {
        width: 600px;
        margin-bottom: 20px;
    }
</style>
