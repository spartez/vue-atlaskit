<template>
    <div class="breadcrumb" :with-icon="$slots.icon">
        <span class="item">
            <slot name="icon"/>
            <slot name="link">
                <a :href="link" :target="target">{{ text }}</a>
            </slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'BreadcrumbItem',
        props: {
            link: {
                type: String,
                default: '#'
            },
            text: {
                type: String,
                default: ''
            },
            target: {
                type: String,
                default: '_self'
            }
        }
    };
</script>

<style scoped>
.breadcrumb {
    min-width: 50px;
    display: flex;
    align-items: center;
    flex-shrink: 9999;
    transition: all linear 0.2s;
}

.breadcrumb[with-icon] {
    min-width: 60px;
}

.breadcrumb:hover {
    flex: 1 0 auto;
    opacity: 1;
    transition: all linear 0.2s;
}

.breadcrumb:first-of-type {
    flex-shrink: 0;
}

.breadcrumb:last-of-type {
    flex-shrink: 2;
}

.item {
    display: flex;
    min-width: 0;
    align-items: center;
}

.item >>> a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgb(107, 119, 140);
    margin-left: 5px;
    display: block;
}

.breadcrumb:after {
    display: inline-block;
    content: '/';
    color: rgb(122, 134, 154);
    flex-shrink: 0;
    text-align: center;
    margin: 0px 6px;
    width: 8px;
}

.breadcrumb:last-of-type:after {
    content: none;
}

.breadcrumb:last-child {
    flex: 0 1 auto;
}
</style>
