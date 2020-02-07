<template>
    <div>
        <h3>Simple inline dialog</h3>
        <p>
            <InlineDialog>
                <template v-slot:trigger="{ toggle }">
                    <a href @click.prevent="toggle">Click me!</a>
                </template>
                <div class="content">
                    <p>Inline dialog content</p>
                </div>
            </InlineDialog>
        </p>
        <h3>Scrolled content</h3>
        <p>
            <InlineDialog>
                <template v-slot:trigger="{ toggle }">
                    <a href @click.prevent="toggle">Click me!</a>
                </template>
                <div class="content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium libero provident consectetur reprehenderit vero minima
                        repudiandae atque fugiat natus necessitatibus optio architecto expedita labore totam maiores molestias facere, voluptas aut?
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptatum tenetur soluta nemo! Modi magnam ea
                        eligendi magni cupiditate, labore ipsum nesciunt ab, cum, enim fuga sed quae nihil. Sed.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sint vero, maxime hic optio molestiae! Libero beatae
                        voluptatum atque illo ex, rem accusamus officiis nobis impedit nam quae ipsa harum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora rerum illo non maxime illum, distinctio necessitatibus
                        tenetur pariatur voluptatem minus hic vero autem natus molestias culpa asperiores perferendis numquam ut?
                    </p>
                </div>
            </InlineDialog>
        </p>
    </div>
</template>

<script>
    import InlineDialog from '@/components/InlineDialog/InlineDialog';

    export default {
        name: 'DropdownStory',
        components: {
            InlineDialog
        }
    };
</script>

<style scoped>
    .custom-trigger {
        font-size: 20px;
        cursor: pointer;
    }

    .content {
        padding: 10px;
    }
</style>
